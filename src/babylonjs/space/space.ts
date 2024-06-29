import { Scene } from "@babylonjs/core";
import {
  Earth,
  Jupiter,
  Mars,
  Mercury,
  Neptune,
  Saturn,
  Sun,
  Uranus,
  Venus,
} from "./meshes";

export default class Space {
  public static readonly ScaleFactor = 20;
  public static readonly OrbitalSpeedFactor = 10;

  static create(scene: Scene) {
    const sun = new Sun(scene);
    const earth = new Earth(scene);
    const mercury = new Mercury(scene);
    const venus = new Venus(scene);
    const mars = new Mars(scene);
    const jupiter = new Jupiter(scene);
    const saturn = new Saturn(scene);
    const uranos = new Uranus(scene);
    const neptune = new Neptune(scene);

    return [
      sun.mesh,
      earth.mesh,
      mercury.mesh,
      venus.mesh,
      mars.mesh,
      jupiter.mesh,
      saturn.mesh,
      uranos.mesh,
      neptune.mesh,
    ];
  }
}
