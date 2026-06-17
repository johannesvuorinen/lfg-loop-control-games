// main.js — Sky Hopper (three.js control build). Wires the PURE logic
// (follow_cam / locomotion / gameplay_rules / level) to a three.js renderer,
// post-processing bloom, an input layer, the follow camera, and the HUD.
//
// Everything here is "glue/render". The rules live in src/logic/* and are
// unit-tested headlessly; this file just reflects their decisions on screen.

import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";

import { buildLevel, islandUnder } from "./logic/level.js";
import { stepFollowCamera, cameraLookTarget } from "./logic/follow_cam.js";
import {
  moveDirFromInput, turnToward, stepCharacter, animationStateFor,
} from "./logic/locomotion.js";
import {
  makeGameState, collectOrbs, portalIsOpen, checkPortal, handleFall, resetGame,
} from "./logic/gameplay_rules.js";
import { buildWorld, setupLights } from "./world.js";
import { createHero, HeroAnimator } from "./character.js";

// ── Tunables (mirrors the LFG build's gameplay constants) ──
const CFG = {
  speed: 5.5,
  gravity: 26,
  jumpSpeed: 9.5,
  turnSpeed: 14,         // rad/s visual facing ease
  fallLimitY: -25,
  orbRadius: 1.3,
  portalRadius: 1.8,
  cam: { distance: 7.5, height: 3.4, lookAhead: 0.18, headOffset: 1.5, tau: 0.16, lookAheadLook: 0.12 },
};

// ── Renderer / scene / camera ──
const canvas = document.getElementById("game");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x9db4e0, 0.0042);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1500);
camera.position.set(0, 6, -10);

// ── Bloom composer (the glowing orbs / portal) ──
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight), 0.7, 0.85, 0.2
);
composer.addPass(bloom);

// ── World + hero ──
const level = buildLevel(1337);
setupLights(scene);
const world = buildWorld(scene, level);
const hero = createHero();
scene.add(hero.root);
const animator = new HeroAnimator(hero.joints);

// ── Game state (pure) ──
const gs = makeGameState(level.orbs.length, level.requiredOrbs);

// kinematic character state (pure model owns position + vy + grounded)
const kin = { x: level.spawn.x, y: level.spawn.y, z: level.spawn.z, vy: 0, grounded: true };
let facingYaw = 0;       // hero visual facing
let camYaw = 0;          // camera orbit yaw (pointer-controlled), seeds move frame
let camPitchInfo = 0;    // reserved (kept flat for a classic platformer cam)
const camPos = new THREE.Vector3(level.spawn.x, level.spawn.y + 4, level.spawn.z - 8);

// ── Input ──
const keys = Object.create(null);
let jumpQueued = false;
const KEYMAP = {
  KeyW: "forward", ArrowUp: "forward",
  KeyS: "back", ArrowDown: "back",
  KeyA: "left", ArrowLeft: "left",
  KeyD: "right", ArrowRight: "right",
};
addEventListener("keydown", (e) => {
  if (e.code in KEYMAP) { keys[KEYMAP[e.code]] = true; e.preventDefault(); }
  if (e.code === "Space") { jumpQueued = true; e.preventDefault(); }
  if (e.code === "KeyR") restart();
});
addEventListener("keyup", (e) => {
  if (e.code in KEYMAP) { keys[KEYMAP[e.code]] = false; e.preventDefault(); }
});

// pointer-drag orbits the camera yaw (classic 3rd-person). Pointer-lock when
// available; falls back to click-drag.
let dragging = false;
let lastX = 0;
canvas.addEventListener("pointerdown", (e) => { dragging = true; lastX = e.clientX; canvas.setPointerCapture(e.pointerId); });
canvas.addEventListener("pointerup", (e) => { dragging = false; });
canvas.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  const dx = e.clientX - lastX; lastX = e.clientX;
  camYaw -= dx * 0.005;
});

// ── HUD refs ──
const hud = {
  orbs: document.getElementById("orbs"),
  lives: document.getElementById("lives"),
  msg: document.getElementById("msg"),
  hint: document.getElementById("hint"),
};
function updateHud() {
  hud.orbs.textContent = `Orbs ${gs.collected}/${gs.required}`;
  hud.lives.textContent = `Lives ${gs.lives}`;
}
function banner(text, sub = "") {
  hud.msg.style.display = "flex";
  hud.msg.innerHTML = `<div class="big">${text}</div>${sub ? `<div class="sub">${sub}</div>` : ""}`;
}
function clearBanner() { hud.msg.style.display = "none"; }

function respawn() {
  kin.x = level.spawn.x; kin.y = level.spawn.y; kin.z = level.spawn.z;
  kin.vy = 0; kin.grounded = true;
  facingYaw = 0; camYaw = 0;
  camPos.set(level.spawn.x, level.spawn.y + 4, level.spawn.z - 8);
}
function restart() {
  resetGame(gs);
  for (const m of world.orbMeshes) m.visible = true;
  respawn();
  clearBanner();
  hud.hint.textContent = "WASD / arrows to move · drag to look · Space to jump · R to reset";
  updateHud();
}

// ── Per-island ground resolve (raycast). The pure stepCharacter resolves
// against a flat plane; here we override groundY with the actual island top
// under the player so they can stand on each floating island. This raycast
// is the three.js-specific "physics" the engine would otherwise provide. ──
const down = new THREE.Vector3(0, -1, 0);
const ray = new THREE.Raycaster();
function groundHeightAt(x, z) {
  const isl = islandUnder(level.islands, { x, z }, 0.4);
  if (!isl) return -Infinity; // nothing under you => fall
  // precise top via raycast against this island's meshes (handles boulders)
  ray.set(new THREE.Vector3(x, isl.y + 6, z), down);
  const hits = ray.intersectObjects(world.islandGroup.children, true);
  if (hits.length) return hits[0].point.y;
  return isl.y; // fallback to flat top
}

// ── Main loop ──
let last = performance.now();
let elapsed = 0;
updateHud();
hud.hint.textContent = "WASD / arrows to move · drag to look · Space to jump · R to reset";

// Advance the whole simulation by dt seconds (sim + cosmetic animation).
// Pure of rendering so it can be driven headlessly in tests/preview. The
// render loop and the hidden-tab watchdog both call this.
function tick(dt) {
  dt = Math.min(dt, 0.05);
  elapsed += dt;
  if (gs.status === "playing") step(dt);
  animateWorld(dt);
}

function frame(now) {
  const dt = (now - last) / 1000;
  last = now;
  tick(dt);
  composer.render();
  requestAnimationFrame(frame);
}

// requestAnimationFrame is paused by browsers when the tab is hidden. Keep
// the simulation marching with a coarse timer in that case so the player
// doesn't freeze mid-jump on an alt-tab (and so headless previews can run).
let lastBg = performance.now();
setInterval(() => {
  if (!document.hidden) { lastBg = performance.now(); return; }
  const now = performance.now();
  tick((now - lastBg) / 1000);
  lastBg = now;
  last = now; // keep rAF dt sane when the tab returns
}, 1000 / 30);

function step(dt) {
  // 1) input -> move dir in the camera-yaw frame (pure)
  const md = moveDirFromInput(keys, camYaw);

  // 2) ground under the player decides whether they can stand/jump
  const gh = groundHeightAt(kin.x, kin.z);
  const groundY = isFinite(gh) ? gh + 0.0 : CFG.fallLimitY - 50;

  // 3) integrate character (pure): planar move + gravity + jump + ground snap
  const before = { ...kin };
  const out = stepCharacter(
    { x: kin.x, y: kin.y, z: kin.z, vy: kin.vy, grounded: kin.grounded },
    { x: md.x, z: md.z }, jumpQueued, dt,
    { speed: CFG.speed, gravity: CFG.gravity, jumpSpeed: CFG.jumpSpeed, groundY, fallLimitY: CFG.fallLimitY }
  );
  jumpQueued = false;
  Object.assign(kin, { x: out.x, y: out.y, z: out.z, vy: out.vy, grounded: out.grounded });

  // 4) face the move direction (pure ease)
  if (md.moving) {
    const targetYaw = Math.atan2(md.x, md.z);
    facingYaw = turnToward(facingYaw, targetYaw, CFG.turnSpeed, dt);
  }

  // planar speed for animation + look-ahead
  const dx = kin.x - before.x, dz = kin.z - before.z;
  const speed2D = Math.hypot(dx, dz) / dt;

  // 5) drive the hand-rolled animator (idle/run/jump/fall + crossfade)
  const animState = animationStateFor(kin, speed2D);
  animator.setState(animState, Math.min(speed2D / CFG.speed, 1));

  // 6) apply transform to the hero group
  hero.root.position.set(kin.x, kin.y, kin.z);
  hero.root.rotation.y = facingYaw;

  // 7) FOLLOW CAMERA (the probe): damp toward "behind+above", look at head.
  const target = { x: kin.x, y: kin.y, z: kin.z };
  const next = stepFollowCamera(
    { x: camPos.x, y: camPos.y, z: camPos.z }, target, camYaw, dt,
    { distance: CFG.cam.distance, height: CFG.cam.height, lookAhead: CFG.cam.lookAhead, tau: CFG.cam.tau, speed: speed2D }
  );
  camPos.set(next.x, next.y, next.z);
  camera.position.copy(camPos);
  const look = cameraLookTarget(target, camYaw, {
    headOffset: CFG.cam.headOffset, lookAheadLook: CFG.cam.lookAheadLook, speed: speed2D,
  });
  camera.lookAt(look.x, look.y, look.z);

  // 8) gameplay rules: collect orbs, open portal, win/lose, fall->respawn
  const orbPositions = level.orbs.map((o) => ({ x: o.x, y: o.y, z: o.z }));
  const newly = collectOrbs(gs, target, orbPositions, CFG.orbRadius);
  if (newly > 0) {
    for (const orb of gs.orbs) if (orb.collected) world.orbMeshes[orb.id].visible = false;
    updateHud();
    if (portalIsOpen(gs)) hud.hint.textContent = "Portal open! Reach the purple portal on the top island.";
  }

  if (checkPortal(gs, target, level.portal, CFG.portalRadius)) {
    banner("You reached the sky! 🎉", "Press R to play again");
    return;
  }

  if (out.fell) {
    const r = handleFall(gs);
    updateHud();
    if (r.gameOver) banner("Lost in the void 💀", "Press R to try again");
    else respawn();
  }
}

// ── purely cosmetic per-frame animation (orbs spin/bob, portal swirl, dust) ──
function animateWorld(dt) {
  for (let i = 0; i < world.orbMeshes.length; i++) {
    const m = world.orbMeshes[i];
    if (!m.visible) continue;
    m.rotation.y += dt * 1.5;
    m.position.y = level.orbs[i].y + Math.sin(elapsed * 2 + i) * 0.12;
    m.userData.halo.scale.setScalar(1 + Math.sin(elapsed * 3 + i) * 0.08);
  }
  const p = world.portal;
  p.rotation.z += dt * 0.4;
  p.userData.disc.rotation.z -= dt * 0.9;
  const open = portalIsOpen(gs);
  const targetI = open ? 3.0 : 0.6;
  p.userData.ring.material.emissiveIntensity += (targetI - p.userData.ring.material.emissiveIntensity) * 0.05;
  p.userData.light.intensity = open ? 8 : 2;
  p.userData.disc.material.opacity = open ? 0.6 : 0.2;

  world.particles.rotation.y += dt * 0.01;

  // hero animator runs every frame (so idle plays even when paused at a banner)
  animator.update(dt);
}

addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
});

requestAnimationFrame(frame);

// expose a tiny hook for smoke-testing in the browser console / preview
window.__sky = {
  gs, kin, level, camera, CFG, keys,
  get camYaw() { return camYaw; },
  get facingYaw() { return facingYaw; },
  get animWeights() { return animator.weights; },
  // press W/A/S/D/jump programmatically (bypasses real key events) for tests
  setKey(name, v) { keys[name] = v; },
  jump() { jumpQueued = true; },
  tick,                                   // deterministic single-step for tests
  setCamYaw(y) { camYaw = y; },
};
