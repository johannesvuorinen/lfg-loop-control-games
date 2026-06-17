// patterns.js — procedurally-generated card-face art.
//
// Each face is drawn to a 2D <canvas> with the plain Canvas2D API. The drawing
// functions know nothing about three.js; textures.js wraps the resulting canvas
// in a THREE.CanvasTexture. Keeping the drawing here means we can unit-test the
// palette/registry and (in a browser) snapshot the canvases on their own.
//
// A "face" = a (pattern, color) combination. We expose 8 distinct faces, enough
// for the largest grid (4x4 -> 8 pairs).

// Distinct, high-contrast background/foreground colour pairs.
export const PALETTE = [
  { bg: '#e74c3c', fg: '#ffffff' }, // red
  { bg: '#3498db', fg: '#ffffff' }, // blue
  { bg: '#2ecc71', fg: '#0b3d20' }, // green
  { bg: '#f1c40f', fg: '#5b4500' }, // yellow
  { bg: '#9b59b6', fg: '#ffffff' }, // purple
  { bg: '#1abc9c', fg: '#05352c' }, // teal
  { bg: '#e67e22', fg: '#3a2200' }, // orange
  { bg: '#34495e', fg: '#d7e3f0' }, // slate
];

// The pattern painters. Each takes (ctx, size, colors) and fills a size×size
// square. Order is fixed so faceId -> (pattern,color) is stable.
export const PATTERNS = [
  function stripes(ctx, s, c) {
    fill(ctx, s, c.bg);
    ctx.fillStyle = c.fg;
    const w = s / 8;
    for (let x = -s; x < s * 2; x += w * 2) {
      ctx.save();
      ctx.translate(x, 0);
      ctx.rotate(-0.5);
      ctx.fillRect(0, -s, w, s * 3);
      ctx.restore();
    }
  },

  function dots(ctx, s, c) {
    fill(ctx, s, c.bg);
    ctx.fillStyle = c.fg;
    const n = 4;
    const step = s / n;
    const r = step * 0.28;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        ctx.beginPath();
        ctx.arc(step * (i + 0.5), step * (j + 0.5), r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  },

  function checker(ctx, s, c) {
    fill(ctx, s, c.bg);
    ctx.fillStyle = c.fg;
    const n = 4;
    const step = s / n;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if ((i + j) % 2 === 0) ctx.fillRect(i * step, j * step, step, step);
      }
    }
  },

  function rings(ctx, s, c) {
    fill(ctx, s, c.bg);
    ctx.strokeStyle = c.fg;
    ctx.lineWidth = s / 16;
    const cx = s / 2;
    for (let r = s / 10; r < s * 0.6; r += s / 8) {
      ctx.beginPath();
      ctx.arc(cx, cx, r, 0, Math.PI * 2);
      ctx.stroke();
    }
  },

  function gradient(ctx, s, c) {
    const g = ctx.createLinearGradient(0, 0, s, s);
    g.addColorStop(0, c.bg);
    g.addColorStop(1, c.fg);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
    // a soft highlight blob so it reads as more than a flat ramp
    const rg = ctx.createRadialGradient(s * 0.3, s * 0.3, 0, s * 0.3, s * 0.3, s * 0.6);
    rg.addColorStop(0, 'rgba(255,255,255,0.45)');
    rg.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = rg;
    ctx.fillRect(0, 0, s, s);
  },

  function diamonds(ctx, s, c) {
    fill(ctx, s, c.bg);
    ctx.fillStyle = c.fg;
    const n = 3;
    const step = s / n;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const cx = step * (i + 0.5);
        const cy = step * (j + 0.5);
        const r = step * 0.42;
        ctx.beginPath();
        ctx.moveTo(cx, cy - r);
        ctx.lineTo(cx + r, cy);
        ctx.lineTo(cx, cy + r);
        ctx.lineTo(cx - r, cy);
        ctx.closePath();
        ctx.fill();
      }
    }
  },

  function cross(ctx, s, c) {
    fill(ctx, s, c.bg);
    ctx.fillStyle = c.fg;
    const t = s * 0.18; // bar thickness
    ctx.fillRect((s - t) / 2, s * 0.12, t, s * 0.76); // vertical
    ctx.fillRect(s * 0.12, (s - t) / 2, s * 0.76, t); // horizontal
  },

  function waves(ctx, s, c) {
    fill(ctx, s, c.bg);
    ctx.strokeStyle = c.fg;
    ctx.lineWidth = s / 18;
    const amp = s / 12;
    for (let y = s / 8; y < s; y += s / 5) {
      ctx.beginPath();
      for (let x = 0; x <= s; x += 2) {
        const yy = y + Math.sin((x / s) * Math.PI * 3) * amp;
        if (x === 0) ctx.moveTo(x, yy);
        else ctx.lineTo(x, yy);
      }
      ctx.stroke();
    }
  },
];

function fill(ctx, s, color) {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, s, s);
}

// How many distinct faces we can render.
export const FACE_COUNT = Math.min(PATTERNS.length, PALETTE.length);

// Human-readable name for a face (handy for tests/debug/accessibility).
export function faceName(faceId) {
  const pat = PATTERNS[faceId % PATTERNS.length].name;
  const col = ['red', 'blue', 'green', 'yellow', 'purple', 'teal', 'orange', 'slate'][
    faceId % PALETTE.length
  ];
  return `${col}-${pat}`;
}

// Draw face `faceId` onto a provided CanvasRenderingContext2D of side `size`.
// Pure: same inputs -> same pixels. Used by textures.js and by tests.
export function drawFace(ctx, faceId, size) {
  const pattern = PATTERNS[faceId % PATTERNS.length];
  const colors = PALETTE[faceId % PALETTE.length];
  pattern(ctx, size, colors);
  // subtle inner border to frame every face consistently
  ctx.strokeStyle = 'rgba(0,0,0,0.25)';
  ctx.lineWidth = Math.max(2, size / 32);
  ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, size - ctx.lineWidth, size - ctx.lineWidth);
  return ctx;
}
