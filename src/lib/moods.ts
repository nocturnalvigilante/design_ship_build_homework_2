// Three moods, three different worlds. They are deliberately unrelated so the
// set shows range: a warm ornamental one, a dark cinematic one, and a dry
// institutional one. Each carries its own SHAPE language, not just a palette,
// because three recolours of the same components would read as one system.

import { PALETTES, type Palette } from "./palette";
export type { MoodId } from "./palette";
import type { MoodId } from "./palette";

export interface Mood {
  id: MoodId;
  name: string;
  subtitle: string;
  blurb: string;
  /** Six colour roles, in the order the design system presents them. */
  palette: Palette;
  /** Extra hues the mood boards use. Never used as UI accents. */
  secondary: string[];
  /** What keeps the three design systems from being recolours. */
  shape: { corners: string; rules: string; density: string };
  typeNote: string;
  swatch: string[];
}

export const MOODS: Record<MoodId, Mood> = {
  rajasthan: {
    id: "rajasthan",
    name: "Rajasthan",
    subtitle: "Pink, Blue and White Cities",
    blurb:
      "Lime-washed walls, vermilion and gold, jali lattice repeated until it becomes a grid. Ornament used as structure rather than decoration.",
    palette: PALETTES.rajasthan,
    secondary: ["#1e3a5f", "#d4932a", "#2c6e72", "#e0a24a"],
    shape: {
      corners: "scalloped and cusped arches",
      rules: "ornamental, repeated as pattern",
      density: "rhythmic",
    },
    typeNote: "Devanagari-flavoured display over a quiet serif",
    swatch: ["#fdf4ea", "#e0c6ae", "#a8291f", "#1e3a5f"],
  },
  "la-la-land": {
    id: "la-la-land",
    name: "La La Land",
    subtitle: "Twilight and Streetlight",
    blurb:
      "Warm light against cool dusk, which is the whole trick of the film. Indigo sky, amber lamps, magenta neon, and a great deal of air.",
    palette: PALETTES["la-la-land"],
    secondary: ["#e0609a", "#4ec5d4", "#7b5ea7", "#ffd9a0"],
    shape: {
      corners: "soft, wide, letterboxed",
      rules: "faint, often replaced by glow",
      density: "airy",
    },
    typeNote: "High-contrast cinematic display, wide tracking, geometric sans",
    swatch: ["#171033", "#3f3074", "#f2b544", "#e0609a"],
  },
  loki: {
    id: "loki",
    name: "Loki",
    subtitle: "Time Variance Authority",
    blurb:
      "Nineteen-seventies institutional. Manila, mustard and burnt orange, rubber stamps and carbon forms. Bureaucracy is made of components already.",
    palette: PALETTES.loki,
    secondary: ["#8a7f2e", "#d4a62a", "#5e4b32", "#9c3b17"],
    shape: {
      corners: "chamfered, squared off",
      rules: "heavy, load-bearing",
      density: "tight, form-like",
    },
    typeNote: "Chunky institutional sans with typewriter mono for anything official",
    swatch: ["#e5dcc5", "#9a8a66", "#b4441a", "#8a7f2e"],
  },
};

export const MOOD_ORDER: MoodId[] = ["rajasthan", "la-la-land", "loki"];
