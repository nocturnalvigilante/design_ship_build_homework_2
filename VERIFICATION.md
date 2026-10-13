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

## A note on the tool I used, because it is not the one the brief names

Step 6 of the brief says to have the agent check the site in a real browser
"using Playwright MCP or the Claude in Chrome extension". I used neither. I
drove real Chrome directly over the **Chrome DevTools Protocol**.

That is a smaller difference than it sounds, because Playwright controls Chrome
by speaking that same protocol: it is a convenience library sitting on top of
it. Same browser, same clicks and key events, same screenshots, one layer
lower. What the brief actually asks for, a real browser at 390px and 1440px
with every interaction tried and the breakages reported, is what happened.

I went a layer down on purpose. Screenshots only show what broke loudly. Doing
it this way let me run assertions inside the page instead: compute the WCAG
contrast ratio of every text-bearing element against its composited
background, measure `scrollWidth` against `clientWidth` for overflow, read back
computed font families to prove the typefaces actually loaded, and check that
focus is really returned to the row after Escape. Several of the bugs listed
below are invisible to a screenshot and were caught only by measuring.

It is on the record here so it is not something discovered in the room. If it
is asked about in class, the honest answer is the paragraph above.

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

11. **The probe read the previous page after a navigation.** It polled for the
    hydration marker as soon as `Page.navigate` returned, and for about a
    second after that the *previous* document is still the one answering, which
    on a suite that walks several pages is usually a page already marked
    hydrated. Against a local server that window is too short to notice;
    against the deployed site it is not, and three assertions failed because
    the clicks were landing on a page about to be replaced. The probe now waits
    for `location.pathname` to be the page it asked for before it looks for the
    marker. Third harness bug of the project, and the third time the checker
    rather than the site was the thing at fault.

12. **The probe was flagging SVG children as overflowing.** A `<line>` drawn
    past its own viewBox is clipped by it, so its unclipped geometry is not a
    page overflow. The probe now skips elements inside an `<svg>`.

13. **Stale copy survived the mood swap.** Several string replacements failed
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

## Are the three actually different?

The brief grades this ("the three feel genuinely different") and it is the one
claim a screenshot can argue with, so it was measured rather than asserted.
Three screenshots per page at 1280×860, compared pairwise.

| View | Padmaavat vs La La Land | Padmaavat vs Hokusai | La La Land vs Hokusai |
|---|---|---|---|
| mood board, top | 80.5% | 7.7% | 76.0% |
| mood board, grid | 70.6% | 13.5% | 66.7% |
| design system, top | 74.1% | 9.8% | 73.9% |
| design system, components | 77.9% | 8.6% | 76.1% |

Figures are mean per-pixel distance over the whole frame. The first pass of
this measurement is what caught a real problem: **Padmaavat and Hokusai were
8.7% different at the top of their system pages**, because Hokusai's paper was
as warm as Padmaavat's ivory (+31 against +30 on red-minus-blue) and both pages
used the identical shared layout. Two systems that look like one system
recoloured is precisely what the brief says it will cut for.

Two fixes, both substantive:

- **The ground was recoloured.** Unbleached kozo reads cool grey-green beside
  lamp-lit ivory, not warm. Hokusai's background moved to `#E5E8E4`, which is
  +1 on red-minus-blue against Padmaavat's +30, and it improved every one of
  that system's contrast ratios at the same time.
- **Each skin was given its own page rhythm.** Three systems that claim
  different spatial logic were laying their documentation out identically,
  which made the claim decoration. Padmaavat's pages are now symmetric about a
  centre axis, after the durbar artifact. La La Land takes the 96px page edge
  and 88px section gaps its own spacing scale specifies. Hokusai is pushed 200px
  off the left edge with 112px between sections, because its board says the
  empty sheet is the composition.

Honest reading of the numbers afterwards: Padmaavat against Hokusai still sits
in single digits to low teens, and it will, because both are pale themes that
leave most of the sheet empty, so most sampled pixels are two slightly
different near-whites. The metric is the wrong instrument for that pair. What
separates them is ground temperature (+30 against +1), type (Cinzel capitals
against Shippori Mincho sentence case), shape (foliated arches and inlay
against square keyblock outlines) and page rhythm (centred against pushed
right). The screenshots in the repo show it; the number does not capture it,
and it is recorded here rather than quietly dropped for being inconvenient.

## Three defects a probe cannot see

Found by looking at the rendered boards, which is the part no script did:

1. **The marquee-bulb artifact was broken.** The loop placed bulbs along the
   top and bottom at uneven intervals and left the sides bare, so it did not
   read as a frame at all. Rebuilt as four evenly spaced edges.
2. **Two texture specimens were invisible.** A one-pixel film grain and a
   one-pixel washi fibre render as a plain rectangle in a 176px frame. They are
   now shown twice in the same frame, at the scale they ship and magnified,
   with the split drawn and both labelled.
3. **Colour-chip swatches ended at different heights** wherever a caption
   wrapped to a different number of lines, which read as misalignment across a
   row. The caption strip is now a fixed height and the notes were shortened to
   fit it.

## The pages were too plain, and that was a decision, not a constraint

The first build put all the ornament inside the artifact cards and left the
pages themselves flat fields of one colour, which made two of the three look
empty beside La La Land's dusk gradient. Nothing forced that; it was a
conservative call and it undersold both.

What the two light systems have now, all drawn and all inert:

- **Chittor and Khilji** is on a deeper sandstone (`#E8D3B4`) carrying a
  hand-block repeat on a 78px grid, framed by a double gold rule with a cut
  rosette at each corner, with jali screens down both margins on a wide screen
  and lamplight falling from the top of the page. Its hero is a drawn dusk over
  the fort and the lake, with the title in a lit cartouche on top of it.
  Sections are divided by an inlay band with a rosette at its centre.
- **Prussian Blue on Mulberry Paper** opens on a wiped bokashi sky with Fuji
  and a breaking wave in it, runs a hemp-leaf ground down the left margin with
  a second wave in it, and closes on a band of seigaiha water at the foot.

Two rules kept the ornament from costing anything:

1. **No text is ever read through a drawing.** The Hokusai pages pad themselves
   clear of the sky band and the water, and the ornament that remains lives in
   the margin the asymmetric layout already leaves empty. The title over the
   Padmaavat hero sits in an opaque cartouche, which is both how a folio
   carries its title and the only way type over a gradient can be given a
   ratio: measured at 11.38:1 for the title and 6.74:1 for the eyebrow against
   the lightest part of the sky behind it.
2. **Patterned ground stays under about 8% ink**, and anything carrying a
   figure sits on a surface panel rather than on the pattern.

The probe cannot see this class of problem, because it resolves a background by
walking the DOM and the ornament is a sibling layer rather than an ancestor. It
was caught by looking: the first pass had Fuji behind the summary block and a
wave behind the page title.

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
