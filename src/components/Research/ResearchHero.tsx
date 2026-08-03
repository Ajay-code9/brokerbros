import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Newspaper, BarChart3, Activity, Globe2, Cpu } from 'lucide-react';
import { VideoHeroBackground } from '../Common/VideoHeroBackground';

interface ResearchHeroProps {
  onOpenAccount: () => void;
  onExploreResearch: () => void;
  onViewSnapshot: () => void;
}

export const ResearchHero: React.FC<ResearchHeroProps> = ({
  onOpenAccount,
  onExploreResearch,
  onViewSnapshot
}) => {
  return (
    <section className="relative bg-gradient-to-b from-[#06141D] via-[#0B1E2B] to-[#0A1A24] text-white py-8 lg:py-14 min-h-[calc(100vh-80px)] flex items-center border-b border-emerald-900/40 overflow-hidden font-sans">

      {/* Colorful Gradient Lighting & Mesh Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-teal-400/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Video Background Layer */}
      <VideoHeroBackground videoSrc="/test2.mp4" opacity={0.35} theme="dark" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-4 lg:space-y-6">

          {/* Live Financial Data Ticker Status Bar (Wall Street Style) */}
          <div className="inline-flex flex-wrap items-center gap-3 px-3.5 py-1.5 bg-[#0D2231] text-white rounded-lg border border-slate-800 shadow-md font-mono text-[11px] mx-auto">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-bold tracking-wider">REFINITIV & BLOOMBERG FEED</span>
            </div>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">IV Surface:</span>
              <span className="text-white font-bold">18.4%</span>
              <span className="text-emerald-400 font-bold">▲ +1.2%</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="text-slate-400">Model:</span>
              <span className="text-cyan-300 font-bold">Black-Scholes 1.2ms</span>
            </div>
          </div>

          {/* Crisp Direct Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white font-sans">
            Microsecond Quantitative <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Market Intelligence Desk.
            </span>
          </h1>

          {/* Direct Copywriting */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans font-normal">
            Direct access to institutional order flow analytics, option implied volatility skew surfaces, real-time macroeconomic event modeling, and SEC Edgar corporate filing alerts.
          </p>

          {/* Action Buttons */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onExploreResearch}
              className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 text-slate-950 font-black rounded-xl shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
            >
              <span>Explore Research Terminal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onViewSnapshot}
              className="px-5 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-cyan-300 font-bold rounded-xl border border-cyan-500/40 shadow-lg backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
            >
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Live Volatility Matrix</span>
            </button>
          </div>

          {/* Quantitative Desk Highlights */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center max-w-3xl mx-auto font-mono text-xs">
            <div className="bg-[#0D2231]/90 p-4 rounded-xl border border-emerald-500/30">
              <div className="text-slate-400 text-[11px]">Option Skew Models</div>
              <div className="text-emerald-400 font-bold text-xs sm:text-sm mt-1">Black-Scholes Engine</div>
            </div>
            <div className="bg-[#0D2231]/90 p-4 rounded-xl border border-emerald-500/30">
              <div className="text-slate-400 text-[11px]">Macro Event Feed</div>
              <div className="text-white font-bold text-xs sm:text-sm mt-1">24/5 Economic Clock</div>
            </div>
            <div className="bg-[#0D2231]/90 p-4 rounded-xl border border-emerald-500/30">
              <div className="text-slate-400 text-[11px]">Corporate Edgar Filings</div>
              <div className="text-emerald-400 font-bold text-xs sm:text-sm mt-1">1.2ms SEC Streaming</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
