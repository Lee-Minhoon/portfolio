import { Scene, Texture } from "@babylonjs/core";
import Planet from "./planet";

/**
 * texture from
 * https://planet-texture-maps.fandom.com/wiki/Earth
 * https://static.wikia.nocookie.net/planet-texture-maps/images/a/aa/Earth_Texture_Full.png/revision/latest?cb=20190401163425
 */
export default class Earth extends Planet {
  private static readonly Radius = Planet.getRadius(6371);
  private static readonly RevolutionPeriod = 365.25;
  private static readonly Eccentricity = 0.0167;
  private static readonly MajorAxis = Planet.getDistance(150000000);
  private static readonly MinorAxis = Planet.getMinorAxis(
    Earth.MajorAxis,
    Earth.Eccentricity
  );

  constructor(scene: Scene) {
    super(
      scene,
      "earth",
      new Texture("textures/earth.webp", scene),
      Earth.Radius
    );
    this.revolution(Earth.RevolutionPeriod, Earth.MajorAxis, Earth.MinorAxis);
  }
}
