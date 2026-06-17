// anim.js — tiny tween runner. No deps. Used to animate gem meshes.
// A Tween mutates a target object's numeric fields toward `to` over `duration`.
// The Animator ticks all active tweens each frame and resolves Promises on done.

export const Easing = {
  linear: (t) => t,
  easeOutQuad: (t) => 1 - (1 - t) * (1 - t),
  easeInQuad: (t) => t * t,
  easeOutBack: (t) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  easeOutBounceSmall: (t) => {
    // a soft settle
    return 1 - Math.pow(1 - t, 2) * Math.cos(t * Math.PI * 0.5);
  },
};

export class Animator {
  constructor() {
    this.tweens = [];
  }

  /**
   * tween(obj, props, duration, easing) -> Promise that resolves when done.
   * `props` is a map of field -> targetValue, applied to `obj` directly.
   * Supports nested path 'position.x' style via getter/setter helpers? Keep it
   * simple: pass an object with get()/set() OR a plain object + field names.
   */
  tween(target, toValues, duration, easing = Easing.easeOutQuad) {
    return new Promise((resolve) => {
      const fields = Object.keys(toValues);
      const from = {};
      for (const f of fields) from[f] = target[f];
      this.tweens.push({
        target,
        fields,
        from,
        to: toValues,
        duration,
        elapsed: 0,
        easing,
        resolve,
      });
    });
  }

  /** Tween a THREE.Vector3-like (has x,y,z) to a target {x,y,z?}. */
  tweenVec(vec, to, duration, easing = Easing.easeOutQuad) {
    const toValues = {};
    if (to.x !== undefined) toValues.x = to.x;
    if (to.y !== undefined) toValues.y = to.y;
    if (to.z !== undefined) toValues.z = to.z;
    return this.tween(vec, toValues, duration, easing);
  }

  update(dt) {
    if (this.tweens.length === 0) return;
    const still = [];
    for (const tw of this.tweens) {
      tw.elapsed += dt;
      let t = tw.duration > 0 ? tw.elapsed / tw.duration : 1;
      if (t >= 1) t = 1;
      const e = tw.easing(t);
      for (const f of tw.fields) {
        tw.target[f] = tw.from[f] + (tw.to[f] - tw.from[f]) * e;
      }
      if (t >= 1) {
        tw.resolve();
      } else {
        still.push(tw);
      }
    }
    this.tweens = still;
  }

  get busy() {
    return this.tweens.length > 0;
  }
}

/** Promise that resolves after `ms` using the same frame clock is overkill;
 *  just use setTimeout wrapped for await. */
export function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
