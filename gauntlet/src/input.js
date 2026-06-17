// input.js — keyboard (WASD/arrows) + pointer-drag intent. Browser-only glue.
//
// Exposes getIntent() -> {x, z} in [-1,1], where +z is "down/away from camera"
// (south on the floor) and +x is east. The main loop maps that onto the player.

export class Input {
  constructor(domElement) {
    this.dom = domElement;
    this.keys = new Set();
    this.drag = null; // {cx, cz} normalised drag vector while pointer is down
    this._restart = false;
    this._advance = false;

    this._onKeyDown = (e) => {
      const k = e.key.toLowerCase();
      this.keys.add(k);
      if (k === 'r') this._restart = true;
      if (k === ' ' || k === 'enter') this._advance = true;
      // stop the page scrolling on arrows/space
      if (
        ['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k)
      ) {
        e.preventDefault();
      }
    };
    this._onKeyUp = (e) => this.keys.delete(e.key.toLowerCase());

    // pointer drag: vector from press point to current point => move direction
    this._press = null;
    this._onPointerDown = (e) => {
      this._press = { x: e.clientX, y: e.clientY };
      this.drag = { cx: 0, cz: 0 };
      this.dom.setPointerCapture?.(e.pointerId);
      this._advance = true; // tapping also dismisses overlays
    };
    this._onPointerMove = (e) => {
      if (!this._press) return;
      const dx = e.clientX - this._press.x;
      const dy = e.clientY - this._press.y;
      const dead = 8; // px deadzone
      const len = Math.hypot(dx, dy);
      if (len < dead) {
        this.drag = { cx: 0, cz: 0 };
        return;
      }
      // scale so a ~90px drag = full speed; clamp to 1
      const scale = Math.min(1, len / 90) / len;
      this.drag = { cx: dx * scale, cz: dy * scale };
    };
    this._onPointerUp = (e) => {
      this._press = null;
      this.drag = null;
      this.dom.releasePointerCapture?.(e.pointerId);
    };

    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
    this.dom.addEventListener('pointerdown', this._onPointerDown);
    window.addEventListener('pointermove', this._onPointerMove);
    window.addEventListener('pointerup', this._onPointerUp);
  }

  /** Movement intent in floor space: {x:+east, z:+south}, each in [-1,1]. */
  getIntent() {
    let x = 0;
    let z = 0;
    const k = this.keys;
    if (k.has('a') || k.has('arrowleft')) x -= 1;
    if (k.has('d') || k.has('arrowright')) x += 1;
    if (k.has('w') || k.has('arrowup')) z -= 1;
    if (k.has('s') || k.has('arrowdown')) z += 1;
    if (this.drag && (this.drag.cx || this.drag.cz)) {
      // drag overrides/augments keys
      x += this.drag.cx;
      z += this.drag.cz;
    }
    return { x, z };
  }

  /** Consume a one-shot "restart" request (R key). */
  consumeRestart() {
    const v = this._restart;
    this._restart = false;
    return v;
  }

  /** Consume a one-shot "advance/dismiss overlay" request (Space/Enter/tap). */
  consumeAdvance() {
    const v = this._advance;
    this._advance = false;
    return v;
  }

  dispose() {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    this.dom.removeEventListener('pointerdown', this._onPointerDown);
    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('pointerup', this._onPointerUp);
  }
}
