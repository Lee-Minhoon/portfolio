import { Scalar } from "@babylonjs/core";

export function normalizeLogScale(value: number, min: number, max: number) {
  return Scalar.Normalize(Math.log10(value), Math.log10(min), Math.log10(max));
}

export function lerpLogScale(
  start: number,
  end: number,
  value: number,
  min: number,
  max: number
) {
  return Scalar.Lerp(start, end, normalizeLogScale(value, min, max));
}
