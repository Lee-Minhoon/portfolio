import { normalizeLogScale } from "@/utils";
import {
  Mesh,
  MeshBuilder,
  Scalar,
  Scene,
  StandardMaterial,
  Texture,
} from "@babylonjs/core";

export default class Celestial {
  private static readonly MinRadius = 2439.7;
  private static readonly MaxRadius = 696340;
  private static readonly MinDistance = 57900000;
  private static readonly MaxDistance = 4300000000;
  private static readonly MinPeriod = 88;
  private static readonly MaxPeriod = 60223;
  private static readonly Elapsed = 150;

  protected static LerpRadius(radius: number) {
    return Scalar.Lerp(
      10,
      70,
      normalizeLogScale(radius, Celestial.MinRadius, Celestial.MaxRadius)
    );
  }

  protected static LerpDistance(distance: number) {
    if (distance < Celestial.MinDistance / 2) {
      return 20;
    }
    return Scalar.Lerp(
      70,
      500,
      normalizeLogScale(distance, Celestial.MinDistance, Celestial.MaxDistance)
    );
  }

  protected static LerpPeriod(period: number) {
    return Scalar.Lerp(
      15,
      300,
      normalizeLogScale(period, Celestial.MinPeriod, Celestial.MaxPeriod)
    );
  }

  protected _scene: Scene;
  protected _mesh: Mesh;
  private _angle = 0;

  constructor(scene: Scene, name: string, radius: number, texture?: string) {
    this._scene = scene;

    const mesh = MeshBuilder.CreateSphere(
      name,
      { diameter: Celestial.LerpRadius(radius) },
      scene
    );

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

    const lerpedMajorAxis = Celestial.LerpDistance(majorAxis);
    const lerpedMinorAxis = Celestial.LerpDistance(minorAxis);

    const orbitalSpeed =
      Scalar.TwoPi /
      Celestial.LerpPeriod(period) /
      this._scene.getEngine().getFps();

    this._angle =
      Celestial.Elapsed * orbitalSpeed * this._scene.getEngine().getFps();

    this._scene.registerBeforeRender(() => {
      this._angle += orbitalSpeed;

      this._mesh.position.x = lerpedMajorAxis * Math.cos(this._angle);
      this._mesh.position.z = lerpedMinorAxis * Math.sin(this._angle);

      this._mesh.rotation.y += 0.01;
    });
  }
}
