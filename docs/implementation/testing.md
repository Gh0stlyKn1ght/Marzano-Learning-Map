# MVP Validation Checklist

Before merging the MVP shell:

- `npm install` completes without dependency resolution errors.
- `npm run typecheck` passes.
- `npm run build` passes.
- `/`, `/learn/foundations`, `/challenge`, and `/mastery` render.
- challenge answers lock after selection.
- correct answer and explanation are visible after each attempt.
- mobile layout remains readable at narrow widths.
- no Three.js or authentication dependency is loaded yet.
