import { Scene, Texture } from "@babylonjs/core";
import Planet from "./planet";

/**
 * texture from
 * https://www.solarsystemscope.com/textures/
 * https://www.solarsystemscope.com/textures/download/2k_neptune.jpg
 */
export default class Neutune extends Planet {
  private static readonly Radius = Planet.getRadius(24622);
  private static readonly RevolutionPeriod = 60223;
  private static readonly Eccentricity = 0.011;
  private static readonly MajorAxis = Planet.getDistance(4300000000);
  private static readonly MinorAxis = Planet.getMinorAxis(
    Neutune.MajorAxis,
    Neutune.Eccentricity
  );

  constructor(scene: Scene) {
    super(
      scene,
      "neptune",
      new Texture("textures/neptune.jpg", scene),
      Neutune.Radius
    );

    this.revolution(
      Neutune.RevolutionPeriod,
      Neutune.MajorAxis,
      Neutune.MinorAxis
    );
  }
}
