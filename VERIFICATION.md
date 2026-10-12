# Verification

The brief asks the agent to check the site in a real browser at 390px and
1440px, try every interaction, take screenshots and report what broke. This is
that report. Everything below ran against the production build (`next build` +
`next start`) in headless Chrome 155 over the DevTools protocol, not against a
dev server and not by eye.

Two scripts do the work:

- a **page probe** that loads all eight routes at both widths and measures
  horizontal overflow, finds any element escaping the viewport, and computes
  the WCAG contrast ratio of every text-bearing element against its resolved
  background, walking up the tree and compositing alpha so a translucent panel
  is measured as rendered;
- an **interaction probe** that drives the site and the three design systems
  with real clicks and key events and asserts on the result.

## Bugs found and fixed

### Round one, the first build

1. **The three mood boards were rendering in the browser's default sans.**
   Tailwind's `@theme` declares `--font-pad-display` on `:root` as
   `var(--f-pad-display), …`, but `next/font` was putting `--f-pad-display` on
   `<body>`. A custom property resolves where it is *declared*, so at `:root`
   the inner `var()` was undefined, the whole declaration became the
   guaranteed-invalid value, and every `font-*` utility fell back silently.
   Fixed by moving the font variables to `<html>`.

2. **Nothing on any page was sticky.** `overflow-x: hidden` on `html`/`body`
   makes them scroll containers, which disables `position: sticky` for every
   descendant. Measured: the control bar's `getBoundingClientRect().bottom` was
   −811px after a 1400px scroll, where it should have been pinned at 167px.
   Fixed with `overflow-x: clip`, which guards a stray wide child without
   creating a scroll container.

3. **A comparison tick at 1034% of its bar.** A district's population was being
   compared against the *state total*, which can only ever say "much smaller".
   The fix was conceptual: rates compare against the published aggregate,
   counts compare against the average district, and the label says which.

4. **Three measured contrast failures**, all in what was then the third system,
   plus **four ratios I had written from memory in prose that were all wrong**.
   Every ratio in the project is now the computed one.

5. **Colour-chip captions inheriting the wrong background**, at 1.02:1.

6. **A 300px sticky control bar on an 844px phone.**

### Round two, after the rebuild

The moods were replaced (Padmaavat and Hokusai in, the previous first and third
out), La La Land was rebuilt around what the film actually does, and the site
was rebuilt on all 640 districts instead of one state's 33.

7. **The chip caption bug came back in a new shape.** The component had both a
   `tone` prop and a `stripBg` prop, and a caller could set a dark tone on a
   light strip: 1.09:1. Fixed properly this time by deleting the contradiction
   — the caption now derives its ink from the luminance of the background it is
   actually given, so the two cannot disagree.

8. **Captions inside a filled card head were unreadable**, 1.15:1 on Padmaavat
   and 1.17:1 on Hokusai. A filled head sets its own text colour, but the type
   classes inside it kept taking the page's muted colour. Fixed by having those
   classes follow the head.

9. **My own probe was silently swallowing every JavaScript exception.** A JS
   error inside `Runtime.evaluate` comes back in the *result* as
   `exceptionDetails`, not as a protocol error, and the harness was returning
   `None` and carrying on. This had been masking real failures: the whole
   census section of the suite was reporting cascading nonsense. The harness now
   raises. This is the second time a bug in the checker, not the page, has been
   the thing worth finding.

10. **The suite was sleeping and hoping instead of waiting.** `/india-census`
    took longer to hydrate than the fixed 2.2s settle, so clicks landed before
    React was listening and were reported as broken features. The page now
    carries a `data-hydrated` attribute flipped from an effect, and the probe
    waits for it. Measured afterwards: the first request to a route after
    server start takes 5 to 13 seconds because the route compiles on demand;
    every subsequent load is 1.2 seconds. There was no performance bug, only a
    measurement that could not tell the two apart.

11. **The probe was flagging SVG children as overflowing.** A `<line>` drawn
    past its own viewBox is clipped by it, so its unclipped geometry is not a
    page overflow. The probe now skips elements inside an `<svg>`.

12. **Stale copy survived the mood swap.** Several string replacements failed
    silently and left district names from the old scope inside the design-system
    pages. Caught by driving the page and reading back what it actually
    rendered, not by reading the diff.

## Final state

Eight routes × two widths:

| | horizontal overflow | elements escaping the viewport | text below its WCAG threshold |
|---|---|---|---|
| all 16 page/width combinations | **0px** | **0** | **0** |

Every interaction assertion passes.

### `/india-census` at 1440×900

| Check | Result |
|---|---|
| opens capped at 60 of 640 rows, heading says 640 | pass |
| "Show all 640" renders all 640 | pass |
| search "thiruv" → 3 districts, Thiruvananthapuram first | pass |
| search "zzzz" → 0 rows, empty state shown | pass |
| the empty state's primary action clears back | pass |
| state select → Kerala → exactly 14 districts | pass |
| heading names the state | pass |
| benchmark switch is enabled only inside a state | pass |
| benchmark label changes India → Kerala | pass |
| every comparison tick stays inside its bar | pass |
| both warm and cold bars are present at once | pass |
| sort reverses (Pathanamthitta → Wayanad) | pass |
| metric switches, and the derived formula is printed | pass |
| row opens the record, which names the district | pass |
| record shows all 7 measures with ranks out of 640 | pass |
| Escape closes it **and returns focus to the row** | pass |
| all 16 tabbable elements show a focus ring | pass |

### `/india-census` at 390×844

| Check | Result |
|---|---|
| record becomes a fixed bottom sheet | pass |
| scrim rendered behind it | pass |
| no horizontal overflow with the sheet open | pass |
| tapping the scrim closes it | pass |

### Each of the three design systems at 1440×900

| Check | Result |
|---|---|
| 14 components present | pass ×3 |
| 13 carry a six-state strip | pass ×3 |
| six colour roles plus a second palette, all swatched | pass ×3 |
| four type roles | pass ×3 |
| four UI states | pass ×3 |
| tabs switch the body content | pass ×3 |
| toggle flips | pass ×3 |
| chip selects | pass ×3 |
| modal opens and focus moves into it | pass ×3 |
| Escape closes the modal | pass ×3 |

The fourteenth component is the detail panel, shown live only: its control
states are the states of the buttons inside it, which are already on the page.
That is stated on the page rather than left to be noticed.

## Data checks

The dataset was validated before anything was built on it:

- national total **1,21,08,54,977** matches the published 2011 figure
- **640** districts in **35** states and union territories
- Jaipur 66,26,178 and the sex ratios match the published district figures
- no blank cells anywhere, and no district where electrified households exceed
  total households
- three districts record zero urban households (Lahul and Spiti, Kinnaur, the
  Nicobars), which is correct rather than missing data
- four district names carried a double space or a shouted "AND" and were
  normalised

## Still to be done by a human

The brief is explicit that the agent checking it is not enough. Left for me:
look at all eight pages myself, and tab through the site end to end with the
keyboard, including opening and closing a record without touching the mouse.
