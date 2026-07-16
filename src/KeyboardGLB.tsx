import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Scene } from "three";

export function KeyboardGLB({ ...props }) {
  const { nodes, materials } = useGLTF(
    "/output-compressed/4lights-transformed.glb",
  ) as any;

  const ref = useRef<Scene>(null);
  useFrame((st, _dt) => {
    let time = st.clock.getElapsedTime();
    let i = 0;
    let sceneItem = ref?.current as Scene;
    sceneItem?.traverse((it: any) => {
      //
      if (it.isLight) {
        it.position.y =
          Math.cos(i / 4 + time * 2.5) *
          Math.cos(i / 4 + Math.PI * 0.25 + time * 2.5) *
          1.5;

        it.intensity =
          (Math.sin(i / 4 + time * 1.0) *
            Math.cos(i / 4 + Math.PI * 0.25 + time * 1.0) *
            0.5 +
            0.5) *
          2;

        i++;
      } else if (it.material) {
        it.material.roughness = 0.5;
        it.material.metalness = 0.0;
        it.material.transmission = 1.0;
        it.material.thickness = 2;
      }
    });
  });

  //

  return (
    <group ref={ref} {...props} name={"keyboard"} dispose={null}>
      <group>
        <pointLight
          intensity={3.37}
          decay={2}
          color="#007bff"
          position={[0.1749, 0.1905, -0.4258]}
        />
        <pointLight
          intensity={3.37}
          decay={2}
          color="#29ff2c"
          position={[-0.2717, 0.1905, 0.2412]}
        />
        <pointLight
          intensity={3.37}
          decay={2}
          color="#ff0000"
          position={[-0.236, 0.1905, -0.4009]}
        />
        <pointLight
          intensity={3.37}
          decay={2}
          color="#ff00a2"
          position={[0.1936, 0.1905, 0.0297]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys238.geometry}
          material={materials["keys.001"]}
          position={[-0.3388, 0.1606, -0.5435]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys239.geometry}
          material={materials["keys.001"]}
          position={[0.3102, 0.1583, -0.5468]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys240.geometry}
          material={materials["keys.001"]}
          position={[0.093, 0.1583, -0.5468]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys241.geometry}
          material={materials["keys.001"]}
          position={[-0.1242, 0.1583, -0.5468]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys243.geometry}
          material={materials["keys.001"]}
          position={[0.0927, 0.1599, -0.33]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys244.geometry}
          material={materials["keys.001"]}
          position={[-0.1245, 0.1599, -0.33]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys245.geometry}
          material={materials["keys.001"]}
          position={[-0.3417, 0.1599, -0.33]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys246.geometry}
          material={materials["keys.001"]}
          position={[0.0927, 0.1614, -0.1117]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys247.geometry}
          material={materials["keys.001"]}
          position={[-0.1245, 0.1614, -0.1117]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys248.geometry}
          material={materials["keys.001"]}
          position={[-0.3417, 0.1614, -0.1117]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys249.geometry}
          material={materials["keys.001"]}
          position={[0.0927, 0.163, 0.1056]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys250.geometry}
          material={materials["keys.001"]}
          position={[-0.1245, 0.163, 0.1056]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys251.geometry}
          material={materials["keys.001"]}
          position={[-0.3417, 0.163, 0.1056]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys252.geometry}
          material={materials["keys.001"]}
          position={[0.0932, 0.1645, 0.3237]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys253.geometry}
          material={materials["keys.001"]}
          position={[0.3112, 0.1621, 0.2153]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys254.geometry}
          material={materials["keys.001"]}
          position={[0.3112, 0.159, -0.2197]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys255.geometry}
          material={materials["keys.001"]}
          position={[-0.2323, 0.1646, 0.3237]}
          rotation={[-0.0066, 0, 0]}
          scale={[1, 1.0788, 1.0008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.negative002.geometry}
          material={materials["keys.001"]}
          position={[-0.0156, 0.1039, -0.1065]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.4534, 0.0276, 0.5673]}
        />
      </group>
    </group>
  );
}
