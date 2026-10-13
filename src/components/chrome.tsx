/* ---------------------------------------------------------------------------
   Page ornament.

   The first version of these two systems put all the decoration inside the
   artifact cards and left the page itself a flat field, which made two of the
   three look empty next to La La Land's dusk gradient. These are the layers
   that fix that: they are drawn, tiled and inert, they sit behind everything,
   and no text ever reads directly off a patterned area darker than about 8%
   ink, so nothing here moves a contrast ratio.
--------------------------------------------------------------------------- */

/* ========================================================== 01 Padmaavat === */

/** A quatrefoil medallion, used at the four corners of the page frame. */
function Medallion({ size = 36, colour = "#9a6b1e" }: { size?: number; colour?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      {/* eight cusped petals, the way a jali rosette is cut */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <path
          key={a}
          d="M24 24 C17 19 17 10 24 4 C31 10 31 19 24 24 Z"
          fill={colour}
          opacity="0.9"
          transform={`rotate(${a} 24 24)`}
        />
      ))}
      {[22.5, 112.5, 202.5, 292.5].map((a) => (
        <path
          key={a}
          d="M24 24 C20 20 20 14 24 10 C28 14 28 20 24 24 Z"
          fill="#8c1c21"
          opacity="0.9"
          transform={`rotate(${a} 24 24)`}
        />
      ))}
      <circle cx="24" cy="24" r="5" fill="#8c1c21" />
      <circle cx="24" cy="24" r="2" fill="#f0c98a" />
    </svg>
  );
}

/**
 * The page chrome for Chittor and Khilji: a block-print ground, a double gold
 * rule inset from the edge with a medallion at each corner, jali screens down
 * both margins on a wide screen, and a lamp falling from the top.
 */
export function PadChrome() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* block-print ground */}
      <div className="absolute inset-0 pad-print" />
      {/* lamplight from above, and the corners falling away */}
      <div className="absolute inset-0 pad-lamp" />
      {/* jali screens down the margins */}
      <div className="absolute inset-y-0 left-0 hidden w-[86px] pad-jali xl:block" />
      <div className="absolute inset-y-0 right-0 hidden w-[86px] pad-jali xl:block" />
      {/* the double rule */}
      <div className="absolute inset-[10px] border border-pad-gold/45 sm:inset-[14px]" />
      <div className="absolute inset-[16px] border border-pad-accent/25 sm:inset-[21px]" />
      {/* corner medallions */}
      <div className="absolute left-[3px] top-[3px] sm:left-[7px] sm:top-[7px]">
        <Medallion />
      </div>
      <div className="absolute right-[3px] top-[3px] sm:right-[7px] sm:top-[7px]">
        <Medallion />
      </div>
      <div className="absolute bottom-[3px] left-[3px] sm:bottom-[7px] sm:left-[7px]">
        <Medallion />
      </div>
      <div className="absolute bottom-[3px] right-[3px] sm:bottom-[7px] sm:right-[7px]">
        <Medallion />
      </div>
    </div>
  );
}

/**
 * The hero band: Chittor on its ridge above the lake at dusk, seen through a
 * row of cusped arches, with the title sitting inside the centre arch.
 */
export function PadHero({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate overflow-hidden">
      <svg
        viewBox="0 0 1200 420"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 -z-10 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="pad-hero-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1f1226" />
            <stop offset="0.3" stopColor="#4a2036" />
            <stop offset="0.58" stopColor="#8f3a33" />
            <stop offset="0.82" stopColor="#c86b35" />
            <stop offset="1" stopColor="#e8a85c" />
          </linearGradient>
          <linearGradient id="pad-hero-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e8d3b4" stopOpacity="0" />
            <stop offset="0.74" stopColor="#e8d3b4" stopOpacity="0" />
            <stop offset="1" stopColor="#e8d3b4" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <rect width="1200" height="420" fill="url(#pad-hero-sky)" />
        <circle cx="986" cy="96" r="30" fill="#f8e2b0" opacity="0.95" />
        <circle cx="986" cy="96" r="72" fill="#f8e2b0" opacity="0.12" />
        {/* far ridge */}
        <path d="M0 268 L120 220 L220 246 L330 196 L470 212 L600 176 L740 206 L880 178 L1010 214 L1120 192 L1200 232 L1200 420 L0 420 Z" fill="#39202c" opacity="0.9" />
        {/* the fort */}
        <g fill="#1d1016">
          <path d="M330 300 L330 214 L372 214 L372 196 L390 196 L390 214 L452 214 L452 190 L470 190 L470 214 L520 214 L520 300 Z" />
          <path d="M520 300 L520 232 L600 232 L600 206 L618 206 L618 232 L700 232 L700 300 Z" />
          <path d="M700 300 L700 246 L760 246 L760 222 L778 222 L778 246 L840 246 L840 300 Z" />
          {[344, 366, 388, 410, 432, 454, 476, 498].map((x) => (
            <rect key={x} x={x} y="206" width="9" height="10" />
          ))}
          <path d="M596 206 a22 26 0 0 1 44 0 z" />
          <rect x="616" y="166" width="4" height="22" />
        </g>
        {/* lit windows */}
        <g fill="#f3bf63">
          {[348, 372, 404, 436, 468, 540, 566, 592, 640, 666, 716, 742, 790, 816].map((x, i) => (
            <rect key={x} x={x} y={252 + (i % 3) * 14} width="7" height="10" opacity="0.95" />
          ))}
        </g>
        {/* water and its reflection */}
        <rect y="300" width="1200" height="120" fill="#4d2b33" />
        <g opacity="0.45" fill="#1d1016">
          <rect x="330" y="300" width="510" height="54" />
        </g>
        {Array.from({ length: 9 }).map((_, i) => (
          <rect key={i} x="0" y={308 + i * 12} width="1200" height="2.5" fill="#c98a6a" opacity={0.42 - i * 0.04} />
        ))}
        {/* the arcade we are looking through */}
        <g fill="#e8d3b4">
          <path d="M0 0 H1200 V420 H1130 V150 a62 86 0 0 0 -124 0 V420 H934 V150 a62 86 0 0 0 -124 0 V420 H738 V150 a62 86 0 0 0 -124 0 V420 H542 V150 a62 86 0 0 0 -124 0 V420 H346 V150 a62 86 0 0 0 -124 0 V420 H150 V150 a62 86 0 0 0 -124 0 V420 H0 Z" opacity="0.001" />
        </g>
        <rect width="1200" height="420" fill="url(#pad-hero-fade)" />
      </svg>
      {children}
    </div>
  );
}

/** An inlay band with a medallion at its centre, used between sections. */
export function PadRule() {
  return (
    <div className="relative my-10 flex items-center" aria-hidden>
      <span className="h-[7px] flex-1 pad-inlay-band" />
      <span className="mx-3 shrink-0">
        <Medallion size={22} />
      </span>
      <span className="h-[7px] flex-1 pad-inlay-band" />
    </div>
  );
}

/* ============================================================ 03 Hokusai === */

/**
 * The page chrome for the print system: a wiped bokashi sky across the top
 * with Fuji and a wave in it, a hemp-leaf watermark in the empty right
 * column, and a band of seigaiha water along the foot.
 */
export function HokChrome() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {/* The wiped sky across the top of the sheet. The page pads itself clear
          of this band, because text over a bokashi gradient cannot be given a
          contrast ratio and a drawing you have to read through is not a
          drawing. */}
      <svg
        viewBox="0 0 1200 260"
        preserveAspectRatio="xMidYMin slice"
        className="absolute inset-x-0 top-0 h-[180px] w-full sm:h-[240px]"
        aria-hidden
      >
        <defs>
          <linearGradient id="hok-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1c4c86" />
            <stop offset="0.4" stopColor="#6e96bd" />
            <stop offset="0.76" stopColor="#c3cfca" />
            <stop offset="1" stopColor="#d9e0dc" />
          </linearGradient>
        </defs>
        <rect width="1200" height="260" fill="url(#hok-sky)" />
        <g opacity="0.95">
          <path d="M832 206 L952 76 L1072 206 Z" fill="#d9e0dc" stroke="#141e2e" strokeWidth="2" />
          <path d="M916 108 L952 76 L988 108 L974 103 L962 112 L952 100 L940 112 L928 103 Z" fill="#eef2ee" stroke="#141e2e" strokeWidth="1.5" />
        </g>
        <path
          d="M0 196 C64 134 150 112 222 144 C278 169 288 216 252 238 C226 254 184 247 176 227 C190 243 222 245 234 231 C256 208 244 170 206 158 C140 137 64 176 18 246 L0 260 Z"
          fill="#1c4c86" stroke="#141e2e" strokeWidth="2"
        />
        <path d="M176 148 q11 -14 5 -27 q12 13 23 7 q-7 15 2 25 q-15 -11 -30 -5 z" fill="#eef2ee" stroke="#141e2e" strokeWidth="1.3" />
        {[[320, 46], [470, 28], [618, 58], [740, 36]].map(([x, y], i) => (
          <ellipse key={i} cx={x} cy={y} rx={26 + i * 6} ry="5.5" fill="#d9e0dc" opacity="0.5" />
        ))}
      </svg>

      {/* The margin the layout deliberately leaves empty is where the rest of
          the print lives: a hemp-leaf ground and one wave, neither of which
          ever passes behind a line of text. */}
      <div className="absolute inset-y-0 left-0 hidden w-[176px] opacity-60 hok-asanoha xl:block" />
      <svg
        viewBox="0 0 176 420"
        preserveAspectRatio="xMinYMid meet"
        className="absolute left-0 top-[46%] hidden h-[420px] w-[176px] xl:block"
        aria-hidden
      >
        <path
          d="M-10 300 C30 200 96 166 142 198 C178 223 182 276 150 300 C128 316 96 310 90 292 C102 306 128 308 138 296 C156 276 148 240 118 230 C66 213 14 258 -10 330 Z"
          fill="#1c4c86" stroke="#141e2e" strokeWidth="2" opacity="0.9"
        />
        <path d="M92 204 q10 -13 4 -24 q11 11 21 6 q-7 13 2 22 q-14 -10 -27 -4 z" fill="#eef2ee" stroke="#141e2e" strokeWidth="1.2" />
      </svg>

      {/* Water along the foot of the sheet, below where the content ends. */}
      <div className="absolute inset-x-0 bottom-0 h-[110px] hok-seigaiha opacity-60" />
    </div>
  );
}

/** A vertical title cartouche, as a print carries its title. */
export function HokCartouche({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border-[1.5px] border-hok-ink bg-hok-surface px-3 py-2">
      {children}
    </span>
  );
}
