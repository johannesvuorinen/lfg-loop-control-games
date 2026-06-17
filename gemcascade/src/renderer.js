// renderer.js — three.js rendering for GEM CASCADE.
// Owns the scene/camera/loop and the visual gem meshes. Keeps a 1:1 mapping
// between a visual GemSprite and a logical board cell, but does NOT contain
// any game rules — it just draws what the controller tells it and reports taps.
//
// Design choices (see NOTES.md):
//  * OrthographicCamera looking straight down -Z: the game is 2D, so ortho
//    removes perspective and makes "world units == grid units" trivial.
//  * One Mesh per gem (not InstancedMesh). 56 gems is tiny; per-mesh transforms
//    make fall/swap/clear animations dramatically simpler than editing an
//    InstancedMesh matrix buffer. Tap mapping is a Raycaster against the meshes.
//  * Gem shape: an icosahedron with a flat-ish, emissive material per color =
//    a "gem" look for free from three's standard material + lighting.

// 'three' resolves via the importmap in index.html -> ./vendor/three.module.js
import * as THREE from 'three';

// Palette: index matches logical color id. Chosen to be colorblind-distinct-ish.
export const GEM_COLORS = [
  0xff4d4d, // 0 red
  0x4da6ff, // 1 blue
  0x4dff88, // 2 green
  0xffd24d, // 3 yellow
  0xc24dff, // 4 purple
  0xff944d, // 5 orange
  0x4dffe0, // 6 teal (only if numColors > 6)
];

// World coordinates: cell (col,row) maps to (x,y) with the grid centered at 0.
// Row 0 (logical top) is at the highest y. Each cell is 1 world unit.
export function cellToWorld(col, row, cols, rows) {
  const x = col - (cols - 1) / 2;
  const y = (rows - 1) / 2 - row; // invert: row 0 -> top
  return { x, y };
}

export class Renderer {
  constructor(canvas, { cols, rows, numColors }) {
    this.cols = cols;
    this.rows = rows;
    this.numColors = numColors;
    this.canvas = canvas;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    this.scene = new THREE.Scene();

    // Orthographic camera framing the whole grid with a small margin.
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
    this.camera.position.set(0, 0, 10);
    this.camera.lookAt(0, 0, 0);

    // Lighting: a key directional + ambient gives gems shading & specular pop.
    const amb = new THREE.AmbientLight(0xffffff, 0.55);
    this.scene.add(amb);
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(2, 4, 6);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0x88aaff, 0.5);
    rim.position.set(-3, -2, 4);
    this.scene.add(rim);

    // Shared geometry for all gems.
    this.gemGeo = new THREE.IcosahedronGeometry(0.42, 0);
    this.materials = GEM_COLORS.map(
      (c) =>
        new THREE.MeshStandardMaterial({
          color: c,
          emissive: new THREE.Color(c).multiplyScalar(0.18),
          metalness: 0.25,
          roughness: 0.25,
          flatShading: true,
        })
    );

    // Selection highlight ring (a thin torus that hovers over the picked gem).
    const ringGeo = new THREE.TorusGeometry(0.5, 0.045, 8, 28);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.selRing = new THREE.Mesh(ringGeo, ringMat);
    this.selRing.visible = false;
    this.scene.add(this.selRing);

    // Per-cell gem meshes; gems[row*cols+col] = Mesh | null.
    this.gems = new Array(cols * rows).fill(null);

    this.raycaster = new THREE.Raycaster();
    this._pointer = new THREE.Vector2();

    this.resize();
  }

  // ---- camera / framing ----------------------------------------------------

  resize() {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);

    // Fit the grid (cols x rows world units) into the viewport, keeping square
    // cells, with a margin so gems near edges aren't clipped.
    const margin = 1.0;
    const gridW = this.cols + margin;
    const gridH = this.rows + margin;
    const viewAspect = w / h;
    const gridAspect = gridW / gridH;

    let halfW, halfH;
    if (viewAspect > gridAspect) {
      // viewport wider than grid -> height-constrained
      halfH = gridH / 2;
      halfW = halfH * viewAspect;
    } else {
      halfW = gridW / 2;
      halfH = halfW / viewAspect;
    }
    this.camera.left = -halfW;
    this.camera.right = halfW;
    this.camera.top = halfH;
    this.camera.bottom = -halfH;
    this.camera.updateProjectionMatrix();
  }

  // ---- gem lifecycle -------------------------------------------------------

  _makeGem(color) {
    const mat = this.materials[color % this.materials.length];
    const mesh = new THREE.Mesh(this.gemGeo, mat);
    mesh.userData.color = color;
    // gentle random spin so the board feels alive
    mesh.userData.spin = (Math.random() - 0.5) * 0.6;
    this.scene.add(mesh);
    return mesh;
  }

  index(col, row) {
    return row * this.cols + col;
  }

  /** Build/replace all gem meshes from a logical board (cells: number[]). */
  syncFromBoard(cells) {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const i = this.index(col, row);
        const color = cells[i];
        // dispose any existing
        if (this.gems[i]) {
          this.scene.remove(this.gems[i]);
          this.gems[i] = null;
        }
        if (color >= 0) {
          const g = this._makeGem(color);
          const { x, y } = cellToWorld(col, row, this.cols, this.rows);
          g.position.set(x, y, 0);
          g.userData.col = col;
          g.userData.row = row;
          this.gems[i] = g;
        }
      }
    }
  }

  getGem(col, row) {
    return this.gems[this.index(col, row)];
  }

  setGem(col, row, mesh) {
    this.gems[this.index(col, row)] = mesh;
    if (mesh) {
      mesh.userData.col = col;
      mesh.userData.row = row;
    }
  }

  // ---- picking -------------------------------------------------------------

  /**
   * Map a pointer event (clientX/clientY) to a grid cell {col,row} or null.
   * Uses a raycast against the live gem meshes; robust to camera framing.
   */
  pickCell(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((clientY - rect.top) / rect.height) * 2 + 1;
    this._pointer.set(x, y);
    this.raycaster.setFromCamera(this._pointer, this.camera);
    const meshes = this.gems.filter(Boolean);
    const hits = this.raycaster.intersectObjects(meshes, false);
    if (hits.length > 0) {
      const u = hits[0].object.userData;
      return { col: u.col, row: u.row };
    }
    // Fallback: project the ray onto the z=0 plane and floor to a cell. This
    // lets taps in the gaps between gems still resolve to the nearest cell.
    const t = -this.raycaster.ray.origin.z / this.raycaster.ray.direction.z;
    const px = this.raycaster.ray.origin.x + this.raycaster.ray.direction.x * t;
    const py = this.raycaster.ray.origin.y + this.raycaster.ray.direction.y * t;
    const col = Math.round(px + (this.cols - 1) / 2);
    const row = Math.round((this.rows - 1) / 2 - py);
    if (col >= 0 && col < this.cols && row >= 0 && row < this.rows) {
      return { col, row };
    }
    return null;
  }

  // ---- selection ring ------------------------------------------------------

  showSelection(col, row) {
    const { x, y } = cellToWorld(col, row, this.cols, this.rows);
    this.selRing.position.set(x, y, 0.3);
    this.selRing.visible = true;
  }

  hideSelection() {
    this.selRing.visible = false;
  }

  // ---- render --------------------------------------------------------------

  /** Advance idle animations (gem spin, ring pulse) and draw one frame. */
  render(dt, time) {
    for (const g of this.gems) {
      if (g) g.rotation.y += g.userData.spin * dt;
    }
    if (this.selRing.visible) {
      const s = 1 + Math.sin(time * 6) * 0.06;
      this.selRing.scale.set(s, s, s);
      this.selRing.rotation.z += dt * 2;
    }
    this.renderer.render(this.scene, this.camera);
  }
}
