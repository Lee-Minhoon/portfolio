import {
  Mesh,
  MeshBuilder,
  Scene,
  StandardMaterial,
  Texture,
  Vector3,
} from "@babylonjs/core";
import Planet from "./planet";

export default class Ring {
  protected _scene: Scene;
  protected _mesh: Mesh;

  constructor(
    scene: Scene,
    name: string,
    innerRadius: number,
    outerRadius: number,
    texture?: string
  ) {
    this._scene = scene;

    innerRadius = Planet.LerpRadius(innerRadius / 2);
    outerRadius = Planet.LerpRadius(outerRadius / 2);

    const mesh = MeshBuilder.CreateLathe(
      name,
      {
        shape: [
          new Vector3(innerRadius, 0, 0),
          new Vector3(outerRadius, 0, 0),
          new Vector3(outerRadius, 0.1, 0),
          new Vector3(innerRadius, 0.1, 0),
        ],
        radius: 1,
        sideOrientation: Mesh.DOUBLESIDE,
      },
      scene
    );

    if (texture) {
      const material = new StandardMaterial(`${name}Material`, scene);
      material.emissiveTexture = new Texture(texture);
      mesh.material = material;
    }

    mesh.convertToFlatShadedMesh();

    this._mesh = mesh;
  }

  get mesh() {
    return this._mesh;
  }
}
