import { Scene, Texture } from "@babylonjs/core";
import Planet from "./planet";

/**
 * texture from
 * https://www.solarsystemscope.com/textures/
 * https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg
 */
export default class Venus extends Planet {
  private static readonly Radius = Planet.getRadius(2439.7);
  private static readonly RevolutionPeriod = 225;
  private static readonly Eccentricity = 0.01;
  private static readonly MajorAxis = Planet.getDistance(106000000);
  private static readonly MinorAxis = Planet.getMinorAxis(
    Venus.MajorAxis,
    Venus.Eccentricity
  );

  constructor(scene: Scene) {
    super(
      scene,
      "venus",
      new Texture("textures/venus.jpg", scene),
      Venus.Radius
    );

    this.revolution(Venus.RevolutionPeriod, Venus.MajorAxis, Venus.MinorAxis);
  }
}
