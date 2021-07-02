import { useTexture } from "@react-three/drei";
import { ReactNode, useMemo, useRef } from "react";
import { extend, useFrame } from "react-three-fiber";
import * as THREE from "three";

export interface BoxProps {
  url: string;
}


const Box = ({url}: BoxProps) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const texture = useMemo(() => new THREE.TextureLoader().load(url), []);
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[8, 8, 8]} />
      <meshBasicMaterial map={texture} attach="material" />
    </mesh>
  );
};

export default Box;
