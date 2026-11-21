(()=>{var hu=Object.defineProperty;var Ts=(r,e,t)=>()=>{if(t)throw t[0];try{return r&&(e=r(r=0)),e}catch(n){throw t=[n],n}};var Oa=(r,e)=>{for(var t in e)hu(r,t,{get:e[t],enumerable:!0})};function Kt(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[r&255]+yt[r>>8&255]+yt[r>>16&255]+yt[r>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function Qo(r,e){return(r%e+e)%e}function rh(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function oh(r,e,t){return r!==e?(t-r)/(e-r):0}function rs(r,e,t){return(1-t)*r+t*e}function ah(r,e,t,n){return rs(r,e,1-Math.exp(-t*n))}function ch(r,e=1){return e-Math.abs(Qo(r,e*2)-e)}function lh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function uh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function hh(r,e){return r+Math.floor(Math.random()*(e-r+1))}function dh(r,e){return r+Math.random()*(e-r)}function fh(r){return r*(.5-Math.random())}function ph(r){r!==void 0&&(mc=r);let e=mc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mh(r){return r*ss}function gh(r){return r*hs}function _o(r){return(r&r-1)===0&&r!==0}function _l(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function vl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function xh(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),m=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,c*h,c*d,o*l);break;case"YZY":r.set(c*d,o*u,c*h,o*l);break;case"ZXZ":r.set(c*h,c*d,o*u,o*l);break;case"XZX":r.set(o*u,c*g,c*m,o*l);break;case"YXY":r.set(c*m,o*u,c*g,o*l);break;case"ZYZ":r.set(c*g,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ge(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}function Al(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ds(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}function vh(r){return r.convertSRGBToLinear(),Tn.set(r.r,r.g,r.b).applyMatrix3(_h),r.setRGB(Tn.x,Tn.y,Tn.z)}function Ah(r){return Tn.set(r.r,r.g,r.b).applyMatrix3(yh),r.setRGB(Tn.x,Tn.y,Tn.z).convertLinearToSRGB()}function qr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$s.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Xr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Yn.fromArray(r,s);let o=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),c=e.dot(Yn),l=t.dot(Yn),u=n.dot(Yn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}function no(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Nh(r,e,t,n,i,s,a,o){let c;if(e.side===Ct?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===on,o),c===null)return null;Vs.copy(o),Vs.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(Vs);return l<t.near||l>t.far?null:{distance:l,point:Vs.clone(),object:r}}function Hs(r,e,t,n,i,s,a,o,c){r.getVertexPosition(a,Zi),r.getVertexPosition(o,Qi),r.getVertexPosition(c,Ji);let l=Nh(r,e,t,n,Zi,Qi,Ji,ro);if(l){i&&(Bs.fromBufferAttribute(i,a),ks.fromBufferAttribute(i,o),zs.fromBufferAttribute(i,c),l.uv=os.getUV(ro,Zi,Qi,Ji,Bs,ks,zs,new Me)),s&&(Bs.fromBufferAttribute(s,a),ks.fromBufferAttribute(s,o),zs.fromBufferAttribute(s,c),l.uv2=os.getUV(ro,Zi,Qi,Ji,Bs,ks,zs,new Me));let u={a,b:o,c,normal:new C,materialIndex:0};os.getNormal(Zi,Qi,Ji,u.normal),l.face=u}return l}function Li(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tt(r){let e={};for(let t=0;t<r.length;t++){let n=Li(r[t]);for(let i in n)e[i]=n[i]}return e}function Fh(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ml(r){return r.getRenderTarget()===null&&r.outputEncoding===Ie?sn:us}function wl(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Vh(r,e){let t=e.isWebGL2,n=new WeakMap;function i(l,u){let h=l.array,d=l.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){let d=u.array,m=u.updateRange;r.bindBuffer(h,l),m.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:a,remove:o,update:c}}function Ap(r,e,t,n,i,s,a){let o=new Ae(0),c=s===!0?0:1,l,u,h=null,d=0,m=null;function g(f,x){let _=!1,y=x.isScene===!0?x.background:null;y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y));let b=r.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?p(o,c):y&&y.isColor&&(p(y,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===br)?(u===void 0&&(u=new Ze(new ti(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:Li(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,L,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=y.encoding!==Ie,(h!==y||d!==y.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,m=r.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ze(new Ln(2,2),new Gt({name:"BackgroundMaterial",uniforms:Li(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=y.encoding!==Ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,m=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,x){f.getRGB(Ws,Ml(r)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(f,x=1){o.set(f),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(o,c)},render:g}}function bp(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=f(null),l=c,u=!1;function h(O,I,V,Y,k){let G=!1;if(a){let J=p(Y,V,I);l!==J&&(l=J,m(l.object)),G=x(O,Y,V,k),G&&_(O,Y,V,k)}else{let J=I.wireframe===!0;(l.geometry!==Y.id||l.program!==V.id||l.wireframe!==J)&&(l.geometry=Y.id,l.program=V.id,l.wireframe=J,G=!0)}k!==null&&t.update(k,34963),(G||u)&&(u=!1,v(O,I,V,Y),k!==null&&r.bindBuffer(34963,t.get(k).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(O){return n.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function p(O,I,V){let Y=V.wireframe===!0,k=o[O.id];k===void 0&&(k={},o[O.id]=k);let G=k[I.id];G===void 0&&(G={},k[I.id]=G);let J=G[Y];return J===void 0&&(J=f(d()),G[Y]=J),J}function f(O){let I=[],V=[],Y=[];for(let k=0;k<i;k++)I[k]=0,V[k]=0,Y[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:Y,object:O,attributes:{},index:null}}function x(O,I,V,Y){let k=l.attributes,G=I.attributes,J=0,W=V.getAttributes();for(let P in W)if(W[P].location>=0){let ne=k[P],U=G[P];if(U===void 0&&(P==="instanceMatrix"&&O.instanceMatrix&&(U=O.instanceMatrix),P==="instanceColor"&&O.instanceColor&&(U=O.instanceColor)),ne===void 0||ne.attribute!==U||U&&ne.data!==U.data)return!0;J++}return l.attributesNum!==J||l.index!==Y}function _(O,I,V,Y){let k={},G=I.attributes,J=0,W=V.getAttributes();for(let P in W)if(W[P].location>=0){let ne=G[P];ne===void 0&&(P==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),P==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor));let U={};U.attribute=ne,ne&&ne.data&&(U.data=ne.data),k[P]=U,J++}l.attributes=k,l.attributesNum=J,l.index=Y}function y(){let O=l.newAttributes;for(let I=0,V=O.length;I<V;I++)O[I]=0}function b(O){M(O,0)}function M(O,I){let V=l.newAttributes,Y=l.enabledAttributes,k=l.attributeDivisors;V[O]=1,Y[O]===0&&(r.enableVertexAttribArray(O),Y[O]=1),k[O]!==I&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,I),k[O]=I)}function R(){let O=l.newAttributes,I=l.enabledAttributes;for(let V=0,Y=I.length;V<Y;V++)I[V]!==O[V]&&(r.disableVertexAttribArray(V),I[V]=0)}function L(O,I,V,Y,k,G){n.isWebGL2===!0&&(V===5124||V===5125)?r.vertexAttribIPointer(O,I,V,k,G):r.vertexAttribPointer(O,I,V,Y,k,G)}function v(O,I,V,Y){if(n.isWebGL2===!1&&(O.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let k=Y.attributes,G=V.getAttributes(),J=I.defaultAttributeValues;for(let W in G){let P=G[W];if(P.location>=0){let $=k[W];if($===void 0&&(W==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),W==="instanceColor"&&O.instanceColor&&($=O.instanceColor)),$!==void 0){let ne=$.normalized,U=$.itemSize,oe=t.get($);if(oe===void 0)continue;let ae=oe.buffer,he=oe.type,ee=oe.bytesPerElement;if($.isInterleavedBufferAttribute){let re=$.data,me=re.stride,de=$.offset;if(re.isInstancedInterleavedBuffer){for(let be=0;be<P.locationSize;be++)M(P.location+be,re.meshPerAttribute);O.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let be=0;be<P.locationSize;be++)b(P.location+be);r.bindBuffer(34962,ae);for(let be=0;be<P.locationSize;be++)L(P.location+be,U/P.locationSize,he,ne,me*ee,(de+U/P.locationSize*be)*ee)}else{if($.isInstancedBufferAttribute){for(let re=0;re<P.locationSize;re++)M(P.location+re,$.meshPerAttribute);O.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let re=0;re<P.locationSize;re++)b(P.location+re);r.bindBuffer(34962,ae);for(let re=0;re<P.locationSize;re++)L(P.location+re,U/P.locationSize,he,ne,U*ee,U/P.locationSize*re*ee)}}else if(J!==void 0){let ne=J[W];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(P.location,ne);break;case 3:r.vertexAttrib3fv(P.location,ne);break;case 4:r.vertexAttrib4fv(P.location,ne);break;default:r.vertexAttrib1fv(P.location,ne)}}}}R()}function E(){Q();for(let O in o){let I=o[O];for(let V in I){let Y=I[V];for(let k in Y)g(Y[k].object),delete Y[k];delete I[V]}delete o[O]}}function N(O){if(o[O.id]===void 0)return;let I=o[O.id];for(let V in I){let Y=I[V];for(let k in Y)g(Y[k].object),delete Y[k];delete I[V]}delete o[O.id]}function q(O){for(let I in o){let V=o[I];if(V[O.id]===void 0)continue;let Y=V[O.id];for(let k in Y)g(Y[k].object),delete Y[k];delete V[O.id]}}function Q(){F(),u=!0,l!==c&&(l=c,m(l.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:F,dispose:E,releaseStatesOfGeometry:N,releaseStatesOfProgram:q,initAttributes:y,enableAttribute:b,disableUnusedAttributes:R}}function Mp(r,e,t,n){let i=n.isWebGL2,s;function a(l){s=l}function o(l,u){r.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=c}function wp(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext,o=t.precision!==void 0?t.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),x=r.getParameter(36348),_=r.getParameter(36349),y=d>0,b=a||e.has("OES_texture_float"),M=y&&b,R=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:M,maxSamples:R}}function Sp(r){let e=this,t=null,n=0,i=!1,s=!1,a=new xn,o=new Rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){let g=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,x=r.get(h);if(!i||g===null||g.length===0||s&&!f)s?u(null):l();else{let _=s?0:n,y=_*4,b=x.clippingState||null;c.value=b,b=u(g,d,y,m);for(let M=0;M!==y;++M)b[M]=t[M];x.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){let p=h!==null?h.length:0,f=null;if(p!==0){if(f=c.value,g!==!0||f===null){let x=m+p*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(f===null||f.length<x)&&(f=new Float32Array(x));for(let y=0,b=m;y!==p;++y,b+=4)a.copy(h[y]).applyMatrix4(_,o),a.normal.toArray(f,b),f[b+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function Ep(r){let e=new WeakMap;function t(a,o){return o===mo?a.mapping=Ei:o===go&&(a.mapping=Ti),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let o=a.mapping;if(o===mo||o===go)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new bo(c.height/2);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}function Tp(r){let e=[],t=[],n=[],i=r,s=r-Ai+1+Tc.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>r-Ai?c=Tc[a-r+Ai-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,f=2,x=1,_=new Float32Array(p*g*m),y=new Float32Array(f*g*m),b=new Float32Array(x*g*m);for(let R=0;R<m;R++){let L=R%3*2/3-1,v=R>2?0:-1,E=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];_.set(E,p*g*R),y.set(d,f*g*R);let N=[R,R,R,R,R,R];b.set(N,x*g*R)}let M=new Lt;M.setAttribute("position",new ot(_,p)),M.setAttribute("uv",new ot(y,f)),M.setAttribute("faceIndex",new ot(b,x)),e.push(M),i>Ai&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lc(r,e,t){let n=new Ht(r,e,t);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Rp(r,e,t){let n=new Float32Array(jn),i=new C(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ic(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Pc(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Jo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cp(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===mo||c===go,u=c===Ei||c===Ti;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Ii(r)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{let h=o.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Ii(r));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Lp(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ip(r,e,t,n){let i={},s=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let g in d)e.update(d[g],34962);let m=h.morphAttributes;for(let g in m){let p=m[g];for(let f=0,x=p.length;f<x;f++)e.update(p[f],34962)}}function l(h){let d=[],m=h.index,g=h.attributes.position,p=0;if(m!==null){let _=m.array;p=m.version;for(let y=0,b=_.length;y<b;y+=3){let M=_[y+0],R=_[y+1],L=_[y+2];d.push(M,R,R,L,L,M)}}else{let _=g.array;p=g.version;for(let y=0,b=_.length/3-1;y<b;y+=3){let M=y+0,R=y+1,L=y+2;d.push(M,R,R,L,L,M)}}let f=new(Al(d)?rr:sr)(d,1);f.version=p;let x=s.get(h);x&&e.remove(x),s.set(h,f)}function u(h){let d=s.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Pp(r,e,t,n){let i=n.isWebGL2,s;function a(d){s=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function u(d,m){r.drawElements(s,m,o,d*c),t.update(m,s,1)}function h(d,m,g){if(g===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,o,d*c,g),t.update(m,s,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function Dp(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Np(r,e){return r[0]-e[0]}function Fp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Op(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new We,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0,p=s.get(u);if(p===void 0||p.count!==g){let O=function(){Q.dispose(),s.delete(u),u.removeEventListener("dispose",O)};p!==void 0&&p.texture.dispose();let _=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],L=u.morphAttributes.color||[],v=0;_===!0&&(v=1),y===!0&&(v=2),b===!0&&(v=3);let E=u.attributes.position.count*v,N=1;E>e.maxTextureSize&&(N=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let q=new Float32Array(E*N*4*g),Q=new tr(q,E,N,g);Q.type=En,Q.needsUpdate=!0;let F=v*4;for(let I=0;I<g;I++){let V=M[I],Y=R[I],k=L[I],G=E*N*4*I;for(let J=0;J<V.count;J++){let W=J*F;_===!0&&(a.fromBufferAttribute(V,J),q[G+W+0]=a.x,q[G+W+1]=a.y,q[G+W+2]=a.z,q[G+W+3]=0),y===!0&&(a.fromBufferAttribute(Y,J),q[G+W+4]=a.x,q[G+W+5]=a.y,q[G+W+6]=a.z,q[G+W+7]=0),b===!0&&(a.fromBufferAttribute(k,J),q[G+W+8]=a.x,q[G+W+9]=a.y,q[G+W+10]=a.z,q[G+W+11]=k.itemSize===4?a.w:1)}}p={count:g,texture:Q,size:new Me(E,N)},s.set(u,p),u.addEventListener("dispose",O)}let f=0;for(let _=0;_<d.length;_++)f+=d[_];let x=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{let m=d===void 0?0:d.length,g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let y=0;y<m;y++)g[y]=[y,0];n[u.id]=g}for(let y=0;y<m;y++){let b=g[y];b[0]=y,b[1]=d[y]}g.sort(Fp);for(let y=0;y<8;y++)y<m&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Np);let p=u.morphAttributes.position,f=u.morphAttributes.normal,x=0;for(let y=0;y<8;y++){let b=o[y],M=b[0],R=b[1];M!==Number.MAX_SAFE_INTEGER&&R?(p&&u.getAttribute("morphTarget"+y)!==p[M]&&u.setAttribute("morphTarget"+y,p[M]),f&&u.getAttribute("morphNormal"+y)!==f[M]&&u.setAttribute("morphNormal"+y,f[M]),i[y]=R,x+=R):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),f&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}let _=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(r,"morphTargetBaseInfluence",_),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Up(r,e,t,n){let i=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}function zi(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Dc[i];if(s===void 0&&(s=new Float32Array(i),Dc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function at(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ct(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Sr(r,e){let t=Nc[e];t===void 0&&(t=new Int32Array(e),Nc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Bp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function kp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;r.uniform2fv(this.addr,e),ct(t,e)}}function zp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;r.uniform3fv(this.addr,e),ct(t,e)}}function Vp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;r.uniform4fv(this.addr,e),ct(t,e)}}function Hp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(at(t,n))return;Uc.set(n),r.uniformMatrix2fv(this.addr,!1,Uc),ct(t,n)}}function Gp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(at(t,n))return;Oc.set(n),r.uniformMatrix3fv(this.addr,!1,Oc),ct(t,n)}}function Wp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(at(t,n))return;Fc.set(n),r.uniformMatrix4fv(this.addr,!1,Fc),ct(t,n)}}function qp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Yp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;r.uniform2iv(this.addr,e),ct(t,e)}}function Xp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;r.uniform3iv(this.addr,e),ct(t,e)}}function jp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;r.uniform4iv(this.addr,e),ct(t,e)}}function Kp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Zp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;r.uniform2uiv(this.addr,e),ct(t,e)}}function Qp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;r.uniform3uiv(this.addr,e),ct(t,e)}}function Jp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;r.uniform4uiv(this.addr,e),ct(t,e)}}function $p(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Sl,i)}function em(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Tl,i)}function tm(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rl,i)}function nm(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||El,i)}function im(r){switch(r){case 5126:return Bp;case 35664:return kp;case 35665:return zp;case 35666:return Vp;case 35674:return Hp;case 35675:return Gp;case 35676:return Wp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return Xp;case 35669:case 35673:return jp;case 5125:return Kp;case 36294:return Zp;case 36295:return Qp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return nm}}function sm(r,e){r.uniform1fv(this.addr,e)}function rm(r,e){let t=zi(e,this.size,2);r.uniform2fv(this.addr,t)}function om(r,e){let t=zi(e,this.size,3);r.uniform3fv(this.addr,t)}function am(r,e){let t=zi(e,this.size,4);r.uniform4fv(this.addr,t)}function cm(r,e){let t=zi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lm(r,e){let t=zi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function um(r,e){let t=zi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hm(r,e){r.uniform1iv(this.addr,e)}function dm(r,e){r.uniform2iv(this.addr,e)}function fm(r,e){r.uniform3iv(this.addr,e)}function pm(r,e){r.uniform4iv(this.addr,e)}function mm(r,e){r.uniform1uiv(this.addr,e)}function gm(r,e){r.uniform2uiv(this.addr,e)}function xm(r,e){r.uniform3uiv(this.addr,e)}function ym(r,e){r.uniform4uiv(this.addr,e)}function _m(r,e,t){let n=this.cache,i=e.length,s=Sr(t,i);at(n,s)||(r.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Sl,s[a])}function vm(r,e,t){let n=this.cache,i=e.length,s=Sr(t,i);at(n,s)||(r.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Tl,s[a])}function Am(r,e,t){let n=this.cache,i=e.length,s=Sr(t,i);at(n,s)||(r.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Rl,s[a])}function bm(r,e,t){let n=this.cache,i=e.length,s=Sr(t,i);at(n,s)||(r.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||El,s[a])}function Mm(r){switch(r){case 5126:return sm;case 35664:return rm;case 35665:return om;case 35666:return am;case 35674:return cm;case 35675:return lm;case 35676:return um;case 5124:case 35670:return hm;case 35667:case 35671:return dm;case 35668:case 35672:return fm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return xm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return bm}}function Bc(r,e){r.seq.push(e),r.map[e.id]=e}function wm(r,e,t){let n=r.name,i=n.length;for(lo.lastIndex=0;;){let s=lo.exec(n),a=lo.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Bc(t,l===void 0?new Mo(o,r,e):new wo(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new So(o),Bc(t,h)),t=h}}}function kc(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}function Em(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Tm(r){switch(r){case ei:return["Linear","( value )"];case Ie:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function zc(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Em(r.getShaderSource(e),a)}else return i}function Rm(r,e){let t=Tm(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Cm(r,e){let t;switch(e){case Fu:t="Linear";break;case Ou:t="Reinhard";break;case Uu:t="OptimizedCineon";break;case Ko:t="ACESFilmic";break;case Bu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Lm(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ns).join(`
`)}function Im(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pm(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ns(r){return r!==""}function Vc(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Eo(r){return r.replace(Dm,Nm)}function Nm(r,e){let t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Eo(t)}function Gc(r){return r.replace(Fm,Om)}function Om(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Um(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===dl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ts&&(e="SHADOWMAP_TYPE_VSM"),e}function Bm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ei:case Ti:e="ENVMAP_TYPE_CUBE";break;case br:e="ENVMAP_TYPE_CUBE_UV";break}return e}function km(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Ti&&(e="ENVMAP_MODE_REFRACTION"),e}function zm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case jo:e="ENVMAP_BLENDING_MULTIPLY";break;case Du:e="ENVMAP_BLENDING_MIX";break;case Nu:e="ENVMAP_BLENDING_ADD";break}return e}function Vm(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hm(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Um(t),l=Bm(t),u=km(t),h=zm(t),d=Vm(t),m=t.isWebGL2?"":Lm(t),g=Im(s),p=i.createProgram(),f,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(ns).join(`
`),f.length>0&&(f+=`
`),x=[m,g].filter(ns).join(`
`),x.length>0&&(x+=`
`)):(f=[Wc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),x=[m,Wc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Te.tonemapping_pars_fragment:"",t.toneMapping!==_n?Cm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,Rm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),a=Eo(a),a=Vc(a,t),a=Hc(a,t),o=Eo(o),o=Vc(o,t),o=Hc(o,t),a=Gc(a),o=Gc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["#define varying in",t.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let y=_+f+a,b=_+x+o,M=kc(i,35633,y),R=kc(i,35632,b);if(i.attachShader(p,M),i.attachShader(p,R),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){let E=i.getProgramInfoLog(p).trim(),N=i.getShaderInfoLog(M).trim(),q=i.getShaderInfoLog(R).trim(),Q=!0,F=!0;if(i.getProgramParameter(p,35714)===!1){Q=!1;let O=zc(i,M,"vertex"),I=zc(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+O+`
`+I)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(N===""||q==="")&&(F=!1);F&&(this.diagnostics={runnable:Q,programLog:E,vertexShader:{log:N,prefix:f},fragmentShader:{log:q,prefix:x}})}i.deleteShader(M),i.deleteShader(R);let L;this.getUniforms=function(){return L===void 0&&(L=new Si(i,p)),L};let v;return this.getAttributes=function(){return v===void 0&&(v=Pm(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Sm++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=R,this}function Wm(r,e,t,n,i,s,a){let o=new ir,c=new To,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,E,N,q,Q){let F=q.fog,O=Q.geometry,I=v.isMeshStandardMaterial?q.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||I),Y=V&&V.mapping===br?V.image.height:null,k=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));let G=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,J=G!==void 0?G.length:0,W=0;O.morphAttributes.position!==void 0&&(W=1),O.morphAttributes.normal!==void 0&&(W=2),O.morphAttributes.color!==void 0&&(W=3);let P,$,ne,U;if(k){let me=rn[k];P=me.vertexShader,$=me.fragmentShader}else P=v.vertexShader,$=v.fragmentShader,c.update(v),ne=c.getVertexShaderID(v),U=c.getFragmentShaderID(v);let oe=r.getRenderTarget(),ae=v.alphaTest>0,he=v.clearcoat>0,ee=v.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:v.type,vertexShader:P,fragmentShader:$,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:U,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:d,outputEncoding:oe===null?r.outputEncoding:oe.isXRRenderTarget===!0?oe.texture.encoding:ei,map:!!v.map,matcap:!!v.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:Y,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===ih,tangentSpaceNormalMap:v.normalMapType===wr,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ie,clearcoat:he,clearcoatMap:he&&!!v.clearcoatMap,clearcoatRoughnessMap:he&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!v.clearcoatNormalMap,iridescence:ee,iridescenceMap:ee&&!!v.iridescenceMap,iridescenceThicknessMap:ee&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===bi,alphaMap:!!v.alphaMap,alphaTest:ae,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!O.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!F,useFog:v.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:W,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:_n,useLegacyLights:r.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ut,flipSided:v.side===Ct,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let N in v.defines)E.push(N),E.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(x(E,v),_(E,v),E.push(r.outputEncoding)),E.push(v.customProgramCacheKey),E.join()}function x(v,E){v.push(E.precision),v.push(E.outputEncoding),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.combine),v.push(E.vertexUvs),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function _(v,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.specularIntensityMap&&o.enable(15),E.specularColorMap&&o.enable(16),E.transmission&&o.enable(17),E.transmissionMap&&o.enable(18),E.thicknessMap&&o.enable(19),E.sheen&&o.enable(20),E.sheenColorMap&&o.enable(21),E.sheenRoughnessMap&&o.enable(22),E.decodeVideoTexture&&o.enable(23),E.opaque&&o.enable(24),v.push(o.mask)}function y(v){let E=g[v.type],N;if(E){let q=rn[E];N=Oh.clone(q.uniforms)}else N=v.uniforms;return N}function b(v,E){let N;for(let q=0,Q=l.length;q<Q;q++){let F=l[q];if(F.cacheKey===E){N=F,++N.usedTimes;break}}return N===void 0&&(N=new Hm(r,E,v,s),l.push(N)),N}function M(v){if(--v.usedTimes===0){let E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),v.destroy()}}function R(v){c.remove(v)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:b,releaseProgram:M,releaseShaderCache:R,programs:l,dispose:L}}function qm(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ym(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function qc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Yc(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,m,g,p,f){let x=r[e];return x===void 0?(x={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:f},r[e]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=m,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=p,x.group=f),e++,x}function o(h,d,m,g,p,f){let x=a(h,d,m,g,p,f);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function c(h,d,m,g,p,f){let x=a(h,d,m,g,p,f);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function l(h,d){t.length>1&&t.sort(h||Ym),n.length>1&&n.sort(d||qc),i.length>1&&i.sort(d||qc)}function u(){for(let h=e,d=r.length;h<d;h++){let m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function Xm(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new Yc,r.set(n,[a])):i>=s.length?(a=new Yc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function jm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ae};break;case"SpotLight":t={position:new C,direction:new C,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function Km(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}function Qm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Jm(r,e){let t=new jm,n=Km(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new C);let s=new C,a=new Re,o=new Re;function c(u,h){let d=0,m=0,g=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let p=0,f=0,x=0,_=0,y=0,b=0,M=0,R=0,L=0,v=0;u.sort(Qm);let E=h===!0?Math.PI:1;for(let q=0,Q=u.length;q<Q;q++){let F=u[q],O=F.color,I=F.intensity,V=F.distance,Y=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=O.r*I*E,m+=O.g*I*E,g+=O.b*I*E;else if(F.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(F.sh.coefficients[k],I);else if(F.isDirectionalLight){let k=t.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity*E),F.castShadow){let G=F.shadow,J=n.get(F);J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=F.shadow.matrix,b++}i.directional[p]=k,p++}else if(F.isSpotLight){let k=t.get(F);k.position.setFromMatrixPosition(F.matrixWorld),k.color.copy(O).multiplyScalar(I*E),k.distance=V,k.coneCos=Math.cos(F.angle),k.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),k.decay=F.decay,i.spot[x]=k;let G=F.shadow;if(F.map&&(i.spotLightMap[L]=F.map,L++,G.updateMatrices(F),F.castShadow&&v++),i.spotLightMatrix[x]=G.matrix,F.castShadow){let J=n.get(F);J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,i.spotShadow[x]=J,i.spotShadowMap[x]=Y,R++}x++}else if(F.isRectAreaLight){let k=t.get(F);k.color.copy(O).multiplyScalar(I),k.halfWidth.set(F.width*.5,0,0),k.halfHeight.set(0,F.height*.5,0),i.rectArea[_]=k,_++}else if(F.isPointLight){let k=t.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity*E),k.distance=F.distance,k.decay=F.decay,F.castShadow){let G=F.shadow,J=n.get(F);J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,i.pointShadow[f]=J,i.pointShadowMap[f]=Y,i.pointShadowMatrix[f]=F.shadow.matrix,M++}i.point[f]=k,f++}else if(F.isHemisphereLight){let k=t.get(F);k.skyColor.copy(F.color).multiplyScalar(I*E),k.groundColor.copy(F.groundColor).multiplyScalar(I*E),i.hemi[y]=k,y++}}_>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;let N=i.hash;(N.directionalLength!==p||N.pointLength!==f||N.spotLength!==x||N.rectAreaLength!==_||N.hemiLength!==y||N.numDirectionalShadows!==b||N.numPointShadows!==M||N.numSpotShadows!==R||N.numSpotMaps!==L)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=_,i.point.length=f,i.hemi.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=R+L-v,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=v,N.directionalLength=p,N.pointLength=f,N.spotLength=x,N.rectAreaLength=_,N.hemiLength=y,N.numDirectionalShadows=b,N.numPointShadows=M,N.numSpotShadows=R,N.numSpotMaps=L,i.version=Zm++)}function l(u,h){let d=0,m=0,g=0,p=0,f=0,x=h.matrixWorldInverse;for(let _=0,y=u.length;_<y;_++){let b=u[_];if(b.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),d++}else if(b.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),g++}else if(b.isRectAreaLight){let M=i.rectArea[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),o.identity(),a.copy(b.matrixWorld),a.premultiply(x),o.extractRotation(a),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){let M=i.point[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),m++}else if(b.isHemisphereLight){let M=i.hemi[f];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(x),f++}}}return{setup:c,setupView:l,state:i}}function Xc(r,e){let t=new Jm(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function $m(r,e){let t=new WeakMap;function n(s,a=0){let o=t.get(s),c;return o===void 0?(c=new Xc(r,e),t.set(s,[c])):a>=o.length?(c=new Xc(r,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}function ng(r,e,t){let n=new ps,i=new Me,s=new Me,a=new We,o=new Co({depthPacking:nh}),c=new Lo,l={},u=t.maxTextureSize,h={[on]:Ct,[Ct]:on,[Ut]:Ut},d=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:eg,fragmentShader:tg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Lt;g.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new Ze(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl,this.render=function(b,M,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;let L=r.getRenderTarget(),v=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Rn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let q=0,Q=b.length;q<Q;q++){let F=b[q],O=F.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let I=O.getFrameExtents();if(i.multiply(I),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/I.x),i.x=s.x*I.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/I.y),i.y=s.y*I.y,O.mapSize.y=s.y)),O.map===null){let Y=this.type!==ts?{minFilter:$e,magFilter:$e}:{};O.map=new Ht(i.x,i.y,Y),O.map.texture.name=F.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();let V=O.getViewportCount();for(let Y=0;Y<V;Y++){let k=O.getViewport(Y);a.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),N.viewport(a),O.updateMatrices(F,Y),n=O.getFrustum(),y(M,R,O.camera,F,this.type)}O.isPointLightShadow!==!0&&this.type===ts&&x(O,R),O.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(L,v,E)};function x(b,M){let R=e.update(p);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ht(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(M,null,R,d,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(M,null,R,m,p,null)}function _(b,M,R,L,v,E){let N=null,q=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(q!==void 0)N=q;else if(N=R.isPointLight===!0?c:o,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){let Q=N.uuid,F=M.uuid,O=l[Q];O===void 0&&(O={},l[Q]=O);let I=O[F];I===void 0&&(I=N.clone(),O[F]=I),N=I}return N.visible=M.visible,N.wireframe=M.wireframe,E===ts?N.side=M.shadowSide!==null?M.shadowSide:M.side:N.side=M.shadowSide!==null?M.shadowSide:h[M.side],N.alphaMap=M.alphaMap,N.alphaTest=M.alphaTest,N.map=M.map,N.clipShadows=M.clipShadows,N.clippingPlanes=M.clippingPlanes,N.clipIntersection=M.clipIntersection,N.displacementMap=M.displacementMap,N.displacementScale=M.displacementScale,N.displacementBias=M.displacementBias,N.wireframeLinewidth=M.wireframeLinewidth,N.linewidth=M.linewidth,R.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(R.matrixWorld),N.nearDistance=L,N.farDistance=v),N}function y(b,M,R,L,v){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===ts)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);let q=e.update(b),Q=b.material;if(Array.isArray(Q)){let F=q.groups;for(let O=0,I=F.length;O<I;O++){let V=F[O],Y=Q[V.materialIndex];if(Y&&Y.visible){let k=_(b,Y,L,R.near,R.far,v);r.renderBufferDirect(R,null,q,k,b,V)}}}else if(Q.visible){let F=_(b,Q,L,R.near,R.far,v);r.renderBufferDirect(R,null,q,F,b,null)}}let N=b.children;for(let q=0,Q=N.length;q<Q;q++)y(N[q],M,R,L,v)}}function ig(r,e,t){let n=t.isWebGL2;function i(){let D=!1,K=new We,te=null,pe=new We(0,0,0,0);return{setMask:function(ge){te!==ge&&!D&&(r.colorMask(ge,ge,ge,ge),te=ge)},setLocked:function(ge){D=ge},setClear:function(ge,je,ut,wt,en){en===!0&&(ge*=wt,je*=wt,ut*=wt),K.set(ge,je,ut,wt),pe.equals(K)===!1&&(r.clearColor(ge,je,ut,wt),pe.copy(K))},reset:function(){D=!1,te=null,pe.set(-1,0,0,0)}}}function s(){let D=!1,K=null,te=null,pe=null;return{setTest:function(ge){ge?ae(2929):he(2929)},setMask:function(ge){K!==ge&&!D&&(r.depthMask(ge),K=ge)},setFunc:function(ge){if(te!==ge){switch(ge){case Eu:r.depthFunc(512);break;case Tu:r.depthFunc(519);break;case Ru:r.depthFunc(513);break;case po:r.depthFunc(515);break;case Cu:r.depthFunc(514);break;case Lu:r.depthFunc(518);break;case Iu:r.depthFunc(516);break;case Pu:r.depthFunc(517);break;default:r.depthFunc(515)}te=ge}},setLocked:function(ge){D=ge},setClear:function(ge){pe!==ge&&(r.clearDepth(ge),pe=ge)},reset:function(){D=!1,K=null,te=null,pe=null}}}function a(){let D=!1,K=null,te=null,pe=null,ge=null,je=null,ut=null,wt=null,en=null;return{setTest:function(tt){D||(tt?ae(2960):he(2960))},setMask:function(tt){K!==tt&&!D&&(r.stencilMask(tt),K=tt)},setFunc:function(tt,Bt,tn){(te!==tt||pe!==Bt||ge!==tn)&&(r.stencilFunc(tt,Bt,tn),te=tt,pe=Bt,ge=tn)},setOp:function(tt,Bt,tn){(je!==tt||ut!==Bt||wt!==tn)&&(r.stencilOp(tt,Bt,tn),je=tt,ut=Bt,wt=tn)},setLocked:function(tt){D=tt},setClear:function(tt){en!==tt&&(r.clearStencil(tt),en=tt)},reset:function(){D=!1,K=null,te=null,pe=null,ge=null,je=null,ut=null,wt=null,en=null}}}let o=new i,c=new s,l=new a,u=new WeakMap,h=new WeakMap,d={},m={},g=new WeakMap,p=[],f=null,x=!1,_=null,y=null,b=null,M=null,R=null,L=null,v=null,E=!1,N=null,q=null,Q=null,F=null,O=null,I=r.getParameter(35661),V=!1,Y=0,k=r.getParameter(7938);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=Y>=2);let G=null,J={},W=r.getParameter(3088),P=r.getParameter(2978),$=new We().fromArray(W),ne=new We().fromArray(P);function U(D,K,te){let pe=new Uint8Array(4),ge=r.createTexture();r.bindTexture(D,ge),r.texParameteri(D,10241,9728),r.texParameteri(D,10240,9728);for(let je=0;je<te;je++)r.texImage2D(K+je,0,6408,1,1,0,6408,5121,pe);return ge}let oe={};oe[3553]=U(3553,3553,1),oe[34067]=U(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ae(2929),c.setFunc(po),ze(!1),Je(Ua),ae(2884),Ee(Rn);function ae(D){d[D]!==!0&&(r.enable(D),d[D]=!0)}function he(D){d[D]!==!1&&(r.disable(D),d[D]=!1)}function ee(D,K){return m[D]!==K?(r.bindFramebuffer(D,K),m[D]=K,n&&(D===36009&&(m[36160]=K),D===36160&&(m[36009]=K)),!0):!1}function re(D,K){let te=p,pe=!1;if(D)if(te=g.get(K),te===void 0&&(te=[],g.set(K,te)),D.isWebGLMultipleRenderTargets){let ge=D.texture;if(te.length!==ge.length||te[0]!==36064){for(let je=0,ut=ge.length;je<ut;je++)te[je]=36064+je;te.length=ge.length,pe=!0}}else te[0]!==36064&&(te[0]=36064,pe=!0);else te[0]!==1029&&(te[0]=1029,pe=!0);pe&&(t.isWebGL2?r.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function me(D){return f!==D?(r.useProgram(D),f=D,!0):!1}let de={[vi]:32774,[mu]:32778,[gu]:32779};if(n)de[za]=32775,de[Va]=32776;else{let D=e.get("EXT_blend_minmax");D!==null&&(de[za]=D.MIN_EXT,de[Va]=D.MAX_EXT)}let be={[xu]:0,[yu]:1,[_u]:768,[fl]:770,[Su]:776,[Mu]:774,[Au]:772,[vu]:769,[pl]:771,[wu]:775,[bu]:773};function Ee(D,K,te,pe,ge,je,ut,wt){if(D===Rn){x===!0&&(he(3042),x=!1);return}if(x===!1&&(ae(3042),x=!0),D!==pu){if(D!==_||wt!==E){if((y!==vi||R!==vi)&&(r.blendEquation(32774),y=vi,R=vi),wt)switch(D){case bi:r.blendFuncSeparate(1,771,1,771);break;case Qs:r.blendFunc(1,1);break;case Ba:r.blendFuncSeparate(0,769,0,1);break;case ka:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case bi:r.blendFuncSeparate(770,771,1,771);break;case Qs:r.blendFunc(770,1);break;case Ba:r.blendFuncSeparate(0,769,0,1);break;case ka:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,M=null,L=null,v=null,_=D,E=wt}return}ge=ge||K,je=je||te,ut=ut||pe,(K!==y||ge!==R)&&(r.blendEquationSeparate(de[K],de[ge]),y=K,R=ge),(te!==b||pe!==M||je!==L||ut!==v)&&(r.blendFuncSeparate(be[te],be[pe],be[je],be[ut]),b=te,M=pe,L=je,v=ut),_=D,E=!1}function De(D,K){D.side===Ut?he(2884):ae(2884);let te=D.side===Ct;K&&(te=!te),ze(te),D.blending===bi&&D.transparent===!1?Ee(Rn):Ee(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);let pe=D.stencilWrite;l.setTest(pe),pe&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),He(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(32926):he(32926)}function ze(D){N!==D&&(D?r.frontFace(2304):r.frontFace(2305),N=D)}function Je(D){D!==du?(ae(2884),D!==q&&(D===Ua?r.cullFace(1029):D===fu?r.cullFace(1028):r.cullFace(1032))):he(2884),q=D}function Ye(D){D!==Q&&(V&&r.lineWidth(D),Q=D)}function He(D,K,te){D?(ae(32823),(F!==K||O!==te)&&(r.polygonOffset(K,te),F=K,O=te)):he(32823)}function xt(D){D?ae(3089):he(3089)}function lt(D){D===void 0&&(D=33984+I-1),G!==D&&(r.activeTexture(D),G=D)}function S(D,K,te){te===void 0&&(G===null?te=33984+I-1:te=G);let pe=J[te];pe===void 0&&(pe={type:void 0,texture:void 0},J[te]=pe),(pe.type!==D||pe.texture!==K)&&(G!==te&&(r.activeTexture(te),G=te),r.bindTexture(D,K||oe[D]),pe.type=D,pe.texture=K)}function A(){let D=J[G];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function T(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(D){$.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),$.copy(D))}function _e(D){ne.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),ne.copy(D))}function Pe(D,K){let te=h.get(K);te===void 0&&(te=new WeakMap,h.set(K,te));let pe=te.get(D);pe===void 0&&(pe=r.getUniformBlockIndex(K,D.name),te.set(D,pe))}function Be(D,K){let pe=h.get(K).get(D);u.get(K)!==pe&&(r.uniformBlockBinding(K,pe,D.__bindingPointIndex),u.set(K,pe))}function Ve(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},G=null,J={},m={},g=new WeakMap,p=[],f=null,x=!1,_=null,y=null,b=null,M=null,R=null,L=null,v=null,E=!1,N=null,q=null,Q=null,F=null,O=null,$.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ae,disable:he,bindFramebuffer:ee,drawBuffers:re,useProgram:me,setBlending:Ee,setMaterial:De,setFlipSided:ze,setCullFace:Je,setLineWidth:Ye,setPolygonOffset:He,setScissorTest:xt,activeTexture:lt,bindTexture:S,unbindTexture:A,compressedTexImage2D:X,compressedTexImage3D:se,texImage2D:le,texImage3D:ye,updateUBOMapping:Pe,uniformBlockBinding:Be,texStorage2D:B,texStorage3D:fe,texSubImage2D:ie,texSubImage3D:ue,compressedTexSubImage2D:xe,compressedTexSubImage3D:T,scissor:ve,viewport:_e,reset:Ve}}function sg(r,e,t,n,i,s,a){let o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,p,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,A){return x?new OffscreenCanvas(S,A):ds("canvas")}function y(S,A,X,se){let ie=1;if((S.width>se||S.height>se)&&(ie=se/Math.max(S.width,S.height)),ie<1||A===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let ue=A?vl:Math.floor,xe=ue(ie*S.width),T=ue(ie*S.height);p===void 0&&(p=_(xe,T));let B=X?_(xe,T):p;return B.width=xe,B.height=T,B.getContext("2d").drawImage(S,0,0,xe,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+xe+"x"+T+")."),B}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function b(S){return _o(S.width)&&_o(S.height)}function M(S){return o?!1:S.wrapS!==Ot||S.wrapT!==Ot||S.minFilter!==$e&&S.minFilter!==nt}function R(S,A){return S.generateMipmaps&&A&&S.minFilter!==$e&&S.minFilter!==nt}function L(S){r.generateMipmap(S)}function v(S,A,X,se,ie=!1){if(o===!1)return A;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ue=A;return A===6403&&(X===5126&&(ue=33326),X===5131&&(ue=33325),X===5121&&(ue=33321)),A===33319&&(X===5126&&(ue=33328),X===5131&&(ue=33327),X===5121&&(ue=33323)),A===6408&&(X===5126&&(ue=34836),X===5131&&(ue=34842),X===5121&&(ue=se===Ie&&ie===!1?35907:32856),X===32819&&(ue=32854),X===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function E(S,A,X){return R(S,X)===!0||S.isFramebufferTexture&&S.minFilter!==$e&&S.minFilter!==nt?Math.log2(Math.max(A.width,A.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?A.mipmaps.length:1}function N(S){return S===$e||S===Js||S===is?9728:9729}function q(S){let A=S.target;A.removeEventListener("dispose",q),F(A),A.isVideoTexture&&g.delete(A)}function Q(S){let A=S.target;A.removeEventListener("dispose",Q),I(A)}function F(S){let A=n.get(S);if(A.__webglInit===void 0)return;let X=S.source,se=f.get(X);if(se){let ie=se[A.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&O(S),Object.keys(se).length===0&&f.delete(X)}n.remove(S)}function O(S){let A=n.get(S);r.deleteTexture(A.__webglTexture);let X=S.source,se=f.get(X);delete se[A.__cacheKey],a.memory.textures--}function I(S){let A=S.texture,X=n.get(S),se=n.get(A);if(se.__webglTexture!==void 0&&(r.deleteTexture(se.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)r.deleteFramebuffer(X.__webglFramebuffer[ie]),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[ie]);else{if(r.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ie=0;ie<X.__webglColorRenderbuffer.length;ie++)X.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[ie]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ie=0,ue=A.length;ie<ue;ie++){let xe=n.get(A[ie]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),a.memory.textures--),n.remove(A[ie])}n.remove(A),n.remove(S)}let V=0;function Y(){V=0}function k(){let S=V;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),V+=1,S}function G(S){let A=[];return A.push(S.wrapS),A.push(S.wrapT),A.push(S.wrapR||0),A.push(S.magFilter),A.push(S.minFilter),A.push(S.anisotropy),A.push(S.internalFormat),A.push(S.format),A.push(S.type),A.push(S.generateMipmaps),A.push(S.premultiplyAlpha),A.push(S.flipY),A.push(S.unpackAlignment),A.push(S.encoding),A.join()}function J(S,A){let X=n.get(S);if(S.isVideoTexture&&xt(S),S.isRenderTargetTexture===!1&&S.version>0&&X.__version!==S.version){let se=S.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(X,S,A);return}}t.bindTexture(3553,X.__webglTexture,33984+A)}function W(S,A){let X=n.get(S);if(S.version>0&&X.__version!==S.version){he(X,S,A);return}t.bindTexture(35866,X.__webglTexture,33984+A)}function P(S,A){let X=n.get(S);if(S.version>0&&X.__version!==S.version){he(X,S,A);return}t.bindTexture(32879,X.__webglTexture,33984+A)}function $(S,A){let X=n.get(S);if(S.version>0&&X.__version!==S.version){ee(X,S,A);return}t.bindTexture(34067,X.__webglTexture,33984+A)}let ne={[Qn]:10497,[Ot]:33071,[cs]:33648},U={[$e]:9728,[Js]:9984,[is]:9986,[nt]:9729,[Zo]:9985,[Cn]:9987};function oe(S,A,X){if(X?(r.texParameteri(S,10242,ne[A.wrapS]),r.texParameteri(S,10243,ne[A.wrapT]),(S===32879||S===35866)&&r.texParameteri(S,32882,ne[A.wrapR]),r.texParameteri(S,10240,U[A.magFilter]),r.texParameteri(S,10241,U[A.minFilter])):(r.texParameteri(S,10242,33071),r.texParameteri(S,10243,33071),(S===32879||S===35866)&&r.texParameteri(S,32882,33071),(A.wrapS!==Ot||A.wrapT!==Ot)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,10240,N(A.magFilter)),r.texParameteri(S,10241,N(A.minFilter)),A.minFilter!==$e&&A.minFilter!==nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let se=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===$e||A.minFilter!==is&&A.minFilter!==Cn||A.type===En&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===ls&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(r.texParameterf(S,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function ae(S,A){let X=!1;S.__webglInit===void 0&&(S.__webglInit=!0,A.addEventListener("dispose",q));let se=A.source,ie=f.get(se);ie===void 0&&(ie={},f.set(se,ie));let ue=G(A);if(ue!==S.__cacheKey){ie[ue]===void 0&&(ie[ue]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ie[ue].usedTimes++;let xe=ie[S.__cacheKey];xe!==void 0&&(ie[S.__cacheKey].usedTimes--,xe.usedTimes===0&&O(A)),S.__cacheKey=ue,S.__webglTexture=ie[ue].texture}return X}function he(S,A,X){let se=3553;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(se=35866),A.isData3DTexture&&(se=32879);let ie=ae(S,A),ue=A.source;t.bindTexture(se,S.__webglTexture,33984+X);let xe=n.get(ue);if(ue.version!==xe.__version||ie===!0){t.activeTexture(33984+X),r.pixelStorei(37440,A.flipY),r.pixelStorei(37441,A.premultiplyAlpha),r.pixelStorei(3317,A.unpackAlignment),r.pixelStorei(37443,0);let T=M(A)&&b(A.image)===!1,B=y(A.image,T,!1,u);B=lt(A,B);let fe=b(B)||o,le=s.convert(A.format,A.encoding),ye=s.convert(A.type),ve=v(A.internalFormat,le,ye,A.encoding,A.isVideoTexture);oe(se,A,fe);let _e,Pe=A.mipmaps,Be=o&&A.isVideoTexture!==!0,Ve=xe.__version===void 0||ie===!0,D=E(A,B,fe);if(A.isDepthTexture)ve=6402,o?A.type===En?ve=36012:A.type===Kn?ve=33190:A.type===Mi?ve=35056:ve=33189:A.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Zn&&ve===6402&&A.type!==gl&&A.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Kn,ye=s.convert(A.type)),A.format===Ri&&ve===6402&&(ve=34041,A.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Mi,ye=s.convert(A.type))),Ve&&(Be?t.texStorage2D(3553,1,ve,B.width,B.height):t.texImage2D(3553,0,ve,B.width,B.height,0,le,ye,null));else if(A.isDataTexture)if(Pe.length>0&&fe){Be&&Ve&&t.texStorage2D(3553,D,ve,Pe[0].width,Pe[0].height);for(let K=0,te=Pe.length;K<te;K++)_e=Pe[K],Be?t.texSubImage2D(3553,K,0,0,_e.width,_e.height,le,ye,_e.data):t.texImage2D(3553,K,ve,_e.width,_e.height,0,le,ye,_e.data);A.generateMipmaps=!1}else Be?(Ve&&t.texStorage2D(3553,D,ve,B.width,B.height),t.texSubImage2D(3553,0,0,0,B.width,B.height,le,ye,B.data)):t.texImage2D(3553,0,ve,B.width,B.height,0,le,ye,B.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Be&&Ve&&t.texStorage3D(35866,D,ve,Pe[0].width,Pe[0].height,B.depth);for(let K=0,te=Pe.length;K<te;K++)_e=Pe[K],A.format!==zt?le!==null?Be?t.compressedTexSubImage3D(35866,K,0,0,0,_e.width,_e.height,B.depth,le,_e.data,0,0):t.compressedTexImage3D(35866,K,ve,_e.width,_e.height,B.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,K,0,0,0,_e.width,_e.height,B.depth,le,ye,_e.data):t.texImage3D(35866,K,ve,_e.width,_e.height,B.depth,0,le,ye,_e.data)}else{Be&&Ve&&t.texStorage2D(3553,D,ve,Pe[0].width,Pe[0].height);for(let K=0,te=Pe.length;K<te;K++)_e=Pe[K],A.format!==zt?le!==null?Be?t.compressedTexSubImage2D(3553,K,0,0,_e.width,_e.height,le,_e.data):t.compressedTexImage2D(3553,K,ve,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,K,0,0,_e.width,_e.height,le,ye,_e.data):t.texImage2D(3553,K,ve,_e.width,_e.height,0,le,ye,_e.data)}else if(A.isDataArrayTexture)Be?(Ve&&t.texStorage3D(35866,D,ve,B.width,B.height,B.depth),t.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,le,ye,B.data)):t.texImage3D(35866,0,ve,B.width,B.height,B.depth,0,le,ye,B.data);else if(A.isData3DTexture)Be?(Ve&&t.texStorage3D(32879,D,ve,B.width,B.height,B.depth),t.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,le,ye,B.data)):t.texImage3D(32879,0,ve,B.width,B.height,B.depth,0,le,ye,B.data);else if(A.isFramebufferTexture){if(Ve)if(Be)t.texStorage2D(3553,D,ve,B.width,B.height);else{let K=B.width,te=B.height;for(let pe=0;pe<D;pe++)t.texImage2D(3553,pe,ve,K,te,0,le,ye,null),K>>=1,te>>=1}}else if(Pe.length>0&&fe){Be&&Ve&&t.texStorage2D(3553,D,ve,Pe[0].width,Pe[0].height);for(let K=0,te=Pe.length;K<te;K++)_e=Pe[K],Be?t.texSubImage2D(3553,K,0,0,le,ye,_e):t.texImage2D(3553,K,ve,le,ye,_e);A.generateMipmaps=!1}else Be?(Ve&&t.texStorage2D(3553,D,ve,B.width,B.height),t.texSubImage2D(3553,0,0,0,le,ye,B)):t.texImage2D(3553,0,ve,le,ye,B);R(A,fe)&&L(se),xe.__version=ue.version,A.onUpdate&&A.onUpdate(A)}S.__version=A.version}function ee(S,A,X){if(A.image.length!==6)return;let se=ae(S,A),ie=A.source;t.bindTexture(34067,S.__webglTexture,33984+X);let ue=n.get(ie);if(ie.version!==ue.__version||se===!0){t.activeTexture(33984+X),r.pixelStorei(37440,A.flipY),r.pixelStorei(37441,A.premultiplyAlpha),r.pixelStorei(3317,A.unpackAlignment),r.pixelStorei(37443,0);let xe=A.isCompressedTexture||A.image[0].isCompressedTexture,T=A.image[0]&&A.image[0].isDataTexture,B=[];for(let K=0;K<6;K++)!xe&&!T?B[K]=y(A.image[K],!1,!0,l):B[K]=T?A.image[K].image:A.image[K],B[K]=lt(A,B[K]);let fe=B[0],le=b(fe)||o,ye=s.convert(A.format,A.encoding),ve=s.convert(A.type),_e=v(A.internalFormat,ye,ve,A.encoding),Pe=o&&A.isVideoTexture!==!0,Be=ue.__version===void 0||se===!0,Ve=E(A,fe,le);oe(34067,A,le);let D;if(xe){Pe&&Be&&t.texStorage2D(34067,Ve,_e,fe.width,fe.height);for(let K=0;K<6;K++){D=B[K].mipmaps;for(let te=0;te<D.length;te++){let pe=D[te];A.format!==zt?ye!==null?Pe?t.compressedTexSubImage2D(34069+K,te,0,0,pe.width,pe.height,ye,pe.data):t.compressedTexImage2D(34069+K,te,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+K,te,0,0,pe.width,pe.height,ye,ve,pe.data):t.texImage2D(34069+K,te,_e,pe.width,pe.height,0,ye,ve,pe.data)}}}else{D=A.mipmaps,Pe&&Be&&(D.length>0&&Ve++,t.texStorage2D(34067,Ve,_e,B[0].width,B[0].height));for(let K=0;K<6;K++)if(T){Pe?t.texSubImage2D(34069+K,0,0,0,B[K].width,B[K].height,ye,ve,B[K].data):t.texImage2D(34069+K,0,_e,B[K].width,B[K].height,0,ye,ve,B[K].data);for(let te=0;te<D.length;te++){let ge=D[te].image[K].image;Pe?t.texSubImage2D(34069+K,te+1,0,0,ge.width,ge.height,ye,ve,ge.data):t.texImage2D(34069+K,te+1,_e,ge.width,ge.height,0,ye,ve,ge.data)}}else{Pe?t.texSubImage2D(34069+K,0,0,0,ye,ve,B[K]):t.texImage2D(34069+K,0,_e,ye,ve,B[K]);for(let te=0;te<D.length;te++){let pe=D[te];Pe?t.texSubImage2D(34069+K,te+1,0,0,ye,ve,pe.image[K]):t.texImage2D(34069+K,te+1,_e,ye,ve,pe.image[K])}}}R(A,le)&&L(34067),ue.__version=ie.version,A.onUpdate&&A.onUpdate(A)}S.__version=A.version}function re(S,A,X,se,ie){let ue=s.convert(X.format,X.encoding),xe=s.convert(X.type),T=v(X.internalFormat,ue,xe,X.encoding);n.get(A).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,T,A.width,A.height,A.depth,0,ue,xe,null):t.texImage2D(ie,0,T,A.width,A.height,0,ue,xe,null)),t.bindFramebuffer(36160,S),He(A)?d.framebufferTexture2DMultisampleEXT(36160,se,ie,n.get(X).__webglTexture,0,Ye(A)):(ie===3553||ie>=34069&&ie<=34074)&&r.framebufferTexture2D(36160,se,ie,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function me(S,A,X){if(r.bindRenderbuffer(36161,S),A.depthBuffer&&!A.stencilBuffer){let se=33189;if(X||He(A)){let ie=A.depthTexture;ie&&ie.isDepthTexture&&(ie.type===En?se=36012:ie.type===Kn&&(se=33190));let ue=Ye(A);He(A)?d.renderbufferStorageMultisampleEXT(36161,ue,se,A.width,A.height):r.renderbufferStorageMultisample(36161,ue,se,A.width,A.height)}else r.renderbufferStorage(36161,se,A.width,A.height);r.framebufferRenderbuffer(36160,36096,36161,S)}else if(A.depthBuffer&&A.stencilBuffer){let se=Ye(A);X&&He(A)===!1?r.renderbufferStorageMultisample(36161,se,35056,A.width,A.height):He(A)?d.renderbufferStorageMultisampleEXT(36161,se,35056,A.width,A.height):r.renderbufferStorage(36161,34041,A.width,A.height),r.framebufferRenderbuffer(36160,33306,36161,S)}else{let se=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ie=0;ie<se.length;ie++){let ue=se[ie],xe=s.convert(ue.format,ue.encoding),T=s.convert(ue.type),B=v(ue.internalFormat,xe,T,ue.encoding),fe=Ye(A);X&&He(A)===!1?r.renderbufferStorageMultisample(36161,fe,B,A.width,A.height):He(A)?d.renderbufferStorageMultisampleEXT(36161,fe,B,A.width,A.height):r.renderbufferStorage(36161,B,A.width,A.height)}}r.bindRenderbuffer(36161,null)}function de(S,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),J(A.depthTexture,0);let se=n.get(A.depthTexture).__webglTexture,ie=Ye(A);if(A.depthTexture.format===Zn)He(A)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,se,0,ie):r.framebufferTexture2D(36160,36096,3553,se,0);else if(A.depthTexture.format===Ri)He(A)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,se,0,ie):r.framebufferTexture2D(36160,33306,3553,se,0);else throw new Error("Unknown depthTexture format")}function be(S){let A=n.get(S),X=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!A.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");de(A.__webglFramebuffer,S)}else if(X){A.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(36160,A.__webglFramebuffer[se]),A.__webglDepthbuffer[se]=r.createRenderbuffer(),me(A.__webglDepthbuffer[se],S,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),me(A.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function Ee(S,A,X){let se=n.get(S);A!==void 0&&re(se.__webglFramebuffer,S,S.texture,36064,3553),X!==void 0&&be(S)}function De(S){let A=S.texture,X=n.get(S),se=n.get(A);S.addEventListener("dispose",Q),S.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=A.version,a.memory.textures++);let ie=S.isWebGLCubeRenderTarget===!0,ue=S.isWebGLMultipleRenderTargets===!0,xe=b(S)||o;if(ie){X.__webglFramebuffer=[];for(let T=0;T<6;T++)X.__webglFramebuffer[T]=r.createFramebuffer()}else{if(X.__webglFramebuffer=r.createFramebuffer(),ue)if(i.drawBuffers){let T=S.texture;for(let B=0,fe=T.length;B<fe;B++){let le=n.get(T[B]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&He(S)===!1){let T=ue?A:[A];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let B=0;B<T.length;B++){let fe=T[B];X.__webglColorRenderbuffer[B]=r.createRenderbuffer(),r.bindRenderbuffer(36161,X.__webglColorRenderbuffer[B]);let le=s.convert(fe.format,fe.encoding),ye=s.convert(fe.type),ve=v(fe.internalFormat,le,ye,fe.encoding,S.isXRRenderTarget===!0),_e=Ye(S);r.renderbufferStorageMultisample(36161,_e,ve,S.width,S.height),r.framebufferRenderbuffer(36160,36064+B,36161,X.__webglColorRenderbuffer[B])}r.bindRenderbuffer(36161,null),S.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),me(X.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,se.__webglTexture),oe(34067,A,xe);for(let T=0;T<6;T++)re(X.__webglFramebuffer[T],S,A,36064,34069+T);R(A,xe)&&L(34067),t.unbindTexture()}else if(ue){let T=S.texture;for(let B=0,fe=T.length;B<fe;B++){let le=T[B],ye=n.get(le);t.bindTexture(3553,ye.__webglTexture),oe(3553,le,xe),re(X.__webglFramebuffer,S,le,36064+B,3553),R(le,xe)&&L(3553)}t.unbindTexture()}else{let T=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?T=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(T,se.__webglTexture),oe(T,A,xe),re(X.__webglFramebuffer,S,A,36064,T),R(A,xe)&&L(T),t.unbindTexture()}S.depthBuffer&&be(S)}function ze(S){let A=b(S)||o,X=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let se=0,ie=X.length;se<ie;se++){let ue=X[se];if(R(ue,A)){let xe=S.isWebGLCubeRenderTarget?34067:3553,T=n.get(ue).__webglTexture;t.bindTexture(xe,T),L(xe),t.unbindTexture()}}}function Je(S){if(o&&S.samples>0&&He(S)===!1){let A=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],X=S.width,se=S.height,ie=16384,ue=[],xe=S.stencilBuffer?33306:36096,T=n.get(S),B=S.isWebGLMultipleRenderTargets===!0;if(B)for(let fe=0;fe<A.length;fe++)t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+fe,36161,null),t.bindFramebuffer(36160,T.__webglFramebuffer),r.framebufferTexture2D(36009,36064+fe,3553,null,0);t.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,T.__webglFramebuffer);for(let fe=0;fe<A.length;fe++){ue.push(36064+fe),S.depthBuffer&&ue.push(xe);let le=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(le===!1&&(S.depthBuffer&&(ie|=256),S.stencilBuffer&&(ie|=1024)),B&&r.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[fe]),le===!0&&(r.invalidateFramebuffer(36008,[xe]),r.invalidateFramebuffer(36009,[xe])),B){let ye=n.get(A[fe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ye,0)}r.blitFramebuffer(0,0,X,se,0,0,X,se,ie,9728),m&&r.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),B)for(let fe=0;fe<A.length;fe++){t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+fe,36161,T.__webglColorRenderbuffer[fe]);let le=n.get(A[fe]).__webglTexture;t.bindFramebuffer(36160,T.__webglFramebuffer),r.framebufferTexture2D(36009,36064+fe,3553,le,0)}t.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function Ye(S){return Math.min(h,S.samples)}function He(S){let A=n.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function xt(S){let A=a.render.frame;g.get(S)!==A&&(g.set(S,A),S.update())}function lt(S,A){let X=S.encoding,se=S.format,ie=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===yo||X!==ei&&(X===Ie?o===!1?e.has("EXT_sRGB")===!0&&se===zt?(S.format=yo,S.minFilter=nt,S.generateMipmaps=!1):A=$s.sRGBToLinear(A):(se!==zt||ie!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),A}this.allocateTextureUnit=k,this.resetTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=P,this.setTextureCube=$,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=re,this.useMultisampledRTT=He}function rg(r,e,t){let n=t.isWebGL2;function i(s,a=null){let o;if(s===Jn)return 5121;if(s===Hu)return 32819;if(s===Gu)return 32820;if(s===ku)return 5120;if(s===zu)return 5122;if(s===gl)return 5123;if(s===Vu)return 5124;if(s===Kn)return 5125;if(s===En)return 5126;if(s===ls)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Wu)return 6406;if(s===zt)return 6408;if(s===qu)return 6409;if(s===Yu)return 6410;if(s===Zn)return 6402;if(s===Ri)return 34041;if(s===yo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Xu)return 6403;if(s===ju)return 36244;if(s===Ku)return 33319;if(s===Zu)return 33320;if(s===Qu)return 36249;if(s===Fr||s===Or||s===Ur||s===Br)if(a===Ie)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Fr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ur)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Br)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Fr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Or)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ur)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Br)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ha||s===Ga||s===Wa||s===qa)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ha)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ga)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ju)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ya||s===Xa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ya)return a===Ie?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Xa)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ja||s===Ka||s===Za||s===Qa||s===Ja||s===$a||s===ec||s===tc||s===nc||s===ic||s===sc||s===rc||s===oc||s===ac)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ja)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ka)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Za)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qa)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ja)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$a)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ec)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tc)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nc)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ic)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sc)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rc)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===oc)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ac)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===kr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===kr)return a===Ie?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===$u||s===cc||s===lc||s===uc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===kr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===cc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===lc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===uc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}function ag(r,e){function t(p,f){f.color.getRGB(p.fogColor.value,Ml(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,x,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),u(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,y)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?o(p,f,x,_):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Ct&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Ct&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x=e.get(f).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let b=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*b}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let _;f.map?_=f.map:f.specularMap?_=f.specularMap:f.displacementMap?_=f.displacementMap:f.normalMap?_=f.normalMap:f.bumpMap?_=f.bumpMap:f.roughnessMap?_=f.roughnessMap:f.metalnessMap?_=f.metalnessMap:f.alphaMap?_=f.alphaMap:f.emissiveMap?_=f.emissiveMap:f.clearcoatMap?_=f.clearcoatMap:f.clearcoatNormalMap?_=f.clearcoatNormalMap:f.clearcoatRoughnessMap?_=f.clearcoatRoughnessMap:f.iridescenceMap?_=f.iridescenceMap:f.iridescenceThicknessMap?_=f.iridescenceThicknessMap:f.specularIntensityMap?_=f.specularIntensityMap:f.specularColorMap?_=f.specularColorMap:f.transmissionMap?_=f.transmissionMap:f.thicknessMap?_=f.thicknessMap:f.sheenColorMap?_=f.sheenColorMap:f.sheenRoughnessMap&&(_=f.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix));let y;f.aoMap?y=f.aoMap:f.lightMap&&(y=f.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,x,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=_*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let y;f.map?y=f.map:f.alphaMap&&(y=f.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ct&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function cg(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(35375):0;function c(_,y){let b=y.program;n.uniformBlockBinding(_,b)}function l(_,y){let b=i[_.id];b===void 0&&(g(_),b=u(_),i[_.id]=b,_.addEventListener("dispose",f));let M=y.program;n.updateUBOMapping(_,M);let R=e.render.frame;s[_.id]!==R&&(d(_),s[_.id]=R)}function u(_){let y=h();_.__bindingPointIndex=y;let b=r.createBuffer(),M=_.__size,R=_.usage;return r.bindBuffer(35345,b),r.bufferData(35345,M,R),r.bindBuffer(35345,null),r.bindBufferBase(35345,y,b),b}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let y=i[_.id],b=_.uniforms,M=_.__cache;r.bindBuffer(35345,y);for(let R=0,L=b.length;R<L;R++){let v=b[R];if(m(v,R,M)===!0){let E=v.__offset,N=Array.isArray(v.value)?v.value:[v.value],q=0;for(let Q=0;Q<N.length;Q++){let F=N[Q],O=p(F);typeof F=="number"?(v.__data[0]=F,r.bufferSubData(35345,E+q,v.__data)):F.isMatrix3?(v.__data[0]=F.elements[0],v.__data[1]=F.elements[1],v.__data[2]=F.elements[2],v.__data[3]=F.elements[0],v.__data[4]=F.elements[3],v.__data[5]=F.elements[4],v.__data[6]=F.elements[5],v.__data[7]=F.elements[0],v.__data[8]=F.elements[6],v.__data[9]=F.elements[7],v.__data[10]=F.elements[8],v.__data[11]=F.elements[0]):(F.toArray(v.__data,q),q+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,E,v.__data)}}r.bindBuffer(35345,null)}function m(_,y,b){let M=_.value;if(b[y]===void 0){if(typeof M=="number")b[y]=M;else{let R=Array.isArray(M)?M:[M],L=[];for(let v=0;v<R.length;v++)L.push(R[v].clone());b[y]=L}return!0}else if(typeof M=="number"){if(b[y]!==M)return b[y]=M,!0}else{let R=Array.isArray(b[y])?b[y]:[b[y]],L=Array.isArray(M)?M:[M];for(let v=0;v<R.length;v++){let E=R[v];if(E.equals(L[v])===!1)return E.copy(L[v]),!0}}return!1}function g(_){let y=_.uniforms,b=0,M=16,R=0;for(let L=0,v=y.length;L<v;L++){let E=y[L],N={boundary:0,storage:0},q=Array.isArray(E.value)?E.value:[E.value];for(let Q=0,F=q.length;Q<F;Q++){let O=q[Q],I=p(O);N.boundary+=I.boundary,N.storage+=I.storage}if(E.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=b,L>0){R=b%M;let Q=M-R;R!==0&&Q-N.boundary<0&&(b+=M-R,E.__offset=b)}b+=N.storage}return R=b%M,R>0&&(b+=M-R),_.__size=b,_.__cache={},this}function p(_){let y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function f(_){let y=_.target;y.removeEventListener("dispose",f);let b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function x(){for(let _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:c,update:l,dispose:x}}function lg(){let r=ds("canvas");return r.style.display="block",r}function Vi(r={}){this.isWebGLRenderer=!0;let e=r.canvas!==void 0?r.canvas:lg(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,d=null,m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ei,this.useLegacyLights=!0,this.toneMapping=_n,this.toneMappingExposure=1;let p=this,f=!1,x=0,_=0,y=null,b=-1,M=null,R=new We,L=new We,v=null,E=e.width,N=e.height,q=1,Q=null,F=null,O=new We(0,0,E,N),I=new We(0,0,E,N),V=!1,Y=new ps,k=!1,G=!1,J=null,W=new Re,P=new C,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return y===null?q:1}let U=t;function oe(w,H){for(let j=0;j<w.length;j++){let z=w[j],Z=e.getContext(z,H);if(Z!==null)return Z}return null}try{let w={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r150"),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",_e,!1),U===null){let H=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&H.shift(),U=oe(H,w),U===null)throw oe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ae,he,ee,re,me,de,be,Ee,De,ze,Je,Ye,He,xt,lt,S,A,X,se,ie,ue,xe,T,B;function fe(){ae=new Lp(U),he=new wp(U,ae,r),ae.init(he),xe=new rg(U,ae,he),ee=new ig(U,ae,he),re=new Dp,me=new qm,de=new sg(U,ae,ee,me,he,xe,re),be=new Ep(p),Ee=new Cp(p),De=new Vh(U,he),T=new bp(U,ae,De,he),ze=new Ip(U,De,re,T),Je=new Up(U,ze,De,re),se=new Op(U,he,de),S=new Sp(me),Ye=new Wm(p,be,Ee,ae,he,T,S),He=new ag(p,me),xt=new Xm,lt=new $m(ae,he),X=new Ap(p,be,Ee,ee,Je,u,a),A=new ng(p,Je,he),B=new cg(U,re,he,ee),ie=new Mp(U,ae,re,he),ue=new Pp(U,ae,re,he),re.programs=Ye.programs,p.capabilities=he,p.extensions=ae,p.properties=me,p.renderLists=xt,p.shadowMap=A,p.state=ee,p.info=re}fe();let le=new Do(p,U);this.xr=le,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(E,N,!1))},this.getSize=function(w){return w.set(E,N)},this.setSize=function(w,H,j=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=w,N=H,e.width=Math.floor(w*q),e.height=Math.floor(H*q),j===!0&&(e.style.width=w+"px",e.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(E*q,N*q).floor()},this.setDrawingBufferSize=function(w,H,j){E=w,N=H,q=j,e.width=Math.floor(w*j),e.height=Math.floor(H*j),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(O)},this.setViewport=function(w,H,j,z){w.isVector4?O.set(w.x,w.y,w.z,w.w):O.set(w,H,j,z),ee.viewport(R.copy(O).multiplyScalar(q).floor())},this.getScissor=function(w){return w.copy(I)},this.setScissor=function(w,H,j,z){w.isVector4?I.set(w.x,w.y,w.z,w.w):I.set(w,H,j,z),ee.scissor(L.copy(I).multiplyScalar(q).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(w){ee.setScissorTest(V=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){F=w},this.getClearColor=function(w){return w.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(w=!0,H=!0,j=!0){let z=0;w&&(z|=16384),H&&(z|=256),j&&(z|=1024),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",_e,!1),xt.dispose(),lt.dispose(),me.dispose(),be.dispose(),Ee.dispose(),Je.dispose(),T.dispose(),B.dispose(),Ye.dispose(),le.dispose(),le.removeEventListener("sessionstart",te),le.removeEventListener("sessionend",pe),J&&(J.dispose(),J=null),ge.stop()};function ye(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;let w=re.autoReset,H=A.enabled,j=A.autoUpdate,z=A.needsUpdate,Z=A.type;fe(),re.autoReset=w,A.enabled=H,A.autoUpdate=j,A.needsUpdate=z,A.type=Z}function _e(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pe(w){let H=w.target;H.removeEventListener("dispose",Pe),Be(H)}function Be(w){Ve(w),me.remove(w)}function Ve(w){let H=me.get(w).programs;H!==void 0&&(H.forEach(function(j){Ye.releaseProgram(j)}),w.isShaderMaterial&&Ye.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,j,z,Z,we){H===null&&(H=$);let Se=Z.isMesh&&Z.matrixWorld.determinant()<0,Ce=au(w,H,j,z,Z);ee.setMaterial(z,Se);let Le=j.index,ke=1;z.wireframe===!0&&(Le=ze.getWireframeAttribute(j),ke=2);let Ne=j.drawRange,Fe=j.attributes.position,it=Ne.start*ke,Pt=(Ne.start+Ne.count)*ke;we!==null&&(it=Math.max(it,we.start*ke),Pt=Math.min(Pt,(we.start+we.count)*ke)),Le!==null?(it=Math.max(it,0),Pt=Math.min(Pt,Le.count)):Fe!=null&&(it=Math.max(it,0),Pt=Math.min(Pt,Fe.count));let un=Pt-it;if(un<0||un===1/0)return;T.setup(Z,z,Ce,j,Le);let Vn,st=ie;if(Le!==null&&(Vn=De.get(Le),st=ue,st.setIndex(Vn)),Z.isMesh)z.wireframe===!0?(ee.setLineWidth(z.wireframeLinewidth*ne()),st.setMode(1)):st.setMode(4);else if(Z.isLine){let Oe=z.linewidth;Oe===void 0&&(Oe=1),ee.setLineWidth(Oe*ne()),Z.isLineSegments?st.setMode(1):Z.isLineLoop?st.setMode(2):st.setMode(3)}else Z.isPoints?st.setMode(0):Z.isSprite&&st.setMode(4);if(Z.isInstancedMesh)st.renderInstances(it,un,Z.count);else if(j.isInstancedBufferGeometry){let Oe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ir=Math.min(j.instanceCount,Oe);st.renderInstances(it,un,Ir)}else st.render(it,un)},this.compile=function(w,H){function j(z,Z,we){z.transparent===!0&&z.side===Ut&&z.forceSinglePass===!1?(z.side=Ct,z.needsUpdate=!0,Bt(z,Z,we),z.side=on,z.needsUpdate=!0,Bt(z,Z,we),z.side=Ut):Bt(z,Z,we)}d=lt.get(w),d.init(),g.push(d),w.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(p.useLegacyLights),w.traverse(function(z){let Z=z.material;if(Z)if(Array.isArray(Z))for(let we=0;we<Z.length;we++){let Se=Z[we];j(Se,w,z)}else j(Z,w,z)}),g.pop(),d=null};let D=null;function K(w){D&&D(w)}function te(){ge.stop()}function pe(){ge.start()}let ge=new wl;ge.setAnimationLoop(K),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(w){D=w,le.setAnimationLoop(w),w===null?ge.stop():ge.start()},le.addEventListener("sessionstart",te),le.addEventListener("sessionend",pe),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(H),H=le.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,H,y),d=lt.get(w,g.length),d.init(),g.push(d),W.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Y.setFromProjectionMatrix(W),G=this.localClippingEnabled,k=S.init(this.clippingPlanes,G),h=xt.get(w,m.length),h.init(),m.push(h),je(w,H,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Q,F),k===!0&&S.beginShadows();let j=d.state.shadowsArray;if(A.render(j,w,H),k===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),X.render(h,w),d.setupLights(p.useLegacyLights),H.isArrayCamera){let z=H.cameras;for(let Z=0,we=z.length;Z<we;Z++){let Se=z[Z];ut(h,w,Se,Se.viewport)}}else ut(h,w,H);y!==null&&(de.updateMultisampleRenderTarget(y),de.updateRenderTargetMipmap(y)),w.isScene===!0&&w.onAfterRender(p,w,H),T.resetDefaultState(),b=-1,M=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function je(w,H,j,z){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){z&&P.setFromMatrixPosition(w.matrixWorld).applyMatrix4(W);let Se=Je.update(w),Ce=w.material;Ce.visible&&h.push(w,Se,Ce,j,P.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==re.render.frame&&(w.skeleton.update(),w.skeleton.frame=re.render.frame),!w.frustumCulled||Y.intersectsObject(w))){z&&P.setFromMatrixPosition(w.matrixWorld).applyMatrix4(W);let Se=Je.update(w),Ce=w.material;if(Array.isArray(Ce)){let Le=Se.groups;for(let ke=0,Ne=Le.length;ke<Ne;ke++){let Fe=Le[ke],it=Ce[Fe.materialIndex];it&&it.visible&&h.push(w,Se,it,j,P.z,Fe)}}else Ce.visible&&h.push(w,Se,Ce,j,P.z,null)}}let we=w.children;for(let Se=0,Ce=we.length;Se<Ce;Se++)je(we[Se],H,j,z)}function ut(w,H,j,z){let Z=w.opaque,we=w.transmissive,Se=w.transparent;d.setupLightsView(j),k===!0&&S.setGlobalState(p.clippingPlanes,j),we.length>0&&wt(Z,H,j),z&&ee.viewport(R.copy(z)),Z.length>0&&en(Z,H,j),we.length>0&&en(we,H,j),Se.length>0&&en(Se,H,j),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function wt(w,H,j){let z=he.isWebGL2;J===null&&(J=new Ht(1024,1024,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?ls:Jn,minFilter:Cn,samples:z&&s===!0?4:0}));let Z=p.getRenderTarget();p.setRenderTarget(J),p.clear();let we=p.toneMapping;p.toneMapping=_n,en(w,H,j),p.toneMapping=we,de.updateMultisampleRenderTarget(J),de.updateRenderTargetMipmap(J),p.setRenderTarget(Z)}function en(w,H,j){let z=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,we=w.length;Z<we;Z++){let Se=w[Z],Ce=Se.object,Le=Se.geometry,ke=z===null?Se.material:z,Ne=Se.group;Ce.layers.test(j.layers)&&tt(Ce,H,j,Le,ke,Ne)}}function tt(w,H,j,z,Z,we){w.onBeforeRender(p,H,j,z,Z,we),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(p,H,j,z,w,we),Z.transparent===!0&&Z.side===Ut&&Z.forceSinglePass===!1?(Z.side=Ct,Z.needsUpdate=!0,p.renderBufferDirect(j,H,z,Z,w,we),Z.side=on,Z.needsUpdate=!0,p.renderBufferDirect(j,H,z,Z,w,we),Z.side=Ut):p.renderBufferDirect(j,H,z,Z,w,we),w.onAfterRender(p,H,j,z,Z,we)}function Bt(w,H,j){H.isScene!==!0&&(H=$);let z=me.get(w),Z=d.state.lights,we=d.state.shadowsArray,Se=Z.state.version,Ce=Ye.getParameters(w,Z.state,we,H,j),Le=Ye.getProgramCacheKey(Ce),ke=z.programs;z.environment=w.isMeshStandardMaterial?H.environment:null,z.fog=H.fog,z.envMap=(w.isMeshStandardMaterial?Ee:be).get(w.envMap||z.environment),ke===void 0&&(w.addEventListener("dispose",Pe),ke=new Map,z.programs=ke);let Ne=ke.get(Le);if(Ne!==void 0){if(z.currentProgram===Ne&&z.lightsStateVersion===Se)return tn(w,Ce),Ne}else Ce.uniforms=Ye.getUniforms(w),w.onBuild(j,Ce,p),w.onBeforeCompile(Ce,p),Ne=Ye.acquireProgram(Ce,Le),ke.set(Le,Ne),z.uniforms=Ce.uniforms;let Fe=z.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Fe.clippingPlanes=S.uniform),tn(w,Ce),z.needsLights=lu(w),z.lightsStateVersion=Se,z.needsLights&&(Fe.ambientLightColor.value=Z.state.ambient,Fe.lightProbe.value=Z.state.probe,Fe.directionalLights.value=Z.state.directional,Fe.directionalLightShadows.value=Z.state.directionalShadow,Fe.spotLights.value=Z.state.spot,Fe.spotLightShadows.value=Z.state.spotShadow,Fe.rectAreaLights.value=Z.state.rectArea,Fe.ltc_1.value=Z.state.rectAreaLTC1,Fe.ltc_2.value=Z.state.rectAreaLTC2,Fe.pointLights.value=Z.state.point,Fe.pointLightShadows.value=Z.state.pointShadow,Fe.hemisphereLights.value=Z.state.hemi,Fe.directionalShadowMap.value=Z.state.directionalShadowMap,Fe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Fe.spotShadowMap.value=Z.state.spotShadowMap,Fe.spotLightMatrix.value=Z.state.spotLightMatrix,Fe.spotLightMap.value=Z.state.spotLightMap,Fe.pointShadowMap.value=Z.state.pointShadowMap,Fe.pointShadowMatrix.value=Z.state.pointShadowMatrix);let it=Ne.getUniforms(),Pt=Si.seqWithValue(it.seq,Fe);return z.currentProgram=Ne,z.uniformsList=Pt,Ne}function tn(w,H){let j=me.get(w);j.outputEncoding=H.outputEncoding,j.instancing=H.instancing,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function au(w,H,j,z,Z){H.isScene!==!0&&(H=$),de.resetTextureUnits();let we=H.fog,Se=z.isMeshStandardMaterial?H.environment:null,Ce=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:ei,Le=(z.isMeshStandardMaterial?Ee:be).get(z.envMap||Se),ke=z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!z.normalMap&&!!j.attributes.tangent,Fe=!!j.morphAttributes.position,it=!!j.morphAttributes.normal,Pt=!!j.morphAttributes.color,un=z.toneMapped?p.toneMapping:_n,Vn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,st=Vn!==void 0?Vn.length:0,Oe=me.get(z),Ir=d.state.lights;if(k===!0&&(G===!0||w!==M)){let Dt=w===M&&z.id===b;S.setState(z,w,Dt)}let ht=!1;z.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Ir.state.version||Oe.outputEncoding!==Ce||Z.isInstancedMesh&&Oe.instancing===!1||!Z.isInstancedMesh&&Oe.instancing===!0||Z.isSkinnedMesh&&Oe.skinning===!1||!Z.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Le||z.fog===!0&&Oe.fog!==we||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==S.numPlanes||Oe.numIntersection!==S.numIntersection)||Oe.vertexAlphas!==ke||Oe.vertexTangents!==Ne||Oe.morphTargets!==Fe||Oe.morphNormals!==it||Oe.morphColors!==Pt||Oe.toneMapping!==un||he.isWebGL2===!0&&Oe.morphTargetsCount!==st)&&(ht=!0):(ht=!0,Oe.__version=z.version);let Hn=Oe.currentProgram;ht===!0&&(Hn=Bt(z,H,Z));let Na=!1,qi=!1,Pr=!1,St=Hn.getUniforms(),Gn=Oe.uniforms;if(ee.useProgram(Hn.program)&&(Na=!0,qi=!0,Pr=!0),z.id!==b&&(b=z.id,qi=!0),Na||M!==w){if(St.setValue(U,"projectionMatrix",w.projectionMatrix),he.logarithmicDepthBuffer&&St.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),M!==w&&(M=w,qi=!0,Pr=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){let Dt=St.map.cameraPosition;Dt!==void 0&&Dt.setValue(U,P.setFromMatrixPosition(w.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&St.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||Z.isSkinnedMesh)&&St.setValue(U,"viewMatrix",w.matrixWorldInverse)}if(Z.isSkinnedMesh){St.setOptional(U,Z,"bindMatrix"),St.setOptional(U,Z,"bindMatrixInverse");let Dt=Z.skeleton;Dt&&(he.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),St.setValue(U,"boneTexture",Dt.boneTexture,de),St.setValue(U,"boneTextureSize",Dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let Dr=j.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0&&he.isWebGL2===!0)&&se.update(Z,j,Hn),(qi||Oe.receiveShadow!==Z.receiveShadow)&&(Oe.receiveShadow=Z.receiveShadow,St.setValue(U,"receiveShadow",Z.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Gn.envMap.value=Le,Gn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),qi&&(St.setValue(U,"toneMappingExposure",p.toneMappingExposure),Oe.needsLights&&cu(Gn,Pr),we&&z.fog===!0&&He.refreshFogUniforms(Gn,we),He.refreshMaterialUniforms(Gn,z,q,N,J),Si.upload(U,Oe.uniformsList,Gn,de)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Si.upload(U,Oe.uniformsList,Gn,de),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&St.setValue(U,"center",Z.center),St.setValue(U,"modelViewMatrix",Z.modelViewMatrix),St.setValue(U,"normalMatrix",Z.normalMatrix),St.setValue(U,"modelMatrix",Z.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Dt=z.uniformsGroups;for(let Nr=0,uu=Dt.length;Nr<uu;Nr++)if(he.isWebGL2){let Fa=Dt[Nr];B.update(Fa,Hn),B.bind(Fa,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function cu(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function lu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(w,H,j){me.get(w.texture).__webglTexture=H,me.get(w.depthTexture).__webglTexture=j;let z=me.get(w);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=j===void 0,z.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,H){let j=me.get(w);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,j=0){y=w,x=H,_=j;let z=!0,Z=null,we=!1,Se=!1;if(w){let Le=me.get(w);Le.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(36160,null),z=!1):Le.__webglFramebuffer===void 0?de.setupRenderTarget(w):Le.__hasExternalTextures&&de.rebindTextures(w,me.get(w.texture).__webglTexture,me.get(w.depthTexture).__webglTexture);let ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Se=!0);let Ne=me.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Z=Ne[H],we=!0):he.isWebGL2&&w.samples>0&&de.useMultisampledRTT(w)===!1?Z=me.get(w).__webglMultisampledFramebuffer:Z=Ne,R.copy(w.viewport),L.copy(w.scissor),v=w.scissorTest}else R.copy(O).multiplyScalar(q).floor(),L.copy(I).multiplyScalar(q).floor(),v=V;if(ee.bindFramebuffer(36160,Z)&&he.drawBuffers&&z&&ee.drawBuffers(w,Z),ee.viewport(R),ee.scissor(L),ee.setScissorTest(v),we){let Le=me.get(w.texture);U.framebufferTexture2D(36160,36064,34069+H,Le.__webglTexture,j)}else if(Se){let Le=me.get(w.texture),ke=H||0;U.framebufferTextureLayer(36160,36064,Le.__webglTexture,j||0,ke)}b=-1},this.readRenderTargetPixels=function(w,H,j,z,Z,we,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){ee.bindFramebuffer(36160,Ce);try{let Le=w.texture,ke=Le.format,Ne=Le.type;if(ke!==zt&&xe.convert(ke)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Fe=Ne===ls&&(ae.has("EXT_color_buffer_half_float")||he.isWebGL2&&ae.has("EXT_color_buffer_float"));if(Ne!==Jn&&xe.convert(Ne)!==U.getParameter(35738)&&!(Ne===En&&(he.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-z&&j>=0&&j<=w.height-Z&&U.readPixels(H,j,z,Z,xe.convert(ke),xe.convert(Ne),we)}finally{let Le=y!==null?me.get(y).__webglFramebuffer:null;ee.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(w,H,j=0){let z=Math.pow(2,-j),Z=Math.floor(H.image.width*z),we=Math.floor(H.image.height*z);de.setTexture2D(H,0),U.copyTexSubImage2D(3553,j,0,0,w.x,w.y,Z,we),ee.unbindTexture()},this.copyTextureToTexture=function(w,H,j,z=0){let Z=H.image.width,we=H.image.height,Se=xe.convert(j.format),Ce=xe.convert(j.type);de.setTexture2D(j,0),U.pixelStorei(37440,j.flipY),U.pixelStorei(37441,j.premultiplyAlpha),U.pixelStorei(3317,j.unpackAlignment),H.isDataTexture?U.texSubImage2D(3553,z,w.x,w.y,Z,we,Se,Ce,H.image.data):H.isCompressedTexture?U.compressedTexSubImage2D(3553,z,w.x,w.y,H.mipmaps[0].width,H.mipmaps[0].height,Se,H.mipmaps[0].data):U.texSubImage2D(3553,z,w.x,w.y,Se,Ce,H.image),z===0&&j.generateMipmaps&&U.generateMipmap(3553),ee.unbindTexture()},this.copyTextureToTexture3D=function(w,H,j,z,Z=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=w.max.x-w.min.x+1,Se=w.max.y-w.min.y+1,Ce=w.max.z-w.min.z+1,Le=xe.convert(z.format),ke=xe.convert(z.type),Ne;if(z.isData3DTexture)de.setTexture3D(z,0),Ne=32879;else if(z.isDataArrayTexture)de.setTexture2DArray(z,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,z.flipY),U.pixelStorei(37441,z.premultiplyAlpha),U.pixelStorei(3317,z.unpackAlignment);let Fe=U.getParameter(3314),it=U.getParameter(32878),Pt=U.getParameter(3316),un=U.getParameter(3315),Vn=U.getParameter(32877),st=j.isCompressedTexture?j.mipmaps[0]:j.image;U.pixelStorei(3314,st.width),U.pixelStorei(32878,st.height),U.pixelStorei(3316,w.min.x),U.pixelStorei(3315,w.min.y),U.pixelStorei(32877,w.min.z),j.isDataTexture||j.isData3DTexture?U.texSubImage3D(Ne,Z,H.x,H.y,H.z,we,Se,Ce,Le,ke,st.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ne,Z,H.x,H.y,H.z,we,Se,Ce,Le,st.data)):U.texSubImage3D(Ne,Z,H.x,H.y,H.z,we,Se,Ce,Le,ke,st),U.pixelStorei(3314,Fe),U.pixelStorei(32878,it),U.pixelStorei(3316,Pt),U.pixelStorei(3315,un),U.pixelStorei(32877,Vn),Z===0&&z.generateMipmaps&&U.generateMipmap(Ne),ee.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?de.setTextureCube(w,0):w.isData3DTexture?de.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?de.setTexture2DArray(w,0):de.setTexture2D(w,0),ee.unbindTexture()},this.resetState=function(){x=0,_=0,y=null,ee.reset(),T.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function al(r,e,t,n,i,s,a){let o=Fo.distanceSqToPoint(r);if(o<t){let c=new C;Fo.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}function Sn(r,e,t){return Cl(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Zs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Cl(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function fg(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function cl(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Ll(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function pg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fn;case"vector":case"vector2":case"vector3":case"vector4":return Un;case"color":return yr;case"quaternion":return ln;case"bool":case"boolean":return Nn;case"string":return On}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function mg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=pg(r.type);if(r.times===void 0){let t=[],n=[];Ll(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var si,ri,du,Ua,fu,dl,Xo,ts,on,Ct,Ut,Rn,bi,Qs,Ba,ka,pu,vi,mu,gu,za,Va,xu,yu,_u,vu,fl,pl,Au,bu,Mu,wu,Su,Eu,Tu,Ru,po,Cu,Lu,Iu,Pu,jo,Du,Nu,_n,Fu,Ou,Uu,Ko,Bu,ml,Ei,Ti,mo,go,br,Qn,Ot,cs,$e,Js,is,nt,Zo,Cn,Jn,ku,zu,gl,Vu,Kn,En,ls,Hu,Gu,Mi,Wu,zt,qu,Yu,Zn,Ri,Xu,ju,Ku,Zu,Qu,Fr,Or,Ur,Br,Ha,Ga,Wa,qa,Ju,Ya,Xa,ja,Ka,Za,Qa,Ja,$a,ec,tc,nc,ic,sc,rc,oc,ac,kr,$u,cc,lc,uc,Ci,$n,zr,hc,dc,fc,eh,xl,Mr,Ms,ei,Ie,th,nh,wr,ih,sn,us,yl,Vr,sh,xo,pc,yo,an,yt,mc,ss,hs,It,Me,Rt,Hr,bt,C,Gr,gc,yh,_h,Tn,bh,Mh,ft,ai,$s,er,wh,pt,We,Ht,tr,vo,Zt,hn,Wn,Yr,ci,li,ui,An,bn,qn,Yi,Rs,Cs,Yn,Sh,Xi,jr,Qt,dn,Kr,Ls,Mn,Zr,Is,Qr,fs,Re,hi,Yt,Eh,Th,wn,Ps,Nt,xc,yc,nr,ir,Rh,_c,di,fn,Ds,ji,Ch,Lh,vc,Ac,bc,Ih,Mc,Qe,Xt,pn,Jr,mn,fi,pi,wc,$r,eo,to,os,Ph,Mt,bl,jt,Ns,Ae,_t,mt,rt,Fs,ot,sr,rr,At,Dh,kt,io,mi,Ft,Ki,dt,Lt,Sc,nn,Os,Ec,Zi,Qi,Ji,so,Us,Bs,ks,zs,ro,Vs,Ze,ti,Oh,Uh,Bh,Gt,or,et,gi,xi,Ao,ar,bo,oo,kh,zh,xn,yi,Gs,ps,Ln,Hh,Gh,Wh,qh,Yh,Xh,jh,Kh,Zh,Qh,Jh,$h,ed,td,nd,id,sd,rd,od,ad,cd,ld,ud,hd,dd,fd,pd,md,gd,xd,yd,_d,vd,Ad,bd,Md,wd,Sd,Ed,Td,Rd,Cd,Ld,Id,Pd,Dd,Nd,Fd,Od,Ud,Bd,kd,zd,Vd,Hd,Gd,Wd,qd,Yd,Xd,jd,Kd,Zd,Qd,Jd,$d,ef,tf,nf,sf,rf,of,af,cf,lf,uf,hf,df,ff,pf,mf,gf,xf,yf,_f,vf,Af,bf,Mf,wf,Sf,Ef,Tf,Rf,Cf,Lf,If,Pf,Df,Nf,Ff,Of,Uf,Bf,kf,zf,Vf,Hf,Gf,Wf,qf,Yf,Xf,jf,Kf,Zf,Qf,Jf,$f,ep,tp,np,ip,sp,rp,op,ap,cp,lp,up,hp,dp,fp,pp,mp,gp,xp,yp,_p,vp,Te,ce,rn,Ws,In,Ai,Tc,jn,ao,Rc,co,Xn,_i,Cc,Ii,Sl,El,Tl,Rl,Dc,Nc,Fc,Oc,Uc,Mo,wo,So,lo,Si,Sm,Dm,Fm,Gm,To,Ro,Zm,Co,Lo,eg,tg,Io,Vt,og,as,Po,Do,No,cr,vn,ms,Et,gs,jc,Kc,Zc,ug,Qc,lr,xs,ni,Jc,hg,ur,ys,$c,el,Ys,dg,$i,hr,_s,tl,nl,il,uo,Xs,Pi,sl,rl,dr,fr,vs,ol,Fo,js,Ks,Di,pr,mr,Pn,cn,gr,xr,Dn,Oo,Uo,Bo,Wt,Nn,yr,Fn,ko,ln,On,Un,_r,Ni,zo,gg,Bn,gn,Vo,As,Ho,Fi,Oi,Ui,ho,ll,ul,bs,Go,vr,hl,es,fo,Wo,Bi,qo,Jt,ki,Ar,$o,xg,ea,yg,_g,vg,Ag,bg,Mg,wg,Yo,Xe,r0,ii,Hi=Ts(()=>{si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},du=0,Ua=1,fu=2,dl=1,Xo=2,ts=3,on=0,Ct=1,Ut=2,Rn=0,bi=1,Qs=2,Ba=3,ka=4,pu=5,vi=100,mu=101,gu=102,za=103,Va=104,xu=200,yu=201,_u=202,vu=203,fl=204,pl=205,Au=206,bu=207,Mu=208,wu=209,Su=210,Eu=0,Tu=1,Ru=2,po=3,Cu=4,Lu=5,Iu=6,Pu=7,jo=0,Du=1,Nu=2,_n=0,Fu=1,Ou=2,Uu=3,Ko=4,Bu=5,ml=300,Ei=301,Ti=302,mo=303,go=304,br=306,Qn=1e3,Ot=1001,cs=1002,$e=1003,Js=1004,is=1005,nt=1006,Zo=1007,Cn=1008,Jn=1009,ku=1010,zu=1011,gl=1012,Vu=1013,Kn=1014,En=1015,ls=1016,Hu=1017,Gu=1018,Mi=1020,Wu=1021,zt=1023,qu=1024,Yu=1025,Zn=1026,Ri=1027,Xu=1028,ju=1029,Ku=1030,Zu=1031,Qu=1033,Fr=33776,Or=33777,Ur=33778,Br=33779,Ha=35840,Ga=35841,Wa=35842,qa=35843,Ju=36196,Ya=37492,Xa=37496,ja=37808,Ka=37809,Za=37810,Qa=37811,Ja=37812,$a=37813,ec=37814,tc=37815,nc=37816,ic=37817,sc=37818,rc=37819,oc=37820,ac=37821,kr=36492,$u=36283,cc=36284,lc=36285,uc=36286,Ci=2300,$n=2301,zr=2302,hc=2400,dc=2401,fc=2402,eh=2500,xl=0,Mr=1,Ms=2,ei=3e3,Ie=3001,th=3200,nh=3201,wr=0,ih=1,sn="srgb",us="srgb-linear",yl="display-p3",Vr=7680,sh=519,xo=35044,pc="300 es",yo=1035,an=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mc=1234567,ss=Math.PI/180,hs=180/Math.PI;It={DEG2RAD:ss,RAD2DEG:hs,generateUUID:Kt,clamp:vt,euclideanModulo:Qo,mapLinear:rh,inverseLerp:oh,lerp:rs,damp:ah,pingpong:ch,smoothstep:lh,smootherstep:uh,randInt:hh,randFloat:dh,randFloatSpread:fh,seededRandom:ph,degToRad:mh,radToDeg:gh,isPowerOfTwo:_o,ceilPowerOfTwo:_l,floorPowerOfTwo:vl,setQuaternionFromProperEuler:xh,normalize:Ge,denormalize:yn},Me=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rt=class r{constructor(){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],p=i[0],f=i[3],x=i[6],_=i[1],y=i[4],b=i[7],M=i[2],R=i[5],L=i[8];return s[0]=a*p+o*_+c*M,s[3]=a*f+o*y+c*R,s[6]=a*x+o*b+c*L,s[1]=l*p+u*_+h*M,s[4]=l*f+u*y+h*R,s[7]=l*x+u*b+h*L,s[2]=d*p+m*_+g*M,s[5]=d*f+m*y+g*R,s[8]=d*x+m*b+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,m=l*s-a*c,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return e[0]=h*p,e[1]=(i*l-u*n)*p,e[2]=(o*n-i*a)*p,e[3]=d*p,e[4]=(u*t-i*c)*p,e[5]=(i*s-o*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hr.makeScale(e,t)),this}rotate(e){return this.premultiply(Hr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hr=new Rt;bt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],d=s[a+0],m=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||c!==d||l!==m||u!==g){let f=1-o,x=c*d+l*m+u*g+h*p,_=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){let M=Math.sqrt(y),R=Math.atan2(M,x*_);f=Math.sin(f*R)/M,o=Math.sin(o*R)/M}let b=o*_;if(c=c*f+d*b,l=l*f+m*b,u=u*f+g*b,h=h*f+p*b,f===1-o){let M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*m-l*d,e[t+1]=c*g+u*d+l*h-o*m,e[t+2]=l*g+u*m+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(s/2),d=c(n/2),m=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-i)*m}else if(n>o&&n>h){let m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+l)/m}else if(o>h){let m=2*Math.sqrt(1+o-n-h);this._w=(s-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,u=c*n+o*t-s*i,h=c*i+s*n-a*t,d=-s*t-a*n-o*i;return this.x=l*c+d*-s+u*-o-h*-a,this.y=u*c+d*-a+h*-s-l*-o,this.z=h*c+d*-o+l*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gr.copy(this).projectOnVector(e),this.sub(Gr)}reflect(e){return this.sub(Gr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gr=new C,gc=new bt;yh=new Rt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),_h=new Rt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Tn=new C;bh={[us]:r=>r,[sn]:r=>r.convertSRGBToLinear(),[yl]:vh},Mh={[us]:r=>r,[sn]:r=>r.convertLinearToSRGB(),[yl]:Ah},ft={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return us},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=bh[e],i=Mh[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},$s=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ai===void 0&&(ai=ds("canvas")),ai.width=e.width,ai.height=e.height;let n=ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ds("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=wi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},er=class{constructor(e=null){this.isSource=!0,this.uuid=Kt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(qr(i[a].image)):s.push(qr(i[a]))}else s=qr(i);n.url=s}return t||(e.images[this.uuid]=n),n}};wh=0,pt=class r extends an{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Ot,i=Ot,s=nt,a=Cn,o=zt,c=Jn,l=r.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Kt(),this.name="",this.source=new er(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qn:e.x=e.x-Math.floor(e.x);break;case Ot:e.x=e.x<0?0:1;break;case cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qn:e.y=e.y-Math.floor(e.y);break;case Ot:e.y=e.y<0?0:1;break;case cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=ml;pt.DEFAULT_ANISOTROPY=1;We=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],p=c[2],f=c[6],x=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,b=(m+1)/2,M=(x+1)/2,R=(u+d)/4,L=(h+p)/4,v=(g+f)/4;return y>b&&y>M?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=R/n,s=L/n):b>M?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=R/i,s=v/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=L/s,i=v/s),this.set(n,i,s,t),this}let _=Math.sqrt((f-g)*(f-g)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(f-g)/_,this.y=(h-p)/_,this.z=(d-u)/_,this.w=Math.acos((l+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ht=class extends an{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);let i={width:e,height:t,depth:1};this.texture=new pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:nt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new er(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},tr=class extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vo=class extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){let u=e[c],h=e[c+1],d=e[c+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){let u=e.getX(c),h=e.getY(c),d=e.getZ(c);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Wn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Wn)}else n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox),Yr.applyMatrix4(e.matrixWorld),this.union(Yr);let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),Rs.subVectors(this.max,Yi),ci.subVectors(e.a,Yi),li.subVectors(e.b,Yi),ui.subVectors(e.c,Yi),An.subVectors(li,ci),bn.subVectors(ui,li),qn.subVectors(ci,ui);let t=[0,-An.z,An.y,0,-bn.z,bn.y,0,-qn.z,qn.y,An.z,0,-An.x,bn.z,0,-bn.x,qn.z,0,-qn.x,-An.y,An.x,0,-bn.y,bn.x,0,-qn.y,qn.x,0];return!Xr(t,ci,li,ui,Rs)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,ci,li,ui,Rs))?!1:(Cs.crossVectors(An,bn),t=[Cs.x,Cs.y,Cs.z],Xr(t,ci,li,ui,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hn=[new C,new C,new C,new C,new C,new C,new C,new C],Wn=new C,Yr=new Zt,ci=new C,li=new C,ui=new C,An=new C,bn=new C,qn=new C,Yi=new C,Rs=new C,Cs=new C,Yn=new C;Sh=new Zt,Xi=new C,jr=new C,Qt=class{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);let t=Xi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(jr)),this.expandByPoint(Xi.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},dn=new C,Kr=new C,Ls=new C,Mn=new C,Zr=new C,Is=new C,Qr=new C,fs=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Kr.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(Kr);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Ls),o=Mn.dot(this.direction),c=-Mn.dot(Ls),l=Mn.lengthSq(),u=Math.abs(1-a*a),h,d,m,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){let p=1/u;h*=p,d*=p,m=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Kr).addScaledVector(Ls,d),m}intersectSphere(e,t){dn.subVectors(e.center,this.origin);let n=dn.dot(this.direction),i=dn.dot(dn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,i,s){Zr.subVectors(t,e),Is.subVectors(n,e),Qr.crossVectors(Zr,Is);let a=this.direction.dot(Qr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mn.subVectors(this.origin,e);let c=o*this.direction.dot(Is.crossVectors(Mn,Is));if(c<0)return null;let l=o*this.direction.dot(Zr.cross(Mn));if(l<0||c+l>a)return null;let u=-o*Mn.dot(Qr);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Re=class r{constructor(){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,c,l,u,h,d,m,g,p,f){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=a,x[9]=o,x[13]=c,x[2]=l,x[6]=u,x[10]=h,x[14]=d,x[3]=m,x[7]=g,x[11]=p,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/hi.setFromMatrixColumn(e,0).length(),s=1/hi.setFromMatrixColumn(e,1).length(),a=1/hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=a*u,m=a*h,g=o*u,p=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=d-p*l,t[9]=-o*c,t[2]=p-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,m=c*h,g=l*u,p=l*h;t[0]=d+p*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=p+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,m=c*h,g=l*u,p=l*h;t[0]=d-p*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=p-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,m=a*h,g=o*u,p=o*h;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+p,t[1]=c*h,t[5]=p*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*l,g=o*c,p=o*l;t[0]=c*u,t[4]=p-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*h+g,t[10]=d-p*h}else if(e.order==="XZY"){let d=a*c,m=a*l,g=o*c,p=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+p,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eh,e,Th)}lookAt(e,t,n){let i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),wn.crossVectors(n,Nt),wn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),wn.crossVectors(n,Nt)),wn.normalize(),Ps.crossVectors(Nt,wn),i[0]=wn.x,i[4]=Ps.x,i[8]=Nt.x,i[1]=wn.y,i[5]=Ps.y,i[9]=Nt.y,i[2]=wn.z,i[6]=Ps.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],p=n[6],f=n[10],x=n[14],_=n[3],y=n[7],b=n[11],M=n[15],R=i[0],L=i[4],v=i[8],E=i[12],N=i[1],q=i[5],Q=i[9],F=i[13],O=i[2],I=i[6],V=i[10],Y=i[14],k=i[3],G=i[7],J=i[11],W=i[15];return s[0]=a*R+o*N+c*O+l*k,s[4]=a*L+o*q+c*I+l*G,s[8]=a*v+o*Q+c*V+l*J,s[12]=a*E+o*F+c*Y+l*W,s[1]=u*R+h*N+d*O+m*k,s[5]=u*L+h*q+d*I+m*G,s[9]=u*v+h*Q+d*V+m*J,s[13]=u*E+h*F+d*Y+m*W,s[2]=g*R+p*N+f*O+x*k,s[6]=g*L+p*q+f*I+x*G,s[10]=g*v+p*Q+f*V+x*J,s[14]=g*E+p*F+f*Y+x*W,s[3]=_*R+y*N+b*O+M*k,s[7]=_*L+y*q+b*I+M*G,s[11]=_*v+y*Q+b*V+M*J,s[15]=_*E+y*F+b*Y+M*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],p=e[7],f=e[11],x=e[15];return g*(+s*c*h-i*l*h-s*o*d+n*l*d+i*o*m-n*c*m)+p*(+t*c*m-t*l*d+s*a*d-i*a*m+i*l*u-s*c*u)+f*(+t*l*h-t*o*m-s*a*h+n*a*m+s*o*u-n*l*u)+x*(-i*o*u-t*c*h+t*o*d+i*a*h-n*a*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],p=e[13],f=e[14],x=e[15],_=h*f*l-p*d*l+p*c*m-o*f*m-h*c*x+o*d*x,y=g*d*l-u*f*l-g*c*m+a*f*m+u*c*x-a*d*x,b=u*p*l-g*h*l+g*o*m-a*p*m-u*o*x+a*h*x,M=g*h*c-u*p*c-g*o*d+a*p*d+u*o*f-a*h*f,R=t*_+n*y+i*b+s*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/R;return e[0]=_*L,e[1]=(p*d*s-h*f*s-p*i*m+n*f*m+h*i*x-n*d*x)*L,e[2]=(o*f*s-p*c*s+p*i*l-n*f*l-o*i*x+n*c*x)*L,e[3]=(h*c*s-o*d*s-h*i*l+n*d*l+o*i*m-n*c*m)*L,e[4]=y*L,e[5]=(u*f*s-g*d*s+g*i*m-t*f*m-u*i*x+t*d*x)*L,e[6]=(g*c*s-a*f*s-g*i*l+t*f*l+a*i*x-t*c*x)*L,e[7]=(a*d*s-u*c*s+u*i*l-t*d*l-a*i*m+t*c*m)*L,e[8]=b*L,e[9]=(g*h*s-u*p*s-g*n*m+t*p*m+u*n*x-t*h*x)*L,e[10]=(a*p*s-g*o*s+g*n*l-t*p*l-a*n*x+t*o*x)*L,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*m-t*o*m)*L,e[12]=M*L,e[13]=(u*p*i-g*h*i+g*n*d-t*p*d-u*n*f+t*h*f)*L,e[14]=(g*o*i-a*p*i-g*n*c+t*p*c+a*n*f-t*o*f)*L,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*d+t*o*d)*L,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,m=s*u,g=s*h,p=a*u,f=a*h,x=o*h,_=c*l,y=c*u,b=c*h,M=n.x,R=n.y,L=n.z;return i[0]=(1-(p+x))*M,i[1]=(m+b)*M,i[2]=(g-y)*M,i[3]=0,i[4]=(m-b)*R,i[5]=(1-(d+x))*R,i[6]=(f+_)*R,i[7]=0,i[8]=(g+y)*L,i[9]=(f-_)*L,i[10]=(1-(d+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=hi.set(i[0],i[1],i[2]).length(),a=hi.set(i[4],i[5],i[6]).length(),o=hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Yt.copy(this);let l=1/s,u=1/a,h=1/o;return Yt.elements[0]*=l,Yt.elements[1]*=l,Yt.elements[2]*=l,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=h,Yt.elements[9]*=h,Yt.elements[10]*=h,t.setFromRotationMatrix(Yt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){let o=this.elements,c=2*s/(t-e),l=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){let o=this.elements,c=1/(t-e),l=1/(n-i),u=1/(a-s),h=(t+e)*c,d=(n+i)*l,m=(a+s)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},hi=new C,Yt=new Re,Eh=new C(0,0,0),Th=new C(1,1,1),wn=new C,Ps=new C,Nt=new C,xc=new Re,yc=new bt,nr=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yc.setFromEuler(this),this.setFromQuaternion(yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nr.DEFAULT_ORDER="XYZ";ir=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rh=0,_c=new C,di=new bt,fn=new Re,Ds=new C,ji=new C,Ch=new C,Lh=new bt,vc=new C(1,0,0),Ac=new C(0,1,0),bc=new C(0,0,1),Ih={type:"added"},Mc={type:"removed"},Qe=class r extends an{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Kt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new C,t=new nr,n=new bt,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Rt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(vc,e)}rotateY(e){return this.rotateOnAxis(Ac,e)}rotateZ(e){return this.rotateOnAxis(bc,e)}translateOnAxis(e,t){return _c.copy(e).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vc,e)}translateY(e){return this.translateOnAxis(Ac,e)}translateZ(e){return this.translateOnAxis(bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ds.copy(e):Ds.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(ji,Ds,this.up):fn.lookAt(Ds,ji,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),di.setFromRotationMatrix(fn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ih)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mc)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Mc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,Ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Lh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Qe.DEFAULT_UP=new C(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Xt=new C,pn=new C,Jr=new C,mn=new C,fi=new C,pi=new C,wc=new C,$r=new C,eo=new C,to=new C,os=class r{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xt.subVectors(e,t),i.cross(Xt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Xt.subVectors(i,t),pn.subVectors(n,t),Jr.subVectors(e,t);let a=Xt.dot(Xt),o=Xt.dot(pn),c=Xt.dot(Jr),l=pn.dot(pn),u=pn.dot(Jr),h=a*l-o*o;if(h===0)return s.set(-2,-1,-1);let d=1/h,m=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mn),mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,mn),c.set(0,0),c.addScaledVector(s,mn.x),c.addScaledVector(a,mn.y),c.addScaledVector(o,mn.z),c}static isFrontFacing(e,t,n,i){return Xt.subVectors(n,t),pn.subVectors(e,t),Xt.cross(pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Xt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return r.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;fi.subVectors(i,n),pi.subVectors(s,n),$r.subVectors(e,n);let c=fi.dot($r),l=pi.dot($r);if(c<=0&&l<=0)return t.copy(n);eo.subVectors(e,i);let u=fi.dot(eo),h=pi.dot(eo);if(u>=0&&h<=u)return t.copy(i);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(fi,a);to.subVectors(e,s);let m=fi.dot(to),g=pi.dot(to);if(g>=0&&m<=g)return t.copy(s);let p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(pi,o);let f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return wc.subVectors(s,i),o=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(wc,o);let x=1/(f+p+d);return a=p*x,o=d*x,t.copy(n).addScaledVector(fi,a).addScaledVector(pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ph=0,Mt=class extends an{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Kt(),this.name="",this.type="Material",this.blending=bi,this.side=on,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fl,this.blendDst=pl,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==on&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jt={h:0,s:0,l:0},Ns={h:0,s:0,l:0};Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=Qo(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=no(a,s,e+1/3),this.g=no(a,s,e),this.b=no(a,s,e-1/3)}return ft.toWorkingColorSpace(this,i),this}setStyle(e,t=sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ft.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ft.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ft.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ft.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){let n=bl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return ft.fromWorkingColorSpace(_t.copy(this),e),vt(_t.r*255,0,255)<<16^vt(_t.g*255,0,255)<<8^vt(_t.b*255,0,255)<<0}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(_t.copy(this),t);let n=_t.r,i=_t.g,s=_t.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=sn){ft.fromWorkingColorSpace(_t.copy(this),e);let t=_t.r,n=_t.g,i=_t.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(jt),jt.h+=e,jt.s+=t,jt.l+=n,this.setHSL(jt.h,jt.s,jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jt),e.getHSL(Ns);let n=rs(jt.h,Ns.h,t),i=rs(jt.s,Ns.s,t),s=rs(jt.l,Ns.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_t=new Ae;Ae.NAMES=bl;mt=class extends Mt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rt=new C,Fs=new Me,ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fs.fromBufferAttribute(this,t),Fs.applyMatrix3(e),this.setXY(t,Fs.x,Fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},sr=class extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}},rr=class extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}},At=class extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dh=0,kt=new Re,io=new Qe,mi=new C,Ft=new Zt,Ki=new Zt,dt=new C,Lt=class r extends an{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Kt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Al(e)?rr:sr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return io.lookAt(e),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(Ft.min,Ki.min),Ft.expandByPoint(dt),dt.addVectors(Ft.max,Ki.max),Ft.expandByPoint(dt)):(Ft.expandByPoint(Ki.min),Ft.expandByPoint(Ki.max))}Ft.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(dt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)dt.fromBufferAttribute(o,l),c&&(mi.fromBufferAttribute(e,l),dt.add(mi)),i=Math.max(i,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let N=0;N<o;N++)l[N]=new C,u[N]=new C;let h=new C,d=new C,m=new C,g=new Me,p=new Me,f=new Me,x=new C,_=new C;function y(N,q,Q){h.fromArray(i,N*3),d.fromArray(i,q*3),m.fromArray(i,Q*3),g.fromArray(a,N*2),p.fromArray(a,q*2),f.fromArray(a,Q*2),d.sub(h),m.sub(h),p.sub(g),f.sub(g);let F=1/(p.x*f.y-f.x*p.y);isFinite(F)&&(x.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(F),_.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(F),l[N].add(x),l[q].add(x),l[Q].add(x),u[N].add(_),u[q].add(_),u[Q].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let N=0,q=b.length;N<q;++N){let Q=b[N],F=Q.start,O=Q.count;for(let I=F,V=F+O;I<V;I+=3)y(n[I+0],n[I+1],n[I+2])}let M=new C,R=new C,L=new C,v=new C;function E(N){L.fromArray(s,N*3),v.copy(L);let q=l[N];M.copy(q),M.sub(L.multiplyScalar(L.dot(q))).normalize(),R.crossVectors(v,q);let F=R.dot(u[N])<0?-1:1;c[N*4]=M.x,c[N*4+1]=M.y,c[N*4+2]=M.z,c[N*4+3]=F}for(let N=0,q=b.length;N<q;++N){let Q=b[N],F=Q.start,O=Q.count;for(let I=F,V=F+O;I<V;I+=3)E(n[I+0]),E(n[I+1]),E(n[I+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new C,s=new C,a=new C,o=new C,c=new C,l=new C,u=new C,h=new C;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,f),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),m=0,g=0;for(let p=0,f=c.length;p<f;p++){o.isInterleavedBufferAttribute?m=c[p]*o.data.stride+o.offset:m=c[p]*u;for(let x=0;x<u;x++)d[g++]=l[m++]}return new ot(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sc=new Re,nn=new fs,Os=new Qt,Ec=new C,Zi=new C,Qi=new C,Ji=new C,so=new C,Us=new C,Bs=new Me,ks=new Me,zs=new Me,ro=new C,Vs=new C,Ze=class extends Qe{constructor(e=new Lt,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Us.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],h=s[c];u!==0&&(so.fromBufferAttribute(h,e),a?Us.addScaledVector(so,u):Us.addScaledVector(so.sub(t),u))}t.add(Us)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(s),nn.copy(e.ray).recast(e.near),Os.containsPoint(nn.origin)===!1&&(nn.intersectSphere(Os,Ec)===null||nn.origin.distanceToSquared(Ec)>(e.far-e.near)**2))||(Sc.copy(s).invert(),nn.copy(e.ray).applyMatrix4(Sc),n.boundingBox!==null&&nn.intersectsBox(n.boundingBox)===!1))return;let a,o=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,h=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){let p=h[m],f=i[p.materialIndex],x=Math.max(p.start,d.start),_=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=x,b=_;y<b;y+=3){let M=o.getX(y),R=o.getX(y+1),L=o.getX(y+2);a=Hs(this,f,e,nn,l,u,M,R,L),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{let m=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=m,f=g;p<f;p+=3){let x=o.getX(p),_=o.getX(p+1),y=o.getX(p+2);a=Hs(this,i,e,nn,l,u,x,_,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){let p=h[m],f=i[p.materialIndex],x=Math.max(p.start,d.start),_=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let y=x,b=_;y<b;y+=3){let M=y,R=y+1,L=y+2;a=Hs(this,f,e,nn,l,u,M,R,L),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{let m=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let p=m,f=g;p<f;p+=3){let x=p,_=p+1,y=p+2;a=Hs(this,i,e,nn,l,u,x,_,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}};ti=class r extends Lt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(h,2));function g(p,f,x,_,y,b,M,R,L,v,E){let N=b/L,q=M/v,Q=b/2,F=M/2,O=R/2,I=L+1,V=v+1,Y=0,k=0,G=new C;for(let J=0;J<V;J++){let W=J*q-F;for(let P=0;P<I;P++){let $=P*N-Q;G[p]=$*_,G[f]=W*y,G[x]=O,l.push(G.x,G.y,G.z),G[p]=0,G[f]=0,G[x]=R>0?1:-1,u.push(G.x,G.y,G.z),h.push(P/L),h.push(1-J/v),Y+=1}}for(let J=0;J<v;J++)for(let W=0;W<L;W++){let P=d+W+I*J,$=d+W+I*(J+1),ne=d+(W+1)+I*(J+1),U=d+(W+1)+I*J;c.push(P,$,U),c.push($,ne,U),k+=6}o.addGroup(m,k,E),m+=k,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Oh={clone:Li,merge:Tt},Uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gt=class extends Mt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=Fh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},or=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},et=class extends or{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ss*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},gi=-90,xi=1,Ao=class extends Qe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new et(gi,xi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);let s=new et(gi,xi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let a=new et(gi,xi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);let o=new et(gi,xi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);let c=new et(gi,xi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);let l=new et(gi,xi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,a,o,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=_n,e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},ar=class extends pt{constructor(e,t,n,i,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ei,super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bo=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ar(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ti(5,5,5),s=new Gt({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:Rn});s.uniforms.tEquirect.value=t;let a=new Ze(i,s),o=t.minFilter;return t.minFilter===Cn&&(t.minFilter=nt),new Ao(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},oo=new C,kh=new C,zh=new Rt,xn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=oo.subVectors(n,t).cross(kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(oo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zh.getNormalMatrix(e),i=this.coplanarPoint(oo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new Qt,Gs=new C,ps=class{constructor(e=new xn,t=new xn,n=new xn,i=new xn,s=new xn,a=new xn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],m=n[9],g=n[10],p=n[11],f=n[12],x=n[13],_=n[14],y=n[15];return t[0].setComponents(o-i,h-c,p-d,y-f).normalize(),t[1].setComponents(o+i,h+c,p+d,y+f).normalize(),t[2].setComponents(o+s,h+l,p+m,y+x).normalize(),t[3].setComponents(o-s,h-l,p-m,y-x).normalize(),t[4].setComponents(o-a,h-u,p-g,y-_).normalize(),t[5].setComponents(o+a,h+u,p+g,y+_).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Gs.x=i.normal.x>0?e.max.x:e.min.x,Gs.y=i.normal.y>0?e.max.y:e.min.y,Gs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Ln=class r extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,d=t/c,m=[],g=[],p=[],f=[];for(let x=0;x<u;x++){let _=x*d-a;for(let y=0;y<l;y++){let b=y*h-s;g.push(b,-_,0),p.push(0,0,1),f.push(y/o),f.push(1-x/c)}}for(let x=0;x<c;x++)for(let _=0;_<o;_++){let y=_+l*x,b=_+l*(x+1),M=_+1+l*(x+1),R=_+1+l*x;m.push(y,b,R),m.push(b,M,R)}this.setIndex(m),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(p,3)),this.setAttribute("uv",new At(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh="vec3 transformed = vec3( position );",Kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Qh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ad=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",md=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ed=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ld=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Id=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Od=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ud=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$d=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,nf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,af=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ff=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,If=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Df=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Nf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ff=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Of=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Uf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Bf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,kf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Kf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$f=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,op=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,_p=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Te={alphamap_fragment:Hh,alphamap_pars_fragment:Gh,alphatest_fragment:Wh,alphatest_pars_fragment:qh,aomap_fragment:Yh,aomap_pars_fragment:Xh,begin_vertex:jh,beginnormal_vertex:Kh,bsdfs:Zh,iridescence_fragment:Qh,bumpmap_pars_fragment:Jh,clipping_planes_fragment:$h,clipping_planes_pars_fragment:ed,clipping_planes_pars_vertex:td,clipping_planes_vertex:nd,color_fragment:id,color_pars_fragment:sd,color_pars_vertex:rd,color_vertex:od,common:ad,cube_uv_reflection_fragment:cd,defaultnormal_vertex:ld,displacementmap_pars_vertex:ud,displacementmap_vertex:hd,emissivemap_fragment:dd,emissivemap_pars_fragment:fd,encodings_fragment:pd,encodings_pars_fragment:md,envmap_fragment:gd,envmap_common_pars_fragment:xd,envmap_pars_fragment:yd,envmap_pars_vertex:_d,envmap_physical_pars_fragment:Id,envmap_vertex:vd,fog_vertex:Ad,fog_pars_vertex:bd,fog_fragment:Md,fog_pars_fragment:wd,gradientmap_pars_fragment:Sd,lightmap_fragment:Ed,lightmap_pars_fragment:Td,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:Cd,lights_pars_begin:Ld,lights_toon_fragment:Pd,lights_toon_pars_fragment:Dd,lights_phong_fragment:Nd,lights_phong_pars_fragment:Fd,lights_physical_fragment:Od,lights_physical_pars_fragment:Ud,lights_fragment_begin:Bd,lights_fragment_maps:kd,lights_fragment_end:zd,logdepthbuf_fragment:Vd,logdepthbuf_pars_fragment:Hd,logdepthbuf_pars_vertex:Gd,logdepthbuf_vertex:Wd,map_fragment:qd,map_pars_fragment:Yd,map_particle_fragment:Xd,map_particle_pars_fragment:jd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:Zd,morphcolor_vertex:Qd,morphnormal_vertex:Jd,morphtarget_pars_vertex:$d,morphtarget_vertex:ef,normal_fragment_begin:tf,normal_fragment_maps:nf,normal_pars_fragment:sf,normal_pars_vertex:rf,normal_vertex:of,normalmap_pars_fragment:af,clearcoat_normal_fragment_begin:cf,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:uf,iridescence_pars_fragment:hf,output_fragment:df,packing:ff,premultiplied_alpha_fragment:pf,project_vertex:mf,dithering_fragment:gf,dithering_pars_fragment:xf,roughnessmap_fragment:yf,roughnessmap_pars_fragment:_f,shadowmap_pars_fragment:vf,shadowmap_pars_vertex:Af,shadowmap_vertex:bf,shadowmask_pars_fragment:Mf,skinbase_vertex:wf,skinning_pars_vertex:Sf,skinning_vertex:Ef,skinnormal_vertex:Tf,specularmap_fragment:Rf,specularmap_pars_fragment:Cf,tonemapping_fragment:Lf,tonemapping_pars_fragment:If,transmission_fragment:Pf,transmission_pars_fragment:Df,uv_pars_fragment:Nf,uv_pars_vertex:Ff,uv_vertex:Of,uv2_pars_fragment:Uf,uv2_pars_vertex:Bf,uv2_vertex:kf,worldpos_vertex:zf,background_vert:Vf,background_frag:Hf,backgroundCube_vert:Gf,backgroundCube_frag:Wf,cube_vert:qf,cube_frag:Yf,depth_vert:Xf,depth_frag:jf,distanceRGBA_vert:Kf,distanceRGBA_frag:Zf,equirect_vert:Qf,equirect_frag:Jf,linedashed_vert:$f,linedashed_frag:ep,meshbasic_vert:tp,meshbasic_frag:np,meshlambert_vert:ip,meshlambert_frag:sp,meshmatcap_vert:rp,meshmatcap_frag:op,meshnormal_vert:ap,meshnormal_frag:cp,meshphong_vert:lp,meshphong_frag:up,meshphysical_vert:hp,meshphysical_frag:dp,meshtoon_vert:fp,meshtoon_frag:pp,points_vert:mp,points_frag:gp,shadow_vert:xp,shadow_frag:yp,sprite_vert:_p,sprite_frag:vp},ce={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Rt},uv2Transform:{value:new Rt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rt}}},rn={basic:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Tt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Tt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Tt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Tt([ce.points,ce.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Tt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Tt([ce.common,ce.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Tt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Tt([ce.sprite,ce.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:Tt([ce.common,ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:Tt([ce.lights,ce.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};rn.physical={uniforms:Tt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Me(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};Ws={r:0,b:0,g:0};In=class extends or{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ai=4,Tc=[.125,.215,.35,.446,.526,.582],jn=20,ao=new In,Rc=new Ae,co=null,Xn=(1+Math.sqrt(5))/2,_i=1/Xn,Cc=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Xn,_i),new C(0,Xn,-_i),new C(_i,0,Xn),new C(-_i,0,Xn),new C(Xn,_i,0),new C(-Xn,_i,0)],Ii=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){co=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(co),e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),co=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nt,minFilter:nt,generateMipmaps:!1,type:ls,format:zt,encoding:ei,depthBuffer:!1},i=Lc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tp(s)),this._blurMaterial=Rp(s,e,t)}return i}_compileMaterial(e){let t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,ao)}_sceneToCubeUV(e,t,n,i){let o=new et(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Rc),u.toneMapping=_n,u.autoClear=!1;let m=new mt({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new Ze(new ti,m),p=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Rc),p=!0);for(let x=0;x<6;x++){let _=x%3;_===0?(o.up.set(0,c[x],0),o.lookAt(l[x],0,0)):_===1?(o.up.set(0,0,c[x]),o.lookAt(0,l[x],0)):(o.up.set(0,c[x],0),o.lookAt(0,0,l[x]));let y=this._cubeSize;qs(i,_*y,x>2?y:0,y,y),u.setRenderTarget(i),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ei||e.mapping===Ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ze(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;qs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ao)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Cc[(i-1)%Cc.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ze(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*jn-1),p=s/g,f=isFinite(s)?1+Math.floor(u*p):jn;f>jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${jn}`);let x=[],_=0;for(let L=0;L<jn;++L){let v=L/p,E=Math.exp(-v*v/2);x.push(E),L===0?_+=E:L<f&&(_+=2*E)}for(let L=0;L<x.length;L++)x[L]=x[L]/_;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=x,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let b=this._sizeLods[i],M=3*b*(i>y-Ai?i-y+Ai:0),R=4*(this._cubeSize-b);qs(t,M,R,3*b,2*b),c.setRenderTarget(t),c.render(h,ao)}};Sl=new pt,El=new tr,Tl=new vo,Rl=new ar,Dc=[],Nc=[],Fc=new Float32Array(16),Oc=new Float32Array(9),Uc=new Float32Array(4);Mo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=im(t.type)}},wo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Mm(t.type)}},So=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},lo=/(\w+)(\])?(\[|\.)?/g;Si=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);wm(s,a,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};Sm=0;Dm=/^[ \t]*#include +<([\w\d./]+)>/gm;Fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Gm=0,To=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ro(e),t.set(e,n)),n}},Ro=class{constructor(e){this.id=Gm++,this.code=e,this.usedTimes=0}};Zm=0;Co=class extends Mt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Lo=class extends Mt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;Io=class extends et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Vt=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},og={type:"move"},as=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let p of e.hand.values()){let f=t.getJointPose(p,n),x=this._getHandJoint(l,p);f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=f.radius),x.visible=f!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(og)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Po=class extends pt{constructor(e,t,n,i,s,a,o,c,l,u){if(u=u!==void 0?u:Zn,u!==Zn&&u!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zn&&(n=Kn),n===void 0&&u===Ri&&(n=Mi),super(null,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$e,this.minFilter=c!==void 0?c:$e,this.flipY=!1,this.generateMipmaps=!1}},Do=class extends an{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null,p=t.getContextAttributes(),f=null,x=null,_=[],y=[],b=new Set,M=new Map,R=new et;R.layers.enable(1),R.viewport=new We;let L=new et;L.layers.enable(2),L.viewport=new We;let v=[R,L],E=new Io;E.layers.enable(1),E.layers.enable(2);let N=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let $=_[P];return $===void 0&&($=new as,_[P]=$),$.getTargetRaySpace()},this.getControllerGrip=function(P){let $=_[P];return $===void 0&&($=new as,_[P]=$),$.getGripSpace()},this.getHand=function(P){let $=_[P];return $===void 0&&($=new as,_[P]=$),$.getHandSpace()};function Q(P){let $=y.indexOf(P.inputSource);if($===-1)return;let ne=_[$];ne!==void 0&&ne.dispatchEvent({type:P.type,data:P.inputSource})}function F(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",O);for(let P=0;P<_.length;P++){let $=y[P];$!==null&&(y[P]=null,_[P].disconnect($))}N=null,q=null,e.setRenderTarget(f),m=null,d=null,h=null,i=null,x=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(P){l=P},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(P){if(i=P,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",F),i.addEventListener("inputsourceschange",O),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let $={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:m}),x=new Ht(m.framebufferWidth,m.framebufferHeight,{format:zt,type:Jn,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let $=null,ne=null,U=null;p.depth&&(U=p.stencil?35056:33190,$=p.stencil?Ri:Zn,ne=p.stencil?Mi:Kn);let oe={colorFormat:32856,depthFormat:U,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(oe),i.updateRenderState({layers:[d]}),x=new Ht(d.textureWidth,d.textureHeight,{format:zt,type:Jn,depthTexture:new Po(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});let ae=e.properties.get(x);ae.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),W.setContext(i),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(P){for(let $=0;$<P.removed.length;$++){let ne=P.removed[$],U=y.indexOf(ne);U>=0&&(y[U]=null,_[U].disconnect(ne))}for(let $=0;$<P.added.length;$++){let ne=P.added[$],U=y.indexOf(ne);if(U===-1){for(let ae=0;ae<_.length;ae++)if(ae>=y.length){y.push(ne),U=ae;break}else if(y[ae]===null){y[ae]=ne,U=ae;break}if(U===-1)break}let oe=_[U];oe&&oe.connect(ne)}}let I=new C,V=new C;function Y(P,$,ne){I.setFromMatrixPosition($.matrixWorld),V.setFromMatrixPosition(ne.matrixWorld);let U=I.distanceTo(V),oe=$.projectionMatrix.elements,ae=ne.projectionMatrix.elements,he=oe[14]/(oe[10]-1),ee=oe[14]/(oe[10]+1),re=(oe[9]+1)/oe[5],me=(oe[9]-1)/oe[5],de=(oe[8]-1)/oe[0],be=(ae[8]+1)/ae[0],Ee=he*de,De=he*be,ze=U/(-de+be),Je=ze*-de;$.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Je),P.translateZ(ze),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();let Ye=he+ze,He=ee+ze,xt=Ee-Je,lt=De+(U-Je),S=re*ee/He*Ye,A=me*ee/He*Ye;P.projectionMatrix.makePerspective(xt,lt,S,A,Ye,He)}function k(P,$){$===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices($.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(i===null)return;E.near=L.near=R.near=P.near,E.far=L.far=R.far=P.far,(N!==E.near||q!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,q=E.far);let $=P.parent,ne=E.cameras;k(E,$);for(let oe=0;oe<ne.length;oe++)k(ne[oe],$);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),P.matrix.copy(E.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale);let U=P.children;for(let oe=0,ae=U.length;oe<ae;oe++)U[oe].updateMatrixWorld(!0);ne.length===2?Y(E,R,L):E.projectionMatrix.copy(R.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(P){c=P,d!==null&&(d.fixedFoveation=P),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=P)},this.getPlanes=function(){return b};let G=null;function J(P,$){if(u=$.getViewerPose(l||a),g=$,u!==null){let ne=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let U=!1;ne.length!==E.cameras.length&&(E.cameras.length=0,U=!0);for(let oe=0;oe<ne.length;oe++){let ae=ne[oe],he=null;if(m!==null)he=m.getViewport(ae);else{let re=h.getViewSubImage(d,ae);he=re.viewport,oe===0&&(e.setRenderTargetTextures(x,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(x))}let ee=v[oe];ee===void 0&&(ee=new et,ee.layers.enable(oe),ee.viewport=new We,v[oe]=ee),ee.matrix.fromArray(ae.transform.matrix),ee.projectionMatrix.fromArray(ae.projectionMatrix),ee.viewport.set(he.x,he.y,he.width,he.height),oe===0&&E.matrix.copy(ee.matrix),U===!0&&E.cameras.push(ee)}}for(let ne=0;ne<_.length;ne++){let U=y[ne],oe=_[ne];U!==null&&oe!==void 0&&oe.update(U,$,l||a)}if(G&&G(P,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let ne=null;for(let U of b)$.detectedPlanes.has(U)||(ne===null&&(ne=[]),ne.push(U));if(ne!==null)for(let U of ne)b.delete(U),M.delete(U),n.dispatchEvent({type:"planeremoved",data:U});for(let U of $.detectedPlanes)if(!b.has(U))b.add(U),M.set(U,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:U});else{let oe=M.get(U);U.lastChangedTime>oe&&(M.set(U,U.lastChangedTime),n.dispatchEvent({type:"planechanged",data:U}))}}g=null}let W=new wl;W.setAnimationLoop(J),this.setAnimationLoop=function(P){G=P},this.dispose=function(){}}};Object.defineProperties(Vi.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});No=class extends Vi{};No.prototype.isWebGL1Renderer=!0;cr=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}},vn=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}},ms=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Kt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Et=new C,gs=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jc=new C,Kc=new We,Zc=new We,ug=new C,Qc=new Re,lr=class extends Ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Re,this.bindMatrixInverse=new Re}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;Kc.fromBufferAttribute(i.attributes.skinIndex,e),Zc.fromBufferAttribute(i.attributes.skinWeight,e),jc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=Zc.getComponent(s);if(a!==0){let o=Kc.getComponent(s);Qc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ug.copy(jc).applyMatrix4(Qc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},xs=class extends Qe{constructor(){super(),this.isBone=!0,this.type="Bone"}},ni=class extends pt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=$e,u=$e,h,d){super(null,a,o,c,l,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jc=new Re,hg=new Re,ur=class r{constructor(e=[],t=[]){this.uuid=Kt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:hg;Jc.multiplyMatrices(o,t[s]),Jc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=_l(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ni(t,e,e,zt,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new xs),this.bones.push(a),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},ys=class extends ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$c=new Re,el=new Re,Ys=[],dg=new Re,$i=new Ze,hr=class extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ys(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,dg)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,$c),el.multiplyMatrices(n,$c),$i.matrixWorld=el,$i.raycast(e,Ys);for(let a=0,o=Ys.length;a<o;a++){let c=Ys[a];c.instanceId=s,c.object=this,t.push(c)}Ys.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ys(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},_s=class extends Mt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},tl=new C,nl=new C,il=new Re,uo=new fs,Xs=new Qt,Pi=class extends Qe{constructor(e=new Lt,t=new _s){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)tl.fromBufferAttribute(t,i-1),nl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=tl.distanceTo(nl);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(i),Xs.radius+=s,e.ray.intersectsSphere(Xs)===!1)return;il.copy(i).invert(),uo.copy(e.ray).applyMatrix4(il);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new C,u=new C,h=new C,d=new C,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){let x=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let y=x,b=_-1;y<b;y+=m){let M=g.getX(y),R=g.getX(y+1);if(l.fromBufferAttribute(f,M),u.fromBufferAttribute(f,R),uo.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);let v=e.ray.origin.distanceTo(d);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let x=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let y=x,b=_-1;y<b;y+=m){if(l.fromBufferAttribute(f,y),u.fromBufferAttribute(f,y+1),uo.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},sl=new C,rl=new C,dr=class extends Pi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)sl.fromBufferAttribute(t,i),rl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+sl.distanceTo(rl);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},fr=class extends Pi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},vs=class extends Mt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ol=new Re,Fo=new fs,js=new Qt,Ks=new C,Di=class extends Qe{constructor(e=new Lt,t=new vs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(i),js.radius+=s,e.ray.intersectsSphere(js)===!1)return;ol.copy(i).invert(),Fo.copy(e.ray).applyMatrix4(ol);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=d,p=m;g<p;g++){let f=l.getX(g);Ks.fromBufferAttribute(h,f),al(Ks,f,c,i,e,t,this)}}else{let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,p=m;g<p;g++)Ks.fromBufferAttribute(h,g),al(Ks,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};pr=class extends pt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:nt,this.magFilter=s!==void 0?s:nt,this.generateMipmaps=!1;let u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},mr=class extends Mt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ae(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Pn=class extends Mt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wr,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cn=class extends Pn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},gr=class extends Mt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wr,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xr=class extends Mt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ae(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wr,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}};Dn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oo=class extends Dn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hc,endingEnd:hc}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case dc:s=e,o=2*t-n;break;case fc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case dc:a=e,c=2*n-t;break;case fc:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),p=g*g,f=p*g,x=-d*f+2*d*p-d*g,_=(1+d)*f+(-1.5-2*d)*p+(-.5+d)*g+1,y=(-1-m)*f+(1.5+m)*p+.5*g,b=m*f-m*p;for(let M=0;M!==o;++M)s[M]=x*a[u+M]+_*a[l+M]+y*a[c+M]+b*a[h+M];return s}},Uo=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[l+d]*h+a[c+d]*u;return s}},Bo=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Wt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zs(t,this.TimeBufferType),this.values=Zs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zs(e.times,Array),values:Zs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ci:t=this.InterpolantFactoryMethodDiscrete;break;case $n:t=this.InterpolantFactoryMethodLinear;break;case zr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ci;case this.InterpolantFactoryMethodLinear:return $n;case this.InterpolantFactoryMethodSmooth:return zr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=Sn(n,s,a),this.values=Sn(this.values,s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Cl(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=Sn(this.times),t=Sn(this.values),n=this.getValueSize(),i=this.getInterpolation()===zr,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,d=h-n,m=h+n;for(let g=0;g!==n;++g){let p=t[h+g];if(p!==t[d+g]||p!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=Sn(e,0,a),this.values=Sn(t,0,a*n)):(this.times=e,this.values=t),this}clone(){let e=Sn(this.times,0),t=Sn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Wt.prototype.TimeBufferType=Float32Array;Wt.prototype.ValueBufferType=Float32Array;Wt.prototype.DefaultInterpolation=$n;Nn=class extends Wt{};Nn.prototype.ValueTypeName="bool";Nn.prototype.ValueBufferType=Array;Nn.prototype.DefaultInterpolation=Ci;Nn.prototype.InterpolantFactoryMethodLinear=void 0;Nn.prototype.InterpolantFactoryMethodSmooth=void 0;yr=class extends Wt{};yr.prototype.ValueTypeName="color";Fn=class extends Wt{};Fn.prototype.ValueTypeName="number";ko=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let u=l+o;l!==u;l+=4)bt.slerpFlat(s,0,a,l-o,a,l,c);return s}},ln=class extends Wt{InterpolantFactoryMethodLinear(e){return new ko(this.times,this.values,this.getValueSize(),e)}};ln.prototype.ValueTypeName="quaternion";ln.prototype.DefaultInterpolation=$n;ln.prototype.InterpolantFactoryMethodSmooth=void 0;On=class extends Wt{};On.prototype.ValueTypeName="string";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=Ci;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;Un=class extends Wt{};Un.prototype.ValueTypeName="vector";_r=class{constructor(e,t=-1,n,i=eh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Kt(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(mg(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Wt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let u=fg(c);c=cl(c,1,u),l=cl(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Fn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(s);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,m,g,p){if(m.length!==0){let f=[],x=[];Ll(m,f,x,g),f.length!==0&&p.push(new h(d,f,x))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let p=0;p<d[g].morphTargets.length;p++)m[d[g].morphTargets[p]]=-1;for(let p in m){let f=[],x=[];for(let _=0;_!==d[g].morphTargets.length;++_){let y=d[g];f.push(y.time),x.push(y.morphTarget===p?1:0)}i.push(new Fn(".morphTargetInfluence["+p+"]",f,x))}c=m.length*a}else{let m=".bones["+t[h].name+"]";n(Un,m+".position",d,"pos",i),n(ln,m+".quaternion",d,"rot",i),n(Un,m+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};Ni={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},zo=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}},gg=new zo,Bn=class{constructor(e){this.manager=e!==void 0?e:gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},gn={},Vo=class extends Error{constructor(e,t){super(e),this.response=t}},As=class extends Bn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Ni.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(gn[e]!==void 0){gn[e].push({onLoad:t,onProgress:n,onError:i});return}gn[e]=[],gn[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=gn[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0,p=0,f=new ReadableStream({start(x){_();function _(){h.read().then(({done:y,value:b})=>{if(y)x.close();else{p+=b.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let R=0,L=u.length;R<L;R++){let v=u[R];v.onProgress&&v.onProgress(M)}x.enqueue(b),_()}})}}});return new Response(f)}else throw new Vo(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{Ni.add(e,l);let u=gn[e];delete gn[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{let u=gn[e];if(u===void 0)throw this.manager.itemError(e),l;delete gn[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Ho=class extends Bn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ni.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=ds("img");function c(){u(),Ni.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}},Fi=class extends Bn{constructor(e){super(e)}load(e,t,n,i){let s=new pt,a=new Ho(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Oi=class extends Qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ui=class extends Oi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ho=new Re,ll=new C,ul=new C,bs=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ll.setFromMatrixPosition(e.matrixWorld),t.position.copy(ll),ul.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ul),t.updateMatrixWorld(),ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ho),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Go=class extends bs{constructor(){super(new et(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=hs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},vr=class extends Oi{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Go}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},hl=new Re,es=new C,fo=new C,Wo=class extends bs{constructor(){super(new et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),es.setFromMatrixPosition(e.matrixWorld),n.position.copy(es),fo.copy(n.position),fo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fo),n.updateMatrixWorld(),i.makeTranslation(-es.x,-es.y,-es.z),hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl)}},Bi=class extends Oi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},qo=class extends bs{constructor(){super(new In(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jt=class extends Oi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new qo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ki=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ar=class extends Bn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ni.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Ni.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}},$o="\\[\\]\\.:\\/",xg=new RegExp("["+$o+"]","g"),ea="[^"+$o+"]",yg="[^"+$o.replace("\\.","")+"]",_g=/((?:WC+[\/:])*)/.source.replace("WC",ea),vg=/(WCOD+)?/.source.replace("WCOD",yg),Ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ea),bg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ea),Mg=new RegExp("^"+_g+vg+Ag+bg+"$"),wg=["material","materials","bones","map"],Yo=class{constructor(e,t,n){let i=n||Xe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Xe=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xg,"")}static parseTrackName(e){let t=Mg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);wg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=Yo;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];r0=new Float32Array(1),ii=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"150"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="150")});function na(r,e){if(e===xl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ms||e===Mr){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Ms)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var Nl=Ts(()=>{Hi()});var Vl={};Oa(Vl,{GLTFLoader:()=>ra});function Sg(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Rg(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Pn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:on})),r.DefaultMaterial}function Ss(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Cg(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Lg(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ig(r){let e=r.extensions&&r.extensions[Ue.KHR_DRACO_MESH_COMPRESSION],t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Bl(e.attributes):t=r.indices+":"+Bl(r.attributes)+":"+r.mode,t}function Bl(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ta(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Pg(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function Ng(r,e,t){let n=e.attributes,i=new Zt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){let u=Ta(Gi[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new C,c=new C;for(let l=0,u=s.length;l<u;l++){let h=s[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){let p=Ta(Gi[d.componentType]);c.multiplyScalar(p)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new Qt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function kl(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=Ea[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return zn(r,e),Ng(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Cg(r,e.targets,t):r})}var ra,Ue,oa,aa,ca,la,ua,ha,da,fa,pa,ma,ga,xa,ya,_a,va,zl,ws,Fl,Aa,ba,Ma,wa,Tr,Eg,Sa,qt,Gi,Ol,Ul,ia,Ea,kn,Tg,sa,Dg,Ra,Hl=Ts(()=>{Hi();Nl();ra=class extends Bn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new la(t)}),this.register(function(t){return new ga(t)}),this.register(function(t){return new xa(t)}),this.register(function(t){return new ya(t)}),this.register(function(t){return new ha(t)}),this.register(function(t){return new da(t)}),this.register(function(t){return new fa(t)}),this.register(function(t){return new pa(t)}),this.register(function(t){return new ca(t)}),this.register(function(t){return new ma(t)}),this.register(function(t){return new ua(t)}),this.register(function(t){return new oa(t)}),this.register(function(t){return new _a(t)}),this.register(function(t){return new va(t)})}load(e,t,n,i){let s=this,a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=ki.extractUrlBase(e),this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new As(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===zl){try{a[Ue.KHR_BINARY_GLTF]=new Aa(e)}catch(h){i&&i(h);return}s=JSON.parse(a[Ue.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Ra(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Ue.KHR_MATERIALS_UNLIT:a[h]=new aa;break;case Ue.KHR_DRACO_MESH_COMPRESSION:a[h]=new ba(s,this.dracoLoader);break;case Ue.KHR_TEXTURE_TRANSFORM:a[h]=new Ma;break;case Ue.KHR_MESH_QUANTIZATION:a[h]=new wa;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};Ue={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},oa=class{constructor(e){this.parser=e,this.name=Ue.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new Ae(16777215);c.color!==void 0&&u.fromArray(c.color);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Jt(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Bi(u),l.distance=h;break;case"spot":l=new vr(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,zn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},aa=class{constructor(){this.name=Ue.KHR_MATERIALS_UNLIT}getMaterialType(){return mt}extendParams(e,t,n){let i=[];e.color=new Ae(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ie))}return Promise.all(i)}},ca=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},la=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(o,o)}return Promise.all(s)}},ua=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},ha=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ie)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},da=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},fa=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ae(o[0],o[1],o[2]),Promise.all(s)}},pa=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},ma=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ae(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ie)),Promise.all(s)}},ga=class{constructor(e){this.parser=e,this.name=Ue.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},xa=class{constructor(e){this.parser=e,this.name=Ue.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ya=class{constructor(e){this.parser=e,this.name=Ue.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},_a=class{constructor(e){this.name=Ue.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(m){return m.buffer}):a.ready.then(function(){let m=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(m),u,h,d,i.mode,i.filter),m})})}else return null}},va=class{constructor(e){this.name=Ue.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==qt.TRIANGLES&&l.mode!==qt.TRIANGLE_STRIP&&l.mode!==qt.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,m=[];for(let g of h){let p=new Re,f=new C,x=new bt,_=new C(1,1,1),y=new hr(g.geometry,g.material,d);for(let b=0;b<d;b++)c.TRANSLATION&&f.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&x.fromBufferAttribute(c.ROTATION,b),c.SCALE&&_.fromBufferAttribute(c.SCALE,b),y.setMatrixAt(b,p.compose(f,x,_));for(let b in c)b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);Qe.prototype.copy.call(y,g),y.frustumCulled=!1,this.parser.assignFinalMaterial(y),m.push(y)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}},zl="glTF",ws=12,Fl={JSON:1313821514,BIN:5130562},Aa=class{constructor(e){this.name=Ue.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ws),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zl)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ws,s=new DataView(e,ws),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===Fl.JSON){let l=new Uint8Array(e,ws+a,o);this.content=n.decode(l)}else if(c===Fl.BIN){let l=ws+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ba=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ue.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=Ea[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Ea[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],m=Gi[d.componentType];l[h]=m.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(let m in d.attributes){let g=d.attributes[m],p=c[m];p!==void 0&&(g.normalized=p)}h(d)},o,l)})})}},Ma=class{constructor(){this.name=Ue.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},wa=class{constructor(){this.name=Ue.KHR_MESH_QUANTIZATION}},Tr=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,d=h*h,m=d*h,g=e*l,p=g-l,f=-2*m+3*d,x=m-d,_=1-f,y=x-d+h;for(let b=0;b!==o;b++){let M=a[p+b+o],R=a[p+b+c]*u,L=a[g+b+o],v=a[g+b]*u;s[b]=_*M+y*R+f*L+x*v}return s}},Eg=new bt,Sa=class extends Tr{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return Eg.fromArray(s).normalize().toArray(s),s}},qt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ol={9728:$e,9729:nt,9984:Js,9985:Zo,9986:is,9987:Cn},Ul={33071:Ot,33648:cs,10497:Qn},ia={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ea={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},kn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Tg={CUBICSPLINE:void 0,LINEAR:$n,STEP:Ci},sa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};Dg=new Re,Ra=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Sg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Fi(this.options.manager):this.textureLoader=new Ar(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new As(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};Ss(s,o,i),zn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())s(u,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ue.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(ki.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=ia[i.type],o=Gi[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new ot(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=ia[i.type],l=Gi[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,p,f;if(m&&m!==h){let x=Math.floor(d/m),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count,y=t.cache.get(_);y||(p=new l(o,x*m,i.count*m/u),y=new ms(p,m/u),t.cache.add(_,y)),f=new gs(y,c,d%m/u,g)}else o===null?p=new l(i.count*c):p=new l(o,d,i.count*c),f=new ot(p,c,g);if(i.sparse!==void 0){let x=ia.SCALAR,_=Gi[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,M=new _(a[1],y,i.sparse.count*x),R=new l(a[2],b,i.sparse.count*c);o!==null&&(f=new ot(f.array.slice(),f.itemSize,f.normalized));for(let L=0,v=M.length;L<v;L++){let E=M[L];if(f.setX(E,R[L*c]),c>=2&&f.setY(E,R[L*c+1]),c>=3&&f.setZ(E,R[L*c+2]),c>=4&&f.setW(E,R[L*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"";let d=(s.samplers||{})[a.sampler]||{};return u.magFilter=Ol[d.magFilter]||nt,u.minFilter=Ol[d.minFilter]||Cn,u.wrapS=Ul[d.wrapS]||Qn,u.wrapT=Ul[d.wrapT]||Qn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(p){let f=new pt(p);f.needsUpdate=!0,d(f)}),t.load(ki.resolveURL(h,s.path),g,void 0,m)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),h.userData.mimeType=a.mimeType||Pg(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ue.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ue.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[Ue.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.encoding=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new vs,Mt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new _s,Mt.prototype.copy.call(c,n),c.color.copy(n.color),this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Pn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[Ue.KHR_MATERIALS_UNLIT]){let h=i[Ue.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new Ae(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Ie)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Ut);let u=s.alphaMode||sa.OPAQUE;if(u===sa.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===sa.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==mt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Me(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&a!==mt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==mt&&(o.emissive=new Ae().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==mt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ie)),Promise.all(l).then(function(){let h=new a(o);return s.name&&(h.name=s.name),zn(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ss(i,h,s),h})}createUniqueName(e){let t=Xe.sanitizeNodeName(e||""),n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ue.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return kl(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=Ig(l),h=i[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[Ue.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=kl(new Lt,l,t),i[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?Rg(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let m=0,g=u.length;m<g;m++){let p=u[m],f=a[m],x,_=l[m];if(f.mode===qt.TRIANGLES||f.mode===qt.TRIANGLE_STRIP||f.mode===qt.TRIANGLE_FAN||f.mode===void 0)x=s.isSkinnedMesh===!0?new lr(p,_):new Ze(p,_),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),f.mode===qt.TRIANGLE_STRIP?x.geometry=na(x.geometry,Mr):f.mode===qt.TRIANGLE_FAN&&(x.geometry=na(x.geometry,Ms));else if(f.mode===qt.LINES)x=new dr(p,_);else if(f.mode===qt.LINE_STRIP)x=new Pi(p,_);else if(f.mode===qt.LINE_LOOP)x=new fr(p,_);else if(f.mode===qt.POINTS)x=new Di(p,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(x.geometry.morphAttributes).length>0&&Lg(x,s),x.name=t.createUniqueName(s.name||"mesh_"+e),zn(x,s),f.extensions&&Ss(i,x,f),t.assignFinalMaterial(x),h.push(x)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return h[0];let d=new Vt;t.associations.set(d,{meshes:e});for(let m=0,g=h.length;m<g;m++)d.add(h[m]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new et(It.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new In(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let d=new Re;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ur(o,c)})}loadAnimation(e){let n=this.json.animations[e],i=[],s=[],a=[],o=[],c=[];for(let l=0,u=n.channels.length;l<u;l++){let h=n.channels[l],d=n.samplers[h.sampler],m=h.target,g=m.node,p=n.parameters!==void 0?n.parameters[d.input]:d.input,f=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",p)),a.push(this.getDependency("accessor",f)),o.push(d),c.push(m)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2],m=l[3],g=l[4],p=[];for(let x=0,_=u.length;x<_;x++){let y=u[x],b=h[x],M=d[x],R=m[x],L=g[x];if(y===void 0)continue;y.updateMatrix();let v;switch(kn[L.path]){case kn.weights:v=Fn;break;case kn.rotation:v=ln;break;case kn.position:case kn.scale:default:v=Un;break}let E=y.name?y.name:y.uuid,N=R.interpolation!==void 0?Tg[R.interpolation]:$n,q=[];kn[L.path]===kn.weights?y.traverse(function(F){F.morphTargetInfluences&&q.push(F.name?F.name:F.uuid)}):q.push(E);let Q=M.array;if(M.normalized){let F=Ta(Q.constructor),O=new Float32Array(Q.length);for(let I=0,V=Q.length;I<V;I++)O[I]=Q[I]*F;Q=O}for(let F=0,O=q.length;F<O;F++){let I=new v(q[F]+"."+kn[L.path],b.array,Q,N);R.interpolation==="CUBICSPLINE"&&(I.createInterpolant=function(Y){let k=this instanceof ln?Sa:Tr;return new k(this.times,this.values,this.getValueSize()/3,Y)},I.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(I)}}let f=n.name?n.name:"animation_"+e;return new _r(f,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(d,Dg)});for(let m=0,g=h.length;m<g;m++)u.add(h[m]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new xs:l.length>1?u=new Vt:l.length===1?u=l[0]:u=new Qe,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=a),zn(u,s),s.extensions&&Ss(n,u,s),s.matrix!==void 0){let h=new Re;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Vt;n.name&&(s.name=i.createUniqueName(n.name)),zn(s,n),n.extensions&&Ss(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);let l=u=>{let h=new Map;for(let[d,m]of i.associations)(d instanceof Mt||d instanceof pt)&&h.set(d,m);return u.traverse(d=>{let m=i.associations.get(d);m!=null&&h.set(d,m)}),h};return i.associations=l(s),s})}}});var Gl={};Oa(Gl,{default:()=>Fg});var Fg,Wl=Ts(()=>{Fg="data:image/jpeg;base64,/9j//gAQTGF2YzYyLjExLjEwMAD/2wBDAAgEBAQEBAUFBQUFBQYGBgYGBgYGBgYGBgYHBwcICAgHBwcGBgcHCAgICAkJCQgICAgJCQoKCgwMCwsODg4RERT/xACVAAADAQEBAQEAAAAAAAAAAAADAgEABAUGBwEBAQEBAQEAAAAAAAAAAAAAAAECAwQFEAADAAMAAQEGAgYKAgEFAQAAAQISAxEEBQYhMRNhUUEicYGhB5EU0VKxwUIjcmIyopKC4RWywlNDJBEBAQEBAAEDAwQCAgMBAQAAAAERAgMEEiExQVFhcZGBIkKxMlIToQVD/8AAEQgCAAIAAwESAAISAAMSAP/aAAwDAQACEQMRAD8A/OCEFFIAFIAFIAFIAFIAFIAFIAFIAFIAFIAFIAFIAFIAFIAFIAFIAFIAFLq1bd1qNUVsp/CYl03+hIJbn3BD2/S/YH1/1HGr1LxNb48tz5XPpK6+/R8K59eo45/X9hqeLq/o8Q++9L/dd6XoxrzNm3y6Xxn/AIa3/wCq9/7To8/Xqer9Phl0nh5n1+XwUa9m2sdcVb+0S6f8Efrvp/s96b4EpeN4mnVz4NQsv/J+/wDaei/DyXvrr61zdpzJ9I/NPB9kPaH1DnyvB2RL+F7fyT+33/sP1qPE+h6evN4+fu8uuU46v2dn594P7qvP2cfl+Xr1feNcu3+qvh+w/Rp8X6Hfr1U+0cNc54b966PkPD/db6HpX+c/I8l/7qxX/Th9nPjL7HS+p7v4jkzPFz+7TwfF9jPQfFS+X6f4758HcK3/ABrrPoZ8f6G75e796wk45n2V5un0vx9K5r064X2mEv7j1V45r3VDBwT4aX4HorR9BqA4V4v0O9aCoK4l4q+x3rSVAca8b6Hb8n6FAcf8t9Dt+SEBxfy30O35JUBwvxvodvySoDz34q+x3vSUB5z8T6He9CAg82vDT/A9F6PoNQHkbvTNG1cvVFr7VKZ6j8c1Oqhg+c8r2O9C8rvzPT/H9/xcwpf8Z959C/HNTy9z/asJ7Ob9or4rzP3X+hbu/J+f4z/23kv+/T7KvGOs9T3P1cmb4uf2afm3m/uq8yOvxPMjZ9p2Ti//ACT5+w/RK8X6Honqp948+ud8N+1dH5H53sX7ReB134dbJX+LU85/uZ+r34n0PVz5vHfvn7vNrjfH1Ps7PxXZq26ax2Ret/a5cv8Aakfrvneg+n+cmvI8XTt7+NQu/wAfiezZfo8k76n0tcHe8y/Z+QH3/qf7sfSPIyrxa2eJX4JPPWv/AFfv/aet5+fU9z6/Lg63xc39HwB7vqn7vvXfT+1qifL1r8db5fPrL/u6ehz59Rx19fhyavi6n6vCG3aN/j3hu1Xqpf4bly/4M6JLL9LrJlhSFAUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAYgAUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAU6PTvSvP9V3LV4mi9r772l+Sf018EE6754m24E5vX0c59r6F+7TRrx2+pX8+vj8mPdrX6X8X/AGFcPJ6m3/r8f8jpz4fy+T9O9I9R9V2KPE8fZt+9Jchfpp+5H6x4Ppfj+JrnXo1RqhfCYlJfsO3XfPH1ryXq36/LnOb19I75I+P9G/dg6x2ep7/r8nT/AGO/6D7zV430O3fqv/Gf3XDXPnw/l1eZ6X7N+memQp8XxdWv/dinT+rb9/T29ej6GuvJ119bawzOZPpGnNr8X6HdGkuoYAa/G+h2TqKgAx4/0OqdZdQAZ0nQoKiLgU6Q6kqIoa1BlJUANawqkoBFrCcABMAnAATAcAEwHABcBgoFwGIYBcBgYBcBgYBMBwATAcAB4BOAAJ6wnAaAL1hXIAAeoNiEBzVpDuSoDlrQdDgqA4r8c6q1lQHBfjfQ7K1FQHmbPF+h3XpKmg8H1L2f9P8AUYceV42ran+LlZfx+J7F6DfPfXP0rKXmX6xX596z+7CHls9N3vW//wBW33z+ql7z7rZ4y+x249Vf9pv7OOufXh/Do/HPUvRfU/Sbc+X496/f7q52H+il7j9Y8z07T5EVG3VGyX7nNSmn/E9fPk57+leWWx57zefrHox+On3Hrv7tvE8jLb6fX8rs97+W/fqf6Pxn9XuPY4cep6n/AG+Z/wDXndOvDL9Ph8OdPqfo3qPpG16/L0Vr+187FfVV8Duzx5Oe58VzXrm8/WOYhoQUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAYgAUgAUgAUgAUgAUgAUgAUgAUgAUgAUgAU7fRfZ/1H1zdh42vkJ/n217on9f4v6IM+Ty8eOfP8C88dd/Rx69ezdc69cVsunxTKbb/Uj9J9nPZD0/0WJqIW3e1+bfa/N/6/1Uatk+ryeTzdeS/p+EduPHOf3/L572d/d1v8nDf6p3VHxXjz/wA3/rf4foR9/p8fn4HXyepz44/l59Y48O/PX8OuOT030jxPA0zq8bTGqF+Ernfq/u/qz1NWk111ertuskkn0ULV4/DsjUNEUPXo+h0xARFLGrgaZKiKWdYVIuogkyOkVBWUjFEVkioCFZIqACowAVGACk6AFMAGMVAYxUVFIXTVRSF1NDVIXUBSF1A1SDTVTVIE1UYxUVGMVAYwAYgAYwARkACNFYAK0VgFhHIzAihVA7QRFArWFaKiDlvUHqSoK4tmhfY6agqIrztvjnZeouiK8Xz/AEvx/M1Vq36p2xS980unp7NJqdWXZWdSyX6q/O/aL93N68t/pT6ve349P/7H/cz7rd4/Tv4/U/bv+XDXLvw/+P8ADpj8a36N3jba1borXcvjmlxo/S/aD2V9P9Z1tbtajbz8m6Vy5f8Aevoz2yyzZ8vL4/L1478X+nnsx364nX1fmR6Hrvs16j6Fta3Q71N/k3Svyv8AT9n+k9bHj8vPknx9fw4L3x1y88hsQUgAUgEVSABSABSABSABSABSABSABSABDABjABjABjABjABjABjABjABjLrfF7wAx9V7I+xL2uPO9Rj3e6tXjtf9r/uQcPP6j/Xj+6Onj8X36/hyey/sX5Hq9R5HlqtPi96l8L2/o+y+p+g+N40xKSlJL3JJcSNeb1E4+Ofm/wDDzanj8V6+b9HYP030zx/C0xp8fVOqJXFMrh6OnSXrq9XbWdSST6KmnQdWvWVkE16g8SVAaICSioDTI6RQGSKgAqRUAFRkAFRgAYnSoCm6UBekAim6L0CLhkToEXDdF6BA3SdABui9ABuk6ADdF6ADdF6ADC9ABhegA3RcgAbovQAvSdAC9F6AF6ToAXovQAvSdAGL0UAqkAisboAZk6EBDABGboAK0UAEaKwAHUjtAAC4CVIAcmzUHuAA8/do+h07NZUFeP5/p+nydVat2udkUmnNLqPQ3aumpbPmM6zZqvzX2o9iN3pzvyfAmtvj/Gta996/qvvP9h975Pjqurh6fD6mdfHXxfy8+uPk8WfPP0dn5B8D672t9ilXzPN9Pjlrr2aF8K+7n6/Q9zz+D1Gf49/T7V5nXy+L78/w+QLSctqk017mn8UegchDABjABjABjABjABjABjABjABDABjABjABjABjABjABjABUm3xfE+o9jPZTNx6h5sfXRqpf96X9iDz+p9R/pz/AHR08Xi/2v8AQvsb7H44ef58dv3Vp00v+P2ql9/sj6/x9POD1HqN/wAeL+9efV8Xi/2v8Op/H0c4dWnXzhUTFPp1cDa4KgG1wEhAA0SNIIB5RkBFMjIAGRkVEFMUBUyAAxAAbpOgA3RQAbpOgA3RegA3SAA3RSoBidKgKTpUBem6VDBekKhgvSFRFXpCh8i9IA+RekAfIvSAPkXpAiKvSdKgN0nSoCk6VAUnSoC9F6VAXpOgBei9ACk6AF6KDQUgAYnQAzIAGMAEZmEArMwKEpFoCKFcjUgA59kBLQAcW7UH2SVAeZ5Gj4nVu1lQwfEe2HsgvKV+b4UKdyXdmtLi2r7r/d/afVeRp+J39P6j2/49fT/hx1y8vi35n1dX5HU1FOaTTT40/imfWe2Xsotivz/Djmxe/brlf81/WS+/3PfHn9N6jP8ADq/H2v4eV18vi3/KfV8kY9A5DGADGADGADGADGADGACGADGADGADG6AGN0AMdvoXo+71nzo0yua1ytt/hM/0v8Ax5vLPFxv3+w14+L31n2+7v9j/AGbfqm9eX5E//wCbXXuT/wD60v8A8V+J9r6b4OrxNGvTqlREJKUjHqfP7J7Z9b/8ebrq9W2r4fH7rt+jvJkyOjxdClJJcSSSS/BHTo1k1CRRdOsLqkuoAuuRoQ0ASEWQAeTSBA6MgAdERQDoVMAHJ0AG6L0CKbpCoimIVNQXpOlAMToAXpAAbovQAbpAAbovQAbpAAYgAUnQAbpAApgA3TABekADdMAGMAGIAFIAG6RgBekADdIAF6ToAbpOgBek6AG6QAL0gAYnQApOkAxeilQXF6ToEViNgBmK2AGZGACszIASjUAA7RaAoBska0VAce/WF2yVAeZ5OlNP3HTv1l1EsV+fe2fs3/JbK87xp/yrf+bCXuh/1l9GfY+f4mvfrvXslVNJqk/xTPV6bz+7/Dr6/avPLZdjh5vHn+U/t2s1+Wnoe0Xot+jea4Sb032tVfT+r+lHvc/B5Z5eP1n1eVry8ezr9Ps88x0GRjABjdADGADGACGADEACmADEAB9eu92ydcJ1V0plL4ts+h9hvRfmbH6hun3T+XSn9/xr+gWyTb9nn9Z5f/5z+yTXX0/j/wBr/T3fZf0SPSfCiOJ7b5W2vvX2/Qvget42vhy8/lvl737fSOdrfi49nOff7tj+Pr4G0yEJFF1SE1oACQiyVEUSTICB5ImVAETImUA6ZEwAdMiYEU6YqZUQOmKmU0D9F6AD9F6ADdJ0AGF6ADdJ0aIpukLqIpuilRAxAoGIAFMAFMRQUwAUwAZFADF4AEKAEKAELwAFK0AEZgAhmAEMRQQwAbpAAxCKCkCA3SF1BV6L0CKovQAvSdAC9FbAC9F6AFbF6DQVsVsIGM2RsAqNkbACNkbABaI2AC0agAFaLQBXNtkfYgiK4fI1ht0FRFfP+0Po+r1Tw9mml+b3vXX4zX4Hp+Tr+J18Xkvj7ln9ucY749/NjT8s8jRt8XfenasbinLR9J7ceidX/wBQ0z75/LuS/FfhX6j6HNnUln0rz+k8uX2X+nksvNyu3qPH/tP7fMGPSOIxAApgAxgAhAApAApAA6fTPB2epebq8aP8dfmf9Wfxf8D6L2I9K+T478zZP593ujq+EL+kz5e54+L08/rPL7uvZPpPr+68c+/qR29PxnPuv3/4fQem+Jr8XRr061yYlSl+g6fGg499Xq2361mukmTIsdWiR9MgAfUhtYQBYNJUASSSUAREQAOiJgQOmRMqAdMiZQDpipgA6YvQAfovQAfovQIp+i9LqIp+i9KiB+i9KmgfopQD9FTAByIAKZARTIiKIKioAKZABUVABUVBQYqQAbgyQBC8H4BUJiPwCoHwdoCoQrQFCtFZFAjK0QArMwAjMxQEZGAEMQFZsjADdFbACti9AC9FbCaC9F6VAxei9LqCr0VsCKvRegBeitgEVsVsCjNkbACNkYQEZGAVKI2VALRKABLNQAA2obYgA4t8hN0/EqA8rzvHjdrvXa7Npy190zo8mO9Nc2y7PskSzfgfm3rPp1+meft0P/j3LW/vL+B9J7Z+lfzXh/zET/maPzfVx+K/vPd4fJPJxL/Lz+k8vs7z7dPN5OPZ1Z/Dr5+Pdzv3j5Eh6xwFIAFIAGIAFIAHT6X4Veoedp8dfCq/M/tK+LPb9iPT+Rs8y177/Jr/ANK+LX6X/YZ8vf8A6+L1/Dh67yfM4n2+avj59/Un8uvpuPi9fn6PpfB0Rp1xErkzKlL6JBvHn4Hn6u3aldZMV1aJH0oVBXRrLrAA0EgACySQJVEREVEBEyJlAOmRMAHTFTAinTJ0CKZMnSoim6RMogZMnQAbpOgA/RegAyZOgA/RUwAdMVMQRTpkTKiB0RMoBkZAAyMgRCmRkUAyKkAFSKgoKkWUARUhgA3CpBQQbhMXQKNwmKBeFaIoEaGZAA2itAVCMrIqhGZkAKzUACszIUhCszAoVsjADMjYQGbFbAKvRWwA3SdAC9FbADdJ0AM2ToAbpGwgM2TpUFbpOgRWYrYEVmyMAIyNgArMwgEpkpgIpLJYAB2F2ABx75+I+5FRCvN8zUrmpa6mmmF8ifialxEqvzz1rwH6d6hu085Hctf+l/0fA9z219P+b40+VM/m0vlf6H/Qe/weT/2eOX+q4ei8nt79t+//AC8vl59ndjr6njed/D5gh6hwFIAGIAD6tdbtsa5XaulK/Wz0fZPw/wCY9SWxr8umcvh/ifw/gTqznm38OXre/b4s+/RJtk/Lp6fne9/D6v0nxJ8TxdOmfhEpfpf4v9bOnxp+B5fJ37+71fvWK78c+3mRXXoQ2lClFdOousIA8EgqQBYZJZQBZZJYAElipgARMiYEDpkRQDpkTABkyJgA3SJgRTdJ0CKZMnQIGTF6VAOL0qAdMnSgGTImADpipgARCpgARERUQOiJlAOjIQKU8mQVA6MgAZFRQDSWQIGRl8SwgKioANwoAQoAKysAEZWRQJRqIARlYpVCUaiAEZmACM1EosIVkoAI2RhARsVsCjNitgBmydADNi9AC9FbCArYvSoC9J0qAzI2AG6RsCjNk6AGZGwAjZGwAjZGwgJTFpgUSmRsAEtkpgAOzWAANqLsCA496+I25GkiK8z1Dx536dmql1XLl/rDeTPxNcdXmyz7JGepsxX555WivF8jbpr4xbn+j9h6fth4XyfNjyJXu2rj/wBU/wDwfR469/M6/McfReTeLz+Hk6nttn4b9TznU6/LyCHccxi6oe3ZGufjVKV+thOr7ebfxAk2yPqPZDxPk+B81r826sv1L3I9H07StGjVqS4oiZ/gjyet793lz/x+HHvr3dW/m16PTc5xv5b5mSR6Hjr4DaCVGoOrUXUAB9ZoAA0klgAWWLLKALLFTAAqYqYAETFTAAiZEwIp0xelRA6YvSoB+iplAP0iYAMmToAN0XoAP0VMAH6KmBA6ZEVAOmKmUARMVAARMiYAEkksqRASSSygCSRMqIUSWSWUARElliAJJEyiB0RMsQDonSgG6L0AGbF6AFYvQlBmRgBKYtMARGRsVFC0yUwAWiNhKELQtMCiUxaYSgjZKYFEbFbADNitgBmyNhAborYAXorYFF6K2BFVsnQA3SNgBmydADdFbACtithAZsVsArNitgBmxWwAlMWmAEpi0wAWiUyAB7CWwA59xdoAce9F3lgDwParw/5n07Y0u1rea/V8f2HoebqnZruK96qWn+s7ek79nln6/Dlzcsrn6jn3eO/p8t9TY+CH8rS/H8jbqfuwul+33fsPpJx17+OevzHjXqe3qz9XT7PeP/Meqafd1R23+r4ftO32P0fn37n/ALYX9rOfq+/b4b+vw5//AKHX/Xn+2vBz7vJP0+W/S8/9r/T6bxkXx18Dy1K7wjs0l0hBXTqZNYAdECywIDSxZZRQaWKmBARMiZUASWKmVAFTFTKAImKmADpipgARMVMCKdMVMCB+i9KgH6L0qAdMXpQD9FTAB0xUwAdMVMACJipgRRExUyogImKmUAWWLLAAssWWVEBZYssoAssWWVEUWWIqKIDJiKioAqoRUVEURUIqKIomQmQEXD9EyAimdCdBqKroV0ETFVsR0VAamJVABqYrYQVKYjoANTFbCAlMWqAKlMVsAM2K2EBGRsArNitgBWxWwAvRWwAvRegBei9CAvRelQFbFbAC9FbAKzYrYAZsjYAZsVsAJTFbADNithALTJTABaYtMAEslsABbCbGEUc+420oiuLyEXf+JYkSj472o8f5PqdWlxbZVfpf4nb7Y6O6tO78Zpy/0P8A+T3ei793hz8XHP0Hf+XXP5jzep5zyb+W/Vc/4yj+y2n5fp8P+vVWdPpOtafE0Qvwif6THrevd57+nw5+br3eTq/q16aZ45+vy345nEn6PU0E0GErUHZqJqADp1sWGEB0SxYZQBpYssACyxZZURRUxUyiAiYqZUARMVMKAiYqYQBExUygCJipgA/RegA/RegA6YvQIp+i9Ain6KmBFOmKmVEURMRMogImKmABExUwAImKmVEURUKmVEBVQiZQBpoRUBFGVA1RUQGVA1RQBlQioqIoqoGqKiKMqB5FTUMEyB5FQBMgeRQMEyBOgmhh3QN2VBTOhHRURVdCOgAroG6CArYjoArVQjoAM2K2AGbFbCCs2K2AGbFbACtiNgBWxWwgL0VsAL0VsAqti9Aiq2L0AK2K2AFbFbADNitgBXQjYAZsVsAM2K2EBmxWwAlMWmA+ypTFphAJbJbAAdsW2AAdpNoAc2824sQHje0mn53pu9fjKV/+L6dPnx83Tth/4ppfxR29J17fNz/H8seO51L+K5+eb4+mupss/RvFXJlfbiN45LdqVYR3aCaSFWK69TF1sgDphiwwAPLFllRAaWJLKANLFTAAqYqYEBExUyoAiYqZQBExUwAImKmADpiplAOmL0ACKhEwAJ0RUABOiJgAToiYAEyFTAB0xUwAImImBFETFVFRFETETKICqhFQAFTEVAAVUIqKiAyoGqKgCqhFRRFFVA1QEUZUCzGiKNmCyKiAuYPIuoAmQPIqAJmCzKgCOgWZdQU7oG6AimdA3QEUzoR0AFdCNhBVbEdABXQjoAK2I2AFbFbCArYjZUFVsVsAK2L0AL0RsAG6I2ADdEdAAzoRsAK2K2EBWxWygK2K2EBmxWyoDNitgBmxWwAzYlMIDUxaYBUpiUwAWmLTCAW2LbAKFsYuxgADcTcypAcnkfiTebiRmrSeP+BNDFKQjt0v4C6WZKpHXrYuuggOiGLDKgDwxJooA8sSWWIijSxZoogKmKqAAqYiYEUVMRMCAqYiZUFETFTKIoiYiYEBExExoAnRcioB+i9KaB+idIoCdE6ABMhOgATonQAKmIqAAiYioACKhEwAKqEVFRFFVA1RURcFVCKiogKqBqigDKgaoAC5A1QEUXIHkVEUTMHmVEUXMHkVEUTMHkURT5A8gIomQPMIindA8ioindA8gGBnQN0ADOhHQAM6BuggpmxHRURVdCOgAZsRsAGbEyACtidABnQnQAZsToAN0TpFA3ROkXQN0RsIBmxOjQDNiNgBWxWwArYjYAVsRsICtiNgBmxKoCjUxKYAamJVCoKlMSmAC2xbYQA9jF2MqCg7WLtZRCubeyb2ahEpQ9DF0slWkSO3UxNVGRqDr1sTWyCjphiRQEV0TQk0BAaaEmigDpiTQEUaaETKiKKmIqKIDJiKgAImKmABExEwAKmImVAETETKAJ0ToEUToqYAP0XoEU/ROgRROidAgJ0RMqAJkJkUATomQAEVCZAATIRUABVQNUDQFVCZAARUJkABMhMgIoioTIqIomQPIqIouQLIqaii5A8ipqKJkDyKiKfIHkVEUR0DyKiKfIHkVEU7oHkBMU7oR0ADOgeQAO6BugAZ0JkADOhMgAbITIAG6I6CAbomRUAzoTpUA3ROgA3Reg0F6I2ADdEdBKKZsRsqIGdCOgArYjoAK2K2AVWwboCKtMR0AFdCNhBWpiVQASqEpgBKYtUEFLdCXQALsYlsABbWJtZSIUDcxdzNQiUoWmgemhVqQd2qhNVGKtWEdeuhNdGVqjpihIogo6JoHNAAeaEmgIo80DmiogOqBqigDJiKgAMqEVARRVQiZUQFVA0ygCqhFQAETFVAARUJ0ACdE6VAEyE6VNATITpUATITpUATITpQD9EyAIJ0ToBRMhMgICZCdAAioTIACZA8ioAuQPIqAJkJkVNATITIoAmQPIACZA8gALkCyAAmQPIACZA8gAJkDyAB8hMgAbITIAHyB5BAPkJkVANkJkADOhOgA2QmQAM2J0AG6J0J8AfIH0oqHyE6EFXIXpUENkJ0qKGdCdKgK2K2AFbEbABnQjoAK6EbCAZ0I2VAV0I6GgrOhKoANVCVQQGqhKoANVCVQFEqhKoAJdCXQAJsoTZQWFQPZQmyhFhUoO6hNtFixKUHTQPTQq1IR3aqB6qM0rUSOzXQPXRla0jqigcUZKo6ZoSKAoPNCTQAGmhJoADKhJoCKMqEVAQFTEVFQBlQiooAqYNUABVQioCKImKmVEURUJ0qICZCJlAE6JkABOiZAATomQAE6J0ACdE6AD9F6VAPkJ0ACZCdKiKJkJkBA+QnSooJkJ0qIomQPIogJkJkABMgeQAEyB9AAmQPIAomQPICAmQPoAEyB5AA+QmQQD5A8iiofIRsIKbITpUA+QnSoBshMioBshOlQDdFbABuidAim6JkBFN0R0ADdEyABshHQANkJ0AGbEdBAVsVsqArYjoApmwboAGdCOgAzYjoICuhHQAaqEqgKNVCVQAaqEqgAlUJdAAt0JdAKhNlCbKKsED20D2UIsKlC20D20WLEpQdNgtN/AtjXUSJK7tVA9VnOrWoR266Ba6MVa1EdkUCijNWtI6ooHFGVUdE0DmiCo6JoHNAUHVCTQAGVA1QAGVCTQAFVCKgIoqoRUBAVUImVAFVCKioAioRUUARMRUABeg1QAE6KqGiKdMVMqIp1QvSogfITpU0BOidKAJkJ0AHyEyAAnRMgAfonQAJ0ToAP0ToAEyEyAB8hMgAfITIAHyFyHwIpshMh8CKfIToD5D5CdAB8hMgIpuidAB+iZAA3RHQAPkJkADZCZAA+QnQAbonQAbITIIBmxelQFdC9KgL0XIAq9EdARTNiOgAZ0J0AGdCOggK6EdFQFdCOgAZ0DdAFV0I6ACugdUAFqhKoANVA6oANVA6oAjXQO6Cgl0CuwohdlA9lCLBKTZQLZZYsKlD20D22WRZEqVzeLsy1w/ojn9O2d0T9Pca8kzqz9XT1POeW/r8pzdk/Znw3eI9PVYLVZwrVjpKkduuwWuznY1WiOzXYOLMVbGokdUWDizJVHTNA4si4qOiaBzRlVHRNA5ogoPNA5oADqgaoADKhFQAFVCKgAKqEVAAVUDVARRUxFQEURUIqAii9EVFRARUIqKgCZCZFAEyEyAAioHkABOiZAATomQAE6JkAD9EyAinTF6XUTFP0TICKfovS6iKfITpUQPkJ0qAfITpUFPkL0qIGyFyKgpuidKiKfonSogfITpUA3ROl1BT5CdAim6LkBFN0TICKbomQEU/RMgIpuiZAA7YPoAPkD6AD5CZAAzYjoIBug3QAM2I6AKZsR0BFM6BugIpnQjoAK6EdABXQjoICuhKoKDVQOqAC1QOqAI1UDqgoNVA7oAiXYO7LFBLsFdiLIgXZYLZYkakSlJssFssSLIlSk3bMZp/ZM5/P24+Psf3XP4muZtkb8HO+Tn+U6uRny3OK5PTdnFU/XoDw7w3L6+46er5+ea36jnfH+zHgvxYz4rnf7vX1WB12eWrY7xI7tdgddmLFsbiR3a7A67MWLY0kdkWBizNWxqVHXFgosytjSOqaBTZhao6ZoFNkVUdE0DmzKqOiaBTRBUHVCKgKgyoGqAoMqBqgAKqEVAAVUIqCAIqEVFAEyEVAAXIGqAAqoGqAAuQNUBFFVA8gIomQmRURRMhMiogfouRUA/RMioAmQnSoB8hMioB8hcioB8hMioB8hMigCZA8gAfITIACZA+gA+QmQAPkJ0IB8hMioBshMioB8hOlQD5CZFQDdEyKgGyFyABshMgAbITIAHdA8gCnyB5ART5A3QEU+QNsAGyEdAAzoR0ADOhHQAV0I6ABnQN0QAzoG6CgZ0CdAE01UCqgKi1QOrCgtUCqgCLVArsLgNdgrsRqQRrsFssRZBC7LBbLEiyCUuywWyyyLIVKXZYLZZZFiVLXN6ns/y5n7s5/P2Zbkv6qOvpef8AK38R09NznG/msee/45+rPmu9fsDNY0n9mKb6myxWJcso9LVs6kwHi7Owvp7jydTK35+c7v6/LvKz47vLv12B12cbGrHTUduuwOuzFi2NJHbrsDrsxYtjUR2RYGLM1bGkdcWCizOLY0jpmwU2ZXGkdM2CmzNiqOmbBTZlVR0TQKbMrio6FQJWRVB1QNUQVBlQNWBUGVA1QFBlQNUABVQioACKhMgAJkIqAAmQioACZCZBAEyEyKgCZA8igCZCZAATITIACZA+gATIToDATIHkBMUTITICKfITICKfITICKJkDyAiiZA8gIp8hMgIp8hMgIp8hMgIpshMgIp8hMgAfIHkAD5CZAA2QmQAPkJkADZCOggGyEyKAbITIAGyEdAAzoR0RQM6EdEUDOgboAGdA3QAM6BugCGdA3QFQzoE7C4BqsFVEUDVYKrCiatWCqwuCLVgqsLi6i1YK7CyFqNdgbsYsgjbLA7LEjUEqbLA7LEiyFSpssDdlkWQtSpsvgDyduOuv4Fkb8PPu7iVnyXOa5dl57Kr7sU78T28yforn1d6tRiAAXxr5fPuDl8aZz9RzvO/huzZY14r84zLld+uwWu+pHlsa6mXHeVJddeuwUWYsWtRHZFgYsxY1Y1KjsiwMbDFi2NRJXZFgI2GLGrGkdk2BizGLY0jqmwM7DNXGkdU2CmzNiqjomwU2ZxcaR0KwU2RcVHQqBKzK40joVAlZFVB1YJWZVQdUCVkUB1QJUQxUGVA1YFQVUDVAVBsgSoCgqoTMACqgeQAEyEyIoCdBqiKAuQPIigJkJkRQEyB5AATITIAHyEyAAmQPIACdB5AATomQAPkJkAD9B5AATIH0AH6JkAD5CZDUA+QPIKB8hMiKB8geRAD5A3QAPkDyCgfITIAGyB5EUD5A3QAO6BugCHdAnYFQR0CdgA7sE7Cgd2CdkUNO6BOwuCaZ2CdkXFQzsFVhRDVYKrIsioarBVYxcEWrA1YkXFQ12Buxi4Jq3YC7EjULUW9gG9gkWQ1GuwOyxI1IJamywV2JFkEtS7BXYkakKloXlbOtT+sFdZU2dfT8/F6b5nt5kY8t+kZt26xCiDEACkAA2i/dz7AorGjj5+cu/l08nPu5sb8d+MZ5uV1xQOaPPVrqjqiwUWZxbGokdUWBizNi41KjsiwMWYsasa1HXFgI2GMasa1HZGwBGwxYuNazrsmwE7DNi2NajrmwE2ZxbGk11TYGbMrijpVgZszjWKjpVgVZnFxU10KwSszi40g6sErIuKg6sErMrjWoOrBKyYuKgysErIuKmjqgSsyuKgysErIqg2QJWRQGyB5kVUFzBZkVUGzBZkFQbMFmBUFyB5AVBcgWQFQXIHmBUEyB5AVBcgWQFQXIFmBU0XIFkBQXIFkAQTIHkBUEyB5gVBMgWYFQTIHkBUEzBZAVBMwWYFQTMFmBUEdAnYUBHYJ2RQEdgnZFAR0CdkUQ7oE7C4qCOwTsmLiod2CdkUDuwTsYoh3YJ2RcVDuwLsYuAd2BqyYuCHqwNWJFxUPVgK2DFwQ9WAvYJFwQ17AF7BIsi6ya9gC7GNSKmmuwN2SRrDUa7A3YkWQqLdgqsSLgjXYKqEiiF3XyefcHsrKjfh53rfw6ePn28/unkuRju7UIaEFIAGIAFIAFIABdd+4HL4zj5ec6/d17593LfF2M83K6JoSaPOtjoaPNg5oziqjpmwU0ZxrGkdM2CmzFjVjWprqnYBmzGNKjqnYBmzGNY1qOudgCdhjGsa1HXOwBOwxY1Y0y6p2AJ2GMaxqVNdS2AJ2GMaxpnXUrALYZxcaR0qwK2GcaxU10KwK2GcXGtR0KwK2GcaxUdCsCthnFxU10KwKsi41qaOrAqzOLioOrBZkXFQZWCVkVdTRlYJWZxrGtTRswWZlrF1BswWZlVQbMDmTFVBswWZMVUGzA5kVUGzBZkVUFzBZkVU0XMHmQxUEzBZhcVNFzBZkVU0XMFmRVQXMDmRVQXMFmRVQXMDmTFVBcwWZFVBMwWZFxU0R2Cdkxo1BHYJ2RcVNEdgnZMXFQR2BdkxcVBHYJ2MXDQR2BewmLggjsC9hMaxUEdgXsJi4upoj2AXsJjWCaI9gB7CYuKmiPYAewmNYupolbAFbCY1gglbAFbCY1hqaetgCthJGsVNNewDVkkawQ17ANWSRrDUW7BVZMaxUWrBVRJGpBGqwdUTFEaqEqgoJsv3A6rrNeLj3dOnj59vKd3Ix1drENCCkADGACGADGACkADGAB4r8BE+HPy8ZddLNmNcX7Mz4HmhJo87XXPtuOqS7BpoGqMKoPNA5omKqOiaBTRnFUdE2DmjOKqOibBKjNitajomwU2ZxrFR0zsAzZjGsaR0rYAVmcXFR0rYBVmcaxrUdK2AFZnFxdR0rYAWwzjWNamulbAK2GMaxdTXStgBbDONYqa6FsArYYxrGtZ10LYAWwzjWNJrpWwAthnFxU10fMALYZaxdTXRmBWwy1jWpo+YH5hnFxdTR8wOZMXF1B1YH5hnGsXUGzA5mcaxUHzA5mcaxUGzA5mcXFTR8wOZMXFQbMDmTFxUGzA5kxcVBswOZMVU0XMFmTFxUFzA5kxrFTRswOZnGsVBcwPzDONYuoLmBdkxcXUFzA/MIuLqC5gXsIuLrOiuwD2EaxdTRnYB7CYuKmivYAewmNYqaK9gB7DONYus6K9gF7CYuLqCPYAewmNYqCvYAdkxrF1NFewA9hnGsEEewC7JjWLqCPYAdkxcNQStgGrJjWLqGqwVWTGsENVgqsmKuotWDqhiiLVA6oKDVQOqGKItUDqgAroSqC8zbgluJdCN9NeLjbv4dOZ7Zid3IxbtYxQGMAGMAGMAEMAGMAGMAGMAGMAFmuEM+Tj3T9Wl5uVBUxJo4Onk4+8/t0Z56+wqoRM5K0DTQNURVTR1QNUZXF0GVA1RnFVB1QNURVB1QNUZVUGVg1RFVBlYNUZxcaQZWDVExVQZWDVGcXF0GVglZMXFQdWCVmcXFQdWBVkxcXU0dbASszjWNamjrYBVmcXFQdbAKsmLio6FsAKzONYqOj5gDMzi41rOuhbAGZMXGtTXQtgDMzjWLqOj5gD5hnGsXUH+YAzM41io6PmAMzOLi6g/zAGZMXF1B/mAPmExcVNH+YA+YTFxUH+YA+YTFxdTR/mAPmExcXUG+YA+YTGsVB/mAPmGcaxUG+YAzM41i6gz2AMyYuLqaM9gDMmLhqaN8wC7JjWLqCvYAdkxcVBXsAuyYqoK7AuyY0upoj2AXZMXDU0R2CdExrFQ7sE7M41iod2DdExcNDOwboYuCGdg3RMXFQzsG6ChpnYJ0RRDOgboKaK6BuhgItUI6CqiugboKIroRsigroSqDfj4+9GeuvslV0hrx8ZGk6uoxgAxgAxgAxgAxgAhgAxgAxgAxgAxgAxgApAAaaFOfk4z5n0dGuetZEVCpnBvvjP2dGeboioRMwrQKqEVGVXUGVA1RFVBlQNUZVQdUCVEVUHVA1RnFVNGVA1RFa1NGVA1RnFVBVQNURVNGVA1RFNBVQNUTDFQVUDVEVUFVA8iYqpouQPIzjWKaLkDyMtYAuQPIyuLqC5gsiYuLqC5g8iYuKguYPIzjWKgmYPIzjWKguYLIyuKguYLIi4qC5gsiLipouYLImLioLmCyIuKguYLImLioLmCyJi4qCZgsiY1ioJmDyM41ioJmCyJiqgmQPIirqHzB5ExcDTugeQxRNO6B5ExVQ7oHkRVQ+QPIiqh8gboKBnQN0RRNO6BOiLiod0DdBV1DOgboiiK6BugqoZ0DdEUDOgboLgiuhHRMVUV0I2FBWxGyNccXr9hm3FdCjjjbv2dZMOusZYwAYwAYwAUgAYwAYwAUgAQwAYwAYwAYwAYwAYwAYwAYwAYwAMmKc++M+Z9HRqdayfoqZxb78f3jaTr8nVC9MDSCKhFRFVBVQNUQUGVA1RFVBlYNWRVQZUDVmcVQZUDVkVUGVAlZMMVBlQNUTFxTRcgaoimgqoGqIqoLkDVExcVBcgeRnFVBcgeRFVNFyB5EVTRMgeRFDRcgeRFNBMgeRlQEyB5ExTQTITIigfITIigfITIimh8geRFwBMgeRMXDQTIHkMXAEyB5EXAPkDyIoCZAsiKGiZA8iKIfIHkTFVD5A3RFVDugboLi6h8gboiqh3QN0TFA7oE7GLgh3QN0RVQzoG7IoGdA3YXBDOgbomKqGdA3QAM6EdBcEV0L0CorYvQ3x49+aJelbFJxx7v2dC9YyxhPgBjABjABjABjABjABjABjABjABDABjABjABjABjABjABjABjABjABjABjABUyGeuJ00s6xDdFOVln1dLJfq3usfQ3SdOTfXFn0bSdGyFMKoIqB9IKgqoHkRcVBlQNURVQZWCVExV0GVglRlVQdWCVkVUGVAlZMVU0ZUCVmcaxTRsgWZlVTRswSsiqg2QLMiqguQPMmKqC5AsyLioLkDzJi4qCZA8zOLioJkDzJi4qCZA8yYuKgmQPMi4qCZA8iYqpomQPMmLioJkDyIuKgmQLMYuKgmQPMmLiofIHmRVQTIFmRVQTIFmRVQR2CdkxrBBMgWZMVUEdgnZFVDuwTsiqgjsE6GKaHdAnRFEO6B5ExVQzoToFQzoUKC9J0jXPFol6bpOknNrpJItY1ekJz48+rS3rUYwAYwAUgAYwAYwAYwAYwAYwAYwAYwAYwAQwAYwAYwAYwAYwAYwAYwAYwAYwAYwAYwAYwAYwAYwAXpCXjnpVlsRSHO8WOjUsrK9J05Ol4lbZ91huk6c1vFjSTqLkQyqhlQpFA+QnSKAioTpFARWDyIuKguYPIyuKguYPIiqguYLImKqDZgsiYqoLmDyIq6guYLIi41rIuYLImLjWoLmCyM40uoLmCzM41i6guYLIzjWLqC5gsiYq6guYLImLi6guYLImLioJkDyJimoJmCyJiqgmYPIiqh8weRMVUO7B5ExVQ7oH0KqHdCdIqobITpFAzoUiguRCKC9J0LOLRL1GJ0jpOJP1Vm9WqQxObXRbZGVIScSKttqMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAIYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAL0hLJVNsFyIZvj/DSzpDe5inO82fZ0a1k3Bes5OmStM7TEzObd8cbZ9ymzlmGr460z7oplx/iZX22fZpNjF4RV1ELwiqjdLwiqiF4RVROl4RV1E6XhMVdROm4TFXUbpuMi4uprdNxkVdRjcZFXUbpuEVUbpuEVUQuJFVELwiqiG9y/Ei+2/hU2J7zZSRqeOqz7o3CZmW//XGmfcvBcmYdJzJ9mmNpvcKYnNv2dGtxlekMzx/lpb0jdMScyfZTaMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAMYAP/9k="});Hi();Hi();var Pl={type:"change"},ta={type:"start"},Dl={type:"end"},Er=class extends an{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",lt),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",lt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Pl),n.update(),s=i.NONE},this.update=(function(){let T=new C,B=new bt().setFromUnitVectors(e.up,new C(0,1,0)),fe=B.clone().invert(),le=new C,ye=new bt,ve=2*Math.PI;return function(){let Pe=n.object.position;T.copy(Pe).sub(n.target),T.applyQuaternion(B),o.setFromVector3(T),n.autoRotate&&s===i.NONE&&E(L()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Be=n.minAzimuthAngle,Ve=n.maxAzimuthAngle;return isFinite(Be)&&isFinite(Ve)&&(Be<-Math.PI?Be+=ve:Be>Math.PI&&(Be-=ve),Ve<-Math.PI?Ve+=ve:Ve>Math.PI&&(Ve-=ve),Be<=Ve?o.theta=Math.max(Be,Math.min(Ve,o.theta)):o.theta=o.theta>(Be+Ve)/2?Math.max(Be,o.theta):Math.min(Ve,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),T.setFromSpherical(o),T.applyQuaternion(fe),Pe.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||le.distanceToSquared(n.object.position)>a||8*(1-ye.dot(n.object.quaternion))>a?(n.dispatchEvent(Pl),le.copy(n.object.position),ye.copy(n.object.quaternion),h=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",X),n.domElement.removeEventListener("pointerdown",Ee),n.domElement.removeEventListener("pointercancel",Je),n.domElement.removeEventListener("wheel",xt),n.domElement.removeEventListener("pointermove",De),n.domElement.removeEventListener("pointerup",ze),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",lt),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,a=1e-6,o=new ii,c=new ii,l=1,u=new C,h=!1,d=new Me,m=new Me,g=new Me,p=new Me,f=new Me,x=new Me,_=new Me,y=new Me,b=new Me,M=[],R={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function E(T){c.theta-=T}function N(T){c.phi-=T}let q=(function(){let T=new C;return function(fe,le){T.setFromMatrixColumn(le,0),T.multiplyScalar(-fe),u.add(T)}})(),Q=(function(){let T=new C;return function(fe,le){n.screenSpacePanning===!0?T.setFromMatrixColumn(le,1):(T.setFromMatrixColumn(le,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(fe),u.add(T)}})(),F=(function(){let T=new C;return function(fe,le){let ye=n.domElement;if(n.object.isPerspectiveCamera){let ve=n.object.position;T.copy(ve).sub(n.target);let _e=T.length();_e*=Math.tan(n.object.fov/2*Math.PI/180),q(2*fe*_e/ye.clientHeight,n.object.matrix),Q(2*le*_e/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(q(fe*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),Q(le*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function O(T){n.object.isPerspectiveCamera?l/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(T){n.object.isPerspectiveCamera?l*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(T){d.set(T.clientX,T.clientY)}function Y(T){_.set(T.clientX,T.clientY)}function k(T){p.set(T.clientX,T.clientY)}function G(T){m.set(T.clientX,T.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);let B=n.domElement;E(2*Math.PI*g.x/B.clientHeight),N(2*Math.PI*g.y/B.clientHeight),d.copy(m),n.update()}function J(T){y.set(T.clientX,T.clientY),b.subVectors(y,_),b.y>0?O(v()):b.y<0&&I(v()),_.copy(y),n.update()}function W(T){f.set(T.clientX,T.clientY),x.subVectors(f,p).multiplyScalar(n.panSpeed),F(x.x,x.y),p.copy(f),n.update()}function P(T){T.deltaY<0?I(v()):T.deltaY>0&&O(v()),n.update()}function $(T){let B=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),B=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),B=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),B=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),B=!0;break}B&&(T.preventDefault(),n.update())}function ne(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{let T=.5*(M[0].pageX+M[1].pageX),B=.5*(M[0].pageY+M[1].pageY);d.set(T,B)}}function U(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{let T=.5*(M[0].pageX+M[1].pageX),B=.5*(M[0].pageY+M[1].pageY);p.set(T,B)}}function oe(){let T=M[0].pageX-M[1].pageX,B=M[0].pageY-M[1].pageY,fe=Math.sqrt(T*T+B*B);_.set(0,fe)}function ae(){n.enableZoom&&oe(),n.enablePan&&U()}function he(){n.enableZoom&&oe(),n.enableRotate&&ne()}function ee(T){if(M.length==1)m.set(T.pageX,T.pageY);else{let fe=xe(T),le=.5*(T.pageX+fe.x),ye=.5*(T.pageY+fe.y);m.set(le,ye)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);let B=n.domElement;E(2*Math.PI*g.x/B.clientHeight),N(2*Math.PI*g.y/B.clientHeight),d.copy(m)}function re(T){if(M.length===1)f.set(T.pageX,T.pageY);else{let B=xe(T),fe=.5*(T.pageX+B.x),le=.5*(T.pageY+B.y);f.set(fe,le)}x.subVectors(f,p).multiplyScalar(n.panSpeed),F(x.x,x.y),p.copy(f)}function me(T){let B=xe(T),fe=T.pageX-B.x,le=T.pageY-B.y,ye=Math.sqrt(fe*fe+le*le);y.set(0,ye),b.set(0,Math.pow(y.y/_.y,n.zoomSpeed)),O(b.y),_.copy(y)}function de(T){n.enableZoom&&me(T),n.enablePan&&re(T)}function be(T){n.enableZoom&&me(T),n.enableRotate&&ee(T)}function Ee(T){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",De),n.domElement.addEventListener("pointerup",ze)),se(T),T.pointerType==="touch"?S(T):Ye(T))}function De(T){n.enabled!==!1&&(T.pointerType==="touch"?A(T):He(T))}function ze(T){ie(T),M.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",De),n.domElement.removeEventListener("pointerup",ze)),n.dispatchEvent(Dl),s=i.NONE}function Je(T){ie(T)}function Ye(T){let B;switch(T.button){case 0:B=n.mouseButtons.LEFT;break;case 1:B=n.mouseButtons.MIDDLE;break;case 2:B=n.mouseButtons.RIGHT;break;default:B=-1}switch(B){case si.DOLLY:if(n.enableZoom===!1)return;Y(T),s=i.DOLLY;break;case si.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;k(T),s=i.PAN}else{if(n.enableRotate===!1)return;V(T),s=i.ROTATE}break;case si.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;V(T),s=i.ROTATE}else{if(n.enablePan===!1)return;k(T),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ta)}function He(T){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;G(T);break;case i.DOLLY:if(n.enableZoom===!1)return;J(T);break;case i.PAN:if(n.enablePan===!1)return;W(T);break}}function xt(T){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(T.preventDefault(),n.dispatchEvent(ta),P(T),n.dispatchEvent(Dl))}function lt(T){n.enabled===!1||n.enablePan===!1||$(T)}function S(T){switch(ue(T),M.length){case 1:switch(n.touches.ONE){case ri.ROTATE:if(n.enableRotate===!1)return;ne(),s=i.TOUCH_ROTATE;break;case ri.PAN:if(n.enablePan===!1)return;U(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ri.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ae(),s=i.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;he(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ta)}function A(T){switch(ue(T),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ee(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;re(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;de(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(T),n.update();break;default:s=i.NONE}}function X(T){n.enabled!==!1&&T.preventDefault()}function se(T){M.push(T)}function ie(T){delete R[T.pointerId];for(let B=0;B<M.length;B++)if(M[B].pointerId==T.pointerId){M.splice(B,1);return}}function ue(T){let B=R[T.pointerId];B===void 0&&(B=new Me,R[T.pointerId]=B),B.set(T.pageX,T.pageY)}function xe(T){let B=T.pointerId===M[0].pointerId?M[1]:M[0];return R[B.pointerId]}n.domElement.addEventListener("contextmenu",X),n.domElement.addEventListener("pointerdown",Ee),n.domElement.addEventListener("pointercancel",Je),n.domElement.addEventListener("wheel",xt,{passive:!1}),this.update()}};var Rr=new Map,$t;function Og(r){if(!Rr.has(r)){let e=new Promise((t,n)=>{let i=document.createElement("script");i.src=r.replace(/\.glb$/,"-data.js"),i.onload=()=>{i.remove();let s=window.KAKEE_VIEWPORT_ASSETS?.[r];if(s){delete window.KAKEE_VIEWPORT_ASSETS[r];try{let a=atob(s),o=new Uint8Array(a.length);for(let c=0;c<o.length;c++)o[c]=a.charCodeAt(c);t(o.buffer)}catch(a){n(a)}}else n(new Error("Local model data is missing"))},i.onerror=()=>{i.remove(),n(new Error("Could not load local model data"))},document.head.append(i)}).catch(t=>{throw Rr.delete(r),t});Rr.set(r,e)}return Rr.get(r)}async function Ug(r,e){if(location.protocol==="file:")return Og(r);let t=await fetch(r,{signal:e});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.arrayBuffer()}function Yl(r){let e=new Set;r?.traverse(t=>{t.geometry&&e.add(t.geometry);let n=Array.isArray(t.material)?t.material:[t.material];for(let i of n)if(i){for(let s of Object.values(i))s?.isTexture&&e.add(s);e.add(i)}}),e.forEach(t=>t.dispose())}function Cr(){if(!$t)return;let r=$t;$t=void 0,r.abort.abort(),r.observer?.disconnect(),r.controls?.dispose(),r.sourceMaterials?.forEach((e,t)=>{t.material=e}),r.clay?.dispose(),r.wire?.dispose(),r.environment?.dispose(),r.matcap?.dispose(),r.matcapTexture?.dispose(),r.floor?.geometry.dispose(),r.floor?.material.dispose(),Yl(r.content),r.renderer?.dispose(),r.renderer?.domElement.remove()}function Bg(r){let e=new vn,t=new ti(1,1,1),n=new Ze(t,new mt({color:3817032,side:Ct}));n.scale.set(14,8,14),e.add(n);for(let[a,o,c,l,u,h,d]of[[0,3.8,0,6,.1,6,3.6],[-6.8,1,0,.1,4,6,2],[6.8,1.5,-2,.1,3,4,1.5],[0,1,6.8,5,3,.1,1.1]]){let m=new Ze(t,new mt({color:new Ae(1,1,1).multiplyScalar(d)}));m.position.set(a,o,c),m.scale.set(l,u,h),e.add(m)}let i=new Ii(r),s=i.fromScene(e,.035);return i.dispose(),t.dispose(),s}async function kg(r){let{GLTFLoader:e}=await Promise.resolve().then(()=>(Hl(),Vl));return new Promise((t,n)=>{new e().parse(r,"",i=>t(i.scene),n)})}var Xl={"nomad-clay":()=>Promise.resolve().then(()=>(Wl(),Gl))},ql={"nomad-clay":{gain:1.55,contrast:1.9,saturation:.8,rim:16767400,rimPower:2.8,rimFrom:[.65,-.6],background:328965}};async function zg(r){let{default:e}=await Xl[r](),t=await new Fi().loadAsync(e);return t.encoding=Ie,t}async function jl({src:r,poster:e,title:t,matcap:n}){Cr();let i=document.querySelector("#viewportStage"),s=document.querySelector("#viewportStatus"),a=document.querySelector("#viewportPoster"),o=document.querySelector("#viewportReset"),c=[...document.querySelectorAll("[data-viewport-mode]")],l={abort:new AbortController};$t=l;let{signal:u}=l.abort;for(let d of c)d.disabled=!0,d.hidden=!1,d.setAttribute("aria-pressed",String(d.dataset.viewportMode==="clay"));o.disabled=!0,a.src=e,a.alt=t+" \uC791\uD488 \uC774\uBBF8\uC9C0",a.hidden=!1,s.textContent="3D \uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\u2026";try{let Y=function(){let W=It.degToRad(Q.fov/2),P=Math.min(W,Math.atan(Math.tan(W)*Q.aspect));Q.position.copy(O).multiplyScalar(y*1.08/Math.sin(P)),F.target.set(0,0,0),F.update(),I()},G=function(W){g.forEach((P,$)=>{$.material={texture:P,wire:l.wire,matcap:l.matcap}[W]||l.clay}),E.visible=W==="texture"||W==="clay",N.setClearColor(W==="matcap"?ql[n]?.background??1119002:1119002);for(let P of c)P.setAttribute("aria-pressed",String(P.dataset.viewportMode===W));s.textContent={matcap:"Nomad Sculpt\uC5D0\uC11C \uC791\uC5C5\uD560 \uB54C\uC758 \uD074\uB808\uC774 \uB9E4\uD2B8\uCEA1 \uADF8\uB300\uB85C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.",texture:"Substance Painter\uC5D0\uC11C \uC791\uC5C5\uD55C \uD14D\uC2A4\uCC98\uB97C \uC785\uD78C \uBAA8\uB378\uC785\uB2C8\uB2E4.",wire:"\uC6F9\uC6A9 \uBAA8\uB378\uC758 \uC0BC\uAC01\uD615 \uBA54\uC2DC\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",clay:"\uBB34\uAD11 \uC7AC\uC9C8\uB85C \uBAA8\uB378\uC758 \uD615\uD0DC\uB97C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4."}[W],I()},d=await Ug(r,u);if($t!==l)return;let m=await kg(d);if($t!==l){Yl(m);return}l.content=m;let g=new Map,p=!1;if(m.traverse(W=>{W.isMesh&&(g.set(W,W.material),[W.material].flat().some(P=>P?.map)&&(p=!0))}),!g.size)throw new Error("No meshes in model");if(l.sourceMaterials=g,l.clay=new Pn({color:11910088,roughness:.86}),n&&Xl[n]){if(l.matcapTexture=await zg(n),$t!==l)return;l.matcap=new xr({matcap:l.matcapTexture,toneMapped:!1});let W=ql[n]||{};l.matcap.onBeforeCompile=P=>{P.uniforms.uGain={value:W.gain??1},P.uniforms.uContrast={value:W.contrast??1},P.uniforms.uRim={value:new Ae(W.rim??0)},P.uniforms.uRimPower={value:W.rimPower??3},P.uniforms.uSaturation={value:W.saturation??1},P.uniforms.uRimFrom={value:new Me(...W.rimFrom??[-.55,.85]).normalize()},P.fragmentShader=P.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGain, uContrast, uRimPower, uSaturation;
uniform vec3 uRim;
uniform vec2 uRimFrom;`).replace("vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;",`
            vec3 outgoingLight = pow(diffuseColor.rgb * matcapColor.rgb, vec3(uContrast)) * uGain;
            outgoingLight = mix(vec3(dot(outgoingLight, vec3(.299, .587, .114))), outgoingLight, uSaturation);
            float rim = pow(1. - clamp(abs(dot(normal, viewDir)), 0., 1.), uRimPower);
            vec2 rimSide = normalize(normal.xy + 1e-4);
            outgoingLight += uRim * rim * (.15 + .85 * smoothstep(-.2, .9, dot(rimSide, uRimFrom)));`)}}l.wire=new mt({color:10147803,wireframe:!0});let f=new Zt().setFromObject(m),x=f.getBoundingSphere(new Qt);if(!Number.isFinite(x.radius)||x.radius<=0)throw new Error("Invalid model bounds");let _=new Vt;_.add(m),m.position.sub(x.center);let y=2.4;_.scale.setScalar(y/x.radius);let b=new vn;b.add(_),m.traverse(W=>{if(W.isMesh){W.castShadow=W.receiveShadow=!0;for(let P of[W.material].flat())P?.transparent&&(P.depthWrite=!0)}}),b.add(new Ui(14674687,2762288,.55));let M=new Jt(16774118,2.4);M.position.set(-3.5,6,4.5),M.castShadow=!0,M.shadow.mapSize.set(2048,2048),M.shadow.bias=-4e-4,M.shadow.normalBias=.02,M.shadow.radius=4,Object.assign(M.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.5,far:20});let R=new Jt(12571391,1.1);R.position.set(4.5,2.5,-4);let L=new Jt(15133183,.35);L.position.set(4,1,5),b.add(M,R,L);let v=(f.min.y-x.center.y)*(y/x.radius)-.002,E=new Ze(new Ln(30,30),new mr({opacity:.38}));E.rotation.x=-Math.PI/2,E.position.y=v,E.receiveShadow=!0,b.add(E),l.floor=E;let N=new Vi({antialias:!0,alpha:!1});l.renderer=N,N.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),N.setClearColor(1119002),N.outputEncoding=Ie,N.toneMapping=Ko,N.toneMappingExposure=1.05,N.shadowMap.enabled=!0,N.shadowMap.type=Xo,l.environment=Bg(N),b.environment=l.environment.texture;let q=N.domElement;q.setAttribute("aria-label","3D \uBDF0\uD3EC\uD2B8. \uBC29\uD5A5\uD0A4\uB85C \uB3CC\uB9AC\uACE0, \uB354\uD558\uAE30\uC640 \uBE7C\uAE30\uB85C \uD655\uB300 \uB610\uB294 \uCD95\uC18C\uD569\uB2C8\uB2E4."),q.setAttribute("role","region"),q.tabIndex=0,i.append(q);let Q=new et(40,1,.01,100),F=new Er(Q,q);l.controls=F,F.minDistance=.45,F.maxDistance=45;let O=new C(.25,.17,1).normalize(),I=()=>{$t===l&&N.render(b,Q)},V=()=>{if($t!==l)return;let W=Math.max(1,i.clientWidth),P=Math.max(1,i.clientHeight);N.setSize(W,P,!1),Q.aspect=W/P,Q.updateProjectionMatrix()};F.addEventListener("change",I);let k=!1;F.addEventListener("start",()=>{k=!0}),l.observer=new ResizeObserver(()=>{V(),k?I():Y()}),l.observer.observe(i),o.addEventListener("click",Y,{signal:u});for(let W of c)W.addEventListener("click",()=>G(W.dataset.viewportMode),{signal:u});q.addEventListener("keydown",W=>{let P=new ii().setFromVector3(Q.position.clone().sub(F.target));switch(W.key){case"ArrowLeft":P.theta-=.16;break;case"ArrowRight":P.theta+=.16;break;case"ArrowUp":P.phi-=.12;break;case"ArrowDown":P.phi+=.12;break;case"+":case"=":P.radius*=.9;break;case"-":P.radius/=.9;break;default:return}W.preventDefault(),P.makeSafe(),P.radius=It.clamp(P.radius,F.minDistance,F.maxDistance),Q.position.setFromSpherical(P).add(F.target),F.update(),I()},{signal:u}),q.addEventListener("webglcontextlost",h,{signal:u}),V(),Y();for(let W of c)W.dataset.viewportMode==="texture"&&(W.hidden=!p),W.dataset.viewportMode==="matcap"&&(W.hidden=!l.matcap);let J=document.querySelector(".viewport-heading span");J&&(J.textContent=c.filter(W=>!W.hidden).map(W=>W.textContent).join(" \xB7 ")),G(l.matcap?"matcap":p?"texture":"clay"),a.hidden=!0,o.disabled=!1;for(let W of c)W.disabled=!1}catch(d){if($t!==l||d.name==="AbortError")return;h(),console.warn("Project viewport unavailable:",d)}function h(){if($t===l){Cr(),a.hidden=!1,o.disabled=!0;for(let d of c)d.disabled=!0;s.textContent="3D \uD654\uBA74\uC744 \uC5F4 \uC218 \uC5C6\uC5B4 \uC791\uD488 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4."}}}var Vg={foodtruck:{eyebrow:"3D / ENVIRONMENT & VEHICLE",title:"NEO TOKYO FOOD TRUCK",copy:"\uC218\uC871\uAD00\uC774 \uB2EC\uB9B0 \uD478\uB4DC\uD2B8\uB7ED\uC5D0\uC11C \uBB38\uC5B4 \uC694\uB9AC\uC0AC\uAC00 \uC74C\uC2DD\uC744 \uB0B4\uB193\uB294 \uC7A5\uBA74\uC785\uB2C8\uB2E4. \uCCAD\uB85D\uBE5B \uAC04\uD310\uACFC \uBD89\uC740 \uB4F1\uBD88\uC744 \uBC30\uCE58\uD55C \uCC28\uB7C9\uC744 360\uB3C4 \uC601\uC0C1\uC73C\uB85C \uB458\uB7EC\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",tools:["MAYA","ENVIRONMENT","360\xB0 RENDER"],videos:[{src:"media/works/food-truck.mp4",poster:"media/works/food-truck-poster.jpg",label:"360\xB0 RENDER \xB7 00:11"}]},classroom:{eyebrow:"3D / LIGHTING STUDY",title:"CLASSROOM",copy:"\uB0A1\uC740 \uAD50\uC2E4\uC758 \uD587\uBE5B, \uCD1B\uBD88, \uBD89\uC740 \uB4F1\uBD88\uC744 \uC870\uD569\uD55C \uB77C\uC774\uD305 \uC2A4\uD130\uB514\uC785\uB2C8\uB2E4. \uCC45\uC0C1 \uC0AC\uC774\uC5D0 \uB193\uC778 \uB9C8\uB124\uD0A4\uB124\uCF54\uC640 \uBD80\uC801\uC774 \uAC19\uC740 \uAD6C\uB3C4\uC758 \uB450 \uC0C9\uC870\uC5D0\uC11C \uC5B4\uB5BB\uAC8C \uBCF4\uC774\uB294\uC9C0 \uBE44\uAD50\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",tools:["MAYA","ENVIRONMENT","LIGHTING"],wide:!0,stills:[{src:"media/works/classroom-blue.jpg",label:"BLUE LIGHTING",alt:"\uCC28\uAC00\uC6B4 \uD478\uB978\uBE5B\uC774 \uD559\uAD50 \uCC45\uC0C1 \uC0AC\uC774\uB85C \uB4DC\uB294 \uAD50\uC2E4 \uB80C\uB354"}]},keychain:{eyebrow:"3D / PROP DESIGN",title:"KEYCHAIN",copy:"\uD3F4\uB354\uD3F0\uACFC \uC791\uC740 \uD0A4\uB9C1\uC744 \uBAA8\uB378\uB9C1\uD558\uACE0, \uC5B4\uB450\uC6B4 \uC2A4\uD29C\uB514\uC624\uC640 \uBE5B\uC774 \uBC88\uC9C0\uB294 \uBC30\uACBD\uC5D0\uC11C \uAC01\uAC01 \uB80C\uB354\uD588\uC2B5\uB2C8\uB2E4.",tools:["MAYA","PROP MODELING","LIGHTING"],viewport:{src:"assets/keychain.glb",poster:"media/works/keychain.jpg"},stills:[{src:"media/works/keychain.jpg",label:"STUDIO RENDER",alt:"\uD478\uB978\uBE5B\uC744 \uBC1B\uB294 \uD3F4\uB354\uD3F0\uACFC \uD0A4\uB9C1"},{src:"media/works/keychain-alt.jpg",label:"ALTERNATE LIGHTING",alt:"\uBB34\uC9C0\uAC2F\uBE5B \uBC30\uACBD\uC5D0 \uB193\uC778 \uD3F4\uB354\uD3F0\uACFC \uD0A4\uB9C1"},{src:"media/works/keychain-motion.jpg",label:"MOTION BACKDROP",alt:"\uD750\uB9BF\uD55C \uB179\uC0C9 \uBC30\uACBD \uC55E\uC5D0 \uB5A0 \uC788\uB294 \uD3F4\uB354\uD3F0\uACFC \uD0A4\uB9C1"},{src:"media/works/keychain-wire.jpg",label:"ORIGINAL WIREFRAME",alt:"\uD3F4\uB354\uD3F0\uACFC \uD0A4\uB9C1\uC758 \uC640\uC774\uC5B4\uD504\uB808\uC784 \uB80C\uB354"}]},"game-controller":{eyebrow:"3D / ENVIRONMENT & PROPS",title:"GAME CONTROLLER",copy:"\uD734\uB300\uC6A9 \uAC8C\uC784\uAE30\uC640 \uAC8C\uC784 \uD329, \uC2A4\uCF00\uC774\uD2B8\uBCF4\uB4DC, \uB531\uC9C0\uB85C \uAFB8\uBBFC \uACF5\uAC04\uC785\uB2C8\uB2E4. \uC6D0\uBCF8 \uC870\uBA85 \uB80C\uB354\uC640 VHS \uD6A8\uACFC\uB97C \uB354\uD55C \uBC84\uC804\uC744 \uD568\uAED8 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",tools:["MAYA","ENVIRONMENT","PROP MODELING"],viewport:{src:"assets/game-controller.glb",poster:"media/works/game-controller.jpg"},stills:[{src:"media/works/game-controller.jpg",label:"ORIGINAL RENDER",alt:"\uB530\uB73B\uD55C \uC870\uBA85 \uC544\uB798 \uAC8C\uC784\uAE30\uC640 \uC18C\uD488\uC774 \uB193\uC778 \uACF5\uAC04"},{src:"media/works/game-controller-vhs.jpg",label:"VHS COMPOSITE",alt:"VHS \uD6A8\uACFC\uB97C \uC801\uC6A9\uD55C \uAC8C\uC784\uAE30\uC640 \uBC29\uC758 \uB80C\uB354"},{src:"media/works/game-controller-study.jpg",label:"TEXTURE & CLAY",alt:"\uAC8C\uC784\uAE30 \uC7A5\uBA74\uC758 \uD14D\uC2A4\uCC98\uC640 \uD074\uB808\uC774 \uBE44\uAD50"},{src:"media/works/game-controller-wire.jpg",label:"WIREFRAME",alt:"\uAC8C\uC784\uAE30\uC640 \uC18C\uD488\uC774 \uB193\uC778 \uBC29\uC758 \uC640\uC774\uC5B4\uD504\uB808\uC784 \uB80C\uB354"}]},jonglu:{eyebrow:"3D / ARCHITECTURAL MODELING",title:"JONGLU",copy:"\uAE30\uC640\uC9C0\uBD95, \uACC4\uB2E8\uACFC \uB09C\uAC04, \uB0B4\uBD80\uC5D0 \uAC78\uB9B0 \uC885\uC744 \uBAA8\uB378\uB9C1\uD55C \uC885\uB8E8\uC785\uB2C8\uB2E4. 3D \uBDF0\uC5B4\uC5D0\uC11C \uC9C0\uBD95\uACFC \uAD6C\uC870\uB97C \uB458\uB7EC\uBCF4\uACE0, \uACE0\uD574\uC0C1\uB3C4 \uB80C\uB354\uC5D0\uC11C \uC885\uC758 \uD45C\uBA74\uC744 \uAC00\uAE4C\uC774 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",tools:["MAYA","ARCHITECTURAL MODELING","HIGH-POLY DETAIL"],viewport:{src:"assets/jonglu.glb",poster:"media/works/jonglu.jpg"},stills:[{src:"media/works/jonglu.jpg",label:"CLAY PREVIEW",alt:"\uAE30\uC640\uC9C0\uBD95\uACFC \uB09C\uAC04\uC774 \uBCF4\uC774\uB294 \uC885\uB8E8\uC758 \uD074\uB808\uC774 \uB80C\uB354"},{src:"media/works/jonglu-bell.jpg",label:"BELL DETAIL \xB7 CLAY PREVIEW",alt:"\uACE0\uD574\uC0C1\uB3C4 \uC885 \uBAA8\uB378\uC758 \uD615\uD0DC\uC640 \uD45C\uBA74\uC744 \uBCF4\uC5EC\uC8FC\uB294 \uD074\uB808\uC774 \uB80C\uB354"}]},guitar:{eyebrow:"3D / HARD-SURFACE MODELING",title:"GUITAR \xB7 CLAY STUDY",copy:"\uAE30\uD0C0\uC758 \uBAB8\uCCB4\uC5D0 \uAE30\uACC4 \uBD80\uD488\uC744 \uACB0\uD569\uD55C \uD558\uB4DC\uC11C\uD53C\uC2A4 \uBAA8\uB378\uB9C1\uC785\uB2C8\uB2E4. \uC55E\uB4A4 \uD074\uB808\uC774 \uB80C\uB354\uC5D0\uC11C \uAD6C\uC870\uC640 \uC5F0\uACB0\uBD80\uB97C \uC0B4\uD3B4\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",tools:["MAYA","HARD-SURFACE MODELING","CLAY STUDY"],viewport:{src:"assets/guitar.glb",poster:"media/works/guitar-clay.jpg"},stills:[{src:"media/works/guitar-clay.jpg",label:"FRONT \xB7 CLAY",alt:"\uAE30\uACC4\uC2DD \uAE30\uD0C0\uC758 \uC55E\uBA74 \uD074\uB808\uC774 \uB80C\uB354"},{src:"media/works/guitar-clay-back.jpg",label:"BACK \xB7 CLAY",alt:"\uAE30\uACC4\uC2DD \uAE30\uD0C0\uC758 \uB4B7\uBA74 \uD074\uB808\uC774 \uB80C\uB354"}]},nyarlathotep:{eyebrow:"SCULPTURE / NOMAD SCULPT \xB7 IPAD",title:"NYARLATHOTEP",copy:"\uBD88\uC548\uACFC \uACF5\uD3EC, \uC774\uC720 \uC5C6\uC774 \uBC00\uB824\uC624\uB294 \uBD88\uC548\uC815\uD55C \uAC10\uAC01\uC744 H. P. Lovecraft\uC758 \uC6B0\uC8FC\uC801 \uACF5\uD3EC\uC5D0\uC11C \uCD9C\uBC1C\uD574 \uC870\uD615\uC73C\uB85C \uD574\uC11D\uD588\uC2B5\uB2C8\uB2E4. Nomad Sculpt\uC640 iPad\uB85C \uB9CC\uB4E0 \uC785\uCCB4 \uC2A4\uD130\uB514\uC785\uB2C8\uB2E4.",tools:["NOMAD SCULPT","IPAD","3D SCULPTURE"],viewport:{src:"assets/nyarlathotep.glb",poster:"media/nyarlathotep.jpg",matcap:"nomad-clay"},stills:[{src:"media/nyarlathotep.jpg",label:"SCULPTURE",alt:"\uC5B4\uB450\uC6B4 \uBC30\uACBD\uC5D0 \uACE0\uB9AC\uD615 \uC2E4\uB8E8\uC5E3\uC744 \uB450\uB978 Nyarlathotep \uC870\uD615"}],source:"https://www.instagram.com/kakeekukeko/reel/DGa-LGnzRxI/"},heavener:{eyebrow:"IMAGE / FIREFLY \xD7 TOUCHDESIGNER",title:"HEAVENER",copy:"\uC6D0 \uAC8C\uC2DC\uBB3C\uC758 \uD06C\uB808\uB527\uC744 \uBCF4\uC874\uD558\uB294 Firefly\uC640 TouchDesigner \uAE30\uBC18\uC758 \uC624\uB514\uC624\uBE44\uC8FC\uC5BC \uC2E4\uD5D8\uC785\uB2C8\uB2E4. Project credit: @invent_animate.",tools:["ADOBE FIREFLY","TOUCHDESIGNER","AUDIOVISUAL","CREDIT: @INVENT_ANIMATE"],videos:[{src:"media/works/heavener.mp4",poster:"media/works/heavener-poster.jpg",label:"HEAVENER \xB7 00:28"},{src:"media/works/heavener-td.mp4",poster:"media/works/heavener-td-poster.jpg",label:"HEAVENER / TD \xB7 00:33"}],source:"https://www.instagram.com/kakeekukeko/reel/DKKcuMfTkjZ/"},revenant:{eyebrow:"AUDIOVISUAL / BLENDER \xD7 TOUCHDESIGNER",title:"REVENANT",copy:"Loathe\uC758 \uC74C\uC545\uC5D0\uC11C \uB5A0\uC624\uB978 \uC7A5\uBA74\uC744 \uBCF5\uB3C4\uC640 \uBD80\uC720\uD558\uB294 \uD615\uC0C1\uC73C\uB85C \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. Blender\uC5D0\uC11C \uBD84\uB9AC \uB80C\uB354\uD55C \uB77C\uC774\uD305 \uD328\uC2A4\uB97C TouchDesigner\uC5D0\uC11C \uC74C\uC545\uACFC \uC5F0\uACB0\uD588\uC2B5\uB2C8\uB2E4.",tools:["BLENDER","LIGHTING PASSES","TOUCHDESIGNER","AUDIOVISUAL"],videos:[{src:"media/works/revenant.mp4",poster:"media/works/revenant-poster.jpg",label:"REVENANT \xB7 01:50"}],files:[{href:"assets/Rev_1.115.toe",label:"TouchDesigner \uD504\uB85C\uC81D\uD2B8 \uC6D0\uBCF8 \xB7 .toe",note:"TouchDesigner\uC5D0\uC11C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC678\uBD80 \uCC38\uC870 \uBBF8\uB514\uC5B4\uC640 \uACBD\uB85C \uC124\uC815\uC740 \uBCC4\uB3C4\uB85C \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}],source:"https://www.instagram.com/kakeekukeko/reel/DdMRA8YJYF5/"},mo:{eyebrow:"MOTION / VIDEO STUDY",title:"mo",copy:"\uC6C0\uC9C1\uC784\uACFC \uC774\uBBF8\uC9C0\uC758 \uBCC0\uD654\uB97C \uB2F4\uC740 \uC601\uC0C1 \uC2A4\uD130\uB514. \uC774 \uC601\uC0C1\uC5D0\uB294 \uC624\uB514\uC624 \uD2B8\uB799\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.",tools:["MOTION","VIDEO"],videos:[{src:"media/works/mo.mp4",poster:"media/works/mo-poster.jpg",label:"mo \xB7 03:02 \xB7 SILENT"}]},ritual:{eyebrow:"AUDIOVISUAL / FILM",title:"RITUAL",copy:"Ritual \u2014 Kim Soyeon. \uC804\uCCB4 \uC601\uC0C1\uC744 \uC18C\uB9AC\uC640 \uD568\uAED8 \uAC10\uC0C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",tools:["AUDIOVISUAL","VIDEO"],wide:!0,videos:[{src:"media/works/ritual.mp4",poster:"media/works/ritual-poster.jpg",label:"RITUAL \xB7 01:50"}]},unreal:{eyebrow:"CINEMATIC / MAYA \u2192 UNREAL ENGINE 5",title:"SEQUENCE STUDY",copy:"Maya \uC5D0\uC14B\uC744 Unreal Engine 5\uC5D0 \uC784\uD3EC\uD2B8\uD558\uACE0 \uC2DC\uB124\uB9C8\uD2F1 \uC2DC\uD000\uC2A4\uB97C \uB9CC\uB4DC\uB294 \uC5F0\uC2B5\uC785\uB2C8\uB2E4. Translucency\xB7Opacity, Height \uB9F5, V-Ray \uBA38\uD2F0\uB9AC\uC5BC \uC778\uC2A4\uD134\uC2A4\uC640 UDIM\uC744 \uD0D0\uC0C9\uD588\uC2B5\uB2C8\uB2E4.",tools:["MAYA","UNREAL ENGINE 5","SEQUENCER","MATERIAL STUDY"],source:"https://www.instagram.com/kakeekukeko/reel/DP39RLCE8cB/"},station:{eyebrow:"ENVIRONMENT / ENVIRONMENT STUDY",title:"SHINJUKU, AFTER HOURS",copy:"\uD50C\uB7AB\uD3FC\uC5D0 \uB0A8\uC740 \uB179\uC0C9 \uBE5B\uACFC \uC816\uC740 \uBC18\uC0AC\uBA74\uC744 \uB2F4\uC740 \uD658\uACBD \uC2A4\uD130\uB514\uC785\uB2C8\uB2E4. \uC7A5\uBA74\uC774 \uAC00\uC9C4 \uC870\uC6A9\uD55C \uC2DC\uAC04\uAC10\uC5D0 \uC9D1\uC911\uD588\uC2B5\uB2C8\uB2E4.",tools:["ENVIRONMENT","LIGHT","STUDY"],wide:!0,stills:[{src:"media/works/shinjuku-final.jpg",label:"FINAL \xB7 RETOUCHED",alt:"\uC816\uC740 \uBC14\uB2E5\uACFC \uB179\uC0C9 \uBE5B\uC774 \uB0A8\uC740 \uC2E0\uC8FC\uCFE0 \uC5ED \uD50C\uB7AB\uD3FC\uC758 \uCD5C\uC885 \uB80C\uB354"},{src:"media/works/shinjuku-render.jpg",label:"RENDER \xB7 BEFORE RETOUCH",alt:"\uB9AC\uD130\uCE58 \uC804 \uC2E0\uC8FC\uCFE0 \uC5ED \uD50C\uB7AB\uD3FC \uB80C\uB354"},{src:"media/works/shinjuku-wire.jpg",label:"WIREFRAME",alt:"\uC2E0\uC8FC\uCFE0 \uC5ED \uD50C\uB7AB\uD3FC \uC7A5\uBA74\uC758 \uC640\uC774\uC5B4\uD504\uB808\uC784 \uB80C\uB354"}],source:"https://www.instagram.com/kakeekukeko/p/DFmNmKnTHeH/"},lantern:{eyebrow:"OBJECT / MATERIAL STUDY",title:"FIELD LAMP",copy:"\uCC28\uAC00\uC6B4 \uAE08\uC18D \uD504\uB808\uC784\uACFC \uB530\uB73B\uD55C \uBC1C\uAD11 \uC18C\uC7AC\uC758 \uB300\uBE44\uB97C \uB2F4\uC740 \uC624\uBE0C\uC81D\uD2B8 \uC774\uBBF8\uC9C0 \uC2A4\uD130\uB514\uC785\uB2C8\uB2E4.",tools:["OBJECT","MATERIAL","LIGHT"],viewport:{src:"assets/lantern.glb",poster:"media/lantern-study.jpg"},stills:[{src:"media/works/lantern-desert.jpg",label:"SCENE \xB7 RED ROCK",alt:"\uBD89\uC740 \uBC14\uC704\uC640 \uD480 \uC0AC\uC774\uC5D0 \uB193\uC778 \uB79C\uD134 \uB80C\uB354"},{src:"media/works/lantern-wire-scene.jpg",label:"WIREFRAME \xB7 SCENE",alt:"\uBC14\uC704 \uC9C0\uD615 \uC704 \uB79C\uD134 \uC7A5\uBA74\uC758 \uC640\uC774\uC5B4\uD504\uB808\uC784 \uB80C\uB354"},{src:"media/works/lantern-detail.jpg",label:"DETAIL",alt:"\uB79C\uD134 \uC0C1\uB2E8\uC758 \uACC4\uAE30\uD310\uACFC \uC804\uAD6C\uB97C \uAC00\uAE4C\uC774 \uBCF8 \uB80C\uB354"},{src:"media/works/lantern-front.jpg",label:"FRONT \xB7 ORTHOGRAPHIC",alt:"\uC815\uBA74\uC5D0\uC11C \uC9C1\uAD50 \uD22C\uC601\uC73C\uB85C \uBCF8 \uB79C\uD134 \uB80C\uB354"},{src:"media/works/lantern-studio.jpg",label:"STUDIO",alt:"\uAC80\uC740 \uBC30\uACBD\uC758 \uB79C\uD134 \uB80C\uB354"},{src:"media/works/lantern-studio-2.jpg",label:"STUDIO \xB7 ALTERNATE",alt:"\uAC80\uC740 \uBC30\uACBD\uC5D0\uC11C \uB2E4\uB978 \uAC01\uB3C4\uB85C \uBCF8 \uB79C\uD134 \uB80C\uB354"},{src:"media/works/lantern-wire.jpg",label:"WIREFRAME",alt:"\uB79C\uD134\uC758 \uC640\uC774\uC5B4\uD504\uB808\uC784 \uB80C\uB354"}],source:"https://www.instagram.com/kakeekukeko/p/DF7SB5CzDtb/"}},Wi=document.querySelector("#projectDialog"),Ql=document.querySelector("#contactDialog"),Hg=document.querySelector("#projectEyebrow"),Gg=document.querySelector("#projectTitle"),Wg=document.querySelector("#projectCopy"),qg=document.querySelector("#projectTools"),Kl=document.querySelector("#projectSource"),Ca=document.querySelector("#projectMedia"),Yg=document.querySelector("#projectFiles"),Jl=document.querySelector("#projectViewport");Wi?.addEventListener("close",()=>{Cr(),Jl.hidden=!0,Ca.querySelectorAll("video").forEach(r=>{r.pause(),r.removeAttribute("src"),r.load()}),Ca.replaceChildren()});function $l(r){!r||r.open||r.showModal()}function eu(r){r?.open&&r.close()}document.querySelectorAll("[data-open-contact]").forEach(r=>{r.addEventListener("click",()=>$l(Ql))});document.querySelectorAll("[data-close-dialog]").forEach(r=>{r.addEventListener("click",()=>eu(r.closest("dialog")))});[Wi,Ql].forEach(r=>{r?.addEventListener("click",e=>{e.target===r&&eu(r)})});var Ke;function Xg(r,e){if(!Ke){Ke=document.createElement("dialog"),Ke.className="image-lightbox",Ke.setAttribute("aria-label","\uB80C\uB354 \uC774\uBBF8\uC9C0 \uC804\uCCB4 \uD654\uBA74"),Ke.innerHTML=`
      <div class="lightbox-stage"><img alt=""></div>
      <div class="lightbox-bar">
        <span class="lightbox-label"></span>
        <span class="lightbox-hint">\uC774\uBBF8\uC9C0 \uD074\uB9AD: \uC6D0\uBCF8 \uD06C\uAE30 \xB7 \u2190 \u2192 \uC774\uB3D9 \xB7 Esc \uB2EB\uAE30</span>
        <button type="button" class="lightbox-close" aria-label="\uC804\uCCB4 \uD654\uBA74 \uB2EB\uAE30">\xD7</button>
      </div>
      <button type="button" class="lightbox-step" data-step="-1" aria-label="\uC774\uC804 \uC774\uBBF8\uC9C0">\u2190</button>
      <button type="button" class="lightbox-step" data-step="1" aria-label="\uB2E4\uC74C \uC774\uBBF8\uC9C0">\u2192</button>`,document.body.append(Ke);let s=Ke.querySelector(".lightbox-stage"),a=s.querySelector("img");a.addEventListener("click",o=>{let c=a.getBoundingClientRect(),l=(o.clientX-c.left)/c.width,u=(o.clientY-c.top)/c.height;Ke.classList.toggle("is-actual")&&s.scrollTo(l*a.naturalWidth-s.clientWidth/2,u*a.naturalHeight-s.clientHeight/2)}),Ke.querySelector(".lightbox-close").addEventListener("click",()=>Ke.close()),Ke.querySelectorAll(".lightbox-step").forEach(o=>{o.addEventListener("click",()=>Ke.step(Number(o.dataset.step)))}),Ke.addEventListener("keydown",o=>{let c={ArrowLeft:-1,ArrowRight:1}[o.key];c&&(o.preventDefault(),Ke.step(c))}),Ke.addEventListener("click",o=>{o.target===Ke&&Ke.close()})}let t=Ke.querySelector("img"),n=e,i=()=>{let s=r[n];Ke.classList.remove("is-actual"),t.src=s.src,t.alt=s.alt,Ke.querySelector(".lightbox-label").textContent=`${s.label}${r.length>1?`  ${n+1} / ${r.length}`:""}`};Ke.step=s=>{n=(n+s+r.length)%r.length,i()},Ke.classList.toggle("is-single",r.length<2),i(),Ke.open||Ke.showModal()}function jg(r,e){if(!e||matchMedia("(prefers-reduced-motion: reduce)").matches||!r.animate)return;let t=e.getBoundingClientRect(),n=r.getBoundingClientRect();if(!t.width||!n.width)return;let i="cubic-bezier(.2,.8,.2,1)";r.animate([{clipPath:`inset(${t.top-n.top}px ${n.right-t.right}px ${n.bottom-t.bottom}px ${t.left-n.left}px round 10px)`},{clipPath:"inset(0 0 0 0 round 0px)"}],{duration:620,easing:i}),[...r.querySelector(".dialog-frame").children].filter(s=>!s.hidden).forEach((s,a)=>{s.animate([{transform:"translateY(18px)",opacity:0},{transform:"none",opacity:1}],{duration:520,delay:160+a*45,easing:i,fill:"backwards"})})}function La(r,e){let t=Vg[r];if(!t||!Wi)return;Hg.textContent=t.eyebrow,Gg.textContent=t.title,Wg.textContent=t.copy,qg.replaceChildren(...t.tools.map(i=>{let s=document.createElement("span");return s.textContent=i,s})),Yg.replaceChildren(...(t.files||[]).map(i=>{let s=document.createElement("div"),a=document.createElement("a");if(a.href=i.href,a.download="",a.textContent=`${i.label} \u2193`,s.append(a),i.note){let o=document.createElement("p");o.textContent=i.note,s.append(o)}return s}));let n=(t.stills||[]).map((i,s,a)=>{let o=document.createElement("figure"),c=document.createElement("figcaption");c.textContent=i.label;let l=document.createElement("button");l.type="button",l.className="still-open",l.setAttribute("aria-label",`${i.label} \uC804\uCCB4 \uD654\uBA74\uC73C\uB85C \uBCF4\uAE30`);let u=document.createElement("img");return u.src=i.src,u.alt=i.alt,u.loading="lazy",l.append(u,Object.assign(document.createElement("span"),{className:"still-hint",textContent:"\uC804\uCCB4 \uD654\uBA74 \u2197"})),l.addEventListener("click",()=>Xg(a,s)),o.append(c,l),o});Wi.classList.toggle("is-wide",!!t.wide),Ca.replaceChildren(...n,...(t.videos||[]).map(i=>{let s=document.createElement("figure"),a=document.createElement("figcaption");a.textContent=i.label;let o=document.createElement("video");o.controls=!0,o.playsInline=!0,o.preload="none",o.src=i.src,i.poster&&(o.poster=i.poster),o.setAttribute("aria-label",i.label);let c=document.createElement("a");return c.href=i.src,c.textContent="\uC601\uC0C1 \uD30C\uC77C \uC5F4\uAE30",o.append(c),s.append(a,o),s})),Kl.hidden=!t.source,t.source&&(Kl.href=t.source),Jl.hidden=!t.viewport,$l(Wi),jg(Wi,e),t.viewport&&jl({...t.viewport,title:t.title})}document.querySelectorAll(".work-card__button[data-project], .work-card[data-project] .work-card__button").forEach(r=>{r.addEventListener("click",()=>La(r.closest(".work-card").dataset.project,r))});var Es=[...document.querySelectorAll(".work-category-link[data-filter]")];if(Es.length){let i=function(){let s=Es.find(o=>o.hash===window.location.hash)||Es[0],a=n.get(s);Es.forEach(o=>{o===s?o.setAttribute("aria-current","true"):o.removeAttribute("aria-current")}),r.forEach(o=>{o.hidden=!a.has(o)}),e.textContent=s.dataset.categoryTitle,t.textContent=`${String(a.size).padStart(2,"0")} PROJECTS`},r=[...document.querySelectorAll(".work-card[data-categories]")],e=document.querySelector("#work-title"),t=document.querySelector(".work-count"),n=new Map;Es.forEach(s=>{let a=s.dataset.filter,o=r.filter(c=>a==="all"||c.dataset.categories.split(/\s+/).includes(a));n.set(s,new Set(o)),s.querySelector(".work-category-count").textContent=String(o.length).padStart(2,"0")}),window.addEventListener("hashchange",i),i()}var Kg=document.querySelector("#copyEmail"),Zl=document.querySelector("#copyFeedback");Kg?.addEventListener("click",async()=>{try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText("sfinert@gmail.com");else{let r=document.createElement("textarea");r.value="sfinert@gmail.com",r.style.position="fixed",r.style.opacity="0",document.body.append(r),r.select(),document.execCommand("copy"),r.remove()}Zl.textContent="COPIED \u2014 sfinert@gmail.com"}catch{Zl.textContent="PLEASE EMAIL sfinert@gmail.com"}});var tu=new IntersectionObserver(r=>{r.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-visible"),tu.unobserve(e.target))})},{threshold:.08});document.querySelectorAll(".work-card").forEach(r=>tu.observe(r));var nu=new IntersectionObserver(r=>{r.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-in"),nu.unobserve(e.target))})},{threshold:.25});document.querySelectorAll("[data-reveal]").forEach(r=>nu.observe(r));Hi();var iu=document.querySelector(".hero");iu&&Zg(iu);function Zg(r){let e=r.querySelector(".hero__stage"),t=r.querySelector(".hero__frame"),n=r.querySelector("#heroField"),i=r.querySelector("#heroVideo"),s=r.querySelector(".hero__play"),a=r.querySelector(".hero__sound"),o=matchMedia("(prefers-reduced-motion: reduce)"),c=e.getBoundingClientRect().bottom>0,l=!0,u,h=0,d,m=!1;i.volume=.22;function g(){let x=i.paused?"\uC7AC\uC0DD":"\uC77C\uC2DC\uC815\uC9C0",_=i.muted?"\uC18C\uB9AC \uCF1C\uAE30":"\uC18C\uB9AC \uB044\uAE30";r.toggleAttribute("data-playing",!i.paused),r.toggleAttribute("data-audible",!i.muted),s.title=x,s.setAttribute("aria-label",x),a.title=_,a.setAttribute("aria-label",_)}function p(x=!0){let _=++h;if(!c||!l||document.hidden||!(u??!o.matches)){i.paused||i.pause(),g();return}i.play().catch(y=>{_===h&&(x&&y.name==="NotAllowedError"&&!i.muted?(i.muted=!0,g(),i.play().catch(g)):g())})}s.addEventListener("click",()=>{u=i.paused,p(!1)}),a.addEventListener("click",()=>{i.muted=!i.muted,i.muted||(u=!0,p(!1)),g()});for(let x of["play","pause","volumechange"])i.addEventListener(x,g);document.addEventListener("visibilitychange",()=>{p(),d?.requestDraw()}),window.addEventListener("pagehide",()=>{l=!1,p()}),window.addEventListener("pageshow",x=>{x.persisted&&(l=!0,p(),d?.requestDraw())}),new IntersectionObserver(([x])=>{c=x.intersectionRatio>=.12,p(),d?.requestDraw()},{threshold:.12}).observe(e);function f(){if(o.matches){n.hidden=!0,r.removeAttribute("data-scene");return}if(d)n.hidden=!1,d.requestDraw();else if(window.REVENANT_CORRIDOR)try{d=t0(window.REVENANT_CORRIDOR,{hero:r,stage:e,frame:t,canvas:n,video:i,isVisible:()=>c&&l&&!o.matches}),n.hidden=!1,d.requestDraw()}catch(x){console.warn("Revenant 3D scene unavailable:",x)}else if(!m){m=!0;let x=document.createElement("script");x.src="assets/revenant-corridor-data.js",x.fetchPriority="low",x.addEventListener("load",f,{once:!0}),document.head.append(x)}}t.addEventListener("pointermove",x=>d?.move(x),{passive:!0}),t.addEventListener("pointerdown",x=>d?.move(x),{passive:!0});for(let x of["pointerleave","pointercancel","pointerup"])t.addEventListener(x,()=>d?.release(),{passive:!0});o.addEventListener("change",()=>{p(),f()}),g(),p(),f()}function Qg({subject:r,corridor:e}){let t=r.points.slice(),n=[],i=617,s=()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296);for(let u=0;u<t.length;u+=3)n.push(1,.25+s()*.75,s());let a=e.floorBounds[0][1];for(let u=0;u<r.points.length;u+=12){let[h,d,m]=r.points.slice(u,u+3);t.push(h,a*2-d,m),n.push(2,.3+s()*.7,s())}let{min:o,max:c}=e.walkBounds;for(let u=0;u<2650;u++){let h=u%2?o[0]:c[0],d=u%3?It.lerp(h,r.center[0],s()**2*.6):It.lerp(o[0],c[0],s()),m=It.lerp(o[1]+.08,c[1]-.09,s()),g=It.lerp(o[2],c[2],s());t.push(d,m,g),n.push(0,.22+s()*.78,s())}let l=new Lt;return l.setAttribute("position",new At(t,3)),l.setAttribute("aState",new At(n,3)),l}var qe=256,gt=144;function Ia(r,e){let t=new Float32Array(r.length),n=new Float32Array(r.length);for(let i=0;i<gt;i++)for(let s=0;s<qe;s++){let a=0;for(let o=Math.max(0,s-e);o<=Math.min(qe-1,s+e);o++)a=Math.max(a,r[i*qe+o]);t[i*qe+s]=a}for(let i=0;i<gt;i++)for(let s=0;s<qe;s++){let a=0;for(let o=Math.max(0,i-e);o<=Math.min(gt-1,i+e);o++)a=Math.max(a,t[o*qe+s]);n[i*qe+s]=a}return n}function su(r,e){let t=e*2+1,n=new Float32Array(r.length),i=new Float32Array(r.length);for(let s=0;s<gt;s++)for(let a=0;a<qe;a++){let o=0;for(let c=-e;c<=e;c++)o+=r[s*qe+Math.min(qe-1,Math.max(0,a+c))];n[s*qe+a]=o/t}for(let s=0;s<gt;s++)for(let a=0;a<qe;a++){let o=0;for(let c=-e;c<=e;c++)o+=n[Math.min(gt-1,Math.max(0,s+c))*qe+a];i[s*qe+a]=o/t}return i}function Jg(r,e){let t=[{width:qe,height:gt,color:r,weight:e}];for(;t.at(-1).width>1||t.at(-1).height>1;){let n=t.at(-1),i=Math.ceil(n.width/2),s=Math.ceil(n.height/2),a={width:i,height:s,color:new Float32Array(i*s*3),weight:new Float32Array(i*s)};for(let o=0;o<s;o++)for(let c=0;c<i;c++){let l=0,u=0,h=0,d=0;for(let g=0;g<2;g++)for(let p=0;p<2;p++){let f=c*2+p,x=o*2+g;if(f>=n.width||x>=n.height)continue;let _=x*n.width+f,y=n.weight[_];l+=y,u+=n.color[_*3]*y,h+=n.color[_*3+1]*y,d+=n.color[_*3+2]*y}let m=o*i+c;a.weight[m]=Math.min(1,l),l>0&&(a.color[m*3]=u/l,a.color[m*3+1]=h/l,a.color[m*3+2]=d/l)}t.push(a)}for(let n=t.length-2;n>=0;n--){let i=t[n],s=t[n+1];for(let a=0;a<i.height;a++)for(let o=0;o<i.width;o++){let c=a*i.width+o,l=i.weight[c];if(l>=1)continue;let u=Math.min(s.width-1,Math.max(0,(o+.5)/2-.5)),h=Math.min(s.height-1,Math.max(0,(a+.5)/2-.5)),d=Math.floor(u),m=Math.floor(h),g=Math.min(s.width-1,d+1),p=Math.min(s.height-1,m+1),f=u-d,x=h-m;for(let _=0;_<3;_++){let y=(M,R)=>s.color[(R*s.width+M)*3+_],b=(y(d,m)*(1-f)+y(g,m)*f)*(1-x)+(y(d,p)*(1-f)+y(g,p)*f)*x;i.color[c*3+_]=i.color[c*3+_]*l+b*(1-l)}i.weight[c]=1}}return r}function $g(r,e,t){let n=qe*gt,i=new Float32Array(n),s=new Float32Array(n),a=new C;for(let b=0;b<r.length;b+=3)for(let[M,R]of[[i,r[b+1]],[s,e*2-r[b+1]]]){a.set(r[b],R,r[b+2]).applyMatrix4(t);let L=Math.floor((a.x*.5+.5)*qe),v=Math.floor((a.y*.5+.5)*gt);L>=0&&L<qe&&v>=0&&v<gt&&(M[v*qe+L]=1)}let o=Ia(s,6),c=Ia(i,4).map((b,M)=>Math.max(b,o[M])),l=su(su(c,2),2),h=Ia(c,9).map(b=>b>0?0:1),d=new Uint8Array(n*4);l.forEach((b,M)=>{d[M*4]=Math.round(Math.min(1,b*1.5)*255)});let m=new ni(d,qe,gt);m.magFilter=m.minFilter=nt,m.needsUpdate=!0;let g=new Uint8Array(n*4),p=new ni(g,qe,gt);p.magFilter=p.minFilter=nt;let f=document.createElement("canvas");f.width=qe,f.height=gt;let x=f.getContext("2d",{willReadFrequently:!0}),_=new Float32Array(n*3);function y(b){x.drawImage(b,0,0,qe,gt);let M=x.getImageData(0,0,qe,gt).data;for(let L=0;L<gt;L++){let v=gt-1-L;for(let E=0;E<qe;E++){let N=(L*qe+E)*4,q=v*qe+E;_[q*3]=M[N],_[q*3+1]=M[N+1],_[q*3+2]=M[N+2]}}let R=Jg(_,h.slice());for(let L=0;L<n;L++)g[L*4]=R[L*3],g[L*4+1]=R[L*3+1],g[L*4+2]=R[L*3+2],g[L*4+3]=255;p.needsUpdate=!0}return{mask:m,fill:p,refresh:y}}function e0(r,e,t,n,i,s){let a=[],o=new et(e.verticalFov,e.aspect,.3,60);o.position.copy(t),o.quaternion.copy(n),o.updateMatrixWorld(),o.updateProjectionMatrix();let c=new Ht(1280,720,{stencilBuffer:!1,minFilter:$e,magFilter:$e}),l=new ni(new Uint8Array(4),1,1);l.needsUpdate=!0;let u={uProjTex:{value:l},uProjDepth:{value:c.texture},uProjMatrix:{value:new Re().multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse)},uProjPos:{value:o.position.clone()},uProjFar:{value:o.far},uProjMix:{value:0},uProjMask:{value:l},uProjFill:{value:l}},h=$g(i.points,s,u.uProjMatrix.value),d,m=-1;function g(_,y){let b=_.onBeforeCompile;_.customProgramCacheKey=()=>"video-projection-"+y,_.onBeforeCompile=(M,R)=>{b.call(_,M,R),Object.assign(M.uniforms,u),M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vProjWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vProjWorld = (modelMatrix * vec4(transformed, 1.)).xyz;`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
          varying vec3 vProjWorld;
          uniform sampler2D uProjTex, uProjDepth, uProjMask, uProjFill;
          uniform mat4 uProjMatrix;
          uniform vec3 uProjPos;
          uniform float uProjFar, uProjMix;`).replace("#include <output_fragment>",`
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
          #include <output_fragment>`).replace("#include <fog_fragment>",`#include <fog_fragment>
          gl_FragColor.rgb = mix(gl_FragColor.rgb, linearToOutputTexel(vec4(projLinear, 1.)).rgb, projWeight);`)},_.needsUpdate=!0}function p(_,y){a.forEach(g);let b=new Gt({side:Ut,uniforms:{uProjPos:u.uProjPos,uProjFar:u.uProjFar},vertexShader:`
        varying vec3 vWorld;
        void main() {
          vec4 world = modelMatrix * vec4(position, 1.);
          vWorld = world.xyz;
          gl_Position = projectionMatrix * viewMatrix * world;
        }`,fragmentShader:`
        uniform vec3 uProjPos;
        uniform float uProjFar;
        varying vec3 vWorld;
        void main() {
          float d = clamp(distance(vWorld, uProjPos) / uProjFar, 0., 1.) * 255.;
          gl_FragColor = vec4(floor(d) / 255., fract(d), 0., 1.);
        }`}),M=y.background;y.background=null,y.overrideMaterial=b,_.setRenderTarget(c),_.setClearColor(16777215,1),_.clear(),_.render(y,o),_.setRenderTarget(null),y.overrideMaterial=null,y.background=M,b.dispose()}function f(){if(d!==void 0||r.readyState<2)return d;try{let _=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});_.drawImage(r,0,0,1,1),_.getImageData(0,0,1,1),d=!0}catch{d=!1}if(d){let _=new pr(r);_.minFilter=nt,_.generateMipmaps=!1,u.uProjTex.value=_}return d}function x(_,y){let b=f();u.uProjMix.value+=((b?1:0)-u.uProjMix.value)*_,!(!b||!y||r.currentTime===m)&&(m=r.currentTime,h.refresh(r),u.uProjMask.value=h.mask,u.uProjFill.value=h.fill)}return{materials:a,attach:p,update:x}}function t0(r,{hero:e,stage:t,frame:n,canvas:i,video:s,isVisible:a}){ft.enabled=!0;let o=new Vi({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"});o.outputEncoding=Ie,o.setPixelRatio(Math.min(devicePixelRatio||1,1.4)),o.autoClear=!1;let{camera:c,subject:l}=r,u=new et(c.verticalFov,c.aspect,.075,80),h=new C(...c.position),d=new bt(...c.quaternion).normalize(),m=new C(0,0,-1).applyQuaternion(d),g=new Me,p=new Me,f=new vn;f.background=new Ae(2634564),f.fog=new cr(3754589,14,41);let x={floor:{color:3160647,shininess:34,specular:2504265},wall:{color:6648190,shininess:26,specular:2700357},door:{color:2634822,shininess:35,specular:2634823},detail:{color:5069674,shininess:32},fixture:{color:10204349,emissive:9218239,emissiveIntensity:.48},mirror:{color:7901605,emissive:6522780,emissiveIntensity:.57}},_=e0(s,c,h,d,l,r.corridor.floorBounds[0][1]),y=h.z-1;for(let{kind:re,positions:me}of r.meshes){let de=[];for(let De=0;De<me.length;De+=9)if(!(me[De+2]>y&&me[De+5]>y&&me[De+8]>y))for(let ze=0;ze<9;ze++)de.push(me[De+ze]);let be=new Lt;be.setAttribute("position",new At(de,3)),be.computeVertexNormals();let Ee=new gr({...x[re],side:Ut});_.materials.push(Ee),re==="floor"&&(Ee.onBeforeCompile=De=>{De.vertexShader=De.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vFloorPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFloorPosition = position.xz;`),De.fragmentShader=De.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFloorPosition;`).replace("#include <output_fragment>",`
            vec2 floorLight = (vFloorPosition - vec2(-1.0, -19.0)) * vec2(.45, .09);
            float reflection = exp(-dot(floorLight, floorLight));
            outgoingLight += reflection * vec3(.065, .095, .14);
            #include <output_fragment>
          `)}),f.add(new Ze(be,Ee))}let b=new mt({color:3226441});b.onBeforeCompile=re=>{re.vertexShader=re.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vPanelPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vPanelPosition = position.xz;`),re.fragmentShader=re.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vPanelPosition;`).replace("#include <color_fragment>",`
        #include <color_fragment>
        vec2 panels = (vPanelPosition - vec2(-2.2263, .4825)) / vec2(1.18, .6024);
        vec2 dist = .5 - abs(fract(panels) - .5);
        vec2 edge = smoothstep(vec2(.003), vec2(.017) + fwidth(panels), dist);
        float pattern = fract(sin(dot(floor(panels), vec2(31.72, 73.15))) * 4313.72);
        diffuseColor.rgb *= (.9 + .15 * pattern) * mix(.39, 1.0, edge.x * edge.y);
      `)};let M=new Ln(12.25,31.6);M.rotateX(Math.PI/2).translate(-1,3.53,-10.95),f.add(new Ze(M,b)),_.materials.push(b),_.attach(o,f),f.add(new Ui(13886964,5530229,.77));let R=new Jt(14742015,.61);R.position.set(-1.2,7,3),f.add(R);let L=new Jt(12829423,.3);L.position.set(3,1,-18),f.add(L);let v=new Bi(12706029,.66,24);v.position.set(l.center[0],2.55,-22),f.add(v);let E=new vn,N={uTime:{value:0},uPointer:{value:g},uPointerStrength:{value:0},uWholeScene:{value:0},uAspect:{value:1},uPixelRatio:{value:o.getPixelRatio()},uAudio:{value:new C},uSubject:{value:new C(...l.center)}},q=new Gt({uniforms:N,transparent:!0,depthTest:!1,depthWrite:!1,blending:Qs,vertexShader:`
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
      }`,fragmentShader:`
      varying vec3 vColor;
      varying float vIntensity;
      void main() {
        float radius = length(gl_PointCoord - vec2(.5)) * 2.;
        float core = 1. - smoothstep(.07, .62, radius);
        float halo = (1. - smoothstep(.2, 1., radius)) * .24;
        gl_FragColor = vec4(vColor, min(.88, (core + halo) * vIntensity));
      }`}),Q=new Di(Qg(r),q);Q.frustumCulled=!1,E.add(Q);let F=new Ht(1,1,{stencilBuffer:!1}),O=new vn,I=new In(-1,1,1,-1,0,2);I.position.z=1;let V=new mt({map:F.texture,transparent:!0,depthTest:!1,depthWrite:!1});O.add(new Ze(new Ln(2,2),V));let Y=0,k=0,G,J=0,W=0,P=1,$=1,ne=new C;function U(re){if(J=0,i.hidden||!a()||document.hidden){W=0;return}let me=W?Math.min(.05,(re-W)/1e3):1/60;W=re;let de=1-Math.exp(-me*8),be=It.clamp(-e.getBoundingClientRect().top/$,0,1);G??(G=be),G+=(be-G)*de;let Ee=It.smoothstep(G,.075,.32),De=It.smoothstep(G,.072,1);e.toggleAttribute("data-entered",be>.06),e.toggleAttribute("data-scene",Ee>.98),g.lerp(p,de),Y+=(k-Y)*de,N.uTime.value+=me,N.uPointerStrength.value=Y,N.uWholeScene.value=Ee,_.update(de,Ee>0);let ze=!s.paused&&window.REVENANT_HERO?.bands[Math.floor(s.currentTime*30)];ze?N.uAudio.value.lerp(ne.set(ze[0],ze[1],ze[2]).multiplyScalar(1/255),de):N.uAudio.value.multiplyScalar(1-de),u.position.copy(h).addScaledVector(m,De*(u.aspect<.84?3.5:5.2)),u.position.x+=g.x*Y*Ee*.17,u.position.y+=g.y*Y*Ee*.085,u.quaternion.copy(d),u.rotateY(-g.x*Y*Ee*.035),u.rotateX(g.y*Y*Ee*.022),o.setRenderTarget(null),o.setClearColor(0,0),o.clear(),Ee>=.999?o.render(f,u):Ee>0&&(o.setRenderTarget(F),o.render(f,u),o.setRenderTarget(null),V.opacity=Ee,o.render(O,I)),o.render(E,u),oe()}function oe(){!J&&!i.hidden&&a()&&!document.hidden&&(J=requestAnimationFrame(U))}function ae(){let re=t.clientWidth;P=Math.max(1,t.clientHeight),$=Math.max(1,e.offsetHeight-P),o.setSize(re,P,!1);let me=o.getDrawingBufferSize(new Me);F.setSize(me.x,me.y),u.aspect=re/P;let de=It.degToRad(c.verticalFov/2),be=Math.max(1,u.aspect/c.aspect);u.fov=2*It.radToDeg(Math.atan(Math.tan(de)/be)),u.updateProjectionMatrix(),N.uAspect.value=u.aspect,oe()}function he(re){if(i.hidden)return;let me=n.getBoundingClientRect();p.set((re.clientX-me.left)/me.width*2-1,1-(re.clientY-me.top)/me.height*2),!k&&Y<.01&&g.copy(p),k=1,oe()}i.addEventListener("webglcontextlost",()=>{i.hidden=!0,e.removeAttribute("data-scene")},{once:!0});let ee=new ResizeObserver(ae);return ee.observe(t),ee.observe(e),ae(),{move:he,release(){k=0},requestDraw:oe}}var ru=document.querySelector(".works-reel");ru&&n0(ru);function n0(r){let e=r.querySelector(".reel-stage"),t=r.querySelector(".reel-world"),[n,i]=r.querySelectorAll(".reel-line"),s=r.querySelector(".reel-caption"),a=r.querySelector(".reel-status"),o=r.querySelector(".reel-label"),c=document.querySelector("#projectDialog"),l=matchMedia("(prefers-reduced-motion: reduce)"),u=new Set(["revenant","ritual","heavener","mo"]),h=[...document.querySelectorAll(".work-card[data-project]")].map((I,V)=>({key:I.dataset.project,title:I.querySelector("h3")?.textContent.trim()||I.dataset.project,kind:I.querySelector(".eyebrow")?.textContent.trim()||"",poster:I.querySelector("img")?.getAttribute("src"),number:String(V+1).padStart(2,"0")})),d=String(h.length).padStart(2,"0");s.querySelector("span").textContent=` \u2014 ${d} WORKS`;let m=h.map(I=>{let V=document.createElement("button");V.type="button",V.className="reel-card",V.setAttribute("aria-label",`${I.title} \uC0C1\uC138 \uBCF4\uAE30`);let Y=document.createElement("span");Y.className="reel-card__media";let k=document.createElement("img");k.src=I.poster,k.alt="",k.decoding="async",k.draggable=!1,Y.append(k);let G;u.has(I.key)&&(G=document.createElement("video"),G.src=`media/previews/${I.key}.mp4`,G.muted=!0,G.loop=!0,G.playsInline=!0,G.preload="metadata",G.setAttribute("aria-hidden","true"),G.addEventListener("playing",()=>G.classList.add("is-playing")),Y.append(G));let J=document.createElement("span");return J.className="reel-card__meta",J.innerHTML=`<b>${I.number}</b>`,J.append(I.title),V.append(Y,J),V.addEventListener("click",()=>{La(I.key,V),c?.open&&c.addEventListener("close",()=>V.focus({preventScroll:!0}),{once:!0})}),V.addEventListener("pointerenter",()=>Q(I)),V.addEventListener("pointerleave",F),t.append(V),{button:V,video:G,work:I}}),g,p=0,f=0,x=0,_=!1,y="";function b(){let I=e.clientWidth,V=e.clientHeight,Y=I/V<.9,k=Math.max(700,V*1.15),G=Y?Math.min(I*.62,420):Math.min(I*.3,520),J=G*10/16;e.style.perspective=`${k}px`,r.style.setProperty("--card-w",`${G}px`),r.style.setProperty("--card-h",`${J}px`);let W=-.85*Math.PI,P=1.3*Math.PI,$=k*(Y?.9:.78),ne=k*(Y?3.6:6.5),U=Y?.62:.47,oe=[],ae=[0],he=900;for(let A=0;A<=he;A++){let X=A/he,se=W+(P-W)*X,ie=$+(ne-$)*((1-Math.cos(se))/2)**.8,ue=-Math.sin(se)*I*U,xe=V*(.34-.7*X),T=[ue*ie/k,xe*ie/k,k-ie];if(A){let B=oe[A-1];ae.push(ae[A-1]+Math.hypot(T[0]-B[0],T[1]-B[1],T[2]-B[2]))}oe.push(T)}let ee=Y?3:5,re=Math.ceil(h.length/ee),me=I*(Y?.92:.8),de=me*.018,be=(me-de*(ee-1))/ee,Ee=be*10/16,De=de*1.25+26,ze=V-(Y?210:230),Je=Math.min(1,ze/(re*Ee+(re-1)*De));be*=Je,Ee*=Je,de*=Je,De=de*1.25+26;let Ye=re*Ee+(re-1)*De,He=h.map((A,X)=>{let se=Math.floor(X/ee),ie=Math.min(ee,h.length-se*ee),ue=X%ee;return[-(ie*be+(ie-1)*de)/2+be/2+ue*(be+de),-Ye/2+Ee/2+se*(Ee+De)+V*.015,0]}),xt=G*1.07,lt=G*3,S=ae[he];g={P:k,cardW:G,rail:oe,lengths:ae,length:S,grid:He,gridScale:be/G,step:xt,landSpan:lt,travel:S+(h.length-1)*xt+lt},L(!0)}function M(I){let{rail:V,lengths:Y}=g,k=0,G=Y.length-1;for(;G-k>1;){let ee=k+G>>1;Y[ee]<I?k=ee:G=ee}let J=(I-Y[k])/Math.max(1e-6,Y[G]-Y[k]),W=V[k].map((ee,re)=>ee+(V[G][re]-ee)*J),P=V[Math.max(0,k-2)],$=V[Math.min(V.length-1,G+2)],ne=Lr($.map((ee,re)=>ee-P[re])),U=[0,1,0],oe=Lr(U.map((ee,re)=>ee-ne[re]*Da(U,ne))),ae=ou(ne,oe),he=[-W[0],-W[1],g.P-W[2]];return Da(ae,he)<0&&(ne=ne.map(ee=>-ee),ae=ae.map(ee=>-ee)),{position:W,tangent:ne,up:oe,normal:ae,scale:1}}function R(I,V,Y){let k=Lr(I.tangent.map((W,P)=>W+(V.tangent[P]-W)*Y)),G=I.up.map((W,P)=>W+(V.up[P]-W)*Y);G=Lr(G.map((W,P)=>W-k[P]*Da(G,k)));let J=I.position.map((W,P)=>W+(V.position[P]-W)*Y);return J[2]+=Math.sin(Math.PI*Y)*g.P*.12,{position:J,tangent:k,up:G,normal:ou(k,G),scale:I.scale+(V.scale-I.scale)*Y}}function L(I){if(!g)return;let V=f,Y=g.travel*oi((V-.03)/.85),k;m.forEach(({button:P,work:$},ne)=>{let U=Y-ne*g.step,oe,ae=1;if(U<=g.length)oe=M(Math.max(0,U)),ae=Pa(oi(U/(g.cardW*1.6))),U>0&&(!k||oe.position[2]>k.z)&&(k={z:oe.position[2],work:$});else{let be={position:g.grid[ne],tangent:[1,0,0],up:[0,1,0],normal:[0,0,1],scale:g.gridScale};oe=R(M(g.length),be,i0(oi((U-g.length)/g.landSpan)))}let{tangent:he,up:ee,normal:re,position:me,scale:de}=oe;P.style.transform=`matrix3d(${he[0]*de},${he[1]*de},${he[2]*de},0,${ee[0]*de},${ee[1]*de},${ee[2]*de},0,${re[0]*de},${re[1]*de},${re[2]*de},0,${me[0]},${me[1]},${me[2]},1)`,P.style.opacity=ae.toFixed(3),P.style.visibility=ae<.01?"hidden":""});let G=oi(V/.62);n.style.transform=`translate3d(${-48+G*118}vw,0,0)`,i.style.transform=`translate3d(${48-G*118}vw,0,0)`;let J=1-Pa(oi((V-.6)/.14));n.style.opacity=i.style.opacity=J.toFixed(3),s.style.opacity=(1-Pa(oi((V-.5)/.1))).toFixed(3),r.toggleAttribute("data-landed",V>.9);let W=V>.9?`${d} WORKS \u2014 \uCE74\uB4DC\uB97C \uB20C\uB7EC \uC790\uC138\uD788 \uBCF4\uAE30`:k?`${k.work.number} / ${d} \u2014 ${k.work.title}`:V>.3?`${d} WORKS`:"SCROLL TO PLAY";(I||W!==y)&&(a.textContent=y=W)}function v(){let I=r.getBoundingClientRect(),V=Math.max(1,r.offsetHeight-e.offsetHeight);p=l.matches?1:oi(-I.top/V)}function E(){x=0,v();let I=p-f;f=Math.abs(I)<4e-4?p:f+I*.1,L(),_&&f!==p&&(x=requestAnimationFrame(E))}function N(){!x&&_&&(x=requestAnimationFrame(E))}function q(){let I=_&&!l.matches&&!document.hidden&&!c?.open;for(let{video:V}of m)V&&(I?V.play().catch(()=>{}):V.paused||V.pause())}function Q(I){r.hasAttribute("data-landed")&&(o.innerHTML=`<b>${I.number}</b>`,o.append(I.title,Object.assign(document.createElement("small"),{textContent:I.kind})),o.hidden=!1)}function F(){o.hidden=!0}e.addEventListener("pointermove",I=>{let V=e.getBoundingClientRect();o.style.translate=`${I.clientX-V.left+16}px ${I.clientY-V.top+18}px`},{passive:!0}),new IntersectionObserver(([I])=>{_=I.isIntersecting,q(),N()}).observe(r),addEventListener("scroll",N,{passive:!0}),new ResizeObserver(()=>{b(),N()}).observe(e),document.addEventListener("visibilitychange",q),c&&new MutationObserver(q).observe(c,{attributes:!0,attributeFilter:["open"]});function O(){r.classList.toggle("is-static",l.matches),v(),f=p,b(),q()}l.addEventListener("change",O),O(),r.classList.add("is-ready")}function oi(r){return Math.min(1,Math.max(0,r))}function Pa(r){return r*r*(3-2*r)}function i0(r){return 1-(1-r)**3}function Da(r,e){return r[0]*e[0]+r[1]*e[1]+r[2]*e[2]}function ou(r,e){return[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]]}function Lr(r){let e=Math.hypot(r[0],r[1],r[2])||1;return[r[0]/e,r[1]/e,r[2]/e]}})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
