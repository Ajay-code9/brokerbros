import React from 'react';
import { ArrowRight, Calculator, ShieldCheck, Sparkles, Building2, PhoneCall } from 'lucide-react';

interface PricingCTAProps {
  onOpenAccount: () => void;
  onScrollToCalculator: () => void;
}

export const PricingCTA: React.FC<PricingCTAProps> = ({ onOpenAccount, onScrollToCalculator }) => {
  return (
    <section className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-600/15 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10 font-sans">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>JOIN OVER 450,000 TRADERS WORLDWIDE</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-heading font-semibold text-white tracking-tight leading-[1.15]">
          Start Trading with Institutional Pricing Today
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
          Open your account in under 3 minutes. Experience transparent rates, <strong className="text-white">4.85% APY cash yield</strong>, and wholesale margin borrowing with zero hidden maintenance fees.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAccount}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-xl shadow-emerald-950 transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Open Pro Account</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onScrollToCalculator}
            className="w-full sm:w-auto px-7 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm rounded-xl border border-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>Calculate Your Savings</span>
          </button>

          <a
            href="tel:18005550199"
            className="w-full sm:w-auto px-6 py-4 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs rounded-xl border border-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Building2 className="w-4 h-4 text-slate-400" />
            <span>Institutional Desk (+1 800-555-0199)</span>
          </a>
        </div>

        {/* Guarantees */}
        <div className="pt-8 border-t border-slate-900 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> $2.5M FDIC Sweep Protection</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> $500k SIPC Account Protection</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Free ACATS Portfolio Transfer Reimbursement</span>
        </div>

      </div>
    </section>
  );
};
