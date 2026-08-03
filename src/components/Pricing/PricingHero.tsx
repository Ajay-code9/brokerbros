import React from 'react';
import { ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { VideoHeroBackground } from '../Common/VideoHeroBackground';

interface PricingHeroProps {
  onOpenAccount: () => void;
  onScrollToCalculator: () => void;
}

export const PricingHero: React.FC<PricingHeroProps> = ({ onOpenAccount, onScrollToCalculator }) => {
  return (
    <section className="relative bg-white text-slate-900 py-12 lg:py-16 min-h-[calc(100vh-80px)] flex flex-col justify-center border-b border-slate-100 overflow-hidden font-sans">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-5">

          {/* Live Data Ticker Status Bar */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 text-slate-700 rounded-full border border-slate-200/80 text-xs font-mono font-medium mx-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-slate-900 font-bold">SEC RULE 15c3-3 COMPLIANT</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-bold">4.85% APY CASH YIELD</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.12] font-sans">
            Institutional Pricing Built for <br />
            <span className="text-emerald-700">Serious Capital & High Volume</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Pure execution pricing without hidden markups. Earn <strong className="text-slate-900 font-bold">4.85% APY</strong> automatically on uninvested cash, access wholesale margin borrowing from <strong className="text-slate-900 font-bold">5.83% APY</strong>, and trade global equities with complete fee transparency.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenAccount}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
            >
              <span>Open Free Trading Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onScrollToCalculator}
              className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-lg border border-slate-300 transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
            >
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>Calculate Your Savings</span>
            </button>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 text-center max-w-3xl mx-auto border-t border-slate-100">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-sans">$0.00 / Share</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Fixed Stock Tier</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-sans">4.85% APY</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Auto Cash Sweep</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-sans">5.83% APY</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Wholesale Margin Rate</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
