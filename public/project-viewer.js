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
  disposeObject(state.content);
  state.renderer?.dispose();
  state.renderer?.domElement.remove();
}

async function parseAsset(bytes) {
  const { GLTFLoader } = await import('./vendor/loaders/GLTFLoader.js');
  return new Promise((resolve, reject) => {
    new GLTFLoader().parse(bytes, '', gltf => resolve(gltf.scene), reject);
  });
}

export async function openProjectViewport({ src, poster, title }) {
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
    content.traverse(object => {
      if (object.isMesh) sourceMaterials.set(object, object.material);
    });
    if (!sourceMaterials.size) throw new Error('No meshes in model');
    state.sourceMaterials = sourceMaterials;
    state.clay = new THREE.MeshStandardMaterial({ color: 0xb5bbc8, roughness: 0.86 });
    state.wire = new THREE.MeshBasicMaterial({ color: 0x9ad7db, wireframe: true });
    const bounds = new THREE.Box3().setFromObject(content);
    const sphere = bounds.getBoundingSphere(new THREE.Sphere());
    if (!Number.isFinite(sphere.radius) || sphere.radius <= 0) throw new Error('Invalid model bounds');
    const pivot = new THREE.Group();
    pivot.add(content);
    content.position.sub(sphere.center);
    const radius = 2.4;
    pivot.scale.setScalar(radius / sphere.radius);

    const scene = new THREE.Scene();
    scene.add(pivot);
    scene.add(new THREE.HemisphereLight(0xe8f8ff, 0x38303c, 1.4));
    const key = new THREE.DirectionalLight(0xe8f4ff, 1.9);
    key.position.set(-3, 5, 6);
    const rim = new THREE.DirectionalLight(0xbdb2f2, 0.85);
    rim.position.set(5, 2, -4);
    scene.add(key, rim);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    state.renderer = renderer;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x11131a);
    renderer.outputEncoding = THREE.sRGBEncoding;
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
    state.observer = new ResizeObserver(() => { resize(); render(); });
    state.observer.observe(stage);
    reset.addEventListener('click', resetView, { signal });
    function setMode(mode) {
      const wire = mode === 'wire';
      sourceMaterials.forEach((_, mesh) => { mesh.material = wire ? state.wire : state.clay; });
      for (const button of modeButtons) {
        button.setAttribute('aria-pressed', String(button.dataset.viewportMode === mode));
      }
      status.textContent = wire ? '웹용 모델의 삼각형 메시를 표시합니다.' : '무광 재질로 모델의 형태를 보여줍니다.';
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
    setMode('clay');
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
