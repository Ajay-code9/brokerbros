import React from 'react';
import { Cpu, Zap, Scale, TrendingUp, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export const WhyBrokerBrosSavesMoney: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Smart Direct Order Routing (SOR)',
      description: 'Your order routes directly to 150+ exchanges and dark pools without passing through PFOF market maker internalizers.',
      saving: 'Zero hidden spread markup',
      icon: Cpu,
    },
    {
      num: '02',
      title: 'Real Price Improvement',
      description: 'Our routing engine executes inside the National Best Bid/Offer (NBBO) spread, delivering an average $0.48 price improvement per 100 shares.',
      saving: '+$0.48 per 100 shares saved',
      icon: Zap,
    },
    {
      num: '03',
      title: 'Wholesale Central Bank Margin Rates',
      description: 'We pass central bank benchmark interest rates directly to margin borrowers, starting at 5.83% APY instead of standard 11%–13% retail rates.',
      saving: 'Save $5,900/yr per $100k loan',
      icon: Scale,
    },
    {
      num: '04',
      title: 'Automated High-Yield Cash Sweeps',
      description: 'Every liquid dollar in your account automatically earns up to 4.85% APY interest, turning idle cash into active compound wealth.',
      saving: '+ $4,850/yr per $100k cash',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-[#090D14] border-b border-slate-200 dark:border-[#1E293B] font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#141C2B] border border-slate-200 dark:border-[#1E293B] text-slate-800 dark:text-slate-200 text-xs font-semibold uppercase tracking-wider">
            <span>Capital Efficiency Mechanics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-semibold text-slate-900 dark:text-white tracking-tight">
            How BrokerBros Saves You Money
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
            A 4-stage execution architecture engineered to eliminate unnecessary friction, reduce spreads, and maximize your net returns.
          </p>
        </div>

        {/* 4 Steps Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 dark:bg-[#141C2B] text-slate-900 dark:text-white rounded-2xl p-6 border border-slate-200/90 dark:border-[#1E293B] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group relative"
              >
                <div className="space-y-4">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-emerald-700 dark:text-emerald-400">{s.num}</span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-sans">
                    {s.description}
                  </p>
                </div>

                {/* Saving Highlight Box */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-[#1E293B] bg-white dark:bg-[#1B2538] -mx-6 -mb-6 p-4 px-6 rounded-b-2xl flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300 font-mono">{s.saving}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

