# Documentation Map

This page is the canonical human navigation map for the repository. It remains useful when browsing directly on GitHub even if the MkDocs site is unavailable.

## Project

- [Project doctrine](project/doctrine.md)
- [Roadmap](project/roadmap.md)
- [Terminology](project/terminology.md)

## Product

- [Teaching Practice Lab product vision](product/index.md)
- [Mastery and progression system](product/mastery-system.md)
- [Challenge and boss system](product/challenge-system.md)
- [Lightweight UI design system](product/ui-design.md)
- [Game platform build roadmap](product/build-roadmap.md)

## Frameworks

- [Framework overview](frameworks/index.md)
- [Marzano Focused Teacher Evaluation Model](frameworks/ftem/index.md)
- [Historical 2011 model notes](frameworks/legacy-2011/index.md)

## Architecture

- [Architecture overview](architecture/index.md)
- [Technology and library decisions](architecture/libraries.md)
- [Game platform architecture](architecture/game-platform.md)
- [Profile and mastery data model](architecture/data-model.md)

## Sources and research

- [Source policy](sources/index.md)
- [Source registry](sources/registry.md)

## Agent operations

These files live outside the MkDocs `docs/` tree but are directly navigable on GitHub:

- [Root agent instructions](../AGENTS.md)
- [Source research skill](../.agents/skills/source-research/SKILL.md)
- [Framework analysis skill](../.agents/skills/framework-analysis/SKILL.md)
- [Documentation authoring skill](../.agents/skills/docs-authoring/SKILL.md)
- [Evidence/report design skill](../.agents/skills/evidence-reporting/SKILL.md)

## Current implementation doctrine

The repository is now explicitly **learning-platform first**.

The order is:

1. authoritative knowledge and framework research,
2. mastery rules,
3. challenge design,
4. one complete reference learning path,
5. lightweight Next.js learning shell,
6. persistence and profiles,
7. spaced review,
8. selective Three.js game mechanics,
9. Socratic defense coach,
10. expansion to the complete framework.

Three.js is a presentation layer. The learning, assessment, mastery, and progression engines must remain independently testable.
