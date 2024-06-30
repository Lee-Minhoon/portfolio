import { Scalar } from "@babylonjs/core";

export function normalizeLogScale(value: number, min: number, max: number) {
  const log = Math.log10(value);
  const minLog = Math.log10(min);
  const maxLog = Math.log10(max);
  return Scalar.Normalize(log, minLog, maxLog);
}
