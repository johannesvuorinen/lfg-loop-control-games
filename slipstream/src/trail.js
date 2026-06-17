// trail.js — pure motion-trail / ribbon math. No three.js, no DOM. Testable.
//
// The signature visual of SLIPSTREAM is a glowing ribbon that streams behind the
// ship and fades along its length. The geometry is a triangle strip built from a
// rolling buffer of the ship's recent center positions: for each sample we emit
// two vertices (left + right of the path), and the ribbon WIDTH tapers from full
// at the head to 0 at the tail so the streak comes to a point as it dissipates.
//
// This module owns: the rolling position buffer, and the math that turns it into
// flat vertex/uv/index arrays. The renderer just uploads those arrays into a
// BufferGeometry each frame.

/**
 * A fixed-capacity ring of recent path samples.
 * Each sample: { x, y, z } plus a parallel "age" used for fade.
 * We keep it as flat typed arrays so the renderer can copy straight into GPU buffers.
 */
export class TrailBuffer {
  /**
   * @param {number} capacity max number of samples retained (trail length in samples)
   */
  constructor(capacity = 96) {
    if (capacity < 2) throw new Error('TrailBuffer capacity must be >= 2');
    this.capacity = capacity;
    // positions stored oldest..newest in a plain array we shift; capacity is small
    // (~96) so this is cheap and keeps the indexing trivial and correct.
    this.samples = []; // [{x,y,z}], index 0 = tail (oldest), last = head (newest)
  }

  /** Number of samples currently stored. */
  get length() {
    return this.samples.length;
  }

  /**
   * Push a new head position. Drops the oldest sample once at capacity.
   * Returns true if the sample was accepted (it always is; kept for symmetry).
   * @param {number} x
   * @param {number} y
   * @param {number} z
   */
  push(x, y, z) {
    this.samples.push({ x, y, z });
    if (this.samples.length > this.capacity) this.samples.shift();
    return true;
  }

  /**
   * Push only if the new point is at least `minDist` from the current head.
   * Avoids piling up zero-length segments when the ship is slow/stationary,
   * which would otherwise create degenerate (NaN-normal) ribbon quads.
   * @returns {boolean} whether a sample was actually added
   */
  pushIfMoved(x, y, z, minDist = 0.001) {
    const head = this.samples[this.samples.length - 1];
    if (head) {
      const dx = x - head.x, dy = y - head.y, dz = z - head.z;
      if (dx * dx + dy * dy + dz * dz < minDist * minDist) return false;
    }
    return this.push(x, y, z);
  }

  /** Clear all samples (e.g. on respawn / teleport so the trail doesn't streak across the map). */
  reset() {
    this.samples.length = 0;
  }

  /** Head (newest) sample or null. */
  head() {
    return this.samples[this.samples.length - 1] || null;
  }
}

/**
 * Normalize a 3-vector. Returns [0,0,0] for a zero vector (caller treats as "no direction").
 */
export function normalize(x, y, z) {
  const len = Math.hypot(x, y, z);
  if (len < 1e-9) return [0, 0, 0];
  return [x / len, y / len, z / len];
}

/** Cross product a x b. */
export function cross(ax, ay, az, bx, by, bz) {
  return [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx];
}

/**
 * Build ribbon geometry arrays from a TrailBuffer.
 *
 * For each sample i we compute a tangent (direction of travel) from neighbours,
 * then a "side" vector = normalize(tangent x up). The two emitted vertices are
 * center +/- side * halfWidth(i). halfWidth tapers linearly from 0 at the tail
 * (i=0) to `width/2` at the head, so the ribbon is a long teardrop.
 *
 * We also emit a per-vertex `fade` attribute in [0,1] (0 at tail, 1 at head) that
 * the shader multiplies into alpha/emissive — that's the "fades over its length".
 *
 * @param {TrailBuffer} buffer
 * @param {object} [opts]
 * @param {number} [opts.width=1.4] full ribbon width at the head
 * @param {[number,number,number]} [opts.up=[0,1,0]] reference up vector for sideways offset
 * @param {number} [opts.minTaper=0.0] half-width fraction at the tail (0 = sharp point)
 * @returns {{positions:Float32Array, uvs:Float32Array, fades:Float32Array, indices:Uint16Array, count:number}}
 *          count = number of samples actually used (>=2 to be drawable; 0 means nothing to draw)
 */
export function buildRibbonGeometry(buffer, opts = {}) {
  const width = opts.width ?? 1.4;
  const up = opts.up ?? [0, 1, 0];
  const minTaper = opts.minTaper ?? 0.0;
  const half = width * 0.5;

  const s = buffer.samples;
  const n = s.length;

  // Allocate for full capacity so the renderer can keep a stable-size buffer and
  // just set drawRange; but we report `count` for what's live this frame.
  const cap = buffer.capacity;
  const positions = new Float32Array(cap * 2 * 3);
  const uvs = new Float32Array(cap * 2 * 2);
  const fades = new Float32Array(cap * 2);
  // index count: (cap-1) quads * 2 tris * 3 verts
  const indices = new Uint16Array((cap - 1) * 6);

  if (n < 2) {
    return { positions, uvs, fades, indices, count: 0 };
  }

  for (let i = 0; i < n; i++) {
    const cur = s[i];
    // tangent from neighbours (central difference where possible)
    const prev = s[i - 1] || cur;
    const next = s[i + 1] || cur;
    let [tx, ty, tz] = normalize(next.x - prev.x, next.y - prev.y, next.z - prev.z);
    if (tx === 0 && ty === 0 && tz === 0) {
      // fall back to a forward-ish tangent so side vector is defined
      [tx, ty, tz] = [0, 0, 1];
    }
    // side = normalize(tangent x up)
    let [sx, sy, sz] = normalize(...cross(tx, ty, tz, up[0], up[1], up[2]));
    if (sx === 0 && sy === 0 && sz === 0) {
      // tangent parallel to up; pick an arbitrary perpendicular
      [sx, sy, sz] = normalize(...cross(tx, ty, tz, 1, 0, 0));
      if (sx === 0 && sy === 0 && sz === 0) [sx, sy, sz] = [1, 0, 0];
    }

    // taper: 0..1 along the trail, 0 at tail -> 1 at head
    const t = i / (n - 1);
    const taper = minTaper + (1 - minTaper) * t;
    const hw = half * taper;

    const vi = i * 2; // vertex pair index
    // left vertex
    positions[vi * 3 + 0] = cur.x + sx * hw;
    positions[vi * 3 + 1] = cur.y + sy * hw;
    positions[vi * 3 + 2] = cur.z + sz * hw;
    // right vertex
    positions[(vi + 1) * 3 + 0] = cur.x - sx * hw;
    positions[(vi + 1) * 3 + 1] = cur.y - sy * hw;
    positions[(vi + 1) * 3 + 2] = cur.z - sz * hw;

    // uv: u across width (0,1), v along length (= t)
    uvs[vi * 2 + 0] = 0; uvs[vi * 2 + 1] = t;
    uvs[(vi + 1) * 2 + 0] = 1; uvs[(vi + 1) * 2 + 1] = t;

    // fade attribute = t (head brightest)
    fades[vi] = t;
    fades[vi + 1] = t;
  }

  // build indices for the strip of quads between consecutive sample pairs
  let idx = 0;
  for (let i = 0; i < n - 1; i++) {
    const a = i * 2;       // left of segment i
    const b = i * 2 + 1;   // right of segment i
    const c = (i + 1) * 2; // left of segment i+1
    const d = (i + 1) * 2 + 1; // right of segment i+1
    // two triangles: (a,b,c) and (b,d,c)
    indices[idx++] = a; indices[idx++] = b; indices[idx++] = c;
    indices[idx++] = b; indices[idx++] = d; indices[idx++] = c;
  }

  return { positions, uvs, fades, indices, count: n };
}

/**
 * Total arc length of the live trail (sum of segment lengths). Useful for HUD/debug
 * and for tests that assert the trail actually follows the path.
 * @param {TrailBuffer} buffer
 */
export function trailLength(buffer) {
  const s = buffer.samples;
  let total = 0;
  for (let i = 1; i < s.length; i++) {
    total += Math.hypot(s[i].x - s[i - 1].x, s[i].y - s[i - 1].y, s[i].z - s[i - 1].z);
  }
  return total;
}
