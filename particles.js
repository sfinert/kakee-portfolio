// GPU particle sculpture.  The only dependency is the THREE instance supplied
// by the host page; the simulation and render targets belong to this instance.

const SIMULATION_VERTEX = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const SIMULATION_FRAGMENT = /* glsl */ `
  precision highp float;
  uniform sampler2D uPosition;
  uniform sampler2D uOrigin;
  uniform sampler2D uRandom;
  uniform sampler2D uVelocity;
  uniform sampler2D uDensity;
  uniform float uDelta;
  uniform float uTime;
  uniform float uRenderScale;
  uniform float uAspect;
  uniform mat4 uLocalToClip;
  uniform vec3 uRight;
  uniform vec3 uUp;
  varying vec2 vUv;

  vec2 rotate2(vec2 v, float a) {
    float s = sin(a), c = cos(a);
    return vec2(c * v.x - s * v.y, s * v.x + c * v.y);
  }

  float ringRadius(float a) { return 0.282 + 0.027 * cos(3.0 * a + 0.4); }
  float tubeRadius(float a) { return 0.087 + 0.022 * cos(3.0 * a - 0.65); }
  float ringHeight(float a) { return 0.015 * sin(2.0 * a + 0.35); }
  float ringTwist(float a) { return 1.5 * a + 0.22 * sin(a); }

  // Mirror depth before the mandated quaternion rotation. That quaternion
  // cyclically maps local (x, y, z) to (z, x, y), so the ring lives in the
  // rotated yz plane: it still faces the supplied camera rather than edge-on.
  float sculpture(vec3 p) {
    float radius = length(p);
    if (radius > 0.8) return radius - 0.7;
    p.z = sqrt(p.z * p.z + 0.0215) - sqrt(0.012);
    vec4 q = vec4(0.5, 0.5, 0.5, 0.5);
    p += 2.0 * cross(q.xyz, cross(q.xyz, p) + q.w * p);
    float a = atan(p.z, p.y);
    // The mirror compresses depth near its soft seam; compensate for it in
    // the cross-section without changing the actual mirror or group scale.
    float depth = (p.x - (sqrt(0.0215) - sqrt(0.012))) * 3.5;
    vec2 section = vec2(length(p.yz) - ringRadius(a), depth - ringHeight(a));
    section = rotate2(section, -ringTwist(a));
    return (length(section / vec2(1.20, 0.80)) - tubeRadius(a)) * 0.80;
  }

  vec3 surfaceNormal(vec3 p) {
    const float e = 0.001;
    vec3 dx = vec3(e, 0.0, 0.0);
    vec3 dy = vec3(0.0, e, 0.0);
    vec3 dz = vec3(0.0, 0.0, e);
    vec3 g = vec3(sculpture(p + dx) - sculpture(p - dx),
                  sculpture(p + dy) - sculpture(p - dy),
                  sculpture(p + dz) - sculpture(p - dz));
    return g / max(length(g), 0.00001);
  }

  // The curl of a small sine/cosine vector potential: smooth, continuous,
  // divergence-free motion with more than one spatial frequency.
  vec3 curlNoise(vec3 p, float t) {
    p *= 8.0;
    vec3 c = vec3(
      -sin(p.y + t * 0.29) - cos(p.z - t * 0.23),
      -sin(p.z + t * 0.25) - cos(p.x + t * 0.31),
      -sin(p.x - t * 0.27) - cos(p.y + t * 0.21)
    );
    c += 0.35 * vec3(sin(p.y * 1.7 - p.z + t * 0.2),
                       sin(p.z * 1.7 - p.x + t * 0.2),
                       sin(p.x * 1.7 - p.y + t * 0.2));
    return c;
  }

  void main() {
    vec3 p = texture2D(uPosition, vUv).xyz;
    vec3 origin = texture2D(uOrigin, vUv).xyz;
    vec3 rnd = texture2D(uRandom, vUv).xyz;
    if (length(p) > 0.7) p *= 0.5;

    float distanceToSurface = sculpture(p);
    vec3 normal = surfaceNormal(p);
    // Per-second equivalents of the reference's HZ-scaled weak spring,
    // normalized curl and tangent cross-product swirl. The SDF pull is tuned
    // for a visible return after interaction without a per-particle home.
    vec3 spring = (origin - p) * 0.012;
    vec3 surfacePull = -normal * distanceToSurface * 5.0;
    vec3 curl = curlNoise(p + origin * 0.025, uTime);
    vec3 noise = curl / max(length(curl), 0.00001) * 0.012;
    vec3 swirl = cross(p / max(length(p), 0.00001), normal) * 0.03;

    // The fluid is in screen UVs with the origin at bottom left. Project the
    // *current* local particle through the supplied scene camera, and turn its
    // 2D velocity back into local camera-right / camera-up displacement.
    float sparkleSpread = mix(1.0, 1.5, pow(rnd.y, 150.0));
    vec4 clip = uLocalToClip * vec4(p * (uRenderScale * sparkleSpread), 1.0);
    vec2 screenUv = clip.xy / max(clip.w, 0.0001) * 0.5 + 0.5;
    vec3 fluidForce = vec3(0.0);
    if (clip.w > 0.0 && screenUv.x >= 0.0 && screenUv.x <= 1.0 &&
        screenUv.y >= 0.0 && screenUv.y <= 1.0) {
      vec2 velocity = texture2D(uVelocity, screenUv).xy;
      vec3 ink = texture2D(uDensity, screenUv).rgb;
      float density = clamp(max(ink.r, max(ink.g, ink.b)), 0.0, 1.0);
      // Saturation makes the response safe with either normalized or
      // pixel-valued fluid solvers without allowing a runaway particle.
      vec2 v = vec2(velocity.x * uAspect, velocity.y);
      v /= 1.0 + length(v);
      fluidForce = (uRight * v.x + uUp * v.y) * density * 0.4;
    }

    p += (spring + surfacePull + noise + swirl + fluidForce) * uDelta;
    gl_FragColor = vec4(p, 1.0);
  }
`;

const PARTICLE_VERTEX = /* glsl */ `
  precision highp float;
  uniform sampler2D uPositions;
  uniform float uTime;
  uniform float uDpr;
  uniform float uRenderScale;
  uniform float uOpacityScale;
  attribute vec2 aReference;
  attribute vec4 aRandom;
  varying vec3 vColor;
  varying float vOpacity;
  varying float vScale;
  varying float vPhase;

  void main() {
    vec3 p = texture2D(uPositions, aReference).xyz;
    // A very small minority of the stars stray just beyond the main shell.
    p *= mix(1.0, 1.5, pow(aRandom.y, 150.0));
    p *= uRenderScale;
    vec4 viewPosition = modelViewMatrix * vec4(p, 1.0);
    float viewDistance = max(0.1, -viewPosition.z);
    float scale = smoothstep(3.0, 15.0, viewDistance) * mix(0.5, 1.0, aRandom.z);
    float size = 0.04 * uDpr * 2.0 * scale * (1000.0 / viewDistance);
    gl_PointSize = clamp(size, 0.65 * uDpr, 3.5 * uDpr);
    gl_Position = projectionMatrix * viewPosition;

    float shade = mix(0.0, 0.2, aRandom.x);
    vec3 neutral = vec3(shade);
    vec3 lavender = vec3(0.6, 0.45, 1.0);
    vColor = mix(neutral, lavender, pow(aRandom.z, 100.0));
    float sparkle = 0.5 + (0.4 + sin(uTime * 4.0 + aRandom.y * 20.0)) * pow(aRandom.z, 10.0) * 2.5;
    vColor *= max(0.0, sparkle);
    vOpacity = uOpacityScale;
    vScale = scale;
    vPhase = aRandom.z;
  }
`;

const PARTICLE_FRAGMENT = /* glsl */ `
  precision highp float;
  uniform sampler2D uMatcap;
  uniform float uTime;
  varying vec3 vColor;
  varying float vOpacity;
  varying float vScale;
  varying float vPhase;
  vec3 softLight(vec3 base, vec3 blend) {
    vec3 low = 2.0 * base * blend + base * base * (1.0 - 2.0 * blend);
    vec3 high = sqrt(max(base, vec3(0.0))) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend);
    return mix(low, high, step(vec3(0.5), blend));
  }
  vec3 overlay(vec3 base, vec3 blend) {
    vec3 low = 2.0 * base * blend;
    vec3 high = 1.0 - 2.0 * (1.0 - base) * (1.0 - blend);
    return mix(low, high, step(vec3(0.5), base));
  }
  void main() {
    vec2 centered = gl_PointCoord - 0.5;
    if (length(centered) > 0.5 || vScale < 0.1) discard;
    float angle = sin(uTime + vPhase * 20.0) * 0.5 + 1.0;
    float c = cos(angle), s = sin(angle);
    vec2 uv = mat2(c, -s, s, c) * centered + 0.5;
    vec4 sphere = texture2D(uMatcap, uv);
    vec3 color = mix(vColor, softLight(vColor, sphere.rgb), 0.8);
    color = mix(color, overlay(color, sphere.rgb), 0.2);
    gl_FragColor = vec4(color, vOpacity * sphere.a);
  }
`;

function makeMatcap(THREE) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 64;
  const context = canvas.getContext('2d');
  const image = context.createImageData(64, 64);
  for (let y = 0; y < 64; y++) {
    for (let x = 0; x < 64; x++) {
      const nx = (x + 0.5) / 32 - 1;
      const ny = 1 - (y + 0.5) / 32;
      const r2 = nx * nx + ny * ny;
      const nz = Math.sqrt(Math.max(0, 1 - r2));
      const diffuse = Math.max(0, nx * -0.35 + ny * 0.45 + nz * 0.82);
      const highlight = Math.pow(diffuse, 16) * 0.3;
      const value = Math.round(255 * Math.min(1, 0.22 + diffuse * 0.58 + highlight));
      const i = (y * 64 + x) * 4;
      image.data[i] = image.data[i + 1] = image.data[i + 2] = value;
      image.data[i + 3] = Math.round(255 * Math.max(0, Math.min(1, (1 - Math.sqrt(r2)) * 7)));
    }
  }
  context.putImageData(image, 0, 0);
  // Data URI keeps the matcap completely self-contained, with no network URL.
  const texture = new THREE.TextureLoader().load(canvas.toDataURL('image/png'));
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  return texture;
}

function makeDataTexture(THREE, values, size, type) {
  let data = values;
  if (type === THREE.HalfFloatType) {
    data = new Uint16Array(values.length);
    for (let i = 0; i < values.length; i++) data[i] = THREE.DataUtils.toHalfFloat(values[i]);
  }
  const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat, type);
  texture.minFilter = texture.magFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  texture.flipY = false;
  texture.needsUpdate = true;
  return texture;
}

function makeTarget(THREE, size, type) {
  const target = new THREE.WebGLRenderTarget(size, size, {
    format: THREE.RGBAFormat,
    type,
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    depthBuffer: false,
    stencilBuffer: false,
    generateMipmaps: false
  });
  target.texture.generateMipmaps = false;
  return target;
}

function chooseTargetType(THREE, renderer) {
  const gl = renderer.getContext();
  const webgl2 = renderer.capabilities.isWebGL2;
  if (!renderer.capabilities.maxVertexTextures) {
    throw new Error('ParticleSystem requires vertex texture sampling.');
  }
  // Ask for renderable floating-point formats, then verify the framebuffer:
  // extension presence alone is not sufficient on all mobile devices.
  const candidates = [];
  if (webgl2) {
    gl.getExtension('EXT_color_buffer_float');
    gl.getExtension('EXT_color_buffer_half_float');
    candidates.push(THREE.FloatType, THREE.HalfFloatType);
  } else {
    const floatSample = gl.getExtension('OES_texture_float');
    const floatRender = gl.getExtension('WEBGL_color_buffer_float') || gl.getExtension('EXT_color_buffer_float');
    const halfSample = gl.getExtension('OES_texture_half_float');
    const halfRender = gl.getExtension('EXT_color_buffer_half_float');
    if (floatSample && floatRender) candidates.push(THREE.FloatType);
    if (halfSample && halfRender) candidates.push(THREE.HalfFloatType);
  }
  const previous = renderer.getRenderTarget();
  const previousFace = renderer.getActiveCubeFace();
  const previousLevel = renderer.getActiveMipmapLevel();
  for (const type of candidates) {
    const test = makeTarget(THREE, 2, type);
    let complete = false;
    try {
      renderer.setRenderTarget(test);
      complete = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
    } catch (_) {
      complete = false;
    } finally {
      renderer.setRenderTarget(previous, previousFace, previousLevel);
      test.dispose();
    }
    if (complete) return type;
  }
  throw new Error('ParticleSystem requires a renderable floating-point or half-float framebuffer.');
}

export class ParticleSystem {
  constructor({ THREE, renderer, camera, fluid, mobile = false }) {
    this.THREE = THREE;
    this.renderer = renderer;
    this.camera = camera;
    this.fluid = fluid;
    this.size = mobile ? 128 : 512;
    this.mobile = mobile;
    this.count = this.size * this.size;
    this._disposed = false;
    this.group = new THREE.Group();
    this.group.position.set(0.343, 0.16, -1);
    this.group.rotation.set(THREE.MathUtils.degToRad(-28.4), THREE.MathUtils.degToRad(390), THREE.MathUtils.degToRad(4.92));
    this.group.scale.set(5, 5, 6);

    const type = chooseTargetType(THREE, renderer);
    const initial = new Float32Array(this.count * 4);
    const randomness = new Float32Array(this.count * 4);
    const references = new Float32Array(this.count * 2);
    const randomAttributes = new Float32Array(this.count * 4);
    const positions = new Float32Array(this.count * 3);
    for (let i = 0; i < this.count; i++) {
      const o = i * 4;
      initial[o] = Math.random() * 2 - 1;
      initial[o + 1] = Math.random() * 2 - 1;
      initial[o + 2] = Math.random() * 2 - 1;
      initial[o + 3] = 1;
      randomness[o] = Math.random();
      randomness[o + 1] = Math.random();
      randomness[o + 2] = Math.random();
      randomness[o + 3] = Math.random();
      references[i * 2] = (i % this.size + 0.5) / this.size;
      references[i * 2 + 1] = (Math.floor(i / this.size) + 0.5) / this.size;
      randomAttributes[o] = randomness[o];
      randomAttributes[o + 1] = randomness[o + 1];
      randomAttributes[o + 2] = randomness[o + 2];
      randomAttributes[o + 3] = randomness[o + 3];
    }
    this._originTexture = makeDataTexture(THREE, initial, this.size, type);
    this._randomTexture = makeDataTexture(THREE, randomness, this.size, type);
    // An inert, byte-valued texture also allows the sculpture to run before the
    // fluid has been initialized or if a fluid instance is not supplied.
    this._emptyTexture = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1, THREE.RGBAFormat);
    this._emptyTexture.needsUpdate = true;
    this._targets = [makeTarget(THREE, this.size, type), makeTarget(THREE, this.size, type)];
    this._current = 0;

    this._simulationUniforms = {
      uPosition: { value: this._originTexture },
      uOrigin: { value: this._originTexture },
      uRandom: { value: this._randomTexture },
      uVelocity: { value: this._emptyTexture },
      uDensity: { value: this._emptyTexture },
      uDelta: { value: 0 },
      uTime: { value: 0 },
      uRenderScale: { value: 1 },
      uAspect: { value: 1 },
      uLocalToClip: { value: new THREE.Matrix4() },
      uRight: { value: new THREE.Vector3(1, 0, 0) },
      uUp: { value: new THREE.Vector3(0, 1, 0) }
    };
    this._simulationMaterial = new THREE.ShaderMaterial({
      uniforms: this._simulationUniforms,
      vertexShader: SIMULATION_VERTEX,
      fragmentShader: SIMULATION_FRAGMENT,
      depthTest: false,
      depthWrite: false,
      blending: THREE.NoBlending,
      toneMapped: false
    });
    this._simulationScene = new THREE.Scene();
    this._simulationCamera = new THREE.Camera();
    this._quadGeometry = new THREE.PlaneGeometry(2, 2);
    this._quad = new THREE.Mesh(this._quadGeometry, this._simulationMaterial);
    this._quad.frustumCulled = false;
    this._simulationScene.add(this._quad);

    this._geometry = new THREE.BufferGeometry();
    this._geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this._geometry.setAttribute('aReference', new THREE.BufferAttribute(references, 2));
    this._geometry.setAttribute('aRandom', new THREE.BufferAttribute(randomAttributes, 4));
    this._matcap = makeMatcap(THREE);
    this._particleUniforms = {
      uPositions: { value: this._targets[0].texture },
      uMatcap: { value: this._matcap },
      uTime: { value: 0 },
      uDpr: { value: 1 },
      uRenderScale: { value: 1 },
      uOpacityScale: { value: 1 }
    };
    this._particleMaterial = new THREE.ShaderMaterial({
      uniforms: this._particleUniforms,
      vertexShader: PARTICLE_VERTEX,
      fragmentShader: PARTICLE_FRAGMENT,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: true,
      depthWrite: false,
      toneMapped: false
    });
    this._points = new THREE.Points(this._geometry, this._particleMaterial);
    this._points.frustumCulled = false;
    this.group.add(this._points);
    this._inverseGroup = new THREE.Matrix4();
    this._inverseGroupLinear = new THREE.Matrix3();
    this._viewProjection = new THREE.Matrix4();
    this._renderSize = new THREE.Vector2();

    // Seed the first render target with the random cube. Both subsequent
    // reads and writes are GPU textures, never read back to the CPU.
    this._renderSimulation(this._targets[0]);
  }

  _renderSimulation(target) {
    const renderer = this.renderer;
    const previous = renderer.getRenderTarget();
    const previousFace = renderer.getActiveCubeFace();
    const previousLevel = renderer.getActiveMipmapLevel();
    const autoClear = renderer.autoClear;
    const xrEnabled = renderer.xr.enabled;
    try {
      renderer.xr.enabled = false;
      renderer.autoClear = false;
      renderer.setRenderTarget(target);
      renderer.render(this._simulationScene, this._simulationCamera);
    } finally {
      renderer.setRenderTarget(previous, previousFace, previousLevel);
      renderer.autoClear = autoClear;
      renderer.xr.enabled = xrEnabled;
    }
  }

  update(dt, time, dpr) {
    if (this._disposed) return;
    const u = this._simulationUniforms;
    this.group.updateWorldMatrix(true, false);
    this.camera.updateWorldMatrix(true, false);
    this.camera.matrixWorldInverse.copy(this.camera.matrixWorld).invert();
    this._viewProjection.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse);
    u.uLocalToClip.value.multiplyMatrices(this._viewProjection, this.group.matrixWorld);
    this._inverseGroup.copy(this.group.matrixWorld).invert();
    this._inverseGroupLinear.setFromMatrix4(this._inverseGroup);
    // Preserve nonuniform model scaling while retaining the intended force magnitude.
    u.uRight.value.setFromMatrixColumn(this.camera.matrixWorld, 0).applyMatrix3(this._inverseGroupLinear).multiplyScalar(5);
    u.uUp.value.setFromMatrixColumn(this.camera.matrixWorld, 1).applyMatrix3(this._inverseGroupLinear).multiplyScalar(5);
    u.uPosition.value = this._targets[this._current].texture;
    u.uVelocity.value = (this.fluid && this.fluid.velocityTexture) || this._emptyTexture;
    u.uDensity.value = (this.fluid && this.fluid.densityTexture) || this._emptyTexture;
    u.uDelta.value = Math.max(0, Math.min(Number.isFinite(dt) ? dt : 0, 0.05));
    u.uTime.value = Number.isFinite(time) ? time : 0;
    u.uAspect.value = this.camera.aspect || 1;
    // Portrait cameras have a much narrower horizontal field of view. Fit the
    // local points, not the mandated public group transform, to that view.
    u.uRenderScale.value = this.mobile ? Math.min(1, Math.max(0.3, (this.camera.aspect || 1) * 0.85)) : 1;
    const next = 1 - this._current;
    this._renderSimulation(this._targets[next]);
    this._current = next;
    this._particleUniforms.uPositions.value = this._targets[this._current].texture;
    this._particleUniforms.uTime.value = u.uTime.value;
    this._particleUniforms.uDpr.value = Math.max(0.1, Number.isFinite(dpr) ? dpr : 1);
    this._particleUniforms.uRenderScale.value = u.uRenderScale.value;
    // On short desktop viewports the same 262k sprites overlap far more
    // densely. Use CSS-pixel height so resizing, not DPR, controls the fade.
    this.renderer.getSize(this._renderSize);
    const heightRatio = Math.min(1, Math.max(0, this._renderSize.y / 720));
    const areaRatio = heightRatio * heightRatio;
    this._particleUniforms.uOpacityScale.value = this.mobile ? 1 : areaRatio * areaRatio;
  }

  dispose() {
    if (this._disposed) return;
    this._disposed = true;
    this.group.remove(this._points);
    this._geometry.dispose();
    this._particleMaterial.dispose();
    this._quadGeometry.dispose();
    this._simulationMaterial.dispose();
    this._targets.forEach(target => target.dispose());
    this._originTexture.dispose();
    this._randomTexture.dispose();
    this._emptyTexture.dispose();
    this._matcap.dispose();
  }
}
