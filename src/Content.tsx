import { KeyboardGLB } from "./KeyboardGLB";

export function Content() {
  return (
    <>
      {/*  */}
      {/* {out} */}
      {/*  */}
      <group rotation={[0.0 * Math.PI, 0, 0]} scale={0.5}>
        <KeyboardGLB></KeyboardGLB>
      </group>
    </>
  );
}
