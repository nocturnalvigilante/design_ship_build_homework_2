import type { Metadata } from "next";
import { contrast } from "@/lib/contrast";
import { PALETTES } from "@/lib/palette";
import { BoardShell, Chip, type Artifact, type Skin } from "@/components/board";

export const metadata: Metadata = {
  title: "Mood board 01 · Chittor and Khilji",
  description:
    "Twenty-eight artifacts: candlelight ivory, mirror work, jali shadow, and the cold green-black palette laid against it.",
};

// Every ratio quoted on this page is computed from the token values at build
// time. They were hard-coded once, the ground colour later changed, and the
// page went on claiming numbers that were no longer true. Never again.
const BG = PALETTES["padmaavat"].background;
const RATIO = (hex: string) => `${contrast(hex, BG).toFixed(2)}:1`;

const skin: Skin = {
  page: "min-h-screen bg-pad-bg text-pad-ink font-pad-body",
  back:
    "inline-block font-pad-display text-[11px] font-semibold uppercase tracking-[0.16em] text-pad-muted underline decoration-pad-line decoration-2 underline-offset-4 hover:text-pad-accent hover:decoration-pad-accent",
  eyebrow:
    "font-pad-body text-[11.5px] font-semibold uppercase tracking-[0.2em] text-pad-accent",
  title:
    "font-pad-display text-[clamp(36px,5.4vw,58px)] font-semibold uppercase leading-[1.08] tracking-[0.03em]",
  lede: "font-pad-body text-[17.5px] leading-[1.6] text-pad-ink",
  small: "font-pad-body text-[13.5px] leading-[1.55] text-pad-muted",
  sectionTitle:
    "border-b border-pad-line pb-1.5 font-pad-display text-[21px] font-semibold uppercase tracking-[0.07em]",
  card:
    "border border-pad-line bg-pad-surface p-4 transition-shadow hover:shadow-[0_1px_0_#d9be92,0_14px_30px_-22px_rgba(34,20,16,.7)]",
  tag:
    "font-pad-body text-[10.5px] font-semibold uppercase tracking-[0.18em] text-pad-muted",
  frame: "h-44 overflow-hidden border border-pad-line",
  cardTitle:
    "font-pad-display text-[14px] font-semibold uppercase leading-snug tracking-[0.08em]",
  take: "font-pad-body text-[14px] leading-[1.55] text-pad-muted",
  rule: "border-pad-line",
  shell: "skin-pad",
};

/* ------------------------------- drawn scenes ------------------------------ */

function FortGate() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A fort gateway under a foliated arch at dusk, lit by two flames">
      <defs>
        <linearGradient id="pad-dusk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a2a3e" />
          <stop offset="0.6" stopColor="#8a5a46" />
          <stop offset="1" stopColor="#d79a5a" />
        </linearGradient>
      </defs>
      <rect width="300" height="176" fill="url(#pad-dusk)" />
      <rect y="40" width="300" height="136" fill="#b2905f" />
      <rect y="36" width="300" height="6" fill="#c8a673" />
      {Array.from({ length: 15 }).map((_, i) => (
        <rect key={i} x={i * 20 + 3} y="24" width="12" height="12" fill="#b2905f" />
      ))}
      <path d="M118 176 V96 a32 40 0 0 1 64 0 V176 Z" fill="#2a1d14" />
      <path d="M124 176 V98 a26 34 0 0 1 52 0 V176 Z" fill="#160e09" />
      <path d="M150 64 l7 12 h-14 z" fill="#8c1c21" />
      <g>
        {[86, 214].map((x) => (
          <g key={x}>
            <rect x={x - 4} y="104" width="8" height="40" fill="#6b4a35" />
            <ellipse cx={x} cy="100" rx="6" ry="9" fill="#f0b25a" />
            <ellipse cx={x} cy="100" rx="16" ry="22" fill="#e0893a" opacity="0.22" />
          </g>
        ))}
      </g>
      <g fill="#8c1c21">
        {[40, 68, 232, 260].map((x) => (
          <path key={x} d={`M${x} 60 h12 v22 l-6 -6 l-6 6 z`} />
        ))}
      </g>
    </svg>
  );
}

function SheeshMahal() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A mirrored chamber where one flame is reflected into hundreds of points of light">
      <rect width="300" height="176" fill="#2a1a16" />
      <g>
        {Array.from({ length: 9 }).map((_, r) =>
          Array.from({ length: 16 }).map((_, c) => {
            const x = c * 19 + 6;
            const y = r * 19 + 6;
            const d = Math.hypot(x - 150, y - 120) / 150;
            return (
              <g key={`${r}-${c}`}>
                <path
                  d={`M${x} ${y - 7} l7 7 l-7 7 l-7 -7 z`}
                  fill="#c9a23f"
                  opacity={Math.max(0.12, 0.95 - d * 1.1)}
                />
                <circle cx={x} cy={y} r="1.6" fill="#fff6de" opacity={Math.max(0.1, 0.9 - d)} />
              </g>
            );
          }),
        )}
      </g>
      <g>
        <ellipse cx="150" cy="128" rx="9" ry="15" fill="#ffd98a" />
        <ellipse cx="150" cy="132" rx="4" ry="8" fill="#fff6de" />
        <ellipse cx="150" cy="128" rx="34" ry="44" fill="#e0893a" opacity="0.2" />
        <path d="M134 146 h32 l-5 10 h-22 z" fill="#9a6b1e" />
      </g>
    </svg>
  );
}

function KhiljiCamp() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A siege camp of dark tents under smoke, with one cold torch">
      <rect width="300" height="176" fill="#141c18" />
      <rect y="120" width="300" height="56" fill="#0d130f" />
      <g opacity="0.5" fill="#2c3a30">
        <ellipse cx="80" cy="36" rx="70" ry="22" />
        <ellipse cx="220" cy="26" rx="86" ry="18" />
      </g>
      {[[34, 1], [96, 0.86], [164, 1.05], [232, 0.9], [284, 0.72]].map(([x, s], i) => (
        <g key={i} transform={`translate(${x} 120) scale(${s})`}>
          <path d="M0 0 L-38 0 L0 -54 L38 0 Z" fill="#1c2a22" />
          <path d="M0 -54 L38 0 L14 0 Z" fill="#26362c" />
          <path d="M-9 0 v-20 a9 11 0 0 1 18 0 v20 z" fill="#0a0f0b" />
          <rect x="-1.5" y="-66" width="3" height="14" fill="#41523f" />
          <path d="M1.5 -66 h14 v8 h-14 z" fill="#41523f" />
        </g>
      ))}
      <g>
        <rect x="146" y="132" width="5" height="34" fill="#2c3a30" />
        <ellipse cx="148" cy="128" rx="5" ry="8" fill="#9fb08a" />
        <ellipse cx="148" cy="128" rx="18" ry="26" fill="#6e8360" opacity="0.14" />
      </g>
    </svg>
  );
}

function Jauhar() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A corridor of fire with figures walking into it in silhouette">
      <defs>
        <linearGradient id="pad-fire" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#f3c05a" />
          <stop offset="0.4" stopColor="#d4512a" />
          <stop offset="1" stopColor="#6b1218" />
        </linearGradient>
      </defs>
      <rect width="300" height="176" fill="#2a0f10" />
      <rect x="92" width="116" height="176" fill="url(#pad-fire)" />
      <g fill="#f3c05a" opacity="0.5">
        {Array.from({ length: 26 }).map((_, i) => (
          <circle key={i} cx={100 + ((i * 53) % 100)} cy={170 - ((i * 37) % 160)} r={1 + (i % 3)} />
        ))}
      </g>
      <rect x="0" width="92" height="176" fill="#1a0a0b" />
      <rect x="208" width="92" height="176" fill="#1a0a0b" />
      <g fill="#140708">
        {[118, 142, 166, 190].map((x, i) => (
          <g key={x} transform={`translate(${x} ${170 - i * 6}) scale(${1 - i * 0.1})`}>
            <path d="M0 0 c-11 0 -15 -22 -13 -38 c1 -11 5 -18 13 -18 c8 0 12 7 13 18 c2 16 -2 38 -13 38 z" />
            <circle cx="0" cy="-62" r="8" />
            <path d="M-14 -58 q14 -12 28 0 q-14 -6 -28 0 z" />
          </g>
        ))}
      </g>
    </svg>
  );
}

function JharokhaShadow() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="Light through a carved screen throwing its pattern across a pale floor">
      <rect width="300" height="176" fill="#e6d4b4" />
      <rect y="112" width="300" height="64" fill="#f2e6cf" />
      <g transform="skewX(-26) translate(70 0)">
        <rect x="0" y="112" width="150" height="64" fill="#d8c09a" opacity="0.9" />
        <g fill="#f2e6cf">
          {Array.from({ length: 3 }).map((_, r) =>
            Array.from({ length: 7 }).map((_, c) => (
              <path
                key={`${r}-${c}`}
                d={`M${12 + c * 20} ${124 + r * 18} l7 7 l-7 7 l-7 -7 z`}
              />
            )),
          )}
        </g>
      </g>
      <g>
        <rect x="88" y="10" width="124" height="104" fill="#c6a97e" />
        <path d="M100 114 V62 a50 54 0 0 1 100 0 V114 Z" fill="#8f7450" />
        <g fill="#fff8ea">
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => {
              const x = 112 + c * 19;
              const y = 58 + r * 16;
              if (r === 0 && (c === 0 || c === 4)) return null;
              return <path key={`${r}-${c}`} d={`M${x} ${y - 6} l6 6 l-6 6 l-6 -6 z`} />;
            }),
          )}
        </g>
      </g>
    </svg>
  );
}

function Durbar() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A symmetrical court hall with columns, a central figure and flames along the aisle">
      <rect width="300" height="176" fill="#3a2a1e" />
      <rect y="128" width="300" height="48" fill="#5a4330" />
      <path d="M0 128 L150 96 L300 128 Z" fill="#6b5038" />
      {[22, 62, 238, 278].map((x) => (
        <g key={x}>
          <rect x={x - 9} y="26" width="18" height="102" fill="#b2905f" />
          <rect x={x - 13} y="20" width="26" height="8" fill="#c8a673" />
          <rect x={x - 12} y="122" width="24" height="8" fill="#c8a673" />
        </g>
      ))}
      <path d="M96 128 V70 a54 44 0 0 1 108 0 V128 Z" fill="#241610" />
      <path d="M104 128 V72 a46 38 0 0 1 92 0 V128 Z" fill="#8c1c21" />
      <g fill="#1a0f0a">
        <ellipse cx="150" cy="108" rx="13" ry="20" />
        <circle cx="150" cy="82" r="9" />
        <path d="M139 74 h22 l-4 -8 h-14 z" fill="#c9a23f" />
      </g>
      {[72, 108, 192, 228].map((x, i) => (
        <g key={x}>
          <ellipse cx={x} cy={124 - (i % 2) * 4} rx="4" ry="6" fill="#f0b25a" />
          <ellipse cx={x} cy={124 - (i % 2) * 4} rx="12" ry="16" fill="#e0893a" opacity="0.2" />
        </g>
      ))}
    </svg>
  );
}

function TypeCard({ children, bg = "#e8d3b4" }: { children: React.ReactNode; bg?: string }) {
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
    title: "The gate at Chittor",
    take: "A foliated arch with two flames and nothing else lit. Fixes the rule that the arch belongs only to things you pass through, which in the system means things that open.",
    visual: <FortGate />,
  },
  {
    kind: "IMAGE",
    title: "Sheesh Mahal",
    take: "One flame turned into four hundred points by mirror work. The argument for a single accent: multiply one light, never add a second.",
    visual: <SheeshMahal />,
  },
  {
    kind: "IMAGE",
    title: "The camp outside",
    take: "The same frame, drained and turned cold. This is where the second palette comes from, and why it is never used for anything you can press.",
    visual: <KhiljiCamp />,
  },
  {
    kind: "IMAGE",
    title: "The fire corridor",
    take: "The one place in the film where the accent fills the frame. It earns that by never doing it anywhere else.",
    visual: <Jauhar />,
  },
  {
    kind: "IMAGE",
    title: "A jharokha and its shadow",
    take: "The screen and the pattern it throws are the same object seen twice. Section rules in the system are drawn as that pattern rather than as a line.",
    visual: <JharokhaShadow />,
  },
  {
    kind: "IMAGE",
    title: "The durbar",
    take: "Absolute bilateral symmetry with one thing off-centre: the figure. The page layout copies it, symmetric frame and an asymmetric reading column.",
    visual: <Durbar />,
  },

  /* COLOUR */
  {
    kind: "COLOUR",
    title: "The warm set",
    take: "Ivory, sandstone and one crimson. These are the three lightest roles and they are warm, never white, so true white can mean 'this is a panel'.",
    visual: (
      <div className="grid h-full grid-cols-3">
        <Chip hex="#e8d3b4" name="background" note="the hall" stripBg="#fdf6e8" />
        <Chip hex="#fdf6e8" name="surface" note="a lit panel" stripBg="#fdf6e8" />
        <Chip hex="#d9be92" name="border" note="sandstone" stripBg="#fdf6e8" />
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "The cold set",
    take: "The opposing palette, and the single most useful thing on this board: it gives the system a built-in way to say 'this figure falls short' without inventing a new colour.",
    visual: (
      <div className="grid h-full grid-cols-2">
        <Chip hex="#1c2a22" name="green-black" note="below bench." tone="dark" stripBg="#fdf6e8" />
        <Chip hex="#41523f" name="moss" note="second series" tone="dark" stripBg="#fdf6e8" />
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "Chittor crimson",
    take: `The accent at ${RATIO("#8c1c21")} on the page. It marks the primary action and the open record, and the board spends the rest of its colour budget avoiding anything that competes with it.`,
    visual: (
      <div className="relative h-full bg-pad-bg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-20 w-20 bg-pad-accent" />
        </div>
        <p className="absolute bottom-2 left-0 right-0 text-center font-mono text-[10px] tracking-widest text-pad-muted">
          {`#8C1C21 · ${RATIO("#8c1c21")} ON ${BG.toUpperCase()}`}
        </p>
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "Flame, as a gradient",
    take: "Every light source in this world is fire, so the page background is warmest at the top and falls away at the edges rather than being a flat fill.",
    visual: <div className="h-full w-full tex-lamp" />,
  },
  {
    kind: "COLOUR",
    title: "Gota gold, measured and refused",
    take: `The obvious choice for a film this gilded, and it reads ${RATIO("#9a6b1e")} on the page. That is below the bar for body text, so gold is demoted to ornament and rules.`,
    visual: (
      <div className="grid h-full grid-cols-2">
        <Chip hex="#9a6b1e" name="gota gold" note={`${RATIO("#9a6b1e")} ornament`} tone="dark" stripBg="#fdf6e8" />
        <Chip hex="#e0893a" name="flame" note={`${RATIO("#e0893a")} glow only`} stripBg="#fdf6e8" />
      </div>
    ),
  },

  /* TYPE */
  {
    kind: "TYPE",
    title: "Display: Cinzel",
    take: "Roman capitals cut rather than written. Titles in this world are carved into sandstone, so the display role is uppercase and tracked open.",
    visual: (
      <TypeCard>
        <p className="font-pad-display text-[38px] font-semibold uppercase leading-none tracking-[0.04em]">
          Chittor
        </p>
        <p className="mt-2 font-pad-body text-[10.5px] font-semibold uppercase tracking-[0.18em] text-pad-muted">
          Cinzel · 600 · +0.03em
        </p>
      </TypeCard>
    ),
  },
  {
    kind: "TYPE",
    title: "Body: Cormorant Garamond",
    take: "High stroke contrast, a small x-height and a lot of air inside the letter. It is the only face here that can hold a paragraph without the page feeling heavy.",
    visual: (
      <TypeCard bg="#fdf6e8">
        <p className="font-pad-body text-[17px] leading-[1.6]">
          Of the 640 districts counted in 2011, Thane held the most people and
          Dibang Valley the fewest.
        </p>
      </TypeCard>
    ),
  },
  {
    kind: "TYPE",
    title: "An illuminated margin",
    take: "The text block is inset inside a drawn border with the margin doing the decorating. The card is built the same way: ornament on the frame, never over the content.",
    visual: (
      <div className="flex h-full items-center justify-center bg-pad-bg p-3">
        <div className="relative h-full w-full border-2 border-pad-accent p-2">
          <div className="absolute inset-1 border border-pad-gold" />
          <div className="relative flex h-full items-center justify-center px-3">
            <p className="text-center font-pad-body text-[13px] leading-[1.55]">
              Three districts recorded no urban households at all: Lahul and
              Spiti, Kinnaur, the Nicobars.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    kind: "TYPE",
    title: "A seal, set round",
    take: "Type used as an enclosure rather than a line. Became the circular rank mark on a district card instead of a rectangular badge.",
    visual: (
      <div className="flex h-full items-center justify-center bg-pad-bg">
        <div className="relative h-32 w-32 rounded-full border-2 border-pad-accent">
          <div className="absolute inset-2 rounded-full border border-pad-gold" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-pad-display text-[30px] font-semibold leading-none text-pad-accent">
              640
            </p>
            <p className="font-pad-body text-[9px] uppercase tracking-[0.2em] text-pad-muted">
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
    take: "Lakh-and-crore grouping is the correct format for this data, and it needs tabular figures or the commas will not line up down a column.",
    visual: (
      <TypeCard>
        <p className="font-pad-display text-[27px] font-semibold leading-none tabular-nums">
          1,21,08,54,977
        </p>
        <p className="mt-1 font-pad-body text-[13px] text-pad-muted">
          India, total persons, 2011
        </p>
        <p className="mt-3 font-pad-body text-[12.5px] tabular-nums text-pad-muted">
          1,10,60,148 &nbsp;Thane
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8,004 &nbsp;Dibang Valley
        </p>
      </TypeCard>
    ),
  },

  /* TEXTURE */
  {
    kind: "TEXTURE",
    title: "Candlelit ivory",
    take: "Not a flat fill. The page is warmest where the light would be, which keeps a large pale area from reading as blank paper.",
    visual: <div className="h-full w-full tex-lamp" />,
  },
  {
    kind: "TEXTURE",
    title: "Jali shadow",
    take: "A 14px lattice at 32 degrees, used for section rules and the empty state. It is a shadow, so it is drawn in ink at low opacity rather than in the border colour.",
    visual: <div className="h-full w-full tex-jali-shadow" />,
  },
  {
    kind: "TEXTURE",
    title: "Mirror mosaic",
    take: "Hundreds of tiny specular points on a dark ground. The reason hover lifts a card by exactly one pixel: highlights here are small and plentiful, never broad.",
    visual: <div className="h-full w-full tex-sheesh" />,
  },
  {
    kind: "TEXTURE",
    title: "Inlay",
    take: "A diamond repeat at 10px, cut into the surface rather than laid on it. This is the system's rule, and it is why no divider in it is a plain 1px line.",
    visual: <div className="h-full w-full bg-pad-bg tex-inlay" />,
  },

  /* MATERIAL */
  {
    kind: "MATERIAL",
    title: "Gota-patti and zardozi",
    take: "Metal thread couched onto cloth: the gold sits proud of the surface and catches light only at an angle. Gold in the system is therefore a border, never a fill behind text.",
    visual: (
      <div className="flex h-full items-center justify-center bg-[#6b1218]">
        <div className="grid grid-cols-6 gap-2.5">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="h-5 w-5 rotate-45 border border-[#e6c475] bg-[linear-gradient(135deg,#fff0c0_0%,#c9a23f_48%,#7a5c1f_100%)]"
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    kind: "MATERIAL",
    title: "Bone and lacquer inlay",
    take: "Pale figure set flush into a dark ground, no shading at all. Data bars in the site are inset for the same reason: the colour is in the surface, not on it.",
    visual: (
      <div className="flex h-full items-center justify-center bg-[#2a1a16] p-4">
        <svg viewBox="0 0 170 120" className="h-full w-auto" role="img" aria-label="A dark panel with a pale flower inlaid flush into it">
          <rect width="170" height="120" fill="#2a1a16" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <ellipse key={a} cx="85" cy="60" rx="7" ry="32" fill="#f2e6cf" transform={`rotate(${a} 85 60)`} />
          ))}
          {[22, 112, 202, 292].map((a) => (
            <ellipse key={a} cx="85" cy="60" rx="4" ry="22" fill="#9a6b1e" transform={`rotate(${a} 85 60)`} />
          ))}
          <circle cx="85" cy="60" r="9" fill="#8c1c21" />
        </svg>
      </div>
    ),
  },
  {
    kind: "MATERIAL",
    title: "Brass diya",
    take: "Warm metal reading as ceremony rather than as luxury. Used once in the whole site, on the source-and-method line, and nowhere else.",
    visual: (
      <div className="h-full w-full bg-[radial-gradient(circle_at_32%_26%,#f6e2ac_0%,#c9a23f_36%,#7a5c1f_72%,#43300f_100%)]">
        <div className="h-full w-full bg-[repeating-radial-gradient(circle_at_50%_50%,rgba(255,255,255,.12)_0_2px,transparent_2px_10px)]" />
      </div>
    ),
  },

  /* INTERFACE */
  {
    kind: "INTERFACE",
    title: "Card head as a foliated arch",
    take: "The arch appears only on things that open. You can tell what is clickable from the silhouette alone, without reading a word.",
    visual: (
      <div className="flex h-full items-center justify-center bg-pad-bg p-4">
        <div className="w-44 overflow-hidden border border-pad-line bg-pad-surface">
          <div className="arch-foliate bg-pad-accent px-3 pt-5 pb-2 text-center">
            <p className="font-pad-display text-[13px] font-semibold uppercase tracking-[0.1em] text-pad-surface">
              Udaipur
            </p>
          </div>
          <div className="px-3 py-2.5">
            <p className="font-pad-body text-[10.5px] uppercase tracking-[0.18em] text-pad-muted">
              Population
            </p>
            <p className="font-pad-display text-[19px] font-semibold tabular-nums">
              30,68,420
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    kind: "INTERFACE",
    title: "The warm and cold bar",
    take: "The whole point of the board, in one control. Above its benchmark the bar is warm; below it the bar turns Khilji green-black. No legend needed and no third colour spent.",
    visual: (
      <div className="flex h-full flex-col justify-center gap-3 bg-pad-bg px-5">
        {[
          ["Kerala", 0.94, true],
          ["Punjab", 0.72, true],
          ["Bihar", 0.48, false],
        ].map(([n, f, warm]) => (
          <div key={n as string}>
            <div className="flex items-baseline justify-between">
              <span className="font-pad-body text-[12.5px]">{n as string}</span>
              <span className="font-pad-body text-[11px] tabular-nums text-pad-muted">
                {warm ? "above India" : "below India"}
              </span>
            </div>
            <div className="mt-1 h-2.5 bg-[#e6d4b4] shadow-[inset_0_1px_2px_rgba(34,20,16,.3)]">
              <div
                className="h-full"
                style={{
                  width: `${(f as number) * 100}%`,
                  background: warm ? "#8c1c21" : "#1c2a22",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    kind: "INTERFACE",
    title: "Chips as enamel plaques",
    take: "Selected is a filled crimson plaque, rest is a hairline. Two states only, and because the fill is the accent, selecting reads as an action rather than as decoration.",
    visual: (
      <div className="flex h-full flex-wrap content-center items-center justify-center gap-2 bg-pad-bg px-4">
        {["All", "Kerala", "Goa", "Assam"].map((d, i) => (
          <span
            key={d}
            className={
              i === 1
                ? "bg-pad-accent px-3.5 py-1.5 font-pad-display text-[11px] font-semibold uppercase tracking-[0.1em] text-pad-surface"
                : "border border-pad-line bg-pad-surface px-3.5 py-1.5 font-pad-display text-[11px] font-semibold uppercase tracking-[0.1em] text-pad-ink"
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
    title: "Empty state as an inlay panel",
    take: "A result with nothing in it is still a decorated surface, not a grey box. Nothing in this world is ever plain, including failure.",
    visual: (
      <div className="flex h-full items-center justify-center bg-pad-bg p-4">
        <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 border border-pad-line tex-inlay">
          <div className="bg-pad-bg px-3 py-1">
            <p className="font-pad-display text-[13px] font-semibold uppercase tracking-[0.08em]">
              No districts match
            </p>
          </div>
          <div className="bg-pad-bg px-3">
            <p className="font-pad-body text-[12px] text-pad-muted">Clear a filter</p>
          </div>
        </div>
      </div>
    ),
  },

  /* MOTION */
  {
    kind: "MOTION",
    title: "A flame, not a fade",
    take: "Light here wavers rather than ramping. The record drawer opens with a 180ms wipe from the hinge side, and nothing in the system cross-fades.",
    visual: (
      <div className="relative h-full overflow-hidden bg-pad-bg">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-pad-display text-[17px] font-semibold uppercase tracking-[0.08em]">
            Udaipur
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 w-1/2 border-l-2 border-pad-accent bg-[repeating-linear-gradient(90deg,#8c1c21_0_7px,#6d1317_7px_14px)]" />
        <p className="absolute bottom-2 left-3 font-pad-body text-[10px] uppercase tracking-[0.18em] text-pad-muted">
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
      mood="padmaavat"
      name="Chittor and Khilji"
      subtitle="01 · Padmaavat"
      lede={
        <>
          <p>
            Bhansali shoots the film as two palettes at war. Inside the fort
            everything is ivory, sandstone and gold, and every light source is
            a flame. Outside it, the siege is green-black, leather and smoke,
            and the light is cold. The two never mix in a single frame.
          </p>
          <p className="mt-3">
            That opposition is the one idea I took into the design system, and
            it turned out to be worth more than the ornament. A system with a
            warm palette and a cold one has a built-in way of saying &ldquo;this
            figure is above its benchmark&rdquo; and &ldquo;this one falls
            short&rdquo; without inventing a success green or an error red. The
            ornament then does the other job: the foliated arch marks what
            opens, and nothing else is allowed to wear it.
          </p>
        </>
      }
      sourcing="Nothing here is a film still or a photograph. Every scene, texture and specimen is drawn in SVG or built from CSS gradients, so the board carries no licence and renders identically on any checkout. Where a figure appears it is the real 2011 Census figure."
      artifacts={ARTIFACTS}
      crossed={[
        { label: "Accent", detail: `Chittor crimson #8C1C21 at ${RATIO("#8c1c21")} on the page. Primary action and open record only.` },
        { label: "Second palette", detail: "The Khilji greens, used for anything below its benchmark. It is why this system needs no separate error colour." },
        { label: "Shape", detail: "The foliated arch is reserved for what opens. Anything holding a number is square, so precision keeps looking like precision." },
        { label: "Rule", detail: "Section dividers are a 10px inlay repeat, from artifact 20, never a plain line." },
        { label: "Shadow", detail: "One source from above, a single pixel of highlight, from the mirror work in artifact 19." },
        { label: "Rejected", detail: `Gota gold as the accent at ${RATIO("#9a6b1e")}, and the flame orange at ${RATIO("#e0893a")}. Both measured, both demoted to ornament.` },
      ]}
    />
  );
}
