import { CHARACTER_SOURCE } from "@/constants/character";
import CharacterController from "@/babylonjs/characterController";
import { SceneLoader } from "@babylonjs/core";
import { useEffect, useRef } from "react";
import styles from "./index.module.scss";
import { Scene } from "@/babylonjs/scene";
import InputController from "@/babylonjs/inputController";
// import * as cannon from "cannon";

const Canvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    // window.CANNON = cannon;

    const scene = new Scene(ref.current);

    const loadCharacter = async () => {
      const source = await SceneLoader.ImportMeshAsync("", "", CHARACTER_SOURCE, scene);
      const inputController = new InputController(scene);
      const characterController = new CharacterController(scene, source, inputController);
    };
    loadCharacter();

    // scene.onReadyObservable.add(async () => {
    //   await import("@babylonjs/inspector");
    //   scene.debugLayer.show();
    // });
  }, []);

  return <canvas ref={ref} className={styles.canvas} />;
};

export default Canvas;
