"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Cpu, Globe, Lock, Workflow } from "lucide-react";

const DIFFERENTIATORS = [
    {
        id: "01",
        title: "Standardized Architecture",
        subtitle: "MACH-Certified Foundation",
        desc: "We eliminate technical debt by deploying a single, governed system based on Microservices, API-first, Cloud-native, and Headless standards. No more legacy bloat—just pure, scalable performance.",
        icon: <Cpu className="w-8 h-8" />,
        color: "#F03E2F",
    },
    {
        id: "02",
        title: "Neural Retrieval",
        subtitle: "AI-First Visibility",
        desc: "Optimizing for the Agentic future. We map your brand entities for Generative Engine Retrieval, ensuring you appear in AI answers, not just search results. Deep semantic relevance is our default.",
        icon: <Globe className="w-8 h-8" />,
        color: "#F03E2F",
    },
    {
        id: "03",
        title: "Global Edge Governance",
        subtitle: "Sub-Second Execution",
        desc: "Your digital presence across the global edge. We ensure sub-second response times and 100% uptime through distributed infrastructure, governed by a unified security protocol.",
        icon: <Shield className="w-8 h-8" />,
        color: "#F03E2F",
    },
    {
        id: "04",
        title: "Entity Sovereignty",
        subtitle: "Total Brand Ownership",
        desc: "You own the code, the keys, and the data. We replace 'Rented Audience' cycles with permanent infrastructure that builds compounding value for your enterprise, not the agency.",
        icon: <Lock className="w-8 h-8" />,
        color: "#F03E2F",
    },
    {
        id: "05",
        title: "Direct Orchestration",
        subtitle: "No Agency Lag",
        desc: "Real-time patching and real-time scaling. Our agentic workflows eliminate approval loops and manual review cycles. Strategy is executed at the speed of thought.",
        icon: <Workflow className="w-8 h-8" />,
        color: "#F03E2F",
    },
];

export function Differentiators() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 md:py-48 bg-black text-white overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-24">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 font-serif italic">
                        The Unity <span className="text-[#F03E2F]">Differentiators.</span>
                    </h2>
                    <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.4em]">
                        Standardizing the Enterprise Search Lifecycle
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left side numbers */}
                    <div className="lg:col-span-5 space-y-4">
                        {DIFFERENTIATORS.map((item, idx) => (
                            <button
                                key={item.id}
                                onMouseEnter={() => setActiveIndex(idx)}
                                className={`w-full text-left group transition-all duration-500 py-6 border-b border-white/10 flex items-center justify-between ${activeIndex === idx ? "opacity-100" : "opacity-30 hover:opacity-50"
                                    }`}
                            >
                                <div className="flex items-center gap-8">
                                    <span className={`text-2xl font-mono ${activeIndex === idx ? "text-[#F03E2F]" : "text-white"}`}>
                                        {item.id}
                                    </span>
                                    <span className="text-3xl md:text-4xl font-bold tracking-tight">
                                        {item.title}
                                    </span>
                                </div>
                                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${activeIndex === idx ? "bg-[#F03E2F] scale-150" : "bg-white/20"
                                    }`} />
                            </button>
                        ))}
                    </div>

                    {/* Right side content */}
                    <div className="lg:col-span-7 h-full min-h-[500px] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-12 md:p-16 h-full backdrop-blur-3xl flex flex-col justify-between group"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F03E2F]/10 blur-[100px] -z-10 group-hover:bg-[#F03E2F]/20 transition-all" />

                                <div>
                                    <div className="mb-12 inline-block p-4 bg-[#F03E2F]/10 rounded-2xl text-[#F03E2F] border border-[#F03E2F]/20">
                                        {DIFFERENTIATORS[activeIndex].icon}
                                    </div>
                                    <h3 className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-4">
                                        {DIFFERENTIATORS[activeIndex].subtitle}
                                    </h3>
                                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight">
                                        {DIFFERENTIATORS[activeIndex].title}
                                    </h2>
                                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-xl">
                                        {DIFFERENTIATORS[activeIndex].desc}
                                    </p>
                                </div>

                                <div className="mt-16 pt-12 border-t border-white/5">
                                    <div className="flex items-center gap-12">
                                        <div>
                                            <span className="block text-[10px] uppercase tracking-widest text-[#F03E2F] mb-1">Impact</span>
                                            <span className="text-2xl font-bold">Exponential</span>
                                        </div>
                                        <div>
                                            <span className="block text-[10px] uppercase tracking-widest text-[#F03E2F] mb-1">Latency</span>
                                            <span className="text-2xl font-bold text-green-400">Low</span>
                                        </div>
                                        <div>
                                            <span className="block text-[10px] uppercase tracking-widest text-[#F03E2F] mb-1">Redundancy</span>
                                            <span className="text-2xl font-bold">Zero</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
