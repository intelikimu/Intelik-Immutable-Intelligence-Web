'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Generate random points in a 3D space
function generatePoints(count, radius) {
  const points = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = Math.random() * radius;
    
    points[i3] = r * Math.sin(phi) * Math.cos(theta);
    points[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[i3 + 2] = r * Math.cos(phi);
  }
  
  return points;
}

function PointCloud({ count = 2000, radius = 15 }) {
  const pointsRef = useRef();
  const points = generatePoints(count, radius);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.x = time * 0.05;
    pointsRef.current.rotation.y = time * 0.075;
  });
  
  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6366f1"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Minimal floating geometric shapes
function FloatingElements() {
  const groupRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.05;
    // Subtle floating motion
    groupRef.current.position.y = Math.sin(time * 0.3) * 0.5;
  });
  
  return (
    <group ref={groupRef}>
      {/* Circle */}
      <mesh position={[8, 0, 0]}>
        <ringGeometry args={[0.8, 0.9, 32]} />
        <meshBasicMaterial color="#4f46e5" transparent opacity={0.3} />
      </mesh>
      
      {/* Square */}
      <mesh position={[-7, 5, 0]}>
        <planeGeometry args={[1.5, 1.5]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.2} wireframe />
      </mesh>
      
      {/* Triangle */}
      <mesh position={[0, -6, 4]}>
        <circleGeometry args={[1, 3]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.2} />
      </mesh>
      
      {/* Small particles */}
      <mesh position={[-7, -3, -3]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="#6366f1" />
      </mesh>
      
      <mesh position={[5, 5, -3]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="#6366f1" />
      </mesh>
      
      <mesh position={[-3, 6, 6]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="#4f46e5" />
      </mesh>
    </group>
  );
}

export function ParticleAnimation() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <Canvas
        camera={{ position: [0, 0, 20], fov: 65, near: 0.1, far: 1000 }}
        dpr={[1, 1.5]} // Reduced for better performance
      >
        <ambientLight intensity={0.3} />
        <PointCloud count={2000} radius={15} />
        <FloatingElements />
      </Canvas>
    </motion.div>
  );
} 