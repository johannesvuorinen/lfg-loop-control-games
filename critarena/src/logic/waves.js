// Pure wave/spawn director. Decides how many enemies a wave holds, their stats,
// and where they spawn on a ring around the arena center. No three.js, no DOM —
// it returns plain data the renderer turns into meshes.

/**
 * Enemy count for a given wave (1-indexed). Grows steadily.
 * @param {number} wave
 */
export function enemiesInWave(wave) {
  return 4 + Math.floor(wave * 2.5);
}

/**
 * Base enemy stats for a wave. Health and speed scale up slowly so later waves
 * bite harder.
 * @param {number} wave
 */
export function enemyStatsForWave(wave) {
  return {
    maxHealth: Math.round(40 + (wave - 1) * 12),
    speed: 2.2 + (wave - 1) * 0.18,        // world units / second
    touchDamage: 8 + Math.floor((wave - 1) * 1.5),
    value: 100,
  };
}

/**
 * A spawn point on a ring of `radius` around `center`, evenly distributed with a
 * deterministic jitter so waves don't look gridded. Arena is on the XZ plane
 * (top-down), Y is up and stays at `center.y`.
 *
 * @param {number} index   which enemy in the wave (0-based)
 * @param {number} count   total enemies this wave
 * @param {number} radius  spawn ring radius (world units)
 * @param {{x:number,y:number,z:number}} center
 * @param {() => number} rng  deterministic [0,1)
 * @returns {{x:number,y:number,z:number}}
 */
export function spawnPosition(index, count, radius, center, rng) {
  const base = (index / count) * Math.PI * 2;
  const jitter = (rng() * 2 - 1) * (Math.PI / count); // +/- half a slot
  const angle = base + jitter;
  const r = radius * (0.85 + rng() * 0.3); // 0.85..1.15 of radius
  return {
    x: center.x + Math.cos(angle) * r,
    y: center.y,
    z: center.z + Math.sin(angle) * r,
  };
}

/**
 * Build the full descriptor for a wave: enemy count, shared stats, and the list of
 * spawn positions. Pure data — the game instantiates meshes from it.
 *
 * @param {number} wave
 * @param {{ radius?:number, center?:{x:number,y:number,z:number}, rng:()=>number }} opts
 */
export function buildWave(wave, { radius = 26, center = { x: 0, y: 0, z: 0 }, rng } = {}) {
  const count = enemiesInWave(wave);
  const stats = enemyStatsForWave(wave);
  const spawns = [];
  for (let i = 0; i < count; i++) {
    spawns.push(spawnPosition(i, count, radius, center, rng));
  }
  return { wave, count, stats, spawns };
}

/**
 * Step a homing enemy toward a target on the XZ plane. Returns the new position and
 * whether it is now within `touchRadius` of the target (i.e. hitting the player).
 * Pure: caller supplies dt and positions.
 *
 * @param {{x:number,y:number,z:number}} pos
 * @param {{x:number,y:number,z:number}} target
 * @param {number} speed  units/sec
 * @param {number} dt     seconds
 * @param {number} touchRadius
 * @returns {{ pos:{x:number,y:number,z:number}, touching:boolean }}
 */
export function stepEnemy(pos, target, speed, dt, touchRadius) {
  const dx = target.x - pos.x;
  const dz = target.z - pos.z;
  const dist = Math.hypot(dx, dz);
  if (dist <= touchRadius) {
    return { pos: { x: pos.x, y: pos.y, z: pos.z }, touching: true };
  }
  const step = Math.min(speed * dt, dist);
  return {
    pos: {
      x: pos.x + (dx / dist) * step,
      y: pos.y,
      z: pos.z + (dz / dist) * step,
    },
    touching: false,
  };
}

/**
 * Pick the nearest enemy to a point on the XZ plane (used by auto-fire targeting).
 * @param {{x:number,z:number}} from
 * @param {Array<{pos:{x:number,z:number},alive?:boolean}>} enemies
 * @returns {number} index of nearest live enemy, or -1
 */
export function nearestEnemy(from, enemies) {
  let best = -1;
  let bestD = Infinity;
  for (let i = 0; i < enemies.length; i++) {
    const e = enemies[i];
    if (e.alive === false) continue;
    const d = Math.hypot(e.pos.x - from.x, e.pos.z - from.z);
    if (d < bestD) {
      bestD = d;
      best = i;
    }
  }
  return best;
}
