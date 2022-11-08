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
    if (scrollY >= Math.PI * 2 + 3 && scrollY <= Math.PI * 4) {
      scrollY = scrollY - Math.PI * 2 - 3;
      camera.position.x = scrollY * 3;
      camera.rotation.x = 0;
    }

    if (scrollY >= Math.PI * 4 && scrollY <= Math.PI * 6) {
      scrollY = scrollY - Math.PI * 4;
      camera.rotation.y = scrollY * 0.25 + Math.PI * 0.5;
    }

    if (scrollY > Math.PI * 6 && scrollY <= Math.PI * 7) {
      scrollY = scrollY - Math.PI * 6;
      camera.rotation.x = scrollY * 0.25;
    }
    if (scrollY > Math.PI * 7 && scrollY <= Math.PI * 8) {
      scrollY = scrollY - Math.PI * 7;
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
