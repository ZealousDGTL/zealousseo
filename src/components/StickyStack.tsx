"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROTOCOLS = [
    {
        num: "01",
        title: "MAPPING THE ENTITY",
        desc: "We establish your Semantic Web footprint. Direct linkages to Wikipedia and Wikidata entities create immediate knowledge graph authority that outlasts algorithm updates."
    },
    {
        num: "02",
        title: "CONVERSION ORCHESTRATION",
        desc: "Traffic is useless without architecture. We engineer conversion hubs that trap and process intent, plugging directly into your internal CRM deployments."
    },
    {
        num: "03",
        title: "AUTONOMOUS ENGINES",
        desc: "Generative SEO and programmatic content engines run on your servers. You own the code, you own the models, you own the long trajectory of scaling."
    }
];

export function StickyStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Basic sticky desktop implementation without complex DOM transformations
        // A full pinning stack requires extensive GSAP pinning logic, we will use
        // native CSS sticky combined with GSAP opacity/scale.

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".stack-card");

            cards.forEach((card, i) => {
                if (i === cards.length - 1) return; // Skip last card

                ScrollTrigger.create({
                    trigger: card,
                    start: "top 15%",
                    endTrigger: ".stack-container",
                    end: "bottom bottom",
                    pin: true,
                    pinSpacing: false,
                });

                // Fade down when the next card comes up
                gsap.to(card, {
                    scale: 0.9,
                    opacity: 0.3,
                    filter: "blur(10px)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: cards[i + 1],
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full bg-paper text-black relative z-20" id="protocol">
            <div ref={triggerRef} className="stack-container max-w-5xl mx-auto px-6 md:px-12 py-24 min-h-[200vh]">
                <div className="mb-24">
                    <h2 className="font-sans font-bold text-4xl uppercase tracking-tighter">The Protocol</h2>
                    <p className="font-mono text-black/60">Sequential execution. No deviations.</p>
                </div>

                <div className="relative w-full">
                    {PROTOCOLS.map((protocol, i) => (
                        <div
                            key={i}
                            className="stack-card w-full h-[60vh] min-h-[400px] mb-24 rounded-[3rem] bg-off-white border border-black/10 shadow-lg p-8 md:p-16 flex flex-col justify-between"
                            style={{
                                zIndex: i,
                                position: "relative",
                            }}
                        >
                            {/* Decorative Canvas Placeholder */}
                            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center overflow-hidden">
                                {/* Simulated CSS Radar/Scanline */}
                                <div className="w-[150%] h-[10px] bg-black rotate-45 blur-md" />
                            </div>

                            <div className="relative z-10 font-mono text-6xl md:text-8xl text-black/10">
                                {protocol.num}
                            </div>

                            <div className="relative z-10">
                                <h3 className="font-sans font-bold text-3xl md:text-5xl uppercase tracking-tighter mb-6">
                                    {protocol.title}
                                </h3>
                                <p className="font-mono text-sm md:text-base text-black/70 max-w-2xl leading-relaxed">
                                    {protocol.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
