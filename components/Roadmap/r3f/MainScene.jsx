import RoadmapScene from "./RoadmapScene";
import { Canvas } from "@react-three/fiber";
import ScrollController from "./ScrollController";
import { useRef, useEffect } from "react";
export default function MainCanvas(props) {
  return (
    <Canvas flat shadows>
      {props.scrollEnabled ? (
        <ScrollController>
          <RoadmapScene />
        </ScrollController>
      ) : (
        <RoadmapScene />
      )}
    </Canvas>
  );
}
