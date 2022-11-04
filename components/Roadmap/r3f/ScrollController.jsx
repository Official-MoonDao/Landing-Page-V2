import { ScrollControls, Scroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { useRef } from "react";
export default function ScrollController(props) {
  const scrollRef = useRef();
  const { camera } = useThree();
  useFrame(() => {
    const scrollY = scrollRef.current.position.y.toFixed(4);
    if (scrollY > 0 && scrollY < 10) {
      camera.rotation.y = scrollY * 0.25;
    }
    console.log(scrollY);
  });
  return (
    <ScrollControls pages={10} damping={3}>
      <Scroll ref={scrollRef}>{props.children}</Scroll>
    </ScrollControls>
  );
}
