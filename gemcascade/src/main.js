// main.js — bootstrap: difficulty menu, high-score persistence, (re)start.
import { Game, DIFFICULTIES } from './game.js';

const canvas = document.getElementById('game');
const hud = {
  score: document.getElementById('score'),
  moves: document.getElementById('moves'),
  chain: document.getElementById('chain'),
  timer: document.getElementById('timer'),
  message: document.getElementById('message'),
  best: document.getElementById('best'),
};

const HS_KEY = 'gemcascade.highscore.v1';
function loadHighScores() {
  try {
    return JSON.parse(localStorage.getItem(HS_KEY) || '{}');
  } catch {
    return {};
  }
}
function saveHighScore(diff, score) {
  const hs = loadHighScores();
  if (!hs[diff] || score > hs[diff]) {
    hs[diff] = score;
    try {
      localStorage.setItem(HS_KEY, JSON.stringify(hs));
    } catch {
      /* ignore (private mode) */
    }
  }
  return hs[diff] || 0;
}

let current = null;
let currentDiff = 'normal';

function showBest() {
  const hs = loadHighScores();
  if (hud.best) hud.best.textContent = String(hs[currentDiff] || 0);
}

function start(diff) {
  currentDiff = diff;
  if (current) current.destroy();
  hud.onGameOver = (score) => {
    saveHighScore(currentDiff, score);
    showBest();
  };
  hud.message = document.getElementById('message');
  current = new Game({ canvas, hud: { ...hud, onGameOver: hud.onGameOver }, difficulty: diff });
  // continuously persist best as score climbs (endless modes never "end")
  clearInterval(start._poll);
  start._poll = setInterval(() => {
    if (current) {
      const b = saveHighScore(currentDiff, current.score);
      if (hud.best) hud.best.textContent = String(b);
    }
  }, 1000);
  document.getElementById('menu').classList.add('hidden');
  showBest();
  // expose for headless test harness
  window.__GAME__ = current;
}

// Wire menu buttons.
for (const key of Object.keys(DIFFICULTIES)) {
  const btn = document.querySelector(`[data-diff="${key}"]`);
  if (btn) btn.addEventListener('click', () => start(key));
}

document.getElementById('restart').addEventListener('click', () => {
  document.getElementById('menu').classList.remove('hidden');
});

// Default: show the menu; let the player pick. Also expose a quick-start.
window.__startGame = start;
showBest();
