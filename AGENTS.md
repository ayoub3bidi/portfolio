# AGENTS.md

Guidance for AI coding agents (Claude Code, Cursor, Copilot, Warp, etc.) working in this repository.

## Project

Personal portfolio of Ayoub Abidi — Astro 4 static site with Svelte 5 islands, Tailwind CSS 3, Pagefind search. Deployed on Netlify (`dist/`), DNS proxied through Cloudflare.

## Commands

- `pnpm dev` — dev server
- `pnpm build` — validate announcements + astro build + pagefind index (use this to verify changes)
- `pnpm type-check` — `tsc --noEmit --isolatedDeclarations`
- `pnpm lint` / `pnpm format` — Biome

Package manager is **pnpm only** (enforced via preinstall).

## Architecture map

- `src/config.ts` — site/profile/nav config (single source of truth for identity data)
- `src/constants/` — projects.ts, experience.ts, announcements.ts (data-driven content)
- `src/content/posts/*.md` — blog posts (content collection, zod schema in `src/content/config.ts`)
- `src/content/spec/about.md`, `collaboration.md` — long-form pages sourced from markdown
- `src/pages/` — routes. Files like `llms.txt.ts`, `about.md.ts` are static endpoints generating agent-facing text
- `src/layouts/Layout.astro` — head/meta/JSON-LD/markdown-alternates live here
- `src/utils/llms.ts` — builders shared by llms.txt / llms-full.txt / .md endpoints

## Conventions

- Agent-facing artifacts (llms.txt, *.md endpoints, robots.txt) are **generated from real data** — never hardcode projects/experience there; edit `src/constants/` or content collections instead.
- `trailingSlash: "always"` — HTML routes end with `/`; `.md`/`.txt` files do not.
- Posts filter drafts with `import.meta.env.PROD ? data.draft !== true : true`.
- Keep the generated markdown clean and factual; it is consumed by LLMs and recruiters using AI assistants.

## Gotchas

- Cloudflare zone settings can override `robots.txt` at the edge ("Block AI bots" toggle). If AI crawlers appear blocked in production while `dist/robots.txt` looks right, check the Cloudflare dashboard.
- Swup powers client-side transitions with `morph: ["main"]` — hydration-sensitive code must survive morphing.
- `astro-compress` runs during build; don't hand-optimize files in `dist/`.

## Verification checklist after content/config changes

1. `pnpm build`
2. Check `dist/robots.txt`, `dist/llms.txt`, `dist/index.md`, `dist/projects.md` reflect the change
3. Spot-check a post: `dist/posts/<slug>.md` exists alongside `dist/posts/<slug>/index.html`
