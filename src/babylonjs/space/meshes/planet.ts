import {
  AbstractEngine,
  Mesh,
  MeshBuilder,
  Scalar,
  Scene,
  StandardMaterial,
  Texture,
} from "@babylonjs/core";

export default class Planet {
  protected static readonly ScaleFactor = 0.002;
  private static readonly MinRadius = 2439.7;
  private static readonly MaxRadius = 696340;
  private static readonly MinDistance = 58000000;
  private static readonly MaxDistance = 4300000000;
  private static readonly MinPeriod = 88;
  private static readonly MaxPeriod = 60223;

  public static getRadius(radius: number) {
    const log = Math.log10(radius);
    const min = Math.log10(Planet.MinRadius);
    const max = Math.log10(Planet.MaxRadius);
    const alpha = (log - min) / (max - min);
    return Scalar.Lerp(5, 50, alpha);
  }

  protected static getDistance(distance: number) {
    const log = Math.log10(distance);
    const min = Math.log10(Planet.MinDistance);
    const max = Math.log10(Planet.MaxDistance);
    const alpha = (log - min) / (max - min);
    return Scalar.Lerp(50, 250, alpha);
  }

  protected static getMinorAxis(majorAxis: number, eccentricity: number) {
    return majorAxis * Math.sqrt(1 - eccentricity ** 2);
  }

  protected static getOrbitalSpeed(
    engine: AbstractEngine,
    revolutionPeriod: number
  ) {
    const log = Math.log10(revolutionPeriod);
    const min = Math.log10(Planet.MinPeriod);
    const max = Math.log10(Planet.MaxPeriod);
    const alpha = (log - min) / (max - min);
    return (2 * Math.PI) / Scalar.Lerp(15, 300, alpha) / engine.getFps();
  }

  protected _scene: Scene;
  protected _mesh: Mesh;
  private _angle = 0;

  constructor(scene: Scene, name: string, texture: Texture, radian: number) {
    this._scene = scene;

    const planet = MeshBuilder.CreateSphere(name, { diameter: radian }, scene);

    const material = new StandardMaterial(`${name}Material`, scene);
    material.diffuseTexture = texture;
    planet.material = material;

    this._mesh = planet;
  }

  get mesh() {
    return this._mesh;
  }

  protected revolution(period: number, majorAxis: number, minorAxis: number) {
    const orbitalSpeed = Planet.getOrbitalSpeed(
      this._scene.getEngine(),
      period
    );

    this._scene.registerBeforeRender(() => {
      this._angle += orbitalSpeed;

      this._mesh.position.x = majorAxis * Math.cos(this._angle);
      this._mesh.position.z = minorAxis * Math.sin(this._angle);

      this._mesh.rotation.y += 0.01;
    });
  }
}
