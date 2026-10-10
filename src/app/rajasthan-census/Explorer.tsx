"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  DISTRICTS,
  DIVISIONS,
  METRICS,
  METRIC_BY_KEY,
  STATE,
  rangeOf,
  type District,
  type Division,
  type MetricKey,
} from "@/lib/census";

/* ---------------------------------------------------------------------------
   The site. Built with design system 01 (Rajasthan): same six colour roles,
   same four type roles, the same components. Four interactions, all faked in
   the browser against a static table that ships with the repo:

     1  filter by division            (chips, multi-select)
     2  search by name                (text input)
     3  change the metric and sort    (radio group + direction toggle)
     4  open a district record        (row -> detail panel, Escape closes)

   The accent is spent on exactly three things: the primary action, the
   selected filter, and the district you currently have open. Charts are
   indigo, which is a data colour and is never clickable.
--------------------------------------------------------------------------- */

const fmtIN = (n: number) => n.toLocaleString("en-IN");

export default function Explorer() {
  const [query, setQuery] = useState("");
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [metric, setMetric] = useState<MetricKey>("population");
  const [descending, setDescending] = useState(true);
  const [showAverage, setShowAverage] = useState(true);
  const [openId, setOpenId] = useState<string | null>(null);

  const closeRef = useRef<HTMLButtonElement>(null);
  const lastRowRef = useRef<HTMLButtonElement | null>(null);

  const m = METRIC_BY_KEY[metric];
  const { max } = rangeOf(metric);
  const stateAvg = STATE[metric as keyof typeof STATE] as number;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DISTRICTS.filter((d) => {
      if (q && !d.name.toLowerCase().includes(q)) return false;
      if (divisions.length && !divisions.includes(d.division)) return false;
      return true;
    }).sort((a, b) =>
      descending ? b[metric] - a[metric] : a[metric] - b[metric],
    );
  }, [query, divisions, metric, descending]);

  const open = openId ? DISTRICTS.find((d) => d.id === openId) ?? null : null;

  // Keyboard: Escape closes the record and puts focus back where it was.
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

  const toggleDivision = (d: Division) =>
    setDivisions((x) => (x.includes(d) ? x.filter((y) => y !== d) : [...x, d]));

  const clearAll = () => {
    setQuery("");
    setDivisions([]);
  };

  const filtered = query.trim() !== "" || divisions.length > 0;

  return (
    <div className="ds ds-raj site">
      {/* ------------------------------------------------------- masthead */}
      <header className="mast">
        <div className="mx-auto w-full max-w-[1180px] px-5 py-10 sm:px-8 sm:py-14">
          <Link href="/" className="lnk t-small">
            &larr; Back to the hub
          </Link>

          <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div>
              <p className="t-label" style={{ color: "var(--accent)" }}>
                Census of India &middot; 2011
              </p>
              <h1 className="t-display mt-2">Rajasthan, district by district</h1>
              <p className="t-body mt-4 max-w-[64ch]">
                Thirty-three districts, as they stood when the count was taken.
                Pick a division, choose what you want to measure, and open any
                district to see its whole record against the state.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
              {[
                ["Persons", fmtIN(STATE.population)],
                ["Districts", String(STATE.districts)],
                ["Literacy", `${STATE.literacy}%`],
                ["Sex ratio", fmtIN(STATE.sexRatio)],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="t-label">{k}</dt>
                  <dd className="t-figure mt-1 text-[24px]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <hr className="rule-jali" />
      </header>

      {/* ------------------------------------------------------- controls */}
      <section className="controls" aria-label="Filter and sort">
        <div className="mx-auto w-full max-w-[1180px] px-5 py-4 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
            <label className="block">
              <span className="t-label">Find a district</span>
              <input
                className="fld mt-2"
                type="search"
                placeholder="Jodhpur"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>

            <div>
              <p className="t-label">Division</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  className={`chip ${divisions.length === 0 ? "is-selected" : ""}`}
                  aria-pressed={divisions.length === 0}
                  onClick={() => setDivisions([])}
                >
                  All seven
                </button>
                {DIVISIONS.map((d) => (
                  <button
                    key={d}
                    className={`chip ${divisions.includes(d) ? "is-selected" : ""}`}
                    aria-pressed={divisions.includes(d)}
                    onClick={() => toggleDivision(d)}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
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

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <label className="flex items-center gap-3">
                <button
                  type="button"
                  role="switch"
                  aria-checked={showAverage}
                  aria-label="Show the state average on every bar"
                  className={`sw ${showAverage ? "is-selected" : ""}`}
                  onClick={() => setShowAverage((v) => !v)}
                >
                  <span className="knob" />
                </button>
                <span className="t-small" style={{ color: "var(--ink)" }}>
                  State average
                </span>
              </label>

              <button
                className="btn btn-secondary"
                onClick={() => setDescending((v) => !v)}
                aria-label={`Sort ${descending ? "ascending" : "descending"}`}
              >
                {descending ? "Highest first" : "Lowest first"}
              </button>

              <button
                className="btn btn-secondary"
                onClick={clearAll}
                disabled={!filtered}
              >
                Clear filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- results */}
      <main className="mx-auto w-full max-w-[1180px] px-5 pb-24 pt-8 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h2 className="t-heading">
                {results.length} of {STATE.districts} districts
              </h2>
              <p className="t-small">
                by {m.label.toLowerCase()}, {descending ? "highest" : "lowest"}{" "}
                first
              </p>
            </div>
            <p className="t-small mt-1 max-w-[62ch]">{m.gloss}</p>

            {results.length === 0 ? (
              <div className="empty mt-5">
                <p className="t-heading">No district matches</p>
                <p className="t-small mt-3">
                  {query.trim()
                    ? `Nothing in Rajasthan is called “${query.trim()}”.`
                    : "That combination of divisions is empty."}
                </p>
                <p className="mt-3">
                  <button className="btn btn-primary" onClick={clearAll}>
                    Clear filters
                  </button>
                </p>
              </div>
            ) : (
              <div className="mt-5 border border-[color:var(--line)] bg-[color:var(--surface)]">
                {results.map((d, i) => {
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
                      <span className="flex items-baseline gap-3">
                        <span className="t-mono w-5 shrink-0 text-right tabular-nums">
                          {i + 1}
                        </span>
                        <span>
                          <span className="t-h3 block">{d.name}</span>
                          <span className="t-small block">{d.division}</span>
                        </span>
                      </span>

                      <span className="bar" aria-hidden>
                        <i style={{ width: `${(d[metric] / max) * 100}%` }} />
                        {showAverage && (
                          <span
                            className="avg"
                            style={{ left: `${(stateAvg / max) * 100}%` }}
                          />
                        )}
                      </span>

                      <span className="t-figure block text-[17px] sm:text-right">
                        {m.format(d[metric])}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {showAverage && results.length > 0 && (
              <p className="t-small mt-3">
                The upright tick on every bar is Rajasthan as a whole:{" "}
                {m.format(stateAvg)}.
              </p>
            )}
          </div>

          {/* ------------------------------------------------ detail panel */}
          <aside aria-label="District record">
            {open ? (
              <>
                <div className="scrim" onClick={() => setOpenId(null)} />
                <div className="detail-wrap">
                  <div
                    className="detail"
                    role="dialog"
                    aria-modal="false"
                    aria-label={`${open.name} district record`}
                  >
                    <div className="detail-head">
                      <p
                        className="t-label"
                        style={{ color: "rgba(255,255,255,.82)" }}
                      >
                        {open.division} division
                      </p>
                      <p className="t-heading mt-1" style={{ color: "#fff" }}>
                        {open.name}
                      </p>
                    </div>

                    <div className="p-5">
                      <dl className="grid grid-cols-2 gap-x-5 gap-y-5">
                        {METRICS.map((mm) => (
                          <div key={mm.key}>
                            <dt className="t-label">{mm.label}</dt>
                            <dd className="t-figure mt-1 text-[21px]">
                              {mm.format(open[mm.key])}
                            </dd>
                            <dd className="t-small mt-1">
                              {describe(open, mm.key)}
                            </dd>
                          </div>
                        ))}
                      </dl>

                      <hr className="rule-jali my-5" />

                      <p className="t-label">Against the state</p>
                      <ul className="mt-3 space-y-3">
                        {METRICS.map((mm) => {
                          const stateV = STATE[
                            mm.key as keyof typeof STATE
                          ] as number;
                          const pct = (open[mm.key] / stateV) * 100;
                          return (
                            <li key={mm.key}>
                              <div className="flex items-baseline justify-between gap-3">
                                <span className="t-small">{mm.short}</span>
                                <span className="t-mono tabular-nums">
                                  {pct >= 100 ? "+" : "−"}
                                  {Math.abs(pct - 100).toFixed(1)}%
                                </span>
                              </div>
                              <div className="bar mt-1">
                                <i
                                  style={{
                                    width: `${Math.min(pct / 2, 100)}%`,
                                    background:
                                      pct >= 100
                                        ? "var(--jade)"
                                        : "var(--indigo)",
                                  }}
                                />
                                <span className="avg" style={{ left: "50%" }} />
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                      <p className="t-small mt-3">
                        The tick is the state figure. Green is above it.
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            setDivisions([open.division]);
                            setQuery("");
                          }}
                        >
                          Show the {open.division} division
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
                <div
                  className="empty"
                  style={{ borderRadius: "24px 24px 3px 3px" }}
                >
                  <p className="t-h3">No district open</p>
                  <p className="t-small mt-3">
                    Choose a row to see its whole record.
                  </p>
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
              Figures are the published district totals from the Census of India
              2011 for Rajasthan: persons, area, density, literacy rate for ages
              seven and over, and females per 1,000 males.
            </p>
            <p className="t-small">
              The 33 districts are the 2011 boundary set. Rajasthan has been
              re-districted since, so these are deliberately not today&rsquo;s
              districts: they are the units that were actually counted.
            </p>
            <p className="t-small">
              Everything runs in the browser from a static table in the repo.
              There is no database, no account and no network call, which is
              also the assignment&rsquo;s constraint.
            </p>
          </div>
          <p className="t-small mt-5">
            Built with{" "}
            <Link href="/design-systems/rajasthan" className="lnk">
              design system 01
            </Link>{" "}
            from{" "}
            <Link href="/mood-boards/rajasthan" className="lnk">
              mood board 01
            </Link>
            . MPCS 51238, UI/UX &amp; Visual Design.
          </p>
        </footer>
      </main>
    </div>
  );
}

/** One plain sentence putting a district's figure in context. */
function describe(d: District, key: MetricKey) {
  const all = [...DISTRICTS].sort((a, b) => b[key] - a[key]);
  const rank = all.findIndex((x) => x.id === d.id) + 1;
  const stateV = STATE[key as keyof typeof STATE] as number;
  const side = d[key] >= stateV ? "above" : "below";
  return `Rank ${rank} of 33 · ${side} the state figure`;
}
