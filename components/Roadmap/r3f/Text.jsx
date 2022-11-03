import { extend, useThree } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import goodtimes from "../../../public/goodtimes.json";
import { useRef, useEffect, useState } from "react";
extend({ TextGeometry });

export default function Text(props) {
  const { position, size } = props;
  const { viewport } = useThree();
  const offsetX = props.offset || 0;
  const font = new FontLoader().parse(goodtimes);
  if (!props) return;
  return (
    <mesh
      position={[
        -props.size * (viewport.width * 2) * 0.08 * 3 + offsetX || 0,
        props?.posY * viewport.aspect || 0,
        0,
      ]}
      rotation={props.rotation}
    >
      <textGeometry
        args={[
          props.text,
          {
            font,
            size: props.size * viewport.width * 0.08,
            height: props.height || 0.25,
          },
        ]}
      />
      <meshPhysicalMaterial attach="material" color={props.color || "white"} />
    </mesh>
  );
}
