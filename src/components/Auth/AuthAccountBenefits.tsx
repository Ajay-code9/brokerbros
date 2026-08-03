import React from 'react';
import { 
  Globe, 
  Monitor, 
  Percent, 
  BarChart3, 
  BookOpen, 
  PieChart, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface AuthAccountBenefitsProps {
  onOpenAccount?: () => void;
}

export const AuthAccountBenefits: React.FC<AuthAccountBenefitsProps> = ({ onOpenAccount }) => {
  const benefits = [
    {
      icon: Globe,
      title: 'Access Global Markets',
      description: 'Trade North American, European, and Asia-Pacific stock exchanges from a single unified multi-currency account.',
      stat: '150+ Markets'
    },
    {
      icon: Monitor,
      title: 'Professional Trading Platforms',
      description: 'Award-winning Web, Desktop, & Mobile apps equipped with 100+ technical indicators, DOM order entry, & options labs.',
      stat: '3 Platforms'
    },
    {
      icon: Percent,
      title: 'Low Commissions',
      description: '$0 commission on US equities & ETFs. Transparent $0.15/contract options pricing & industry-low margin interest rates.',
      stat: '$0 Stocks / ETFs'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Market Data',
      description: 'Raw exchange market data feeds, institutional Level II depth, and ultra-low latency WebSocket price streaming.',
      stat: 'Level II Depth'
    },
    {
      icon: BookOpen,
      title: 'Research & Education',
      description: 'Wall Street analyst consensus ratings, financial statement breakdowns, live economic calendar, & BrokerBros Academy.',
      stat: 'Daily Reports'
    },
    {
      icon: PieChart,
      title: 'Secure Portfolio Management',
      description: 'Sub-account hierarchy, multi-currency cash balances, automated tax-lot routing, & real-time risk monitoring.',
      stat: '4.85% APY Cash'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>PLATFORM ADVANTAGES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900 tracking-tight">
              Why Investors Choose BrokerBros
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-xl font-sans leading-relaxed">
            Institutional power made accessible. Everything you need to analyze, execute, and grow your global portfolio.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const IconComp = benefit.icon;

            return (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl border border-slate-200 p-6 space-y-4 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-800 bg-white px-2.5 py-1 rounded border border-slate-200 shadow-2xs">
                      {benefit.stat}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif-heading text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span>Explore Advantage</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
