## Plan: BNext AI Strategy Deck

### 1. Assets
- Copy uploaded logos to `/public`:
  - `BNextAI_Logo_-_Color.png` → `public/BNextAI Logo - Color.png`
  - `BNextAI_Logo_-_Black.png` → `public/BNextAI Logo - Black.png`
- The other referenced images (`4.png`, `Slide 1-3.png`, `screen 1-2.png`) were not uploaded. The component already includes a graceful "Upload asset" fallback (`AssetImage`), so these will show clear placeholders until the user uploads them. No code change needed.

### 2. Deck component
- Create `src/components/StrategyDeck.tsx` containing the full `app.jsx` content (renamed `.tsx`, minor TS-friendly tweaks: `useState<boolean>`, prop typing where required, but largely kept as JS-compatible TSX). Preserve the `slides` array and all 10 slide layouts verbatim so copy edits stay easy.
- Keep all interactivity from the starter:
  - Prev/next, first/last, keyboard nav (←/→, PgUp/PgDn, Home/End, F, T, M)
  - Progress indicator, fullscreen toggle, theme toggle, collapsible TOC
  - 16:9 scaling canvas

### 3. Route wiring
- Replace placeholder in `src/routes/index.tsx` to render `<StrategyDeck />` full-screen (no marketing landing wrapper).
- Update `__root.tsx` head: title "BNext AI × Scale AI — Strategy Deck", matching meta description.

### 4. Design tokens (`src/styles.css`)
- Add brand tokens to `:root` and `.dark` in oklch:
  - `--brand-blue` (#3B82F6), `--brand-gold` (#FACC15), `--brand-surface` (#1F2937), `--brand-black`, `--brand-white`
  - Gradient helper var `--gradient-brand` blue → gold
- Default theme = dark (cinematic). Theme toggle adds/removes `dark` class on `<html>`.
- Tailwind utility classes used in starter (`from-blue-500`, `to-yellow-400`, `bg-gray-900`, etc.) work directly since Tailwind v4 ships these by default.

### 5. Dependencies
- Install `lucide-react` (already imported by starter).

### 6. QA
- Verify build, navigate slides via keyboard + buttons, toggle theme + TOC + fullscreen, check missing-asset placeholders render legibly in dark and light.

### Out of scope
- Generating replacement imagery for missing slide assets — user will upload those.
- Major restyling beyond what's in the starter.
