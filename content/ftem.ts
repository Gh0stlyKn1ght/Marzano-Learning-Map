export type FtemDomain = {
  slug: string;
  number: string;
  title: string;
  count: number;
  summary: string;
  status: "ready" | "researching";
  elements: string[];
  note?: string;
};

export const ftemDomains: FtemDomain[] = [
  {
    slug: "standards-based-planning",
    number: "01",
    title: "Standards-Based Planning",
    count: 3,
    summary: "Design standards-aligned lessons, tasks, resources, and measures before instruction.",
    status: "researching",
    elements: ["Planning Standards-Based Lessons/Units"],
    note: "The current public source clearly names the first planning element and describes the other two. Exact formal labels for all three remain intentionally unresolved until verified from an authoritative current protocol or licensed district copy.",
  },
  {
    slug: "standards-based-instruction",
    number: "02",
    title: "Standards-Based Instruction",
    count: 10,
    summary: "Select and execute instruction appropriate to the learning target and cognitive demand.",
    status: "ready",
    elements: [
      "Identifying Critical Content",
      "Previewing New Content",
      "Processing New Content",
      "Using Questions to Help Students Elaborate on Content",
      "Reviewing Content",
      "Helping Students Practice Skills, Strategies, and Processes",
      "Helping Students Examine Similarities and Differences",
      "Helping Students Examine Their Reasoning",
      "Helping Students Revise Their Knowledge",
      "Helping Students Engage in Cognitively Complex Tasks",
    ],
  },
  {
    slug: "conditions-for-learning",
    number: "03",
    title: "Conditions for Learning",
    count: 7,
    summary: "Create the assessment, feedback, engagement, relationship, expectations, and procedure conditions that support rigorous learning.",
    status: "ready",
    elements: [
      "Using Formative Assessment to Track Progress",
      "Providing Feedback and Celebrating Progress",
      "Organizing Students to Interact with Content",
      "Using Engagement Strategies",
      "Establishing and Acknowledging Adherence to Rules and Procedures",
      "Establishing and Maintaining Effective Relationships in Student-Centered Classrooms",
      "Communicating High Expectations for Each Student to Close the Achievement Gap",
    ],
  },
  {
    slug: "professional-responsibilities",
    number: "04",
    title: "Professional Responsibilities",
    count: 3,
    summary: "Maintain professional practice, expertise, leadership, and collaboration.",
    status: "ready",
    elements: [
      "Adhering to School and District Policies and Procedures",
      "Maintaining Expertise in Content and Pedagogy",
      "Promoting Teacher Leadership and Collaboration",
    ],
  },
];

export function getFtemDomain(slug: string) {
  return ftemDomains.find((domain) => domain.slug === slug);
}
