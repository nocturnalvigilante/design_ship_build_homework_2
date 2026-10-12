// One place where the six colour roles of each mood live, so the hub swatches,
// the mood boards, the design systems and the site cannot drift apart.
// Every ratio quoted anywhere in this project is computed from these values at
// build time by src/lib/contrast.ts, never typed in by hand.

export type MoodId = "padmaavat" | "la-la-land" | "hokusai";

export interface Palette {
  background: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
  accent: string;
}

export const PALETTES: Record<MoodId, Palette> = {
  // Chittor by candlelight: ivory, sandstone, and one crimson.
  padmaavat: {
    background: "#f4e9d6",
    surface: "#fffaf0",
    text: "#221410",
    muted: "#6a4a35",
    border: "#d9be92",
    accent: "#8c1c21",
  },
  // Magic hour: cyan above, magenta at the horizon, the lamps already on.
  "la-la-land": {
    background: "#14102e",
    surface: "#221a46",
    text: "#f7f0e8",
    muted: "#b3a8d2",
    border: "#3f3074",
    accent: "#f2b544",
  },
  // Aizuri-e: mulberry paper and Prussian blue, and almost nothing else.
  hokusai: {
    background: "#ede4ce",
    surface: "#f7f0de",
    text: "#141e2e",
    muted: "#44576f",
    border: "#aebcc8",
    accent: "#1c4c86",
  },
};

/**
 * The second palette of each mood. These are never accents and never carry
 * body text; they fill charts, chapters and ornament. Each design system
 * prints its measured ratio and says what the colour is allowed to do.
 */
export const SECONDARY: Record<MoodId, { hex: string; name: string; job: string }[]> = {
  padmaavat: [
    { hex: "#1c2a22", name: "Khilji green-black", job: "The opposing palette. Below-benchmark bars, and the one dark surface." },
    { hex: "#41523f", name: "Khilji moss", job: "Second series on a chart." },
    { hex: "#9a6b1e", name: "Gota gold", job: "Ornament and rules only. 3.89:1, so never text at body size." },
  ],
  "la-la-land": [
    { hex: "#4e7f8c", name: "Winter", job: "Chapter colour. Large text and fills only." },
    { hex: "#e7a9c4", name: "Spring", job: "Chapter colour." },
    { hex: "#b5705a", name: "Fall", job: "Chapter colour." },
    { hex: "#b9497e", name: "Magic-hour magenta", job: "The horizon band of the background gradient. Fill only, 3.78:1." },
    { hex: "#6fd3f2", name: "Anamorphic flare", job: "The horizontal streak across a lit element. Decorative." },
  ],
  hokusai: [
    { hex: "#b4452f", name: "Beni red", job: "The single warm note. Below-benchmark bars." },
    { hex: "#6e8360", name: "Sage", job: "Second series. 3.27:1, fill only." },
    { hex: "#c08a3e", name: "Ochre", job: "Third series. 2.39:1, fill only, never near text." },
  ],
};

export const ROLE_ORDER: (keyof Palette)[] = [
  "background",
  "surface",
  "text",
  "muted",
  "border",
  "accent",
];
