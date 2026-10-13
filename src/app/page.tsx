import Link from "next/link";
import { MOODS, MOOD_ORDER, moodIndex } from "@/lib/moods";
import { TOKENS } from "@/lib/tokens";
import { ROLE_ORDER } from "@/lib/palette";
import { DISTRICTS, STATES, METRICS } from "@/lib/census";

/* The hub. Deliberately the quietest page here: near-black, one type family,
   no ornament, so that everything coloured on it belongs to one of the three
   moods and they can be told apart at a glance from this page alone. */

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
      <p className="mt-2 max-w-[68ch] text-[14.5px] leading-[1.6] text-hub-muted">
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
        <header className="max-w-[68ch]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-hub-muted">
            MPCS 51238 &middot; Design, Build, Ship &middot; Assignment 2
          </p>
          <h1 className="mt-4 text-[clamp(32px,5vw,50px)] leading-[1.08] tracking-tight">
            Three moods that disagree about the same question, and one of them
            built for real.
          </h1>
          <p className="mt-5 text-[16px] leading-[1.65] text-hub-ink/85">
            The question is: how do you separate two things? <em>Padmaavat</em>{" "}
            separates them with ornament and with an opposing palette.{" "}
            <em>La La Land</em> separates them with darkness and distance.
            Hokusai separates them with a drawn outline and with empty paper.
            Each answer became a mood board of twenty-eight drawn artifacts and
            then a full design system, and the first was used to build a working
            explorer for all {DISTRICTS.length} districts of India at the 2011
            Census.
          </p>
          <p className="mt-4 max-w-[64ch] text-[14.5px] leading-[1.6] text-hub-muted">
            Because the three answer differently, the systems differ in corner,
            rule weight, shadow, spacing and how each state is signalled, not
            only in colour. Padmaavat lifts a card by one pixel; La La Land
            makes it glow and throws an anamorphic flare across it; Hokusai has
            no shadow at all and changes the outline instead.
          </p>
        </header>

        {/* ------------------------------------------------- 01 mood boards */}
        <Section
          n="01"
          title="Mood boards"
          sub="Twenty-eight artifacts each: scenes, colour studies, type specimens, textures, materials, interface fragments and one note on motion. Nothing is a photograph or a film still — every artifact is drawn in SVG or built from CSS, so none of it is borrowed."
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MOOD_ORDER.map((id) => {
              const m = MOODS[id];
              return (
                <li key={id}>
                  <Link
                    href={`/mood-boards/${id}`}
                    className="group block h-full rounded-[3px] border border-hub-line bg-hub-surface p-5 transition-colors hover:border-hub-muted"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <Num>{moodIndex(id)}</Num>
                      <Num>28 artifacts</Num>
                    </div>
                    <h3 className="mt-3 text-[19px] leading-tight tracking-tight group-hover:underline group-hover:decoration-hub-muted group-hover:underline-offset-4">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-[13px] text-hub-muted">after {m.source}</p>
                    <p className="mt-3 text-[13.5px] leading-[1.55] text-hub-ink/75">
                      {m.blurb}
                    </p>
                    <div className="mt-4 flex h-7 overflow-hidden rounded-[2px]" aria-hidden>
                      {m.swatch.map((h) => (
                        <span key={h} className="flex-1" style={{ background: h }} />
                      ))}
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
          sub="Each publishes six colour roles with contrast ratios computed from the hexes at build time, a second palette with every ratio stated, four type roles set in this project's own words, a spacing and shape scale, fourteen components in all six control states, and the four UI states."
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MOOD_ORDER.map((id) => {
              const m = MOODS[id];
              const t = TOKENS[id];
              return (
                <li key={id}>
                  <Link
                    href={`/design-systems/${id}`}
                    className="group block h-full rounded-[3px] border border-hub-line bg-hub-surface p-5 transition-colors hover:border-hub-muted"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <Num>{moodIndex(id)}</Num>
                      <Num>14 components</Num>
                    </div>
                    <h3 className="mt-3 text-[19px] leading-tight tracking-tight group-hover:underline group-hover:decoration-hub-muted group-hover:underline-offset-4">
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
            href="/india-census"
            className="group block overflow-hidden rounded-[3px] border border-hub-line bg-hub-surface transition-colors hover:border-hub-muted"
          >
            <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_300px]">
              <div className="p-6 sm:p-7">
                <Num>Padmaavat style</Num>
                <h3 className="mt-3 text-[26px] leading-tight tracking-tight group-hover:underline group-hover:decoration-hub-muted group-hover:underline-offset-4">
                  India 2011 &middot; District Explorer
                </h3>
                <p className="mt-3 max-w-[60ch] text-[14.5px] leading-[1.6] text-hub-ink/80">
                  All {DISTRICTS.length} districts across {STATES.length} states
                  and union territories, on {METRICS.length} measures. Pick a
                  state, search a district, switch the measure, change whether
                  you are comparing against India or against the state, and open
                  any district for its whole record.
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-hub-muted">
                  <li>6 interactions</li>
                  <li>640 records, static</li>
                  <li>no database, no API</li>
                  <li>keyboard throughout</li>
                  <li>derived rates labelled</li>
                </ul>
              </div>
              <div
                className="hidden min-h-[190px] md:block"
                style={{
                  backgroundColor: "#e8d3b4",
                  backgroundImage:
                    "radial-gradient(120% 80% at 50% 0%, #fff8ea 0%, transparent 56%)",
                }}
                aria-hidden
              >
                <div className="flex h-full flex-col justify-center gap-2.5 px-6">
                  {[
                    ["Kerala", 96, true],
                    ["Goa", 88, true],
                    ["Punjab", 74, true],
                    ["Rajasthan", 56, false],
                    ["Bihar", 48, false],
                  ].map(([n, w, up]) => (
                    <div key={n as string}>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-[#6a4a35]">
                        {n as string}
                      </p>
                      <div className="mt-1 h-2.5 bg-[#e6d4b4] shadow-[inset_0_1px_2px_rgba(34,20,16,.3)]">
                        <div
                          className="h-full"
                          style={{
                            width: `${w as number}%`,
                            background: up ? "#8c1c21" : "#1c2a22",
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
                "They answer one question differently, which forced the systems apart structurally instead of by palette. The tell is the border role: Hokusai uses it on every component, La La Land barely uses it at all, and Padmaavat replaces it with an inlay pattern.",
              ],
              [
                "Why Padmaavat for the site",
                "Not because the data is Indian. Because the film is built from two opposed palettes, warm inside the fort and cold outside it, and a census explorer constantly needs to say 'this figure is above its benchmark' or 'below it'. That grammar came free, and it is why the site needs no success-green and no error-red.",
              ],
              [
                "Where the agent was pushed back",
                "The first La La Land board was amber on navy, which is the poster and not the film; it was rebuilt around the four seasonal palettes, the magenta magic-hour band and the anamorphic flare. The site was also scoped to one state at first, which threw away most of the dataset, so it was rebuilt on all 640 districts.",
              ],
              [
                "What is deliberately missing",
                "No stock photography, no film stills, no icon font, no chart library, no component library. Every pixel on these eight pages is drawn here. Four colours were measured, failed their contrast threshold and were cut or demoted, and each one is recorded on its board as cut.",
              ],
            ].map(([t, d]) => (
              <div key={t}>
                <dt className="text-[16px] tracking-tight">{t}</dt>
                <dd className="mt-2 text-[14px] leading-[1.6] text-hub-muted">{d}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <footer className="mt-20 border-t border-hub-line pt-7">
          <p className="max-w-[72ch] text-[13px] leading-[1.6] text-hub-muted">
            Eight pages: this hub, three mood boards, three design systems and
            the site. Next.js and Tailwind, deployed on Vercel, no database and
            no external API. Census figures are the 2011 district table, checked
            against the published national total of 1,21,08,54,977 persons.
          </p>
          <p className="mt-3 max-w-[72ch] text-[13px] leading-[1.6] text-hub-muted">
            This page is the one place in the project set in the system UI face.
            Each of the six loaded typefaces belongs to one of the three moods,
            and borrowing one here would give the hub an opinion it is not
            supposed to have.
          </p>
        </footer>
      </div>
    </div>
  );
}
