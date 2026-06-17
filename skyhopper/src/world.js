// world.js — three.js scene dressing: floating islands, glowing orbs, the
// goal portal, skybox, lights, and a particle field. Pure rendering/glue;
// the layout numbers come from the shared pure level.js.

import * as THREE from "three";

// Procedural gradient sky as a large back-facing sphere (no HDR asset).
export function makeSky() {
  const geo = new THREE.SphereGeometry(800, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {
      top: { value: new THREE.Color(0x2a3a8f) },
      mid: { value: new THREE.Color(0x6d8bd6) },
      bot: { value: new THREE.Color(0xf3c9a0) },
    },
    vertexShader: `
      varying vec3 vPos;
      void main(){ vPos = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }
    `,
    fragmentShader: `
      varying vec3 vPos; uniform vec3 top, mid, bot;
      void main(){
        float h = normalize(vPos).y;
        vec3 c = h>0.0 ? mix(mid, top, h) : mix(mid, bot, -h);
        gl_FragColor = vec4(c, 1.0);
      }
    `,
  });
  return new THREE.Mesh(geo, mat);
}

// A single floating island: a tapered rock body with a grass cap.
function makeIsland(isl) {
  const g = new THREE.Group();
  g.position.set(isl.x, isl.y, isl.z);

  // grass cap (top surface the player walks on is at local y=0)
  const capGeo = new THREE.CylinderGeometry(isl.r, isl.r * 0.92, 0.5, 24, 1);
  const grass = new THREE.MeshStandardMaterial({ color: 0x4caf50, roughness: 0.9 });
  const cap = new THREE.Mesh(capGeo, grass);
  cap.position.y = -0.25;
  cap.receiveShadow = true;
  cap.castShadow = true;
  g.add(cap);

  // rocky underside tapering to a point
  const rockGeo = new THREE.ConeGeometry(isl.r * 0.92, isl.r * 1.6, 18, 3, true);
  const rock = new THREE.MeshStandardMaterial({ color: 0x6b4f3a, roughness: 1.0, flatShading: true });
  // jitter the cone verts a little so it reads as natural rock
  const pos = rockGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    if (y < rockGeo.parameters.height * 0.4) {
      pos.setX(i, pos.getX(i) + (Math.random() - 0.5) * 0.6);
      pos.setZ(i, pos.getZ(i) + (Math.random() - 0.5) * 0.6);
    }
  }
  rockGeo.computeVertexNormals();
  const cone = new THREE.Mesh(rockGeo, rock);
  cone.position.y = -0.5 - (isl.r * 1.6) / 2;
  cone.castShadow = true;
  g.add(cone);

  // a few decorative boulders / tufts on top
  const boulderMat = new THREE.MeshStandardMaterial({ color: 0x7d8a99, roughness: 1.0, flatShading: true });
  const n = 2 + Math.floor(Math.random() * 3);
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const rr = Math.random() * isl.r * 0.7;
    const s = 0.3 + Math.random() * 0.4;
    const b = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), boulderMat);
    b.position.set(Math.cos(a) * rr, s * 0.4, Math.sin(a) * rr);
    b.castShadow = true;
    b.receiveShadow = true;
    g.add(b);
  }
  return g;
}

// A glowing orb: bright emissive core + additive halo shell. With bloom on
// the composer the emissive core blooms; the halo gives glow even without it.
export function makeOrb(pos) {
  const g = new THREE.Group();
  g.position.set(pos.x, pos.y, pos.z);
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.28, 2),
    new THREE.MeshStandardMaterial({
      color: 0xfff2a8, emissive: 0xffd24a, emissiveIntensity: 2.4, roughness: 0.3,
    })
  );
  g.add(core);
  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 12),
    new THREE.MeshBasicMaterial({ color: 0xffd24a, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  g.add(halo);
  // a point light so the orb actually lights the island near it
  const light = new THREE.PointLight(0xffd24a, 6, 6, 2);
  g.add(light);
  g.userData.core = core;
  g.userData.halo = halo;
  return g;
}

// Goal portal: a glowing ring + swirling inner disc. Dims when locked,
// flares when the required orbs are collected.
export function makePortal(pos) {
  const g = new THREE.Group();
  g.position.set(pos.x, pos.y, pos.z);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.1, 0.16, 16, 40),
    new THREE.MeshStandardMaterial({ color: 0x8a5cff, emissive: 0x6a2adf, emissiveIntensity: 1.2, roughness: 0.3 })
  );
  g.add(ring);
  const disc = new THREE.Mesh(
    new THREE.CircleGeometry(1.0, 40),
    new THREE.MeshBasicMaterial({ color: 0x9b7bff, transparent: true, opacity: 0.35, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  g.add(disc);
  const light = new THREE.PointLight(0x8a5cff, 4, 10, 2);
  light.position.y = 0.2;
  g.add(light);
  g.userData.ring = ring;
  g.userData.disc = disc;
  g.userData.light = light;
  return g;
}

// Drifting dust/sparkle field for atmosphere (a single Points cloud).
export function makeParticles(count = 400, spread = 120) {
  const geo = new THREE.BufferGeometry();
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    arr[i * 3 + 0] = (Math.random() - 0.5) * spread;
    arr[i * 3 + 1] = Math.random() * 60 - 5;
    arr[i * 3 + 2] = (Math.random() - 0.5) * spread;
  }
  geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
  const mat = new THREE.PointsMaterial({
    color: 0xffffff, size: 0.18, transparent: true, opacity: 0.5,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  return new THREE.Points(geo, mat);
}

// Build the whole static world from a pure level description.
export function buildWorld(scene, level) {
  const islandGroup = new THREE.Group();
  for (const isl of level.islands) islandGroup.add(makeIsland(isl));
  scene.add(islandGroup);

  const orbMeshes = level.orbs.map((o) => {
    const m = makeOrb(o);
    scene.add(m);
    return m;
  });

  const portal = makePortal(level.portal);
  scene.add(portal);

  const sky = makeSky();
  scene.add(sky);

  const particles = makeParticles();
  scene.add(particles);

  return { islandGroup, orbMeshes, portal, particles };
}

// Lighting rig: warm key (sun) with shadows, cool sky fill, soft ambient.
export function setupLights(scene) {
  const sun = new THREE.DirectionalLight(0xfff0d6, 2.2);
  sun.position.set(30, 60, 20);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const s = 80;
  sun.shadow.camera.left = -s;
  sun.shadow.camera.right = s;
  sun.shadow.camera.top = s;
  sun.shadow.camera.bottom = -s;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 200;
  sun.shadow.bias = -0.0004;
  scene.add(sun);

  const hemi = new THREE.HemisphereLight(0x9fc4ff, 0x4a3b2a, 0.7);
  scene.add(hemi);

  const amb = new THREE.AmbientLight(0xffffff, 0.18);
  scene.add(amb);
  return { sun, hemi, amb };
}
