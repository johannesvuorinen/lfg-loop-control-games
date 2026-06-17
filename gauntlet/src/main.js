// main.js — entry point & game loop. Orchestrates pure logic + three.js render.
//
// Responsibilities (all glue, no new rules):
//  - set up renderer / camera / scene / lights
//  - build the current level's meshes
//  - run a fixed-ish timestep loop:
//      * read input -> move player (logic)
//      * advance each Patrol at constant speed (logic) and copy pose to mesh
//        via getPointAt / getTangentAt  <-- the core mechanic in action
//      * collisions: collect orbs, hazard hits (logic)
//      * sync HUD, handle level transitions / retry / win

import * as THREE from 'three'; // resolved by index.html importmap -> vendor/
import { GameState, Status } from './game.js';
import { Player } from './player.js';
import { Input } from './input.js';
import { Hud } from './hud.js';
import { ARENA } from './levels.js';
import {
  buildArena,
  buildLights,
  buildPlayer,
  buildOrbs,
  buildHazard,
  HEIGHTS,
} from './scene.js';

// ---- renderer / camera -----------------------------------------------------

const canvas = document.getElementById('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setClearColor(0x05060c, 1);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x05060c, 50, 95);

// 3/4 top-down camera looking at the arena centre.
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);
const CAM_OFFSET = new THREE.Vector3(0, 38, 30); // height + pull-back
function placeCamera() {
  camera.position.copy(CAM_OFFSET);
  camera.lookAt(0, 0, 0);
}

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);

// ---- static scene ----------------------------------------------------------

buildArena(scene);
buildLights(scene);
const playerMesh = buildPlayer(scene);

// ---- mutable per-level scene objects ---------------------------------------

let game = new GameState();
let player = new Player();
let orbMeshes = [];
let hazards = []; // [{ patrol, mesh, kind, radius, ribbon }]

// scratch objects reused each frame
const _tmpLook = new THREE.Vector3();
const _hazardList = []; // reused {x,z,radius} array for hazardCheck

function clearLevelObjects() {
  for (const m of orbMeshes) scene.remove(m);
  for (const h of hazards) {
    scene.remove(h.mesh);
    if (h.ribbon) scene.remove(h.ribbon);
  }
  orbMeshes = [];
  hazards = [];
}

function buildLevelObjects() {
  clearLevelObjects();
  orbMeshes = buildOrbs(scene, game.orbs);
  hazards = game.level.patrols.map((spec) => buildHazard(scene, spec));
  // place player at arena centre-ish (a safe spot away from spawns)
  player.setPosition(0, ARENA / 2 - 4);
  playerMesh.position.set(player.x, 0, player.z);
}

// ---- input / hud -----------------------------------------------------------

const input = new Input(canvas);
const hud = new Hud();

// "start gate": don't run the sim until the player dismisses the title card.
let started = false;
hud.showStart();

// ---- helpers ---------------------------------------------------------------

function syncHazardMeshes(dt) {
  _hazardList.length = 0;
  for (const h of hazards) {
    h.patrol.advance(dt); // constant-speed step along the loop
    const p = h.patrol.position(); // arc-length sample (getPointAt)
    h.mesh.position.set(p.x, HEIGHTS.HAZARD_HEIGHT, p.z);

    if (h.kind === 'saw') {
      // saw lies flat & whirls about its vertical axis
      h.mesh.rotation.y += h.mesh.userData.spin * dt;
    } else {
      // drone faces its direction of travel (tangent) + gentle bob
      const t = h.patrol.facing(); // getTangentAt -> unit heading
      _tmpLook.set(p.x + t.x, HEIGHTS.HAZARD_HEIGHT, p.z + t.z);
      h.mesh.lookAt(_tmpLook);
      h.mesh.rotation.z += 0; // keep upright
      h.mesh.position.y =
        HEIGHTS.HAZARD_HEIGHT + Math.sin(performance.now() * 0.004 + p.x) * 0.12;
    }
    _hazardList.push({ x: p.x, z: p.z, radius: h.radius });
  }
  return _hazardList;
}

function removeCollectedOrbs(indices) {
  for (const i of indices) {
    const m = orbMeshes[i];
    if (m) {
      scene.remove(m);
      orbMeshes[i] = null;
    }
  }
}

function animateOrbs(dt) {
  const tms = performance.now() * 0.001;
  for (let i = 0; i < orbMeshes.length; i++) {
    const m = orbMeshes[i];
    if (!m) continue;
    m.rotation.y += dt * 1.5;
    m.position.y = HEIGHTS.ORB_HEIGHT + Math.sin(tms * 2 + i) * 0.18;
  }
}

// player hit-flash via material emissive pulse during invulnerability
function updatePlayerLook(dt) {
  playerMesh.position.x = player.x;
  playerMesh.position.z = player.z;
  const body = playerMesh.userData.body;
  if (game.isInvulnerable) {
    // blink
    playerMesh.visible = Math.floor(performance.now() / 90) % 2 === 0;
    body.material.emissiveIntensity = 1.5;
  } else {
    playerMesh.visible = true;
    body.material.emissiveIntensity = 1.0;
  }
}

// ---- main loop -------------------------------------------------------------

let last = performance.now();
const MAX_DT = 1 / 20; // clamp huge frame gaps (tab switch) to avoid tunnelling

function frame(now) {
  let dt = (now - last) / 1000;
  last = now;
  if (dt > MAX_DT) dt = MAX_DT;

  // --- start gate ---
  if (!started) {
    if (input.consumeAdvance()) {
      started = true;
      hud.invalidate();
    }
    placeCamera();
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
    return;
  }

  // --- restart (R) at any time ---
  if (input.consumeRestart()) {
    game.reset();
    buildLevelObjects();
    hud.invalidate();
  }

  if (game.status === Status.PLAYING) {
    game.tickTimers(dt);

    // player movement (logic)
    const intent = input.getIntent();
    player.update(intent.x, intent.z, dt);

    // patrols (logic) -> meshes (render). THE CORE MECHANIC.
    const hazardList = syncHazardMeshes(dt);

    // collisions (logic)
    const picked = game.collectAt(player.x, player.z);
    if (picked.length) removeCollectedOrbs(picked);
    game.hazardCheck(player.x, player.z, hazardList);

    updatePlayerLook(dt);
    animateOrbs(dt);
  } else {
    // not playing: still animate hazards/orbs for life, handle transitions
    syncHazardMeshes(dt);
    animateOrbs(dt);

    if (input.consumeAdvance()) {
      if (game.status === Status.LEVEL_CLEAR) {
        game.nextLevel();
        buildLevelObjects();
        hud.invalidate();
      } else if (game.status === Status.DEAD) {
        game.retryLevel();
        buildLevelObjects();
        hud.invalidate();
      }
      // WON is handled by R (full reset) above
    }
  }

  hud.update(game);
  placeCamera();
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

// ---- boot ------------------------------------------------------------------

resize();
buildLevelObjects();
hud.update(game);
requestAnimationFrame(frame);

// expose a hook for headless smoke-testing (no effect on normal gameplay)
window.__GAUNTLET__ = {
  get state() {
    return {
      status: game.status,
      level: game.levelIndex,
      lives: game.lives,
      collected: game.collectedCount,
      total: game.totalOrbs,
      player: { x: player.x, z: player.z },
      hazards: hazards.map((h) => ({
        x: h.mesh.position.x,
        z: h.mesh.position.z,
        u: h.patrol.u,
      })),
    };
  },
  // force-start (skip title) for automated checks
  forceStart() {
    started = true;
    hud.invalidate();
  },
  // Deterministically advance hazards + collisions by dt seconds, bypassing
  // input. Used by the headless harness to drive a patrol loop / collect /
  // life-loss without a real viewport or rAF timing.
  step(dt) {
    game.tickTimers(dt);
    const hazardList = syncHazardMeshes(dt);
    const picked = game.collectAt(player.x, player.z);
    if (picked.length) removeCollectedOrbs(picked);
    game.hazardCheck(player.x, player.z, hazardList);
    return this.state;
  },
  // Teleport the player (collision is positional, so this exercises real rules).
  setPlayer(x, z) {
    player.setPosition(x, z);
    playerMesh.position.set(x, 0, z);
  },
  // Run the loop's exact post-status transition (the same calls frame() makes
  // when Space/tap is consumed), so the headless harness can verify the level
  // mesh rebuild without depending on rAF (which is paused in offscreen tabs).
  advance() {
    if (game.status === Status.LEVEL_CLEAR) {
      game.nextLevel();
      buildLevelObjects();
      hud.invalidate();
    } else if (game.status === Status.DEAD) {
      game.retryLevel();
      buildLevelObjects();
      hud.invalidate();
    }
    return this.state;
  },
  // Force an explicit-size render so we can screenshot in a 0x0 headless tab.
  renderAt(w, h) {
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    placeCamera();
    renderer.render(scene, camera);
    return { w: canvas.width, h: canvas.height };
  },
  game,
  player,
};
