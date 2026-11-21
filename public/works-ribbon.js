// Selected work: scroll drives a ribbon of work cards along a 3D rail that circles the viewer,
// then each card lands in a grid. Cards are real buttons placed with CSS matrix3d, so the reel
// also works from file:// and keeps native focus, video playback and clicks.
import { showProject } from './main.js';

const reel = document.querySelector('.works-reel');
if (reel) setupReel(reel);

function setupReel(reel) {
  const stage = reel.querySelector('.reel-stage');
  const world = reel.querySelector('.reel-world');
  const [lineA, lineB] = reel.querySelectorAll('.reel-line');
  const caption = reel.querySelector('.reel-caption');
  const status = reel.querySelector('.reel-status');
  const label = reel.querySelector('.reel-label');
  const projectDialog = document.querySelector('#projectDialog');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const previews = new Set(['revenant', 'ritual', 'heavener', 'mo']);

  const works = [...document.querySelectorAll('.work-card[data-project]')].map((card, index) => ({
    key: card.dataset.project,
    title: card.querySelector('h3')?.textContent.trim() || card.dataset.project,
    kind: card.querySelector('.eyebrow')?.textContent.trim() || '',
    poster: card.querySelector('img')?.getAttribute('src'),
    number: String(index + 1).padStart(2, '0')
  }));
  const total = String(works.length).padStart(2, '0');
  caption.querySelector('span').textContent = ` — ${total} WORKS`;

  const cards = works.map(work => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'reel-card';
    button.setAttribute('aria-label', `${work.title} 상세 보기`);
    const media = document.createElement('span');
    media.className = 'reel-card__media';
    const still = document.createElement('img');
    still.src = work.poster;
    still.alt = '';
    still.decoding = 'async';
    still.draggable = false;
    media.append(still);
    let video;
    if (previews.has(work.key)) {
      video = document.createElement('video');
      video.src = `media/previews/${work.key}.mp4`;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.setAttribute('aria-hidden', 'true');
      video.addEventListener('playing', () => video.classList.add('is-playing'));
      media.append(video);
    }
    const meta = document.createElement('span');
    meta.className = 'reel-card__meta';
    meta.innerHTML = `<b>${work.number}</b>`;
    meta.append(work.title);
    button.append(media, meta);
    button.addEventListener('click', () => {
      showProject(work.key, button);
      if (projectDialog?.open) projectDialog.addEventListener('close', () => button.focus({ preventScroll: true }), { once: true });
    });
    button.addEventListener('pointerenter', () => showLabel(work));
    button.addEventListener('pointerleave', hideLabel);
    world.append(button);
    return { button, video, work };
  });

  let view;
  let target = 0;
  let progress = 0;
  let frame = 0;
  let inView = false;
  let lastStatus = '';

  function layout() {
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    const narrow = w / h < .9;
    const P = Math.max(700, h * 1.15);
    const cardW = narrow ? Math.min(w * .62, 420) : Math.min(w * .3, 520);
    const cardH = cardW * 10 / 16;
    stage.style.perspective = `${P}px`;
    reel.style.setProperty('--card-w', `${cardW}px`);
    reel.style.setProperty('--card-h', `${cardH}px`);

    // The rail starts small at the bottom right, sweeps close across the middle,
    // wraps past the left edge and recedes along the top towards the right.
    const a0 = -.85 * Math.PI;
    const a1 = 1.3 * Math.PI;
    const near = P * (narrow ? .9 : .78);
    const far = P * (narrow ? 3.6 : 6.5);
    const spread = narrow ? .62 : .47;
    const rail = [];
    const lengths = [0];
    const samples = 900;
    for (let index = 0; index <= samples; index++) {
      const u = index / samples;
      const a = a0 + (a1 - a0) * u;
      const depth = near + (far - near) * ((1 - Math.cos(a)) / 2) ** .8;
      const sx = -Math.sin(a) * w * spread;
      const sy = h * (.34 - .7 * u);
      const point = [sx * depth / P, sy * depth / P, P - depth];
      if (index) {
        const prev = rail[index - 1];
        lengths.push(lengths[index - 1] + Math.hypot(point[0] - prev[0], point[1] - prev[1], point[2] - prev[2]));
      }
      rail.push(point);
    }

    const cols = narrow ? 3 : 5;
    const rows = Math.ceil(works.length / cols);
    const gridW = w * (narrow ? .92 : .8);
    let gap = gridW * .018;
    let cellW = (gridW - gap * (cols - 1)) / cols;
    let cellH = cellW * 10 / 16;
    let rowGap = gap * 1.25 + 26;
    const usable = h - (narrow ? 210 : 230);
    const fit = Math.min(1, usable / (rows * cellH + (rows - 1) * rowGap));
    cellW *= fit;
    cellH *= fit;
    gap *= fit;
    rowGap = gap * 1.25 + 26;
    const gridH = rows * cellH + (rows - 1) * rowGap;
    const grid = works.map((_, index) => {
      const row = Math.floor(index / cols);
      const inRow = Math.min(cols, works.length - row * cols);
      const col = index % cols;
      const rowW = inRow * cellW + (inRow - 1) * gap;
      return [-rowW / 2 + cellW / 2 + col * (cellW + gap), -gridH / 2 + cellH / 2 + row * (cellH + rowGap) + h * .015, 0];
    });

    const step = cardW * 1.07;
    const landSpan = cardW * 3;
    const length = lengths[samples];
    view = { P, cardW, rail, lengths, length, grid, gridScale: cellW / cardW, step, landSpan,
      travel: length + (works.length - 1) * step + landSpan };
    render(true);
  }

  function railPose(s) {
    const { rail, lengths } = view;
    let low = 0;
    let high = lengths.length - 1;
    while (high - low > 1) {
      const mid = (low + high) >> 1;
      if (lengths[mid] < s) low = mid;
      else high = mid;
    }
    const t = (s - lengths[low]) / Math.max(1e-6, lengths[high] - lengths[low]);
    const position = rail[low].map((value, axis) => value + (rail[high][axis] - value) * t);
    const before = rail[Math.max(0, low - 2)];
    const after = rail[Math.min(rail.length - 1, high + 2)];
    let tangent = normalize(after.map((value, axis) => value - before[axis]));
    const down = [0, 1, 0];
    const up = normalize(down.map((value, axis) => value - tangent[axis] * dot(down, tangent)));
    let normal = cross(tangent, up);
    const toCamera = [-position[0], -position[1], view.P - position[2]];
    if (dot(normal, toCamera) < 0) {
      tangent = tangent.map(value => -value);
      normal = normal.map(value => -value);
    }
    return { position, tangent, up, normal, scale: 1 };
  }

  function blendPose(from, to, e) {
    const tangent = normalize(from.tangent.map((value, axis) => value + (to.tangent[axis] - value) * e));
    let up = from.up.map((value, axis) => value + (to.up[axis] - value) * e);
    up = normalize(up.map((value, axis) => value - tangent[axis] * dot(up, tangent)));
    const position = from.position.map((value, axis) => value + (to.position[axis] - value) * e);
    position[2] += Math.sin(Math.PI * e) * view.P * .12;
    return { position, tangent, up, normal: cross(tangent, up), scale: from.scale + (to.scale - from.scale) * e };
  }

  function render(force) {
    if (!view) return;
    const p = progress;
    const head = view.travel * clamp((p - .03) / .85);
    let nearest;
    cards.forEach(({ button, work }, index) => {
      const s = head - index * view.step;
      let pose;
      let opacity = 1;
      if (s <= view.length) {
        pose = railPose(Math.max(0, s));
        opacity = smooth(clamp(s / (view.cardW * 1.6)));
        if (s > 0 && (!nearest || pose.position[2] > nearest.z)) nearest = { z: pose.position[2], work };
      } else {
        const landed = { position: view.grid[index], tangent: [1, 0, 0], up: [0, 1, 0], normal: [0, 0, 1], scale: view.gridScale };
        pose = blendPose(railPose(view.length), landed, easeOut(clamp((s - view.length) / view.landSpan)));
      }
      const { tangent: t, up: u, normal: n, position: o, scale: k } = pose;
      button.style.transform = `matrix3d(${t[0] * k},${t[1] * k},${t[2] * k},0,${u[0] * k},${u[1] * k},${u[2] * k},0,${n[0] * k},${n[1] * k},${n[2] * k},0,${o[0]},${o[1]},${o[2]},1)`;
      button.style.opacity = opacity.toFixed(3);
      button.style.visibility = opacity < .01 ? 'hidden' : '';
    });

    const sweep = clamp(p / .62);
    lineA.style.transform = `translate3d(${-48 + sweep * 118}vw,0,0)`;
    lineB.style.transform = `translate3d(${48 - sweep * 118}vw,0,0)`;
    const fade = 1 - smooth(clamp((p - .6) / .14));
    lineA.style.opacity = lineB.style.opacity = fade.toFixed(3);
    caption.style.opacity = (1 - smooth(clamp((p - .5) / .1))).toFixed(3);
    reel.toggleAttribute('data-landed', p > .9);

    const text = p > .9 ? `${total} WORKS — 카드를 눌러 자세히 보기`
      : nearest ? `${nearest.work.number} / ${total} — ${nearest.work.title}`
        : p > .3 ? `${total} WORKS` : 'SCROLL TO PLAY';
    if (force || text !== lastStatus) status.textContent = lastStatus = text;
  }

  function measure() {
    const rect = reel.getBoundingClientRect();
    const travel = Math.max(1, reel.offsetHeight - stage.offsetHeight);
    target = motion.matches ? 1 : clamp(-rect.top / travel);
  }

  function tick() {
    frame = 0;
    measure();
    const delta = target - progress;
    progress = Math.abs(delta) < .0004 ? target : progress + delta * .1;
    render();
    if (inView && progress !== target) frame = requestAnimationFrame(tick);
  }
  function wake() {
    if (!frame && inView) frame = requestAnimationFrame(tick);
  }

  function syncVideos() {
    const play = inView && !motion.matches && !document.hidden && !projectDialog?.open;
    for (const { video } of cards) {
      if (!video) continue;
      if (play) video.play().catch(() => {});
      else if (!video.paused) video.pause();
    }
  }

  function showLabel(work) {
    if (!reel.hasAttribute('data-landed')) return;
    label.innerHTML = `<b>${work.number}</b>`;
    label.append(work.title, Object.assign(document.createElement('small'), { textContent: work.kind }));
    label.hidden = false;
  }
  function hideLabel() { label.hidden = true; }
  stage.addEventListener('pointermove', event => {
    const bounds = stage.getBoundingClientRect();
    label.style.translate = `${event.clientX - bounds.left + 16}px ${event.clientY - bounds.top + 18}px`;
  }, { passive: true });

  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    syncVideos();
    wake();
  }).observe(reel);
  addEventListener('scroll', wake, { passive: true });
  new ResizeObserver(() => { layout(); wake(); }).observe(stage);
  document.addEventListener('visibilitychange', syncVideos);
  if (projectDialog) new MutationObserver(syncVideos).observe(projectDialog, { attributes: true, attributeFilter: ['open'] });
  function syncMotion() {
    reel.classList.toggle('is-static', motion.matches);
    measure();
    progress = target;
    layout();
    syncVideos();
  }
  motion.addEventListener('change', syncMotion);
  syncMotion();
  reel.classList.add('is-ready');
}

function clamp(value) { return Math.min(1, Math.max(0, value)); }
function smooth(t) { return t * t * (3 - 2 * t); }
function easeOut(t) { return 1 - (1 - t) ** 3; }
function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
function cross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
function normalize(v) {
  const length = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / length, v[1] / length, v[2] / length];
}
