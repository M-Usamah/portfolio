"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ACCENT = "#2ee9d4";
const ACCENT_2 = "#8b7cff";

/** Small seeded PRNG so the particle field is stable and render stays pure. */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Normalised pointer (-1..1) and scroll progress, shared with the scene without React state. */
type Input = { x: number; y: number; scroll: number };

function Core({ input, animate }: { input: React.RefObject<Input>; animate: boolean }) {
  const group = useRef<THREE.Group>(null);
  const solid = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);
  const rings = useRef<THREE.Group>(null);
  const nodes = useRef<THREE.Group>(null);
  const field = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const rand = mulberry32(186);
    const count = 320;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Points on a thick spherical shell, deterministic enough for a decorative field
      const r = 3.2 + rand() * 2.6;
      const t = rand() * Math.PI * 2;
      const p = Math.acos(2 * rand() - 1);
      pos[i * 3] = r * Math.sin(p) * Math.cos(t);
      pos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      pos[i * 3 + 2] = r * Math.cos(p);
    }
    return pos;
  }, []);

  const orbitNodes = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        angle: (i / 7) * Math.PI * 2,
        radius: 2.5 + (i % 3) * 0.35,
        tilt: (i % 3) * 0.6 - 0.5,
        size: 0.09 + (i % 2) * 0.05,
      })),
    [],
  );

  useFrame((state, delta) => {
    if (!animate || !group.current) return;
    const t = state.clock.elapsedTime;
    const { x, y, scroll } = input.current;

    // Ease the whole rig toward the pointer and spin it a little with page scroll
    group.current.rotation.y += (x * 0.55 + scroll * 2.2 - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (-y * 0.35 - group.current.rotation.x) * 0.05;
    group.current.position.y = Math.sin(t * 0.8) * 0.12;

    if (solid.current) {
      solid.current.rotation.y += delta * 0.18;
      solid.current.rotation.x += delta * 0.07;
    }
    if (shell.current) {
      shell.current.rotation.y -= delta * 0.12;
      shell.current.rotation.z += delta * 0.05;
    }
    if (rings.current) {
      rings.current.children.forEach((ring, i) => {
        ring.rotation.z += delta * (0.25 + i * 0.12) * (i % 2 ? -1 : 1);
      });
    }
    if (nodes.current) nodes.current.rotation.y += delta * 0.22;
    if (field.current) field.current.rotation.y -= delta * 0.02;
  });

  return (
    <group ref={group} scale={1.05}>
      <mesh ref={solid}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial color="#1b3548" emissive="#0b3a40" emissiveIntensity={0.55} metalness={0.55} roughness={0.35} flatShading />
      </mesh>

      <mesh ref={shell}>
        <icosahedronGeometry args={[1.62, 2]} />
        <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.18} />
      </mesh>

      <group ref={rings}>
        <mesh rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[2.15, 0.012, 8, 160]} />
          <meshBasicMaterial color={ACCENT} transparent opacity={0.85} />
        </mesh>
        <mesh rotation={[Math.PI / 2.4, 0.9, 0]}>
          <torusGeometry args={[2.6, 0.01, 8, 160]} />
          <meshBasicMaterial color={ACCENT_2} transparent opacity={0.75} />
        </mesh>
        <mesh rotation={[Math.PI / 3, -0.7, 0.6]}>
          <torusGeometry args={[3.05, 0.008, 8, 160]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.35} />
        </mesh>
      </group>

      <group ref={nodes}>
        {orbitNodes.map((n, i) => (
          <mesh
            key={i}
            position={[Math.cos(n.angle) * n.radius, Math.sin(n.angle * 1.7) * 0.9 + n.tilt, Math.sin(n.angle) * n.radius]}
          >
            <octahedronGeometry args={[n.size, 0]} />
            <meshBasicMaterial color={i % 2 ? ACCENT_2 : ACCENT} />
          </mesh>
        ))}
      </group>

      <points ref={field}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#cfd8ea" size={0.016} sizeAttenuation transparent opacity={0.3} depthWrite={false} />
      </points>
    </group>
  );
}

export default function Hero3D() {
  const wrap = useRef<HTMLDivElement>(null);
  const input = useRef<Input>({ x: 0, y: 0, scroll: 0 });
  const [visible, setVisible] = useState(true);
  // Client-only component (loaded with ssr: false), so reading matchMedia here is safe
  const [animate, setAnimate] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onReduce = () => setAnimate(!reduce.matches);
    reduce.addEventListener("change", onReduce);

    const onMove = (e: PointerEvent) => {
      input.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      input.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onScroll = () => {
      input.current.scroll = Math.min(1, window.scrollY / window.innerHeight);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    // Stop rendering when the hero is off screen to save battery and keep INP low
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0,
    });
    if (wrap.current) io.observe(wrap.current);

    return () => {
      reduce.removeEventListener("change", onReduce);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={wrap} className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 10.8], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop={visible ? (animate ? "always" : "demand") : "never"}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 3, 4]} intensity={2.2} color="#dff9f5" />
        <pointLight position={[5, 4, 5]} intensity={260} color={ACCENT} />
        <pointLight position={[-5, -3, 3]} intensity={200} color={ACCENT_2} />
        <Core input={input} animate={animate} />
      </Canvas>
    </div>
  );
}
