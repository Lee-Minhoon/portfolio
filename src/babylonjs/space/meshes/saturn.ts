import { Scene, Texture } from "@babylonjs/core";
import Planet from "./planet";

/**
 * texture from
 * https://www.solarsystemscope.com/textures/
 * https://www.solarsystemscope.com/textures/download/2k_saturn.jpg
 */
export default class Saturn extends Planet {
  private static readonly Radius = Planet.getRadius(58232);
  private static readonly RevolutionPeriod = 10759;
  private static readonly Eccentricity = 0.056;
  private static readonly MajorAxis = Planet.getDistance(1400000000);
  private static readonly MinorAxis = Planet.getMinorAxis(
    Saturn.MajorAxis,
    Saturn.Eccentricity
  );

  constructor(scene: Scene) {
    super(
      scene,
      "saturn",
      new Texture("textures/saturn.jpg", scene),
      Saturn.Radius
    );

    this.revolution(
      Saturn.RevolutionPeriod,
      Saturn.MajorAxis,
      Saturn.MinorAxis
    );
  }
}
