import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Minimal tech background: a drift of softly glowing particles (like stars /
 * data points) that slowly move and react gently to the mouse. Kept simple
 * and subtle so it never distracts from the content.
 */
export default function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 300);
    camera.position.set(0, 0, 26);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ---- Soft glowing particle field ----
    const count = 320;
    const positions = new Float32Array(count * 3);
    const spread = { x: 60, y: 38, z: 34 };
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread.x;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread.y;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread.z;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const sprite = document.createElement('canvas');
    sprite.width = 32;
    sprite.height = 32;
    const ctx = sprite.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(180, 200, 255, 1)');
    grad.addColorStop(0.4, 'rgba(129, 140, 248, 0.7)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);
    const tex = new THREE.CanvasTexture(sprite);

    const mat = new THREE.PointsMaterial({
      size: 1.3,
      map: tex,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0x9fb4ff,
    });
    const points = new THREE.Points(geo, mat);
    const particles = new THREE.Group();
    particles.add(points);
    scene.add(particles);

    // ---- Interaction state ----
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', onResize);

    // ---- Animation loop ----
    const clock = new THREE.Clock();
    let raf;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse easing
      current.x += (target.x - current.x) * 0.04;
      current.y += (target.y - current.y) * 0.04;

      // Slow idle drift
      points.rotation.y = t * 0.02;

      // Gentle cursor reaction: parallax + subtle tilt
      points.position.x = current.x * 1.2;
      points.position.y = -current.y * 0.8;
      particles.rotation.y = current.x * 0.06;
      particles.rotation.x = current.y * 0.04;

      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      tex.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ willChange: 'transform' }}
    />
  );
}
