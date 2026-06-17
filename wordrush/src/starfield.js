// Animated GPU starfield + nebula backdrop, rendered with a single full-screen
// ShaderMaterial plane in the three.js scene. This is the "for free" win from a
// real 3D stack: a fragment shader gives parallax stars and drifting nebula at
// zero CPU cost, behind the word sprites.

import {
  Mesh, PlaneGeometry, ShaderMaterial, Vector2,
} from 'three';

const vert = /* glsl */`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0); // fullscreen NDC quad
  }
`;

const frag = /* glsl */`
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2  uRes;
  uniform float uIntensity; // rises with level for a "hotter" sky

  // cheap hash + value noise
  float hash(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
  float noise(vec2 p){
    vec2 i=floor(p), f=fract(p);
    float a=hash(i), b=hash(i+vec2(1,0)), c=hash(i+vec2(0,1)), d=hash(i+vec2(1,1));
    vec2 u=f*f*(3.0-2.0*f);
    return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
  }
  float fbm(vec2 p){
    float v=0.0, a=0.5;
    for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.0; a*=0.5; }
    return v;
  }

  void main(){
    vec2 uv = vUv;
    vec2 p = (uv - 0.5) * vec2(uRes.x/uRes.y, 1.0);

    // drifting nebula
    float t = uTime * 0.02;
    float n = fbm(p*2.5 + vec2(t, t*0.6));
    n = fbm(p*2.0 + n + vec2(-t*0.5, t));
    vec3 col = mix(vec3(0.02,0.03,0.09), vec3(0.10,0.04,0.22), n);
    col += vec3(0.18,0.05,0.30) * pow(n, 3.0) * (0.6 + uIntensity);
    col += vec3(0.0,0.15,0.25) * pow(fbm(p*3.0 - t), 4.0);

    // stars: three parallax layers scrolling downward (motion sense)
    for(int L=0; L<3; L++){
      float fl = float(L);
      float scale = 80.0 + fl*120.0;
      float speed = 0.015 + fl*0.02;
      vec2 sp = uv * scale;
      sp.y += uTime * speed * scale; // scroll
      vec2 cell = floor(sp);
      float h = hash(cell + fl*37.0);
      if (h > 0.92) {
        vec2 f = fract(sp) - 0.5;
        float d = length(f);
        float tw = 0.6 + 0.4*sin(uTime*3.0 + h*30.0);
        float star = smoothstep(0.18, 0.0, d) * tw * (0.5 + fl*0.25);
        col += vec3(star);
      }
    }

    // gentle vignette
    float vig = smoothstep(1.1, 0.3, length(uv-0.5));
    col *= mix(0.7, 1.0, vig);

    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createStarfield() {
  const geo = new PlaneGeometry(2, 2);
  const mat = new ShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    depthTest: false,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uRes: { value: new Vector2(1, 1) },
      uIntensity: { value: 0 },
    },
  });
  const mesh = new Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -10;
  return { mesh, mat };
}
