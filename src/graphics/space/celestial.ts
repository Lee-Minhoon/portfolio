import {
  Mesh,
  MeshBuilder,
  Scalar,
  Scene,
  StandardMaterial,
  Texture,
} from "@babylonjs/core";

export default class Celestial {
  private static readonly Elapsed = 230;

  protected _scene: Scene;
  protected _mesh: Mesh;
  private _angle = 0;

  constructor(scene: Scene, name: string, radius: number, texture?: string) {
    this._scene = scene;

    const mesh = MeshBuilder.CreateSphere(name, { diameter: radius }, scene);

    if (texture) {
      const material = new StandardMaterial(`${name}Material`, scene);
      material.diffuseTexture = new Texture(texture);
      mesh.material = material;
    }

    this._mesh = mesh;
  }

  get mesh() {
    return this._mesh;
  }

  public revolution(
    primary: Celestial,
    period: number,
    majorAxis: number,
    eccentricity: number
  ) {
    this._mesh.parent = primary.mesh;

    const minorAxis = majorAxis * Math.sqrt(1 - eccentricity ** 2);

    const orbitalSpeed =
      Scalar.TwoPi / period / this._scene.getEngine().getFps();

    this._angle =
      Celestial.Elapsed * orbitalSpeed * this._scene.getEngine().getFps();

    this._scene.registerBeforeRender(() => {
      this._angle += orbitalSpeed;

      this._mesh.position.x = majorAxis * Math.cos(this._angle);
      this._mesh.position.z = minorAxis * Math.sin(this._angle);

      this._mesh.rotation.y += 0.01;
    });
  }
}
