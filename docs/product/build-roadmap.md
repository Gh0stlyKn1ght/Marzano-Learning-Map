# Game Platform Build Roadmap

The implementation order is designed to prevent the project from becoming a visually impressive but pedagogically empty shell.

## Phase 0: Knowledge foundation

Status: in progress.

- source registry,
- framework version notes,
- FTEM domain/competency research,
- copyright boundaries,
- MkDocs reference site,
- agent skills and authoring rules.

## Phase 1: Mastery specification

Build the rules before the interface.

- define mastery dimensions,
- define challenge taxonomy,
- define rank gates,
- define XP rules,
- define confidence/retention model,
- define achievement rules,
- define boss scoring,
- define what `Mastered` means.

Exit criterion: a learner's progression can be calculated without any Three.js or UI code.

## Phase 2: One complete learning path

Use a small part of FTEM as the reference implementation.

The first path should include:

- concise lessons,
- recall prompts,
- VS challenges,
- recognition scenarios,
- non-examples,
- diagnosis/adaptation tasks,
- a defense challenge,
- one integrated boss.

Do not mass-generate the remaining framework until this path is good enough to copy structurally.

## Phase 3: Lightweight web shell

Create the Next.js application with:

- profile setup,
- dashboard,
- current path,
- lesson reader,
- text challenge runner,
- mastery screen,
- results screen.

No Three.js is required for this phase.

Exit criterion: the complete reference path can be learned and mastered in an ordinary browser with JavaScript UI only.

## Phase 4: Persistence

Add authentication and user progress storage.

Persist:

- profile,
- attempts,
- mastery,
- review queue,
- XP/rank state,
- achievements,
- boss clears.

Avoid student information.

## Phase 5: Review and retention

Implement spaced review and confidence changes over time.

Dashboard becomes action-oriented:

```text
CONTINUE
Scenario 14

REVIEW DUE
4 competencies

CURRENT PATH
Instruction Core · 7 / 10
```

## Phase 6: Game layer

Add animation only after the learning loop works.

First candidates:

1. competency/world map,
2. node unlock animation,
3. evidence relationship animation,
4. conceptual comparison animation,
5. boss presentation,
6. rank-up sequence.

## Phase 7: Evidence Scanner / 3D scenarios

Build one experimental spatial scenario where inspecting classroom evidence is genuinely part of the question.

Validate whether it improves reasoning before creating additional 3D scenario types.

## Phase 8: Socratic defense coach

Add written and voice-capable defense modes.

The coach should:

- challenge vague answers,
- request evidence,
- distinguish nearby concepts,
- ask for adaptations,
- detect unsupported certainty,
- score reasoning dimensions separately.

AI feedback must not become the sole source of framework truth. Canonical framework content and challenge rubrics remain source-governed.

## Phase 9: Full FTEM path

Scale the proven content architecture to the full modern framework.

Only after the challenge model is stable should agents assist with larger-scale content authoring.

## Phase 10: Framework expansion

The architecture may later support other instructional frameworks without changing the learner/profile engine.

The product name therefore remains broader than any single proprietary framework.
