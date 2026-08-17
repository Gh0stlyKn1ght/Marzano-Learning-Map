export type FoundationLessonSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type FoundationLesson = {
  number: string;
  slug: string;
  title: string;
  summary: string;
  objective: string;
  keyIdea: string;
  sections: FoundationLessonSection[];
  recall: string[];
  defense: string[];
};

export const foundationLessons: FoundationLesson[] = [
  {
    number: "01",
    slug: "framework-orientation",
    title: "Framework Orientation",
    summary: "Treat the framework as a way to reason about instruction, not a checklist of visible teacher behaviors.",
    objective: "Explain why a strategy name alone is not enough to judge instructional quality.",
    keyIdea: "Instructional practice is a chain of intent, action, student response, evidence, and adjustment.",
    sections: [
      {
        heading: "Start with the instructional problem",
        body: [
          "A useful framework begins with a problem of learning. What are students supposed to understand, practice, revise, compare, or use? The strategy only makes sense in relation to that problem.",
          "This prevents a common error: seeing a classroom behavior and immediately attaching a framework label to it. Group work, questioning, movement, technology, and discussion are activities. Their instructional meaning depends on purpose and student response.",
        ],
      },
      {
        heading: "Think in a causal chain",
        body: [
          "A strong explanation should connect what the teacher intended to what students actually demonstrated. If the chain breaks, the teacher needs more evidence or a different move.",
        ],
        bullets: [
          "Intent: what change in learning is being targeted?",
          "Strategy: what instructional move is being used?",
          "Desired effect: what should students do or understand if the move works?",
          "Evidence: what observable student response supports that conclusion?",
          "Adaptation: what changes when the evidence is weak or mixed?",
        ],
      },
      {
        heading: "Computer science example",
        body: [
          "A teacher asks students to work in pairs while tracing a loop. Pairing students is not the instructional result. The important question is whether students can explain how the loop state changes and why the loop terminates. The student explanation is closer to evidence than the fact that students were paired.",
        ],
      },
    ],
    recall: [
      "What is the difference between a visible activity and an instructional effect?",
      "Name the five parts of the causal chain used in this course.",
      "Why is identifying a strategy not enough to judge whether it worked?",
    ],
    defense: [
      "An observer says, ‘I saw group work, so students were interacting with content.’ What would you need to know before agreeing?",
      "Explain the framework to a new teacher without using the word rubric.",
    ],
  },
  {
    number: "02",
    slug: "desired-effect",
    title: "Desired Effect",
    summary: "Define what should change in student thinking, performance, or understanding because of the instructional move.",
    objective: "Write a desired effect that describes student evidence rather than teacher activity.",
    keyIdea: "The desired effect belongs to the learner, not the teacher.",
    sections: [
      {
        heading: "Teacher action is not the endpoint",
        body: [
          "‘I asked questions,’ ‘I used a graphic organizer,’ and ‘students worked in groups’ describe actions. They do not tell you whether the intended learning occurred.",
          "A desired effect states what should become visible in student reasoning or performance if the strategy is effective.",
        ],
      },
      {
        heading: "Make it observable",
        body: [
          "Useful desired effects are specific enough that another person could look for evidence. Avoid vague goals such as students being engaged, getting it, or participating well unless those terms are operationalized.",
        ],
        bullets: [
          "Students explain the relationship between two concepts.",
          "Students revise an incorrect model after examining evidence.",
          "Students independently execute a procedure with fewer errors.",
          "Students justify why one solution is more appropriate than another.",
        ],
      },
      {
        heading: "Computer science example",
        body: [
          "If students preview subnetting, the desired effect is not ‘students completed the warm-up.’ A stronger effect is that students connect prior knowledge about IPv4 addressing to the new subnetting problem and can state the connection in their own reasoning.",
        ],
      },
    ],
    recall: [
      "Why should a desired effect be written from the learner side?",
      "Turn ‘students completed a Kahoot’ into a possible desired effect.",
      "What makes a desired effect observable?",
    ],
    defense: [
      "Your administrator asks, ‘What did you expect students to be able to do because of this strategy?’ Answer without naming the activity.",
      "Explain why participation is not automatically the same thing as the desired effect.",
    ],
  },
  {
    number: "03",
    slug: "evidence-vs-activity",
    title: "Evidence vs Activity",
    summary: "Separate evidence of student learning from evidence that a classroom activity occurred.",
    objective: "Identify stronger and weaker evidence in an instructional scenario.",
    keyIdea: "Evidence should support a claim about the desired effect, not merely confirm that the strategy happened.",
    sections: [
      {
        heading: "Surface evidence",
        body: [
          "A classroom can look productive while giving very little information about learning. Students may be quiet, busy, using technology, talking in groups, or finishing assignments. Those observations can matter, but they often do not answer the central question: what did students understand or become able to do?",
        ],
      },
      {
        heading: "Stronger evidence",
        body: [
          "Stronger evidence is tied to the intended effect. Depending on the lesson, it may come from student explanations, work products, demonstrations, error patterns, revisions, comparisons, questions, or independent performance.",
        ],
      },
      {
        heading: "Evidence hierarchy",
        body: [
          "Do not treat this as a universal ranking. The usefulness of evidence depends on the claim being made. The habit is to ask whether the evidence actually supports that claim.",
        ],
        bullets: [
          "Weak for learning claims: students were quiet.",
          "Still incomplete: students completed the task.",
          "Stronger: student work demonstrates the targeted reasoning.",
          "Stronger: students can explain or transfer the concept independently.",
        ],
      },
    ],
    recall: [
      "Why is completion evidence weaker than reasoning evidence for many learning claims?",
      "Give one example of evidence that a strategy occurred and one example that the desired effect occurred.",
      "What question should you ask before calling an observation evidence?",
    ],
    defense: [
      "An observer says, ‘Everyone was on task, so the lesson was successful.’ How would you respond without dismissing classroom management?",
      "Defend one piece of student evidence from a programming lesson and explain exactly what claim it supports.",
    ],
  },
  {
    number: "04",
    slug: "not-enough-evidence",
    title: "Not Enough Evidence",
    summary: "Recognize when the available observations do not support a confident instructional conclusion.",
    objective: "State what additional evidence is needed before making a claim.",
    keyIdea: "Expertise includes refusing to overclaim.",
    sections: [
      {
        heading: "Uncertainty is not weakness",
        body: [
          "A strong instructional analysis does not force a conclusion from thin evidence. If you can only see activity, compliance, or a small sample of student responses, the correct move may be to gather more information.",
        ],
      },
      {
        heading: "Ask what is missing",
        body: [
          "Instead of saying ‘I cannot tell’ and stopping, identify what evidence would resolve the uncertainty. That makes the response analytical rather than evasive.",
        ],
        bullets: [
          "Can students explain the reasoning independently?",
          "Does student work show the targeted distinction?",
          "How widespread is the misconception?",
          "Can students apply the idea in a different example?",
          "Did the response improve after the instructional adjustment?",
        ],
      },
      {
        heading: "Computer science example",
        body: [
          "Twenty students produce working code after following a teacher model. That proves the code ran, but it may not prove that students understand the logic. A follow-up trace, explanation, modification, or transfer task would provide stronger evidence about understanding.",
        ],
      },
    ],
    recall: [
      "When is ‘not enough evidence’ the strongest answer?",
      "What turns uncertainty into a useful instructional response?",
      "Why can working code still be insufficient evidence of conceptual understanding?",
    ],
    defense: [
      "You are asked whether students mastered the concept after one correct whole-class response. Explain what else you would want to know.",
      "Give an example of a conclusion you would refuse to make from classroom appearance alone.",
    ],
  },
  {
    number: "05",
    slug: "adaptation-loop",
    title: "Adaptation Loop",
    summary: "Use evidence to decide whether instruction should continue, change, slow down, deepen, or branch.",
    objective: "Choose an adaptation that responds to the evidence and identify what should be checked next.",
    keyIdea: "Adaptation is incomplete until you collect new evidence after the change.",
    sections: [
      {
        heading: "Evidence should change the next move",
        body: [
          "Checking for understanding has little value if the result never affects instruction. When the desired effect is weak, the teacher needs a defensible response rather than simply recording that students struggled.",
        ],
      },
      {
        heading: "Adapt to the diagnosed problem",
        body: [
          "Do not change activities randomly. The adjustment should address the pattern in the evidence. If students lack prerequisite knowledge, reteaching the same explanation faster is unlikely to solve the problem. If students can perform a procedure but cannot explain why it works, the next move should expose or strengthen reasoning.",
        ],
      },
      {
        heading: "Close the loop",
        body: [
          "After changing instruction, check again. Without new evidence, you do not know whether the adaptation repaired the problem.",
        ],
        bullets: [
          "Observe the initial evidence.",
          "Diagnose the likely learning problem.",
          "Select a targeted adjustment.",
          "Collect new evidence.",
          "Decide whether to continue, deepen, or adapt again.",
        ],
      },
    ],
    recall: [
      "Why is an adaptation not complete when the teacher changes the activity?",
      "What makes an adaptation targeted rather than random?",
      "What should happen after the adaptation?",
    ],
    defense: [
      "Only a third of the class can explain why a loop terminates. What would you change, and what evidence would you collect next?",
      "Explain why ‘I retaught it’ is not yet a complete reflection.",
    ],
  },
  {
    number: "06",
    slug: "distinguish-concepts",
    title: "Distinguish the Concepts",
    summary: "Learn neighboring practices by contrasting their purposes, timing, and evidence instead of memorizing isolated definitions.",
    objective: "Explain why one instructional concept fits a scenario better than a plausible alternative.",
    keyIdea: "You know a concept more deeply when you can explain why a nearby concept does not fit.",
    sections: [
      {
        heading: "Similarity creates the hard questions",
        body: [
          "Framework vocabulary often overlaps in ordinary classroom language. A discussion could involve processing, elaboration, review, reasoning, interaction, or engagement. The label comes from what students are doing cognitively and why the teacher selected the move.",
        ],
      },
      {
        heading: "Use three comparison questions",
        body: [
          "When two concepts seem plausible, compare their instructional purpose, their place in the learning sequence, and the evidence you would expect if each one were occurring.",
        ],
        bullets: [
          "Purpose: what problem is each practice solving?",
          "Timing: what kind of knowledge or learning state is present?",
          "Evidence: what student response would distinguish one from the other?",
        ],
      },
      {
        heading: "Do not answer by keywords",
        body: [
          "If the scenario says students are reviewing a diagram, that does not automatically mean the framework concept is ‘reviewing content.’ The actual cognitive task may be comparison, explanation, revision, or something else. Read for function, not vocabulary.",
        ],
      },
    ],
    recall: [
      "What three questions help distinguish neighboring concepts?",
      "Why are keywords unreliable evidence of the instructional practice?",
      "What does cognitive function mean in this context?",
    ],
    defense: [
      "Two framework labels both seem plausible. Talk through how you would choose between them.",
      "Explain why the phrase ‘students reviewed their code’ does not automatically identify the instructional practice.",
    ],
  },
  {
    number: "07",
    slug: "applied-scenario",
    title: "Applied Scenario",
    summary: "Analyze a classroom episode from intent through evidence and adaptation without being told which concept to use.",
    objective: "Build a complete instructional explanation from an unfamiliar scenario.",
    keyIdea: "Start with the learning claim, then work backward and forward through the evidence chain.",
    sections: [
      {
        heading: "Scenario",
        body: [
          "Students are learning CPU scheduling. The teacher models FCFS and Round Robin with the same process queue, then asks pairs to predict turnaround time for a new queue and defend which algorithm they would choose for a stated system goal. Several pairs can calculate both results but cannot justify the choice beyond saying one number is smaller.",
        ],
      },
      {
        heading: "Analyze the evidence",
        body: [
          "The calculations suggest procedural progress. The weak justification suggests that the reasoning demanded by the final decision is not yet secure. A useful analysis separates what students can already do from what the target still requires.",
        ],
      },
      {
        heading: "Possible adaptation",
        body: [
          "Give students two contrasting system goals, such as minimizing average wait versus improving responsiveness, and require them to connect the scheduling result to the stated goal. Then sample explanations again. The adaptation targets the missing reasoning rather than repeating the arithmetic.",
        ],
      },
    ],
    recall: [
      "What evidence in the scenario shows procedural success?",
      "What evidence shows the remaining reasoning gap?",
      "Why does the proposed adaptation fit the diagnosed problem?",
    ],
    defense: [
      "Defend the claim that the original activity was only partially successful.",
      "What additional evidence would convince you that students can transfer the scheduling reasoning?",
    ],
  },
  {
    number: "08",
    slug: "defend-the-decision",
    title: "Defend the Decision",
    summary: "Practice explaining instructional choices under follow-up questioning without hiding behind framework vocabulary.",
    objective: "Answer purpose, evidence, and adaptation questions in plain professional language.",
    keyIdea: "Instructional vocabulary should support your reasoning, not replace it.",
    sections: [
      {
        heading: "Lead with the learning problem",
        body: [
          "A strong defense begins with what students needed to learn and the evidence that informed your decision. Naming a framework element can add precision, but it should not be the entire justification.",
        ],
      },
      {
        heading: "Expect the second question",
        body: [
          "Most weak explanations survive one question and collapse on the follow-up. Train yourself to anticipate: How do you know? What did students do? How many students? What changed? Why that adjustment? What would you do next?",
        ],
      },
      {
        heading: "A defensible answer pattern",
        body: [
          "Use a short chain: target → reason for the strategy → evidence observed → interpretation → next move. This keeps the explanation grounded without turning it into a script.",
        ],
      },
    ],
    recall: [
      "What should come before framework vocabulary in an instructional defense?",
      "Name five follow-up questions you should be prepared to answer.",
      "What is the short defense chain used in this lesson?",
    ],
    defense: [
      "Why did you use pair discussion instead of direct explanation at that point in the lesson?",
      "How do you know the strategy worked, and what would have caused you to change it?",
      "What would you do differently if you taught the lesson tomorrow?",
    ],
  },
  {
    number: "09",
    slug: "integrated-observation",
    title: "Integrated Observation",
    summary: "Put the complete reasoning loop together and analyze instruction without reducing the observation to a checklist.",
    objective: "Produce a concise observation analysis that distinguishes action, effect, evidence, and adaptation.",
    keyIdea: "The final question is not ‘Did I use the strategy?’ It is ‘What evidence supports the instructional claim, and what did I do with that evidence?’",
    sections: [
      {
        heading: "Observation case",
        body: [
          "A teacher introduces a networking concept with a short prediction task. Students then compare two packet-flow diagrams, annotate where they think a failure occurs, and explain their reasoning to a partner. During circulation, the teacher notices that many students are reasoning from device names instead of packet path. The teacher pauses the task, models one packet trace with a different diagram, then asks students to revise their original annotations and explain what changed.",
        ],
      },
      {
        heading: "What matters",
        body: [
          "There are several visible activities, but the stronger story is the sequence of evidence and adjustment. Students expose initial reasoning, the teacher detects a pattern in that reasoning, instruction changes, and students revise their representation. The observer should still ask whether the revised explanations actually show the intended understanding.",
        ],
      },
      {
        heading: "Your analysis",
        body: [
          "Describe the learning target you infer, the strongest student evidence, the misconception that triggered the adjustment, why the adjustment was reasonable, and what evidence you would inspect next. If the scenario does not support a claim, say so instead of inventing certainty.",
        ],
      },
    ],
    recall: [
      "What event triggered the instructional adaptation?",
      "Why are the revised annotations potentially stronger evidence than participation in the partner discussion?",
      "What claim still requires additional evidence?",
    ],
    defense: [
      "Give a two-minute post-observation explanation of this lesson using target, evidence, interpretation, adaptation, and next evidence.",
      "Identify one conclusion you would refuse to make from the scenario as written.",
    ],
  },
];

export function getFoundationLesson(slug: string) {
  return foundationLessons.find((lesson) => lesson.slug === slug);
}
