import React from 'react';
import { ShieldAlert, DollarSign, Cpu, ArrowUpRight, CheckCircle2, Scale, Zap } from 'lucide-react';

export const WhyTransparencyMatters: React.FC = () => {
  const cards = [
    {
      title: 'No Hidden Charges',
      badge: 'Zero Markup Policy',
      description: 'Unlike legacy brokers that quietly siphon capital through maintenance fees, ticket surcharges, or inactivity penalties, BrokerBros charges zero hidden fees.',
      metric: '$0 Account Maintenance',
      icon: ShieldAlert,
      features: ['No inactivity fees', 'No custody or holding fees', 'Free real-time Level 2 quotes'],
    },
    {
      title: 'Competitive Commissions',
      badge: 'Tiered & Fixed Rates',
      description: 'Transparent commission tiers built for high-volume traders and retail investors alike—pay as low as $0.0005/share or $0 per trade on our Fixed tier.',
      metric: '$0.0035 / Share Tier',
      icon: DollarSign,
      features: ['Volume-based tiering', 'Capped at 0.5% max value', 'Zero ticket fees'],
    },
    {
      title: 'Institutional Wholesale Rates',
      badge: 'Wholesale Margin',
      description: 'Access wholesale margin borrowing rates starting from 5.83% APY—less than half what traditional brokers charge (11.5%–13% APY).',
      metric: '5.83% APY Margin Rate',
      icon: Scale,
      features: ['Tiered rate discounts', 'Daily interest accrual', 'Zero loan setup fees'],
    },
    {
      title: 'Transparent Smart Routing',
      badge: 'Direct DMA Order Routing',
      description: 'Our Smart Order Router seeks price improvement across 150+ direct market centers without selling your order flow to internalizers (No PFOF markup).',
      metric: '$0.48 Avg Improvement',
      icon: Zap,
      features: ['Direct exchange access', 'Full fill reporting', 'Price improvement pass-through'],
    },
    {
      title: 'Better Long-Term Returns',
      badge: 'Compounding Value',
      description: 'Uninvested cash automatically earns 4.85% APY with daily accrual and monthly compounding payouts, ensuring zero idle drag on your net worth.',
      metric: '4.85% APY Cash Sweep',
      icon: Cpu,
      features: ['Daily interest accrual', '100% liquid cash', 'Up to $2.5M FDIC sweep'],
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-[#090D14] border-b border-slate-200 dark:border-[#1E293B] transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <span>Capital Efficiency & Fairness</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-semibold text-slate-900 dark:text-white tracking-tight">
            Why Transparent Pricing Matters
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
            Every fraction of a cent saved on execution, every dollar saved on margin interest, and every percentage earned on idle cash directly compounds your net portfolio growth over time.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 dark:bg-[#141C2B] rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-[#1E293B] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-5">
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold bg-white dark:bg-[#0E1420] text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 px-2.5 py-1 rounded-full">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                    <span>{card.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors opacity-0 group-hover:opacity-100" />
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-sans">
                    {card.description}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2 pt-2 border-t border-slate-200/80 dark:border-[#1E293B]">
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metric Box Callout */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#1B2538] -mx-6 -mb-6 p-4 px-6 flex items-center justify-between rounded-b-2xl">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Key Benchmark:</span>
                  <span className="text-xs font-bold font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/20 px-2.5 py-1 rounded border border-emerald-200/60 dark:border-emerald-500/30">
                    {card.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Infographic Banner (Light & Dark Enterprise Theme) */}
        <div className="bg-emerald-50/70 dark:bg-emerald-500/10 p-6 sm:p-8 rounded-2xl border border-emerald-200/90 dark:border-emerald-500/30 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6 items-center font-sans">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">THE BROKERBROS IMPACT</span>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white font-serif-heading">Compounding Cost Reduction</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">See how $0.0035 execution rates and 4.85% APY yield transform 10-year portfolio projections.</p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center font-mono">
            <div className="bg-white dark:bg-[#141C2B] p-4 rounded-xl border border-emerald-200/80 dark:border-[#1E293B] shadow-xs">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">10-Yr Commission Savings</div>
              <div className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mt-1">$28,400+</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">vs $9.95 ticket brokers</div>
            </div>

            <div className="bg-white dark:bg-[#141C2B] p-4 rounded-xl border border-emerald-200/80 dark:border-[#1E293B] shadow-xs">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">10-Yr Cash Yield Earned</div>
              <div className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mt-1">$48,500+</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">On $100k idle cash @ 4.85%</div>
            </div>

            <div className="bg-white dark:bg-[#141C2B] p-4 rounded-xl border border-emerald-200/80 dark:border-[#1E293B] shadow-xs col-span-2 sm:col-span-1">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">10-Yr Margin Rate Savings</div>
              <div className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mt-1">$56,700+</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">On $100k loan w/ 5.83% rate</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

