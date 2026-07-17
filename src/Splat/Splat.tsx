import { useEffect, useState } from "react";
import { GSMesh, SpzLoader, PlyLoader } from "three-gsmesh";

export function Splat() {
  // public/splat/scene.spz

  let [api, setAPI] = useState<any>(null);

  useEffect(() => {
    let run = async () => {
      //   const splatLoader = new SpzLoader();
      //   const data = await splatLoader.loadAsync("/splat/scene.spz");

      const splatLoader = new PlyLoader();
      const data = await splatLoader.loadAsync(
        "/splat/plyloader.compressed.ply",
      );
      const gsmesh = new GSMesh(data);
      gsmesh.quaternion.set(1, 0, 0, 0);
      gsmesh.rotation.x += Math.PI * 0.5;
      //   console.log(gsmesh);

      setAPI({
        o3d: gsmesh,
        display: (
          <>
            <primitive object={gsmesh}></primitive>
          </>
        ),
      });
    };
    run();

    return () => {
      ///
    };
  }, []);
  //

  //

  return <>{api?.display}</>;
}
