const video = document.querySelector('#heroVideo');
const hero = document.querySelector('.hero');
const canvas = document.querySelector('#video-particles');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

if (video && hero && canvas) {
  const mobilePreference = window.matchMedia('(max-width: 620px)');
  const context = canvas.getContext('2d', { alpha: true, desynchronized: true });
  const sampleCanvas = document.createElement('canvas');
  const sampleContext = sampleCanvas.getContext('2d', { willReadFrequently: true, alpha: false });
  let cssWidth = 0;
  let cssHeight = 0;
  let pixelRatio = 1;
  let sampledAt = -1;
  let samples = [];
  let lastPointer = null;
  let pointer = { x: 0, y: 0, speed: 0 };
  let intensity = 0;
  let frameRequest = 0;
  let lastFrame = 0;
  let failed = false;

  function selectVideoSource() {
    const isMobile = mobilePreference.matches;
    const nextPath = isMobile ? 'media/loathe-hero-mobile.mp4' : 'media/loathe-hero-desktop.mp4';
    const nextPoster = isMobile ? 'media/loathe-poster-mobile.jpg' : 'media/loathe-poster-desktop.jpg';
    const expected = new URL(nextPath, document.baseURI).href;
    video.poster = nextPoster;
    if (video.src !== expected) {
      video.pause();
      video.src = nextPath;
      video.load();
    }
    if (!motionPreference.matches) video.play().catch(() => {});
  }

  function resizeCanvas() {
    const bounds = hero.getBoundingClientRect();
    cssWidth = Math.max(1, bounds.width);
    cssHeight = Math.max(1, bounds.height);
    pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(cssWidth * pixelRatio);
    canvas.height = Math.round(cssHeight * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    sampleCanvas.width = mobilePreference.matches ? 176 : 320;
    sampleCanvas.height = Math.max(90, Math.round(sampleCanvas.width * cssHeight / cssWidth));
    sampledAt = -1;
    samples = [];
    if (intensity > 0 && !motionPreference.matches) requestDraw();
  }

  function sampleVideo() {
    if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || !video.videoWidth || !video.videoHeight) return;
    if (sampledAt === video.currentTime && samples.length) return;
    try {
      const targetAspect = sampleCanvas.width / sampleCanvas.height;
      const sourceAspect = video.videoWidth / video.videoHeight;
      let sx = 0, sy = 0, sw = video.videoWidth, sh = video.videoHeight;
      if (sourceAspect > targetAspect) {
        sw = video.videoHeight * targetAspect;
        sx = (video.videoWidth - sw) / 2;
      } else {
        sh = video.videoWidth / targetAspect;
        sy = (video.videoHeight - sh) / 2;
      }
      sampleContext.drawImage(video, sx, sy, sw, sh, 0, 0, sampleCanvas.width, sampleCanvas.height);
      const pixels = sampleContext.getImageData(0, 0, sampleCanvas.width, sampleCanvas.height).data;
      const step = 2;
      const scaleX = cssWidth / sampleCanvas.width;
      const scaleY = cssHeight / sampleCanvas.height;
      const next = [];
      for (let y = 0; y < sampleCanvas.height; y += step) {
        for (let x = 0; x < sampleCanvas.width; x += step) {
          const offset = (y * sampleCanvas.width + x) * 4;
          next.push(x * scaleX, y * scaleY, pixels[offset], pixels[offset + 1], pixels[offset + 2]);
        }
      }
      samples = next;
      sampledAt = video.currentTime;
    } catch {
      failed = true;
    }
  }

  function clearBurst() {
    context.clearRect(0, 0, cssWidth, cssHeight);
    canvas.classList.remove('is-active');
    video.classList.remove('is-disturbed');
    video.style.removeProperty('--pointer-x');
    video.style.removeProperty('--pointer-y');
    video.style.removeProperty('--hole-core');
    video.style.removeProperty('--hole-edge');
  }

  function renderFrame(now) {
    frameRequest = 0;
    if (motionPreference.matches || failed) {
      clearBurst();
      return;
    }
    const dt = lastFrame ? Math.min((now - lastFrame) / 1000, 0.05) : 0.016;
    lastFrame = now;
    intensity = Math.max(0, intensity - dt * 0.82);
    if (intensity <= 0.015) {
      intensity = 0;
      clearBurst();
      return;
    }

    sampleVideo();
    if (!samples.length || !pointer) {
      requestDraw();
      return;
    }
    const bounds = hero.getBoundingClientRect();
    pointer.x = Math.max(0, Math.min(cssWidth, pointer.x));
    pointer.y = Math.max(0, Math.min(cssHeight, pointer.y));
    canvas.classList.add('is-active');
    video.classList.add('is-disturbed');
    video.style.setProperty('--pointer-x', `${pointer.x}px`);
    video.style.setProperty('--pointer-y', `${pointer.y}px`);
    const radius = 102 + intensity * 122;
    video.style.setProperty('--hole-core', `${28 + intensity * 38}px`);
    video.style.setProperty('--hole-edge', `${Math.round(radius * 0.76)}px`);
    context.clearRect(0, 0, cssWidth, cssHeight);
    context.globalCompositeOperation = 'screen';
    const sampleRadius = radius * 1.5;
    const time = now * 0.001;
    const movement = Math.min(pointer.speed, 850);
    for (let i = 0; i < samples.length; i += 5) {
      const x = samples[i];
      const y = samples[i + 1];
      const dx = x - pointer.x;
      const dy = y - pointer.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance > sampleRadius) continue;
      const falloff = Math.max(0, 1 - distance / sampleRadius);
      const push = intensity * falloff * (24 + Math.min(65, movement * 0.085));
      const invDistance = 1 / Math.max(1, distance);
      const noise = Math.sin(time * 3.1 + i * 0.013) * push * 0.21;
      const drawX = x + dx * invDistance * push - dy * invDistance * noise;
      const drawY = y + dy * invDistance * push + dx * invDistance * noise;
      const alpha = Math.min(0.92, intensity * (0.28 + falloff * 0.68));
      const size = 1.15 + falloff * 1.8;
      context.fillStyle = `rgba(${samples[i + 2]},${samples[i + 3]},${samples[i + 4]},${alpha})`;
      context.fillRect(drawX, drawY, size, size);
    }
    context.globalCompositeOperation = 'source-over';
    requestDraw();
  }

  function requestDraw() {
    if (!frameRequest && !motionPreference.matches) frameRequest = requestAnimationFrame(renderFrame);
  }

  function updatePointer(event) {
    if (motionPreference.matches || event.target.closest('a,button')) return;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const now = performance.now();
    if (lastPointer) {
      const elapsed = Math.max(8, now - lastPointer.time);
      const dx = x - lastPointer.x;
      const dy = y - lastPointer.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 1) return;
      pointer.speed = Math.min(1200, distance / (elapsed / 1000));
      intensity = Math.max(intensity, Math.min(1, 0.58 + distance * 0.004));
    } else {
      pointer.speed = 120;
      intensity = 0.76;
    }
    pointer.x = x;
    pointer.y = y;
    lastPointer = { x, y, time: now };
    requestDraw();
  }

  function onMotionPreferenceChange() {
    if (motionPreference.matches) {
      video.pause();
      intensity = 0;
      if (frameRequest) cancelAnimationFrame(frameRequest);
      frameRequest = 0;
      clearBurst();
      canvas.hidden = true;
    } else {
      canvas.hidden = false;
      selectVideoSource();
    }
  }

  selectVideoSource();
  resizeCanvas();
  hero.addEventListener('pointermove', updatePointer, { passive: true });
  hero.addEventListener('pointerdown', updatePointer, { passive: true });
  hero.addEventListener('pointerleave', () => { lastPointer = null; }, { passive: true });
  window.addEventListener('resize', () => {
    resizeCanvas();
    selectVideoSource();
  }, { passive: true });
  motionPreference.addEventListener?.('change', onMotionPreferenceChange);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      video.pause();
      intensity = 0;
      clearBurst();
    } else if (!motionPreference.matches) {
      video.play().catch(() => {});
    }
  });

  const videoObserver = new IntersectionObserver(entries => {
    const visible = entries[0]?.isIntersecting;
    if (!visible) {
      video.pause();
      intensity = 0;
      clearBurst();
    } else if (!motionPreference.matches) {
      video.play().catch(() => {});
    }
  }, { threshold: 0.03 });
  videoObserver.observe(hero);
  if (motionPreference.matches) onMotionPreferenceChange();
}
