# Mastery and Progression System

The platform uses a **beginner-to-mastery progression** inspired by hands-on learning platforms such as TryHackMe and Hack The Box Academy, but progression represents instructional reasoning rather than page completion.

## Rank ladder

```text
Novice
  ↓
Apprentice I–III
  ↓
Practitioner I–III
  ↓
Proficient I–III
  ↓
Advanced Practitioner I–III
  ↓
Master
```

Rank requirements should be based on demonstrated competencies, retained mastery, boss clears, and defense/transfer performance. Raw XP alone must not be enough to rank up.

## Mastery dimensions

Each competency is evaluated separately across these dimensions:

1. **Recall** — retrieve the concept without notes.
2. **Recognition** — identify the practice in a classroom situation.
3. **Discrimination** — distinguish it from similar practices.
4. **Application** — design instruction that uses it intentionally.
5. **Diagnosis** — determine why the desired effect did or did not occur.
6. **Adaptation** — choose a defensible instructional adjustment.
7. **Defense** — explain and justify the decision under questioning.
8. **Transfer** — apply the reasoning in an unfamiliar context.
9. **Teach** — explain the concept accurately enough to coach someone else.

A competency should not display `Mastered` simply because its lesson was completed.

## Mastery state

Example:

```text
Processing New Content

Recall            ★
Recognition       ★
Discrimination    ★
Application       ★
Diagnosis         ★
Adaptation        ★
Defense           ☆
Transfer          ☆
Teach             ☆

Confidence        78%
Last demonstrated 12 days ago
Review            Due soon
```

## Retention and confidence

Completion is permanent history. Mastery confidence is not.

Confidence should gradually become uncertain when a competency has not been successfully retrieved or applied for an extended period. This is not punishment. It is an estimate of whether the knowledge remains readily available.

A later mastery engine can use a spaced-review algorithm. The data model should preserve:

- last successful demonstration,
- next review date,
- recent difficulty,
- success/failure history,
- mastery dimension exercised,
- confidence estimate.

## XP

XP rewards cognitive work, not content consumption.

Suggested starting weights:

| Activity | Base XP |
|---|---:|
| Read lesson | 0 |
| Recall prompt | 10 |
| Recognition challenge | 15 |
| Discrimination challenge | 25 |
| Scenario solved | 40 |
| Diagnosis | 50 |
| Adaptation | 60 |
| Defense | 75 |
| Transfer | 100 |
| Domain boss clear | 500 |

These are game-balance values, not pedagogical scores. They may change without changing mastery history.

## Rank gate

A rank-up should evaluate multiple conditions, for example:

```text
Practitioner III

✓ XP threshold reached
✓ 8 competencies at verified proficiency
✓ Defense rating ≥ 70%
✓ Transfer rating ≥ 65%
✓ Current domain boss cleared
✓ No foundational competency below minimum confidence
```

This prevents grinding easy questions to reach Master.

## Achievements

Achievements should recognize useful expert behavior.

Examples:

- **Observer** — correctly diagnose ten scenarios.
- **Discriminator** — solve twenty comparison challenges.
- **Adapter** — repair ten failed instructional scenarios.
- **Defender** — complete an oral defense.
- **Systems Thinker** — correctly connect practices across three domains.
- **Domain Master** — demonstrate verified mastery across a complete domain.
- **Not Enough Evidence** — correctly refuse to make a judgment when the scenario does not provide sufficient evidence.

That last achievement encodes an important rule: experts should not be rewarded for confident guessing.

## Streaks

A practice streak may be displayed, but missed days should not remove XP or rank. The useful long-term indicators are:

- competencies retained,
- review consistency,
- defense performance,
- transfer performance,
- weak-area improvement,
- boss clears.

The platform should reward mastery, not compulsive daily interaction.
