# Teaching Practice Lab — VS Code Handoff

Use this file as the continuation point when working locally in VS Code, Codex, Claude Code, or another coding/research agent.

## Project identity

**Teaching Practice Lab** is a publicly accessible, privately owned instructional learning platform created by **@Gh0stlyKn1ght**.

The first learning track focuses on the **Marzano Focused Teacher Evaluation Model (FTEM)**, with historical context from the earlier Marzano Learning Map.

This is **not** an official Marzano product, evaluator certification tool, district evaluation instrument, or replacement for official observer training.

## Ownership and licensing

Copyright © 2026 **Gh0stlyKn1ght**. All Rights Reserved.

The project is **not open source**. Public access to the eventual website does not grant permission to copy, redistribute, rehost, sell, sublicense, or create derivative products from the original code, course content, exercises, diagrams, visual design, or documentation.

See `LICENSE`.

Third-party software, trademarks, linked sources, quotations, and framework intellectual property remain subject to their own owners and licenses.

## Hosting and release rules

Production target: **Vercel**.

Do **not** add GitHub Actions. GitHub Actions is intentionally disabled and is not the project CI gate.

Release checks are local first:

```bash
npm install
npm run ci:local
```

For documentation changes:

```bash
pip install -r requirements-docs.txt
mkdocs build --strict
```

Do not use Vercel production deployment as the first build test.

## Current work priority

Do **not** focus on expanding the application yet.

Current priority is:

1. authoritative research,
2. source verification,
3. competency dossiers,
4. observation/defense research,
5. learning-science enrichment,
6. version history,
7. New Jersey implementation context,
8. only then large-scale course authoring and app expansion.

The existing Next.js shell is secondary to the knowledge package.

## Current framework status

Current public Marzano Evaluation Center material presents FTEM as **23 competencies across four domains**:

| Domain | Count | Research baseline |
|---|---:|---|
| Standards-Based Planning | 3 | Complete at public-source/function level |
| Standards-Based Instruction | 10 | Complete |
| Conditions for Learning | 7 | Complete |
| Professional Responsibilities | 3 | Complete |
| **Total** | **23** | **23 / 23 baseline covered** |

Important: baseline coverage does **not** mean all protocol-level details are verified.

## Standards-Based Planning title warning

Current MEC public material explicitly names:

- **Planning Standards-Based Lessons/Units**

For Elements 2 and 3, current MEC material clearly describes the functions but does not publicly confirm the exact current canonical titles in the material reviewed so far.

Working/historical labels used internally:

- `Aligning Resources to Standard(s)`
- `Planning to Close the Achievement Gap Using Data`

These labels must remain marked as working/historical until a current first-party MEC source verifies the exact wording.

Do not silently promote them to canonical 2026 titles.

## Core source rule

Every framework claim must distinguish:

1. **verified current MEC claim**,
2. **historical Marzano information**,
3. **Teaching Practice Lab interpretation**,
4. **original example / exercise**,
5. **unresolved item**.

If a source does not support a detail, mark it unresolved instead of filling the gap from memory.

## Source hierarchy

Use this order when researching:

1. current official Marzano Evaluation Center model/protocol material,
2. current official MEC articles and reports,
3. licensed district/state implementation material when legally available,
4. peer-reviewed research for learning-science claims,
5. historical Marzano material for lineage/context,
6. secondary sources only for discovery or comparison.

Historical or secondary material must never silently override current FTEM material.

## Copyright boundary

The user-supplied 2011 Marzano Learning Map contains an explicit digitization restriction.

Do not commit or reproduce:

- proprietary PDFs,
- full protocols,
- complete rubrics,
- scoring guides,
- evaluator forms,
- training slides,
- copyrighted graphics,
- proprietary developmental-scale wording,

unless redistribution rights are verified.

Create original explanations, examples, diagrams, scenarios, comparison exercises, and defense prompts instead.

## Research structure

Primary course/research docs:

```text
docs/course/
├── course-blueprint.md
├── learning-design.md
├── framework-map.md
├── research-backlog.md
├── dossiers/
│   ├── standards-based-planning/
│   ├── standards-based-instruction/
│   ├── conditions-for-learning/
│   └── professional-responsibilities/
└── observation-defense/
```

### Standards-Based Planning

```text
docs/course/dossiers/standards-based-planning/
├── index.md
├── planning-standards-based-lessons-units.md
├── aligning-resources.md
├── planning-with-data-to-close-gaps.md
├── distinction-matrix.md
└── canonical-title-status.md
```

### Standards-Based Instruction

All 10 current instructional competencies have dossiers plus a distinction matrix.

Key files:

```text
docs/course/dossiers/standards-based-instruction/
├── index.md
├── distinction-matrix.md
├── identifying-critical-content.md
├── previewing-new-content.md
├── processing-new-content.md
├── elaborating-with-questions.md
├── reviewing-content.md
├── practice-skills-strategies-processes.md
├── similarities-and-differences.md
├── examine-reasoning.md
├── revise-knowledge.md
└── cognitively-complex-tasks.md
```

### Conditions for Learning

All 7 current competencies have dossiers plus a distinction matrix.

```text
docs/course/dossiers/conditions-for-learning/
├── index.md
├── distinction-matrix.md
├── formative-assessment.md
├── feedback-and-progress.md
├── interact-with-content.md
├── engagement-strategies.md
├── rules-and-procedures.md
├── relationships.md
└── high-expectations.md
```

### Professional Responsibilities

All 3 current competencies have dossiers plus a distinction matrix.

```text
docs/course/dossiers/professional-responsibilities/
├── index.md
├── distinction-matrix.md
├── policies-and-procedures.md
├── expertise-content-pedagogy.md
└── teacher-leadership-collaboration.md
```

## Dossier standard

Every competency dossier should eventually contain:

1. canonical name and domain,
2. source status,
3. verified public-source claims,
4. plain-language explanation,
5. instructional/professional problem,
6. mechanism,
7. desired effect or function,
8. evidence examples,
9. false positives / non-examples,
10. neighboring competencies and distinctions,
11. adaptation or improvement triggers,
12. plausible responses,
13. at least one CS/technology classroom example where appropriate,
14. retrieval prompts,
15. practitioner scenario,
16. expert/ambiguous scenario,
17. defense questions,
18. unresolved protocol-level items,
19. source notes and copyright boundary.

Do not turn this into repetitive template filler. Each dossier should teach the mechanism and the hard distinctions.

## High-value discrimination pairs already established

### Standards-Based Instruction

- Previewing New Content vs Reviewing Content
- Processing New Content vs Elaborating on Content
- Reviewing Content vs Practice
- Elaborating vs Examining Reasoning
- Examining Reasoning vs Revising Knowledge
- Engagement vs Cognitively Complex Tasks

### Conditions for Learning

- Formative Assessment vs Feedback
- Interaction with Content vs Engagement
- Rules & Procedures vs Relationships
- Relationships vs High Expectations
- Engagement vs Cognitively Complex Tasks
- High Expectations vs Equal Treatment

### Professional Responsibilities

- Policies & Procedures vs Expertise
- Expertise vs Leadership & Collaboration
- Collaboration vs Division of Labor
- Compliance vs broader Professionalism

### Planning

- lesson/unit design vs resource alignment
- resource alignment vs data/progress planning
- planning with evidence vs reacting after instruction

These matrices are Teaching Practice Lab analysis, not official Marzano crosswalks.

## Core reasoning model

The project should repeatedly train this reasoning chain:

```text
instructional intent
        ↓
strategy / practice
        ↓
desired student effect
        ↓
student evidence
        ↓
is the evidence strong enough?
        ↓
diagnosis
        ↓
adaptation
        ↓
new evidence
        ↓
next decision
        ↓
defend the reasoning
```

A visible classroom activity is **not automatically evidence** that the intended learning effect occurred.

`Not enough evidence` must remain a legitimate expert answer when a scenario does not support a conclusion.

## Observation + Defense research

Current work has moved into this layer.

Files:

```text
docs/course/observation-defense/
├── index.md
├── observation-reasoning.md
├── evidence-and-calibration.md
├── post-observation-defense.md
├── self-assessment-deliberate-practice.md
├── defense-question-bank.md
└── boundary.md
```

The public MEC observation model supports a high-level reasoning process around:

1. identifying the strategy/element,
2. identifying how the teacher monitors for the desired effect,
3. examining student evidence,
4. examining adaptation when the effect is not sufficiently evident,
5. using evidence to inform post-observation judgment/discussion.

Teaching Practice Lab may train this reasoning but must **not** claim official observer certification or reproduce licensed observation protocols.

## Evidence and calibration concepts to preserve

Train against these reasoning errors:

- activity substitution,
- compliance bias,
- volunteer bias,
- halo effect,
- unsupported percentages,
- inference presented as observation,
- overclaiming from a single student response,
- treating engagement as learning evidence,
- treating quiet/orderly behavior as learning evidence.

## Learning-science basis currently in the registry

The course-design layer currently includes:

- retrieval practice,
- transfer through repeated testing,
- distributed/spaced practice.

Important source IDs:

- `LS-ROEDIGER-KARPICKE-2006`
- `LS-BUTLER-2010`
- `LS-CEPEDA-2006`

These support **Teaching Practice Lab's instructional design**, not FTEM claims.

## Next research targets

Continue in this order.

### 1. Learning-science enrichment

Research and add only after reviewing strong primary/high-quality sources:

- self-explanation,
- interleaving/discrimination learning,
- worked examples and fading,
- feedback timing,
- generation effect,
- desirable difficulties.

Do not add a learning technique just because it is popular. Record what the evidence actually supports and how it changes course design.

### 2. Model/version history

Create a sourced timeline covering:

- 2011 Art and Science / 60-element Learning Map,
- development and release of FTEM,
- major public revisions,
- current 23-competency model,
- whether a newer teacher model has officially superseded FTEM.

Distinguish model release dates from webpage/document update dates.

### 3. New Jersey implementation context

Research separately from the Marzano model itself:

- current NJDOE teacher-practice requirements,
- approved instrument rules,
- district flexibility,
- Middle Township's current instrument/version if publicly verifiable,
- district observation procedures if publicly available.

Never blend:

```text
NJ state requirement
vs
district procedure
vs
Marzano model guidance
```

### 4. Protocol-depth verification

For all four domains, continue looking for legally accessible authoritative material that can verify:

- exact current focus statements,
- exact current desired effects,
- official evidence descriptors,
- current technique examples,
- developmental-scale wording,
- exact Planning Element 2 and 3 titles.

Do not reproduce restricted protocol text in the public course even if it is obtained for research.

## Source registry

Primary registry:

`docs/sources/registry.md`

Before treating a new source as foundational, add it there with:

```text
Claim:
Source:
Publisher:
Publication/update date:
Access date:
Primary or secondary:
What the source supports:
What it does NOT support:
Copyright/redistribution notes:
Course pages affected:
Open questions:
```

## App direction

The app remains intentionally simple.

Core course should require:

- no login,
- no XP,
- no ranks,
- no badges,
- no streaks,
- no learner database,
- no student records.

Three.js may still be used later for selective instructional visualization or interactive exercises, but never as the authoritative learning logic and never just for visual decoration.

Preferred representation order:

```text
plain text / Markdown
        ↓
HTML + CSS
        ↓
SVG / Mermaid
        ↓
small React interaction
        ↓
Three.js only when it teaches something better
```

## Visual direction

Keep the public application:

- dark,
- lightweight,
- low-noise,
- monospace-forward,
- near-black canvas,
- charcoal panels,
- off-white text,
- restrained borders,
- generous spacing,
- minimal decoration.

Do not turn it into a neon/cyberpunk UI or a game dashboard.

## Agent instructions

Read these before major changes:

1. `HANDOFF.md`
2. `README.md`
3. `LICENSE`
4. `AGENTS.md`
5. `docs/SUMMARY.md`
6. `docs/course/research-backlog.md`
7. `docs/sources/registry.md`
8. relevant dossier/domain files

For research work, follow the source-integrity and copyright rules in `AGENTS.md`.

## Immediate VS Code task prompt

A good continuation prompt for Codex is:

> Read `HANDOFF.md`, `AGENTS.md`, `docs/course/research-backlog.md`, `docs/sources/registry.md`, and the files under `docs/course/observation-defense/`. Continue the research-first phase of Teaching Practice Lab. Do not expand the app unless needed for documentation support. First audit the existing research package for unsupported claims, stale terminology, missing source attribution, and unresolved protocol-level gaps. Then continue with learning-science enrichment, model/version history, and New Jersey implementation context. Preserve the distinction between current MEC claims, historical Marzano material, Teaching Practice Lab analysis, original examples, and unresolved items. Do not add GitHub Actions, auth, learner progress systems, or open-source licensing.

## Current branch / PR context

Current work has been happening on:

`build/mvp-learning-shell`

There is an open PR against `main` containing the shell, research docs, ownership/licensing changes, local CI policy, and the current research package.

Before making broad refactors locally, inspect the branch and PR diff so older game/mastery artifacts are not accidentally reintroduced.

## Definition of done for the next research phase

The next phase is ready for course authoring when:

- source registry is current,
- full 23-competency baseline remains internally consistent,
- Planning title uncertainty is explicitly resolved or still clearly marked,
- observation/defense material is source-grounded,
- learning-science design claims have primary/high-quality support,
- version history is documented,
- NJ/district implementation claims are clearly separated and verified,
- no proprietary Marzano protocol has been reproduced,
- unresolved gaps are visible rather than hidden.

Do not optimize for volume. Optimize for a research base that can survive scrutiny.