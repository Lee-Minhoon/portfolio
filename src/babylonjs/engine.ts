import { Engine } from "@babylonjs/core";

export const createEngine = (canvas: HTMLCanvasElement) => {
  const engine = new Engine(canvas, true, {}, true);

  if (window) {
    window.addEventListener("resize", () => {
      engine.resize();
    });
  }

  return engine;
};
