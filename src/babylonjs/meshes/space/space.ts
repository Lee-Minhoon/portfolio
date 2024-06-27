import { Scene } from "@babylonjs/core";
import Earth from "./earth";
import Sun from "./sun";

export class Space {
  public static readonly ScaleFactor = 20;
  public static readonly OrbitalSpeedFactor = 10;

  static create(scene: Scene) {
    const sun = new Sun(scene);
    const earth = new Earth(scene, this.ScaleFactor, this.OrbitalSpeedFactor);

    return [sun.mesh, earth.mesh];
  }
}
