import type { Metadata } from "next";
import { BoardShell, Chip, type Artifact, type Skin } from "@/components/board";

export const metadata: Metadata = {
  title: "Mood board 02 · La La Land — Twilight and Streetlight",
  description:
    "Twenty-eight artifacts: dusk gradients, lamp amber, CinemaScope lettering, neon and grain.",
};

const skin: Skin = {
  page: "min-h-screen bg-lll-bg text-lll-ink font-lll-body tex-dusk",
  back:
    "inline-block font-lll-body text-[11px] font-medium uppercase tracking-[0.26em] text-lll-muted hover:text-lll-accent",
  eyebrow:
    "font-lll-body text-[11px] font-medium uppercase tracking-[0.3em] text-lll-accent",
  title:
    "font-lll-display text-[clamp(40px,7vw,72px)] leading-[1.0] tracking-[0.03em]",
  lede: "font-lll-body text-[16.5px] font-light leading-[1.7] text-lll-ink/90",
  small: "font-lll-body text-[13px] font-light leading-[1.6] text-lll-muted",
  sectionTitle: "font-lll-display text-[28px] leading-tight tracking-[0.02em]",
  card:
    "rounded-[14px] border border-lll-line bg-lll-surface/70 p-5 backdrop-blur-[2px] transition-shadow hover:glow-lamp",
  tag:
    "font-lll-body text-[10px] font-medium uppercase tracking-[0.26em] text-lll-muted",
  frame: "h-44 overflow-hidden rounded-[10px]",
  cardTitle: "font-lll-display text-[19px] leading-snug tracking-[0.01em]",
  take: "font-lll-body text-[13.5px] font-light leading-[1.6] text-lll-muted",
  rule: "border-lll-line",
};

/* ---------- drawn scenes ---------- */

function Griffith() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="Two figures on a terrace below a domed observatory, against a magenta and navy dusk">
      <defs>
        <linearGradient id="lll-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#120b2c" />
          <stop offset="0.45" stopColor="#2a1a55" />
          <stop offset="0.8" stopColor="#7a3a63" />
          <stop offset="1" stopColor="#d2755f" />
        </linearGradient>
      </defs>
      <rect width="300" height="176" fill="url(#lll-sky)" />
      {[[40, 24], [78, 46], [120, 18], [168, 38], [214, 22], [262, 50], [96, 70], [240, 76]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.6 : 1} fill="#ffe9bd" opacity="0.85" />
      ))}
      <g fill="#120b26">
        <rect x="84" y="86" width="132" height="34" />
        <circle cx="150" cy="86" r="22" />
        <rect x="140" y="56" width="3" height="12" />
        <rect x="104" y="74" width="16" height="16" />
        <rect x="180" y="74" width="16" height="16" />
        <rect x="60" y="118" width="180" height="6" />
      </g>
      <g fill="#f2b544" opacity="0.9">
        <rect x="96" y="96" width="5" height="7" />
        <rect x="112" y="96" width="5" height="7" />
        <rect x="186" y="96" width="5" height="7" />
        <rect x="202" y="96" width="5" height="7" />
      </g>
      <rect y="124" width="300" height="52" fill="#0d0820" />
      <g fill="#060412">
        <ellipse cx="136" cy="148" rx="7" ry="20" />
        <ellipse cx="156" cy="148" rx="9" ry="20" />
        <circle cx="136" cy="128" r="5" />
        <circle cx="156" cy="128" r="5" />
      </g>
      <ellipse cx="146" cy="170" rx="46" ry="6" fill="#f2b544" opacity="0.15" />
    </svg>
  );
}

function Freeway() {
  const cars = [
    [12, 108, "#e0609a"], [46, 120, "#4ec5d4"], [84, 104, "#f2b544"],
    [120, 124, "#ffd9a0"], [156, 106, "#7b5ea7"], [192, 122, "#e0609a"],
    [228, 108, "#4ec5d4"], [258, 126, "#f2b544"],
  ] as const;
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="Cars in flat bright colours stopped on an overpass under a blue morning sky">
      <rect width="300" height="176" fill="#5aa7d8" />
      <rect y="96" width="300" height="80" fill="#8d8a93" />
      <rect y="92" width="300" height="5" fill="#cfcbd4" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <rect key={i} x={i * 36 + 6} y="140" width="20" height="3" fill="#efe9dc" />
      ))}
      {cars.map(([x, y, c], i) => (
        <g key={i}>
          <rect x={x} y={y} width="30" height="13" rx="4" fill={c} />
          <rect x={x + 6} y={y - 6} width="17" height="8" rx="3" fill={c} opacity="0.85" />
          <circle cx={x + 7} cy={y + 14} r="3" fill="#2a2338" />
          <circle cx={x + 23} cy={y + 14} r="3" fill="#2a2338" />
        </g>
      ))}
      <g fill="#dfeef8" opacity="0.9">
        <ellipse cx="56" cy="34" rx="26" ry="11" />
        <ellipse cx="214" cy="22" rx="32" ry="10" />
      </g>
    </svg>
  );
}

function JazzClub() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A pianist lit by a single overhead spot in a dark club">
      <rect width="300" height="176" fill="#120d28" />
      <path d="M150 0 L104 176 L196 176 Z" fill="#f2b544" opacity="0.12" />
      <circle cx="150" cy="4" r="9" fill="#ffe9bd" opacity="0.8" />
      <g fill="#070516">
        <rect x="92" y="112" width="116" height="12" />
        <rect x="100" y="124" width="8" height="34" />
        <rect x="192" y="124" width="8" height="34" />
        <rect x="104" y="104" width="92" height="9" />
      </g>
      {Array.from({ length: 14 }).map((_, i) => (
        <rect key={i} x={106 + i * 6.6} y="104" width="4.6" height="9" fill="#efe6d4" />
      ))}
      {[1, 2, 4, 5, 6, 8, 9, 11, 12].map((i) => (
        <rect key={i} x={109 + i * 6.6} y="104" width="2.6" height="6" fill="#120d28" />
      ))}
      <g fill="#1d1538">
        <ellipse cx="150" cy="92" rx="13" ry="18" />
        <circle cx="150" cy="70" r="9" />
        <rect x="132" y="86" width="12" height="4" rx="2" />
        <rect x="156" y="86" width="12" height="4" rx="2" />
      </g>
      <g opacity="0.5" fill="#e0609a">
        <circle cx="34" cy="48" r="3" />
        <circle cx="262" cy="62" r="3" />
        <circle cx="52" cy="92" r="2" />
        <circle cx="248" cy="104" r="2" />
      </g>
    </svg>
  );
}

function Pier() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A lit pier running out over dark water at night">
      <defs>
        <linearGradient id="lll-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b1340" />
          <stop offset="1" stopColor="#0a0720" />
        </linearGradient>
      </defs>
      <rect width="300" height="110" fill="#241a4b" />
      <rect y="106" width="300" height="70" fill="url(#lll-sea)" />
      <g stroke="#2d2158" strokeWidth="4">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={i} x1={26 + i * 32} y1="100" x2={26 + i * 32} y2="138" />
        ))}
      </g>
      <rect x="12" y="94" width="276" height="8" fill="#332564" />
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={i}>
          <circle cx={18 + i * 24} cy="88" r="4" fill="#f2b544" />
          <circle cx={18 + i * 24} cy="88" r="10" fill="#f2b544" opacity="0.2" />
          <rect x={17 + i * 24} y="124" width="2" height="34" fill="#f2b544" opacity="0.22" />
        </g>
      ))}
      <circle cx="252" cy="36" r="13" fill="#ffe9bd" opacity="0.9" />
    </svg>
  );
}

function Planetarium() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="Two dancers floating among stars inside a planetarium dome">
      <rect width="300" height="176" fill="#0b0722" />
      {Array.from({ length: 70 }).map((_, i) => {
        const x = (i * 97) % 300;
        const y = (i * 53) % 176;
        const r = i % 7 === 0 ? 1.8 : i % 3 === 0 ? 1.2 : 0.7;
        return <circle key={i} cx={x} cy={y} r={r} fill="#ffe9bd" opacity={0.3 + ((i % 5) / 7)} />;
      })}
      <ellipse cx="150" cy="88" rx="110" ry="62" fill="none" stroke="#4ec5d4" strokeWidth="0.7" opacity="0.5" />
      <ellipse cx="150" cy="88" rx="74" ry="40" fill="none" stroke="#7b5ea7" strokeWidth="0.7" opacity="0.5" />
      <g fill="#1a1138" stroke="#f2b544" strokeWidth="1">
        <ellipse cx="136" cy="94" rx="7" ry="20" />
        <circle cx="136" cy="70" r="6" />
        <ellipse cx="164" cy="90" rx="9" ry="22" />
        <circle cx="164" cy="64" r="6" />
      </g>
      <path d="M128 112 q22 16 44 -2" stroke="#f2b544" strokeWidth="1" fill="none" opacity="0.7" />
    </svg>
  );
}

function Marquee() {
  return (
    <div className="relative h-full w-full bg-[#120d28] px-6 py-5">
      <div className="absolute inset-x-4 inset-y-3 rounded-[8px] border-2 border-lll-accent/70" />
      <div className="absolute inset-x-4 top-3 h-0 w-full">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute -top-[4px] block h-2 w-2 rounded-full bg-lll-accent shadow-[0_0_8px_#f2b544]"
            style={{ left: `${i * 7.1}%` }}
          />
        ))}
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        <p className="font-lll-body text-[9px] font-medium uppercase tracking-[0.4em] text-lll-cream">
          Tonight
        </p>
        <p className="mt-1 font-lll-display text-[26px] leading-none tracking-[0.06em] text-lll-ink">
          RIALTO
        </p>
        <p className="mt-2 font-lll-body text-[10px] uppercase tracking-[0.3em] text-lll-muted">
          7:30 &middot; 9:45
        </p>
      </div>
    </div>
  );
}

function TypeCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col justify-center bg-lll-surface px-5">
      {children}
    </div>
  );
}

const ARTIFACTS: Artifact[] = [
  /* IMAGE */
  {
    kind: "IMAGE",
    title: "Griffith terrace, twenty minutes after sunset",
    take: "The whole mood in one frame: a cool dark field with two or three warm points in it. Sets the rule that light is scarce and therefore means something.",
    visual: <Griffith />,
  },
  {
    kind: "IMAGE",
    title: "The overpass",
    take: "Flat saturated colour in daylight, each car a different hue. This is the one place the mood is allowed many colours, and it is a picture, not an interface.",
    visual: <Freeway />,
  },
  {
    kind: "IMAGE",
    title: "One spot, one piano",
    take: "Hierarchy done entirely with light. The page header is lit and everything below it is not, which is why the system barely needs borders.",
    visual: <JazzClub />,
  },
  {
    kind: "IMAGE",
    title: "Pier lights on black water",
    take: "A repeated amber point along a line. Became the tab underline and the active-item marker.",
    visual: <Pier />,
  },
  {
    kind: "IMAGE",
    title: "The planetarium",
    take: "Figures with no ground under them. Permission for very large empty areas, which is where the 96px page padding comes from.",
    visual: <Planetarium />,
  },
  {
    kind: "IMAGE",
    title: "Cinema marquee",
    take: "A frame of bulbs around a short line of type. The literal source of the panel border and the title card.",
    visual: <Marquee />,
  },

  /* COLOUR */
  {
    kind: "COLOUR",
    title: "Dusk, the four stops",
    take: "The background is a gradient, not a flat fill, because the sky in this film never is. Everything else is sampled out of it.",
    visual: (
      <div className="h-full w-full">
        <div className="h-28 w-full tex-dusk" />
        <div className="grid h-16 grid-cols-4">
          <Chip hex="#0d0a22" name="top" dark />
          <Chip hex="#1d1442" name="field" dark />
          <Chip hex="#40205c" name="horizon" dark />
          <Chip hex="#7a3a63" name="last light" dark />
        </div>
      </div>
    ),
    wide: true,
  },
  {
    kind: "COLOUR",
    title: "Streetlamp amber",
    take: "The accent. 9.46:1 against the background, which is unusually high for a yellow and is the reason this one survived.",
    visual: (
      <div className="relative h-full bg-lll-bg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-lll-accent shadow-[0_0_60px_18px_rgba(242,181,68,.35)]" />
        </div>
        <p className="absolute bottom-2 left-0 right-0 text-center font-mono text-[10px] tracking-widest text-lll-muted">
          #F2B544 · 9.46:1 ON #171033
        </p>
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "Neon and pool water",
    take: "Both beautiful, both demoted. Magenta carries error, aqua carries a secondary series on a chart. Neither is ever a button.",
    visual: (
      <div className="grid h-full grid-cols-2">
        <Chip hex="#e0609a" name="neon" note="error only" dark />
        <Chip hex="#4ec5d4" name="aqua" note="second series" dark />
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "The four dresses",
    take: "Primary, saturated, equally weighted. A direct warning: four colours of the same strength have no hierarchy, so the interface uses one.",
    visual: (
      <div className="grid h-full grid-cols-4">
        <div className="bg-[#f2c73c]" />
        <div className="bg-[#2f8f5b]" />
        <div className="bg-[#2d6cc0]" />
        <div className="bg-[#d23a3a]" />
      </div>
    ),
  },
  {
    kind: "COLOUR",
    title: "Why the text is not white",
    take: "Pure white on this background is 15.1:1 and looks like a screen. The cream is 13.3:1 and looks like light. Both pass; the cream fits.",
    visual: (
      <div className="grid h-full grid-cols-2">
        <div className="flex flex-col items-center justify-center bg-lll-bg">
          <p className="text-[22px] text-white">Aa</p>
          <p className="mt-1 font-mono text-[9px] text-lll-muted">#FFFFFF</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-lll-bg">
          <p className="text-[22px] text-lll-ink">Aa</p>
          <p className="mt-1 font-mono text-[9px] text-lll-muted">#F7F0E8</p>
        </div>
      </div>
    ),
  },

  /* TYPE */
  {
    kind: "TYPE",
    title: "Display: Bodoni Moda",
    take: "The display role. High stroke contrast reads as a title card at 70px and falls apart below 20px, which is why it is never used for body text.",
    visual: (
      <TypeCard>
        <p className="font-lll-display text-[44px] leading-none tracking-[0.04em]">
          La La Land
        </p>
        <p className="mt-3 font-lll-body text-[10px] font-medium uppercase tracking-[0.3em] text-lll-muted">
          Bodoni Moda · 500 · +0.04em
        </p>
      </TypeCard>
    ),
  },
  {
    kind: "TYPE",
    title: "CinemaScope credits",
    take: "Very wide tracking at very small size, centred. This is the label role exactly: 11px, 0.26em, uppercase.",
    visual: (
      <div className="flex h-full flex-col items-center justify-center bg-[#0b0720] px-6">
        <p className="font-lll-body text-[9px] font-medium uppercase tracking-[0.4em] text-lll-muted">
          Census of India
        </p>
        <p className="mt-3 font-lll-display text-[20px] tracking-[0.1em]">
          RAJASTHAN
        </p>
        <p className="mt-3 font-lll-body text-[9px] font-medium uppercase tracking-[0.4em] text-lll-muted">
          Thirty-three districts
        </p>
      </div>
    ),
  },
  {
    kind: "TYPE",
    title: "Letterboard",
    take: "Fixed-width slots, so the line length is decided before the words are. Became the fixed-width numeric column in the district table.",
    visual: (
      <div className="flex h-full items-center justify-center bg-[#171033] px-4">
        <div className="grid grid-cols-7 gap-[3px]">
          {"JAISALMER 669919".replace(/\s/g, " ").split("").map((ch, i) => (
            <span
              key={i}
              className="flex h-7 w-7 items-center justify-center bg-[#0b0720] font-lll-body text-[13px] font-medium text-lll-cream"
            >
              {ch}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    kind: "TYPE",
    title: "Record sleeve",
    take: "A roman serif and a geometric sans on one cover, with a rule between them. The two-family pairing the system uses.",
    visual: (
      <div className="flex h-full items-center justify-center bg-[#241a4b] p-4">
        <div className="w-44 border border-lll-accent/50 p-3 text-center">
          <p className="font-lll-display text-[19px] leading-tight">Seb&rsquo;s</p>
          <div className="my-2 h-px bg-lll-accent/50" />
          <p className="font-lll-body text-[9px] font-medium uppercase tracking-[0.3em] text-lll-muted">
            Live at the Lighthouse
          </p>
        </div>
      </div>
    ),
  },
  {
    kind: "TYPE",
    title: "Numerals as seasons",
    take: "The film is chaptered WINTER / SPRING / SUMMER / FALL. Taken as the pattern for section headers: one word, enormous, alone.",
    visual: (
      <div className="flex h-full flex-col items-center justify-center bg-lll-bg">
        <p className="font-lll-display text-[40px] leading-none tracking-[0.12em] text-lll-accent">
          WINTER
        </p>
        <p className="mt-3 font-lll-body text-[11px] font-light tracking-[0.2em] text-lll-muted">
          1 of 4
        </p>
      </div>
    ),
  },

  /* TEXTURE */
  {
    kind: "TEXTURE",
    title: "Film grain",
    take: "A one-pixel noise over everything at about 3% opacity. Keeps the large dark areas from banding, and it is the only texture the UI inherits.",
    visual: <div className="h-full w-full bg-lll-surface tex-grain" />,
  },
  {
    kind: "TEXTURE",
    title: "Bulbs",
    take: "An 18px repeat of amber points. Used once, around the open detail panel, so the panel reads as a lit frame.",
    visual: <div className="h-full w-full bg-[#0b0720] tex-bulbs" />,
  },
  {
    kind: "TEXTURE",
    title: "Velvet",
    take: "Deep, soft, no edge. The argument for shadow-as-separation: the panel has no border, it just sits in front.",
    visual: (
      <div className="h-full w-full bg-[linear-gradient(100deg,#2a1a55_0%,#4a2470_30%,#2a1a55_55%,#53277a_80%,#2a1a55_100%)]" />
    ),
  },
  {
    kind: "TEXTURE",
    title: "Starfield",
    take: "Mostly nothing. The empty state is a field of stars with one line of type, because emptiness here is scenery rather than a failure.",
    visual: (
      <div className="relative h-full w-full bg-[#0b0720]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,233,189,.9)_0_1px,transparent_1.6px)] bg-[length:23px_19px] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(78,197,212,.8)_0_1px,transparent_2px)] bg-[length:41px_37px] opacity-50" />
      </div>
    ),
  },

  /* MATERIAL */
  {
    kind: "MATERIAL",
    title: "Neon tube",
    take: "A bright core with a wide dim halo. Copied exactly for focus: a 1px amber ring and a 60px glow, so keyboard focus is unmissable in the dark.",
    visual: (
      <div className="flex h-full items-center justify-center bg-[#0b0720]">
        <p
          className="font-lll-display text-[30px] tracking-[0.08em] text-[#ffd9a0]"
          style={{ textShadow: "0 0 6px #e0609a, 0 0 22px #e0609a, 0 0 48px #e0609a" }}
        >
          OPEN
        </p>
      </div>
    ),
  },
  {
    kind: "MATERIAL",
    title: "Brass",
    take: "Warm metal under a spotlight is where the amber actually comes from. It is a light source, not a surface, so it is never used as a fill behind text.",
    visual: (
      <div className="h-full w-full bg-[linear-gradient(115deg,#5c4218_0%,#c9992f_22%,#ffe9bd_38%,#c9992f_52%,#6b4c1d_72%,#e3bd6a_90%,#5c4218_100%)]" />
    ),
  },
  {
    kind: "MATERIAL",
    title: "Painted backdrop",
    take: "The film keeps showing you the paint. Gradients here are allowed to be obviously artificial, which is why the dusk has a hard magenta stop in it.",
    visual: (
      <div className="h-full w-full bg-[linear-gradient(0deg,#d2755f_0%,#7a3a63_22%,#40205c_46%,#1d1442_72%,#0d0a22_100%)]" />
    ),
  },

  /* INTERFACE */
  {
    kind: "INTERFACE",
    title: "Page head as a title card",
    take: "Centred, enormous, with air above and below and a tiny tracked line under it. No other page element is centred.",
    visual: (
      <div className="flex h-full flex-col items-center justify-center bg-lll-bg px-5 text-center">
        <p className="font-lll-body text-[9px] font-medium uppercase tracking-[0.4em] text-lll-accent">
          Chapter one
        </p>
        <p className="mt-3 font-lll-display text-[26px] leading-none tracking-[0.05em]">
          The District
        </p>
        <div className="mt-4 h-px w-16 bg-lll-accent/60" />
      </div>
    ),
  },
  {
    kind: "INTERFACE",
    title: "Pills, and the one that is lit",
    take: "Everything pressable is a pill. Rest is a faint outline; the current one is filled amber. Only one can be lit at a time.",
    visual: (
      <div className="flex h-full flex-wrap content-center items-center justify-center gap-2 bg-lll-bg px-5">
        {["All", "Jaipur", "Kota", "Udaipur"].map((d, i) => (
          <span
            key={d}
            className={
              i === 1
                ? "rounded-full bg-lll-accent px-4 py-1.5 font-lll-body text-[12px] font-medium text-[#171033]"
                : "rounded-full border border-lll-line px-4 py-1.5 font-lll-body text-[12px] font-light text-lll-muted"
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
    title: "Panel as a lit window",
    take: "The detail panel has no border on three sides. It is a lighter rectangle with a glow, exactly like a window seen from the street.",
    visual: (
      <div className="relative h-full bg-[#0b0720] p-5">
        <div className="absolute inset-0 bg-[#0b0720]" />
        <div className="relative ml-auto h-full w-3/5 rounded-[10px] bg-lll-surface glow-lamp p-3">
          <p className="font-lll-body text-[9px] uppercase tracking-[0.3em] text-lll-accent">
            District
          </p>
          <p className="mt-1 font-lll-display text-[20px]">Kota</p>
          <p className="mt-2 font-lll-body text-[11px] font-light text-lll-muted">
            Literacy 76.56% &mdash; highest in the state
          </p>
        </div>
      </div>
    ),
  },
  {
    kind: "INTERFACE",
    title: "Loading as a film leader",
    take: "A countdown with a sweeping hand instead of a spinner. The loading state keeps the mood rather than reverting to a default.",
    visual: (
      <div className="flex h-full items-center justify-center bg-[#0b0720]">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-lll-muted/40">
          <div className="absolute inset-0 rounded-full border-t-2 border-lll-accent" />
          <div className="absolute h-full w-px bg-lll-muted/30" />
          <div className="absolute h-px w-full bg-lll-muted/30" />
          <span className="relative font-lll-display text-[34px] text-lll-ink">3</span>
        </div>
      </div>
    ),
  },

  /* MOTION */
  {
    kind: "MOTION",
    title: "The long take",
    take: "The camera moves, the cut does not. Transitions here slide rather than fade: 220ms, ease-out, and the thing you were looking at stays on screen.",
    visual: (
      <div className="relative h-full overflow-hidden bg-lll-bg">
        <div className="absolute inset-y-0 left-0 flex w-full items-center gap-6 px-5">
          {["Jaipur", "Alwar", "Sikar"].map((n, i) => (
            <span
              key={n}
              className="font-lll-display text-[22px]"
              style={{ opacity: 1 - i * 0.35, transform: `translateX(${i * -4}px)` }}
            >
              {n}
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 right-0 w-20 bg-[linear-gradient(90deg,transparent,#171033)]" />
        <p className="absolute bottom-2 left-5 font-lll-body text-[10px] uppercase tracking-[0.26em] text-lll-muted">
          slide · 220ms · ease-out
        </p>
      </div>
    ),
  },
];

export default function Page() {
  return (
    <BoardShell
      skin={skin}
      name="Twilight and Streetlight"
      subtitle="02 · La La Land"
      lede={
        <>
          <p>
            The trick the film runs for two hours is warm light against a cool
            sky. Everything else follows from it: the dress colours only work
            because the dusk behind them is desaturated, and the amber of a
            street lamp only reads as magic because there are three of them in
            the whole frame.
          </p>
          <p className="mt-3">
            So this board is mostly dark. The interesting question it answers is
            not &ldquo;what colour is the button&rdquo; but &ldquo;how little
            light can you spend and still have a hierarchy&rdquo;. The answer
            turned out to be: one accent, one glow, and a great deal of space.
          </p>
        </>
      }
      sourcing="No stills, no stock photography. Every scene here is redrawn in SVG from memory of the film's staging, and every gradient and texture is CSS, so the board carries no licence and ships inside the repo. Figures quoted are the real 2011 Census figures."
      artifacts={ARTIFACTS}
      crossed={[
        { label: "Accent", detail: "Amber #F2B544, 9.46:1 on the background. It is the only light source in the system: primary action, current item, focus ring." },
        { label: "Separation", detail: "Shadow and distance, not lines. The border role is the least-used colour in the set, which is the opposite of the Loki system." },
        { label: "Shape", detail: "Everything pressable is a pill; everything that holds content is a 14px letterbox. Nothing is square." },
        { label: "Space", detail: "96px page padding and 56px between sections, taken from the planetarium artifact. Air is the main structural device." },
        { label: "Focus", detail: "The neon tube, literally: a 1px amber ring plus a 60px halo, so keyboard focus survives on a dark page." },
        { label: "Rejected", detail: "Pure white text (reads as a screen, not as light) and the four dress primaries as UI colour, since four equal colours have no hierarchy." },
      ]}
    />
  );
}
