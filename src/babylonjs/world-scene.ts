import {
  ArcRotateCamera,
  Color3,
  Color4,
  Engine,
  GroundMesh,
  HemisphericLight,
  Mesh,
  MeshBuilder,
  ParticleSystem,
  PointLight,
  Scene,
  SphereParticleEmitter,
  StandardMaterial,
  Texture,
  Vector3,
} from "@babylonjs/core";
import { GridMaterial } from "@babylonjs/materials";

export default class WorldScene {
  private _engine: Engine;
  private _scene: Scene;
  private _camera: ArcRotateCamera;
  private _ground: GroundMesh;
  private _lights: HemisphericLight[];
  private _meshes: Mesh[];

  constructor(canvas: HTMLCanvasElement) {
    this._engine = new Engine(canvas, true);
    this._scene = new Scene(this._engine);
    this._camera = this.createCamera();
    // this._lights = this.createLights();
    this._meshes = this.createMeshes();
    this._ground = this.createGround();

    this._engine.runRenderLoop(() => {
      this._scene.render();
    });
  }

  private createCamera() {
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

  private createGround() {
    const ground = MeshBuilder.CreateGround(
      "ground",
      { width: 500, height: 500 },
      this._scene
    );

    const material = new GridMaterial("material", this._scene);
    ground.material = material;

    return ground;
  }

  private createLights() {
    return [new HemisphericLight("light", new Vector3(0, 1, 0), this._scene)];
  }

  private createMeshes() {
    const sun = createSun(this._scene);

    const sunLight = new PointLight(
      "sunLight",
      new Vector3(0, 0, 0),
      this._scene
    );
    sunLight.diffuse = new Color3(0.8509, 0.4784, 0.1019);
    sunLight.intensity = 2;
    sunLight.parent = sun;

    const earth = MeshBuilder.CreateSphere(
      "earth",
      { diameter: 20 },
      this.scene
    );
    earth.position.x = 100;

    return [sun];
  }

  get scene() {
    return this._scene;
  }
}

const sunSize = 69.634;
const surfaceGradients = [
  { gradient: 0, color: new Color4(0.8509, 0.4784, 0.1019, 0.0) },
  { gradient: 0.4, color: new Color4(0.6259, 0.3056, 0.0619, 0.5) },
  { gradient: 0.5, color: new Color4(0.6039, 0.2887, 0.0579, 0.5) },
  { gradient: 1.0, color: new Color4(0.3207, 0.0713, 0.0075, 0.0) },
];

const flareGradients = [
  { gradient: 0, color: new Color4(1, 0.9612, 0.5141, 0.0) },
  { gradient: 0.25, color: new Color4(0.9058, 0.7152, 0.3825, 1.0) },
  { gradient: 1.0, color: new Color4(0.632, 0.0, 0.0, 0.0) },
];
const coronaGradients = [
  { gradient: 0, color: new Color4(0.8509, 0.4784, 0.1019, 0.0) },
  { gradient: 0.5, color: new Color4(0.6039, 0.2887, 0.0579, 0.12) },
  { gradient: 1.0, color: new Color4(0.3207, 0.0713, 0.0075, 0.0) },
];

const createSun = (scene: Scene) => {
  const sun = MeshBuilder.CreateSphere("sun", { diameter: sunSize }, scene);

  // set the sun's material
  const sunMaterial = new StandardMaterial("sunMaterial", scene);
  sunMaterial.emissiveColor = new Color3(0.3773, 0.093, 0.0266);
  sun.material = sunMaterial;

  // create the surface particles
  const surfaceParticles = new ParticleSystem("surfaceParticles", 1600, scene);
  const flareParticles = new ParticleSystem("flareParticles", 20, scene);
  const coronaParticles = new ParticleSystem("coronaParticles", 600, scene);
  // const starsParticles = new BABYLON.ParticleSystem("starsParticles", 500, scene);

  surfaceParticles.particleTexture = new Texture(
    "https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_SunSurface.png",
    scene
  );
  flareParticles.particleTexture = new Texture(
    "https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_SunFlare.png",
    scene
  );
  coronaParticles.particleTexture = new Texture(
    "https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_Star.png",
    scene
  );

  const sunEmitter = new SphereParticleEmitter();
  sunEmitter.radius = sunSize / 2.0;
  sunEmitter.radiusRange = 0;

  [surfaceParticles, flareParticles, coronaParticles].forEach((particles) => {
    particles.preWarmStepOffset = 10;
    particles.preWarmCycles = 100;

    particles.minInitialRotation = -2 * Math.PI;
    particles.maxInitialRotation = 2 * Math.PI;

    particles.emitter = sun;
    particles.particleEmitterType = sunEmitter;

    particles.blendMode = ParticleSystem.BLENDMODE_ADD;
  });

  surfaceGradients.forEach((gradient) => {
    surfaceParticles.addColorGradient(gradient.gradient, gradient.color);
  });

  flareGradients.forEach((gradient) => {
    flareParticles.addColorGradient(gradient.gradient, gradient.color);
  });

  coronaGradients.forEach((gradient) => {
    coronaParticles.addColorGradient(gradient.gradient, gradient.color);
  });

  surfaceParticles.minSize = 8;
  surfaceParticles.maxSize = 20;

  flareParticles.minScaleX = 10;
  flareParticles.minScaleY = 10;
  flareParticles.maxScaleX = 20;
  flareParticles.maxScaleY = 20;

  coronaParticles.minScaleX = 20;
  coronaParticles.minScaleY = 20;
  coronaParticles.maxScaleX = 60;
  coronaParticles.maxScaleY = 60;

  flareParticles.addSizeGradient(0, 0);
  flareParticles.addSizeGradient(1, 1);

  surfaceParticles.minLifeTime = 8.0;
  surfaceParticles.maxLifeTime = 8.0;

  flareParticles.minLifeTime = 10.0;
  flareParticles.maxLifeTime = 10.0;

  coronaParticles.minLifeTime = 2.0;
  coronaParticles.maxLifeTime = 2.0;

  surfaceParticles.emitRate = 350;
  flareParticles.emitRate = 20;
  coronaParticles.emitRate = 300;

  surfaceParticles.minAngularSpeed = -0.4;
  surfaceParticles.maxAngularSpeed = 0.4;

  surfaceParticles.minEmitPower = 0;
  surfaceParticles.maxEmitPower = 0;
  surfaceParticles.updateSpeed = 0.005;

  flareParticles.minEmitPower = 0.001;
  flareParticles.maxEmitPower = 0.01;

  coronaParticles.minEmitPower = 0.0;
  coronaParticles.maxEmitPower = 0.0;

  surfaceParticles.isBillboardBased = false;

  surfaceParticles.start();
  flareParticles.start();
  coronaParticles.start();

  return sun;
};
