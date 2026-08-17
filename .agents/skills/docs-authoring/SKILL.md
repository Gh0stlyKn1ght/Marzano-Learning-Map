# Documentation Authoring Skill

## Purpose

Use this skill when creating or reorganizing documentation pages.

## Rules

- Write for a teacher who wants to understand and use the idea, not for a compliance auditor.
- Use plain Markdown that remains useful when viewed directly on GitHub.
- Use headings that make pages skimmable.
- Prefer short tables for comparisons, not giant rubric tables.
- Use Mermaid when relationships, processes, states, or architecture are clearer visually.
- Every diagram must communicate information, not decoration.
- Link to related internal pages with relative links.
- Cite authoritative external sources near claims they support.
- Separate framework fact from original example or interpretation.

## Page pattern for training content

Use this as a thinking checklist, not a rigid visual template:

- Why this matters
- What the practice is
- What problem it solves
- Mechanism
- What it can look like
- Student evidence
- Failure modes / false positives
- Adaptation ideas
- Subject-specific scenarios
- Reflection / deliberate practice
- Sources

Do not generate empty headings to satisfy the pattern. Omit sections that are not yet supported and mark research gaps explicitly.

## Navigation

When adding a major page:

1. link it from `docs/SUMMARY.md`,
2. add it to `mkdocs.yml` if it belongs in primary navigation,
3. ensure parent `index.md` pages point to it where useful.

## Diagrams

Default to Mermaid. Keep node labels concise. Complex diagrams should be split rather than becoming unreadable posters.
