import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Let's Build Your Topology",
  description:
    "Eliminate the implementation queue. Talk to a Zealous Digital expert and deploy your search infrastructure in weeks, not quarters.",
  openGraph: {
    title: "Contact Zealous Digital — Let's Build Your Topology",
    description:
      "Eliminate the implementation queue. Talk to a visibility engineer and deploy your agentic search infrastructure today.",
    url: "https://zealousseo.com/contact",
  },
  alternates: { canonical: "https://zealousseo.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
