import React from 'react';
import { ArrowRight, DollarSign, ShieldCheck, Zap, HelpCircle, FileText, CreditCard, Wallet } from 'lucide-react';
import { StickyPricingNav } from '../../components/Pricing/StickyPricingNav';
import { OtherFeesAccordionSection } from '../../components/Pricing/OtherFeesAccordionSection';
import { FeeTransparencyCards } from '../../components/Pricing/FeeTransparencyCards';
import { InteractivePricingCalculator } from '../../components/Pricing/InteractivePricingCalculator';
import { PricingFAQAccordion } from '../../components/Pricing/PricingFAQAccordion';
import { PricingCTA } from '../../components/Pricing/PricingCTA';

interface OtherFeesPageProps {
  onOpenAccount: () => void;
}

export const OtherFeesPage: React.FC<OtherFeesPageProps> = ({ onOpenAccount }) => {
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
      
      {/* Dedicated Other Fees Hero */}
      <section
        className="relative text-slate-900 min-h-[120vh] border-b border-slate-100 overflow-hidden font-sans flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/backgroundpricefifth.webp')" }}
      >
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-50/60 rounded-full blur-[140px] pointer-events-none" />
        {/* Subtle white overlay */}
        <div className="absolute inset-0 bg-white/20 pointer-events-none" />

        {/* Main content — vertically centered in the viewport */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 w-full">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Complete Fee Schedule & <br />
              <span className="text-emerald-600">Transparent Administrative Pricing</span>
            </h1>

            <p className="text-slate-900 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-semibold bg-white/65 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/80 shadow-sm">
              Every administrative, wire transfer, corporate action, and regulatory pass-through fee disclosed upfront. No hidden maintenance fees or surprise monthly account minimums.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={onOpenAccount}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <span>View Full Fee Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToCalculator}
                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Calculate Savings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stat Badges — pinned to bottom, visible only on scroll */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-8 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-slate-100 pt-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-950 font-mono">$0 / mo</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Inactivity Fee Policy</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">$0 Minimum</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Account Balance Requirement</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-950 font-mono">SEC / FINRA</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Exact Regulatory Pass-Through</div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Section: Administrative Fee Disclosures */}
      <div id="other-fees" className="py-4">
        <OtherFeesAccordionSection />
      </div>

      {/* PDF Module 13 Crypto & Fiat Payment Gateway Cards */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
              <Wallet className="w-4 h-4 text-emerald-600" />
              <span>Integrated Payment Gateway (PDF Module 13)</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Seamless Deposits & Withdrawals for Global Clients</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Process crypto and fiat funding requests automatically with instant wallet credit, multi-chain confirmations, and zero hidden deposit surcharges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-600 uppercase">Bank Wires & Local Transfers</div>
              <div className="text-lg font-bold text-slate-900">$0 Deposit Fee</div>
              <p className="text-xs text-slate-600 leading-relaxed">Free incoming ACH and bank wire deposits. Outgoing domestic wires billed at raw bank pass-through cost ($10).</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-600 uppercase">Crypto Payment Gateway</div>
              <div className="text-lg font-bold text-slate-900">USDT, USDC, BTC & ETH</div>
              <p className="text-xs text-slate-600 leading-relaxed">Instant blockchain confirmation tracking with automated sub-account credit and zero deposit markup.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-600 uppercase">ACATS Portfolio Transfers</div>
              <div className="text-lg font-bold text-slate-900">Up to $150 Reimbursed</div>
              <p className="text-xs text-slate-600 leading-relaxed">Transfer your existing stock or options portfolio from another broker and get transfer fees automatically reimbursed.</p>
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
