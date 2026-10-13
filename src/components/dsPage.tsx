"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { MOODS, moodIndex, type MoodId } from "@/lib/moods";
import { TOKENS } from "@/lib/tokens";
import { PALETTES, SECONDARY } from "@/lib/palette";
import { contrast, grade } from "@/lib/contrast";
import { DISTRICTS, METRICS, METRIC_BY_KEY } from "@/lib/census";
import { PadChrome, PadRule, HokChrome } from "@/components/chrome";

/* ---------------------------------------------------------------------------
   One page shell for all three design systems.

   The six control states are the hard part: hover, focus, pressed and selected
   cannot be seen in a static page. Every component below is therefore shown
   twice — once live, so you can hover and tab through it, and once as a strip
   of six where the state is forced with a class. The CSS is written against
   the pseudo-class and the forced class together, so the strip is not a
   drawing of the state, it is the state.
--------------------------------------------------------------------------- */

const SKIN: Record<MoodId, string> = {
  padmaavat: "ds ds-pad",
  "la-la-land": "ds ds-lll",
  hokusai: "ds ds-hok",
};

/** The district each system uses for its "card with a real item". */
const DEMO: Record<MoodId, string> = {
  padmaavat: "Udaipur",
  "la-la-land": "Mumbai Suburban",
  hokusai: "Thiruvananthapuram",
};

export const STATES = [
  { cls: "", name: "rest", tells: "Available. Nothing has happened yet." },
  { cls: "is-hover", name: "hover", tells: "The pointer is on it, so it is a target." },
  { cls: "is-focus", name: "focus", tells: "The keyboard is here. Space or Enter will act." },
  { cls: "is-pressed", name: "pressed", tells: "The press registered. It happens now." },
  { cls: "is-selected", name: "selected", tells: "This is the current choice and it persists." },
  { cls: "is-disabled", name: "disabled", tells: "Not available, and why is said next to it." },
] as const;

const UI_STATES = [
  { key: "empty", name: "Empty", tells: "The query worked and matched nothing. Says how to get back." },
  { key: "loading", name: "Loading", tells: "The shape of the answer, before the answer." },
  { key: "error", name: "Error", tells: "What failed, attached to the thing that failed." },
  { key: "success", name: "Success", tells: "It happened. Quiet, and it goes away on its own." },
] as const;

/* ---------- small layout pieces, styled by the skin's own tokens ---------- */

function H2({ n, children }: { n: number; children: ReactNode }) {
  return (
    <h2 className="ds-h2 flex items-baseline gap-3">
      <span className="ds-num">{String(n).padStart(2, "0")}</span>
      <span>{children}</span>
    </h2>
  );
}

function Sub({ children }: { children: ReactNode }) {
  return <p className="ds-sub mt-2 max-w-[68ch]">{children}</p>;
}

function Section({
  n,
  title,
  sub,
  ornate,
  children,
}: {
  n: number;
  title: string;
  sub: ReactNode;
  ornate?: boolean;
  children: ReactNode;
}) {
  return (
    <section className="ds-sec mt-14 scroll-mt-6" id={`s${n}`}>
      {ornate && <PadRule />}
      <H2 n={n}>{title}</H2>
      <Sub>{sub}</Sub>
      <div className="mt-7">{children}</div>
    </section>
  );
}

/** A component entry: the name, what it is for, the live thing, the six states. */
function Component({
  n,
  name,
  job,
  live,
  render,
  note,
}: {
  n: number;
  name: string;
  job: string;
  live: ReactNode;
  /** Same component, rendered with a forced-state class. */
  render?: (cls: string) => ReactNode;
  note?: string;
}) {
  return (
    <article className="ds-comp">
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="ds-h3">
          <span className="ds-num">{String(n).padStart(2, "0")}</span> {name}
        </h3>
        <p className="ds-cap">{job}</p>
      </header>

      <div className="ds-live mt-4">{live}</div>

      {render && (
        <div className="mt-5">
          <p className="ds-lab">Six control states</p>
          <ul className="mt-2 grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
            {STATES.map((s) => (
              <li key={s.name}>
                <p className="ds-lab">{s.name}</p>
                <div className="mt-2">{render(s.cls)}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {note && <p className="ds-cap mt-4">{note}</p>}
    </article>
  );
}

/* ----------------------------- the page ----------------------------- */

export default function DesignSystemPage({ mood }: { mood: MoodId }) {
  const m = MOODS[mood];
  const t = TOKENS[mood];
  const p = PALETTES[mood];
  // Text that sits on top of an accent fill: white on vermilion, the page
  // background on amber, the paper colour on stamp orange.
  const accentInk = mood === "la-la-land" ? p.background : p.surface;

  // Live state for the interactive copies.
  const [tab, setTab] = useState(0);
  const [chips, setChips] = useState<string[]>(["Kerala"]);
  const [checked, setChecked] = useState(true);
  const [radio, setRadio] = useState("literacy");
  const [on, setOn] = useState(true);
  const [row, setRow] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const closeRef = useRef<HTMLButtonElement>(null);
  const uid = useId();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const demo = DISTRICTS.find((d) => d.name === DEMO[mood]) ?? DISTRICTS[0];
  const litMetric = METRIC_BY_KEY.literateShare;
  const topRows = [...DISTRICTS]
    .sort((a, b) => litMetric.value(b) - litMetric.value(a))
    .slice(0, 4);

  const toggleChip = (c: string) =>
    setChips((x) => (x.includes(c) ? x.filter((y) => y !== c) : [...x, c]));

  return (
    <div className={`${SKIN[mood]} relative min-h-screen`} data-hydrated={ready ? "true" : "false"}>
      {mood === "padmaavat" && <PadChrome />}
      {mood === "hokusai" && <HokChrome />}
      <div className="ds-shell relative z-10 mx-auto w-full max-w-[1120px] px-5 py-12 sm:px-8 sm:py-16">
        <Link href="/" className="lnk ds-cap">
          &larr; Back to the hub
        </Link>

        <header className="ds-head mt-8">
          <p className="ds-eyebrow">Design system {moodIndex(mood)} &middot; after {m.source}</p>
          <h1 className="ds-h1 mt-3">{m.name}</h1>
          <p className="ds-lede mt-5 max-w-[66ch]">{m.blurb}</p>
          <p className="ds-sub mt-4 max-w-[66ch]">{t.shapeRationale}</p>
          <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            <Link href={`/mood-boards/${mood}`} className="lnk ds-cap">
              The mood board this came from
            </Link>
            {mood === "padmaavat" && (
              <Link href="/india-census" className="lnk ds-cap">
                The site built with it
              </Link>
            )}
          </nav>
        </header>

        {/* ------------------------------------------------ 01 colour roles */}
        <Section
          n={1}
          ornate={mood === "padmaavat" && 1 > 1}
          title="Colour roles"
          sub={
            <>
              Six roles, each with one job written next to it. Contrast ratios
              are computed from the hexes at build time, not typed in, so they
              are checkable. Anything carrying body text is held at 4.5:1 or
              better against the surface it sits on.
            </>
          }
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.colours.map((c) => {
              const against = c.role === "background" || c.role === "surface" ? p.text : p.background;
              const r = contrast(c.hex, against);
              return (
                <div key={c.role}>
                  <div className="sw-chip" style={{ background: c.hex }} />
                  <div className="mt-2 flex items-baseline justify-between gap-3">
                    <p className="ds-h4">{c.role}</p>
                    <p className="ds-mono">{c.hex.toUpperCase()}</p>
                  </div>
                  <p className="ds-cap mt-1">{c.job}</p>
                  <p className="ds-mono mt-2">
                    {r.toFixed(2)}:1 vs {against.toUpperCase()} &middot; {grade(c.hex, against)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <p className="ds-lab">The pairs that actually ship</p>
            <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                ["Body text on background", p.text, p.background],
                ["Body text on surface", p.text, p.surface],
                ["Muted text on background", p.muted, p.background],
                ["Accent text on background", p.accent, p.background],
                ["Label on accent fill", accentInk, p.accent],
              ].map(([label, fg, bg]) => (
                <li
                  key={label}
                  className="flex items-center justify-between gap-4 px-3 py-2"
                  style={{ background: bg, border: `1px solid ${p.border}` }}
                >
                  <span style={{ color: fg }} className="ds-cap">
                    {label}
                  </span>
                  <span style={{ color: fg }} className="ds-mono">
                    {contrast(fg, bg).toFixed(2)}:1 {grade(fg, bg)}
                  </span>
                </li>
              ))}
              <li
                className="flex items-center justify-between gap-4 px-3 py-2"
                style={{ background: p.background, border: `1px solid ${p.border}` }}
              >
                <span className="ds-cap">Border on background</span>
                <span className="flex items-center gap-3">
                  <span
                    aria-hidden
                    style={{ background: p.border }}
                    className="block h-4 w-12"
                  />
                  <span className="ds-mono">
                    {contrast(p.border, p.background).toFixed(2)}:1
                  </span>
                </span>
              </li>
            </ul>
            <p className="ds-cap mt-3">
              The border pair is the only one that does not reach 4.5:1, and it
              does not have to: it never carries text, so it is shown as a rule
              rather than as a word. It is listed so the gap is on the record
              rather than hidden.
            </p>

          <div className="mt-8">
            <p className="ds-lab">The second palette, and what it may not do</p>
            <p className="ds-cap mt-2 max-w-[66ch]">
              These are not accents. They fill charts, chapters and ornament,
              and each one carries its measured ratio against the page so that
              the ones which cannot hold text are marked as such rather than
              quietly used anyway.
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {SECONDARY[mood].map((c) => {
                const r = contrast(c.hex, p.background);
                return (
                  <li key={c.hex}>
                    <div className="sw-chip" style={{ background: c.hex }} />
                    <div className="mt-2 flex items-baseline justify-between gap-3">
                      <p className="ds-h4">{c.name}</p>
                      <p className="ds-mono">{c.hex.toUpperCase()}</p>
                    </div>
                    <p className="ds-cap mt-1">{c.job}</p>
                    <p className="ds-mono mt-1.5">
                      {r.toFixed(2)}:1 on the background &middot;{" "}
                      {r >= 4.5 ? "may carry text" : r >= 3 ? "large text only" : "fill only, never text"}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          </div>
        </Section>

        {/* -------------------------------------------------- 02 type roles */}
        <Section
          n={2}
          ornate={mood === "padmaavat" && 2 > 1}
          title="Type roles"
          sub={
            <>
              Four roles and no fifth. Every specimen below is set in this
              project&rsquo;s own words &mdash; district names and real 2011
              Census figures &mdash; because a type scale that only works on
              Latin filler is not a type scale.
            </>
          }
        >
          <div className="ds-rule-wrap">
            {t.type.map((ty) => (
              <div key={ty.role} className="ds-typerow">
                <div className="ds-typemeta">
                  <p className="ds-h4">{ty.role}</p>
                  <p className="ds-mono mt-1">
                    {ty.family} &middot; {ty.size} &middot; {ty.weight} &middot;{" "}
                    {ty.tracking} &middot; {ty.leading}
                  </p>
                  <p className="ds-cap mt-2">{ty.use}</p>
                </div>
                <p
                  style={{
                    fontFamily: ty.cssVar,
                    fontSize: ty.size,
                    fontWeight: ty.weight,
                    letterSpacing: ty.tracking,
                    lineHeight: ty.leading,
                    textTransform: ty.role === "label" ? "uppercase" : "none",
                  }}
                  className="ds-typesample"
                >
                  {ty.sample}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-7">
            <p className="ds-lab">Figures</p>
            <p className="ds-cap mt-2 max-w-[66ch]">
              Numbers get two sizes and no more, both in the display face with
              tabular numerals so columns of them line up. Anything else on a
              page using a third size is a bug, not a decision.
            </p>
            <div className="mt-3 flex flex-wrap items-end gap-x-10 gap-y-3">
              <div>
                <p className="ds-figure" style={{ fontSize: 25 }}>
                  {DISTRICTS.length}
                </p>
                <p className="ds-mono mt-1">summary · 25px</p>
              </div>
              <div>
                <p className="ds-figure" style={{ fontSize: 18 }}>
                  {litMetric.format(litMetric.value(topRows[0]))}
                </p>
                <p className="ds-mono mt-1">in a row, panel or card · 18px</p>
              </div>
            </div>
          </div>

          <p className="ds-cap mt-6">
            Body copy is held to about 68 characters a line everywhere on this
            page. The measure is the one type rule that is easiest to break and
            hardest to notice.
          </p>
        </Section>

        {/* -------------------------------------------- 03 spacing and shape */}
        <Section
          n={3}
          ornate={mood === "padmaavat" && 3 > 1}
          title="Spacing and shape"
          sub={
            <>
              One spacing scale, the corner radii that are allowed, the border
              weights, and the single shadow. If a value is not on this page it
              does not appear in the system.
            </>
          }
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="ds-lab">Spacing scale</p>
              <ul className="mt-3 space-y-2.5">
                {t.spacing.map((s) => (
                  <li key={s.name} className="flex items-center gap-4">
                    <span className="ds-mono w-10 shrink-0">{s.name}</span>
                    <span className="ds-mono w-12 shrink-0">{s.px}px</span>
                    <span
                      className="h-3 shrink-0"
                      style={{ width: s.px, background: p.accent }}
                    />
                    <span className="ds-cap">{s.use}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <p className="ds-lab">Corners</p>
                <ul className="mt-3 space-y-3">
                  {t.radii.map((r) => (
                    <li key={r.name} className="flex items-center gap-4">
                      <span
                        className={`h-10 w-16 shrink-0 border ${r.name === "cusped" ? "arch-top" : ""} ${r.name === "chamfer" ? "chamfer" : ""}`}
                        style={{
                          borderColor: p.border,
                          background: p.surface,
                          borderRadius:
                            r.name === "cusped" || r.name === "chamfer" ? undefined : r.css,
                        }}
                      />
                      <span>
                        <span className="ds-h4">{r.name}</span>
                        <span className="ds-mono"> &middot; {r.css}</span>
                        <span className="ds-cap block">{r.use}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="ds-lab">Borders</p>
                <ul className="mt-3 space-y-2">
                  {t.borders.map((b) => (
                    <li key={b.name}>
                      <span className="ds-h4">{b.name}</span>
                      <span className="ds-mono"> &middot; {b.css}</span>
                      <span className="ds-cap block">{b.use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="ds-lab">Shadow</p>
                <ul className="mt-3 space-y-3">
                  {t.shadows.map((s) => (
                    <li key={s.name} className="flex items-center gap-4">
                      <span
                        className="h-10 w-16 shrink-0"
                        style={{ background: p.surface, boxShadow: s.css === "none" ? undefined : s.css, border: `1px solid ${p.border}` }}
                      />
                      <span>
                        <span className="ds-h4">{s.name}</span>
                        <span className="ds-cap block">{s.use}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* -------------------------------------------- 04 what a state means */}
        <Section
          n={4}
          ornate={mood === "padmaavat" && 4 > 1}
          title="What each state means"
          sub={
            <>
              Six control states, and the sentence each one is supposed to say
              to the person using it. Every component in section 05 is shown in
              all six.
            </>
          }
        >
          <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {STATES.map((s) => (
              <li key={s.name}>
                <p className="ds-h4">{s.name}</p>
                <p className="ds-cap mt-1">{s.tells}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* ------------------------------------------------- 05 components */}
        <Section
          n={5}
          ornate={mood === "padmaavat" && 5 > 1}
          title="Components"
          sub={
            <>
              Sixteen components: the fourteen the brief names, plus the
              comparison bar and the data row the site needs. Each is live
              &mdash; hover it, tab to it, press it &mdash; and then repeated
              six times with its state forced, so a screenshot shows what a
              pointer would.
            </>
          }
        >
          <div className="ds-comps">
            <Component
              n={1}
              name="Primary button"
              job="One per view. It is the only thing wearing the accent."
              live={<button className="btn btn-primary">Compare districts</button>}
              render={(c) => (
                <button className={`btn btn-primary ${c}`} disabled={c === "is-disabled"} tabIndex={-1}>
                  Compare
                </button>
              )}
            />

            <Component
              n={2}
              name="Secondary button"
              job="Everything else that acts. Outlined, never filled."
              live={<button className="btn btn-secondary">Reset filters</button>}
              render={(c) => (
                <button className={`btn btn-secondary ${c}`} disabled={c === "is-disabled"} tabIndex={-1}>
                  Reset
                </button>
              )}
            />

            <Component
              n={3}
              name="Link"
              job="Navigation inside running text. Underlined, always."
              live={
                <p className="ds-body max-w-[60ch]">
                  India returned 1.21 billion people across{" "}
                  <a className="lnk" href="#s5">{DISTRICTS.length} districts</a> in 2011.
                </p>
              }
              render={(c) => (
                <a className={`lnk ${c}`} href="#s5" tabIndex={-1}>
                  640 districts
                </a>
              )}
            />

            <Component
              n={4}
              name="Text input"
              job="Search. One field, labelled above, never a floating label."
              live={
                <label className="block max-w-sm">
                  <span className="ds-lab">Find a district</span>
                  <input
                    className="fld mt-2"
                    placeholder="Udaipur"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </label>
              }
              render={(c) => (
                <input
                  className={`fld ${c}`}
                  defaultValue="Udaipur"
                  disabled={c === "is-disabled"}
                  readOnly
                  tabIndex={-1}
                />
              )}
            />

            <Component
              n={5}
              name="Select"
              job="A closed list of choices, where typing would be wrong."
              live={
                <label className="block max-w-sm">
                  <span className="ds-lab">Sort by</span>
                  <div className="relative mt-2">
                    <select className="fld" defaultValue="population">
                      {METRICS.map((mm) => (
                        <option key={mm.key} value={mm.key}>
                          {mm.label}
                        </option>
                      ))}
                    </select>
                    <span className="ds-caret">&#9662;</span>
                  </div>
                </label>
              }
              render={(c) => (
                <div className="relative">
                  <select className={`fld ${c}`} disabled={c === "is-disabled"} tabIndex={-1}>
                    <option>Population</option>
                  </select>
                  <span className="ds-caret">&#9662;</span>
                </div>
              )}
            />

            <Component
              n={6}
              name="Checkbox"
              job="Independent switches. Any number can be on."
              live={
                <label className={`pick ${checked ? "is-selected" : ""}`}>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                  <span className="box" aria-hidden>
                    <span className="mark">&#10003;</span>
                  </span>
                  <span>Show the benchmark tick on every bar</span>
                </label>
              }
              render={(c) => (
                <span className={`pick ${c}`}>
                  <span className="box" aria-hidden>
                    <span className="mark">&#10003;</span>
                  </span>
                  <span className="ds-cap">Average</span>
                </span>
              )}
            />

            <Component
              n={7}
              name="Radio"
              job="One of a set. Choosing one un-chooses the rest."
              live={
                <div role="radiogroup" aria-label="Metric" className="flex flex-wrap gap-x-6 gap-y-3">
                  {METRICS.slice(0, 3).map((mm) => (
                    <label key={mm.key} className={`pick ${radio === mm.key ? "is-selected" : ""}`}>
                      <input
                        type="radio"
                        name={`${uid}-metric`}
                        className="sr-only"
                        checked={radio === mm.key}
                        onChange={() => setRadio(mm.key)}
                      />
                      <span className="dot" aria-hidden>
                        <span className="mark" />
                      </span>
                      <span>{mm.label}</span>
                    </label>
                  ))}
                </div>
              }
              render={(c) => (
                <span className={`pick ${c}`}>
                  <span className="dot" aria-hidden>
                    <span className="mark" />
                  </span>
                  <span className="ds-cap">Literacy</span>
                </span>
              )}
            />

            <Component
              n={8}
              name="Toggle"
              job="An immediate on/off that changes the view as you release it."
              live={
                <label className="flex items-center gap-3">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={on}
                    aria-label="Rank order"
                    className={`sw ${on ? "is-selected" : ""}`}
                    onClick={() => setOn((v) => !v)}
                  >
                    <span className="knob" />
                  </button>
                  <span className="ds-body">Rank order {on ? "on" : "off"}</span>
                </label>
              }
              render={(c) => (
                <span className={`sw ${c}`} aria-hidden>
                  <span className="knob" />
                </span>
              )}
            />

            <Component
              n={9}
              name="Tabs"
              job="One body of content, three ways of reading it."
              live={
                <div>
                  <div className="tabs" role="tablist" aria-label="View">
                    {["Table", "Chart", "Notes"].map((lbl, i) => (
                      <button
                        key={lbl}
                        role="tab"
                        aria-selected={tab === i}
                        className={`tab ${tab === i ? "is-selected" : ""}`}
                        onClick={() => setTab(i)}
                      >
                        {lbl}
                      </button>
                    ))}
                  </div>
                  <p className="ds-body mt-4">
                    {["A ranked table of all 640 districts.", "The same numbers as bars against the state and against India.", "Where the figures come from, and which of them are derived."][tab]}
                  </p>
                </div>
              }
              render={(c) => (
                <span className={`tab ${c}`} style={{ display: "inline-block" }}>
                  Chart
                </span>
              )}
            />

            <Component
              n={10}
              name="Filter chips"
              job="Many filters, all visible at once, each removable."
              live={
                <div className="flex flex-wrap gap-2">
                  {["Kerala", "Punjab", "Assam", "Goa", "Bihar"].map((c) => (
                    <button
                      key={c}
                      className={`chip ${chips.includes(c) ? "is-selected" : ""}`}
                      aria-pressed={chips.includes(c)}
                      onClick={() => toggleChip(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              }
              render={(c) => (
                <span className={`chip ${c}`} style={{ display: "inline-block" }}>
                  Kerala
                </span>
              )}
            />

            <Component
              n={11}
              name="Card, with a real item"
              job="A district, with the one figure that matters and its rank."
              live={
                <button className="card max-w-xs" onClick={() => setOpen(true)}>
                  <div className="card-head">
                    <p className="ds-h4">{demo.name}</p>
                    <p className="ds-cap">{demo.state}</p>
                  </div>
                  <div className="card-body">
                    <p className="ds-lab">Population, 2011</p>
                    <p className="ds-figure">{demo.population.toLocaleString("en-IN")}</p>
                    <p className="ds-cap mt-2">
                      {demo.households.toLocaleString("en-IN")} households &middot;{" "}
                      {litMetric.format(litMetric.value(demo))} literate
                    </p>
                    <span className="badge badge-accent mt-3 inline-block">Open record</span>
                  </div>
                </button>
              }
              render={(c) => (
                <span className={`card ${c}`} style={{ display: "block", maxWidth: 150 }}>
                  <span className="card-body" style={{ display: "block" }}>
                    <span className="ds-lab">Population</span>
                    <span className="ds-figure" style={{ display: "block" }}>
                      {(demo.population / 1e5).toFixed(1)}L
                    </span>
                  </span>
                </span>
              )}
              note="Cards are buttons, not divs with click handlers, so they are reachable with the keyboard and announce themselves."
            />

            <Component
              n={12}
              name="List rows"
              job="The dense view. Same data, no decoration, scannable."
              live={
                <div className="rows max-w-md">
                  {topRows.map((d) => (
                    <button
                      key={d.id}
                      className={`row ${row === d.id ? "is-selected" : ""}`}
                      onClick={() => setRow(d.id)}
                      aria-pressed={row === d.id}
                    >
                      <span>{d.name}</span>
                      <span className="ds-mono tabular-nums">{litMetric.format(litMetric.value(d))}</span>
                    </button>
                  ))}
                </div>
              }
              render={(c) => (
                <span className="rows" style={{ display: "block" }}>
                  <span className={`row ${c}`} style={{ display: "grid" }}>
                    <span>{topRows[0].name}</span>
                    <span className="ds-mono">{litMetric.format(litMetric.value(topRows[0]))}</span>
                  </span>
                </span>
              )}
            />

            <Component
              n={13}
              name="Badge"
              job="A fact about an item, not an action. Never clickable."
              live={
                <div className="flex flex-wrap items-center gap-3">
                  <span className="badge">640 districts</span>
                  <span className="badge badge-accent">Highest literate share</span>
                  <span className="badge">2011 boundaries</span>
                </div>
              }
              render={(c) => (
                <span className={`badge ${c === "is-selected" ? "badge-accent" : ""} ${c}`}>
                  Rank 1
                </span>
              )}
              note="The badge has no hover or pressed look of its own, which is the point: if it does not respond, it is not a control. The strip shows that on purpose."
            />

            <Component
              n={14}
              name="Detail panel"
              job="The whole record for one district, over the page, dismissible."
              live={
                <div>
                  <button className="btn btn-primary" onClick={() => setOpen(true)}>
                    Open {demo.name}
                  </button>
                  {open && (
                    <div className="ds-scrim" onClick={() => setOpen(false)}>
                      <div
                        className="panel ds-dialog"
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${demo.name} district record`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-start justify-between gap-6">
                          <div>
                            <p className="ds-lab">{demo.state}</p>
                            <p className="ds-h3 mt-1">{demo.name}</p>
                          </div>
                          <button ref={closeRef} className="btn btn-secondary" onClick={() => setOpen(false)}>
                            Close
                          </button>
                        </div>
                        <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
                          {METRICS.map((mm) => (
                            <div key={mm.key}>
                              <dt className="ds-lab">{mm.label}</dt>
                              <dd className="ds-figure">{mm.format(mm.value(demo))}</dd>
                            </div>
                          ))}
                        </dl>
                        <p className="ds-cap mt-5">
                          Escape closes this, the backdrop closes it, and focus
                          moves to the close button when it opens.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              }
              note="Shown live only. Its six states are the states of the buttons inside it, which are already on this page."
            />
            <Component
              n={15}
              name="Comparison bar"
              job="A measured value against a benchmark. The fill colour is the verdict."
              live={
                <div className="max-w-md space-y-3.5">
                  {topRows.slice(0, 3).map((d, i) => {
                    const v = litMetric.value(d);
                    const above = i < 2;
                    return (
                      <div key={d.id}>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="ds-cap">{d.name}</span>
                          <span className="ds-mono tabular-nums">{litMetric.format(v)}</span>
                        </div>
                        <div className="bar mt-1.5">
                          <i className={above ? "" : "below"} style={{ width: `${40 + i * 24}%` }} />
                          <span className="tick" style={{ left: "62%" }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              }
              note="The tick is the benchmark, and the fill says at-or-above against below. That is why this system has no separate success green or error red: the comparison carries the verdict, so the second palette does the work."
            />

            <Component
              n={16}
              name="Data row"
              job="The dense row the site lists with: rank, name, bar, figure."
              live={
                <div className="rows max-w-2xl">
                  {topRows.map((d, i) => (
                    <button
                      key={d.id}
                      className="drow"
                      aria-current={i === 1}
                      onClick={() => setRow(d.id)}
                    >
                      <span className="ds-mono tabular-nums sm:text-right">{i + 1}</span>
                      <span>
                        <span className="ds-h4 block">{d.name}</span>
                        <span className="ds-cap block">{d.state}</span>
                      </span>
                      <span className="bar" aria-hidden>
                        <i className={i < 3 ? "" : "below"} style={{ width: `${92 - i * 9}%` }} />
                        <span className="tick" style={{ left: "70%" }} />
                      </span>
                      <span className="ds-figure block text-[16px] sm:text-right">
                        {litMetric.format(litMetric.value(d))}
                      </span>
                    </button>
                  ))}
                </div>
              }
              render={(c) => (
                <span className="rows" style={{ display: "block" }}>
                  <span className={`drow ${c}`} style={{ display: "grid", gridTemplateColumns: "1fr auto" }}>
                    <span className="ds-cap">Kerala</span>
                    <span className="ds-mono">88.7%</span>
                  </span>
                </span>
              )}
              note="It is a list row carrying a measurement, so it keeps every list-row state and introduces none of its own. The site uses this exact component."
            />
          </div>
        </Section>

        {/* -------------------------------------------------- 06 UI states */}
        <Section
          n={6}
          ornate={mood === "padmaavat" && 6 > 1}
          title="The four UI states"
          sub={
            <>
              Empty, loading, error and success, drawn in this system rather
              than borrowed from a default. A loading state that looks like
              every other site&rsquo;s loading state is a hole in the style.
            </>
          }
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="ds-lab">{UI_STATES[0].name}</p>
              <div className="state mt-2">
                <p className="ds-h4">No districts match</p>
                <p className="ds-cap mt-2">
                  No district in India had both an internet share above 20% and
                  fewer than 50,000 households.
                </p>
                <button className="btn btn-secondary mt-4">Clear both filters</button>
              </div>
              <p className="ds-cap mt-2">{UI_STATES[0].tells}</p>
            </div>

            <div>
              <p className="ds-lab">{UI_STATES[1].name}</p>
              <div className="state mt-2" style={{ textAlign: "left" }}>
                <div className="skel" style={{ width: "42%" }} />
                <div className="skel mt-3" style={{ width: "78%", height: 22 }} />
                <div className="skel mt-3" style={{ width: "62%" }} />
                <div className="skel mt-3" style={{ width: "88%" }} />
                <p className="ds-cap mt-4">Reading 640 records&hellip;</p>
              </div>
              <p className="ds-cap mt-2">{UI_STATES[1].tells}</p>
            </div>

            <div>
              <p className="ds-lab">{UI_STATES[2].name}</p>
              <div className="state mt-2" style={{ textAlign: "left" }}>
                <p className="ds-lab">Compare with</p>
                <input className="fld fld-err mt-2" defaultValue="Telangana" readOnly />
                <p className="ds-err mt-2">
                  Telangana was formed in 2014. This explorer holds the 35 states
                  and union territories as they stood at the 2011 Census.
                </p>
              </div>
              <p className="ds-cap mt-2">{UI_STATES[2].tells}</p>
            </div>

            <div>
              <p className="ds-lab">{UI_STATES[3].name}</p>
              <div className="state mt-2" style={{ textAlign: "left" }}>
                <div className="note note-ok">
                  <p className="ds-h4">Comparison saved</p>
                  <p className="ds-cap mt-1">
                    Udaipur and Thiruvananthapuram are pinned for this session.
                  </p>
                </div>
              </div>
              <p className="ds-cap mt-2">{UI_STATES[3].tells}</p>
            </div>
          </div>
        </Section>

        <footer className="ds-foot mt-16 pt-6">
          <p className="ds-cap">
            MPCS 51238 &middot; UI/UX &amp; Visual Design &middot; design system {moodIndex(mood)} of 3. Six colour roles, four type roles, fourteen
            components, six control states and four UI states, all on this page.
            Contrast ratios are computed from the token values at build time.
          </p>
        </footer>
      </div>
    </div>
  );
}

