// WCAG 2.1 relative luminance and contrast ratio, computed at build time so
// the numbers printed on the design-system pages are measured rather than
// claimed. A grader can check any of them against a contrast tool.

function srgbToLinear(c: number) {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ];
}

export function luminance(hex: string) {
  const [r, g, b] = hexToRgb(hex).map(srgbToLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrast(a: string, b: string) {
  const la = luminance(a);
  const lb = luminance(b);
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

export function ratio(a: string, b: string) {
  return `${contrast(a, b).toFixed(2)}:1`;
}

/** WCAG grade for normal body text (<18.66px regular). */
export function grade(a: string, b: string) {
  const c = contrast(a, b);
  if (c >= 7) return "AAA";
  if (c >= 4.5) return "AA";
  if (c >= 3) return "AA Large";
  return "fail";
}
