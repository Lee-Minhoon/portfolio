import {
  ArcRotateCamera,
  Color3,
  Engine,
  GroundMesh,
  HemisphericLight,
  Mesh,
  MeshBuilder,
  Scene,
  StandardMaterial,
  Vector3,
} from "@babylonjs/core";
import { GridMaterial } from "@babylonjs/materials";

export default class WorldScene {
  private _scene: Scene;
  private _camera: ArcRotateCamera;
  private _ground: GroundMesh;
  private _lights: HemisphericLight[];
  private _meshes: Mesh[];

  constructor(canvas: HTMLCanvasElement) {
    const engine = new Engine(canvas, true);

    this._scene = new Scene(engine);
    this._camera = this.createCamera();
    this._lights = this.createLights();
    this._meshes = this.createMeshes();
    this._ground = this.createGround();

    engine.runRenderLoop(() => {
      this._scene.render();
    });
  }

  public createCamera() {
    const camera = new ArcRotateCamera(
      "camera",
      0,
      Math.PI / 4,
      10,
      Vector3.Zero(),
      this._scene
    );
    camera.attachControl(true, false, 0);
    return camera;
  }

  public createGround() {
    const ground = MeshBuilder.CreateGround(
      "ground",
      { width: 500, height: 500 },
      this._scene
    );

    const material = new GridMaterial("material", this._scene);
    ground.material = material;

    return ground;
  }

  public createLights() {
    return [new HemisphericLight("light", new Vector3(0, 1, 0), this._scene)];
  }

  public createMeshes() {
    const box = MeshBuilder.CreateBox("box", { size: 1 }, this._scene);
    const material = new StandardMaterial("material", this._scene);
    material.diffuseColor = Color3.Red();
    box.material = material;
    return [box];
  }
}
