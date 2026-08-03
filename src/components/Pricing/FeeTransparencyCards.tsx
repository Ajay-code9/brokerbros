import React from 'react';
import { ShieldCheck, Ban, CreditCard, RefreshCw, Scale, FileCheck, Check } from 'lucide-react';

export const FeeTransparencyCards: React.FC = () => {
  const cards = [
    {
      title: 'Transparent Account Structure',
      badge: '$0.00 Base Fee',
      icon: Ban,
      description: 'Streamlined account management with zero monthly base fees, zero minimum balance requirements, and free account opening.',
      specs: ['Transparent base structure', 'Flexible deposit rules', 'Free account opening'],
    },
    {
      title: 'Flexible Portfolio Management',
      badge: 'Unlimited Holding',
      icon: CreditCard,
      description: 'Your capital remains fully under your control. Enjoy complete portfolio flexibility with zero activity quotas or holding duration rules.',
      specs: ['Zero volume quotas', 'Flexible holding duration', '100% free account holding'],
    },
    {
      title: 'Institutional Asset Custody',
      badge: '$0 Custody',
      icon: ShieldCheck,
      description: 'Store stocks, ETFs, bonds, and mutual funds indefinitely with zero asset custody or dividend collection charges.',
      specs: ['Zero asset custody fee', 'Automated dividend reinvestment', 'Standard corporate action processing'],
    },
    {
      title: 'Direct FX Conversion',
      badge: '0.02% Spot Rate',
      icon: RefreshCw,
      description: 'Convert between USD, EUR, GBP, JPY, and SGD at direct interbank spot rates plus a transparent 0.02% (2 pips) execution fee.',
      specs: ['Interbank spot market rate', 'Wholesale FX execution', 'Multi-currency sub-accounts'],
    },
    {
      title: 'Capital-Efficient Margin Borrowing',
      badge: 'From 5.83% APY',
      icon: Scale,
      description: 'Wholesale margin borrowing benchmarked directly to central bank target rates for institutional capital efficiency.',
      specs: ['BM + 0.50% Pro rate', 'Tiered volume discounts', 'Daily interest calculation'],
    },
    {
      title: 'Clear Regulatory Guarantee',
      badge: 'Audited Policy',
      icon: FileCheck,
      description: 'Full 10-page regulatory fee schedule published publicly with transparent itemization on all monthly statements.',
      specs: ['Published fee schedule', 'FINRA & SEC compliant', 'SOC 2 Type II certified'],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#0A1A24] border-b border-emerald-900/40 text-white font-sans relative overflow-hidden">
      
      {/* Mesh Glow Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>ZERO FINE PRINT POLICY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans tracking-tight">
            Fee Transparency Guarantee
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
            We publish every execution tier, margin benchmark rate, and clearing pass-through fee in plain English. No maintenance charges, zero custody fees.
          </p>
        </div>

        {/* Holographic Shield Banner Card */}
        <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl h-56 sm:h-64 group">
          <img
            src="/pricing_transparency_shield.png"
            alt="Transparency Shield"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A24] via-[#0A1A24]/75 to-transparent" />
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-center max-w-xl space-y-3">
            <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/90 px-3 py-1 rounded-md border border-cyan-700/60 w-max">
              SEC & FINRA REGULATORY AUDITED
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-sans">
              100% Itemized Clearing Statements & Zero Markups
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans line-clamp-2">
              Every order fill displays exchange rebates, price improvement stats, and SEC Section 31 fees down to 4 decimal places.
            </p>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, idx) => {
            const IconComp = c.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D2231]/90 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/30 shadow-xl hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 space-y-5 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 rounded-full">
                      {c.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-sans group-hover:text-cyan-300 transition-colors">
                    {c.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {c.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-2">
                  {c.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-sans text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
