import type { Metadata } from "next";
import { BoardShell, Chip, type Artifact, type Skin } from "@/components/board";

export const metadata: Metadata = {
  title: "Mood board 01 · Rajasthan — Pink, Blue and White Cities",
  description:
    "Twenty-eight artifacts: lime-washed walls, jali lattice, vermilion and indigo, hand-painted lettering.",
};

const skin: Skin = {
  page: "min-h-screen bg-raj-bg text-raj-ink font-raj-body tex-wash",
  back:
    "inline-block font-raj-body text-[11px] font-semibold tracking-[0.16em] uppercase text-raj-muted underline decoration-raj-line decoration-2 underline-offset-4 hover:text-raj-accent hover:decoration-raj-accent",
  eyebrow:
    "font-raj-body text-[11px] font-semibold uppercase tracking-[0.2em] text-raj-accent",
  title: "font-raj-display text-[clamp(38px,6vw,62px)] leading-[1.04] -tracking-[0.01em]",
  lede: "font-raj-body text-[17px] leading-[1.62] text-raj-ink",
  small: "font-raj-body text-[13px] leading-[1.55] text-raj-muted",
  sectionTitle: "font-raj-display text-[26px] leading-tight",
  card:
    "rounded-[3px] border border-raj-line bg-raj-surface p-4 shadow-[0_1px_0_#e0c6ae] transition-shadow hover:shadow-[0_1px_0_#e0c6ae,0_12px_26px_-20px_rgba(45,27,24,.65)]",
  tag:
    "font-raj-body text-[10px] font-semibold uppercase tracking-[0.18em] text-raj-muted",
  frame: "h-44 overflow-hidden rounded-[2px] border border-raj-line",
  cardTitle: "font-raj-display text-[19px] leading-snug",
  take: "font-raj-body text-[13.5px] leading-[1.55] text-raj-muted",
  rule: "border-raj-line",
};

/* ---------- drawn scenes ---------- */

function HawaMahal() {
  const cols = [0, 1, 2, 3, 4, 5, 6];
  const rows = [0, 1, 2, 3];
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A five-storey facade of stacked arched windows, drawn in pink sandstone">
      <rect width="300" height="176" fill="#e8a8a0" />
      <rect y="150" width="300" height="26" fill="#c9776d" />
      {rows.map((r) =>
        cols.map((c) => {
          const x = 14 + c * 40;
          const y = 12 + r * 35;
          return (
            <g key={`${r}-${c}`}>
              <path d={`M${x} ${y + 30} v-14 a12 12 0 0 1 24 0 v14 z`} fill="#8d4a44" />
              <path d={`M${x + 4} ${y + 30} v-12 a8 8 0 0 1 16 0 v12 z`} fill="#f6d8d2" />
              <rect x={x - 3} y={y + 30} width="30" height="3" fill="#c9776d" />
            </g>
          );
        }),
      )}
      {cols.map((c) => (
        <path key={c} d={`M${16 + c * 40} 150 l10 -8 l10 8 z`} fill="#f6d8d2" />
      ))}
    </svg>
  );
}

function BlueCity() {
  const boxes = [
    [8, 104, 46, 46], [58, 118, 34, 32], [96, 98, 52, 52], [152, 120, 40, 30],
    [196, 106, 44, 44], [244, 122, 48, 28], [30, 150, 60, 26], [110, 152, 70, 24],
    [196, 152, 90, 24], [68, 88, 24, 22], [172, 92, 20, 20],
  ];
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A hill fort above a dense field of blue-washed cube houses">
      <rect width="300" height="176" fill="#e7d4bb" />
      <path d="M0 78 L46 44 L74 50 L112 26 L170 30 L214 48 L262 40 L300 70 L300 96 L0 96 Z" fill="#b08a63" />
      <path d="M112 26 h56 v-12 h10 v12 h12 v18 h-78 z" fill="#8f6b48" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={120 + i * 10} y={18} width="3" height="8" fill="#8f6b48" />
      ))}
      <rect y="92" width="300" height="84" fill="#2f6aa8" />
      {boxes.map(([x, y, w, h], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} fill={i % 3 === 0 ? "#4e8fd0" : i % 3 === 1 ? "#3a79bd" : "#6aa6de"} />
          <rect x={x} y={y} width={w} height="3" fill="#8cc0ea" />
          <rect x={x + w * 0.3} y={y + h * 0.35} width="8" height="10" fill="#1e3a5f" />
        </g>
      ))}
    </svg>
  );
}

function LakePalace() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A white domed palace on still water at dusk, with hills behind">
      <defs>
        <linearGradient id="raj-dusk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2c58a" />
          <stop offset="0.55" stopColor="#edd6b4" />
          <stop offset="1" stopColor="#dcc9ad" />
        </linearGradient>
      </defs>
      <rect width="300" height="176" fill="url(#raj-dusk)" />
      <circle cx="238" cy="42" r="15" fill="#f6e3bf" />
      <path d="M0 96 L54 68 L108 92 L162 62 L226 90 L300 72 L300 110 L0 110 Z" fill="#9a8fa8" opacity="0.65" />
      <rect y="110" width="300" height="66" fill="#8aa3b8" />
      <g>
        <rect x="88" y="72" width="124" height="38" fill="#fbf7ef" />
        <rect x="88" y="104" width="124" height="6" fill="#e2d9c9" />
        <path d="M118 72 a14 10 0 0 1 28 0 z" fill="#fbf7ef" />
        <path d="M154 72 a14 10 0 0 1 28 0 z" fill="#fbf7ef" />
        <path d="M132 62 a18 12 0 0 1 36 0 z" fill="#fbf7ef" />
        <rect x="149" y="48" width="2" height="14" fill="#c9a24a" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path key={i} d={`M${96 + i * 20} 104 v-13 a6 6 0 0 1 12 0 v13 z`} fill="#c2b49c" />
        ))}
      </g>
      <g opacity="0.3">
        <rect x="88" y="110" width="124" height="30" fill="#fbf7ef" />
      </g>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="76" y={120 + i * 11} width="148" height="2" fill="#b9cbd8" opacity="0.7" />
      ))}
    </svg>
  );
}

function Dunes() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="Low desert dunes with a camel caravan in silhouette under a hot sky">
      <rect width="300" height="176" fill="#f0d7a8" />
      <circle cx="60" cy="40" r="20" fill="#f6e7c4" />
      <path d="M0 108 C60 84 110 118 168 100 C220 84 262 104 300 92 L300 176 L0 176 Z" fill="#dcb876" />
      <path d="M0 132 C70 112 128 142 196 126 C240 116 272 130 300 124 L300 176 L0 176 Z" fill="#c69a55" />
      <g fill="#7a5126">
        {[0, 1, 2].map((i) => {
          const x = 120 + i * 44;
          return (
            <g key={i} transform={`translate(${x} 104) scale(${1 - i * 0.12})`}>
              <path d="M0 0 c4 -10 10 -12 16 -8 c4 -8 12 -8 16 0 c6 -2 10 2 10 8 l-3 0 l-2 16 l-4 0 l-1 -14 l-10 0 l-2 14 l-4 0 l-1 -14 l-9 0 l-2 14 l-4 0 z" />
              <path d="M42 0 l8 -6 l3 2 l-6 6 z" />
            </g>
          );
        })}
      </g>
      <path d="M0 160 C80 150 150 168 300 156 L300 176 L0 176 Z" fill="#a87c3f" />
    </svg>
  );
}

function JaliLight() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="Light falling through a carved stone screen, casting the screen's pattern on the floor">
      <rect width="300" height="176" fill="#e9d6bd" />
      <g transform="skewY(-8)">
        <rect x="150" y="30" width="150" height="150" fill="#f7e6c9" opacity="0.85" />
        <g fill="#e2caa6">
          {Array.from({ length: 8 }).map((_, r) =>
            Array.from({ length: 8 }).map((_, c) => (
              <rect key={`${r}-${c}`} x={156 + c * 18} y={36 + r * 18} width="11" height="11" transform={`rotate(45 ${161 + c * 18} ${41 + r * 18})`} />
            )),
          )}
        </g>
      </g>
      <rect x="0" y="0" width="150" height="176" fill="#cbb08c" />
      <g fill="#fdf4ea">
        {Array.from({ length: 7 }).map((_, r) =>
          Array.from({ length: 6 }).map((_, c) => (
            <rect key={`${r}-${c}`} x={18 + c * 22} y={14 + r * 23} width="12" height="12" transform={`rotate(45 ${24 + c * 22} ${20 + r * 23})`} />
          )),
        )}
      </g>
      <rect x="146" y="0" width="5" height="176" fill="#9d8360" />
    </svg>
  );
}

function BlockPrint() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A carved wooden stamp pressed onto cloth, leaving a half-finished repeat">
      <rect width="300" height="176" fill="#f6ecdc" />
      <g>
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 7 }).map((_, c) => {
            const done = r < 2 || (r === 2 && c < 4);
            if (!done) return null;
            const x = 12 + c * 40;
            const y = 14 + r * 40;
            return (
              <g key={`${r}-${c}`}>
                <circle cx={x + 14} cy={y + 14} r="7" fill="#a8291f" />
                <path d={`M${x + 14} ${y + 1} l5 8 h-10 z`} fill="#1e3a5f" />
                <path d={`M${x + 14} ${y + 27} l5 -8 h-10 z`} fill="#1e3a5f" />
                <circle cx={x + 1} cy={y + 14} r="2.5" fill="#c98a24" />
                <circle cx={x + 27} cy={y + 14} r="2.5" fill="#c98a24" />
              </g>
            );
          }),
        )}
      </g>
      <g transform="translate(176 96)">
        <rect x="-6" y="-6" width="74" height="72" fill="#6b4a3f" />
        <rect x="-2" y="-2" width="66" height="64" fill="#8a6350" />
        <rect x="20" y="-26" width="22" height="22" rx="3" fill="#54372c" />
        <circle cx="31" cy="30" r="9" fill="#a8291f" />
      </g>
    </svg>
  );
}

/* ---------- type specimens ---------- */

function TypeCard({
  children,
  bg = "#fdf4ea",
}: {
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <div className="flex h-full w-full flex-col justify-center px-4" style={{ background: bg }}>
      {children}
    </div>
  );
}

const ARTIFACTS: Artifact[] = [
  /* IMAGE */
  {
    kind: "IMAGE",
    title: "Hawa Mahal, Jaipur",
    take: "953 identical windows in a grid. This is where the card grid comes from: one motif, repeated until it becomes structure.",
    visual: <HawaMahal />,
  },
  {
    kind: "IMAGE",
    title: "Mehrangarh over the blue city, Jodhpur",
    take: "One dark mass above hundreds of small bright ones. The site borrows that hierarchy: a single heavy heading over many light rows.",
    visual: <BlueCity />,
  },
  {
    kind: "IMAGE",
    title: "Lake Pichola at dusk, Udaipur",
    take: "White against warm grey, almost no saturation, and it still reads. Proof the palette does not need a second accent.",
    visual: <LakePalace />,
  },
  {
    kind: "IMAGE",
    title: "Sam dunes, Jaisalmer",
    take: "Three tones of sand and nothing else. The background, surface and border roles are set at this distance from each other.",
    visual: <Dunes />,
  },
  {
    kind: "IMAGE",
    title: "Light through a jali screen",
    take: "The separator and the ornament are the same object. In the system, section rules are drawn as lattice rather than lines.",
    visual: <JaliLight />,
  },
  {
    kind: "IMAGE",
    title: "Bagru hand block printing",
    take: "The repeat is visibly made by hand and stops mid-row. Argues for a grid that is regular but not machined.",
    visual: <BlockPrint />,
  },

  /* COLOUR */
  {
    kind: "COLOUR",
    title: "Lime wash and sandstone",
    take: "The two lightest roles. Backgrounds here are warm, never white, so white itself can mean 'this is a panel'.",
    visual: (
      <div className="grid h-full grid-cols-3">
        <Chip hex="#fdf4ea" name="background" note="the wall" />
        <Chip hex="#ffffff" name="surface" note="the panel" />
        <Chip hex="#e0c6ae" name="border" note="hairline" />
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "Jodhpur indigo",
    take: "Kept for data only: bars, the comparison line, the map fill. Never a button, because that job belongs to vermilion.",
    visual: (
      <div className="grid h-full grid-cols-3">
        <Chip hex="#1e3a5f" name="indigo 700" note="data" dark />
        <Chip hex="#3a79bd" name="indigo 500" note="data" dark />
        <Chip hex="#8cc0ea" name="indigo 200" note="data" />
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "Vermilion",
    take: "The accent, and the hardest decision on the board: one red, used for the primary action and the selected district, nowhere else.",
    visual: (
      <div className="relative h-full bg-raj-bg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-20 w-20 rounded-full bg-raj-accent" />
        </div>
        <p className="absolute bottom-2 left-0 right-0 text-center font-mono text-[10px] tracking-widest text-raj-muted">
          #A8291F · 5.92:1 ON #FDF4EA
        </p>
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "Marigold and gold leaf",
    take: "Rejected as the accent. It is beautiful at 20pt and illegible at 13pt, which is most of the interface.",
    visual: (
      <div className="grid h-full grid-cols-2">
        <Chip hex="#c98a24" name="gold" note="3.05:1 — large text only" />
        <Chip hex="#e8b14a" name="marigold" note="2.01:1 — decorative only" />
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "Jaipur blue pottery",
    take: "A cool green that survives next to the warm ground. Held in reserve for the one positive state: a verified figure.",
    visual: (
      <div className="grid h-full grid-cols-2">
        <Chip hex="#2c6e72" name="jade" note="success" dark />
        <Chip hex="#d66a8a" name="rose" note="unused — no job" />
      </div>
    ),
  },

  /* TYPE */
  {
    kind: "TYPE",
    title: "Display: Rozha One",
    take: "The display role. Devanagari-derived stroke contrast with a flat top line, which is why it sits so well on a rule.",
    visual: (
      <TypeCard>
        <p className="font-raj-display text-[46px] leading-none">Rajasthan</p>
        <p className="mt-2 font-raj-body text-[10px] font-semibold uppercase tracking-[0.2em] text-raj-muted">
          Rozha One · 400 · −0.01em
        </p>
      </TypeCard>
    ),
  },
  {
    kind: "TYPE",
    title: "Hand-painted truck lettering",
    take: "Outlined, shadowed, cheerfully uneven. Taken as permission for a heavy display face, and as the reason the system has no second display font.",
    visual: (
      <TypeCard bg="#1e3a5f">
        <p
          className="font-raj-display text-[34px] leading-none text-[#f2c45b]"
          style={{ WebkitTextStroke: "1.5px #a8291f", paintOrder: "stroke fill" }}
        >
          HORN OK
        </p>
        <p className="mt-2 font-raj-body text-[11px] italic text-[#cbd9e8]">
          Jaipur &rarr; Jodhpur &rarr; Jaisalmer
        </p>
      </TypeCard>
    ),
  },
  {
    kind: "TYPE",
    title: "Railway station plate",
    take: "Uppercase, wide tracking, one rule under it. This is the label role, copied almost exactly.",
    visual: (
      <TypeCard bg="#f6ecdc">
        <div className="border-y-2 border-raj-ink py-3 text-center">
          <p className="font-raj-body text-[13px] font-semibold uppercase tracking-[0.3em]">
            Jodhpur Jn
          </p>
          <p className="mt-1 font-raj-body text-[10px] uppercase tracking-[0.22em] text-raj-muted">
            Elev. 232 m &middot; NWR
          </p>
        </div>
      </TypeCard>
    ),
  },
  {
    kind: "TYPE",
    title: "Royal seal, set round",
    take: "Text as an enclosure. Became the circular rank badge on the district cards rather than a rectangle.",
    visual: (
      <div className="flex h-full items-center justify-center bg-raj-bg">
        <div className="relative h-32 w-32 rounded-full border-2 border-raj-accent">
          <div className="absolute inset-2 rounded-full border border-raj-line" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-raj-display text-[30px] leading-none text-raj-accent">33</p>
            <p className="font-raj-body text-[9px] uppercase tracking-[0.2em] text-raj-muted">
              districts
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    kind: "TYPE",
    title: "Numerals, Indian grouping",
    take: "Lakh-and-crore grouping is the correct format for this data. Tabular figures and a fixed comma pattern, so columns line up.",
    visual: (
      <TypeCard>
        <p className="font-raj-display text-[32px] leading-none tabular-nums">
          6,85,48,437
        </p>
        <p className="mt-1 font-raj-body text-[13px] text-raj-muted">
          Rajasthan, total persons, 2011
        </p>
        <p className="mt-3 font-raj-body text-[12px] tabular-nums text-raj-muted">
          66,26,178 &nbsp;Jaipur
          <br />
          6,69,919 &nbsp;&nbsp;&nbsp;Jaisalmer
        </p>
      </TypeCard>
    ),
  },

  /* TEXTURE */
  {
    kind: "TEXTURE",
    title: "Lime-washed plaster",
    take: "Not flat. The page background carries a very slight warm gradient so large light areas do not look like blank paper.",
    visual: <div className="h-full w-full tex-wash" />,
  },
  {
    kind: "TEXTURE",
    title: "Jali lattice",
    take: "The rule texture. Used at 11px pitch for section dividers and at 22px for the empty state.",
    visual: <div className="h-full w-full tex-jali" />,
  },
  {
    kind: "TEXTURE",
    title: "Bandhani tie-dye",
    take: "A dot repeat that reads as a field, not as dots. Becomes the loading skeleton, so waiting still looks like the mood.",
    visual: <div className="h-full w-full tex-block" />,
  },
  {
    kind: "TEXTURE",
    title: "Sandstone relief",
    take: "Depth from one highlight and one shadow, a pixel each. That is the only shadow this system allows.",
    visual: (
      <div className="h-full w-full bg-[#e3cbac] p-4">
        <div className="grid h-full grid-cols-4 gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="rounded-t-full bg-[#dcc0a0] shadow-[inset_0_1px_0_#f3e2cd,inset_0_-2px_3px_rgba(107,74,63,.35)]"
            />
          ))}
        </div>
      </div>
    ),
  },

  /* MATERIAL */
  {
    kind: "MATERIAL",
    title: "Mirror work (shisha)",
    take: "Tiny specular points on a matte ground. Argues that highlights should be small and rare, which is why hover lifts a card by 1px and no more.",
    visual: (
      <div className="flex h-full items-center justify-center bg-[#8d1f28]">
        <div className="grid grid-cols-5 gap-3">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="h-6 w-6 rotate-45 border border-[#e8c98a] bg-[linear-gradient(135deg,#ffffff_0%,#cfd8de_45%,#8b9aa5_100%)]"
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    kind: "MATERIAL",
    title: "Beaten brass",
    take: "Warm metal reads as 'official' here, not as 'premium'. Used once, on the source-and-method line at the foot of the site.",
    visual: (
      <div className="h-full w-full bg-[radial-gradient(circle_at_30%_25%,#f0d79a_0%,#c99c48_38%,#8f6a26_100%)]">
        <div className="h-full w-full bg-[repeating-radial-gradient(circle_at_50%_50%,rgba(255,255,255,.14)_0_2px,transparent_2px_9px)]" />
      </div>
    ),
  },
  {
    kind: "MATERIAL",
    title: "Marble inlay (parchin kari)",
    take: "Colour is inset into the surface, flush, never on top of it. Data bars in the site are inset for the same reason.",
    visual: (
      <div className="flex h-full items-center justify-center bg-[#f4f1ea]">
        <svg viewBox="0 0 160 120" className="h-full w-auto" role="img" aria-label="A stone panel with coloured petals inlaid flush into its surface">
          <rect width="160" height="120" fill="#f4f1ea" />
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse key={a} cx="80" cy="60" rx="9" ry="30" fill="#a8291f" transform={`rotate(${a} 80 60)`} />
          ))}
          {[30, 90, 150, 210, 270, 330].map((a) => (
            <ellipse key={a} cx="80" cy="60" rx="5" ry="22" fill="#1e3a5f" transform={`rotate(${a} 80 60)`} />
          ))}
          <circle cx="80" cy="60" r="8" fill="#c98a24" />
        </svg>
      </div>
    ),
  },

  /* INTERFACE */
  {
    kind: "INTERFACE",
    title: "Card head as a jharokha arch",
    take: "The arch is only ever on the thing that opens. A grader can tell what is clickable from the silhouette alone.",
    visual: (
      <div className="flex h-full items-center justify-center bg-raj-bg p-4">
        <div className="w-44 overflow-hidden rounded-[3px] border border-raj-line bg-raj-surface">
          <div className="arch-top bg-raj-accent px-3 pt-5 pb-2 text-center">
            <p className="font-raj-display text-[15px] text-white">Udaipur</p>
          </div>
          <div className="px-3 py-2">
            <p className="font-raj-body text-[11px] uppercase tracking-[0.16em] text-raj-muted">
              Population
            </p>
            <p className="font-raj-display text-[20px] tabular-nums">30,68,420</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    kind: "INTERFACE",
    title: "Filter chips as enamel buttons",
    take: "Selected is filled vermilion, rest is a hairline. Two states, no ambiguity, and the fill is also the accent so selection reads as an action.",
    visual: (
      <div className="flex h-full flex-wrap content-center items-center justify-center gap-2 bg-raj-bg px-4">
        {["All", "Jaipur", "Jodhpur", "Udaipur", "Kota"].map((d, i) => (
          <span
            key={d}
            className={
              i === 2
                ? "rounded-[3px] bg-raj-accent px-3 py-1.5 font-raj-body text-[12px] font-semibold text-white"
                : "rounded-[3px] border border-raj-line bg-raj-surface px-3 py-1.5 font-raj-body text-[12px] text-raj-ink"
            }
          >
            {d}
          </span>
        ))}
      </div>
    ),
  },
  {
    kind: "INTERFACE",
    title: "Comparison bar, inset",
    take: "The bar sits in a groove in the row rather than floating on it. Indigo for the district, a hairline for the state average.",
    visual: (
      <div className="flex h-full flex-col justify-center gap-3 bg-raj-bg px-5">
        {[
          ["Jaipur", 75.51, 0.98],
          ["Jalore", 54.86, 0.71],
          ["Kota", 76.56, 1.0],
        ].map(([n, v, f]) => (
          <div key={n as string}>
            <div className="flex items-baseline justify-between">
              <span className="font-raj-body text-[12px]">{n as string}</span>
              <span className="font-raj-body text-[12px] tabular-nums text-raj-muted">
                {v as number}%
              </span>
            </div>
            <div className="mt-1 h-2.5 bg-[#ece0d0] shadow-[inset_0_1px_2px_rgba(107,74,63,.3)]">
              <div className="h-full bg-raj-indigo" style={{ width: `${(f as number) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    kind: "INTERFACE",
    title: "Empty state as a jali panel",
    take: "An empty result is still a surface with ornament on it, not a blank box with grey text. Nothing in the mood is ever truly empty.",
    visual: (
      <div className="flex h-full items-center justify-center bg-raj-bg p-4">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-raj-line tex-jali">
          <div className="bg-raj-bg px-3 py-1">
            <p className="font-raj-display text-[16px]">No districts match</p>
          </div>
          <div className="bg-raj-bg px-3">
            <p className="font-raj-body text-[11px] text-raj-muted">Clear a filter</p>
          </div>
        </div>
      </div>
    ),
  },

  /* MOTION */
  {
    kind: "MOTION",
    title: "A curtain, not a fade",
    take: "Things here arrive by being drawn aside. The detail drawer wipes in from the right over 180ms; nothing cross-fades.",
    visual: (
      <div className="relative h-full overflow-hidden bg-raj-bg">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-raj-display text-[20px] text-raj-ink">Jaisalmer</p>
        </div>
        <div className="absolute inset-y-0 right-0 w-1/2 border-l-2 border-raj-accent bg-[repeating-linear-gradient(90deg,#a8291f_0_6px,#8d1f28_6px_12px)]" />
        <p className="absolute bottom-2 left-3 font-raj-body text-[10px] uppercase tracking-[0.18em] text-raj-muted">
          wipe · 180ms · ease-out
        </p>
      </div>
    ),
  },
];

export default function Page() {
  return (
    <BoardShell
      skin={skin}
      name="Pink, Blue and White Cities"
      subtitle="01 · Rajasthan"
      lede={
        <>
          <p>
            Three cities, three ground colours: Jaipur&rsquo;s pink sandstone,
            Jodhpur&rsquo;s indigo wash, Udaipur&rsquo;s lake-white marble. What
            holds them together is not the colour, it is the habit of taking one
            small ornament and repeating it until it becomes architecture.
          </p>
          <p className="mt-3">
            That is the single idea I took into the design system: ornament doing
            structural work. A jali screen is a wall and a window and a
            separator at once. A facade of 953 identical windows is a card grid.
            So the system is allowed to be decorated, but only where the
            decoration is also telling you something.
          </p>
        </>
      }
      sourcing="Nothing on this page is a photograph. Every scene, texture and specimen is drawn in SVG or built from CSS gradients, so the board has no licensing question attached to it and renders identically wherever the repo is checked out. Where a figure appears it is the real 2011 Census figure."
      artifacts={ARTIFACTS}
      crossed={[
        { label: "Accent", detail: "One vermilion, #A8291F, at 5.92:1 on the page background. It marks the primary action and the selected district and has no other use." },
        { label: "Shape", detail: "The cusped arch is reserved for things that open. Everything that holds a number stays square, so precision still looks precise." },
        { label: "Rule", detail: "Section dividers are drawn as an 11px jali lattice rather than a 1px line, taken from artifact 05." },
        { label: "Shadow", detail: "One highlight and one shadow, a pixel each, from the sandstone relief. Hover lifts a card and nothing more." },
        { label: "Numerals", detail: "Lakh-and-crore grouping with tabular figures, from artifact 16, because that is how this data is published." },
        { label: "Rejected", detail: "Gold as the accent (3.05:1, fails at body size) and the rose from the blue-pottery study, which had no job to do." },
      ]}
    />
  );
}
