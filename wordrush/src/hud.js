// HUD + menus as a DOM overlay on top of the three.js canvas. Pure UI: the
// game pushes state in via update()/showGameOver(); the HUD never touches the
// engine. DOM text is crisp and accessible "for free" vs. drawing UI in WebGL.

export class Hud {
  constructor(root) {
    this.root = root;
    root.innerHTML = TEMPLATE;
    this.el = (id) => root.querySelector(id);

    this.scoreEl = this.el('#score');
    this.highEl = this.el('#highscore');
    this.livesEl = this.el('#lives');
    this.levelEl = this.el('#level');
    this.wpmEl = this.el('#wpm');
    this.accEl = this.el('#acc');
    this.comboEl = this.el('#combo');
    this.bufferEl = this.el('#buffer');
    this.targetEl = this.el('#target');
    this.flashEl = this.el('#dmgflash');

    this.menuEl = this.el('#menu');
    this.overEl = this.el('#gameover');
    this.pauseEl = this.el('#pause');
    this.finalScoreEl = this.el('#finalscore');
    this.finalLineEl = this.el('#finalline');
    this.newHighEl = this.el('#newhigh');
    this.menuHighEl = this.el('#menuhigh');

    this.setState('menu');
  }

  setMenuHigh(hs) { if (this.menuHighEl) this.menuHighEl.textContent = hs > 0 ? `High score: ${hs}` : ''; }

  setState(state) {
    this.menuEl.style.display = state === 'menu' ? 'flex' : 'none';
    this.overEl.style.display = state === 'gameover' ? 'flex' : 'none';
    this.pauseEl.style.display = state === 'paused' ? 'flex' : 'none';
  }

  update(s) {
    this.scoreEl.textContent = s.score;
    this.highEl.textContent = s.highScore;
    this.levelEl.textContent = s.level;
    this.wpmEl.textContent = s.wpm;
    this.accEl.textContent = s.accuracy + '%';
    this.comboEl.textContent = s.combo > 1 ? `x${s.combo}` : '';
    this.comboEl.style.opacity = s.combo > 1 ? '1' : '0';

    // hearts
    let hearts = '';
    for (let i = 0; i < 3; i++) hearts += i < s.lives ? '♥' : '♡';
    this.livesEl.textContent = hearts;

    // buffer / target
    if (s.target) {
      const done = s.target.slice(0, s.typed.length);
      const next = s.target.slice(s.typed.length, s.typed.length + 1);
      const rest = s.target.slice(s.typed.length + 1);
      this.bufferEl.innerHTML =
        `<span class="done">${done}</span>` +
        `<span class="next">${next}</span>` +
        `<span class="rest">${rest}</span>`;
      this.targetEl.textContent = 'typing';
    } else {
      this.bufferEl.innerHTML = '<span class="rest">type a word…</span>';
      this.targetEl.textContent = '';
    }
  }

  pulseBuffer(kind) {
    const el = this.bufferEl.parentElement;
    el.classList.remove('pulse-miss', 'pulse-complete', 'pulse-lock');
    // force reflow to restart animation
    void el.offsetWidth;
    el.classList.add('pulse-' + kind);
  }

  pulseLives() {
    this.livesEl.classList.remove('pulse-miss');
    void this.livesEl.offsetWidth;
    this.livesEl.classList.add('pulse-miss');
  }

  showGameOver(g, highScore) {
    this.finalScoreEl.textContent = g.score;
    this.finalLineEl.textContent =
      `Level ${g.level} · ${g.cleared} words · best combo x${g.bestCombo}`;
    this.newHighEl.style.display = (g.score >= highScore && g.score > 0) ? 'block' : 'none';
    this.setState('gameover');
  }
}

const TEMPLATE = `
  <div id="dmgflash"></div>

  <div id="topbar">
    <div class="stat"><label>SCORE</label><div id="score">0</div></div>
    <div class="stat"><label>LEVEL</label><div id="level">1</div></div>
    <div class="stat"><label>WPM</label><div id="wpm">0</div></div>
    <div class="stat"><label>ACC</label><div id="acc">100%</div></div>
    <div class="stat right"><label>LIVES</label><div id="lives">♥♥♥</div></div>
    <div class="stat right"><label>BEST</label><div id="highscore">0</div></div>
  </div>

  <div id="bufferwrap">
    <div id="combo"></div>
    <div id="buffer"><span class="rest">type a word…</span></div>
    <div id="target"></div>
  </div>

  <div id="menu" class="screen">
    <h1>WORD&nbsp;RUSH</h1>
    <p class="tag">Words fall. <b>Type them</b> before they hit the bottom.</p>
    <ul class="rules">
      <li>Type a word's letters <b>in order</b> to clear it.</li>
      <li>The game auto-targets the <b>lowest</b> matching word.</li>
      <li>Chain clears for a <b>combo multiplier</b>. 3 lives.</li>
      <li><kbd>Backspace</kbd> to fix · <kbd>Esc</kbd> to pause.</li>
    </ul>
    <button id="startbtn" class="cta">Press <kbd>Enter</kbd> to play</button>
    <div id="menuhigh" class="menuhigh"></div>
  </div>

  <div id="gameover" class="screen">
    <h1 class="go">GAME&nbsp;OVER</h1>
    <div id="newhigh" class="newhigh">★ NEW HIGH SCORE ★</div>
    <div class="finalscore" id="finalscore">0</div>
    <div class="finalline" id="finalline"></div>
    <button class="cta">Press <kbd>Enter</kbd> to play again</button>
  </div>

  <div id="pause" class="screen">
    <h1>PAUSED</h1>
    <p class="tag">Press <kbd>Esc</kbd> to resume</p>
  </div>
`;
