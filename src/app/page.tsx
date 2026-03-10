import { FloatingNav } from "@/components/FloatingNav";
import { Hero } from "@/components/Hero";
import { Differentiators } from "@/components/Differentiators";
import { AutomationEngine } from "@/components/AutomationEngine";
import { TheTopology } from "@/components/TheTopology";
import { Capabilities } from "@/components/Capabilities";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative selection:bg-[#F03E2F] selection:text-white">
      <FloatingNav />
      <Hero />
      <Differentiators />
      <TheTopology />
      <AutomationEngine />
      <Capabilities />
      <CTA />
      <Footer />
    </main>
  );
}

