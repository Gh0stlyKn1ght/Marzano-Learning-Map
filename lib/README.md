# Application Domain Modules

- `mastery.ts` contains deterministic scoring/progression calculations.
- `ranks.ts` contains rank labels only.
- `profile.ts` defines the learner profile shape.

UI components should consume these modules rather than reimplement progression rules.
