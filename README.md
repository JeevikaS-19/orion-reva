# Orion Club Website

## Setup
1. `npm install`
2. `cp .env.example .env` and fill in Supabase keys if you have them.
3. `npm run dev`

## Ownership
| Phase | Person | Scope |
|---|---|---|
| Phase 1A | Person A | Home page journey, `StarField`, `OrionFigure`, Animations, Theme |
| Phase 1B | Person B | Inner pages, Forms, Validation, Data wiring, Fallback form |

## Working Agreement
- `main` holds the scaffold. Branches: `feat/sky` (A) and `feat/pages` (B).
- Stay inside your owned folders. `routes.tsx`, `layouts/`, `content/orion.ts`, `content/chapters.ts`, and `package.json` are shared: tell the other person before changing them.
- `git pull --rebase origin main` before you start and before every push. Small, frequent commits.
- No reformat-only commits (Prettier is committed; format on save).
- Never commit `.env`.
- Content changes (wings, events, team) are small PRs to `content/` only.
