import "./App.css";
import { Content } from "./Content";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three/webgpu";
// import * as TSL from "three/tsl";
import {
  Canvas,
  extend,
  useFrame,
  useThree,
  type ThreeToJSXElements,
} from "@react-three/fiber";
import { Splat } from "./Splat/Splat";

declare module "@react-three/fiber" {
  interface ThreeElements extends ThreeToJSXElements<typeof THREE> {}
}

extend(THREE as any);

function App() {
  return (
    <>
      <div className="w-full h-full">
        <Canvas
          shadows
          gl={async (props) => {
            const renderer = new THREE.WebGPURenderer(props as any);
            await renderer.init();
            return renderer;
          }}
        >
          <Content></Content>
          <group>
            <Splat></Splat>
          </group>
          <Environment
            {...{
              files: [`/belfast_sunset_puresky_1k.hdr`],
              background: true,
              environmentIntensity: 0.5,
              backgroundIntensity: 1,
              backgroundBlurriness: 0,
            }}
          ></Environment>
          <OrbitControls
            makeDefault
            object-position={[0, 0.25, 0.3]}
            target={[0, 0, 0]}
          ></OrbitControls>
        </Canvas>
      </div>
    </>
  );
}

export default App;
