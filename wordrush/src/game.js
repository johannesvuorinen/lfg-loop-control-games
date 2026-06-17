// WORD RUSH — renderer / glue layer.
// Wires the pure engine (engine.js) to three.js rendering, keyboard input,
// the HUD overlay, particles and juice. Exposes a tiny API on window for the
// headless test harness to poke at.

import {
  Scene, OrthographicCamera, WebGLRenderer, Color,
} from 'three';

import {
  createGame, typeChar, backspace, update, activeWord, wpm, accuracy, GAME,
} from './engine.js';
import { WordSprite } from './textsprite.js';
import { createStarfield } from './starfield.js';
import { ParticleSystem } from './particles.js';

const HIGHSCORE_KEY = 'wordrush.highscore';

// ---- logical field -> world mapping ---------------------------------------
// We use an orthographic camera spanning the logical 0..100 field with a fixed
// aspect; the canvas is letterboxed by CSS. Word x in [0,100] maps to world x
// in [-FIELD_W/2, +FIELD_W/2]; y in [0,100] maps to [-FIELD_H/2, +FIELD_H/2].
const FIELD_W = 100;
const FIELD_H = 100;
function worldX(lx) { return lx - FIELD_W / 2; }
function worldY(ly) { return ly - FIELD_H / 2; }

export class WordRushGame {
  constructor(canvas, hud) {
    this.canvas = canvas;
    this.hud = hud;
    this.sprites = new Map(); // engine word id -> WordSprite

    // three.js core
    this.renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false });
    this.renderer.setClearColor(new Color('#05060f'), 1);
    this.scene = new Scene();
    this.camera = new OrthographicCamera(
      -FIELD_W / 2, FIELD_W / 2, FIELD_H / 2, -FIELD_H / 2, -100, 100,
    );
    this.camera.position.z = 10;

    this.starfield = createStarfield();
    this.scene.add(this.starfield.mesh);
    this.particles = new ParticleSystem(this.scene);

    this.shake = 0;       // screen-shake magnitude (decays)
    this.flash = 0;       // red damage flash 0..1
    this.time = 0;
    this.running = false;
    this.paused = false;
    this.lastTs = 0;

    this.game = null;
    this.loadHighScore();
    this._onResize = () => this.resize();
    window.addEventListener('resize', this._onResize);
    this.resize();

    this._bindInput();
  }

  loadHighScore() {
    let hs = 0;
    try { hs = parseInt(localStorage.getItem(HIGHSCORE_KEY) || '0', 10) || 0; }
    catch { hs = 0; }
    this.highScore = hs;
  }
  saveHighScore() {
    try { localStorage.setItem(HIGHSCORE_KEY, String(this.highScore)); } catch {}
  }

  resize() {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(w, h, false);
    this.starfield.mat.uniforms.uRes.value.set(w * dpr, h * dpr);

    // Keep the field fully visible: fit FIELD into the canvas aspect by
    // widening the orthographic frustum on the larger axis (contain).
    const aspect = w / h;
    let halfW = FIELD_W / 2, halfH = FIELD_H / 2;
    if (aspect >= 1) halfW = halfH * aspect; else halfH = halfW / aspect;
    this.camera.left = -halfW; this.camera.right = halfW;
    this.camera.top = halfH; this.camera.bottom = -halfH;
    this.camera.updateProjectionMatrix();
  }

  // ---- lifecycle ----------------------------------------------------------
  start() {
    // tear down any prior sprites
    for (const s of this.sprites.values()) { this.scene.remove(s.sprite); s.dispose(); }
    this.sprites.clear();

    this.game = createGame({ highScore: this.highScore });
    this.game.spawnTimer = 0.6; // first word soon
    this.running = true;
    this.paused = false;
    this.hud.setState('playing');
    if (!this._raf) {
      this.lastTs = performance.now();
      this._raf = requestAnimationFrame((t) => this._loop(t));
    }
  }

  togglePause() {
    if (!this.running) return;
    this.paused = !this.paused;
    this.hud.setState(this.paused ? 'paused' : 'playing');
  }

  // ---- input --------------------------------------------------------------
  _bindInput() {
    this._keyHandler = (e) => this.onKey(e);
    window.addEventListener('keydown', this._keyHandler);
  }

  // Single, tiny entry point for ALL typed input. This is the whole keyboard
  // capture path — see NOTES.md.
  onKey(e) {
    const k = e.key;
    // Start / restart on Enter from menu or game-over.
    if (k === 'Enter') {
      if (!this.running || (this.game && this.game.over)) { e.preventDefault(); this.start(); return; }
    }
    if (k === 'Escape' || k === 'p' || k === 'P') {
      if (this.running && this.game && !this.game.over) { e.preventDefault(); this.togglePause(); return; }
    }
    if (!this.running || this.paused || !this.game || this.game.over) return;

    if (k === 'Backspace') { e.preventDefault(); backspace(this.game); this.syncActiveSprite(); return; }
    if (k.length === 1) {
      const ch = k.toLowerCase();
      if (ch >= 'a' && ch <= 'z') {
        e.preventDefault();
        const before = this.game.score;
        const ev = typeChar(this.game, ch);
        this.onTypeEvent(ev, before);
      }
    }
  }

  onTypeEvent(ev, scoreBefore) {
    const g = this.game;
    if (ev === 'miss') {
      this.shake = Math.min(this.shake + 0.4, 2.5);
      this.hud.pulseBuffer('miss');
    } else if (ev === 'complete' || ev === 'levelup') {
      // celebrate at the cleared word's last known position: we removed it, so
      // burst from the active sprite we are about to drop.
      this.flash = 0; // no damage
      this.hud.pulseBuffer('complete');
      if (ev === 'levelup') this.starfield.mat.uniforms.uIntensity.value = Math.min(1.2, 0.15 * g.level);
    } else if (ev === 'progress' && g.justLocked) {
      this.hud.pulseBuffer('lock');
    }
    this.syncActiveSprite();
  }

  // Burst particles for a just-completed word using a stored screen pos.
  burstAt(lx, ly, color, count, power) {
    this.particles.burst(worldX(lx), worldY(ly), color, count, power);
  }

  // Make the active word's sprite reflect typed progress immediately.
  syncActiveSprite() {
    const aw = activeWord(this.game);
    for (const [id, s] of this.sprites) {
      const active = aw && aw.id === id;
      s.refresh(active ? this.game.typed.length : 0, !!active);
    }
  }

  // ---- main loop ----------------------------------------------------------
  _loop(ts) {
    this._raf = requestAnimationFrame((t) => this._loop(t));
    let dt = (ts - this.lastTs) / 1000;
    this.lastTs = ts;
    if (dt > 0.1) dt = 0.1; // clamp big stalls
    this.time += dt;
    this.starfield.mat.uniforms.uTime.value = this.time;

    if (this.running && !this.paused && this.game && !this.game.over) {
      this.step(dt);
    }
    this.particles.update(dt);
    this.render(dt);
  }

  // Advance one simulation step and reconcile sprites + juice.
  step(dt) {
    const g = this.game;
    // snapshot positions of words that may complete-by-typing handled already.
    const events = update(g, dt);

    // Add/remove sprites to match engine words.
    const live = new Set();
    const aw = activeWord(g);
    for (const w of g.words) {
      live.add(w.id);
      let s = this.sprites.get(w.id);
      if (!s) {
        s = new WordSprite(w.text);
        this.scene.add(s.sprite);
        this.sprites.set(w.id, s);
      }
      const active = aw && aw.id === w.id;
      s.refresh(active ? g.typed.length : 0, !!active);
      s.setWorldPosition(worldX(w.x), worldY(w.y));
      // danger tint as it nears the bottom: nudge via small scale pulse
      if (w.y < 18) {
        const pulse = 1 + 0.06 * Math.sin(this.time * 12);
        s.sprite.scale.set(s.worldHeight * s.aspect * pulse, s.worldHeight * pulse, 1);
      }
    }
    // Remove sprites for words that completed by TYPING this frame (not dropped):
    for (const [id, s] of this.sprites) {
      if (!live.has(id)) {
        // burst at its last position
        const pos = s.sprite.position;
        const completed = !events.includes('gameover'); // any removal
        this.particles.burst(pos.x, pos.y, '#5ef0a0', 22, 1.1);
        this.scene.remove(s.sprite);
        s.dispose();
        this.sprites.delete(id);
      }
    }

    // Drops -> damage juice.
    for (const ev of events) {
      if (ev === 'drop') {
        this.shake = Math.min(this.shake + 1.6, 3.5);
        this.flash = 1;
        this.hud.pulseLives();
      }
      if (ev === 'gameover') {
        this.endGame();
      }
    }

    this.updateHud();
  }

  endGame() {
    if (this.game.score > this.highScore) {
      this.highScore = this.game.score;
      this.saveHighScore();
    }
    this.hud.showGameOver(this.game, this.highScore);
  }

  updateHud() {
    const g = this.game;
    const aw = activeWord(g);
    this.hud.update({
      score: g.score,
      lives: g.lives,
      level: g.level,
      wpm: wpm(g),
      accuracy: accuracy(g),
      combo: g.combo,
      typed: g.typed,
      target: aw ? aw.text : null,
      highScore: Math.max(this.highScore, g.score),
    });
  }

  render(dt) {
    // decay juice
    this.shake = Math.max(0, this.shake - dt * 4);
    this.flash = Math.max(0, this.flash - dt * 2.5);

    // apply screen shake by jittering the camera
    const s = this.shake;
    this.camera.position.x = (Math.random() - 0.5) * s;
    this.camera.position.y = (Math.random() - 0.5) * s;

    // damage flash via DOM overlay (cheap, no extra geometry)
    if (this.hud.flashEl) this.hud.flashEl.style.opacity = String(this.flash * 0.5);

    this.renderer.render(this.scene, this.camera);
  }

  // ---- test/automation hooks ---------------------------------------------
  // Lets a headless harness drive typing without synthesizing DOM key events
  // (though those work too via onKey). Returns the engine event.
  _typeForTest(ch) {
    if (!this.game) return 'no-game';
    return typeChar(this.game, ch);
  }
  _state() {
    const g = this.game;
    if (!g) return null;
    return {
      score: g.score, lives: g.lives, level: g.level, over: g.over,
      words: g.words.map((w) => ({ text: w.text, y: w.y, id: w.id })),
      typed: g.typed, activeId: g.activeId, cleared: g.cleared,
    };
  }

  dispose() {
    cancelAnimationFrame(this._raf);
    window.removeEventListener('keydown', this._keyHandler);
    window.removeEventListener('resize', this._onResize);
  }
}
