import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Donut from 'components/models/Donut';

export default function WebGL({ setModelReady }) {
  return (
    <Canvas camera={{ position: [0, 0, 25], fov: 18 }}>
      <ambientLight intensity={0.3} />
      <Suspense fallback={null}>
        <Donut setModelReady={setModelReady} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <OrbitControls autoRotate enableZoom={false} enablePan={false} />
        <Environment preset="warehouse" />
      </Suspense>
    </Canvas>
  )
}

