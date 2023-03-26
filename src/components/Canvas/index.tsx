import { CHARACTER_SOURCE } from "@/constants/character";
import CharacterController from "@/babylonjs/character";
import { SceneLoader } from "@babylonjs/core";
import { useEffect, useRef } from "react";
import styles from "./index.module.scss";
import { Scene } from "@/babylonjs/scene";

const Canvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const scene = new Scene(ref.current);

    const loadCharacter = async () => {
      const source = await SceneLoader.ImportMeshAsync("", "", CHARACTER_SOURCE, scene);
      const characterController = new CharacterController(scene, source);
    };
    loadCharacter();
  }, []);

  return <canvas ref={ref} className={styles.canvas} />;
};

export default Canvas;
