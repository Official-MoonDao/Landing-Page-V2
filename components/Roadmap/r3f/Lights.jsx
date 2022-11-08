import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function Lights() {
  const { camera } = useThree();
  const cameraLightRef = useRef();
  useFrame(() => {
    cameraLightRef.current.position.x = camera.position.x;
    cameraLightRef.current.rotation.y = camera.rotation.y;
  });
  return (
    <>
      <spotLight
        position={[0, 0, 10]}
        intensity={0.5}
        color="white"
        ref={cameraLightRef}
        lookAt={camera.position}
      />
      <ambientLight intensity={0.1} />
      <directionalLight
        position={[100, 0, -100]}
        color={"cyan"}
        intensity={0.2}
      />
      <directionalLight position={[0, 100, 0]} color={"cyan"} intensity={0.2} />
      <directionalLight
        position={[-100, 0, -100]}
        color={"blue"}
        intensity={0.2}
      />
      <directionalLight
        position={[0, 0, 100]}
        color={"lightyellow"}
        intensity={0.4}
      />
    </>
  );
}
