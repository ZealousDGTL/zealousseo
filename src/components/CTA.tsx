"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import React from "react";

export function CTA() {
    return (
        <section className="bg-black py-64 px-6 text-center border-t border-white/5 relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F03E2F]/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-900/10 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#F03E2F] font-mono tracking-[0.4em] uppercase text-xs mb-12 block"
                >
                    Final Synchronization
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl lg:text-[10rem] font-serif italic text-white mb-16 tracking-tighter leading-[0.85]"
                >
                    Redefine your <br />
                    <span className="text-[#F03E2F]">standard.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-3xl text-gray-500 font-light mb-24 max-w-3xl mx-auto leading-relaxed"
                >
                    Standardize your operations on a single, governed system. <br className="hidden md:block" />
                    Eliminate the implementation queue today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col lg:flex-row gap-10 justify-center items-center"
                >
                    <Link
                        href="/contact"
                        className="w-full lg:w-auto bg-[#F03E2F] text-white px-16 py-8 md:px-24 md:py-12 rounded-[2rem] md:rounded-[4rem] font-bold text-3xl md:text-5xl hover:bg-white hover:text-black transition-all duration-500 shadow-[0_20px_60px_-15px_rgba(240,62,47,0.5)] flex items-center justify-center gap-6 group"
                    >
                        Get Started Now
                        <ArrowRight size={48} className="group-hover:translate-x-4 transition-transform duration-500" />
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full lg:w-auto border-2 border-white/20 text-white px-16 py-8 md:px-24 md:py-12 rounded-[2rem] md:rounded-[4rem] font-bold text-3xl md:text-5xl hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-6 group"
                    >
                        Contact Sales
                        <MessageSquare size={48} className="group-hover:scale-110 transition-transform duration-500" />
                    </Link>
                </motion.div>

                {/* Status Bar */}
                <div className="mt-48 pt-24 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="text-left space-y-4 p-8 border border-white/5 rounded-3xl bg-white/[0.02]">
                        <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest text-[#F03E2F]">System Health</div>
                        <div className="text-2xl font-serif italic text-white">99.9% Up-time Guaranteed</div>
                    </div>
                    <div className="text-left space-y-4 p-8 border border-white/5 rounded-3xl bg-white/[0.02]">
                        <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest text-[#F03E2F]">Deployment Velocity</div>
                        <div className="text-2xl font-serif italic text-white">Instant Global Propagation</div>
                    </div>
                    <div className="text-left space-y-4 p-8 border border-white/5 rounded-3xl bg-white/[0.02]">
                        <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest text-[#F03E2F]">Security Protocol</div>
                        <div className="text-2xl font-serif italic text-white">SOC 2 Type II Compliant</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
