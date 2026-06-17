// HUD glue: thin wrapper over static DOM nodes in index.html. Holds no game rules,
// just formats values and toggles overlays/announcements.

export function createHud(root) {
  const el = (id) => root.querySelector(id);
  const waveEl = el('#hud-wave');
  const hpFill = el('#hud-hp-fill');
  const hpText = el('#hud-hp-text');
  const scoreEl = el('#hud-score');
  const enemiesEl = el('#hud-enemies');
  const announceEl = el('#announce');
  const overlayEl = el('#overlay');
  const overlayTitle = el('#overlay-title');
  const overlaySub = el('#overlay-sub');
  const damageVignette = el('#damage-vignette');

  let announceTimer = 0;

  return {
    set({ wave, hp, maxHp, score, enemies }) {
      waveEl.textContent = String(wave);
      const pct = Math.max(0, Math.min(1, hp / maxHp));
      hpFill.style.width = (pct * 100).toFixed(1) + '%';
      hpFill.style.background =
        pct > 0.5 ? '#46e6c8' : pct > 0.25 ? '#ffce4a' : '#ff4d5e';
      hpText.textContent = `${hp} / ${maxHp}`;
      scoreEl.textContent = score.toLocaleString();
      enemiesEl.textContent = String(enemies);
    },
    announce(text) {
      announceEl.textContent = text;
      announceEl.classList.remove('show');
      // force reflow to restart the animation
      void announceEl.offsetWidth;
      announceEl.classList.add('show');
      clearTimeout(announceTimer);
      announceTimer = setTimeout(() => announceEl.classList.remove('show'), 1400);
    },
    flashDamage() {
      damageVignette.classList.remove('hit');
      void damageVignette.offsetWidth;
      damageVignette.classList.add('hit');
    },
    setOverlay(data) {
      if (!data) {
        overlayEl.classList.remove('show');
        return;
      }
      overlayTitle.textContent = data.title;
      overlaySub.textContent = data.sub || '';
      overlayEl.classList.add('show');
    },
  };
}
