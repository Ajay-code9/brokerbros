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
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] font-sans">
            Transparent White-Label Tech Pricing <br />
            <span className="text-emerald-600">For Brokers & Prop Firms</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Flat monthly SaaS pricing for your entire brokerage stack. No hidden per-trade commissions, zero profit sharing, and full control over your liquidity spreads.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenAccount}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
            >
              <span>Explore SaaS Tiers</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onScrollToCalculator}
              className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Calculate Monthly Savings</span>
            </button>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 text-center max-w-3xl mx-auto border-t border-slate-100">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-950 font-sans">Flat Monthly Fee</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Zero Revenue-Share Cut</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-sans">14 Tech Modules</div>
              <div className="text-xs text-slate-500 font-medium mt-1">CRM, WebTrader, Prop Engine & FIX</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-950 font-sans">&lt; 15 Min SLA</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Dedicated Engineer Support</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
