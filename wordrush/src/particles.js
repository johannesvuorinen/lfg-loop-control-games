// Lightweight additive particle bursts for word completions and drops.
// One pooled Points-like system using Sprites would be heavier; here we use a
// small pool of additive Sprites (round glow) animated on the CPU — plenty for
// the burst counts in this game and trivially simple.

import {
  Sprite, SpriteMaterial, CanvasTexture, AdditiveBlending, Color,
} from 'three';

function makeGlowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.3, 'rgba(255,255,255,0.6)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new CanvasTexture(c);
}

export class ParticleSystem {
  constructor(scene, max = 220) {
    this.scene = scene;
    this.tex = makeGlowTexture();
    this.pool = [];
    this.active = [];
    for (let i = 0; i < max; i++) {
      const mat = new SpriteMaterial({
        map: this.tex, transparent: true, blending: AdditiveBlending,
        depthTest: false, depthWrite: false, opacity: 0,
      });
      const s = new Sprite(mat);
      s.visible = false;
      s.renderOrder = 5;
      scene.add(s);
      this.pool.push({ sprite: s, vx: 0, vy: 0, life: 0, ttl: 1, size: 1 });
    }
  }

  burst(x, y, color, count = 18, power = 1) {
    const col = new Color(color);
    for (let i = 0; i < count; i++) {
      const p = this.pool.pop();
      if (!p) break;
      const ang = Math.random() * Math.PI * 2;
      const spd = (8 + Math.random() * 22) * power;
      p.vx = Math.cos(ang) * spd;
      p.vy = Math.sin(ang) * spd + 6; // slight upward bias
      p.life = 0;
      p.ttl = 0.5 + Math.random() * 0.5;
      p.size = (1.4 + Math.random() * 2.2) * power;
      p.sprite.position.set(x, y, 0);
      p.sprite.material.color = col;
      p.sprite.material.opacity = 1;
      p.sprite.visible = true;
      this.active.push(p);
    }
  }

  update(dt) {
    for (let i = this.active.length - 1; i >= 0; i--) {
      const p = this.active[i];
      p.life += dt;
      const k = p.life / p.ttl;
      if (k >= 1) {
        p.sprite.visible = false;
        p.sprite.material.opacity = 0;
        this.active.splice(i, 1);
        this.pool.push(p);
        continue;
      }
      p.vy -= 30 * dt; // gravity
      p.sprite.position.x += p.vx * dt;
      p.sprite.position.y += p.vy * dt;
      const s = p.size * (1 - k * 0.5);
      p.sprite.scale.set(s, s, 1);
      p.sprite.material.opacity = 1 - k;
    }
  }
}
