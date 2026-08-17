export type Choice = { id: string; label: string };

export type FoundationChallenge = {
  id: string;
  title: string;
  prompt: string;
  choices: Choice[];
  answer: string;
  explanation: string;
  dimension: "recall" | "recognition" | "discrimination" | "diagnosis" | "adaptation";
  difficulty: "beginner" | "practitioner" | "expert";
};

export const foundationsChallenges: FoundationChallenge[] = [
  {
    id: "evidence-001",
    title: "Evidence vs Activity",
    prompt: "A teacher uses a think-pair-share before introducing subnetting. Which observation is the strongest evidence that the strategy produced its intended learning effect?",
    choices: [
      { id: "a", label: "Every student has a partner." },
      { id: "b", label: "Students are talking for the full allotted time." },
      { id: "c", label: "Students connect prior IPv4 knowledge to the new subnetting problem in their explanations." },
      { id: "d", label: "The teacher circulates to every group." },
    ],
    answer: "c",
    explanation: "The activity itself is not the evidence. The useful evidence is a student response showing that the intended cognitive connection actually occurred.",
    dimension: "diagnosis",
    difficulty: "beginner",
  },
  {
    id: "evidence-002",
    title: "Not Enough Evidence",
    prompt: "Students are quiet, on task, and completing a worksheet. Can you conclude that the desired learning effect is occurring?",
    choices: [
      { id: "a", label: "Yes. On-task behavior proves learning." },
      { id: "b", label: "No. More evidence of student thinking or performance is needed." },
      { id: "c", label: "Yes, if the room is well managed." },
      { id: "d", label: "No, because worksheets are always low-level tasks." },
    ],
    answer: "b",
    explanation: "Visible compliance is not enough to infer learning. An expert should resist unsupported certainty and seek evidence tied to the intended effect.",
    dimension: "diagnosis",
    difficulty: "practitioner",
  },
  {
    id: "adapt-001",
    title: "Adaptation Loop",
    prompt: "You check for understanding and discover that only a small group can explain why a loop terminates. What is the strongest next move?",
    choices: [
      { id: "a", label: "Continue because the explanation was already taught." },
      { id: "b", label: "Record the low result and move on to the next standard." },
      { id: "c", label: "Change the instructional approach, then collect evidence again." },
      { id: "d", label: "Give the correct explanation and count that as evidence." },
    ],
    answer: "c",
    explanation: "The practice loop is strategy → evidence → diagnosis → adaptation → new evidence. Adaptation is only meaningful if its effect is checked again.",
    dimension: "adaptation",
    difficulty: "practitioner",
  },
];
