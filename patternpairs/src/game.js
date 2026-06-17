// game.js — pure gameplay logic for PATTERN PAIRS.
// No three.js, no DOM. Everything here is deterministic and unit-testable.

// Level definitions: grid size grows each level.
// pairs = (cols*rows)/2 must be an integer (every grid below is even).
export const LEVELS = [
  { cols: 4, rows: 2 }, // 8 cards  -> 4 pairs
  { cols: 4, rows: 3 }, // 12 cards -> 6 pairs
  { cols: 4, rows: 4 }, // 16 cards -> 8 pairs
];

// A small Mulberry32 PRNG so shuffles are seedable & testable.
export function makeRng(seed = 0x9e3779b9) {
  let a = seed >>> 0;
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Fisher–Yates shuffle (in place) using a supplied rng. Returns the array.
export function shuffle(arr, rng = Math.random) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

// Build a deck for a level: a shuffled array of card objects.
// Each pair shares a `faceId` (0..pairs-1). `id` is the unique slot index.
export function buildDeck(level, rng = Math.random) {
  const { cols, rows } = LEVELS[level];
  const total = cols * rows;
  if (total % 2 !== 0) throw new Error(`level ${level} has odd card count ${total}`);
  const pairs = total / 2;

  const faces = [];
  for (let f = 0; f < pairs; f++) {
    faces.push(f, f); // two of each face
  }
  shuffle(faces, rng);

  return faces.map((faceId, id) => ({
    id, // unique slot
    faceId, // which pattern (matching faceIds form a pair)
    col: id % cols,
    row: Math.floor(id / cols),
    matched: false,
    revealed: false, // true while flipped face-up (transient or matched)
  }));
}

// Game states for the flip flow.
export const STATE = {
  IDLE: 'idle', // 0 cards flipped, accepting input
  ONE_UP: 'one_up', // 1 card flipped, accepting input
  RESOLVING: 'resolving', // 2 cards flipped, waiting for resolve() (input locked)
  WON: 'won',
};

// Pure game-state container. Rendering reads from it; it never touches three.js.
export class Game {
  constructor({ level = 0, rng = Math.random } = {}) {
    this.rng = rng;
    this.startLevel(level);
  }

  startLevel(level) {
    this.level = level;
    this.deck = buildDeck(level, this.rng);
    this.cards = new Map(this.deck.map((c) => [c.id, c]));
    this.pairsTotal = this.deck.length / 2;
    this.pairsFound = 0;
    this.moves = 0;
    this.flipped = []; // ids of currently face-up, unmatched cards (max 2)
    this.state = STATE.IDLE;
    this.lastResult = null; // 'match' | 'mismatch' | null — set after resolve()
    return this;
  }

  isLastLevel() {
    return this.level >= LEVELS.length - 1;
  }

  // Can this card be flipped right now?
  canFlip(id) {
    if (this.state === STATE.RESOLVING || this.state === STATE.WON) return false;
    const card = this.cards.get(id);
    if (!card) return false;
    if (card.matched || card.revealed) return false; // already up or solved
    return true;
  }

  // Flip a card face-up. Returns a result describing what happened, or null if
  // the flip was rejected. When the 2nd card is flipped, state -> RESOLVING and
  // the caller must call resolve() (typically after a short animation delay).
  flip(id) {
    if (!this.canFlip(id)) return null;
    const card = this.cards.get(id);
    card.revealed = true;
    this.flipped.push(id);

    if (this.flipped.length === 1) {
      this.state = STATE.ONE_UP;
      return { type: 'flip', id, count: 1 };
    }

    // Second card -> this counts as a move; lock input until resolve().
    this.moves += 1;
    this.state = STATE.RESOLVING;
    const [aId, bId] = this.flipped;
    const a = this.cards.get(aId);
    const b = this.cards.get(bId);
    const isMatch = a.faceId === b.faceId;
    return { type: 'flip', id, count: 2, pending: true, isMatch };
  }

  // Resolve the two flipped cards. On match they stay revealed+matched; on
  // mismatch they flip back face-down. Returns { result, won, matchedIds }.
  resolve() {
    if (this.state !== STATE.RESOLVING) return null;
    const [aId, bId] = this.flipped;
    const a = this.cards.get(aId);
    const b = this.cards.get(bId);
    const isMatch = a.faceId === b.faceId;

    let matchedIds = [];
    if (isMatch) {
      a.matched = b.matched = true;
      this.pairsFound += 1;
      matchedIds = [aId, bId];
      this.lastResult = 'match';
    } else {
      a.revealed = b.revealed = false;
      this.lastResult = 'mismatch';
    }
    this.flipped = [];

    const won = this.pairsFound === this.pairsTotal;
    this.state = won ? STATE.WON : STATE.IDLE;
    return { result: this.lastResult, won, matchedIds, isMatch };
  }

  // Advance to the next level if one exists. Returns true if advanced.
  nextLevel() {
    if (this.isLastLevel()) return false;
    this.startLevel(this.level + 1);
    return true;
  }

  // Snapshot for HUD / debugging.
  status() {
    return {
      level: this.level,
      levelLabel: this.level + 1,
      totalLevels: LEVELS.length,
      pairsFound: this.pairsFound,
      pairsTotal: this.pairsTotal,
      moves: this.moves,
      state: this.state,
      won: this.state === STATE.WON,
    };
  }
}
