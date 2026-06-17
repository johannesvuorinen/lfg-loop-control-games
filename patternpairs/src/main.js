// main.js — glue: wires the pure Game (rules) to the BoardView (three.js) and
// the HUD. This is the only file that knows about both worlds.

import { Game, LEVELS, STATE } from './game.js';
import { BoardView } from './scene.js';

const MISMATCH_HOLD_MS = 750; // how long a mismatched pair stays visible

const canvas = document.getElementById('game');
const hud = {
  level: document.getElementById('hud-level'),
  pairs: document.getElementById('hud-pairs'),
  moves: document.getElementById('hud-moves'),
};
const banner = document.getElementById('banner');
const bannerText = document.getElementById('banner-text');
const bannerBtn = document.getElementById('banner-btn');

const game = new Game({ level: 0 });
const view = new BoardView(canvas);

let inputLocked = false; // true while a 2-card resolve is pending

function loadLevel() {
  const { cols, rows } = LEVELS[game.level];
  view.buildBoard(game.deck, cols, rows);
  view.resize();
  updateHud();
  hideBanner();
}

function updateHud() {
  const s = game.status();
  hud.level.textContent = `Level ${s.levelLabel}/${s.totalLevels}`;
  hud.pairs.textContent = `Pairs ${s.pairsFound}/${s.pairsTotal}`;
  hud.moves.textContent = `Moves ${s.moves}`;
}

function showBanner(text, btnLabel, onClick) {
  bannerText.textContent = text;
  bannerBtn.textContent = btnLabel;
  bannerBtn.onclick = onClick;
  banner.classList.add('show');
}
function hideBanner() {
  banner.classList.remove('show');
}

// Handle a click/tap on the board.
function onPointerDown(ev) {
  if (inputLocked) return;
  const x = ev.clientX ?? (ev.touches && ev.touches[0].clientX);
  const y = ev.clientY ?? (ev.touches && ev.touches[0].clientY);
  if (x === undefined) return;
  const id = view.pick(x, y);
  if (id === null) return;

  const res = game.flip(id);
  if (!res) return; // rejected (already up / matched / locked)

  view.setFlipped(id, true);

  if (res.count === 2) {
    // Two cards up -> lock input, wait, then resolve.
    inputLocked = true;
    const delay = res.isMatch ? FLIP_SETTLE_MS : MISMATCH_HOLD_MS;
    setTimeout(resolvePair, delay);
  }
  updateHud();
}

const FLIP_SETTLE_MS = 360; // let the flip animation finish before resolving a match

function resolvePair() {
  const flippedIds = [...game.flipped];
  const out = game.resolve();
  inputLocked = false;
  if (!out) return;

  if (out.isMatch) {
    out.matchedIds.forEach((id) => view.pulse(id));
  } else {
    // flip both back down
    flippedIds.forEach((id) => view.setFlipped(id, false));
  }
  updateHud();

  if (out.won) onLevelWon();
}

function onLevelWon() {
  if (game.isLastLevel()) {
    showBanner(`You cleared all ${LEVELS.length} levels in ${game.moves} moves on the final board!`, 'Play again', () => {
      game.startLevel(0);
      loadLevel();
    });
  } else {
    showBanner(`Level ${game.level + 1} cleared in ${game.moves} moves!`, 'Next level', () => {
      game.nextLevel();
      loadLevel();
    });
  }
}

// Render loop.
function tick(now) {
  view.update(now);
  view.render();
  requestAnimationFrame(tick);
}

canvas.addEventListener('pointerdown', onPointerDown);
window.addEventListener('keydown', (e) => {
  if (e.key === 'r' || e.key === 'R') { game.startLevel(game.level); loadLevel(); }
});

loadLevel();
requestAnimationFrame(tick);

// Expose for the headless test harness / debugging.
window.__PP__ = { game, view, STATE, loadLevel, onPointerDown };
