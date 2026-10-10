// One place where the six colour roles of each mood live, so the hub swatches,
// the mood boards, the design systems and the site cannot drift apart.

export type MoodId = "rajasthan" | "la-la-land" | "loki";

export interface Palette {
  background: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
  accent: string;
}

export const PALETTES: Record<MoodId, Palette> = {
  rajasthan: {
    background: "#fdf4ea",
    surface: "#ffffff",
    text: "#2d1b18",
    muted: "#6b4a3f",
    border: "#e0c6ae",
    accent: "#a8291f",
  },
  "la-la-land": {
    background: "#171033",
    surface: "#241a4b",
    text: "#f7f0e8",
    muted: "#b3a8d2",
    border: "#3f3074",
    accent: "#f2b544",
  },
  loki: {
    background: "#e5dcc5",
    surface: "#f4efe0",
    text: "#241c13",
    muted: "#6b5940",
    border: "#9a8a66",
    accent: "#b4441a",
  },
};

export const ROLE_ORDER: (keyof Palette)[] = [
  "background",
  "surface",
  "text",
  "muted",
  "border",
  "accent",
];
