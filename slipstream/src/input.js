// input.js — unifies keyboard / mouse / touch into a single steer vector in
// [-1,1] per axis. Browser-only (listens on window + a canvas), so it's a thin
// glue module, not part of the testable game logic. getSteer() is what main.js
// reads each frame.

export function createInput(canvas) {
  const keys = new Set();
  // pointer steer is an absolute target in [-1,1] from cursor/touch position,
  // blended with keyboard so either works (and together).
  let pointerX = 0;
  let pointerY = 0;
  let pointerActive = false;
  let usingTouch = false;

  // ----- keyboard -----
  const onKeyDown = (e) => {
    keys.add(e.code);
    // prevent page scroll on arrows/space
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
  };
  const onKeyUp = (e) => keys.delete(e.code);
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);

  // ----- mouse (desktop): position relative to viewport center -----
  const onMouseMove = (e) => {
    if (usingTouch) return;
    pointerX = (e.clientX / window.innerWidth) * 2 - 1;       // -1 left .. 1 right
    pointerY = -((e.clientY / window.innerHeight) * 2 - 1);   // 1 top .. -1 bottom
    pointerActive = true;
  };
  window.addEventListener('mousemove', onMouseMove);

  // ----- touch (mobile): drag anywhere -----
  const onTouch = (e) => {
    usingTouch = true;
    if (e.touches && e.touches.length) {
      const t = e.touches[0];
      pointerX = (t.clientX / window.innerWidth) * 2 - 1;
      pointerY = -((t.clientY / window.innerHeight) * 2 - 1);
      pointerActive = true;
      e.preventDefault();
    }
  };
  const onTouchEnd = () => { pointerActive = false; };
  if (canvas) {
    canvas.addEventListener('touchstart', onTouch, { passive: false });
    canvas.addEventListener('touchmove', onTouch, { passive: false });
    canvas.addEventListener('touchend', onTouchEnd);
  }

  /**
   * Returns the combined steer vector {x,y} each component in [-1,1].
   * Keyboard contributes full deflection; pointer contributes proportional to how
   * far the cursor/touch is from center (with a small deadzone), and a response
   * curve so small movements are gentle.
   */
  function getSteer() {
    let kx = 0, ky = 0;
    if (keys.has('ArrowLeft') || keys.has('KeyA')) kx -= 1;
    if (keys.has('ArrowRight') || keys.has('KeyD')) kx += 1;
    if (keys.has('ArrowUp') || keys.has('KeyW')) ky += 1;
    if (keys.has('ArrowDown') || keys.has('KeyS')) ky -= 1;

    let px = 0, py = 0;
    if (pointerActive) {
      px = shape(pointerX);
      py = shape(pointerY);
    }

    // keyboard overrides pointer on an axis when a key is held; else use pointer
    const x = kx !== 0 ? kx : px;
    const y = ky !== 0 ? ky : py;
    return { x: clamp(x, -1, 1), y: clamp(y, -1, 1) };
  }

  function reset() {
    keys.clear();
    pointerActive = false;
  }

  function dispose() {
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('keyup', onKeyUp);
    window.removeEventListener('mousemove', onMouseMove);
    if (canvas) {
      canvas.removeEventListener('touchstart', onTouch);
      canvas.removeEventListener('touchmove', onTouch);
      canvas.removeEventListener('touchend', onTouchEnd);
    }
  }

  return { getSteer, reset, dispose };
}

// deadzone + ease for pointer steering
function shape(v) {
  const dead = 0.06;
  const s = Math.sign(v);
  const a = Math.max(0, Math.abs(v) - dead) / (1 - dead);
  return s * Math.pow(a, 1.25);
}

function clamp(v, lo, hi) {
  return v < lo ? lo : v > hi ? hi : v;
}
