// Entry point: wire DOM -> HUD -> Game, then run. Kept tiny on purpose.
import { Game } from './game.js';
import { createHud } from './hud.js';

const canvas = document.getElementById('scene');
const overlayLayer = document.getElementById('overlay-layer');
const hud = createHud(document.body);

const game = new Game({ canvas, hud, overlayLayer });
game.run();

// Start on click of the title overlay button or via Space/Enter (handled in Game).
const startBtn = document.getElementById('start-btn');
if (startBtn) startBtn.addEventListener('click', () => game.start());

// Expose for headless verification / debugging.
window.__GAME__ = game;
