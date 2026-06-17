// main.js — render + glue layer for SLIPSTREAM. Wires the pure logic
// (gameplay.js, course.js, trail.js) to three.js: scene, camera, ship, course
// meshes, bloom post-processing, input, HUD, and the game loop.
//
// Anything that's a "rule of the game" lives in the pure modules and is tested;
// this file only draws state and forwards input.

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import { GameState, ringPass, orbHit } from './gameplay.js';
import { generateRings, generateOrbs } from './course.js';
import { TrailMesh } from './trail_mesh.js';
import { createInput } from './input.js';

// ------------------------------------------------------------------ constants
const COURSE = {
  ringCount: 90,
  ringSpacing: 34,
  ringRadius: 3.4,
  bounds: { x: 8.5, y: 4.6 },
  orbsPerGap: 3,
  seed: 7,
};
const SHIP_RADIUS = 0.55;
const VIEW_AHEAD = 14;     // how far ahead the camera looks
const CAM_BACK = 9;        // camera distance behind ship
const CAM_UP = 3.2;        // camera height above ship

// ------------------------------------------------------------------ renderer
const app = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x05060f);
scene.fog = new THREE.FogExp2(0x05060f, 0.0085);

const camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.1, 1200);
camera.position.set(0, CAM_UP, CAM_BACK);

// ------------------------------------------------------------------ lights
scene.add(new THREE.AmbientLight(0x4060a0, 0.6));
const keyLight = new THREE.DirectionalLight(0x88bbff, 0.8);
keyLight.position.set(3, 8, 5);
scene.add(keyLight);
// a point light that rides with the ship to make it pop
const shipLight = new THREE.PointLight(0x66ccff, 2.2, 40, 1.6);
scene.add(shipLight);

// ------------------------------------------------------------------ starfield
function makeStarfield(count, spread, depth) {
  const g = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3 + 0] = (Math.random() * 2 - 1) * spread;
    pos[i * 3 + 1] = (Math.random() * 2 - 1) * spread * 0.6;
    pos[i * 3 + 2] = -Math.random() * depth;
  }
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const m = new THREE.PointsMaterial({
    color: 0x9fc6ff, size: 0.35, sizeAttenuation: true,
    transparent: true, opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const p = new THREE.Points(g, m);
  p.frustumCulled = false;
  return p;
}
const stars = makeStarfield(1400, 80, COURSE.ringCount * COURSE.ringSpacing + 200);
scene.add(stars);
const starDepth = COURSE.ringCount * COURSE.ringSpacing + 200;

// ------------------------------------------------------------------ tube guides
// faint lane rails that give a sense of speed and the playable tube extents
function makeRails() {
  const group = new THREE.Group();
  const len = COURSE.ringCount * COURSE.ringSpacing + 120;
  const mat = new THREE.LineBasicMaterial({ color: 0x2b4a7a, transparent: true, opacity: 0.5 });
  const corners = [
    [-COURSE.bounds.x, -COURSE.bounds.y],
    [COURSE.bounds.x, -COURSE.bounds.y],
    [COURSE.bounds.x, COURSE.bounds.y],
    [-COURSE.bounds.x, COURSE.bounds.y],
  ];
  for (const [x, y] of corners) {
    const geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(x, y, 20),
      new THREE.Vector3(x, y, -len),
    ]);
    group.add(new THREE.Line(geo, mat));
  }
  return group;
}
scene.add(makeRails());

// ------------------------------------------------------------------ ship
function makeShip() {
  const group = new THREE.Group();
  // glowing core
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(SHIP_RADIUS, 1),
    new THREE.MeshBasicMaterial({ color: 0xeaffff })
  );
  group.add(core);
  // halo shell (additive) for the comet head glow
  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(SHIP_RADIUS * 2.1, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0x4fd2ff, transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  group.add(halo);
  // a thin forward spike so orientation/banking reads
  const spike = new THREE.Mesh(
    new THREE.ConeGeometry(SHIP_RADIUS * 0.5, SHIP_RADIUS * 2.4, 12),
    new THREE.MeshBasicMaterial({ color: 0xbff4ff })
  );
  spike.rotation.x = -Math.PI / 2; // point toward -Z
  spike.position.z = -SHIP_RADIUS * 1.4;
  group.add(spike);
  return { group, core, halo };
}
const ship = makeShip();
scene.add(ship.group);

// the hero trail
const trail = new TrailMesh({ capacity: 120, width: 1.9, headColor: 0xccfaff, tailColor: 0x6a2bff, minDist: 0.4 });
scene.add(trail.mesh);
// a second, thinner inner trail for a hot core streak
const innerTrail = new TrailMesh({ capacity: 80, width: 0.7, headColor: 0xffffff, tailColor: 0x39c6ff, minDist: 0.4 });
scene.add(innerTrail.mesh);

// ------------------------------------------------------------------ course meshes (pooled)
const ringMat = new THREE.MeshStandardMaterial({
  color: 0x18324f, emissive: 0x33d6ff, emissiveIntensity: 1.4,
  metalness: 0.4, roughness: 0.35,
});
const ringMatPassed = new THREE.MeshStandardMaterial({
  color: 0x14402a, emissive: 0x3bff9b, emissiveIntensity: 1.1,
  metalness: 0.4, roughness: 0.4,
});
const ringGeo = new THREE.TorusGeometry(COURSE.ringRadius, 0.22, 12, 40);

const orbGeo = new THREE.IcosahedronGeometry(0.55, 1);
const orbMat = new THREE.MeshBasicMaterial({ color: 0xffe27a });

let rings = [];
let orbs = [];
let ringMeshes = [];
let orbMeshes = [];

function buildCourse() {
  // clear old
  for (const m of ringMeshes) scene.remove(m);
  for (const m of orbMeshes) scene.remove(m);
  ringMeshes = []; orbMeshes = [];

  rings = generateRings({
    count: COURSE.ringCount, zStart: -45, spacing: COURSE.ringSpacing,
    radius: COURSE.ringRadius, bounds: COURSE.bounds, seed: COURSE.seed,
  });
  orbs = generateOrbs(rings, { perGap: COURSE.orbsPerGap, seed: COURSE.seed + 11, jitter: 2.0 });

  for (const r of rings) {
    const m = new THREE.Mesh(ringGeo, ringMat);
    m.position.set(r.x, r.y, r.z);
    m.userData.ring = r;
    m.userData.passed = false;
    scene.add(m);
    ringMeshes.push(m);
  }
  for (const o of orbs) {
    const m = new THREE.Mesh(orbGeo, orbMat);
    m.position.set(o.x, o.y, o.z);
    m.userData.orb = o;
    scene.add(m);
    orbMeshes.push(m);
  }
}

// ------------------------------------------------------------------ bloom (the glow)
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.65,  // strength — enough to glow without washing the scene out
  0.6,   // radius
  0.3    // threshold — only the bright cores (trail head, orbs, rings) bloom
);
composer.addPass(bloom);
composer.addPass(new OutputPass());

// ------------------------------------------------------------------ HUD refs
const el = {
  score: document.getElementById('score'),
  rings: document.getElementById('rings'),
  orbs: document.getElementById('orbs'),
  combo: document.getElementById('combo'),
  speedBar: document.getElementById('speed-bar'),
  overlay: document.getElementById('overlay'),
  subtitle: document.getElementById('subtitle'),
  startBtn: document.getElementById('start-btn'),
  finalStats: document.getElementById('final-stats'),
  flash: document.getElementById('flash'),
};

// ------------------------------------------------------------------ input
const input = createInput(renderer.domElement);

// ------------------------------------------------------------------ game state
let game = null;
let prevPos = { x: 0, y: 0, z: 0 };
let running = false;
let shake = 0;
let comboFlashUntil = 0;

function startGame() {
  game = new GameState({
    baseSpeed: 30, maxSpeed: 78, steerSpeed: 24,
    bounds: COURSE.bounds, comboGrace: 3.2,
  });
  buildCourse();
  trail.seed(0, 0, 0);
  innerTrail.seed(0, 0, 0);
  ship.group.position.set(0, 0, 0);
  camera.position.set(0, CAM_UP, CAM_BACK);
  prevPos = { x: 0, y: 0, z: 0 };
  shake = 0;
  running = true;
  el.overlay.classList.add('hidden');
  input.reset();
}

function endGame() {
  running = false;
  const accuracy = game.ringsTotal > 0 ? Math.round((game.rings / game.ringsTotal) * 100) : 100;
  el.finalStats.style.display = 'flex';
  el.finalStats.innerHTML = `
    <div class="stat-line">Final score <b>${Math.round(game.score).toLocaleString()}</b></div>
    <div class="stat-line">Rings cleared <b>${game.rings}/${game.ringsTotal}</b> (${accuracy}%)</div>
    <div class="stat-line">Orbs <b>${game.orbs}</b> &nbsp;·&nbsp; Best combo <b>x${game.maxCombo}</b></div>
  `;
  el.subtitle.style.display = 'none';
  document.getElementById('title').textContent = 'RUN COMPLETE';
  el.startBtn.textContent = 'Run again';
  el.overlay.classList.remove('hidden');
}

el.startBtn.addEventListener('click', () => {
  el.subtitle.style.display = '';
  document.getElementById('title').textContent = 'SLIPSTREAM';
  el.startBtn.textContent = 'Launch';
  el.finalStats.style.display = 'none';
  startGame();
});

// ------------------------------------------------------------------ pickup FX (cheap pooled rings)
const fxPool = [];
function spawnPickupFX(x, y, z, color) {
  let fx = fxPool.find((f) => !f.active);
  if (!fx) {
    const geo = new THREE.RingGeometry(0.3, 0.45, 24);
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);
    fx = { mesh, mat, active: false, t: 0 };
    fxPool.push(fx);
  }
  fx.mesh.position.set(x, y, z);
  fx.mesh.material.color.set(color);
  fx.active = true;
  fx.t = 0;
  fx.mesh.visible = true;
}
function updateFX(dt) {
  for (const fx of fxPool) {
    if (!fx.active) continue;
    fx.t += dt;
    const k = fx.t / 0.5;
    if (k >= 1) { fx.active = false; fx.mesh.visible = false; continue; }
    const s = 1 + k * 4;
    fx.mesh.scale.set(s, s, s);
    fx.mat.opacity = 1 - k;
    fx.mesh.lookAt(camera.position);
  }
}

function flash(strength = 0.5) {
  el.flash.style.transition = 'none';
  el.flash.style.opacity = String(strength);
  requestAnimationFrame(() => {
    el.flash.style.transition = 'opacity 0.35s ease-out';
    el.flash.style.opacity = '0';
  });
}

// ------------------------------------------------------------------ HUD update
let lastComboShown = 1;
function updateHUD() {
  el.score.textContent = Math.round(game.score).toLocaleString();
  el.rings.textContent = String(game.rings);
  el.orbs.textContent = String(game.orbs);
  el.combo.textContent = 'x' + game.combo;
  if (game.combo !== lastComboShown) {
    el.combo.classList.add('pulse');
    comboFlashUntil = performance.now() + 90;
    lastComboShown = game.combo;
  }
  if (performance.now() > comboFlashUntil) el.combo.classList.remove('pulse');
  const frac = (game.speed - game.baseSpeed) / (game.maxSpeed - game.baseSpeed);
  el.speedBar.style.width = Math.max(4, Math.min(100, frac * 100)) + '%';
}

// ------------------------------------------------------------------ main loop
const clock = new THREE.Clock();
let elapsed = 0;

// Advance one simulation+render step. Called by the rAF loop with real-time dt,
// and also callable directly (test harness / hidden-tab) so the loop never relies
// solely on requestAnimationFrame. `steerOverride` lets the harness inject input.
function stepGame(dt, steerOverride) {
  elapsed += dt;

  // animate ambient things even on the menu
  ship.halo.material.opacity = 0.24 + 0.08 * Math.sin(elapsed * 4);
  for (const m of orbMeshes) { m.rotation.y += dt * 1.5; m.rotation.x += dt * 0.8; }

  if (running && game) {
    const steer = steerOverride || input.getSteer();
    prevPos = { ...game.pos };
    game.update(dt, steer);

    // move ship + camera
    ship.group.position.set(game.pos.x, game.pos.y, game.pos.z);
    // bank the ship into the turn for feel
    ship.group.rotation.z = -steer.x * 0.5;
    ship.group.rotation.x = steer.y * 0.25;
    shipLight.position.set(game.pos.x, game.pos.y, game.pos.z + 1);

    // chase camera with smoothing + a little speed-based shake
    const speedFrac = (game.speed - game.baseSpeed) / (game.maxSpeed - game.baseSpeed);
    const targetCam = new THREE.Vector3(
      game.pos.x * 0.55,
      game.pos.y * 0.45 + CAM_UP,
      game.pos.z + CAM_BACK
    );
    camera.position.lerp(targetCam, 1 - Math.pow(0.0015, dt));
    shake = Math.max(0, shake - dt * 4);
    const sh = (shake + speedFrac * 0.25);
    camera.position.x += (Math.random() - 0.5) * sh * 0.18;
    camera.position.y += (Math.random() - 0.5) * sh * 0.18;
    camera.lookAt(game.pos.x * 0.7, game.pos.y * 0.6, game.pos.z - VIEW_AHEAD);

    // trail follows the ship head (slightly behind the nose)
    const headPos = { x: game.pos.x, y: game.pos.y, z: game.pos.z };
    trail.update(headPos, elapsed);
    innerTrail.update(headPos, elapsed);

    // ---- ring detection ----
    for (const m of ringMeshes) {
      const r = m.userData.ring;
      if (m.userData.passed) continue;
      // only test rings near the ship's z to keep it cheap
      if (Math.abs(r.z - game.pos.z) > 60) continue;
      const res = ringPass(r, prevPos, game.pos);
      if (res.crossed) {
        m.userData.passed = true;
        if (res.passed) {
          game.registerCleanRing();
          m.material = ringMatPassed;
          spawnPickupFX(r.x, r.y, r.z, 0x6bffd0);
          shake = Math.min(1, shake + 0.35);
          flash(0.16);
        } else {
          game.registerMissedRing();
        }
      }
    }

    // ---- orb pickup ----
    for (const m of orbMeshes) {
      const o = m.userData.orb;
      if (o.taken) continue;
      if (Math.abs(o.z - game.pos.z) > 8) continue;
      if (orbHit(o, game.pos, SHIP_RADIUS)) {
        o.taken = true;
        m.visible = false;
        game.registerOrb();
        spawnPickupFX(o.x, o.y, o.z, 0xffe27a);
      }
    }

    // ---- end condition: past the last ring ----
    const lastRingZ = rings[rings.length - 1].z;
    if (game.pos.z < lastRingZ - 40) {
      endGame();
    }

    updateHUD();
  }

  // recycle starfield so it appears infinite, relative to camera
  recycleStars();
  updateFX(dt);

  composer.render();
}

// rAF driver: compute real-time dt and step. Browsers pause rAF on hidden tabs;
// that's fine for a game (it just resumes), and the manual stepGame path covers
// the headless-verification case where the tab is backgrounded.
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(clock.getDelta(), 0.05); // clamp to avoid huge steps on tab-restore
  stepGame(dt);
}

function recycleStars() {
  const arr = stars.geometry.attributes.position.array;
  const camZ = camera.position.z;
  let changed = false;
  for (let i = 0; i < arr.length; i += 3) {
    // if a star is well behind the camera, wrap it far ahead
    if (arr[i + 2] > camZ + 20) {
      arr[i + 2] -= starDepth;
      arr[i + 0] = (Math.random() * 2 - 1) * 80;
      arr[i + 1] = (Math.random() * 2 - 1) * 48;
      changed = true;
    }
  }
  if (changed) stars.geometry.attributes.position.needsUpdate = true;
}

// ------------------------------------------------------------------ resize
window.addEventListener('resize', () => {
  const w = window.innerWidth, h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  composer.setSize(w, h);
  bloom.setSize(w, h);
});

// kick off the render loop (menu renders behind the overlay)
buildCourse();           // show a course behind the menu
trail.seed(0, 0, 0);
innerTrail.seed(0, 0, 0);
frame();

// expose a tiny hook for the headless harness to verify the trail streams.
// `step`/`tick` drive the real stepGame path so verification doesn't depend on
// requestAnimationFrame firing (which browsers pause on hidden/background tabs).
window.__SLIPSTREAM__ = {
  start: startGame,
  step: (dt = 1 / 60, steer) => stepGame(dt, steer),
  tick: (n = 60, dt = 1 / 60, steer) => { for (let i = 0; i < n; i++) stepGame(dt, steer); },
  getState: () => game,
  trailVertCount: () => trail.geometry.drawRange.count,
  // sample the actual GPU-bound position buffer to prove the ribbon spans the path
  trailHeadTail: () => {
    const n = trail.geometry.drawRange.count;
    if (n < 6) return null;
    const p = trail.posAttr.array;
    const liveVerts = trail.buffer.length * 2;
    const head = { x: p[0], y: p[1], z: p[2] }; // first emitted vert = tail sample 0
    const ti = (liveVerts - 2) * 3;             // last vertex pair = head sample
    const tail = { x: p[ti], y: p[ti + 1], z: p[ti + 2] };
    return { tailSample: head, headSample: tail, samples: trail.buffer.length };
  },
  shipZ: () => (game ? game.pos.z : null),
};
