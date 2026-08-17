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
    id: "desired-effect-001",
    title: "Desired Effect",
    prompt: "Which statement is written most clearly as a desired student effect rather than a teacher activity?",
    choices: [
      { id: "a", label: "The teacher displays the learning target." },
      { id: "b", label: "Students use a graphic organizer." },
      { id: "c", label: "Students explain how two scheduling algorithms differ and connect the difference to system behavior." },
      { id: "d", label: "The teacher asks higher-order questions." },
    ],
    answer: "c",
    explanation: "A desired effect describes the student change or performance you expect to see. The other options describe instructional actions or materials.",
    dimension: "recognition",
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
    explanation: "Visible compliance is not enough to infer learning. Strong analysis resists unsupported certainty and seeks evidence tied to the intended effect.",
    dimension: "diagnosis",
    difficulty: "practitioner",
  },
  {
    id: "evidence-003",
    title: "Working Code",
    prompt: "Every student submits a working Python program after following the teacher's model. What is the most defensible conclusion?",
    choices: [
      { id: "a", label: "All students understand the underlying logic." },
      { id: "b", label: "The task was successful because every program ran." },
      { id: "c", label: "Students reproduced a working result, but conceptual understanding still needs evidence." },
      { id: "d", label: "Modeling should not be used in programming lessons." },
    ],
    answer: "c",
    explanation: "A working product is useful evidence for some claims, but it does not automatically prove independent conceptual understanding. A trace, explanation, modification, or transfer task would answer a stronger question.",
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
  {
    id: "adapt-002",
    title: "Target the Problem",
    prompt: "Students can calculate Round Robin scheduling correctly but cannot explain why a smaller time quantum may improve responsiveness. Which adaptation best targets the gap?",
    choices: [
      { id: "a", label: "Give them ten more scheduling calculations." },
      { id: "b", label: "Have them compare two time quanta and explain the effect on process responsiveness." },
      { id: "c", label: "Shorten the assignment." },
      { id: "d", label: "Repeat the original definition exactly as written." },
    ],
    answer: "b",
    explanation: "The gap is explanatory reasoning, not arithmetic execution. The adaptation should force students to connect the scheduling behavior to the system effect.",
    dimension: "adaptation",
    difficulty: "practitioner",
  },
  {
    id: "distinguish-001",
    title: "Read for Function",
    prompt: "A prompt says students 'review their code' and explain why their original condition failed. What should you do before assigning a framework label?",
    choices: [
      { id: "a", label: "Choose Reviewing Content because the word review appears." },
      { id: "b", label: "Identify the cognitive purpose and evidence before deciding which practice fits." },
      { id: "c", label: "Choose engagement because students are talking." },
      { id: "d", label: "Assume several framework practices are always equally correct." },
    ],
    answer: "b",
    explanation: "Framework identification should follow instructional function, not keywords. Here the important behavior may be examining reasoning, revising knowledge, or another practice depending on the actual task and evidence.",
    dimension: "discrimination",
    difficulty: "practitioner",
  },
  {
    id: "distinguish-002",
    title: "Group Work Is Not the Label",
    prompt: "Students are in groups during a networking lab. Which question best helps determine the instructional practice actually occurring?",
    choices: [
      { id: "a", label: "How many students are in each group?" },
      { id: "b", label: "Are the desks arranged in pods?" },
      { id: "c", label: "What are students required to do cognitively with the content, and what evidence shows it?" },
      { id: "d", label: "Did the teacher call the task collaborative?" },
    ],
    answer: "c",
    explanation: "Group structure is surface information. The instructional practice is better identified through purpose, cognitive demand, and evidence of student response.",
    dimension: "discrimination",
    difficulty: "beginner",
  },
  {
    id: "uncertainty-001",
    title: "One Correct Answer",
    prompt: "One student gives a strong whole-class explanation and the rest of the class is silent. What can you conclude about class-wide understanding?",
    choices: [
      { id: "a", label: "The class understands because the answer was correct." },
      { id: "b", label: "The strongest students understand, so the lesson can move on." },
      { id: "c", label: "There is not enough evidence to make a class-wide claim." },
      { id: "d", label: "The class does not understand because only one student spoke." },
    ],
    answer: "c",
    explanation: "A single response is evidence about that response, not automatically about the entire class. The next move is to sample understanding more broadly.",
    dimension: "diagnosis",
    difficulty: "expert",
  },
  {
    id: "scenario-001",
    title: "Packet Trace Revision",
    prompt: "Students annotate where they think a packet-flow failure occurs. The teacher notices many are reasoning from device names instead of packet path, models one trace, then asks students to revise. What is the most important next evidence?",
    choices: [
      { id: "a", label: "Whether students liked the new diagram." },
      { id: "b", label: "Whether the teacher completed the model quickly." },
      { id: "c", label: "Whether revised annotations and explanations now use packet-path reasoning." },
      { id: "d", label: "Whether every student used the same color annotation." },
    ],
    answer: "c",
    explanation: "The adaptation targeted the reasoning error, so the next evidence should show whether student reasoning changed in the intended direction.",
    dimension: "diagnosis",
    difficulty: "expert",
  },
  {
    id: "scenario-002",
    title: "Partial Success",
    prompt: "Students correctly calculate two CPU scheduling outcomes but justify their final algorithm choice only by saying 'this number is smaller.' Which interpretation is strongest?",
    choices: [
      { id: "a", label: "The lesson failed completely." },
      { id: "b", label: "The desired effect occurred because the calculations were correct." },
      { id: "c", label: "Procedural evidence is strong, but the reasoning required for the final decision is still weak." },
      { id: "d", label: "The students need more vocabulary definitions before any further work." },
    ],
    answer: "c",
    explanation: "Instructional evidence can be mixed. The calculation demonstrates one capability while the weak justification exposes another gap. Good diagnosis preserves both facts.",
    dimension: "diagnosis",
    difficulty: "expert",
  },
  {
    id: "defense-001",
    title: "Why This Strategy?",
    prompt: "An administrator asks why you used pair explanation after students independently traced a loop. Which answer is strongest?",
    choices: [
      { id: "a", label: "Because pair work is a Marzano strategy." },
      { id: "b", label: "Because students like talking to each other." },
      { id: "c", label: "Because the trace showed several students could execute steps without explaining the termination condition, so I needed them to make that reasoning explicit and then check it again." },
      { id: "d", label: "Because the lesson plan said to use pairs." },
    ],
    answer: "c",
    explanation: "The strongest defense connects evidence, diagnosed need, instructional choice, and the next check for understanding. Framework vocabulary can support that reasoning, but it should not replace it.",
    dimension: "adaptation",
    difficulty: "expert",
  },
];
