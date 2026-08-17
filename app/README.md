# Wedding E-Catalogue (Next.js + TypeScript, App Router)

## Structure
```
app/
  layout.tsx      ← root layout, loads Google Fonts (Cormorant Garamond + Inter)
  page.tsx         ← home page, wires all sections together
  globals.css      ← minimal reset
components/
  Hero.tsx             (client — has button handler)
  BrideNote.tsx        (server)
  ProgramTimeline.tsx  (server) — the "aisle walk" signature timeline
  BridalTeam.tsx       (server)
  MassReadings.tsx     (client — accordion uses useState)
  MassSongs.tsx        (server)
  Footer.tsx           (server)
data/
  program.ts       ← full day timeline, already filled in
  bridalTeam.ts     ← 17 FILLER entries, replace name/photo per person
  songs.ts          ← FILLER mass songs list, replace titles
  readings.ts       ← all readings + psalm, already filled in
styles/
  theme.ts          ← color tokens (sky blue, grey, royal blue, wine red, silver, white, navy)
```

Path alias `@/` points to project root (configured in `tsconfig.json`), so imports look like
`import { colors } from "@/styles/theme"`.

## To run
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## To finish
1. **Bridal team** — edit `data/bridalTeam.ts`, replace the 17 filler `name` values and
   set `photo` to a path in `/public` (e.g. `/team/best-man.jpg`) once you have images.
2. **Mass songs** — edit `data/songs.ts`, replace filler `title` values with the real hymn list.
3. **Couple's photo** — drop it in `/public/couple.jpg`, then in `app/page.tsx` change
   `photoUrl={null}` to `photoUrl="/couple.jpg"`.
4. **Names** — replace `"Bride & Groom"` in `app/page.tsx` with their real names.
5. **Bride's note** — either pass a `note` prop to `<BrideNote note="..." />` in `app/page.tsx`,
   or edit the `defaultNote` constant directly in `components/BrideNote.tsx`.

## Notes
- All data files are typed (`ProgramItem`, `BridalMember`, `Song`, `Reading`) so TypeScript will
  flag anything malformed as you edit.
- Components that don't need interactivity are left as default Server Components (no `"use client"`)
  for best performance; only `Hero` (button) and `MassReadings` (accordion state) are client components.
- The program timeline's center "aisle spine" is the signature visual — sky blue (prep),
  royal blue (church), wine red (reception) dots mark each stop.
