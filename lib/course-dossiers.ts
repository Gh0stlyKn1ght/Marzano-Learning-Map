import { readFileSync } from "node:fs";
import { join } from "node:path";

const identifyingCriticalContentPath = join(
  process.cwd(),
  "docs",
  "course",
  "dossiers",
  "standards-based-instruction",
  "identifying-critical-content.md",
);
const previewingNewContentPath = join(
  process.cwd(),
  "docs",
  "course",
  "dossiers",
  "standards-based-instruction",
  "previewing-new-content.md",
);
const processingNewContentPath = join(
  process.cwd(),
  "docs",
  "course",
  "dossiers",
  "standards-based-instruction",
  "processing-new-content.md",
);
const elaboratingWithQuestionsPath = join(
  process.cwd(),
  "docs",
  "course",
  "dossiers",
  "standards-based-instruction",
  "elaborating-with-questions.md",
);

type DossierBlock =
  | { type: "paragraph"; value: string }
  | { type: "bullets"; items: string[] }
  | { type: "subheading"; value: string };

export type CourseDossier = {
  domain: string;
  slug: string;
  title: string;
  status: string;
  sources: string[];
  sections: Array<{ heading: string; blocks: DossierBlock[] }>;
};

const dossierRoutes = [
  {
    domain: "standards-based-instruction",
    slug: "identifying-critical-content",
    title: "Identifying Critical Content",
  },
  {
    domain: "standards-based-instruction",
    slug: "previewing-new-content",
    title: "Previewing New Content",
  },
  {
    domain: "standards-based-instruction",
    slug: "processing-new-content",
    title: "Processing New Content",
  },
  {
    domain: "standards-based-instruction",
    slug: "using-questions-to-help-students-elaborate-on-content",
    title: "Using Questions to Help Students Elaborate on Content",
  },
] as const;

function clean(value: string) {
  return value.replaceAll("**", "").replaceAll("`", "");
}

function parseDossier(markdown: string, domain: string, slug: string): CourseDossier {
  const lines = markdown.split(/\r?\n/);
  const title = clean(lines.find((line) => line.startsWith("# "))?.slice(2) ?? "Untitled lesson");
  const status = clean(lines.find((line) => line.startsWith("**Current status:**"))?.replace("**Current status:**", "").trim() ?? "Source status unavailable");
  const sourceLine = lines.find((line) => line.startsWith("**Primary sources:**")) ?? "";
  const sources = sourceLine.replace("**Primary sources:**", "").match(/`([^`]+)`/g)?.map((source) => clean(source)) ?? [];
  const sections: CourseDossier["sections"] = [];
  let current: CourseDossier["sections"][number] | undefined;
  let paragraph: string[] = [];
  let bullets: string[] = [];

  function flushParagraph() {
    if (paragraph.length && current) current.blocks.push({ type: "paragraph", value: clean(paragraph.join(" ")) });
    paragraph = [];
  }

  function flushBullets() {
    if (bullets.length && current) current.blocks.push({ type: "bullets", items: bullets.map(clean) });
    bullets = [];
  }

  for (const line of lines) {
    if (line.startsWith("## ")) {
      flushParagraph();
      flushBullets();
      current = { heading: clean(line.slice(3)), blocks: [] };
      sections.push(current);
      continue;
    }
    if (!current) continue;
    if (line.startsWith("### ")) {
      flushParagraph();
      flushBullets();
      current.blocks.push({ type: "subheading", value: clean(line.slice(4)) });
      continue;
    }
    if (line.startsWith("- ")) {
      flushParagraph();
      bullets.push(line.slice(2));
      continue;
    }
    if (!line.trim()) {
      flushParagraph();
      flushBullets();
      continue;
    }
    paragraph.push(line.trim());
  }
  flushParagraph();
  flushBullets();

  return { domain, slug, title, status, sources, sections };
}

export function getCourseDossier(domain: string, slug: string) {
  const route = dossierRoutes.find((item) => item.domain === domain && item.slug === slug);
  if (!route) return undefined;
  let markdown: string;
  switch (slug) {
    case "identifying-critical-content":
      markdown = readFileSync(identifyingCriticalContentPath, "utf8");
      break;
    case "previewing-new-content":
      markdown = readFileSync(previewingNewContentPath, "utf8");
      break;
    case "processing-new-content":
      markdown = readFileSync(processingNewContentPath, "utf8");
      break;
    case "using-questions-to-help-students-elaborate-on-content":
      markdown = readFileSync(elaboratingWithQuestionsPath, "utf8");
      break;
    default:
      return undefined;
  }
  return parseDossier(markdown, route.domain, route.slug);
}

export function getCourseDossierRoutes() {
  return dossierRoutes.map(({ domain, slug, title }) => ({ domain, slug, title }));
}
