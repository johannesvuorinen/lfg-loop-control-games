// ===========================================================================
// Bug Siege — PURE GAME LOGIC (no three.js, no DOM).
// Everything here is deterministic and unit-testable under `node --test`.
// Coordinates are plain {x, z} in world units (the ground plane is XZ).
// The renderer (main.js) is the only thing that knows about three.js.
// ===========================================================================

// ---- Tunables --------------------------------------------------------------
export const CONFIG = {
  startCurrency: 120,
  startLives: 20,
  turretCost: 50,
  upgradeBaseCost: 40,      // cost to go from level L -> L+1 is upgradeBaseCost * L
  sellRefundFraction: 0.6,  // refund = floor(totalSpent * fraction)
  maxTurretLevel: 4,

  // Turret combat (per level: index 0 unused, levels are 1..maxLevel)
  turretRange: [0, 7, 8.5, 10, 12],
  turretDamage: [0, 10, 18, 30, 48],
  turretFireCooldown: 0.55,  // seconds between shots
  projectileSpeed: 22,       // world units / second

  // Bugs
  bugSpeed: 2.4,             // base units/sec along the path (scaled per wave)
  bugBaseHp: 28,
  bugHpWaveGrowth: 1.18,     // hp *= growth^(wave-1)
  bugReward: 8,
  bugLivesCost: 1,

  // Waves
  totalWaves: 8,
  baseBugsPerWave: 6,
  bugsPerWaveGrowth: 2,      // +2 bugs each wave
  spawnInterval: 0.9,        // seconds between bug spawns within a wave
  interWaveDelay: 3.0,       // seconds of calm between waves
};

// ---- Geometry helpers ------------------------------------------------------
export function dist2(ax, az, bx, bz) {
  const dx = ax - bx, dz = az - bz;
  return dx * dx + dz * dz; // squared distance — avoids sqrt in hot loops
}
export function dist(ax, az, bx, bz) {
  return Math.sqrt(dist2(ax, az, bx, bz));
}

// ---- Pads (build slots) ----------------------------------------------------
// A pad is { id, x, z, turret|null }. Turret is { level, totalSpent }.
export function makePads(positions) {
  return positions.map((p, i) => ({ id: i, x: p.x, z: p.z, turret: null }));
}

export function padById(state, id) {
  return state.pads.find((p) => p.id === id) || null;
}

// ---- Economy / placement rules (PURE) --------------------------------------
export function canBuild(state, padId) {
  const pad = padById(state, padId);
  if (!pad) return { ok: false, reason: 'no-such-pad' };
  if (pad.turret) return { ok: false, reason: 'occupied' };
  if (state.currency < CONFIG.turretCost) return { ok: false, reason: 'too-poor' };
  if (state.gameOver) return { ok: false, reason: 'game-over' };
  return { ok: true };
}

export function build(state, padId) {
  const check = canBuild(state, padId);
  if (!check.ok) return check;
  const pad = padById(state, padId);
  state.currency -= CONFIG.turretCost;
  pad.turret = { level: 1, totalSpent: CONFIG.turretCost, cooldown: 0 };
  return { ok: true, pad };
}

export function upgradeCost(level) {
  return CONFIG.upgradeBaseCost * level;
}

export function canUpgrade(state, padId) {
  const pad = padById(state, padId);
  if (!pad || !pad.turret) return { ok: false, reason: 'no-turret' };
  if (pad.turret.level >= CONFIG.maxTurretLevel) return { ok: false, reason: 'max-level' };
  const cost = upgradeCost(pad.turret.level);
  if (state.currency < cost) return { ok: false, reason: 'too-poor' };
  return { ok: true, cost };
}

export function upgrade(state, padId) {
  const check = canUpgrade(state, padId);
  if (!check.ok) return check;
  const pad = padById(state, padId);
  state.currency -= check.cost;
  pad.turret.level += 1;
  pad.turret.totalSpent += check.cost;
  return { ok: true, pad, level: pad.turret.level };
}

export function sell(state, padId) {
  const pad = padById(state, padId);
  if (!pad || !pad.turret) return { ok: false, reason: 'no-turret' };
  const refund = Math.floor(pad.turret.totalSpent * CONFIG.sellRefundFraction);
  state.currency += refund;
  pad.turret = null;
  return { ok: true, refund };
}

// ---- Targeting (PURE) ------------------------------------------------------
// Find the nearest live bug within a turret's range. Linear scan + squared
// distance. Returns the bug, or null. (See NOTES.md for the spatial-structure
// discussion — N is small here so brute force wins.)
export function nearestBugInRange(turretX, turretZ, range, bugs) {
  const r2 = range * range;
  let best = null;
  let bestD2 = Infinity;
  for (const bug of bugs) {
    if (bug.hp <= 0 || bug.reachedHive) continue;
    const d2 = dist2(turretX, turretZ, bug.x, bug.z);
    if (d2 <= r2 && d2 < bestD2) {
      bestD2 = d2;
      best = bug;
    }
  }
  return best;
}

// ---- Path (PURE) -----------------------------------------------------------
// The path is a polyline of waypoints {x,z}. Bugs carry a scalar `t` in
// world-distance travelled; we map that to a position. Keeps movement
// framerate-independent and trivially testable.
export function buildPathLengths(waypoints) {
  const seg = [];
  let total = 0;
  for (let i = 0; i < waypoints.length - 1; i++) {
    const a = waypoints[i], b = waypoints[i + 1];
    const len = dist(a.x, a.z, b.x, b.z);
    seg.push({ a, b, len, start: total });
    total += len;
  }
  return { seg, total };
}

// Map a distance-travelled `t` to an {x, z, done}. done=true once past the end.
export function positionAtDistance(path, t) {
  if (t <= 0) {
    const a = path.seg[0].a;
    return { x: a.x, z: a.z, done: false };
  }
  if (t >= path.total) {
    const last = path.seg[path.seg.length - 1].b;
    return { x: last.x, z: last.z, done: true };
  }
  for (const s of path.seg) {
    if (t <= s.start + s.len) {
      const local = (t - s.start) / s.len;
      return {
        x: s.a.x + (s.b.x - s.a.x) * local,
        z: s.a.z + (s.b.z - s.a.z) * local,
        done: false,
      };
    }
  }
  const last = path.seg[path.seg.length - 1].b;
  return { x: last.x, z: last.z, done: true };
}

// ---- Wave escalation (PURE) ------------------------------------------------
export function bugsInWave(wave) {
  return CONFIG.baseBugsPerWave + (wave - 1) * CONFIG.bugsPerWaveGrowth;
}
export function bugHpForWave(wave) {
  return Math.round(CONFIG.bugBaseHp * Math.pow(CONFIG.bugHpWaveGrowth, wave - 1));
}
export function bugSpeedForWave(wave) {
  // Slight speed creep so late waves feel faster.
  return CONFIG.bugSpeed * (1 + (wave - 1) * 0.04);
}

// ---- Game state factory ----------------------------------------------------
export function createGame(pads, waypoints) {
  return {
    currency: CONFIG.startCurrency,
    lives: CONFIG.startLives,
    wave: 0,                 // 0 = pre-game / between waves; becomes 1 on first spawn
    pads,
    path: buildPathLengths(waypoints),
    waypoints,
    bugs: [],                // {id,x,z,t,hp,maxHp,speed,reward,reachedHive,dead}
    projectiles: [],         // {id, x, z, targetId, speed, damage, fromPadId}
    nextBugId: 1,
    nextProjId: 1,
    // wave scheduler
    phase: 'idle',           // 'idle' | 'spawning' | 'wave-clear' | 'won' | 'lost'
    spawnTimer: 0,
    spawnedThisWave: 0,
    interTimer: CONFIG.interWaveDelay,
    gameOver: false,
    won: false,
    stats: { kills: 0, leaked: 0, built: 0 },
  };
}

// ---- Spawning --------------------------------------------------------------
export function spawnBug(state, wave) {
  const hp = bugHpForWave(wave);
  const start = positionAtDistance(state.path, 0);
  const bug = {
    id: state.nextBugId++,
    x: start.x, z: start.z, t: 0,
    hp, maxHp: hp,
    speed: bugSpeedForWave(wave),
    reward: CONFIG.bugReward,
    reachedHive: false,
    dead: false,
  };
  state.bugs.push(bug);
  return bug;
}

// Begin the next wave (called by the scheduler). Returns new wave number.
export function startWave(state) {
  state.wave += 1;
  state.phase = 'spawning';
  state.spawnTimer = 0;
  state.spawnedThisWave = 0;
  return state.wave;
}

// ---- Core simulation step (PURE except for nothing — fully deterministic) ---
// dt in seconds. Mutates state. The renderer calls this every frame and then
// reads state to update meshes. Returns a list of discrete events for FX
// (e.g. {type:'kill',x,z}, {type:'leak'}, {type:'shoot',...}) so the renderer
// can spawn particles without re-deriving them.
export function step(state, dt) {
  const events = [];
  if (state.gameOver) return events;

  // --- Wave scheduler ---
  if (state.phase === 'idle' || state.phase === 'wave-clear') {
    state.interTimer -= dt;
    if (state.interTimer <= 0) {
      if (state.wave >= CONFIG.totalWaves) {
        // all waves done & cleared -> win (only if no bugs remain)
        if (state.bugs.length === 0) {
          state.phase = 'won';
          state.won = true;
          state.gameOver = true;
          events.push({ type: 'win' });
          return events;
        }
      } else {
        startWave(state);
        events.push({ type: 'wave-start', wave: state.wave });
      }
    }
  }

  if (state.phase === 'spawning') {
    state.spawnTimer -= dt;
    const total = bugsInWave(state.wave);
    if (state.spawnedThisWave < total && state.spawnTimer <= 0) {
      spawnBug(state, state.wave);
      state.spawnedThisWave += 1;
      state.spawnTimer = CONFIG.spawnInterval;
    }
    if (state.spawnedThisWave >= total) {
      state.phase = 'awaiting-clear';
    }
  }

  // --- Move bugs ---
  for (const bug of state.bugs) {
    if (bug.dead) continue;
    bug.t += bug.speed * dt;
    const pos = positionAtDistance(state.path, bug.t);
    bug.x = pos.x; bug.z = pos.z;
    if (pos.done && !bug.reachedHive) {
      bug.reachedHive = true;
      bug.dead = true;
      state.lives -= CONFIG.bugLivesCost;
      state.stats.leaked += 1;
      events.push({ type: 'leak', x: bug.x, z: bug.z });
      if (state.lives <= 0) {
        state.lives = 0;
        state.phase = 'lost';
        state.gameOver = true;
        events.push({ type: 'lose' });
      }
    }
  }

  // --- Turrets fire ---
  for (const pad of state.pads) {
    const t = pad.turret;
    if (!t) continue;
    t.cooldown -= dt;
    if (t.cooldown > 0) continue;
    const range = CONFIG.turretRange[t.level];
    const target = nearestBugInRange(pad.x, pad.z, range, state.bugs);
    if (target) {
      t.cooldown = CONFIG.turretFireCooldown;
      state.projectiles.push({
        id: state.nextProjId++,
        x: pad.x, z: pad.z,
        targetId: target.id,
        speed: CONFIG.projectileSpeed,
        damage: CONFIG.turretDamage[t.level],
        fromPadId: pad.id,
      });
      events.push({ type: 'shoot', x: pad.x, z: pad.z, targetId: target.id });
    }
  }

  // --- Move projectiles & resolve hits ---
  const liveProj = [];
  for (const p of state.projectiles) {
    const target = state.bugs.find((b) => b.id === p.targetId && !b.dead);
    if (!target) {
      // target gone — drop the projectile
      continue;
    }
    const dx = target.x - p.x, dz = target.z - p.z;
    const d = Math.sqrt(dx * dx + dz * dz);
    const stepLen = p.speed * dt;
    if (d <= stepLen || d < 0.4) {
      // hit
      target.hp -= p.damage;
      events.push({ type: 'hit', x: target.x, z: target.z });
      if (target.hp <= 0 && !target.dead) {
        target.dead = true;
        state.currency += target.reward;
        state.stats.kills += 1;
        events.push({ type: 'kill', x: target.x, z: target.z });
      }
      // projectile consumed
    } else {
      p.x += (dx / d) * stepLen;
      p.z += (dz / d) * stepLen;
      liveProj.push(p);
    }
  }
  state.projectiles = liveProj;

  // --- Reap dead bugs ---
  state.bugs = state.bugs.filter((b) => !b.dead);

  // --- Wave clear detection ---
  if (state.phase === 'awaiting-clear' && state.bugs.length === 0) {
    state.phase = 'wave-clear';
    state.interTimer = CONFIG.interWaveDelay;
    events.push({ type: 'wave-clear', wave: state.wave });
    if (state.wave >= CONFIG.totalWaves) {
      // last wave cleared -> win next scheduler tick (handled above)
    }
  }

  return events;
}

// ---- Reset -----------------------------------------------------------------
export function resetGame(state) {
  const fresh = createGame(
    state.pads.map((p) => ({ id: p.id, x: p.x, z: p.z, turret: null })),
    state.waypoints
  );
  Object.assign(state, fresh);
  return state;
}
