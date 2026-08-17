# AGENTS.md

Instructions for Codex and other coding/research agents working in this repository.

## Project identity

This repository is **Teaching Practice Lab**, a publicly accessible but privately owned instructional learning platform created by **@Gh0stlyKn1ght**. Its primary current-framework research target is the Marzano Focused Teacher Evaluation Model (FTEM), but the product is independent and must not present itself as an official Marzano product or evaluator.

The website is intended to be publicly hosted on **Vercel**. The project is **not open source**. See `LICENSE`.

## Read before changing anything

1. `README.md`
2. `LICENSE`
3. `docs/SUMMARY.md`
4. `docs/project/doctrine.md`
5. `docs/sources/index.md`
6. `docs/sources/registry.md`
7. `docs/implementation/local-ci.md`
8. The relevant skill under `.agents/skills/`

## Non-negotiable rules

### Ownership

- Copyright © 2026 Gh0stlyKn1ght. All Rights Reserved.
- Do not change the project to an open-source license unless explicitly directed by the owner.
- Public website access or source visibility does not grant reuse rights.
- Preserve author credit to `@Gh0stlyKn1ght` in project-level attribution.

### Source integrity

- Prefer primary/current sources.
- Never invent an element name, protocol, desired effect, scoring descriptor, research result, or legal/district requirement.
- Distinguish source fact, paraphrase, interpretation, design decision, and original classroom example.
- Add foundational sources to `docs/sources/registry.md`.

### Copyright boundaries

- Do not commit third-party proprietary PDFs, full protocols, rubrics, scoring guides, branded diagrams, evaluator forms, or training materials unless redistribution rights are verified.
- Public accessibility is not permission to republish.
- Summarize, cite, and create original explanations rather than clone source materials.

### Student privacy

- No student names, IDs, IEP details, disability information, discipline records, grades tied to identities, or other student PII in examples, fixtures, screenshots, or committed data.

### Architecture

- Markdown documentation remains the durable knowledge layer.
- MkDocs is the research/reference renderer.
- Next.js is the public learning application.
- Vercel is the intended production host.
- Do not create a second, diverging content tree for Next.js.
- Use Mermaid for durable text-based diagrams.
- Three.js is optional and should only be introduced where visualization improves instruction.
- Do not add databases, authentication, learner-progress infrastructure, or cloud storage without an explicit project decision.

### CI and deployment

- **Do not add GitHub Actions.** GitHub Actions is disabled for this project and is not the CI gate.
- Run applicable release gates locally before production promotion.
- App gate: `npm run ci:local`.
- Documentation gate when docs change: `mkdocs build --strict`.
- Production deployment targets Vercel only after local gates pass.
- Do not use production deployment as the first build test.

### Content quality

Do not generate template filler. Every instructional page should explain the mechanism, evidence, misconceptions/failure modes, and application. If a source does not support a claim, mark it unresolved rather than filling the gap.

## Skills

Use the appropriate skill before specialized work:

- `.agents/skills/source-research/SKILL.md`
- `.agents/skills/framework-analysis/SKILL.md`
- `.agents/skills/docs-authoring/SKILL.md`
- `.agents/skills/evidence-reporting/SKILL.md`

## Definition of done

A change is not ready for intentional production promotion unless:

- links and navigation still make sense,
- claims have appropriate source support,
- original analysis is distinguishable from sourced material,
- no third-party proprietary material was improperly copied,
- no student PII is present,
- `npm run ci:local` passes for application changes,
- `mkdocs build --strict` passes when documentation changes,
- the changed public routes receive a local smoke test.

## Commit style

Use short conventional prefixes where useful:

- `docs:` documentation/content
- `research:` sources/framework research
- `agents:` agent instructions/skills
- `arch:` architecture decisions
- `feat:` application feature
- `fix:` correction
- `ci:` local validation/release tooling

Favor small commits that explain one decision or coherent change.
