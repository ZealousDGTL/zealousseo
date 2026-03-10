"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: "01",
        title: "Deep Audit",
        desc: "We map your entire digital topology — crawl infrastructure, semantic accessibility, and competitive AI-citation share — before a single change is made.",
        tag: "Discovery",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" /><path d="M21 21l4 4" />
            </svg>
        ),
    },
    {
        num: "02",
        title: "Architect",
        desc: "We reverse-engineer the generative search graph for your niche and design a semantic entity network that positions you as the inevitable answer.",
        tag: "Strategy",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="9" height="9" rx="1" /><rect x="16" y="3" width="9" height="9" rx="1" /><rect x="3" y="16" width="9" height="9" rx="1" /><path d="M20.5 16v9M16 20.5h9" />
            </svg>
        ),
    },
    {
        num: "03",
        title: "Deploy",
        desc: "Our engineering squad ships the full stack: schema markup, semantic MDX content layers, structured data pipelines, and performance-tuned React infrastructure.",
        tag: "Engineering",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
            </svg>
        ),
    },
    {
        num: "04",
        title: "Scale",
        desc: "We monitor AI citation velocity, organic visibility, and conversion attribution in real-time — iterating aggressively until your numbers redefine your category.",
        tag: "Growth",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 18 9 12 13 16 21 6" /><polyline points="17 6 21 6 21 10" />
            </svg>
        ),
    },
];

export function Process() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".process-step",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 px-6 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 max-w-2xl">
                    <div className="font-mono text-sm uppercase tracking-widest text-[#F03E2F] mb-4">
                        [ The Protocol ]
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.05]">
                        How we work.
                    </h2>
                    <p className="mt-6 text-xl text-gray-500 font-light leading-relaxed">
                        A ruthlessly efficient 4-phase system. No guesswork, no vanity metrics — just compound, measurable growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="process-step bg-white p-10 flex flex-col gap-6 group hover:bg-[#FAFAFA] transition-colors relative overflow-hidden"
                        >
                            {/* Step Number – Large Background */}
                            <div className="absolute -top-4 -right-2 text-[8rem] font-bold text-gray-100 leading-none select-none group-hover:text-gray-200 transition-colors pointer-events-none">
                                {step.num}
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 group-hover:border-[#F03E2F] group-hover:text-[#F03E2F] transition-colors mb-6">
                                    {step.icon}
                                </div>

                                <div className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-3">
                                    {step.tag}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-4 group-hover:text-[#F03E2F] transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
