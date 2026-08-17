# Mastery Engine v0.1

This document defines the first deterministic progression model for Teaching Practice Lab.

The engine must be usable without AI, Three.js, or a database. Given a learner history and challenge result, it should always produce the same mastery update.

> These values are product defaults, not claims from Marzano or an official evaluation instrument. They exist to make learning progress measurable and testable. They should be tuned from real use rather than treated as pedagogical truth.

## Design goals

The system should reward demonstrated reasoning rather than time spent in the application.

It must:

- distinguish knowledge from application,
- prevent easy-question XP farming,
- preserve completion history while allowing confidence to become stale,
- require delayed retrieval before verified mastery,
- make weak dimensions visible,
- reward calibrated uncertainty,
- keep scoring explainable to the learner.

## Mastery dimensions

Each competency maintains nine independent scores from `0–100`:

| Dimension | Evidence required |
|---|---|
| Recall | Retrieve and explain the concept without notes. |
| Recognition | Identify the practice from an example. |
| Discrimination | Distinguish it from a plausible neighboring concept. |
| Application | Design or select an appropriate instructional use. |
| Diagnosis | Explain why a desired effect did or did not occur. |
| Adaptation | Select and justify a next instructional move. |
| Defense | Defend reasoning under follow-up questioning. |
| Transfer | Apply the concept in an unfamiliar context. |
| Teach | Explain and coach the concept accurately for another practitioner. |

A lesson completion event updates none of these values.

## Challenge result

Every scored challenge produces a normalized result:

```yaml
challenge_id: string
competency_id: string
dimensions:
  recognition: 88
  discrimination: 76
difficulty: beginner | practitioner | expert
outcome: pass | partial | fail | insufficient-evidence-correct
hints_used: 0
attempt_number: 1
completed_at: ISO-8601
```

A challenge may exercise more than one dimension.

## Difficulty multipliers

Difficulty changes the amount of mastery evidence generated, not the maximum score a learner may receive.

| Difficulty | Evidence multiplier |
|---|---:|
| Beginner | 0.75 |
| Practitioner | 1.00 |
| Expert | 1.25 |

Expert challenges should involve ambiguity, cross-domain reasoning, transfer, incomplete evidence, or defense. They should not merely be longer questions.

## Updating a dimension

For v0.1, mastery uses an explainable weighted update instead of a hidden rating system.

For each exercised dimension:

```text
quality = challenge_score / 100
strength = 12 × difficulty_multiplier
signed_evidence = strength × ((2 × quality) - 1)
```

This means:

- `100%` produces full positive evidence,
- `50%` produces no movement,
- results below `50%` reduce confidence,
- harder challenges move the estimate somewhat more.

Then:

```text
new_score = clamp(old_score + signed_evidence, 0, 100)
```

### Example

A learner has `Recognition = 64` and scores `90` on a Practitioner challenge.

```text
quality = .90
strength = 12
signed_evidence = 12 × (.80) = 9.6
new Recognition = 73.6
```

This intentionally moves slowly. One excellent answer must not create mastery.

## Hints

Hints reduce evidence strength because the learner received support.

| Hints used | Mastery evidence retained |
|---|---:|
| 0 | 100% |
| 1 | 80% |
| 2 | 60% |
| 3+ | 40% |

Hints do **not** reduce XP below zero and do not create penalties beyond the weaker mastery update.

## Stars

A filled star is a compact representation of a dimension score, not a separate achievement system.

```text
☆ 0–59     developing
◐ 60–79    approaching proficiency
★ 80–100   demonstrated proficiency
```

The UI may use icons other than `◐`, but it must preserve the three states.

## Competency proficiency

A competency becomes **Proficient** when all conditions are true:

1. Recall ≥ 80
2. Recognition ≥ 80
3. Discrimination ≥ 80
4. Application ≥ 75
5. Diagnosis ≥ 70
6. Adaptation ≥ 70
7. no tracked dimension is below 60

Defense, Transfer, and Teach may still be developing at this stage.

## Verified mastery

A competency becomes **Verified Mastery** only when:

1. all nine dimensions are ≥ 80,
2. Defense ≥ 85,
3. Transfer ≥ 85,
4. at least one successful Expert challenge has been completed,
5. at least two successful demonstrations occurred on different days,
6. at least one successful demonstration occurred **7 or more days after** the first proficiency event,
7. the competency is not currently overdue for retention review.

This prevents same-session cramming from being displayed as mastery.

## Retention state

Completion history is permanent. Confidence is time-sensitive.

A competency has four retention states:

```text
Fresh       review not yet due
Due Soon    next review within 48 hours
Due         scheduled review date reached
Stale       review is more than 7 days overdue
```

`Verified Mastery` is preserved as historical achievement, but the UI should display a **verification status** separately if knowledge has become stale.

Example:

```text
Verified Mastery earned: 2026-09-18
Current verification: STALE
Next action: Expert transfer review
```

The learner has not “lost” the achievement. The system is saying it no longer has recent evidence of availability.

## Review schedule v0.1

Until a more advanced scheduler is justified, use a transparent interval ladder:

```text
1 day → 3 days → 7 days → 14 days → 30 days → 60 days → 120 days
```

After a successful scheduled review:

- score ≥ 85: advance one interval,
- score 70–84: keep the same interval,
- score 50–69: move back one interval,
- score < 50: move back two intervals, minimum 1 day.

An Expert transfer or defense success may advance one additional interval, but never beyond 120 days.

## Calibrated uncertainty

Some challenges intentionally provide insufficient evidence.

When `insufficient evidence` is the correct answer:

- award the challenge normally,
- update Diagnosis and/or Defense as configured,
- do not treat the response as avoidance,
- record `outcome: insufficient-evidence-correct`.

Confident guessing where evidence is insufficient should reduce the relevant diagnosis/defense score.

## Anti-grind rules

A learner should not increase rank by repeatedly farming the same easy challenge.

### Mastery evidence

- First scored attempt: normal evidence.
- New scheduled review: normal evidence.
- New challenge variant: normal evidence.
- Immediate repeat of the same challenge after success: **25% evidence**.
- Immediate repeat after failure: up to **60% evidence**, because correction still has learning value.

### XP

- First successful completion: full base XP.
- Scheduled review: 50% base XP.
- Improved retry after failure: 35% base XP.
- Repeating an already-passed challenge without a review assignment: 0 XP.

## Competency mastery score

The dashboard may show one summary percentage, but it must not hide dimension-level weaknesses.

Use these v0.1 weights:

| Dimension | Weight |
|---|---:|
| Recall | 10% |
| Recognition | 10% |
| Discrimination | 15% |
| Application | 15% |
| Diagnosis | 15% |
| Adaptation | 15% |
| Defense | 10% |
| Transfer | 7% |
| Teach | 3% |

```text
mastery_score = Σ(dimension_score × dimension_weight)
```

Why the weights are unequal:

- Recall matters but cannot dominate.
- Discrimination prevents shallow keyword matching.
- Application, Diagnosis, and Adaptation represent the core instructional reasoning loop.
- Defense and Transfer become especially important for higher rank gates.
- Teach is intentionally late-stage and low-weight so a learner is not blocked from useful proficiency before coaching others.

## Domain score

A domain percentage is the mean of its competency mastery scores.

However, the domain may not display `Mastered` unless every required competency meets its domain mastery gate. A strong score in one competency must not hide a major weakness in another.

## Boss scoring

A domain boss should contain multiple independent sections:

| Section | Suggested weight |
|---|---:|
| Recognition | 10% |
| Discrimination | 15% |
| Evidence selection | 15% |
| Diagnosis | 20% |
| Adaptation | 20% |
| Defense | 20% |

Boss clear requirements:

```text
overall >= 80
AND
Diagnosis >= 70
AND
Adaptation >= 70
AND
Defense >= 70
```

No single high-scoring section can compensate for inability to diagnose, adapt, or defend.

## Engine invariants

These rules should be covered by unit tests when the application exists:

1. Reading content never increases mastery.
2. Reading content never awards XP.
3. Repeating a passed challenge cannot farm XP.
4. A single challenge cannot create Verified Mastery.
5. Verified Mastery requires delayed evidence.
6. Domain mastery cannot hide an unmastered required competency.
7. `Not enough evidence` can be a correct expert response.
8. Three.js events never modify mastery directly.
9. AI feedback cannot directly overwrite canonical scores without a structured scored result.
10. Every score-changing event is reproducible from stored attempt data.

## Open questions for v0.2

- Whether to replace the interval ladder with an FSRS-style scheduler after enough attempt data exists.
- Whether oral-defense scoring should require rubric agreement across multiple prompts.
- Whether Teach should be a normal dimension or a separate capstone endorsement.
- How competency relationships should influence review selection without allowing one competency score to leak into another.
- Whether repeated expert transfer successes should create a second tier beyond Verified Mastery.
