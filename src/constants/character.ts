export const CHARACTER_SOURCE = "erika.babylon";

export const Animation = {
  IDLE: "Idle",
  WALK: "Walk",
  RUN: "Run",
  SPRINT: "Sprint",
  JUMP: "Jump",
  FLY: "Fly",
} as const;

export type Animations = (typeof Animation)[keyof typeof Animation];
