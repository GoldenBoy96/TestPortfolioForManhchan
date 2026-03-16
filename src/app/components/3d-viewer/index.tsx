'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Model } from './Model';

interface ModelViewerProps {
  modelPath: string;
  scale?: number;
  autoRotate?: boolean;
  rotationSpeed?: number;
  enableDrag?: boolean;
}

export function ModelViewer({
  modelPath,
  scale = 2,
  autoRotate = true,
  rotationSpeed = 0.005,
  enableDrag = true,
}: ModelViewerProps) {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, 10]} intensity={0.5} />

        <Suspense fallback={null}>
          <Model
            modelPath={modelPath}
            scale={scale}
            autoRotate={autoRotate}
            rotationSpeed={rotationSpeed}
          />
        </Suspense>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={enableDrag}
          autoRotate={autoRotate}
          autoRotateSpeed={rotationSpeed * 200}
        />
      </Canvas>
    </div>
  );
}
