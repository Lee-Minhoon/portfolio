import {
  Mesh,
  MeshBuilder,
  Scene,
  StandardMaterial,
  Texture,
} from "@babylonjs/core";

/**
 * texture from
 * https://planet-texture-maps.fandom.com/wiki/Earth
 * https://static.wikia.nocookie.net/planet-texture-maps/images/a/aa/Earth_Texture_Full.png/revision/latest?cb=20190401163425
 */
export default class Earth {
  private static readonly Radian = 0.6371;
  private static readonly RevolutionPeriod = 365.25;
  private static readonly Eccentricity = 0.0167;
  private static readonly MajorAxis = 149.6;
  private static readonly MinorAxis =
    this.MajorAxis * Math.sqrt(1 - this.Eccentricity ** 2);

  private _mesh: Mesh;
  private _angle = 0;

  constructor(scene: Scene, scaleFactor: number, orbitalSpeedFactor: number) {
    const earth = MeshBuilder.CreateSphere(
      "earth",
      { diameter: Earth.Radian * scaleFactor },
      scene
    );

    const earthMaterial = new StandardMaterial("earthMaterial", scene);
    earthMaterial.diffuseTexture = new Texture("textures/earth.webp", scene);
    earth.material = earthMaterial;

    const orbitalSpeed =
      ((2 * Math.PI) / Earth.RevolutionPeriod / scene.getEngine().getFps()) *
      orbitalSpeedFactor;

    scene.registerBeforeRender(() => {
      this._angle += orbitalSpeed;

      earth.position.x = Earth.MajorAxis * Math.cos(this._angle);
      earth.position.z = Earth.MinorAxis * Math.sin(this._angle);

      earth.rotation.y += 0.01;
    });

    this._mesh = earth;
  }

  get mesh() {
    return this._mesh;
  }
}
