import { Canvas, useThree } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import Text from "./Text";
import { Galaxy } from "./Galaxy";
export default function RoadmapScene() {
  return (
    <Canvas>
      <ScrollControls pages={3} damping={5}>
        <ambientLight intensity={0.2} />
        <Scroll>
          <Galaxy />
          <Text size={0.6} height={0.05} text={`OUR ROADMAP`} />
          <Text posY={-1} size={0.6} height={0.05} text={` TO THE STARS`} />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
