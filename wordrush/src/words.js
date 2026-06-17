// Word bank for WORD RUSH, bucketed by length so difficulty can ramp.
// Pure data + a tiny picker. No DOM, no three.js — safe to unit test.

export const WORD_BANK = {
  short: [ // 3-4 letters
    'cat', 'dog', 'run', 'jump', 'fox', 'sky', 'sea', 'sun', 'map', 'key',
    'red', 'web', 'fly', 'ice', 'owl', 'bee', 'oak', 'fig', 'jam', 'kit',
    'box', 'cup', 'fan', 'gem', 'hat', 'ink', 'jet', 'log', 'nut', 'pen',
    'code', 'game', 'word', 'type', 'fast', 'wave', 'star', 'moon', 'leaf', 'rock',
  ],
  medium: [ // 5-6 letters
    'planet', 'rocket', 'galaxy', 'cosmic', 'meteor', 'plasma', 'photon', 'matrix',
    'cipher', 'syntax', 'pixel', 'vortex', 'spiral', 'crystal', 'thunder', 'breeze',
    'shadow', 'flame', 'frost', 'storm', 'ocean', 'forest', 'desert', 'canyon',
    'keyboard', 'cursor', 'buffer', 'stream', 'kernel', 'vector', 'render', 'sprite',
  ],
  long: [ // 7+ letters
    'asteroid', 'nebula', 'supernova', 'gravity', 'velocity', 'momentum',
    'algorithm', 'function', 'variable', 'compiler', 'protocol', 'firmware',
    'spaceship', 'astronaut', 'satellite', 'telescope', 'wormhole', 'lightspeed',
    'adventure', 'challenge', 'keystroke', 'mechanic', 'pipeline', 'threshold',
  ],
};

// Difficulty tier weights as a function of level (1-based, climbs forever).
// Returns { short, medium, long } probabilities summing to 1.
export function tierWeights(level) {
  // Early: mostly short. Later: shift toward long.
  const t = Math.min(1, (level - 1) / 12); // 0..1 ramp over ~12 levels
  const short = Math.max(0.1, 0.8 - 0.7 * t);
  const long = Math.min(0.55, 0.05 + 0.5 * t);
  const medium = Math.max(0, 1 - short - long);
  return { short, medium, long };
}

// Pure picker: takes a [0,1) random value so tests are deterministic.
export function pickWord(level, rnd) {
  const w = tierWeights(level);
  let tier;
  if (rnd < w.short) tier = 'short';
  else if (rnd < w.short + w.medium) tier = 'medium';
  else tier = 'long';
  const bank = WORD_BANK[tier];
  // Use the fractional part of a scaled rnd to index, keeping it deterministic.
  const idx = Math.floor((rnd * 9973) % bank.length);
  return { text: bank[idx], tier };
}
