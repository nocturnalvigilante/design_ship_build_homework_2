import { PALETTES } from "./palette";
import type { MoodId } from "./palette";

// The full token set behind each design system. The mood boards decide these;
// the systems publish them; the Rajasthan site consumes the Rajasthan set.
// Every colour has a job written next to it, because an unexplained colour is
// the thing that gets cut.

export interface ColourRole {
  role: "background" | "surface" | "text" | "muted" | "border" | "accent";
  hex: string;
  job: string;
  /** What this colour is read against when it carries text. */
  against?: string;
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
  /** Base step in px; the scale is these multiples. */
  spacing: { name: string; px: number; use: string }[];
  radii: { name: string; css: string; use: string }[];
  borders: { name: string; css: string; use: string }[];
  shadows: { name: string; css: string; use: string }[];
  /** One sentence on why the shape language is what it is. */
  shapeRationale: string;
}

export const TOKENS: Record<MoodId, SystemTokens> = {
  rajasthan: {
    mood: "rajasthan",
    colours: [
      { role: "background", hex: PALETTES["rajasthan"].background, job: "Lime-washed wall. Every page sits on it; nothing else is this light." },
      { role: "surface", hex: PALETTES["rajasthan"].surface, job: "Raised plaster panel. Cards and the detail drawer, so grouped things lift off the wall." },
      { role: "text", hex: PALETTES["rajasthan"].text, job: "Ink. All reading text and every number." },
      { role: "muted", hex: PALETTES["rajasthan"].muted, job: "Second rank only: units, captions, the source line. Never a whole sentence.", against: "#fdf4ea" },
      { role: "border", hex: PALETTES["rajasthan"].border, job: "Hairline and jali lattice. Separates, never shouts." },
      { role: "accent", hex: PALETTES["rajasthan"].accent, job: "Vermilion. Reserved: the primary action, the selected district, and nothing else.", against: "#fdf4ea" },
    ],
    type: [
      {
        role: "display", family: "Rozha One", cssVar: "var(--f-raj-display)", size: "clamp(38px, 6vw, 62px)",
        weight: 400, tracking: "-0.01em", leading: "1.04",
        use: "One per page. The page title and nothing else.",
        sample: "Rajasthan, 2011",
      },
      {
        role: "heading", family: "Rozha One", cssVar: "var(--f-raj-display)", size: "22px",
        weight: 400, tracking: "0", leading: "1.2",
        use: "Section and card titles. Same face as display so the page reads as one voice.",
        sample: "Jodhpur district",
      },
      {
        role: "body", family: "Spectral", cssVar: "var(--f-raj-body)", size: "17px",
        weight: 400, tracking: "0", leading: "1.62",
        use: "Running prose, held to about 68 characters a line.",
        sample: "Jaisalmer covers 38,401 square kilometres and holds seventeen people in each one of them.",
      },
      {
        role: "label", family: "Spectral", cssVar: "var(--f-raj-body)", size: "11px",
        weight: 600, tracking: "0.14em", leading: "1.1",
        use: "Field labels, units, table headers. Uppercase, always short.",
        sample: "FEMALES PER 1,000 MALES",
      },
    ],
    spacing: [
      { name: "xs", px: 4, use: "Gap inside a chip, between an icon and its word." },
      { name: "sm", px: 8, use: "Label to value." },
      { name: "md", px: 16, use: "Padding inside a control; gap between list rows." },
      { name: "lg", px: 24, use: "Card padding." },
      { name: "xl", px: 40, use: "Between sections." },
      { name: "2xl", px: 64, use: "Page top and bottom." },
    ],
    radii: [
      { name: "none", css: "0", use: "Table cells and the data bars; a measured length should not look soft." },
      { name: "sm", css: "3px", use: "Inputs, chips, buttons." },
      { name: "cusped", css: "999px 999px 4px 4px", use: "The arch. Card heads and the detail drawer, taken straight from a jharokha opening." },
    ],
    borders: [
      { name: "hair", css: "1px solid #e0c6ae", use: "Default separator." },
      { name: "ink", css: "1.5px solid #2d1b18", use: "Focus and the selected row." },
      { name: "jali", css: "repeating lattice, 8px pitch", use: "Section rules and the empty state, drawn as a pattern not a line." },
    ],
    shadows: [
      { name: "none", css: "none", use: "Default. Flat plaster." },
      { name: "lift", css: "0 1px 0 #e0c6ae, 0 10px 24px -18px rgba(45,27,24,.5)", use: "Hovered card, open drawer." },
    ],
    shapeRationale:
      "Ornament is doing structural work here: the cusped arch marks what opens, the jali lattice marks what separates. Corners are near-square everywhere a number is read, so precision still looks like precision.",
  },

  "la-la-land": {
    mood: "la-la-land",
    colours: [
      { role: "background", hex: PALETTES["la-la-land"].background, job: "The sky twenty minutes after sunset. The whole page is this." },
      { role: "surface", hex: PALETTES["la-la-land"].surface, job: "A lit window in that sky. Cards and panels only." },
      { role: "text", hex: PALETTES["la-la-land"].text, job: "Warm white, not pure white, so it reads as lamplight." },
      { role: "muted", hex: PALETTES["la-la-land"].muted, job: "Captions, timestamps, the second line of a card.", against: "#171033" },
      { role: "border", hex: PALETTES["la-la-land"].border, job: "Barely-there edge. Most separation is done with space and glow instead." },
      { role: "accent", hex: PALETTES["la-la-land"].accent, job: "Streetlamp amber. Primary action and the current item, nothing else.", against: "#171033" },
    ],
    type: [
      {
        role: "display", family: "Bodoni Moda", cssVar: "var(--f-lll-display)", size: "clamp(40px, 7vw, 76px)",
        weight: 500, tracking: "0.04em", leading: "1.0",
        use: "Title card. Once per page, centred, with air above and below.",
        sample: "A Season in Jaipur",
      },
      {
        role: "heading", family: "Bodoni Moda", cssVar: "var(--f-lll-display)", size: "24px",
        weight: 500, tracking: "0.02em", leading: "1.25",
        use: "Act and section headings.",
        sample: "Winter — the count begins",
      },
      {
        role: "body", family: "Jost", cssVar: "var(--f-lll-body)", size: "16.5px",
        weight: 300, tracking: "0.01em", leading: "1.7",
        use: "Running prose. Light weight, generous leading: the mood is air.",
        sample: "The lamps come on over the old city and the street keeps its colour for about an hour.",
      },
      {
        role: "label", family: "Jost", cssVar: "var(--f-lll-body)", size: "11px",
        weight: 500, tracking: "0.26em", leading: "1.1",
        use: "Marquee lettering: credits, field labels, the small print under a poster.",
        sample: "D I R E C T E D   B Y",
      },
    ],
    spacing: [
      { name: "xs", px: 6, use: "Inside a pill." },
      { name: "sm", px: 12, use: "Label to value." },
      { name: "md", px: 20, use: "Control padding." },
      { name: "lg", px: 32, use: "Card padding." },
      { name: "xl", px: 56, use: "Between sections. The mood needs the air." },
      { name: "2xl", px: 96, use: "Page top and bottom, so the first thing feels like a title card." },
    ],
    radii: [
      { name: "sm", css: "6px", use: "Inputs and chips." },
      { name: "pill", css: "999px", use: "Buttons and filters. Everything that is pressed is round." },
      { name: "frame", css: "14px", use: "Cards and the panel: a soft letterbox." },
    ],
    borders: [
      { name: "faint", css: "1px solid #3f3074", use: "Default, and usually it is enough." },
      { name: "lamp", css: "1px solid #f2b544", use: "Focus and the current item." },
      { name: "none", css: "0", use: "Preferred. Glow and space separate most things." },
    ],
    shadows: [
      { name: "glow", css: "0 0 0 1px rgba(242,181,68,.22), 0 18px 60px -28px rgba(242,181,68,.55)", use: "Hover and the open panel." },
      { name: "deep", css: "0 30px 70px -40px rgba(0,0,0,.9)", use: "The panel over the page." },
    ],
    shapeRationale:
      "Nothing is cornered sharply, because nothing in the film is. Separation comes from darkness and distance rather than lines, which is why the border role is the least-used colour in the set.",
  },

  loki: {
    mood: "loki",
    colours: [
      { role: "background", hex: PALETTES["loki"].background, job: "Manila. The desk the form is lying on." },
      { role: "surface", hex: PALETTES["loki"].surface, job: "The form itself. Every panel is a sheet of paper." },
      { role: "text", hex: PALETTES["loki"].text, job: "Typewriter black. All copy and all figures." },
      { role: "muted", hex: PALETTES["loki"].muted, job: "Carbon copy: field numbers, footnotes, the stamp date.", against: "#e5dcc5" },
      { role: "border", hex: PALETTES["loki"].border, job: "Ruled line. This system separates with rules, so it is used constantly." },
      { role: "accent", hex: PALETTES["loki"].accent, job: "Stamp-pad orange, darkened until it clears 4.5:1. Primary action and active record only, never decorative.", against: "#e5dcc5" },
    ],
    type: [
      {
        role: "display", family: "Archivo", cssVar: "var(--f-loki-display)", size: "clamp(30px, 4.6vw, 46px)",
        weight: 800, tracking: "-0.02em", leading: "1.0",
        use: "Department heading at the top of the sheet. Uppercase.",
        sample: "DISTRICT RECORDS",
      },
      {
        role: "heading", family: "Archivo", cssVar: "var(--f-loki-display)", size: "15px",
        weight: 700, tracking: "0.08em", leading: "1.2",
        use: "Section bars. Small, loud, uppercase, always on a ruled bar.",
        sample: "SECTION 3 — ENUMERATION",
      },
      {
        role: "body", family: "Courier Prime", cssVar: "var(--f-loki-body)", size: "15px",
        weight: 400, tracking: "0", leading: "1.6",
        use: "Everything typed into the form, including prose. Monospace is the point.",
        sample: "Variant file opened 2011-03-01. Count verified. No anomaly recorded.",
      },
      {
        role: "label", family: "Archivo", cssVar: "var(--f-loki-display)", size: "10px",
        weight: 700, tracking: "0.18em", leading: "1.1",
        use: "Field numbers and column heads. Uppercase, under a rule.",
        sample: "FIELD 04 / SEX RATIO",
      },
    ],
    spacing: [
      { name: "xs", px: 4, use: "Inside a field box." },
      { name: "sm", px: 8, use: "Label to field." },
      { name: "md", px: 12, use: "Control padding. Tight: this is a form." },
      { name: "lg", px: 18, use: "Panel padding." },
      { name: "xl", px: 28, use: "Between sections." },
      { name: "2xl", px: 44, use: "Page top and bottom." },
    ],
    radii: [
      { name: "none", css: "0", use: "Default and nearly universal. Paper does not have rounded corners." },
      { name: "chamfer", css: "clipped 8px corner", use: "The one exception: file tabs and the active record, cut not rounded." },
    ],
    borders: [
      { name: "rule", css: "1px solid #9a8a66", use: "Everywhere. The grid is visible on purpose." },
      { name: "heavy", css: "2px solid #241c13", use: "Section bars and the selected row." },
      { name: "stamp", css: "2px solid #b4441a", use: "Focus, and the approved state." },
    ],
    shadows: [
      { name: "none", css: "none", use: "Default. Paper on a desk casts almost nothing." },
      { name: "sheet", css: "2px 2px 0 #9a8a66", use: "Hover: the sheet shifts a couple of millimetres." },
    ],
    shapeRationale:
      "Every corner is square and every edge is a drawn rule, because the whole system is pretending to be a printed form. The single chamfer is reserved for the active file, so the one cut corner means something.",
  },
};
