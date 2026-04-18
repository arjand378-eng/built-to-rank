"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function FlowBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, el.clientWidth / el.clientHeight, 0.1, 100);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // ── Flow lines ─────────────────────────────────────
    const LINE_COUNT = 80;
    const POINTS_PER_LINE = 60;
    const lines: THREE.Line[] = [];

    const violet = new THREE.Color("#6D28D9");
    const indigo = new THREE.Color("#4F46E5");

    for (let i = 0; i < LINE_COUNT; i++) {
      const points: THREE.Vector3[] = [];
      const startX = (Math.random() - 0.5) * 10;
      const startY = (Math.random() - 0.5) * 6;
      const startZ = (Math.random() - 0.5) * 2 - 1;

      for (let j = 0; j < POINTS_PER_LINE; j++) {
        const t = j / POINTS_PER_LINE;
        const x = startX + t * (Math.random() * 0.3 - 0.15) * 20;
        const y = startY + Math.sin(t * Math.PI * 2 + startX) * 0.4;
        const z = startZ;
        points.push(new THREE.Vector3(x, y, z));
      }

      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const color = violet.clone().lerp(indigo, Math.random());
      const mat = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity: 0.06 + Math.random() * 0.1,
      });
      const line = new THREE.Line(geo, mat);
      lines.push(line);
      scene.add(line);
    }

    // ── Particles ───────────────────────────────────────
    const PARTICLE_COUNT = 300;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3 - 1;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: "#8B5CF6",
      size: 0.015,
      transparent: true,
      opacity: 0.4,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // ── Animate ─────────────────────────────────────────
    let frameId: number;
    let t = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      t += 0.003;

      lines.forEach((line, i) => {
        line.position.x += 0.0005 * (i % 2 === 0 ? 1 : -1);
        if (line.position.x > 6) line.position.x = -6;
        if (line.position.x < -6) line.position.x = 6;
        (line.material as THREE.LineBasicMaterial).opacity =
          0.04 + Math.abs(Math.sin(t + i * 0.3)) * 0.1;
      });

      particles.rotation.z = t * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ─────────────────────────────────────────
    const onResize = () => {
      if (!el) return;
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // ── Cleanup ─────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      lines.forEach((l) => { l.geometry.dispose(); (l.material as THREE.Material).dispose(); });
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    />
  );
}
