// Pure level data — no three.js, no cannon-es. Just plain config objects.
//
// Coordinate conventions (shared with physics.js / main.js):
//   +Y is up. The platform top sits at y = 0. Blocks stack upward from there.
//   A block is "off the platform" once its centre falls below FALL_Y (see logic.js)
//   OR strays beyond the platform footprint — both handled in logic.js.
//
// Each tower is a column of stacked boxes at (x, z). `blocks` is the count,
// stacked from the platform up. `size` is the half-extent-friendly full box size.

export const BLOCK_SIZE = { x: 1.1, y: 1.1, z: 1.1 };

// Platform is a square slab centred at origin. `half` is half the side length,
// so the playable top surface spans [-half, +half] in x and z.
export function makeLevel({ id, name, platformHalf, target, swings, towers }) {
  return { id, name, platformHalf, target, swings, towers };
}

// Helper: build a rectangular grid of single-block-wide towers.
function grid({ cols, rows, height, spacing, originX = 0, originZ = 0 }) {
  const towers = [];
  const xOffset = ((cols - 1) * spacing) / 2;
  const zOffset = ((rows - 1) * spacing) / 2;
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      towers.push({
        x: originX + c * spacing - xOffset,
        z: originZ + r * spacing - zOffset,
        blocks: height,
      });
    }
  }
  return towers;
}

// Geometry note (tuned empirically — see the design notes in NOTES.md):
// The pivot sits at z = -2 and the ball swings toward +z. The ball is LOWEST and
// FASTEST near z = -2 (bottom of its arc) and rises as it travels to +z. So the
// "strike zone" is z ≈ 0..2 — structures are placed there. The platform is kept
// SNUG (half ≈ 4) so a solid hit launches blocks clean OFF the edge rather than
// just toppling them onto an oversized deck. These values were swept until every
// level is reliably clearable and difficulty scales up across the three.
export const LEVELS = [
  makeLevel({
    id: 1,
    name: 'Warm-Up',
    platformHalf: 4,
    target: 4,
    swings: 5,
    // A 2x2 cluster of short towers in the strike zone. (12 blocks)
    towers: grid({ cols: 2, rows: 2, height: 3, spacing: 1.3, originZ: 1.2 }),
  }),
  makeLevel({
    id: 2,
    name: 'The Wall',
    platformHalf: 4,
    target: 8,
    swings: 5,
    // A 4-wide, 2-deep wall. The front row shunts the back row off the lip. (24 blocks)
    towers: grid({ cols: 4, rows: 2, height: 3, spacing: 1.2, originZ: 1.2 }),
  }),
  makeLevel({
    id: 3,
    name: 'The Citadel',
    platformHalf: 4.5,
    target: 14,
    swings: 6,
    // A dense 3x3 keep of taller towers — needs several well-aimed swings. (36 blocks)
    towers: grid({ cols: 3, rows: 3, height: 4, spacing: 1.25, originZ: 1.2 }),
  }),
];

// Total block count for a level (used for HUD "X / total knocked" sanity & tests).
export function totalBlocks(level) {
  return level.towers.reduce((sum, t) => sum + t.blocks, 0);
}
