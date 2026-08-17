# AGENTS.md

Instructions for Codex and other coding/research agents working in this repository.

## Project identity

This repository is **Teaching Practice Lab**, a documentation-first instructional expertise system. Its primary current-framework research target is the Marzano Focused Teacher Evaluation Model (FTEM), but the product is independent and must not present itself as an official Marzano product or evaluator.

## Read before changing anything

1. `README.md`
2. `docs/SUMMARY.md`
3. `docs/project/doctrine.md`
4. `docs/sources/index.md`
5. `docs/sources/registry.md`
6. The relevant skill under `.agents/skills/`

## Non-negotiable rules

### Source integrity

- Prefer primary/current sources.
- Never invent an element name, protocol, desired effect, scoring descriptor, research result, or legal/district requirement.
- Distinguish source fact, paraphrase, interpretation, design decision, and original classroom example.
- Add foundational sources to `docs/sources/registry.md`.

### Copyright

- Do not commit proprietary PDFs, full protocols, rubrics, scoring guides, branded diagrams, evaluator forms, or training materials unless redistribution rights are verified.
- Public accessibility is not permission to republish.
- Summarize and cite rather than clone.

### Student privacy

- No student names, IDs, IEP details, disability information, discipline records, grades tied to identities, or other student PII in examples, fixtures, screenshots, or committed data.
- Prefer aggregate evidence.

### Architecture

- Markdown documentation is the current system of record.
- MkDocs is the first renderer.
- Next.js is a future interactive renderer/application.
- Do not create a second, diverging content tree for Next.js.
- Use Mermaid for durable text-based diagrams.
- Do not add databases, auth, AI scoring, vector search, or cloud infrastructure without an approved ADR.

### Content quality

Do not generate template filler. Every instructional page must explain the mechanism, evidence, misconceptions/failure modes, and application. If a source does not support a claim, mark it as unresolved rather than filling the gap.

## Skills

Use the appropriate skill before specialized work:

- `.agents/skills/source-research/SKILL.md`
- `.agents/skills/framework-analysis/SKILL.md`
- `.agents/skills/docs-authoring/SKILL.md`
- `.agents/skills/evidence-reporting/SKILL.md`

## Definition of done for documentation changes

A documentation change is not done unless:

- links and navigation still make sense,
- claims have appropriate source support,
- original analysis is distinguishable from sourced material,
- Mermaid syntax is valid when added,
- no proprietary text has been copied beyond what is necessary for identification/commentary,
- no student PII is present,
- `mkdocs build --strict` is considered before merge once CI enforces it.

## Commit style

Use short conventional prefixes where useful:

- `docs:` documentation/content
- `research:` sources/framework research
- `agents:` agent instructions/skills
- `arch:` architecture decisions
- `feat:` application feature
- `fix:` correction

Favor small commits that explain one decision or coherent change.
