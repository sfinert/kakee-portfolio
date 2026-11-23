import * as THREE from 'three';
import { OrbitControls } from './vendor/OrbitControls.js';

const localLoads = new Map();
let active;

function loadLocalAsset(url) {
  if (!localLoads.has(url)) {
    const pending = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url.replace(/\.glb$/, '-data.js');
      script.onload = () => {
        script.remove();
        const encoded = window.KAKEE_VIEWPORT_ASSETS?.[url];
        if (encoded) {
          delete window.KAKEE_VIEWPORT_ASSETS[url];
          try {
            const decoded = atob(encoded);
            const bytes = new Uint8Array(decoded.length);
            for (let index = 0; index < bytes.length; index++) bytes[index] = decoded.charCodeAt(index);
            resolve(bytes.buffer);
          } catch (error) {
            reject(error);
          }
        } else {
          reject(new Error('Local model data is missing'));
        }
      };
      script.onerror = () => {
        script.remove();
        reject(new Error('Could not load local model data'));
      };
      document.head.append(script);
    }).catch(error => {
      localLoads.delete(url);
      throw error;
    });
    localLoads.set(url, pending);
  }
  return localLoads.get(url);
}

async function loadAsset(url, signal) {
  if (location.protocol === 'file:') return loadLocalAsset(url);
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.arrayBuffer();
}

function disposeObject(content) {
  const resources = new Set();
  content?.traverse(object => {
    if (object.geometry) resources.add(object.geometry);
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    for (const material of materials) {
      if (!material) continue;
      for (const value of Object.values(material)) {
        if (value?.isTexture) resources.add(value);
      }
      resources.add(material);
    }
  });
  resources.forEach(resource => resource.dispose());
}

export function closeProjectViewport() {
  if (!active) return;
  const state = active;
  active = undefined;
  state.abort.abort();
  state.observer?.disconnect();
  state.controls?.dispose();
  state.sourceMaterials?.forEach((material, mesh) => { mesh.material = material; });
  state.clay?.dispose();
  state.wire?.dispose();
  state.environment?.dispose();
  state.matcap?.dispose();
  state.matcapTexture?.dispose();
  state.floor?.geometry.dispose();
  state.floor?.material.dispose();
  disposeObject(state.content);
  state.renderer?.dispose();
  state.renderer?.domElement.remove();
}

// A small soft-box room baked into an environment map, so metallic textures have something to reflect.
function studioEnvironment(renderer) {
  const room = new THREE.Scene();
  const box = new THREE.BoxGeometry(1, 1, 1);
  const walls = new THREE.Mesh(box, new THREE.MeshBasicMaterial({ color: 0x3a3e48, side: THREE.BackSide }));
  walls.scale.set(14, 8, 14);
  room.add(walls);
  for (const [x, y, z, sx, sy, sz, strength] of [
    [0, 3.8, 0, 6, .1, 6, 3.6], [-6.8, 1, 0, .1, 4, 6, 2], [6.8, 1.5, -2, .1, 3, 4, 1.5], [0, 1, 6.8, 5, 3, .1, 1.1]
  ]) {
    const panel = new THREE.Mesh(box, new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 1, 1).multiplyScalar(strength) }));
    panel.position.set(x, y, z);
    panel.scale.set(sx, sy, sz);
    room.add(panel);
  }
  const generator = new THREE.PMREMGenerator(renderer);
  const target = generator.fromScene(room, .035);
  generator.dispose();
  box.dispose();
  return target;
}

async function parseAsset(bytes) {
  const { GLTFLoader } = await import('./vendor/loaders/GLTFLoader.js');
  return new Promise((resolve, reject) => {
    new GLTFLoader().parse(bytes, '', gltf => resolve(gltf.scene), reject);
  });
}

const matcaps = {
  'nomad-clay': () => import('./assets/nomad-clay-matcap.js')
};

const matcapLook = {
  'nomad-clay': { gain: 1.55, contrast: 1.9, saturation: .8, rim: 0xffd9a8, rimPower: 2.8, rimFrom: [.65, -.6], background: 0x050505 }
};

async function loadMatcap(name) {
  const { default: url } = await matcaps[name]();
  const texture = await new THREE.TextureLoader().loadAsync(url);
  texture.encoding = THREE.sRGBEncoding;
  return texture;
}

export async function openProjectViewport({ src, poster, title, matcap }) {
  closeProjectViewport();
  const stage = document.querySelector('#viewportStage');
  const status = document.querySelector('#viewportStatus');
  const image = document.querySelector('#viewportPoster');
  const reset = document.querySelector('#viewportReset');
  const modeButtons = [...document.querySelectorAll('[data-viewport-mode]')];
  const state = { abort: new AbortController() };
  active = state;
  const { signal } = state.abort;
  for (const button of modeButtons) {
    button.disabled = true;
    button.hidden = false;
    button.setAttribute('aria-pressed', String(button.dataset.viewportMode === 'clay'));
  }
  reset.disabled = true;
  image.src = poster;
  image.alt = title + ' 작품 이미지';
  image.hidden = false;
  status.textContent = '3D 데이터를 불러오는 중…';

  try {
    const bytes = await loadAsset(src, signal);
    if (active !== state) return;
    const content = await parseAsset(bytes);
    if (active !== state) {
      disposeObject(content);
      return;
    }
    state.content = content;
    const sourceMaterials = new Map();
    let textured = false;
    content.traverse(object => {
      if (!object.isMesh) return;
      sourceMaterials.set(object, object.material);
      if ([object.material].flat().some(material => material?.map)) textured = true;
    });
    if (!sourceMaterials.size) throw new Error('No meshes in model');
    state.sourceMaterials = sourceMaterials;
    state.clay = new THREE.MeshStandardMaterial({ color: 0xb5bbc8, roughness: 0.86 });
    if (matcap && matcaps[matcap]) {
      state.matcapTexture = await loadMatcap(matcap);
      if (active !== state) return;
      // The matcap carries its own lighting, so skip tone mapping; a gain, a little contrast and a
      // warm rim light push it towards the presentation render's bright edges.
      state.matcap = new THREE.MeshMatcapMaterial({ matcap: state.matcapTexture, toneMapped: false });
      const look = matcapLook[matcap] || {};
      state.matcap.onBeforeCompile = shader => {
        shader.uniforms.uGain = { value: look.gain ?? 1 };
        shader.uniforms.uContrast = { value: look.contrast ?? 1 };
        shader.uniforms.uRim = { value: new THREE.Color(look.rim ?? 0x000000) };
        shader.uniforms.uRimPower = { value: look.rimPower ?? 3 };
        shader.uniforms.uSaturation = { value: look.saturation ?? 1 };
        shader.uniforms.uRimFrom = { value: new THREE.Vector2(...(look.rimFrom ?? [-.55, .85])).normalize() };
        shader.fragmentShader = shader.fragmentShader
          .replace('#include <common>', '#include <common>\nuniform float uGain, uContrast, uRimPower, uSaturation;\nuniform vec3 uRim;\nuniform vec2 uRimFrom;')
          .replace('vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;', `
            vec3 outgoingLight = pow(diffuseColor.rgb * matcapColor.rgb, vec3(uContrast)) * uGain;
            outgoingLight = mix(vec3(dot(outgoingLight, vec3(.299, .587, .114))), outgoingLight, uSaturation);
            float rim = pow(1. - clamp(abs(dot(normal, viewDir)), 0., 1.), uRimPower);
            vec2 rimSide = normalize(normal.xy + 1e-4);
            outgoingLight += uRim * rim * (.15 + .85 * smoothstep(-.2, .9, dot(rimSide, uRimFrom)));`);
      };
    }
    state.wire = new THREE.MeshBasicMaterial({ color: 0x9ad7db, wireframe: true });
    const bounds = new THREE.Box3().setFromObject(content);
    const sphere = bounds.getBoundingSphere(new THREE.Sphere());
    if (!Number.isFinite(sphere.radius) || sphere.radius <= 0) throw new Error('Invalid model bounds');
    const pivot = new THREE.Group();
    pivot.add(content);
    content.position.sub(sphere.center);
    const radius = 2.4;
    pivot.scale.setScalar(radius / sphere.radius);

    // A small look-dev studio: filmic tone mapping, a soft key light that casts onto a
    // shadow-catcher floor, and the soft-box environment for reflections.
    const scene = new THREE.Scene();
    scene.add(pivot);
    content.traverse(object => {
      if (!object.isMesh) return;
      object.castShadow = object.receiveShadow = true;
      // Opacity-mapped sets also hold solid metal, so keep writing depth to avoid sorting holes.
      for (const material of [object.material].flat()) {
        if (material?.transparent) material.depthWrite = true;
      }
    });
    const sky = new THREE.HemisphereLight(0xdfeaff, 0x2a2630, .55);
    scene.add(sky);
    const key = new THREE.DirectionalLight(0xfff3e6, 2.4);
    key.position.set(-3.5, 6, 4.5);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.bias = -.0004;
    key.shadow.normalBias = .02;
    key.shadow.radius = 4;
    Object.assign(key.shadow.camera, { left: -4, right: 4, top: 4, bottom: -4, near: .5, far: 20 });
    const rim = new THREE.DirectionalLight(0xbfd2ff, 1.1);
    rim.position.set(4.5, 2.5, -4);
    const fill = new THREE.DirectionalLight(0xe6e9ff, .35);
    fill.position.set(4, 1, 5);
    scene.add(key, rim, fill);
    const floorY = (bounds.min.y - sphere.center.y) * (radius / sphere.radius) - .002;
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.ShadowMaterial({ opacity: .38 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = floorY;
    floor.receiveShadow = true;
    scene.add(floor);
    state.floor = floor;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    state.renderer = renderer;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x11131a);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    state.environment = studioEnvironment(renderer);
    scene.environment = state.environment.texture;
    const canvas = renderer.domElement;
    canvas.setAttribute('aria-label', '3D 뷰포트. 방향키로 돌리고, 더하기와 빼기로 확대 또는 축소합니다.');
    canvas.setAttribute('role', 'region');
    canvas.tabIndex = 0;
    stage.append(canvas);

    const camera = new THREE.PerspectiveCamera(40, 1, 0.01, 100);
    const controls = new OrbitControls(camera, canvas);
    state.controls = controls;
    controls.minDistance = 0.45;
    controls.maxDistance = 45;
    const direction = new THREE.Vector3(0.25, 0.17, 1).normalize();
    const render = () => { if (active === state) renderer.render(scene, camera); };
    const resize = () => {
      if (active !== state) return;
      const width = Math.max(1, stage.clientWidth);
      const height = Math.max(1, stage.clientHeight);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    function resetView() {
      const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
      const fitAngle = Math.min(halfFov, Math.atan(Math.tan(halfFov) * camera.aspect));
      camera.position.copy(direction).multiplyScalar((radius * 1.08) / Math.sin(fitAngle));
      controls.target.set(0, 0, 0);
      controls.update();
      render();
    }
    controls.addEventListener('change', render);
    // The dialog can still be settling when the model arrives; keep refitting until the visitor moves the view.
    let moved = false;
    controls.addEventListener('start', () => { moved = true; });
    state.observer = new ResizeObserver(() => {
      resize();
      if (moved) render();
      else resetView();
    });
    state.observer.observe(stage);
    reset.addEventListener('click', resetView, { signal });
    function setMode(mode) {
      sourceMaterials.forEach((material, mesh) => {
        mesh.material = { texture: material, wire: state.wire, matcap: state.matcap }[mode] || state.clay;
      });
      floor.visible = mode === 'texture' || mode === 'clay';
      // Textures get a cinematic rig: little ambient, a low warm raking key that brings out the
      // normal maps, a strong cool rim and a darker stage, so the surfaces read beyond base colour.
      const cinematic = mode === 'texture';
      sky.intensity = cinematic ? .12 : .55;
      key.intensity = cinematic ? 3.6 : 2.4;
      key.color.set(cinematic ? 0xffd9b0 : 0xfff3e6);
      key.position.set(...(cinematic ? [-5, 3.4, 3] : [-3.5, 6, 4.5]));
      rim.intensity = cinematic ? 2.4 : 1.1;
      fill.intensity = cinematic ? .12 : .35;
      floor.material.opacity = cinematic ? .6 : .38;
      renderer.toneMappingExposure = cinematic ? .92 : 1.05;
      sourceMaterials.forEach(material => {
        for (const entry of [material].flat()) if (entry && 'envMapIntensity' in entry) entry.envMapIntensity = .35;
      });
      renderer.setClearColor(mode === 'matcap' ? (matcapLook[matcap]?.background ?? 0x11131a) : cinematic ? 0x07080b : 0x11131a);
      for (const button of modeButtons) {
        button.setAttribute('aria-pressed', String(button.dataset.viewportMode === mode));
      }
      status.textContent = {
        matcap: 'Nomad Sculpt에서 작업할 때의 클레이 매트캡 그대로 보여줍니다.',
        texture: 'Substance Painter에서 작업한 텍스처를 입힌 모델입니다.',
        wire: '웹용 모델의 삼각형 메시를 표시합니다.',
        clay: '무광 재질로 모델의 형태를 보여줍니다.'
      }[mode];
      render();
    }
    for (const button of modeButtons) {
      button.addEventListener('click', () => setMode(button.dataset.viewportMode), { signal });
    }
    canvas.addEventListener('keydown', event => {
      const edit = new THREE.Spherical().setFromVector3(camera.position.clone().sub(controls.target));
      switch (event.key) {
        case 'ArrowLeft': edit.theta -= 0.16; break;
        case 'ArrowRight': edit.theta += 0.16; break;
        case 'ArrowUp': edit.phi -= 0.12; break;
        case 'ArrowDown': edit.phi += 0.12; break;
        case '+':
        case '=': edit.radius *= 0.9; break;
        case '-': edit.radius /= 0.9; break;
        default: return;
      }
      event.preventDefault();
      edit.makeSafe();
      edit.radius = THREE.MathUtils.clamp(edit.radius, controls.minDistance, controls.maxDistance);
      camera.position.setFromSpherical(edit).add(controls.target);
      controls.update();
      render();
    }, { signal });
    canvas.addEventListener('webglcontextlost', showFallback, { signal });
    resize();
    resetView();
    for (const button of modeButtons) {
      if (button.dataset.viewportMode === 'texture') button.hidden = !textured;
      if (button.dataset.viewportMode === 'matcap') button.hidden = !state.matcap;
    }
    const modeList = document.querySelector('.viewport-heading span');
    if (modeList) modeList.textContent = modeButtons.filter(button => !button.hidden).map(button => button.textContent).join(' · ');
    setMode(state.matcap ? 'matcap' : textured ? 'texture' : 'clay');
    image.hidden = true;
    reset.disabled = false;
    for (const button of modeButtons) button.disabled = false;
  } catch (error) {
    if (active !== state || error.name === 'AbortError') return;
    showFallback();
    console.warn('Project viewport unavailable:', error);
  }

  function showFallback() {
    if (active !== state) return;
    closeProjectViewport();
    image.hidden = false;
    reset.disabled = true;
    for (const button of modeButtons) button.disabled = true;
    status.textContent = '3D 화면을 열 수 없어 작품 이미지를 표시합니다.';
  }
}
