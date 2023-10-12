import React from "react";
import { useRef, useEffect } from "react";

import { AccumulativeShadows, useGLTF } from "@react-three/drei";

import { Perf } from "r3f-perf";

// import NovacomIcon from "../glb/novacomA.glb";

export default function NovacomA(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("./novacomA.glb");

  useEffect(() => {
    // ref.current.position.y = -1;
    // ref.current.position.x = -3;
    // ref.current.rotate.y = Math.PI / 2;
  });

  return (
    <>
      {/* <Perf position="top-left" /> */}

      {/* <mesh scale={0.6} background={"0x2172f6"} {...props} ref={ref}>
        <textGeometry args={["V", { font, size: 3.5, height: 0.01 }]} />
        <meshPhongMaterial color={"0x2172f6"} />
      </mesh> */}

      <group {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Curve.geometry} material={materials["Material.002"]} position={[-5, 0, 0]} rotation={[Math.PI / 2, Math.PI / 1.5, 0]} />
      </group>
    </>
  );
}

useGLTF.preload("./novacomA.glb");
