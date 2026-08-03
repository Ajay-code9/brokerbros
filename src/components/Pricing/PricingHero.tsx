import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, DollarSign, Percent, Zap, ShieldCheck } from 'lucide-react';
import { VideoHeroBackground } from '../Common/VideoHeroBackground';

interface PricingHeroProps {
  onOpenAccount: () => void;
  onScrollToCalculator: () => void;
}

export const PricingHero: React.FC<PricingHeroProps> = ({ onOpenAccount, onScrollToCalculator }) => {
  return (
    <section className="relative bg-[#06141D] text-white py-3 lg:py-5 min-h-[calc(100vh-64px)] flex items-center border-b border-emerald-900/40 overflow-hidden font-sans">

      {/* Mesh Glow Lighting Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Video Background Layer */}
      <VideoHeroBackground videoSrc="/test.mp4" opacity={0.35} theme="dark" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-2.5 lg:space-y-3.5">

          {/* Live Data Ticker Status Bar (Wall Street Style) */}
          <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 bg-[#0D2231] text-white rounded-lg border border-slate-800 shadow-md font-mono text-[10px] sm:text-[11px] mx-auto">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-bold tracking-wider">SEC RULE 15c3-3 COMPLIANT</span>
            </div>
            <span className="text-slate-700">|</span>
            <span className="text-cyan-300 font-bold">4.85% APY CASH SWEEP</span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-emerald-400 font-bold hidden sm:inline">5.83% MARGIN RATE</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-white tracking-tight leading-[1.12] font-sans">
            Institutional Pricing Built for <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Serious Capital & High Volume
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans max-w-2xl mx-auto">
            Pure execution pricing without hidden markups. Earn <strong className="text-emerald-400 font-bold">4.85% APY</strong> automatically on uninvested cash, access wholesale margin borrowing from <strong className="text-emerald-400 font-bold">5.83% APY</strong>, and trade global equities with complete fee transparency.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 my-1.5 py-0.5">
            <button
              onClick={onOpenAccount}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 text-slate-950 font-black rounded-xl shadow-xl shadow-emerald-500/25 transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
            >
              <span>Open Free Trading Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onScrollToCalculator}
              className="px-4 py-2.5 bg-slate-900/90 hover:bg-slate-800 text-cyan-300 font-bold rounded-xl border border-cyan-500/40 shadow-lg backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Calculate Your Cost Savings</span>
            </button>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
            <div className="bg-[#0D2231]/90 backdrop-blur-md p-3 rounded-xl border border-emerald-500/30 shadow-xl flex items-center gap-3 group hover:border-emerald-400 transition-all">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <DollarSign className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white font-mono">$0.00 / Share</div>
                <div className="text-[10px] text-slate-400 font-medium font-sans">Fixed Stock Tier</div>
              </div>
            </div>

            <div className="bg-[#0D2231]/90 backdrop-blur-md p-3 rounded-xl border border-emerald-500/30 shadow-xl flex items-center gap-3 group hover:border-emerald-400 transition-all">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Percent className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">4.85% APY Yield</div>
                <div className="text-[10px] text-slate-400 font-medium font-sans">Auto Cash Sweep</div>
              </div>
            </div>

            <div className="bg-[#0D2231]/90 backdrop-blur-md p-3 rounded-xl border border-emerald-500/30 shadow-xl flex items-center gap-3 group hover:border-emerald-400 transition-all">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-cyan-300 font-mono">5.83% Margin Rate</div>
                <div className="text-[10px] text-slate-400 font-medium font-sans">Wholesale Borrowing</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
