import { ScrollControls, Scroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { useRef } from "react";
import MouseController from "./MouseController";
export default function ScrollController(props) {
  const scrollRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    let scrollY = scrollRef.current.position.y.toFixed(4);
    if (scrollY <= 0 && camera.rotation.y > 0) camera.rotation.y -= 0.005;
    //TITLE THEN ROTATE LEFT
    if (scrollY > 0 && scrollY <= Math.PI * 2) {
      camera.rotation.y = scrollY * 0.25;
    }
    //SECTION 1 THEN ZOOM-OUT
    if (scrollY > Math.PI * 2 + 5 && scrollY < 30) {
      scrollY = scrollY - Math.PI * 2 - 5;
      camera.position.x = scrollY * 3;
    }
  });
  return (
    <>
      <ScrollControls pages={props?.pages || 0} damping={5}>
        <Scroll ref={scrollRef}>{props.children}</Scroll>
      </ScrollControls>
      <MouseController />
    </>
  );
}
