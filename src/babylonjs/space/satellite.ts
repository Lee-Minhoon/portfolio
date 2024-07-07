import { lerpLogScale } from "@/utils";
import { Scene } from "@babylonjs/core";
import Celestial from "./celestial";
import solarSystem from "./solar-system";

export default class Satellite extends Celestial {
  private static readonly MinRadius = Math.min(
    ...solarSystem.planets.flatMap((planet) =>
      (planet.satellites || []).map((satellite) => satellite.radius)
    )
  );
  private static readonly MaxRadius = Math.max(
    ...solarSystem.planets.flatMap((planet) =>
      (planet.satellites || []).map((satellite) => satellite.radius)
    )
  );
  private static readonly MinDistance = Math.min(
    ...solarSystem.planets.flatMap((planet) =>
      (planet.satellites || []).map((satellite) => satellite.majorAxis)
    )
  );
  private static readonly MaxDistance = Math.max(
    ...solarSystem.planets.flatMap((planet) =>
      (planet.satellites || []).map((satellite) => satellite.majorAxis)
    )
  );
  private static readonly MinPeriod = Math.min(
    ...solarSystem.planets.flatMap((planet) =>
      (planet.satellites || []).map((satellite) => satellite.revolutionPeriod)
    )
  );
  private static readonly MaxPeriod = Math.max(
    ...solarSystem.planets.flatMap((planet) =>
      (planet.satellites || []).map((satellite) => satellite.revolutionPeriod)
    )
  );

  public static LerpRadius(radius: number) {
    return lerpLogScale(3, 6, radius, Satellite.MinRadius, Satellite.MaxRadius);
  }

  public static LerpDistance(distance: number) {
    return lerpLogScale(
      30,
      70,
      distance,
      Satellite.MinDistance,
      Satellite.MaxDistance
    );
  }

  public static LerpPeriod(period: number) {
    return lerpLogScale(4, 6, period, Satellite.MinPeriod, Satellite.MaxPeriod);
  }

  constructor(scene: Scene, name: string, radius: number, texture?: string) {
    super(scene, name, Satellite.LerpRadius(radius), texture);
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
      Satellite.LerpPeriod(period),
      Satellite.LerpDistance(majorAxis),
      eccentricity
    );
  }
}
