import { useEffect, useState } from "react";
import { GSMesh, PlyLoader } from "three-gsmesh";
// import { SplatLoader } from "@sparkjsdev/spark";
// import { Matrix3, Vector3, Quaternion, Matrix4 } from "three";

// /**
//  * Builds a 3x3 covariance matrix from orientation and scale.
//  *
//  * @param rotation - Quaternion representing the rotation
//  * @param scale - Vector3 representing the scale/radii of the ellipsoid axes
//  * @returns Three.js Matrix3 representing the covariance
//  */
// let temp = {
//   scaleMatrix: new Matrix3(),
//   m4: new Matrix4(),
//   rotMatrixA: new Matrix3(),
//   cov: new Matrix3(),
//   rotMatrixB: new Matrix3(),
//   quat: new Quaternion(),
//   scale: new Vector3(),
// };

// function buildCovarianceMatrix(rotation: Quaternion, scale: Vector3): number[] {
//   // 1. Create the diagonal scale matrix S (S_x^2, S_y^2, S_z^2)
//   const scaleMatrix = temp.scaleMatrix.set(
//     scale.x * scale.x,
//     0,
//     0,
//     0,
//     scale.y * scale.y,
//     0,
//     0,
//     0,
//     scale.z * scale.z,
//   );

//   const m4 = temp.m4.makeRotationFromQuaternion(rotation);
//   // 2. Create the 3x3 rotation matrix R from the quaternion
//   const rotationMatrix = temp.rotMatrixA.setFromMatrix4(m4);

//   temp.rotMatrixB.copy(rotationMatrix).transpose();

//   // 3. Compute the rotated covariance: R * S * R^T
//   const cov = temp.cov
//     .copy(rotationMatrix)
//     .multiply(scaleMatrix)
//     .multiply(temp.rotMatrixB);

//   return cov.toArray();
// }

export function Splat() {
  // public/splat/scene.spz

  let [api, setAPI] = useState<any>(null);

  useEffect(() => {
    let run = async () => {
      //   const sog = new SogLoader({
      //     workerLimit: 0, // Number of workers (0 = disabled)
      //     wasmBaseUrl: "/wasm/", // Base URL for WASM assets (if required)
      //   });

      //   let sogLoader = new SplatLoader();
      //   let sogData = await sogLoader.loadAsync(
      //     `/splat/plyloader.compressed.sog`,
      //   );
      //   let positions: number[] = [];
      //   let covariances: number[] = [];
      //   let colors: number[] = [];

      //   sogData.forEachSplat((id, center, scale, quaternion, opacity, color) => {
      //     //
      //     positions.push(center.x, center.y, center.z);
      //     colors.push(color.r, color.g, color.b);

      //     temp.quat.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
      //     temp.scale.set(scale.x, scale.y, scale.z);
      //     covariances.push(...buildCovarianceMatrix(temp.quat, temp.scale));
      //     //
      //   });
      //   console.log(sogData);

      const splatLoader = new PlyLoader();
      const data = await splatLoader.loadAsync(
        "/splat/plyloader.compressed.ply",
      );
      console.log("goodformat", data);

      const gsmesh = new GSMesh(data, {
        //
      });
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
