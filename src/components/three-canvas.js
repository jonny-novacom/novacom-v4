import React, { useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import { easing } from "maath";

import NovacomA from "./three-novacom-a";

const ThreeCanvas = ({ className }) => {
  return (
    <Canvas
      shadows
      gl={{ antialias: false, alpha: false }}
      camera={{
        position: [-1, 0, 25],
        fov: 35,
      }}>
      <ambientLight intensity={0.5} />
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
      <Center>
        <CameraRig>
          <NovacomA />
        </CameraRig>
      </Center>

      <color attach="background" args={["#156AF5"]} />
    </Canvas>
  );
};

function CameraRig({ children }) {
  const group = useRef();

  useFrame((state, delta) => {
    easing.dampE(group.current.rotation, [state.pointer.y / 2, state.pointer.x / 2, 0], 0.15, delta);
  });

  return <group ref={group}>{children}</group>;
}

export default ThreeCanvas;
