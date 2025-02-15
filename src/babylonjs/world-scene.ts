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
  // private _camera: ArcRotateCamera;
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

    const onResize = () => {
      this._engine.resize();
    };

    window.addEventListener("resize", onResize);

    this._engine.runRenderLoop(() => {
      this._scene.render();
    });
  }

  private createCamera() {
    const camera = new ArcRotateCamera(
      "camera",
      Math.PI + Math.PI / 4,
      Math.PI / 2.4,
      1000,
      Vector3.Zero(),
      this._scene
    );
    camera.attachControl(true, false, 0);
    camera.panningSensibility = 10;
    camera.wheelPrecision = 1;
    return camera;
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
}
