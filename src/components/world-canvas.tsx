import { useEffect, useRef } from "react";

import { WorldScene } from "@/graphics";

type WorldCanvasProps = {
  scrollProgress: number;
};

export default function WorldCanvas({ scrollProgress }: WorldCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<WorldScene | null>(null);

  useEffect(() => {
    if (!canvasRef.current || sceneRef.current) return;
    sceneRef.current = new WorldScene(canvasRef.current);

    return () => {
      sceneRef.current?.dispose();
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    sceneRef.current?.setScrollProgress(scrollProgress);
  }, [scrollProgress]);

  return <canvas ref={canvasRef} className="h-full w-full outline-none" />;
}
