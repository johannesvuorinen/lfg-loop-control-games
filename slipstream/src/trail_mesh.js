// trail_mesh.js — three.js wrapper that turns the pure ribbon math (src/trail.js)
// into a live, glowing Mesh. This is the RENDER half; all geometry math lives in
// trail.js so it can be unit-tested without a GPU.
//
// Each frame: push the head position into the TrailBuffer, rebuild the flat vertex
// arrays, copy them into a pre-sized BufferGeometry, and set drawRange. A custom
// ShaderMaterial with additive blending makes the ribbon read as a glowing comet
// tail — bright cyan->magenta core that fades to nothing at the tail.

import * as THREE from 'three';
import { TrailBuffer, buildRibbonGeometry } from './trail.js';

const vertexShader = /* glsl */ `
  attribute float fade;          // 0 at tail .. 1 at head (from trail.js)
  varying float vFade;
  varying vec2 vUv;
  void main() {
    vFade = fade;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform vec3 uHeadColor;   // bright core near the ship
  uniform vec3 uTailColor;   // cooler color toward the tail
  uniform float uOpacity;
  uniform float uTime;
  varying float vFade;
  varying vec2 vUv;

  void main() {
    // brightness ramps up toward the head; squared for a hotter core
    float headHeat = pow(vFade, 1.8);
    vec3 col = mix(uTailColor, uHeadColor, headHeat);

    // soft edges across the ribbon width (vUv.x in [0,1]); bright down the centerline
    float edge = 1.0 - abs(vUv.x * 2.0 - 1.0);   // 0 at edges, 1 at center
    edge = pow(edge, 1.3);

    // subtle energy shimmer travelling down the trail
    float shimmer = 0.85 + 0.15 * sin(vUv.y * 40.0 - uTime * 6.0);

    // alpha fades to 0 at the tail and at the ribbon edges
    float alpha = vFade * edge * shimmer * uOpacity;

    // boost emissive toward the head so bloom grabs the hot core
    col *= (0.5 + headHeat * 1.0);

    gl_FragColor = vec4(col, alpha);
  }
`;

export class TrailMesh {
  /**
   * @param {object} [opts]
   * @param {number} [opts.capacity=110] samples retained (trail length)
   * @param {number} [opts.width=1.7] ribbon width at head
   * @param {THREE.Color|number} [opts.headColor]
   * @param {THREE.Color|number} [opts.tailColor]
   * @param {number} [opts.minDist=0.35] min spacing between samples
   */
  constructor(opts = {}) {
    this.capacity = opts.capacity ?? 110;
    this.width = opts.width ?? 1.7;
    this.minDist = opts.minDist ?? 0.35;
    this.buffer = new TrailBuffer(this.capacity);

    // pre-size geometry to capacity so we never reallocate; just update drawRange
    const geo = new THREE.BufferGeometry();
    const vertCount = this.capacity * 2;
    this.posAttr = new THREE.BufferAttribute(new Float32Array(vertCount * 3), 3);
    this.uvAttr = new THREE.BufferAttribute(new Float32Array(vertCount * 2), 2);
    this.fadeAttr = new THREE.BufferAttribute(new Float32Array(vertCount), 1);
    this.posAttr.setUsage(THREE.DynamicDrawUsage);
    this.uvAttr.setUsage(THREE.DynamicDrawUsage);
    this.fadeAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', this.posAttr);
    geo.setAttribute('uv', this.uvAttr);
    geo.setAttribute('fade', this.fadeAttr);
    geo.setIndex(new THREE.BufferAttribute(new Uint16Array((this.capacity - 1) * 6), 1));
    geo.setDrawRange(0, 0);
    this.geometry = geo;

    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uHeadColor: { value: new THREE.Color(opts.headColor ?? 0xbff4ff) },
        uTailColor: { value: new THREE.Color(opts.tailColor ?? 0x5b3bff) },
        uOpacity: { value: 1.0 },
        uTime: { value: 0 },
      },
      transparent: true,
      depthWrite: false,            // additive glow shouldn't occlude
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.frustumCulled = false; // ribbon spans large extents; never cull it
  }

  /** Seed the buffer at a position (e.g. on start/respawn) so it doesn't streak from origin. */
  seed(x, y, z) {
    this.buffer.reset();
    this.buffer.push(x, y, z);
  }

  /**
   * Advance one frame.
   * @param {{x:number,y:number,z:number}} headPos current ship position
   * @param {number} time seconds (drives shimmer)
   */
  update(headPos, time) {
    this.buffer.pushIfMoved(headPos.x, headPos.y, headPos.z, this.minDist);
    const g = buildRibbonGeometry(this.buffer, { width: this.width, up: [0, 1, 0] });

    if (g.count >= 2) {
      const verts = g.count * 2;
      // copy only the live portion into the pre-sized attributes
      this.posAttr.array.set(g.positions.subarray(0, verts * 3));
      this.uvAttr.array.set(g.uvs.subarray(0, verts * 2));
      this.fadeAttr.array.set(g.fades.subarray(0, verts));
      this.posAttr.needsUpdate = true;
      this.uvAttr.needsUpdate = true;
      this.fadeAttr.needsUpdate = true;

      const idxCount = (g.count - 1) * 6;
      this.geometry.index.array.set(g.indices.subarray(0, idxCount));
      this.geometry.index.needsUpdate = true;
      this.geometry.setDrawRange(0, idxCount);
    } else {
      this.geometry.setDrawRange(0, 0);
    }

    this.material.uniforms.uTime.value = time;
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
