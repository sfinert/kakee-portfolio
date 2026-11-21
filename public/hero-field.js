import * as THREE from 'three';

const hero = document.querySelector('.hero');
if (hero) setupHero(hero);

function setupHero(hero) {
  const stage = hero.querySelector('.hero__stage');
  const frame = hero.querySelector('.hero__frame');
  const canvas = hero.querySelector('#heroField');
  const video = hero.querySelector('#heroVideo');
  const play = hero.querySelector('.hero__play');
  const sound = hero.querySelector('.hero__sound');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');

  let visible = stage.getBoundingClientRect().bottom > 0;
  let pageActive = true;
  let manualPlay;
  let playbackRevision = 0;
  let field;
  let loadingField = false;
  video.volume = .22;

  function syncControls() {
    const playLabel = video.paused ? '재생' : '일시정지';
    const soundLabel = video.muted ? '소리 켜기' : '소리 끄기';
    hero.toggleAttribute('data-playing', !video.paused);
    hero.toggleAttribute('data-audible', !video.muted);
    play.title = playLabel;
    play.setAttribute('aria-label', playLabel);
    sound.title = soundLabel;
    sound.setAttribute('aria-label', soundLabel);
  }

  function syncPlayback(allowSilentFallback = true) {
    const revision = ++playbackRevision;
    if (!visible || !pageActive || document.hidden || !(manualPlay ?? !motion.matches)) {
      if (!video.paused) video.pause();
      syncControls();
      return;
    }
    video.play().catch(error => {
      if (revision !== playbackRevision) return;
      if (allowSilentFallback && error.name === 'NotAllowedError' && !video.muted) {
        video.muted = true;
        syncControls();
        video.play().catch(syncControls);
      } else {
        syncControls();
      }
    });
  }

  play.addEventListener('click', () => {
    manualPlay = video.paused;
    syncPlayback(false);
  });
  sound.addEventListener('click', () => {
    video.muted = !video.muted;
    if (!video.muted) {
      manualPlay = true;
      syncPlayback(false);
    }
    syncControls();
  });
  for (const event of ['play', 'pause', 'volumechange']) {
    video.addEventListener(event, syncControls);
  }
  document.addEventListener('visibilitychange', () => {
    syncPlayback();
    field?.requestDraw();
  });
  window.addEventListener('pagehide', () => {
    pageActive = false;
    syncPlayback();
  });
  window.addEventListener('pageshow', event => {
    if (!event.persisted) return;
    pageActive = true;
    syncPlayback();
    field?.requestDraw();
  });
  new IntersectionObserver(([entry]) => {
    visible = entry.intersectionRatio >= .12;
    syncPlayback();
    field?.requestDraw();
  }, { threshold: .12 }).observe(stage);

  function showField() {
    if (motion.matches) {
      canvas.hidden = true;
      hero.removeAttribute('data-scene');
      return;
    }
    if (field) {
      canvas.hidden = false;
      field.requestDraw();
    } else if (window.REVENANT_CORRIDOR) {
      try {
        field = startField(window.REVENANT_CORRIDOR, {
          hero, stage, frame, canvas, video,
          isVisible: () => visible && pageActive && !motion.matches
        });
        canvas.hidden = false;
        field.requestDraw();
      } catch (error) {
        console.warn('Revenant 3D scene unavailable:', error);
      }
    } else if (!loadingField) {
      loadingField = true;
      const script = document.createElement('script');
      script.src = 'assets/revenant-corridor-data.js';
      script.fetchPriority = 'low';
      script.addEventListener('load', showField, { once: true });
      document.head.append(script);
    }
  }

  frame.addEventListener('pointermove', event => field?.move(event), { passive: true });
  frame.addEventListener('pointerdown', event => field?.move(event), { passive: true });
  for (const event of ['pointerleave', 'pointercancel', 'pointerup']) {
    frame.addEventListener(event, () => field?.release(), { passive: true });
  }
  motion.addEventListener('change', () => {
    syncPlayback();
    showField();
  });
  syncControls();
  syncPlayback();
  showField();
}

function buildPoints({ subject, corridor }) {
  const positions = subject.points.slice();
  const states = [];
  let seed = 617;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let index = 0; index < positions.length; index += 3) {
    states.push(1, .25 + random() * .75, random());
  }

  const floor = corridor.floorBounds[0][1];
  for (let index = 0; index < subject.points.length; index += 12) {
    const [x, y, z] = subject.points.slice(index, index + 3);
    positions.push(x, floor * 2 - y, z);
    states.push(2, .3 + random() * .7, random());
  }

  const { min, max } = corridor.walkBounds;
  for (let index = 0; index < 2650; index++) {
    const side = index % 2 ? min[0] : max[0];
    const x = index % 3 ? THREE.MathUtils.lerp(side, subject.center[0], random() ** 2 * .6)
      : THREE.MathUtils.lerp(min[0], max[0], random());
    const y = THREE.MathUtils.lerp(min[1] + .08, max[1] - .09, random());
    const z = THREE.MathUtils.lerp(min[2], max[2], random());
    positions.push(x, y, z);
    states.push(0, .22 + random() * .78, random());
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('aState', new THREE.Float32BufferAttribute(states, 3));
  return geometry;
}

const FILL_WIDTH = 256;
const FILL_HEIGHT = 144;

function maxFilter(source, radius) {
  const rows = new Float32Array(source.length);
  const out = new Float32Array(source.length);
  for (let y = 0; y < FILL_HEIGHT; y++) {
    for (let x = 0; x < FILL_WIDTH; x++) {
      let value = 0;
      for (let k = Math.max(0, x - radius); k <= Math.min(FILL_WIDTH - 1, x + radius); k++) value = Math.max(value, source[y * FILL_WIDTH + k]);
      rows[y * FILL_WIDTH + x] = value;
    }
  }
  for (let y = 0; y < FILL_HEIGHT; y++) {
    for (let x = 0; x < FILL_WIDTH; x++) {
      let value = 0;
      for (let k = Math.max(0, y - radius); k <= Math.min(FILL_HEIGHT - 1, y + radius); k++) value = Math.max(value, rows[k * FILL_WIDTH + x]);
      out[y * FILL_WIDTH + x] = value;
    }
  }
  return out;
}

function boxBlur(source, radius) {
  const span = radius * 2 + 1;
  const rows = new Float32Array(source.length);
  const out = new Float32Array(source.length);
  for (let y = 0; y < FILL_HEIGHT; y++) {
    for (let x = 0; x < FILL_WIDTH; x++) {
      let sum = 0;
      for (let k = -radius; k <= radius; k++) sum += source[y * FILL_WIDTH + Math.min(FILL_WIDTH - 1, Math.max(0, x + k))];
      rows[y * FILL_WIDTH + x] = sum / span;
    }
  }
  for (let y = 0; y < FILL_HEIGHT; y++) {
    for (let x = 0; x < FILL_WIDTH; x++) {
      let sum = 0;
      for (let k = -radius; k <= radius; k++) sum += rows[Math.min(FILL_HEIGHT - 1, Math.max(0, y + k)) * FILL_WIDTH + x];
      out[y * FILL_WIDTH + x] = sum / span;
    }
  }
  return out;
}

// Fills masked pixels from their surroundings with a weighted mip pyramid (push-pull).
function pushPull(color, weight) {
  const levels = [{ width: FILL_WIDTH, height: FILL_HEIGHT, color, weight }];
  while (levels.at(-1).width > 1 || levels.at(-1).height > 1) {
    const fine = levels.at(-1);
    const width = Math.ceil(fine.width / 2);
    const height = Math.ceil(fine.height / 2);
    const coarse = { width, height, color: new Float32Array(width * height * 3), weight: new Float32Array(width * height) };
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let w = 0;
        let r = 0;
        let g = 0;
        let b = 0;
        for (let dy = 0; dy < 2; dy++) {
          for (let dx = 0; dx < 2; dx++) {
            const fx = x * 2 + dx;
            const fy = y * 2 + dy;
            if (fx >= fine.width || fy >= fine.height) continue;
            const index = fy * fine.width + fx;
            const fw = fine.weight[index];
            w += fw;
            r += fine.color[index * 3] * fw;
            g += fine.color[index * 3 + 1] * fw;
            b += fine.color[index * 3 + 2] * fw;
          }
        }
        const index = y * width + x;
        coarse.weight[index] = Math.min(1, w);
        if (w > 0) {
          coarse.color[index * 3] = r / w;
          coarse.color[index * 3 + 1] = g / w;
          coarse.color[index * 3 + 2] = b / w;
        }
      }
    }
    levels.push(coarse);
  }
  for (let level = levels.length - 2; level >= 0; level--) {
    const fine = levels[level];
    const coarse = levels[level + 1];
    for (let y = 0; y < fine.height; y++) {
      for (let x = 0; x < fine.width; x++) {
        const index = y * fine.width + x;
        const keep = fine.weight[index];
        if (keep >= 1) continue;
        const cx = Math.min(coarse.width - 1, Math.max(0, (x + .5) / 2 - .5));
        const cy = Math.min(coarse.height - 1, Math.max(0, (y + .5) / 2 - .5));
        const x0 = Math.floor(cx);
        const y0 = Math.floor(cy);
        const x1 = Math.min(coarse.width - 1, x0 + 1);
        const y1 = Math.min(coarse.height - 1, y0 + 1);
        const tx = cx - x0;
        const ty = cy - y0;
        for (let channel = 0; channel < 3; channel++) {
          const at = (px, py) => coarse.color[(py * coarse.width + px) * 3 + channel];
          const value = (at(x0, y0) * (1 - tx) + at(x1, y0) * tx) * (1 - ty) + (at(x0, y1) * (1 - tx) + at(x1, y1) * tx) * ty;
          fine.color[index * 3 + channel] = fine.color[index * 3 + channel] * keep + value * (1 - keep);
        }
        fine.weight[index] = 1;
      }
    }
  }
  return color;
}

// The video's floating figure and its floor reflection would smear across the room once the
// camera moves, so their area is replaced with the surrounding corridor, refilled from the live frame.
function createFigureFill(points, floorY, matrix) {
  const size = FILL_WIDTH * FILL_HEIGHT;
  const body = new Float32Array(size);
  const mirrored = new Float32Array(size);
  const point = new THREE.Vector3();
  for (let index = 0; index < points.length; index += 3) {
    for (const [target, y] of [[body, points[index + 1]], [mirrored, floorY * 2 - points[index + 1]]]) {
      point.set(points[index], y, points[index + 2]).applyMatrix4(matrix);
      const x = Math.floor((point.x * .5 + .5) * FILL_WIDTH);
      const row = Math.floor((point.y * .5 + .5) * FILL_HEIGHT);
      if (x >= 0 && x < FILL_WIDTH && row >= 0 && row < FILL_HEIGHT) target[row * FILL_WIDTH + x] = 1;
    }
  }
  // The figure barely moves in the film, so its sampled surface (and the mirrored copy for the
  // blurrier floor reflection) marks it well; the hole is wider than the soft mask so the fill
  // only borrows clean corridor pixels.
  const mirrorCore = maxFilter(mirrored, 6);
  const combined = maxFilter(body, 4).map((value, index) => Math.max(value, mirrorCore[index]));
  const soft = boxBlur(boxBlur(combined, 2), 2);
  const hole = maxFilter(combined, 9);
  const holeWeight = hole.map(value => value > 0 ? 0 : 1);
  const maskData = new Uint8Array(size * 4);
  soft.forEach((value, index) => { maskData[index * 4] = Math.round(Math.min(1, value * 1.5) * 255); });
  const mask = new THREE.DataTexture(maskData, FILL_WIDTH, FILL_HEIGHT);
  mask.magFilter = mask.minFilter = THREE.LinearFilter;
  mask.needsUpdate = true;
  const fillData = new Uint8Array(size * 4);
  const fill = new THREE.DataTexture(fillData, FILL_WIDTH, FILL_HEIGHT);
  fill.magFilter = fill.minFilter = THREE.LinearFilter;
  const reader = document.createElement('canvas');
  reader.width = FILL_WIDTH;
  reader.height = FILL_HEIGHT;
  const context = reader.getContext('2d', { willReadFrequently: true });
  const frame = new Float32Array(size * 3);

  function refresh(video) {
    context.drawImage(video, 0, 0, FILL_WIDTH, FILL_HEIGHT);
    const pixels = context.getImageData(0, 0, FILL_WIDTH, FILL_HEIGHT).data;
    for (let row = 0; row < FILL_HEIGHT; row++) {
      const y = FILL_HEIGHT - 1 - row;
      for (let x = 0; x < FILL_WIDTH; x++) {
        const source = (row * FILL_WIDTH + x) * 4;
        const index = y * FILL_WIDTH + x;
        frame[index * 3] = pixels[source];
        frame[index * 3 + 1] = pixels[source + 1];
        frame[index * 3 + 2] = pixels[source + 2];
      }
    }
    const filled = pushPull(frame, holeWeight.slice());
    for (let index = 0; index < size; index++) {
      fillData[index * 4] = filled[index * 3];
      fillData[index * 4 + 1] = filled[index * 3 + 1];
      fillData[index * 4 + 2] = filled[index * 3 + 2];
      fillData[index * 4 + 3] = 255;
    }
    fill.needsUpdate = true;
  }

  return { mask, fill, refresh };
}

// Projects the playing hero video from the original Blender camera onto the corridor mesh,
// so the room keeps the rendered textures and lighting as the camera dollies in.
function createVideoProjection(video, original, origin, orientation, subject, floorY) {
  const materials = [];
  const projector = new THREE.PerspectiveCamera(original.verticalFov, original.aspect, .3, 60);
  projector.position.copy(origin);
  projector.quaternion.copy(orientation);
  projector.updateMatrixWorld();
  projector.updateProjectionMatrix();

  // Distance from the projector, packed into two 8-bit channels, decides which surface owns each video pixel.
  const depthTarget = new THREE.WebGLRenderTarget(1280, 720, {
    stencilBuffer: false, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter
  });
  const placeholder = new THREE.DataTexture(new Uint8Array(4), 1, 1);
  placeholder.needsUpdate = true;
  const uniforms = {
    uProjTex: { value: placeholder },
    uProjDepth: { value: depthTarget.texture },
    uProjMatrix: { value: new THREE.Matrix4().multiplyMatrices(projector.projectionMatrix, projector.matrixWorldInverse) },
    uProjPos: { value: projector.position.clone() },
    uProjFar: { value: projector.far },
    uProjMix: { value: 0 },
    uProjMask: { value: placeholder },
    uProjFill: { value: placeholder }
  };
  const figure = createFigureFill(subject.points, floorY, uniforms.uProjMatrix.value);
  let usable;
  let filledAt = -1;

  function patch(material, index) {
    const previous = material.onBeforeCompile;
    material.customProgramCacheKey = () => 'video-projection-' + index;
    material.onBeforeCompile = (shader, renderer) => {
      previous.call(material, shader, renderer);
      Object.assign(shader.uniforms, uniforms);
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vProjWorld;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvProjWorld = (modelMatrix * vec4(transformed, 1.)).xyz;');
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>
          varying vec3 vProjWorld;
          uniform sampler2D uProjTex, uProjDepth, uProjMask, uProjFill;
          uniform mat4 uProjMatrix;
          uniform vec3 uProjPos;
          uniform float uProjFar, uProjMix;`)
        .replace('#include <output_fragment>', `
          vec4 projClip = uProjMatrix * vec4(vProjWorld, 1.);
          vec3 projNdc = projClip.xyz / max(projClip.w, 1e-4);
          vec2 projUv = projNdc.xy * .5 + .5;
          vec2 projEdge = smoothstep(vec2(0.), vec2(.006), projUv) * smoothstep(vec2(0.), vec2(.006), 1. - projUv);
          float projFragDepth = distance(vProjWorld, uProjPos);
          vec2 projPacked = texture2D(uProjDepth, projUv).rg;
          float projSceneDepth = (projPacked.r + projPacked.g / 255.) * uProjFar;
          float projVisible = 1. - smoothstep(.03, .12, projFragDepth - projSceneDepth - projFragDepth * .006);
          vec3 projNormal = normalize(cross(dFdx(vProjWorld), dFdy(vProjWorld)));
          float projFacing = smoothstep(.05, .2, abs(dot(projNormal, normalize(uProjPos - vProjWorld))));
          float projWeight = uProjMix * step(0., projClip.w) * projEdge.x * projEdge.y * projVisible * projFacing;
          vec3 projSource = mix(texture2D(uProjTex, projUv).rgb, texture2D(uProjFill, projUv).rgb, texture2D(uProjMask, projUv).r);          vec3 projLinear = pow(projSource, vec3(2.2));
          outgoingLight = mix(outgoingLight, projLinear, projWeight);
          #include <output_fragment>`)
        .replace('#include <fog_fragment>', `#include <fog_fragment>
          gl_FragColor.rgb = mix(gl_FragColor.rgb, linearToOutputTexel(vec4(projLinear, 1.)).rgb, projWeight);`);
    };
    material.needsUpdate = true;
  }

  function attach(renderer, scene) {
    materials.forEach(patch);
    const occluder = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: { uProjPos: uniforms.uProjPos, uProjFar: uniforms.uProjFar },
      vertexShader: `
        varying vec3 vWorld;
        void main() {
          vec4 world = modelMatrix * vec4(position, 1.);
          vWorld = world.xyz;
          gl_Position = projectionMatrix * viewMatrix * world;
        }`,
      fragmentShader: `
        uniform vec3 uProjPos;
        uniform float uProjFar;
        varying vec3 vWorld;
        void main() {
          float d = clamp(distance(vWorld, uProjPos) / uProjFar, 0., 1.) * 255.;
          gl_FragColor = vec4(floor(d) / 255., fract(d), 0., 1.);
        }`
    });
    const background = scene.background;
    scene.background = null;
    scene.overrideMaterial = occluder;
    renderer.setRenderTarget(depthTarget);
    renderer.setClearColor(0xffffff, 1);
    renderer.clear();
    renderer.render(scene, projector);
    renderer.setRenderTarget(null);
    scene.overrideMaterial = null;
    scene.background = background;
    occluder.dispose();
  }

  // A file:// page cannot upload its own video to WebGL; keep the flat palette there.
  function isUsable() {
    if (usable !== undefined || video.readyState < 2) return usable;
    try {
      const probe = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
      probe.drawImage(video, 0, 0, 1, 1);
      probe.getImageData(0, 0, 1, 1);
      usable = true;
    } catch {
      usable = false;
    }
    if (usable) {
      const texture = new THREE.VideoTexture(video);
      texture.minFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      uniforms.uProjTex.value = texture;
    }
    return usable;
  }

  function update(ease, active) {
    const ready = isUsable();
    uniforms.uProjMix.value += ((ready ? 1 : 0) - uniforms.uProjMix.value) * ease;
    if (!ready || !active || Math.abs(video.currentTime - filledAt) < .045) return;
    filledAt = video.currentTime;
    figure.refresh(video);
    uniforms.uProjMask.value = figure.mask;
    uniforms.uProjFill.value = figure.fill;
  }

  return { materials, attach, update };
}

function startField(data, { hero, stage, frame, canvas, video, isVisible }) {
  THREE.ColorManagement.enabled = true;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.4));
  renderer.autoClear = false;

  const { camera: original, subject } = data;
  const camera = new THREE.PerspectiveCamera(original.verticalFov, original.aspect, .075, 80);
  const origin = new THREE.Vector3(...original.position);
  const orientation = new THREE.Quaternion(...original.quaternion).normalize();
  const direction = new THREE.Vector3(0, 0, -1).applyQuaternion(orientation);
  const pointer = new THREE.Vector2();
  const pointerTarget = new THREE.Vector2();

  const hall = new THREE.Scene();
  hall.background = new THREE.Color(0x283344);
  hall.fog = new THREE.Fog(0x394a5d, 14, 41);
  const palette = {
    floor: { color: 0x303a47, shininess: 34, specular: 0x263649 },
    wall: { color: 0x65717e, shininess: 26, specular: 0x293445 },
    door: { color: 0x283446, shininess: 35, specular: 0x283447 },
    detail: { color: 0x4d5b6a, shininess: 32 },
    fixture: { color: 0x9bb4bd, emissive: 0x8ca8bf, emissiveIntensity: .48 },
    mirror: { color: 0x7891a5, emissive: 0x63879c, emissiveIntensity: .57 }
  };
  const projection = createVideoProjection(video, original, origin, orientation, subject, data.corridor.floorBounds[0][1]);
  // The camera only dollies forward, so faces right at its start (the opposite mirror) are never seen.
  const behindCamera = origin.z - 1;
  for (const { kind, positions: source } of data.meshes) {
    const positions = [];
    for (let index = 0; index < source.length; index += 9) {
      if (source[index + 2] > behindCamera && source[index + 5] > behindCamera && source[index + 8] > behindCamera) continue;
      for (let offset = 0; offset < 9; offset++) positions.push(source[index + offset]);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.computeVertexNormals();
    const material = new THREE.MeshPhongMaterial({ ...palette[kind], side: THREE.DoubleSide });
    projection.materials.push(material);
    if (kind === 'floor') {
      material.onBeforeCompile = shader => {
        shader.vertexShader = shader.vertexShader
          .replace('#include <common>', '#include <common>\nvarying vec2 vFloorPosition;')
          .replace('#include <begin_vertex>', '#include <begin_vertex>\nvFloorPosition = position.xz;');
        shader.fragmentShader = shader.fragmentShader
          .replace('#include <common>', '#include <common>\nvarying vec2 vFloorPosition;')
          .replace('#include <output_fragment>', `
            vec2 floorLight = (vFloorPosition - vec2(-1.0, -19.0)) * vec2(.45, .09);
            float reflection = exp(-dot(floorLight, floorLight));
            outgoingLight += reflection * vec3(.065, .095, .14);
            #include <output_fragment>
          `);
      };
    }
    hall.add(new THREE.Mesh(geometry, material));
  }

  // Keep the source panel spacing without the original ceiling kit's overlapping faces.
  const ceilingMaterial = new THREE.MeshBasicMaterial({ color: 0x313b49 });
  ceilingMaterial.onBeforeCompile = shader => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vPanelPosition;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvPanelPosition = position.xz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vPanelPosition;')
      .replace('#include <color_fragment>', `
        #include <color_fragment>
        vec2 panels = (vPanelPosition - vec2(-2.2263, .4825)) / vec2(1.18, .6024);
        vec2 dist = .5 - abs(fract(panels) - .5);
        vec2 edge = smoothstep(vec2(.003), vec2(.017) + fwidth(panels), dist);
        float pattern = fract(sin(dot(floor(panels), vec2(31.72, 73.15))) * 4313.72);
        diffuseColor.rgb *= (.9 + .15 * pattern) * mix(.39, 1.0, edge.x * edge.y);
      `);
  };
  const ceiling = new THREE.PlaneGeometry(12.25, 31.6);
  ceiling.rotateX(Math.PI / 2).translate(-1, 3.53, -10.95);
  hall.add(new THREE.Mesh(ceiling, ceilingMaterial));
  projection.materials.push(ceilingMaterial);
  projection.attach(renderer, hall);

  hall.add(new THREE.HemisphereLight(0xd3e5f4, 0x546275, .77));
  const front = new THREE.DirectionalLight(0xe0f1ff, .61);
  front.position.set(-1.2, 7, 3);
  hall.add(front);
  const fill = new THREE.DirectionalLight(0xc3c2ef, .3);
  fill.position.set(3, 1, -18);
  hall.add(fill);
  const rear = new THREE.PointLight(0xc1e0ed, .66, 24);
  rear.position.set(subject.center[0], 2.55, -22);
  hall.add(rear);

  const cloud = new THREE.Scene();
  const uniforms = {
    uTime: { value: 0 },
    uPointer: { value: pointer },
    uPointerStrength: { value: 0 },
    uWholeScene: { value: 0 },
    uAspect: { value: 1 },
    uPixelRatio: { value: renderer.getPixelRatio() },
    uAudio: { value: new THREE.Vector3() },
    uSubject: { value: new THREE.Vector3(...subject.center) }
  };
  const pointsMaterial = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      attribute vec3 aState;
      uniform float uTime, uPointerStrength, uWholeScene, uAspect, uPixelRatio;
      uniform vec2 uPointer;
      uniform vec3 uAudio, uSubject;
      varying vec3 vColor;
      varying float vIntensity;
      void main() {
        float subject = step(.5, aState.x);
        float reflection = step(1.5, aState.x);
        float weight = aState.y;
        float seed = aState.z;
        float phase = uTime * (.4 + seed * .36) + position.z * .27 + seed * 6.28;
        vec3 p = position;
        p.xy += vec2(cos(phase), sin(phase * .81)) * mix(.075, .015, subject);
        p += (p - uSubject) * uAudio.x * .035 * subject;
        vec4 viewPoint = modelViewMatrix * vec4(p, 1.);
        vec4 projected = projectionMatrix * viewPoint;
        vec2 delta = projected.xy / max(projected.w, .01) - uPointer;
        vec2 screenDelta = delta * vec2(uAspect, 1.);
        float proximity = (1. - smoothstep(.012, .32, length(screenDelta))) * uPointerStrength * (1. - reflection);
        projected.xy += projected.w * delta * proximity * (.55 + .55 * subject);
        gl_Position = projected;

        float depth = -viewPoint.z;
        float edge = smoothstep(.35, 1.9, depth) * (1. - smoothstep(18., 33., depth));
        float flicker = .7 + .3 * sin(phase + seed * 16.);
        float pitch = step(.89, seed) * uAudio.z;
        vec3 violet = vec3(.69, .46, .98);
        vec3 teal = vec3(.35, .89, .92);
        float tint = .52 + .46 * sin(position.x * 1.05 + position.y * .78 + uTime * .24);
        vColor = mix(violet, teal, smoothstep(.07, .92, tint + (seed - .5) * .42 + .07 * uAudio.y));
        vColor = mix(vColor, vec3(.88, .95, 1.), proximity * .28 + pitch * .23);
        float presence = mix(.014 + .17 * uWholeScene, .12 + .58 * uWholeScene, subject);
        float reflectance = uWholeScene * .37 * (1. - smoothstep(.2, 2.7, abs(position.y)));
        vIntensity = mix(1., reflectance, reflection) * edge * weight * (.6 + .25 * flicker) *
          (presence + proximity * mix(.16, .7, subject) + pitch * (.15 + .4 * uWholeScene));
        gl_PointSize = uPixelRatio * clamp((4. + 11. * weight) / max(depth, 1.) +
          proximity * 1.4 + pitch * .75, .85, 3.4);
      }`,
    fragmentShader: `
      varying vec3 vColor;
      varying float vIntensity;
      void main() {
        float radius = length(gl_PointCoord - vec2(.5)) * 2.;
        float core = 1. - smoothstep(.07, .62, radius);
        float halo = (1. - smoothstep(.2, 1., radius)) * .24;
        gl_FragColor = vec4(vColor, min(.88, (core + halo) * vIntensity));
      }`
  });
  const cloudPoints = new THREE.Points(buildPoints(data), pointsMaterial);
  cloudPoints.frustumCulled = false;
  cloud.add(cloudPoints);

  // Composite one opaque render of the hall so room surfaces fade together.
  const buffer = new THREE.WebGLRenderTarget(1, 1, { stencilBuffer: false });
  const composite = new THREE.Scene();
  const flatCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2);
  flatCamera.position.z = 1;
  const fadeMaterial = new THREE.MeshBasicMaterial({
    map: buffer.texture, transparent: true, depthTest: false, depthWrite: false
  });
  composite.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), fadeMaterial));

  let pointerStrength = 0;
  let pointerActive = 0;
  let cameraProgress;
  let frameId = 0;
  let lastFrame = 0;
  let stageHeight = 1;
  let travelHeight = 1;
  const targetAudio = new THREE.Vector3();

  function draw(now) {
    frameId = 0;
    if (canvas.hidden || !isVisible() || document.hidden) {
      lastFrame = 0;
      return;
    }
    const dt = lastFrame ? Math.min(.05, (now - lastFrame) / 1000) : 1 / 60;
    lastFrame = now;
    const ease = 1 - Math.exp(-dt * 8);
    const scroll = THREE.MathUtils.clamp(-hero.getBoundingClientRect().top / travelHeight, 0, 1);
    cameraProgress ??= scroll;
    cameraProgress += (scroll - cameraProgress) * ease;
    const blend = THREE.MathUtils.smoothstep(cameraProgress, .075, .32);
    const step = THREE.MathUtils.smoothstep(cameraProgress, .072, 1);
    hero.toggleAttribute('data-entered', scroll > .06);
    hero.toggleAttribute('data-scene', blend > .98);

    pointer.lerp(pointerTarget, ease);
    pointerStrength += (pointerActive - pointerStrength) * ease;
    uniforms.uTime.value += dt;
    uniforms.uPointerStrength.value = pointerStrength;
    uniforms.uWholeScene.value = blend;
    projection.update(ease, blend > 0);
    const bands = !video.paused && window.REVENANT_HERO?.bands[Math.floor(video.currentTime * 30)];
    if (bands) uniforms.uAudio.value.lerp(targetAudio.set(bands[0], bands[1], bands[2]).multiplyScalar(1 / 255), ease);
    else uniforms.uAudio.value.multiplyScalar(1 - ease);

    camera.position.copy(origin).addScaledVector(direction, step * (camera.aspect < .84 ? 3.5 : 5.2));
    camera.position.x += pointer.x * pointerStrength * blend * .17;
    camera.position.y += pointer.y * pointerStrength * blend * .085;
    camera.quaternion.copy(orientation);
    camera.rotateY(-pointer.x * pointerStrength * blend * .035);
    camera.rotateX(pointer.y * pointerStrength * blend * .022);

    renderer.setRenderTarget(null);
    renderer.setClearColor(0, 0);
    renderer.clear();
    if (blend >= .999) {
      renderer.render(hall, camera);
    } else if (blend > 0) {
      renderer.setRenderTarget(buffer);
      renderer.render(hall, camera);
      renderer.setRenderTarget(null);
      fadeMaterial.opacity = blend;
      renderer.render(composite, flatCamera);
    }
    renderer.render(cloud, camera);
    requestDraw();
  }

  function requestDraw() {
    if (!frameId && !canvas.hidden && isVisible() && !document.hidden) frameId = requestAnimationFrame(draw);
  }

  function resize() {
    const width = stage.clientWidth;
    stageHeight = Math.max(1, stage.clientHeight);
    travelHeight = Math.max(1, hero.offsetHeight - stageHeight);
    renderer.setSize(width, stageHeight, false);
    const size = renderer.getDrawingBufferSize(new THREE.Vector2());
    buffer.setSize(size.x, size.y);
    camera.aspect = width / stageHeight;
    const halfFov = THREE.MathUtils.degToRad(original.verticalFov / 2);
    const cover = Math.max(1, camera.aspect / original.aspect);
    camera.fov = 2 * THREE.MathUtils.radToDeg(Math.atan(Math.tan(halfFov) / cover));
    camera.updateProjectionMatrix();
    uniforms.uAspect.value = camera.aspect;
    requestDraw();
  }

  function move(event) {
    if (canvas.hidden) return;
    const bounds = frame.getBoundingClientRect();
    pointerTarget.set((event.clientX - bounds.left) / bounds.width * 2 - 1,
      1 - (event.clientY - bounds.top) / bounds.height * 2);
    if (!pointerActive && pointerStrength < .01) pointer.copy(pointerTarget);
    pointerActive = 1;
    requestDraw();
  }

  canvas.addEventListener('webglcontextlost', () => {
    canvas.hidden = true;
    hero.removeAttribute('data-scene');
  }, { once: true });
  const observer = new ResizeObserver(resize);
  observer.observe(stage);
  observer.observe(hero);
  resize();
  return { move, release() { pointerActive = 0; }, requestDraw };
}
