// patrol.js — PURE path-following logic (no rendering).
//
// This is the core mechanic. A Patrol owns a smooth, CLOSED loop built from
// waypoints and walks an object around it at CONSTANT SPEED.
//
// three.js does almost all the heavy lifting:
//   - THREE.CatmullRomCurve3(points, /*closed*/ true)  -> smooth curved loop
//   - curve.getPointAt(u)    -> position by ARC LENGTH (constant-speed param u in [0,1])
//   - curve.getTangentAt(u)  -> unit facing direction at u (also arc-length based)
//   - curve.getLength()      -> total perimeter, used to convert speed -> du/dt
//
// "getPoint(t)" walks the raw spline parameter (uneven spacing -> uneven speed).
// "getPointAt(u)" remaps through an arc-length LUT so equal u steps are equal
// distance. That remap is the whole reason the drones glide instead of
// stuttering, and three gives it to us for free.
//
// The module imports three ONLY for the curve/vector math, which runs fine
// headless in Node (no DOM needed) — so this logic is unit-testable.

import * as THREE from '../vendor/three.module.js';

/**
 * @param {Array<[number,number,number]>} waypoints world-space loop points
 * @param {number} speed units travelled per second along the arc
 * @param {object} [opts]
 * @param {number} [opts.phase=0] starting offset along the loop, in [0,1)
 * @param {number} [opts.tension=0.5] CatmullRom tension (0.5 = centripetal-ish feel)
 */
export class Patrol {
  constructor(waypoints, speed, opts = {}) {
    if (!Array.isArray(waypoints) || waypoints.length < 3) {
      throw new Error('Patrol needs at least 3 waypoints to form a loop');
    }
    const points = waypoints.map(([x, y, z]) => new THREE.Vector3(x, y, z));

    // closed=true makes it loop seamlessly; 'catmullrom' gives smooth curvature.
    this.curve = new THREE.CatmullRomCurve3(
      points, /*closed*/ true, 'catmullrom', opts.tension ?? 0.5
    );

    this.speed = speed;
    // getLength() integrates the arc-length LUT -> exact perimeter.
    this.length = this.curve.getLength();

    // u is the ARC-LENGTH parameter in [0,1). Wrap phase into range.
    this.u = ((opts.phase ?? 0) % 1 + 1) % 1;

    // Reused scratch vectors so per-frame updates don't allocate.
    this._pos = new THREE.Vector3();
    this._tan = new THREE.Vector3();
  }

  /**
   * Advance the patrol by dt seconds at constant arc-length speed, looping.
   * distance = speed * dt ; du = distance / perimeter.
   * @returns {number} the new arc-length parameter u in [0,1)
   */
  advance(dt) {
    const du = (this.speed * dt) / this.length;
    this.u = (this.u + du) % 1;
    if (this.u < 0) this.u += 1; // tolerate negative dt
    return this.u;
  }

  /** World position at the current u (arc-length sampled). Returns shared Vector3. */
  position() {
    return this.curve.getPointAt(this.u, this._pos);
  }

  /** Unit facing (tangent) at the current u. Returns shared Vector3. */
  facing() {
    return this.curve.getTangentAt(this.u, this._tan);
  }

  /** Sample an arbitrary u without mutating state — handy for tests/visuals. */
  pointAt(u) {
    return this.curve.getPointAt(((u % 1) + 1) % 1, new THREE.Vector3());
  }
}

/**
 * Constant-speed check helper used by tests and (optionally) the engine.
 * Samples the curve at N equally-spaced u values and returns the chord length
 * between consecutive samples. On an arc-length-parametrised curve these chords
 * are ~equal, which is exactly what "constant speed" means in practice.
 * @returns {number[]} N chord lengths (sample[i] -> sample[i+1], wrapping).
 */
export function arcStepLengths(curve, n = 64) {
  const pts = [];
  for (let i = 0; i < n; i++) pts.push(curve.getPointAt(i / n));
  const steps = [];
  for (let i = 0; i < n; i++) {
    steps.push(pts[i].distanceTo(pts[(i + 1) % n]));
  }
  return steps;
}
