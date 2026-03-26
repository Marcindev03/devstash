# Current Feature

**Dashboard UI — Phase 2** — Second of three dashboard layout phases: collapsible sidebar, typed item links, favorite/recent collections, bottom user area, and responsive mobile drawer behavior using mock data.

## Status

In Progress

## Goals

- Collapsible sidebar
- Items/types with links to `/items/TYPE` (e.g. `/items/snippets`)
- Favorite collections
- Most recent collections
- User avatar area at the bottom
- Drawer icon to open/close sidebar
- Always a drawer on mobile view

## Notes

- Visual target: `context/screenshots/dashboard-ui-main.png`
- Spec: `context/features/dashboard-phase-2-spec.md`
- Related: `context/features/dashboard-phase-1-spec.md`, `context/features/dashboard-phase-3-spec.md`
- Use mock data directly for now: `src/lib/mock-data.ts`
- Project context: `context/project-overview.md`

## History

<!-- Keep this updated. Earliest to latest -->

- **Initial Next.js setup** — Next.js 16 with the App Router (`src/app`), React 19, TypeScript, Tailwind CSS v4 (`@tailwindcss/postcss`), Biome for lint/format, React Compiler enabled in `next.config.ts` (`reactCompiler: true` plus `babel-plugin-react-compiler`), and scripts: `dev`, `build`, `start`, `lint`, `format`.
- **Dashboard UI Phase 1** — Spec in `context/features/dashboard-phase-1-spec.md`; implemented and marked as Completed.
- **Dashboard UI Phase 2** — Spec in `context/features/dashboard-phase-2-spec.md`; In Progress. Implemented on branch `feature/dashboard-phase-2`: `DashboardShell` with collapsible desktop sidebar, mobile drawer + backdrop, mock-driven types/favorites/recent collections and user footer, plus placeholder routes `/items/[typeSlug]` and `/collections/[id]` under the shared `(app)` layout.
