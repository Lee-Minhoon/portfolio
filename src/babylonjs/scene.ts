import { Engine, Scene } from "@babylonjs/core";

export const createScene = (engine: Engine) => {
  const scene = new Scene(engine, { useGeometryUniqueIdsMap: true });
  scene.useRightHandedSystem = true;
  scene.freezeMaterials();

  engine.runRenderLoop(() => {
    scene.render();
  });

  return scene;
};
