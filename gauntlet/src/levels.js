// levels.js — PURE level definitions (data only, no rendering).
//
// Three levels, escalating: more orbs, more patrols, with longer & faster
// looping routes. Coordinates are world-space (X,Z plane; Y is "up" but the
// arena is flat so patrol Y stays near 0). The arena is a square of half-size
// ARENA / 2 centred at the origin; the player and everything else lives inside.

export const ARENA = 44; // full width/depth of the play field (world units)

// Each patrol: { waypoints:[[x,y,z],...], speed, phase?, kind, radius }
//   kind   — 'drone' (sphere bot) or 'saw' (spinning blade), purely cosmetic
//   radius — collision radius for touching the player
//
// Each level: { name, orbs:[[x,z],...], patrols:[...] }
// Orbs are given as [x,z]; they hover at a fixed height set by the renderer.

export const LEVELS = [
  {
    name: 'WARMUP',
    orbs: [
      [-12, -12], [0, -14], [12, -12],
      [-14, 0], [14, 0],
      [-12, 12], [0, 14], [12, 12],
    ],
    patrols: [
      {
        kind: 'drone',
        // a gentle rounded square loop around the centre
        waypoints: [
          [-10, 0, -10], [10, 0, -10], [10, 0, 10], [-10, 0, 10],
        ],
        speed: 7,
        phase: 0,
        radius: 1.1,
      },
    ],
  },

  {
    name: 'CROSSFIRE',
    orbs: [
      [-16, -16], [-16, 16], [16, -16], [16, 16],
      [0, 0],
      [-8, 0], [8, 0], [0, -8], [0, 8],
      [-16, 0], [16, 0],
    ],
    patrols: [
      {
        kind: 'drone',
        // big outer loop, longer route
        waypoints: [
          [-17, 0, -17], [0, 0, -19], [17, 0, -17],
          [19, 0, 0], [17, 0, 17], [0, 0, 19],
          [-17, 0, 17], [-19, 0, 0],
        ],
        speed: 10,
        phase: 0,
        radius: 1.1,
      },
      {
        kind: 'saw',
        // a tight figure-of-loop through the middle, opposite phase
        waypoints: [
          [-12, 0, 0], [0, 0, -10], [12, 0, 0], [0, 0, 10],
        ],
        speed: 11,
        phase: 0.5,
        radius: 1.3,
      },
    ],
  },

  {
    name: 'GAUNTLET',
    orbs: [
      [-18, -18], [-6, -18], [6, -18], [18, -18],
      [-18, 18], [-6, 18], [6, 18], [18, 18],
      [-18, -6], [-18, 6], [18, -6], [18, 6],
      [0, 0], [-9, 0], [9, 0],
    ],
    patrols: [
      {
        kind: 'drone',
        // sweeping outer perimeter, fast
        waypoints: [
          [-19, 0, -19], [0, 0, -20], [19, 0, -19],
          [20, 0, 0], [19, 0, 19], [0, 0, 20],
          [-19, 0, 19], [-20, 0, 0],
        ],
        speed: 14,
        phase: 0,
        radius: 1.1,
      },
      {
        kind: 'saw',
        // diagonal slash loop
        waypoints: [
          [-16, 0, -16], [0, 0, -4], [16, 0, 16], [0, 0, 4],
        ],
        speed: 13,
        phase: 0.25,
        radius: 1.3,
      },
      {
        kind: 'saw',
        // the other diagonal, mirrored
        waypoints: [
          [16, 0, -16], [4, 0, 0], [-16, 0, 16], [-4, 0, 0],
        ],
        speed: 13,
        phase: 0.75,
        radius: 1.3,
      },
      {
        kind: 'drone',
        // small fast inner ring weaving the centre orbs
        waypoints: [
          [-9, 0, -6], [9, 0, -6], [9, 0, 6], [-9, 0, 6],
        ],
        speed: 12,
        phase: 0.5,
        radius: 1.0,
      },
    ],
  },
];

export const STARTING_LIVES = 3;
