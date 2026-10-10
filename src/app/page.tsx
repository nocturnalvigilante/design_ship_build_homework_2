import Link from "next/link";
import { MOODS, MOOD_ORDER } from "@/lib/moods";
import { TOKENS } from "@/lib/tokens";
import { ROLE_ORDER } from "@/lib/palette";
import { DISTRICTS } from "@/lib/census";

/* The hub. Deliberately the quietest page in the project: near-black, one
   type family, no ornament. Everything coloured on it belongs to one of the
   three moods, so the three can be told apart at a glance from here. */

function Swatches({ hexes }: { hexes: string[] }) {
  return (
    <div className="flex h-7 overflow-hidden rounded-[2px]" aria-hidden>
      {hexes.map((h) => (
        <span key={h} className="flex-1" style={{ background: h }} />
      ))}
    </div>
  );
}

function Num({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] tracking-[0.14em] text-hub-muted">
      {children}
    </span>
  );
}

function Section({
  n,
  title,
  sub,
  children,
}: {
  n: string;
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <div className="flex items-baseline gap-3">
        <Num>{n}</Num>
        <h2 className="text-[22px] tracking-tight">{title}</h2>
      </div>
      <p className="mt-2 max-w-[66ch] text-[14.5px] leading-[1.6] text-hub-muted">
        {sub}
      </p>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-hub-bg text-hub-ink">
      <div className="mx-auto w-full max-w-[1080px] px-5 py-14 sm:px-8 sm:py-20">
        <header className="max-w-[66ch]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-hub-muted">
            MPCS 51238 &middot; Design, Build, Ship &middot; Assignment 2
          </p>
          <h1 className="mt-4 text-[clamp(32px,5vw,50px)] leading-[1.08] tracking-tight">
            Three moods, three design systems, and one of them used for real.
          </h1>
          <p className="mt-5 text-[16px] leading-[1.65] text-hub-ink/85">
            I picked three worlds that have almost nothing in common: royal
            Rajasthan, <em>La La Land</em>, and the Time Variance Authority from{" "}
            <em>Loki</em>. Each one became a mood board of twenty-eight drawn
            artifacts, then a full design system with its own shape language,
            and then the first of the three was used to build a working
            explorer for the {DISTRICTS.length} districts of Rajasthan at the
            2011 Census.
          </p>
          <p className="mt-4 max-w-[62ch] text-[14.5px] leading-[1.6] text-hub-muted">
            The three systems share no CSS values. They differ in corner, rule
            weight, shadow, spacing and how a state is signalled, not only in
            colour, because three recolours of one kit would have been one
            system wearing three hats.
          </p>
        </header>

        {/* ------------------------------------------------- 01 mood boards */}
        <Section
          n="01"
          title="Mood boards"
          sub="Twenty-eight artifacts each: scenes, colour studies, type specimens, textures, materials, interface fragments and one note on motion. Nothing is a photograph — every artifact is drawn in SVG or built from CSS, so none of it is borrowed."
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MOOD_ORDER.map((id, i) => {
              const m = MOODS[id];
              return (
                <li key={id}>
                  <Link
                    href={`/mood-boards/${id}`}
                    className="group block h-full rounded-[3px] border border-hub-line bg-hub-surface p-5 transition-colors hover:border-hub-muted"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <Num>{`0${i + 1}`}</Num>
                      <Num>28 artifacts</Num>
                    </div>
                    <h3 className="mt-3 text-[19px] tracking-tight group-hover:underline group-hover:decoration-hub-muted group-hover:underline-offset-4">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-[13px] text-hub-muted">
                      {m.subtitle}
                    </p>
                    <p className="mt-3 text-[13.5px] leading-[1.55] text-hub-ink/75">
                      {m.blurb}
                    </p>
                    <div className="mt-4">
                      <Swatches hexes={m.swatch} />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Section>

        {/* ---------------------------------------------- 02 design systems */}
        <Section
          n="02"
          title="Design systems"
          sub="Each one publishes six colour roles with contrast ratios computed from the hexes, four type roles set in this project's own words, a spacing and shape scale, fourteen components shown in all six control states, and the four UI states."
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MOOD_ORDER.map((id, i) => {
              const m = MOODS[id];
              const t = TOKENS[id];
              return (
                <li key={id}>
                  <Link
                    href={`/design-systems/${id}`}
                    className="group block h-full rounded-[3px] border border-hub-line bg-hub-surface p-5 transition-colors hover:border-hub-muted"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <Num>{`0${i + 1}`}</Num>
                      <Num>14 components</Num>
                    </div>
                    <h3 className="mt-3 text-[19px] tracking-tight group-hover:underline group-hover:decoration-hub-muted group-hover:underline-offset-4">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-[13px] text-hub-muted">
                      {m.shape.corners} &middot; rules {m.shape.rules} &middot;{" "}
                      {m.shape.density}
                    </p>
                    <div className="mt-4 flex overflow-hidden rounded-[2px]" aria-hidden>
                      {ROLE_ORDER.map((r) => (
                        <span
                          key={r}
                          className="h-7 flex-1"
                          style={{ background: m.palette[r] }}
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-[12.5px] leading-[1.5] text-hub-muted">
                      {t.type[0].family} + {t.type[2].family}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Section>

        {/* -------------------------------------------------------- 03 site */}
        <Section
          n="03"
          title="The site"
          sub="One real, usable thing, built with design system 01. It uses only tokens and components that appear on that page."
        >
          <Link
            href="/rajasthan-census"
            className="group block overflow-hidden rounded-[3px] border border-hub-line bg-hub-surface transition-colors hover:border-hub-muted"
          >
            <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_280px]">
              <div className="p-6 sm:p-7">
                <Num>Rajasthan style</Num>
                <h3 className="mt-3 text-[26px] leading-tight tracking-tight group-hover:underline group-hover:decoration-hub-muted group-hover:underline-offset-4">
                  Rajasthan 2011 &middot; District Explorer
                </h3>
                <p className="mt-3 max-w-[58ch] text-[14.5px] leading-[1.6] text-hub-ink/80">
                  All {DISTRICTS.length} districts of Rajasthan at the 2011
                  Census: population, literacy, sex ratio and density. Filter by
                  division, search by name, switch what you are measuring, and
                  open any district to read its whole record against the state.
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-hub-muted">
                  <li>4 interactions</li>
                  <li>33 records, static</li>
                  <li>no database, no API</li>
                  <li>keyboard throughout</li>
                </ul>
              </div>
              <div
                className="hidden min-h-[180px] md:block"
                style={{
                  backgroundColor: "#fdf4ea",
                  backgroundImage:
                    "linear-gradient(170deg,#ffffff 0%,#fdf4ea 50%,#f3e0cc 100%)",
                }}
                aria-hidden
              >
                <div className="flex h-full flex-col justify-center gap-2.5 px-6">
                  {[
                    ["Jaipur", 100],
                    ["Jodhpur", 56],
                    ["Alwar", 55],
                    ["Nagaur", 50],
                    ["Udaipur", 46],
                  ].map(([n, w]) => (
                    <div key={n as string}>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[#6b4a3f]">
                        {n as string}
                      </p>
                      <div className="mt-1 h-2.5 bg-[#ece0d0] shadow-[inset_0_1px_2px_rgba(107,74,63,.3)]">
                        <div
                          className="h-full"
                          style={{
                            width: `${w as number}%`,
                            background: n === "Jaipur" ? "#a8291f" : "#1e3a5f",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </Section>

        {/* ----------------------------------------------------- 04 process */}
        <Section
          n="04"
          title="How it was made"
          sub="The brief asks me to be able to explain this out loud, so here is the short version."
        >
          <dl className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {[
              [
                "Why these three",
                "They disagree about the same question. Rajasthan separates things with ornament, La La Land separates them with darkness and distance, and the TVA separates them with drawn rules. Picking three answers to one question made the systems differ structurally rather than by palette.",
              ],
              [
                "Why Rajasthan for the site",
                "The data is a state census, and the people who would actually use it are students, journalists and civil-service candidates reading tables. The warm, high-contrast, ornament-as-structure style keeps a dense table readable on a cheap screen in daylight, which the dark cinematic one would not.",
              ],
              [
                "Where the agent was pushed back",
                "First pass gave three palettes over one component kit. That is a recolour, not three systems, so each mood had to commit to a shape language before any component was written. The gold accent and the mascot yellow were both measured, failed contrast, and were cut and recorded as cut.",
              ],
              [
                "What is deliberately missing",
                "No stock photography, no icon font, no chart library and no component library. Everything on these eight pages is drawn here, which is slower but means every pixel is a decision I can account for.",
              ],
            ].map(([t, d]) => (
              <div key={t}>
                <dt className="text-[16px] tracking-tight">{t}</dt>
                <dd className="mt-2 text-[14px] leading-[1.6] text-hub-muted">
                  {d}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <footer className="mt-20 border-t border-hub-line pt-7">
          <p className="max-w-[70ch] text-[13px] leading-[1.6] text-hub-muted">
            Eight pages: this hub, three mood boards, three design systems and
            the site. Next.js and Tailwind, deployed on Vercel, no database and
            no external API. Census figures are the published 2011 district
            totals for Rajasthan.
          </p>
        </footer>
      </div>
    </div>
  );
}
