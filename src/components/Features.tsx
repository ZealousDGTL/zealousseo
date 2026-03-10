"use client";

import { useEffect, useRef, useState } from "react";
import { MousePointer2 } from "lucide-react";

// Micro-UI 1: Diagnostic Shuffler
function DiagnosticShuffler() {
    // We use standard React state for the shuffling order
    const [cards, setCards] = useState([
        { id: 1, text: "AI-Driven Automation" },
        { id: 2, text: "Seamless Deployment" },
        { id: 3, text: "Long-Term Scalability" },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards((prev) => {
                const newCards = [...prev];
                const last = newCards.pop()!;
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[300px] flex items-center justify-center bg-off-white rounded-[2rem] border border-black/10 shadow-sm overflow-hidden p-6">
            <div className="absolute top-4 left-4 font-mono text-xs text-black/50 uppercase tracking-widest">
                01 // Shuffler Protocol
            </div>

            <div className="relative w-full max-w-[280px] h-[120px]">
                {cards.map((card, index) => {
                    // Calculate dynamic styles based on array position
                    const isTop = index === 0;
                    const translateY = index * 20;
                    const scale = 1 - index * 0.05;
                    const opacity = 1 - index * 0.2;
                    const zIndex = 3 - index;

                    return (
                        <div
                            key={card.id}
                            className={`absolute top-0 left-0 w-full h-full bg-paper border border-black/10 rounded-xl p-4 shadow-sm flex items-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isTop ? "text-black border-l-4 border-l-signal-red" : "text-black/60"
                                }`}
                            style={{
                                transform: `translateY(${translateY}px) scale(${scale})`,
                                opacity: opacity,
                                zIndex: zIndex,
                            }}
                        >
                            <span className="font-sans font-bold text-lg">{card.text}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// Micro-UI 2: Telemetry Typewriter
function TelemetryTypewriter() {
    const [text, setText] = useState("");
    const fullText = "Growth Partner deployment optimized for long trajectory...";
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i <= fullText.length) {
                setText(fullText.slice(0, i));
                i++;
            } else {
                // Reset after a pause
                setTimeout(() => { i = 0; setText(""); }, 3000);
            }
        }, 50);

        const cursorInterval = setInterval(() => {
            setCursorVisible((v) => !v);
        }, 500);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, [fullText]);

    return (
        <div className="relative w-full h-[300px] flex items-center justify-center bg-black rounded-[2rem] shadow-sm overflow-hidden p-6 text-paper border border-white/10">
            <div className="absolute top-4 left-4 font-mono text-xs text-paper/50 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-signal-red animate-pulse" />
                02 // Telemetry Sync
            </div>

            <div className="w-full font-mono text-sm md:text-base p-4 border border-white/10 rounded-xl bg-white/5">
                <span className="text-signal-red mr-2">{">"}</span>
                <span>{text}</span>
                <span className={`inline-block w-2 bg-signal-red h-[1em] ml-1 align-middle transition-opacity duration-75 ${cursorVisible ? "opacity-100" : "opacity-0"}`} />
            </div>
        </div>
    );
}

// Micro-UI 3: Protocol Scheduler
function ProtocolScheduler() {
    const days = ["M", "T", "W", "T", "F", "S", "S"];
    const [activeCell, setActiveCell] = useState(-1);
    const cursorRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let step = 0;
        const maxSteps = 10;

        // Simple state machine for the animated cursor
        const interval = setInterval(() => {
            if (!cursorRef.current || !containerRef.current) return;

            if (step === 0) {
                // Reset and enter
                cursorRef.current.style.opacity = "1";
                cursorRef.current.style.transform = "translate(10px, 150px)";
                setActiveCell(-1);
            } else if (step === 2) {
                // Move to a cell (Wednesday - index 2)
                cursorRef.current.style.transform = "translate(120px, 60px)";
            } else if (step === 4) {
                // Click
                cursorRef.current.style.transform = "translate(120px, 60px) scale(0.9)";
                setActiveCell(2);
            } else if (step === 5) {
                // Release click
                cursorRef.current.style.transform = "translate(120px, 60px) scale(1)";
            } else if (step === 7) {
                // Move to save
                cursorRef.current.style.transform = "translate(220px, 120px)";
            } else if (step === 9) {
                // Click save and fade out
                cursorRef.current.style.transform = "translate(220px, 120px) scale(0.9)";
                cursorRef.current.style.opacity = "0";
            }

            step = (step + 1) % maxSteps;
        }, 600);

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-[300px] flex flex-col justify-center bg-off-white rounded-[2rem] border border-black/10 shadow-sm overflow-hidden p-6">
            <div className="absolute top-4 left-4 font-mono text-xs text-black/50 uppercase tracking-widest">
                03 // Protocol Scheduler
            </div>

            <div className="grid grid-cols-7 gap-1 md:gap-2 mb-4 mt-8">
                {days.map((d, i) => (
                    <div key={i} className="text-center font-mono text-xs text-black/40">{d}</div>
                ))}
                {Array.from({ length: 7 }).map((_, i) => (
                    <div
                        key={i}
                        className={`aspect-square rounded-md border text-center transition-colors duration-300 flex items-center justify-center font-mono text-sm ${activeCell === i
                                ? "bg-signal-red border-signal-red text-paper"
                                : "border-black/10 bg-paper text-black/20"
                            }`}
                    >
                        {/* Mock dates */}
                        {i + 14}
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-end">
                <div className="px-4 py-1.5 rounded-full bg-paper border border-black/10 text-xs font-sans font-bold text-black/40">
                    SAVE DEPLOYMENT
                </div>
            </div>

            {/* Animated Cursor */}
            <div
                ref={cursorRef}
                className="absolute top-0 left-0 w-8 h-8 pointer-events-none transition-all duration-500 ease-out z-10 flex items-center justify-center opacity-0"
                style={{ transform: "translate(0,0)" }}
            >
                <MousePointer2 className="w-6 h-6 mr-3 mt-3 text-black fill-white drop-shadow-md" />
            </div>
        </div>
    );
}

// Parent Features Section Export
export function Features() {
    return (
        <section className="w-full py-24 px-6 md:px-12 bg-paper text-black relative z-20" id="features">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="font-sans font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-4">
                        Core Infrastructure
                    </h2>
                    <p className="font-mono text-black/60 max-w-xl">
                        We bypass ad-hoc marketing campaigns in favor of systemic, on-premise AI deployments.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <DiagnosticShuffler />
                    <TelemetryTypewriter />
                    <ProtocolScheduler />
                </div>
            </div>
        </section>
    );
}
