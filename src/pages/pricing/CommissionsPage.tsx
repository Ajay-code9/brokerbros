import React from 'react';
import { ArrowRight, Layers, ShieldCheck, Zap, CheckCircle2, TrendingUp, DollarSign } from 'lucide-react';
import { CommissionPricingTable } from '../../components/Pricing/CommissionPricingTable';
import { PricingTiersSection } from '../../components/Pricing/PricingTiersSection';
import { FeeTransparencyCards } from '../../components/Pricing/FeeTransparencyCards';
import { CompareBrokerBrosTable } from '../../components/Pricing/CompareBrokerBrosTable';
import { InteractivePricingCalculator } from '../../components/Pricing/InteractivePricingCalculator';
import { PricingFAQAccordion } from '../../components/Pricing/PricingFAQAccordion';
import { PricingCTA } from '../../components/Pricing/PricingCTA';

interface CommissionsPageProps {
  onOpenAccount: () => void;
}

export const CommissionsPage: React.FC<CommissionsPageProps> = ({ onOpenAccount }) => {
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
      
      {/* 1. Dedicated Commissions Hero (Natural Background Image) */}
      <section 
        className="relative text-slate-900 py-16 lg:py-24 border-b border-slate-200 overflow-hidden font-sans bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/commissions-background.webp')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Institutional Commission Schedules & <br />
              <span className="text-emerald-700">Wholesale Volume Tiers</span>
            </h1>

            <p className="text-slate-900 text-sm sm:text-base leading-relaxed font-semibold max-w-2xl mx-auto bg-white/60 backdrop-blur-xs p-3 rounded-xl border border-white/80 shadow-2xs">
              Trade US stocks, spot forex, options, and global futures with complete fee transparency. Zero per-trade markup for brokerages, zero revenue share, and volume-tiered discounts.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={onOpenAccount}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <span>View Full Rate Card</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToCalculator}
                className="px-5 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm shadow-md"
              >
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Calculate Savings</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto border border-slate-200/80 bg-slate-50/60 p-6 rounded-2xl shadow-xs text-center">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-slate-950 font-mono">$0.00 / Share</div>
              <div className="text-xs text-slate-500 font-medium">Fixed Stock Trading Tier</div>
            </div>
            <div className="space-y-1 border-y sm:border-y-0 sm:border-x border-slate-200/80 py-4 sm:py-0">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">0.1 Pips</div>
              <div className="text-xs text-slate-500 font-medium">Spot Forex Raw Spreads</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-slate-950 font-mono">$0.65 / Contract</div>
              <div className="text-xs text-slate-500 font-medium">Options & Futures Pricing</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Primary Asset Class Commission Tables */}
      <div id="commissions" className="py-4">
        <CommissionPricingTable onOpenAccount={onOpenAccount} />
      </div>

      {/* 3. White-Label Technology SaaS Tiers (from PDF Catalog) */}
      <PricingTiersSection onOpenAccount={onOpenAccount} />

      {/* 4. Transparency Guarantee Cards */}
      <FeeTransparencyCards />

      {/* 5. Competitor Comparison Table */}
      <CompareBrokerBrosTable onOpenAccount={onOpenAccount} />

      {/* 6. Interactive Savings Calculator */}
      <InteractivePricingCalculator onOpenAccount={onOpenAccount} />

      {/* 7. FAQ Section */}
      <PricingFAQAccordion />

      {/* 8. CTA Section */}
      <PricingCTA onOpenAccount={onOpenAccount} onScrollToCalculator={scrollToCalculator} />
    </div>
  );
};
