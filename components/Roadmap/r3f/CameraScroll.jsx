import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import useScroll from "../../../hooks/useScroll";

export default function CameraScroll() {
  const { wheelY } = useScroll();
  const { camera } = useThree();
  const [velocityY, setVelocityY] = useState(0);
  useEffect(() => {
    camera.position.y += wheelY / 100;
  }, []);
  useFrame(() => {
    // console.log(velocityY);
  });
}
