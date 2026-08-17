import type { DimensionScores } from "./mastery";
import type { Rank } from "./ranks";

export type LearnerProfile = {
  displayName: string;
  rank: Rank;
  xp: number;
  level: number;
  scores: DimensionScores;
};
