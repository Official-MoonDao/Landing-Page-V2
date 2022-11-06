import RoadmapScene from "./RoadmapScene";
import { Canvas } from "@react-three/fiber";
import ScrollController from "./controls/ScrollController";
import { useRef, useEffect } from "react";
export default function MainCanvas(props) {
  return (
    <Canvas flat shadows>
      <ScrollController pages={props.scrollEnabled ? 10 : 0}>
        <RoadmapScene />
      </ScrollController>
    </Canvas>
  );
}
