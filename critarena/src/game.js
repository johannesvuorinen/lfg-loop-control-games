// CRIT ARENA — rendering & glue. Owns the three.js scene, the camera, input, the
// fixed-timestep game loop, and wires the pure logic modules to the screen-space
// overlay. All game RULES live in src/logic/*; this file turns them into pixels.

import * as THREE from 'three';
import {
  projectToScreen,
  clampToEdge,
} from './logic/projection.js';
import {
  makeRng,
  rollDamage,
  applyDamage,
  scoreForKill,
  DEFAULT_WEAPON,
} from './logic/combat.js';
import {
  buildWave,
  enemyStatsForWave,
  stepEnemy,
  nearestEnemy,
} from './logic/waves.js';
import { DamageNumbers, OffscreenArrows } from './overlay.js';

const ARENA_RADIUS = 30;
const PLAYER_SPEED = 14;          // world units / sec
const PLAYER_MAX_HP = 100;
const PLAYER_RADIUS = 0.9;
const ENEMY_RADIUS = 0.9;
const FIRE_INTERVAL = 0.22;       // seconds between auto-shots
const BULLET_SPEED = 60;
const TOUCH_TICK = 0.6;           // seconds between contact-damage ticks

export class Game {
  /** @param {{ canvas:HTMLCanvasElement, hud:object, overlayLayer:HTMLElement, seed?:number }} opts */
  constructor({ canvas, hud, overlayLayer, seed = (Date.now() & 0xffff) || 1 }) {
    this.canvas = canvas;
    this.hud = hud;
    this.rng = makeRng(seed);

    // ---- renderer ----
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // ---- scene + camera (top-down, slightly angled so depth reads) ----
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0c16);
    this.scene.fog = new THREE.Fog(0x0a0c16, 55, 90);

    this.camera = new THREE.PerspectiveCamera(55, 1, 0.1, 500);
    this.cameraOffset = new THREE.Vector3(0, 46, 26); // above & behind
    this.camera.position.copy(this.cameraOffset);
    this.camera.lookAt(0, 0, 0);

    this._buildLights();
    this._buildArena();

    // ---- player ----
    this.player = this._makePlayer();
    this.scene.add(this.player.mesh);
    this.playerHP = PLAYER_MAX_HP;

    // ---- pools / state ----
    this.enemies = [];
    this.bullets = [];
    this._enemyId = 1;
    this.score = 0;
    this.wave = 0;
    this.fireCooldown = 0;
    this.state = 'ready'; // ready -> playing -> dead
    this.pendingSpawns = [];
    this.spawnTimer = 0;
    this.waveClearGrace = 0;

    // ---- overlays ----
    this.damageNumbers = new DamageNumbers(overlayLayer);
    this.arrows = new OffscreenArrows(overlayLayer);

    // ---- input ----
    this.keys = new Set();
    this.pointer = new THREE.Vector2(0, 0);   // NDC
    this.pointerActive = false;
    this.aimWorld = new THREE.Vector3();       // where the mouse points on the ground
    this._raycaster = new THREE.Raycaster();
    this._groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this._bindInput();

    // reusable temporaries (avoid per-frame allocations)
    this._vp = new THREE.Matrix4();
    this._tmpV = new THREE.Vector3();

    this._onResize();
    window.addEventListener('resize', () => this._onResize());

    this._last = performance.now();
    this._accum = 0;
    this._loop = this._loop.bind(this);
  }

  // ----------------------------------------------------------------- scene build
  _buildLights() {
    this.scene.add(new THREE.AmbientLight(0x404a6b, 1.4));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(20, 50, 18);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    const s = 45;
    key.shadow.camera.left = -s; key.shadow.camera.right = s;
    key.shadow.camera.top = s; key.shadow.camera.bottom = -s;
    key.shadow.camera.near = 1; key.shadow.camera.far = 120;
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0x4466ff, 0.8);
    rim.position.set(-25, 20, -25);
    this.scene.add(rim);
  }

  _buildArena() {
    // Floor disc with a grid for spatial reference.
    const floorGeo = new THREE.CircleGeometry(ARENA_RADIUS + 4, 64);
    floorGeo.rotateX(-Math.PI / 2);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x141a2e, roughness: 0.95, metalness: 0.0 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.receiveShadow = true;
    this.scene.add(floor);

    const grid = new THREE.GridHelper(ARENA_RADIUS * 2, 24, 0x2b3a66, 0x1c2748);
    grid.position.y = 0.02;
    this.scene.add(grid);

    // Arena boundary ring.
    const ringGeo = new THREE.TorusGeometry(ARENA_RADIUS, 0.35, 12, 96);
    ringGeo.rotateX(Math.PI / 2);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0x3355ff, emissive: 0x1b2cff, emissiveIntensity: 0.6, roughness: 0.4 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.y = 0.4;
    this.scene.add(ring);
  }

  _makePlayer() {
    const group = new THREE.Group();
    const bodyGeo = new THREE.CapsuleGeometry(0.6, 0.9, 6, 12);
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x46e6c8, emissive: 0x0c3b34, roughness: 0.45, metalness: 0.1 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 1.0;
    body.castShadow = true;
    group.add(body);
    // facing indicator (a little barrel)
    const barrel = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.28, 1.2),
      new THREE.MeshStandardMaterial({ color: 0xeafff9, emissive: 0x2a6f63, roughness: 0.3 })
    );
    barrel.position.set(0, 1.0, 0.9);
    barrel.castShadow = true;
    group.add(barrel);
    group.position.set(0, 0, 0);
    return { mesh: group, barrel, pos: new THREE.Vector3(0, 0, 0), facing: new THREE.Vector3(0, 0, 1) };
  }

  _makeEnemyMesh(stats) {
    const hueT = Math.min(1, (stats.maxHealth - 40) / 120);
    const color = new THREE.Color().setHSL(0.02 + hueT * 0.03, 0.85, 0.55 - hueT * 0.1);
    const geo = new THREE.IcosahedronGeometry(0.95, 0);
    const mat = new THREE.MeshStandardMaterial({
      color, emissive: color.clone().multiplyScalar(0.25), roughness: 0.5, metalness: 0.1, flatShading: true,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = 1.0;
    mesh.castShadow = true;
    const group = new THREE.Group();
    group.add(mesh);
    return group;
  }

  // ---------------------------------------------------------------------- input
  _bindInput() {
    window.addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k)) e.preventDefault();
      this.keys.add(k);
      if (this.state !== 'playing' && (k === ' ' || k === 'enter')) this.start();
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.key.toLowerCase()));

    const rect = () => this.canvas.getBoundingClientRect();
    window.addEventListener('mousemove', (e) => {
      const r = rect();
      this.pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      this.pointer.y = -((e.clientY - r.top) / r.height) * 2 + 1;
      this.pointerActive = true;
    });
    // Touch aim (basic): drag to aim.
    window.addEventListener('touchmove', (e) => {
      if (!e.touches[0]) return;
      const r = rect();
      this.pointer.x = ((e.touches[0].clientX - r.left) / r.width) * 2 - 1;
      this.pointer.y = -((e.touches[0].clientY - r.top) / r.height) * 2 + 1;
      this.pointerActive = true;
    }, { passive: true });
  }

  _onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.width = w; this.height = h;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  // ------------------------------------------------------------------- lifecycle
  start() {
    // reset
    for (const e of this.enemies) this.scene.remove(e.mesh);
    for (const b of this.bullets) this.scene.remove(b.mesh);
    this.enemies.length = 0;
    this.bullets.length = 0;
    this.damageNumbers.clear();
    this.arrows.clear();
    this.player.pos.set(0, 0, 0);
    this.player.mesh.position.set(0, 0, 0);
    this.playerHP = PLAYER_MAX_HP;
    this.score = 0;
    this.wave = 0;
    this.fireCooldown = 0;
    this.pendingSpawns = [];
    this.spawnTimer = 0;
    this.waveClearGrace = 0;
    this.state = 'playing';
    this._startWave(1);
    this._syncHud();
    if (this.hud.setOverlay) this.hud.setOverlay(null);
  }

  run() {
    requestAnimationFrame(this._loop);
  }

  _startWave(n) {
    this.wave = n;
    const w = buildWave(n, { radius: ARENA_RADIUS - 3, center: { x: 0, y: 0, z: 0 }, rng: this.rng });
    // stagger the spawns over time so they don't all pop at once
    this.pendingSpawns = w.spawns.map((p, i) => ({ pos: p, at: i * 0.18, stats: w.stats }));
    this.spawnTimer = 0;
    if (this.hud.announce) this.hud.announce(`WAVE ${n}`);
  }

  // ------------------------------------------------------------------- main loop
  _loop(now) {
    requestAnimationFrame(this._loop);
    let dt = (now - this._last) / 1000;
    this._last = now;
    if (dt > 0.1) dt = 0.1; // clamp big stalls (tab switch)

    if (this.state === 'playing') {
      // fixed-ish update for stability
      this._update(dt);
    }
    this._render(dt);
  }

  _update(dt) {
    this._updatePlayer(dt);
    this._updateSpawns(dt);
    this._updateEnemies(dt);
    this._updateFiring(dt);
    this._updateBullets(dt);
    this._checkWaveProgress(dt);
    this._syncHud();
  }

  _updatePlayer(dt) {
    const k = this.keys;
    let mx = 0, mz = 0;
    if (k.has('w') || k.has('arrowup')) mz -= 1;
    if (k.has('s') || k.has('arrowdown')) mz += 1;
    if (k.has('a') || k.has('arrowleft')) mx -= 1;
    if (k.has('d') || k.has('arrowright')) mx += 1;
    if (mx || mz) {
      const len = Math.hypot(mx, mz);
      mx /= len; mz /= len;
      this.player.pos.x += mx * PLAYER_SPEED * dt;
      this.player.pos.z += mz * PLAYER_SPEED * dt;
      // keep inside arena
      const r = Math.hypot(this.player.pos.x, this.player.pos.z);
      const max = ARENA_RADIUS - 1.5;
      if (r > max) {
        this.player.pos.x *= max / r;
        this.player.pos.z *= max / r;
      }
    }
    this.player.mesh.position.set(this.player.pos.x, 0, this.player.pos.z);

    // Aim: mouse ground point if active, else toward nearest enemy, else last facing.
    let aim = null;
    if (this.pointerActive) {
      this._raycaster.setFromCamera(this.pointer, this.camera);
      const hit = this._raycaster.ray.intersectPlane(this._groundPlane, this.aimWorld);
      if (hit) aim = this.aimWorld;
    }
    if (!aim) {
      const idx = nearestEnemy({ x: this.player.pos.x, z: this.player.pos.z }, this.enemies);
      if (idx >= 0) aim = this.enemies[idx].mesh.position;
    }
    if (aim) {
      const dx = aim.x - this.player.pos.x;
      const dz = aim.z - this.player.pos.z;
      if (dx || dz) {
        this.player.facing.set(dx, 0, dz).normalize();
        this.player.mesh.rotation.y = Math.atan2(dx, dz);
      }
    }

    // camera follows the player (offset), looking slightly ahead
    this.camera.position.set(
      this.player.pos.x + this.cameraOffset.x,
      this.cameraOffset.y,
      this.player.pos.z + this.cameraOffset.z
    );
    this.camera.lookAt(this.player.pos.x, 0, this.player.pos.z);
  }

  _updateSpawns(dt) {
    if (!this.pendingSpawns.length) return;
    this.spawnTimer += dt;
    for (let i = this.pendingSpawns.length - 1; i >= 0; i--) {
      const s = this.pendingSpawns[i];
      if (this.spawnTimer >= s.at) {
        this._spawnEnemy(s.pos, s.stats);
        this.pendingSpawns.splice(i, 1);
      }
    }
  }

  _spawnEnemy(pos, stats) {
    const mesh = this._makeEnemyMesh(stats);
    mesh.position.set(pos.x, 0, pos.z);
    // little spawn pop
    mesh.scale.setScalar(0.01);
    this.scene.add(mesh);
    this.enemies.push({
      id: this._enemyId++,
      mesh,
      hp: stats.maxHealth,
      maxHp: stats.maxHealth,
      speed: stats.speed,
      touchDamage: stats.touchDamage,
      value: stats.value,
      alive: true,
      touchTimer: 0,
      spawnT: 0,
      pos: mesh.position, // alias for nearestEnemy (uses .pos.x/.z)
    });
  }

  _updateEnemies(dt) {
    const target = { x: this.player.pos.x, y: 0, z: this.player.pos.z };
    for (const e of this.enemies) {
      if (!e.alive) continue;
      // spawn-in scale
      if (e.spawnT < 1) {
        e.spawnT = Math.min(1, e.spawnT + dt * 4);
        e.mesh.scale.setScalar(0.2 + 0.8 * e.spawnT);
      }
      const r = stepEnemy(
        { x: e.mesh.position.x, y: 0, z: e.mesh.position.z },
        target, e.speed, dt, PLAYER_RADIUS + ENEMY_RADIUS
      );
      e.mesh.position.set(r.pos.x, 0, r.pos.z);
      // face the player + bob/spin for life
      e.mesh.rotation.y = Math.atan2(target.x - r.pos.x, target.z - r.pos.z);
      e.mesh.children[0].rotation.x += dt * 1.5;
      e.mesh.children[0].position.y = 1.0 + Math.sin((performance.now() / 1000 + e.id) * 4) * 0.08;

      if (r.touching) {
        e.touchTimer -= dt;
        if (e.touchTimer <= 0) {
          e.touchTimer = TOUCH_TICK;
          this._damagePlayer(e.touchDamage);
        }
      } else {
        e.touchTimer = 0;
      }
    }
  }

  _updateFiring(dt) {
    this.fireCooldown -= dt;
    if (this.fireCooldown > 0) return;
    if (!this.enemies.some((e) => e.alive)) return;
    this.fireCooldown = FIRE_INTERVAL;
    // fire along facing
    const dir = this.player.facing.clone();
    const origin = new THREE.Vector3(this.player.pos.x, 1.0, this.player.pos.z).addScaledVector(dir, 1.2);
    this._spawnBullet(origin, dir);
  }

  _spawnBullet(origin, dir) {
    const geo = new THREE.SphereGeometry(0.22, 8, 8);
    const mat = new THREE.MeshStandardMaterial({ color: 0xfff2a0, emissive: 0xffcf3a, emissiveIntensity: 1.4 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(origin);
    this.scene.add(mesh);
    this.bullets.push({ mesh, dir: dir.clone(), life: 1.4, pos: mesh.position });
  }

  _updateBullets(dt) {
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      const b = this.bullets[i];
      b.life -= dt;
      b.mesh.position.addScaledVector(b.dir, BULLET_SPEED * dt);
      let hit = false;
      // collision vs enemies (simple distance check on XZ)
      for (const e of this.enemies) {
        if (!e.alive) continue;
        const dx = e.mesh.position.x - b.mesh.position.x;
        const dz = e.mesh.position.z - b.mesh.position.z;
        if (dx * dx + dz * dz <= (ENEMY_RADIUS + 0.22) * (ENEMY_RADIUS + 0.22)) {
          this._hitEnemy(e);
          hit = true;
          break;
        }
      }
      if (hit || b.life <= 0 || Math.hypot(b.mesh.position.x, b.mesh.position.z) > ARENA_RADIUS + 6) {
        this.scene.remove(b.mesh);
        b.mesh.geometry.dispose();
        b.mesh.material.dispose();
        this.bullets.splice(i, 1);
      }
    }
  }

  _hitEnemy(e) {
    const { damage, crit } = rollDamage(DEFAULT_WEAPON, this.rng);
    const res = applyDamage(e.hp, damage);
    e.hp = res.health;
    // pop a damage number above the enemy's head (world pos used by the overlay)
    this.damageNumbers.spawn(
      { x: e.mesh.position.x, y: 2.4, z: e.mesh.position.z },
      damage, crit
    );
    // hit flash
    const m = e.mesh.children[0].material;
    m.emissiveIntensity = 1.6;
    setTimeout(() => { if (m) m.emissiveIntensity = 0.25; }, 70);

    if (res.dead) {
      e.alive = false;
      this.score += scoreForKill({ crit, wave: this.wave, enemyValue: e.value });
      this._killEffect(e);
    }
  }

  _killEffect(e) {
    // quick shrink-out then remove
    const mesh = e.mesh;
    const start = performance.now();
    const dur = 180;
    const tick = () => {
      const t = (performance.now() - start) / dur;
      if (t >= 1) {
        this.scene.remove(mesh);
        return;
      }
      mesh.scale.setScalar(Math.max(0.01, 1 - t));
      mesh.rotation.y += 0.4;
      requestAnimationFrame(tick);
    };
    tick();
  }

  _damagePlayer(amount) {
    const res = applyDamage(this.playerHP, amount);
    this.playerHP = res.health;
    if (this.hud.flashDamage) this.hud.flashDamage();
    if (res.dead) this._gameOver();
  }

  _gameOver() {
    this.state = 'dead';
    if (this.hud.setOverlay) {
      this.hud.setOverlay({ title: 'YOU DIED', sub: `Reached wave ${this.wave} · Score ${this.score}` });
    }
  }

  _checkWaveProgress(dt) {
    const remaining = this.enemies.filter((e) => e.alive).length + this.pendingSpawns.length;
    if (remaining === 0 && this.state === 'playing') {
      this.waveClearGrace += dt;
      if (this.waveClearGrace >= 1.2) {
        this.waveClearGrace = 0;
        // drop any lingering dead meshes that finished their effect
        this.enemies = this.enemies.filter((e) => e.alive);
        this._startWave(this.wave + 1);
      }
    } else {
      this.waveClearGrace = 0;
    }
  }

  // -------------------------------------------------------- projection + overlays
  /** Build the column-major view-projection matrix array the pure logic consumes. */
  _viewProj() {
    this.camera.updateMatrixWorld();
    this._vp.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse);
    return this._vp.elements;
  }

  _render(dt) {
    const vp = this._viewProj();
    const W = this.width, H = this.height;

    // closure the overlay uses to project a world point -> screen pixels
    const project = (world) => projectToScreen(vp, world, W, H);

    // damage numbers follow their anchored enemies' last positions
    this.damageNumbers.update(dt, project);

    // off-screen arrows: one mark per live enemy
    const marks = [];
    for (const e of this.enemies) {
      if (!e.alive) continue;
      const world = { x: e.mesh.position.x, y: 1.0, z: e.mesh.position.z };
      const p = projectToScreen(vp, world, W, H);
      let screen;
      if (p.onScreen) {
        screen = { x: p.x, y: p.y, onScreen: true };
      } else {
        const c = clampToEdge(p.ndc, p.behind, W, H, 54);
        screen = { x: c.x, y: c.y, angle: c.angle, onScreen: false };
      }
      const dist = Math.hypot(world.x - this.player.pos.x, world.z - this.player.pos.z);
      marks.push({ id: e.id, screen, dist });
    }
    this.arrows.update(marks);

    this.renderer.render(this.scene, this.camera);
  }

  _syncHud() {
    const alive = this.enemies.filter((e) => e.alive).length + this.pendingSpawns.length;
    this.hud.set({
      wave: this.wave,
      hp: Math.ceil(this.playerHP),
      maxHp: PLAYER_MAX_HP,
      score: this.score,
      enemies: alive,
    });
  }
}
