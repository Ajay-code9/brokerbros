import React from 'react';
import { ArrowRight, ArrowDownRight, ShieldCheck, Zap, Search, Activity, CheckCircle2, Lock } from 'lucide-react';
import { StickyPricingNav } from '../../components/Pricing/StickyPricingNav';
import { ShortSaleCostsSection } from '../../components/Pricing/ShortSaleCostsSection';
import { FeeTransparencyCards } from '../../components/Pricing/FeeTransparencyCards';
import { InteractivePricingCalculator } from '../../components/Pricing/InteractivePricingCalculator';
import { PricingFAQAccordion } from '../../components/Pricing/PricingFAQAccordion';
import { PricingCTA } from '../../components/Pricing/PricingCTA';

interface ShortSaleCostPageProps {
  onOpenAccount: () => void;
}

export const ShortSaleCostPage: React.FC<ShortSaleCostPageProps> = ({ onOpenAccount }) => {
  const scrollToCalculator = () => {
    const el = document.getElementById('pricing-calculator');
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-slate-900 font-sans antialiased selection:bg-emerald-500 selection:text-white">
      
      {/* Dedicated Short Sale Hero */}
      <section
        className="relative text-slate-900 min-h-[120vh] border-b border-slate-100 overflow-hidden font-sans flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/backgroundpricethird.png')" }}
      >
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-50/60 rounded-full blur-[140px] pointer-events-none" />
        {/* Subtle white overlay to slightly dull the background */}
        <div className="absolute inset-0 bg-white/20 pointer-events-none" />

        {/* Main content — vertically centered in the viewport */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 w-full">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Transparent Short Borrow Rates & <br />
              <span className="text-emerald-600">Hard-To-Borrow (HTB) Locates</span>
            </h1>

            <p className="text-slate-900 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-semibold bg-white/65 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/80 shadow-sm">
              Access automated real-time short locate tools, transparent daily borrow rates, and earn 50% interest return when your fully paid stock is lent out.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={onOpenAccount}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <span>Search Live Stock Locates</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToCalculator}
                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Calculate Short Savings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stat Badges — pinned to bottom, visible only on scroll */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-8 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-slate-100 pt-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-950 font-mono">100k+ Symbols</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Real-Time Short Locates</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">50% Yield Share</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Earned on Fully Paid Securities</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-950 font-mono">Pre-Borrow API</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Automated Short Reservation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Section: Short Sale Borrow Rates & HTB Tool */}
      <div id="short-sale-cost" className="py-4">
        <ShortSaleCostsSection />
      </div>

      {/* Stock Yield Enhancement Program Card */}
      <section className="py-12 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>Stock Yield Enhancement Program</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Earn Extra Income on Stocks You Already Own</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                When you opt in, BrokerBros can lend out your fully paid stock to traders seeking short locates. You receive 50% of the daily market borrow fee while retaining 100% economic ownership and dividend rights.
              </p>
            </div>

            <button
              onClick={onOpenAccount}
              className="shrink-0 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-sm cursor-pointer"
            >
              Opt In to Stock Yield Program
            </button>
          </div>
        </div>
      </section>

      {/* Fee Transparency Cards */}
      <FeeTransparencyCards />

      {/* Interactive Savings Calculator */}
      <InteractivePricingCalculator onOpenAccount={onOpenAccount} />

      {/* FAQ Section */}
      <PricingFAQAccordion />

      {/* CTA Section */}
      <PricingCTA onOpenAccount={onOpenAccount} onScrollToCalculator={scrollToCalculator} />
    </div>
  );
};
