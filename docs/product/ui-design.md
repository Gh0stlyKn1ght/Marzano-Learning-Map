# Lightweight UI Design System

The preferred visual direction is a **dark, lightweight, low-noise interface** inspired by the provided progress-card screenshot.

The screenshot is useful because it demonstrates that the interface does not need a heavy visual shell to feel like a game. Its strongest characteristics are:

- near-black background,
- rounded dark panels,
- monospace typography,
- large textual hierarchy,
- muted gray progress bars,
- sparse borders and separators,
- generous spacing,
- almost no decorative imagery,
- strong information density without visual clutter.

## Design principle

**The dashboard is HTML and CSS first. Three.js appears only when spatial interaction or animation improves learning.**

That means profile pages, lessons, progress, settings, challenge text, skill meters, and result screens should stay lightweight.

## Visual language

### Foundation

```text
Canvas       near-black
Surface      charcoal
Text         off-white
Secondary    cool gray
Muted        dark gray
Accent       reserved for active/earned states
Typography   monospace-forward
Radius       medium/large, not pill-heavy
Borders      subtle
Shadows      restrained
```

Do not turn the application into a neon cyberpunk dashboard. Accent color should communicate state rather than decorate every component.

## Profile card

The screenshot provides the starting composition:

```text
Overall Rank
PRACTITIONER III

XP
12,840 / 15,000

Standards-Based Planning
████████████████░░ 84%

Standards-Based Instruction
███████████░░░░░░░ 61%

Conditions for Learning
█████████████░░░░░ 72%

Professional Responsibilities
███████████████░░░ 81%
```

The production version should add only information that changes the next action:

- current rank,
- XP to next gate,
- four domain mastery values,
- review due count,
- current learning path,
- next challenge.

Everything else can live one level deeper.

## Dashboard

```text
┌───────────────────────────────────────────────┐
│ MR. N                           PRACTITIONER III│
│ 12,840 XP                              LVL 18 │
├───────────────────────────────────────────────┤
│                                               │
│ CONTINUE                                      │
│ Processing New Content                        │
│ [ Scenario 14 · Practitioner ]                │
│                                               │
├───────────────────────┬───────────────────────┤
│ REVIEW DUE            │ CURRENT PATH          │
│ 4 competencies        │ Instruction Core      │
│ [ Start Review ]      │ 7 / 10                │
├───────────────────────┴───────────────────────┤
│ MASTERY                                       │
│ Planning                ███████████████░ 84%  │
│ Instruction             ███████████░░░░ 61%  │
│ Conditions              █████████████░░ 72%  │
│ Professional            ███████████████░ 81%  │
└───────────────────────────────────────────────┘
```

## Challenge screen

Keep cognitive load focused on the scenario.

```text
Scenario 031                           +40 XP
THE QUIET CLASSROOM

Students are silently completing a worksheet...

What can you conclude from the available evidence?

[ response / evidence controls ]

Confidence: Low · Medium · High

[ Submit reasoning ]
```

Avoid sidebars, animated backgrounds, achievement popups, and unrelated statistics while a learner is solving a challenge.

## Three.js usage

### Good uses

- world/competency map,
- node unlocking,
- evidence connections,
- conceptual comparison animation,
- boss-intro transitions,
- scenario spaces where inspecting objects is part of the question,
- brief mastery/rank progression effects.

### Bad uses

- rendering ordinary text,
- progress bars,
- navigation,
- forms,
- lesson content,
- permanent animated backgrounds,
- particles on every click,
- 3D merely because Three.js is available.

## Animation budget

Animation should communicate one of four things:

1. **state change** — unlocked, mastered, failed, due for review,
2. **relationship** — how two concepts connect or differ,
3. **evidence** — what supports a conclusion,
4. **progression** — rank, path, boss, or domain completion.

If an animation communicates none of these, remove it.

## Accessibility and performance

- respect `prefers-reduced-motion`,
- all Three.js interactions need a non-3D equivalent where practical,
- keyboard operation must work for core learning flows,
- text contrast must remain strong,
- challenge correctness cannot depend on color alone,
- lazy-load 3D modules,
- do not load a WebGL canvas on screens that do not need it,
- keep initial dashboard JavaScript minimal.

## Mobile

The mobile design should preserve the screenshot's strength: stacked text, simple bars, and one obvious next action. Three.js scenes should have simplified mobile modes rather than shrinking desktop scenes into unusable canvases.
