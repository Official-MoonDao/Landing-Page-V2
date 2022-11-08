import { extend, useFrame, useThree } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import goodtimes from "../../../public/goodtimes.json";
import * as THREE from "three";
import { useRef, useEffect, useState } from "react";
extend({ TextGeometry });
const GlowShaderMaterial = {
  uniforms: {
    viewVector: { type: "v3", value: new THREE.Vector3(0, 0, 0) },
  },
  vertexShader: `
  uniform vec3 viewVector;
  varying float intensity;
  void main() {
      gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
      vec3 actual_normal = vec3(modelMatrix * vec4(normal, 0.0));
      intensity = pow( dot(normalize(viewVector), actual_normal), 2.0 );
  }
  `,
  fragmentShader: `
    varying float intensity;
    void main() {
      vec3 glow = vec3(0.5, 0.5, 0.4) * intensity;
      gl_FragColor = vec4( glow, 1.0 );
    }
  `,
};
export default function Text(props) {
  const { position, size } = props;
  const { viewport, camera } = useThree();
  const offsetX = props.offsetX || 0;
  const font = new FontLoader().parse(goodtimes);
  const textRef = useRef();

  const glowRef = useRef();

  useFrame(({ camera }) => {
    if (glowRef.current) {
      const camVec = camera.position;
      const glowVec = new THREE.Vector3();
      glowRef.current.getWorldPosition(glowVec);
      const viewVector = new THREE.Vector3().subVectors(camVec, glowVec);
      glowRef.current.material.uniforms.viewVector.value = viewVector;
    }
  });

  return (
    <group>
      <mesh
        position={[
          -props.size * (viewport.width * 2) * 0.08 * 3 + offsetX || 0,
          props?.posY * viewport.aspect || 0,
          0,
        ]}
        rotation={props.rotation}
        receiveShadow
        castShadow
        ref={textRef}
      >
        <textGeometry
          args={[
            props.text,
            {
              font,
              size: props.size * viewport.width * 0.08,
              height: props.height || 0.25,
            },
          ]}
        />
        <meshLambertMaterial
          attach="material"
          color={props.color || "white"}
          transparent
          emissive={true}
          emissiveIntensity={10}
        />
      </mesh>
      {props.glow && (
        <mesh
          ref={glowRef}
          position={[
            -props.size * (viewport.width * 2) * 0.08 * 3 + offsetX || 0,
            props?.posY * viewport.aspect || 0,
            0.05,
          ]}
          rotation={props.rotation}
        >
          <textGeometry
            args={[
              props.text,
              {
                font,
                size: props.size * viewport.width * 0.08,
                height: 0.05,
              },
            ]}
          />
          <shaderMaterial
            attach="material"
            args={[GlowShaderMaterial]}
            side={THREE.FrontSide}
            blending={THREE.AdditiveBlending}
            transparent={true}
          />
        </mesh>
      )}
    </group>
  );
}
