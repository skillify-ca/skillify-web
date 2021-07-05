import { useTexture } from "@react-three/drei";
import { ReactNode, useMemo, useRef } from "react";
import { extend, useFrame } from "react-three-fiber";
import * as THREE from "three";

export interface BoxProps {
  url: string;
}

/** Adapted from https://codesandbox.io/s/9y8vkjykyy?file=/src/index.js */
const Stars = () => {
  let group = useRef(null)
  let theta = 0
  // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
  const r = 0.1 * Math.sin(THREE.Math.degToRad((theta += 0.1)))
  const s = Math.cos(THREE.Math.degToRad(theta * 2))
  if (group.current) {
    group.current.rotation.set(r, r, r)
  }
  const [geo, mat, vertices, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(1, 10, 10)
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color('lightblue') })
    const coords = new Array(2000).fill(0).map(i => [Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400])
    return [geo, mat, vertices, coords]
  }, [])
  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  )
}
export default Stars;
