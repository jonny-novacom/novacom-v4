import React from "react";
import { useRef, useEffect } from "react";

import { AccumulativeShadows, RandomizedLight, useGLTF } from "@react-three/drei";

import { Perf } from "r3f-perf";
import { useFrame } from "@react-three/fiber";

export default function NovacomA(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/nova-a-v2.glb");

  // useEffect(() => {
  //   // ref.current.position.y = -1;
  //   // ref.current.position.x = -3;
  //   ref.current.rotate = Math.PI / 2;
  // });

  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    // myMesh.current.rotation.y = a / 1.5;
  });

  return (
    <>
      {/* <Perf position="top-left" /> */}

      {/* <mesh scale={0.6} background={"0x2172f6"} {...props} ref={ref}>
        <textGeometry args={["V", { font, size: 3.5, height: 0.01 }]} />
        <meshPhongMaterial color={"0x2172f6"} />
      </mesh> */}

      {/* <group {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Curve.geometry} material={materials["Material.002"]} position={[-5, 0, 0]} rotation={[Math.PI / 2, Math.PI / 1.5, 0]} />
      </group> */}

      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          material={materials.SVGMat}
          material-roughness={1}
          position={[-10, 0, 0]}
          rotation={[Math.PI / 2, Math.PI / -1.5, 0]}
          scale={[94.4, 3.409, 94.4]}
          ref={myMesh}
        />
      </group>
      <Backdrop />
    </>
  );
}

function Backdrop() {
  const shadows = useRef();
  return (
    <AccumulativeShadows ref={shadows} temporal frames={60} alphaTest={0.85} scale={140} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -1]} color="#156AF5" resolution={2048}>
      <RandomizedLight amount={10} radius={9} intensity={3} ambient={0.5} position={[-10, 5, 0.1]} />
      {/* <RandomizedLight amount={4} radius={9} intensity={2} ambient={0.25} position={[-20, 5, 0.1]} /> */}
    </AccumulativeShadows>
  );
}

useGLTF.preload("/nova-a-v2.glb");
