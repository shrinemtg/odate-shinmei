# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Official website for 大館神明社 (Odate Shinmei Shrine), a Shinto shrine in Akita Prefecture, Japan. This is a Turborepo monorepo with a single active app: `apps/frontend` (Next.js 15, Pages Router).

## Commands

All commands use **npm** (switched from yarn). Run from the repo root unless noted.

```sh
# Development
npm run dev              # Start all apps via Turborepo
cd apps/frontend && npm run dev   # Start frontend only (port 3000)

# Build
npm run build            # Build all apps
npm run build:prod       # Build frontend with prod env vars

# Lint & Format
npm run lint             # Run ESLint across all packages
npm run fix:lint         # Auto-fix ESLint issues on specific files
npm run fix:format       # Auto-format with Prettier on specific files

# Per-workspace via Turborepo
npx turbo run dev --filter=front
npx turbo run build --filter=front
```

Pre-commit hook runs `lint-staged` automatically: formats, lints, and type-checks staged `.ts/.tsx` files.

## Architecture

### Monorepo structure

- `apps/frontend/` — the only active app; Next.js 15 with Pages Router
- `packages/types/` — shared TypeScript types (stub)
- `packages/utils/` — shared utility functions (stub)
- `packages/ui/` — shared React components (stub)
- `packages/backend-shared/` — backend-shared package (stub)
- `infra/` — infrastructure code

### Frontend (`apps/frontend/`)

**Stack:** Next.js 15.5.7, React 18.3.1, TypeScript 5.5.4, Emotion (CSS-in-JS), Framer Motion, Recoil

**Page routing:** Pages Router (`src/pages/`). Each page file imports a single `*PageContent` component from a corresponding folder in `src/components/`.

```
src/pages/index.tsx          → src/components/pages/index.tsx (Home)
src/pages/event.tsx          → src/components/eventComponents/
src/pages/omamori.tsx        → src/components/omamoriComponents/
src/pages/contact.tsx        → src/components/contactComponents/
src/pages/history.tsx        → src/components/historyComponents/
...etc.
```

**Global layout:** `src/pages/_app.tsx` wraps every page with `<PasswordProtection>`, `<MenuBar>`, and `<FooterSection>`.

**Styling:** Emotion `styled` components throughout. CSS custom properties (colors, fonts, spacing, breakpoints) are defined in `src/styles/variables.css`. Do not hardcode color/font/spacing values — use the CSS variables.

**Content:** Notice/announcement data is hardcoded in `src/components/homeComponents/NoticeSection.tsx`. There is no CMS or database.

### Environment files

Environment-specific `.env` files live in `apps/frontend/env/`:

- `env/.env.local` — local dev
- `env/.env.dev` — development
- `env/.env.stg` — staging
- `env/.env.prod` — production

Scripts use `env-cmd` to load them (e.g. `start:prod`, `build:prod`). For plain `npm run dev`, Next.js uses `apps/frontend/.env.local`.

Key env vars:

- `NEXT_PUBLIC_PASSWORD_PROTECTED` — `true`/`false` to enable the site-wide password gate
- `NEXT_PUBLIC_SITE_PASSWORD` — the password (client-side only; for temporary access restriction during development)

### Deployment

Deployed to Vercel. `next.config.ts` has `output: 'export'` removed (SSG mode was disabled for Vercel). Images use `unoptimized: true`.

## Coding conventions

- **Emotion styled components** for all component styling — no CSS modules or Tailwind
- **CSS variables** from `variables.css` for colors (`--color-shuiro`, `--color-oud`, `--color-gray`, etc.) and font sizes
- **Responsive breakpoints**: 375px, 480px, 640px, 768px, 1024px — all components handle these via `@media` in styled components
- **No tests** exist in this project
- `@typescript-eslint/no-explicit-any` is turned off; `no-unused-vars` errors on anything not prefixed with `_`
- Prettier: single quotes, no semicolons, 120-char line width, 2-space indent, trailing commas

## このプロジェクトの作業方針

- 目的：PageSpeed/Lighthouseスコアを80点以上に改善する
- 絶対条件：見た目・レイアウト・配色・フォント表示・文言は一切変えない
  （パフォーマンス目的の変更のみ。デザイン変更禁止）
- 作業は performance-improvement ブランチで行い、修正ごとにコミットする
- 大きな変更や見た目に影響しうる変更は、適用前に必ず確認を取る -長くなったら整える。 会話が伸びてきたら、/compact で会話履歴を構造化した要約に圧縮（容量が満杯になる前、7割くらいで使うのが推奨）
