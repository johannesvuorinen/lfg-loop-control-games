// gameplay.js — pure game logic. No three.js, no DOM. Testable with node --test.
//
// Owns: forward motion + speed/boost model, steering clamp, ring fly-through
// detection, orb pickup, combo, scoring. The renderer reads this state and draws;
// it never computes gameplay here.

/** Clamp helper. */
export function clamp(v, lo, hi) {
  return v < lo ? lo : v > hi ? hi : v;
}

/** Linear interpolate. */
export function lerp(a, b, t) {
  return a + (b - a) * t;
}

/**
 * Squared distance between two {x,y,z}.
 */
export function dist2(a, b) {
  const dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
  return dx * dx + dy * dy + dz * dz;
}

/**
 * Ring fly-through test.
 *
 * A ring sits at `ring.z` in a plane facing down -Z (the direction of travel).
 * The ship passes the ring when it crosses the ring's z-plane this frame
 * (prevZ on the far side, curZ on the near side, since the ship travels toward -Z).
 * It counts as a *clean pass* only if, at the crossing, the ship's (x,y) is within
 * `ring.radius` of the ring center (i.e. it went through the hole, not the rim).
 *
 * @param {{x:number,y:number,radius:number,z:number}} ring
 * @param {{x:number,y:number,z:number}} prev ship position last frame
 * @param {{x:number,y:number,z:number}} cur  ship position this frame
 * @returns {{crossed:boolean, passed:boolean}} crossed = went past the plane; passed = through the hole
 */
export function ringPass(ring, prev, cur) {
  // travel is toward -Z, so prev.z should be > ring.z and cur.z <= ring.z to cross
  const crossed = prev.z > ring.z && cur.z <= ring.z;
  if (!crossed) return { crossed: false, passed: false };
  // interpolate x,y at the exact z-plane crossing for an accurate hit test
  const span = prev.z - cur.z;
  const t = span > 1e-9 ? (prev.z - ring.z) / span : 0;
  const hx = lerp(prev.x, cur.x, t);
  const hy = lerp(prev.y, cur.y, t);
  const dx = hx - ring.x, dy = hy - ring.y;
  const passed = dx * dx + dy * dy <= ring.radius * ring.radius;
  return { crossed: true, passed };
}

/**
 * Sphere pickup test (orbs). True if the ship center is within (orbR + shipR).
 * @param {{x:number,y:number,z:number,radius:number}} orb
 * @param {{x:number,y:number,z:number}} ship
 * @param {number} shipRadius
 */
export function orbHit(orb, ship, shipRadius = 0.6) {
  const r = orb.radius + shipRadius;
  return dist2(orb, ship) <= r * r;
}

/**
 * The whole game's mutable state + the single `update` that advances one frame.
 * Deterministic given inputs, so tests can drive it frame-by-frame.
 */
export class GameState {
  constructor(opts = {}) {
    this.baseSpeed = opts.baseSpeed ?? 26;    // units/sec forward at no boost
    this.maxSpeed = opts.maxSpeed ?? 70;
    this.boost = 0;                            // 0..1 extra speed factor
    this.boostDecay = opts.boostDecay ?? 0.35; // boost lost per second
    this.steerSpeed = opts.steerSpeed ?? 22;   // lateral units/sec at full input
    this.bounds = opts.bounds ?? { x: 11, y: 7 }; // half-extents of the tube the ship lives in

    // ship state — travels along -Z (into the screen)
    this.pos = { x: 0, y: 0, z: 0 };
    this.vel = { x: 0, y: 0, z: 0 };

    // progress / scoring
    this.score = 0;
    this.rings = 0;        // rings cleanly passed
    this.ringsTotal = 0;   // rings encountered (passed or missed)
    this.orbs = 0;
    this.combo = 1;        // multiplier, grows with consecutive clean rings
    this.maxCombo = 1;
    this.comboTimer = 0;   // seconds of combo grace remaining
    this.comboGrace = opts.comboGrace ?? 3.0;
    this.alive = true;
    this.distance = 0;     // total forward distance travelled
    this.time = 0;
  }

  /** Current forward speed in units/sec. */
  get speed() {
    return clamp(this.baseSpeed * (1 + this.boost), this.baseSpeed, this.maxSpeed);
  }

  /** Add a boost burst (e.g. on a clean ring), clamped to [0,1]. */
  addBoost(amount) {
    this.boost = clamp(this.boost + amount, 0, (this.maxSpeed - this.baseSpeed) / this.baseSpeed);
  }

  /** Bump combo on a clean ring; refresh grace timer. */
  registerCleanRing() {
    this.rings += 1;
    this.ringsTotal += 1;
    this.combo += 1;
    if (this.combo > this.maxCombo) this.maxCombo = this.combo;
    this.comboTimer = this.comboGrace;
    const gained = 100 * this.combo;
    this.score += gained;
    this.addBoost(0.18);
    return gained;
  }

  /** A ring went by without a clean pass: break combo. */
  registerMissedRing() {
    this.ringsTotal += 1;
    this.combo = 1;
    this.comboTimer = 0;
  }

  /** Orb pickup: flat points * current combo, small boost. */
  registerOrb() {
    this.orbs += 1;
    const gained = 25 * this.combo;
    this.score += gained;
    this.addBoost(0.06);
    return gained;
  }

  /**
   * Advance one frame.
   * @param {number} dt seconds
   * @param {{x:number,y:number}} steer lateral input in [-1,1] each axis (x = right, y = up)
   */
  update(dt, steer = { x: 0, y: 0 }) {
    if (!this.alive || dt <= 0) return;
    this.time += dt;

    // boost decays toward 0
    this.boost = Math.max(0, this.boost - this.boostDecay * dt);

    // combo grace countdown
    if (this.comboTimer > 0) {
      this.comboTimer = Math.max(0, this.comboTimer - dt);
      if (this.comboTimer === 0) this.combo = 1;
    }

    // lateral movement from steering, clamped to tube bounds
    const sx = clamp(steer.x ?? 0, -1, 1);
    const sy = clamp(steer.y ?? 0, -1, 1);
    this.pos.x = clamp(this.pos.x + sx * this.steerSpeed * dt, -this.bounds.x, this.bounds.x);
    this.pos.y = clamp(this.pos.y + sy * this.steerSpeed * dt, -this.bounds.y, this.bounds.y);

    // forward motion along -Z
    const fwd = this.speed * dt;
    this.pos.z -= fwd;
    this.distance += fwd;

    // velocity (for camera shake / banking cues in the renderer)
    this.vel.x = sx * this.steerSpeed;
    this.vel.y = sy * this.steerSpeed;
    this.vel.z = -this.speed;

    // passive score from distance (encourages going fast)
    this.score += fwd * 0.5;
  }
}
