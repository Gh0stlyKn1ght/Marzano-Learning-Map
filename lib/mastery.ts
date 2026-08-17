export type MasteryDimension =
  | "recall"
  | "recognition"
  | "discrimination"
  | "application"
  | "diagnosis"
  | "adaptation"
  | "defense"
  | "transfer"
  | "teach";

export type Difficulty = "beginner" | "practitioner" | "expert";

export type DimensionScores = Record<MasteryDimension, number>;

export type AttemptInput = {
  dimension: MasteryDimension;
  score: number;
  difficulty: Difficulty;
  usedHint?: boolean;
  isRepeat?: boolean;
};

const difficultyWeight: Record<Difficulty, number> = {
  beginner: 0.75,
  practitioner: 1,
  expert: 1.2,
};

export const emptyScores = (): DimensionScores => ({
  recall: 0,
  recognition: 0,
  discrimination: 0,
  application: 0,
  diagnosis: 0,
  adaptation: 0,
  defense: 0,
  transfer: 0,
  teach: 0,
});

export function applyAttempt(current: DimensionScores, attempt: AttemptInput): DimensionScores {
  const bounded = Math.max(0, Math.min(100, attempt.score));
  const hintPenalty = attempt.usedHint ? 0.85 : 1;
  const repeatPenalty = attempt.isRepeat ? 0.6 : 1;
  const evidence = bounded * difficultyWeight[attempt.difficulty] * hintPenalty * repeatPenalty;

  // New evidence moves a score gradually rather than replacing history.
  const previous = current[attempt.dimension];
  const alpha = evidence >= previous ? 0.32 : 0.18;
  const next = Math.max(0, Math.min(100, previous + alpha * (evidence - previous)));

  return { ...current, [attempt.dimension]: Math.round(next * 10) / 10 };
}

export function competencyScore(scores: DimensionScores): number {
  const values = Object.values(scores);
  return Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 10) / 10;
}

export function isProficient(scores: DimensionScores): boolean {
  return Object.values(scores).every((score) => score >= 70);
}

export function isVerifiedMastery(scores: DimensionScores): boolean {
  return (
    Object.values(scores).every((score) => score >= 80) &&
    scores.defense >= 85 &&
    scores.transfer >= 85
  );
}

export function starCount(scores: DimensionScores): number {
  return Object.values(scores).filter((score) => score >= 80).length;
}

export function xpForAttempt(attempt: AttemptInput): number {
  const base: Record<MasteryDimension, number> = {
    recall: 10,
    recognition: 15,
    discrimination: 25,
    application: 40,
    diagnosis: 50,
    adaptation: 60,
    defense: 75,
    transfer: 100,
    teach: 125,
  };

  if (attempt.score < 70) return 0;
  const hintPenalty = attempt.usedHint ? 0.5 : 1;
  const repeatPenalty = attempt.isRepeat ? 0.25 : 1;
  const difficultyBonus = attempt.difficulty === "expert" ? 1.25 : attempt.difficulty === "beginner" ? 0.8 : 1;
  return Math.round(base[attempt.dimension] * hintPenalty * repeatPenalty * difficultyBonus);
}
