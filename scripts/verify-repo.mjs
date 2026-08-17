import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const failures = [];

function requirePath(path, label = path) {
  if (!existsSync(path)) failures.push(`missing required ${label}: ${path}`);
}

function forbidPath(path, reason) {
  if (existsSync(path)) failures.push(`${reason}: ${path}`);
}

requirePath("LICENSE", "proprietary license notice");
requirePath("README.md");
requirePath("AGENTS.md");
requirePath("docs/implementation/local-ci.md");
requirePath("content/foundations-course.ts");

forbidPath("app/mastery", "retired learner-progress route must not return");
forbidPath("lib/mastery.ts", "retired mastery engine must not return");
forbidPath("lib/profile.ts", "retired learner profile model must not return");
forbidPath("lib/ranks.ts", "retired rank model must not return");

const workflows = ".github/workflows";
if (existsSync(workflows)) {
  const files = readdirSync(workflows).filter((entry) => !entry.startsWith("."));
  if (files.length > 0) failures.push(`GitHub Actions is disabled for this project; remove workflow files: ${files.join(", ")}`);
}

const readme = readFileSync("README.md", "utf8");
const license = readFileSync("LICENSE", "utf8");
const agents = readFileSync("AGENTS.md", "utf8");

if (!readme.includes("@Gh0stlyKn1ght")) failures.push("README must preserve @Gh0stlyKn1ght attribution");
if (!readme.includes("not open source") && !readme.includes("not open-source")) failures.push("README must state that the project is not open source");
if (!license.includes("All Rights Reserved")) failures.push("LICENSE must retain All Rights Reserved language");
if (!agents.includes("Do not add GitHub Actions")) failures.push("AGENTS.md must preserve the no-GitHub-Actions deployment rule");

if (failures.length > 0) {
  console.error("\nLocal repository policy gate failed:\n");
  for (const failure of failures) console.error(`  - ${failure}`);
  console.error("\nFix the repository policy errors before production promotion.\n");
  process.exit(1);
}

console.log("Repository policy gate passed.");
