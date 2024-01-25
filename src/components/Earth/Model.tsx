import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Model(props: any) {
  const { nodes, materials } = useGLTF("/earth.glb");

  const mesh = useRef<any>();

  useFrame(() => {
    mesh.current.rotation.y += 0.005;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Default OBJ"]}
        scale={[0.1, 0.1, 0.1]}
      />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.6}
          luminanceSmoothing={0.9}
          intensity={1.5}
        />
      </EffectComposer>
    </group>
  );
}

useGLTF.preload("/earth.glb");
