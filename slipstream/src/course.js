// course.js — pure procedural course layout. No three.js, no DOM. Testable.
//
// Generates the stream of rings and orbs ahead of the ship. Deterministic given a
// seed so tests can assert layout and the game is reproducible. The renderer turns
// these plain objects into meshes; recycling of off-screen objects is the renderer's
// job, but the *positions* come from here.

/**
 * Tiny deterministic PRNG (mulberry32). Returns a function -> float in [0,1).
 * @param {number} seed
 */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Generate `count` rings starting at zStart, spaced by `spacing` (toward -Z), with
 * x/y centers wandering smoothly within bounds so the course feels like a flowing
 * slalom rather than random teleports.
 *
 * @param {object} opts
 * @param {number} [opts.count=40]
 * @param {number} [opts.zStart=-40] z of the first ring
 * @param {number} [opts.spacing=34] gap between rings along z
 * @param {number} [opts.radius=3.4] ring hole radius
 * @param {{x:number,y:number}} [opts.bounds] half-extents for centers
 * @param {number} [opts.seed=1]
 * @returns {Array<{id:number,x:number,y:number,z:number,radius:number}>}
 */
export function generateRings(opts = {}) {
  const count = opts.count ?? 40;
  const zStart = opts.zStart ?? -40;
  const spacing = opts.spacing ?? 34;
  const radius = opts.radius ?? 3.4;
  const bounds = opts.bounds ?? { x: 8, y: 4.5 };
  const rng = mulberry32(opts.seed ?? 1);

  const rings = [];
  // smooth wander: keep a target and move toward it
  let x = 0, y = 0;
  let tx = 0, ty = 0;
  for (let i = 0; i < count; i++) {
    // occasionally pick a new target inside bounds
    if (i % 2 === 0) {
      tx = (rng() * 2 - 1) * bounds.x;
      ty = (rng() * 2 - 1) * bounds.y;
    }
    // ease toward target
    x += (tx - x) * 0.6;
    y += (ty - y) * 0.6;
    rings.push({
      id: i,
      x: Math.max(-bounds.x, Math.min(bounds.x, x)),
      y: Math.max(-bounds.y, Math.min(bounds.y, y)),
      z: zStart - i * spacing,
      radius,
    });
  }
  return rings;
}

/**
 * Scatter orbs between the rings — mostly near the line connecting consecutive ring
 * centers, so collecting them rewards following the racing line.
 *
 * @param {Array} rings output of generateRings
 * @param {object} opts
 * @param {number} [opts.perGap=3] orbs between each pair of rings
 * @param {number} [opts.radius=0.55]
 * @param {number} [opts.seed=2]
 * @param {number} [opts.jitter=2.2] random offset around the racing line
 * @returns {Array<{id:number,x:number,y:number,z:number,radius:number}>}
 */
export function generateOrbs(rings, opts = {}) {
  const perGap = opts.perGap ?? 3;
  const radius = opts.radius ?? 0.55;
  const jitter = opts.jitter ?? 2.2;
  const rng = mulberry32(opts.seed ?? 2);

  const orbs = [];
  let id = 0;
  for (let i = 0; i < rings.length - 1; i++) {
    const a = rings[i];
    const b = rings[i + 1];
    for (let k = 1; k <= perGap; k++) {
      const t = k / (perGap + 1);
      const x = a.x + (b.x - a.x) * t + (rng() * 2 - 1) * jitter;
      const y = a.y + (b.y - a.y) * t + (rng() * 2 - 1) * jitter;
      const z = a.z + (b.z - a.z) * t;
      orbs.push({ id: id++, x, y, z, radius, taken: false });
    }
  }
  return orbs;
}
