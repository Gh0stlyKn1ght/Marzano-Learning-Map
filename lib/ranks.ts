export const ranks = [
  "Novice",
  "Apprentice I",
  "Apprentice II",
  "Apprentice III",
  "Practitioner I",
  "Practitioner II",
  "Practitioner III",
  "Proficient I",
  "Proficient II",
  "Proficient III",
  "Advanced Practitioner I",
  "Advanced Practitioner II",
  "Advanced Practitioner III",
  "Master",
] as const;

export type Rank = (typeof ranks)[number];
