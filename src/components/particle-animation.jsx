'use client';

import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// ... (your PointCloud and FloatingElements stay unchanged)

export default function ParticleAnimation() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof window === 'undefined') return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 20], fov: 65, near: 0.1, far: 1000 }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.3} />
          <PointCloud count={2000} radius={15} />
          <FloatingElements />
        </Canvas>
      </Suspense>
    </motion.div>
  );
}
