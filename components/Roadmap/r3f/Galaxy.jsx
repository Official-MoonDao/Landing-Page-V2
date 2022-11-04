import { useTexture } from "@react-three/drei";
import { TextureLoader } from "three";

export function Galaxy() {
  const texture = useTexture("/galaxy2.jpg");
  const texture2 = useTexture("/galaxy.jpg");

  texture.repeat.set(1.2, 1);
  return (
    <group>
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <planeGeometry args={[80, 20]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh position={[0, -50, 0]}>
        <planeGeometry args={[50, 20]} />
        <meshStandardMaterial map={texture2} />
      </mesh>
    </group>
  );
}
