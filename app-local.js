(()=>{var nh=Object.defineProperty;var Pr=(r,e,t)=>()=>{if(t)throw t[0];try{return r&&(e=r(r=0)),e}catch(n){throw t=[n],n}};var ih=(r,e)=>{for(var t in e)nh(r,t,{get:e[t],enumerable:!0})};function Zt(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[r&255]+_t[r>>8&255]+_t[r>>16&255]+_t[r>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function jo(r,e){return(r%e+e)%e}function Qh(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function eu(r,e,t){return r!==e?(t-r)/(e-r):0}function ss(r,e,t){return(1-t)*r+t*e}function tu(r,e,t,n){return ss(r,e,1-Math.exp(-t*n))}function nu(r,e=1){return e-Math.abs(jo(r,e*2)-e)}function iu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function su(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ru(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ou(r,e){return r+Math.random()*(e-r)}function au(r){return r*(.5-Math.random())}function cu(r){r!==void 0&&(hc=r);let e=hc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lu(r){return r*is}function hu(r){return r*hs}function go(r){return(r&r-1)===0&&r!==0}function pl(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ml(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function uu(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),m=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*m,o*l);break;case"YXY":r.set(c*m,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _n(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ge(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}function gl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function us(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}function pu(r){return r.convertSRGBToLinear(),En.set(r.r,r.g,r.b).applyMatrix3(fu),r.setRGB(En.x,En.y,En.z)}function mu(r){return En.set(r.r,r.g,r.b).applyMatrix3(du),r.setRGB(En.x,En.y,En.z).convertLinearToSRGB()}function Vr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ks.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Wr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){qn.fromArray(r,s);let o=i.x*Math.abs(qn.x)+i.y*Math.abs(qn.y)+i.z*Math.abs(qn.z),c=e.dot(qn),l=t.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function Qr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Ru(r,e,t,n,i,s,a,o){let c;if(e.side===Rt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===sn,o),c===null)return null;ks.copy(o),ks.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(ks);return l<t.near||l>t.far?null:{distance:l,point:ks.clone(),object:r}}function Bs(r,e,t,n,i,s,a,o,c){r.getVertexPosition(a,Zi),r.getVertexPosition(o,Ji),r.getVertexPosition(c,Ki);let l=Ru(r,e,t,n,Zi,Ji,Ki,no);if(l){i&&(Fs.fromBufferAttribute(i,a),zs.fromBufferAttribute(i,o),Us.fromBufferAttribute(i,c),l.uv=rs.getUV(no,Zi,Ji,Ki,Fs,zs,Us,new Se)),s&&(Fs.fromBufferAttribute(s,a),zs.fromBufferAttribute(s,o),Us.fromBufferAttribute(s,c),l.uv2=rs.getUV(no,Zi,Ji,Ki,Fs,zs,Us,new Se));let h={a,b:o,c,normal:new L,materialIndex:0};rs.getNormal(Zi,Ji,Ki,h.normal),l.face=h}return l}function Ci(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tt(r){let e={};for(let t=0;t<r.length;t++){let n=Ci(r[t]);for(let i in n)e[i]=n[i]}return e}function Cu(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function _l(r){return r.getRenderTarget()===null&&r.outputEncoding===Ie?tn:ls}function yl(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ou(r,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,d=l.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){let d=h.array,m=h.updateRange;r.bindBuffer(u,l),m.count===-1?r.bufferSubData(u,0,d):(t?r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:a,remove:o,update:c}}function mp(r,e,t,n,i,s,a){let o=new we(0),c=s===!0?0:1,l,h,u=null,d=0,m=null;function g(f,_){let v=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));let M=r.xr,w=M.getSession&&M.getSession();w&&w.environmentBlendMode==="additive"&&(x=null),x===null?p(o,c):x&&x.isColor&&(p(x,1),v=!0),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===yr)?(h===void 0&&(h=new et(new ei(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:Ci(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=x.encoding!==Ie,(u!==x||d!==x.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=r.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new et(new Li(2,2),new Gt({name:"BackgroundMaterial",uniforms:Ci(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=x.encoding!==Ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,m=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,_){f.getRGB(Vs,_l(r)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(f,_=1){o.set(f),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(o,c)},render:g}}function gp(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=f(null),l=c,h=!1;function u(O,I,D,G,B){let W=!1;if(a){let J=p(G,D,I);l!==J&&(l=J,m(l.object)),W=_(O,G,D,B),W&&v(O,G,D,B)}else{let J=I.wireframe===!0;(l.geometry!==G.id||l.program!==D.id||l.wireframe!==J)&&(l.geometry=G.id,l.program=D.id,l.wireframe=J,W=!0)}B!==null&&t.update(B,34963),(W||h)&&(h=!1,y(O,I,D,G),B!==null&&r.bindBuffer(34963,t.get(B).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(O){return n.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function p(O,I,D){let G=D.wireframe===!0,B=o[O.id];B===void 0&&(B={},o[O.id]=B);let W=B[I.id];W===void 0&&(W={},B[I.id]=W);let J=W[G];return J===void 0&&(J=f(d()),W[G]=J),J}function f(O){let I=[],D=[],G=[];for(let B=0;B<i;B++)I[B]=0,D[B]=0,G[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:G,object:O,attributes:{},index:null}}function _(O,I,D,G){let B=l.attributes,W=I.attributes,J=0,se=D.getAttributes();for(let H in se)if(se[H].location>=0){let te=B[H],F=W[H];if(F===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(F=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(F=O.instanceColor)),te===void 0||te.attribute!==F||F&&te.data!==F.data)return!0;J++}return l.attributesNum!==J||l.index!==G}function v(O,I,D,G){let B={},W=I.attributes,J=0,se=D.getAttributes();for(let H in se)if(se[H].location>=0){let te=W[H];te===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(te=O.instanceColor));let F={};F.attribute=te,te&&te.data&&(F.data=te.data),B[H]=F,J++}l.attributes=B,l.attributesNum=J,l.index=G}function x(){let O=l.newAttributes;for(let I=0,D=O.length;I<D;I++)O[I]=0}function M(O){w(O,0)}function w(O,I){let D=l.newAttributes,G=l.enabledAttributes,B=l.attributeDivisors;D[O]=1,G[O]===0&&(r.enableVertexAttribArray(O),G[O]=1),B[O]!==I&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,I),B[O]=I)}function R(){let O=l.newAttributes,I=l.enabledAttributes;for(let D=0,G=I.length;D<G;D++)I[D]!==O[D]&&(r.disableVertexAttribArray(D),I[D]=0)}function C(O,I,D,G,B,W){n.isWebGL2===!0&&(D===5124||D===5125)?r.vertexAttribIPointer(O,I,D,B,W):r.vertexAttribPointer(O,I,D,G,B,W)}function y(O,I,D,G){if(n.isWebGL2===!1&&(O.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let B=G.attributes,W=D.getAttributes(),J=I.defaultAttributeValues;for(let se in W){let H=W[se];if(H.location>=0){let $=B[se];if($===void 0&&(se==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),se==="instanceColor"&&O.instanceColor&&($=O.instanceColor)),$!==void 0){let te=$.normalized,F=$.itemSize,oe=t.get($);if(oe===void 0)continue;let ae=oe.buffer,ue=oe.type,Q=oe.bytesPerElement;if($.isInterleavedBufferAttribute){let re=$.data,me=re.stride,de=$.offset;if(re.isInstancedInterleavedBuffer){for(let be=0;be<H.locationSize;be++)w(H.location+be,re.meshPerAttribute);O.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let be=0;be<H.locationSize;be++)M(H.location+be);r.bindBuffer(34962,ae);for(let be=0;be<H.locationSize;be++)C(H.location+be,F/H.locationSize,ue,te,me*Q,(de+F/H.locationSize*be)*Q)}else{if($.isInstancedBufferAttribute){for(let re=0;re<H.locationSize;re++)w(H.location+re,$.meshPerAttribute);O.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let re=0;re<H.locationSize;re++)M(H.location+re);r.bindBuffer(34962,ae);for(let re=0;re<H.locationSize;re++)C(H.location+re,F/H.locationSize,ue,te,F*Q,F/H.locationSize*re*Q)}}else if(J!==void 0){let te=J[se];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(H.location,te);break;case 3:r.vertexAttrib3fv(H.location,te);break;case 4:r.vertexAttrib4fv(H.location,te);break;default:r.vertexAttrib1fv(H.location,te)}}}}R()}function T(){K();for(let O in o){let I=o[O];for(let D in I){let G=I[D];for(let B in G)g(G[B].object),delete G[B];delete I[D]}delete o[O]}}function N(O){if(o[O.id]===void 0)return;let I=o[O.id];for(let D in I){let G=I[D];for(let B in G)g(G[B].object),delete G[B];delete I[D]}delete o[O.id]}function q(O){for(let I in o){let D=o[I];if(D[O.id]===void 0)continue;let G=D[O.id];for(let B in G)g(G[B].object),delete G[B];delete D[O.id]}}function K(){U(),h=!0,l!==c&&(l=c,m(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:K,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:N,releaseStatesOfProgram:q,initAttributes:x,enableAttribute:M,disableUnusedAttributes:R}}function xp(r,e,t,n){let i=n.isWebGL2,s;function a(l){s=l}function o(l,h){r.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,u){if(u===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,h,u),t.update(h,s,u)}this.setMode=a,this.render=o,this.renderInstances=c}function _p(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext,o=t.precision!==void 0?t.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),_=r.getParameter(36348),v=r.getParameter(36349),x=d>0,M=a||e.has("OES_texture_float"),w=x&&M,R=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:R}}function yp(r){let e=this,t=null,n=0,i=!1,s=!1,a=new xn,o=new Et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,p=u.clipIntersection,f=u.clipShadows,_=r.get(u);if(!i||g===null||g.length===0||s&&!f)s?h(null):l();else{let v=s?0:n,x=v*4,M=_.clippingState||null;c.value=M,M=h(g,d,x,m);for(let w=0;w!==x;++w)M[w]=t[w];_.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){let p=u!==null?u.length:0,f=null;if(p!==0){if(f=c.value,g!==!0||f===null){let _=m+p*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(f===null||f.length<_)&&(f=new Float32Array(_));for(let x=0,M=m;x!==p;++x,M+=4)a.copy(u[x]).applyMatrix4(v,o),a.normal.toArray(f,M),f[M+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function vp(r){let e=new WeakMap;function t(a,o){return o===uo?a.mapping=Ai:o===fo&&(a.mapping=Ti),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let o=a.mapping;if(o===uo||o===fo)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new yo(c.height/2);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}function bp(r){let e=[],t=[],n=[],i=r,s=r-vi+1+Mc.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>r-vi?c=Mc[a-r+vi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,p=3,f=2,_=1,v=new Float32Array(p*g*m),x=new Float32Array(f*g*m),M=new Float32Array(_*g*m);for(let R=0;R<m;R++){let C=R%3*2/3-1,y=R>2?0:-1,T=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];v.set(T,p*g*R),x.set(d,f*g*R);let N=[R,R,R,R,R,R];M.set(N,_*g*R)}let w=new Ct;w.setAttribute("position",new ot(v,p)),w.setAttribute("uv",new ot(x,f)),w.setAttribute("faceIndex",new ot(M,_)),e.push(w),i>vi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ac(r,e,t){let n=new Vt(r,e,t);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Mp(r,e,t){let n=new Float32Array(jn),i=new L(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Tc(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ec(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Yo(){return`

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
	`}function wp(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===uo||c===fo,h=c===Ai||c===Ti;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Pi(r)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Pi(r));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Sp(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ap(r,e,t,n){let i={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],34962);let m=u.morphAttributes;for(let g in m){let p=m[g];for(let f=0,_=p.length;f<_;f++)e.update(p[f],34962)}}function l(u){let d=[],m=u.index,g=u.attributes.position,p=0;if(m!==null){let v=m.array;p=m.version;for(let x=0,M=v.length;x<M;x+=3){let w=v[x+0],R=v[x+1],C=v[x+2];d.push(w,R,R,C,C,w)}}else{let v=g.array;p=g.version;for(let x=0,M=v.length/3-1;x<M;x+=3){let w=x+0,R=x+1,C=x+2;d.push(w,R,R,C,C,w)}}let f=new(gl(d)?ir:nr)(d,1);f.version=p;let _=s.get(u);_&&e.remove(_),s.set(u,f)}function h(u){let d=s.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Tp(r,e,t,n){let i=n.isWebGL2,s;function a(d){s=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function h(d,m){r.drawElements(s,m,o,d*c),t.update(m,s,1)}function u(d,m,g){if(g===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,o,d*c,g),t.update(m,s,g)}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u}function Ep(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Rp(r,e){return r[0]-e[0]}function Cp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Lp(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new We,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,p=s.get(h);if(p===void 0||p.count!==g){let O=function(){K.dispose(),s.delete(h),h.removeEventListener("dispose",O)};p!==void 0&&p.texture.dispose();let v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],y=0;v===!0&&(y=1),x===!0&&(y=2),M===!0&&(y=3);let T=h.attributes.position.count*y,N=1;T>e.maxTextureSize&&(N=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let q=new Float32Array(T*N*4*g),K=new Qs(q,T,N,g);K.type=Tn,K.needsUpdate=!0;let U=y*4;for(let I=0;I<g;I++){let D=w[I],G=R[I],B=C[I],W=T*N*4*I;for(let J=0;J<D.count;J++){let se=J*U;v===!0&&(a.fromBufferAttribute(D,J),q[W+se+0]=a.x,q[W+se+1]=a.y,q[W+se+2]=a.z,q[W+se+3]=0),x===!0&&(a.fromBufferAttribute(G,J),q[W+se+4]=a.x,q[W+se+5]=a.y,q[W+se+6]=a.z,q[W+se+7]=0),M===!0&&(a.fromBufferAttribute(B,J),q[W+se+8]=a.x,q[W+se+9]=a.y,q[W+se+10]=a.z,q[W+se+11]=B.itemSize===4?a.w:1)}}p={count:g,texture:K,size:new Se(T,N)},s.set(h,p),h.addEventListener("dispose",O)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];let _=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{let m=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<m;x++){let M=g[x];M[0]=x,M[1]=d[x]}g.sort(Cp);for(let x=0;x<8;x++)x<m&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Rp);let p=h.morphAttributes.position,f=h.morphAttributes.normal,_=0;for(let x=0;x<8;x++){let M=o[x],w=M[0],R=M[1];w!==Number.MAX_SAFE_INTEGER&&R?(p&&h.getAttribute("morphTarget"+x)!==p[w]&&h.setAttribute("morphTarget"+x,p[w]),f&&h.getAttribute("morphNormal"+x)!==f[w]&&h.setAttribute("morphNormal"+x,f[w]),i[x]=R,_+=R):(p&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),f&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let v=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Pp(r,e,t,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);return i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}function ki(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Rc[i];if(s===void 0&&(s=new Float32Array(i),Rc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function at(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ct(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function br(r,e){let t=Cc[e];t===void 0&&(t=new Int32Array(e),Cc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ip(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Dp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;r.uniform2fv(this.addr,e),ct(t,e)}}function Np(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;r.uniform3fv(this.addr,e),ct(t,e)}}function Op(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;r.uniform4fv(this.addr,e),ct(t,e)}}function Fp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(at(t,n))return;Ic.set(n),r.uniformMatrix2fv(this.addr,!1,Ic),ct(t,n)}}function zp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(at(t,n))return;Pc.set(n),r.uniformMatrix3fv(this.addr,!1,Pc),ct(t,n)}}function Up(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(at(t,n))return;Lc.set(n),r.uniformMatrix4fv(this.addr,!1,Lc),ct(t,n)}}function kp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Bp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;r.uniform2iv(this.addr,e),ct(t,e)}}function Hp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;r.uniform3iv(this.addr,e),ct(t,e)}}function Vp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;r.uniform4iv(this.addr,e),ct(t,e)}}function Gp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Wp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;r.uniform2uiv(this.addr,e),ct(t,e)}}function qp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;r.uniform3uiv(this.addr,e),ct(t,e)}}function Xp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;r.uniform4uiv(this.addr,e),ct(t,e)}}function jp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||vl,i)}function Yp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ml,i)}function Zp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wl,i)}function Jp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bl,i)}function Kp(r){switch(r){case 5126:return Ip;case 35664:return Dp;case 35665:return Np;case 35666:return Op;case 35674:return Fp;case 35675:return zp;case 35676:return Up;case 5124:case 35670:return kp;case 35667:case 35671:return Bp;case 35668:case 35672:return Hp;case 35669:case 35673:return Vp;case 5125:return Gp;case 36294:return Wp;case 36295:return qp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Jp}}function $p(r,e){r.uniform1fv(this.addr,e)}function Qp(r,e){let t=ki(e,this.size,2);r.uniform2fv(this.addr,t)}function em(r,e){let t=ki(e,this.size,3);r.uniform3fv(this.addr,t)}function tm(r,e){let t=ki(e,this.size,4);r.uniform4fv(this.addr,t)}function nm(r,e){let t=ki(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function im(r,e){let t=ki(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function sm(r,e){let t=ki(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function rm(r,e){r.uniform1iv(this.addr,e)}function om(r,e){r.uniform2iv(this.addr,e)}function am(r,e){r.uniform3iv(this.addr,e)}function cm(r,e){r.uniform4iv(this.addr,e)}function lm(r,e){r.uniform1uiv(this.addr,e)}function hm(r,e){r.uniform2uiv(this.addr,e)}function um(r,e){r.uniform3uiv(this.addr,e)}function dm(r,e){r.uniform4uiv(this.addr,e)}function fm(r,e,t){let n=this.cache,i=e.length,s=br(t,i);at(n,s)||(r.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||vl,s[a])}function pm(r,e,t){let n=this.cache,i=e.length,s=br(t,i);at(n,s)||(r.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ml,s[a])}function mm(r,e,t){let n=this.cache,i=e.length,s=br(t,i);at(n,s)||(r.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||wl,s[a])}function gm(r,e,t){let n=this.cache,i=e.length,s=br(t,i);at(n,s)||(r.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||bl,s[a])}function xm(r){switch(r){case 5126:return $p;case 35664:return Qp;case 35665:return em;case 35666:return tm;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return om;case 35668:case 35672:return am;case 35669:case 35673:return cm;case 5125:return lm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function Dc(r,e){r.seq.push(e),r.map[e.id]=e}function _m(r,e,t){let n=r.name,i=n.length;for(oo.lastIndex=0;;){let s=oo.exec(n),a=oo.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Dc(t,l===void 0?new vo(o,r,e):new bo(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Mo(o),Dc(t,u)),t=u}}}function Nc(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}function vm(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function bm(r){switch(r){case Qn:return["Linear","( value )"];case Ie:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Oc(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+vm(r.getShaderSource(e),a)}else return i}function Mm(r,e){let t=bm(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function wm(r,e){let t;switch(e){case Rh:t="Linear";break;case Ch:t="Reinhard";break;case Lh:t="OptimizedCineon";break;case Ph:t="ACESFilmic";break;case Ih:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Sm(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ts).join(`
`)}function Am(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tm(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ts(r){return r!==""}function Fc(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function wo(r){return r.replace(Em,Rm)}function Rm(r,e){let t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return wo(t)}function Uc(r){return r.replace(Cm,Lm)}function Lm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function kc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===al?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===es&&(e="SHADOWMAP_TYPE_VSM"),e}function Im(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ai:case Ti:e="ENVMAP_TYPE_CUBE";break;case yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dm(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Ti&&(e="ENVMAP_MODE_REFRACTION"),e}function Nm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Wo:e="ENVMAP_BLENDING_MULTIPLY";break;case Th:e="ENVMAP_BLENDING_MIX";break;case Eh:e="ENVMAP_BLENDING_ADD";break}return e}function Om(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Fm(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Pm(t),l=Im(t),h=Dm(t),u=Nm(t),d=Om(t),m=t.isWebGL2?"":Sm(t),g=Am(s),p=i.createProgram(),f,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(ts).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(ts).join(`
`),_.length>0&&(_+=`
`)):(f=[kc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),_=[m,kc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?Ee.tonemapping_pars_fragment:"",t.toneMapping!==yn?wm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,Mm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ts).join(`
`)),a=wo(a),a=Fc(a,t),a=zc(a,t),o=wo(o),o=Fc(o,t),o=zc(o,t),a=Uc(a),o=Uc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let x=v+f+a,M=v+_+o,w=Nc(i,35633,x),R=Nc(i,35632,M);if(i.attachShader(p,w),i.attachShader(p,R),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){let T=i.getProgramInfoLog(p).trim(),N=i.getShaderInfoLog(w).trim(),q=i.getShaderInfoLog(R).trim(),K=!0,U=!0;if(i.getProgramParameter(p,35714)===!1){K=!1;let O=Oc(i,w,"vertex"),I=Oc(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+O+`
`+I)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(N===""||q==="")&&(U=!1);U&&(this.diagnostics={runnable:K,programLog:T,vertexShader:{log:N,prefix:f},fragmentShader:{log:q,prefix:_}})}i.deleteShader(w),i.deleteShader(R);let C;this.getUniforms=function(){return C===void 0&&(C=new Si(i,p)),C};let y;return this.getAttributes=function(){return y===void 0&&(y=Tm(i,p)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=ym++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=R,this}function Um(r,e,t,n,i,s,a){let o=new tr,c=new So,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,T,N,q,K){let U=q.fog,O=K.geometry,I=y.isMeshStandardMaterial?q.environment:null,D=(y.isMeshStandardMaterial?t:e).get(y.envMap||I),G=D&&D.mapping===yr?D.image.height:null,B=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let W=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,J=W!==void 0?W.length:0,se=0;O.morphAttributes.position!==void 0&&(se=1),O.morphAttributes.normal!==void 0&&(se=2),O.morphAttributes.color!==void 0&&(se=3);let H,$,te,F;if(B){let me=nn[B];H=me.vertexShader,$=me.fragmentShader}else H=y.vertexShader,$=y.fragmentShader,c.update(y),te=c.getVertexShaderID(y),F=c.getFragmentShaderID(y);let oe=r.getRenderTarget(),ae=y.alphaTest>0,ue=y.clearcoat>0,Q=y.iridescence>0;return{isWebGL2:h,shaderID:B,shaderName:y.type,vertexShader:H,fragmentShader:$,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:F,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:d,outputEncoding:oe===null?r.outputEncoding:oe.isXRRenderTarget===!0?oe.texture.encoding:Qn,map:!!y.map,matcap:!!y.matcap,envMap:!!D,envMapMode:D&&D.mapping,envMapCubeUVHeight:G,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Kh,tangentSpaceNormalMap:y.normalMapType===Xo,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ie,clearcoat:ue,clearcoatMap:ue&&!!y.clearcoatMap,clearcoatRoughnessMap:ue&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!y.clearcoatNormalMap,iridescence:Q,iridescenceMap:Q&&!!y.iridescenceMap,iridescenceThicknessMap:Q&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===bi,alphaMap:!!y.alphaMap,alphaTest:ae,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!O.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!U,useFog:y.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:yn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zt,flipSided:y.side===Rt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)T.push(N),T.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(_(T,y),v(T,y),T.push(r.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function _(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.map&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.lightMap&&o.enable(7),T.aoMap&&o.enable(8),T.emissiveMap&&o.enable(9),T.bumpMap&&o.enable(10),T.normalMap&&o.enable(11),T.objectSpaceNormalMap&&o.enable(12),T.tangentSpaceNormalMap&&o.enable(13),T.clearcoat&&o.enable(14),T.clearcoatMap&&o.enable(15),T.clearcoatRoughnessMap&&o.enable(16),T.clearcoatNormalMap&&o.enable(17),T.iridescence&&o.enable(18),T.iridescenceMap&&o.enable(19),T.iridescenceThicknessMap&&o.enable(20),T.displacementMap&&o.enable(21),T.specularMap&&o.enable(22),T.roughnessMap&&o.enable(23),T.metalnessMap&&o.enable(24),T.gradientMap&&o.enable(25),T.alphaMap&&o.enable(26),T.alphaTest&&o.enable(27),T.vertexColors&&o.enable(28),T.vertexAlphas&&o.enable(29),T.vertexUvs&&o.enable(30),T.vertexTangents&&o.enable(31),T.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.specularIntensityMap&&o.enable(15),T.specularColorMap&&o.enable(16),T.transmission&&o.enable(17),T.transmissionMap&&o.enable(18),T.thicknessMap&&o.enable(19),T.sheen&&o.enable(20),T.sheenColorMap&&o.enable(21),T.sheenRoughnessMap&&o.enable(22),T.decodeVideoTexture&&o.enable(23),T.opaque&&o.enable(24),y.push(o.mask)}function x(y){let T=g[y.type],N;if(T){let q=nn[T];N=Lu.clone(q.uniforms)}else N=y.uniforms;return N}function M(y,T){let N;for(let q=0,K=l.length;q<K;q++){let U=l[q];if(U.cacheKey===T){N=U,++N.usedTimes;break}}return N===void 0&&(N=new Fm(r,T,y,s),l.push(N)),N}function w(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),y.destroy()}}function R(y){c.remove(y)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:M,releaseProgram:w,releaseShaderCache:R,programs:l,dispose:C}}function km(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Bm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Bc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Hc(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,m,g,p,f){let _=r[e];return _===void 0?(_={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:p,group:f},r[e]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=p,_.group=f),e++,_}function o(u,d,m,g,p,f){let _=a(u,d,m,g,p,f);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function c(u,d,m,g,p,f){let _=a(u,d,m,g,p,f);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function l(u,d){t.length>1&&t.sort(u||Bm),n.length>1&&n.sort(d||Bc),i.length>1&&i.sort(d||Bc)}function h(){for(let u=e,d=r.length;u<d;u++){let m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function Hm(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new Hc,r.set(n,[a])):i>=s.length?(a=new Hc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Vm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new we};break;case"SpotLight":t={position:new L,direction:new L,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function Gm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}function qm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Xm(r,e){let t=new Vm,n=Gm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new L);let s=new L,a=new Re,o=new Re;function c(h,u){let d=0,m=0,g=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let p=0,f=0,_=0,v=0,x=0,M=0,w=0,R=0,C=0,y=0;h.sort(qm);let T=u===!0?Math.PI:1;for(let q=0,K=h.length;q<K;q++){let U=h[q],O=U.color,I=U.intensity,D=U.distance,G=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=O.r*I*T,m+=O.g*I*T,g+=O.b*I*T;else if(U.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(U.sh.coefficients[B],I);else if(U.isDirectionalLight){let B=t.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){let W=U.shadow,J=n.get(U);J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=U.shadow.matrix,M++}i.directional[p]=B,p++}else if(U.isSpotLight){let B=t.get(U);B.position.setFromMatrixPosition(U.matrixWorld),B.color.copy(O).multiplyScalar(I*T),B.distance=D,B.coneCos=Math.cos(U.angle),B.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),B.decay=U.decay,i.spot[_]=B;let W=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,W.updateMatrices(U),U.castShadow&&y++),i.spotLightMatrix[_]=W.matrix,U.castShadow){let J=n.get(U);J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=G,R++}_++}else if(U.isRectAreaLight){let B=t.get(U);B.color.copy(O).multiplyScalar(I),B.halfWidth.set(U.width*.5,0,0),B.halfHeight.set(0,U.height*.5,0),i.rectArea[v]=B,v++}else if(U.isPointLight){let B=t.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity*T),B.distance=U.distance,B.decay=U.decay,U.castShadow){let W=U.shadow,J=n.get(U);J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,J.shadowCameraNear=W.camera.near,J.shadowCameraFar=W.camera.far,i.pointShadow[f]=J,i.pointShadowMap[f]=G,i.pointShadowMatrix[f]=U.shadow.matrix,w++}i.point[f]=B,f++}else if(U.isHemisphereLight){let B=t.get(U);B.skyColor.copy(U.color).multiplyScalar(I*T),B.groundColor.copy(U.groundColor).multiplyScalar(I*T),i.hemi[x]=B,x++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;let N=i.hash;(N.directionalLength!==p||N.pointLength!==f||N.spotLength!==_||N.rectAreaLength!==v||N.hemiLength!==x||N.numDirectionalShadows!==M||N.numPointShadows!==w||N.numSpotShadows!==R||N.numSpotMaps!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=v,i.point.length=f,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=R+C-y,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=y,N.directionalLength=p,N.pointLength=f,N.spotLength=_,N.rectAreaLength=v,N.hemiLength=x,N.numDirectionalShadows=M,N.numPointShadows=w,N.numSpotShadows=R,N.numSpotMaps=C,i.version=Wm++)}function l(h,u){let d=0,m=0,g=0,p=0,f=0,_=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){let M=h[v];if(M.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),d++}else if(M.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(M.isRectAreaLight){let w=i.rectArea[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(_),o.identity(),a.copy(M.matrixWorld),a.premultiply(_),o.extractRotation(a),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){let w=i.point[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(_),m++}else if(M.isHemisphereLight){let w=i.hemi[f];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(_),f++}}}return{setup:c,setupView:l,state:i}}function Vc(r,e){let t=new Xm(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function jm(r,e){let t=new WeakMap;function n(s,a=0){let o=t.get(s),c;return o===void 0?(c=new Vc(r,e),t.set(s,[c])):a>=o.length?(c=new Vc(r,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}function Jm(r,e,t){let n=new fs,i=new Se,s=new Se,a=new We,o=new To({depthPacking:Jh}),c=new Eo,l={},h=t.maxTextureSize,u={[sn]:Rt,[Rt]:sn,[zt]:zt},d=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Ym,fragmentShader:Zm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ct;g.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new et(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al,this.render=function(M,w,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;let C=r.getRenderTarget(),y=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Rn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let q=0,K=M.length;q<K;q++){let U=M[q],O=U.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let I=O.getFrameExtents();if(i.multiply(I),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/I.x),i.x=s.x*I.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/I.y),i.y=s.y*I.y,O.mapSize.y=s.y)),O.map===null){let G=this.type!==es?{minFilter:$e,magFilter:$e}:{};O.map=new Vt(i.x,i.y,G),O.map.texture.name=U.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();let D=O.getViewportCount();for(let G=0;G<D;G++){let B=O.getViewport(G);a.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),N.viewport(a),O.updateMatrices(U,G),n=O.getFrustum(),x(w,R,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===es&&_(O,R),O.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(C,y,T)};function _(M,w){let R=e.update(p);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Vt(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(w,null,R,d,p,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(w,null,R,m,p,null)}function v(M,w,R,C,y,T){let N=null,q=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(q!==void 0)N=q;else if(N=R.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let K=N.uuid,U=w.uuid,O=l[K];O===void 0&&(O={},l[K]=O);let I=O[U];I===void 0&&(I=N.clone(),O[U]=I),N=I}return N.visible=w.visible,N.wireframe=w.wireframe,T===es?N.side=w.shadowSide!==null?w.shadowSide:w.side:N.side=w.shadowSide!==null?w.shadowSide:u[w.side],N.alphaMap=w.alphaMap,N.alphaTest=w.alphaTest,N.map=w.map,N.clipShadows=w.clipShadows,N.clippingPlanes=w.clippingPlanes,N.clipIntersection=w.clipIntersection,N.displacementMap=w.displacementMap,N.displacementScale=w.displacementScale,N.displacementBias=w.displacementBias,N.wireframeLinewidth=w.wireframeLinewidth,N.linewidth=w.linewidth,R.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(R.matrixWorld),N.nearDistance=C,N.farDistance=y),N}function x(M,w,R,C,y){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===es)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);let q=e.update(M),K=M.material;if(Array.isArray(K)){let U=q.groups;for(let O=0,I=U.length;O<I;O++){let D=U[O],G=K[D.materialIndex];if(G&&G.visible){let B=v(M,G,C,R.near,R.far,y);r.renderBufferDirect(R,null,q,B,M,D)}}}else if(K.visible){let U=v(M,K,C,R.near,R.far,y);r.renderBufferDirect(R,null,q,U,M,null)}}let N=M.children;for(let q=0,K=N.length;q<K;q++)x(N[q],w,R,C,y)}}function Km(r,e,t){let n=t.isWebGL2;function i(){let P=!1,Y=new We,ee=null,pe=new We(0,0,0,0);return{setMask:function(ge){ee!==ge&&!P&&(r.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){P=ge},setClear:function(ge,Ye,ht,wt,$t){$t===!0&&(ge*=wt,Ye*=wt,ht*=wt),Y.set(ge,Ye,ht,wt),pe.equals(Y)===!1&&(r.clearColor(ge,Ye,ht,wt),pe.copy(Y))},reset:function(){P=!1,ee=null,pe.set(-1,0,0,0)}}}function s(){let P=!1,Y=null,ee=null,pe=null;return{setTest:function(ge){ge?ae(2929):ue(2929)},setMask:function(ge){Y!==ge&&!P&&(r.depthMask(ge),Y=ge)},setFunc:function(ge){if(ee!==ge){switch(ge){case yh:r.depthFunc(512);break;case vh:r.depthFunc(519);break;case bh:r.depthFunc(513);break;case ho:r.depthFunc(515);break;case Mh:r.depthFunc(514);break;case wh:r.depthFunc(518);break;case Sh:r.depthFunc(516);break;case Ah:r.depthFunc(517);break;default:r.depthFunc(515)}ee=ge}},setLocked:function(ge){P=ge},setClear:function(ge){pe!==ge&&(r.clearDepth(ge),pe=ge)},reset:function(){P=!1,Y=null,ee=null,pe=null}}}function a(){let P=!1,Y=null,ee=null,pe=null,ge=null,Ye=null,ht=null,wt=null,$t=null;return{setTest:function(tt){P||(tt?ae(2960):ue(2960))},setMask:function(tt){Y!==tt&&!P&&(r.stencilMask(tt),Y=tt)},setFunc:function(tt,Ut,Qt){(ee!==tt||pe!==Ut||ge!==Qt)&&(r.stencilFunc(tt,Ut,Qt),ee=tt,pe=Ut,ge=Qt)},setOp:function(tt,Ut,Qt){(Ye!==tt||ht!==Ut||wt!==Qt)&&(r.stencilOp(tt,Ut,Qt),Ye=tt,ht=Ut,wt=Qt)},setLocked:function(tt){P=tt},setClear:function(tt){$t!==tt&&(r.clearStencil(tt),$t=tt)},reset:function(){P=!1,Y=null,ee=null,pe=null,ge=null,Ye=null,ht=null,wt=null,$t=null}}}let o=new i,c=new s,l=new a,h=new WeakMap,u=new WeakMap,d={},m={},g=new WeakMap,p=[],f=null,_=!1,v=null,x=null,M=null,w=null,R=null,C=null,y=null,T=!1,N=null,q=null,K=null,U=null,O=null,I=r.getParameter(35661),D=!1,G=0,B=r.getParameter(7938);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),D=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),D=G>=2);let W=null,J={},se=r.getParameter(3088),H=r.getParameter(2978),$=new We().fromArray(se),te=new We().fromArray(H);function F(P,Y,ee){let pe=new Uint8Array(4),ge=r.createTexture();r.bindTexture(P,ge),r.texParameteri(P,10241,9728),r.texParameteri(P,10240,9728);for(let Ye=0;Ye<ee;Ye++)r.texImage2D(Y+Ye,0,6408,1,1,0,6408,5121,pe);return ge}let oe={};oe[3553]=F(3553,3553,1),oe[34067]=F(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ae(2929),c.setFunc(ho),Be(!1),Ke(Ia),ae(2884),Te(Rn);function ae(P){d[P]!==!0&&(r.enable(P),d[P]=!0)}function ue(P){d[P]!==!1&&(r.disable(P),d[P]=!1)}function Q(P,Y){return m[P]!==Y?(r.bindFramebuffer(P,Y),m[P]=Y,n&&(P===36009&&(m[36160]=Y),P===36160&&(m[36009]=Y)),!0):!1}function re(P,Y){let ee=p,pe=!1;if(P)if(ee=g.get(Y),ee===void 0&&(ee=[],g.set(Y,ee)),P.isWebGLMultipleRenderTargets){let ge=P.texture;if(ee.length!==ge.length||ee[0]!==36064){for(let Ye=0,ht=ge.length;Ye<ht;Ye++)ee[Ye]=36064+Ye;ee.length=ge.length,pe=!0}}else ee[0]!==36064&&(ee[0]=36064,pe=!0);else ee[0]!==1029&&(ee[0]=1029,pe=!0);pe&&(t.isWebGL2?r.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function me(P){return f!==P?(r.useProgram(P),f=P,!0):!1}let de={[yi]:32774,[ch]:32778,[lh]:32779};if(n)de[Oa]=32775,de[Fa]=32776;else{let P=e.get("EXT_blend_minmax");P!==null&&(de[Oa]=P.MIN_EXT,de[Fa]=P.MAX_EXT)}let be={[hh]:0,[uh]:1,[dh]:768,[cl]:770,[_h]:776,[gh]:774,[ph]:772,[fh]:769,[ll]:771,[xh]:775,[mh]:773};function Te(P,Y,ee,pe,ge,Ye,ht,wt){if(P===Rn){_===!0&&(ue(3042),_=!1);return}if(_===!1&&(ae(3042),_=!0),P!==ah){if(P!==v||wt!==T){if((x!==yi||R!==yi)&&(r.blendEquation(32774),x=yi,R=yi),wt)switch(P){case bi:r.blendFuncSeparate(1,771,1,771);break;case Zs:r.blendFunc(1,1);break;case Da:r.blendFuncSeparate(0,769,0,1);break;case Na:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case bi:r.blendFuncSeparate(770,771,1,771);break;case Zs:r.blendFunc(770,1);break;case Da:r.blendFuncSeparate(0,769,0,1);break;case Na:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,w=null,C=null,y=null,v=P,T=wt}return}ge=ge||Y,Ye=Ye||ee,ht=ht||pe,(Y!==x||ge!==R)&&(r.blendEquationSeparate(de[Y],de[ge]),x=Y,R=ge),(ee!==M||pe!==w||Ye!==C||ht!==y)&&(r.blendFuncSeparate(be[ee],be[pe],be[Ye],be[ht]),M=ee,w=pe,C=Ye,y=ht),v=P,T=!1}function De(P,Y){P.side===zt?ue(2884):ae(2884);let ee=P.side===Rt;Y&&(ee=!ee),Be(ee),P.blending===bi&&P.transparent===!1?Te(Rn):Te(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),o.setMask(P.colorWrite);let pe=P.stencilWrite;l.setTest(pe),pe&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ve(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ae(32926):ue(32926)}function Be(P){N!==P&&(P?r.frontFace(2304):r.frontFace(2305),N=P)}function Ke(P){P!==sh?(ae(2884),P!==q&&(P===Ia?r.cullFace(1029):P===rh?r.cullFace(1028):r.cullFace(1032))):ue(2884),q=P}function Xe(P){P!==K&&(D&&r.lineWidth(P),K=P)}function Ve(P,Y,ee){P?(ae(32823),(U!==Y||O!==ee)&&(r.polygonOffset(Y,ee),U=Y,O=ee)):ue(32823)}function xt(P){P?ae(3089):ue(3089)}function lt(P){P===void 0&&(P=33984+I-1),W!==P&&(r.activeTexture(P),W=P)}function A(P,Y,ee){ee===void 0&&(W===null?ee=33984+I-1:ee=W);let pe=J[ee];pe===void 0&&(pe={type:void 0,texture:void 0},J[ee]=pe),(pe.type!==P||pe.texture!==Y)&&(W!==ee&&(r.activeTexture(ee),W=ee),r.bindTexture(P,Y||oe[P]),pe.type=P,pe.texture=Y)}function b(){let P=J[W];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function X(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function E(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function z(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(P){$.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),$.copy(P))}function ye(P){te.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),te.copy(P))}function Pe(P,Y){let ee=u.get(Y);ee===void 0&&(ee=new WeakMap,u.set(Y,ee));let pe=ee.get(P);pe===void 0&&(pe=r.getUniformBlockIndex(Y,P.name),ee.set(P,pe))}function Ue(P,Y){let pe=u.get(Y).get(P);h.get(Y)!==pe&&(r.uniformBlockBinding(Y,pe,P.__bindingPointIndex),h.set(Y,pe))}function He(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},W=null,J={},m={},g=new WeakMap,p=[],f=null,_=!1,v=null,x=null,M=null,w=null,R=null,C=null,y=null,T=!1,N=null,q=null,K=null,U=null,O=null,$.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ae,disable:ue,bindFramebuffer:Q,drawBuffers:re,useProgram:me,setBlending:Te,setMaterial:De,setFlipSided:Be,setCullFace:Ke,setLineWidth:Xe,setPolygonOffset:Ve,setScissorTest:xt,activeTexture:lt,bindTexture:A,unbindTexture:b,compressedTexImage2D:X,compressedTexImage3D:ie,texImage2D:le,texImage3D:_e,updateUBOMapping:Pe,uniformBlockBinding:Ue,texStorage2D:z,texStorage3D:fe,texSubImage2D:ne,texSubImage3D:he,compressedTexSubImage2D:xe,compressedTexSubImage3D:E,scissor:ve,viewport:ye,reset:He}}function $m(r,e,t,n,i,s,a){let o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,p,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,b){return _?new OffscreenCanvas(A,b):us("canvas")}function x(A,b,X,ie){let ne=1;if((A.width>ie||A.height>ie)&&(ne=ie/Math.max(A.width,A.height)),ne<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let he=b?ml:Math.floor,xe=he(ne*A.width),E=he(ne*A.height);p===void 0&&(p=v(xe,E));let z=X?v(xe,E):p;return z.width=xe,z.height=E,z.getContext("2d").drawImage(A,0,0,xe,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+xe+"x"+E+")."),z}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function M(A){return go(A.width)&&go(A.height)}function w(A){return o?!1:A.wrapS!==Ft||A.wrapT!==Ft||A.minFilter!==$e&&A.minFilter!==nt}function R(A,b){return A.generateMipmaps&&b&&A.minFilter!==$e&&A.minFilter!==nt}function C(A){r.generateMipmap(A)}function y(A,b,X,ie,ne=!1){if(o===!1)return b;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let he=b;return b===6403&&(X===5126&&(he=33326),X===5131&&(he=33325),X===5121&&(he=33321)),b===33319&&(X===5126&&(he=33328),X===5131&&(he=33327),X===5121&&(he=33323)),b===6408&&(X===5126&&(he=34836),X===5131&&(he=34842),X===5121&&(he=ie===Ie&&ne===!1?35907:32856),X===32819&&(he=32854),X===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function T(A,b,X){return R(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==$e&&A.minFilter!==nt?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function N(A){return A===$e||A===Js||A===ns?9728:9729}function q(A){let b=A.target;b.removeEventListener("dispose",q),U(b),b.isVideoTexture&&g.delete(b)}function K(A){let b=A.target;b.removeEventListener("dispose",K),I(b)}function U(A){let b=n.get(A);if(b.__webglInit===void 0)return;let X=A.source,ie=f.get(X);if(ie){let ne=ie[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&O(A),Object.keys(ie).length===0&&f.delete(X)}n.remove(A)}function O(A){let b=n.get(A);r.deleteTexture(b.__webglTexture);let X=A.source,ie=f.get(X);delete ie[b.__cacheKey],a.memory.textures--}function I(A){let b=A.texture,X=n.get(A),ie=n.get(b);if(ie.__webglTexture!==void 0&&(r.deleteTexture(ie.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)r.deleteFramebuffer(X.__webglFramebuffer[ne]),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[ne]);else{if(r.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ne=0;ne<X.__webglColorRenderbuffer.length;ne++)X.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[ne]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,he=b.length;ne<he;ne++){let xe=n.get(b[ne]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),a.memory.textures--),n.remove(b[ne])}n.remove(b),n.remove(A)}let D=0;function G(){D=0}function B(){let A=D;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),D+=1,A}function W(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.encoding),b.join()}function J(A,b){let X=n.get(A);if(A.isVideoTexture&&xt(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){let ie=A.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(X,A,b);return}}t.bindTexture(3553,X.__webglTexture,33984+b)}function se(A,b){let X=n.get(A);if(A.version>0&&X.__version!==A.version){ue(X,A,b);return}t.bindTexture(35866,X.__webglTexture,33984+b)}function H(A,b){let X=n.get(A);if(A.version>0&&X.__version!==A.version){ue(X,A,b);return}t.bindTexture(32879,X.__webglTexture,33984+b)}function $(A,b){let X=n.get(A);if(A.version>0&&X.__version!==A.version){Q(X,A,b);return}t.bindTexture(34067,X.__webglTexture,33984+b)}let te={[Jn]:10497,[Ft]:33071,[as]:33648},F={[$e]:9728,[Js]:9984,[ns]:9986,[nt]:9729,[qo]:9985,[Cn]:9987};function oe(A,b,X){if(X?(r.texParameteri(A,10242,te[b.wrapS]),r.texParameteri(A,10243,te[b.wrapT]),(A===32879||A===35866)&&r.texParameteri(A,32882,te[b.wrapR]),r.texParameteri(A,10240,F[b.magFilter]),r.texParameteri(A,10241,F[b.minFilter])):(r.texParameteri(A,10242,33071),r.texParameteri(A,10243,33071),(A===32879||A===35866)&&r.texParameteri(A,32882,33071),(b.wrapS!==Ft||b.wrapT!==Ft)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,10240,N(b.magFilter)),r.texParameteri(A,10241,N(b.minFilter)),b.minFilter!==$e&&b.minFilter!==nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let ie=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===$e||b.minFilter!==ns&&b.minFilter!==Cn||b.type===Tn&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===cs&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(A,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function ae(A,b){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",q));let ie=b.source,ne=f.get(ie);ne===void 0&&(ne={},f.set(ie,ne));let he=W(b);if(he!==A.__cacheKey){ne[he]===void 0&&(ne[he]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ne[he].usedTimes++;let xe=ne[A.__cacheKey];xe!==void 0&&(ne[A.__cacheKey].usedTimes--,xe.usedTimes===0&&O(b)),A.__cacheKey=he,A.__webglTexture=ne[he].texture}return X}function ue(A,b,X){let ie=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=35866),b.isData3DTexture&&(ie=32879);let ne=ae(A,b),he=b.source;t.bindTexture(ie,A.__webglTexture,33984+X);let xe=n.get(he);if(he.version!==xe.__version||ne===!0){t.activeTexture(33984+X),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);let E=w(b)&&M(b.image)===!1,z=x(b.image,E,!1,h);z=lt(b,z);let fe=M(z)||o,le=s.convert(b.format,b.encoding),_e=s.convert(b.type),ve=y(b.internalFormat,le,_e,b.encoding,b.isVideoTexture);oe(ie,b,fe);let ye,Pe=b.mipmaps,Ue=o&&b.isVideoTexture!==!0,He=xe.__version===void 0||ne===!0,P=T(b,z,fe);if(b.isDepthTexture)ve=6402,o?b.type===Tn?ve=36012:b.type===Yn?ve=33190:b.type===Mi?ve=35056:ve=33189:b.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Zn&&ve===6402&&b.type!==ul&&b.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Yn,_e=s.convert(b.type)),b.format===Ei&&ve===6402&&(ve=34041,b.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Mi,_e=s.convert(b.type))),He&&(Ue?t.texStorage2D(3553,1,ve,z.width,z.height):t.texImage2D(3553,0,ve,z.width,z.height,0,le,_e,null));else if(b.isDataTexture)if(Pe.length>0&&fe){Ue&&He&&t.texStorage2D(3553,P,ve,Pe[0].width,Pe[0].height);for(let Y=0,ee=Pe.length;Y<ee;Y++)ye=Pe[Y],Ue?t.texSubImage2D(3553,Y,0,0,ye.width,ye.height,le,_e,ye.data):t.texImage2D(3553,Y,ve,ye.width,ye.height,0,le,_e,ye.data);b.generateMipmaps=!1}else Ue?(He&&t.texStorage2D(3553,P,ve,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,le,_e,z.data)):t.texImage2D(3553,0,ve,z.width,z.height,0,le,_e,z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ue&&He&&t.texStorage3D(35866,P,ve,Pe[0].width,Pe[0].height,z.depth);for(let Y=0,ee=Pe.length;Y<ee;Y++)ye=Pe[Y],b.format!==Bt?le!==null?Ue?t.compressedTexSubImage3D(35866,Y,0,0,0,ye.width,ye.height,z.depth,le,ye.data,0,0):t.compressedTexImage3D(35866,Y,ve,ye.width,ye.height,z.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage3D(35866,Y,0,0,0,ye.width,ye.height,z.depth,le,_e,ye.data):t.texImage3D(35866,Y,ve,ye.width,ye.height,z.depth,0,le,_e,ye.data)}else{Ue&&He&&t.texStorage2D(3553,P,ve,Pe[0].width,Pe[0].height);for(let Y=0,ee=Pe.length;Y<ee;Y++)ye=Pe[Y],b.format!==Bt?le!==null?Ue?t.compressedTexSubImage2D(3553,Y,0,0,ye.width,ye.height,le,ye.data):t.compressedTexImage2D(3553,Y,ve,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,Y,0,0,ye.width,ye.height,le,_e,ye.data):t.texImage2D(3553,Y,ve,ye.width,ye.height,0,le,_e,ye.data)}else if(b.isDataArrayTexture)Ue?(He&&t.texStorage3D(35866,P,ve,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,le,_e,z.data)):t.texImage3D(35866,0,ve,z.width,z.height,z.depth,0,le,_e,z.data);else if(b.isData3DTexture)Ue?(He&&t.texStorage3D(32879,P,ve,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,le,_e,z.data)):t.texImage3D(32879,0,ve,z.width,z.height,z.depth,0,le,_e,z.data);else if(b.isFramebufferTexture){if(He)if(Ue)t.texStorage2D(3553,P,ve,z.width,z.height);else{let Y=z.width,ee=z.height;for(let pe=0;pe<P;pe++)t.texImage2D(3553,pe,ve,Y,ee,0,le,_e,null),Y>>=1,ee>>=1}}else if(Pe.length>0&&fe){Ue&&He&&t.texStorage2D(3553,P,ve,Pe[0].width,Pe[0].height);for(let Y=0,ee=Pe.length;Y<ee;Y++)ye=Pe[Y],Ue?t.texSubImage2D(3553,Y,0,0,le,_e,ye):t.texImage2D(3553,Y,ve,le,_e,ye);b.generateMipmaps=!1}else Ue?(He&&t.texStorage2D(3553,P,ve,z.width,z.height),t.texSubImage2D(3553,0,0,0,le,_e,z)):t.texImage2D(3553,0,ve,le,_e,z);R(b,fe)&&C(ie),xe.__version=he.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Q(A,b,X){if(b.image.length!==6)return;let ie=ae(A,b),ne=b.source;t.bindTexture(34067,A.__webglTexture,33984+X);let he=n.get(ne);if(ne.version!==he.__version||ie===!0){t.activeTexture(33984+X),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);let xe=b.isCompressedTexture||b.image[0].isCompressedTexture,E=b.image[0]&&b.image[0].isDataTexture,z=[];for(let Y=0;Y<6;Y++)!xe&&!E?z[Y]=x(b.image[Y],!1,!0,l):z[Y]=E?b.image[Y].image:b.image[Y],z[Y]=lt(b,z[Y]);let fe=z[0],le=M(fe)||o,_e=s.convert(b.format,b.encoding),ve=s.convert(b.type),ye=y(b.internalFormat,_e,ve,b.encoding),Pe=o&&b.isVideoTexture!==!0,Ue=he.__version===void 0||ie===!0,He=T(b,fe,le);oe(34067,b,le);let P;if(xe){Pe&&Ue&&t.texStorage2D(34067,He,ye,fe.width,fe.height);for(let Y=0;Y<6;Y++){P=z[Y].mipmaps;for(let ee=0;ee<P.length;ee++){let pe=P[ee];b.format!==Bt?_e!==null?Pe?t.compressedTexSubImage2D(34069+Y,ee,0,0,pe.width,pe.height,_e,pe.data):t.compressedTexImage2D(34069+Y,ee,ye,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+Y,ee,0,0,pe.width,pe.height,_e,ve,pe.data):t.texImage2D(34069+Y,ee,ye,pe.width,pe.height,0,_e,ve,pe.data)}}}else{P=b.mipmaps,Pe&&Ue&&(P.length>0&&He++,t.texStorage2D(34067,He,ye,z[0].width,z[0].height));for(let Y=0;Y<6;Y++)if(E){Pe?t.texSubImage2D(34069+Y,0,0,0,z[Y].width,z[Y].height,_e,ve,z[Y].data):t.texImage2D(34069+Y,0,ye,z[Y].width,z[Y].height,0,_e,ve,z[Y].data);for(let ee=0;ee<P.length;ee++){let ge=P[ee].image[Y].image;Pe?t.texSubImage2D(34069+Y,ee+1,0,0,ge.width,ge.height,_e,ve,ge.data):t.texImage2D(34069+Y,ee+1,ye,ge.width,ge.height,0,_e,ve,ge.data)}}else{Pe?t.texSubImage2D(34069+Y,0,0,0,_e,ve,z[Y]):t.texImage2D(34069+Y,0,ye,_e,ve,z[Y]);for(let ee=0;ee<P.length;ee++){let pe=P[ee];Pe?t.texSubImage2D(34069+Y,ee+1,0,0,_e,ve,pe.image[Y]):t.texImage2D(34069+Y,ee+1,ye,_e,ve,pe.image[Y])}}}R(b,le)&&C(34067),he.__version=ne.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function re(A,b,X,ie,ne){let he=s.convert(X.format,X.encoding),xe=s.convert(X.type),E=y(X.internalFormat,he,xe,X.encoding);n.get(b).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,E,b.width,b.height,b.depth,0,he,xe,null):t.texImage2D(ne,0,E,b.width,b.height,0,he,xe,null)),t.bindFramebuffer(36160,A),Ve(b)?d.framebufferTexture2DMultisampleEXT(36160,ie,ne,n.get(X).__webglTexture,0,Xe(b)):(ne===3553||ne>=34069&&ne<=34074)&&r.framebufferTexture2D(36160,ie,ne,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function me(A,b,X){if(r.bindRenderbuffer(36161,A),b.depthBuffer&&!b.stencilBuffer){let ie=33189;if(X||Ve(b)){let ne=b.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Tn?ie=36012:ne.type===Yn&&(ie=33190));let he=Xe(b);Ve(b)?d.renderbufferStorageMultisampleEXT(36161,he,ie,b.width,b.height):r.renderbufferStorageMultisample(36161,he,ie,b.width,b.height)}else r.renderbufferStorage(36161,ie,b.width,b.height);r.framebufferRenderbuffer(36160,36096,36161,A)}else if(b.depthBuffer&&b.stencilBuffer){let ie=Xe(b);X&&Ve(b)===!1?r.renderbufferStorageMultisample(36161,ie,35056,b.width,b.height):Ve(b)?d.renderbufferStorageMultisampleEXT(36161,ie,35056,b.width,b.height):r.renderbufferStorage(36161,34041,b.width,b.height),r.framebufferRenderbuffer(36160,33306,36161,A)}else{let ie=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0;ne<ie.length;ne++){let he=ie[ne],xe=s.convert(he.format,he.encoding),E=s.convert(he.type),z=y(he.internalFormat,xe,E,he.encoding),fe=Xe(b);X&&Ve(b)===!1?r.renderbufferStorageMultisample(36161,fe,z,b.width,b.height):Ve(b)?d.renderbufferStorageMultisampleEXT(36161,fe,z,b.width,b.height):r.renderbufferStorage(36161,z,b.width,b.height)}}r.bindRenderbuffer(36161,null)}function de(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);let ie=n.get(b.depthTexture).__webglTexture,ne=Xe(b);if(b.depthTexture.format===Zn)Ve(b)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,ne):r.framebufferTexture2D(36160,36096,3553,ie,0);else if(b.depthTexture.format===Ei)Ve(b)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,ne):r.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function be(A){let b=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");de(b.__webglFramebuffer,A)}else if(X){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]=r.createRenderbuffer(),me(b.__webglDepthbuffer[ie],A,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),me(b.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function Te(A,b,X){let ie=n.get(A);b!==void 0&&re(ie.__webglFramebuffer,A,A.texture,36064,3553),X!==void 0&&be(A)}function De(A){let b=A.texture,X=n.get(A),ie=n.get(b);A.addEventListener("dispose",K),A.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=b.version,a.memory.textures++);let ne=A.isWebGLCubeRenderTarget===!0,he=A.isWebGLMultipleRenderTargets===!0,xe=M(A)||o;if(ne){X.__webglFramebuffer=[];for(let E=0;E<6;E++)X.__webglFramebuffer[E]=r.createFramebuffer()}else{if(X.__webglFramebuffer=r.createFramebuffer(),he)if(i.drawBuffers){let E=A.texture;for(let z=0,fe=E.length;z<fe;z++){let le=n.get(E[z]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Ve(A)===!1){let E=he?b:[b];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let z=0;z<E.length;z++){let fe=E[z];X.__webglColorRenderbuffer[z]=r.createRenderbuffer(),r.bindRenderbuffer(36161,X.__webglColorRenderbuffer[z]);let le=s.convert(fe.format,fe.encoding),_e=s.convert(fe.type),ve=y(fe.internalFormat,le,_e,fe.encoding,A.isXRRenderTarget===!0),ye=Xe(A);r.renderbufferStorageMultisample(36161,ye,ve,A.width,A.height),r.framebufferRenderbuffer(36160,36064+z,36161,X.__webglColorRenderbuffer[z])}r.bindRenderbuffer(36161,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),me(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,ie.__webglTexture),oe(34067,b,xe);for(let E=0;E<6;E++)re(X.__webglFramebuffer[E],A,b,36064,34069+E);R(b,xe)&&C(34067),t.unbindTexture()}else if(he){let E=A.texture;for(let z=0,fe=E.length;z<fe;z++){let le=E[z],_e=n.get(le);t.bindTexture(3553,_e.__webglTexture),oe(3553,le,xe),re(X.__webglFramebuffer,A,le,36064+z,3553),R(le,xe)&&C(3553)}t.unbindTexture()}else{let E=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?E=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(E,ie.__webglTexture),oe(E,b,xe),re(X.__webglFramebuffer,A,b,36064,E),R(b,xe)&&C(E),t.unbindTexture()}A.depthBuffer&&be(A)}function Be(A){let b=M(A)||o,X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ie=0,ne=X.length;ie<ne;ie++){let he=X[ie];if(R(he,b)){let xe=A.isWebGLCubeRenderTarget?34067:3553,E=n.get(he).__webglTexture;t.bindTexture(xe,E),C(xe),t.unbindTexture()}}}function Ke(A){if(o&&A.samples>0&&Ve(A)===!1){let b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],X=A.width,ie=A.height,ne=16384,he=[],xe=A.stencilBuffer?33306:36096,E=n.get(A),z=A.isWebGLMultipleRenderTargets===!0;if(z)for(let fe=0;fe<b.length;fe++)t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+fe,36161,null),t.bindFramebuffer(36160,E.__webglFramebuffer),r.framebufferTexture2D(36009,36064+fe,3553,null,0);t.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,E.__webglFramebuffer);for(let fe=0;fe<b.length;fe++){he.push(36064+fe),A.depthBuffer&&he.push(xe);let le=E.__ignoreDepthValues!==void 0?E.__ignoreDepthValues:!1;if(le===!1&&(A.depthBuffer&&(ne|=256),A.stencilBuffer&&(ne|=1024)),z&&r.framebufferRenderbuffer(36008,36064,36161,E.__webglColorRenderbuffer[fe]),le===!0&&(r.invalidateFramebuffer(36008,[xe]),r.invalidateFramebuffer(36009,[xe])),z){let _e=n.get(b[fe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,_e,0)}r.blitFramebuffer(0,0,X,ie,0,0,X,ie,ne,9728),m&&r.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let fe=0;fe<b.length;fe++){t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+fe,36161,E.__webglColorRenderbuffer[fe]);let le=n.get(b[fe]).__webglTexture;t.bindFramebuffer(36160,E.__webglFramebuffer),r.framebufferTexture2D(36009,36064+fe,3553,le,0)}t.bindFramebuffer(36009,E.__webglMultisampledFramebuffer)}}function Xe(A){return Math.min(u,A.samples)}function Ve(A){let b=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function xt(A){let b=a.render.frame;g.get(A)!==b&&(g.set(A,b),A.update())}function lt(A,b){let X=A.encoding,ie=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===mo||X!==Qn&&(X===Ie?o===!1?e.has("EXT_sRGB")===!0&&ie===Bt?(A.format=mo,A.minFilter=nt,A.generateMipmaps=!1):b=Ks.sRGBToLinear(b):(ie!==Bt||ne!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),b}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=J,this.setTexture2DArray=se,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=Te,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ve}function Qm(r,e,t){let n=t.isWebGL2;function i(s,a=null){let o;if(s===Kn)return 5121;if(s===Fh)return 32819;if(s===zh)return 32820;if(s===Dh)return 5120;if(s===Nh)return 5122;if(s===ul)return 5123;if(s===Oh)return 5124;if(s===Yn)return 5125;if(s===Tn)return 5126;if(s===cs)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Uh)return 6406;if(s===Bt)return 6408;if(s===kh)return 6409;if(s===Bh)return 6410;if(s===Zn)return 6402;if(s===Ei)return 34041;if(s===mo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Hh)return 6403;if(s===Vh)return 36244;if(s===Gh)return 33319;if(s===Wh)return 33320;if(s===qh)return 36249;if(s===Ir||s===Dr||s===Nr||s===Or)if(a===Ie)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ir)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ir)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Or)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===za||s===Ua||s===ka||s===Ba)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===za)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ua)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ka)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ba)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ha||s===Va)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ha)return a===Ie?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Va)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ga||s===Wa||s===qa||s===Xa||s===ja||s===Ya||s===Za||s===Ja||s===Ka||s===$a||s===Qa||s===ec||s===tc||s===nc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ga)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wa)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qa)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xa)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ja)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ya)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Za)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ja)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ka)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$a)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qa)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ec)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tc)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===nc)return a===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Fr)return a===Ie?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===jh||s===ic||s===sc||s===rc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Fr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===ic)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}function tg(r,e){function t(p,f){f.color.getRGB(p.fogColor.value,_l(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,_,v,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),u(p,f),f.isMeshPhysicalMaterial&&d(p,f,x)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?o(p,f,_,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Rt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Rt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let M=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*M}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let v;f.map?v=f.map:f.specularMap?v=f.specularMap:f.displacementMap?v=f.displacementMap:f.normalMap?v=f.normalMap:f.bumpMap?v=f.bumpMap:f.roughnessMap?v=f.roughnessMap:f.metalnessMap?v=f.metalnessMap:f.alphaMap?v=f.alphaMap:f.emissiveMap?v=f.emissiveMap:f.clearcoatMap?v=f.clearcoatMap:f.clearcoatNormalMap?v=f.clearcoatNormalMap:f.clearcoatRoughnessMap?v=f.clearcoatRoughnessMap:f.iridescenceMap?v=f.iridescenceMap:f.iridescenceThicknessMap?v=f.iridescenceThicknessMap:f.specularIntensityMap?v=f.specularIntensityMap:f.specularColorMap?v=f.specularColorMap:f.transmissionMap?v=f.transmissionMap:f.thicknessMap?v=f.thicknessMap:f.sheenColorMap?v=f.sheenColorMap:f.sheenRoughnessMap&&(v=f.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let x;f.aoMap?x=f.aoMap:f.lightMap&&(x=f.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,_,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=v*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Rt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function ng(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(35375):0;function c(v,x){let M=x.program;n.uniformBlockBinding(v,M)}function l(v,x){let M=i[v.id];M===void 0&&(g(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",f));let w=x.program;n.updateUBOMapping(v,w);let R=e.render.frame;s[v.id]!==R&&(d(v),s[v.id]=R)}function h(v){let x=u();v.__bindingPointIndex=x;let M=r.createBuffer(),w=v.__size,R=v.usage;return r.bindBuffer(35345,M),r.bufferData(35345,w,R),r.bindBuffer(35345,null),r.bindBufferBase(35345,x,M),M}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let x=i[v.id],M=v.uniforms,w=v.__cache;r.bindBuffer(35345,x);for(let R=0,C=M.length;R<C;R++){let y=M[R];if(m(y,R,w)===!0){let T=y.__offset,N=Array.isArray(y.value)?y.value:[y.value],q=0;for(let K=0;K<N.length;K++){let U=N[K],O=p(U);typeof U=="number"?(y.__data[0]=U,r.bufferSubData(35345,T+q,y.__data)):U.isMatrix3?(y.__data[0]=U.elements[0],y.__data[1]=U.elements[1],y.__data[2]=U.elements[2],y.__data[3]=U.elements[0],y.__data[4]=U.elements[3],y.__data[5]=U.elements[4],y.__data[6]=U.elements[5],y.__data[7]=U.elements[0],y.__data[8]=U.elements[6],y.__data[9]=U.elements[7],y.__data[10]=U.elements[8],y.__data[11]=U.elements[0]):(U.toArray(y.__data,q),q+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,T,y.__data)}}r.bindBuffer(35345,null)}function m(v,x,M){let w=v.value;if(M[x]===void 0){if(typeof w=="number")M[x]=w;else{let R=Array.isArray(w)?w:[w],C=[];for(let y=0;y<R.length;y++)C.push(R[y].clone());M[x]=C}return!0}else if(typeof w=="number"){if(M[x]!==w)return M[x]=w,!0}else{let R=Array.isArray(M[x])?M[x]:[M[x]],C=Array.isArray(w)?w:[w];for(let y=0;y<R.length;y++){let T=R[y];if(T.equals(C[y])===!1)return T.copy(C[y]),!0}}return!1}function g(v){let x=v.uniforms,M=0,w=16,R=0;for(let C=0,y=x.length;C<y;C++){let T=x[C],N={boundary:0,storage:0},q=Array.isArray(T.value)?T.value:[T.value];for(let K=0,U=q.length;K<U;K++){let O=q[K],I=p(O);N.boundary+=I.boundary,N.storage+=I.storage}if(T.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,C>0){R=M%w;let K=w-R;R!==0&&K-N.boundary<0&&(M+=w-R,T.__offset=M)}M+=N.storage}return R=M%w,R>0&&(M+=w-R),v.__size=M,v.__cache={},this}function p(v){let x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function f(v){let x=v.target;x.removeEventListener("dispose",f);let M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function _(){for(let v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:c,update:l,dispose:_}}function ig(){let r=us("canvas");return r.style.display="block",r}function Bi(r={}){this.isWebGLRenderer=!0;let e=r.canvas!==void 0?r.canvas:ig(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,d=null,m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Qn,this.useLegacyLights=!0,this.toneMapping=yn,this.toneMappingExposure=1;let p=this,f=!1,_=0,v=0,x=null,M=-1,w=null,R=new We,C=new We,y=null,T=e.width,N=e.height,q=1,K=null,U=null,O=new We(0,0,T,N),I=new We(0,0,T,N),D=!1,G=new fs,B=!1,W=!1,J=null,se=new Re,H=new L,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return x===null?q:1}let F=t;function oe(S,V){for(let j=0;j<S.length;j++){let k=S[j],Z=e.getContext(k,V);if(Z!==null)return Z}return null}try{let S={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r150"),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",ye,!1),F===null){let V=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&V.shift(),F=oe(V,S),F===null)throw oe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ae,ue,Q,re,me,de,be,Te,De,Be,Ke,Xe,Ve,xt,lt,A,b,X,ie,ne,he,xe,E,z;function fe(){ae=new Sp(F),ue=new _p(F,ae,r),ae.init(ue),xe=new Qm(F,ae,ue),Q=new Km(F,ae,ue),re=new Ep,me=new km,de=new $m(F,ae,Q,me,ue,xe,re),be=new vp(p),Te=new wp(p),De=new Ou(F,ue),E=new gp(F,ae,De,ue),Be=new Ap(F,De,re,E),Ke=new Pp(F,Be,De,re),ie=new Lp(F,ue,de),A=new yp(me),Xe=new Um(p,be,Te,ae,ue,E,A),Ve=new tg(p,me),xt=new Hm,lt=new jm(ae,ue),X=new mp(p,be,Te,Q,Ke,h,a),b=new Jm(p,Ke,ue),z=new ng(F,re,ue,Q),ne=new xp(F,ae,re,ue),he=new Tp(F,ae,re,ue),re.programs=Xe.programs,p.capabilities=ue,p.extensions=ae,p.properties=me,p.renderLists=xt,p.shadowMap=b,p.state=Q,p.info=re}fe();let le=new Lo(p,F);this.xr=le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=ae.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ae.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(T,N,!1))},this.getSize=function(S){return S.set(T,N)},this.setSize=function(S,V,j=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=S,N=V,e.width=Math.floor(S*q),e.height=Math.floor(V*q),j===!0&&(e.style.width=S+"px",e.style.height=V+"px"),this.setViewport(0,0,S,V)},this.getDrawingBufferSize=function(S){return S.set(T*q,N*q).floor()},this.setDrawingBufferSize=function(S,V,j){T=S,N=V,q=j,e.width=Math.floor(S*j),e.height=Math.floor(V*j),this.setViewport(0,0,S,V)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(O)},this.setViewport=function(S,V,j,k){S.isVector4?O.set(S.x,S.y,S.z,S.w):O.set(S,V,j,k),Q.viewport(R.copy(O).multiplyScalar(q).floor())},this.getScissor=function(S){return S.copy(I)},this.setScissor=function(S,V,j,k){S.isVector4?I.set(S.x,S.y,S.z,S.w):I.set(S,V,j,k),Q.scissor(C.copy(I).multiplyScalar(q).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(S){Q.setScissorTest(D=S)},this.setOpaqueSort=function(S){K=S},this.setTransparentSort=function(S){U=S},this.getClearColor=function(S){return S.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(S=!0,V=!0,j=!0){let k=0;S&&(k|=16384),V&&(k|=256),j&&(k|=1024),F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",ye,!1),xt.dispose(),lt.dispose(),me.dispose(),be.dispose(),Te.dispose(),Ke.dispose(),E.dispose(),z.dispose(),Xe.dispose(),le.dispose(),le.removeEventListener("sessionstart",ee),le.removeEventListener("sessionend",pe),J&&(J.dispose(),J=null),ge.stop()};function _e(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;let S=re.autoReset,V=b.enabled,j=b.autoUpdate,k=b.needsUpdate,Z=b.type;fe(),re.autoReset=S,b.enabled=V,b.autoUpdate=j,b.needsUpdate=k,b.type=Z}function ye(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Pe(S){let V=S.target;V.removeEventListener("dispose",Pe),Ue(V)}function Ue(S){He(S),me.remove(S)}function He(S){let V=me.get(S).programs;V!==void 0&&(V.forEach(function(j){Xe.releaseProgram(j)}),S.isShaderMaterial&&Xe.releaseShaderCache(S))}this.renderBufferDirect=function(S,V,j,k,Z,Me){V===null&&(V=$);let Ae=Z.isMesh&&Z.matrixWorld.determinant()<0,Ce=$l(S,V,j,k,Z);Q.setMaterial(k,Ae);let Le=j.index,ke=1;k.wireframe===!0&&(Le=Be.getWireframeAttribute(j),ke=2);let Ne=j.drawRange,Oe=j.attributes.position,it=Ne.start*ke,It=(Ne.start+Ne.count)*ke;Me!==null&&(it=Math.max(it,Me.start*ke),It=Math.min(It,(Me.start+Me.count)*ke)),Le!==null?(it=Math.max(it,0),It=Math.min(It,Le.count)):Oe!=null&&(it=Math.max(it,0),It=Math.min(It,Oe.count));let hn=It-it;if(hn<0||hn===1/0)return;E.setup(Z,k,Ce,j,Le);let Bn,st=ne;if(Le!==null&&(Bn=De.get(Le),st=he,st.setIndex(Bn)),Z.isMesh)k.wireframe===!0?(Q.setLineWidth(k.wireframeLinewidth*te()),st.setMode(1)):st.setMode(4);else if(Z.isLine){let Fe=k.linewidth;Fe===void 0&&(Fe=1),Q.setLineWidth(Fe*te()),Z.isLineSegments?st.setMode(1):Z.isLineLoop?st.setMode(2):st.setMode(3)}else Z.isPoints?st.setMode(0):Z.isSprite&&st.setMode(4);if(Z.isInstancedMesh)st.renderInstances(it,hn,Z.count);else if(j.isInstancedBufferGeometry){let Fe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Er=Math.min(j.instanceCount,Fe);st.renderInstances(it,hn,Er)}else st.render(it,hn)},this.compile=function(S,V){function j(k,Z,Me){k.transparent===!0&&k.side===zt&&k.forceSinglePass===!1?(k.side=Rt,k.needsUpdate=!0,Ut(k,Z,Me),k.side=sn,k.needsUpdate=!0,Ut(k,Z,Me),k.side=zt):Ut(k,Z,Me)}d=lt.get(S),d.init(),g.push(d),S.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(p.useLegacyLights),S.traverse(function(k){let Z=k.material;if(Z)if(Array.isArray(Z))for(let Me=0;Me<Z.length;Me++){let Ae=Z[Me];j(Ae,S,k)}else j(Z,S,k)}),g.pop(),d=null};let P=null;function Y(S){P&&P(S)}function ee(){ge.stop()}function pe(){ge.start()}let ge=new yl;ge.setAnimationLoop(Y),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(S){P=S,le.setAnimationLoop(S),S===null?ge.stop():ge.start()},le.addEventListener("sessionstart",ee),le.addEventListener("sessionend",pe),this.render=function(S,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(V),V=le.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,V,x),d=lt.get(S,g.length),d.init(),g.push(d),se.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),G.setFromProjectionMatrix(se),W=this.localClippingEnabled,B=A.init(this.clippingPlanes,W),u=xt.get(S,m.length),u.init(),m.push(u),Ye(S,V,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(K,U),B===!0&&A.beginShadows();let j=d.state.shadowsArray;if(b.render(j,S,V),B===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),X.render(u,S),d.setupLights(p.useLegacyLights),V.isArrayCamera){let k=V.cameras;for(let Z=0,Me=k.length;Z<Me;Z++){let Ae=k[Z];ht(u,S,Ae,Ae.viewport)}}else ht(u,S,V);x!==null&&(de.updateMultisampleRenderTarget(x),de.updateRenderTargetMipmap(x)),S.isScene===!0&&S.onAfterRender(p,S,V),E.resetDefaultState(),M=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function Ye(S,V,j,k){if(S.visible===!1)return;if(S.layers.test(V.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(V);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||G.intersectsSprite(S)){k&&H.setFromMatrixPosition(S.matrixWorld).applyMatrix4(se);let Ae=Ke.update(S),Ce=S.material;Ce.visible&&u.push(S,Ae,Ce,j,H.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==re.render.frame&&(S.skeleton.update(),S.skeleton.frame=re.render.frame),!S.frustumCulled||G.intersectsObject(S))){k&&H.setFromMatrixPosition(S.matrixWorld).applyMatrix4(se);let Ae=Ke.update(S),Ce=S.material;if(Array.isArray(Ce)){let Le=Ae.groups;for(let ke=0,Ne=Le.length;ke<Ne;ke++){let Oe=Le[ke],it=Ce[Oe.materialIndex];it&&it.visible&&u.push(S,Ae,it,j,H.z,Oe)}}else Ce.visible&&u.push(S,Ae,Ce,j,H.z,null)}}let Me=S.children;for(let Ae=0,Ce=Me.length;Ae<Ce;Ae++)Ye(Me[Ae],V,j,k)}function ht(S,V,j,k){let Z=S.opaque,Me=S.transmissive,Ae=S.transparent;d.setupLightsView(j),B===!0&&A.setGlobalState(p.clippingPlanes,j),Me.length>0&&wt(Z,V,j),k&&Q.viewport(R.copy(k)),Z.length>0&&$t(Z,V,j),Me.length>0&&$t(Me,V,j),Ae.length>0&&$t(Ae,V,j),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function wt(S,V,j){let k=ue.isWebGL2;J===null&&(J=new Vt(1024,1024,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?cs:Kn,minFilter:Cn,samples:k&&s===!0?4:0}));let Z=p.getRenderTarget();p.setRenderTarget(J),p.clear();let Me=p.toneMapping;p.toneMapping=yn,$t(S,V,j),p.toneMapping=Me,de.updateMultisampleRenderTarget(J),de.updateRenderTargetMipmap(J),p.setRenderTarget(Z)}function $t(S,V,j){let k=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,Me=S.length;Z<Me;Z++){let Ae=S[Z],Ce=Ae.object,Le=Ae.geometry,ke=k===null?Ae.material:k,Ne=Ae.group;Ce.layers.test(j.layers)&&tt(Ce,V,j,Le,ke,Ne)}}function tt(S,V,j,k,Z,Me){S.onBeforeRender(p,V,j,k,Z,Me),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(p,V,j,k,S,Me),Z.transparent===!0&&Z.side===zt&&Z.forceSinglePass===!1?(Z.side=Rt,Z.needsUpdate=!0,p.renderBufferDirect(j,V,k,Z,S,Me),Z.side=sn,Z.needsUpdate=!0,p.renderBufferDirect(j,V,k,Z,S,Me),Z.side=zt):p.renderBufferDirect(j,V,k,Z,S,Me),S.onAfterRender(p,V,j,k,Z,Me)}function Ut(S,V,j){V.isScene!==!0&&(V=$);let k=me.get(S),Z=d.state.lights,Me=d.state.shadowsArray,Ae=Z.state.version,Ce=Xe.getParameters(S,Z.state,Me,V,j),Le=Xe.getProgramCacheKey(Ce),ke=k.programs;k.environment=S.isMeshStandardMaterial?V.environment:null,k.fog=V.fog,k.envMap=(S.isMeshStandardMaterial?Te:be).get(S.envMap||k.environment),ke===void 0&&(S.addEventListener("dispose",Pe),ke=new Map,k.programs=ke);let Ne=ke.get(Le);if(Ne!==void 0){if(k.currentProgram===Ne&&k.lightsStateVersion===Ae)return Qt(S,Ce),Ne}else Ce.uniforms=Xe.getUniforms(S),S.onBuild(j,Ce,p),S.onBeforeCompile(Ce,p),Ne=Xe.acquireProgram(Ce,Le),ke.set(Le,Ne),k.uniforms=Ce.uniforms;let Oe=k.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Oe.clippingPlanes=A.uniform),Qt(S,Ce),k.needsLights=eh(S),k.lightsStateVersion=Ae,k.needsLights&&(Oe.ambientLightColor.value=Z.state.ambient,Oe.lightProbe.value=Z.state.probe,Oe.directionalLights.value=Z.state.directional,Oe.directionalLightShadows.value=Z.state.directionalShadow,Oe.spotLights.value=Z.state.spot,Oe.spotLightShadows.value=Z.state.spotShadow,Oe.rectAreaLights.value=Z.state.rectArea,Oe.ltc_1.value=Z.state.rectAreaLTC1,Oe.ltc_2.value=Z.state.rectAreaLTC2,Oe.pointLights.value=Z.state.point,Oe.pointLightShadows.value=Z.state.pointShadow,Oe.hemisphereLights.value=Z.state.hemi,Oe.directionalShadowMap.value=Z.state.directionalShadowMap,Oe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Oe.spotShadowMap.value=Z.state.spotShadowMap,Oe.spotLightMatrix.value=Z.state.spotLightMatrix,Oe.spotLightMap.value=Z.state.spotLightMap,Oe.pointShadowMap.value=Z.state.pointShadowMap,Oe.pointShadowMatrix.value=Z.state.pointShadowMatrix);let it=Ne.getUniforms(),It=Si.seqWithValue(it.seq,Oe);return k.currentProgram=Ne,k.uniformsList=It,Ne}function Qt(S,V){let j=me.get(S);j.outputEncoding=V.outputEncoding,j.instancing=V.instancing,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function $l(S,V,j,k,Z){V.isScene!==!0&&(V=$),de.resetTextureUnits();let Me=V.fog,Ae=k.isMeshStandardMaterial?V.environment:null,Ce=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Qn,Le=(k.isMeshStandardMaterial?Te:be).get(k.envMap||Ae),ke=k.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!k.normalMap&&!!j.attributes.tangent,Oe=!!j.morphAttributes.position,it=!!j.morphAttributes.normal,It=!!j.morphAttributes.color,hn=k.toneMapped?p.toneMapping:yn,Bn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,st=Bn!==void 0?Bn.length:0,Fe=me.get(k),Er=d.state.lights;if(B===!0&&(W===!0||S!==w)){let Dt=S===w&&k.id===M;A.setState(k,S,Dt)}let ut=!1;k.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Er.state.version||Fe.outputEncoding!==Ce||Z.isInstancedMesh&&Fe.instancing===!1||!Z.isInstancedMesh&&Fe.instancing===!0||Z.isSkinnedMesh&&Fe.skinning===!1||!Z.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Le||k.fog===!0&&Fe.fog!==Me||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==A.numPlanes||Fe.numIntersection!==A.numIntersection)||Fe.vertexAlphas!==ke||Fe.vertexTangents!==Ne||Fe.morphTargets!==Oe||Fe.morphNormals!==it||Fe.morphColors!==It||Fe.toneMapping!==hn||ue.isWebGL2===!0&&Fe.morphTargetsCount!==st)&&(ut=!0):(ut=!0,Fe.__version=k.version);let Hn=Fe.currentProgram;ut===!0&&(Hn=Ut(k,V,Z));let La=!1,Wi=!1,Rr=!1,St=Hn.getUniforms(),Vn=Fe.uniforms;if(Q.useProgram(Hn.program)&&(La=!0,Wi=!0,Rr=!0),k.id!==M&&(M=k.id,Wi=!0),La||w!==S){if(St.setValue(F,"projectionMatrix",S.projectionMatrix),ue.logarithmicDepthBuffer&&St.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),w!==S&&(w=S,Wi=!0,Rr=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){let Dt=St.map.cameraPosition;Dt!==void 0&&Dt.setValue(F,H.setFromMatrixPosition(S.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&St.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||Z.isSkinnedMesh)&&St.setValue(F,"viewMatrix",S.matrixWorldInverse)}if(Z.isSkinnedMesh){St.setOptional(F,Z,"bindMatrix"),St.setOptional(F,Z,"bindMatrixInverse");let Dt=Z.skeleton;Dt&&(ue.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),St.setValue(F,"boneTexture",Dt.boneTexture,de),St.setValue(F,"boneTextureSize",Dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let Cr=j.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0&&ue.isWebGL2===!0)&&ie.update(Z,j,Hn),(Wi||Fe.receiveShadow!==Z.receiveShadow)&&(Fe.receiveShadow=Z.receiveShadow,St.setValue(F,"receiveShadow",Z.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Vn.envMap.value=Le,Vn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Wi&&(St.setValue(F,"toneMappingExposure",p.toneMappingExposure),Fe.needsLights&&Ql(Vn,Rr),Me&&k.fog===!0&&Ve.refreshFogUniforms(Vn,Me),Ve.refreshMaterialUniforms(Vn,k,q,N,J),Si.upload(F,Fe.uniformsList,Vn,de)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Si.upload(F,Fe.uniformsList,Vn,de),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&St.setValue(F,"center",Z.center),St.setValue(F,"modelViewMatrix",Z.modelViewMatrix),St.setValue(F,"normalMatrix",Z.normalMatrix),St.setValue(F,"modelMatrix",Z.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Dt=k.uniformsGroups;for(let Lr=0,th=Dt.length;Lr<th;Lr++)if(ue.isWebGL2){let Pa=Dt[Lr];z.update(Pa,Hn),z.bind(Pa,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function Ql(S,V){S.ambientLightColor.needsUpdate=V,S.lightProbe.needsUpdate=V,S.directionalLights.needsUpdate=V,S.directionalLightShadows.needsUpdate=V,S.pointLights.needsUpdate=V,S.pointLightShadows.needsUpdate=V,S.spotLights.needsUpdate=V,S.spotLightShadows.needsUpdate=V,S.rectAreaLights.needsUpdate=V,S.hemisphereLights.needsUpdate=V}function eh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(S,V,j){me.get(S.texture).__webglTexture=V,me.get(S.depthTexture).__webglTexture=j;let k=me.get(S);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=j===void 0,k.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,V){let j=me.get(S);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(S,V=0,j=0){x=S,_=V,v=j;let k=!0,Z=null,Me=!1,Ae=!1;if(S){let Le=me.get(S);Le.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(36160,null),k=!1):Le.__webglFramebuffer===void 0?de.setupRenderTarget(S):Le.__hasExternalTextures&&de.rebindTextures(S,me.get(S.texture).__webglTexture,me.get(S.depthTexture).__webglTexture);let ke=S.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ae=!0);let Ne=me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Z=Ne[V],Me=!0):ue.isWebGL2&&S.samples>0&&de.useMultisampledRTT(S)===!1?Z=me.get(S).__webglMultisampledFramebuffer:Z=Ne,R.copy(S.viewport),C.copy(S.scissor),y=S.scissorTest}else R.copy(O).multiplyScalar(q).floor(),C.copy(I).multiplyScalar(q).floor(),y=D;if(Q.bindFramebuffer(36160,Z)&&ue.drawBuffers&&k&&Q.drawBuffers(S,Z),Q.viewport(R),Q.scissor(C),Q.setScissorTest(y),Me){let Le=me.get(S.texture);F.framebufferTexture2D(36160,36064,34069+V,Le.__webglTexture,j)}else if(Ae){let Le=me.get(S.texture),ke=V||0;F.framebufferTextureLayer(36160,36064,Le.__webglTexture,j||0,ke)}M=-1},this.readRenderTargetPixels=function(S,V,j,k,Z,Me,Ae){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce){Q.bindFramebuffer(36160,Ce);try{let Le=S.texture,ke=Le.format,Ne=Le.type;if(ke!==Bt&&xe.convert(ke)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Oe=Ne===cs&&(ae.has("EXT_color_buffer_half_float")||ue.isWebGL2&&ae.has("EXT_color_buffer_float"));if(Ne!==Kn&&xe.convert(Ne)!==F.getParameter(35738)&&!(Ne===Tn&&(ue.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=S.width-k&&j>=0&&j<=S.height-Z&&F.readPixels(V,j,k,Z,xe.convert(ke),xe.convert(Ne),Me)}finally{let Le=x!==null?me.get(x).__webglFramebuffer:null;Q.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(S,V,j=0){let k=Math.pow(2,-j),Z=Math.floor(V.image.width*k),Me=Math.floor(V.image.height*k);de.setTexture2D(V,0),F.copyTexSubImage2D(3553,j,0,0,S.x,S.y,Z,Me),Q.unbindTexture()},this.copyTextureToTexture=function(S,V,j,k=0){let Z=V.image.width,Me=V.image.height,Ae=xe.convert(j.format),Ce=xe.convert(j.type);de.setTexture2D(j,0),F.pixelStorei(37440,j.flipY),F.pixelStorei(37441,j.premultiplyAlpha),F.pixelStorei(3317,j.unpackAlignment),V.isDataTexture?F.texSubImage2D(3553,k,S.x,S.y,Z,Me,Ae,Ce,V.image.data):V.isCompressedTexture?F.compressedTexSubImage2D(3553,k,S.x,S.y,V.mipmaps[0].width,V.mipmaps[0].height,Ae,V.mipmaps[0].data):F.texSubImage2D(3553,k,S.x,S.y,Ae,Ce,V.image),k===0&&j.generateMipmaps&&F.generateMipmap(3553),Q.unbindTexture()},this.copyTextureToTexture3D=function(S,V,j,k,Z=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Me=S.max.x-S.min.x+1,Ae=S.max.y-S.min.y+1,Ce=S.max.z-S.min.z+1,Le=xe.convert(k.format),ke=xe.convert(k.type),Ne;if(k.isData3DTexture)de.setTexture3D(k,0),Ne=32879;else if(k.isDataArrayTexture)de.setTexture2DArray(k,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,k.flipY),F.pixelStorei(37441,k.premultiplyAlpha),F.pixelStorei(3317,k.unpackAlignment);let Oe=F.getParameter(3314),it=F.getParameter(32878),It=F.getParameter(3316),hn=F.getParameter(3315),Bn=F.getParameter(32877),st=j.isCompressedTexture?j.mipmaps[0]:j.image;F.pixelStorei(3314,st.width),F.pixelStorei(32878,st.height),F.pixelStorei(3316,S.min.x),F.pixelStorei(3315,S.min.y),F.pixelStorei(32877,S.min.z),j.isDataTexture||j.isData3DTexture?F.texSubImage3D(Ne,Z,V.x,V.y,V.z,Me,Ae,Ce,Le,ke,st.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ne,Z,V.x,V.y,V.z,Me,Ae,Ce,Le,st.data)):F.texSubImage3D(Ne,Z,V.x,V.y,V.z,Me,Ae,Ce,Le,ke,st),F.pixelStorei(3314,Oe),F.pixelStorei(32878,it),F.pixelStorei(3316,It),F.pixelStorei(3315,hn),F.pixelStorei(32877,Bn),Z===0&&k.generateMipmaps&&F.generateMipmap(Ne),Q.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?de.setTextureCube(S,0):S.isData3DTexture?de.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?de.setTexture2DArray(S,0):de.setTexture2D(S,0),Q.unbindTexture()},this.resetState=function(){_=0,v=0,x=null,Q.reset(),E.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function nl(r,e,t,n,i,s,a){let o=Io.distanceSqToPoint(r);if(o<t){let c=new L;Io.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}function An(r,e,t){return Sl(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Ys(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Sl(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ag(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function il(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Al(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function cg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Nn;case"vector":case"vector2":case"vector3":case"vector4":return Fn;case"color":return pr;case"quaternion":return an;case"bool":case"boolean":return Dn;case"string":return On}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function lg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=cg(r.type);if(r.times===void 0){let t=[],n=[];Al(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var ii,si,sh,Ia,rh,al,oh,es,sn,Rt,zt,Rn,bi,Zs,Da,Na,ah,yi,ch,lh,Oa,Fa,hh,uh,dh,fh,cl,ll,ph,mh,gh,xh,_h,yh,vh,bh,ho,Mh,wh,Sh,Ah,Wo,Th,Eh,yn,Rh,Ch,Lh,Ph,Ih,hl,Ai,Ti,uo,fo,yr,Jn,Ft,as,$e,Js,ns,nt,qo,Cn,Kn,Dh,Nh,ul,Oh,Yn,Tn,cs,Fh,zh,Mi,Uh,Bt,kh,Bh,Zn,Ei,Hh,Vh,Gh,Wh,qh,Ir,Dr,Nr,Or,za,Ua,ka,Ba,Xh,Ha,Va,Ga,Wa,qa,Xa,ja,Ya,Za,Ja,Ka,$a,Qa,ec,tc,nc,Fr,jh,ic,sc,rc,Ri,$n,zr,oc,ac,cc,Yh,dl,vr,Ms,Qn,Ie,Zh,Jh,Xo,Kh,tn,ls,fl,Ur,$h,po,lc,mo,rn,_t,hc,is,hs,Lt,Se,Et,kr,Mt,L,Br,uc,du,fu,En,gu,xu,ft,oi,Ks,$s,_u,pt,We,Vt,Qs,xo,Jt,un,Gn,Gr,ai,ci,li,bn,Mn,Wn,qi,Ts,Es,qn,yu,Xi,qr,Kt,dn,Xr,Rs,wn,jr,Cs,Yr,ds,Re,hi,Xt,vu,bu,Sn,Ls,Nt,dc,fc,er,tr,Mu,pc,ui,fn,Ps,ji,wu,Su,mc,gc,xc,Au,_c,Je,jt,pn,Zr,mn,di,fi,yc,Jr,Kr,$r,rs,Tu,Pt,xl,Yt,Is,we,yt,mt,rt,Ds,ot,nr,ir,bt,Eu,kt,eo,pi,Ot,Yi,dt,Ct,vc,en,Ns,bc,Zi,Ji,Ki,to,Os,Fs,zs,Us,no,ks,et,ei,Lu,Pu,Iu,Gt,sr,Qe,mi,gi,_o,rr,yo,io,Du,Nu,xn,xi,Hs,fs,Li,Fu,zu,Uu,ku,Bu,Hu,Vu,Gu,Wu,qu,Xu,ju,Yu,Zu,Ju,Ku,$u,Qu,ed,td,nd,id,sd,rd,od,ad,cd,ld,hd,ud,dd,fd,pd,md,gd,xd,_d,yd,vd,bd,Md,wd,Sd,Ad,Td,Ed,Rd,Cd,Ld,Pd,Id,Dd,Nd,Od,Fd,zd,Ud,kd,Bd,Hd,Vd,Gd,Wd,qd,Xd,jd,Yd,Zd,Jd,Kd,$d,Qd,ef,tf,nf,sf,rf,of,af,cf,lf,hf,uf,df,ff,pf,mf,gf,xf,_f,yf,vf,bf,Mf,wf,Sf,Af,Tf,Ef,Rf,Cf,Lf,Pf,If,Df,Nf,Of,Ff,zf,Uf,kf,Bf,Hf,Vf,Gf,Wf,qf,Xf,jf,Yf,Zf,Jf,Kf,$f,Qf,ep,tp,np,ip,sp,rp,op,ap,cp,lp,hp,up,dp,fp,pp,Ee,ce,nn,Vs,Ln,vi,Mc,jn,so,wc,ro,Xn,_i,Sc,Pi,vl,bl,Ml,wl,Rc,Cc,Lc,Pc,Ic,vo,bo,Mo,oo,Si,ym,Em,Cm,zm,So,Ao,Wm,To,Eo,Ym,Zm,Ro,Ht,eg,os,Co,Lo,Po,or,vn,ps,At,ms,Gc,Wc,qc,sg,Xc,ar,gs,ti,jc,rg,cr,xs,Yc,Zc,Ws,og,$i,lr,_s,Jc,Kc,$c,ao,qs,Ii,Qc,el,hr,ur,ys,tl,Io,Xs,js,Di,dr,Pn,on,fr,In,Do,No,Oo,Wt,Dn,pr,Nn,Fo,an,On,Fn,mr,Ni,zo,hg,zn,gn,Uo,vs,ko,gr,Oi,Fi,co,sl,rl,bs,Bo,xr,ol,Qi,lo,Ho,zi,Vo,cn,Ui,_r,Zo,ug,Jo,dg,fg,pg,mg,gg,xg,_g,Go,je,Kg,ni,Hi=Pr(()=>{ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sh=0,Ia=1,rh=2,al=1,oh=2,es=3,sn=0,Rt=1,zt=2,Rn=0,bi=1,Zs=2,Da=3,Na=4,ah=5,yi=100,ch=101,lh=102,Oa=103,Fa=104,hh=200,uh=201,dh=202,fh=203,cl=204,ll=205,ph=206,mh=207,gh=208,xh=209,_h=210,yh=0,vh=1,bh=2,ho=3,Mh=4,wh=5,Sh=6,Ah=7,Wo=0,Th=1,Eh=2,yn=0,Rh=1,Ch=2,Lh=3,Ph=4,Ih=5,hl=300,Ai=301,Ti=302,uo=303,fo=304,yr=306,Jn=1e3,Ft=1001,as=1002,$e=1003,Js=1004,ns=1005,nt=1006,qo=1007,Cn=1008,Kn=1009,Dh=1010,Nh=1011,ul=1012,Oh=1013,Yn=1014,Tn=1015,cs=1016,Fh=1017,zh=1018,Mi=1020,Uh=1021,Bt=1023,kh=1024,Bh=1025,Zn=1026,Ei=1027,Hh=1028,Vh=1029,Gh=1030,Wh=1031,qh=1033,Ir=33776,Dr=33777,Nr=33778,Or=33779,za=35840,Ua=35841,ka=35842,Ba=35843,Xh=36196,Ha=37492,Va=37496,Ga=37808,Wa=37809,qa=37810,Xa=37811,ja=37812,Ya=37813,Za=37814,Ja=37815,Ka=37816,$a=37817,Qa=37818,ec=37819,tc=37820,nc=37821,Fr=36492,jh=36283,ic=36284,sc=36285,rc=36286,Ri=2300,$n=2301,zr=2302,oc=2400,ac=2401,cc=2402,Yh=2500,dl=0,vr=1,Ms=2,Qn=3e3,Ie=3001,Zh=3200,Jh=3201,Xo=0,Kh=1,tn="srgb",ls="srgb-linear",fl="display-p3",Ur=7680,$h=519,po=35044,lc="300 es",mo=1035,rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},_t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=1234567,is=Math.PI/180,hs=180/Math.PI;Lt={DEG2RAD:is,RAD2DEG:hs,generateUUID:Zt,clamp:vt,euclideanModulo:jo,mapLinear:Qh,inverseLerp:eu,lerp:ss,damp:tu,pingpong:nu,smoothstep:iu,smootherstep:su,randInt:ru,randFloat:ou,randFloatSpread:au,seededRandom:cu,degToRad:lu,radToDeg:hu,isPowerOfTwo:go,ceilPowerOfTwo:pl,floorPowerOfTwo:ml,setQuaternionFromProperEuler:uu,normalize:Ge,denormalize:_n},Se=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Et=class r{constructor(){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],p=i[0],f=i[3],_=i[6],v=i[1],x=i[4],M=i[7],w=i[2],R=i[5],C=i[8];return s[0]=a*p+o*v+c*w,s[3]=a*f+o*x+c*R,s[6]=a*_+o*M+c*C,s[1]=l*p+h*v+u*w,s[4]=l*f+h*x+u*R,s[7]=l*_+h*M+u*C,s[2]=d*p+m*v+g*w,s[5]=d*f+m*x+g*R,s[8]=d*_+m*M+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,m=l*s-a*c,g=t*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return e[0]=u*p,e[1]=(i*l-h*n)*p,e[2]=(o*n-i*a)*p,e[3]=d*p,e[4]=(h*t-i*c)*p,e[5]=(i*s-o*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(kr.makeScale(e,t)),this}rotate(e){return this.premultiply(kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(kr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kr=new Et;Mt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],m=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(u!==p||c!==d||l!==m||h!==g){let f=1-o,_=c*d+l*m+h*g+u*p,v=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){let w=Math.sqrt(x),R=Math.atan2(w,_*v);f=Math.sin(f*R)/w,o=Math.sin(o*R)/w}let M=o*v;if(c=c*f+d*M,l=l*f+m*M,h=h*f+g*M,u=u*f+p*M,f===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*m-l*d,e[t+1]=c*g+h*d+l*u-o*m,e[t+2]=l*g+h*m+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),m=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-i)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+l)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(s-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,h=c*n+o*t-s*i,u=c*i+s*n-a*t,d=-s*t-a*n-o*i;return this.x=l*c+d*-s+h*-o-u*-a,this.y=h*c+d*-a+u*-s-l*-o,this.z=u*c+d*-o+l*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Br.copy(this).projectOnVector(e),this.sub(Br)}reflect(e){return this.sub(Br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Br=new L,uc=new Mt;du=new Et().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),fu=new Et().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),En=new L;gu={[ls]:r=>r,[tn]:r=>r.convertSRGBToLinear(),[fl]:pu},xu={[ls]:r=>r,[tn]:r=>r.convertLinearToSRGB(),[fl]:mu},ft={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return ls},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=gu[e],i=xu[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Ks=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=us("canvas")),oi.width=e.width,oi.height=e.height;let n=oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=us("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=wi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$s=class{constructor(e=null){this.isSource=!0,this.uuid=Zt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Vr(i[a].image)):s.push(Vr(i[a]))}else s=Vr(i);n.url=s}return t||(e.images[this.uuid]=n),n}};_u=0,pt=class r extends rn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Ft,i=Ft,s=nt,a=Cn,o=Bt,c=Kn,l=r.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Zt(),this.name="",this.source=new $s(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case as:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case as:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=hl;pt.DEFAULT_ANISOTROPY=1;We=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],p=c[2],f=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,M=(m+1)/2,w=(_+1)/2,R=(h+d)/4,C=(u+p)/4,y=(g+f)/4;return x>M&&x>w?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=R/n,s=C/n):M>w?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=R/i,s=y/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=C/s,i=y/s),this.set(n,i,s,t),this}let v=Math.sqrt((f-g)*(f-g)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(u-p)/v,this.z=(d-h)/v,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vt=class extends rn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);let i={width:e,height:t,depth:1};this.texture=new pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:nt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new $s(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qs=class extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xo=class extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){let h=e[c],u=e[c+1],d=e[c+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){let h=e.getX(c),u=e.getY(c),d=e.getZ(c);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Gn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Gn)}else n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox),Gr.applyMatrix4(e.matrixWorld),this.union(Gr);let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qi),Ts.subVectors(this.max,qi),ai.subVectors(e.a,qi),ci.subVectors(e.b,qi),li.subVectors(e.c,qi),bn.subVectors(ci,ai),Mn.subVectors(li,ci),Wn.subVectors(ai,li);let t=[0,-bn.z,bn.y,0,-Mn.z,Mn.y,0,-Wn.z,Wn.y,bn.z,0,-bn.x,Mn.z,0,-Mn.x,Wn.z,0,-Wn.x,-bn.y,bn.x,0,-Mn.y,Mn.x,0,-Wn.y,Wn.x,0];return!Wr(t,ai,ci,li,Ts)||(t=[1,0,0,0,1,0,0,0,1],!Wr(t,ai,ci,li,Ts))?!1:(Es.crossVectors(bn,Mn),t=[Es.x,Es.y,Es.z],Wr(t,ai,ci,li,Ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},un=[new L,new L,new L,new L,new L,new L,new L,new L],Gn=new L,Gr=new Jt,ai=new L,ci=new L,li=new L,bn=new L,Mn=new L,Wn=new L,qi=new L,Ts=new L,Es=new L,qn=new L;yu=new Jt,Xi=new L,qr=new L,Kt=class{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):yu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);let t=Xi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(qr)),this.expandByPoint(Xi.copy(e.center).sub(qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},dn=new L,Xr=new L,Rs=new L,wn=new L,jr=new L,Cs=new L,Yr=new L,ds=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xr.copy(e).add(t).multiplyScalar(.5),Rs.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(Xr);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Rs),o=wn.dot(this.direction),c=-wn.dot(Rs),l=wn.lengthSq(),h=Math.abs(1-a*a),u,d,m,g;if(h>0)if(u=a*c-o,d=a*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let p=1/h;u*=p,d*=p,m=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xr).addScaledVector(Rs,d),m}intersectSphere(e,t){dn.subVectors(e.center,this.origin);let n=dn.dot(this.direction),i=dn.dot(dn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,i,s){jr.subVectors(t,e),Cs.subVectors(n,e),Yr.crossVectors(jr,Cs);let a=this.direction.dot(Yr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,e);let c=o*this.direction.dot(Cs.crossVectors(wn,Cs));if(c<0)return null;let l=o*this.direction.dot(jr.cross(wn));if(l<0||c+l>a)return null;let h=-o*wn.dot(Yr);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Re=class r{constructor(){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,c,l,h,u,d,m,g,p,f){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=h,_[10]=u,_[14]=d,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/hi.setFromMatrixColumn(e,0).length(),s=1/hi.setFromMatrixColumn(e,1).length(),a=1/hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,m=a*u,g=o*h,p=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=d-p*l,t[9]=-o*c,t[2]=p-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,m=c*u,g=l*h,p=l*u;t[0]=d+p*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=p+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,m=c*u,g=l*h,p=l*u;t[0]=d-p*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=p-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,m=a*u,g=o*h,p=o*u;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+p,t[1]=c*u,t[5]=p*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*l,g=o*c,p=o*l;t[0]=c*h,t[4]=p-d*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+g,t[10]=d-p*u}else if(e.order==="XZY"){let d=a*c,m=a*l,g=o*c,p=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+p,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=p*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vu,e,bu)}lookAt(e,t,n){let i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Sn.crossVectors(n,Nt),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Sn.crossVectors(n,Nt)),Sn.normalize(),Ls.crossVectors(Nt,Sn),i[0]=Sn.x,i[4]=Ls.x,i[8]=Nt.x,i[1]=Sn.y,i[5]=Ls.y,i[9]=Nt.y,i[2]=Sn.z,i[6]=Ls.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],p=n[6],f=n[10],_=n[14],v=n[3],x=n[7],M=n[11],w=n[15],R=i[0],C=i[4],y=i[8],T=i[12],N=i[1],q=i[5],K=i[9],U=i[13],O=i[2],I=i[6],D=i[10],G=i[14],B=i[3],W=i[7],J=i[11],se=i[15];return s[0]=a*R+o*N+c*O+l*B,s[4]=a*C+o*q+c*I+l*W,s[8]=a*y+o*K+c*D+l*J,s[12]=a*T+o*U+c*G+l*se,s[1]=h*R+u*N+d*O+m*B,s[5]=h*C+u*q+d*I+m*W,s[9]=h*y+u*K+d*D+m*J,s[13]=h*T+u*U+d*G+m*se,s[2]=g*R+p*N+f*O+_*B,s[6]=g*C+p*q+f*I+_*W,s[10]=g*y+p*K+f*D+_*J,s[14]=g*T+p*U+f*G+_*se,s[3]=v*R+x*N+M*O+w*B,s[7]=v*C+x*q+M*I+w*W,s[11]=v*y+x*K+M*D+w*J,s[15]=v*T+x*U+M*G+w*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],p=e[7],f=e[11],_=e[15];return g*(+s*c*u-i*l*u-s*o*d+n*l*d+i*o*m-n*c*m)+p*(+t*c*m-t*l*d+s*a*d-i*a*m+i*l*h-s*c*h)+f*(+t*l*u-t*o*m-s*a*u+n*a*m+s*o*h-n*l*h)+_*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],p=e[13],f=e[14],_=e[15],v=u*f*l-p*d*l+p*c*m-o*f*m-u*c*_+o*d*_,x=g*d*l-h*f*l-g*c*m+a*f*m+h*c*_-a*d*_,M=h*p*l-g*u*l+g*o*m-a*p*m-h*o*_+a*u*_,w=g*u*c-h*p*c-g*o*d+a*p*d+h*o*f-a*u*f,R=t*v+n*x+i*M+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return e[0]=v*C,e[1]=(p*d*s-u*f*s-p*i*m+n*f*m+u*i*_-n*d*_)*C,e[2]=(o*f*s-p*c*s+p*i*l-n*f*l-o*i*_+n*c*_)*C,e[3]=(u*c*s-o*d*s-u*i*l+n*d*l+o*i*m-n*c*m)*C,e[4]=x*C,e[5]=(h*f*s-g*d*s+g*i*m-t*f*m-h*i*_+t*d*_)*C,e[6]=(g*c*s-a*f*s-g*i*l+t*f*l+a*i*_-t*c*_)*C,e[7]=(a*d*s-h*c*s+h*i*l-t*d*l-a*i*m+t*c*m)*C,e[8]=M*C,e[9]=(g*u*s-h*p*s-g*n*m+t*p*m+h*n*_-t*u*_)*C,e[10]=(a*p*s-g*o*s+g*n*l-t*p*l-a*n*_+t*o*_)*C,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*m-t*o*m)*C,e[12]=w*C,e[13]=(h*p*i-g*u*i+g*n*d-t*p*d-h*n*f+t*u*f)*C,e[14]=(g*o*i-a*p*i-g*n*c+t*p*c+a*n*f-t*o*f)*C,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,m=s*h,g=s*u,p=a*h,f=a*u,_=o*u,v=c*l,x=c*h,M=c*u,w=n.x,R=n.y,C=n.z;return i[0]=(1-(p+_))*w,i[1]=(m+M)*w,i[2]=(g-x)*w,i[3]=0,i[4]=(m-M)*R,i[5]=(1-(d+_))*R,i[6]=(f+v)*R,i[7]=0,i[8]=(g+x)*C,i[9]=(f-v)*C,i[10]=(1-(d+p))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=hi.set(i[0],i[1],i[2]).length(),a=hi.set(i[4],i[5],i[6]).length(),o=hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Xt.copy(this);let l=1/s,h=1/a,u=1/o;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=u,Xt.elements[9]*=u,Xt.elements[10]*=u,t.setFromRotationMatrix(Xt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){let o=this.elements,c=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){let o=this.elements,c=1/(t-e),l=1/(n-i),h=1/(a-s),u=(t+e)*c,d=(n+i)*l,m=(a+s)*h;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},hi=new L,Xt=new Re,vu=new L(0,0,0),bu=new L(1,1,1),Sn=new L,Ls=new L,Nt=new L,dc=new Re,fc=new Mt,er=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fc.setFromEuler(this),this.setFromQuaternion(fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};er.DEFAULT_ORDER="XYZ";tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mu=0,pc=new L,ui=new Mt,fn=new Re,Ps=new L,ji=new L,wu=new L,Su=new Mt,mc=new L(1,0,0),gc=new L(0,1,0),xc=new L(0,0,1),Au={type:"added"},_c={type:"removed"},Je=class r extends rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Zt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new L,t=new er,n=new Mt,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Et}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(mc,e)}rotateY(e){return this.rotateOnAxis(gc,e)}rotateZ(e){return this.rotateOnAxis(xc,e)}translateOnAxis(e,t){return pc.copy(e).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mc,e)}translateY(e){return this.translateOnAxis(gc,e)}translateZ(e){return this.translateOnAxis(xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ps.copy(e):Ps.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(ji,Ps,this.up):fn.lookAt(Ps,ji,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),ui.setFromRotationMatrix(fn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Au)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_c)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(_c)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,wu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Su,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Je.DEFAULT_UP=new L(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;jt=new L,pn=new L,Zr=new L,mn=new L,di=new L,fi=new L,yc=new L,Jr=new L,Kr=new L,$r=new L,rs=class r{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jt.subVectors(e,t),i.cross(jt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){jt.subVectors(i,t),pn.subVectors(n,t),Zr.subVectors(e,t);let a=jt.dot(jt),o=jt.dot(pn),c=jt.dot(Zr),l=pn.dot(pn),h=pn.dot(Zr),u=a*l-o*o;if(u===0)return s.set(-2,-1,-1);let d=1/u,m=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mn),mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,mn),c.set(0,0),c.addScaledVector(s,mn.x),c.addScaledVector(a,mn.y),c.addScaledVector(o,mn.z),c}static isFrontFacing(e,t,n,i){return jt.subVectors(n,t),pn.subVectors(e,t),jt.cross(pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),jt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return r.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;di.subVectors(i,n),fi.subVectors(s,n),Jr.subVectors(e,n);let c=di.dot(Jr),l=fi.dot(Jr);if(c<=0&&l<=0)return t.copy(n);Kr.subVectors(e,i);let h=di.dot(Kr),u=fi.dot(Kr);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(di,a);$r.subVectors(e,s);let m=di.dot($r),g=fi.dot($r);if(g>=0&&m<=g)return t.copy(s);let p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(fi,o);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return yc.subVectors(s,i),o=(u-h)/(u-h+(m-g)),t.copy(i).addScaledVector(yc,o);let _=1/(f+p+d);return a=p*_,o=d*_,t.copy(n).addScaledVector(di,a).addScaledVector(fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tu=0,Pt=class extends rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Zt(),this.name="",this.type="Material",this.blending=bi,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=cl,this.blendDst=ll,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yt={h:0,s:0,l:0},Is={h:0,s:0,l:0};we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=jo(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Qr(a,s,e+1/3),this.g=Qr(a,s,e),this.b=Qr(a,s,e-1/3)}return ft.toWorkingColorSpace(this,i),this}setStyle(e,t=tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ft.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ft.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ft.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ft.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){let n=xl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return ft.fromWorkingColorSpace(yt.copy(this),e),vt(yt.r*255,0,255)<<16^vt(yt.g*255,0,255)<<8^vt(yt.b*255,0,255)<<0}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(yt.copy(this),t);let n=yt.r,i=yt.g,s=yt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=tn){ft.fromWorkingColorSpace(yt.copy(this),e);let t=yt.r,n=yt.g,i=yt.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Yt),Yt.h+=e,Yt.s+=t,Yt.l+=n,this.setHSL(Yt.h,Yt.s,Yt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yt),e.getHSL(Is);let n=ss(Yt.h,Is.h,t),i=ss(Yt.s,Is.s,t),s=ss(Yt.l,Is.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yt=new we;we.NAMES=xl;mt=class extends Pt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rt=new L,Ds=new Se,ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=po,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==po&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},nr=class extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ir=class extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}},bt=class extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},Eu=0,kt=new Re,eo=new Je,pi=new L,Ot=new Jt,Yi=new Jt,dt=new L,Ct=class r extends rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Zt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gl(e)?ir:nr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(Ot.min,Yi.min),Ot.expandByPoint(dt),dt.addVectors(Ot.max,Yi.max),Ot.expandByPoint(dt)):(Ot.expandByPoint(Yi.min),Ot.expandByPoint(Yi.max))}Ot.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(dt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)dt.fromBufferAttribute(o,l),c&&(pi.fromBufferAttribute(e,l),dt.add(pi)),i=Math.max(i,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let N=0;N<o;N++)l[N]=new L,h[N]=new L;let u=new L,d=new L,m=new L,g=new Se,p=new Se,f=new Se,_=new L,v=new L;function x(N,q,K){u.fromArray(i,N*3),d.fromArray(i,q*3),m.fromArray(i,K*3),g.fromArray(a,N*2),p.fromArray(a,q*2),f.fromArray(a,K*2),d.sub(u),m.sub(u),p.sub(g),f.sub(g);let U=1/(p.x*f.y-f.x*p.y);isFinite(U)&&(_.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(U),v.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(U),l[N].add(_),l[q].add(_),l[K].add(_),h[N].add(v),h[q].add(v),h[K].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let N=0,q=M.length;N<q;++N){let K=M[N],U=K.start,O=K.count;for(let I=U,D=U+O;I<D;I+=3)x(n[I+0],n[I+1],n[I+2])}let w=new L,R=new L,C=new L,y=new L;function T(N){C.fromArray(s,N*3),y.copy(C);let q=l[N];w.copy(q),w.sub(C.multiplyScalar(C.dot(q))).normalize(),R.crossVectors(y,q);let U=R.dot(h[N])<0?-1:1;c[N*4]=w.x,c[N*4+1]=w.y,c[N*4+2]=w.z,c[N*4+3]=U}for(let N=0,q=M.length;N<q;++N){let K=M[N],U=K.start,O=K.count;for(let I=U,D=U+O;I<D;I+=3)T(n[I+0]),T(n[I+1]),T(n[I+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new L,s=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,f),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let p=0,f=c.length;p<f;p++){o.isInterleavedBufferAttribute?m=c[p]*o.data.stride+o.offset:m=c[p]*h;for(let _=0;_<h;_++)d[g++]=l[m++]}return new ot(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vc=new Re,en=new ds,Ns=new Kt,bc=new L,Zi=new L,Ji=new L,Ki=new L,to=new L,Os=new L,Fs=new Se,zs=new Se,Us=new Se,no=new L,ks=new L,et=class extends Je{constructor(e=new Ct,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Os.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(to.fromBufferAttribute(u,e),a?Os.addScaledVector(to,h):Os.addScaledVector(to.sub(t),h))}t.add(Os)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(s),en.copy(e.ray).recast(e.near),Ns.containsPoint(en.origin)===!1&&(en.intersectSphere(Ns,bc)===null||en.origin.distanceToSquared(bc)>(e.far-e.near)**2))||(vc.copy(s).invert(),en.copy(e.ray).applyMatrix4(vc),n.boundingBox!==null&&en.intersectsBox(n.boundingBox)===!1))return;let a,o=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,u=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,g=u.length;m<g;m++){let p=u[m],f=i[p.materialIndex],_=Math.max(p.start,d.start),v=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let x=_,M=v;x<M;x+=3){let w=o.getX(x),R=o.getX(x+1),C=o.getX(x+2);a=Bs(this,f,e,en,l,h,w,R,C),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{let m=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=m,f=g;p<f;p+=3){let _=o.getX(p),v=o.getX(p+1),x=o.getX(p+2);a=Bs(this,i,e,en,l,h,_,v,x),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,g=u.length;m<g;m++){let p=u[m],f=i[p.materialIndex],_=Math.max(p.start,d.start),v=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let x=_,M=v;x<M;x+=3){let w=x,R=x+1,C=x+2;a=Bs(this,f,e,en,l,h,w,R,C),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{let m=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let p=m,f=g;p<f;p+=3){let _=p,v=p+1,x=p+2;a=Bs(this,i,e,en,l,h,_,v,x),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}};ei=class r extends Ct{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(u,2));function g(p,f,_,v,x,M,w,R,C,y,T){let N=M/C,q=w/y,K=M/2,U=w/2,O=R/2,I=C+1,D=y+1,G=0,B=0,W=new L;for(let J=0;J<D;J++){let se=J*q-U;for(let H=0;H<I;H++){let $=H*N-K;W[p]=$*v,W[f]=se*x,W[_]=O,l.push(W.x,W.y,W.z),W[p]=0,W[f]=0,W[_]=R>0?1:-1,h.push(W.x,W.y,W.z),u.push(H/C),u.push(1-J/y),G+=1}}for(let J=0;J<y;J++)for(let se=0;se<C;se++){let H=d+se+I*J,$=d+se+I*(J+1),te=d+(se+1)+I*(J+1),F=d+(se+1)+I*J;c.push(H,$,F),c.push($,te,F),B+=6}o.addGroup(m,B,T),m+=B,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Lu={clone:Ci,merge:Tt},Pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gt=class extends Pt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pu,this.fragmentShader=Iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=Cu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},sr=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qe=class extends sr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(is*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mi=-90,gi=1,_o=class extends Je{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new Qe(mi,gi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);let s=new Qe(mi,gi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let a=new Qe(mi,gi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);let o=new Qe(mi,gi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);let c=new Qe(mi,gi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);let l=new Qe(mi,gi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,a,o,c,l]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=yn,e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},rr=class extends pt{constructor(e,t,n,i,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ai,super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yo=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new rr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ei(5,5,5),s=new Gt({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:Rn});s.uniforms.tEquirect.value=t;let a=new et(i,s),o=t.minFilter;return t.minFilter===Cn&&(t.minFilter=nt),new _o(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},io=new L,Du=new L,Nu=new Et,xn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=io.subVectors(n,t).cross(Du.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(io),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Nu.getNormalMatrix(e),i=this.coplanarPoint(io).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new Kt,Hs=new L,fs=class{constructor(e=new xn,t=new xn,n=new xn,i=new xn,s=new xn,a=new xn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],m=n[9],g=n[10],p=n[11],f=n[12],_=n[13],v=n[14],x=n[15];return t[0].setComponents(o-i,u-c,p-d,x-f).normalize(),t[1].setComponents(o+i,u+c,p+d,x+f).normalize(),t[2].setComponents(o+s,u+l,p+m,x+_).normalize(),t[3].setComponents(o-s,u-l,p-m,x-_).normalize(),t[4].setComponents(o-a,u-h,p-g,x-v).normalize(),t[5].setComponents(o+a,u+h,p+g,x+v).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Hs.x=i.normal.x>0?e.max.x:e.min.x,Hs.y=i.normal.y>0?e.max.y:e.min.y,Hs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Li=class r extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,m=[],g=[],p=[],f=[];for(let _=0;_<h;_++){let v=_*d-a;for(let x=0;x<l;x++){let M=x*u-s;g.push(M,-v,0),p.push(0,0,1),f.push(x/o),f.push(1-_/c)}}for(let _=0;_<c;_++)for(let v=0;v<o;v++){let x=v+l*_,M=v+l*(_+1),w=v+1+l*(_+1),R=v+1+l*_;m.push(x,M,R),m.push(M,w,R)}this.setIndex(m),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(p,3)),this.setAttribute("uv",new bt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vu="vec3 transformed = vec3( position );",Gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,qu=`#ifdef USE_IRIDESCENCE
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
#endif`,Xu=`#ifdef USE_BUMPMAP
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
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,td=`#define PI 3.141592653589793
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
}`,nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,id=`vec3 transformedNormal = objectNormal;
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
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,od=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ld=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yd=`#ifdef USE_GRADIENTMAP
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
}`,vd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sd=`uniform bool receiveShadow;
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
#endif`,Ad=`#if defined( USE_ENVMAP )
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
#endif`,Td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ld=`PhysicalMaterial material;
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
#endif`,Pd=`struct PhysicalMaterial {
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
}`,Id=`
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
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Od=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ud=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xd=`#ifdef USE_MORPHNORMALS
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
#endif`,jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Yd=`#ifdef USE_MORPHTARGETS
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
#endif`,Zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Jd=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ef=`#ifdef USE_NORMALMAP
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
#endif`,tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,af=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xf=`float getShadowMask() {
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
}`,_f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yf=`#ifdef USE_SKINNING
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
#endif`,vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bf=`#ifdef USE_SKINNING
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
#endif`,Mf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Af=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tf=`#ifdef USE_TRANSMISSION
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
#endif`,Ef=`#ifdef USE_TRANSMISSION
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
#endif`,Rf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Cf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Lf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Pf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,If=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Df=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ff=`uniform sampler2D t2D;
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hf=`#include <common>
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
}`,Vf=`#if DEPTH_PACKING == 3200
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
}`,Gf=`#define DISTANCE
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
}`,Wf=`#define DISTANCE
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
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jf=`uniform float scale;
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
}`,Yf=`uniform vec3 diffuse;
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
}`,Zf=`#include <common>
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
}`,Jf=`uniform vec3 diffuse;
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
}`,Kf=`#define LAMBERT
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
}`,$f=`#define LAMBERT
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
}`,Qf=`#define MATCAP
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
}`,ep=`#define MATCAP
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
}`,tp=`#define NORMAL
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
}`,np=`#define NORMAL
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
}`,ip=`#define PHONG
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
}`,sp=`#define PHONG
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
}`,rp=`#define STANDARD
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
}`,op=`#define STANDARD
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
}`,ap=`#define TOON
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
}`,cp=`#define TOON
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
}`,lp=`uniform float size;
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
}`,hp=`uniform vec3 diffuse;
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
}`,up=`#include <common>
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
}`,dp=`uniform vec3 color;
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
}`,fp=`uniform float rotation;
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
}`,pp=`uniform vec3 diffuse;
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
}`,Ee={alphamap_fragment:Fu,alphamap_pars_fragment:zu,alphatest_fragment:Uu,alphatest_pars_fragment:ku,aomap_fragment:Bu,aomap_pars_fragment:Hu,begin_vertex:Vu,beginnormal_vertex:Gu,bsdfs:Wu,iridescence_fragment:qu,bumpmap_pars_fragment:Xu,clipping_planes_fragment:ju,clipping_planes_pars_fragment:Yu,clipping_planes_pars_vertex:Zu,clipping_planes_vertex:Ju,color_fragment:Ku,color_pars_fragment:$u,color_pars_vertex:Qu,color_vertex:ed,common:td,cube_uv_reflection_fragment:nd,defaultnormal_vertex:id,displacementmap_pars_vertex:sd,displacementmap_vertex:rd,emissivemap_fragment:od,emissivemap_pars_fragment:ad,encodings_fragment:cd,encodings_pars_fragment:ld,envmap_fragment:hd,envmap_common_pars_fragment:ud,envmap_pars_fragment:dd,envmap_pars_vertex:fd,envmap_physical_pars_fragment:Ad,envmap_vertex:pd,fog_vertex:md,fog_pars_vertex:gd,fog_fragment:xd,fog_pars_fragment:_d,gradientmap_pars_fragment:yd,lightmap_fragment:vd,lightmap_pars_fragment:bd,lights_lambert_fragment:Md,lights_lambert_pars_fragment:wd,lights_pars_begin:Sd,lights_toon_fragment:Td,lights_toon_pars_fragment:Ed,lights_phong_fragment:Rd,lights_phong_pars_fragment:Cd,lights_physical_fragment:Ld,lights_physical_pars_fragment:Pd,lights_fragment_begin:Id,lights_fragment_maps:Dd,lights_fragment_end:Nd,logdepthbuf_fragment:Od,logdepthbuf_pars_fragment:Fd,logdepthbuf_pars_vertex:zd,logdepthbuf_vertex:Ud,map_fragment:kd,map_pars_fragment:Bd,map_particle_fragment:Hd,map_particle_pars_fragment:Vd,metalnessmap_fragment:Gd,metalnessmap_pars_fragment:Wd,morphcolor_vertex:qd,morphnormal_vertex:Xd,morphtarget_pars_vertex:jd,morphtarget_vertex:Yd,normal_fragment_begin:Zd,normal_fragment_maps:Jd,normal_pars_fragment:Kd,normal_pars_vertex:$d,normal_vertex:Qd,normalmap_pars_fragment:ef,clearcoat_normal_fragment_begin:tf,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:sf,iridescence_pars_fragment:rf,output_fragment:of,packing:af,premultiplied_alpha_fragment:cf,project_vertex:lf,dithering_fragment:hf,dithering_pars_fragment:uf,roughnessmap_fragment:df,roughnessmap_pars_fragment:ff,shadowmap_pars_fragment:pf,shadowmap_pars_vertex:mf,shadowmap_vertex:gf,shadowmask_pars_fragment:xf,skinbase_vertex:_f,skinning_pars_vertex:yf,skinning_vertex:vf,skinnormal_vertex:bf,specularmap_fragment:Mf,specularmap_pars_fragment:wf,tonemapping_fragment:Sf,tonemapping_pars_fragment:Af,transmission_fragment:Tf,transmission_pars_fragment:Ef,uv_pars_fragment:Rf,uv_pars_vertex:Cf,uv_vertex:Lf,uv2_pars_fragment:Pf,uv2_pars_vertex:If,uv2_vertex:Df,worldpos_vertex:Nf,background_vert:Of,background_frag:Ff,backgroundCube_vert:zf,backgroundCube_frag:Uf,cube_vert:kf,cube_frag:Bf,depth_vert:Hf,depth_frag:Vf,distanceRGBA_vert:Gf,distanceRGBA_frag:Wf,equirect_vert:qf,equirect_frag:Xf,linedashed_vert:jf,linedashed_frag:Yf,meshbasic_vert:Zf,meshbasic_frag:Jf,meshlambert_vert:Kf,meshlambert_frag:$f,meshmatcap_vert:Qf,meshmatcap_frag:ep,meshnormal_vert:tp,meshnormal_frag:np,meshphong_vert:ip,meshphong_frag:sp,meshphysical_vert:rp,meshphysical_frag:op,meshtoon_vert:ap,meshtoon_frag:cp,points_vert:lp,points_frag:hp,shadow_vert:up,shadow_frag:dp,sprite_vert:fp,sprite_frag:pp},ce={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Et},uv2Transform:{value:new Et},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Et}}},nn={basic:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new we(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Tt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Tt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new we(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Tt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Tt([ce.points,ce.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Tt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Tt([ce.common,ce.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Tt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Tt([ce.sprite,ce.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:Tt([ce.common,ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:Tt([ce.lights,ce.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};nn.physical={uniforms:Tt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};Vs={r:0,b:0,g:0};Ln=class extends sr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vi=4,Mc=[.125,.215,.35,.446,.526,.582],jn=20,so=new Ln,wc=new we,ro=null,Xn=(1+Math.sqrt(5))/2,_i=1/Xn,Sc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Xn,_i),new L(0,Xn,-_i),new L(_i,0,Xn),new L(-_i,0,Xn),new L(Xn,_i,0),new L(-Xn,_i,0)],Pi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ro=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro),e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nt,minFilter:nt,generateMipmaps:!1,type:cs,format:Bt,encoding:Qn,depthBuffer:!1},i=Ac(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bp(s)),this._blurMaterial=Mp(s,e,t)}return i}_compileMaterial(e){let t=new et(this._lodPlanes[0],e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,n,i){let o=new Qe(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(wc),h.toneMapping=yn,h.autoClear=!1;let m=new mt({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new et(new ei,m),p=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(wc),p=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(o.up.set(0,c[_],0),o.lookAt(l[_],0,0)):v===1?(o.up.set(0,0,c[_]),o.lookAt(0,l[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,l[_]));let x=this._cubeSize;Gs(i,v*x,_>2?x:0,x,x),h.setRenderTarget(i),p&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ai||e.mapping===Ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new et(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Gs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,so)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Sc[(i-1)%Sc.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new et(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*jn-1),p=s/g,f=isFinite(s)?1+Math.floor(h*p):jn;f>jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${jn}`);let _=[],v=0;for(let C=0;C<jn;++C){let y=C/p,T=Math.exp(-y*y/2);_.push(T),C===0?v+=T:C<f&&(v+=2*T)}for(let C=0;C<_.length;C++)_[C]=_[C]/v;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let M=this._sizeLods[i],w=3*M*(i>x-vi?i-x+vi:0),R=4*(this._cubeSize-M);Gs(t,w,R,3*M,2*M),c.setRenderTarget(t),c.render(u,so)}};vl=new pt,bl=new Qs,Ml=new xo,wl=new rr,Rc=[],Cc=[],Lc=new Float32Array(16),Pc=new Float32Array(9),Ic=new Float32Array(4);vo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Kp(t.type)}},bo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=xm(t.type)}},Mo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},oo=/(\w+)(\])?(\[|\.)?/g;Si=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);_m(s,a,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};ym=0;Em=/^[ \t]*#include +<([\w\d./]+)>/gm;Cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;zm=0,So=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ao(e),t.set(e,n)),n}},Ao=class{constructor(e){this.id=zm++,this.code=e,this.usedTimes=0}};Wm=0;To=class extends Pt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Eo=class extends Pt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zm=`uniform sampler2D shadow_pass;
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
}`;Ro=class extends Qe{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ht=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},eg={type:"move"},os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let p of e.hand.values()){let f=t.getJointPose(p,n),_=this._getHandJoint(l,p);f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Co=class extends pt{constructor(e,t,n,i,s,a,o,c,l,h){if(h=h!==void 0?h:Zn,h!==Zn&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zn&&(n=Yn),n===void 0&&h===Ei&&(n=Mi),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$e,this.minFilter=c!==void 0?c:$e,this.flipY=!1,this.generateMipmaps=!1}},Lo=class extends rn{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,p=t.getContextAttributes(),f=null,_=null,v=[],x=[],M=new Set,w=new Map,R=new Qe;R.layers.enable(1),R.viewport=new We;let C=new Qe;C.layers.enable(2),C.viewport=new We;let y=[R,C],T=new Ro;T.layers.enable(1),T.layers.enable(2);let N=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=v[H];return $===void 0&&($=new os,v[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=v[H];return $===void 0&&($=new os,v[H]=$),$.getGripSpace()},this.getHand=function(H){let $=v[H];return $===void 0&&($=new os,v[H]=$),$.getHandSpace()};function K(H){let $=x.indexOf(H.inputSource);if($===-1)return;let te=v[$];te!==void 0&&te.dispatchEvent({type:H.type,data:H.inputSource})}function U(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",O);for(let H=0;H<v.length;H++){let $=x[H];$!==null&&(x[H]=null,v[H].disconnect($))}N=null,q=null,e.setRenderTarget(f),m=null,d=null,u=null,i=null,_=null,se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",U),i.addEventListener("inputsourceschange",O),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let $={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:m}),_=new Vt(m.framebufferWidth,m.framebufferHeight,{format:Bt,type:Kn,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let $=null,te=null,F=null;p.depth&&(F=p.stencil?35056:33190,$=p.stencil?Ei:Zn,te=p.stencil?Mi:Yn);let oe={colorFormat:32856,depthFormat:F,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(oe),i.updateRenderState({layers:[d]}),_=new Vt(d.textureWidth,d.textureHeight,{format:Bt,type:Kn,depthTexture:new Co(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});let ae=e.properties.get(_);ae.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(H){for(let $=0;$<H.removed.length;$++){let te=H.removed[$],F=x.indexOf(te);F>=0&&(x[F]=null,v[F].disconnect(te))}for(let $=0;$<H.added.length;$++){let te=H.added[$],F=x.indexOf(te);if(F===-1){for(let ae=0;ae<v.length;ae++)if(ae>=x.length){x.push(te),F=ae;break}else if(x[ae]===null){x[ae]=te,F=ae;break}if(F===-1)break}let oe=v[F];oe&&oe.connect(te)}}let I=new L,D=new L;function G(H,$,te){I.setFromMatrixPosition($.matrixWorld),D.setFromMatrixPosition(te.matrixWorld);let F=I.distanceTo(D),oe=$.projectionMatrix.elements,ae=te.projectionMatrix.elements,ue=oe[14]/(oe[10]-1),Q=oe[14]/(oe[10]+1),re=(oe[9]+1)/oe[5],me=(oe[9]-1)/oe[5],de=(oe[8]-1)/oe[0],be=(ae[8]+1)/ae[0],Te=ue*de,De=ue*be,Be=F/(-de+be),Ke=Be*-de;$.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ke),H.translateZ(Be),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let Xe=ue+Be,Ve=Q+Be,xt=Te-Ke,lt=De+(F-Ke),A=re*Q/Ve*Xe,b=me*Q/Ve*Xe;H.projectionMatrix.makePerspective(xt,lt,A,b,Xe,Ve)}function B(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;T.near=C.near=R.near=H.near,T.far=C.far=R.far=H.far,(N!==T.near||q!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),N=T.near,q=T.far);let $=H.parent,te=T.cameras;B(T,$);for(let oe=0;oe<te.length;oe++)B(te[oe],$);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),H.matrix.copy(T.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);let F=H.children;for(let oe=0,ae=F.length;oe<ae;oe++)F[oe].updateMatrixWorld(!0);te.length===2?G(T,R,C):T.projectionMatrix.copy(R.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.getPlanes=function(){return M};let W=null;function J(H,$){if(h=$.getViewerPose(l||a),g=$,h!==null){let te=h.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let F=!1;te.length!==T.cameras.length&&(T.cameras.length=0,F=!0);for(let oe=0;oe<te.length;oe++){let ae=te[oe],ue=null;if(m!==null)ue=m.getViewport(ae);else{let re=u.getViewSubImage(d,ae);ue=re.viewport,oe===0&&(e.setRenderTargetTextures(_,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(_))}let Q=y[oe];Q===void 0&&(Q=new Qe,Q.layers.enable(oe),Q.viewport=new We,y[oe]=Q),Q.matrix.fromArray(ae.transform.matrix),Q.projectionMatrix.fromArray(ae.projectionMatrix),Q.viewport.set(ue.x,ue.y,ue.width,ue.height),oe===0&&T.matrix.copy(Q.matrix),F===!0&&T.cameras.push(Q)}}for(let te=0;te<v.length;te++){let F=x[te],oe=v[te];F!==null&&oe!==void 0&&oe.update(F,$,l||a)}if(W&&W(H,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let te=null;for(let F of M)$.detectedPlanes.has(F)||(te===null&&(te=[]),te.push(F));if(te!==null)for(let F of te)M.delete(F),w.delete(F),n.dispatchEvent({type:"planeremoved",data:F});for(let F of $.detectedPlanes)if(!M.has(F))M.add(F),w.set(F,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:F});else{let oe=w.get(F);F.lastChangedTime>oe&&(w.set(F,F.lastChangedTime),n.dispatchEvent({type:"planechanged",data:F}))}}g=null}let se=new yl;se.setAnimationLoop(J),this.setAnimationLoop=function(H){W=H},this.dispose=function(){}}};Object.defineProperties(Bi.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});Po=class extends Bi{};Po.prototype.isWebGL1Renderer=!0;or=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}},vn=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}},ps=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=po,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Zt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},At=new L,ms=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gc=new L,Wc=new We,qc=new We,sg=new L,Xc=new Re,ar=class extends et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Re,this.bindMatrixInverse=new Re}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;Wc.fromBufferAttribute(i.attributes.skinIndex,e),qc.fromBufferAttribute(i.attributes.skinWeight,e),Gc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=qc.getComponent(s);if(a!==0){let o=Wc.getComponent(s);Xc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(sg.copy(Gc).applyMatrix4(Xc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},gs=class extends Je{constructor(){super(),this.isBone=!0,this.type="Bone"}},ti=class extends pt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=$e,h=$e,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},jc=new Re,rg=new Re,cr=class r{constructor(e=[],t=[]){this.uuid=Zt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:rg;jc.multiplyMatrices(o,t[s]),jc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=pl(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ti(t,e,e,Bt,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new gs),this.bones.push(a),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},xs=class extends ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Yc=new Re,Zc=new Re,Ws=[],og=new Re,$i=new et,lr=class extends et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,og)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Yc),Zc.multiplyMatrices(n,Yc),$i.matrixWorld=Zc,$i.raycast(e,Ws);for(let a=0,o=Ws.length;a<o;a++){let c=Ws[a];c.instanceId=s,c.object=this,t.push(c)}Ws.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},_s=class extends Pt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jc=new L,Kc=new L,$c=new Re,ao=new ds,qs=new Kt,Ii=class extends Je{constructor(e=new Ct,t=new _s){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Jc.fromBufferAttribute(t,i-1),Kc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Jc.distanceTo(Kc);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(i),qs.radius+=s,e.ray.intersectsSphere(qs)===!1)return;$c.copy(i).invert(),ao.copy(e.ray).applyMatrix4($c);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new L,h=new L,u=new L,d=new L,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){let _=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let x=_,M=v-1;x<M;x+=m){let w=g.getX(x),R=g.getX(x+1);if(l.fromBufferAttribute(f,w),h.fromBufferAttribute(f,R),ao.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let _=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let x=_,M=v-1;x<M;x+=m){if(l.fromBufferAttribute(f,x),h.fromBufferAttribute(f,x+1),ao.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},Qc=new L,el=new L,hr=class extends Ii{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Qc.fromBufferAttribute(t,i),el.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qc.distanceTo(el);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ur=class extends Ii{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ys=class extends Pt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tl=new Re,Io=new ds,Xs=new Kt,js=new L,Di=class extends Je{constructor(e=new Ct,t=new ys){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(i),Xs.radius+=s,e.ray.intersectsSphere(Xs)===!1)return;tl.copy(i).invert(),Io.copy(e.ray).applyMatrix4(tl);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=d,p=m;g<p;g++){let f=l.getX(g);js.fromBufferAttribute(u,f),nl(js,f,c,i,e,t,this)}}else{let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=d,p=m;g<p;g++)js.fromBufferAttribute(u,g),nl(js,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};dr=class extends pt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:nt,this.magFilter=s!==void 0?s:nt,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},Pn=class extends Pt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},on=class extends Pn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},fr=class extends Pt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new we(16777215),this.specular=new we(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};In=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Do=class extends In{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oc,endingEnd:oc}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ac:s=e,o=2*t-n;break;case cc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ac:a=e,c=2*n-t;break;case cc:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),p=g*g,f=p*g,_=-d*f+2*d*p-d*g,v=(1+d)*f+(-1.5-2*d)*p+(-.5+d)*g+1,x=(-1-m)*f+(1.5+m)*p+.5*g,M=m*f-m*p;for(let w=0;w!==o;++w)s[w]=_*a[h+w]+v*a[l+w]+x*a[c+w]+M*a[u+w];return s}},No=class extends In{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},Oo=class extends In{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Wt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ys(t,this.TimeBufferType),this.values=Ys(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ys(e.times,Array),values:Ys(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Do(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ri:t=this.InterpolantFactoryMethodDiscrete;break;case $n:t=this.InterpolantFactoryMethodLinear;break;case zr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ri;case this.InterpolantFactoryMethodLinear:return $n;case this.InterpolantFactoryMethodSmooth:return zr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=An(n,s,a),this.values=An(this.values,s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Sl(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=An(this.times),t=An(this.values),n=this.getValueSize(),i=this.getInterpolation()===zr,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let p=t[u+g];if(p!==t[d+g]||p!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=An(e,0,a),this.values=An(t,0,a*n)):(this.times=e,this.values=t),this}clone(){let e=An(this.times,0),t=An(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Wt.prototype.TimeBufferType=Float32Array;Wt.prototype.ValueBufferType=Float32Array;Wt.prototype.DefaultInterpolation=$n;Dn=class extends Wt{};Dn.prototype.ValueTypeName="bool";Dn.prototype.ValueBufferType=Array;Dn.prototype.DefaultInterpolation=Ri;Dn.prototype.InterpolantFactoryMethodLinear=void 0;Dn.prototype.InterpolantFactoryMethodSmooth=void 0;pr=class extends Wt{};pr.prototype.ValueTypeName="color";Nn=class extends Wt{};Nn.prototype.ValueTypeName="number";Fo=class extends In{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Mt.slerpFlat(s,0,a,l-o,a,l,c);return s}},an=class extends Wt{InterpolantFactoryMethodLinear(e){return new Fo(this.times,this.values,this.getValueSize(),e)}};an.prototype.ValueTypeName="quaternion";an.prototype.DefaultInterpolation=$n;an.prototype.InterpolantFactoryMethodSmooth=void 0;On=class extends Wt{};On.prototype.ValueTypeName="string";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=Ri;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;Fn=class extends Wt{};Fn.prototype.ValueTypeName="vector";mr=class{constructor(e,t=-1,n,i=Yh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Zt(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(lg(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Wt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=ag(c);c=il(c,1,h),l=il(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Nn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,m,g,p){if(m.length!==0){let f=[],_=[];Al(m,f,_,g),f.length!==0&&p.push(new u(d,f,_))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let p=0;p<d[g].morphTargets.length;p++)m[d[g].morphTargets[p]]=-1;for(let p in m){let f=[],_=[];for(let v=0;v!==d[g].morphTargets.length;++v){let x=d[g];f.push(x.time),_.push(x.morphTarget===p?1:0)}i.push(new Nn(".morphTargetInfluence["+p+"]",f,_))}c=m.length*a}else{let m=".bones["+t[u].name+"]";n(Fn,m+".position",d,"pos",i),n(an,m+".quaternion",d,"rot",i),n(Fn,m+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};Ni={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},zo=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},hg=new zo,zn=class{constructor(e){this.manager=e!==void 0?e:hg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},gn={},Uo=class extends Error{constructor(e,t){super(e),this.response=t}},vs=class extends zn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Ni.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(gn[e]!==void 0){gn[e].push({onLoad:t,onProgress:n,onError:i});return}gn[e]=[],gn[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=gn[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0,p=0,f=new ReadableStream({start(_){v();function v(){u.read().then(({done:x,value:M})=>{if(x)_.close();else{p+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let R=0,C=h.length;R<C;R++){let y=h[R];y.onProgress&&y.onProgress(w)}_.enqueue(M),v()}})}}});return new Response(f)}else throw new Uo(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{Ni.add(e,l);let h=gn[e];delete gn[e];for(let u=0,d=h.length;u<d;u++){let m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{let h=gn[e];if(h===void 0)throw this.manager.itemError(e),l;delete gn[e];for(let u=0,d=h.length;u<d;u++){let m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},ko=class extends zn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ni.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=us("img");function c(){h(),Ni.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}},gr=class extends zn{constructor(e){super(e)}load(e,t,n,i){let s=new pt,a=new ko(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Oi=class extends Je{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Fi=class extends Oi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},co=new Re,sl=new L,rl=new L,bs=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;sl.setFromMatrixPosition(e.matrixWorld),t.position.copy(sl),rl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rl),t.updateMatrixWorld(),co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bo=class extends bs{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=hs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},xr=class extends Oi{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Bo}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ol=new Re,Qi=new L,lo=new L,Ho=class extends bs{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Qi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qi),lo.copy(n.position),lo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(lo),n.updateMatrixWorld(),i.makeTranslation(-Qi.x,-Qi.y,-Qi.z),ol.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol)}},zi=class extends Oi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ho}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Vo=class extends bs{constructor(){super(new Ln(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cn=class extends Oi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new Vo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ui=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},_r=class extends zn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ni.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Ni.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}},Zo="\\[\\]\\.:\\/",ug=new RegExp("["+Zo+"]","g"),Jo="[^"+Zo+"]",dg="[^"+Zo.replace("\\.","")+"]",fg=/((?:WC+[\/:])*)/.source.replace("WC",Jo),pg=/(WCOD+)?/.source.replace("WCOD",dg),mg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jo),gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jo),xg=new RegExp("^"+fg+pg+mg+gg+"$"),_g=["material","materials","bones","map"],Go=class{constructor(e,t,n){let i=n||je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},je=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ug,"")}static parseTrackName(e){let t=xg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);_g.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=Go;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Kg=new Float32Array(1),ni=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"150"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="150")});function $o(r,e){if(e===dl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ms||e===vr){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Ms)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var Cl=Pr(()=>{Hi()});var Fl={};ih(Fl,{GLTFLoader:()=>ta});function yg(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Mg(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Pn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sn})),r.DefaultMaterial}function Ss(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function kn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wg(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Sg(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ag(r){let e=r.extensions&&r.extensions[ze.KHR_DRACO_MESH_COMPRESSION],t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Dl(e.attributes):t=r.indices+":"+Dl(r.attributes)+":"+r.mode,t}function Dl(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function wa(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Tg(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function Rg(r,e,t){let n=e.attributes,i=new Jt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){let h=wa(Vi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new L,c=new L;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){let p=wa(Vi[d.componentType]);c.multiplyScalar(p)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new Kt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Nl(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=Ma[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return kn(r,e),Rg(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?wg(r,e.targets,t):r})}var ta,ze,na,ia,sa,ra,oa,aa,ca,la,ha,ua,da,fa,pa,ma,ga,Ol,ws,Ll,xa,_a,ya,va,wr,vg,ba,qt,Vi,Pl,Il,Qo,Ma,Un,bg,ea,Eg,Sa,zl=Pr(()=>{Hi();Cl();ta=class extends zn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ra(t)}),this.register(function(t){return new da(t)}),this.register(function(t){return new fa(t)}),this.register(function(t){return new pa(t)}),this.register(function(t){return new aa(t)}),this.register(function(t){return new ca(t)}),this.register(function(t){return new la(t)}),this.register(function(t){return new ha(t)}),this.register(function(t){return new sa(t)}),this.register(function(t){return new ua(t)}),this.register(function(t){return new oa(t)}),this.register(function(t){return new na(t)}),this.register(function(t){return new ma(t)}),this.register(function(t){return new ga(t)})}load(e,t,n,i){let s=this,a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Ui.extractUrlBase(e),this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new vs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ol){try{a[ze.KHR_BINARY_GLTF]=new xa(e)}catch(u){i&&i(u);return}s=JSON.parse(a[ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Sa(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case ze.KHR_MATERIALS_UNLIT:a[u]=new ia;break;case ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new _a(s,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:a[u]=new ya;break;case ze.KHR_MESH_QUANTIZATION:a[u]=new va;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},na=class{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new we(16777215);c.color!==void 0&&h.fromArray(c.color);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new cn(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new zi(h),l.distance=u;break;case"spot":l=new xr(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,kn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},ia=class{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return mt}extendParams(e,t,n){let i=[];e.color=new we(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ie))}return Promise.all(i)}},sa=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},ra=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(o,o)}return Promise.all(s)}},oa=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},aa=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ie)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},ca=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},la=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new we(o[0],o[1],o[2]),Promise.all(s)}},ha=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},ua=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new we(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ie)),Promise.all(s)}},da=class{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},fa=class{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},pa=class{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ma=class{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(m){return m.buffer}):a.ready.then(function(){let m=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(m),h,u,d,i.mode,i.filter),m})})}else return null}},ga=class{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==qt.TRIANGLES&&l.mode!==qt.TRIANGLE_STRIP&&l.mode!==qt.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,m=[];for(let g of u){let p=new Re,f=new L,_=new Mt,v=new L(1,1,1),x=new lr(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&f.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&_.fromBufferAttribute(c.ROTATION,M),c.SCALE&&v.fromBufferAttribute(c.SCALE,M),x.setMatrixAt(M,p.compose(f,_,v));for(let M in c)M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);Je.prototype.copy.call(x,g),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),m.push(x)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}},Ol="glTF",ws=12,Ll={JSON:1313821514,BIN:5130562},xa=class{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ws),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ol)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ws,s=new DataView(e,ws),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===Ll.JSON){let l=new Uint8Array(e,ws+a,o);this.content=n.decode(l)}else if(c===Ll.BIN){let l=ws+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},_a=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Ma[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Ma[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],m=Vi[d.componentType];l[u]=m.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(let m in d.attributes){let g=d.attributes[m],p=c[m];p!==void 0&&(g.normalized=p)}u(d)},o,l)})})}},ya=class{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},va=class{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}},wr=class extends In{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,m=d*u,g=e*l,p=g-l,f=-2*m+3*d,_=m-d,v=1-f,x=_-d+u;for(let M=0;M!==o;M++){let w=a[p+M+o],R=a[p+M+c]*h,C=a[g+M+o],y=a[g+M]*h;s[M]=v*w+x*R+f*C+_*y}return s}},vg=new Mt,ba=class extends wr{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return vg.fromArray(s).normalize().toArray(s),s}},qt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Vi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pl={9728:$e,9729:nt,9984:Js,9985:qo,9986:ns,9987:Cn},Il={33071:Ft,33648:as,10497:Jn},Qo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ma={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Un={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},bg={CUBICSPLINE:void 0,LINEAR:$n,STEP:Ri},ea={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};Eg=new Re,Sa=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new gr(this.options.manager):this.textureLoader=new _r(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};Ss(s,o,i),kn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Ui.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Qo[i.type],o=Vi[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new ot(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=Qo[i.type],l=Vi[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,p,f;if(m&&m!==u){let _=Math.floor(d/m),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count,x=t.cache.get(v);x||(p=new l(o,_*m,i.count*m/h),x=new ps(p,m/h),t.cache.add(v,x)),f=new ms(x,c,d%m/h,g)}else o===null?p=new l(i.count*c):p=new l(o,d,i.count*c),f=new ot(p,c,g);if(i.sparse!==void 0){let _=Qo.SCALAR,v=Vi[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,w=new v(a[1],x,i.sparse.count*_),R=new l(a[2],M,i.sparse.count*c);o!==null&&(f=new ot(f.array.slice(),f.itemSize,f.normalized));for(let C=0,y=w.length;C<y;C++){let T=w[C];if(f.setX(T,R[C*c]),c>=2&&f.setY(T,R[C*c+1]),c>=3&&f.setZ(T,R[C*c+2]),c>=4&&f.setW(T,R[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"";let d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Pl[d.magFilter]||nt,h.minFilter=Pl[d.minFilter]||Cn,h.wrapS=Il[d.wrapS]||Jn,h.wrapT=Il[d.wrapT]||Jn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(p){let f=new pt(p);f.needsUpdate=!0,d(f)}),t.load(Ui.resolveURL(u,s.path),g,void 0,m)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||Tg(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[ze.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.encoding=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ys,Pt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new _s,Pt.prototype.copy.call(c,n),c.color.copy(n.color),this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Pn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[ze.KHR_MATERIALS_UNLIT]){let u=i[ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Ie)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=zt);let h=s.alphaMode||ea.OPAQUE;if(h===ea.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ea.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==mt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Se(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&a!==mt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==mt&&(o.emissive=new we().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==mt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ie)),Promise.all(l).then(function(){let u=new a(o);return s.name&&(u.name=s.name),kn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ss(i,u,s),u})}createUniqueName(e){let t=je.sanitizeNodeName(e||""),n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Nl(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Ag(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Nl(new Ct,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Mg(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let m=0,g=h.length;m<g;m++){let p=h[m],f=a[m],_,v=l[m];if(f.mode===qt.TRIANGLES||f.mode===qt.TRIANGLE_STRIP||f.mode===qt.TRIANGLE_FAN||f.mode===void 0)_=s.isSkinnedMesh===!0?new ar(p,v):new et(p,v),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),f.mode===qt.TRIANGLE_STRIP?_.geometry=$o(_.geometry,vr):f.mode===qt.TRIANGLE_FAN&&(_.geometry=$o(_.geometry,Ms));else if(f.mode===qt.LINES)_=new hr(p,v);else if(f.mode===qt.LINE_STRIP)_=new Ii(p,v);else if(f.mode===qt.LINE_LOOP)_=new ur(p,v);else if(f.mode===qt.POINTS)_=new Di(p,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(_.geometry.morphAttributes).length>0&&Sg(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),kn(_,s),f.extensions&&Ss(i,_,f),t.assignFinalMaterial(_),u.push(_)}for(let m=0,g=u.length;m<g;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return u[0];let d=new Ht;t.associations.set(d,{meshes:e});for(let m=0,g=u.length;m<g;m++)d.add(u[m]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qe(Lt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ln(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),kn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Re;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new cr(o,c)})}loadAnimation(e){let n=this.json.animations[e],i=[],s=[],a=[],o=[],c=[];for(let l=0,h=n.channels.length;l<h;l++){let u=n.channels[l],d=n.samplers[u.sampler],m=u.target,g=m.node,p=n.parameters!==void 0?n.parameters[d.input]:d.input,f=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",p)),a.push(this.getDependency("accessor",f)),o.push(d),c.push(m)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2],m=l[3],g=l[4],p=[];for(let _=0,v=h.length;_<v;_++){let x=h[_],M=u[_],w=d[_],R=m[_],C=g[_];if(x===void 0)continue;x.updateMatrix();let y;switch(Un[C.path]){case Un.weights:y=Nn;break;case Un.rotation:y=an;break;case Un.position:case Un.scale:default:y=Fn;break}let T=x.name?x.name:x.uuid,N=R.interpolation!==void 0?bg[R.interpolation]:$n,q=[];Un[C.path]===Un.weights?x.traverse(function(U){U.morphTargetInfluences&&q.push(U.name?U.name:U.uuid)}):q.push(T);let K=w.array;if(w.normalized){let U=wa(K.constructor),O=new Float32Array(K.length);for(let I=0,D=K.length;I<D;I++)O[I]=K[I]*U;K=O}for(let U=0,O=q.length;U<O;U++){let I=new y(q[U]+"."+Un[C.path],M.array,K,N);R.interpolation==="CUBICSPLINE"&&(I.createInterpolant=function(G){let B=this instanceof an?ba:wr;return new B(this.times,this.values,this.getValueSize()/3,G)},I.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(I)}}let f=n.name?n.name:"animation_"+e;return new mr(f,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,Eg)});for(let m=0,g=u.length;m<g;m++)h.add(u[m]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new gs:l.length>1?h=new Ht:l.length===1?h=l[0]:h=new Je,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),kn(h,s),s.extensions&&Ss(n,h,s),s.matrix!==void 0){let u=new Re;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Ht;n.name&&(s.name=i.createUniqueName(n.name)),kn(s,n),n.extensions&&Ss(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);let l=h=>{let u=new Map;for(let[d,m]of i.associations)(d instanceof Pt||d instanceof pt)&&u.set(d,m);return h.traverse(d=>{let m=i.associations.get(d);m!=null&&u.set(d,m)}),u};return i.associations=l(s),s})}}});Hi();Hi();var El={type:"change"},Ko={type:"start"},Rl={type:"end"},Mr=class extends rn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ii.ROTATE,MIDDLE:ii.DOLLY,RIGHT:ii.PAN},this.touches={ONE:si.ROTATE,TWO:si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",lt),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",lt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(El),n.update(),s=i.NONE},this.update=(function(){let E=new L,z=new Mt().setFromUnitVectors(e.up,new L(0,1,0)),fe=z.clone().invert(),le=new L,_e=new Mt,ve=2*Math.PI;return function(){let Pe=n.object.position;E.copy(Pe).sub(n.target),E.applyQuaternion(z),o.setFromVector3(E),n.autoRotate&&s===i.NONE&&T(C()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Ue=n.minAzimuthAngle,He=n.maxAzimuthAngle;return isFinite(Ue)&&isFinite(He)&&(Ue<-Math.PI?Ue+=ve:Ue>Math.PI&&(Ue-=ve),He<-Math.PI?He+=ve:He>Math.PI&&(He-=ve),Ue<=He?o.theta=Math.max(Ue,Math.min(He,o.theta)):o.theta=o.theta>(Ue+He)/2?Math.max(Ue,o.theta):Math.min(He,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),E.setFromSpherical(o),E.applyQuaternion(fe),Pe.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||le.distanceToSquared(n.object.position)>a||8*(1-_e.dot(n.object.quaternion))>a?(n.dispatchEvent(El),le.copy(n.object.position),_e.copy(n.object.quaternion),u=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",X),n.domElement.removeEventListener("pointerdown",Te),n.domElement.removeEventListener("pointercancel",Ke),n.domElement.removeEventListener("wheel",xt),n.domElement.removeEventListener("pointermove",De),n.domElement.removeEventListener("pointerup",Be),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",lt),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,a=1e-6,o=new ni,c=new ni,l=1,h=new L,u=!1,d=new Se,m=new Se,g=new Se,p=new Se,f=new Se,_=new Se,v=new Se,x=new Se,M=new Se,w=[],R={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function T(E){c.theta-=E}function N(E){c.phi-=E}let q=(function(){let E=new L;return function(fe,le){E.setFromMatrixColumn(le,0),E.multiplyScalar(-fe),h.add(E)}})(),K=(function(){let E=new L;return function(fe,le){n.screenSpacePanning===!0?E.setFromMatrixColumn(le,1):(E.setFromMatrixColumn(le,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(fe),h.add(E)}})(),U=(function(){let E=new L;return function(fe,le){let _e=n.domElement;if(n.object.isPerspectiveCamera){let ve=n.object.position;E.copy(ve).sub(n.target);let ye=E.length();ye*=Math.tan(n.object.fov/2*Math.PI/180),q(2*fe*ye/_e.clientHeight,n.object.matrix),K(2*le*ye/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(q(fe*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),K(le*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function O(E){n.object.isPerspectiveCamera?l/=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*E)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(E){n.object.isPerspectiveCamera?l*=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/E)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(E){d.set(E.clientX,E.clientY)}function G(E){v.set(E.clientX,E.clientY)}function B(E){p.set(E.clientX,E.clientY)}function W(E){m.set(E.clientX,E.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);let z=n.domElement;T(2*Math.PI*g.x/z.clientHeight),N(2*Math.PI*g.y/z.clientHeight),d.copy(m),n.update()}function J(E){x.set(E.clientX,E.clientY),M.subVectors(x,v),M.y>0?O(y()):M.y<0&&I(y()),v.copy(x),n.update()}function se(E){f.set(E.clientX,E.clientY),_.subVectors(f,p).multiplyScalar(n.panSpeed),U(_.x,_.y),p.copy(f),n.update()}function H(E){E.deltaY<0?I(y()):E.deltaY>0&&O(y()),n.update()}function $(E){let z=!1;switch(E.code){case n.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),z=!0;break}z&&(E.preventDefault(),n.update())}function te(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{let E=.5*(w[0].pageX+w[1].pageX),z=.5*(w[0].pageY+w[1].pageY);d.set(E,z)}}function F(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{let E=.5*(w[0].pageX+w[1].pageX),z=.5*(w[0].pageY+w[1].pageY);p.set(E,z)}}function oe(){let E=w[0].pageX-w[1].pageX,z=w[0].pageY-w[1].pageY,fe=Math.sqrt(E*E+z*z);v.set(0,fe)}function ae(){n.enableZoom&&oe(),n.enablePan&&F()}function ue(){n.enableZoom&&oe(),n.enableRotate&&te()}function Q(E){if(w.length==1)m.set(E.pageX,E.pageY);else{let fe=xe(E),le=.5*(E.pageX+fe.x),_e=.5*(E.pageY+fe.y);m.set(le,_e)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);let z=n.domElement;T(2*Math.PI*g.x/z.clientHeight),N(2*Math.PI*g.y/z.clientHeight),d.copy(m)}function re(E){if(w.length===1)f.set(E.pageX,E.pageY);else{let z=xe(E),fe=.5*(E.pageX+z.x),le=.5*(E.pageY+z.y);f.set(fe,le)}_.subVectors(f,p).multiplyScalar(n.panSpeed),U(_.x,_.y),p.copy(f)}function me(E){let z=xe(E),fe=E.pageX-z.x,le=E.pageY-z.y,_e=Math.sqrt(fe*fe+le*le);x.set(0,_e),M.set(0,Math.pow(x.y/v.y,n.zoomSpeed)),O(M.y),v.copy(x)}function de(E){n.enableZoom&&me(E),n.enablePan&&re(E)}function be(E){n.enableZoom&&me(E),n.enableRotate&&Q(E)}function Te(E){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",De),n.domElement.addEventListener("pointerup",Be)),ie(E),E.pointerType==="touch"?A(E):Xe(E))}function De(E){n.enabled!==!1&&(E.pointerType==="touch"?b(E):Ve(E))}function Be(E){ne(E),w.length===0&&(n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",De),n.domElement.removeEventListener("pointerup",Be)),n.dispatchEvent(Rl),s=i.NONE}function Ke(E){ne(E)}function Xe(E){let z;switch(E.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case ii.DOLLY:if(n.enableZoom===!1)return;G(E),s=i.DOLLY;break;case ii.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;B(E),s=i.PAN}else{if(n.enableRotate===!1)return;D(E),s=i.ROTATE}break;case ii.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;D(E),s=i.ROTATE}else{if(n.enablePan===!1)return;B(E),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ko)}function Ve(E){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;W(E);break;case i.DOLLY:if(n.enableZoom===!1)return;J(E);break;case i.PAN:if(n.enablePan===!1)return;se(E);break}}function xt(E){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(E.preventDefault(),n.dispatchEvent(Ko),H(E),n.dispatchEvent(Rl))}function lt(E){n.enabled===!1||n.enablePan===!1||$(E)}function A(E){switch(he(E),w.length){case 1:switch(n.touches.ONE){case si.ROTATE:if(n.enableRotate===!1)return;te(),s=i.TOUCH_ROTATE;break;case si.PAN:if(n.enablePan===!1)return;F(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case si.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ae(),s=i.TOUCH_DOLLY_PAN;break;case si.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ue(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ko)}function b(E){switch(he(E),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Q(E),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;re(E),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;de(E),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(E),n.update();break;default:s=i.NONE}}function X(E){n.enabled!==!1&&E.preventDefault()}function ie(E){w.push(E)}function ne(E){delete R[E.pointerId];for(let z=0;z<w.length;z++)if(w[z].pointerId==E.pointerId){w.splice(z,1);return}}function he(E){let z=R[E.pointerId];z===void 0&&(z=new Se,R[E.pointerId]=z),z.set(E.pageX,E.pageY)}function xe(E){let z=E.pointerId===w[0].pointerId?w[1]:w[0];return R[z.pointerId]}n.domElement.addEventListener("contextmenu",X),n.domElement.addEventListener("pointerdown",Te),n.domElement.addEventListener("pointercancel",Ke),n.domElement.addEventListener("wheel",xt,{passive:!1}),this.update()}};var Sr=new Map,ln;function Cg(r){if(!Sr.has(r)){let e=new Promise((t,n)=>{let i=document.createElement("script");i.src=r.replace(/\.glb$/,"-data.js"),i.onload=()=>{i.remove();let s=window.KAKEE_VIEWPORT_ASSETS?.[r];if(s){delete window.KAKEE_VIEWPORT_ASSETS[r];try{let a=atob(s),o=new Uint8Array(a.length);for(let c=0;c<o.length;c++)o[c]=a.charCodeAt(c);t(o.buffer)}catch(a){n(a)}}else n(new Error("Local model data is missing"))},i.onerror=()=>{i.remove(),n(new Error("Could not load local model data"))},document.head.append(i)}).catch(t=>{throw Sr.delete(r),t});Sr.set(r,e)}return Sr.get(r)}async function Lg(r,e){if(location.protocol==="file:")return Cg(r);let t=await fetch(r,{signal:e});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.arrayBuffer()}function Ul(r){let e=new Set;r?.traverse(t=>{t.geometry&&e.add(t.geometry);let n=Array.isArray(t.material)?t.material:[t.material];for(let i of n)if(i){for(let s of Object.values(i))s?.isTexture&&e.add(s);e.add(i)}}),e.forEach(t=>t.dispose())}function Ar(){if(!ln)return;let r=ln;ln=void 0,r.abort.abort(),r.observer?.disconnect(),r.controls?.dispose(),r.sourceMaterials?.forEach((e,t)=>{t.material=e}),r.clay?.dispose(),r.wire?.dispose(),r.environment?.dispose(),Ul(r.content),r.renderer?.dispose(),r.renderer?.domElement.remove()}function Pg(r){let e=new vn,t=new ei(1,1,1),n=new et(t,new mt({color:3817032,side:Rt}));n.scale.set(14,8,14),e.add(n);for(let[a,o,c,l,h,u,d]of[[0,3.8,0,6,.1,6,3.6],[-6.8,1,0,.1,4,6,2],[6.8,1.5,-2,.1,3,4,1.5],[0,1,6.8,5,3,.1,1.1]]){let m=new et(t,new mt({color:new we(1,1,1).multiplyScalar(d)}));m.position.set(a,o,c),m.scale.set(l,h,u),e.add(m)}let i=new Pi(r),s=i.fromScene(e,.035);return i.dispose(),t.dispose(),s}async function Ig(r){let{GLTFLoader:e}=await Promise.resolve().then(()=>(zl(),Fl));return new Promise((t,n)=>{new e().parse(r,"",i=>t(i.scene),n)})}async function kl({src:r,poster:e,title:t}){Ar();let n=document.querySelector("#viewportStage"),i=document.querySelector("#viewportStatus"),s=document.querySelector("#viewportPoster"),a=document.querySelector("#viewportReset"),o=[...document.querySelectorAll("[data-viewport-mode]")],c={abort:new AbortController};ln=c;let{signal:l}=c.abort;for(let u of o)u.disabled=!0,u.hidden=!1,u.setAttribute("aria-pressed",String(u.dataset.viewportMode==="clay"));a.disabled=!0,s.src=e,s.alt=t+" \uC791\uD488 \uC774\uBBF8\uC9C0",s.hidden=!1,i.textContent="3D \uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\u2026";try{let U=function(){let D=Lt.degToRad(y.fov/2),G=Math.min(D,Math.atan(Math.tan(D)*y.aspect));y.position.copy(N).multiplyScalar(v*1.08/Math.sin(G)),T.target.set(0,0,0),T.update(),q()},I=function(D){m.forEach((G,B)=>{B.material=D==="texture"?G:D==="wire"?c.wire:c.clay});for(let G of o)G.setAttribute("aria-pressed",String(G.dataset.viewportMode===D));i.textContent={texture:"Substance Painter\uC5D0\uC11C \uC791\uC5C5\uD55C \uD14D\uC2A4\uCC98\uB97C \uC785\uD78C \uBAA8\uB378\uC785\uB2C8\uB2E4.",wire:"\uC6F9\uC6A9 \uBAA8\uB378\uC758 \uC0BC\uAC01\uD615 \uBA54\uC2DC\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",clay:"\uBB34\uAD11 \uC7AC\uC9C8\uB85C \uBAA8\uB378\uC758 \uD615\uD0DC\uB97C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4."}[D],q()},u=await Lg(r,l);if(ln!==c)return;let d=await Ig(u);if(ln!==c){Ul(d);return}c.content=d;let m=new Map,g=!1;if(d.traverse(D=>{D.isMesh&&(m.set(D,D.material),[D.material].flat().some(G=>G?.map)&&(g=!0))}),!m.size)throw new Error("No meshes in model");c.sourceMaterials=m,c.clay=new Pn({color:11910088,roughness:.86}),c.wire=new mt({color:10147803,wireframe:!0});let f=new Jt().setFromObject(d).getBoundingSphere(new Kt);if(!Number.isFinite(f.radius)||f.radius<=0)throw new Error("Invalid model bounds");let _=new Ht;_.add(d),d.position.sub(f.center);let v=2.4;_.scale.setScalar(v/f.radius);let x=new vn;x.add(_),x.add(new Fi(15268095,3682364,1.4));let M=new cn(15267071,1.9);M.position.set(-3,5,6);let w=new cn(12432114,.85);w.position.set(5,2,-4),x.add(M,w);let R=new Bi({antialias:!0,alpha:!1});c.renderer=R,R.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),R.setClearColor(1119002),R.outputEncoding=Ie,c.environment=Pg(R),x.environment=c.environment.texture;let C=R.domElement;C.setAttribute("aria-label","3D \uBDF0\uD3EC\uD2B8. \uBC29\uD5A5\uD0A4\uB85C \uB3CC\uB9AC\uACE0, \uB354\uD558\uAE30\uC640 \uBE7C\uAE30\uB85C \uD655\uB300 \uB610\uB294 \uCD95\uC18C\uD569\uB2C8\uB2E4."),C.setAttribute("role","region"),C.tabIndex=0,n.append(C);let y=new Qe(40,1,.01,100),T=new Mr(y,C);c.controls=T,T.minDistance=.45,T.maxDistance=45;let N=new L(.25,.17,1).normalize(),q=()=>{ln===c&&R.render(x,y)},K=()=>{if(ln!==c)return;let D=Math.max(1,n.clientWidth),G=Math.max(1,n.clientHeight);R.setSize(D,G,!1),y.aspect=D/G,y.updateProjectionMatrix()};T.addEventListener("change",q);let O=!1;T.addEventListener("start",()=>{O=!0}),c.observer=new ResizeObserver(()=>{K(),O?q():U()}),c.observer.observe(n),a.addEventListener("click",U,{signal:l});for(let D of o)D.addEventListener("click",()=>I(D.dataset.viewportMode),{signal:l});C.addEventListener("keydown",D=>{let G=new ni().setFromVector3(y.position.clone().sub(T.target));switch(D.key){case"ArrowLeft":G.theta-=.16;break;case"ArrowRight":G.theta+=.16;break;case"ArrowUp":G.phi-=.12;break;case"ArrowDown":G.phi+=.12;break;case"+":case"=":G.radius*=.9;break;case"-":G.radius/=.9;break;default:return}D.preventDefault(),G.makeSafe(),G.radius=Lt.clamp(G.radius,T.minDistance,T.maxDistance),y.position.setFromSpherical(G).add(T.target),T.update(),q()},{signal:l}),C.addEventListener("webglcontextlost",h,{signal:l}),K(),U();for(let D of o)D.dataset.viewportMode==="texture"&&(D.hidden=!g);I(g?"texture":"clay"),s.hidden=!0,a.disabled=!1;for(let D of o)D.disabled=!1}catch(u){if(ln!==c||u.name==="AbortError")return;h(),console.warn("Project viewport unavailable:",u)}function h(){if(ln===c){Ar(),s.hidden=!1,a.disabled=!0;for(let u of o)u.disabled=!0;i.textContent="3D \uD654\uBA74\uC744 \uC5F4 \uC218 \uC5C6\uC5B4 \uC791\uD488 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4."}}}var Dg={foodtruck:{eyebrow:"3D / ENVIRONMENT & VEHICLE",title:"NEO TOKYO FOOD TRUCK",copy:"\uC218\uC871\uAD00\uC774 \uB2EC\uB9B0 \uD478\uB4DC\uD2B8\uB7ED\uC5D0\uC11C \uBB38\uC5B4 \uC694\uB9AC\uC0AC\uAC00 \uC74C\uC2DD\uC744 \uB0B4\uB193\uB294 \uC7A5\uBA74\uC785\uB2C8\uB2E4. \uCCAD\uB85D\uBE5B \uAC04\uD310\uACFC \uBD89\uC740 \uB4F1\uBD88\uC744 \uBC30\uCE58\uD55C \uCC28\uB7C9\uC744 360\uB3C4 \uC601\uC0C1\uC73C\uB85C \uB458\uB7EC\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",tools:["MAYA","ENVIRONMENT","360\xB0 RENDER"],videos:[{src:"media/works/food-truck.mp4",poster:"media/works/food-truck-poster.jpg",label:"360\xB0 RENDER \xB7 00:11"}]},classroom:{eyebrow:"3D / LIGHTING STUDY",title:"CLASSROOM",copy:"\uB0A1\uC740 \uAD50\uC2E4\uC758 \uD587\uBE5B, \uCD1B\uBD88, \uBD89\uC740 \uB4F1\uBD88\uC744 \uC870\uD569\uD55C \uB77C\uC774\uD305 \uC2A4\uD130\uB514\uC785\uB2C8\uB2E4. \uCC45\uC0C1 \uC0AC\uC774\uC5D0 \uB193\uC778 \uB9C8\uB124\uD0A4\uB124\uCF54\uC640 \uBD80\uC801\uC774 \uAC19\uC740 \uAD6C\uB3C4\uC758 \uB450 \uC0C9\uC870\uC5D0\uC11C \uC5B4\uB5BB\uAC8C \uBCF4\uC774\uB294\uC9C0 \uBE44\uAD50\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",tools:["MAYA","ENVIRONMENT","LIGHTING"],wide:!0,stills:[{src:"media/works/classroom-blue.jpg",label:"BLUE LIGHTING",alt:"\uCC28\uAC00\uC6B4 \uD478\uB978\uBE5B\uC774 \uD559\uAD50 \uCC45\uC0C1 \uC0AC\uC774\uB85C \uB4DC\uB294 \uAD50\uC2E4 \uB80C\uB354"}]},keychain:{eyebrow:"3D / PROP DESIGN",title:"KEYCHAIN",copy:"\uD3F4\uB354\uD3F0\uACFC \uC791\uC740 \uD0A4\uB9C1\uC744 \uBAA8\uB378\uB9C1\uD558\uACE0, \uC5B4\uB450\uC6B4 \uC2A4\uD29C\uB514\uC624\uC640 \uBE5B\uC774 \uBC88\uC9C0\uB294 \uBC30\uACBD\uC5D0\uC11C \uAC01\uAC01 \uB80C\uB354\uD588\uC2B5\uB2C8\uB2E4.",tools:["MAYA","PROP MODELING","LIGHTING"],viewport:{src:"assets/keychain.glb",poster:"media/works/keychain.jpg"},stills:[{src:"media/works/keychain.jpg",label:"STUDIO RENDER",alt:"\uD478\uB978\uBE5B\uC744 \uBC1B\uB294 \uD3F4\uB354\uD3F0\uACFC \uD0A4\uB9C1"},{src:"media/works/keychain-alt.jpg",label:"ALTERNATE LIGHTING",alt:"\uBB34\uC9C0\uAC2F\uBE5B \uBC30\uACBD\uC5D0 \uB193\uC778 \uD3F4\uB354\uD3F0\uACFC \uD0A4\uB9C1"},{src:"media/works/keychain-motion.jpg",label:"MOTION BACKDROP",alt:"\uD750\uB9BF\uD55C \uB179\uC0C9 \uBC30\uACBD \uC55E\uC5D0 \uB5A0 \uC788\uB294 \uD3F4\uB354\uD3F0\uACFC \uD0A4\uB9C1"},{src:"media/works/keychain-wire.jpg",label:"ORIGINAL WIREFRAME",alt:"\uD3F4\uB354\uD3F0\uACFC \uD0A4\uB9C1\uC758 \uC640\uC774\uC5B4\uD504\uB808\uC784 \uB80C\uB354"}]},"game-controller":{eyebrow:"3D / ENVIRONMENT & PROPS",title:"GAME CONTROLLER",copy:"\uD734\uB300\uC6A9 \uAC8C\uC784\uAE30\uC640 \uAC8C\uC784 \uD329, \uC2A4\uCF00\uC774\uD2B8\uBCF4\uB4DC, \uB531\uC9C0\uB85C \uAFB8\uBBFC \uACF5\uAC04\uC785\uB2C8\uB2E4. \uC6D0\uBCF8 \uC870\uBA85 \uB80C\uB354\uC640 VHS \uD6A8\uACFC\uB97C \uB354\uD55C \uBC84\uC804\uC744 \uD568\uAED8 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",tools:["MAYA","ENVIRONMENT","PROP MODELING"],viewport:{src:"assets/game-controller.glb",poster:"media/works/game-controller.jpg"},stills:[{src:"media/works/game-controller.jpg",label:"ORIGINAL RENDER",alt:"\uB530\uB73B\uD55C \uC870\uBA85 \uC544\uB798 \uAC8C\uC784\uAE30\uC640 \uC18C\uD488\uC774 \uB193\uC778 \uACF5\uAC04"},{src:"media/works/game-controller-vhs.jpg",label:"VHS COMPOSITE",alt:"VHS \uD6A8\uACFC\uB97C \uC801\uC6A9\uD55C \uAC8C\uC784\uAE30\uC640 \uBC29\uC758 \uB80C\uB354"},{src:"media/works/game-controller-study.jpg",label:"TEXTURE & CLAY",alt:"\uAC8C\uC784\uAE30 \uC7A5\uBA74\uC758 \uD14D\uC2A4\uCC98\uC640 \uD074\uB808\uC774 \uBE44\uAD50"},{src:"media/works/game-controller-wire.jpg",label:"WIREFRAME",alt:"\uAC8C\uC784\uAE30\uC640 \uC18C\uD488\uC774 \uB193\uC778 \uBC29\uC758 \uC640\uC774\uC5B4\uD504\uB808\uC784 \uB80C\uB354"}]},jonglu:{eyebrow:"3D / ARCHITECTURAL MODELING",title:"JONGLU",copy:"\uAE30\uC640\uC9C0\uBD95, \uACC4\uB2E8\uACFC \uB09C\uAC04, \uB0B4\uBD80\uC5D0 \uAC78\uB9B0 \uC885\uC744 \uBAA8\uB378\uB9C1\uD55C \uC885\uB8E8\uC785\uB2C8\uB2E4. 3D \uBDF0\uC5B4\uC5D0\uC11C \uC9C0\uBD95\uACFC \uAD6C\uC870\uB97C \uB458\uB7EC\uBCF4\uACE0, \uACE0\uD574\uC0C1\uB3C4 \uB80C\uB354\uC5D0\uC11C \uC885\uC758 \uD45C\uBA74\uC744 \uAC00\uAE4C\uC774 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",tools:["MAYA","ARCHITECTURAL MODELING","HIGH-POLY DETAIL"],viewport:{src:"assets/jonglu.glb",poster:"media/works/jonglu.jpg"},stills:[{src:"media/works/jonglu.jpg",label:"CLAY PREVIEW",alt:"\uAE30\uC640\uC9C0\uBD95\uACFC \uB09C\uAC04\uC774 \uBCF4\uC774\uB294 \uC885\uB8E8\uC758 \uD074\uB808\uC774 \uB80C\uB354"},{src:"media/works/jonglu-bell.jpg",label:"BELL DETAIL \xB7 CLAY PREVIEW",alt:"\uACE0\uD574\uC0C1\uB3C4 \uC885 \uBAA8\uB378\uC758 \uD615\uD0DC\uC640 \uD45C\uBA74\uC744 \uBCF4\uC5EC\uC8FC\uB294 \uD074\uB808\uC774 \uB80C\uB354"}]},guitar:{eyebrow:"3D / HARD-SURFACE MODELING",title:"GUITAR \xB7 CLAY STUDY",copy:"\uAE30\uD0C0\uC758 \uBAB8\uCCB4\uC5D0 \uAE30\uACC4 \uBD80\uD488\uC744 \uACB0\uD569\uD55C \uD558\uB4DC\uC11C\uD53C\uC2A4 \uBAA8\uB378\uB9C1\uC785\uB2C8\uB2E4. \uC55E\uB4A4 \uD074\uB808\uC774 \uB80C\uB354\uC5D0\uC11C \uAD6C\uC870\uC640 \uC5F0\uACB0\uBD80\uB97C \uC0B4\uD3B4\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",tools:["MAYA","HARD-SURFACE MODELING","CLAY STUDY"],viewport:{src:"assets/guitar.glb",poster:"media/works/guitar-clay.jpg"},stills:[{src:"media/works/guitar-clay.jpg",label:"FRONT \xB7 CLAY",alt:"\uAE30\uACC4\uC2DD \uAE30\uD0C0\uC758 \uC55E\uBA74 \uD074\uB808\uC774 \uB80C\uB354"},{src:"media/works/guitar-clay-back.jpg",label:"BACK \xB7 CLAY",alt:"\uAE30\uACC4\uC2DD \uAE30\uD0C0\uC758 \uB4B7\uBA74 \uD074\uB808\uC774 \uB80C\uB354"}]},nyarlathotep:{eyebrow:"SCULPTURE / NOMAD SCULPT \xB7 IPAD",title:"NYARLATHOTEP",copy:"\uBD88\uC548\uACFC \uACF5\uD3EC, \uC774\uC720 \uC5C6\uC774 \uBC00\uB824\uC624\uB294 \uBD88\uC548\uC815\uD55C \uAC10\uAC01\uC744 H. P. Lovecraft\uC758 \uC6B0\uC8FC\uC801 \uACF5\uD3EC\uC5D0\uC11C \uCD9C\uBC1C\uD574 \uC870\uD615\uC73C\uB85C \uD574\uC11D\uD588\uC2B5\uB2C8\uB2E4. Nomad Sculpt\uC640 iPad\uB85C \uB9CC\uB4E0 \uC785\uCCB4 \uC2A4\uD130\uB514\uC785\uB2C8\uB2E4.",tools:["NOMAD SCULPT","IPAD","3D SCULPTURE"],viewport:{src:"assets/nyarlathotep.glb",poster:"media/nyarlathotep.jpg"},stills:[{src:"media/nyarlathotep.jpg",label:"SCULPTURE",alt:"\uC5B4\uB450\uC6B4 \uBC30\uACBD\uC5D0 \uACE0\uB9AC\uD615 \uC2E4\uB8E8\uC5E3\uC744 \uB450\uB978 Nyarlathotep \uC870\uD615"}],source:"https://www.instagram.com/kakeekukeko/reel/DGa-LGnzRxI/"},heavener:{eyebrow:"IMAGE / FIREFLY \xD7 TOUCHDESIGNER",title:"HEAVENER",copy:"\uC6D0 \uAC8C\uC2DC\uBB3C\uC758 \uD06C\uB808\uB527\uC744 \uBCF4\uC874\uD558\uB294 Firefly\uC640 TouchDesigner \uAE30\uBC18\uC758 \uC624\uB514\uC624\uBE44\uC8FC\uC5BC \uC2E4\uD5D8\uC785\uB2C8\uB2E4. Project credit: @invent_animate.",tools:["ADOBE FIREFLY","TOUCHDESIGNER","AUDIOVISUAL","CREDIT: @INVENT_ANIMATE"],videos:[{src:"media/works/heavener.mp4",poster:"media/works/heavener-poster.jpg",label:"HEAVENER \xB7 00:28"},{src:"media/works/heavener-td.mp4",poster:"media/works/heavener-td-poster.jpg",label:"HEAVENER / TD \xB7 00:33"}],source:"https://www.instagram.com/kakeekukeko/reel/DKKcuMfTkjZ/"},revenant:{eyebrow:"AUDIOVISUAL / BLENDER \xD7 TOUCHDESIGNER",title:"REVENANT",copy:"Loathe\uC758 \uC74C\uC545\uC5D0\uC11C \uB5A0\uC624\uB978 \uC7A5\uBA74\uC744 \uBCF5\uB3C4\uC640 \uBD80\uC720\uD558\uB294 \uD615\uC0C1\uC73C\uB85C \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. Blender\uC5D0\uC11C \uBD84\uB9AC \uB80C\uB354\uD55C \uB77C\uC774\uD305 \uD328\uC2A4\uB97C TouchDesigner\uC5D0\uC11C \uC74C\uC545\uACFC \uC5F0\uACB0\uD588\uC2B5\uB2C8\uB2E4.",tools:["BLENDER","LIGHTING PASSES","TOUCHDESIGNER","AUDIOVISUAL"],videos:[{src:"media/works/revenant.mp4",poster:"media/works/revenant-poster.jpg",label:"REVENANT \xB7 01:50"}],files:[{href:"assets/Rev_1.115.toe",label:"TouchDesigner \uD504\uB85C\uC81D\uD2B8 \uC6D0\uBCF8 \xB7 .toe",note:"TouchDesigner\uC5D0\uC11C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC678\uBD80 \uCC38\uC870 \uBBF8\uB514\uC5B4\uC640 \uACBD\uB85C \uC124\uC815\uC740 \uBCC4\uB3C4\uB85C \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}],source:"https://www.instagram.com/kakeekukeko/reel/DdMRA8YJYF5/"},mo:{eyebrow:"MOTION / VIDEO STUDY",title:"mo",copy:"\uC6C0\uC9C1\uC784\uACFC \uC774\uBBF8\uC9C0\uC758 \uBCC0\uD654\uB97C \uB2F4\uC740 \uC601\uC0C1 \uC2A4\uD130\uB514. \uC774 \uC601\uC0C1\uC5D0\uB294 \uC624\uB514\uC624 \uD2B8\uB799\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.",tools:["MOTION","VIDEO"],videos:[{src:"media/works/mo.mp4",poster:"media/works/mo-poster.jpg",label:"mo \xB7 03:02 \xB7 SILENT"}]},ritual:{eyebrow:"AUDIOVISUAL / FILM",title:"RITUAL",copy:"Ritual \u2014 Kim Soyeon. \uC804\uCCB4 \uC601\uC0C1\uC744 \uC18C\uB9AC\uC640 \uD568\uAED8 \uAC10\uC0C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",tools:["AUDIOVISUAL","VIDEO"],wide:!0,videos:[{src:"media/works/ritual.mp4",poster:"media/works/ritual-poster.jpg",label:"RITUAL \xB7 01:50"}]},unreal:{eyebrow:"CINEMATIC / MAYA \u2192 UNREAL ENGINE 5",title:"SEQUENCE STUDY",copy:"Maya \uC5D0\uC14B\uC744 Unreal Engine 5\uC5D0 \uC784\uD3EC\uD2B8\uD558\uACE0 \uC2DC\uB124\uB9C8\uD2F1 \uC2DC\uD000\uC2A4\uB97C \uB9CC\uB4DC\uB294 \uC5F0\uC2B5\uC785\uB2C8\uB2E4. Translucency\xB7Opacity, Height \uB9F5, V-Ray \uBA38\uD2F0\uB9AC\uC5BC \uC778\uC2A4\uD134\uC2A4\uC640 UDIM\uC744 \uD0D0\uC0C9\uD588\uC2B5\uB2C8\uB2E4.",tools:["MAYA","UNREAL ENGINE 5","SEQUENCER","MATERIAL STUDY"],source:"https://www.instagram.com/kakeekukeko/reel/DP39RLCE8cB/"},station:{eyebrow:"ENVIRONMENT / IMAGE STUDY",title:"SHINJUKU, AFTER HOURS",copy:"\uD50C\uB7AB\uD3FC\uC5D0 \uB0A8\uC740 \uB179\uC0C9 \uBE5B\uACFC \uC816\uC740 \uBC18\uC0AC\uBA74\uC744 \uB2F4\uC740 \uD658\uACBD \uC774\uBBF8\uC9C0 \uC2A4\uD130\uB514\uC785\uB2C8\uB2E4. \uC774\uBBF8\uC9C0\uAC00 \uAC00\uC9C4 \uC870\uC6A9\uD55C \uC2DC\uAC04\uAC10\uC5D0 \uC9D1\uC911\uD588\uC2B5\uB2C8\uB2E4.",tools:["ENVIRONMENT","LIGHT","STUDY"],wide:!0,stills:[{src:"media/works/shinjuku-final.jpg",label:"FINAL \xB7 RETOUCHED",alt:"\uC816\uC740 \uBC14\uB2E5\uACFC \uB179\uC0C9 \uBE5B\uC774 \uB0A8\uC740 \uC2E0\uC8FC\uCFE0 \uC5ED \uD50C\uB7AB\uD3FC\uC758 \uCD5C\uC885 \uB80C\uB354"},{src:"media/works/shinjuku-render.jpg",label:"RENDER \xB7 BEFORE RETOUCH",alt:"\uB9AC\uD130\uCE58 \uC804 \uC2E0\uC8FC\uCFE0 \uC5ED \uD50C\uB7AB\uD3FC \uB80C\uB354"},{src:"media/works/shinjuku-wire.jpg",label:"WIREFRAME",alt:"\uC2E0\uC8FC\uCFE0 \uC5ED \uD50C\uB7AB\uD3FC \uC7A5\uBA74\uC758 \uC640\uC774\uC5B4\uD504\uB808\uC784 \uB80C\uB354"}],source:"https://www.instagram.com/kakeekukeko/p/DFmNmKnTHeH/"},lantern:{eyebrow:"OBJECT / MATERIAL STUDY",title:"FIELD LAMP",copy:"\uCC28\uAC00\uC6B4 \uAE08\uC18D \uD504\uB808\uC784\uACFC \uB530\uB73B\uD55C \uBC1C\uAD11 \uC18C\uC7AC\uC758 \uB300\uBE44\uB97C \uB2F4\uC740 \uC624\uBE0C\uC81D\uD2B8 \uC774\uBBF8\uC9C0 \uC2A4\uD130\uB514\uC785\uB2C8\uB2E4.",tools:["OBJECT","MATERIAL","LIGHT"],viewport:{src:"assets/lantern.glb",poster:"media/lantern-study.jpg"},stills:[{src:"media/works/lantern-desert.jpg",label:"SCENE \xB7 RED ROCK",alt:"\uBD89\uC740 \uBC14\uC704\uC640 \uD480 \uC0AC\uC774\uC5D0 \uB193\uC778 \uB79C\uD134 \uB80C\uB354"},{src:"media/works/lantern-detail.jpg",label:"DETAIL",alt:"\uB79C\uD134 \uC0C1\uB2E8\uC758 \uACC4\uAE30\uD310\uACFC \uC804\uAD6C\uB97C \uAC00\uAE4C\uC774 \uBCF8 \uB80C\uB354"},{src:"media/works/lantern-studio.jpg",label:"STUDIO",alt:"\uAC80\uC740 \uBC30\uACBD\uC758 \uB79C\uD134 \uC815\uBA74 \uB80C\uB354"},{src:"media/works/lantern-wire.jpg",label:"WIREFRAME",alt:"\uB79C\uD134\uC758 \uC640\uC774\uC5B4\uD504\uB808\uC784 \uB80C\uB354"},{src:"media/works/lantern-wire-scene.jpg",label:"WIREFRAME \xB7 SCENE",alt:"\uBC14\uC704 \uC9C0\uD615 \uC704 \uB79C\uD134 \uC7A5\uBA74\uC758 \uC640\uC774\uC5B4\uD504\uB808\uC784 \uB80C\uB354"}],source:"https://www.instagram.com/kakeekukeko/p/DF7SB5CzDtb/"}},Gi=document.querySelector("#projectDialog"),Vl=document.querySelector("#contactDialog"),Ng=document.querySelector("#projectEyebrow"),Og=document.querySelector("#projectTitle"),Fg=document.querySelector("#projectCopy"),zg=document.querySelector("#projectTools"),Bl=document.querySelector("#projectSource"),Aa=document.querySelector("#projectMedia"),Ug=document.querySelector("#projectFiles"),Gl=document.querySelector("#projectViewport");Gi?.addEventListener("close",()=>{Ar(),Gl.hidden=!0,Aa.querySelectorAll("video").forEach(r=>{r.pause(),r.removeAttribute("src"),r.load()}),Aa.replaceChildren()});function Wl(r){!r||r.open||r.showModal()}function ql(r){r?.open&&r.close()}document.querySelectorAll("[data-open-contact]").forEach(r=>{r.addEventListener("click",()=>Wl(Vl))});document.querySelectorAll("[data-close-dialog]").forEach(r=>{r.addEventListener("click",()=>ql(r.closest("dialog")))});[Gi,Vl].forEach(r=>{r?.addEventListener("click",e=>{e.target===r&&ql(r)})});var Ze;function kg(r,e){if(!Ze){Ze=document.createElement("dialog"),Ze.className="image-lightbox",Ze.setAttribute("aria-label","\uB80C\uB354 \uC774\uBBF8\uC9C0 \uC804\uCCB4 \uD654\uBA74"),Ze.innerHTML=`
      <div class="lightbox-stage"><img alt=""></div>
      <div class="lightbox-bar">
        <span class="lightbox-label"></span>
        <span class="lightbox-hint">\uC774\uBBF8\uC9C0 \uD074\uB9AD: \uC6D0\uBCF8 \uD06C\uAE30 \xB7 \u2190 \u2192 \uC774\uB3D9 \xB7 Esc \uB2EB\uAE30</span>
        <button type="button" class="lightbox-close" aria-label="\uC804\uCCB4 \uD654\uBA74 \uB2EB\uAE30">\xD7</button>
      </div>
      <button type="button" class="lightbox-step" data-step="-1" aria-label="\uC774\uC804 \uC774\uBBF8\uC9C0">\u2190</button>
      <button type="button" class="lightbox-step" data-step="1" aria-label="\uB2E4\uC74C \uC774\uBBF8\uC9C0">\u2192</button>`,document.body.append(Ze);let s=Ze.querySelector(".lightbox-stage"),a=s.querySelector("img");a.addEventListener("click",o=>{let c=a.getBoundingClientRect(),l=(o.clientX-c.left)/c.width,h=(o.clientY-c.top)/c.height;Ze.classList.toggle("is-actual")&&s.scrollTo(l*a.naturalWidth-s.clientWidth/2,h*a.naturalHeight-s.clientHeight/2)}),Ze.querySelector(".lightbox-close").addEventListener("click",()=>Ze.close()),Ze.querySelectorAll(".lightbox-step").forEach(o=>{o.addEventListener("click",()=>Ze.step(Number(o.dataset.step)))}),Ze.addEventListener("keydown",o=>{let c={ArrowLeft:-1,ArrowRight:1}[o.key];c&&(o.preventDefault(),Ze.step(c))}),Ze.addEventListener("click",o=>{o.target===Ze&&Ze.close()})}let t=Ze.querySelector("img"),n=e,i=()=>{let s=r[n];Ze.classList.remove("is-actual"),t.src=s.src,t.alt=s.alt,Ze.querySelector(".lightbox-label").textContent=`${s.label}${r.length>1?`  ${n+1} / ${r.length}`:""}`};Ze.step=s=>{n=(n+s+r.length)%r.length,i()},Ze.classList.toggle("is-single",r.length<2),i(),Ze.open||Ze.showModal()}function Bg(r,e){if(!e||matchMedia("(prefers-reduced-motion: reduce)").matches||!r.animate)return;let t=e.getBoundingClientRect(),n=r.getBoundingClientRect();if(!t.width||!n.width)return;let i="cubic-bezier(.2,.8,.2,1)";r.animate([{clipPath:`inset(${t.top-n.top}px ${n.right-t.right}px ${n.bottom-t.bottom}px ${t.left-n.left}px round 10px)`},{clipPath:"inset(0 0 0 0 round 0px)"}],{duration:620,easing:i}),[...r.querySelector(".dialog-frame").children].filter(s=>!s.hidden).forEach((s,a)=>{s.animate([{transform:"translateY(18px)",opacity:0},{transform:"none",opacity:1}],{duration:520,delay:160+a*45,easing:i,fill:"backwards"})})}function Ta(r,e){let t=Dg[r];if(!t||!Gi)return;Ng.textContent=t.eyebrow,Og.textContent=t.title,Fg.textContent=t.copy,zg.replaceChildren(...t.tools.map(i=>{let s=document.createElement("span");return s.textContent=i,s})),Ug.replaceChildren(...(t.files||[]).map(i=>{let s=document.createElement("div"),a=document.createElement("a");if(a.href=i.href,a.download="",a.textContent=`${i.label} \u2193`,s.append(a),i.note){let o=document.createElement("p");o.textContent=i.note,s.append(o)}return s}));let n=(t.stills||[]).map((i,s,a)=>{let o=document.createElement("figure"),c=document.createElement("figcaption");c.textContent=i.label;let l=document.createElement("button");l.type="button",l.className="still-open",l.setAttribute("aria-label",`${i.label} \uC804\uCCB4 \uD654\uBA74\uC73C\uB85C \uBCF4\uAE30`);let h=document.createElement("img");return h.src=i.src,h.alt=i.alt,h.loading="lazy",l.append(h,Object.assign(document.createElement("span"),{className:"still-hint",textContent:"\uC804\uCCB4 \uD654\uBA74 \u2197"})),l.addEventListener("click",()=>kg(a,s)),o.append(c,l),o});Gi.classList.toggle("is-wide",!!t.wide),Aa.replaceChildren(...n,...(t.videos||[]).map(i=>{let s=document.createElement("figure"),a=document.createElement("figcaption");a.textContent=i.label;let o=document.createElement("video");o.controls=!0,o.playsInline=!0,o.preload="none",o.src=i.src,i.poster&&(o.poster=i.poster),o.setAttribute("aria-label",i.label);let c=document.createElement("a");return c.href=i.src,c.textContent="\uC601\uC0C1 \uD30C\uC77C \uC5F4\uAE30",o.append(c),s.append(a,o),s})),Bl.hidden=!t.source,t.source&&(Bl.href=t.source),Gl.hidden=!t.viewport,Wl(Gi),Bg(Gi,e),t.viewport&&kl({...t.viewport,title:t.title})}document.querySelectorAll(".work-card__button[data-project], .work-card[data-project] .work-card__button").forEach(r=>{r.addEventListener("click",()=>Ta(r.closest(".work-card").dataset.project,r))});var As=[...document.querySelectorAll(".work-category-link[data-filter]")];if(As.length){let i=function(){let s=As.find(o=>o.hash===window.location.hash)||As[0],a=n.get(s);As.forEach(o=>{o===s?o.setAttribute("aria-current","true"):o.removeAttribute("aria-current")}),r.forEach(o=>{o.hidden=!a.has(o)}),e.textContent=s.dataset.categoryTitle,t.textContent=`${String(a.size).padStart(2,"0")} PROJECTS`},r=[...document.querySelectorAll(".work-card[data-categories]")],e=document.querySelector("#work-title"),t=document.querySelector(".work-count"),n=new Map;As.forEach(s=>{let a=s.dataset.filter,o=r.filter(c=>a==="all"||c.dataset.categories.split(/\s+/).includes(a));n.set(s,new Set(o)),s.querySelector(".work-category-count").textContent=String(o.length).padStart(2,"0")}),window.addEventListener("hashchange",i),i()}var Hg=document.querySelector("#copyEmail"),Hl=document.querySelector("#copyFeedback");Hg?.addEventListener("click",async()=>{try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText("sfinert@gmail.com");else{let r=document.createElement("textarea");r.value="sfinert@gmail.com",r.style.position="fixed",r.style.opacity="0",document.body.append(r),r.select(),document.execCommand("copy"),r.remove()}Hl.textContent="COPIED \u2014 sfinert@gmail.com"}catch{Hl.textContent="PLEASE EMAIL sfinert@gmail.com"}});var Xl=new IntersectionObserver(r=>{r.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-visible"),Xl.unobserve(e.target))})},{threshold:.08});document.querySelectorAll(".work-card").forEach(r=>Xl.observe(r));var jl=new IntersectionObserver(r=>{r.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-in"),jl.unobserve(e.target))})},{threshold:.25});document.querySelectorAll("[data-reveal]").forEach(r=>jl.observe(r));Hi();var Yl=document.querySelector(".hero");Yl&&Vg(Yl);function Vg(r){let e=r.querySelector(".hero__stage"),t=r.querySelector(".hero__frame"),n=r.querySelector("#heroField"),i=r.querySelector("#heroVideo"),s=r.querySelector(".hero__play"),a=r.querySelector(".hero__sound"),o=matchMedia("(prefers-reduced-motion: reduce)"),c=e.getBoundingClientRect().bottom>0,l=!0,h,u=0,d,m=!1;i.volume=.22;function g(){let _=i.paused?"\uC7AC\uC0DD":"\uC77C\uC2DC\uC815\uC9C0",v=i.muted?"\uC18C\uB9AC \uCF1C\uAE30":"\uC18C\uB9AC \uB044\uAE30";r.toggleAttribute("data-playing",!i.paused),r.toggleAttribute("data-audible",!i.muted),s.title=_,s.setAttribute("aria-label",_),a.title=v,a.setAttribute("aria-label",v)}function p(_=!0){let v=++u;if(!c||!l||document.hidden||!(h??!o.matches)){i.paused||i.pause(),g();return}i.play().catch(x=>{v===u&&(_&&x.name==="NotAllowedError"&&!i.muted?(i.muted=!0,g(),i.play().catch(g)):g())})}s.addEventListener("click",()=>{h=i.paused,p(!1)}),a.addEventListener("click",()=>{i.muted=!i.muted,i.muted||(h=!0,p(!1)),g()});for(let _ of["play","pause","volumechange"])i.addEventListener(_,g);document.addEventListener("visibilitychange",()=>{p(),d?.requestDraw()}),window.addEventListener("pagehide",()=>{l=!1,p()}),window.addEventListener("pageshow",_=>{_.persisted&&(l=!0,p(),d?.requestDraw())}),new IntersectionObserver(([_])=>{c=_.intersectionRatio>=.12,p(),d?.requestDraw()},{threshold:.12}).observe(e);function f(){if(o.matches){n.hidden=!0,r.removeAttribute("data-scene");return}if(d)n.hidden=!1,d.requestDraw();else if(window.REVENANT_CORRIDOR)try{d=jg(window.REVENANT_CORRIDOR,{hero:r,stage:e,frame:t,canvas:n,video:i,isVisible:()=>c&&l&&!o.matches}),n.hidden=!1,d.requestDraw()}catch(_){console.warn("Revenant 3D scene unavailable:",_)}else if(!m){m=!0;let _=document.createElement("script");_.src="assets/revenant-corridor-data.js",_.fetchPriority="low",_.addEventListener("load",f,{once:!0}),document.head.append(_)}}t.addEventListener("pointermove",_=>d?.move(_),{passive:!0}),t.addEventListener("pointerdown",_=>d?.move(_),{passive:!0});for(let _ of["pointerleave","pointercancel","pointerup"])t.addEventListener(_,()=>d?.release(),{passive:!0});o.addEventListener("change",()=>{p(),f()}),g(),p(),f()}function Gg({subject:r,corridor:e}){let t=r.points.slice(),n=[],i=617,s=()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296);for(let h=0;h<t.length;h+=3)n.push(1,.25+s()*.75,s());let a=e.floorBounds[0][1];for(let h=0;h<r.points.length;h+=12){let[u,d,m]=r.points.slice(h,h+3);t.push(u,a*2-d,m),n.push(2,.3+s()*.7,s())}let{min:o,max:c}=e.walkBounds;for(let h=0;h<2650;h++){let u=h%2?o[0]:c[0],d=h%3?Lt.lerp(u,r.center[0],s()**2*.6):Lt.lerp(o[0],c[0],s()),m=Lt.lerp(o[1]+.08,c[1]-.09,s()),g=Lt.lerp(o[2],c[2],s());t.push(d,m,g),n.push(0,.22+s()*.78,s())}let l=new Ct;return l.setAttribute("position",new bt(t,3)),l.setAttribute("aState",new bt(n,3)),l}var qe=256,gt=144;function Ea(r,e){let t=new Float32Array(r.length),n=new Float32Array(r.length);for(let i=0;i<gt;i++)for(let s=0;s<qe;s++){let a=0;for(let o=Math.max(0,s-e);o<=Math.min(qe-1,s+e);o++)a=Math.max(a,r[i*qe+o]);t[i*qe+s]=a}for(let i=0;i<gt;i++)for(let s=0;s<qe;s++){let a=0;for(let o=Math.max(0,i-e);o<=Math.min(gt-1,i+e);o++)a=Math.max(a,t[o*qe+s]);n[i*qe+s]=a}return n}function Zl(r,e){let t=e*2+1,n=new Float32Array(r.length),i=new Float32Array(r.length);for(let s=0;s<gt;s++)for(let a=0;a<qe;a++){let o=0;for(let c=-e;c<=e;c++)o+=r[s*qe+Math.min(qe-1,Math.max(0,a+c))];n[s*qe+a]=o/t}for(let s=0;s<gt;s++)for(let a=0;a<qe;a++){let o=0;for(let c=-e;c<=e;c++)o+=n[Math.min(gt-1,Math.max(0,s+c))*qe+a];i[s*qe+a]=o/t}return i}function Wg(r,e){let t=[{width:qe,height:gt,color:r,weight:e}];for(;t.at(-1).width>1||t.at(-1).height>1;){let n=t.at(-1),i=Math.ceil(n.width/2),s=Math.ceil(n.height/2),a={width:i,height:s,color:new Float32Array(i*s*3),weight:new Float32Array(i*s)};for(let o=0;o<s;o++)for(let c=0;c<i;c++){let l=0,h=0,u=0,d=0;for(let g=0;g<2;g++)for(let p=0;p<2;p++){let f=c*2+p,_=o*2+g;if(f>=n.width||_>=n.height)continue;let v=_*n.width+f,x=n.weight[v];l+=x,h+=n.color[v*3]*x,u+=n.color[v*3+1]*x,d+=n.color[v*3+2]*x}let m=o*i+c;a.weight[m]=Math.min(1,l),l>0&&(a.color[m*3]=h/l,a.color[m*3+1]=u/l,a.color[m*3+2]=d/l)}t.push(a)}for(let n=t.length-2;n>=0;n--){let i=t[n],s=t[n+1];for(let a=0;a<i.height;a++)for(let o=0;o<i.width;o++){let c=a*i.width+o,l=i.weight[c];if(l>=1)continue;let h=Math.min(s.width-1,Math.max(0,(o+.5)/2-.5)),u=Math.min(s.height-1,Math.max(0,(a+.5)/2-.5)),d=Math.floor(h),m=Math.floor(u),g=Math.min(s.width-1,d+1),p=Math.min(s.height-1,m+1),f=h-d,_=u-m;for(let v=0;v<3;v++){let x=(w,R)=>s.color[(R*s.width+w)*3+v],M=(x(d,m)*(1-f)+x(g,m)*f)*(1-_)+(x(d,p)*(1-f)+x(g,p)*f)*_;i.color[c*3+v]=i.color[c*3+v]*l+M*(1-l)}i.weight[c]=1}}return r}function qg(r,e,t){let n=qe*gt,i=new Float32Array(n),s=new Float32Array(n),a=new L;for(let M=0;M<r.length;M+=3)for(let[w,R]of[[i,r[M+1]],[s,e*2-r[M+1]]]){a.set(r[M],R,r[M+2]).applyMatrix4(t);let C=Math.floor((a.x*.5+.5)*qe),y=Math.floor((a.y*.5+.5)*gt);C>=0&&C<qe&&y>=0&&y<gt&&(w[y*qe+C]=1)}let o=Ea(s,6),c=Ea(i,4).map((M,w)=>Math.max(M,o[w])),l=Zl(Zl(c,2),2),u=Ea(c,9).map(M=>M>0?0:1),d=new Uint8Array(n*4);l.forEach((M,w)=>{d[w*4]=Math.round(Math.min(1,M*1.5)*255)});let m=new ti(d,qe,gt);m.magFilter=m.minFilter=nt,m.needsUpdate=!0;let g=new Uint8Array(n*4),p=new ti(g,qe,gt);p.magFilter=p.minFilter=nt;let f=document.createElement("canvas");f.width=qe,f.height=gt;let _=f.getContext("2d",{willReadFrequently:!0}),v=new Float32Array(n*3);function x(M){_.drawImage(M,0,0,qe,gt);let w=_.getImageData(0,0,qe,gt).data;for(let C=0;C<gt;C++){let y=gt-1-C;for(let T=0;T<qe;T++){let N=(C*qe+T)*4,q=y*qe+T;v[q*3]=w[N],v[q*3+1]=w[N+1],v[q*3+2]=w[N+2]}}let R=Wg(v,u.slice());for(let C=0;C<n;C++)g[C*4]=R[C*3],g[C*4+1]=R[C*3+1],g[C*4+2]=R[C*3+2],g[C*4+3]=255;p.needsUpdate=!0}return{mask:m,fill:p,refresh:x}}function Xg(r,e,t,n,i,s){let a=[],o=new Qe(e.verticalFov,e.aspect,.3,60);o.position.copy(t),o.quaternion.copy(n),o.updateMatrixWorld(),o.updateProjectionMatrix();let c=new Vt(1280,720,{stencilBuffer:!1,minFilter:$e,magFilter:$e}),l=new ti(new Uint8Array(4),1,1);l.needsUpdate=!0;let h={uProjTex:{value:l},uProjDepth:{value:c.texture},uProjMatrix:{value:new Re().multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse)},uProjPos:{value:o.position.clone()},uProjFar:{value:o.far},uProjMix:{value:0},uProjMask:{value:l},uProjFill:{value:l}},u=qg(i.points,s,h.uProjMatrix.value),d,m=-1;function g(v,x){let M=v.onBeforeCompile;v.customProgramCacheKey=()=>"video-projection-"+x,v.onBeforeCompile=(w,R)=>{M.call(v,w,R),Object.assign(w.uniforms,h),w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vProjWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vProjWorld = (modelMatrix * vec4(transformed, 1.)).xyz;`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
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
          gl_FragColor.rgb = mix(gl_FragColor.rgb, linearToOutputTexel(vec4(projLinear, 1.)).rgb, projWeight);`)},v.needsUpdate=!0}function p(v,x){a.forEach(g);let M=new Gt({side:zt,uniforms:{uProjPos:h.uProjPos,uProjFar:h.uProjFar},vertexShader:`
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
        }`}),w=x.background;x.background=null,x.overrideMaterial=M,v.setRenderTarget(c),v.setClearColor(16777215,1),v.clear(),v.render(x,o),v.setRenderTarget(null),x.overrideMaterial=null,x.background=w,M.dispose()}function f(){if(d!==void 0||r.readyState<2)return d;try{let v=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});v.drawImage(r,0,0,1,1),v.getImageData(0,0,1,1),d=!0}catch{d=!1}if(d){let v=new dr(r);v.minFilter=nt,v.generateMipmaps=!1,h.uProjTex.value=v}return d}function _(v,x){let M=f();h.uProjMix.value+=((M?1:0)-h.uProjMix.value)*v,!(!M||!x||r.currentTime===m)&&(m=r.currentTime,u.refresh(r),h.uProjMask.value=u.mask,h.uProjFill.value=u.fill)}return{materials:a,attach:p,update:_}}function jg(r,{hero:e,stage:t,frame:n,canvas:i,video:s,isVisible:a}){ft.enabled=!0;let o=new Bi({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"});o.outputEncoding=Ie,o.setPixelRatio(Math.min(devicePixelRatio||1,1.4)),o.autoClear=!1;let{camera:c,subject:l}=r,h=new Qe(c.verticalFov,c.aspect,.075,80),u=new L(...c.position),d=new Mt(...c.quaternion).normalize(),m=new L(0,0,-1).applyQuaternion(d),g=new Se,p=new Se,f=new vn;f.background=new we(2634564),f.fog=new or(3754589,14,41);let _={floor:{color:3160647,shininess:34,specular:2504265},wall:{color:6648190,shininess:26,specular:2700357},door:{color:2634822,shininess:35,specular:2634823},detail:{color:5069674,shininess:32},fixture:{color:10204349,emissive:9218239,emissiveIntensity:.48},mirror:{color:7901605,emissive:6522780,emissiveIntensity:.57}},v=Xg(s,c,u,d,l,r.corridor.floorBounds[0][1]),x=u.z-1;for(let{kind:re,positions:me}of r.meshes){let de=[];for(let De=0;De<me.length;De+=9)if(!(me[De+2]>x&&me[De+5]>x&&me[De+8]>x))for(let Be=0;Be<9;Be++)de.push(me[De+Be]);let be=new Ct;be.setAttribute("position",new bt(de,3)),be.computeVertexNormals();let Te=new fr({..._[re],side:zt});v.materials.push(Te),re==="floor"&&(Te.onBeforeCompile=De=>{De.vertexShader=De.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vFloorPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFloorPosition = position.xz;`),De.fragmentShader=De.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFloorPosition;`).replace("#include <output_fragment>",`
            vec2 floorLight = (vFloorPosition - vec2(-1.0, -19.0)) * vec2(.45, .09);
            float reflection = exp(-dot(floorLight, floorLight));
            outgoingLight += reflection * vec3(.065, .095, .14);
            #include <output_fragment>
          `)}),f.add(new et(be,Te))}let M=new mt({color:3226441});M.onBeforeCompile=re=>{re.vertexShader=re.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vPanelPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vPanelPosition = position.xz;`),re.fragmentShader=re.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vPanelPosition;`).replace("#include <color_fragment>",`
        #include <color_fragment>
        vec2 panels = (vPanelPosition - vec2(-2.2263, .4825)) / vec2(1.18, .6024);
        vec2 dist = .5 - abs(fract(panels) - .5);
        vec2 edge = smoothstep(vec2(.003), vec2(.017) + fwidth(panels), dist);
        float pattern = fract(sin(dot(floor(panels), vec2(31.72, 73.15))) * 4313.72);
        diffuseColor.rgb *= (.9 + .15 * pattern) * mix(.39, 1.0, edge.x * edge.y);
      `)};let w=new Li(12.25,31.6);w.rotateX(Math.PI/2).translate(-1,3.53,-10.95),f.add(new et(w,M)),v.materials.push(M),v.attach(o,f),f.add(new Fi(13886964,5530229,.77));let R=new cn(14742015,.61);R.position.set(-1.2,7,3),f.add(R);let C=new cn(12829423,.3);C.position.set(3,1,-18),f.add(C);let y=new zi(12706029,.66,24);y.position.set(l.center[0],2.55,-22),f.add(y);let T=new vn,N={uTime:{value:0},uPointer:{value:g},uPointerStrength:{value:0},uWholeScene:{value:0},uAspect:{value:1},uPixelRatio:{value:o.getPixelRatio()},uAudio:{value:new L},uSubject:{value:new L(...l.center)}},q=new Gt({uniforms:N,transparent:!0,depthTest:!1,depthWrite:!1,blending:Zs,vertexShader:`
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
      }`}),K=new Di(Gg(r),q);K.frustumCulled=!1,T.add(K);let U=new Vt(1,1,{stencilBuffer:!1}),O=new vn,I=new Ln(-1,1,1,-1,0,2);I.position.z=1;let D=new mt({map:U.texture,transparent:!0,depthTest:!1,depthWrite:!1});O.add(new et(new Li(2,2),D));let G=0,B=0,W,J=0,se=0,H=1,$=1,te=new L;function F(re){if(J=0,i.hidden||!a()||document.hidden){se=0;return}let me=se?Math.min(.05,(re-se)/1e3):1/60;se=re;let de=1-Math.exp(-me*8),be=Lt.clamp(-e.getBoundingClientRect().top/$,0,1);W??(W=be),W+=(be-W)*de;let Te=Lt.smoothstep(W,.075,.32),De=Lt.smoothstep(W,.072,1);e.toggleAttribute("data-entered",be>.06),e.toggleAttribute("data-scene",Te>.98),g.lerp(p,de),G+=(B-G)*de,N.uTime.value+=me,N.uPointerStrength.value=G,N.uWholeScene.value=Te,v.update(de,Te>0);let Be=!s.paused&&window.REVENANT_HERO?.bands[Math.floor(s.currentTime*30)];Be?N.uAudio.value.lerp(te.set(Be[0],Be[1],Be[2]).multiplyScalar(1/255),de):N.uAudio.value.multiplyScalar(1-de),h.position.copy(u).addScaledVector(m,De*(h.aspect<.84?3.5:5.2)),h.position.x+=g.x*G*Te*.17,h.position.y+=g.y*G*Te*.085,h.quaternion.copy(d),h.rotateY(-g.x*G*Te*.035),h.rotateX(g.y*G*Te*.022),o.setRenderTarget(null),o.setClearColor(0,0),o.clear(),Te>=.999?o.render(f,h):Te>0&&(o.setRenderTarget(U),o.render(f,h),o.setRenderTarget(null),D.opacity=Te,o.render(O,I)),o.render(T,h),oe()}function oe(){!J&&!i.hidden&&a()&&!document.hidden&&(J=requestAnimationFrame(F))}function ae(){let re=t.clientWidth;H=Math.max(1,t.clientHeight),$=Math.max(1,e.offsetHeight-H),o.setSize(re,H,!1);let me=o.getDrawingBufferSize(new Se);U.setSize(me.x,me.y),h.aspect=re/H;let de=Lt.degToRad(c.verticalFov/2),be=Math.max(1,h.aspect/c.aspect);h.fov=2*Lt.radToDeg(Math.atan(Math.tan(de)/be)),h.updateProjectionMatrix(),N.uAspect.value=h.aspect,oe()}function ue(re){if(i.hidden)return;let me=n.getBoundingClientRect();p.set((re.clientX-me.left)/me.width*2-1,1-(re.clientY-me.top)/me.height*2),!B&&G<.01&&g.copy(p),B=1,oe()}i.addEventListener("webglcontextlost",()=>{i.hidden=!0,e.removeAttribute("data-scene")},{once:!0});let Q=new ResizeObserver(ae);return Q.observe(t),Q.observe(e),ae(),{move:ue,release(){B=0},requestDraw:oe}}var Jl=document.querySelector(".works-reel");Jl&&Yg(Jl);function Yg(r){let e=r.querySelector(".reel-stage"),t=r.querySelector(".reel-world"),[n,i]=r.querySelectorAll(".reel-line"),s=r.querySelector(".reel-caption"),a=r.querySelector(".reel-status"),o=r.querySelector(".reel-label"),c=document.querySelector("#projectDialog"),l=matchMedia("(prefers-reduced-motion: reduce)"),h=new Set(["revenant","ritual","heavener","mo"]),u=[...document.querySelectorAll(".work-card[data-project]")].map((I,D)=>({key:I.dataset.project,title:I.querySelector("h3")?.textContent.trim()||I.dataset.project,kind:I.querySelector(".eyebrow")?.textContent.trim()||"",poster:I.querySelector("img")?.getAttribute("src"),number:String(D+1).padStart(2,"0")})),d=String(u.length).padStart(2,"0");s.querySelector("span").textContent=` \u2014 ${d} WORKS`;let m=u.map(I=>{let D=document.createElement("button");D.type="button",D.className="reel-card",D.setAttribute("aria-label",`${I.title} \uC0C1\uC138 \uBCF4\uAE30`);let G=document.createElement("span");G.className="reel-card__media";let B=document.createElement("img");B.src=I.poster,B.alt="",B.decoding="async",B.draggable=!1,G.append(B);let W;h.has(I.key)&&(W=document.createElement("video"),W.src=`media/previews/${I.key}.mp4`,W.muted=!0,W.loop=!0,W.playsInline=!0,W.preload="metadata",W.setAttribute("aria-hidden","true"),W.addEventListener("playing",()=>W.classList.add("is-playing")),G.append(W));let J=document.createElement("span");return J.className="reel-card__meta",J.innerHTML=`<b>${I.number}</b>`,J.append(I.title),D.append(G,J),D.addEventListener("click",()=>{Ta(I.key,D),c?.open&&c.addEventListener("close",()=>D.focus({preventScroll:!0}),{once:!0})}),D.addEventListener("pointerenter",()=>K(I)),D.addEventListener("pointerleave",U),t.append(D),{button:D,video:W,work:I}}),g,p=0,f=0,_=0,v=!1,x="";function M(){let I=e.clientWidth,D=e.clientHeight,G=I/D<.9,B=Math.max(700,D*1.15),W=G?Math.min(I*.62,420):Math.min(I*.3,520),J=W*10/16;e.style.perspective=`${B}px`,r.style.setProperty("--card-w",`${W}px`),r.style.setProperty("--card-h",`${J}px`);let se=-.85*Math.PI,H=1.3*Math.PI,$=B*(G?.9:.78),te=B*(G?3.6:6.5),F=G?.62:.47,oe=[],ae=[0],ue=900;for(let b=0;b<=ue;b++){let X=b/ue,ie=se+(H-se)*X,ne=$+(te-$)*((1-Math.cos(ie))/2)**.8,he=-Math.sin(ie)*I*F,xe=D*(.34-.7*X),E=[he*ne/B,xe*ne/B,B-ne];if(b){let z=oe[b-1];ae.push(ae[b-1]+Math.hypot(E[0]-z[0],E[1]-z[1],E[2]-z[2]))}oe.push(E)}let Q=G?3:5,re=Math.ceil(u.length/Q),me=I*(G?.92:.8),de=me*.018,be=(me-de*(Q-1))/Q,Te=be*10/16,De=de*1.25+26,Be=D-(G?210:230),Ke=Math.min(1,Be/(re*Te+(re-1)*De));be*=Ke,Te*=Ke,de*=Ke,De=de*1.25+26;let Xe=re*Te+(re-1)*De,Ve=u.map((b,X)=>{let ie=Math.floor(X/Q),ne=Math.min(Q,u.length-ie*Q),he=X%Q;return[-(ne*be+(ne-1)*de)/2+be/2+he*(be+de),-Xe/2+Te/2+ie*(Te+De)+D*.015,0]}),xt=W*1.07,lt=W*3,A=ae[ue];g={P:B,cardW:W,rail:oe,lengths:ae,length:A,grid:Ve,gridScale:be/W,step:xt,landSpan:lt,travel:A+(u.length-1)*xt+lt},C(!0)}function w(I){let{rail:D,lengths:G}=g,B=0,W=G.length-1;for(;W-B>1;){let Q=B+W>>1;G[Q]<I?B=Q:W=Q}let J=(I-G[B])/Math.max(1e-6,G[W]-G[B]),se=D[B].map((Q,re)=>Q+(D[W][re]-Q)*J),H=D[Math.max(0,B-2)],$=D[Math.min(D.length-1,W+2)],te=Tr($.map((Q,re)=>Q-H[re])),F=[0,1,0],oe=Tr(F.map((Q,re)=>Q-te[re]*Ca(F,te))),ae=Kl(te,oe),ue=[-se[0],-se[1],g.P-se[2]];return Ca(ae,ue)<0&&(te=te.map(Q=>-Q),ae=ae.map(Q=>-Q)),{position:se,tangent:te,up:oe,normal:ae,scale:1}}function R(I,D,G){let B=Tr(I.tangent.map((se,H)=>se+(D.tangent[H]-se)*G)),W=I.up.map((se,H)=>se+(D.up[H]-se)*G);W=Tr(W.map((se,H)=>se-B[H]*Ca(W,B)));let J=I.position.map((se,H)=>se+(D.position[H]-se)*G);return J[2]+=Math.sin(Math.PI*G)*g.P*.12,{position:J,tangent:B,up:W,normal:Kl(B,W),scale:I.scale+(D.scale-I.scale)*G}}function C(I){if(!g)return;let D=f,G=g.travel*ri((D-.03)/.85),B;m.forEach(({button:H,work:$},te)=>{let F=G-te*g.step,oe,ae=1;if(F<=g.length)oe=w(Math.max(0,F)),ae=Ra(ri(F/(g.cardW*1.6))),F>0&&(!B||oe.position[2]>B.z)&&(B={z:oe.position[2],work:$});else{let be={position:g.grid[te],tangent:[1,0,0],up:[0,1,0],normal:[0,0,1],scale:g.gridScale};oe=R(w(g.length),be,Zg(ri((F-g.length)/g.landSpan)))}let{tangent:ue,up:Q,normal:re,position:me,scale:de}=oe;H.style.transform=`matrix3d(${ue[0]*de},${ue[1]*de},${ue[2]*de},0,${Q[0]*de},${Q[1]*de},${Q[2]*de},0,${re[0]*de},${re[1]*de},${re[2]*de},0,${me[0]},${me[1]},${me[2]},1)`,H.style.opacity=ae.toFixed(3),H.style.visibility=ae<.01?"hidden":""});let W=ri(D/.62);n.style.transform=`translate3d(${-48+W*118}vw,0,0)`,i.style.transform=`translate3d(${48-W*118}vw,0,0)`;let J=1-Ra(ri((D-.6)/.14));n.style.opacity=i.style.opacity=J.toFixed(3),s.style.opacity=(1-Ra(ri((D-.5)/.1))).toFixed(3),r.toggleAttribute("data-landed",D>.9);let se=D>.9?`${d} WORKS \u2014 \uCE74\uB4DC\uB97C \uB20C\uB7EC \uC790\uC138\uD788 \uBCF4\uAE30`:B?`${B.work.number} / ${d} \u2014 ${B.work.title}`:D>.3?`${d} WORKS`:"SCROLL TO PLAY";(I||se!==x)&&(a.textContent=x=se)}function y(){let I=r.getBoundingClientRect(),D=Math.max(1,r.offsetHeight-e.offsetHeight);p=l.matches?1:ri(-I.top/D)}function T(){_=0,y();let I=p-f;f=Math.abs(I)<4e-4?p:f+I*.1,C(),v&&f!==p&&(_=requestAnimationFrame(T))}function N(){!_&&v&&(_=requestAnimationFrame(T))}function q(){let I=v&&!l.matches&&!document.hidden&&!c?.open;for(let{video:D}of m)D&&(I?D.play().catch(()=>{}):D.paused||D.pause())}function K(I){r.hasAttribute("data-landed")&&(o.innerHTML=`<b>${I.number}</b>`,o.append(I.title,Object.assign(document.createElement("small"),{textContent:I.kind})),o.hidden=!1)}function U(){o.hidden=!0}e.addEventListener("pointermove",I=>{let D=e.getBoundingClientRect();o.style.translate=`${I.clientX-D.left+16}px ${I.clientY-D.top+18}px`},{passive:!0}),new IntersectionObserver(([I])=>{v=I.isIntersecting,q(),N()}).observe(r),addEventListener("scroll",N,{passive:!0}),new ResizeObserver(()=>{M(),N()}).observe(e),document.addEventListener("visibilitychange",q),c&&new MutationObserver(q).observe(c,{attributes:!0,attributeFilter:["open"]});function O(){r.classList.toggle("is-static",l.matches),y(),f=p,M(),q()}l.addEventListener("change",O),O(),r.classList.add("is-ready")}function ri(r){return Math.min(1,Math.max(0,r))}function Ra(r){return r*r*(3-2*r)}function Zg(r){return 1-(1-r)**3}function Ca(r,e){return r[0]*e[0]+r[1]*e[1]+r[2]*e[2]}function Kl(r,e){return[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]]}function Tr(r){let e=Math.hypot(r[0],r[1],r[2])||1;return[r[0]/e,r[1]/e,r[2]/e]}})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
