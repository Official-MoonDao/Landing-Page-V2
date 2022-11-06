import Text from "./Text";
import { Galaxy } from "./Galaxy";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Skybox } from "./Skybox";
export default function RoadmapScene(props) {
  return (
    <>
      <Skybox />
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
      <group>
        <Text size={0.6} height={0.15} text={`OUR ROADMAP`} />
        <Text posY={-1} size={0.6} height={0.15} text={` TO THE STARS`} />
      </group>
      <group position={[-7, -6.5, 7]} rotation={[0, Math.PI / 2, 0]}>
        <Text
          size={0.6}
          height={0.1}
          text={"STEP 1 :\nDEPLOY A CENTRALIZED\nGOVERNANCE TOKEN"}
        />
      </group>
    </>
  );
}
