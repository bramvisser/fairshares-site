import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Simple 2D noise function (GLSL)
const noiseGLSL = `
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
`;

const fragmentShader = `
  uniform float u_time;
  uniform float u_seed;
  varying vec2 vUv;

  // Brand colors
  vec3 color1 = vec3(0.408, 0.624, 0.22); // #689F38 (green)
  vec3 color2 = vec3(0.0, 0.737, 0.831); // #00BCD4 (cyan)
  vec3 color3 = vec3(0.611, 0.8, 0.396); // #9CCC65 (light green)

  ${noiseGLSL}

  void main() {
    float t = u_time * 0.15;
    float seed = u_seed;
    // Layered animated noise for mingling waves, offset by seed
    float n1 = noise(vUv * 2.0 + t + seed);
    float n2 = noise(vUv * 3.5 - t * 0.7 + seed * 2.0);
    float n3 = noise(vUv * 6.0 + t * 0.5 - seed * 1.5);
    float wave1 = 0.5 + 0.5 * sin(6.0 * vUv.x + t * 1.2 + n1 * 2.0 + seed);
    float wave2 = 0.5 + 0.5 * cos(8.0 * vUv.y - t * 1.5 + n2 * 2.0 - seed);
    float wave3 = 0.5 + 0.5 * sin(10.0 * (vUv.x + vUv.y) + t * 0.8 + n3 * 2.0 + seed * 0.5);
    // Blend the three colors based on the waves
    float blend1 = wave1;
    float blend2 = wave2;
    float blend3 = wave3;
    float total = blend1 + blend2 + blend3 + 0.0001;
    blend1 /= total;
    blend2 /= total;
    blend3 /= total;
    vec3 col = color1 * blend1 + color2 * blend2 + color3 * blend3;
    gl_FragColor = vec4(col, 0.85);
  }
`;

const SwirlBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>();

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight * 1.1; // cover diagonal
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      u_time: { value: 0.0 },
      u_seed: { value: Math.random() * 1000.0 },
    };
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    rendererRef.current = renderer;

    let running = true;
    function animate() {
      if (!running) return;
      uniforms.u_time.value = performance.now() / 1000;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    // Handle resize
    function handleResize() {
      const w = window.innerWidth;
      const h = window.innerHeight * 1.1;
      renderer.setSize(w, h);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      running = false;
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '110vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
};

export default SwirlBackground; 