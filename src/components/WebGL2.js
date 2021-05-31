import React, { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';

function Model(props) {

  const group = useRef()

  const url = `${process.env.PUBLIC_URL}/donut.gltf`;
  const { nodes } = useGLTF(url);

  return (
    <group ref={group} position={[0, -3, 0]} {...props} dispose={null}>
      <mesh
        geometry={nodes.Donut.geometry}
        material={nodes.Donut.material}
        position={[0, 4.59, -0.04]}
        scale={[1.4, 1.4, 1.4]}>
        <mesh geometry={nodes.Icing.geometry} material={nodes.Icing.material} />
      </mesh>
      <mesh
        material-color="#D1ED5D"
        geometry={nodes.Glass.geometry}
        material={nodes.Glass.material}
        position={[0, 1, 0]}
        rotation={[0, -Math.PI / 4, 0]}>
        <mesh geometry={nodes.Liquid.geometry} material={nodes.Liquid.material} />
      </mesh>
    </group>
  )
}

export default function WebGL2() {
  return (
    <Canvas camera={{ position: [0, 0, 25], fov: 22 }}>
      <ambientLight intensity={0.3} />
        <Suspense fallback={null}>
          <Model />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <OrbitControls autoRotate minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
          <Environment preset="warehouse" />
        </Suspense>
    </Canvas>
  )
}

useGLTF.preload('/donut.gltf')
