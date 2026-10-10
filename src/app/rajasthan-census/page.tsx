import type { Metadata } from "next";
import Explorer from "./Explorer";

export const metadata: Metadata = {
  title: "Rajasthan 2011 · District Explorer",
  description:
    "All 33 districts of Rajasthan at the 2011 Census of India: population, literacy, sex ratio and density, filterable by division and comparable against the state.",
};

export default function Page() {
  return <Explorer />;
}
