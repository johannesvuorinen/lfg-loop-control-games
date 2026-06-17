// scene.js — RENDERING / glue. Builds three.js objects from level data and
// keeps them in sync with the pure logic. No game RULES live here.

// Render modules use the BARE 'three' specifier, resolved by the importmap in
// index.html -> ./vendor/three.module.js. This is what makes the game run on
// static hosting with no build step. (Pure logic modules import three via a
// relative path instead, so they stay unit-testable under `node --test`.)
import * as THREE from 'three';
import { ARENA } from './levels.js';
import { Patrol } from './patrol.js';

const ORB_HEIGHT = 1.0;
const HAZARD_HEIGHT = 0.9;

// ---- arena -----------------------------------------------------------------

export function buildArena(scene) {
  const half = ARENA / 2;

  // floor — a subtle grid-on-dark look
  const floorGeo = new THREE.PlaneGeometry(ARENA, ARENA);
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x12131b,
    roughness: 0.95,
    metalness: 0.0,
  });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  const grid = new THREE.GridHelper(ARENA, ARENA / 2, 0x2a3350, 0x1b2036);
  grid.position.y = 0.02;
  scene.add(grid);

  // walls (thin emissive-ish frame so the arena edge reads clearly)
  const wallMat = new THREE.MeshStandardMaterial({
    color: 0x3a4a80,
    emissive: 0x101830,
    roughness: 0.4,
    metalness: 0.3,
  });
  const wallH = 1.4;
  const t = 0.6;
  const mkWall = (w, d, x, z) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, wallH, d), wallMat);
    m.position.set(x, wallH / 2, z);
    m.castShadow = true;
    m.receiveShadow = true;
    scene.add(m);
  };
  mkWall(ARENA + t, t, 0, -half); // north
  mkWall(ARENA + t, t, 0, half); // south
  mkWall(t, ARENA + t, -half, 0); // west
  mkWall(t, ARENA + t, half, 0); // east

  return floor;
}

export function buildLights(scene) {
  const amb = new THREE.AmbientLight(0x6070a0, 0.7);
  scene.add(amb);

  const key = new THREE.DirectionalLight(0xffffff, 1.4);
  key.position.set(18, 34, 12);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  const s = ARENA * 0.7;
  key.shadow.camera.left = -s;
  key.shadow.camera.right = s;
  key.shadow.camera.top = s;
  key.shadow.camera.bottom = -s;
  key.shadow.camera.near = 1;
  key.shadow.camera.far = 90;
  scene.add(key);

  const rim = new THREE.DirectionalLight(0x4060ff, 0.5);
  rim.position.set(-20, 10, -16);
  scene.add(rim);
}

// ---- player ----------------------------------------------------------------

export function buildPlayer(scene) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.7, 0.7, 6, 14),
    new THREE.MeshStandardMaterial({
      color: 0x2bd4a8,
      emissive: 0x0a4030,
      roughness: 0.35,
      metalness: 0.2,
    })
  );
  body.position.y = 0.95;
  body.castShadow = true;
  g.add(body);

  // a little nose cone so facing/heading is visible
  const nose = new THREE.Mesh(
    new THREE.ConeGeometry(0.32, 0.7, 14),
    new THREE.MeshStandardMaterial({ color: 0xeafff7, roughness: 0.3 })
  );
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, 0.95, 0.75);
  g.add(nose);
  g.userData.body = body;
  scene.add(g);
  return g;
}

// ---- orbs ------------------------------------------------------------------

export function buildOrbs(scene, orbs) {
  const meshes = [];
  const geo = new THREE.IcosahedronGeometry(0.55, 0);
  for (const o of orbs) {
    const m = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({
        color: 0xffd34d,
        emissive: 0xb5780a,
        emissiveIntensity: 0.9,
        roughness: 0.25,
        metalness: 0.4,
      })
    );
    m.position.set(o.x, ORB_HEIGHT, o.z);
    m.castShadow = true;
    scene.add(m);
    meshes.push(m);
  }
  return meshes;
}

// ---- hazards (each rides a Patrol) -----------------------------------------

/**
 * Build a hazard mesh + its Patrol from a level patrol spec.
 * Returns { patrol, mesh, kind, radius, spin } where spin is the per-frame
 * cosmetic spin (saws whirl; drones bob/rotate slowly).
 */
export function buildHazard(scene, spec) {
  const patrol = new Patrol(spec.waypoints, spec.speed, { phase: spec.phase ?? 0 });

  let mesh;
  if (spec.kind === 'saw') {
    mesh = buildSaw();
  } else {
    mesh = buildDrone();
  }
  mesh.position.copy(patrol.position());
  mesh.position.y = HAZARD_HEIGHT;
  scene.add(mesh);

  // Optional: a faint ribbon tracing the loop so the player can read the route.
  const ribbon = buildPathRibbon(patrol.curve, spec.kind === 'saw' ? 0xff5a7a : 0xff8a3a);
  scene.add(ribbon);

  return { patrol, mesh, kind: spec.kind, radius: spec.radius, ribbon };
}

function buildDrone() {
  const g = new THREE.Group();
  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.7, 20, 16),
    new THREE.MeshStandardMaterial({
      color: 0xff6a3a,
      emissive: 0x802000,
      emissiveIntensity: 0.8,
      roughness: 0.3,
      metalness: 0.5,
    })
  );
  core.castShadow = true;
  g.add(core);
  // a menacing eye ring
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.78, 0.08, 10, 28),
    new THREE.MeshStandardMaterial({ color: 0xffd0b0, emissive: 0x401000 })
  );
  ring.rotation.x = Math.PI / 2;
  g.add(ring);
  g.userData.spin = 1.4;
  return g;
}

function buildSaw() {
  const g = new THREE.Group();
  // flat spinning blade — a low cylinder with notches via a torus hub
  const blade = new THREE.Mesh(
    new THREE.CylinderGeometry(1.0, 1.0, 0.12, 16),
    new THREE.MeshStandardMaterial({
      color: 0xc0c8d8,
      emissive: 0x300010,
      roughness: 0.25,
      metalness: 0.9,
    })
  );
  blade.castShadow = true;
  g.add(blade);
  const hub = new THREE.Mesh(
    new THREE.TorusGeometry(0.45, 0.12, 8, 20),
    new THREE.MeshStandardMaterial({ color: 0xff3a5a, emissive: 0x600010 })
  );
  hub.rotation.x = Math.PI / 2;
  g.add(hub);
  g.userData.spin = 9.0; // saws whirl fast
  g.userData.isSaw = true;
  return g;
}

/**
 * A thin glowing tube along the patrol loop so the path is visible to the
 * player. Uses three's TubeGeometry fed directly by the CatmullRom curve.
 */
function buildPathRibbon(curve, color) {
  const geo = new THREE.TubeGeometry(curve, 220, 0.07, 6, true);
  const mat = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.32,
  });
  const tube = new THREE.Mesh(geo, mat);
  tube.position.y = HAZARD_HEIGHT;
  return tube;
}

export const HEIGHTS = { ORB_HEIGHT, HAZARD_HEIGHT };
