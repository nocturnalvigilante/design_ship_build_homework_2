// Rajasthan at the 2011 Census of India: all 33 districts as they stood that
// year, grouped into the seven administrative divisions. Figures are the
// published district totals (population, decadal area, literacy rate, sex
// ratio, population density). Rajasthan has since been re-districted; this is
// deliberately the 2011 boundary set, because that is what the Census counted.
//
// Source: Census of India 2011, Rajasthan District Census Handbooks, via
// github.com/nocturnalvigilante/DataAnalysisonCensusDataIndia

export interface District {
  id: string;
  name: string;
  division: Division;
  /** Total persons, 2011. */
  population: number;
  /** Square kilometres. */
  area: number;
  /** Persons per square kilometre. */
  density: number;
  /** Per cent of persons aged 7+ who are literate. */
  literacy: number;
  /** Females per 1,000 males. */
  sexRatio: number;
}

export type Division =
  | "Jaipur"
  | "Jodhpur"
  | "Bikaner"
  | "Ajmer"
  | "Udaipur"
  | "Kota"
  | "Bharatpur";

export const DIVISIONS: Division[] = [
  "Jaipur",
  "Jodhpur",
  "Bikaner",
  "Ajmer",
  "Udaipur",
  "Kota",
  "Bharatpur",
];

const raw: [string, Division, number, number, number, number, number][] = [
  ["Ajmer", "Ajmer", 2583052, 8481, 305, 69.33, 951],
  ["Alwar", "Jaipur", 3674179, 8380, 438, 70.72, 895],
  ["Banswara", "Udaipur", 1797485, 4522, 397, 56.33, 980],
  ["Baran", "Kota", 1222755, 6955, 225, 66.66, 929],
  ["Barmer", "Jodhpur", 2603751, 28387, 92, 56.53, 902],
  ["Bharatpur", "Bharatpur", 2548462, 5066, 503, 70.11, 880],
  ["Bhilwara", "Ajmer", 2408523, 10455, 230, 61.37, 973],
  ["Bikaner", "Bikaner", 2363937, 30247, 78, 65.13, 905],
  ["Bundi", "Kota", 1110906, 5776, 193, 61.91, 925],
  ["Chittorgarh", "Udaipur", 1544338, 7822, 192, 61.71, 972],
  ["Churu", "Bikaner", 2039547, 13858, 148, 66.76, 940],
  ["Dausa", "Jaipur", 1634409, 3432, 476, 68.16, 905],
  ["Dholpur", "Bharatpur", 1206516, 3034, 398, 69.08, 846],
  ["Dungarpur", "Udaipur", 1388552, 3770, 368, 59.46, 994],
  ["Sri Ganganagar", "Bikaner", 1969168, 10990, 179, 69.64, 887],
  ["Hanumangarh", "Bikaner", 1774692, 9656, 184, 67.13, 906],
  ["Jaipur", "Jaipur", 6626178, 11152, 595, 75.51, 910],
  ["Jaisalmer", "Jodhpur", 669919, 38401, 17, 57.22, 852],
  ["Jalore", "Jodhpur", 1828730, 10640, 171, 54.86, 952],
  ["Jhalawar", "Kota", 1411129, 6219, 226, 61.5, 946],
  ["Jhunjhunu", "Jaipur", 2137045, 5928, 361, 74.13, 950],
  ["Jodhpur", "Jodhpur", 3687165, 22850, 161, 65.94, 916],
  ["Karauli", "Bharatpur", 1458248, 5043, 274, 66.22, 861],
  ["Kota", "Kota", 1951014, 5217, 374, 76.56, 911],
  ["Nagaur", "Ajmer", 3307743, 17718, 187, 62.8, 950],
  ["Pali", "Jodhpur", 2037573, 12387, 165, 62.39, 987],
  ["Pratapgarh", "Udaipur", 867848, 4117, 232, 55.97, 983],
  ["Rajsamand", "Udaipur", 1156597, 3853, 290, 63.93, 990],
  ["Sawai Madhopur", "Bharatpur", 1335551, 4498, 258, 65.42, 897],
  ["Sikar", "Jaipur", 2677333, 7732, 346, 71.19, 947],
  ["Sirohi", "Jodhpur", 1036346, 5136, 201, 55.25, 940],
  ["Tonk", "Ajmer", 1421326, 7194, 198, 61.61, 952],
  ["Udaipur", "Udaipur", 3068420, 11724, 262, 61.82, 958],
];

export const DISTRICTS: District[] = raw.map(
  ([name, division, population, area, density, literacy, sexRatio]) => ({
    id: name.toLowerCase().replace(/\s+/g, "-"),
    name,
    division,
    population,
    area,
    density,
    literacy,
    sexRatio,
  }),
);

/** State totals, as published, not as re-summed from the district rows. */
export const STATE = {
  population: 68548437,
  area: 342239,
  density: 200,
  literacy: 66.11,
  sexRatio: 928,
  districts: 33,
  year: 2011,
};

export type MetricKey = "population" | "literacy" | "sexRatio" | "density";

export interface Metric {
  key: MetricKey;
  label: string;
  short: string;
  unit: string;
  /** What the number counts, in one plain sentence. */
  gloss: string;
  format: (n: number) => string;
}

const inr = (n: number) => n.toLocaleString("en-IN");

export const METRICS: Metric[] = [
  {
    key: "population",
    label: "Population",
    short: "People",
    unit: "persons",
    gloss: "Everyone counted in the district on Census night, 2011.",
    format: inr,
  },
  {
    key: "literacy",
    label: "Literacy rate",
    short: "Literacy",
    unit: "%",
    gloss: "Share of people aged seven and over who can read and write.",
    format: (n) => `${n.toFixed(2)}%`,
  },
  {
    key: "sexRatio",
    label: "Sex ratio",
    short: "Sex ratio",
    unit: "females per 1,000 males",
    gloss: "Females per 1,000 males. Above 1,000 would mean more women than men.",
    format: (n) => inr(n),
  },
  {
    key: "density",
    label: "Population density",
    short: "Density",
    unit: "persons / km²",
    gloss: "People per square kilometre of district area.",
    format: (n) => `${inr(n)} / km²`,
  },
];

export const METRIC_BY_KEY = Object.fromEntries(
  METRICS.map((m) => [m.key, m]),
) as Record<MetricKey, Metric>;

export function rangeOf(key: MetricKey) {
  const vals = DISTRICTS.map((d) => d[key]);
  return { min: Math.min(...vals), max: Math.max(...vals) };
}

export function rankOf(d: District, key: MetricKey) {
  const sorted = [...DISTRICTS].sort((a, b) => b[key] - a[key]);
  return sorted.findIndex((x) => x.id === d.id) + 1;
}

export function stateValue(key: MetricKey) {
  return STATE[key as keyof typeof STATE] as number;
}
