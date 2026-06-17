// character.js — the rigged-character TAX, made explicit.
//
// three.js core ships NO character: no rig, no clips, no controller. There
// are two honest ways to get an animated avatar:
//
//   (A) Load a rigged GLB (Mixamo/RPM/etc.) with GLTFLoader + drive named
//       clips through an AnimationMixer, crossfading idle<->run<->jump.
//       That needs (1) a model file shipped/hosted, (2) clip-name knowledge,
//       (3) a network/asset step — none of which exist in a from-scratch,
//       offline, single-file three.js app.
//
//   (B) Hand-build a low-poly humanoid out of primitives and animate the
//       joints procedurally (sine-driven gait, pose blends). No assets, runs
//       offline, but every limb, hierarchy, and the entire "AnimationMixer"
//       (state machine + crossfade + per-joint pose eval) is code you write.
//
// This file does (B) as the shipping path and exposes the SAME interface an
// (A) wrapper would (setState/update with crossfade weights), so the cost
// comparison is apples-to-apples. The GLTF path is sketched in loadGltfHero()
// for the record but is off by default (no asset to load).

import * as THREE from "three";

// Build a stylised humanoid from primitives, returning a group plus the
// joint refs the procedural "mixer" animates. This is the rig the engine
// would otherwise ship for free.
export function createHero() {
  const root = new THREE.Group();
  root.name = "Hero";

  const skin = new THREE.MeshStandardMaterial({ color: 0xffce9e, roughness: 0.7, metalness: 0.0 });
  const cloth = new THREE.MeshStandardMaterial({ color: 0x4f7cff, roughness: 0.55, metalness: 0.05 });
  const cloth2 = new THREE.MeshStandardMaterial({ color: 0x2b3a6b, roughness: 0.6 });
  const accent = new THREE.MeshStandardMaterial({
    color: 0x9b59ff, roughness: 0.4, metalness: 0.1, emissive: 0x3a1a66, emissiveIntensity: 0.5,
  });

  // pelvis is the locomotion anchor; the whole character bobs from here.
  const pelvis = new THREE.Group();
  pelvis.position.y = 0.95;
  root.add(pelvis);

  // torso
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 0.42, 6, 12), cloth);
  torso.position.y = 0.42;
  torso.castShadow = true;
  pelvis.add(torso);

  // a little cape/backpack accent so it reads as a character, not a pill
  const pack = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.34, 0.16), accent);
  pack.position.set(0, 0.46, -0.22);
  pack.castShadow = true;
  pelvis.add(pack);

  // head + simple face
  const head = new THREE.Group();
  head.position.y = 0.92;
  pelvis.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.24, 20, 16), skin);
  skull.castShadow = true;
  head.add(skull);
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.3 });
  for (const sx of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), eyeMat);
    eye.position.set(0.09 * sx, 0.02, 0.205);
    head.add(eye);
  }
  // hair cap
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.255, 18, 14, 0, Math.PI * 2, 0, Math.PI * 0.55), cloth2);
  hair.position.y = 0.04;
  head.add(hair);

  // limb factory: a shoulder/hip pivot with a single capsule "limb" hanging
  // from it, so a rotation on the pivot swings the whole limb naturally.
  function limb(len, rad, mat) {
    const pivot = new THREE.Group();
    const seg = new THREE.Mesh(new THREE.CapsuleGeometry(rad, len, 5, 10), mat);
    seg.position.y = -len / 2 - rad; // hang down from the pivot
    seg.castShadow = true;
    pivot.add(seg);
    return pivot;
  }

  const armL = limb(0.42, 0.085, cloth);
  const armR = limb(0.42, 0.085, cloth);
  armL.position.set(-0.34, 0.74, 0);
  armR.position.set(0.34, 0.74, 0);
  pelvis.add(armL, armR);

  const legL = limb(0.46, 0.11, cloth2);
  const legR = limb(0.46, 0.11, cloth2);
  legL.position.set(-0.14, 0.06, 0);
  legR.position.set(0.14, 0.06, 0);
  pelvis.add(legL, legR);

  // feet
  const footMat = new THREE.MeshStandardMaterial({ color: 0x20242c, roughness: 0.8 });
  for (const [leg, sx] of [[legL, -1], [legR, 1]]) {
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.28), footMat);
    foot.position.set(0, -0.62, 0.06);
    foot.castShadow = true;
    leg.add(foot);
  }

  root.traverse((o) => { if (o.isMesh) o.castShadow = true; });

  const joints = { pelvis, torso, head, armL, armR, legL, legR };
  return { root, joints };
}

// A hand-rolled stand-in for THREE.AnimationMixer: holds blend weights per
// state, crossfades them over time, and writes joint poses each frame as a
// weighted sum of per-state procedural poses. This is exactly the bookkeeping
// an AnimationMixer does for clip tracks — only here we author the "clips" as
// math instead of loading them from a GLB.
export class HeroAnimator {
  constructor(joints) {
    this.j = joints;
    this.t = 0;                 // gait phase clock
    this.weights = { idle: 1, run: 0, jump: 0, fall: 0 };
    this.target = "idle";
    this.fade = 0.14;           // crossfade time constant (s) — mixer's fadeTo
    this.speed01 = 0;           // 0..1 locomotion intensity, scales run cadence
  }

  // Request a state; the mixer eases weights toward a one-hot on `name`.
  setState(name, speed01 = 0) {
    this.target = name;
    this.speed01 = speed01;
  }

  // Crossfade weights toward the target one-hot (frame-rate independent),
  // then renormalize so the weighted pose sum stays affine.
  _blend(dt) {
    const k = 1 - Math.exp(-dt / this.fade);
    for (const s of ["idle", "run", "jump", "fall"]) {
      const goal = s === this.target ? 1 : 0;
      this.weights[s] += (goal - this.weights[s]) * k;
    }
    let sum = 0;
    for (const s in this.weights) sum += this.weights[s];
    if (sum > 1e-5) for (const s in this.weights) this.weights[s] /= sum;
  }

  // ── the four "clips", each a function that POSES the joints. They write
  // into temp euler targets that _apply blends. Authoring poses as code is
  // the procedural-rig tax in its purest form. ──
  update(dt) {
    this._blend(dt);
    const j = this.j;
    const w = this.weights;
    // gait clock advances faster when running harder
    const cadence = 8 + this.speed01 * 4;
    this.t += dt * cadence;
    const ph = this.t;

    // accumulate weighted pose
    let pelvisY = 0, pelvisPitch = 0;
    let armLx = 0, armRx = 0, legLx = 0, legRx = 0;
    let torsoPitch = 0, headPitch = 0;
    let armSpread = 0;

    // idle: gentle breathing bob + tiny arm sway
    if (w.idle > 1e-4) {
      const b = Math.sin(this.t * 0.5) * 0.02;
      pelvisY += w.idle * b;
      armLx += w.idle * Math.sin(this.t * 0.5) * 0.06;
      armRx += w.idle * -Math.sin(this.t * 0.5) * 0.06;
      torsoPitch += w.idle * 0.02;
    }
    // run: opposed arm/leg swing, vertical bob at 2x stride, slight lean-in
    if (w.run > 1e-4) {
      const sw = Math.sin(ph);
      const amp = 0.6 + this.speed01 * 0.35;
      legLx += w.run * sw * amp;
      legRx += w.run * -sw * amp;
      armLx += w.run * -sw * amp * 0.9;
      armRx += w.run * sw * amp * 0.9;
      pelvisY += w.run * Math.abs(Math.cos(ph)) * 0.08;
      torsoPitch += w.run * 0.18;       // lean into the run
      headPitch += w.run * -0.06;
    }
    // jump: tuck — knees up, arms up/back, torso slightly back
    if (w.jump > 1e-4) {
      legLx += w.jump * 0.9;
      legRx += w.jump * 0.7;
      armLx += w.jump * -2.2;
      armRx += w.jump * -2.2;
      torsoPitch += w.jump * -0.1;
      armSpread += w.jump * 0.3;
    }
    // fall: reach — arms out/forward, legs trailing, bracing for landing
    if (w.fall > 1e-4) {
      legLx += w.fall * -0.5;
      legRx += w.fall * -0.3;
      armLx += w.fall * -1.4;
      armRx += w.fall * -1.4;
      armSpread += w.fall * 0.8;
      torsoPitch += w.fall * 0.12;
    }

    // write composed pose to joints
    j.pelvis.position.y = 0.95 + pelvisY;
    j.pelvis.rotation.x = pelvisPitch;
    j.torso.rotation.x = torsoPitch;
    j.head.rotation.x = headPitch;
    j.legL.rotation.x = legLx;
    j.legR.rotation.x = legRx;
    j.armL.rotation.set(armLx, 0, armSpread);
    j.armR.rotation.set(armRx, 0, -armSpread);
  }
}

// ── FOR THE RECORD: the GLTF path (path A), intentionally unused. ──
// If a rigged hero.glb were shipped, this is the whole "engine ships a
// character" story you'd otherwise get for free: load, find clips by name,
// build an AnimationMixer, and the caller would crossfade actions instead of
// driving HeroAnimator. Left here (and NOT called) to document the tax.
export async function loadGltfHero(url, THREE_, GLTFLoaderCtor) {
  const loader = new GLTFLoaderCtor();
  const gltf = await loader.loadAsync(url);
  const root = gltf.scene;
  const mixer = new THREE_.AnimationMixer(root);
  const byName = {};
  for (const clip of gltf.animations) byName[clip.name.toLowerCase()] = clip;
  const actions = {
    idle: mixer.clipAction(byName["idle"]),
    run: mixer.clipAction(byName["run"] || byName["running"]),
    jump: mixer.clipAction(byName["jump"]),
  };
  for (const a of Object.values(actions)) if (a) a.play();
  // crossfade helper the caller would use instead of HeroAnimator.setState
  let current = "idle";
  function setState(name) {
    if (name === current || !actions[name]) return;
    actions[name].reset().fadeIn(0.2);
    if (actions[current]) actions[current].fadeOut(0.2);
    current = name;
  }
  return { root, mixer, actions, setState };
}
