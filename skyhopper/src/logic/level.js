// level.js — PURE, deterministic level layout (no three.js).
//
// Defines the floating islands, orb spawn points, and the goal portal so the
// renderer and the headless tests agree on the exact same world. A tiny
// seeded PRNG keeps it reproducible.

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Islands form a gentle ascending spiral so the follow-cam has to track
// across height changes (the whole point of the probe).
export function buildLevel(seed = 1337) {
  const rnd = mulberry32(seed);
  const islands = [];
  const ISLAND_COUNT = 8;
  let angle = 0;
  let radius = 0;
  let y = 0;
  for (let i = 0; i < ISLAND_COUNT; i++) {
    const r = 5.5 + rnd() * 1.5; // island top radius
    islands.push({
      id: i,
      x: Math.cos(angle) * radius,
      y, // top surface height
      z: Math.sin(angle) * radius,
      r,
    });
    // step outward + up around the spiral
    angle += 1.05 + rnd() * 0.25;
    radius += 9 + rnd() * 2.5;
    y += 1.6 + rnd() * 1.4;
  }

  // One orb hovering above each island except the first (spawn) island.
  const orbs = islands.slice(1).map((isl, i) => ({
    id: i,
    x: isl.x,
    y: isl.y + 1.6,
    z: isl.z,
  }));

  // Portal sits on the last (highest) island.
  const last = islands[islands.length - 1];
  const portal = { x: last.x, y: last.y + 1.4, z: last.z };

  const spawn = { x: islands[0].x, y: islands[0].y + 1.1, z: islands[0].z };

  return { islands, orbs, portal, spawn, requiredOrbs: orbs.length };
}

// Which island (if any) is directly under a world position, and its top Y.
// Used by the renderer's ground resolve and by tests for respawn logic.
export function islandUnder(islands, pos, pad = 0.6) {
  let best = null;
  for (const isl of islands) {
    const d = Math.hypot(pos.x - isl.x, pos.z - isl.z);
    if (d <= isl.r + pad) {
      if (!best || isl.y > best.y) best = isl;
    }
  }
  return best; // {id,x,y,z,r} or null
}
