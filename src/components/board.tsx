import Link from "next/link";
import type { ReactNode } from "react";

// Shared scaffolding for the three mood boards. The shell is identical so the
// three are comparable; every visible surface is styled by the `skin` the page
// passes in, so the three still look nothing like each other.

export type Kind =
  | "IMAGE"
  | "COLOUR"
  | "TYPE"
  | "TEXTURE"
  | "MATERIAL"
  | "INTERFACE"
  | "MOTION";

export const KINDS: { kind: Kind; what: string }[] = [
  { kind: "IMAGE", what: "A scene. Drawn here, not photographed." },
  { kind: "COLOUR", what: "A hue and the job it would do." },
  { kind: "TYPE", what: "Lettering, set in the mood's own words." },
  { kind: "TEXTURE", what: "A surface, repeated." },
  { kind: "MATERIAL", what: "What a thing is made of." },
  { kind: "INTERFACE", what: "A piece of UI, already in the style." },
  { kind: "MOTION", what: "How something moves or changes." },
];

export interface Skin {
  /** Wrapper for the whole page. */
  page: string;
  /** Back link. */
  back: string;
  /** Eyebrow above the title. */
  eyebrow: string;
  /** Mood name. */
  title: string;
  /** Standfirst paragraph. */
  lede: string;
  /** Small print: the sourcing note and the footer. */
  small: string;
  /** Section heading. */
  sectionTitle: string;
  /** A single artifact card. */
  card: string;
  /** The tag + index line at the top of a card. */
  tag: string;
  /** The frame the visual sits in. */
  frame: string;
  /** Artifact title. */
  cardTitle: string;
  /** The "what I'm taking" line. */
  take: string;
  /** Horizontal rule between sections. */
  rule: string;
}

export interface Artifact {
  kind: Kind;
  title: string;
  /** One line: what this contributes to the design system. Not a caption. */
  take: string;
  /** The artifact itself. */
  visual: ReactNode;
  /** Optional: let a wide artifact take two columns. */
  wide?: boolean;
}

export function BoardShell({
  skin,
  name,
  subtitle,
  lede,
  sourcing,
  artifacts,
  crossed,
  children,
}: {
  skin: Skin;
  name: string;
  subtitle: string;
  lede: ReactNode;
  sourcing: string;
  artifacts: Artifact[];
  /** What actually crossed into the design system, as token names. */
  crossed: { label: string; detail: string }[];
  children?: ReactNode;
}) {
  const used = KINDS.filter((k) => artifacts.some((a) => a.kind === k.kind));
  return (
    <div className={skin.page}>
      <div className="mx-auto w-full max-w-[1180px] px-5 py-12 sm:px-8 sm:py-16">
        <Link href="/" className={skin.back}>
          &larr; Back to the hub
        </Link>

        <header className="mt-8 max-w-[62ch]">
          <p className={skin.eyebrow}>Mood board {subtitle}</p>
          <h1 className={`mt-3 ${skin.title}`}>{name}</h1>
          <div className={`mt-5 ${skin.lede}`}>{lede}</div>
          <p className={`mt-5 max-w-[58ch] ${skin.small}`}>{sourcing}</p>
        </header>

        {children}

        <hr className={`my-12 ${skin.rule}`} />

        <section>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h2 className={skin.sectionTitle}>
              {artifacts.length} artifacts
            </h2>
            <ul className={`flex flex-wrap gap-x-4 gap-y-1 ${skin.small}`}>
              {used.map((k) => (
                <li key={k.kind}>
                  <span className={skin.tag}>{k.kind}</span>{" "}
                  <span>{k.what}</span>
                </li>
              ))}
            </ul>
          </div>

          <ol className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {artifacts.map((a, i) => (
              <li
                key={a.title}
                className={`${skin.card} ${a.wide ? "sm:col-span-2" : ""}`}
              >
                <p className={skin.tag}>
                  {String(i + 1).padStart(2, "0")} &middot; {a.kind}
                </p>
                <div className={`mt-3 ${skin.frame}`}>{a.visual}</div>
                <h3 className={`mt-4 ${skin.cardTitle}`}>{a.title}</h3>
                <p className={`mt-1.5 ${skin.take}`}>{a.take}</p>
              </li>
            ))}
          </ol>
        </section>

        <hr className={`my-12 ${skin.rule}`} />

        <section>
          <h2 className={skin.sectionTitle}>What crossed into the design system</h2>
          <dl className="mt-6 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
            {crossed.map((c) => (
              <div key={c.label}>
                <dt className={skin.tag}>{c.label}</dt>
                <dd className={`mt-1 ${skin.take}`}>{c.detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <footer className={`mt-14 border-t pt-6 ${skin.small} ${skin.rule}`}>
          <p>
            MPCS 51238 &middot; UI/UX &amp; Visual Design &middot; mood board{" "}
            {subtitle}. Every artifact on this page is drawn in SVG or CSS, so
            nothing here is borrowed and the whole board ships inside the repo.
          </p>
        </footer>
      </div>
    </div>
  );
}

/** A labelled colour chip. Used by all three boards' COLOUR artifacts. */
export function Chip({
  hex,
  name,
  note,
  dark,
}: {
  hex: string;
  name: string;
  note?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1" style={{ background: hex }} />
      <div className="px-2 pt-2 pb-1 leading-tight">
        <p
          className="font-mono text-[10px] tracking-wider"
          style={{ color: dark ? "#f7f0e8" : "#241c13" }}
        >
          {hex.toUpperCase()}
        </p>
        <p
          className="text-[11px]"
          style={{ color: dark ? "#b3a8d2" : "#6b5940" }}
        >
          {name}
          {note ? ` · ${note}` : ""}
        </p>
      </div>
    </div>
  );
}
