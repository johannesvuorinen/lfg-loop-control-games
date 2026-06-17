// player.js — PURE player movement (no rendering).
//
// Deliberately simple per the brief — the star of the show is the patrol paths.
// WASD/arrow intent comes in as a 2D vector; we normalise diagonals, integrate,
// and clamp to the arena bounds.

import { ARENA } from './levels.js';

export class Player {
  constructor(opts = {}) {
    this.x = opts.x ?? 0;
    this.z = opts.z ?? 0;
    this.speed = opts.speed ?? 16; // world units / second
    this.radius = opts.radius ?? 0.9;
    // keep the player a touch inside the wall so the body doesn't clip it
    this.bound = ARENA / 2 - this.radius - 0.5;
  }

  setPosition(x, z) {
    this.x = x;
    this.z = z;
  }

  /**
   * @param {number} ix intent X in [-1,1] (e.g. D=+1, A=-1)
   * @param {number} iz intent Z in [-1,1] (e.g. S=+1, W=-1)
   * @param {number} dt seconds
   */
  update(ix, iz, dt) {
    let mag = Math.hypot(ix, iz);
    if (mag > 1e-6) {
      // normalise so diagonal isn't faster, then scale by speed*dt
      if (mag > 1) {
        ix /= mag;
        iz /= mag;
      }
      this.x += ix * this.speed * dt;
      this.z += iz * this.speed * dt;
      this.x = clamp(this.x, -this.bound, this.bound);
      this.z = clamp(this.z, -this.bound, this.bound);
    }
  }
}

export function clamp(v, lo, hi) {
  return v < lo ? lo : v > hi ? hi : v;
}
