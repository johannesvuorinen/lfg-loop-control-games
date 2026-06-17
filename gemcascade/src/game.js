// game.js — the controller. Wires pure logic (logic.js) to the three.js
// renderer (renderer.js) and the HUD, handles the two-tap swap interaction,
// and animates swap / clear / fall / refill in lockstep with the logic steps.
//
// Sync model: the logic mutates the board array; we mirror those exact moves on
// the visual gem meshes. Each cascade `step` from resolveBoard gives us the set
// of cleared cells, the gravity `moves` and the `spawns`, which is everything a
// renderer needs to reproduce the same transitions.

import * as Logic from './logic.js';
import { Renderer, cellToWorld } from './renderer.js';
import { Animator, Easing, wait } from './anim.js';

export const DIFFICULTIES = {
  easy: { cols: 7, rows: 8, numColors: 5, label: 'Easy', moveTime: 0 },
  normal: { cols: 7, rows: 8, numColors: 6, label: 'Normal', moveTime: 0 },
  hard: { cols: 8, rows: 9, numColors: 7, label: 'Hard', moveTime: 0 },
  // timed: a 90s rush mode at normal density.
  timed: { cols: 7, rows: 8, numColors: 6, label: 'Time Rush', moveTime: 90 },
};

// Animation timings (seconds).
const T_SWAP = 0.16;
const T_FALL_PER_CELL = 0.06;
const T_CLEAR = 0.18;
const T_STEP_GAP = 0.04;

export class Game {
  constructor({ canvas, hud, difficulty = 'normal', seed = null }) {
    this.canvas = canvas;
    this.hud = hud; // { score, moves, chain, message, ... } DOM elements
    this.diff = DIFFICULTIES[difficulty] || DIFFICULTIES.normal;
    this.seed = seed == null ? (Math.random() * 2 ** 32) >>> 0 : seed >>> 0;

    this.rng = Logic.makeRng(this.seed);
    this.board = Logic.makeInitialBoard(
      this.diff.cols,
      this.diff.rows,
      this.diff.numColors,
      this.rng
    );

    this.renderer = new Renderer(canvas, {
      cols: this.diff.cols,
      rows: this.diff.rows,
      numColors: this.diff.numColors,
    });
    this.renderer.syncFromBoard(this.board.cells);

    this.anim = new Animator();

    this.score = 0;
    this.moves = 0;
    this.bestChain = 0;
    this.timeLeft = this.diff.moveTime; // seconds, 0 = no timer
    this.over = false;

    this.selected = null; // {col,row} of first tap
    this.busy = false; // true while an animation/cascade is resolving

    this._lastT = performance.now() / 1000;
    this._raf = null;
    this._bindInput();
    this._updateHud('Match 3 or more!');
    this._loop = this._loop.bind(this);
    this._raf = requestAnimationFrame(this._loop);

    // Backup ticker: requestAnimationFrame is paused when the tab is hidden
    // (document.hidden === true). Without this, a cascade that is mid-animation
    // when the user tabs away would soft-lock (the `busy` flag is gated on tween
    // completion, and tweens advance only when the clock ticks). setTimeout/
    // setInterval still fire while hidden (clamped to ~1s), so this keeps the
    // animator and game clock progressing. `_tick` is guarded by a single shared
    // timestamp so rAF and the interval never double-advance time.
    this._backup = setInterval(() => {
      if (document.hidden) this._tick();
    }, 100);

    window.addEventListener('resize', () => this.renderer.resize());
  }

  // ---- main loop -----------------------------------------------------------

  // Advance the simulation clock by real elapsed time. Safe to call from either
  // the rAF loop or the backup interval; the shared `_lastT` guarantees we never
  // count the same wall-clock time twice.
  _tick() {
    const now = performance.now() / 1000;
    let dt = now - this._lastT;
    this._lastT = now;
    if (dt <= 0) return 0;
    if (dt > 0.1) dt = 0.1; // clamp after a long pause (tab-out)

    this.anim.update(dt);

    if (this.timeLeft > 0 && !this.over && !this.busy) {
      this.timeLeft -= dt;
      if (this.timeLeft <= 0) {
        this.timeLeft = 0;
        this._gameOver('Time! ');
      }
      this._updateTimer();
    }
    return dt;
  }

  _loop() {
    const now = performance.now() / 1000;
    const dt = this._tick();
    this.renderer.render(dt, now);
    this._raf = requestAnimationFrame(this._loop);
  }

  // ---- input ---------------------------------------------------------------

  _bindInput() {
    const onDown = (clientX, clientY) => {
      if (this.busy || this.over) return;
      const cell = this.renderer.pickCell(clientX, clientY);
      if (!cell) return;
      this._handleTap(cell);
    };

    this.canvas.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      onDown(e.clientX, e.clientY);
    });

    // expose for headless harness
    this._tapAtCell = (col, row) => this._handleTap({ col, row });
  }

  _handleTap(cell) {
    if (this.busy || this.over) return;
    if (!this.selected) {
      this.selected = cell;
      this.renderer.showSelection(cell.col, cell.row);
      return;
    }
    // same cell tapped twice -> deselect
    if (this.selected.col === cell.col && this.selected.row === cell.row) {
      this.selected = null;
      this.renderer.hideSelection();
      return;
    }
    // adjacent -> attempt swap; otherwise move selection to the new cell
    if (Logic.isAdjacent(this.selected, cell)) {
      const a = this.selected;
      const b = cell;
      this.selected = null;
      this.renderer.hideSelection();
      this._attemptSwap(a, b);
    } else {
      this.selected = cell;
      this.renderer.showSelection(cell.col, cell.row);
    }
  }

  // ---- swap + cascade ------------------------------------------------------

  async _attemptSwap(a, b) {
    this.busy = true;
    const valid = Logic.isValidSwap(this.board, a, b, 3);

    await this._animateSwapVisual(a, b);

    if (!valid) {
      // swap back, both logically (we never committed) and visually
      Logic.swap(this.board, a, b); // undo the logical swap we did for mirroring
      await this._animateSwapVisual(a, b, true);
      this._flashMessage('No match — try again');
      this.busy = false;
      return;
    }

    // valid: count the move and resolve the cascade
    this.moves++;
    const res = Logic.resolveBoard(this.board, this.rng, { minRun: 3, base: 10 });
    await this._animateCascade(res);

    this.score += res.totalGained;
    if (res.maxChain > this.bestChain) this.bestChain = res.maxChain;
    this._updateHud(
      res.maxChain >= 2 ? `Chain x${res.maxChain}!  +${res.totalGained}` : `+${res.totalGained}`
    );

    // Deadlock check: if no moves remain, reshuffle (keep it endless).
    if (!Logic.hasAnyValidMove(this.board, 3)) {
      this._flashMessage('No moves — shuffling…');
      await wait(450);
      Logic.reshuffle(this.board, this.rng);
      // ensure the reshuffle didn't create instant matches; resolve any.
      const r2 = Logic.resolveBoard(this.board, this.rng, { minRun: 3, base: 10 });
      this.renderer.syncFromBoard(this.board.cells);
      if (r2.totalGained) this.score += r2.totalGained;
    }

    this.busy = false;
  }

  // Swap two gem meshes' positions; also swap them in the renderer's grid map.
  async _animateSwapVisual(a, b, isUndo = false) {
    const ga = this.renderer.getGem(a.col, a.row);
    const gb = this.renderer.getGem(b.col, b.row);
    const pa = cellToWorld(a.col, a.row, this.diff.cols, this.diff.rows);
    const pb = cellToWorld(b.col, b.row, this.diff.cols, this.diff.rows);

    const proms = [];
    if (ga) proms.push(this.anim.tweenVec(ga.position, { x: pb.x, y: pb.y }, T_SWAP));
    if (gb) proms.push(this.anim.tweenVec(gb.position, { x: pa.x, y: pa.y }, T_SWAP));
    await Promise.all(proms);

    // update renderer grid map to reflect new positions
    this.renderer.setGem(a.col, a.row, gb);
    this.renderer.setGem(b.col, b.row, ga);

    // Mirror the logical swap for the FIRST (forward) animation only. On undo
    // the caller has already reverted the logical board.
    if (!isUndo) Logic.swap(this.board, a, b);
  }

  // Play each cascade step: clear (shrink+fade) -> gravity (drop) -> refill.
  async _animateCascade(res) {
    for (const step of res.steps) {
      await this._animateClear(step);
      await this._animateGravity(step);
      await this._animateSpawns(step);
      if (step.chain >= 2) this._flashMessage(`Chain x${step.chain}!`);
      await wait(T_STEP_GAP * 1000);
    }
  }

  async _animateClear(step) {
    const proms = [];
    for (const flatIndex of step.cleared) {
      const col = flatIndex % this.diff.cols;
      const row = Math.floor(flatIndex / this.diff.cols);
      const g = this.renderer.getGem(col, row);
      if (g) {
        // shrink + spin out
        const p1 = this.anim.tween(g.scale, { x: 0.01, y: 0.01, z: 0.01 }, T_CLEAR, Easing.easeInQuad);
        proms.push(
          p1.then(() => {
            this.renderer.scene.remove(g);
          })
        );
        this.renderer.setGem(col, row, null);
      }
    }
    await Promise.all(proms);
  }

  async _animateGravity(step) {
    // step.moves: {col, fromRow, toRow}. The renderer's grid map still has the
    // gem at (col, fromRow); move it visually + in the map to (col, toRow).
    // Process so that we don't overwrite: moves within a column never collide
    // because each source row is distinct and gravity is monotonic.
    const proms = [];
    // Apply map moves first (logical positions), then animate.
    // To avoid clobbering, collect (gem, col, toRow) then reassign.
    const pending = [];
    for (const m of step.moves) {
      const g = this.renderer.getGem(m.col, m.fromRow);
      this.renderer.setGem(m.col, m.fromRow, null);
      pending.push({ g, col: m.col, fromRow: m.fromRow, toRow: m.toRow });
    }
    for (const p of pending) {
      this.renderer.setGem(p.col, p.toRow, p.g);
      if (p.g) {
        const dest = cellToWorld(p.col, p.toRow, this.diff.cols, this.diff.rows);
        const dist = Math.abs(p.toRow - p.fromRow);
        const dur = Math.max(T_FALL_PER_CELL, T_FALL_PER_CELL * dist);
        proms.push(this.anim.tweenVec(p.g.position, { y: dest.y }, dur, Easing.easeOutBounceSmall));
      }
    }
    await Promise.all(proms);
  }

  async _animateSpawns(step) {
    const proms = [];
    for (const s of step.spawns) {
      // create a gem mesh, start it above the board, drop to its cell
      const g = this.renderer._makeGem(s.color);
      const dest = cellToWorld(s.col, s.row, this.diff.cols, this.diff.rows);
      const startY = (this.diff.rows - 1) / 2 + 1 + s.spawnIndex; // above top
      g.position.set(dest.x, startY, 0);
      g.scale.set(1, 1, 1);
      this.renderer.setGem(s.col, s.row, g);
      const dist = startY - dest.y;
      const dur = Math.max(T_FALL_PER_CELL * 2, T_FALL_PER_CELL * dist);
      proms.push(this.anim.tweenVec(g.position, { y: dest.y }, dur, Easing.easeOutBounceSmall));
    }
    await Promise.all(proms);
  }

  // ---- HUD -----------------------------------------------------------------

  _updateHud(message) {
    if (this.hud.score) this.hud.score.textContent = String(this.score);
    if (this.hud.moves) this.hud.moves.textContent = String(this.moves);
    if (this.hud.chain) this.hud.chain.textContent = 'x' + String(this.bestChain || 1);
    if (message !== undefined) this._flashMessage(message);
    this._updateTimer();
  }

  _updateTimer() {
    if (!this.hud.timer) return;
    if (this.diff.moveTime > 0) {
      const s = Math.max(0, Math.ceil(this.timeLeft));
      this.hud.timer.textContent = s + 's';
      this.hud.timer.parentElement.style.display = '';
    } else {
      this.hud.timer.parentElement.style.display = 'none';
    }
  }

  _flashMessage(msg) {
    if (!this.hud.message) return;
    this.hud.message.textContent = msg;
    this.hud.message.classList.remove('pulse');
    // force reflow to restart the animation
    void this.hud.message.offsetWidth;
    this.hud.message.classList.add('pulse');
  }

  _gameOver(prefix = 'Game Over') {
    this.over = true;
    this.selected = null;
    this.renderer.hideSelection();
    this._flashMessage(`${prefix} Final score ${this.score}`);
    if (this.hud.onGameOver) this.hud.onGameOver(this.score);
  }

  destroy() {
    if (this._raf) cancelAnimationFrame(this._raf);
    if (this._backup) clearInterval(this._backup);
  }
}
