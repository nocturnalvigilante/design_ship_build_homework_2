# UI/UX & Visual Design

MPCS 51238, Design · Build · Ship — Assignment 2.

Three mood boards, three design systems, and one real site built with the
first of them. Eight pages, one Next.js app, no database and no external API.

| Page | What is on it |
|---|---|
| `/` | The hub. Links to everything, plus the four things I have to be able to explain in class. |
| `/mood-boards/rajasthan` | **Pink, Blue and White Cities** — 28 artifacts |
| `/mood-boards/la-la-land` | **Twilight and Streetlight** — 28 artifacts |
| `/mood-boards/loki` | **Time Variance Authority** — 28 artifacts |
| `/design-systems/rajasthan` | 6 colour roles, 4 type roles, spacing and shape, 14 components × 6 control states, 4 UI states |
| `/design-systems/la-la-land` | the same, in that style |
| `/design-systems/loki` | the same, in that style |
| `/rajasthan-census` | **Rajasthan 2011 District Explorer** — the site, built with design system 01 |

## The three moods

They were chosen to disagree about one question: *how do you separate two
things?*

- **Rajasthan** separates with ornament. A jali screen is a wall, a window and
  a divider at once, so section rules in this system are drawn as lattice.
- **La La Land** separates with darkness and distance. Its border role is the
  least-used colour in the set; shadow and space do the work instead.
- **Loki** separates with drawn rules. The grid is visible on purpose, because
  the whole system is pretending to be a printed form.

Because they answer that question differently, the three systems differ in
corner, rule weight, shadow, spacing and how each state is signalled — not
only in palette. Rajasthan lifts a card by 1px on hover; La La Land makes it
glow; Loki shifts the sheet 2px and drops its offset shadow.

## The site

`/rajasthan-census` holds all 33 districts of Rajasthan as they stood at the
2011 Census of India, with population, area, density, literacy rate and sex
ratio. Four interactions, all client-side against a static table in
`src/lib/census.ts`:

1. filter by administrative division (multi-select chips)
2. search by district name
3. change the measure, and reverse the sort
4. open a district record in a detail panel, with Escape to close

The accent is spent on three things only: the primary action, the selected
filter, and the district currently open. Bars are indigo, which is a data
colour and never clickable.

Figures come from the published Census 2011 district tables, by way of
`github.com/nocturnalvigilante/DataAnalysisonCensusDataIndia`. The 33
districts are the 2011 boundary set; Rajasthan has been re-districted since,
and these are deliberately the units that were actually counted.

## No borrowed assets

There is no stock photography, no icon font, no chart library and no
component library anywhere in this repo. Every scene on the mood boards is
drawn in SVG, every texture is a CSS gradient, and every component is written
here. That is slower, but it means nothing on these pages needs a licence and
every pixel is a decision I can account for.

## Contrast

The ratios printed on the design-system pages are computed from the token
hexes at build time (`src/lib/contrast.ts`), not typed in, so any of them can
be checked against a contrast tool. Two colours were measured, failed, and
were cut: Rajasthan's gold (2.70:1) and Loki's mascot yellow (1.10:1). The
Loki accent and muted roles were both darkened after measurement.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Next.js 15 (App Router) · React 19 · Tailwind CSS 4 · deployed on Vercel.

## Verification

`VERIFICATION.md` records what was checked in a real browser at 390px and
1440px, and what it found. `CHECKLIST.md` is the assignment brief turned into
a line-by-line checklist.
