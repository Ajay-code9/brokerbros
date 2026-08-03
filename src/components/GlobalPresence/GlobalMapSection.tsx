import React, { useState } from 'react';
import { Globe, ArrowRight, TrendingUp, Layers, Coins } from 'lucide-react';

interface GlobalMapSectionProps {
  onOpenAccount: () => void;
}

interface LocationMarker {
  id: string;
  name: string;
  code: string;
  city: string;
  country: string;
  x: number; // percentage
  y: number; // percentage
  volume: string;
  change: string;
}

const MARKERS: LocationMarker[] = [
  { id: 'nyse', name: 'NYSE • NASDAQ', code: 'NYSE / NASDAQ', city: 'New York', country: 'USA', x: 24, y: 36, volume: '$48.2 Billion', change: '+1.35%' },
  { id: 'lse', name: 'London Stock Exchange', code: 'LSE', city: 'London', country: 'UK', x: 46, y: 29, volume: '$12.4 Billion', change: '+0.82%' },
  { id: 'fse', name: 'Frankfurt Stock Exchange', code: 'FSE', city: 'Frankfurt', country: 'Germany', x: 50, y: 28, volume: '$9.8 Billion', change: '+0.64%' },
  { id: 'sgx', name: 'Singapore Exchange', code: 'SGX', city: 'Singapore', country: 'Singapore', x: 74, y: 58, volume: '$6.5 Billion', change: '+1.10%' },
  { id: 'tse', name: 'Tokyo Stock Exchange', code: 'TSE', city: 'Tokyo', country: 'Japan', x: 84, y: 36, volume: '$18.7 Billion', change: '+0.95%' },
  { id: 'asx', name: 'Australian Securities Exchange', code: 'ASX', city: 'Sydney', country: 'Australia', x: 86, y: 74, volume: '$5.3 Billion', change: '+0.48%' },
];

export const GlobalMapSection: React.FC<GlobalMapSectionProps> = ({ onOpenAccount }) => {
  const [selectedMarker, setSelectedMarker] = useState<LocationMarker>(MARKERS[0]);

  return (
    <section id="global-map" className="py-16 sm:py-20 bg-white border-b border-gray-200 relative overflow-hidden font-sans">

      {/* BACKGROUND: Subtle dot grid, soft radial green gradients, <6% opacity map watermark */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Green Gradient Glow */}
        <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-emerald-400/4 rounded-full blur-3xl" />

        {/* Almost Invisible Dot Pattern (<6% opacity) */}
        <svg className="absolute inset-0 w-full h-full opacity-4" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="dot-pattern-light" width="2" height="2" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.4" fill="#0F172A" />
          </pattern>
          <rect width="100" height="100" fill="url(#dot-pattern-light)" />
        </svg>

        {/* Abstract Light Curved Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 1440 600" fill="none">
          <path d="M-100 300 C 300 100, 700 500, 1540 200" stroke="#0F172A" strokeWidth="1.5" />
          <path d="M-100 150 C 400 450, 800 100, 1540 350" stroke="#22C55E" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-Column Layout (Matching Exact Original Height & Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT SIDE: Content, Badge, Clean Headline, 16px Rounded Cards & CTA */}
          <div className="lg:col-span-5 space-y-5 text-left">

            {/* Global Exchange Access Badge */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200/80 shadow-2xs">
                <Globe className="w-3.5 h-3.5 text-emerald-600" />
                <span>GLOBAL EXCHANGE ACCESS</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0F172A] font-sans leading-[1.15]">
              World of Investment Opportunities
            </h2>

            {/* Description */}
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed font-normal max-w-lg">
              Invest globally in stocks, options, futures, currencies, and fixed income from a single unified platform. Fund in 26 currencies.
            </p>

            {/* Three Statistic Cards (Subtle Border, Soft Shadow, 16px Rounded, Hover Effect, Icon Bag) */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="bg-white p-3.5 rounded-[16px] border border-[#E5E7EB] shadow-xs hover:shadow-md hover:border-emerald-200 transition-all duration-200 group">
                <div className="w-7 h-7 rounded-lg bg-[#DCFCE7] text-[#22C55E] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#0F172A] font-mono tracking-tight">150+</div>
                <div className="text-[11px] text-[#64748B] font-medium mt-0.5">Global Markets</div>
              </div>

              <div className="bg-white p-3.5 rounded-[16px] border border-[#E5E7EB] shadow-xs hover:shadow-md hover:border-emerald-200 transition-all duration-200 group">
                <div className="w-7 h-7 rounded-lg bg-[#DCFCE7] text-[#22C55E] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#22C55E] font-mono tracking-tight">35</div>
                <div className="text-[11px] text-[#64748B] font-medium mt-0.5">Countries</div>
              </div>

              <div className="bg-white p-3.5 rounded-[16px] border border-[#E5E7EB] shadow-xs hover:shadow-md hover:border-emerald-200 transition-all duration-200 group">
                <div className="w-7 h-7 rounded-lg bg-[#DCFCE7] text-[#22C55E] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                  <Coins className="w-3.5 h-3.5" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#0F172A] font-mono tracking-tight">26</div>
                <div className="text-[11px] text-[#64748B] font-medium mt-0.5">Currencies</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenAccount}
                className="px-6 py-3.5 bg-[#22C55E] hover:bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center gap-2.5 cursor-pointer group"
              >
                <span>Access Global Markets</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Clean Premium White Dashboard */}
          <div className="lg:col-span-7 bg-white rounded-[24px] border border-[#E5E7EB] p-4 sm:p-6 shadow-xl relative overflow-hidden flex flex-col justify-between h-[420px] sm:h-[450px]">

            {/* Soft Ambient Inner Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

            {/* TOP: Floating Chip */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-gray-200 shadow-xs text-xs font-mono font-bold text-[#0F172A]">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span>{selectedMarker.code} • {selectedMarker.city}, {selectedMarker.country}</span>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-slate-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>DIRECT ROUTING</span>
              </div>
            </div>

            {/* CENTER: Large Dotted World Map Visual + Curved Routes + Location Markers */}
            <div className="relative w-full h-[280px] sm:h-[300px] my-auto">

              {/* Real World Map Image Background Layer */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-1">
                <img
                  src="/worldmap.png"
                  alt="Global World Map"
                  className="w-full h-full object-contain opacity-85 select-none filter brightness-95 contrast-150"
                />
              </div>

              {/* Glowing Curved Connection Routes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Curved Path: New York (24,36) to London (46,29) */}
                <path d="M 24 36 Q 35 20, 46 29" fill="none" stroke="#22C55E" strokeWidth="1.2" strokeDasharray="3 3" className="opacity-90" />
                {/* Curved Path: London (46,29) to Frankfurt (50,28) */}
                <path d="M 46 29 Q 48 26, 50 28" fill="none" stroke="#22C55E" strokeWidth="1.2" strokeDasharray="3 3" className="opacity-90" />
                {/* Curved Path: Frankfurt (50,28) to Singapore (74,58) */}
                <path d="M 50 28 Q 62 42, 74 58" fill="none" stroke="#22C55E" strokeWidth="1.2" strokeDasharray="3 3" className="opacity-75" />
                {/* Curved Path: Singapore (74,58) to Tokyo (84,36) */}
                <path d="M 74 58 Q 79 46, 84 36" fill="none" stroke="#22C55E" strokeWidth="1.2" strokeDasharray="3 3" className="opacity-75" />
                {/* Curved Path: Tokyo (84,36) to Sydney (86,74) */}
                <path d="M 84 36 Q 85 55, 86 74" fill="none" stroke="#22C55E" strokeWidth="1.2" strokeDasharray="3 3" className="opacity-75" />
              </svg>

              {/* Location Markers */}
              {MARKERS.map((marker) => {
                const isSelected = selectedMarker.id === marker.id;
                return (
                  <button
                    key={marker.id}
                    onClick={() => setSelectedMarker(marker)}
                    style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
                  >
                    <span className="relative flex h-7 w-7 items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${isSelected ? 'bg-emerald-400' : 'bg-slate-400'
                        }`} />
                      <span className={`relative inline-flex rounded-full h-3.5 w-3.5 items-center justify-center transition-transform ${isSelected ? 'bg-[#22C55E] ring-4 ring-emerald-100 scale-110' : 'bg-[#0F172A] group-hover:bg-[#22C55E]'
                        }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      </span>
                    </span>

                    {/* Tooltip on hover/active */}
                    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 bg-[#0F172A] text-white text-[10px] font-mono font-bold rounded shadow-md border border-slate-700 whitespace-nowrap transition-all ${isSelected ? 'opacity-100 scale-100 z-30' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 z-20'
                      }`}>
                      {marker.city}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* BOTTOM: Floating Information Card */}
            <div className="relative z-10 bg-white/95 backdrop-blur-xs p-3.5 sm:p-4 rounded-[16px] border border-gray-200/90 shadow-md flex items-center justify-between gap-4 font-sans">
              <div>
                <div className="text-xs sm:text-sm font-extrabold text-[#0F172A]">{selectedMarker.name}</div>
                <div className="text-[11px] text-[#64748B] font-medium">{selectedMarker.city}, {selectedMarker.country}</div>
              </div>

              <div className="flex items-center gap-4">
                {/* Mini Green Sparkline */}
                <div className="hidden sm:block">
                  <svg className="w-16 h-5">
                    <path d="M 0 15 Q 12 18, 24 10 T 48 8 T 64 3" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="text-right">
                  <div className="text-xs sm:text-sm font-black font-mono text-[#0F172A]">{selectedMarker.volume}</div>
                  <div className="text-[10px] font-mono font-bold text-[#22C55E] flex items-center justify-end gap-0.5">
                    <TrendingUp className="w-3 h-3 text-[#22C55E]" />
                    <span>{selectedMarker.change}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

