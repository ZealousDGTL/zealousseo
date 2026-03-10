export function TrustBar() {
    const brands = [
        { name: "Caldera ALC", abbr: "CA" },
        { name: "Vantage Group", abbr: "VG" },
        { name: "Meridian Labs", abbr: "ML" },
        { name: "Skyline Co.", abbr: "SC" },
        { name: "Apex Digital", abbr: "AD" },
        { name: "Nuvola SaaS", abbr: "NS" },
        { name: "Forge & Co.", abbr: "FC" },
        { name: "Strata Ops", abbr: "SO" },
    ];

    // Duplicate for seamless loop
    const allBrands = [...brands, ...brands];

    return (
        <section className="py-12 border-y border-gray-200 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-200" />
                <p className="text-sm font-mono text-gray-400 uppercase tracking-widest shrink-0">
                    Powering AI-era visibility for 150+ ambitious brands
                </p>
                <div className="h-px flex-1 bg-gray-200" />
            </div>

            <div className="relative">
                {/* Fade masks on edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div
                    className="flex gap-10 w-max"
                    style={{
                        animation: "trustScroll 40s linear infinite",
                    }}
                >
                    {allBrands.map((brand, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 shrink-0 px-6 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-gray-300 transition-colors group"
                        >
                            <div className="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 font-mono group-hover:bg-[#F03E2F]/10 group-hover:text-[#F03E2F] transition-colors">
                                {brand.abbr}
                            </div>
                            <span className="text-gray-700 font-semibold text-sm whitespace-nowrap">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes trustScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}
