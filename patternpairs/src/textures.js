// textures.js — turn the procedural canvas art (patterns.js) into THREE textures.
//
// THIS IS THE WHOLE "custom texture" path. Per face it is: make a canvas, draw
// to it (drawFace), wrap it in a THREE.CanvasTexture. ~5 lines. three.js then
// handles upload/mipmaps/filtering/sRGB for free.

import * as THREE from 'three';
import { drawFace, FACE_COUNT } from './patterns.js';

const TEX_SIZE = 256; // px per face texture (power-of-two -> clean mipmaps)

// Build a CanvasTexture for one face. ~5 LOC of actual texture work.
export function makeFaceTexture(faceId, size = TEX_SIZE) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  drawFace(canvas.getContext('2d'), faceId, size); // <-- our procedural art
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace; // correct gamma; three does the rest
  tex.anisotropy = 4;
  return tex;
}

// Procedural texture for the card BACK (shared by every card). A plain canvas
// gradient + grid so backs don't look flat either.
export function makeBackTexture(size = TEX_SIZE) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, size, size);
  g.addColorStop(0, '#2c3e50');
  g.addColorStop(1, '#1a252f');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  ctx.strokeStyle = 'rgba(255,255,255,0.10)';
  ctx.lineWidth = size / 64;
  for (let i = 1; i < 8; i++) {
    const p = (i / 8) * size;
    ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, size); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(size, p); ctx.stroke();
  }
  // centred diamond emblem
  ctx.fillStyle = 'rgba(255,255,255,0.16)';
  const c = size / 2, r = size * 0.18;
  ctx.beginPath();
  ctx.moveTo(c, c - r); ctx.lineTo(c + r, c); ctx.lineTo(c, c + r); ctx.lineTo(c - r, c);
  ctx.closePath(); ctx.fill();
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

// Pre-generate all face textures once (index by faceId).
export function makeAllFaceTextures(size = TEX_SIZE) {
  const out = [];
  for (let f = 0; f < FACE_COUNT; f++) out.push(makeFaceTexture(f, size));
  return out;
}
