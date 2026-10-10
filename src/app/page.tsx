import Link from "next/link";
import { MOODS, MOOD_ORDER } from "@/lib/moods";

export default function Hub() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 sm:px-8 sm:py-20">
      <header className="border-b border-[var(--hub-edge)] pb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--hub-muted)]">
          Design, Build, Ship · MPCS 51238 · Assignment 2
        </p>
        <h1 className="mt-4 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Three moods, three systems,
          <br />
          one census.
        </h1>
        <p className="mt-5 max-w-[58ch] text-[15px] leading-relaxed text-[var(--hub-muted)]">
          Three unrelated visual worlds explored as mood boards, each built out into a
          working UI library, and then one of them used to build something real: a
          district-level explorer for the 2011 Census of Rajasthan.
        </p>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--hub-muted)]">
          Raj Hansini Akara
        </p>
      </header>

      <Section n="1" title="Mood boards" note="Where each style came from">
        {MOOD_ORDER.map((id) => {
          const m = MOODS[id];
          return (
            <Card key={id} href={`/mood-boards/${id}`} title={m.name} sub={m.subtitle}>
              <Swatches colors={m.swatch} />
            </Card>
          );
        })}
      </Section>

      <Section n="2" title="Design systems" note="Each one built from its mood board">
        {MOOD_ORDER.map((id) => {
          const m = MOODS[id];
          return (
            <Card key={id} href={`/design-systems/${id}`} title={m.name} sub={m.shape.density}>
              <div className="flex items-center gap-3">
                <span
                  className="text-2xl leading-none"
                  style={{ color: m.palette.accent }}
                  aria-hidden
                >
                  Aa
                </span>
                <Swatches colors={m.swatch.slice(1)} small />
              </div>
            </Card>
          );
        })}
      </Section>

      <Section n="3" title="The site" note="Built in the Rajasthan style">
        <Link
          href="/rajasthan-census"
          className="group col-span-full flex items-center justify-between gap-6 rounded-xl border border-[var(--hub-edge)] bg-[var(--hub-surface)] px-6 py-6 transition-colors hover:border-[#b4352a]"
        >
          <span>
            <span className="block text-xl tracking-tight">Rajasthan Census 2011</span>
            <span className="mt-1 block text-sm text-[var(--hub-muted)]">
              Thirty-three districts, filterable, with a detail panel for each
            </span>
          </span>
          <span
            aria-hidden
            className="shrink-0 rounded-full bg-[#b4352a] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition-transform group-hover:translate-x-1"
          >
            Open &rarr;
          </span>
        </Link>
      </Section>

      <footer className="mt-20 flex flex-wrap justify-between gap-4 border-t border-[var(--hub-edge)] pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--hub-muted)]">
        <span>Next.js · Tailwind · static</span>
        <span>Census of India 2011, district tables</span>
      </footer>
    </main>
  );
}

function Section({
  n, title, note, children,
}: { n: string; title: string; note: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[11px] text-[var(--hub-muted)]">{n}</span>
        <h2 className="text-lg tracking-tight">{title}</h2>
        <span className="hidden text-sm text-[var(--hub-muted)] sm:inline">· {note}</span>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">{children}</div>
    </section>
  );
}

function Card({
  href, title, sub, children,
}: { href: string; title: string; sub: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between gap-5 rounded-xl border border-[var(--hub-edge)] bg-[var(--hub-surface)] p-5 transition-colors hover:border-[var(--hub-muted)]"
    >
      {children}
      <span>
        <span className="block tracking-tight">{title}</span>
        <span className="mt-0.5 block text-[13px] text-[var(--hub-muted)]">{sub}</span>
      </span>
    </Link>
  );
}

function Swatches({ colors, small }: { colors: string[]; small?: boolean }) {
  return (
    <div className="flex gap-1.5" aria-hidden>
      {colors.map((c) => (
        <span
          key={c}
          className={`${small ? "h-4 w-4" : "h-9 w-9"} rounded-[5px] ring-1 ring-black/20`}
          style={{ background: c }}
        />
      ))}
    </div>
  );
}
