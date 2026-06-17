// locomotion.js — PURE locomotion + animation-state logic (no three.js).
//
// Drives (a) the kinematic character: planar move in the camera frame +
// manual gravity + jump, and (b) the animation state machine that an
// AnimationMixer crossfades between. Kept dependency-free for node --test.

export function clamp(v, lo, hi) {
  return v < lo ? lo : v > hi ? hi : v;
}

// Map raw WASD/arrow booleans + camera yaw to a world-space planar move
// direction (normalized). Camera-relative: "W" is "into the screen".
export function moveDirFromInput(input, yaw) {
  let f = 0;
  let s = 0;
  if (input.forward) f += 1;
  if (input.back) f -= 1;
  if (input.right) s += 1;
  if (input.left) s -= 1;
  if (f === 0 && s === 0) return { x: 0, z: 0, moving: false };
  // forward axis from yaw, strafe axis = forward rotated -90deg
  const fwd = { x: Math.sin(yaw), z: Math.cos(yaw) };
  const right = { x: Math.cos(yaw), z: -Math.sin(yaw) };
  let dx = fwd.x * f + right.x * s;
  let dz = fwd.z * f + right.z * s;
  const len = Math.hypot(dx, dz) || 1;
  return { x: dx / len, z: dz / len, moving: true };
}

// Shortest signed angular delta a -> b, in (-PI, PI]. Used to ease the
// character's visual facing toward the move direction without spinning the
// long way around.
export function angleDelta(a, b) {
  let d = (b - a) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}

// Ease current facing yaw toward target by at most turnSpeed*dt.
export function turnToward(current, target, turnSpeed, dt) {
  const d = angleDelta(current, target);
  const maxStep = turnSpeed * dt;
  if (Math.abs(d) <= maxStep) return target;
  return current + Math.sign(d) * maxStep;
}

// Integrate the character one step. State carries position + vy + grounded.
// Returns a NEW state (no mutation) so tests can assert on snapshots.
//
//   cfg: { speed, gravity, jumpSpeed, groundY, fallLimitY }
//   moveDir: {x,z} normalized (or zero)
//   jumpPressed: edge-triggered this frame
export function stepCharacter(state, moveDir, jumpPressed, dt, cfg) {
  let { x, y, z, vy, grounded } = state;

  // planar motion (kinematic: velocity = speed in move dir)
  x += moveDir.x * cfg.speed * dt;
  z += moveDir.z * cfg.speed * dt;

  // jump: only from the ground, edge-triggered
  let justJumped = false;
  if (jumpPressed && grounded) {
    vy = cfg.jumpSpeed;
    grounded = false;
    justJumped = true;
  }

  // manual gravity (three.js has no physics; we integrate it ourselves)
  vy -= cfg.gravity * dt;
  y += vy * dt;

  // ground resolve (flat ground plane at groundY for the pure model; the
  // renderer adds per-island raycasts on top of this).
  let landed = false;
  if (y <= cfg.groundY) {
    y = cfg.groundY;
    if (vy < 0) landed = !grounded; // landed THIS step
    vy = 0;
    grounded = true;
  }

  const fell = y < cfg.fallLimitY;
  return { x, y, z, vy, grounded, justJumped, landed, fell };
}

// Animation state machine. Picks the clip an AnimationMixer should be
// crossfading toward, from the character's kinematic state. Priority:
// airborne (jump/fall) > running > idle.
//
//   speed2D: planar speed magnitude (units/s)
//   returns one of: 'idle' | 'run' | 'jump' | 'fall'
export function animationStateFor(kin, speed2D, runThreshold = 0.1) {
  if (!kin.grounded) {
    return kin.vy > 0.2 ? "jump" : "fall";
  }
  if (speed2D > runThreshold) return "run";
  return "idle";
}
