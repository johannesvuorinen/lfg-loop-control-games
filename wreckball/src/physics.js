// Physics layer — cannon-es only. Owns the rigid bodies, the platform, the towers,
// and (the core mechanic) the wrecking ball connected to a fixed pivot by a
// PointToPointConstraint. No three.js here; main.js mirrors these bodies with meshes.

import * as CANNON from 'cannon-es';
import { BLOCK_SIZE } from './levels.js';

// --- Tunables -------------------------------------------------------------
export const PIVOT_HEIGHT = 9; // y of the fixed anchor the chain hangs from
export const CHAIN_LENGTH = 6.5; // resting distance pivot -> ball centre
export const BALL_RADIUS = 0.9;
export const BALL_MASS = 60; // heavy — it should plough through blocks
export const BLOCK_MASS = 1;
export const GRAVITY = -19; // a touch stronger than Earth so things settle fast & feel snappy

// Materials so we can tune friction/restitution between surfaces.
const groundMat = new CANNON.Material('ground');
const blockMat = new CANNON.Material('block');
const ballMat = new CANNON.Material('ball');

export function createWorld() {
  const world = new CANNON.World({ gravity: new CANNON.Vec3(0, GRAVITY, 0) });
  world.broadphase = new CANNON.SAPBroadphase(world);
  world.allowSleep = true;
  // A solver iteration count high enough that tall stacks don't jitter apart.
  world.solver.iterations = 12;
  world.defaultContactMaterial.contactEquationStiffness = 1e7;

  // block-on-block: a bit of friction so towers stand; low restitution.
  world.addContactMaterial(
    new CANNON.ContactMaterial(blockMat, blockMat, { friction: 0.4, restitution: 0.05 }),
  );
  // block-on-ground: high friction so debris doesn't slide forever.
  world.addContactMaterial(
    new CANNON.ContactMaterial(blockMat, groundMat, { friction: 0.6, restitution: 0.05 }),
  );
  // ball-on-block: low friction, a little bounce so the ball keeps energy.
  world.addContactMaterial(
    new CANNON.ContactMaterial(ballMat, blockMat, { friction: 0.1, restitution: 0.2 }),
  );
  return world;
}

// The platform: a static box whose TOP surface is at y = 0.
export function createPlatform(world, half, thickness = 1) {
  const shape = new CANNON.Box(new CANNON.Vec3(half, thickness / 2, half));
  const body = new CANNON.Body({ mass: 0, material: groundMat });
  body.addShape(shape);
  body.position.set(0, -thickness / 2, 0); // top face flush with y = 0
  world.addBody(body);
  return { body, half, thickness };
}

// Build one tower (a vertical column of blocks) at (x, z) and return the bodies.
// Blocks are stacked from the platform up, each tagged with a stable `blockId`.
function buildTower(world, tower, idPrefix, sink = 0) {
  const half = {
    x: BLOCK_SIZE.x / 2,
    y: BLOCK_SIZE.y / 2,
    z: BLOCK_SIZE.z / 2,
  };
  const shape = new CANNON.Box(new CANNON.Vec3(half.x, half.y, half.z));
  const bodies = [];
  for (let i = 0; i < tower.blocks; i++) {
    const body = new CANNON.Body({ mass: BLOCK_MASS, material: blockMat });
    body.addShape(shape);
    // Centre of block i: half a block above the platform for i=0, then stack up.
    // `sink` lets blocks settle a hair into contact to avoid initial jitter.
    const y = half.y + i * BLOCK_SIZE.y - sink;
    body.position.set(tower.x, y, tower.z);
    body.allowSleep = true;
    body.sleepSpeedLimit = 0.4;
    body.sleepTimeLimit = 0.6;
    body.blockId = `${idPrefix}-${i}`;
    world.addBody(body);
    bodies.push(body);
  }
  return bodies;
}

// Build all towers for a level. Returns a flat array of block bodies.
export function buildTowers(world, level) {
  const all = [];
  level.towers.forEach((tower, t) => {
    const bodies = buildTower(world, tower, `t${t}`);
    all.push(...bodies);
  });
  return all;
}

// THE CORE MECHANIC ---------------------------------------------------------
// A wrecking ball = a dynamic sphere body + a fixed (mass 0) anchor body, joined
// by a PointToPointConstraint. The constraint pins a point on the ball to a point
// on the anchor; cannon's solver then produces the pendulum swing for free.
//
// We anchor the ball one CHAIN_LENGTH below the pivot at rest. The ball's local
// attach point is its top (0, +offset, 0) so the visible chain runs to the ball's
// crown rather than its centre — purely cosmetic for where the chain mesh lands.
export function createWreckingBall(world, pivotPos) {
  // Fixed anchor (no mass => immovable). It just provides the pivot point.
  const anchor = new CANNON.Body({ mass: 0 });
  anchor.addShape(new CANNON.Sphere(0.15));
  anchor.position.copy(pivotPos);
  anchor.collisionResponse = false; // the anchor shouldn't physically collide with anything
  world.addBody(anchor);

  // The ball itself: heavy dynamic sphere, hanging CHAIN_LENGTH below the pivot.
  const ball = new CANNON.Body({ mass: BALL_MASS, material: ballMat });
  ball.addShape(new CANNON.Sphere(BALL_RADIUS));
  ball.position.set(pivotPos.x, pivotPos.y - CHAIN_LENGTH, pivotPos.z);
  ball.linearDamping = 0.1; // let it swing, but bleed energy so a shot settles in a few seconds
  ball.angularDamping = 0.2;
  ball.allowSleep = false; // we manage rest detection ourselves via velocity
  world.addBody(ball);

  // Pivot constraint: ball-local point (top of ball) pinned to anchor-local origin.
  // This single line is the whole "joint": it constrains the distance+direction so
  // the ball can only move on the surface of a sphere of radius CHAIN_LENGTH.
  const constraint = new CANNON.PointToPointConstraint(
    ball,
    new CANNON.Vec3(0, CHAIN_LENGTH - BALL_RADIUS, 0), // attach at the ball's crown
    anchor,
    new CANNON.Vec3(0, 0, 0),
  );
  world.addConstraint(constraint);

  return { anchor, ball, constraint, pivot: pivotPos.clone ? pivotPos.clone() : new CANNON.Vec3(pivotPos.x, pivotPos.y, pivotPos.z) };
}

// Apply a launch impulse to the ball in a horizontal direction with given power.
// `dir` is a CANNON.Vec3 (need not be normalised); power scales the impulse.
// Returns the applied impulse magnitude (handy for tests / HUD).
export function launchBall(ball, dir, power) {
  const d = dir.clone();
  d.y = 0; // keep launches horizontal so the swing reads cleanly
  if (d.length() < 1e-6) return 0;
  d.normalize();
  const magnitude = power; // power already in impulse units (see main.js mapping)
  const impulse = d.scale(magnitude);
  // Apply at the ball's centre so it translates without unwanted spin.
  ball.wakeUp();
  ball.applyImpulse(impulse, new CANNON.Vec3(0, 0, 0));
  return magnitude;
}

// Is the ball effectively at rest? Used to know when a swing is "over".
export function ballAtRest(ball, speedLimit = 0.6) {
  return ball.velocity.length() < speedLimit && ball.angularVelocity.length() < speedLimit;
}

// Gently re-centre the ball under the pivot (between swings) so each shot starts
// from a clean hanging position. Kills velocity and snaps it to rest below pivot.
export function resetBall(ball, pivotPos) {
  ball.velocity.setZero();
  ball.angularVelocity.setZero();
  ball.position.set(pivotPos.x, pivotPos.y - CHAIN_LENGTH, pivotPos.z);
  ball.quaternion.set(0, 0, 0, 1);
}

// Step the world. fixedStep + maxSubSteps keeps it deterministic across frame rates.
export function step(world, dt, fixedStep = 1 / 60, maxSubSteps = 5) {
  world.step(fixedStep, dt, maxSubSteps);
}
