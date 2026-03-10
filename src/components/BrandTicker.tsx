"use client";

import { motion } from "framer-motion";
import React from "react";

const BRANDS = [
    { name: "Make", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Make.com_logo.svg" },
    { name: "Lovable", logo: "https://lovable.dev/favicon.ico" }, // Placeholder favicon
    { name: "Anthropic", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Anthropic_logo.svg/2560px-Anthropic_logo.svg.png" },
    { name: "Gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Google_Gemini_logo.svg/2560px-Google_Gemini_logo.svg.png" },
    { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
    { name: "Supabase", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Supabase_logo.svg" },
    { name: "Pinecone", logo: "https://raw.githubusercontent.com/pinecone-io/docs/master/static/img/logo.svg" },
    { name: "N8N", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/N8N_logo.svg" },
    { name: "Vercel", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
];

export function BrandTicker() {
    return (
        <div className="w-full bg-black/50 backdrop-blur-sm border-y border-white/5 py-12 overflow-hidden">
            <div className="flex whitespace-nowrap">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex gap-20 md:gap-40 items-center px-20"
                >
                    {[...BRANDS, ...BRANDS].map((brand, idx) => (
                        <div key={idx} className="flex items-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default px-4">
                            {brand.logo ? (
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="h-8 md:h-12 w-auto object-contain filter invert brightness-200"
                                    onError={(e) => {
                                        // Fallback to text if image fails
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                            ) : null}
                            <span className="hidden text-xl md:text-2xl font-bold tracking-tighter text-white uppercase font-serif italic">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
