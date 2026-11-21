// A small incompressible fluid solver. Velocity is stored as UV units/second
// (positive x right, positive y up); density is white, in the range 0..1.
const SIM_SIZE = 256;
const DYE_SIZE = 512;
const PRESSURE_ITERATIONS = 5;
const MAX_SPLATS = 32;
const SPLATS_PER_PASS = 4;
const REFERENCE_DT = 1 / 60;

const VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const SPLAT_SHADER = `
  varying vec2 vUv;
  uniform sampler2D uSource;
  uniform vec4 uSegments[4];
  uniform vec4 uImpulses[4];
  uniform int uCount;
  uniform int uIsDensity;
  uniform float uAspect;

  void main() {
    vec4 value = texture2D(uSource, vUv);
    vec2 p = vec2(vUv.x * uAspect, vUv.y);
    for (int i = 0; i < 4; i++) {
      if (i >= uCount) break;
      vec2 a = vec2(uSegments[i].x * uAspect, uSegments[i].y);
      vec2 b = vec2(uSegments[i].z * uAspect, uSegments[i].w);
      vec2 ab = b - a;
      float t = clamp(dot(p - a, ab) / max(dot(ab, ab), 0.0000001), 0.0, 1.0);
      vec2 offset = p - (a + t * ab);
      float radius = uImpulses[i].z;
      float weight = exp(-dot(offset, offset) / max(radius * radius, 0.0000001));
      if (uIsDensity == 1) {
        value.rgb += vec3(weight * uImpulses[i].w);
      } else {
        value.xy += weight * uImpulses[i].xy;
      }
    }
    if (uIsDensity == 1) {
      gl_FragColor = vec4(clamp(value.rgb, 0.0, 1.0), 1.0);
    } else {
      // Bound large bursts while preserving the direction in screen space.
      float speed = length(vec2(value.x * uAspect, value.y));
      value.xy *= min(1.0, 2.5 / max(speed, 0.00001));
      gl_FragColor = vec4(value.xy, 0.0, 1.0);
    }
  }
`;

const CURL_SHADER = `
  varying vec2 vUv;
  uniform sampler2D uVelocity;
  uniform vec2 uTexel;
  uniform float uAspect;
  void main() {
    float l = texture2D(uVelocity, vUv - vec2(uTexel.x, 0.0)).y;
    float r = texture2D(uVelocity, vUv + vec2(uTexel.x, 0.0)).y;
    float b = texture2D(uVelocity, vUv - vec2(0.0, uTexel.y)).x;
    float t = texture2D(uVelocity, vUv + vec2(0.0, uTexel.y)).x;
    float curl = 0.5 * ((r - l) / uAspect - (t - b) * uAspect);
    gl_FragColor = vec4(curl, 0.0, 0.0, 1.0);
  }
`;

const VORTICITY_SHADER = `
  varying vec2 vUv;
  uniform sampler2D uVelocity;
  uniform sampler2D uCurl;
  uniform vec2 uTexel;
  uniform float uAspect;
  uniform float uDt;
  void main() {
    float l = abs(texture2D(uCurl, vUv - vec2(uTexel.x, 0.0)).x);
    float r = abs(texture2D(uCurl, vUv + vec2(uTexel.x, 0.0)).x);
    float b = abs(texture2D(uCurl, vUv - vec2(0.0, uTexel.y)).x);
    float t = abs(texture2D(uCurl, vUv + vec2(0.0, uTexel.y)).x);
    float c = texture2D(uCurl, vUv).x;
    vec2 gradient = vec2((r - l) / uAspect, t - b);
    gradient /= max(length(gradient), 0.00001);
    vec2 force = vec2(gradient.y / uAspect, -gradient.x) * (30.0 * c);
    vec2 velocity = texture2D(uVelocity, vUv).xy + force * uDt;
    gl_FragColor = vec4(velocity, 0.0, 1.0);
  }
`;

const DIVERGENCE_SHADER = `
  varying vec2 vUv;
  uniform sampler2D uVelocity;
  uniform vec2 uTexel;
  void main() {
    vec2 c = texture2D(uVelocity, vUv).xy;
    float l = texture2D(uVelocity, vUv - vec2(uTexel.x, 0.0)).x;
    float r = texture2D(uVelocity, vUv + vec2(uTexel.x, 0.0)).x;
    float b = texture2D(uVelocity, vUv - vec2(0.0, uTexel.y)).y;
    float t = texture2D(uVelocity, vUv + vec2(0.0, uTexel.y)).y;
    if (vUv.x < uTexel.x) l = -c.x;
    if (vUv.x > 1.0 - uTexel.x) r = -c.x;
    if (vUv.y < uTexel.y) b = -c.y;
    if (vUv.y > 1.0 - uTexel.y) t = -c.y;
    gl_FragColor = vec4(0.5 * (r - l + t - b), 0.0, 0.0, 1.0);
  }
`;

const DECAY_SHADER = `
  varying vec2 vUv;
  uniform sampler2D uSource;
  uniform float uDecay;
  void main() {
    gl_FragColor = texture2D(uSource, vUv) * uDecay;
  }
`;

const MASK_SHADER = `
  varying vec2 vUv;
  uniform sampler2D uDensity;
  void main() {
    vec3 density = texture2D(uDensity, vUv).rgb;
    gl_FragColor = vec4(density, max(density.r, max(density.g, density.b)));
  }
`;

const PRESSURE_SHADER = `
  varying vec2 vUv;
  uniform sampler2D uPressure;
  uniform sampler2D uDivergence;
  uniform vec2 uTexel;
  uniform float uInvAspectSquared;
  void main() {
    float l = texture2D(uPressure, vUv - vec2(uTexel.x, 0.0)).x;
    float r = texture2D(uPressure, vUv + vec2(uTexel.x, 0.0)).x;
    float b = texture2D(uPressure, vUv - vec2(0.0, uTexel.y)).x;
    float t = texture2D(uPressure, vUv + vec2(0.0, uTexel.y)).x;
    float div = texture2D(uDivergence, vUv).x;
    float pressure = ((l + r) * uInvAspectSquared + b + t - div)
      / (2.0 * (uInvAspectSquared + 1.0));
    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
  }
`;

const GRADIENT_SHADER = `
  varying vec2 vUv;
  uniform sampler2D uPressure;
  uniform sampler2D uVelocity;
  uniform vec2 uTexel;
  uniform float uInvAspectSquared;
  void main() {
    float l = texture2D(uPressure, vUv - vec2(uTexel.x, 0.0)).x;
    float r = texture2D(uPressure, vUv + vec2(uTexel.x, 0.0)).x;
    float b = texture2D(uPressure, vUv - vec2(0.0, uTexel.y)).x;
    float t = texture2D(uPressure, vUv + vec2(0.0, uTexel.y)).x;
    vec2 velocity = texture2D(uVelocity, vUv).xy;
    velocity -= 0.5 * vec2((r - l) * uInvAspectSquared, t - b);
    if (vUv.x < uTexel.x) velocity.x = max(velocity.x, 0.0);
    if (vUv.x > 1.0 - uTexel.x) velocity.x = min(velocity.x, 0.0);
    if (vUv.y < uTexel.y) velocity.y = max(velocity.y, 0.0);
    if (vUv.y > 1.0 - uTexel.y) velocity.y = min(velocity.y, 0.0);
    gl_FragColor = vec4(velocity, 0.0, 1.0);
  }
`;

const ADVECTION_SHADER = `
  varying vec2 vUv;
  uniform sampler2D uVelocity;
  uniform sampler2D uSource;
  uniform vec2 uVelocityTexel;
  uniform vec2 uSourceTexel;
  uniform float uDt;
  uniform float uDissipation;

  vec4 readField(sampler2D field, vec2 coord, vec2 texel) {
    #ifdef MANUAL_FILTERING
      vec2 grid = coord / texel - 0.5;
      vec2 base = floor(grid);
      vec2 f = fract(grid);
      vec2 p = (base + 0.5) * texel;
      vec4 a = texture2D(field, p);
      vec4 b = texture2D(field, p + vec2(texel.x, 0.0));
      vec4 c = texture2D(field, p + vec2(0.0, texel.y));
      vec4 d = texture2D(field, p + texel);
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    #else
      return texture2D(field, coord);
    #endif
  }

  void main() {
    vec2 velocity = readField(uVelocity, vUv, uVelocityTexel).xy;
    vec2 previous = clamp(vUv - uDt * velocity, vec2(0.0), vec2(1.0));
    gl_FragColor = uDissipation * readField(uSource, previous, uSourceTexel);
  }
`;

/** GPU fluid fields for screen-space particle interaction. */
export class FluidSimulation {
  constructor(renderer, THREE, width, height) {
    this.renderer = renderer;
    this.THREE = THREE;
    this.width = Math.max(1, Number(width) || 1);
    this.height = Math.max(1, Number(height) || 1);
    this._pending = [];
    this._lastPointer = null;
    this._disposed = false;
    this._targets = [];
    this._materials = [];

    const ext = renderer.extensions;
    const webgl2 = renderer.capabilities.isWebGL2;
    const hasHalfFloat = webgl2
      ? ext.has('EXT_color_buffer_float') || ext.has('EXT_color_buffer_half_float')
      : ext.has('OES_texture_half_float') && ext.has('EXT_color_buffer_half_float');
    this._supported = hasHalfFloat;
    this._linear = webgl2 || ext.has('OES_texture_half_float_linear');

    // Unsupported devices get a harmless black field rather than incomplete
    // framebuffers or repeated WebGL errors.
    if (!hasHalfFloat) {
      this._fallback = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1, THREE.RGBAFormat);
      this._fallback.needsUpdate = true;
      return;
    }

    this._scene = new THREE.Scene();
    this._camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this._geometry = new THREE.PlaneGeometry(2, 2);
    this._quad = new THREE.Mesh(this._geometry, null);
    this._quad.frustumCulled = false;
    this._scene.add(this._quad);
    this._simTexel = new THREE.Vector2(1 / SIM_SIZE, 1 / SIM_SIZE);
    this._dyeTexel = new THREE.Vector2(1 / DYE_SIZE, 1 / DYE_SIZE);
    this._viewport = new THREE.Vector4();
    this._currentViewport = new THREE.Vector4();
    this._restoredViewport = new THREE.Vector4();
    this._scissor = new THREE.Vector4();
    this._clearColor = new THREE.Color();

    const makeTarget = (width, height = width) => {
      const target = new THREE.WebGLRenderTarget(width, height, {
        type: THREE.HalfFloatType,
        format: THREE.RGBAFormat,
        minFilter: this._linear ? THREE.LinearFilter : THREE.NearestFilter,
        magFilter: this._linear ? THREE.LinearFilter : THREE.NearestFilter,
        wrapS: THREE.ClampToEdgeWrapping,
        wrapT: THREE.ClampToEdgeWrapping,
        depthBuffer: false,
        stencilBuffer: false,
        generateMipmaps: false
      });
      target.texture.generateMipmaps = false;
      if (THREE.NoColorSpace !== undefined) target.texture.colorSpace = THREE.NoColorSpace;
      this._targets.push(target);
      return target;
    };
    const pair = size => ({ read: makeTarget(size), write: makeTarget(size) });
    this._velocity = pair(SIM_SIZE);
    this._density = pair(DYE_SIZE);
    this._pressure = pair(SIM_SIZE);
    this._divergence = makeTarget(SIM_SIZE);
    this._curl = makeTarget(SIM_SIZE);
    this._mask = makeTarget(this.width, this.height);

    const material = (fragmentShader, uniforms, defines) => {
      const result = new THREE.ShaderMaterial({
        vertexShader: VERTEX_SHADER,
        fragmentShader,
        uniforms,
        defines: defines || {},
        depthTest: false,
        depthWrite: false,
        blending: THREE.NoBlending,
        toneMapped: false
      });
      this._materials.push(result);
      return result;
    };
    const segments = Array.from({ length: SPLATS_PER_PASS }, () => new THREE.Vector4());
    const impulses = Array.from({ length: SPLATS_PER_PASS }, () => new THREE.Vector4());
    this._splat = material(SPLAT_SHADER, {
      uSource: { value: null }, uSegments: { value: segments }, uImpulses: { value: impulses },
      uCount: { value: 0 }, uIsDensity: { value: 0 }, uAspect: { value: 1 }
    });
    this._curlMaterial = material(CURL_SHADER, {
      uVelocity: { value: null }, uTexel: { value: this._simTexel }, uAspect: { value: 1 }
    });
    this._vorticity = material(VORTICITY_SHADER, {
      uVelocity: { value: null }, uCurl: { value: null }, uTexel: { value: this._simTexel },
      uAspect: { value: 1 }, uDt: { value: REFERENCE_DT }
    });
    this._divergenceMaterial = material(DIVERGENCE_SHADER, {
      uVelocity: { value: null }, uTexel: { value: this._simTexel }
    });
    this._decay = material(DECAY_SHADER, { uSource: { value: null }, uDecay: { value: 0.95 } });
    this._displayMask = material(MASK_SHADER, { uDensity: { value: null } });
    this._pressureMaterial = material(PRESSURE_SHADER, {
      uPressure: { value: null }, uDivergence: { value: null }, uTexel: { value: this._simTexel },
      uInvAspectSquared: { value: 1 }
    });
    this._gradient = material(GRADIENT_SHADER, {
      uPressure: { value: null }, uVelocity: { value: null }, uTexel: { value: this._simTexel },
      uInvAspectSquared: { value: 1 }
    });
    this._advection = material(ADVECTION_SHADER, {
      uVelocity: { value: null }, uSource: { value: null }, uVelocityTexel: { value: this._simTexel },
      uSourceTexel: { value: this._simTexel }, uDt: { value: REFERENCE_DT }, uDissipation: { value: 1 }
    }, this._linear ? {} : { MANUAL_FILTERING: 1 });

    this._withRendererState(() => {
      renderer.getClearColor(this._clearColor);
      const alpha = renderer.getClearAlpha();
      renderer.setClearColor(0x000000, 0);
      try {
        for (const target of this._targets) {
          renderer.setRenderTarget(target);
          renderer.clear(true, false, false);
        }
      } finally {
        renderer.setClearColor(this._clearColor, alpha);
      }
    });
  }

  get velocityTexture() {
    return this._supported && !this._disposed ? this._velocity.read.texture : (this._fallback || null);
  }

  get densityTexture() {
    return this._supported && !this._disposed ? this._mask.texture : (this._fallback || null);
  }

  // x/y are viewport CSS pixels, measured from the upper left.
  move(x, y) {
    if (this._disposed || !this._supported || !Number.isFinite(x) || !Number.isFinite(y)) return;
    const now = performance.now();
    const px = Math.max(0, Math.min(this.width, x));
    const py = Math.max(0, Math.min(this.height, y));
    const previous = this._lastPointer;
    const elapsed = previous ? now - previous.time : Infinity;
    const continuous = previous && elapsed >= 0 && elapsed < 50;
    const x0 = continuous ? previous.x : px;
    const y0 = continuous ? previous.y : py;
    // A gap resets the line's starting point, not the movement itself.
    const dx = previous ? px - previous.x : 0;
    const dy = previous ? py - previous.y : 0;
    const seconds = Math.max(elapsed / 1000, 1 / 120);
    let vx = previous ? (dx / this.width) / seconds * 0.65 : 0;
    let vy = previous ? -(dy / this.height) / seconds * 0.65 : 0;
    const aspect = this.width / this.height;
    const speed = Math.hypot(vx * aspect, vy);
    if (speed > 1.8) {
      vx *= 1.8 / speed;
      vy *= 1.8 / speed;
    }
    const distance = Math.hypot(dx, dy);
    const mobileScale = this.width <= 760 ? 0.8 : 1;
    const radius = Math.min(distance / 5, 1) * 60 * 0.6 * mobileScale / 200;
    if (distance <= 0.01) {
      this._lastPointer = { x: px, y: py, time: now };
      return;
    }
    this._pending.push({
      x0: x0 / this.width, y0: 1 - y0 / this.height,
      x1: px / this.width, y1: 1 - py / this.height,
      vx, vy, radius, dye: 0.8
    });
    if (this._pending.length > MAX_SPLATS) this._pending.shift();
    this._lastPointer = { x: px, y: py, time: now };
  }

  update(dt = REFERENCE_DT) {
    if (this._disposed || !this._supported) return;
    const step = Math.min(1 / 30, Math.max(0, Number.isFinite(dt) ? dt : REFERENCE_DT));
    const aspect = this.width / this.height;
    const invAspectSquared = 1 / (aspect * aspect);
    this._withRendererState(() => {
      this._applySplats(aspect);
      if (step === 0) return;

      const curl = this._curlMaterial.uniforms;
      curl.uVelocity.value = this._velocity.read.texture;
      curl.uAspect.value = aspect;
      this._render(this._curlMaterial, this._curl);

      const vortex = this._vorticity.uniforms;
      vortex.uVelocity.value = this._velocity.read.texture;
      vortex.uCurl.value = this._curl.texture;
      vortex.uAspect.value = aspect;
      vortex.uDt.value = step;
      this._render(this._vorticity, this._velocity.write);
      this._swap(this._velocity);

      this._divergenceMaterial.uniforms.uVelocity.value = this._velocity.read.texture;
      this._render(this._divergenceMaterial, this._divergence);

      this._decay.uniforms.uSource.value = this._pressure.read.texture;
      this._decay.uniforms.uDecay.value = Math.pow(0.95, step / REFERENCE_DT);
      this._render(this._decay, this._pressure.write);
      this._swap(this._pressure);

      const pressure = this._pressureMaterial.uniforms;
      pressure.uDivergence.value = this._divergence.texture;
      pressure.uInvAspectSquared.value = invAspectSquared;
      for (let i = 0; i < PRESSURE_ITERATIONS; i++) {
        pressure.uPressure.value = this._pressure.read.texture;
        this._render(this._pressureMaterial, this._pressure.write);
        this._swap(this._pressure);
      }

      const gradient = this._gradient.uniforms;
      gradient.uPressure.value = this._pressure.read.texture;
      gradient.uVelocity.value = this._velocity.read.texture;
      gradient.uInvAspectSquared.value = invAspectSquared;
      this._render(this._gradient, this._velocity.write);
      this._swap(this._velocity);

      const advection = this._advection.uniforms;
      advection.uDt.value = step;
      advection.uVelocity.value = this._velocity.read.texture;
      advection.uSource.value = this._velocity.read.texture;
      advection.uSourceTexel.value = this._simTexel;
      advection.uDissipation.value = Math.pow(0.98, step / REFERENCE_DT);
      this._render(this._advection, this._velocity.write);
      this._swap(this._velocity);

      advection.uVelocity.value = this._velocity.read.texture;
      advection.uSource.value = this._density.read.texture;
      advection.uSourceTexel.value = this._dyeTexel;
      advection.uDissipation.value = Math.pow(0.97, step / REFERENCE_DT);
      this._render(this._advection, this._density.write);
      this._swap(this._density);

      this._displayMask.uniforms.uDensity.value = this._density.read.texture;
      this._render(this._displayMask, this._mask);
    });
  }

  resize(width, height) {
    if (this._disposed) return;
    this.width = Math.max(1, Number(width) || 1);
    this.height = Math.max(1, Number(height) || 1);
    if (this._supported && this._mask) this._mask.setSize(this.width, this.height);
    // The grids are fixed-resolution; reset the pointer so a resize never
    // connects positions expressed in two different viewport coordinate systems.
    this._lastPointer = null;
    this._pending.length = 0;
  }

  dispose() {
    if (this._disposed) return;
    this._disposed = true;
    this._pending.length = 0;
    for (const target of this._targets) target.dispose();
    for (const material of this._materials) material.dispose();
    if (this._geometry) this._geometry.dispose();
    if (this._fallback) this._fallback.dispose();
    this._fallback = null;
  }

  _applySplats(aspect) {
    if (!this._pending.length) return;
    const uniforms = this._splat.uniforms;
    uniforms.uAspect.value = aspect;
    for (let start = 0; start < this._pending.length; start += SPLATS_PER_PASS) {
      const count = Math.min(SPLATS_PER_PASS, this._pending.length - start);
      uniforms.uCount.value = count;
      for (let i = 0; i < count; i++) {
        const s = this._pending[start + i];
        uniforms.uSegments.value[i].set(s.x0, s.y0, s.x1, s.y1);
        uniforms.uImpulses.value[i].set(s.vx, s.vy, s.radius, s.dye);
      }
      uniforms.uIsDensity.value = 0;
      uniforms.uSource.value = this._velocity.read.texture;
      this._render(this._splat, this._velocity.write);
      this._swap(this._velocity);
      uniforms.uIsDensity.value = 1;
      uniforms.uSource.value = this._density.read.texture;
      this._render(this._splat, this._density.write);
      this._swap(this._density);
    }
    this._pending.length = 0;
  }

  _render(material, target) {
    this._quad.material = material;
    this.renderer.setRenderTarget(target);
    this.renderer.render(this._scene, this._camera);
  }

  _swap(pair) {
    const temp = pair.read;
    pair.read = pair.write;
    pair.write = temp;
  }

  _withRendererState(callback) {
    const renderer = this.renderer;
    const target = renderer.getRenderTarget();
    const face = renderer.getActiveCubeFace();
    const level = renderer.getActiveMipmapLevel();
    const autoClear = renderer.autoClear;
    const xrEnabled = renderer.xr.enabled;
    const shadowAutoUpdate = renderer.shadowMap.autoUpdate;
    const gl = renderer.getContext();
    const scissor = gl.getParameter(gl.SCISSOR_BOX);
    const scissorTest = gl.isEnabled(gl.SCISSOR_TEST);
    this._scissor.set(scissor[0], scissor[1], scissor[2], scissor[3]);
    renderer.getViewport(this._viewport);
    renderer.getCurrentViewport(this._currentViewport);
    renderer.autoClear = false;
    renderer.xr.enabled = false;
    renderer.shadowMap.autoUpdate = false;
    try {
      callback();
    } finally {
      renderer.setRenderTarget(target, face, level);
      // If the caller overrode the active viewport after binding its target,
      // setRenderTarget alone restores the target's default rather than that override.
      renderer.getCurrentViewport(this._restoredViewport);
      if (!this._restoredViewport.equals(this._currentViewport)) renderer.setViewport(this._viewport);
      // The active scissor can likewise have been overridden after binding a
      // render target. Restore it without changing the renderer's global defaults.
      renderer.state.scissor(this._scissor);
      renderer.state.setScissorTest(scissorTest);
      renderer.autoClear = autoClear;
      renderer.xr.enabled = xrEnabled;
      renderer.shadowMap.autoUpdate = shadowAutoUpdate;
    }
  }
}
