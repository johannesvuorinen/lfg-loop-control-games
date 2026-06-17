// WORD RUSH — pure game engine. No DOM, no three.js, no timers.
// The renderer drives this with explicit `update(dt)` ticks and `typeChar(ch)`
// calls. Everything here is deterministic and unit-testable.

import { pickWord } from './words.js';

export const GAME = {
  WIDTH: 100,      // logical play-field width  (renderer maps to pixels/world)
  HEIGHT: 100,     // logical play-field height; words fall from 100 -> 0
  START_LIVES: 3,
  BASE_FALL: 4.5,  // units/sec at level 1
  FALL_PER_LEVEL: 0.9,
  BASE_SPAWN: 1.9, // seconds between spawns at level 1
  MIN_SPAWN: 0.55,
  SPAWN_RAMP: 0.12, // seconds shaved per level
  LEVEL_EVERY: 8,   // words cleared to advance a level
};

let _id = 0;
function nextId() { return ++_id; }

// Score for completing a word: base + length bonus + tier bonus + combo.
export function wordScore(word, combo) {
  const tierBonus = { short: 0, medium: 25, long: 60 }[word.tier] ?? 0;
  const base = 10 + word.text.length * 5;
  const comboMult = 1 + Math.min(combo, 10) * 0.1; // up to 2x at 10 combo
  return Math.round((base + tierBonus) * comboMult);
}

export function createGame(opts = {}) {
  const rng = opts.rng ?? Math.random;
  _id = 0;
  return {
    rng,
    words: [],          // active falling words
    activeId: null,     // word currently being typed (locked by first letter)
    typed: '',          // current correct prefix typed for the active word
    score: 0,
    lives: GAME.START_LIVES,
    level: 1,
    cleared: 0,         // words completed (drives leveling)
    combo: 0,           // consecutive completes without a miss/drop
    bestCombo: 0,
    keystrokes: 0,      // total correct letters typed (for WPM/accuracy)
    misses: 0,          // wrong keystrokes
    elapsed: 0,         // seconds of play
    spawnTimer: 0,
    over: false,
    lastEvent: null,    // transient: 'spawn'|'complete'|'drop'|'miss'|'lock'|'levelup'
    highScore: opts.highScore ?? 0,
  };
}

export function fallSpeed(level) {
  return GAME.BASE_FALL + (level - 1) * GAME.FALL_PER_LEVEL;
}

export function spawnInterval(level) {
  return Math.max(GAME.MIN_SPAWN, GAME.BASE_SPAWN - (level - 1) * GAME.SPAWN_RAMP);
}

// Spawn one word at a horizontal slot that avoids overlapping existing words' x.
export function spawnWord(g) {
  const r = g.rng();
  const word = pickWord(g.level, r);
  // pick an x with margins; nudge away from the nearest active word
  let x = 8 + g.rng() * (GAME.WIDTH - 16);
  const w = {
    id: nextId(),
    text: word.text,
    tier: word.tier,
    x,
    y: GAME.HEIGHT + 4, // start just above the top
    speed: fallSpeed(g.level) * (0.85 + g.rng() * 0.3),
  };
  g.words.push(w);
  g.lastEvent = 'spawn';
  return w;
}

// Find the active word object, or null.
export function activeWord(g) {
  if (g.activeId == null) return null;
  return g.words.find((w) => w.id === g.activeId) ?? null;
}

// Choose which word to target when no word is locked yet.
// Prefer the LOWEST word (closest to the bottom = most urgent) whose next
// letter matches `ch`. This makes typing feel responsive under pressure.
function chooseTarget(g, ch) {
  let best = null;
  for (const w of g.words) {
    if (w.text[0] === ch) {
      if (!best || w.y < best.y) best = w; // lower y = closer to bottom
    }
  }
  return best;
}

// Core input handler. `ch` is a single lowercase letter a-z.
// Returns the event string describing what happened.
export function typeChar(g, ch) {
  if (g.over) return 'over';
  if (!/^[a-z]$/.test(ch)) return 'ignored';

  let active = activeWord(g);
  g.justLocked = false;

  // No active word: try to lock onto one whose first letter matches.
  if (!active) {
    const target = chooseTarget(g, ch);
    if (!target) {
      g.misses++;
      g.combo = 0;
      g.lastEvent = 'miss';
      return 'miss';
    }
    g.activeId = target.id;
    g.typed = '';
    active = target;
    g.justLocked = true; // renderer can react; return value is the keystroke outcome
  }

  // We have an active word; check the next expected letter.
  const expected = active.text[g.typed.length];
  if (ch === expected) {
    g.typed += ch;
    g.keystrokes++;
    if (g.typed.length === active.text.length) {
      return completeWord(g, active);
    }
    g.lastEvent = 'progress';
    return 'progress';
  } else {
    // Wrong letter for the locked word.
    g.misses++;
    g.combo = 0;
    g.lastEvent = 'miss';
    return 'miss';
  }
}

function completeWord(g, w) {
  g.score += wordScore(w, g.combo);
  g.combo++;
  if (g.combo > g.bestCombo) g.bestCombo = g.combo;
  g.cleared++;
  g.words = g.words.filter((x) => x.id !== w.id);
  g.activeId = null;
  g.typed = '';
  if (g.score > g.highScore) g.highScore = g.score;

  // Level up?
  const newLevel = 1 + Math.floor(g.cleared / GAME.LEVEL_EVERY);
  if (newLevel > g.level) {
    g.level = newLevel;
    g.lastEvent = 'levelup';
    return 'levelup';
  }
  g.lastEvent = 'complete';
  return 'complete';
}

// Backspace: step back one correct letter (forgiving; lets player re-aim only
// when buffer is empty). Returns true if something changed.
export function backspace(g) {
  if (g.over) return false;
  if (g.typed.length > 0) {
    g.typed = g.typed.slice(0, -1);
    g.lastEvent = 'progress';
    return true;
  }
  // empty buffer -> release the lock so the player can target another word
  if (g.activeId != null) {
    g.activeId = null;
    g.lastEvent = 'progress';
    return true;
  }
  return false;
}

// Advance the simulation by dt seconds. Moves words down, spawns new ones,
// removes words that hit the bottom (costing a life), and ends the game.
// Returns a list of event strings that occurred this tick.
export function update(g, dt) {
  const events = [];
  if (g.over) return events;
  g.elapsed += dt;

  // Move words.
  const survivors = [];
  for (const w of g.words) {
    w.y -= w.speed * dt;
    if (w.y <= 0) {
      // Word reached the bottom.
      g.lives -= 1;
      g.combo = 0;
      if (g.activeId === w.id) {
        g.activeId = null;
        g.typed = '';
      }
      events.push('drop');
      if (g.lives <= 0) {
        g.lives = 0;
        g.over = true;
        g.lastEvent = 'gameover';
        events.push('gameover');
        // keep remaining words frozen for the renderer; stop processing
        g.words = survivors.concat(g.words.filter((x) => x.y > 0 && x.id !== w.id));
        return events;
      }
    } else {
      survivors.push(w);
    }
  }
  g.words = survivors;

  // Spawn logic.
  g.spawnTimer -= dt;
  if (g.spawnTimer <= 0) {
    spawnWord(g);
    events.push('spawn');
    g.spawnTimer += spawnInterval(g.level);
  }
  return events;
}

// Words-per-minute based on correct keystrokes (5 chars == 1 word, the
// standard WPM convention).
export function wpm(g) {
  if (g.elapsed <= 0) return 0;
  const minutes = g.elapsed / 60;
  return Math.round((g.keystrokes / 5) / minutes);
}

// Accuracy 0..100.
export function accuracy(g) {
  const total = g.keystrokes + g.misses;
  if (total === 0) return 100;
  return Math.round((g.keystrokes / total) * 100);
}
