import { lerpLogScale } from "@/utils";
import { Scene } from "@babylonjs/core";
import Celestial from "./celestial";
import solarSystem from "./solar-system";

export default class Planet extends Celestial {
  private static readonly MinRadius = Math.min(
    ...solarSystem.planets.map((planet) => planet.radius)
  );
  private static readonly MaxRadius = Math.max(
    ...solarSystem.planets.map((planet) => planet.radius)
  );
  private static readonly MinDistance = Math.min(
    ...solarSystem.planets.map((planet) => planet.majorAxis)
  );
  private static readonly MaxDistance = Math.max(
    ...solarSystem.planets.map((planet) => planet.majorAxis)
  );
  private static readonly MinPeriod = Math.min(
    ...solarSystem.planets.map((planet) => planet.revolutionPeriod)
  );
  private static readonly MaxPeriod = Math.max(
    ...solarSystem.planets.map((planet) => planet.revolutionPeriod)
  );

  public static LerpRadius(radius: number) {
    return lerpLogScale(10, 60, radius, Planet.MinRadius, Planet.MaxRadius);
  }

  public static LerpDistance(distance: number) {
    return lerpLogScale(
      70,
      700,
      distance,
      Planet.MinDistance,
      Planet.MaxDistance
    );
  }

  public static LerpPeriod(period: number) {
    return lerpLogScale(15, 300, period, Planet.MinPeriod, Planet.MaxPeriod);
  }

  constructor(scene: Scene, name: string, radius: number, texture?: string) {
    super(scene, name, Planet.LerpRadius(radius), texture);
  }

  public revolution(
    primary: Celestial,
    period: number,
    majorAxis: number,
    eccentricity: number
  ) {
    this._mesh.parent = primary.mesh;

    super.revolution(
      primary,
      Planet.LerpPeriod(period),
      Planet.LerpDistance(majorAxis),
      eccentricity
    );
  }
}
