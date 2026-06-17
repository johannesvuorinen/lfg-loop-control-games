// ===========================================================================
// Bug Siege — three.js RENDERER + GLUE (the only file that imports three.js).
// Owns: scene/lights/fog, arena+path+pads meshes, bug/turret/projectile pools,
// bloom post-FX, particle FX, the render loop, the RAYCASTER TAP-PICK, and HUD.
// All game *rules* live in logic.js (pure, headless-tested).
// ===========================================================================
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import {
  CONFIG, makePads, createGame, build, canBuild, upgrade, canUpgrade,
  upgradeCost, sell, step, resetGame,
} from './logic.js';

// ---------------------------------------------------------------------------
// Arena layout (shared shape with the LFG build). Path winds through a grid.
// ---------------------------------------------------------------------------
const WAYPOINTS = [
  { x: -16, z: -10 }, { x: -6, z: -10 }, { x: -6, z: -2 }, { x: 6, z: -2 },
  { x: 6, z: 6 }, { x: -4, z: 6 }, { x: -4, z: 12 }, { x: 16, z: 12 },
];
// Pads flank the path on a loose grid.
const PAD_POS = [
  { x: -11, z: -6 }, { x: -1, z: -6 }, { x: -11, z: 2 }, { x: 1, z: 2 },
  { x: 10, z: 2 }, { x: 10, z: 9 }, { x: 0, z: 9 }, { x: -9, z: 9 },
  { x: 2, z: -6 }, { x: -6, z: 1.5 }, { x: 11, z: -2 }, { x: 6, z: 9.5 },
];

const HIVE_POS = WAYPOINTS[WAYPOINTS.length - 1];

const game = createGame(makePads(PAD_POS), WAYPOINTS);

// ---------------------------------------------------------------------------
// Renderer / scene / camera
// ---------------------------------------------------------------------------
const app = document.getElementById('app');

// Robust viewport size: prefer window inner size, but fall back to the #app
// box (and finally a sane default) so a container that reports 0 before layout
// — e.g. a freshly-attached iframe — never produces a 0x0 (black) canvas.
function viewSize() {
  let w = window.innerWidth || 0, h = window.innerHeight || 0;
  if (w < 2 || h < 2) { const r = app.getBoundingClientRect(); w = r.width; h = r.height; }
  if (w < 2 || h < 2) { w = 1280; h = 800; }
  return { w, h };
}

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
{ const s = viewSize(); renderer.setSize(s.w, s.h); }
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x05070d);
scene.fog = new THREE.FogExp2(0x05070d, 0.026);

const camera = new THREE.PerspectiveCamera(52, viewSize().w / viewSize().h, 0.1, 200);
camera.position.set(0, 26, 30);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 1);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 14;
controls.maxDistance = 60;
controls.maxPolarAngle = Math.PI * 0.46; // keep camera above the ground
controls.update();

// ---------------------------------------------------------------------------
// Lights
// ---------------------------------------------------------------------------
scene.add(new THREE.HemisphereLight(0x9fc8ff, 0x16203a, 0.75));
const key = new THREE.DirectionalLight(0xfff1d0, 1.5);
key.position.set(14, 28, 12);
key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
key.shadow.camera.near = 1; key.shadow.camera.far = 90;
key.shadow.camera.left = -32; key.shadow.camera.right = 32;
key.shadow.camera.top = 32; key.shadow.camera.bottom = -32;
key.shadow.bias = -0.0005;
scene.add(key);
const rim = new THREE.DirectionalLight(0x4060ff, 0.5);
rim.position.set(-16, 10, -16);
scene.add(rim);

// ---------------------------------------------------------------------------
// Ground + path
// ---------------------------------------------------------------------------
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(80, 80),
  new THREE.MeshStandardMaterial({ color: 0x16243c, roughness: 0.9, metalness: 0.05 })
);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -0.02;
ground.receiveShadow = true;
scene.add(ground);

// Grid helper for arena feel
const grid = new THREE.GridHelper(80, 40, 0x2f5d8f, 0x1b3658);
grid.position.y = 0.0;
scene.add(grid);

// Build a ribbon mesh along the waypoints for the path.
function buildPathRibbon(waypoints, width) {
  const left = [], right = [];
  for (let i = 0; i < waypoints.length; i++) {
    const p = waypoints[i];
    const prev = waypoints[Math.max(0, i - 1)];
    const next = waypoints[Math.min(waypoints.length - 1, i + 1)];
    const dx = next.x - prev.x, dz = next.z - prev.z;
    const len = Math.hypot(dx, dz) || 1;
    const nx = -dz / len, nz = dx / len; // normal
    left.push([p.x + nx * width, p.z + nz * width]);
    right.push([p.x - nx * width, p.z - nz * width]);
  }
  const verts = [];
  for (let i = 0; i < waypoints.length - 1; i++) {
    const l0 = left[i], l1 = left[i + 1], r0 = right[i], r1 = right[i + 1];
    verts.push(l0[0], 0, l0[1], r0[0], 0, r0[1], l1[0], 0, l1[1]);
    verts.push(r0[0], 0, r0[1], r1[0], 0, r1[1], l1[0], 0, l1[1]);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  geo.computeVertexNormals();
  return geo;
}
const pathMesh = new THREE.Mesh(
  buildPathRibbon(WAYPOINTS, 1.7),
  new THREE.MeshStandardMaterial({ color: 0x3a2a5a, roughness: 0.6, emissive: 0x4a2d7a, emissiveIntensity: 0.9 })
);
pathMesh.position.y = 0.015;
pathMesh.receiveShadow = true;
scene.add(pathMesh);

// Bright edge lines along both sides of the path so the route reads clearly.
function pathEdgeLines(waypoints, width) {
  const mk = (sign) => {
    const pts = [];
    for (let i = 0; i < waypoints.length; i++) {
      const p = waypoints[i];
      const prev = waypoints[Math.max(0, i - 1)];
      const next = waypoints[Math.min(waypoints.length - 1, i + 1)];
      const dx = next.x - prev.x, dz = next.z - prev.z;
      const len = Math.hypot(dx, dz) || 1;
      const nx = -dz / len * sign, nz = dx / len * sign;
      pts.push(new THREE.Vector3(p.x + nx * width, 0.05, p.z + nz * width));
    }
    return new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineBasicMaterial({ color: 0xb98bff })
    );
  };
  const g = new THREE.Group(); g.add(mk(1)); g.add(mk(-1)); return g;
}
scene.add(pathEdgeLines(WAYPOINTS, 1.7));

// Hive (the thing to defend) at the path end.
const hive = new THREE.Mesh(
  new THREE.IcosahedronGeometry(1.7, 0),
  new THREE.MeshStandardMaterial({ color: 0x123, emissive: 0x38e1c4, emissiveIntensity: 1.2, roughness: 0.3, metalness: 0.4 })
);
hive.position.set(HIVE_POS.x, 1.5, HIVE_POS.z);
hive.castShadow = true;
scene.add(hive);
const hiveRing = new THREE.Mesh(
  new THREE.TorusGeometry(2.4, 0.12, 8, 40),
  new THREE.MeshStandardMaterial({ color: 0x000, emissive: 0x38e1c4, emissiveIntensity: 1.4 })
);
hiveRing.rotation.x = Math.PI / 2;
hiveRing.position.copy(hive.position).setY(0.2);
scene.add(hiveRing);

// ---------------------------------------------------------------------------
// PADS — the pickable build slots. Each pad is ONE mesh tagged with userData.
// Keeping the pad as a single mesh (no child meshes) makes the raycast hit map
// 1:1 to a pad id; see NOTES.md "picking the pad vs its children".
// ---------------------------------------------------------------------------
const PAD_COLOR_FREE = new THREE.Color(0x14e0a0);
const padGeo = new THREE.CylinderGeometry(1.25, 1.4, 0.25, 6);
const pickables = [];     // meshes the raycaster tests (pads + turret bodies)
const padMeshes = new Map();    // padId -> { base, turret group, ring }
const turretGroups = new Map(); // padId -> THREE.Group (built turret visuals)

for (const pad of game.pads) {
  const mat = new THREE.MeshStandardMaterial({
    color: 0x0e1a2a, emissive: PAD_COLOR_FREE, emissiveIntensity: 0.35,
    roughness: 0.5, metalness: 0.3,
  });
  const base = new THREE.Mesh(padGeo, mat);
  base.position.set(pad.x, 0.12, pad.z);
  base.castShadow = true; base.receiveShadow = true;
  base.userData = { kind: 'pad', padId: pad.id };  // <-- tag for picking
  scene.add(base);
  pickables.push(base);

  // soft ground ring to read as "buildable"
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(1.45, 1.65, 24),
    new THREE.MeshBasicMaterial({ color: PAD_COLOR_FREE, transparent: true, opacity: 0.5, side: THREE.DoubleSide })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.set(pad.x, 0.03, pad.z);
  scene.add(ring);

  padMeshes.set(pad.id, { base, ring, mat });
}

// Build the visual for a turret on a pad (a group so we can rotate the head).
function makeTurretVisual(level) {
  const g = new THREE.Group();
  const hue = new THREE.Color().setHSL(0.55 - level * 0.05, 0.8, 0.55);
  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x10202f, emissive: hue, emissiveIntensity: 0.9, roughness: 0.35, metalness: 0.6,
  });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.9, 0.5, 8), bodyMat);
  base.position.y = 0.4; base.castShadow = true;
  g.add(base);
  const head = new THREE.Group();
  head.position.y = 0.85;
  const turretBody = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.6, 0.9), bodyMat);
  turretBody.castShadow = true;
  head.add(turretBody);
  // barrels grow with level
  for (let i = 0; i < Math.min(level, 3); i++) {
    const barrel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 1.1 + level * 0.12, 8), bodyMat
    );
    barrel.rotation.z = Math.PI / 2;
    barrel.position.set(0.7, -0.1 + i * 0.22 - 0.1 * (level > 1 ? 1 : 0), 0);
    head.add(barrel);
  }
  g.add(head);
  g.userData.head = head;
  g.userData.bodyMat = bodyMat;
  return g;
}

// ---------------------------------------------------------------------------
// Bug / projectile pools (instanced-ish via simple reuse maps).
// ---------------------------------------------------------------------------
const bugMeshes = new Map();   // bugId -> mesh
const bugGeo = new THREE.SphereGeometry(0.55, 12, 10);
const bugMatTemplate = { color: 0x230b16, emissive: 0xff5d6c, emissiveIntensity: 1.1, roughness: 0.4 };

function ensureBugMesh(bug) {
  let m = bugMeshes.get(bug.id);
  if (!m) {
    const grp = new THREE.Group();
    const body = new THREE.Mesh(bugGeo, new THREE.MeshStandardMaterial({ ...bugMatTemplate }));
    body.castShadow = true;
    grp.add(body);
    // little legs/antennae for character
    const legMat = new THREE.MeshStandardMaterial({ color: 0x120308, emissive: 0x551018, emissiveIntensity: 0.5 });
    for (let i = 0; i < 6; i++) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.6), legMat);
      const a = (i / 6) * Math.PI * 2;
      leg.position.set(Math.cos(a) * 0.5, -0.25, Math.sin(a) * 0.5);
      leg.rotation.z = Math.cos(a) * 0.6; leg.rotation.x = Math.sin(a) * 0.6;
      grp.add(leg);
    }
    // health bar (billboarded quad)
    const hb = new THREE.Mesh(
      new THREE.PlaneGeometry(1.2, 0.14),
      new THREE.MeshBasicMaterial({ color: 0x33ff88 })
    );
    hb.position.y = 1.0;
    grp.add(hb);
    grp.userData = { body, hb };
    scene.add(grp);
    bugMeshes.set(bug.id, grp);
    m = grp;
  }
  return m;
}

// projectiles
const projMeshes = new Map();
const projGeo = new THREE.SphereGeometry(0.18, 8, 8);
const projMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffe08a, emissiveIntensity: 2.4 });
function ensureProjMesh(p) {
  let m = projMeshes.get(p.id);
  if (!m) { m = new THREE.Mesh(projGeo, projMat); scene.add(m); projMeshes.set(p.id, m); }
  return m;
}

// ---------------------------------------------------------------------------
// Particle FX — a single recycled Points cloud for hits/kills/muzzle.
// ---------------------------------------------------------------------------
const MAX_P = 900;
const pPos = new Float32Array(MAX_P * 3);
const pVel = new Float32Array(MAX_P * 3);
const pLife = new Float32Array(MAX_P);
const pCol = new Float32Array(MAX_P * 3);
let pHead = 0;
const pGeo = new THREE.BufferGeometry();
pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
const points = new THREE.Points(pGeo, new THREE.PointsMaterial({
  size: 0.32, vertexColors: true, transparent: true, opacity: 0.95,
  depthWrite: false, blending: THREE.AdditiveBlending,
}));
points.frustumCulled = false;
scene.add(points);

function burst(x, z, color, n, spread, up) {
  const c = new THREE.Color(color);
  for (let i = 0; i < n; i++) {
    const idx = pHead; pHead = (pHead + 1) % MAX_P;
    pPos[idx * 3] = x; pPos[idx * 3 + 1] = 0.6; pPos[idx * 3 + 2] = z;
    const a = Math.random() * Math.PI * 2, s = Math.random() * spread;
    pVel[idx * 3] = Math.cos(a) * s;
    pVel[idx * 3 + 1] = Math.random() * up + 0.5;
    pVel[idx * 3 + 2] = Math.sin(a) * s;
    pLife[idx] = 0.5 + Math.random() * 0.4;
    pCol[idx * 3] = c.r; pCol[idx * 3 + 1] = c.g; pCol[idx * 3 + 2] = c.b;
  }
}
function updateParticles(dt) {
  for (let i = 0; i < MAX_P; i++) {
    if (pLife[i] <= 0) { pCol[i * 3] = pCol[i * 3 + 1] = pCol[i * 3 + 2] = 0; continue; }
    pLife[i] -= dt;
    pVel[i * 3 + 1] -= 4.5 * dt; // gravity
    pPos[i * 3] += pVel[i * 3] * dt;
    pPos[i * 3 + 1] += pVel[i * 3 + 1] * dt;
    pPos[i * 3 + 2] += pVel[i * 3 + 2] * dt;
    const f = Math.max(0, pLife[i]);
    pCol[i * 3] *= 0.98; pCol[i * 3 + 1] *= 0.98; pCol[i * 3 + 2] *= 0.98;
    if (pPos[i * 3 + 1] < 0) { pPos[i * 3 + 1] = 0; pVel[i * 3 + 1] *= -0.3; }
    void f;
  }
  pGeo.attributes.position.needsUpdate = true;
  pGeo.attributes.color.needsUpdate = true;
}

// ---------------------------------------------------------------------------
// Post-processing: bloom
// ---------------------------------------------------------------------------
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(viewSize().w, viewSize().h), 0.9, 0.5, 0.2);
composer.addPass(bloom);
composer.addPass(new OutputPass());

// ===========================================================================
// THE PROBE — TAP-TO-PICK (raycaster) with tap-vs-drag discrimination.
// ===========================================================================
const raycaster = new THREE.Raycaster();
const pointerNDC = new THREE.Vector2();

// Drag discrimination: remember where the pointer went DOWN; if it moved beyond
// a small threshold (or was held long), treat it as an OrbitControls drag and
// DON'T fire a pick on pointerup. This is the whole "tap vs drag" cost.
let downX = 0, downY = 0, downT = 0, moved = false;
const DRAG_PX = 8;       // movement beyond this = drag, not tap
const TAP_MS = 350;      // and a tap must be reasonably quick

const dom = renderer.domElement;
dom.addEventListener('pointerdown', (e) => {
  downX = e.clientX; downY = e.clientY; downT = performance.now(); moved = false;
});
dom.addEventListener('pointermove', (e) => {
  if (Math.abs(e.clientX - downX) > DRAG_PX || Math.abs(e.clientY - downY) > DRAG_PX) moved = true;
});
dom.addEventListener('pointerup', (e) => {
  const quick = performance.now() - downT < TAP_MS;
  if (moved || !quick) return;          // it was an orbit drag -> ignore
  handleTap(e.clientX, e.clientY);
});

// The actual pick: NDC from screen coords -> ray -> intersect the pad/turret meshes.
function pickAt(clientX, clientY) {
  const rect = dom.getBoundingClientRect();
  pointerNDC.x = ((clientX - rect.left) / rect.width) * 2 - 1;
  pointerNDC.y = -((clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointerNDC, camera);
  // `true` = recursive: a turret is a Group whose barrels/head are CHILD meshes,
  // so we must descend into them to get a hit at all. The hit comes back on the
  // child mesh, so we then walk UP to the first ancestor carrying a padId tag —
  // that collapses "hit any part of the turret/pad" down to one pad id. (A pad
  // base is a single tagged mesh, so it resolves to itself immediately.)
  const hits = raycaster.intersectObjects(pickables, true);
  for (const h of hits) {
    let o = h.object;
    while (o && o.userData.padId === undefined) o = o.parent;
    if (o) return { padId: o.userData.padId, point: h.point, distance: h.distance };
  }
  return null;
}

function handleTap(clientX, clientY) {
  if (game.gameOver) return;
  const hit = pickAt(clientX, clientY);
  if (!hit) { deselect(); return; }
  const pad = game.pads.find((p) => p.id === hit.padId);
  if (!pad) return;
  if (pad.turret) {
    selectPad(pad.id);                 // tap a turret -> open manage panel
  } else {
    const r = build(game, pad.id);     // tap empty pad -> build
    if (r.ok) {
      mountTurretVisual(pad);
      burst(pad.x, pad.z, 0x14e0a0, 24, 4, 4);
      selectPad(pad.id);
      refreshHUD();
    } else {
      flashBanner(r.reason === 'too-poor' ? 'Not enough currency' : 'Can’t build there');
    }
  }
}

function mountTurretVisual(pad) {
  // remove old if any
  const old = turretGroups.get(pad.id);
  if (old) { scene.remove(old); }
  const g = makeTurretVisual(pad.turret.level);
  g.position.set(pad.x, 0.2, pad.z);
  g.userData.padId = pad.id;           // tag the turret root for picking too
  scene.add(g);
  turretGroups.set(pad.id, g);
  // make turret pickable; remove the bare pad base from pickables to avoid double-hit
  if (!pickables.includes(g)) pickables.push(g);
  // dim the buildable ring
  const pm = padMeshes.get(pad.id);
  if (pm) pm.ring.material.opacity = 0.12;
}

// ---------------------------------------------------------------------------
// Selection panel wiring
// ---------------------------------------------------------------------------
let selectedPadId = null;
const panel = document.getElementById('panel');
const selRing = new THREE.Mesh(
  new THREE.RingGeometry(1.7, 1.95, 28),
  new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9, side: THREE.DoubleSide })
);
selRing.rotation.x = -Math.PI / 2; selRing.visible = false;
scene.add(selRing);

function selectPad(id) {
  selectedPadId = id;
  const pad = game.pads.find((p) => p.id === id);
  selRing.position.set(pad.x, 0.05, pad.z);
  selRing.visible = true;
  refreshPanel();
  panel.classList.add('show');
}
function deselect() {
  selectedPadId = null; selRing.visible = false; panel.classList.remove('show');
}
function refreshPanel() {
  if (selectedPadId == null) return;
  const pad = game.pads.find((p) => p.id === selectedPadId);
  if (!pad || !pad.turret) { deselect(); return; }
  const lvl = pad.turret.level;
  document.getElementById('pTitle').textContent = `Turret · Lv ${lvl}`;
  const up = canUpgrade(game, pad.id);
  const rng = CONFIG.turretRange[lvl], dmg = CONFIG.turretDamage[lvl];
  document.getElementById('pMeta').textContent =
    `dmg ${dmg} · range ${rng} · refund ${Math.floor(pad.turret.totalSpent * CONFIG.sellRefundFraction)}`;
  const upBtn = document.getElementById('upBtn');
  if (lvl >= CONFIG.maxTurretLevel) { upBtn.textContent = 'Max level'; upBtn.disabled = true; }
  else { upBtn.textContent = `Upgrade (${upgradeCost(lvl)})`; upBtn.disabled = !up.ok; }
}
document.getElementById('upBtn').onclick = () => {
  if (selectedPadId == null) return;
  const r = upgrade(game, selectedPadId);
  if (r.ok) {
    const pad = game.pads.find((p) => p.id === selectedPadId);
    mountTurretVisual(pad);
    burst(pad.x, pad.z, 0x9fe8ff, 20, 3, 4);
    refreshHUD(); refreshPanel();
  } else flashBanner(r.reason === 'too-poor' ? 'Not enough currency' : 'Cannot upgrade');
};
document.getElementById('sellBtn').onclick = () => {
  if (selectedPadId == null) return;
  const pad = game.pads.find((p) => p.id === selectedPadId);
  const r = sell(game, selectedPadId);
  if (r.ok) {
    const g = turretGroups.get(pad.id);
    if (g) { scene.remove(g); turretGroups.delete(pad.id);
      const i = pickables.indexOf(g); if (i >= 0) pickables.splice(i, 1); }
    const pm = padMeshes.get(pad.id); if (pm) pm.ring.material.opacity = 0.5;
    burst(pad.x, pad.z, 0xffcf4d, 18, 3, 3);
    deselect(); refreshHUD();
  }
};

// ---------------------------------------------------------------------------
// HUD
// ---------------------------------------------------------------------------
const cashV = document.getElementById('cashV');
const lifeV = document.getElementById('lifeV');
const waveV = document.getElementById('waveV');
const banner = document.getElementById('banner');
let bannerTimer = 0;
function flashBanner(text, ms = 1400) { banner.textContent = text; banner.style.opacity = '1'; bannerTimer = ms / 1000; }
function refreshHUD() {
  cashV.textContent = game.currency;
  lifeV.textContent = game.lives;
  waveV.textContent = `${Math.max(game.wave, 0)}/${CONFIG.totalWaves}`;
}
document.getElementById('resetBtn').onclick = doReset;
document.getElementById('ovBtn').onclick = doReset;

function clearAllVisuals() {
  for (const g of turretGroups.values()) { scene.remove(g); const i = pickables.indexOf(g); if (i >= 0) pickables.splice(i, 1); }
  turretGroups.clear();
  for (const m of bugMeshes.values()) scene.remove(m); bugMeshes.clear();
  for (const m of projMeshes.values()) scene.remove(m); projMeshes.clear();
  for (const [, pm] of padMeshes) pm.ring.material.opacity = 0.5;
}
function doReset() {
  clearAllVisuals();
  resetGame(game);
  deselect();
  document.getElementById('overlay').className = '';
  flashBanner('Tap a glowing pad to build a turret');
  refreshHUD();
}

function showEnd(win) {
  const ov = document.getElementById('overlay');
  ov.className = `show ${win ? 'win' : 'lose'}`;
  document.getElementById('ovTitle').textContent = win ? 'Hive Secured' : 'Hive Overrun';
  document.getElementById('ovSub').textContent =
    `Waves ${game.wave}/${CONFIG.totalWaves} · kills ${game.stats.kills} · leaked ${game.stats.leaked}`;
}

// ---------------------------------------------------------------------------
// Event -> FX mapping for the discrete events `step()` returns.
// ---------------------------------------------------------------------------
function handleEvents(events) {
  for (const e of events) {
    if (e.type === 'kill') burst(e.x, e.z, 0xff5d6c, 26, 5, 5);
    else if (e.type === 'hit') burst(e.x, e.z, 0xffe08a, 8, 2.5, 2.5);
    else if (e.type === 'shoot') burst(e.x, e.z, 0xffe08a, 4, 1.5, 1.5);
    else if (e.type === 'leak') { burst(e.x, e.z, 0x38e1c4, 30, 6, 2); flashBanner('A bug reached the hive!'); }
    else if (e.type === 'wave-start') flashBanner(`Wave ${e.wave}`);
    else if (e.type === 'wave-clear') flashBanner(`Wave ${e.wave} cleared`);
    else if (e.type === 'win') showEnd(true);
    else if (e.type === 'lose') showEnd(false);
  }
}

// ---------------------------------------------------------------------------
// Sync three.js meshes from logic state each frame.
// ---------------------------------------------------------------------------
function syncMeshes(dt, tNow) {
  // bugs
  const liveIds = new Set();
  for (const bug of game.bugs) {
    liveIds.add(bug.id);
    const m = ensureBugMesh(bug);
    m.position.set(bug.x, 0.6 + Math.sin(tNow * 6 + bug.id) * 0.06, bug.z);
    m.rotation.y = tNow * 2 + bug.id;
    // health bar scale + face camera
    const hb = m.userData.hb;
    const frac = Math.max(0, bug.hp / bug.maxHp);
    hb.scale.x = frac;
    hb.material.color.setHSL(0.33 * frac, 0.9, 0.5);
    hb.position.x = -0.6 * (1 - frac);
    hb.quaternion.copy(camera.quaternion);
  }
  // remove meshes for dead bugs
  for (const [id, m] of bugMeshes) {
    if (!liveIds.has(id)) { scene.remove(m); bugMeshes.delete(id); }
  }
  // projectiles
  const liveProj = new Set();
  for (const p of game.projectiles) {
    liveProj.add(p.id);
    const m = ensureProjMesh(p);
    m.position.set(p.x, 0.8, p.z);
  }
  for (const [id, m] of projMeshes) {
    if (!liveProj.has(id)) { scene.remove(m); projMeshes.delete(id); }
  }
  // aim turret heads at their current target (cosmetic)
  for (const pad of game.pads) {
    if (!pad.turret) continue;
    const g = turretGroups.get(pad.id);
    if (!g) continue;
    const range = CONFIG.turretRange[pad.turret.level];
    // nearest live bug for aim
    let best = null, bd = Infinity;
    for (const b of game.bugs) {
      const dx = b.x - pad.x, dz = b.z - pad.z, d = dx * dx + dz * dz;
      if (d <= range * range && d < bd) { bd = d; best = b; }
    }
    if (best) {
      const ang = Math.atan2(best.x - pad.x, best.z - pad.z);
      g.userData.head.rotation.y = ang;
    } else {
      g.userData.head.rotation.y += dt * 0.6; // idle sweep
    }
  }
}

// ---------------------------------------------------------------------------
// Main loop
// ---------------------------------------------------------------------------
const timer = new THREE.Timer();
let tAccum = 0;

// One simulation+render frame. dt is clamped by the caller.
function frame(dt) {
  tAccum += dt;

  if (!game.gameOver) {
    const events = step(game, dt);
    if (events.length) { handleEvents(events); refreshHUD(); }
  }

  syncMeshes(dt, tAccum);
  updateParticles(dt);

  // animate hive + selection ring
  hive.rotation.y += dt * 0.4;
  hiveRing.rotation.z += dt * 0.8;
  hiveRing.scale.setScalar(1 + Math.sin(tAccum * 3) * 0.04);
  if (selRing.visible) selRing.rotation.z += dt * 1.5;

  // banner fade
  if (bannerTimer > 0) { bannerTimer -= dt; if (bannerTimer <= 0) banner.style.opacity = '0'; }

  // keep panel stats fresh (currency may change passively)
  if (selectedPadId != null) refreshPanel();

  controls.update();
  composer.render();
}

function animate() {
  requestAnimationFrame(animate);
  timer.update();
  // Clamp huge deltas (e.g. after the tab was backgrounded) so the sim never
  // takes a giant step. (Core THREE.Timer has no setMaxDelta — clamp here.)
  frame(Math.min(timer.getDelta(), 0.05));
}

// ---------------------------------------------------------------------------
// Resize
// ---------------------------------------------------------------------------
function applySize() {
  const { w, h } = viewSize();
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  composer.setSize(w, h);
  bloom.setSize(w, h);
}
addEventListener('resize', applySize);
// Also reapply once after first layout settles (covers iframes that report 0
// at module-eval time, then get a real box a frame or two later).
requestAnimationFrame(applySize);
setTimeout(applySize, 300);

// Boot
refreshHUD();
animate();

// Expose for quick console/debug & for any headless smoke harness.
// __projectPad(id) -> client {x,y} for a pad center (used to drive a synthetic
// tap end-to-end through the raycaster in a headless smoke test).
function projectPad(id) {
  const pad = game.pads.find((p) => p.id === id);
  if (!pad) return null;
  const v = new THREE.Vector3(pad.x, 0.2, pad.z).project(camera);
  const { w, h } = viewSize();
  return { x: (v.x * 0.5 + 0.5) * w, y: (-v.y * 0.5 + 0.5) * h, ndc: [v.x, v.y] };
}
window.__bugsiege = { game, CONFIG, pickAt, handleTap, projectPad, camera, viewSize, frame, applySize };
