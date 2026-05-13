## Apply BNext Deck UI Fix Patch

All edits target `src/components/StrategyDeck.tsx` (plus one optional CSS safety-net in `src/styles.css`). The instructions doc is precise — this is a mechanical patch, no design decisions.

### Edits

1. **Background**: Replace `HelixBackdrop` (huge helix/arc geometry + blurs) with a flat `SlideBackground` component — solid black/white plane, thin top brand-gradient hairline, bottom hairline divider. Swap the call site in `SlideShell`.

2. **Logo**: Rewrite `Logo` so it's a contained `h-10 w-32` flex box (transparent on light, `bg-black/35` on dark), image as `max-h-8 w-full object-contain`. Update `AssetImage` fallback to a compact uppercase placeholder (no more `min-h-[180px]` block blowing up the header).

3. **SlideShell tightening**: Section gets `max-h-[calc(100dvh-8.25rem)]` and width drops to `1500px`. Inner padding `3.2% → 2.35%`. Header margins `mb-5 gap-6 → mb-3 gap-4`. Footer `mt-4 gap-6 → mt-2 gap-4`.

4. **Global slide typography**: Shrink `SlideTitle` (`6vw → 4.1vw`), subtitle (`1.6vw → 1.15vw`, `mt-4 → mt-2`). `BulletList` `space-y-3 → space-y-2`, smaller text + tighter padding. `KeyMessage` `gap-5 p-5 → gap-3 p-3`, smaller text clamp.

5. **Per-slide compaction** (gaps, padding, icon sizes per spec):
   - SplitHero, Problem, Timeline, Capabilities, Sectors, Alignment, Momentum, Reporting, NextSteps — each gets the exact gap/padding/icon-size reductions listed in §5 of the doc.

6. **FlywheelSlide rework**: New grid ratio `0.82fr_1.18fr`, smaller anchor card / workflow padding, smaller center circle (`h-24 w-24`), tighter orbit rings (`62% / 36%`), smaller labels (`h-14 w-36`, smaller text), orbit radius multiplier `38 → 31`, label offsets `-4.5rem / -1.75rem`.

7. **Collapsible bottom controls**: Add `controlsOpen` state. When open: compact toolbar (`gap-1.5 p-1.5`, smaller counter, plus a Minimize2 button). When collapsed: small pill with `current/total` and Maximize2 icon to re-expand. Shrink `IconButton` from `h-11 w-11` to `h-9 w-9`.

8. **Page-level scroll fix**: Root wrapper `min-h-screen → h-dvh`. Inner flex `min-h-screen → h-full overflow-hidden`. `<main>` gets `min-h-0 overflow-hidden`. Slide holder padding `p-4 sm:p-6 lg:p-8 → p-3 sm:p-4 lg:p-5` plus `overflow-hidden`.

9. **Optional CSS safety net**: Add `html, body, #root { height:100%; overflow:hidden; }` inside `@layer base` in `src/styles.css` to guarantee no document-level scroll.

### Verification
After build completes:
- Confirm no page-level vertical scroll at 1920×1080.
- Slide 3 flywheel labels stay inside the slide.
- Bottom controls toggle between expanded toolbar and collapsed pill.
- Top-right logo is contained; background is flat with only a thin gradient hairline.
- Keyboard nav still works.
