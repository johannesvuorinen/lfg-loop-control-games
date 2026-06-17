// game.js — PURE game state & rules (no rendering, no three.js scene objects).
//
// Owns: orbs remaining, lives, current level index, win/lose status, and the
// collision rules that drive them. Positions come in as plain {x,z} so this is
// trivially unit-testable. The renderer reads this state to draw the HUD and to
// know when to add/remove meshes.

import { LEVELS, STARTING_LIVES } from './levels.js';

export const Status = Object.freeze({
  PLAYING: 'playing',
  LEVEL_CLEAR: 'level_clear', // all orbs collected on current level
  WON: 'won', // cleared the final level
  DEAD: 'dead', // out of lives (retry the level)
});

/** Squared 2D distance on the X/Z plane (cheap, avoids sqrt). */
export function dist2(ax, az, bx, bz) {
  const dx = ax - bx;
  const dz = az - bz;
  return dx * dx + dz * dz;
}

/** True if a circle at (px,pz) r=pr overlaps a circle at (hx,hz) r=hr. */
export function circlesOverlap(px, pz, pr, hx, hz, hr) {
  const r = pr + hr;
  return dist2(px, pz, hx, hz) <= r * r;
}

export class GameState {
  constructor(levels = LEVELS, lives = STARTING_LIVES) {
    this.levels = levels;
    this.startingLives = lives;
    this.playerRadius = 0.9;
    this.orbRadius = 0.8;
    // Brief invulnerability window after a hit so one touch costs exactly one life.
    this.hitCooldown = 0;
    this.invulnSeconds = 1.2;
    this.reset();
  }

  reset() {
    this.levelIndex = 0;
    this.lives = this.startingLives;
    this._loadLevel(0);
  }

  /** (re)initialise per-level mutable state. */
  _loadLevel(i) {
    const lvl = this.levels[i];
    // orbs[]: {x, z, collected}
    this.orbs = lvl.orbs.map(([x, z]) => ({ x, z, collected: false }));
    this.status = Status.PLAYING;
    this.hitCooldown = 0;
  }

  get level() {
    return this.levels[this.levelIndex];
  }

  get totalOrbs() {
    return this.orbs.length;
  }

  get collectedCount() {
    let n = 0;
    for (const o of this.orbs) if (o.collected) n++;
    return n;
  }

  get remainingOrbs() {
    return this.totalOrbs - this.collectedCount;
  }

  /** Tick down the post-hit invulnerability timer. */
  tickTimers(dt) {
    if (this.hitCooldown > 0) {
      this.hitCooldown = Math.max(0, this.hitCooldown - dt);
    }
  }

  get isInvulnerable() {
    return this.hitCooldown > 0;
  }

  /**
   * Collect any orbs the player overlaps. Returns the indices collected this
   * call (so the renderer knows which meshes to remove + play a sound).
   * @returns {number[]}
   */
  collectAt(px, pz) {
    if (this.status !== Status.PLAYING) return [];
    const picked = [];
    for (let i = 0; i < this.orbs.length; i++) {
      const o = this.orbs[i];
      if (o.collected) continue;
      if (circlesOverlap(px, pz, this.playerRadius, o.x, o.z, this.orbRadius)) {
        o.collected = true;
        picked.push(i);
      }
    }
    if (picked.length && this.remainingOrbs === 0) {
      // Cleared the level.
      this.status =
        this.levelIndex >= this.levels.length - 1
          ? Status.WON
          : Status.LEVEL_CLEAR;
    }
    return picked;
  }

  /**
   * Test the player against a list of hazards. Each hazard: {x, z, radius}.
   * If any overlaps and we're not invulnerable, lose a life.
   * @returns {boolean} true if a life was lost this call.
   */
  hazardCheck(px, pz, hazards) {
    if (this.status !== Status.PLAYING) return false;
    if (this.isInvulnerable) return false;
    for (const h of hazards) {
      if (circlesOverlap(px, pz, this.playerRadius, h.x, h.z, h.radius)) {
        this.lives -= 1;
        this.hitCooldown = this.invulnSeconds;
        if (this.lives <= 0) {
          this.lives = 0;
          this.status = Status.DEAD;
        }
        return true;
      }
    }
    return false;
  }

  /** Advance to the next level after LEVEL_CLEAR. No-op otherwise. */
  nextLevel() {
    if (this.status !== Status.LEVEL_CLEAR) return false;
    if (this.levelIndex >= this.levels.length - 1) {
      this.status = Status.WON;
      return false;
    }
    this.levelIndex += 1;
    this._loadLevel(this.levelIndex);
    return true;
  }

  /** Retry the current level after DEAD (refills lives, resets orbs). */
  retryLevel() {
    this.lives = this.startingLives;
    this._loadLevel(this.levelIndex);
  }
}
