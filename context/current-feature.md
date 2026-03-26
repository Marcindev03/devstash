# Current Feature

**Dashboard UI — Phase 1** — First of three dashboard layout phases: ShadCN setup, `/dashboard` route, main layout, dark mode default, top bar (search + new item, display only), and sidebar/main placeholders.

## Status

Completed

## Goals

- ShadCN UI initialization and components
- ShadCN component installation
- Dashboard route at `/dashboard`
- Main dashboard layout and any global styles
- Dark mode by default
- Top bar with search and new item button (display only)
- Placeholder for sidebar and main area: `h2` with "Sidebar" and "Main" for now

## Notes

- Visual target: `context/screenshots/dashboard-ui-main.png`
- Related: `context/features/dashboard-phase-2-spec.md`, `context/features/dashboard-phase-3-spec.md`
- Mock data: `src/lib/mock-data.ts`; project context: `context/project-overview.md`

## History

<!-- Keep this updated. Earliest to latest -->

- **Initial Next.js setup** — Next.js 16 with the App Router (`src/app`), React 19, TypeScript, Tailwind CSS v4 (`@tailwindcss/postcss`), Biome for lint/format, React Compiler enabled in `next.config.ts` (`reactCompiler: true` plus `babel-plugin-react-compiler`), and scripts: `dev`, `build`, `start`, `lint`, `format`.
- **Dashboard UI Phase 1** — Spec in `context/features/dashboard-phase-1-spec.md`; implemented and marked as Completed.
