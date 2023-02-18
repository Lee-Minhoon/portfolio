import { Color3, Mesh, MeshBuilder, Scene, Vector3 } from "@babylonjs/core";
import { GridMaterial } from "@babylonjs/materials";

export const createGround = (scene: Scene) => {
  const material = new GridMaterial("grindMeterial", scene);
  material.freeze();
  material.mainColor = new Color3(0, 0.05, 0.2);
  material.lineColor = new Color3(0, 1.0, 1.0);

  const ground = MeshBuilder.CreatePlane(
    "ground",
    { width: 1000, height: 1000, sideOrientation: Mesh.DOUBLESIDE },
    scene,
  );
  ground.material = material;
  ground.rotation = new Vector3(Math.PI / 2, 0, 0);
  ground.convertToUnIndexedMesh();

  return ground;
};
