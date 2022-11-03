import { useTexture } from "@react-three/drei";
import { TextureLoader } from "three";

export function Galaxy() {
  const texture = useTexture("/galaxy.jpg");
  return (
    <mesh position={[0, -5, 0]}>
      <planeGeometry args={[15, 20]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
