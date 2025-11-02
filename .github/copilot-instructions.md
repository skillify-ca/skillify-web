## Repo quick-orientation (what matters)

- This is a Next.js (v13) TypeScript site using the pages router (see `pages/`).
- Styling: Tailwind + global CSS in `styles/globals.css` and `tailwind.config.js`.
- Content: MDX is enabled (`next.config.js` pageExtensions includes `.mdx`) and blog components live under `components/blog/` and `content/blog/`.
- State: Redux is used (legacy `createStore` wiring) in `redux/` with `redux/store.ts` and `redux/rootReducer.ts`.
- Auth & data:
  - NextAuth session provider is used in `pages/_app.tsx`.
  - Supabase client is created in `lib/supabase.ts` and exported as `supabase` — import it with `import { supabase } from 'lib/supabase'`.
  - There are analytics integrations (Mixpanel, Posthog, Google Analytics, FB Pixel) initialized in `pages/_app.tsx` — keep environment variables in `.env.local`.

## Developer workflows (explicit commands)

- Start dev server: `npm run dev` (runs `next dev`).
- Build for prod: `npm run build` (runs `next build`). Note: `next.config.js` currently sets `typescript.ignoreBuildErrors = true` — type errors may not fail CI.
- Start prod server: `npm run start`.
- Run tests: `npm run test` (uses `jest` with `TZ='UTC'`).
- Lint: `npm run lint` (uses `next lint`).
- Storybook: `npm run storybook` and `npm run build-storybook`; Chromatic: `npm run chromatic`.

If you need environment values, create `.env.local` (do NOT commit it). Key env vars used in repo:
- NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
- NEXT_PUBLIC_POSTHOG_ID, NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN
- NEXTAUTH and Stripe keys are used in various integrations — search `process.env.NEXT_PUBLIC_`.

## Project-specific patterns & conventions

- Page-level layout: many pages expose `getLayout` or `Component.getLayout`. Use that pattern when creating pages so layout is preserved (see `pages/_app.tsx`).
- Auth gating: pages may set `Component.auth = true` or live under `/studentPortal` — `_app.tsx` wraps those routes with an `Auth` component. Follow this pattern to protect pages.
- MDX pages: MDX provider is used (`components/blog/MDXProvider.tsx`) — MDX pages can import React components via the provider.
- Global event tracking: don't duplicate analytics setup — add tracking hooks/events to `pages/_app.tsx` or specific components following the `event()` pattern in `_app.tsx`.
- Redux usage: `redux/store.ts` exports `useAppDispatch` and the default store; prefer `useAppDispatch()` and typed thunks when adding async actions.

## Integration touchpoints to inspect when changing features

- Authentication: `lib/authContext.tsx`, `pages/_app.tsx`, and any page using `Component.auth`.
- Supabase: `lib/supabase.ts` — used for realtime / DB operations.
- GraphQL/Apollo: `graphql/` and usages of `@apollo/client` if you need server-to-server queries.
- Payments / external: Stripe integrations (`@stripe/*`) and AWS S3 helpers (`@aws-sdk/*`) — check components that upload or accept payments.

## Examples (copyable patterns)

- Import Supabase client:

  import { supabase } from '../lib/supabase';

- Protecting a page (pattern used across repo):

  // in page component file
  MyPage.auth = true; // or place page under /studentPortal

  export default MyPage;

- Page layout pattern:

  const Page.getLayout = (page) => <CustomLayout>{page}</CustomLayout>;

## Quick hints for the agent

- Prefer small, focused PRs. This repo mixes UI, analytics, auth, and payments; changing app entrypoints (`pages/_app.tsx`) or analytics can have wide effects.
- Don’t commit secrets; use `.env.local` and reference `process.env.NEXT_PUBLIC_*` in code paths.
- Watch for `next.config.js` typescript setting — type errors may not surface in CI.

## Key files to open first

- `pages/_app.tsx` — app wiring, analytics, auth gating, providers
- `lib/supabase.ts` — supabase client export
- `redux/store.ts` and `redux/rootReducer.ts` — state shape and middleware
- `next.config.js` — MDX + build settings
- `components/blog/MDXProvider.tsx` and `components/blog/MDXComponents.tsx` — MDX usage patterns

If anything in this file is unclear or you want more examples (e.g., how a specific hook like `useUserProfile` is used), tell me which area to expand and I will update this file.
