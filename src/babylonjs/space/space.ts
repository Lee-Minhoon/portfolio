import { MeshBuilder, Scene, StandardMaterial, Texture } from "@babylonjs/core";
import Planet from "./planet";
import Satellite from "./satellite";
import solarSystem from "./solar-system";
import Stars from "./stars";
import Sun from "./sun";

/**
 * https://www.solarsystemscope.com/textures/
 * https://www.solarsystemscope.com/textures/download/2k_stars_milky_way.jpg
 */
export default class Space {
  static create(scene: Scene) {
    const skybox = MeshBuilder.CreateBox("skybox", { size: 2500 }, scene);
    const skyboxMaterial = new StandardMaterial("skybox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new Texture(
      "textures/space/stars.jpg",
      scene
    );
    skyboxMaterial.reflectionTexture.coordinatesMode =
      Texture.FIXED_EQUIRECTANGULAR_MODE;
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;

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

    return [skybox, sun.mesh, ...planets, stars.mesh];
  }
}
