import React from 'react';
import { TrendingUp, ShieldCheck, Award, Globe, Users, DollarSign } from 'lucide-react';

export const PricingStatsGrid: React.FC = () => {
  const stats = [
    {
      value: '$142.8M+',
      label: 'Millions Saved by Clients',
      subtext: 'Accumulated commission & margin interest savings in 2025.',
      icon: DollarSign,
    },
    {
      value: '$0.48',
      label: 'Avg Price Improvement',
      subtext: 'Per 100 shares vs NBBO standard market quote.',
      icon: TrendingUp,
    },
    {
      value: '4.85% APY',
      label: 'Competitive Cash Yield',
      subtext: 'Automatic daily interest on uninvested USD balances.',
      icon: Award,
    },
    {
      value: '150+',
      label: 'Global Markets Access',
      subtext: '33 countries across North America, Europe, & Asia-Pacific.',
      icon: Globe,
    },
    {
      value: '450,000+',
      label: 'Professional Accounts',
      subtext: 'Trusted by active traders, family offices, and institutions.',
      icon: Users,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50/80 dark:bg-[#0E1420] border-b border-slate-200 dark:border-[#1E293B] font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
            QUANTIFIABLE VALUE AT SCALE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900 dark:text-white tracking-tight">
            Institutional Value in Numbers
          </h2>
        </div>

        {/* 5 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#141C2B] p-6 rounded-2xl border border-slate-200 dark:border-[#1E293B] text-center space-y-3 hover:shadow-xs transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center mx-auto group-hover:scale-105 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-700 dark:text-emerald-400 tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white font-sans">{s.label}</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal font-sans">{s.subtext}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

