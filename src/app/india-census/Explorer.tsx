"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  DISTRICTS,
  STATES,
  METRICS,
  METRIC_BY_KEY,
  INDIA,
  STATE_TOTALS,
  comparator,
  rankOf,
  type MetricKey,
} from "@/lib/census";

/* ---------------------------------------------------------------------------
   The site. Built with design system 01 (Chittor and Khilji): the same six
   colour roles, the same four type roles and the same components, which is why
   this file carries almost no styling of its own.

   Six interactions, all client-side against a static table in the repo:

     1  choose a state, or stay on all of India
     2  search by district name
     3  change which of the seven measures is shown
     4  reverse the sort
     5  switch the benchmark between India and the selected state
     6  open a district record, Escape to close

   The accent is spent on three things only: the primary action, the selected
   filter, and the open district. The one other colour in the data is the
   Khilji green-black, which marks a district below its benchmark, and it is
   never used on anything you can press.
--------------------------------------------------------------------------- */

const ALL = "All of India";
const PAGE = 60;

export default function Explorer() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<string>(ALL);
  const [metric, setMetric] = useState<MetricKey>("literateShare");
  const [descending, setDescending] = useState(true);
  const [benchmarkState, setBenchmarkState] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  // Flipped once React has hydrated. It is the only honest way for a headless
  // check to know the page is interactive rather than guessing with a sleep,
  // and it costs one attribute.
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const closeRef = useRef<HTMLButtonElement>(null);
  const lastRowRef = useRef<HTMLButtonElement | null>(null);

  const m = METRIC_BY_KEY[metric];
  const inState = state !== ALL;
  // The benchmark is India unless you are inside a state and ask for that
  // state instead. Outside a state the two are the same thing.
  const bench = comparator(inState && benchmarkState ? STATE_TOTALS[state] : INDIA, metric);

  const pool = useMemo(
    () => (inState ? DISTRICTS.filter((d) => d.state === state) : DISTRICTS),
    [inState, state],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = pool.filter((d) =>
      q ? d.name.toLowerCase().includes(q) || d.state.toLowerCase().includes(q) : true,
    );
    return list.sort((a, b) =>
      descending ? m.value(b) - m.value(a) : m.value(a) - m.value(b),
    );
  }, [pool, query, descending, m]);

  const max = useMemo(
    () => Math.max(...results.map((d) => m.value(d)), bench.value),
    [results, m, bench.value],
  );

  const capped = showAll || results.length <= PAGE ? results : results.slice(0, PAGE);
  const open = openId ? DISTRICTS.find((d) => d.id === openId) ?? null : null;
  const filtered = query.trim() !== "" || inState;

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenId(null);
        lastRowRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const clearAll = () => {
    setQuery("");
    setState(ALL);
    setBenchmarkState(false);
  };

  return (
    <div className="ds ds-pad site" data-hydrated={ready ? "true" : "false"}>
      {/* ------------------------------------------------------- masthead */}
      <header className="mast">
        <div className="mx-auto w-full max-w-[1220px] px-5 py-10 sm:px-8 sm:py-14">
          <Link href="/" className="lnk t-small">
            &larr; Back to the hub
          </Link>

          <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <div>
              <p className="t-label" style={{ color: "var(--accent)" }}>
                Census of India &middot; 2011
              </p>
              <h1 className="t-display mt-2">India, district by district</h1>
              <p className="t-body mt-4 max-w-[64ch]">
                Every one of the {DISTRICTS.length} districts counted in 2011,
                across the {STATES.length} states and union territories that
                existed then. Choose a state, choose what you want to measure,
                and open any district to read its whole record against the
                country.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
              {[
                ["Persons", INDIA.population.toLocaleString("en-IN")],
                ["Districts", String(INDIA.districts)],
                ["States & UTs", String(STATES.length)],
                ["Households", INDIA.households.toLocaleString("en-IN")],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="t-label">{k}</dt>
                  <dd className="t-figure mt-1 text-[22px]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <hr className="rule-inlay" />
      </header>

      {/* ------------------------------------------------------- controls */}
      <section className="controls" aria-label="Filter and sort">
        <div className="mx-auto w-full max-w-[1220px] px-5 py-4 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[260px_280px_minmax(0,1fr)] lg:items-start">
            <label className="block">
              <span className="t-label">Find a district</span>
              <input
                className="fld mt-2"
                type="search"
                placeholder="Thiruvananthapuram"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowAll(false);
                }}
              />
            </label>

            <label className="block">
              <span className="t-label">State or union territory</span>
              <div className="relative mt-2">
                <select
                  className="fld"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                    setShowAll(false);
                    if (e.target.value === ALL) setBenchmarkState(false);
                  }}
                >
                  <option>{ALL}</option>
                  {STATES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <span className="ds-caret">&#9662;</span>
              </div>
            </label>

            <div role="radiogroup" aria-label="Measure">
              <p className="t-label">Measure</p>
              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                {METRICS.map((mm) => (
                  <label
                    key={mm.key}
                    className={`pick ${metric === mm.key ? "is-selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="metric"
                      className="sr-only"
                      checked={metric === mm.key}
                      onChange={() => setMetric(mm.key)}
                    />
                    <span className="dot" aria-hidden>
                      <span className="mark" />
                    </span>
                    <span className="text-[14px]">{mm.short}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
            <label className="flex items-center gap-3">
              <button
                type="button"
                role="switch"
                aria-checked={benchmarkState}
                aria-label="Compare against the chosen state instead of against India"
                className={`sw ${benchmarkState ? "is-selected" : ""}`}
                onClick={() => setBenchmarkState((v) => !v)}
                disabled={!inState}
              >
                <span className="knob" />
              </button>
              <span className="t-small" style={{ color: inState ? "var(--ink)" : undefined }}>
                Compare against {inState && benchmarkState ? state : "India"}
                {!inState && " · choose a state to compare within it"}
              </span>
            </label>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <button
                className="btn btn-secondary"
                onClick={() => setDescending((v) => !v)}
                aria-label={`Sort ${descending ? "ascending" : "descending"}`}
              >
                {descending ? "Highest first" : "Lowest first"}
              </button>
              <button className="btn btn-secondary" onClick={clearAll} disabled={!filtered}>
                Clear filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- results */}
      <main className="mx-auto w-full max-w-[1220px] px-5 pb-24 pt-8 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h2 className="t-heading">
                {results.length} {results.length === 1 ? "district" : "districts"}
                {inState ? ` in ${state}` : ""}
              </h2>
              <p className="t-small">
                by {m.label.toLowerCase()}, {descending ? "highest" : "lowest"} first
              </p>
            </div>
            <p className="t-small mt-1 max-w-[66ch]">
              {m.gloss}
              {m.derived && (
                <>
                  {" "}
                  <span className="t-mono">Derived: {m.formula}.</span>
                </>
              )}
            </p>

            {results.length === 0 ? (
              <div className="empty mt-5">
                <p className="t-heading">No districts match</p>
                <p className="t-small mt-3">
                  {query.trim()
                    ? `Nothing in the 2011 table is called “${query.trim()}”.`
                    : "That filter leaves nothing to show."}
                </p>
                <p className="mt-3">
                  <button className="btn btn-primary" onClick={clearAll}>
                    Clear filters
                  </button>
                </p>
              </div>
            ) : (
              <>
                <div className="mt-5 border border-[color:var(--line)] bg-[color:var(--surface)]">
                  {capped.map((d, i) => {
                    const v = m.value(d);
                    const above = v >= bench.value;
                    const current = openId === d.id;
                    return (
                      <button
                        key={d.id}
                        className="drow"
                        aria-current={current}
                        onClick={(e) => {
                          lastRowRef.current = e.currentTarget;
                          setOpenId(current ? null : d.id);
                        }}
                      >
                        <span className="t-mono tabular-nums sm:text-right">
                          {descending ? i + 1 : results.length - i}
                        </span>
                        <span>
                          <span className="t-h3 block">{d.name}</span>
                          <span className="t-small block">{d.state}</span>
                        </span>
                        <span className="bar" aria-hidden>
                          <i
                            className={above ? "" : "below"}
                            style={{ width: `${Math.min((v / max) * 100, 100)}%` }}
                          />
                          <span
                            className="tick"
                            style={{ left: `${Math.min((bench.value / max) * 100, 99.6)}%` }}
                          />
                        </span>
                        <span className="t-figure block text-[16px] sm:text-right">
                          {m.format(v)}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <p className="t-small max-w-[62ch]">
                    The upright tick on every bar is {bench.label}:{" "}
                    {m.format(bench.value)}. A bar in crimson is at or above it;
                    a bar in green-black falls below.
                  </p>
                  {capped.length < results.length && (
                    <button className="btn btn-primary" onClick={() => setShowAll(true)}>
                      Show all {results.length}
                    </button>
                  )}
                </div>
              </>
            )}
          </div>

          {/* ------------------------------------------------ record panel */}
          <aside aria-label="District record">
            {open ? (
              <>
                <div className="scrim" onClick={() => setOpenId(null)} />
                <div className="detail-wrap">
                  <div
                    className="detail"
                    role="region"
                    aria-label={`${open.name} district record`}
                  >
                    <div className="detail-head">
                      <p className="t-label" style={{ color: "rgba(255,250,240,.82)" }}>
                        {open.state}
                      </p>
                      <p className="t-heading mt-1" style={{ color: "var(--accent-ink)" }}>
                        {open.name}
                      </p>
                    </div>

                    <div className="p-5">
                      <dl className="grid grid-cols-2 gap-x-5 gap-y-4">
                        {METRICS.map((mm) => {
                          const r = rankOf(open, mm.key);
                          return (
                            <div key={mm.key}>
                              <dt className="t-label">{mm.short}</dt>
                              <dd className="t-figure mt-1 text-[19px]">
                                {mm.format(mm.value(open))}
                              </dd>
                              <dd className="t-small mt-0.5">
                                rank {r.rank} of {r.of}
                              </dd>
                            </div>
                          );
                        })}
                      </dl>

                      <hr className="rule-inlay my-5" />

                      <p className="t-label">Against {bench.label}</p>
                      <ul className="mt-3 space-y-3">
                        {METRICS.map((mm) => {
                          const c = comparator(
                            inState && benchmarkState ? STATE_TOTALS[open.state] : INDIA,
                            mm.key,
                          );
                          const pct = (mm.value(open) / c.value) * 100;
                          const above = pct >= 100;
                          return (
                            <li key={mm.key}>
                              <div className="flex items-baseline justify-between gap-3">
                                <span className="t-small">{mm.short}</span>
                                <span className="t-mono tabular-nums">
                                  {above ? "+" : "−"}
                                  {Math.abs(pct - 100).toFixed(1)}%
                                </span>
                              </div>
                              <div className="bar mt-1">
                                <i
                                  className={above ? "" : "below"}
                                  style={{ width: `${Math.max(2, Math.min(pct / 2, 100))}%` }}
                                />
                                <span className="tick" style={{ left: "50%" }} />
                              </div>
                            </li>
                          );
                        })}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            setState(open.state);
                            setQuery("");
                            setShowAll(false);
                          }}
                        >
                          Show all of {open.state}
                        </button>
                        <button
                          ref={closeRef}
                          className="btn btn-secondary"
                          onClick={() => {
                            setOpenId(null);
                            lastRowRef.current?.focus();
                          }}
                        >
                          Close
                        </button>
                      </div>
                      <p className="t-small mt-3">Escape also closes this.</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="detail-wrap hidden lg:block">
                <div className="empty" style={{ borderRadius: "26px 26px 2px 2px" }}>
                  <p className="t-h3">No district open</p>
                  <p className="t-small mt-3">Choose a row to see its whole record.</p>
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* ------------------------------------------------------- source */}
        <footer className="mt-16 border-t border-[color:var(--line)] pt-6">
          <h2 className="t-label">Source and method</h2>
          <div className="mt-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <p className="t-small">
              Figures come from the Census of India 2011 district table, by way
              of the dataset this project&rsquo;s own analysis notebook reads.
              Checked against the published totals: 1,21,08,54,977 persons in{" "}
              {INDIA.districts} districts.
            </p>
            <p className="t-small">
              The table holds counts, not rates, so every rate here is derived
              and says so. Literacy is the one to watch: the Census publishes it
              for ages seven and over, while this is literate persons over the
              whole population, which reads about ten points lower. It is called
              literate share for that reason.
            </p>
            <p className="t-small">
              These are the 2011 boundaries. Telangana did not yet exist and
              several states have been re-districted since. A rate over a state
              is that state&rsquo;s own ratio, not the average of its
              districts&rsquo; ratios, which would weight a tiny district like a
              huge one.
            </p>
          </div>
          <p className="t-small mt-5">
            Built with{" "}
            <Link href="/design-systems/padmaavat" className="lnk">
              design system 01
            </Link>{" "}
            from{" "}
            <Link href="/mood-boards/padmaavat" className="lnk">
              mood board 01
            </Link>
            . Everything runs in the browser from a static table; no database,
            no account, no network call. MPCS 51238, UI/UX &amp; Visual Design.
          </p>
        </footer>
      </main>
    </div>
  );
}
