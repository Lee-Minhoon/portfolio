import { Scene, Texture } from "@babylonjs/core";
import Planet from "./planet";

/**
 * texture from
 * https://www.solarsystemscope.com/textures/
 * https://www.solarsystemscope.com/textures/download/2k_uranus.jpg
 */
export default class Uranus extends Planet {
  private static readonly Radius = Planet.getRadius(25362);
  private static readonly RevolutionPeriod = 30660;
  private static readonly Eccentricity = 0.046;
  private static readonly MajorAxis = Planet.getDistance(2880000000);
  private static readonly MinorAxis = Planet.getMinorAxis(
    Uranus.MajorAxis,
    Uranus.Eccentricity
  );

  constructor(scene: Scene) {
    super(
      scene,
      "uranus",
      new Texture("textures/uranus.jpg", scene),
      Uranus.Radius
    );

    this.revolution(
      Uranus.RevolutionPeriod,
      Uranus.MajorAxis,
      Uranus.MinorAxis
    );
  }
}
