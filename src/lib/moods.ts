// Three moods picked to disagree about one question: how do you separate two
// things? Padmaavat separates with ornament and with an opposing palette;
// La La Land separates with darkness and distance; Hokusai separates with a
// drawn outline and with empty paper. Because they answer differently, the
// three design systems differ structurally and not only in colour.

import { PALETTES, type Palette } from "./palette";
export type { MoodId } from "./palette";
import type { MoodId } from "./palette";

export interface Mood {
  id: MoodId;
  /** The mood's own name, which is not the film's name. */
  name: string;
  /** Where it comes from. */
  source: string;
  blurb: string;
  /** What keeps the three design systems from being recolours. */
  shape: { corners: string; rules: string; density: string };
  palette: Palette;
  /** Four hexes for the hub card. */
  swatch: string[];
}

export const MOODS: Record<MoodId, Mood> = {
  padmaavat: {
    id: "padmaavat",
    name: "Chittor and Khilji",
    source: "Padmaavat",
    blurb:
      "Two palettes at war in one film. The fort is ivory, gold and candlelight; the siege outside it is green-black and smoke. Ornament is dense, symmetry is absolute, and every light source is a flame.",
    shape: {
      corners: "foliated and mirrored",
      rules: "ornamental, inlaid",
      density: "dense, layered",
    },
    palette: PALETTES.padmaavat,
    swatch: ["#f4e9d6", "#d9be92", "#8c1c21", "#1c2a22"],
  },
  "la-la-land": {
    id: "la-la-land",
    name: "Four Seasons, One Magic Hour",
    source: "La La Land",
    blurb:
      "Not one palette but four, announced by a title card each time it changes, all hung on the same fifteen minutes of dusk: cyan above, magenta at the horizon, the lamps already lit. Shadows are violet, never black.",
    shape: {
      corners: "soft, wide, anamorphic",
      rules: "replaced by glow and by distance",
      density: "airy, 2.55:1",
    },
    palette: PALETTES["la-la-land"],
    swatch: ["#14102e", "#b9497e", "#f2b544", "#6fd3f2"],
  },
  hokusai: {
    id: "hokusai",
    name: "Prussian Blue on Mulberry Paper",
    source: "Hokusai and the aizuri-e print",
    blurb:
      "Flat colour with no modelled light anywhere. A black keyblock line does all the work, one wiped bokashi gradient carries the sky, and the composition is pushed hard off-centre so that most of the sheet is empty.",
    shape: {
      corners: "square, cut by a block",
      rules: "a drawn keyblock outline",
      density: "sparse, asymmetric",
    },
    palette: PALETTES.hokusai,
    swatch: ["#ede4ce", "#aebcc8", "#1c4c86", "#b4452f"],
  },
};

export const MOOD_ORDER: MoodId[] = ["padmaavat", "la-la-land", "hokusai"];

export function moodIndex(id: MoodId) {
  return String(MOOD_ORDER.indexOf(id) + 1).padStart(2, "0");
}
