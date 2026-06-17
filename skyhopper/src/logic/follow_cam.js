// follow_cam.js — PURE follow-camera math (no three.js).
//
// three.js core ships OrbitControls (an editor orbit) but NO gameplay
// follow-cam: there is nothing that sits a camera behind a moving avatar,
// damps toward it, and looks slightly ahead of travel. All of that is
// hand-rolled here. These functions take plain {x,y,z} vectors so they can
// run under `node --test` with zero rendering deps.

// Critically-damped smoothing factor for a per-frame lerp. Using
// 1-exp(-dt/tau) (instead of a raw alpha) makes the follow rate
// frame-rate independent: same feel at 30fps and 144fps.
export function smoothingAlpha(dt, tau) {
  if (tau <= 0) return 1;
  const a = 1 - Math.exp(-dt / tau);
  return a < 0 ? 0 : a > 1 ? 1 : a;
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function lerpVec(a, b, t) {
  return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t), z: lerp(a.z, b.z, t) };
}

// Unit forward vector from a yaw (radians) about +Y. yaw=0 faces +Z.
export function forwardFromYaw(yaw) {
  return { x: Math.sin(yaw), y: 0, z: Math.cos(yaw) };
}

// Where the camera WANTS to be this frame, before damping.
//
//   desired = target
//           + back  * (-forward)        // sit behind the facing dir
//           + up    *  CAM_HEIGHT        // and above
//           - forward * lookAhead*speed  // (boom pulls back as you speed up)
//
// `target` is the character root; we add headOffset when we look at them so
// the camera frames the head, not the feet.
export function desiredCameraPosition(target, yaw, opts) {
  const { distance, height, lookAhead = 0, speed = 0 } = opts;
  const fwd = forwardFromYaw(yaw);
  const boom = distance + lookAhead * speed; // dolly back a touch at speed
  return {
    x: target.x - fwd.x * boom,
    y: target.y + height,
    z: target.z - fwd.z * boom,
  };
}

// The point the camera looks at: the character's head, nudged slightly in
// the direction of travel so the player sees a bit more of what's ahead.
export function cameraLookTarget(target, yaw, opts) {
  const { headOffset = 0, lookAheadLook = 0, speed = 0 } = opts;
  const fwd = forwardFromYaw(yaw);
  return {
    x: target.x + fwd.x * lookAheadLook * speed,
    y: target.y + headOffset,
    z: target.z + fwd.z * lookAheadLook * speed,
  };
}

// One integration step of the follow camera. Returns the NEW camera
// position (damped from `current` toward the desired pose). Pure: caller
// owns the three.js camera and just copies the result in.
export function stepFollowCamera(current, target, yaw, dt, cfg) {
  const desired = desiredCameraPosition(target, yaw, {
    distance: cfg.distance,
    height: cfg.height,
    lookAhead: cfg.lookAhead,
    speed: cfg.speed ?? 0,
  });
  const a = smoothingAlpha(dt, cfg.tau);
  return lerpVec(current, desired, a);
}
