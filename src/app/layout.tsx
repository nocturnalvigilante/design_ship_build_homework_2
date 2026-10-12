import type { Metadata } from "next";
import {
  Cinzel,
  Cormorant_Garamond,
  Bodoni_Moda,
  Jost,
  Shippori_Mincho,
  Zen_Kaku_Gothic_New,
} from "next/font/google";
import "./globals.css";

// One font pair per mood, exposed as CSS variables so each route opts in.
const cinzel = Cinzel({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--f-pad-display" });
const cormorant = Cormorant_Garamond({ weight: ["300", "400", "600", "700"], subsets: ["latin"], variable: "--f-pad-body" });
const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--f-lll-display" });
const jost = Jost({ subsets: ["latin"], variable: "--f-lll-body" });
const shippori = Shippori_Mincho({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--f-hok-display" });
const zenKaku = Zen_Kaku_Gothic_New({ weight: ["400", "500", "700"], subsets: ["latin"], variable: "--f-hok-body" });

export const metadata: Metadata = {
  title: "UI/UX & Visual Design · India Census 2011",
  description:
    "Three mood boards, three design systems, and a district explorer for all 640 districts of India at the 2011 Census.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // The font variables go on <html>, not <body>. Tailwind's @theme block
  // declares --font-pad-display as `var(--f-pad-display), ...` on :root, and a
  // custom property resolves where it is declared: if --f-pad-display only
  // exists on <body>, the :root declaration becomes guaranteed-invalid and
  // every font-* utility falls back to the default sans without warning.
  const fonts = [cinzel, cormorant, bodoni, jost, shippori, zenKaku]
    .map((f) => f.variable)
    .join(" ");
  return (
    <html lang="en" className={fonts}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
