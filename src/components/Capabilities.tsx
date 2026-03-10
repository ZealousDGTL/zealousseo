"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Capabilities() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    const caps = [
        {
            title: "Visibility Strategy",
            subtitle: "AEO/GEO",
            desc: "Generative Engine Optimization positioning to capture AI search traffic.",
            code: "const strategy = await ai.optimize('brand');",
            color: "bg-[#FAFAFA]"
        },
        {
            title: "Web Presence",
            subtitle: "AI-Centric",
            desc: "Digital environments tuned for generative semantics and user conversion.",
            code: "import { SemanticNode } from '@zealous/core';",
            color: "bg-[#111] text-white border-white/10 box-dark"
        },
        {
            title: "App Engineering",
            subtitle: "Custom Stacks",
            desc: "React-based scalable solutions deployed natively to your domains.",
            code: "<Infrastructure environment='production' />",
            color: "bg-[#FAFAFA]"
        },
        {
            title: "Workflow Automation",
            subtitle: "CRM & LLMs",
            desc: "CRM synchronization and LLM data routing for massive operational leverage.",
            code: "triggerWorkflow('lead_captured', data);",
            color: "bg-[#F03E2F] text-white border-red-600 box-red"
        }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Horizontal sliding logic
            const slider = sliderRef.current;
            if (!slider) return;

            const sections = gsap.utils.toArray(".slide-card");

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    start: "top top",
                    end: () => "+=" + slider.offsetWidth,
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen w-full bg-[#FAFAFA] overflow-hidden flex flex-col justify-center border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 w-full mb-12">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">Our Capabilities</h2>
                <p className="text-xl md:text-2xl text-gray-500 mt-4 font-light">Enterprise technology infrastructure</p>
            </div>

            <div className="pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
                <div ref={sliderRef} className="flex gap-6 w-max">
                    {caps.map((cap, i) => (
                        <div
                            key={i}
                            className={`slide-card w-[85vw] md:w-[600px] h-[500px] rounded-3xl p-10 md:p-14 flex flex-col justify-between flex-shrink-0 border border-gray-200 shadow-sm ${cap.color}`}
                        >
                            <div>
                                <div className={`font-mono text-sm tracking-widest uppercase mb-6 ${cap.color.includes('text-white') ? 'text-white/60' : 'text-gray-500'}`}>
                                    [ {cap.subtitle} ]
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-none">{cap.title}</h3>
                                <p className={`text-xl ${cap.color.includes('text-white') ? 'text-white/80' : 'text-gray-600'} leading-relaxed`}>
                                    {cap.desc}
                                </p>
                            </div>

                            <div className="mt-8">
                                <div className={`font-mono text-sm p-4 rounded-xl mb-8 ${cap.color.includes('text-white') ? 'bg-black/50 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
                                    <code>{cap.code}</code>
                                </div>
                                <button className={`flex items-center font-bold text-lg ${cap.color.includes('text-white') ? 'text-white' : 'text-[#F03E2F]'}`}>
                                    Explore Architecture <ArrowRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
