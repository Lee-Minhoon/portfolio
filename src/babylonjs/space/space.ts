import { Scene } from "@babylonjs/core";
import Planet from "./planet";
import Satellite from "./satellite";
import solarSystem from "./solar-system";
import Stars from "./stars";
import Sun from "./sun";

export default class Space {
  static create(scene: Scene) {
    const sun = new Sun(scene);
    const stars = new Stars(scene);
    const planets = solarSystem.planets
      .map((planet) => {
        const meshes = [];
        const planetInstance = new Planet(
          scene,
          planet.name,
          planet.radius,
          planet.texture
        );
        planetInstance.revolution(
          sun,
          planet.revolutionPeriod,
          planet.majorAxis,
          planet.eccentricity
        );
        meshes.push(planetInstance.mesh);
        if (planet.satellites) {
          planet.satellites.forEach((satellite) => {
            const satelliteInstance = new Satellite(
              scene,
              satellite.name,
              satellite.radius,
              satellite.texture
            );
            satelliteInstance.revolution(
              planetInstance,
              satellite.revolutionPeriod,
              satellite.majorAxis,
              satellite.eccentricity
            );
            meshes.push(satelliteInstance.mesh);
          });
        }
        return meshes;
      })
      .flat();

    return [sun.mesh, ...planets, stars.mesh];
  }
}
