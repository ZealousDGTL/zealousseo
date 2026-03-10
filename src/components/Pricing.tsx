"use client";

import { Check } from "lucide-react";

export function Pricing() {
    return (
        <section className="w-full py-48 px-6 md:px-12 bg-off-white text-black relative z-20" id="pricing">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="font-sans font-bold text-4xl md:text-6xl uppercase tracking-tighter mb-4">
                        Deployment Tiers
                    </h2>
                    <p className="font-mono text-black/60">
                        Infrastructure access tailored to your operational velocity.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                    {/* Base */}
                    <div className="bg-paper border border-black/10 rounded-[2rem] p-8 md:p-12 h-fit">
                        <div className="font-mono text-sm text-black/50 uppercase tracking-widest mb-4">Foundation</div>
                        <div className="font-sans font-bold text-4xl mb-6">Base Tier</div>
                        <p className="font-mono text-sm text-black/60 mb-8 h-12">
                            Essential SEO architecture and digital identity formation.
                        </p>
                        <button className="w-full py-4 border border-black text-black rounded-[2rem] font-sans font-bold uppercase hover:bg-black hover:text-paper transition-colors mb-12">
                            Select Protocol
                        </button>
                        <ul className="space-y-4 font-mono text-sm">
                            <li className="flex items-center gap-3"><Check size={16} className="text-signal-red" /> Technical SEO Audit</li>
                            <li className="flex items-center gap-3"><Check size={16} className="text-signal-red" /> On-page Optimization</li>
                            <li className="flex items-center gap-3"><Check size={16} className="text-signal-red" /> Basic Schema Signals</li>
                        </ul>
                    </div>

                    {/* Performance (Highlighted) */}
                    <div className="bg-black text-paper rounded-[3rem] p-8 md:p-12 scale-100 lg:scale-105 shadow-2xl relative z-10 border border-signal-red/20">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-signal-red text-paper px-4 py-1 rounded-full font-sans font-bold text-xs uppercase tracking-widest">
                            Recommended
                        </div>

                        <div className="font-mono text-sm text-paper/50 uppercase tracking-widest mb-4">Accelerated</div>
                        <div className="font-sans font-bold text-4xl mb-6">Performance</div>
                        <p className="font-mono text-sm text-paper/60 mb-8 h-12">
                            Growth Partner deployment. Connected CRM and content engines.
                        </p>
                        <button
                            className="group relative overflow-hidden w-full py-4 border border-signal-red bg-signal-red text-paper rounded-[2rem] font-sans font-bold uppercase mb-12"
                            style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                        >
                            <span className="relative z-10 transition-colors duration-300">Initiate Protocol</span>
                            <span className="absolute inset-0 z-0 bg-white/20 origin-bottom-left translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </button>
                        <ul className="space-y-4 font-mono text-sm">
                            <li className="flex items-center gap-3"><Check size={16} className="text-signal-red" /> Autonomous Content Engine</li>
                            <li className="flex items-center gap-3"><Check size={16} className="text-signal-red" /> CRM Implementation</li>
                            <li className="flex items-center gap-3"><Check size={16} className="text-signal-red" /> Revenue Orchestration</li>
                            <li className="flex items-center gap-3"><Check size={16} className="text-signal-red" /> Advanced Entity Building</li>
                        </ul>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-paper border border-black/10 rounded-[2rem] p-8 md:p-12 h-fit">
                        <div className="font-mono text-sm text-black/50 uppercase tracking-widest mb-4">Maximum</div>
                        <div className="font-sans font-bold text-4xl mb-6">Enterprise</div>
                        <p className="font-mono text-sm text-black/60 mb-8 h-12">
                            Full on-premise AI integration and custom LLM deployments.
                        </p>
                        <button className="w-full py-4 border border-black text-black rounded-[2rem] font-sans font-bold uppercase hover:bg-black hover:text-paper transition-colors mb-12">
                            Contact Sales
                        </button>
                        <ul className="space-y-4 font-mono text-sm">
                            <li className="flex items-center gap-3"><Check size={16} className="text-signal-red" /> Custom AI Search Opt (GEO)</li>
                            <li className="flex items-center gap-3"><Check size={16} className="text-signal-red" /> Dedicated Infrastructure Server</li>
                            <li className="flex items-center gap-3"><Check size={16} className="text-signal-red" /> Programmatic SEO Generation</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
