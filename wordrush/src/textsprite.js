// Crisp text -> CanvasTexture -> three.js Sprite.
// Rendering words as 2D-canvas textures keeps glyphs razor sharp at any zoom
// and needs NO external font file (uses a system monospace stack). The sprite
// itself lives in the three.js scene, so it gets GPU compositing, additive
// glow siblings, depth-free billboarding, etc. for free.

import {
  Sprite, SpriteMaterial, CanvasTexture, LinearFilter, SRGBColorSpace,
} from 'three';

const FONT_STACK = '700 64px "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace';
const PAD = 18;            // px padding inside the canvas around the text
const SUPERSAMPLE = 2;     // extra resolution for crispness

// Measure once with a shared offscreen context.
const _measureCanvas = document.createElement('canvas');
const _measureCtx = _measureCanvas.getContext('2d');

export function measureWord(text) {
  _measureCtx.font = FONT_STACK;
  const m = _measureCtx.measureText(text);
  const w = Math.ceil(m.width) + PAD * 2;
  const h = 64 + PAD * 2;
  return { w, h };
}

// Draw `text` into a canvas, coloring the first `typedCount` chars as "done".
function drawWord(canvas, text, typedCount, opts) {
  const { w, h } = measureWord(text);
  const dpr = SUPERSAMPLE;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);

  // Rounded pill background for legibility over the starfield.
  const r = 14;
  ctx.fillStyle = opts.active ? 'rgba(40,18,60,0.82)' : 'rgba(12,16,32,0.72)';
  roundRect(ctx, 1, 1, w - 2, h - 2, r);
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = opts.active ? 'rgba(255,120,220,0.9)' : 'rgba(90,120,200,0.5)';
  ctx.stroke();

  ctx.font = FONT_STACK;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';

  const doneColor = '#5ef0a0';   // typed-so-far (green)
  const nextColor = '#ffe14d';   // the very next letter to type (amber)
  const restColor = opts.active ? '#ffffff' : '#aebbe0';

  // Subtle glow.
  ctx.shadowColor = opts.active ? 'rgba(255,120,220,0.7)' : 'rgba(80,140,255,0.35)';
  ctx.shadowBlur = opts.active ? 16 : 8;

  let x = PAD;
  const y = h / 2 + 2;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (i < typedCount) ctx.fillStyle = doneColor;
    else if (i === typedCount && opts.active) ctx.fillStyle = nextColor;
    else ctx.fillStyle = restColor;
    ctx.fillText(ch, x, y);
    x += ctx.measureText(ch).width;
  }
  return { w, h };
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// A WordSprite wraps a three.js Sprite plus its canvas; call update() to
// re-render typed progress, and setPosition() each frame.
export class WordSprite {
  constructor(text) {
    this.text = text;
    this.canvas = document.createElement('canvas');
    this.typedCount = -1;     // force first draw
    this.active = false;
    this.texture = new CanvasTexture(this.canvas);
    this.texture.minFilter = LinearFilter;
    this.texture.magFilter = LinearFilter;
    this.texture.colorSpace = SRGBColorSpace;
    this.material = new SpriteMaterial({
      map: this.texture, transparent: true, depthTest: false, depthWrite: false,
    });
    this.sprite = new Sprite(this.material);
    this.refresh(0, false);
  }

  // Re-render only when typed count or active flag changed.
  refresh(typedCount, active) {
    if (typedCount === this.typedCount && active === this.active) return;
    this.typedCount = typedCount;
    this.active = active;
    const { w, h } = drawWord(this.canvas, this.text, typedCount, { active });
    this.texture.needsUpdate = true;
    // Scale the sprite to the canvas aspect; height fixed in world units.
    this.aspect = w / h;
    this.worldHeight = 4.2; // logical units tall
    this.sprite.scale.set(this.worldHeight * this.aspect, this.worldHeight, 1);
  }

  setWorldPosition(x, y) {
    this.sprite.position.set(x, y, 0);
  }

  dispose() {
    this.texture.dispose();
    this.material.dispose();
  }
}
