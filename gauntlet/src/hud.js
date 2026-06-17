// hud.js — DOM HUD. Reads GameState and reflects it into the on-screen overlay.
// Browser-only glue; holds no rules.

import { Status } from './game.js';

export class Hud {
  constructor() {
    this.orbsEl = document.getElementById('hud-orbs');
    this.livesEl = document.getElementById('hud-lives');
    this.levelEl = document.getElementById('hud-level');
    this.overlay = document.getElementById('overlay');
    this.overlayTitle = document.getElementById('overlay-title');
    this.overlayText = document.getElementById('overlay-text');
    this._lastStatus = null;
  }

  update(game) {
    this.orbsEl.textContent = `${game.collectedCount} / ${game.totalOrbs}`;
    this.livesEl.textContent = '♥'.repeat(game.lives) + '·'.repeat(Math.max(0, game.startingLives - game.lives));
    this.levelEl.textContent = `${game.levelIndex + 1} · ${game.level.name}`;

    if (game.status !== this._lastStatus) {
      this._renderOverlay(game);
      this._lastStatus = game.status;
    }
  }

  _renderOverlay(game) {
    switch (game.status) {
      case Status.PLAYING:
        this.overlay.classList.add('hidden');
        break;
      case Status.LEVEL_CLEAR:
        this.overlay.classList.remove('hidden');
        this.overlayTitle.textContent = 'LEVEL CLEAR';
        this.overlayText.innerHTML =
          `All orbs collected.<br><b>Press Space / tap</b> for level ${game.levelIndex + 2}.`;
        break;
      case Status.WON:
        this.overlay.classList.remove('hidden');
        this.overlayTitle.textContent = 'YOU WIN! 🏆';
        this.overlayText.innerHTML =
          `You cleared all ${game.levels.length} levels.<br><b>Press R</b> to play again.`;
        break;
      case Status.DEAD:
        this.overlay.classList.remove('hidden');
        this.overlayTitle.textContent = 'OUT OF LIVES';
        this.overlayText.innerHTML =
          `The drones got you.<br><b>Press Space / tap</b> to retry level ${game.levelIndex + 1}.`;
        break;
    }
  }

  /** Force the overlay to re-render next update (after a status-changing action). */
  invalidate() {
    this._lastStatus = null;
  }

  showStart() {
    this.overlay.classList.remove('hidden');
    this.overlayTitle.textContent = 'GAUNTLET';
    this.overlayText.innerHTML =
      'Collect every orb. Avoid the patrolling drones &amp; saws.<br>' +
      '<b>WASD / arrows / drag</b> to move &nbsp;·&nbsp; 3 lives.<br>' +
      '<b>Press Space / tap</b> to start.';
  }
}
