"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SuccessStories() {
    const containerRef = useRef<HTMLDivElement>(null);
    const visRef = useRef<HTMLSpanElement>(null);
    const leadRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Counter Animations
            gsap.fromTo(visRef.current,
                { innerHTML: 0 },
                {
                    innerHTML: 312,
                    duration: 2.5,
                    ease: "power3.out",
                    snap: { innerHTML: 1 },
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );

            gsap.fromTo(leadRef.current,
                { innerHTML: 0 },
                {
                    innerHTML: 4.1,
                    duration: 3,
                    ease: "power3.out",
                    snap: { innerHTML: 0.1 },
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 max-w-7xl mx-auto border-b border-gray-200">
            <div className="mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">Success Stories</h2>
                <p className="text-xl md:text-2xl text-gray-500 font-light">Results that define markets.</p>
            </div>

            <div className="bg-[#111] text-white rounded-[2rem] overflow-hidden shadow-2xl grid md:grid-cols-2 relative group">
                <div className="p-12 md:p-20 flex flex-col justify-center relative z-10 border-r border-white/10">
                    <div className="font-mono text-sm tracking-widest text-[#F03E2F] mb-8 bg-[#F03E2F]/10 w-max px-4 py-2 rounded-full border border-[#F03E2F]/20">
                        Scale Study: Caldera ALC
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
                        From legacy visibility to category-defining AEO authority.
                    </h3>
                    <p className="text-gray-400 mb-12 text-lg md:text-xl leading-relaxed font-light">
                        By deploying our technical visibility strategy, we positioned Caldera as the primary cited source for their specific education niche in generative search.
                    </p>
                    <button className="bg-white text-gray-900 w-max px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-white/10">
                        Read Case Study
                    </button>
                </div>

                <div className="bg-black/40 p-12 md:p-20 flex flex-col justify-center relative overflow-hidden backdrop-blur-xl">
                    <div className="grid grid-cols-2 gap-8 relative z-10 w-full mb-16">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                            <div className="text-6xl md:text-7xl font-sans font-bold text-white tracking-tighter mb-4 flex items-center">
                                <span ref={visRef} className="tabular-nums">0</span>
                                <span className="text-[#F03E2F]">%</span>
                            </div>
                            <div className="font-mono text-gray-400 text-xs md:text-sm uppercase tracking-widest">Visibility Gain</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                            <div className="text-6xl md:text-7xl font-sans font-bold text-white tracking-tighter mb-4 flex items-center">
                                <span ref={leadRef} className="tabular-nums">0.0</span>
                                <span className="text-[#F03E2F]">x</span>
                            </div>
                            <div className="font-mono text-gray-400 text-xs md:text-sm uppercase tracking-widest">Lead Quality</div>
                        </div>
                    </div>

                    <div className="bg-[#111] rounded-2xl p-8 border border-[#F03E2F]/20 relative z-10 shadow-xl group-hover:border-[#F03E2F]/50 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-[#F03E2F] animate-pulse"></div>
                            <div className="font-mono text-xs text-gray-400 uppercase tracking-widest">Technology Detail</div>
                        </div>
                        <div className="text-white font-medium text-xl md:text-2xl leading-snug">Semantic node mapping for legacy migration.</div>
                    </div>

                    {/* Abstract background blobs for visual impact */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F03E2F]/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
