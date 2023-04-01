import {
  ArcRotateCamera,
  AxesViewer,
  CannonJSPlugin,
  Color3,
  CubeTexture,
  Engine,
  Mesh,
  MeshBuilder,
  Scene as _Scene,
  SceneOptions,
  StandardMaterial,
  Texture,
  Vector3,
} from "@babylonjs/core";
import { GridMaterial } from "@babylonjs/materials";

export class Scene extends _Scene {
  metadata: {
    engine: Engine;
    camera: ArcRotateCamera;
    sky: Mesh;
    ground: Mesh;
    axes: AxesViewer;
  };

  constructor(canvas: HTMLCanvasElement, options?: SceneOptions) {
    const engine = new Engine(canvas, true, {}, true);

    super(engine, { ...options, useGeometryUniqueIdsMap: true });
    this.freezeMaterials();

    engine.runRenderLoop(() => {
      this.render();
    });

    if (window) {
      window.addEventListener("resize", () => {
        engine.resize();
      });
    }

    const camera = this.createCamera();
    const sky = this.createSky();
    const ground = this.createGround();
    const axes = this.createAxes();

    this.metadata = { engine, camera, sky, ground, axes };

    // this.enablePhysics(new Vector3(0, -9.81, 0), new CannonJSPlugin());
  }

  createSky() {
    var skybox = MeshBuilder.CreateBox("sky", { size: 1.0 }, this);
    var skyboxMaterial = new StandardMaterial("sky", this);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new CubeTexture("textures/TropicalSunnyDay", this);
    skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;

    return skybox;
  }

  createCamera() {
    // const camera = new ArcRotateCamera("camera", 0, 0, 30, new Vector3(0, 30, 30), scene);
    const camera = new ArcRotateCamera("camera", 0, Math.PI / 4, 50, new Vector3(0, 30, 0), this);

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
  }

  createGround() {
    const material = new GridMaterial("ground", this);
    material.freeze();
    material.mainColor = new Color3(0, 0.05, 0.2);
    material.lineColor = new Color3(0, 1.0, 1.0);

    const ground = MeshBuilder.CreatePlane(
      "ground",
      { width: 1000, height: 1000, sideOrientation: Mesh.DOUBLESIDE },
      this,
    );
    ground.material = material;
    ground.rotation = new Vector3(Math.PI / 2, 0, 0);
    ground.convertToUnIndexedMesh();

    return ground;
  }

  createAxes() {
    const axes = new AxesViewer(this, 10);

    return axes;
  }
}
