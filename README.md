# UI/UX & Visual Design

MPCS 51238, Design · Build · Ship — Assignment 2.

Three mood boards, three design systems, and one real site built with the
first of them. Eight pages, one Next.js app, no database and no external API.

| Page | What is on it |
|---|---|
| `/` | The hub. Links to everything, plus the four things I have to explain in class. |
| `/mood-boards/padmaavat` | **Chittor and Khilji** — 28 artifacts |
| `/mood-boards/la-la-land` | **Four Seasons, One Magic Hour** — 28 artifacts |
| `/mood-boards/hokusai` | **Prussian Blue on Mulberry Paper** — 28 artifacts |
| `/design-systems/padmaavat` | 6 colour roles + a second palette, 4 type roles, spacing and shape, 14 components × 6 control states, 4 UI states |
| `/design-systems/la-la-land` | the same, in that style |
| `/design-systems/hokusai` | the same, in that style |
| `/india-census` | **India 2011 District Explorer** — the site, built with design system 01 |

## The three moods

They were chosen to disagree about one question: *how do you separate two
things?*

- **Chittor and Khilji**, after *Padmaavat*, separates with ornament and with
  an opposing palette. The film is warm ivory and gold inside the fort and
  cold green-black outside it, and the two never mix in a frame.
- **Four Seasons, One Magic Hour**, after *La La Land*, separates with
  darkness and distance. Its border role is the least-used colour in the set.
- **Prussian Blue on Mulberry Paper**, after Hokusai's *aizuri-e* prints,
  separates with a drawn keyblock outline and with empty paper. It has no
  shadow, one gradient, and a single radius value of zero.

Because they answer that question differently, the three systems differ in
corner, rule weight, shadow, spacing and how each state is signalled, not just
in palette. Padmaavat lifts a card one pixel on hover; La La Land makes it glow
and throws an anamorphic flare across the primary action; Hokusai has no shadow
at all and changes the outline colour instead.

The clearest tell is the border role. Hokusai uses it on every component,
La La Land barely uses it, and Padmaavat replaces it with an inlay pattern.

## The site

`/india-census` holds all **640 districts of India** at the 2011 Census, across
the **35 states and union territories** that existed then, on **seven
measures**. Six interactions, all client-side against a static table in
`src/lib/census.ts`:

1. choose a state, or stay on all of India
2. search by district name
3. change which measure is shown
4. reverse the sort
5. switch the benchmark between India and the chosen state
6. open a district record, Escape to close

The accent is spent on three things only: the primary action, the selected
filter, and the open district. The only other colour in the data is the Khilji
green-black, which marks a district below its benchmark, and it is never used
on anything you can press. That two-palette grammar is why the site needs no
success-green and no error-red.

### On the numbers

Figures come from the Census of India 2011 district table, by way of the
dataset this project's own analysis notebook reads
(`nishusharma1608/India-Census-2011-Analysis`). Checked against the published
totals: **1,21,08,54,977 persons in 640 districts**.

The table holds **counts, not rates**, so every rate on the site is derived
here and says so, with its formula printed. The one to watch is literacy: the
Census publishes it for ages seven and over, while this is literate persons
over the whole population, which reads about ten points lower. It is called
*literate share, all ages* for exactly that reason, and it is not the number
you would quote as "the literacy rate". Density is not derivable at all, since
the table carries no area column, so that measure is absent rather than
guessed.

These are the 2011 boundaries: Telangana did not yet exist. A rate over a state
is that state's own ratio, not the mean of its districts' ratios, which would
weight a tiny district like a huge one.

## No borrowed assets

No stock photography, no film stills, no scanned prints, no icon font, no chart
library and no component library anywhere in this repo. Every scene on the mood
boards is drawn in SVG, every texture is a CSS gradient, and every component is
written here. Slower, but nothing on these pages needs a licence and every
pixel is a decision I can account for.

## Contrast

Ratios printed on the design-system pages are computed from the token hexes at
build time (`src/lib/contrast.ts`), not typed in, so any of them can be checked
against a contrast tool. Each system also publishes its **second palette** with
every ratio stated and each colour marked as "may carry text", "large text
only" or "fill only" — so the colours that cannot hold type are on the record
instead of quietly used anyway.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Next.js 15 (App Router) · React 19 · Tailwind CSS 4 · deployed on Vercel.

## Verification

`VERIFICATION.md` records what was checked in a real browser at 390px and
1440px and what it found. `CHECKLIST.md` is the assignment brief turned into a
line-by-line checklist.

One thing stated plainly there and repeated here: the brief suggests verifying
with Playwright MCP or the Claude in Chrome extension, and I used neither. I
drove real Chrome over the Chrome DevTools Protocol, which is the same channel
Playwright itself uses to control Chrome. Same browser, same clicks, same
screenshots, one layer lower, chosen so the checks could assert on measured
contrast ratios and layout overflow rather than only capture images.
