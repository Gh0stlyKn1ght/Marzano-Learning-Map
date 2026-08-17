# Validation Checklist

Before intentional production promotion:

## Application gate

- `npm install` completes without dependency resolution errors.
- `npm run ci:local` passes.
- `/`, `/learn/foundations`, `/challenge`, and `/api/health` render.
- challenge answers lock after selection.
- correct answer and explanation are visible after each attempt.
- mobile layout remains readable at narrow widths.
- keyboard interaction remains usable for core course flows.

## Documentation gate

When documentation changes:

- `pip install -r requirements-docs.txt` completes.
- `mkdocs build --strict` passes.
- Mermaid diagrams render without syntax errors.
- repository and MkDocs navigation agree.

## Content gate

- framework claims remain source-supported,
- no proprietary third-party training material was copied into the course,
- no student PII is present,
- author/ownership notices remain intact where applicable.

## Deployment rule

GitHub Actions is not used as the CI gate. Vercel is the production target only after the applicable local gates pass.
