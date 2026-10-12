import { PALETTES } from "./palette";
import type { MoodId } from "./palette";

// The full token set behind each design system. The mood boards decide these,
// the systems publish them, and the India census site consumes the Padmaavat
// set. Every colour has a job written next to it, because an unexplained
// colour is the first thing a reviewer cuts.

export interface ColourRole {
  role: "background" | "surface" | "text" | "muted" | "border" | "accent";
  hex: string;
  job: string;
}

export interface TypeRole {
  role: "display" | "heading" | "body" | "label";
  family: string;
  cssVar: string;
  size: string;
  weight: number;
  tracking: string;
  leading: string;
  use: string;
  sample: string;
}

export interface SystemTokens {
  mood: MoodId;
  colours: ColourRole[];
  type: TypeRole[];
  spacing: { name: string; px: number; use: string }[];
  radii: { name: string; css: string; use: string }[];
  borders: { name: string; css: string; use: string }[];
  shadows: { name: string; css: string; use: string }[];
  shapeRationale: string;
}

export const TOKENS: Record<MoodId, SystemTokens> = {
  /* ------------------------------------------------------------ 01 Padmaavat */
  padmaavat: {
    mood: "padmaavat",
    colours: [
      { role: "background", hex: PALETTES.padmaavat.background, job: "Lamp-lit ivory. The hall the whole page stands in." },
      { role: "surface", hex: PALETTES.padmaavat.surface, job: "A lit panel inside it. Cards and the record drawer only." },
      { role: "text", hex: PALETTES.padmaavat.text, job: "Sepia black. All reading text and every figure." },
      { role: "muted", hex: PALETTES.padmaavat.muted, job: "Second rank: units, derivations, the source line. Never a whole paragraph." },
      { role: "border", hex: PALETTES.padmaavat.border, job: "Sandstone hairline, and the inlay pattern on section rules." },
      { role: "accent", hex: PALETTES.padmaavat.accent, job: "Chittor crimson. The primary action and the open record, nothing else." },
    ],
    type: [
      {
        role: "display", family: "Cinzel", cssVar: "var(--f-pad-display)",
        size: "clamp(36px, 5.4vw, 58px)", weight: 600, tracking: "0.03em", leading: "1.08",
        use: "Once per page. Carved caps, because the titles in this world are cut into stone.",
        sample: "CHITTORGARH",
      },
      {
        role: "heading", family: "Cinzel", cssVar: "var(--f-pad-display)",
        size: "20px", weight: 600, tracking: "0.07em", leading: "1.25",
        use: "Section and card titles, uppercase, always above a rule.",
        sample: "DISTRICTS OF KERALA",
      },
      {
        role: "body", family: "Cormorant Garamond", cssVar: "var(--f-pad-body)",
        size: "17.5px", weight: 400, tracking: "0", leading: "1.6",
        use: "Running prose, held to about 68 characters a line.",
        sample: "Of the 640 districts counted in 2011, Thane held the most people and Dibang Valley the fewest.",
      },
      {
        role: "label", family: "Cormorant Garamond", cssVar: "var(--f-pad-body)",
        size: "11.5px", weight: 600, tracking: "0.18em", leading: "1.1",
        use: "Field labels, units, column heads. Uppercase, always short.",
        sample: "FEMALES PER 1,000 MALES",
      },
    ],
    spacing: [
      { name: "xs", px: 4, use: "Gap inside a chip." },
      { name: "sm", px: 8, use: "Label to value." },
      { name: "md", px: 16, use: "Padding inside a control." },
      { name: "lg", px: 24, use: "Card padding." },
      { name: "xl", px: 40, use: "Between sections." },
      { name: "2xl", px: 64, use: "Page top and bottom." },
    ],
    radii: [
      { name: "none", css: "0", use: "Anything holding a number. A measured length should never look soft." },
      { name: "sm", css: "2px", use: "Inputs, chips, buttons." },
      { name: "foliated", css: "999px 999px 2px 2px", use: "The arch. Only on things that open, taken from the fort's doorways." },
    ],
    borders: [
      { name: "hair", css: "1px solid #d9be92", use: "Default separator." },
      { name: "ink", css: "1.5px solid #221410", use: "Hover, and the selected row." },
      { name: "inlay", css: "repeating diamond, 10px pitch", use: "Section rules, drawn as inlay rather than as a line." },
    ],
    shadows: [
      { name: "none", css: "none", use: "Default." },
      { name: "lamp", css: "0 1px 0 #d9be92, 0 14px 30px -22px rgba(34,20,16,.65)", use: "Hovered card and the open drawer. One source, from above." },
    ],
    shapeRationale:
      "The film's whole grammar is two palettes in opposition, so this system is too: warm for what a figure is, cold for where it falls short of its benchmark. Ornament is allowed to be dense, but only on the frame; everything that holds a number stays square and plain.",
  },

  /* ---------------------------------------------------------- 02 La La Land */
  "la-la-land": {
    mood: "la-la-land",
    colours: [
      { role: "background", hex: PALETTES["la-la-land"].background, job: "The top of the magic-hour sky. Carries a gradient down to magenta." },
      { role: "surface", hex: PALETTES["la-la-land"].surface, job: "A lit window in that sky. Cards and panels only." },
      { role: "text", hex: PALETTES["la-la-land"].text, job: "Warm white, not pure white, so it reads as lamplight rather than as a screen." },
      { role: "muted", hex: PALETTES["la-la-land"].muted, job: "Captions and second lines. Violet, because shadow in this film is never grey." },
      { role: "border", hex: PALETTES["la-la-land"].border, job: "Barely there. This system separates with distance and glow instead." },
      { role: "accent", hex: PALETTES["la-la-land"].accent, job: "Streetlamp amber. Primary action, current item, focus ring. The only light source." },
    ],
    type: [
      {
        role: "display", family: "Bodoni Moda", cssVar: "var(--f-lll-display)",
        size: "clamp(40px, 7vw, 76px)", weight: 500, tracking: "0.04em", leading: "1.0",
        use: "The title card. Once per page, centred, with a season above it.",
        sample: "Summer",
      },
      {
        role: "heading", family: "Bodoni Moda", cssVar: "var(--f-lll-display)",
        size: "24px", weight: 500, tracking: "0.02em", leading: "1.25",
        use: "Section headings, which in this system are chapters.",
        sample: "Winter — the count begins",
      },
      {
        role: "body", family: "Jost", cssVar: "var(--f-lll-body)",
        size: "16.5px", weight: 300, tracking: "0.01em", leading: "1.7",
        use: "Running prose. Light weight and generous leading, because the mood is air.",
        sample: "At magic hour the sky runs cyan at the top and magenta at the horizon, and the lamps are already on.",
      },
      {
        role: "label", family: "Jost", cssVar: "var(--f-lll-body)",
        size: "11px", weight: 500, tracking: "0.26em", leading: "1.1",
        use: "Credits and field labels. Tracked wide enough to read as a marquee.",
        sample: "D I R E C T E D   B Y",
      },
    ],
    spacing: [
      { name: "xs", px: 6, use: "Inside a pill." },
      { name: "sm", px: 12, use: "Label to value." },
      { name: "md", px: 20, use: "Control padding." },
      { name: "lg", px: 32, use: "Card padding." },
      { name: "xl", px: 56, use: "Between sections. The mood needs the air." },
      { name: "2xl", px: 96, use: "Page top and bottom, so the first thing reads as a title card." },
    ],
    radii: [
      { name: "sm", css: "6px", use: "Inputs." },
      { name: "pill", css: "999px", use: "Everything pressable. If it is round, you can press it." },
      { name: "frame", css: "14px", use: "Cards and panels: a soft 2.55:1 letterbox." },
    ],
    borders: [
      { name: "none", css: "0", use: "Preferred. Glow and distance separate most things." },
      { name: "faint", css: "1px solid #3f3074", use: "When an edge is genuinely needed." },
      { name: "lamp", css: "1px solid #f2b544", use: "Focus and the current item." },
    ],
    shadows: [
      { name: "glow", css: "0 0 0 1px rgba(242,181,68,.22), 0 18px 60px -28px rgba(242,181,68,.6)", use: "Hover and the open panel." },
      { name: "flare", css: "a 1px horizontal cyan streak across a lit element", use: "The anamorphic lens flare, on the primary action only." },
    ],
    shapeRationale:
      "Nothing is cornered sharply, because nothing in the film is, and the border role is the least-used colour in the set. The one hard-edged device is the horizontal flare, which is the only thing in the system that is allowed to cross a boundary.",
  },

  /* ------------------------------------------------------------- 03 Hokusai */
  hokusai: {
    mood: "hokusai",
    colours: [
      { role: "background", hex: PALETTES.hokusai.background, job: "Mulberry paper. Most of the page is this, and that is the point." },
      { role: "surface", hex: PALETTES.hokusai.surface, job: "A fresh sheet laid on it. Half a tone lighter, never more." },
      { role: "text", hex: PALETTES.hokusai.text, job: "Sumi ink, which is blue-black rather than black." },
      { role: "muted", hex: PALETTES.hokusai.muted, job: "The lighter pass of the same ink: captions, derivations, scale marks." },
      { role: "border", hex: PALETTES.hokusai.border, job: "The keyblock outline. Used on everything, because the line is the drawing." },
      { role: "accent", hex: PALETTES.hokusai.accent, job: "Prussian blue, the pigment that made these prints. Primary action and current item only." },
    ],
    type: [
      {
        role: "display", family: "Shippori Mincho", cssVar: "var(--f-hok-display)",
        size: "clamp(34px, 5vw, 54px)", weight: 600, tracking: "0.02em", leading: "1.15",
        use: "Once per page, and deliberately not centred. The title sits where the composition leaves room.",
        sample: "Thirty-six Views",
      },
      {
        role: "heading", family: "Shippori Mincho", cssVar: "var(--f-hok-display)",
        size: "21px", weight: 600, tracking: "0.02em", leading: "1.3",
        use: "Section and card titles.",
        sample: "Districts of Maharashtra",
      },
      {
        role: "body", family: "Zen Kaku Gothic New", cssVar: "var(--f-hok-body)",
        size: "16px", weight: 400, tracking: "0.005em", leading: "1.78",
        use: "Running prose. A plain gothic against the mincho display, and very open leading.",
        sample: "Three districts in India recorded no urban households at all in 2011: Lahul and Spiti, Kinnaur, and the Nicobars.",
      },
      {
        role: "label", family: "Zen Kaku Gothic New", cssVar: "var(--f-hok-body)",
        size: "11px", weight: 500, tracking: "0.2em", leading: "1.1",
        use: "Field labels and column heads, set small and wide against all that empty paper.",
        sample: "HOUSEHOLDS WITH INTERNET",
      },
    ],
    spacing: [
      { name: "xs", px: 4, use: "Inside a chip." },
      { name: "sm", px: 10, use: "Label to value." },
      { name: "md", px: 18, use: "Control padding." },
      { name: "lg", px: 30, use: "Card padding." },
      { name: "xl", px: 72, use: "Between sections. The empty paper is the composition." },
      { name: "2xl", px: 112, use: "Page top and bottom." },
    ],
    radii: [
      { name: "none", css: "0", use: "Everything. A block print has no curve a knife could not cut." },
    ],
    borders: [
      { name: "keyblock", css: "1.5px solid #141e2e", use: "The outline, on every component. This is the system's main structural device." },
      { name: "faint", css: "1px solid #aebcc8", use: "Interior divisions inside an already-outlined block." },
      { name: "accent", css: "1.5px solid #1c4c86", use: "Focus and the current item." },
    ],
    shadows: [
      { name: "none", css: "none", use: "Everywhere. A print is flat, and depth is faked with the outline instead." },
      { name: "bokashi", css: "a wiped vertical gradient, used once per page", use: "The sky. It is a background, never an elevation." },
    ],
    shapeRationale:
      "No shadow and no rounding anywhere, so the outline is carrying all of the structure. Layout is deliberately asymmetric and the spacing scale jumps from 30px to 72px with nothing in between, because the empty sheet is the composition rather than what is left over after it.",
  },
};
