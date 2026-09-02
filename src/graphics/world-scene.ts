import {
  ArcRotateCamera,
  Color3,
  Color4,
  Engine,
  Scene,
  Vector3,
} from "@babylonjs/core";

import { Space } from "./space";

export default class WorldScene {
  private _engine: Engine;
  private _scene: Scene;
  private _camera: ArcRotateCamera;
  private _onResize: () => void;
  // private _ground: GroundMesh;
  // private _lights: HemisphericLight[];
  // private _meshes: TransformNode[];

  constructor(canvas: HTMLCanvasElement) {
    this._engine = new Engine(canvas, true);
    this._scene = new Scene(this._engine);
    this._scene.clearColor = Color4.FromColor3(Color3.Black());
    this.createCamera();
    // this._lights = this.createLights();
    this.createMeshes();
    // this._ground = this.createGround();

    this._onResize = () => {
      this._engine.resize();
    };

    window.addEventListener("resize", this._onResize);

    this._engine.runRenderLoop(() => {
      this._scene.render();
    });
  }

  private createCamera() {
    this._camera = new ArcRotateCamera(
      "camera",
      Math.PI + Math.PI / 4,
      Math.PI / 2.4,
      1000,
      Vector3.Zero(),
      this._scene,
    );
    this._camera.attachControl(true, false, 0);
    this._camera.panningSensibility = 10;
    this._camera.wheelPrecision = 1;
  }

  // private createGround() {
  //   const ground = MeshBuilder.CreateGround(
  //     "ground",
  //     { width: 500, height: 500 },
  //     this._scene
  //   );

  //   const material = new GridMaterial("material", this._scene);
  //   ground.material = material;

  //   return ground;
  // }

  // private createLights() {
  //   return [new HemisphericLight("light", new Vector3(0, 1, 0), this._scene)];
  // }

  private createMeshes() {
    return [...Space.create(this._scene)];
  }

  get scene() {
    return this._scene;
  }

  setScrollProgress(progress: number) {
    const clampedProgress = Math.min(Math.max(progress, 0), 1);
    this._camera.alpha = Math.PI * 1.25 + clampedProgress * Math.PI * 1.1;
    this._camera.beta = Math.PI / 2.4 - clampedProgress * 0.22;
    this._camera.radius = 1000 - clampedProgress * 300;
  }

  dispose() {
    window.removeEventListener("resize", this._onResize);
    this._scene.dispose();
    this._engine.dispose();
  }
}
