import {
  Color3,
  Color4,
  ParticleSystem,
  PointLight,
  Scene,
  SphereParticleEmitter,
  StandardMaterial,
  Texture,
  Vector3,
} from "@babylonjs/core";
import Celestial from "./celestial";

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

/**
 * https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_SunSurface.png
 * https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_SunFlare.png
 * https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_Star.png
 */
export default class Sun extends Celestial {
  private static readonly Radius = 70;

  constructor(scene: Scene) {
    super(scene, "sun", Sun.Radius);

    const sunLight = new PointLight("sunLight", new Vector3(0, 0, 0), scene);
    sunLight.diffuse = new Color3(0.8, 0.8, 0.6);
    sunLight.intensity = 2;
    sunLight.parent = this._mesh;

    const sunMaterial = new StandardMaterial("sunMaterial", scene);
    sunMaterial.emissiveColor = new Color3(0.3773, 0.093, 0.0266);
    this._mesh.material = sunMaterial;

    const surfaceParticles = new ParticleSystem(
      "surfaceParticles",
      1600,
      scene
    );
    const flareParticles = new ParticleSystem("flareParticles", 20, scene);
    const coronaParticles = new ParticleSystem("coronaParticles", 600, scene);

    surfaceParticles.particleTexture = new Texture(
      "textures/space/sun/surface.png",
      scene
    );
    flareParticles.particleTexture = new Texture(
      "textures/space/sun/flare.png",
      scene
    );
    coronaParticles.particleTexture = new Texture(
      "textures/space/sun/corona.png",
      scene
    );

    const sunEmitter = new SphereParticleEmitter();
    sunEmitter.radius = Sun.Radius / 2.0;
    sunEmitter.radiusRange = 0;

    [surfaceParticles, flareParticles, coronaParticles].forEach((particles) => {
      particles.preWarmStepOffset = 10;
      particles.preWarmCycles = 100;

      particles.minInitialRotation = -2 * Math.PI;
      particles.maxInitialRotation = 2 * Math.PI;

      particles.emitter = this._mesh;
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
    surfaceParticles.maxSize = 26;

    flareParticles.minScaleX = 20;
    flareParticles.minScaleY = 20;
    flareParticles.maxScaleX = 35;
    flareParticles.maxScaleY = 35;

    coronaParticles.minScaleX = 40;
    coronaParticles.minScaleY = 40;
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
  }
}
