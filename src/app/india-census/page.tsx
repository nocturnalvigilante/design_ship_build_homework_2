import type { Metadata } from "next";
import Explorer from "./Explorer";

export const metadata: Metadata = {
  title: "India 2011 · District Explorer",
  description:
    "All 640 districts of India at the 2011 Census, across 35 states and union territories: population, sex ratio, literacy, urban share, electricity, internet and work.",
};

export default function Page() {
  return <Explorer />;
}
