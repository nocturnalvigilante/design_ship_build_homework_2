import type { Metadata } from "next";
import DesignSystemPage from "@/components/dsPage";

export const metadata: Metadata = {
  title: "Design system 02 · Four Seasons, One Magic Hour",
  description:
    "Six colour roles with measured contrast, four type roles, a spacing and shape scale, fourteen components in six control states, and four UI states.",
};

export default function Page() {
  return <DesignSystemPage mood="la-la-land" />;
}
