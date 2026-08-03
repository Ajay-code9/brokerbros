import React, { useState, useEffect } from 'react';
import {
  Monitor,
  Zap,
  Activity,
  ArrowRight,
  Download,
  Cpu
} from 'lucide-react';
import { useRouter } from '../../router';
import { VideoHeroBackground } from '../Common/VideoHeroBackground';

interface HeroProps {
  onOpenAccount: () => void;
}

export const PlatformsHero: React.FC<HeroProps> = ({ onOpenAccount }) => {
  const { navigate } = useRouter();
  const [livePrice, setLivePrice] = useState(128.45);
  const [priceChange, setPriceChange] = useState(3.82);

  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * 0.35;
      setLivePrice((prev) => Number((prev + delta).toFixed(2)));
      setPriceChange((prev) => Number((prev + delta * 0.1).toFixed(2)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#06141D] text-white py-12 lg:py-20 min-h-[calc(100vh-80px)] flex items-center border-b border-emerald-900/40 overflow-hidden font-sans">
      
      {/* Mesh Glow Lighting Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Video Background Layer */}
      <VideoHeroBackground videoSrc="/test.mp4" opacity={0.35} theme="dark" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto space-y-4 lg:space-y-6">
          
          {/* Live Data Ticker Status Bar (Wall Street Style) */}
          <div className="inline-flex flex-wrap items-center gap-3 px-3.5 py-1.5 bg-[#0D2231] text-white rounded-lg border border-slate-800 shadow-md font-mono text-[11px] mx-auto">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-bold tracking-wider">SUB-MILLISECOND NY4 / LD4 LATENCY</span>
            </div>
            <span className="text-slate-700">|</span>
            <span className="text-cyan-300 font-bold">SMART ROUTE 1.2MS FILL</span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-emerald-400 font-bold hidden sm:inline">150+ VENUES CONNECTED</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white font-sans">
            Trade with <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Microsecond Precision
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Direct market access across all asset classes with sub-millisecond execution, institutional order flow routing, and advanced algorithmic tools.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 my-3 sm:my-5 py-1">
            <button
              onClick={onOpenAccount}
              className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 text-slate-950 font-black rounded-xl shadow-xl shadow-emerald-500/25 transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
            >
              <span>Open Free Trading Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('/platforms/desktop')}
              className="px-5 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-cyan-300 font-bold rounded-xl border border-cyan-500/40 shadow-lg backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Platform (.exe / .dmg)</span>
            </button>
          </div>
        </div>

        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl opacity-20 blur-xl" />
          <div className="relative bg-[#0B1E2B] rounded-2xl border border-emerald-500/20 p-6 md:p-10 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Monitor className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Desktop Professional Workstation</h3>
                  <p className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                    <Activity className="w-3 h-3" /> Latency: 3.8ms (NY4)
                  </p>
                </div>
              </div>
              <div className="hidden md:block">
                <span className="text-3xl font-mono font-bold text-white">${livePrice.toFixed(2)}</span>
                <span className="ml-3 text-emerald-400 font-bold font-mono">+{priceChange.toFixed(2)}%</span>
              </div>
            </div>

            <div className="w-full h-64 md:h-96 bg-[#06141D] rounded-xl border border-emerald-500/10 flex items-center justify-center overflow-hidden relative group">
              <img
                src="/trading_platform_desktop.png"
                alt="Desktop Trading Terminal"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
