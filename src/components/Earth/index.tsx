import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";

import Model from "./Model";

export default function EarthScene({ style }: { style?: React.CSSProperties }) {
  return (
    <Canvas
      camera={{
        position: [0, 0, 100],
      }}
      style={{
        zIndex: -1,
        ...style,
      }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 5]} />
      <Suspense fallback={null}>
        <Model />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
