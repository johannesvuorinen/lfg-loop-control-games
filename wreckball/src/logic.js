// Pure game logic — NO three.js, NO cannon-es, NO DOM.
//
// This module owns: scoring, swing budget, win/lose, level progression, and the
// rule for deciding when a block is "off the platform". It takes plain numbers
// (block positions) as input so it can be unit-tested with node --test.

import { LEVELS, totalBlocks } from './levels.js';

// A block centre below this Y is unambiguously fallen (dropped past the platform edge).
export const FALL_Y = -3;

export const PHASE = {
  AIM: 'AIM', // waiting for the player to drag + release a swing
  SWING: 'SWING', // ball is swinging / physics settling after a launch
  WON: 'WON',
  LOST: 'LOST',
};

// Decide whether a block has left the platform.
//   pos     : { x, y, z } block centre (world space)
//   half    : platform half-side length
//   margin  : how far past the edge (in x/z) still counts as "on" before it tips off.
// A block counts as OFF if it has fallen below FALL_Y, OR its centre has moved
// horizontally beyond the platform footprint (it's hanging off / has been shoved past
// the rim and will fall). Either condition is irreversible for scoring purposes.
export function isOffPlatform(pos, half, margin = 0.6) {
  if (pos.y < FALL_Y) return true;
  const limit = half + margin;
  return Math.abs(pos.x) > limit || Math.abs(pos.z) > limit;
}

// Create a fresh run state for a given level index (0-based).
export function createGame(levelIndex = 0, levels = LEVELS) {
  const level = levels[levelIndex];
  if (!level) throw new Error(`No level at index ${levelIndex}`);
  return {
    levelIndex,
    levels,
    level,
    phase: PHASE.AIM,
    swingsUsed: 0,
    knockedOff: 0, // count of blocks confirmed off this level
    score: 0,
    // Set of block ids already counted as off, so we never double-count.
    counted: new Set(),
  };
}

export const SWING_COST = 1;
export const POINTS_PER_BLOCK = 100;
// Bonus for finishing a level with swings to spare — rewards efficient play.
export const SWING_BONUS = 50;

// Player launches a swing. Returns the (mutated) state for convenience.
export function launchSwing(state) {
  if (state.phase !== PHASE.AIM) return state;
  state.swingsUsed += SWING_COST;
  state.phase = PHASE.SWING;
  return state;
}

// Reconcile the world: given the current positions of every block, tally any
// newly-fallen ones and award points. `blocks` is an array of
// { id, pos:{x,y,z} }. Idempotent w.r.t. already-counted blocks.
// Returns the number of NEW blocks knocked off in this call.
export function tallyFallen(state, blocks) {
  const half = state.level.platformHalf;
  let newlyOff = 0;
  for (const b of blocks) {
    if (state.counted.has(b.id)) continue;
    if (isOffPlatform(b.pos, half)) {
      state.counted.add(b.id);
      state.knockedOff += 1;
      state.score += POINTS_PER_BLOCK;
      newlyOff += 1;
    }
  }
  return newlyOff;
}

// Call when the physics has settled after a swing (ball roughly at rest) to move
// back to AIM and evaluate win/lose. `ballAtRest` lets the caller gate this on the
// simulation actually calming down. Returns the state.
export function endSwing(state, ballAtRest = true) {
  if (state.phase !== PHASE.SWING) return state;
  if (!ballAtRest) return state;

  if (state.knockedOff >= state.level.target) {
    // Win — bank a bonus for each unused swing.
    const swingsLeft = Math.max(0, state.level.swings - state.swingsUsed);
    state.score += swingsLeft * SWING_BONUS;
    state.phase = PHASE.WON;
  } else if (state.swingsUsed >= state.level.swings) {
    state.phase = PHASE.LOST;
  } else {
    state.phase = PHASE.AIM;
  }
  return state;
}

export function swingsRemaining(state) {
  return Math.max(0, state.level.swings - state.swingsUsed);
}

export function isLastLevel(state) {
  return state.levelIndex >= state.levels.length - 1;
}

// Advance to the next level, carrying cumulative score forward. Returns a new
// state, or null if there is no next level (game complete).
export function nextLevel(state) {
  if (isLastLevel(state)) return null;
  const next = createGame(state.levelIndex + 1, state.levels);
  next.score = state.score; // carry total score across levels
  return next;
}

// A compact HUD snapshot — what the renderer needs, nothing more.
export function hud(state) {
  return {
    levelName: state.level.name,
    levelId: state.level.id,
    knockedOff: state.knockedOff,
    target: state.level.target,
    totalBlocks: totalBlocks(state.level),
    swingsRemaining: swingsRemaining(state),
    swingsTotal: state.level.swings,
    score: state.score,
    phase: state.phase,
  };
}
