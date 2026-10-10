import type { Metadata } from "next";
import { Rozha_One, Spectral, Bodoni_Moda, Jost, Archivo, Courier_Prime } from "next/font/google";
import "./globals.css";

// One font pair per mood, exposed as CSS variables so each route can opt in.
const rozha = Rozha_One({ weight: "400", subsets: ["latin"], variable: "--f-raj-display" });
const spectral = Spectral({ weight: ["300", "400", "600"], subsets: ["latin"], variable: "--f-raj-body" });
const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--f-lll-display" });
const jost = Jost({ subsets: ["latin"], variable: "--f-lll-body" });
const archivo = Archivo({ subsets: ["latin"], variable: "--f-loki-display" });
const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"], variable: "--f-loki-body" });

export const metadata: Metadata = {
  title: "UI/UX & Visual Design · Rajasthan Census",
  description:
    "Three mood boards, three design systems, and a district explorer for the 2011 Census of Rajasthan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${rozha.variable} ${spectral.variable} ${bodoni.variable} ${jost.variable} ${archivo.variable} ${courier.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
