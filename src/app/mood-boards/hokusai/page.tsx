import type { Metadata } from "next";
import { BoardShell, Chip, type Artifact, type Skin } from "@/components/board";

export const metadata: Metadata = {
  title: "Mood board 03 · Loki — Time Variance Authority",
  description:
    "Twenty-eight artifacts: manila and carbon, rubber stamps, ruled forms, 1970s institutional signage.",
};

const skin: Skin = {
  page: "min-h-screen bg-loki-bg text-loki-ink font-loki-body",
  back:
    "inline-block border border-loki-line bg-loki-surface px-2 py-1 font-loki-display text-[10px] font-bold uppercase tracking-[0.18em] text-loki-muted hover:bg-loki-accent hover:text-loki-surface",
  eyebrow:
    "font-loki-display text-[10px] font-bold uppercase tracking-[0.22em] text-loki-accent",
  title:
    "font-loki-display text-[clamp(30px,4.6vw,46px)] font-extrabold uppercase leading-none -tracking-[0.02em]",
  lede: "font-loki-body text-[15px] leading-[1.6] text-loki-ink",
  small: "font-loki-body text-[12.5px] leading-[1.5] text-loki-muted",
  sectionTitle:
    "border-b-2 border-loki-ink pb-1 font-loki-display text-[15px] font-bold uppercase tracking-[0.08em]",
  card: "border border-loki-line bg-loki-surface p-3 transition-shadow hover:shadow-[2px_2px_0_#9a8a66]",
  tag:
    "font-loki-display text-[10px] font-bold uppercase tracking-[0.18em] text-loki-muted",
  frame: "h-44 overflow-hidden border border-loki-line",
  cardTitle: "font-loki-display text-[14px] font-bold uppercase tracking-[0.04em] leading-snug",
  take: "font-loki-body text-[12.5px] leading-[1.5] text-loki-muted",
  rule: "border-loki-line",
};

/* ---------- drawn scenes ---------- */

function Lobby() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A vast concrete atrium with a clock high on the wall and small figures below">
      <rect width="300" height="176" fill="#cbbf9f" />
      <rect y="126" width="300" height="50" fill="#b3a67f" />
      <g fill="#bfb290">
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={i} x={10 + i * 50} y="18" width="26" height="108" />
        ))}
      </g>
      <g fill="#a2946e">
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={i} x={36 + i * 50} y="18" width="4" height="108" />
        ))}
      </g>
      <rect x="0" y="6" width="300" height="14" fill="#8d8060" />
      <circle cx="150" cy="58" r="22" fill="#f4efe0" stroke="#241c13" strokeWidth="2.5" />
      <line x1="150" y1="58" x2="150" y2="44" stroke="#241c13" strokeWidth="2.5" />
      <line x1="150" y1="58" x2="160" y2="64" stroke="#973413" strokeWidth="2.5" />
      <rect x="118" y="88" width="64" height="11" fill="#973413" />
      <g fill="#4a3f2c">
        {[44, 72, 96, 206, 232, 258].map((x, i) => (
          <g key={i}>
            <rect x={x} y={112} width="7" height="16" />
            <circle cx={x + 3.5} cy={108} r="3.5" />
          </g>
        ))}
      </g>
    </svg>
  );
}

function DeskRows() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="Rows of identical desks with clerks, seen from above">
      <rect width="300" height="176" fill="#d6c9a6" />
      {[0, 1, 2, 3].map((r) => (
        <g key={r}>
          {[0, 1, 2, 3, 4].map((c) => {
            const x = 14 + c * 56;
            const y = 14 + r * 42;
            return (
              <g key={c}>
                <rect x={x} y={y} width="44" height="26" fill="#9a8a66" />
                <rect x={x + 2} y={y + 2} width="40" height="22" fill="#b8a87f" />
                <rect x={x + 5} y={y + 6} width="13" height="14" fill="#f4efe0" />
                <rect x={x + 22} y={y + 8} width="16" height="10" fill="#7d7430" />
                <circle cx={x + 22} cy={y + 32} r="5" fill="#4a3f2c" />
              </g>
            );
          })}
        </g>
      ))}
      <rect x="0" y="0" width="300" height="176" fill="none" stroke="#9a8a66" strokeWidth="2" />
    </svg>
  );
}

function TimeDoor() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A glowing orange ring standing open in a dim concrete corridor">
      <rect width="300" height="176" fill="#3a3326" />
      <rect y="132" width="300" height="44" fill="#2a2419" />
      <g opacity="0.9">
        <ellipse cx="150" cy="88" rx="56" ry="56" fill="none" stroke="#973413" strokeWidth="7" />
        <ellipse cx="150" cy="88" rx="56" ry="56" fill="none" stroke="#f0a04a" strokeWidth="2" />
        <ellipse cx="150" cy="88" rx="50" ry="50" fill="#1c1812" />
      </g>
      <ellipse cx="150" cy="88" rx="70" ry="70" fill="#973413" opacity="0.1" />
      <ellipse cx="150" cy="148" rx="72" ry="10" fill="#973413" opacity="0.18" />
      <g fill="#c9a227" opacity="0.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <circle key={i} cx={150 + Math.cos(i) * 34} cy={88 + Math.sin(i * 1.7) * 32} r="1.4" />
        ))}
      </g>
    </svg>
  );
}

function Archive() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="Deep shelves of identical box files receding down a corridor">
      <rect width="300" height="176" fill="#c7b995" />
      {[0, 1, 2, 3, 4, 5].map((r) => (
        <g key={r}>
          <rect x="0" y={8 + r * 28} width="300" height="22" fill="#b2a173" />
          {Array.from({ length: 16 }).map((_, c) => (
            <g key={c}>
              <rect x={4 + c * 18.6} y={10 + r * 28} width="15" height="18" fill={c % 4 === 0 ? "#d9cba4" : c % 4 === 1 ? "#cbbb90" : c % 4 === 2 ? "#e2d6b4" : "#bfae82"} />
              <rect x={6 + c * 18.6} y={13 + r * 28} width="11" height="4" fill="#f4efe0" />
              {(r * 16 + c) % 11 === 0 && (
                <rect x={6 + c * 18.6} y={20 + r * 28} width="11" height="3" fill="#973413" />
              )}
            </g>
          ))}
          <rect x="0" y={30 + r * 28} width="300" height="3" fill="#8d7c56" />
        </g>
      ))}
    </svg>
  );
}

function DeskTop() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A desk from above with scattered forms, a stamp, a mug and a pen">
      <rect width="300" height="176" fill="#6b5435" />
      <g>
        <rect x="18" y="24" width="112" height="140" fill="#f1ead6" transform="rotate(-4 74 94)" />
        <rect x="30" y="16" width="112" height="140" fill="#f7f2e2" transform="rotate(3 86 86)" />
        {Array.from({ length: 9 }).map((_, i) => (
          <rect key={i} x="42" y={34 + i * 13} width={i % 3 === 0 ? 62 : 84} height="3" fill="#9a8a66" transform="rotate(3 86 86)" />
        ))}
        <rect x="42" y="26" width="46" height="6" fill="#241c13" transform="rotate(3 86 86)" />
      </g>
      <g transform="rotate(-10 210 70)">
        <rect x="170" y="36" width="88" height="62" fill="#fbe7d4" stroke="#973413" strokeWidth="2.5" />
        <rect x="182" y="52" width="64" height="8" fill="#973413" />
        <rect x="182" y="68" width="42" height="5" fill="#973413" />
      </g>
      <g>
        <rect x="196" y="112" width="34" height="18" fill="#2f2a20" />
        <rect x="204" y="100" width="18" height="14" rx="3" fill="#443c2c" />
        <rect x="196" y="130" width="34" height="5" fill="#973413" />
      </g>
      <g>
        <circle cx="266" cy="138" r="18" fill="#d8cdae" />
        <circle cx="266" cy="138" r="13" fill="#54432c" />
        <path d="M284 132 a9 7 0 0 1 0 12" fill="none" stroke="#d8cdae" strokeWidth="4" />
      </g>
      <rect x="150" y="150" width="76" height="4" rx="2" fill="#241c13" transform="rotate(-6 188 152)" />
    </svg>
  );
}

function BranchChart() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A wall chart of one straight timeline with several branches crossed out in orange">
      <rect width="300" height="176" fill="#e8dfc6" />
      <g stroke="#9a8a66" strokeWidth="0.6">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1="0" y1={i * 16} x2="300" y2={i * 16} />
        ))}
      </g>
      <line x1="10" y1="88" x2="290" y2="88" stroke="#241c13" strokeWidth="3" />
      {[[64, -1], [118, 1], [172, -1], [222, 1]].map(([x, dir], i) => (
        <g key={i}>
          <path d={`M${x} 88 Q${x + 26} 88 ${x + 46} ${88 + dir * 44}`} stroke="#973413" strokeWidth="2" fill="none" strokeDasharray={i === 2 ? "0" : "5 3"} />
          {i !== 2 && (
            <g stroke="#973413" strokeWidth="2.5">
              <line x1={x + 34} y1={88 + dir * 26} x2={x + 48} y2={88 + dir * 38} />
              <line x1={x + 48} y1={88 + dir * 26} x2={x + 34} y2={88 + dir * 38} />
            </g>
          )}
        </g>
      ))}
      <text x="12" y="80" fontSize="9" fontFamily="monospace" fill="#241c13">SACRED TIMELINE</text>
      <text x="214" y="150" fontSize="8" fontFamily="monospace" fill="#973413">VARIANT 2011</text>
    </svg>
  );
}

function TypeCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col justify-center bg-loki-surface px-4 tex-paper">
      {children}
    </div>
  );
}

const ARTIFACTS: Artifact[] = [
  /* IMAGE */
  {
    kind: "IMAGE",
    title: "The atrium",
    take: "Enormous, symmetrical, and totally indifferent to you. Sets the tone: the interface is a building you are a visitor in, not a product being friendly at you.",
    visual: <Lobby />,
  },
  {
    kind: "IMAGE",
    title: "Rows of identical desks",
    take: "Thirty-three districts is a list of identical records. The grid here is literal: same cell, repeated, no cell special until you pick one.",
    visual: <DeskRows />,
  },
  {
    kind: "IMAGE",
    title: "A time door",
    take: "The only saturated thing in the building, and it is the thing you walk through. That is the whole argument for reserving the accent.",
    visual: <TimeDoor />,
  },
  {
    kind: "IMAGE",
    title: "The archive",
    take: "Rows of files, a coloured tab every eleventh one. Became the table: quiet rows, with the accent marking only the record in hand.",
    visual: <Archive />,
  },
  {
    kind: "IMAGE",
    title: "A desk at the end of a shift",
    take: "Paper overlapping paper. The detail panel sits on top of the table rather than replacing it, so you can still see what you came from.",
    visual: <DeskTop />,
  },
  {
    kind: "IMAGE",
    title: "Wall chart: one line, pruned branches",
    take: "A diagram doing the job of a sentence. Pushed the site towards charts drawn in the same ink as the text, not in a chart library's colours.",
    visual: <BranchChart />,
  },

  /* COLOUR */
  {
    kind: "COLOUR",
    title: "Manila, foolscap, carbon",
    take: "Three warm neutrals a hair apart. The background is the desk, the surface is the sheet, and that tiny step is all the elevation the system has.",
    visual: (
      <div className="grid h-full grid-cols-3">
        <Chip hex="#e5dcc5" name="background" note="the desk" stripBg="#f4efe0" />
        <Chip hex="#f4efe0" name="surface" note="the sheet" stripBg="#f4efe0" />
        <Chip hex="#9a8a66" name="border" note="the rule" stripBg="#f4efe0" />
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "Stamp-pad orange",
    take: "The accent at 5.46:1 on the background. It means one thing: this is the action, or this is the record you are on.",
    visual: (
      <div className="relative h-full bg-loki-bg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="stamp px-4 py-2">
            <p className="font-loki-display text-[16px] font-bold uppercase tracking-[0.14em]">
              Approved
            </p>
          </div>
        </div>
        <p className="absolute bottom-2 left-0 right-0 text-center font-mono text-[10px] tracking-widest text-loki-muted">
          #973413 · 5.46:1 ON #E5DCC5
        </p>
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "Olive and mustard",
    take: "The institution's own colours. Kept for charts, where a second and third series are needed and must not look clickable.",
    visual: (
      <div className="grid h-full grid-cols-3">
        <Chip hex="#7d7430" name="olive" note="series 2" stripBg="#f4efe0" />
        <Chip hex="#c9a227" name="mustard" note="series 3" stripBg="#f4efe0" />
        <Chip hex="#54432c" name="brown" note="series 4" stripBg="#f4efe0" />
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "Uniform teal",
    take: "One cool colour in an entirely warm set, which is exactly how it is used in the show. Reserved for the success state.",
    visual: (
      <div className="grid h-full grid-cols-2">
        <Chip hex="#3f5e55" name="teal" note="success" stripBg="#f4efe0" />
        <Chip hex="#8f2f1b" name="brick" note="error" stripBg="#f4efe0" />
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "The yellow that did not make it",
    take: "The cartoon-mascot yellow is 1.10:1 on manila, which is the sample above: the word is there and you cannot read it. Unusable for text, and as a fill it would have made the page cheerful, which it is not.",
    visual: (
      <div className="flex h-full flex-col items-center justify-center gap-3 bg-loki-bg px-5">
        <div className="relative h-16 w-40 bg-[#f2d13c]">
          <span aria-hidden className="absolute inset-0 grid place-items-center text-[22px] font-bold text-[#f2d13c]">
            Aa
          </span>
          <span className="absolute inset-x-0 top-1/2 h-0.5 bg-loki-accent" />
        </div>
        <p className="font-mono text-[10px] tracking-wider text-loki-ink">
          #F2D13C ON #E5DCC5 &middot; 1.10:1 &middot; FAIL
        </p>
      </div>
    ),
  },

  /* TYPE */
  {
    kind: "TYPE",
    title: "Display: Archivo Extra Bold",
    take: "A grotesque squeezed tight and set in caps. Institutional signage uses one weight very loudly, which is why there is no second display size.",
    visual: (
      <TypeCard>
        <p className="font-loki-display text-[34px] font-extrabold uppercase leading-none -tracking-[0.02em]">
          Variance
        </p>
        <p className="mt-2 font-loki-display text-[10px] font-bold uppercase tracking-[0.18em] text-loki-muted">
          Archivo · 800 · −0.02em
        </p>
      </TypeCard>
    ),
  },
  {
    kind: "TYPE",
    title: "Typed, not set",
    take: "Monospace is the body face here, including for prose. It is slower to read and that is the point: this is a document, not a feed.",
    visual: (
      <TypeCard>
        <p className="font-loki-body text-[13px] leading-[1.6]">
          DISTRICT ...... JAISALMER
          <br />
          PERSONS ....... 669,919
          <br />
          DENSITY ....... 17 / KM2
          <br />
          REMARKS ....... LOWEST IN STATE
        </p>
      </TypeCard>
    ),
  },
  {
    kind: "TYPE",
    title: "Rubber stamp",
    take: "Rotated, outlined, slightly broken. The success and error states are stamps, so a result looks adjudicated rather than announced.",
    visual: (
      <div className="flex h-full items-center justify-center bg-loki-surface tex-paper">
        <div className="stamp px-5 py-2.5">
          <p className="font-loki-display text-[15px] font-bold uppercase tracking-[0.2em]">
            Filed 2011
          </p>
          <p className="mt-0.5 text-center font-loki-body text-[9px] tracking-wider">
            CENSUS OF INDIA
          </p>
        </div>
      </div>
    ),
  },
  {
    kind: "TYPE",
    title: "Wayfinding plate",
    take: "White caps on a solid bar with a thick rule under it. This is the section heading, almost unchanged.",
    visual: (
      <div className="flex h-full flex-col items-center justify-center bg-loki-bg px-5">
        <div className="w-full bg-loki-ink px-3 py-2">
          <p className="font-loki-display text-[13px] font-bold uppercase tracking-[0.14em] text-loki-surface">
            Section 3 &mdash; Enumeration
          </p>
        </div>
        <div className="mt-1 h-0.5 w-full bg-loki-accent" />
        <p className="mt-2 w-full font-loki-body text-[11px] text-loki-muted">
          Levels 2&ndash;4 &middot; Records retained 100 yr
        </p>
      </div>
    ),
  },
  {
    kind: "TYPE",
    title: "Field numbers",
    take: "Every field has a number printed above it in 10px caps. Copied directly: in the system, the label role is always numbered.",
    visual: (
      <div className="grid h-full grid-cols-2 gap-px bg-loki-line">
        {[
          ["FIELD 01", "DISTRICT", "Jodhpur"],
          ["FIELD 02", "PERSONS", "3,687,165"],
          ["FIELD 03", "LITERACY", "65.94%"],
          ["FIELD 04", "SEX RATIO", "916"],
        ].map(([f, l, v]) => (
          <div key={f} className="bg-loki-surface p-2.5">
            <p className="font-loki-display text-[8px] font-bold tracking-[0.18em] text-loki-accent">
              {f}
            </p>
            <p className="font-loki-display text-[8px] font-bold tracking-[0.14em] text-loki-muted">
              {l}
            </p>
            <p className="mt-1 font-loki-body text-[13px]">{v}</p>
          </div>
        ))}
      </div>
    ),
  },

  /* TEXTURE */
  {
    kind: "TEXTURE",
    title: "Paper grain",
    take: "A 2px warm noise under every panel. It is the reason the surfaces read as paper rather than as light grey rectangles.",
    visual: <div className="h-full w-full tex-paper" />,
  },
  {
    kind: "TEXTURE",
    title: "Ruled ledger",
    take: "A 22px rule pitch, which is also the row height of the district table. The grid is visible on purpose.",
    visual: <div className="h-full w-full tex-ruled" />,
  },
  {
    kind: "TEXTURE",
    title: "Punch card",
    take: "Data as holes in a fixed grid. Became the loading skeleton: the shape of the record is there before the record is.",
    visual: <div className="h-full w-full tex-punch" />,
  },
  {
    kind: "TEXTURE",
    title: "Carbon and halftone",
    take: "Everything is a second-generation copy. Shadows are a hard 2px offset in border colour, never a blur, because a photocopy has no soft edges.",
    visual: (
      <div className="flex h-full items-center justify-center bg-loki-bg">
        <div className="h-24 w-40 bg-loki-surface shadow-[2px_2px_0_#9a8a66,4px_4px_0_#c6b795] [background-image:radial-gradient(circle,rgba(36,28,19,.3)_0_1px,transparent_1.4px)] [background-size:4px_4px]" />
      </div>
    ),
  },

  /* MATERIAL */
  {
    kind: "MATERIAL",
    title: "Bakelite and brushed steel",
    take: "Hardware you press, with a click. Controls here have a pressed state you can see: the sheet moves 2px and the offset shadow disappears.",
    visual: (
      <div className="flex h-full items-center justify-center gap-3 bg-[#4a4334]">
        {["#973413", "#c9a227", "#7d7430"].map((c, i) => (
          <div
            key={c}
            className="flex h-14 w-14 items-center justify-center rounded-[3px] bg-[#2b2620] shadow-[inset_0_1px_0_#6b6252]"
          >
            <div
              className="h-8 w-8 rounded-full"
              style={{
                background: c,
                boxShadow: i === 1 ? "inset 0 2px 4px rgba(0,0,0,.5)" : "0 2px 0 rgba(0,0,0,.45)",
              }}
            />
          </div>
        ))}
      </div>
    ),
  },
  {
    kind: "MATERIAL",
    title: "Triplicate",
    take: "White, pink, yellow: the same form three times at falling contrast. Disabled controls use exactly this idea, dropping to 45% rather than changing hue.",
    visual: (
      <div className="relative h-full bg-loki-bg">
        {["#f4efe0", "#f0cfd2", "#efe2ac"].map((c, i) => (
          <div
            key={c}
            className="absolute h-28 w-36 border border-loki-line"
            style={{ background: c, left: 46 + i * 24, top: 26 + i * 12 }}
          >
            <div className="m-2 h-1.5 w-20 bg-loki-muted/50" />
            <div className="m-2 h-1.5 w-24 bg-loki-muted/40" />
            <div className="m-2 h-1.5 w-16 bg-loki-muted/30" />
          </div>
        ))}
      </div>
    ),
  },
  {
    kind: "MATERIAL",
    title: "The stamp pad",
    take: "Ink is uneven and sits proud of the paper. The accent is therefore always a flat fill, never a gradient: it is pigment, not light.",
    visual: (
      <div className="flex h-full items-center justify-center bg-loki-bg">
        <div className="h-24 w-40 border-4 border-[#2b2620] bg-[#8f3514] p-2">
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_40%,#c2501f_0_30%,#8f3514_70%),radial-gradient(circle_at_75%_70%,#a73f18_0_25%,transparent_60%)]" />
        </div>
      </div>
    ),
  },

  /* INTERFACE */
  {
    kind: "INTERFACE",
    title: "A row is a form row",
    take: "Label above, rule under, value in mono. Every list row in the system is this shape, which is why the table needs no zebra striping.",
    visual: (
      <div className="flex h-full flex-col justify-center gap-0 bg-loki-surface px-4 tex-paper">
        {[
          ["01", "DISTRICT", "Kota"],
          ["02", "LITERACY", "76.56%"],
          ["03", "RANK", "1 of 33"],
        ].map(([n, l, v]) => (
          <div key={n} className="flex items-baseline justify-between border-b border-loki-line py-2">
            <span className="font-loki-display text-[9px] font-bold tracking-[0.18em] text-loki-muted">
              {n} &middot; {l}
            </span>
            <span className="font-loki-body text-[13px]">{v}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    kind: "INTERFACE",
    title: "Tabs as file dividers",
    take: "The active tab is the one with the corner cut off. That chamfer is the only non-square shape the system allows, so it carries meaning.",
    visual: (
      <div className="flex h-full items-end bg-loki-bg p-4">
        <div className="flex w-full items-end">
          {["TABLE", "CHART", "NOTES"].map((t, i) => (
            <span
              key={t}
              className={
                i === 1
                  ? "chamfer -mb-px border border-b-0 border-loki-ink bg-loki-surface px-4 py-2 font-loki-display text-[11px] font-bold tracking-[0.14em]"
                  : "border border-b-0 border-loki-line bg-loki-bg px-4 py-1.5 font-loki-display text-[11px] font-bold tracking-[0.14em] text-loki-muted"
              }
            >
              {t}
            </span>
          ))}
          <span className="flex-1 border-b border-loki-ink" />
        </div>
      </div>
    ),
  },
  {
    kind: "INTERFACE",
    title: "The ledger",
    take: "Rules on all four sides, tabular figures, nothing centred. Numbers right-aligned so the decimal points stack.",
    visual: (
      <div className="flex h-full items-center bg-loki-bg p-3">
        <table className="w-full border border-loki-ink bg-loki-surface font-loki-body text-[11px]">
          <thead>
            <tr className="border-b-2 border-loki-ink">
              <th className="border-r border-loki-line px-2 py-1 text-left font-loki-display text-[8px] font-bold tracking-[0.16em]">
                DISTRICT
              </th>
              <th className="px-2 py-1 text-right font-loki-display text-[8px] font-bold tracking-[0.16em]">
                LIT %
              </th>
            </tr>
          </thead>
          <tbody>
            {[["Kota", "76.56"], ["Jaipur", "75.51"], ["Jhunjhunu", "74.13"], ["Jalore", "54.86"]].map(
              ([d, v]) => (
                <tr key={d} className="border-b border-loki-line">
                  <td className="border-r border-loki-line px-2 py-1">{d}</td>
                  <td className="px-2 py-1 text-right tabular-nums">{v}</td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    kind: "INTERFACE",
    title: "Error as a rejection",
    take: "The form comes back with a stamp on it and the offending field ruled in orange. The error is attached to the thing, not floated in a toast.",
    visual: (
      <div className="relative flex h-full items-center justify-center bg-loki-surface p-4 tex-paper">
        <div className="w-full border border-loki-line p-3">
          <p className="font-loki-display text-[9px] font-bold tracking-[0.18em] text-loki-muted">
            FIELD 02 · PERSONS
          </p>
          <div className="mt-1 border-2 border-loki-accent bg-loki-bg px-2 py-1.5 font-loki-body text-[13px]">
            &mdash;
          </div>
          <p className="mt-1.5 font-loki-body text-[11px] text-loki-accent">
            No value on file for this district.
          </p>
        </div>
        <div className="stamp absolute right-4 top-4 px-3 py-1">
          <p className="font-loki-display text-[11px] font-bold tracking-[0.18em]">RETURNED</p>
        </div>
      </div>
    ),
  },

  /* MOTION */
  {
    kind: "MOTION",
    title: "Nothing eases",
    take: "A stamp lands or it does not. Transitions are 90ms linear or absent, which makes this system feel mechanical next to the other two.",
    visual: (
      <div className="flex h-full flex-col items-center justify-center gap-3 bg-loki-bg">
        <div className="flex items-center gap-4">
          <div className="h-10 w-20 border border-loki-line bg-loki-surface" />
          <span className="font-loki-body text-[16px] text-loki-muted">&rarr;</span>
          <div className="h-10 w-20 border-2 border-loki-ink bg-loki-surface shadow-[2px_2px_0_#9a8a66]" />
        </div>
        <p className="font-loki-display text-[10px] font-bold uppercase tracking-[0.18em] text-loki-muted">
          90ms · linear · no fade
        </p>
      </div>
    ),
  },
];

export default function Page() {
  return (
    <BoardShell
      skin={skin}
      mood="loki"
      name="Time Variance Authority"
      subtitle="03 · Loki"
      lede={
        <>
          <p>
            A bureaucracy from about 1974 that happens to police the timeline.
            Manila folders, carbon copies, rubber stamps, signage in one very
            loud weight, and a single saturated orange that only appears on the
            things that actually do something.
          </p>
          <p className="mt-3">
            I chose it as the opposite pole to the other two boards. Rajasthan
            separates with ornament and La La Land separates with darkness; this
            one separates with drawn rules, and it is unembarrassed about showing
            you the grid. It is also the only board where the body face is
            monospace, because here the content is a record, not prose.
          </p>
        </>
      }
      sourcing="Every artifact is drawn in SVG or built from CSS gradients and repeating patterns; there are no stills or stock images, so nothing here is borrowed. Figures quoted are the real 2011 Census figures for Rajasthan."
      artifacts={ARTIFACTS}
      crossed={[
        { label: "Accent", detail: "Stamp orange #973413 at 5.14:1 on manila. Primary action and active record only, always a flat fill, never a gradient." },
        { label: "Separation", detail: "Drawn rules everywhere. This system uses its border colour more than any other token, which is what makes it unmistakable next to La La Land." },
        { label: "Shape", detail: "Square corners throughout, with one exception: the active file tab is chamfered. One cut corner, one meaning." },
        { label: "Shadow", detail: "A hard 2px offset in border colour. No blur anywhere, because a photocopy has no soft edges." },
        { label: "Labels", detail: "Every field label is numbered, from artifact 16. It is why the forms look adjudicated rather than designed." },
        { label: "Rejected", detail: "The mascot yellow (1.60:1, fails outright) and any easing curve softer than linear." },
      ]}
    />
  );
}
