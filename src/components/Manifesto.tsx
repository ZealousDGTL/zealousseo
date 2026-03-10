"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Very simple word/line reveal without paying for SplitText
            gsap.fromTo(
                ".manifesto-line",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full py-48 px-6 md:px-12 bg-black text-paper overflow-hidden"
        >
            {/* Low-opacity parallax organic texture */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-screen grayscale"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop')` }}
            />

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
                <div className="manifesto-line font-mono text-paper/60 text-sm md:text-base mb-12 uppercase tracking-widest">
                    Most agencies focus on: <span className="text-paper line-through">Outbound spam, rented platforms, and temporary patches.</span>
                </div>

                <h2 className="flex flex-col items-center">
                    <span className="manifesto-line font-sans font-bold text-4xl md:text-6xl lg:text-7xl uppercase mb-2">
                        We focus on:
                    </span>
                    <span className="manifesto-line font-serif italic text-5xl md:text-7xl lg:text-8xl text-[#F03E2F] mt-4 mb-20">
                        Total Infrastructure Ownership.
                    </span>
                </h2>

                <div className="manifesto-line text-left grid grid-cols-1 md:grid-cols-2 gap-16 mt-20 border-t border-white/10 pt-20">
                    <div className="space-y-8">
                        <h3 className="text-3xl font-serif italic text-white leading-snug">The End of Rented Visibility.</h3>
                        <p className="text-xl text-gray-500 leading-relaxed">
                            For too long, businesses have built their digital presence on borrowed ground. Legacy agencies rent access to audiences, rely on temporary search hacks, and deliver "black box" reports that hide structural decay. At Zealous Digital, we reject this paradigm. We believe that your digital infrastructure should be an asset, not an expense. We help you transition from rented visibility to permanent digital ownership, building engines that function with 100% accuracy and scalability.
                        </p>
                    </div>
                    <div className="space-y-8">
                        <h3 className="text-3xl font-serif italic text-white leading-snug">The Standardized Single System.</h3>
                        <p className="text-xl text-gray-400 leading-relaxed font-light">
                            Complexity is the enemy of scale. Our agency operating system represents the peak of digital orchestration—a "Standardized Single System" that unifies brand identity, technical AEO, and operational automation. By leveraging MACH-certified principles, we ensure that every node in our network is interchangeable, scalable, and optimized for Answer Engine Optimization (AEO). This is how we achieve a 14-day average deployment for complex AI infrastructure.
                        </p>
                    </div>
                </div>

                <div className="manifesto-line mt-32 text-center max-w-3xl">
                    <p className="text-2xl text-gray-400 font-serif leading-relaxed italic">
                        "In the AI economy, your search presence is your commercial frequency. If your signal is weak, you are invisible to the algorithms that now govern human choice. We tune your frequency to dominate."
                    </p>
                    <div className="mt-8 font-mono text-xs uppercase tracking-[0.4em] text-[#F03E2F]">
                        — Protocol Execution Group
                    </div>
                </div>
            </div>
        </section>
    );
}
