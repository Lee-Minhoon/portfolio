export const CHARACTER_SOURCE = "akai.babylon";

export const Animation = {
  IDLE: "idle",
  WALK: "walk",
  RUN: "run",
  SPRINT: "sprint",
  JUMP: "jump",
  FLY: "fly",
} as const;

export type Animations = (typeof Animation)[keyof typeof Animation];

export const figures = {
  speed: {
    WALK: 0.02,
    RUN: 0.06,
    SPRINT: 0.1,
  },
  height: {
    GROUND: 0,
    JUMP: 5,
  },
};
