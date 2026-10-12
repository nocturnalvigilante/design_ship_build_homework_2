import Link from "next/link";
import type { ReactNode } from "react";
import { MOODS, type MoodId } from "@/lib/moods";
import { TOKENS } from "@/lib/tokens";
import { ROLE_ORDER } from "@/lib/palette";

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
  /** Extra classes on the page shell, so a skin can own its own rhythm. */
  shell?: string;
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
  mood,
  name,
  subtitle,
  lede,
  sourcing,
  artifacts,
  crossed,
  children,
}: {
  skin: Skin;
  mood: MoodId;
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
      <div className={`ds-shell mx-auto w-full max-w-[1180px] px-5 py-12 sm:px-8 sm:py-16 ${skin.shell ?? ""}`}>
        <Link href="/" className={skin.back}>
          &larr; Back to the hub
        </Link>

        <header className="ds-head mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
          <div className="max-w-[62ch]">
            <p className={skin.eyebrow}>Mood board {subtitle}</p>
            <h1 className={`mt-3 ${skin.title}`}>{name}</h1>
            <div className={`mt-5 ${skin.lede}`}>{lede}</div>
            <p className={`mt-5 max-w-[58ch] ${skin.small}`}>{sourcing}</p>
          </div>
          <Glance mood={mood} skin={skin} count={artifacts.length} />
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

/** The summary block beside the standfirst: what this board decided, in the
    smallest possible space. It is generated from the same tokens the design
    system publishes, so it cannot disagree with them. */
function Glance({ mood, skin, count }: { mood: MoodId; skin: Skin; count: number }) {
  const m = MOODS[mood];
  const t = TOKENS[mood];
  return (
    <aside className="lg:pt-10">
      <p className={skin.tag}>At a glance</p>
      <div className="mt-3 flex overflow-hidden" aria-hidden>
        {ROLE_ORDER.map((r) => (
          <span key={r} className="h-9 flex-1" style={{ background: m.palette[r] }} />
        ))}
      </div>
      <dl className="mt-4 space-y-3">
        {[
          ["Accent", m.palette.accent.toUpperCase()],
          ["Type", `${t.type[0].family} + ${t.type[2].family}`],
          ["Corners", t.radii.map((r) => r.name).join(", ")],
          ["Rules", m.shape.rules],
          ["Density", m.shape.density],
          ["Artifacts", `${count}, all drawn here`],
        ].map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-4">
            <dt className={skin.tag}>{k}</dt>
            <dd className={`${skin.take} text-right`}>{v}</dd>
          </div>
        ))}
      </dl>
      <p className={`mt-4 ${skin.take}`}>
        <Link href={`/design-systems/${mood}`} className="underline underline-offset-4">
          The design system this became
        </Link>
      </p>
    </aside>
  );
}

/** A labelled colour chip. The caption strip carries its own background AND
    derives its text colour from that background, so the two can never
    contradict each other the way a separate light/dark prop could. */
export function Chip({
  hex,
  name,
  note,
  tone = "light",
  stripBg,
}: {
  hex: string;
  name: string;
  note?: string;
  /** Used only when stripBg is not given. */
  tone?: "light" | "dark";
  /** The colour of the caption strip, usually the card it sits on. */
  stripBg?: string;
}) {
  const bg = stripBg ?? (tone === "dark" ? "#241a46" : "#ffffff");
  const dark = isDark(bg);
  const ink = dark ? "#f7f0e8" : "#1a140f";
  const mut = dark ? "#c3bada" : "#5d483a";
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1" style={{ background: hex }} />
      <div
        className="h-[42px] shrink-0 overflow-hidden px-2 pt-2 leading-tight"
        style={{ background: bg }}
      >
        <p className="font-mono text-[10px] tracking-wider" style={{ color: ink }}>
          {hex.toUpperCase()}
        </p>
        <p className="text-[11px]" style={{ color: mut }}>
          {name}
          {note ? ` \u00b7 ${note}` : ""}
        </p>
      </div>
    </div>
  );
}

/** A texture shown twice: at the scale it ships, and magnified, because a
    one-pixel repeat is invisible in a 176px frame and a specimen that cannot
    be seen is not a specimen. */
export function Magnified({
  ship,
  zoom,
  label = "as it ships",
  zoomLabel = "4×",
  dark,
}: {
  ship: string;
  zoom: string;
  label?: string;
  zoomLabel?: string;
  dark?: boolean;
}) {
  const ink = dark ? "#f7f0e8" : "#141e2e";
  const rule = dark ? "rgba(247,240,232,.45)" : "rgba(20,30,46,.45)";
  return (
    <div className="relative flex h-full w-full">
      <div className={`h-full w-1/2 ${ship}`} />
      <div className={`h-full w-1/2 ${zoom}`} />
      <span className="absolute inset-y-0 left-1/2 w-px" style={{ background: rule }} />
      <span
        className="absolute bottom-1.5 left-2 font-mono text-[9px] tracking-wider"
        style={{ color: ink }}
      >
        {label}
      </span>
      <span
        className="absolute bottom-1.5 right-2 font-mono text-[9px] tracking-wider"
        style={{ color: ink }}
      >
        {zoomLabel}
      </span>
    </div>
  );
}

/** Relative luminance, enough to decide which way round the caption goes. */
function isDark(hex: string) {
  const h = hex.replace("#", "");
  const f =
    h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(f.slice(i, i + 2), 16) / 255);
  const lin = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b) < 0.4;
}
