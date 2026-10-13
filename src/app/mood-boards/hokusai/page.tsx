import type { Metadata } from "next";
import { BoardShell, Chip, Magnified, type Artifact, type Skin } from "@/components/board";

export const metadata: Metadata = {
  title: "Mood board 03 · Prussian Blue on Mulberry Paper",
  description:
    "Twenty-eight artifacts: aizuri-e prints, the keyblock line, bokashi gradients, washi grain and a great deal of empty paper.",
};

const skin: Skin = {
  page: "min-h-screen bg-hok-bg text-hok-ink font-hok-body tex-washi",
  back:
    "inline-block border-[1.5px] border-hok-ink px-3 py-1 font-hok-body text-[11px] font-medium uppercase tracking-[0.2em] text-hok-ink hover:border-hok-accent hover:text-hok-accent",
  eyebrow:
    "font-hok-body text-[11px] font-medium uppercase tracking-[0.2em] text-hok-accent",
  title:
    "font-hok-display text-[clamp(34px,5vw,54px)] font-semibold leading-[1.15] tracking-[0.02em]",
  lede: "font-hok-body text-[16px] leading-[1.78] text-hok-ink",
  small: "font-hok-body text-[13px] leading-[1.65] text-hok-muted",
  sectionTitle: "font-hok-display text-[24px] font-semibold leading-tight",
  card:
    "border-[1.5px] border-hok-ink bg-hok-surface p-5 transition-colors hover:border-hok-accent",
  tag: "font-hok-body text-[10px] font-medium uppercase tracking-[0.2em] text-hok-muted",
  frame: "h-44 overflow-hidden border-[1.5px] border-hok-ink",
  cardTitle: "font-hok-display text-[16px] font-semibold leading-snug",
  take: "font-hok-body text-[13px] leading-[1.65] text-hok-muted",
  rule: "border-hok-line",
  shell: "skin-hok",
};

/* ------------------------------- drawn scenes ------------------------------ */

function GreatWave() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A great breaking wave with clawed foam, a small Fuji in the distance behind it">
      <defs>
        <linearGradient id="hok-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8fa6bd" />
          <stop offset="0.5" stopColor="#d6d3c2" />
          <stop offset="1" stopColor="#d9e0dc" />
        </linearGradient>
      </defs>
      <rect width="300" height="176" fill="url(#hok-sky)" />
      <path d="M186 132 L222 92 L236 100 L248 88 L262 100 L300 136 Z" fill="#eef2ee" stroke="#141e2e" strokeWidth="1.5" />
      <path d="M222 92 L236 100 L248 88 L240 84 L232 90 Z" fill="#ffffff" />
      <path
        d="M0 150 C30 96 72 64 118 82 C150 94 158 126 142 142 C128 156 100 152 92 138 C104 150 126 150 134 138 C144 124 134 100 110 94 C70 84 34 118 10 162 L0 176 Z"
        fill="#1c4c86" stroke="#141e2e" strokeWidth="1.5"
      />
      <path d="M96 86 q10 -12 4 -22 q10 10 18 6 q-6 12 2 20 q-12 -8 -24 -4 z" fill="#eef2ee" stroke="#141e2e" strokeWidth="1.2" />
      <path d="M58 100 q12 -14 6 -26 q12 12 22 7 q-8 14 1 23 q-14 -10 -29 -4 z" fill="#eef2ee" stroke="#141e2e" strokeWidth="1.2" />
      <path d="M0 162 C48 140 96 158 148 148 C200 138 252 158 300 148 L300 176 L0 176 Z" fill="#2e6fae" stroke="#141e2e" strokeWidth="1.2" />
    </svg>
  );
}

function RedFuji() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A conical mountain in red-brown against a banded blue sky, with a dark forest at its foot">
      <defs>
        <linearGradient id="hok-bok" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1c4c86" />
          <stop offset="0.55" stopColor="#8aaac8" />
          <stop offset="1" stopColor="#d9e0dc" />
        </linearGradient>
      </defs>
      <rect width="300" height="176" fill="url(#hok-bok)" />
      <g fill="#eef2ee" opacity="0.9">
        <path d="M24 30 q26 -8 52 0 q-26 8 -52 0 z" />
        <path d="M212 48 q30 -9 60 0 q-30 9 -60 0 z" />
      </g>
      <path d="M22 150 L150 32 L278 150 Z" fill="#b4452f" stroke="#141e2e" strokeWidth="1.5" />
      <path d="M118 62 L150 32 L182 62 L170 58 L160 66 L150 56 L138 66 L128 58 Z" fill="#eef2ee" stroke="#141e2e" strokeWidth="1.2" />
      <path d="M0 150 h300 v26 h-300 z" fill="#3c5a44" />
      {Array.from({ length: 22 }).map((_, i) => (
        <path key={i} d={`M${6 + i * 14} 150 l6 -11 l6 11 z`} fill="#24402c" />
      ))}
    </svg>
  );
}

function RainBeneath() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A dark mountain under a black sky split by a branching white lightning strike">
      <rect width="300" height="176" fill="#101d33" />
      <rect y="0" width="300" height="70" fill="#060d1a" />
      <path d="M22 158 L150 36 L278 158 Z" fill="#1c3b63" stroke="#0a1322" strokeWidth="1.5" />
      <path d="M120 66 L150 36 L180 66 L168 62 L158 70 L150 60 L140 70 L130 62 Z" fill="#dfe6ef" />
      <path
        d="M66 158 L96 120 L84 118 L112 92 L104 110 L120 104 L96 134 L108 132 Z"
        fill="#f4efe0" stroke="#141e2e" strokeWidth="1"
      />
      <path d="M0 158 h300 v18 h-300 z" fill="#0a1322" />
      <g stroke="#2e6fae" strokeWidth="1" opacity="0.5">
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={i} x1={i * 20 + 4} y1="0" x2={i * 20 - 14} y2="70" />
        ))}
      </g>
    </svg>
  );
}

function BridgeRain() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="Figures crossing an arched bridge in slanting rain, carrying umbrellas">
      <rect width="300" height="176" fill="#dcd8c4" />
      <g stroke="#44576f" strokeWidth="0.9" opacity="0.6">
        {Array.from({ length: 34 }).map((_, i) => (
          <line key={i} x1={i * 12 - 30} y1="0" x2={i * 12 - 66} y2="176" />
        ))}
      </g>
      <path d="M0 128 Q150 58 300 128 L300 142 Q150 72 0 142 Z" fill="#8a6a47" stroke="#141e2e" strokeWidth="1.5" />
      <g stroke="#141e2e" strokeWidth="1.2">
        {Array.from({ length: 11 }).map((_, i) => {
          const x = 14 + i * 27;
          const y = 128 - Math.sin((i / 10) * Math.PI) * 70 + 6;
          return <line key={i} x1={x} y1={y} x2={x} y2={y + 26} stroke="#6b5234" />;
        })}
      </g>
      {[[78, 96], [126, 80], [184, 84], [228, 100]].map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x - 16} ${y} a16 11 0 0 1 32 0 z`} fill={i % 2 ? "#1c4c86" : "#b4452f"} stroke="#141e2e" strokeWidth="1.2" />
          <line x1={x} y1={y} x2={x} y2={y + 8} stroke="#141e2e" strokeWidth="1.2" />
          <path d={`M${x - 6} ${y + 8} q6 18 12 0 z`} fill="#3f4f3c" stroke="#141e2e" strokeWidth="1" />
        </g>
      ))}
      <rect y="150" width="300" height="26" fill="#9fb0c0" />
    </svg>
  );
}

function Boatmen() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A single small boat low in a very large empty expanse of water and sky">
      <rect width="300" height="176" fill="#d9e0dc" />
      <rect y="112" width="300" height="64" fill="#cfd9e2" />
      <g stroke="#86a7c6" strokeWidth="1" fill="none">
        {Array.from({ length: 5 }).map((_, i) => (
          <path key={i} d={`M0 ${124 + i * 12} q24 -6 48 0 t48 0 t48 0 t48 0 t48 0 t48 0`} />
        ))}
      </g>
      <g transform="translate(206 112)">
        <path d="M-30 0 q30 14 60 0 q-6 10 -30 10 q-24 0 -30 -10 z" fill="#8a6a47" stroke="#141e2e" strokeWidth="1.5" />
        <path d="M-14 0 v-14 h4 v14 z" fill="#141e2e" />
        <circle cx="4" cy="-6" r="4" fill="#1c4c86" />
        <circle cx="16" cy="-4" r="4" fill="#b4452f" />
      </g>
      <g opacity="0.35">
        <path d="M18 96 q24 -7 48 0 q-24 7 -48 0 z" fill="#9fb0c0" />
        <path d="M94 74 q30 -8 60 0 q-30 8 -60 0 z" fill="#9fb0c0" />
      </g>
    </svg>
  );
}

function PineScale() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="One enormous pine filling the left of the frame, with a tiny traveller far off to the right">
      <rect width="300" height="176" fill="#d9e0dc" />
      <rect y="150" width="300" height="26" fill="#d8cdb2" />
      <g stroke="#141e2e" strokeWidth="1.5" fill="#5e4a30">
        <path d="M30 150 q-6 -70 10 -110 q6 -16 14 -2 q10 18 4 112 z" />
      </g>
      <g fill="#3c5a44" stroke="#141e2e" strokeWidth="1.2">
        <path d="M44 42 q40 -14 62 6 q-44 -2 -62 10 z" />
        <path d="M40 72 q46 -12 70 10 q-50 -4 -70 10 z" />
        <path d="M36 104 q38 -10 58 8 q-42 -2 -58 10 z" />
        <path d="M10 60 q-32 -10 -48 6 q34 -2 48 8 z" transform="translate(44 0)" />
      </g>
      <g fill="#141e2e">
        <ellipse cx="246" cy="142" rx="3" ry="7" />
        <circle cx="246" cy="132" r="2.6" />
        <path d="M240 134 h12 l-6 -5 z" fill="#b4452f" />
      </g>
      <line x1="238" y1="150" x2="258" y2="150" stroke="#44576f" strokeWidth="0.8" />
    </svg>
  );
}

function TypeCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col justify-center bg-hok-surface px-5 tex-washi">{children}</div>
  );
}

const ARTIFACTS: Artifact[] = [
  /* IMAGE */
  {
    kind: "IMAGE",
    title: "The great wave",
    take: "The subject is at the edge and the mountain, which the print is supposedly about, is a thumbnail in the gap. Composition by displacement, which is where the asymmetric layout comes from.",
    visual: <GreatWave />,
  },
  {
    kind: "IMAGE",
    title: "Fine wind, clear morning",
    take: "Three flat colours and an outline. No modelling anywhere, and the mountain still reads as a solid. Proof a system can drop shadow entirely and keep its depth.",
    visual: <RedFuji />,
  },
  {
    kind: "IMAGE",
    title: "Rainstorm beneath the summit",
    take: "The same mountain, inverted into night. One white shape doing all of the work on a dark field, which became the focus treatment.",
    visual: <RainBeneath />,
  },
  {
    kind: "IMAGE",
    title: "Travellers on a bridge",
    take: "Rain drawn as ruled parallel lines over everything, including the figures. The system's loading state borrows it: a pattern laid across the whole block rather than a spinner beside it.",
    visual: <BridgeRain />,
  },
  {
    kind: "IMAGE",
    title: "One boat",
    take: "Nine tenths of the sheet is empty and the subject sits low and right. This is the artifact that set the spacing scale, which jumps from 30px straight to 72px.",
    visual: <Boatmen />,
  },
  {
    kind: "IMAGE",
    title: "A pine and a traveller",
    take: "Scale stated by putting the two extremes in one frame with nothing between them. The site does the same thing with its largest and smallest district.",
    visual: <PineScale />,
  },

  /* COLOUR */
  {
    kind: "COLOUR",
    title: "Prussian blue",
    take: "Imported pigment, chemically stable, and the reason these prints look the way they do. It is the accent at 7.00:1, and the whole board is arranged so nothing competes with it.",
    visual: (
      <div className="relative h-full bg-hok-bg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-20 w-20 border-[1.5px] border-hok-ink bg-hok-accent" />
        </div>
        <p className="absolute bottom-2 left-0 right-0 text-center font-mono text-[10px] tracking-widest text-hok-muted">
          #1C4C86 · 7.00:1 ON #D9E0DC
        </p>
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "Mulberry paper",
    take: "The ground is cool, slightly uneven and never white: unbleached kozo reads grey-green, not ivory. Surface is half a tone lighter than background and no more, because a print has no elevation to speak of.",
    visual: (
      <div className="grid h-full grid-cols-3">
        <Chip hex="#d9e0dc" name="background" note="kozo paper" stripBg="#eef2ee" />
        <Chip hex="#eef2ee" name="surface" note="fresh sheet" stripBg="#eef2ee" />
        <Chip hex="#aebcc8" name="border" note="1.53:1" stripBg="#eef2ee" />
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "Sumi ink is blue-black",
    take: "Never true black. The text role is #141E2E, which keeps the page in one temperature and is why the dark areas feel like ink rather than like a hole.",
    visual: (
      <div className="grid h-full grid-cols-2">
        <Chip hex="#000000" name="true black" note="never used" tone="dark" stripBg="#eef2ee" />
        <Chip hex="#141e2e" name="sumi" note="13.54:1" tone="dark" stripBg="#eef2ee" />
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "Beni red, the single warm note",
    take: "One warm colour in an entirely cool set, used sparingly and always small. In the system it marks a figure that falls below its benchmark.",
    visual: (
      <div className="grid h-full grid-cols-3">
        <Chip hex="#b4452f" name="beni" note="4.46:1" tone="dark" stripBg="#eef2ee" />
        <Chip hex="#6e8360" name="sage" note="3.37:1 fill" tone="dark" stripBg="#eef2ee" />
        <Chip hex="#c08a3e" name="ochre" note="2.46:1 fill" stripBg="#eef2ee" />
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "Bokashi",
    take: "The gradient is wiped onto the block by hand before each pull, so it is always vertical and always one colour fading to paper. This system allows exactly one gradient, and this is it.",
    visual: <div className="h-full w-full tex-bokashi" />,
  },

  /* TYPE */
  {
    kind: "TYPE",
    title: "Display: Shippori Mincho",
    take: "A mincho serif with a brush entry stroke and a heavy horizontal. It is the display role, and it is deliberately never centred.",
    visual: (
      <TypeCard>
        <p className="font-hok-display text-[36px] font-semibold leading-tight">
          Thirty-six Views
        </p>
        <p className="mt-2 font-hok-body text-[10px] font-medium uppercase tracking-[0.2em] text-hok-muted">
          Shippori Mincho · 600 · +0.02em
        </p>
      </TypeCard>
    ),
  },
  {
    kind: "TYPE",
    title: "Body: Zen Kaku Gothic New",
    take: "A plain gothic set against the mincho, with 1.78 leading. The open leading is the only way a 16px paragraph survives this much surrounding emptiness.",
    visual: (
      <TypeCard>
        <p className="font-hok-body text-[15px] leading-[1.78]">
          Three districts recorded no urban households at all in 2011: Lahul and
          Spiti, Kinnaur, and the Nicobars.
        </p>
      </TypeCard>
    ),
  },
  {
    kind: "TYPE",
    title: "The title slip",
    take: "A print carries its title in a bordered cartouche in one corner, not across the top. The page header sits in the corner of its grid for the same reason.",
    visual: (
      <div className="relative h-full bg-hok-bg p-3">
        <div className="absolute left-3 top-3 border-[1.5px] border-hok-ink bg-hok-surface px-3 py-2">
          <p className="font-hok-display text-[13px] font-semibold leading-tight">
            Districts of
            <br />
            Maharashtra
          </p>
          <p className="mt-1 font-hok-body text-[9px] uppercase tracking-[0.2em] text-hok-muted">
            no. 35 of 640
          </p>
        </div>
        <div className="absolute bottom-3 right-3 h-16 w-28 border-[1.5px] border-hok-line" />
      </div>
    ),
  },
  {
    kind: "TYPE",
    title: "The seal",
    take: "A small red square is the only warm thing on most prints, and it means the maker signed it. Became the badge: small, square, and it never does anything when you press it.",
    visual: (
      <div className="flex h-full items-center justify-center bg-hok-bg">
        <div className="flex h-20 w-20 flex-col items-center justify-center gap-0.5 bg-hok-beni p-1.5">
          {["北", "斎"].map((g) => (
            <span key={g} className="font-hok-display text-[26px] leading-none text-hok-surface">
              {g}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    kind: "TYPE",
    title: "Numerals against empty paper",
    take: "A figure set small with a great deal of nothing around it reads as more important than the same figure set large. The site's headline numbers are sized from this.",
    visual: (
      <div className="relative h-full bg-hok-bg">
        <div className="absolute bottom-5 right-5 text-right">
          <p className="font-hok-display text-[26px] font-semibold tabular-nums leading-none">
            1,21,08,54,977
          </p>
          <p className="mt-1.5 font-hok-body text-[10px] uppercase tracking-[0.2em] text-hok-muted">
            persons, 2011
          </p>
        </div>
      </div>
    ),
  },

  /* TEXTURE */
  {
    kind: "TEXTURE",
    title: "Washi grain",
    take: "The fibre runs at a slight angle and is never uniform. A one-pixel repeat at 94 degrees keeps the large empty areas from reading as a blank div. Shown at its own scale and magnified, because at its own scale you are not supposed to notice it.",
    visual: <Magnified ship="tex-washi" zoom="tex-washi-4x" />,
  },
  {
    kind: "TEXTURE",
    title: "Seigaiha",
    take: "Concentric arcs for water, repeated to the edge. Used once, in the empty state, because an empty result here should look like open sea rather than like an error.",
    visual: <div className="h-full w-full tex-seigaiha" />,
  },
  {
    kind: "TEXTURE",
    title: "Asanoha",
    take: "A hemp-leaf lattice at 16px. It is the only patterned rule the system has, and it separates sections without adding a colour.",
    visual: <div className="h-full w-full tex-asanoha" />,
  },
  {
    kind: "TEXTURE",
    title: "The keyblock line",
    take: "Every shape is bounded by the same weight of black line, and that line is the drawing. The system fixes it at 1.5px and uses it on every single component.",
    visual: (
      <div className="flex h-full items-center justify-center gap-4 bg-hok-bg">
        {[0.5, 1, 1.5, 3].map((w) => (
          <div key={w} className="text-center">
            <div
              className="h-16 w-10 bg-hok-accent"
              style={{ border: `${w}px solid #141e2e` }}
            />
            <p className="mt-1.5 font-mono text-[9px] text-hok-muted">{w}px</p>
          </div>
        ))}
      </div>
    ),
  },

  /* MATERIAL */
  {
    kind: "MATERIAL",
    title: "Cherry wood block",
    take: "Everything is cut, so no curve exists that a knife could not make. That is the whole reason this system has a single radius value, and the value is zero.",
    visual: (
      <div className="h-full w-full bg-[linear-gradient(92deg,#c79a63_0%,#b4834a_18%,#d2a771_36%,#a8783f_58%,#cf9f68_70%,#be8d55_84%,#a97a42_100%)]">
        <div className="h-full w-full bg-[repeating-linear-gradient(90deg,rgba(60,40,20,.18)_0_1px,transparent_1px_6px)]" />
      </div>
    ),
  },
  {
    kind: "MATERIAL",
    title: "Burnished ink",
    take: "The pigment is pressed into the paper with a baren, so it sits in the sheet rather than on it. Fills in this system are flat and matte, never a gradient.",
    visual: (
      <div className="flex h-full items-center justify-center bg-hok-bg">
        <div className="h-24 w-44 bg-hok-accent">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_35%_40%,rgba(255,255,255,.1)_0_38%,transparent_70%)]" />
        </div>
      </div>
    ),
  },
  {
    kind: "MATERIAL",
    title: "Registration marks",
    take: "Each colour is a separate block aligned by a notch, and when the alignment slips you see it. The system keeps the alignment visible: every column edge in the site lines up with a rule.",
    visual: (
      <div className="relative h-full bg-hok-surface">
        <div className="absolute left-5 top-5 h-28 w-32 border-[1.5px] border-hok-ink" />
        <div className="absolute left-8 top-8 h-28 w-32 bg-hok-accent opacity-80" />
        <div className="absolute left-7 top-7 h-28 w-32 border-[1.5px] border-hok-beni opacity-60" />
        <svg viewBox="0 0 40 40" className="absolute bottom-4 right-4 h-8 w-8" role="img" aria-label="A right-angled registration notch">
          <path d="M4 36 V4 h32" stroke="#141e2e" strokeWidth="2.5" fill="none" />
        </svg>
      </div>
    ),
  },

  /* INTERFACE */
  {
    kind: "INTERFACE",
    title: "A card is a cut block",
    take: "Square, outlined in the keyblock weight, with a solid blue head. Depth is faked entirely by the line, and there is no shadow anywhere in the system.",
    visual: (
      <div className="flex h-full items-center justify-center bg-hok-bg p-4">
        <div className="w-44 border-[1.5px] border-hok-ink bg-hok-surface">
          <div className="bg-hok-accent px-3 py-1.5">
            <p className="font-hok-display text-[13px] font-semibold text-hok-surface">
              Thiruvananthapuram
            </p>
          </div>
          <div className="px-3 py-3">
            <p className="font-hok-body text-[9px] uppercase tracking-[0.2em] text-hok-muted">
              Population
            </p>
            <p className="font-hok-display text-[19px] font-semibold tabular-nums">
              33,01,427
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    kind: "INTERFACE",
    title: "A bar is a wave profile",
    take: "Outlined, flat-filled, with the comparison drawn as a notch in the outline rather than as a second colour. Two inks and no legend.",
    visual: (
      <div className="flex h-full flex-col justify-center gap-3.5 bg-hok-bg px-5">
        {[
          ["Kerala", 0.92, true],
          ["Goa", 0.78, true],
          ["Bihar", 0.42, false],
        ].map(([n, f, up]) => (
          <div key={n as string}>
            <div className="flex items-baseline justify-between">
              <span className="font-hok-body text-[12px]">{n as string}</span>
              <span className="font-hok-body text-[10px] uppercase tracking-[0.16em] text-hok-muted">
                {up ? "above" : "below"}
              </span>
            </div>
            <div className="relative mt-1 h-3 border-[1.5px] border-hok-ink">
              <div
                className="h-full"
                style={{ width: `${(f as number) * 100}%`, background: up ? "#1c4c86" : "#b4452f" }}
              />
              <span className="absolute -top-1 bottom-[-4px] w-[2px] bg-hok-ink" style={{ left: "66%" }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    kind: "INTERFACE",
    title: "Chips cut square",
    take: "No rounding and no fill until selected, at which point the chip becomes a solid blue block. The outline never changes weight, so nothing shifts when you choose.",
    visual: (
      <div className="flex h-full flex-wrap content-center items-center justify-center gap-2 bg-hok-bg px-4">
        {["All", "Kerala", "Goa", "Assam"].map((d, i) => (
          <span
            key={d}
            className={
              i === 1
                ? "border-[1.5px] border-hok-accent bg-hok-accent px-3.5 py-1.5 font-hok-body text-[12px] text-hok-surface"
                : "border-[1.5px] border-hok-ink bg-hok-surface px-3.5 py-1.5 font-hok-body text-[12px] text-hok-ink"
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
    title: "Empty state as open sea",
    take: "Nothing found is drawn as water going to the edge with one line of type low in the frame. It is the one state this system can express better than the other two.",
    visual: (
      <div className="relative h-full tex-seigaiha">
        <div className="absolute bottom-5 left-5 border-[1.5px] border-hok-ink bg-hok-bg px-3 py-2">
          <p className="font-hok-display text-[14px] font-semibold">No districts match</p>
          <p className="mt-0.5 font-hok-body text-[11px] text-hok-muted">Clear a filter</p>
        </div>
      </div>
    ),
  },

  /* MOTION */
  {
    kind: "MOTION",
    title: "A print does not move",
    take: "There is no easing anywhere in this world, so state changes are a 90ms swap and the loading pattern does not pulse. It is the stillest of the three systems on purpose.",
    visual: (
      <div className="flex h-full flex-col items-center justify-center gap-3 bg-hok-bg">
        <div className="flex items-center gap-4">
          <div className="h-10 w-20 border-[1.5px] border-hok-ink bg-hok-surface" />
          <span className="font-hok-body text-[15px] text-hok-muted">&rarr;</span>
          <div className="h-10 w-20 border-[1.5px] border-hok-accent bg-hok-accent" />
        </div>
        <p className="font-hok-body text-[10px] uppercase tracking-[0.2em] text-hok-muted">
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
      mood="hokusai"
      name="Prussian Blue on Mulberry Paper"
      subtitle="03 · Hokusai"
      lede={
        <>
          <p>
            The <em>aizuri-e</em> prints are made of four things: warm paper, a
            black keyblock line, one imported blue, and a great deal of nothing.
            There is no modelled light anywhere in them. A mountain reads as
            solid because the outline says so, not because one side of it is
            darker than the other.
          </p>
          <p className="mt-3">
            I picked it as the third mood because it disagrees with the other
            two about the same question. Padmaavat separates things with
            ornament and with an opposing palette; La La Land separates them
            with darkness and distance; this one separates them with a drawn
            line and with empty paper. It is the only one of the three with no
            shadow, no gradient except one, and no curve at all.
          </p>
        </>
      }
      sourcing="Every scene is drawn here in SVG after the compositions of the prints, and every texture is CSS, so nothing on the board is a scan or a reproduction. Figures quoted are the real 2011 Census figures."
      artifacts={ARTIFACTS}
      crossed={[
        { label: "Accent", detail: "Prussian blue #1C4C86 at 7.00:1. Primary action and current item only." },
        { label: "Separation", detail: "A 1.5px keyblock outline on every component. This system uses its line more than any other token, which is the opposite of La La Land." },
        { label: "Shape", detail: "One radius value, and the value is zero. A block print has no curve a knife could not cut." },
        { label: "Shadow", detail: "None at all. Depth comes from the outline, which is why hover changes the line colour rather than lifting anything." },
        { label: "Space", detail: "The scale jumps from 30px to 72px with nothing between, from artifact 05. The empty sheet is the composition." },
        { label: "Rejected", detail: "Sage at 3.27:1 and ochre at 2.39:1, both measured, both confined to chart fills well away from text." },
      ]}
    />
  );
}
