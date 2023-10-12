import React, { useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, AccumulativeShadows, RandomizedLight, Center } from "@react-three/drei";
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
      <ambientLight intensity={3} />
      <Environment preset="city" />
      <Center>
        <CameraRig>
          <NovacomA />
          <Backdrop />
        </CameraRig>
      </Center>

      <color attach="background" args={["#156AF5"]} />
    </Canvas>
  );
};

function Backdrop() {
  return (
    <AccumulativeShadows temporal frames={60} alphaTest={0.85} scale={50} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -9]}>
      <RandomizedLight amount={5} radius={9} intensity={10} ambient={1} position={[5, 5, 10]} />
      <RandomizedLight amount={5} radius={5} intensity={5} ambient={1} position={[-5, 5, 5]} />
    </AccumulativeShadows>
  );
}

function CameraRig({ children }) {
  const group = useRef();

  useFrame((state, delta) => {
    easing.dampE(group.current.rotation, [state.pointer.y / 2, -state.pointer.x / 2, 0], 0.15, delta);
  });

  return <group ref={group}>{children}</group>;
}

export default ThreeCanvas;
