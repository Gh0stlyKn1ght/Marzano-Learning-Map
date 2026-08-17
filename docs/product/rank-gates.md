# Rank Gates and Progression

Ranks communicate breadth and depth of demonstrated instructional reasoning. They are not certificates and they are not official Marzano ratings.

XP indicates activity on meaningful challenges. **Rank indicates demonstrated capability.**

## Rank ladder

```text
Novice
  ↓
Apprentice I
  ↓
Apprentice II
  ↓
Apprentice III
  ↓
Practitioner I
  ↓
Practitioner II
  ↓
Practitioner III
  ↓
Proficient I
  ↓
Proficient II
  ↓
Proficient III
  ↓
Advanced Practitioner I
  ↓
Advanced Practitioner II
  ↓
Advanced Practitioner III
  ↓
Master
```

## Gate philosophy

Every rank gate may require a combination of:

- total XP,
- number of proficient competencies,
- number of verified-mastered competencies,
- domain coverage,
- review retention,
- defense performance,
- transfer performance,
- domain boss clears.

The exact XP numbers are game-balance values and may change. Capability gates should change far less often.

## Provisional v0.1 gates

| Rank | XP floor | Capability gate |
|---|---:|---|
| Novice | 0 | Profile created. |
| Apprentice I | 500 | Foundations path completed; Recall and Recognition ≥ 60 on two competencies. |
| Apprentice II | 1,250 | Three competencies with Recall/Recognition ≥ 70; first VS challenge clear. |
| Apprentice III | 2,500 | Three competencies Proficient; first diagnosis challenge clear. |
| Practitioner I | 4,000 | Five competencies Proficient; Discrimination average ≥ 70. |
| Practitioner II | 6,500 | Seven competencies Proficient; first adaptation scenario clear; Defense average ≥ 60. |
| Practitioner III | 10,000 | Eight competencies Proficient; one domain boss clear; Defense ≥ 70; Transfer ≥ 65. |
| Proficient I | 15,000 | Ten competencies Proficient; three Verified Mastery; retention compliance ≥ 75%. |
| Proficient II | 22,000 | Thirteen competencies Proficient; five Verified Mastery; two boss clears. |
| Proficient III | 30,000 | Sixteen competencies Proficient; eight Verified Mastery; Defense and Transfer ≥ 75. |
| Advanced Practitioner I | 40,000 | Nineteen competencies Proficient; ten Verified Mastery; three boss clears. |
| Advanced Practitioner II | 52,000 | All framework competencies at least Proficient; twelve Verified Mastery; Expert scenario average ≥ 80. |
| Advanced Practitioner III | 66,000 | Eighteen Verified Mastery; all domain bosses clear; Defense ≥ 85; Transfer ≥ 82. |
| Master | 85,000 | All required competencies Verified Mastery; full-framework defense clear; Transfer ≥ 85; Teach ≥ 80; current retention compliance ≥ 85%. |

These gates assume a 23-competency FTEM track. If another framework is added, rank should be calculated within a selected framework season/profile rather than pretending frameworks are numerically interchangeable.

## Retention compliance

`retention compliance` is the percentage of due reviews completed within the allowed review window.

It exists so higher ranks represent knowledge that remains available over time rather than a burst of cramming.

Suggested window:

```text
on time = completed from 24 hours before due date through 72 hours after due date
```

Missing reviews should not remove XP or an earned historical rank. It may temporarily mark the rank as **verification stale** for mastery views.

## Rank-up event

A rank-up occurs only after the learner crosses all gates. Reaching the XP floor alone should show:

```text
XP requirement met
Rank gate remaining:
Complete one Practitioner defense
```

This is preferable to silently withholding rank.

## Rank-up presentation

Rank advancement is one of the few places where richer animation is justified.

The underlying sequence should be deterministic:

```text
Gate evaluation
    ↓
Rank earned
    ↓
Database event stored
    ↓
UI receives rank-up event
    ↓
Optional Three.js presentation
```

Skipping the animation must never skip the rank event.

## Prestige and post-Master play

Do not add infinite prestige levels in the first product version.

After Master, useful progression is better represented by:

- retained mastery,
- expert scenario performance,
- defense streaks,
- framework expansion,
- teaching/coaching endorsements,
- optional seasonal challenge sets.

The goal is durable expertise, not an endless number treadmill.
