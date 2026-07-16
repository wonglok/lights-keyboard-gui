import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Content } from "./Content";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <div className="w-full h-full">
        <Canvas shadows>
          <Content></Content>
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
