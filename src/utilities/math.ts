export const clamp = (value: number, min: number, max: number) => {
  return Math.max(Math.min(value, max), min);
};

export const lerp = (a: number, b: number, alpha: number) => {
  return a + (b - a) * alpha;
};
