# Verification

The brief asks the agent to check the site in a real browser at 390px and
1440px, try every interaction, take screenshots and report what broke. This
is that report. Everything below was run against the production build
(`next build` + `next start`) in headless Chrome 155 over the DevTools
protocol, not against a dev server and not by eye.

Two scripts did the work:

- a **page probe** that loads all eight routes at both widths and measures
  horizontal overflow, finds any element escaping the viewport, and computes
  the WCAG contrast ratio of every text-bearing element against its resolved
  background (walking up the tree and compositing alpha, so a translucent
  panel is measured as rendered);
- an **interaction probe** that drives the site and the three design systems
  with real clicks and key events, and asserts on the result.

## What it found, and what was fixed

### 1. The mood boards were rendering in the browser's default sans

The worst bug in the project, and invisible to a quick look because the text
was still legible. Tailwind's `@theme` defines
`--font-raj-display: var(--f-raj-display), Georgia, serif` on `:root`, but
`next/font` was putting `--f-raj-display` on `<body>`. A custom property is
resolved where it is *declared*, so at `:root` the inner `var()` was
undefined, the whole declaration became the guaranteed-invalid value, and
every `font-*` utility silently fell back. The three mood boards were in
system sans; the design systems and the site were unaffected because their
CSS reads the variables from inside `<body>`.

Fixed by moving the font variables to `<html>`. Confirmed afterwards by
reading back the computed `font-family` of every heading and paragraph on
each page: Rozha One + Spectral, Bodoni Moda + Jost, Archivo + Courier Prime.

### 2. Nothing on the page was sticky

`html, body { overflow-x: hidden }` makes both elements scroll containers,
which disables `position: sticky` for everything inside. The control bar on
the site and the detail panel were both silently scrolling away. Measured:
the control bar's `getBoundingClientRect().bottom` was −811px after a scroll
of 1400px, when it should have been pinned at 167px.

Fixed by using `overflow-x: clip`, which guards against a stray wide child
without creating a scroll container. Re-measured: control bar pinned at
0–166.6px, panel at 182px.

### 3. The state-average tick was at 1034% of the bar

On the population view the tick was being positioned from the *state total*
(68,548,437) against a bar scaled to the largest district (6,626,178). Thirty-
three ticks were sitting about 3,300px off the right edge of the page. The
page did not scroll horizontally because the container clipped it, which is
exactly why eyeballing would never have caught it.

The real bug was conceptual, not numeric: a count cannot be compared against
a state total. Literacy, sex ratio and density are rates, so the published
state figure is right for those; population now compares against the average
district (2,077,225) and is labelled differently on screen. The detail
panel's "Against Rajasthan" bars had the same fault and the same fix.

### 4. Three contrast failures, all measured rather than guessed

| Where | Was | Now |
|---|---|---|
| Loki accent on manila | 4.06:1 — below AA for body text | `#973413`, 5.46:1 |
| Loki muted on the pressed surface | 4.33:1 | `#63523a`, 4.84:1 |
| Loki card head captions | 2.50:1 — muted text on a dark head | inverted to the surface colour |

Three more were text I had *written* rather than measured, and all three were
wrong: the Rajasthan accent is 6.43:1 (I had claimed 5.92), the La La Land
accent is 9.90:1 (claimed 9.46), the rejected gold is 2.70:1 (claimed 3.05)
and the rejected mascot yellow is 1.10:1 (claimed 1.60). Every ratio quoted
anywhere in the project is now the computed one.

### 5. Colour-chip captions inherited the wrong background

On the Rajasthan and Loki boards, chips for dark swatches were drawing their
caption in pale text on a white card: 1.02:1. The caption strip now carries
its own background inside the component, so it cannot be broken by whatever
card it is dropped into.

### 6. A 300px sticky control bar on a 390px phone

Sticking a bar that tall to the top of an 844px viewport leaves almost
nothing to read. The bar is now sticky only from 1024px up.

## Final state

Eight routes × two widths:

| | horizontal overflow | elements escaping the viewport | text below its WCAG threshold |
|---|---|---|---|
| all 16 page/width combinations | **0px** | **0** | **0** |

All 49 interaction assertions pass.

The single remaining flagged element is deliberate: artifact 11 on the Loki
board is a sample of the rejected mascot yellow set on itself at 1.10:1, to
show what the rejection means. It is `aria-hidden` and its caption carries
the information.

## Interactions, driven and asserted

### `/rajasthan-census` at 1440×900

| Check | Result |
|---|---|
| 33 rows at rest | pass |
| search "jod" → 1 row, named Jodhpur | pass |
| search "zzzz" → 0 rows, empty state shown | pass |
| primary action in the empty state clears back to 33 | pass |
| division chip "Kota" → 4 rows, chip reads selected | pass |
| same chip again → back to 33 | pass |
| measure → Literacy, highest first → Kota leads | pass |
| comparison tick stays inside its bar | pass |
| sort reversed → Jalore leads | pass |
| row click opens the panel, names Kota, marks the row current | pass |
| Escape closes the panel **and returns focus to the row** | pass |
| toggle removes all 33 ticks, and restores them | pass |
| "Clear filters" is disabled when nothing is filtered | pass |
| all 14 tabbable elements show a focus ring | pass |

### `/rajasthan-census` at 390×844

| Check | Result |
|---|---|
| panel becomes a fixed bottom sheet | pass |
| scrim rendered behind it | pass |
| no horizontal overflow with the sheet open | pass |
| tapping the scrim closes the sheet | pass |

### Each of the three design systems at 1440×900

| Check | Result |
|---|---|
| 14 components present | pass ×3 |
| 13 of them carry a six-state strip | pass ×3 |
| tabs switch the body content | pass ×3 |
| toggle flips | pass ×3 |
| chip selects | pass ×3 |
| modal opens and focus moves into it | pass ×3 |
| Escape closes the modal | pass ×3 |

The fourteenth component is the detail panel, which is shown live only: its
control states are the states of the buttons inside it, which are already on
the page. That is stated on the page rather than left to be noticed.

## Still to be done by a human

The brief is explicit that the agent checking it is not enough. Left for me:
look at all eight pages myself, and tab through the site end to end with the
keyboard, including opening and closing a record without touching the mouse.
