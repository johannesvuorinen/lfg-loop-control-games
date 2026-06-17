// Rendering + input + loop glue. Wires three.js (visuals) to cannon-es (physics,
// via physics.js) and the pure game logic (logic.js). This is the only file that
// touches the DOM, the renderer, or input devices.

import * as THREE from 'three';
import * as CANNON from 'cannon-es';

import {
  createWorld,
  createPlatform,
  buildTowers,
  createWreckingBall,
  launchBall,
  ballAtRest,
  resetBall,
  step,
  PIVOT_HEIGHT,
  CHAIN_LENGTH,
  BALL_RADIUS,
} from './physics.js';
import { BLOCK_SIZE } from './levels.js';
import {
  createGame,
  launchSwing,
  tallyFallen,
  endSwing,
  nextLevel,
  isLastLevel,
  hud,
  PHASE,
  FALL_Y,
} from './logic.js';

// Y we report for a reaped (removed) block so the logic always sees it as "off".
const FALL_Y_REPORT = FALL_Y - 100;

// ---------------------------------------------------------------------------
// Scene / renderer / camera (three.js gives us all of this; we just configure).
// ---------------------------------------------------------------------------
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap; // r184: PCFSoftShadowMap is deprecated

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x10131a);
scene.fog = new THREE.Fog(0x10131a, 30, 70);

const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200);
// A fixed three-quarter view looking at the platform centre.
camera.position.set(0, 11, 18);
camera.lookAt(0, 3, 0);

// Lights
const hemi = new THREE.HemisphereLight(0xbfd4ff, 0x202830, 0.8);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xffffff, 1.1);
sun.position.set(-10, 18, 10);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
const sc = sun.shadow.camera;
sc.left = -16; sc.right = 16; sc.top = 16; sc.bottom = -16; sc.near = 1; sc.far = 60;
scene.add(sun);

// A ground "void" plane far below so fallen blocks read as having dropped away.
const voidGeo = new THREE.PlaneGeometry(200, 200);
const voidMat = new THREE.MeshStandardMaterial({ color: 0x0a0c11, roughness: 1 });
const voidPlane = new THREE.Mesh(voidGeo, voidMat);
voidPlane.rotation.x = -Math.PI / 2;
voidPlane.position.y = -12;
voidPlane.receiveShadow = true;
scene.add(voidPlane);

// ---------------------------------------------------------------------------
// Resize handling
// ---------------------------------------------------------------------------
function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);

// ---------------------------------------------------------------------------
// Per-level world: holds the cannon world + the meshes mirroring each body.
// We rebuild this whole struct on level change / retry.
// ---------------------------------------------------------------------------
const PIVOT = new THREE.Vector3(0, PIVOT_HEIGHT, -2); // pivot sits behind the towers

// Reusable materials/geometry (cheap, shared across blocks).
const blockGeo = new THREE.BoxGeometry(BLOCK_SIZE.x, BLOCK_SIZE.y, BLOCK_SIZE.z);
const blockColors = [0xff6b6b, 0xffd166, 0x06d6a0, 0x4dabf7, 0xb197fc, 0xff9f43];

let live = null; // { world, platform, blockMeshes, ball, ballMesh, chain, anchorMesh }

function disposeLive() {
  if (!live) return;
  // Remove all meshes we added for the previous level.
  for (const m of live.disposable) scene.remove(m);
  live = null;
}

function buildLevelWorld(level) {
  disposeLive();
  const world = createWorld();
  const disposable = [];

  // Platform
  createPlatform(world, level.platformHalf);
  const platGeo = new THREE.BoxGeometry(level.platformHalf * 2, 1, level.platformHalf * 2);
  const platMat = new THREE.MeshStandardMaterial({ color: 0x39414f, roughness: 0.9, metalness: 0.1 });
  const platMesh = new THREE.Mesh(platGeo, platMat);
  platMesh.position.set(0, -0.5, 0);
  platMesh.receiveShadow = true;
  scene.add(platMesh);
  disposable.push(platMesh);

  // A subtle rim so the platform edge (the "off" boundary) reads clearly.
  const rimGeo = new THREE.BoxGeometry(level.platformHalf * 2 + 0.2, 0.25, level.platformHalf * 2 + 0.2);
  const rimMat = new THREE.MeshStandardMaterial({ color: 0xffb703, roughness: 0.6, emissive: 0x3a2a00 });
  const rim = new THREE.Mesh(rimGeo, rimMat);
  rim.position.set(0, 0.02, 0);
  scene.add(rim);
  disposable.push(rim);

  // Towers -> block bodies + meshes
  const bodies = buildTowers(world, level);
  const blockMeshes = bodies.map((body, i) => {
    const mat = new THREE.MeshStandardMaterial({
      color: blockColors[i % blockColors.length],
      roughness: 0.55,
      metalness: 0.05,
    });
    const mesh = new THREE.Mesh(blockGeo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
    disposable.push(mesh);
    return { body, mesh, removed: false };
  });

  // Wrecking ball + pivot + chain
  const { anchor, ball, constraint } = createWreckingBall(
    world,
    new CANNON.Vec3(PIVOT.x, PIVOT.y, PIVOT.z),
  );

  const ballGeo = new THREE.SphereGeometry(BALL_RADIUS, 32, 24);
  const ballMat = new THREE.MeshStandardMaterial({ color: 0x2b2f36, roughness: 0.35, metalness: 0.85 });
  const ballMesh = new THREE.Mesh(ballGeo, ballMat);
  ballMesh.castShadow = true;
  scene.add(ballMesh);
  disposable.push(ballMesh);

  // Pivot bracket (visual anchor)
  const anchorGeo = new THREE.BoxGeometry(1.2, 0.5, 1.2);
  const anchorMat = new THREE.MeshStandardMaterial({ color: 0x6c7686, roughness: 0.7, metalness: 0.4 });
  const anchorMesh = new THREE.Mesh(anchorGeo, anchorMat);
  anchorMesh.position.copy(PIVOT);
  anchorMesh.castShadow = true;
  scene.add(anchorMesh);
  disposable.push(anchorMesh);

  // A tall mast so the pivot looks supported rather than floating.
  const mastGeo = new THREE.CylinderGeometry(0.18, 0.22, PIVOT_HEIGHT + 0.5, 12);
  const mastMat = new THREE.MeshStandardMaterial({ color: 0x4b5563, roughness: 0.8, metalness: 0.3 });
  const mast = new THREE.Mesh(mastGeo, mastMat);
  mast.position.set(PIVOT.x, (PIVOT_HEIGHT + 0.5) / 2 - 1, PIVOT.z - 0.7);
  mast.castShadow = true;
  scene.add(mast);
  disposable.push(mast);

  // Chain: a thin cylinder we re-orient each frame between pivot and ball crown.
  const chainGeo = new THREE.CylinderGeometry(0.07, 0.07, 1, 8);
  const chainMat = new THREE.MeshStandardMaterial({ color: 0x9aa3b2, roughness: 0.6, metalness: 0.6 });
  const chain = new THREE.Mesh(chainGeo, chainMat);
  scene.add(chain);
  disposable.push(chain);

  live = {
    world,
    blockMeshes,
    ball,
    ballMesh,
    anchor,
    chain,
    constraint,
    settleTimer: 0,
    swingElapsed: 0,
    disposable,
  };
}

// Orient the chain cylinder so it spans from the pivot to the ball's crown.
const _v1 = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _mid = new THREE.Vector3();
const _dir = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);
const _q = new THREE.Quaternion();
function updateChain(chain, ballMesh) {
  _v1.copy(PIVOT);
  _v2.copy(ballMesh.position);
  // shorten to the ball's crown (top), not its centre
  _dir.subVectors(_v2, _v1);
  const fullLen = _dir.length();
  const len = Math.max(0.1, fullLen - BALL_RADIUS);
  _dir.normalize();
  _v2.copy(_v1).addScaledVector(_dir, len);
  _mid.addVectors(_v1, _v2).multiplyScalar(0.5);
  chain.position.copy(_mid);
  chain.scale.set(1, len, 1);
  _q.setFromUnitVectors(_up, _dir);
  chain.quaternion.copy(_q);
}

// Sync every three.js mesh to its cannon body (skip ones we've reaped).
function syncMeshes() {
  for (const entry of live.blockMeshes) {
    if (entry.removed) continue;
    entry.mesh.position.copy(entry.body.position);
    entry.mesh.quaternion.copy(entry.body.quaternion);
  }
  live.ballMesh.position.copy(live.ball.position);
  live.ballMesh.quaternion.copy(live.ball.quaternion);
  updateChain(live.chain, live.ballMesh);
}

// Block snapshot (id + pos) for the pure logic to evaluate. Reaped blocks keep
// their id reported with a deep-below position so logic still counts them "off"
// (idempotent — already in the counted set) without us tracking a live body.
function blockSnapshot() {
  return live.blockMeshes.map(({ body, removed }) => ({
    id: body.blockId,
    pos: removed
      ? { x: 0, y: FALL_Y_REPORT, z: 0 }
      : { x: body.position.x, y: body.position.y, z: body.position.z },
  }));
}

// ---------------------------------------------------------------------------
// Input: drag on the canvas to aim. Drag vector (screen) -> world swing dir +
// power. Release launches. We project the drag onto the ground plane so dragging
// "down/toward camera" swings the ball toward the towers.
// ---------------------------------------------------------------------------
let dragging = false;
let dragStart = { x: 0, y: 0 };
let dragNow = { x: 0, y: 0 };

const MAX_DRAG = 220; // px drag for full power
const MAX_IMPULSE = 1500; // impulse units at full power (heavy ball)

function pointerPos(e) {
  const t = e.touches ? e.touches[0] : e;
  return { x: t.clientX, y: t.clientY };
}

function onDown(e) {
  if (!game || game.phase !== PHASE.AIM || !live) return;
  dragging = true;
  dragStart = pointerPos(e);
  dragNow = { ...dragStart };
  aimEl.classList.add('active');
}
function onMove(e) {
  if (!dragging) return;
  dragNow = pointerPos(e);
  updateAimUI();
  e.preventDefault();
}
function onUp() {
  if (!dragging) return;
  dragging = false;
  aimEl.classList.remove('active');

  const dx = dragNow.x - dragStart.x;
  const dy = dragNow.y - dragStart.y;
  const dist = Math.hypot(dx, dy);
  if (dist < 8) { updateAimUI(); return; } // tiny drag => ignore (treat as misclick)

  const power = Math.min(dist, MAX_DRAG) / MAX_DRAG; // 0..1
  // Map screen drag to a horizontal world direction.
  // Screen +x -> world +x; screen +y (down) -> world -z (away from camera, toward towers).
  // We launch OPPOSITE the drag (pull-back-and-release slingshot feel).
  const dir = new CANNON.Vec3(-dx, 0, dy);
  if (dir.length() < 1e-6) { updateAimUI(); return; }

  launchSwing(game); // logic: consume a swing, enter SWING phase
  launchBall(live.ball, dir, power * MAX_IMPULSE);
  live.settleTimer = 0;
  live.swingElapsed = 0;
  updateAimUI();
  renderHUD();
}

canvas.addEventListener('mousedown', onDown);
window.addEventListener('mousemove', onMove);
window.addEventListener('mouseup', onUp);
canvas.addEventListener('touchstart', onDown, { passive: false });
window.addEventListener('touchmove', onMove, { passive: false });
window.addEventListener('touchend', onUp);

// ---------------------------------------------------------------------------
// HUD / overlay DOM
// ---------------------------------------------------------------------------
const hudEl = document.getElementById('hud');
const overlayEl = document.getElementById('overlay');
const aimEl = document.getElementById('aim');
const aimFill = document.getElementById('aim-fill');

function updateAimUI() {
  if (!dragging) { aimEl.style.opacity = '0'; return; }
  const dx = dragNow.x - dragStart.x;
  const dy = dragNow.y - dragStart.y;
  const dist = Math.min(Math.hypot(dx, dy), MAX_DRAG);
  const power = dist / MAX_DRAG;
  // Position the aim indicator at the drag start; rotate arrow toward launch dir.
  aimEl.style.opacity = '1';
  aimEl.style.left = dragStart.x + 'px';
  aimEl.style.top = dragStart.y + 'px';
  const ang = Math.atan2(-dy, -dx) * (180 / Math.PI); // launch = opposite drag
  aimEl.style.transform = `translate(-50%, -50%) rotate(${ang}deg)`;
  aimFill.style.width = (power * 100).toFixed(0) + '%';
  // Tint from green (weak) to red (strong).
  const hue = (1 - power) * 120;
  aimFill.style.background = `hsl(${hue}, 85%, 55%)`;
}

function renderHUD() {
  const h = hud(game);
  hudEl.innerHTML = `
    <div class="hud-row hud-title">Level ${h.levelId} — ${h.levelName}</div>
    <div class="hud-row"><span>Knocked off</span><b>${h.knockedOff} / ${h.target}</b></div>
    <div class="hud-row"><span>Swings left</span><b>${h.swingsRemaining} / ${h.swingsTotal}</b></div>
    <div class="hud-row"><span>Score</span><b>${h.score}</b></div>
  `;
}

function showOverlay(html) {
  overlayEl.innerHTML = html;
  overlayEl.style.display = 'flex';
}
function hideOverlay() {
  overlayEl.style.display = 'none';
  overlayEl.innerHTML = '';
}

// ---------------------------------------------------------------------------
// Game state + flow
// ---------------------------------------------------------------------------
let game = null;

function startLevel(index) {
  game = createGame(index);
  buildLevelWorld(game.level);
  renderHUD();
  hideOverlay();
}

function restartLevel() {
  startLevel(game.levelIndex);
}

function advanceLevel() {
  const next = nextLevel(game);
  if (next) {
    startLevel(next.levelIndex);
    // carry score forward
    game.score = next.score;
    renderHUD();
  } else {
    startLevel(0); // loop back to the beginning after the final win
  }
}

function showWin() {
  const last = isLastLevel(game);
  const h = hud(game);
  showOverlay(`
    <div class="card">
      <h1>Level Cleared!</h1>
      <p>You knocked off <b>${h.knockedOff}</b> blocks. Score: <b>${h.score}</b></p>
      <button id="btn-primary">${last ? 'Play Again (Level 1)' : 'Next Level →'}</button>
    </div>
  `);
  document.getElementById('btn-primary').onclick = () => (last ? startLevel(0) : advanceLevel());
}

function showLose() {
  const h = hud(game);
  showOverlay(`
    <div class="card">
      <h1>Out of Swings</h1>
      <p>You knocked off <b>${h.knockedOff} / ${h.target}</b>. Score: <b>${h.score}</b></p>
      <button id="btn-primary">Retry Level</button>
    </div>
  `);
  document.getElementById('btn-primary').onclick = () => restartLevel();
}

function showStart() {
  showOverlay(`
    <div class="card">
      <h1>WRECKBALL</h1>
      <p class="lead">Swing the wrecking ball and knock blocks off the platform.</p>
      <p class="hint">Drag on the screen to aim &amp; set power — release to swing.<br/>
         Pull back like a slingshot: the ball launches opposite your drag.</p>
      <button id="btn-primary">Start</button>
    </div>
  `);
  document.getElementById('btn-primary').onclick = () => startLevel(0);
}

// ---------------------------------------------------------------------------
// Main loop
// ---------------------------------------------------------------------------
const timer = new THREE.Timer(); // r184: Timer replaces the deprecated Clock
const SETTLE_HOLD = 0.5; // seconds of calm before we end the swing
const MAX_SWING_TIME = 4.0; // after this, end the swing once debris settles (even if the ball still coasts)

// Advance the simulation + game logic by `dt` seconds. Pure of rendering so it can
// be driven by the rAF loop OR stepped deterministically (tests / headless checks).
function tick(dt) {
  if (!(live && game)) return;
  step(live.world, dt);
  syncMeshes();

  // Always reconcile fallen blocks (a block can keep sliding off after the ball stops).
  if (game.phase === PHASE.SWING || game.phase === PHASE.AIM) {
    const before = game.knockedOff;
    tallyFallen(game, blockSnapshot());
    if (game.knockedOff !== before) {
      reapFallen(); // pull counted blocks out of the sim so they stop free-falling
      renderHUD();
    }
  }

  if (game.phase === PHASE.SWING) {
    live.swingElapsed += dt;
    // A swing is "done" when the structure has stopped collapsing AND either the
    // ball has come to rest OR we've hit the max swing time (so a lazily-swinging
    // ball never stalls the game). We don't gate on the ball for the timeout path
    // because a near-frictionless pendulum can coast for a long time.
    const settledNaturally = ballAtRest(live.ball) && structureCalm();
    const timedOut = live.swingElapsed >= MAX_SWING_TIME && structureCalm();
    const calm = settledNaturally || timedOut;
    live.settleTimer = calm ? live.settleTimer + dt : 0;
    if (live.settleTimer >= SETTLE_HOLD) {
      endSwing(game, true);
      renderHUD();
      if (game.phase === PHASE.WON) showWin();
      else if (game.phase === PHASE.LOST) showLose();
      else resetBall(live.ball, new CANNON.Vec3(PIVOT.x, PIVOT.y, PIVOT.z)); // back to AIM: re-center ball
    }
  }
}

function animate() {
  requestAnimationFrame(animate);
  timer.update();
  const dt = Math.min(timer.getDelta(), 0.05);
  tick(dt);
  renderer.render(scene, camera);
}

// Are the blocks STILL ON the platform roughly settled (so we don't end a swing
// mid-collapse)? Reaped blocks are gone from the world and ignored — otherwise a
// block free-falling into the void would keep the swing from ever resolving.
function structureCalm() {
  for (const entry of live.blockMeshes) {
    if (entry.removed) continue;
    const body = entry.body;
    if (body.sleepState !== CANNON.Body.SLEEPING && body.velocity.length() > 0.8) return false;
  }
  return true;
}

// Remove any block that's been counted off: take its body out of the simulation
// and hide its mesh. Stops runaway free-fall and keeps the calm check meaningful.
function reapFallen() {
  for (const entry of live.blockMeshes) {
    if (entry.removed) continue;
    if (game.counted.has(entry.body.blockId)) {
      live.world.removeBody(entry.body);
      entry.mesh.visible = false;
      entry.removed = true;
    }
  }
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
resize();
showStart();
animate();

// Expose a tiny hook for manual/automated browser checks.
window.__wreckball = {
  get game() { return game; },
  get live() { return live; },
  hud: () => (game ? hud(game) : null),
  // Fire a deterministic swing (used by smoke checks): dir is {x,z}, power 0..1.
  testSwing(x = 0, z = 1, power = 1) {
    if (!game || game.phase !== PHASE.AIM || !live) return false;
    launchSwing(game);
    launchBall(live.ball, new CANNON.Vec3(x, 0, z), power * MAX_IMPULSE);
    live.settleTimer = 0;
    live.swingElapsed = 0;
    renderHUD();
    return true;
  },
  // Drive the loop deterministically (needed where requestAnimationFrame is
  // throttled, e.g. an offscreen/headless preview). Steps `seconds` of sim in
  // fixed 1/60 increments. Returns the post-run HUD.
  simulate(seconds = 1, dtStep = 1 / 60) {
    const n = Math.round(seconds / dtStep);
    for (let i = 0; i < n; i++) tick(dtStep);
    return game ? hud(game) : null;
  },
  // Force a single render (for headless screenshots where rAF is throttled).
  render() {
    renderer.render(scene, camera);
  },
};
