import {
  Color4,
  CustomParticleEmitter,
  Mesh,
  MeshBuilder,
  ParticleSystem,
  Scene,
  Texture,
} from "@babylonjs/core";

/**
 * https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Sun/T_Star.png
 */
export default class Comets {
  private _mesh: Mesh;

  constructor(scene: Scene) {
    const comets = MeshBuilder.CreateBox("comets", { size: 0.01 }, scene);

    const cometsParticles = new ParticleSystem("cometsParticles", 2, scene);
    cometsParticles.particleTexture = new Texture(
      "textures/space/star.png",
      scene
    );

    const cometsEmitter = new CustomParticleEmitter();
    cometsEmitter.particlePositionGenerator = (_index, _particle, out) => {
      out.x = Math.random() * 3000 - 1500;
      out.y = Math.random() * 3000 - 1500;
      out.z = Math.random() * 3000 - 1500;
    };
    cometsEmitter.particleDestinationGenerator = (_index, _particle, out) => {
      out.x = Math.random() * 3000 - 1500;
      out.y = Math.random() * 3000 - 1500;
      out.z = Math.random() * 3000 - 1500;
    };

    cometsParticles.emitter = comets;
    cometsParticles.particleEmitterType = cometsEmitter;

    cometsParticles.color1 = new Color4(0.898, 0.737, 0.718, 1.0);
    cometsParticles.color2 = new Color4(0.584, 0.831, 0.894, 1.0);

    cometsParticles.minSize = 10;
    cometsParticles.maxSize = 20;

    cometsParticles.minLifeTime = 3;
    cometsParticles.maxLifeTime = 4;

    cometsParticles.blendMode = ParticleSystem.BLENDMODE_STANDARD;

    cometsParticles.start();

    this._mesh = comets;
  }

  get mesh() {
    return this._mesh;
  }
}
