import React from "react";
import { useRef, useEffect } from "react";

import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

import { Perf } from "r3f-perf";
import nexa from "../images/NexaRegular.json";

extend({ TextGeometry });

export default function NovacomA(props) {
  const ref = useRef();
  const font = new FontLoader().parse(nexa);

  useEffect(() => {
    // ref.current.position.y = -1;
    // ref.current.position.x = -3;
    // ref.current.rotate.y = Math.PI / 2;
  });

  return (
    <>
      <Perf position="top-left" />

      {/* <mesh scale={0.5}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
      <ambientLight />

      <mesh scale={0.6} background={"0x2172f6"} {...props} ref={ref}>
        <textGeometry args={["V", { font, size: 3.5, height: 0.01 }]} />
        <meshPhongMaterial color={"0x2172f6"} />
      </mesh>
    </>
  );
}
