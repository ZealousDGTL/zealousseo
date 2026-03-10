"use client";

import React from "react";

export const FeatureRow = ({ title, children, image, reverse }: { title: string, children: React.ReactNode, image: string, reverse?: boolean }) => (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center py-20 border-b border-white/5 last:border-0`}>
        <div className="lg:w-1/2 space-y-8">
            <h3 className="text-4xl md:text-5xl font-serif italic tracking-tighter text-white !mt-0 !mb-0">{title}</h3>
            <div className="text-xl text-gray-400 font-light leading-relaxed space-y-6">
                {children}
            </div>
        </div>
        <div className="lg:w-1/2 w-full h-[350px] md:h-[500px] relative rounded-[2.5rem] overflow-hidden border border-white/10 group bg-white/[0.02] shadow-2xl">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#F03E2F] animate-pulse" />
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Live Visual Asset</span>
            </div>
        </div>
    </div>
);

export const ImageCollage = ({ images }: { images: string[] }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-24">
        {images.map((img, i) => (
            <div key={i} className={`h-64 md:h-80 rounded-3xl overflow-hidden border border-white/10 ${i === 0 ? 'md:col-span-2' : ''} shadow-2xl`}>
                <img src={img} alt="Visual Artifact" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" />
            </div>
        ))}
    </div>
);
