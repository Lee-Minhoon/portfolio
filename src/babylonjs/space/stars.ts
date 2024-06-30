import {
  Color4,
  Mesh,
  MeshBuilder,
  ParticleSystem,
  Scene,
  SphereParticleEmitter,
  Texture,
} from "@babylonjs/core";

export default class Stars {
  private _mesh: Mesh;

  constructor(scene: Scene) {
    const stars = MeshBuilder.CreateBox("stars", { size: 0.01 }, scene);

    const starsParticles = new ParticleSystem("starsParticles", 3000, scene);
    starsParticles.particleTexture = new Texture(
      "textures/space/star.png",
      scene
    );
    starsParticles.manualEmitCount = starsParticles.getCapacity();

    const starsEmitter = new SphereParticleEmitter();
    starsEmitter.radius = 1000;
    starsEmitter.radiusRange = 0.5;

    starsParticles.emitter = stars;
    starsParticles.particleEmitterType = starsEmitter;

    starsParticles.color1 = new Color4(0.898, 0.737, 0.718, 1.0);
    starsParticles.color2 = new Color4(0.584, 0.831, 0.894, 1.0);

    starsParticles.minSize = 1;
    starsParticles.maxSize = 5;

    starsParticles.minLifeTime = Infinity;
    starsParticles.maxLifeTime = Infinity;

    starsParticles.blendMode = ParticleSystem.BLENDMODE_STANDARD;

    starsParticles.minEmitPower = 0.0;
    starsParticles.maxEmitPower = 0.0;

    starsParticles.start();

    this._mesh = stars;
  }

  get mesh() {
    return this._mesh;
  }
}
