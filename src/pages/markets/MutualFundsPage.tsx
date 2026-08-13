import React from 'react';
import { Wallet, ShieldCheck, CheckCircle, ArrowRight, DollarSign } from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const MutualFundsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const fundFamilies = [
    { name: "Vanguard", funds: "2,400+ Funds", focus: "Low-cost index funds & active equity" },
    { name: "Fidelity Investments", funds: "3,100+ Funds", focus: "Zero expense ratio & growth funds" },
    { name: "BlackRock iShares", funds: "1,800+ Funds", focus: "Global multi-asset & ESG allocations" },
    { name: "Charles Schwab", funds: "2,200+ Funds", focus: "Target-date retirement & municipal income" },
    { name: "PIMCO", funds: "950+ Funds", focus: "Fixed income & macro bond strategies" },
    { name: "T. Rowe Price", funds: "1,100+ Funds", focus: "Active equity, science & technology" }
  ];

  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <Wallet className="w-3.5 h-3.5 text-emerald-600" />
            NO-LOAD MUTUAL FUNDS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            48,000+ Global Mutual Funds with Zero Load Fees
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Invest directly in top fund families with zero transaction fees, zero load fees, and automated recurring investment plans.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fundFamilies.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold font-serif-heading text-slate-900">{item.name}</h3>
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                    {item.funds}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.focus}</p>
                <div className="pt-2 text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <span>Zero Transaction Fee Eligible</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="light" onOpenAccount={onOpenAccount} />
    </div>
  );
};
