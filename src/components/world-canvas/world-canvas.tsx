import { WorldScene } from "@/babylonjs";
import { Nullable } from "@babylonjs/core";
import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

export default function WorldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<Nullable<WorldScene>>(null);

  useEffect(() => {
    if (!canvasRef.current || sceneRef.current) return;
    sceneRef.current = new WorldScene(canvasRef.current);
  }, []);

  return <Box as={"canvas"} ref={canvasRef} w={"100vw"} h={"100vh"} />;
}
