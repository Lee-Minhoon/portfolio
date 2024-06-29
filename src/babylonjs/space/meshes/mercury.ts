import { Scene, Texture } from "@babylonjs/core";
import Planet from "./planet";

/**
 * texture from
 * https://www.solarsystemscope.com/textures/
 * https://www.solarsystemscope.com/textures/download/2k_mercury.jpg
 */
export default class Mercury extends Planet {
  private static readonly Radius = Planet.getRadius(2439.7);
  private static readonly RevolutionPeriod = 88;
  private static readonly Eccentricity = 0.21;
  private static readonly MajorAxis = Planet.getDistance(58000000);
  private static readonly MinorAxis = Planet.getMinorAxis(
    Mercury.MajorAxis,
    Mercury.Eccentricity
  );

  constructor(scene: Scene) {
    super(
      scene,
      "mercury",
      new Texture("textures/mercury.jpg", scene),
      Mercury.Radius
    );

    this.revolution(
      Mercury.RevolutionPeriod,
      Mercury.MajorAxis,
      Mercury.MinorAxis
    );
  }
}
