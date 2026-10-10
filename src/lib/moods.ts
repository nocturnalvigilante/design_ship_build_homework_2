// Three moods, three different worlds. They are deliberately unrelated so the
// set shows range: a warm ornamental one, a dark cinematic one, and a dry
// institutional one. Each carries its own SHAPE language, not just a palette,
// because three recolours of the same components would read as one system.

export type MoodId = "rajasthan" | "la-la-land" | "loki";

export interface Mood {
  id: MoodId;
  name: string;
  subtitle: string;
  blurb: string;
  /** Six colour roles, in the order the design system presents them. */
  palette: {
    background: string;
    surface: string;
    text: string;
    muted: string;
    border: string;
    accent: string;
  };
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
    palette: {
      background: "#fdf4ea",
      surface: "#ffffff",
      text: "#2d1b18",
      muted: "#7d5b4f",
      border: "#e8d3c1",
      accent: "#b4352a",
    },
    secondary: ["#1e3a5f", "#d4932a", "#2c6e72", "#e0a24a"],
    shape: {
      corners: "scalloped and cusped arches",
      rules: "ornamental, repeated as pattern",
      density: "rhythmic",
    },
    typeNote: "Devanagari-flavoured display over a quiet serif",
    swatch: ["#fdf4ea", "#e8d3c1", "#b4352a", "#1e3a5f"],
  },
  "la-la-land": {
    id: "la-la-land",
    name: "La La Land",
    subtitle: "Twilight and Streetlight",
    blurb:
      "Warm light against cool dusk, which is the whole trick of the film. Indigo sky, amber lamps, magenta neon, and a great deal of air.",
    palette: {
      background: "#171033",
      surface: "#221845",
      text: "#f7f0e8",
      muted: "#a79cc6",
      border: "#3a2c69",
      accent: "#f2b544",
    },
    secondary: ["#e0609a", "#4ec5d4", "#7b5ea7", "#ffd9a0"],
    shape: {
      corners: "soft, wide, letterboxed",
      rules: "faint, often replaced by glow",
      density: "airy",
    },
    typeNote: "High-contrast cinematic display, wide tracking, geometric sans",
    swatch: ["#171033", "#3a2c69", "#f2b544", "#e0609a"],
  },
  loki: {
    id: "loki",
    name: "Loki",
    subtitle: "Time Variance Authority",
    blurb:
      "Nineteen-seventies institutional. Manila, mustard and burnt orange, rubber stamps and carbon forms. Bureaucracy is made of components already.",
    palette: {
      background: "#e9e1ce",
      surface: "#f6f1e3",
      text: "#2b2118",
      muted: "#776450",
      border: "#c5b795",
      accent: "#c2551b",
    },
    secondary: ["#8a7f2e", "#d4a62a", "#5e4b32", "#9c3b17"],
    shape: {
      corners: "chamfered, squared off",
      rules: "heavy, load-bearing",
      density: "tight, form-like",
    },
    typeNote: "Chunky institutional sans with typewriter mono for anything official",
    swatch: ["#e9e1ce", "#c5b795", "#c2551b", "#8a7f2e"],
  },
};

export const MOOD_ORDER: MoodId[] = ["rajasthan", "la-la-land", "loki"];
