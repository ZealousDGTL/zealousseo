"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BrandTicker } from "./BrandTicker";

// High-Impact Cinematic Hero
export function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[900px] flex items-center justify-center overflow-hidden bg-black">
            {/* High-Impact Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-60 grayscale scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-1" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,62,47,0.15),transparent_70%)] z-1" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-12"
                >
                    <span className="text-[#F03E2F] font-mono tracking-[0.6em] uppercase text-[10px] border border-[#F03E2F]/40 px-6 py-2 rounded-full bg-[#F03E2F]/5 backdrop-blur-md">
                        Standardized Single System // FY2026
                    </span>
                </motion.div>

                <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium text-white mb-12 tracking-tighter leading-[0.85] flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="font-instrument"
                    >
                        Redefining the Search
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="font-instrument"
                    >
                        Lifecycle
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        className="font-instrument italic text-gray-400"
                    >
                        through Agentic
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        className="font-instrument italic text-[#F03E2F]"
                    >
                        Intelligence.
                    </motion.span>
                </h1>

                <div className="max-w-4xl mx-auto space-y-8 mb-20">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="text-xl md:text-2xl text-gray-400 font-light leading-snug tracking-tight italic"
                    >
                        We architect the complete search infrastructure your business owns forever.<br />
                        No SaaS sprawl. No vendor lock-in. No implementation queue.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.5 }}
                        className="text-lg md:text-xl text-gray-500 font-mono uppercase tracking-[0.2em] max-w-2xl mx-auto"
                    >
                        Deploy your topology in weeks. Own your visibility for life.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="flex flex-col sm:flex-row gap-8"
                >
                    <button className="boutique-button group">
                        Inaugurate Your Engine
                        <ArrowRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" />
                    </button>
                    <button className="px-12 py-5 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all backdrop-blur-sm">
                        Technical Capability
                    </button>
                </motion.div>
            </div>

            {/* Bottom Brand Ticker Strip */}
            <div className="absolute bottom-0 left-0 w-full z-20">
                <div className="px-12 mb-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-white/30">
                        Orchestrating across the AI Spectrum:
                    </span>
                </div>
                <BrandTicker />
            </div>

            {/* Scroll Interaction Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white to-transparent" />
                <span className="font-mono text-[10px] tracking-widest uppercase">Scroll to Scale</span>
            </motion.div>
        </section>
    );
}
