import { Scene, Texture } from "@babylonjs/core";
import Planet from "./planet";

/**
 * texture from
 * https://www.solarsystemscope.com/textures/
 * https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg
 */
export default class Jupiter extends Planet {
  private static readonly Radius = Planet.getRadius(69911);
  private static readonly RevolutionPeriod = 4333;
  private static readonly Eccentricity = 0.048;
  private static readonly MajorAxis = Planet.getDistance(778000000);
  private static readonly MinorAxis = Planet.getMinorAxis(
    Jupiter.MajorAxis,
    Jupiter.Eccentricity
  );

  constructor(scene: Scene) {
    super(
      scene,
      "jupiter",
      new Texture("textures/jupiter.jpg", scene),
      Jupiter.Radius
    );

    this.revolution(
      Jupiter.RevolutionPeriod,
      Jupiter.MajorAxis,
      Jupiter.MinorAxis
    );
  }
}
