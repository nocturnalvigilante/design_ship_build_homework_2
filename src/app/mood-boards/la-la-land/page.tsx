import type { Metadata } from "next";
import { BoardShell, Chip, Magnified, type Artifact, type Skin } from "@/components/board";

export const metadata: Metadata = {
  title: "Mood board 02 · Four Seasons, One Magic Hour",
  description:
    "Twenty-eight artifacts: the four seasonal palettes, the magic-hour gradient, anamorphic flare, 35mm grain and the flat epilogue.",
};

const skin: Skin = {
  page: "min-h-screen bg-lll-bg text-lll-ink font-lll-body tex-magichour",
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
  shell: "skin-lll",
};

/* ------------------------------- drawn scenes ------------------------------ */

function Griffith() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="Two figures on a terrace below a domed observatory, under a sky that runs cyan to magenta to amber">
      <defs>
        <linearGradient id="lll-mh" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0c1b33" />
          <stop offset="0.3" stopColor="#1f3f6b" />
          <stop offset="0.55" stopColor="#5b3a76" />
          <stop offset="0.78" stopColor="#b9497e" />
          <stop offset="1" stopColor="#e0a05e" />
        </linearGradient>
      </defs>
      <rect width="300" height="176" fill="url(#lll-mh)" />
      {[[38, 18], [82, 34], [128, 14], [176, 28], [222, 16], [268, 38]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 2 ? 1.5 : 1} fill="#dff3ff" opacity="0.8" />
      ))}
      <g fill="#140d26">
        <rect x="84" y="88" width="132" height="34" />
        <circle cx="150" cy="88" r="22" />
        <rect x="148.5" y="56" width="3" height="12" />
        <rect x="104" y="76" width="16" height="16" />
        <rect x="180" y="76" width="16" height="16" />
        <rect x="56" y="120" width="188" height="6" />
      </g>
      <g fill="#f2b544">
        <rect x="96" y="98" width="5" height="7" />
        <rect x="112" y="98" width="5" height="7" />
        <rect x="186" y="98" width="5" height="7" />
        <rect x="202" y="98" width="5" height="7" />
      </g>
      <rect y="126" width="300" height="50" fill="#140d26" />
      <g fill="#070412">
        <ellipse cx="136" cy="150" rx="7" ry="20" />
        <ellipse cx="156" cy="150" rx="9" ry="20" />
        <circle cx="136" cy="130" r="5" />
        <circle cx="156" cy="130" r="5" />
      </g>
      <rect x="20" y="99" width="260" height="1.4" fill="#6fd3f2" opacity="0.65" />
    </svg>
  );
}

function Freeway() {
  const cars = [
    [12, 108, "#e0609a"], [48, 120, "#4ec5d4"], [86, 104, "#f2b544"],
    [122, 124, "#ffd9a0"], [158, 106, "#7b5ea7"], [194, 122, "#2f8f5b"],
    [230, 108, "#2d6cc0"], [262, 126, "#d23a3a"],
  ] as const;
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="Cars in flat primary colours stopped on an overpass in flat daylight">
      <rect width="300" height="176" fill="#63b2de" />
      <rect y="96" width="300" height="80" fill="#8f8c95" />
      <rect y="92" width="300" height="5" fill="#d3cfd8" />
      {Array.from({ length: 9 }).map((_, i) => (
        <rect key={i} x={i * 36 + 6} y="142" width="20" height="3" fill="#f2ece0" />
      ))}
      {cars.map(([x, y, c], i) => (
        <g key={i}>
          <rect x={x} y={y} width="30" height="13" rx="4" fill={c} />
          <rect x={x + 6} y={y - 6} width="17" height="8" rx="3" fill={c} opacity="0.85" />
          <circle cx={x + 7} cy={y + 14} r="3" fill="#2a2338" />
          <circle cx={x + 23} cy={y + 14} r="3" fill="#2a2338" />
        </g>
      ))}
      <g fill="#e8f3fa">
        <ellipse cx="58" cy="32" rx="26" ry="10" />
        <ellipse cx="218" cy="22" rx="32" ry="9" />
      </g>
    </svg>
  );
}

function Spotlight() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A single hard overhead spot picking out a pianist, everything outside it black">
      <rect width="300" height="176" fill="#07040f" />
      <path d="M150 0 L96 176 L204 176 Z" fill="#f2b544" opacity="0.14" />
      <circle cx="150" cy="150" r="54" fill="#f2b544" opacity="0.1" />
      <circle cx="150" cy="3" r="8" fill="#ffe9bd" />
      <g fill="#050309">
        <rect x="92" y="112" width="116" height="12" />
        <rect x="100" y="124" width="8" height="34" />
        <rect x="192" y="124" width="8" height="34" />
        <rect x="104" y="104" width="92" height="9" />
      </g>
      {Array.from({ length: 14 }).map((_, i) => (
        <rect key={i} x={106 + i * 6.6} y="104" width="4.6" height="9" fill="#efe6d4" />
      ))}
      <g fill="#161029">
        <ellipse cx="150" cy="92" rx="13" ry="18" />
        <circle cx="150" cy="70" r="9" />
        <rect x="132" y="86" width="12" height="4" rx="2" />
        <rect x="156" y="86" width="12" height="4" rx="2" />
      </g>
      <rect x="26" y="70" width="248" height="1.3" fill="#6fd3f2" opacity="0.5" />
    </svg>
  );
}

function Pier() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A lit pier running out over dark water, its lamps repeating along a line">
      <defs>
        <linearGradient id="lll-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b1340" />
          <stop offset="1" stopColor="#0a0720" />
        </linearGradient>
      </defs>
      <rect width="300" height="110" fill="#2a1c50" />
      <rect width="300" height="110" fill="#b9497e" opacity="0.18" />
      <rect y="106" width="300" height="70" fill="url(#lll-sea)" />
      <g stroke="#332563" strokeWidth="4">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={i} x1={26 + i * 32} y1="100" x2={26 + i * 32} y2="138" />
        ))}
      </g>
      <rect x="12" y="94" width="276" height="8" fill="#3a2a70" />
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={i}>
          <circle cx={18 + i * 24} cy="88" r="4" fill="#f2b544" />
          <circle cx={18 + i * 24} cy="88" r="11" fill="#f2b544" opacity="0.2" />
          <rect x={17 + i * 24} y="124" width="2" height="36" fill="#f2b544" opacity="0.22" />
        </g>
      ))}
    </svg>
  );
}

function Planetarium() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="Two dancers floating among stars inside a dome, with almost nothing else in frame">
      <rect width="300" height="176" fill="#07051a" />
      {Array.from({ length: 70 }).map((_, i) => {
        const x = (i * 97) % 300;
        const y = (i * 53) % 176;
        return <circle key={i} cx={x} cy={y} r={i % 7 === 0 ? 1.8 : i % 3 === 0 ? 1.2 : 0.7} fill="#ffe9bd" opacity={0.3 + ((i % 5) / 7)} />;
      })}
      <ellipse cx="150" cy="88" rx="110" ry="62" fill="none" stroke="#4ec5d4" strokeWidth="0.6" opacity="0.45" />
      <ellipse cx="150" cy="88" rx="74" ry="40" fill="none" stroke="#7b5ea7" strokeWidth="0.6" opacity="0.45" />
      <g fill="#120c28" stroke="#f2b544" strokeWidth="1">
        <ellipse cx="136" cy="94" rx="7" ry="20" />
        <circle cx="136" cy="70" r="6" />
        <ellipse cx="164" cy="90" rx="9" ry="22" />
        <circle cx="164" cy="64" r="6" />
      </g>
      <path d="M128 112 q22 16 44 -2" stroke="#f2b544" strokeWidth="1" fill="none" opacity="0.65" />
    </svg>
  );
}

function Epilogue() {
  return (
    <svg viewBox="0 0 300 176" className="h-full w-full" role="img" aria-label="A deliberately flat painted backdrop of a city skyline with no depth or shading at all">
      <rect width="300" height="176" fill="#2b3f7a" />
      <rect y="0" width="300" height="70" fill="#38539a" />
      <circle cx="248" cy="34" r="17" fill="#ffd9a0" />
      <g fill="#1c2a58">
        {[[8, 96, 26], [40, 76, 22], [68, 110, 30], [104, 64, 26], [136, 96, 20],
          [162, 82, 28], [196, 108, 24], [226, 72, 22], [254, 100, 34]].map(([x, y, w], i) => (
          <rect key={i} x={x} y={y} width={w} height={176 - y} />
        ))}
      </g>
      <g fill="#f2b544">
        {Array.from({ length: 26 }).map((_, i) => (
          <rect key={i} x={12 + ((i * 29) % 272)} y={88 + ((i * 17) % 60)} width="4" height="5" />
        ))}
      </g>
      <rect y="150" width="300" height="26" fill="#152044" />
      <g fill="#e7a9c4">
        {[36, 96, 156, 216, 272].map((x) => (
          <circle key={x} cx={x} cy="150" r="4" />
        ))}
      </g>
    </svg>
  );
}

function TypeCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col justify-center bg-lll-surface px-5">{children}</div>
  );
}

function Season({ cls, name, hex, note }: { cls: string; name: string; hex: string; note: string }) {
  return (
    <div className={`flex h-full w-full flex-col justify-end ${cls}`}>
      <div className="bg-black/35 px-3 py-2 backdrop-blur-[1px]">
        <p className="font-lll-display text-[17px] tracking-[0.1em] text-lll-ink">{name}</p>
        <p className="font-mono text-[10px] tracking-wider text-lll-ink/70">{hex}</p>
        <p className="font-lll-body text-[11px] font-light text-lll-ink/80">{note}</p>
      </div>
    </div>
  );
}

const ARTIFACTS: Artifact[] = [
  /* IMAGE */
  {
    kind: "IMAGE",
    title: "Griffith, at magic hour exactly",
    take: "Not dusk in general. Cyan at the top, magenta at the horizon, amber lamps already on, all in one frame. My first pass went navy straight to amber and lost the magenta, which is the part that makes it the film.",
    visual: <Griffith />,
  },
  {
    kind: "IMAGE",
    title: "The overpass, in flat daylight",
    take: "The opening number is the outlier: hard sun, no modelling, eight saturated primaries at once. It is there to make everything after it feel lit by comparison.",
    visual: <Freeway />,
  },
  {
    kind: "IMAGE",
    title: "One hard spot",
    take: "A literal iris, with the rest of the room at black. This is hierarchy done entirely with light, and it is why the system can get away with almost no borders.",
    visual: <Spotlight />,
  },
  {
    kind: "IMAGE",
    title: "Lamps along a line",
    take: "One amber point, repeated at a fixed interval into the dark. Became the tab marker and the current-item dot.",
    visual: <Pier />,
  },
  {
    kind: "IMAGE",
    title: "The planetarium",
    take: "Two figures and no ground under them. Permission for very large empty areas, which is where the 96px page padding comes from.",
    visual: <Planetarium />,
  },
  {
    kind: "IMAGE",
    title: "The epilogue",
    take: "A deliberate style break: flat, painted, openly artificial, no depth anywhere. The system takes this as its second register, used for anything static that is not asking to be touched.",
    visual: <Epilogue />,
  },

  /* COLOUR */
  {
    kind: "COLOUR",
    title: "Magic hour, five stops",
    take: "The background is a gradient with a hard magenta band in it, not a two-stop fade. Sampling the five stops is what fixed the first version of this board.",
    visual: (
      <div className="h-full w-full">
        <div className="h-28 w-full tex-magichour" />
        <div className="grid h-16 grid-cols-5">
          <Chip hex="#0c0a24" name="zenith" tone="dark" />
          <Chip hex="#1a1440" name="field" tone="dark" />
          <Chip hex="#432560" name="band" tone="dark" />
          <Chip hex="#8d3a6a" name="horizon" tone="dark" />
          <Chip hex="#c86a6a" name="last" tone="dark" />
        </div>
      </div>
    ),
    wide: true,
  },
  {
    kind: "COLOUR",
    title: "Winter",
    take: "Chapter one is cool and green-blue. A title card announces it, which means the palette change is a stated event rather than a drift.",
    visual: <Season cls="tex-winter" name="Winter" hex="#4E7F8C" note="4.14:1 — large text and fills" />,
  },
  {
    kind: "COLOUR",
    title: "Spring",
    take: "Pastel pink against the same dark field. The lightest of the four, and the only one that can carry small text at 9.51:1.",
    visual: <Season cls="tex-spring" name="Spring" hex="#E7A9C4" note="9.51:1 — may carry text" />,
  },
  {
    kind: "COLOUR",
    title: "Summer",
    take: "The season where the chapter colour and the accent are the same amber. That collision is the point: summer is when the film is at its most lit.",
    visual: <Season cls="tex-summer" name="Summer" hex="#F2B544" note="10.03:1 — the accent itself" />,
  },
  {
    kind: "COLOUR",
    title: "Fall",
    take: "Drained, brick-brown, the lowest-contrast of the four. The system uses it for anything historical or superseded.",
    visual: <Season cls="tex-fall" name="Fall" hex="#B5705A" note="4.75:1 — may carry large text" />,
  },
  {
    kind: "COLOUR",
    title: "Lamp amber, and why the text is cream",
    take: "The accent reads 10.03:1 on the page. Pure white would read 17.8:1 and look like a screen; the cream reads 16.3:1 and looks like light. Both pass, so the choice is about the mood, not the maths.",
    visual: (
      <div className="grid h-full grid-cols-3">
        <div className="flex flex-col items-center justify-center bg-lll-bg">
          <div className="h-10 w-10 rounded-full bg-lll-accent shadow-[0_0_38px_10px_rgba(242,181,68,.35)]" />
          <p className="mt-2 font-mono text-[9px] text-lll-muted">#F2B544</p>
        </div>
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
    take: "Extreme stroke contrast that works at 70px and collapses under 20px. It is the display role and it is never allowed near body text.",
    visual: (
      <TypeCard>
        <p className="font-lll-display text-[44px] leading-none tracking-[0.04em]">La La Land</p>
        <p className="mt-3 font-lll-body text-[10px] font-medium uppercase tracking-[0.3em] text-lll-muted">
          Bodoni Moda · 500 · +0.04em
        </p>
      </TypeCard>
    ),
  },
  {
    kind: "TYPE",
    title: "The season card",
    take: "One word, enormous, alone on black, with air above and below. It is a typographic beat rather than a heading, and the system copies it for section openers.",
    visual: (
      <div className="flex h-full flex-col items-center justify-center bg-[#07051a]">
        <p className="font-lll-display text-[42px] leading-none tracking-[0.14em] text-lll-ink">
          SUMMER
        </p>
        <div className="mt-4 h-px w-14 bg-lll-accent" />
      </div>
    ),
  },
  {
    kind: "TYPE",
    title: "CinemaScope credits",
    take: "Very small, very widely tracked, centred. This is the label role almost unchanged: 11px at 0.26em.",
    visual: (
      <div className="flex h-full flex-col items-center justify-center bg-[#0b0720] px-6">
        <p className="font-lll-body text-[9px] font-medium uppercase tracking-[0.4em] text-lll-muted">
          Census of India
        </p>
        <p className="mt-3 font-lll-display text-[20px] tracking-[0.1em]">640 DISTRICTS</p>
        <p className="mt-3 font-lll-body text-[9px] font-medium uppercase tracking-[0.4em] text-lll-muted">
          Thirty-five states
        </p>
      </div>
    ),
  },
  {
    kind: "TYPE",
    title: "Letterboard",
    take: "Fixed-width slots, so the line length is decided before the words are. Became the fixed numeric column in the district table.",
    visual: (
      <div className="flex h-full items-center justify-center bg-[#14102e] px-4">
        <div className="grid grid-cols-7 gap-[3px]">
          {"KERALA 1408 1".split("").map((ch, i) => (
            <span
              key={i}
              className="flex h-7 w-7 items-center justify-center bg-[#0b0720] font-lll-body text-[13px] font-medium text-lll-ink"
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
    title: "FIVE YEARS LATER",
    take: "The one card that is not a season. A single tracked line can carry a whole act change, which is the argument for having exactly one label style and trusting it.",
    visual: (
      <div className="flex h-full items-center justify-center bg-[#07051a] px-6">
        <p className="text-center font-lll-body text-[11px] font-medium uppercase leading-[2] tracking-[0.46em] text-lll-ink">
          Five
          <br />
          years
          <br />
          later
        </p>
      </div>
    ),
  },

  /* TEXTURE */
  {
    kind: "TEXTURE",
    title: "35mm grain",
    take: "A one-pixel noise at about 4% over everything. It stops the large dark areas banding, and it is the only texture the interface inherits. Shown at its own scale and magnified, because at its own scale it is meant to be invisible.",
    visual: <Magnified ship="bg-lll-surface tex-grain" zoom="bg-lll-surface tex-grain-4x" dark />,
  },
  {
    kind: "TEXTURE",
    title: "Anamorphic flare",
    take: "A flat horizontal cyan streak through a bright point, from the squeezed lens. Copied exactly: the primary button grows one on hover and focus, and nothing else does.",
    visual: (
      <div className="flex h-full items-center justify-center bg-[#0b0720]">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-lll-accent shadow-[0_0_40px_12px_rgba(242,181,68,.4)]" />
          <span className="absolute left-1/2 top-1/2 h-[1.5px] w-[260px] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,#6fd3f2_18%,#ffffff_50%,#6fd3f2_82%,transparent)]" />
        </div>
      </div>
    ),
  },
  {
    kind: "TEXTURE",
    title: "Shadow is violet",
    take: "Nothing in this film goes to neutral grey or to true black. The muted role is therefore a violet, which is why captions here never look like a default stylesheet.",
    visual: (
      <div className="grid h-full grid-cols-3">
        <Chip hex="#7a7a7a" name="grey" note="never used" tone="dark" />
        <Chip hex="#b3a8d2" name="muted" note="8.26:1" tone="dark" />
        <Chip hex="#3f3074" name="border" note="1.65:1" tone="dark" />
      </div>
    ),
  },
  {
    kind: "TEXTURE",
    title: "Marquee bulbs",
    take: "An 18px repeat of amber points around a frame. Used once, around the open detail panel, so the panel reads as something lit rather than something layered.",
    visual: (
      <div className="relative h-full w-full bg-[#0b0720] p-4">
        <div className="relative h-full w-full rounded-[8px] border border-lll-accent/50">
          {(["top-0", "bottom-0"] as const).map((edge) => (
            <div
              key={edge}
              className={`absolute ${edge} left-0 right-0 flex -translate-y-1/2 justify-between px-1 ${edge === "bottom-0" ? "translate-y-1/2" : ""}`}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="block h-[7px] w-[7px] rounded-full bg-lll-accent shadow-[0_0_7px_#f2b544]" />
              ))}
            </div>
          ))}
          {(["left-0", "right-0"] as const).map((edge) => (
            <div
              key={edge}
              className={`absolute ${edge} inset-y-0 flex w-0 flex-col justify-between py-1 ${edge === "left-0" ? "-translate-x-1/2" : "translate-x-1/2"}`}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i} className="block h-[7px] w-[7px] rounded-full bg-lll-accent shadow-[0_0_7px_#f2b544]" />
              ))}
            </div>
          ))}
        </div>
      </div>
    ),
  },

  /* MATERIAL */
  {
    kind: "MATERIAL",
    title: "Neon tube",
    take: "A bright core inside a wide dim halo. That is the focus ring exactly: a 1px amber line plus a 34px glow, which is the only thing that survives on a page this dark.",
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
    title: "Brass under a lamp",
    take: "Where the amber actually comes from. It is a light source rather than a surface, so it is never used as a fill behind text.",
    visual: (
      <div className="h-full w-full bg-[linear-gradient(115deg,#5c4218_0%,#c9992f_22%,#ffe9bd_38%,#c9992f_52%,#6b4c1d_72%,#e3bd6a_90%,#5c4218_100%)]" />
    ),
  },
  {
    kind: "MATERIAL",
    title: "Flat paint",
    take: "In the epilogue the film stops pretending the backdrop is a place. The system keeps that: anything that is not interactive is drawn flat, with no glow at all.",
    visual: (
      <div className="grid h-full grid-cols-4">
        <div className="bg-[#2b3f7a]" />
        <div className="bg-[#b9497e]" />
        <div className="bg-[#e7a9c4]" />
        <div className="bg-[#f2b544]" />
      </div>
    ),
  },

  /* INTERFACE */
  {
    kind: "INTERFACE",
    title: "Page head as a title card",
    take: "Centred, large, with a season above it and a rule below. It is the only centred element in the system, which is what makes it read as a card rather than as a heading.",
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
    take: "Everything pressable is a pill. Rest is a faint outline, current is filled amber, and the primary one carries the flare on hover.",
    visual: (
      <div className="flex h-full flex-wrap content-center items-center justify-center gap-2 bg-lll-bg px-5">
        <span className="flare relative rounded-full bg-lll-accent px-4 py-1.5 font-lll-body text-[12px] font-medium text-[#14102e]">
          Kerala
        </span>
        {["Goa", "Assam", "Bihar"].map((d) => (
          <span
            key={d}
            className="rounded-full border border-lll-line px-4 py-1.5 font-lll-body text-[12px] font-light text-lll-muted"
          >
            {d}
          </span>
        ))}
      </div>
    ),
  },
  {
    kind: "INTERFACE",
    title: "2.55:1 as a layout rule",
    take: "The frame is wider than anything needs to be, so content sits in a column inside it and the rest stays empty. That is a constraint the other two systems do not have.",
    visual: (
      <div className="flex h-full items-center justify-center bg-[#07051a] px-3">
        <div className="relative w-full" style={{ aspectRatio: "2.55 / 1" }}>
          <div className="absolute inset-0 border border-lll-line" />
          <div className="absolute inset-y-0 left-[18%] w-[44%] border-x border-dashed border-lll-accent/50" />
          <div className="absolute inset-0 flex items-center">
            <p className="ml-[20%] font-lll-body text-[10px] uppercase tracking-[0.26em] text-lll-muted">
              content column
            </p>
          </div>
        </div>
      </div>
    ),
  },

  /* MOTION */
  {
    kind: "MOTION",
    title: "The long take",
    take: "The camera moves, the cut does not. Transitions slide over 220ms and the thing you were looking at stays on screen; nothing in this system cross-fades.",
    visual: (
      <div className="relative h-full overflow-hidden bg-lll-bg">
        <div className="absolute inset-y-0 left-0 flex w-full items-center gap-6 px-5">
          {["Kerala", "Goa", "Punjab"].map((n, i) => (
            <span
              key={n}
              className="font-lll-display text-[22px]"
              style={{ opacity: 1 - i * 0.35, transform: `translateX(${i * -4}px)` }}
            >
              {n}
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 right-0 w-20 bg-[linear-gradient(90deg,transparent,#14102e)]" />
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
      mood="la-la-land"
      name="Four Seasons, One Magic Hour"
      subtitle="02 · La La Land"
      lede={
        <>
          <p>
            My first version of this board was &ldquo;amber on navy&rdquo;, and
            that is the poster, not the film. The film is four palettes, each
            announced by a title card, all hung on the same fifteen minutes of
            dusk: cyan at the top of the frame, a hard magenta band at the
            horizon, and the street lamps already lit underneath it.
          </p>
          <p className="mt-3">
            Three other things turned out to matter more than the colour. It is
            shot anamorphic at 2.55:1, so the frame is wider than the content
            and the blue horizontal flare is a signature rather than an
            accident. Shadows are violet and never neutral. And the epilogue
            drops the lighting entirely for flat painted artifice, which gives
            the system a legitimate second register for anything that is not
            asking to be touched.
          </p>
        </>
      }
      sourcing="No stills and no stock photography. Every scene is redrawn in SVG from the film's staging, and every gradient and texture is CSS, so the board carries no licence and ships inside the repo. Figures quoted are the real 2011 Census figures."
      artifacts={ARTIFACTS}
      crossed={[
        { label: "Accent", detail: "Amber #F2B544 at 10.03:1. The only light source in the system: primary action, current item, focus ring." },
        { label: "Background", detail: "A five-stop magic-hour gradient with a magenta band, not a two-stop fade. The single biggest correction on this board." },
        { label: "Chapters", detail: "Four seasonal colours for sections, announced rather than drifted into. None of them is ever a control." },
        { label: "Flare", detail: "A 1.5px cyan streak across the primary action on hover and focus, from artifact 19. The one hard edge in the system." },
        { label: "Separation", detail: "Glow and distance. The border role is the least-used colour here, which is the opposite of Hokusai." },
        { label: "Second register", detail: "The epilogue's flat paint, used for anything static, so not every surface has to glow." },
      ]}
    />
  );
}
