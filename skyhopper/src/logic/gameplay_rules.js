// gameplay_rules.js — PURE game-state rules (no three.js).
//
// Orb collection, win/lose, respawn. The renderer holds three.js meshes and
// just reflects whatever these functions decide. Dependency-free for tests.

export function dist2D(a, b) {
  return Math.hypot(a.x - b.x, a.z - b.z);
}
export function dist3D(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
}

export function makeGameState(orbCount, requiredOrbs) {
  return {
    orbs: Array.from({ length: orbCount }, (_, i) => ({ id: i, collected: false })),
    collected: 0,
    required: requiredOrbs,
    status: "playing", // 'playing' | 'won' | 'lost'
    lives: 3,
  };
}

// Collect any orb whose mesh is within `radius` of the player. Mutates and
// returns how many were newly collected this call (renderer hides those).
export function collectOrbs(gs, playerPos, orbPositions, radius) {
  let newly = 0;
  for (const orb of gs.orbs) {
    if (orb.collected) continue;
    const p = orbPositions[orb.id];
    if (!p) continue;
    if (dist3D(playerPos, p) <= radius) {
      orb.collected = true;
      gs.collected += 1;
      newly += 1;
    }
  }
  return newly;
}

// The goal portal only counts once enough orbs are in hand.
export function portalIsOpen(gs) {
  return gs.collected >= gs.required;
}

// Reaching the portal while it's open => win.
export function checkPortal(gs, playerPos, portalPos, radius) {
  if (gs.status !== "playing") return false;
  if (!portalIsOpen(gs)) return false;
  if (dist3D(playerPos, portalPos) <= radius) {
    gs.status = "won";
    return true;
  }
  return false;
}

// Falling off the islands costs a life and respawns at the checkpoint.
// Out of lives => lost. Returns { respawn, gameOver }.
export function handleFall(gs) {
  if (gs.status !== "playing") return { respawn: false, gameOver: false };
  gs.lives -= 1;
  if (gs.lives <= 0) {
    gs.status = "lost";
    return { respawn: false, gameOver: true };
  }
  return { respawn: true, gameOver: false };
}

// Full reset back to a fresh run (used by the on-screen reset / win+lose).
export function resetGame(gs) {
  for (const orb of gs.orbs) orb.collected = false;
  gs.collected = 0;
  gs.status = "playing";
  gs.lives = 3;
  return gs;
}
