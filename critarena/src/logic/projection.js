// Pure world->screen projection logic. No three.js dependency so it is unit-testable
// in plain node. The game passes in a view-projection matrix (column-major, 16 floats)
// extracted from a three.js camera: projectionMatrix * matrixWorldInverse.
//
// This mirrors exactly what THREE.Vector3.project(camera) does internally:
//   v.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix)
// i.e. apply the combined view-projection matrix, then perspective-divide by w.

/**
 * Multiply a 3D point by a 4x4 column-major matrix, returning clip-space {x,y,z,w}.
 * Column-major means m[col*4 + row] (the layout THREE.Matrix4.elements uses).
 * @param {number[]} m  16-element column-major matrix
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {{x:number,y:number,z:number,w:number}}
 */
export function applyMatrix4(m, x, y, z) {
  return {
    x: m[0] * x + m[4] * y + m[8] * z + m[12],
    y: m[1] * x + m[5] * y + m[9] * z + m[13],
    z: m[2] * x + m[6] * y + m[10] * z + m[14],
    w: m[3] * x + m[7] * y + m[11] * z + m[15],
  };
}

/**
 * Project a world point to Normalized Device Coordinates (NDC), the -1..1 cube.
 * Returns ndc {x,y,z} plus `w` and `behind` (true when the point is at/behind the
 * camera plane, where the perspective divide flips sign and the result is invalid).
 * @param {number[]} viewProj  column-major view-projection matrix (16 floats)
 * @param {{x:number,y:number,z:number}} world
 */
export function worldToNDC(viewProj, world) {
  const c = applyMatrix4(viewProj, world.x, world.y, world.z);
  // Point is behind the camera when clip-space w <= 0. After dividing by such a w,
  // NDC values are mirrored/garbage, so callers must treat `behind` specially.
  const behind = c.w <= 0;
  const invW = c.w === 0 ? 0 : 1 / c.w;
  return { x: c.x * invW, y: c.y * invW, z: c.z * invW, w: c.w, behind };
}

/**
 * Map NDC (-1..1) to pixel coordinates for a viewport of `width` x `height`.
 * Origin is top-left (DOM/screen convention): NDC y=+1 is the TOP of the screen,
 * so the y axis is flipped.
 * @param {{x:number,y:number}} ndc
 * @param {number} width
 * @param {number} height
 * @returns {{x:number,y:number}} pixel coordinates
 */
export function ndcToPixels(ndc, width, height) {
  return {
    x: (ndc.x * 0.5 + 0.5) * width,
    y: (1 - (ndc.y * 0.5 + 0.5)) * height, // flip Y for top-left origin
  };
}

/**
 * Full pipeline: world point -> screen pixels + visibility metadata.
 * The two signature features (damage numbers, off-screen arrows) both consume this.
 *
 * `onScreen` is true only when the point is in front of the camera AND inside the
 * NDC cube (|x|<=1, |y|<=1, z in 0..1). Otherwise the point is off-screen and the
 * arrow system should draw a clamped indicator.
 *
 * @param {number[]} viewProj  column-major view-projection matrix
 * @param {{x:number,y:number,z:number}} world
 * @param {number} width
 * @param {number} height
 */
export function projectToScreen(viewProj, world, width, height) {
  const ndc = worldToNDC(viewProj, world);
  const px = ndcToPixels(ndc, width, height);
  const onScreen =
    !ndc.behind &&
    ndc.x >= -1 && ndc.x <= 1 &&
    ndc.y >= -1 && ndc.y <= 1 &&
    ndc.z >= -1 && ndc.z <= 1;
  return { x: px.x, y: px.y, ndc, behind: ndc.behind, onScreen };
}

/**
 * Off-screen indicator clamp. Given a world point that is NOT on screen, return the
 * pixel position on the screen edge (inside an optional margin) plus the angle the
 * arrow should point, so an enemy behind/beside the camera gets an edge arrow aimed
 * at it.
 *
 * Approach: work in centered screen space (origin at screen center, +y up to match
 * NDC). If the point is behind the camera, its NDC is mirrored, so we negate the
 * direction to point at where the enemy actually is. Then we cast a ray from the
 * center along that direction and intersect it with the screen rectangle, clamping
 * to the edge. Returns null when the point is actually on-screen (caller shouldn't
 * draw an arrow).
 *
 * @param {{x:number,y:number}} ndc  normalized device coords of the target
 * @param {boolean} behind  whether the target is behind the camera
 * @param {number} width
 * @param {number} height
 * @param {number} margin  inset from the screen edge in pixels (default 48)
 * @returns {{x:number,y:number,angle:number}|null}
 *   x,y in pixels (top-left origin); angle in radians (0 = pointing right, screen space)
 */
export function clampToEdge(ndc, behind, width, height, margin = 48) {
  // Direction from screen center toward the target, in NDC space (+y up).
  let dirX = ndc.x;
  let dirY = ndc.y;
  // When behind the camera the projected NDC is point-mirrored through the origin,
  // so flip it to recover the true on-screen direction.
  if (behind) {
    dirX = -dirX;
    dirY = -dirY;
  }
  const len = Math.hypot(dirX, dirY);
  if (len < 1e-6) {
    // Degenerate (target ~dead center but somehow off-screen): point up.
    dirX = 0;
    dirY = 1;
  } else {
    dirX /= len;
    dirY /= len;
  }

  // Half-extents of the drawable area (inside the margin), in pixels.
  const halfW = width / 2 - margin;
  const halfH = height / 2 - margin;

  // Ray center + t*dir intersected with the box [-halfW,halfW] x [-halfH,halfH].
  // Smallest positive t that hits a slab. dir is a unit vector so t is in pixels.
  const tx = dirX !== 0 ? halfW / Math.abs(dirX) : Infinity;
  const ty = dirY !== 0 ? halfH / Math.abs(dirY) : Infinity;
  const t = Math.min(tx, ty);

  // Edge position in centered screen space (+y up).
  const ex = dirX * t;
  const ey = dirY * t;

  // Convert to top-left-origin pixels (flip y) and re-center.
  const pxX = width / 2 + ex;
  const pxY = height / 2 - ey;

  // Arrow angle in screen space (top-left origin, so y grows downward): use the
  // screen-space direction (flip dirY) so atan2 matches CSS rotation.
  const angle = Math.atan2(-dirY, dirX);

  return { x: pxX, y: pxY, angle };
}
