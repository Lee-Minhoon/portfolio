import { ArcRotateCamera, Scene, Vector3 } from "@babylonjs/core";

export const createCamera = (scene: Scene) => {
  // const camera = new ArcRotateCamera("camera", 0, 0, 30, new Vector3(0, 30, 30), scene);

  const camera = new ArcRotateCamera("camera1", 0, Math.PI / 4, 50, new Vector3(0, 30, 0), scene);

  camera.lowerRadiusLimit = 30;
  camera.upperRadiusLimit = 300;
  camera.inertia = 0.7;
  camera.panningInertia = 0.7;
  camera.angularSensibilityX = 2000;
  camera.angularSensibilityY = 2000;
  camera.panningSensibility = 25;
  camera.wheelPrecision = 1;
  camera.lowerBetaLimit = 0.1;
  camera.upperBetaLimit = Math.PI / 2;

  const pointers: any = camera.inputs.attached.pointers;
  pointers.buttons = [1, 2];

  camera.attachControl(true, true, 1);

  return camera;
};
