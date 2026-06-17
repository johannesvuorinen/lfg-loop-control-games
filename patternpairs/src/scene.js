// scene.js — three.js rendering for the board. Knows nothing about game rules;
// it draws whatever card objects it's handed and reports clicks back via picks.
//
// Each card is a thin THREE.Group containing two planes back-to-back (back face
// + front face). Flipping = animating the group's rotation.y between 0 and PI.

import * as THREE from 'three';
import { makeAllFaceTextures, makeBackTexture } from './textures.js';

const CARD_W = 1;
const CARD_H = 1.4;
const GAP = 0.18;
const FLIP_MS = 320;

export class BoardView {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#0e1726');

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    this.camera.position.set(0, 0, 8);

    // Lighting: ambient + a key light so the faces have a little depth.
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 0.6);
    key.position.set(2, 4, 5);
    this.scene.add(key);

    // Shared geometry + textures (built once).
    this.geo = new THREE.PlaneGeometry(CARD_W, CARD_H);
    this.faceTextures = makeAllFaceTextures();
    this.backTexture = makeBackTexture();

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();

    this.cardGroups = new Map(); // id -> { group, target, anim }
    this.boardGroup = new THREE.Group();
    this.scene.add(this.boardGroup);

    this._animating = new Set(); // ids currently mid-flip
    this._onResize = () => this.resize();
    window.addEventListener('resize', this._onResize);
  }

  // (Re)build the board meshes for a deck of card objects.
  buildBoard(cards, cols, rows) {
    // Clear previous board.
    for (const { group } of this.cardGroups.values()) {
      this.boardGroup.remove(group);
      group.traverse((o) => {
        if (o.isMesh) o.material.dispose();
      });
    }
    this.cardGroups.clear();
    this._animating.clear();

    const boardW = cols * CARD_W + (cols - 1) * GAP;
    const boardH = rows * CARD_H + (rows - 1) * GAP;

    for (const card of cards) {
      const group = new THREE.Group();

      // Front face (faceId texture). Faces +Z when group rotation.y === PI.
      // DoubleSide so the ray (and the eye) hit it cleanly at any flip angle —
      // single-sided planes can be missed by the raycaster mid-rotation.
      const frontMat = new THREE.MeshStandardMaterial({
        map: this.faceTextures[card.faceId % this.faceTextures.length],
        roughness: 0.85,
        metalness: 0.0,
        side: THREE.DoubleSide,
      });
      const front = new THREE.Mesh(this.geo, frontMat);
      front.rotation.y = Math.PI; // so it's visible after a 180° flip
      front.position.z = -0.001; // tiny offset to avoid z-fighting with the back
      group.add(front);

      // Back face (shared texture). Faces +Z when rotation.y === 0.
      const backMat = new THREE.MeshStandardMaterial({
        map: this.backTexture,
        roughness: 0.9,
        metalness: 0.0,
        side: THREE.DoubleSide,
      });
      const back = new THREE.Mesh(this.geo, backMat);
      group.add(back);

      // Position in grid (origin centred, y inverted so row 0 is on top).
      const x = card.col * (CARD_W + GAP) - boardW / 2 + CARD_W / 2;
      const y = -(card.row * (CARD_H + GAP)) + boardH / 2 - CARD_H / 2;
      group.position.set(x, y, 0);

      // Start in the state the card says it's in.
      group.rotation.y = card.revealed || card.matched ? Math.PI : 0;
      group.userData.cardId = card.id;

      this.boardGroup.add(group);
      this.cardGroups.set(card.id, { group, target: group.rotation.y, anim: null });
    }

    this.fitCamera(boardW, boardH);
  }

  // Frame the camera so the whole board is visible with a margin.
  fitCamera(boardW, boardH) {
    const margin = 1.18;
    const vFov = (this.camera.fov * Math.PI) / 180;
    const distH = (boardH * margin) / 2 / Math.tan(vFov / 2);
    const distW = (boardW * margin) / 2 / Math.tan(vFov / 2) / this.camera.aspect;
    this.camera.position.z = Math.max(distH, distW, 5);
    this.camera.lookAt(0, 0, 0);
  }

  // Animate a card to face-up (true) or face-down (false).
  setFlipped(id, faceUp) {
    const entry = this.cardGroups.get(id);
    if (!entry) return;
    const target = faceUp ? Math.PI : 0;
    if (entry.group.rotation.y === target && !entry.anim) return;
    entry.anim = {
      from: entry.group.rotation.y,
      to: target,
      start: performance.now(),
      dur: FLIP_MS,
    };
    this._animating.add(id);
  }

  // Pop animation when a pair is matched (little scale bounce).
  pulse(id) {
    const entry = this.cardGroups.get(id);
    if (!entry) return;
    entry.pulse = { start: performance.now(), dur: 360 };
  }

  // Convert a pointer event to a clicked card id (or null).
  pick(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.boardGroup.children, true);
    for (const h of hits) {
      let o = h.object;
      while (o && o.userData.cardId === undefined) o = o.parent;
      if (o) return o.userData.cardId;
    }
    return null;
  }

  // Per-frame animation tick. Returns true while any animation is in flight.
  update(now) {
    let active = false;
    for (const [id, entry] of this.cardGroups) {
      if (entry.anim) {
        const t = Math.min(1, (now - entry.anim.start) / entry.anim.dur);
        const e = easeInOut(t);
        entry.group.rotation.y = entry.anim.from + (entry.anim.to - entry.anim.from) * e;
        if (t >= 1) {
          entry.group.rotation.y = entry.anim.to;
          entry.anim = null;
          this._animating.delete(id);
        } else {
          active = true;
        }
      }
      if (entry.pulse) {
        const t = Math.min(1, (now - entry.pulse.start) / entry.pulse.dur);
        const s = 1 + Math.sin(t * Math.PI) * 0.12;
        entry.group.scale.setScalar(s);
        if (t >= 1) {
          entry.group.scale.setScalar(1);
          entry.pulse = null;
        } else {
          active = true;
        }
      }
    }
    return active;
  }

  isAnimating(id) {
    return this._animating.has(id);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    if (w === 0 || h === 0) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  dispose() {
    window.removeEventListener('resize', this._onResize);
    this.geo.dispose();
    this.faceTextures.forEach((t) => t.dispose());
    this.backTexture.dispose();
    this.renderer.dispose();
  }
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
