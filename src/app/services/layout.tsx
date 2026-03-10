import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Topology of Agentic Operations",
  description:
    "AI Search Optimization, Entity Building, Technical SEO, Conversion Hubs, Revenue Orchestration and more. 10 services across 4 categories — built to own the search lifecycle.",
  openGraph: {
    title: "Services | Zealous Digital",
    description:
      "Engineering high-performance search infrastructure without the implementation queue. 10 services, 4 categories, zero vendor lock-in.",
    url: "https://zealousseo.com/services",
  },
  alternates: { canonical: "https://zealousseo.com/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
