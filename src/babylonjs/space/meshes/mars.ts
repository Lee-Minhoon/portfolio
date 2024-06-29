import { Scene, Texture } from "@babylonjs/core";
import Planet from "./planet";

/**
 * texture from
 * https://www.solarsystemscope.com/textures/
 * https://www.solarsystemscope.com/textures/download/2k_mars.jpg
 */
export default class Mars extends Planet {
  private static readonly Radius = Planet.getRadius(6371);
  private static readonly RevolutionPeriod = 686.971;
  private static readonly Eccentricity = 0.09;
  private static readonly MajorAxis = Planet.getDistance(220000000);
  private static readonly MinorAxis = Planet.getMinorAxis(
    Mars.MajorAxis,
    Mars.Eccentricity
  );

  constructor(scene: Scene) {
    super(scene, "mars", new Texture("textures/mars.jpg", scene), Mars.Radius);

    this.revolution(Mars.RevolutionPeriod, Mars.MajorAxis, Mars.MinorAxis);
  }
}
