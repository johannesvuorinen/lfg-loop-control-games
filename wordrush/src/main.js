// Entry point: build the HUD, construct the game, wire start buttons, and
// expose a handle for the headless test harness.
import { Hud } from './hud.js';
import { WordRushGame } from './game.js';

function boot() {
  const canvas = document.getElementById('gl');
  const hudRoot = document.getElementById('hud');
  const hud = new Hud(hudRoot);
  const game = new WordRushGame(canvas, hud);
  hud.setMenuHigh(game.highScore);

  // Click-to-start as a fallback to the Enter key (mobile / mouse users).
  const startGame = () => {
    if (!game.running || (game.game && game.game.over)) game.start();
  };
  hudRoot.querySelectorAll('.cta').forEach((b) => b.addEventListener('click', startGame));

  // Expose for the headless harness / debugging.
  window.WORDRUSH = game;
  window.__WORDRUSH_READY = true;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
