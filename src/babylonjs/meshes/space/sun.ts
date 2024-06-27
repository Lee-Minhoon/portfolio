import {
  Color3,
  Color4,
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

export default class Sun {
  private static readonly Radian = 69.634;

  private _mesh: Mesh;

  constructor(scene: Scene) {
    const sun = MeshBuilder.CreateSphere(
      "sun",
      { diameter: Sun.Radian },
      scene
    );

    const sunLight = new PointLight("sunLight", new Vector3(0, 0, 0), scene);
    sunLight.diffuse = new Color3(0.8, 0.8, 0.6);
    sunLight.intensity = 2;
    sunLight.parent = sun;

    // set the sun's material
    const sunMaterial = new StandardMaterial("sunMaterial", scene);
    sunMaterial.emissiveColor = new Color3(0.3773, 0.093, 0.0266);
    sun.material = sunMaterial;

    // create the surface particles
    const surfaceParticles = new ParticleSystem(
      "surfaceParticles",
      1600,
      scene
    );
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
    sunEmitter.radius = Sun.Radian / 2.0;
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

    surfaceParticles.minSize = 4;
    surfaceParticles.maxSize = 24;

    flareParticles.minScaleX = 20;
    flareParticles.minScaleY = 20;
    flareParticles.maxScaleX = 30;
    flareParticles.maxScaleY = 30;

    coronaParticles.minScaleX = 30;
    coronaParticles.minScaleY = 30;
    coronaParticles.maxScaleX = 50;
    coronaParticles.maxScaleY = 50;

    flareParticles.addSizeGradient(0, 0);
    flareParticles.addSizeGradient(1, 1);

    surfaceParticles.minLifeTime = 8.0;
    surfaceParticles.maxLifeTime = 8.0;

    flareParticles.minLifeTime = 10.0;
    flareParticles.maxLifeTime = 10.0;

    coronaParticles.minLifeTime = 2.0;
    coronaParticles.maxLifeTime = 2.0;

    surfaceParticles.emitRate = 350;
    flareParticles.emitRate = 40;
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

    this._mesh = sun;
  }

  get mesh() {
    return this._mesh;
  }
}
