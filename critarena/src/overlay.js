// Screen-space overlay: floating damage numbers + off-screen enemy arrows.
// This is RENDERING/GLUE — it consumes pixel coords produced by the pure projection
// logic and pokes the DOM. It deliberately holds no game rules.

/**
 * Pool-backed floating damage numbers. Each is an absolutely-positioned DOM node
 * that drifts up and fades over its lifetime. We recycle nodes to avoid GC churn.
 */
export class DamageNumbers {
  /** @param {HTMLElement} layer container (position:relative/fixed, pointer-events:none) */
  constructor(layer) {
    this.layer = layer;
    /** @type {Array<{el:HTMLElement, world:{x:number,y:number,z:number}, age:number, life:number, rise:number, drift:number, active:boolean}>} */
    this.items = [];
    this.pool = [];
  }

  _acquire() {
    let el = this.pool.pop();
    if (!el) {
      el = document.createElement('div');
      el.className = 'dmg';
      this.layer.appendChild(el);
    }
    el.style.display = 'block';
    return el;
  }

  /**
   * Spawn a damage number anchored to a world position.
   * @param {{x:number,y:number,z:number}} world  enemy world position (top of head ideally)
   * @param {number} amount
   * @param {boolean} crit
   */
  spawn(world, amount, crit) {
    const el = this._acquire();
    el.textContent = crit ? `${amount}!` : `${amount}`;
    el.classList.toggle('crit', !!crit);
    el.style.opacity = '1';
    this.items.push({
      el,
      // copy so later enemy movement / death doesn't drag the popup
      world: { x: world.x, y: world.y, z: world.z },
      age: 0,
      life: crit ? 1.1 : 0.85,
      rise: crit ? 64 : 44,             // px it floats up over its life
      drift: (Math.random() * 2 - 1) * 18, // slight horizontal wander
      active: true,
    });
  }

  /**
   * Advance all numbers and reposition them from the camera projection.
   * @param {number} dt seconds
   * @param {(world:{x:number,y:number,z:number}) => {x:number,y:number,onScreen:boolean,behind:boolean}} project
   */
  update(dt, project) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i];
      it.age += dt;
      const t = it.age / it.life;
      if (t >= 1) {
        it.el.style.display = 'none';
        this.pool.push(it.el);
        this.items.splice(i, 1);
        continue;
      }
      const p = project(it.world);
      // Hide while behind camera; numbers over off-screen enemies still fade out.
      if (p.behind) {
        it.el.style.opacity = '0';
        continue;
      }
      const eased = 1 - (1 - t) * (1 - t); // ease-out
      const y = p.y - eased * it.rise;
      const x = p.x + eased * it.drift;
      it.el.style.transform = `translate(-50%,-50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      it.el.style.opacity = String(1 - t * t); // fade out, slow then fast
    }
  }

  clear() {
    for (const it of this.items) {
      it.el.style.display = 'none';
      this.pool.push(it.el);
    }
    this.items.length = 0;
  }
}

/**
 * Off-screen enemy arrows. One arrow element per tracked enemy id; arrows clamp to
 * the screen edge and rotate toward the enemy. On-screen enemies hide their arrow.
 */
export class OffscreenArrows {
  /** @param {HTMLElement} layer */
  constructor(layer) {
    this.layer = layer;
    /** @type {Map<number,HTMLElement>} */
    this.byId = new Map();
  }

  _get(id) {
    let el = this.byId.get(id);
    if (!el) {
      el = document.createElement('div');
      el.className = 'arrow';
      el.innerHTML = '<span class="arrow-glyph">▲</span>';
      this.layer.appendChild(el);
      this.byId.set(id, el);
    }
    return el;
  }

  /**
   * Sync arrows to the current set of enemies.
   * @param {Array<{id:number, screen:{x:number,y:number,angle?:number,onScreen:boolean}, dist:number}>} marks
   *   each mark carries the enemy id, its clamped edge position (when off-screen) and distance
   */
  update(marks) {
    const seen = new Set();
    for (const m of marks) {
      seen.add(m.id);
      const el = this._get(m.id);
      if (m.screen.onScreen) {
        el.style.display = 'none';
        continue;
      }
      el.style.display = 'block';
      // Rotate the whole element so the triangle (which points up by default,
      // i.e. -90deg in screen space) aims along the edge angle.
      const deg = (m.screen.angle * 180) / Math.PI + 90;
      el.style.transform =
        `translate(-50%,-50%) translate(${m.screen.x.toFixed(1)}px, ${m.screen.y.toFixed(1)}px) rotate(${deg.toFixed(1)}deg)`;
      // Closer enemies -> more opaque/urgent.
      const near = Math.max(0, Math.min(1, 1 - (m.dist - 20) / 60));
      el.style.opacity = String(0.45 + near * 0.55);
    }
    // Hide/remove arrows for enemies that no longer exist.
    for (const [id, el] of this.byId) {
      if (!seen.has(id)) {
        el.remove();
        this.byId.delete(id);
      }
    }
  }

  clear() {
    for (const el of this.byId.values()) el.remove();
    this.byId.clear();
  }
}
