import { CHARACTER_SOURCE } from "@/constants/character";
import { createCamera } from "@/babylonjs/camera";
import CharacterController from "@/babylonjs/character";
import { createEngine } from "@/babylonjs/engine";
import { createGround } from "@/babylonjs/ground";
import { createScene } from "@/babylonjs/scene";
import { SceneLoader } from "@babylonjs/core";
import { useEffect, useRef } from "react";
import styles from "./index.module.scss";

const Canvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const engine = createEngine(ref.current);
    const scene = createScene(engine);

    const camera = createCamera(scene);
    const ground = createGround(scene);
    scene.metadata = { engine, camera, ground };

    const loadCharacter = async () => {
      const source = await SceneLoader.ImportMeshAsync("", "", CHARACTER_SOURCE, scene);
      const characterController = new CharacterController(scene, source);
    };
    loadCharacter();
  }, []);

  return <canvas ref={ref} className={styles.canvas} />;
};

export default Canvas;
