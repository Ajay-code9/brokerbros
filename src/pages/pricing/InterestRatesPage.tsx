import React from 'react';
import { ArrowRight, Percent, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import { CashYieldSection } from '../../components/Pricing/CashYieldSection';
import { FeeTransparencyCards } from '../../components/Pricing/FeeTransparencyCards';
import { InteractivePricingCalculator } from '../../components/Pricing/InteractivePricingCalculator';
import { PricingFAQAccordion } from '../../components/Pricing/PricingFAQAccordion';
import { PricingCTA } from '../../components/Pricing/PricingCTA';

interface InterestRatesPageProps {
  onOpenAccount: () => void;
}

export const InterestRatesPage: React.FC<InterestRatesPageProps> = ({ onOpenAccount }) => {
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
      
      {/* Dedicated Interest Rates & Margin Hero */}
      <section
        className="relative text-slate-900 min-h-[120vh] border-b border-slate-200 overflow-hidden font-sans bg-cover bg-center bg-no-repeat flex flex-col"
        style={{ backgroundImage: "url('/backgroundtwo.png')" }}
      >
        {/* Main content — vertically centered in the viewport */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 w-full">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              High-Yield Cash Sweep & <br />
              <span className="text-emerald-700">Wholesale Margin Borrowing Rates</span>
            </h1>

            <p className="text-slate-900 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-semibold bg-white/60 backdrop-blur-xs p-3 rounded-xl border border-white/80 shadow-2xs">
              Earn 4.85% APY on uninvested cash automatically swept into FDIC-insured partner bank accounts. Access wholesale margin loans starting at just 5.83% APY with zero borrowing markup.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <button
                onClick={onOpenAccount}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <span>Start Earning 4.85% APY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToCalculator}
                className="px-5 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm shadow-md"
              >
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Calculate Interest Earnings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stat Badges — pinned to bottom, visible only on scroll */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-8 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-white/60 pt-6 text-center">
            <div className="bg-white/70 backdrop-blur-xs rounded-xl px-4 py-3 border border-white/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-emerald-700 font-mono">4.85% APY</div>
              <div className="text-xs text-slate-700 font-semibold mt-0.5">Uninvested Cash Interest Rate</div>
            </div>
            <div className="bg-white/70 backdrop-blur-xs rounded-xl px-4 py-3 border border-white/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-slate-950 font-mono">5.83% APY</div>
              <div className="text-xs text-slate-700 font-semibold mt-0.5">Wholesale Margin Loan Rate</div>
            </div>
            <div className="bg-white/70 backdrop-blur-xs rounded-xl px-4 py-3 border border-white/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-slate-950 font-mono">$2,500,000</div>
              <div className="text-xs text-slate-700 font-semibold mt-0.5">FDIC Sweep Protection Limit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Section: Cash Yield & Margin Borrowing */}
      <div id="interest-rates" className="py-2">
        <CashYieldSection onOpenAccount={onOpenAccount} />
      </div>

      {/* Custom Interest Rate Highlights Box */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Percent className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Daily Calculation, Monthly Payout</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Interest accrues daily on settled uninvested cash balances and is automatically deposited directly into your account on the 1st business day of each month.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Up to $2.5M FDIC Sweep Protection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Uninvested cash is automatically swept into a network of FDIC-insured program banks, boosting your standard $250k protection up to $2,500,000 per account.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <TrendingUp className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Wholesale Margin Loans (5.83% - 6.83%)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Borrow against your portfolio at raw benchmark rates. Save over 5.0% compared to traditional retail brokerage margin charges of 11.5% - 13.0% APY.
              </p>
            </div>
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
