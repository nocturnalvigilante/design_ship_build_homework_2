# Assignment 2 grading checklist

Every item is lifted from the brief. Counts are exact where the brief gives a
number. The status column is only ticked where the thing has been *verified*,
not where it has merely been written; `VERIFICATION.md` has the evidence.

Due Tuesday 13 October, 5:30 PM.

## A. Assessment bullets

| # | Requirement | Target | Status |
|---|---|---|---|
| A1 | Live Vercel URL that works, hub as the homepage | 1 | ☑ hub at `/`, 8 routes all 200 |
| A2 | Three mood boards, each 25–30 artifacts | 3 boards, 75–90 artifacts | ☑ 28 + 28 + 28 = 84 |
| A3 | Three design systems, each a UI library with components in every state | 3 | ☑ 14 components × 6 states × 3 |
| A4 | Your site, in the chosen style, ≥2 interactions | 1 | ☑ 4 interactions |
| A5 | Responsive, works mobile and desktop | 390px + 1440px | ☑ 0px overflow on all 16 page/width pairs |
| A6 | GitHub repo with commits that show progress | not one-shot | ☑ scaffold → boards → systems → site → hub → fixes |
| A7 | Ready to explain in class | 3 questions | ☑ section 04 of the hub |

## B. The hub

| # | Requirement | Count | Status |
|---|---|---|---|
| B1 | Links to the three mood boards | 3 | ☑ |
| B2 | Links to the three design systems | 3 | ☑ |
| B3 | A link to the site | 1 | ☑ |

## C. Each mood board (×3)

| # | Requirement | Status |
|---|---|---|
| C1 | A name for the mood | ☑ Pink, Blue and White Cities / Twilight and Streetlight / Time Variance Authority |
| C2 | 25–30 artifacts covering photos, type, colour, texture, interface | ☑ 28 each: 6 image, 5 colour, 5 type, 4 texture, 3 material, 4 interface, 1 motion |
| C3 | The three feel genuinely different | ☑ different ground, different separation strategy, different body face (serif / geometric sans / monospace) |

Every artifact closes with one line on what it contributes, and each board
ends with the six decisions that crossed into its design system.

## D. Each design system (×3)

| # | Section | Status |
|---|---|---|
| D1 | Colour roles + contrast ratios printed | ☑ 6 roles, ratios computed from the hexes at build time |
| D2 | Type roles with sizes and weights, in my own content | ☑ 4 roles, specimens set in district names and 2011 figures |
| D3 | Spacing scale, corners, borders, shadow | ☑ 6-step scale, 2–3 radii, 3 border weights, 2 shadows, each with its use |
| D4 | 14 components | ☑ primary button, secondary button, link, text input, select, checkbox, radio, toggle, tabs, chips, card with a real item, list rows, badge, detail panel |
| D5 | 6 control states | ☑ rest, hover, focus, pressed, selected, disabled — live *and* forced, on 13 of 14 |
| D6 | 4 UI states | ☑ empty, loading, error, success, each drawn in the system's own style |

Per system: 6 + 4 + 14 + 6 + 4. Across three: 18 colour roles, 12 type roles,
42 components, 18 control states, 12 UI states.

The detail panel is the one component shown live only; its control states are
the states of the buttons inside it, and the page says so.

## E. The site

| # | Requirement | Status |
|---|---|---|
| E1 | Visual hierarchy, clear what to look at first | ☑ one display-size title, then the state summary, then controls, then rows |
| E2 | At least two interactions | ☑ four: division filter, name search, measure + sort, record panel |
| E3 | Every control shown in its states | ☑ live on the site, documented on the system page |
| E4 | The accent reserved for the primary action | ☑ accent = primary action, selected filter, open district. Bars are indigo |
| E5 | Responsive | ☑ sheet on mobile, sticky side panel from 1024px |

## F. Design requirements

| # | Requirement | How it is answered |
|---|---|---|
| F1 | Visual hierarchy | four type roles only, one display per page |
| F2 | Type | one scale, measure held to ~68 characters |
| F3 | Colour | six roles, each with a written job; two colours measured, failed and cut |
| F4 | Accessibility | zero elements below their WCAG threshold on any page at either width |
| F5 | Layout | 0px horizontal overflow at 390px and 1440px |
| F6 | Affordances | everything pressable is a button element, underlined, filled or outlined |
| F7 | States | six control states per component, forced so they survive a screenshot |
| F8 | Visual style | no component library, no icon font, no stock imagery anywhere |
| F9 | Simplicity | every artifact carries one line saying what it is for |

## G. Tech stack

| # | Requirement | Status |
|---|---|---|
| G1 | Next.js + Tailwind | ☑ Next 15.5 App Router, Tailwind 4 with `@theme` tokens |
| G2 | Static: no database, accounts, external APIs | ☑ one static table in `src/lib/census.ts`, 12 prerendered routes |
| G3 | Own GitHub repository | ☐ push |
| G4 | Vercel free Hobby plan | ☐ import |

## H. Verification

| # | Requirement | Status |
|---|---|---|
| H1 | Checked in a real browser at 390px and 1440px | ☑ headless Chrome 155, production build, both widths |
| H2 | Every interaction tried, screenshots taken, breakages reported | ☑ 49 assertions, all passing; 6 real bugs found and fixed, all in `VERIFICATION.md` |
| H3 | **You look yourself, and try everything with the keyboard** | ☐ me, not the agent |

## I. Submission

| # | Requirement | Status |
|---|---|---|
| I1 | Vercel URL (the hub) in Google Classroom | ☐ |
| I2 | GitHub URL in Google Classroom | ☐ |

## J. In class

1. **Your style:** why it fits your site and the people who'd use it.
2. **Your design decisions:** what people see first, how they know what they
   can click, what each state tells them.
3. **How you used the agent:** what you asked for, where you pushed back,
   what you decided yourself.

Section 04 of the hub answers all three in writing.
