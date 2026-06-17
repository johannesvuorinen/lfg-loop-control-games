// Pure combat math: damage rolls, crits, scoring. No three.js, no DOM.
// A deterministic RNG is injected so tests are reproducible and gameplay tuning is
// isolated from rendering.

/** Mulberry32 — tiny, fast, deterministic PRNG. Returns a function -> [0,1). */
export function makeRng(seed = 1) {
  let a = seed >>> 0;
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const DEFAULT_WEAPON = {
  baseDamage: 24,
  damageVariance: 0.25, // +/-25% spread
  critChance: 0.2,      // 20%
  critMultiplier: 2.0,
};

/**
 * Roll a single hit. Returns the integer damage plus whether it crit, so the
 * renderer can size/color the floating number.
 * @param {{baseDamage:number,damageVariance:number,critChance:number,critMultiplier:number}} weapon
 * @param {() => number} rng  returns [0,1)
 * @returns {{ damage:number, crit:boolean }}
 */
export function rollDamage(weapon, rng) {
  const { baseDamage, damageVariance, critChance, critMultiplier } = weapon;
  // Variance roll in [1-variance, 1+variance].
  const spread = 1 + (rng() * 2 - 1) * damageVariance;
  let dmg = baseDamage * spread;
  const crit = rng() < critChance;
  if (crit) dmg *= critMultiplier;
  return { damage: Math.max(1, Math.round(dmg)), crit };
}

/**
 * Apply damage to a health value, clamped at 0.
 * @returns {{ health:number, dead:boolean, overkill:number }}
 */
export function applyDamage(health, damage) {
  const next = health - damage;
  return {
    health: Math.max(0, next),
    dead: next <= 0,
    overkill: next < 0 ? -next : 0,
  };
}

/**
 * Score awarded for a kill. Crits and later waves are worth more, encouraging
 * aggressive play and survival.
 * @param {{ crit?:boolean, wave?:number, enemyValue?:number }} opts
 */
export function scoreForKill({ crit = false, wave = 1, enemyValue = 100 } = {}) {
  let s = enemyValue;
  if (crit) s = Math.round(s * 1.5);
  s += (wave - 1) * 10; // wave bonus
  return s;
}
