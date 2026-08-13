import React from 'react';
import { Check, Lock, FileText } from 'lucide-react';

export const FeeTransparencyCards: React.FC = () => {
  const commitments = [
    {
      title: "Zero Monthly Maintenance & Inactivity Penalties",
      metric: "$0.00 / mo",
      subText: "Guaranteed Always",
      desc: "Zero recurring account fees regardless of your trading frequency or account balance.",
      bullets: [
        "No minimum trade volume quotas",
        "Free account opening & maintenance",
        "Zero custody or dividend collection fees"
      ]
    },
    {
      title: "Interbank Spot FX Conversion (0.02% Fee)",
      metric: "2 Pips Spot",
      subText: "vs 2.50% Bank Markups",
      desc: "Convert multi-currency balances at direct interbank rates with a flat 0.02% execution fee.",
      bullets: [
        "Live interbank spot market pricing",
        "Multi-currency sub-wallet balance hold",
        "Automated dividend currency matching"
      ]
    },
    {
      title: "Fully Segregated LP Custody & $30M Protection",
      metric: "$30M Policy",
      subText: "Underwritten by Lloyd's",
      desc: "Client cash held in Tier-1 bank segregation backed by SIPC ($500k) and $30M excess insurance.",
      bullets: [
        "JPMorgan Chase & BofA segregated accounts",
        "SIPC coverage up to $500,000 per account",
        "Excess insurance underwritten by Lloyd's"
      ]
    },
    {
      title: "Exact Regulatory Pass-Through (Zero Markup)",
      metric: "$0.00 Markup",
      subText: "100% Transparent Pass-Through",
      desc: "Official SEC Section 31 and FINRA TAF fees passed through at exact cost without surcharges.",
      bullets: [
        "Itemized line items on monthly statements",
        "Liquidity exchange rebates credited to account",
        "Publicly accessible 10-page regulatory card"
      ]
    }
  ];

  return (
    <section className="py-6 sm:py-9 bg-slate-50/90 dark:bg-[#0B1722] border-b border-slate-200 dark:border-emerald-900/30 text-slate-900 dark:text-white font-sans relative overflow-hidden transition-colors duration-300">
      
      {/* Background Soft Accent Glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10 font-sans">
        
        {/* Section Header - Compact */}
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-[11px] font-mono font-bold uppercase tracking-wider">
            <Lock className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            <span>TRANSPARENT INSTITUTIONAL POLICY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight font-sans">
            Fee Transparency & Zero Surcharge Guarantee
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-sans max-w-lg mx-auto">
            Zero hidden ticket fees, zero payment for order flow markups, and full exchange pass-through disclosures.
          </p>
        </div>

        {/* 4 Compact Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {commitments.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900/90 rounded-xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between space-y-3 shadow-xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-sans">{item.title}</h3>
                    <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-mono mt-0.5">{item.subText}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-lg font-black font-mono text-emerald-600 dark:text-emerald-400">{item.metric}</div>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              {/* Compact Bullet Checklist */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-1 text-xs font-sans">
                {item.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compact Bottom Guarantee Note */}
        <div className="bg-white dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-5xl mx-auto text-center sm:text-left font-sans shadow-xs">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center shrink-0">
              <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">Audited SEC & FINRA Disclosure Schedule</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Itemized 10-page fee schedule updated quarterly and published publicly.</p>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-500/30">
            SEC Rule 605 Compliant
          </span>
        </div>

      </div>
    </section>
  );
};
