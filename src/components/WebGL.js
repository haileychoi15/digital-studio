import React, { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';

function Model(props) {

  const group = useRef();
  
  const url = `${process.env.PUBLIC_URL}/donut.glb`;
  const { nodes, materials } = useGLTF(url);
  //material-color="#ffffff"

  return (
    <group position={[0, -3, 0]} ref={group} {...props} dispose={null}>
      <group position={[4.08, 5.9, -1.01]} rotation={[1.89, 0.88, -2.05]}>
        <directionalLight intensity={10} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <mesh geometry={nodes.Donut.geometry} material={materials['Material.001']} position={[0, 4.59, -0.04]} scale={[1.4, 1.4, 1.4]}>
        <mesh geometry={nodes.Icing.geometry} material={materials.Material} />
      </mesh>
      <mesh geometry={nodes.Glass.geometry} material={materials.Glass} position={[0, 1, 0]} rotation={[0, -Math.PI / 4, 0]}>
        <mesh geometry={nodes.Liquid.geometry} material={materials.Liquid} />
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


useGLTF.preload('/donut.glb')
