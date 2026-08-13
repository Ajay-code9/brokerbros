import React from 'react';
import { DollarSign, ShieldCheck, ArrowRight, Zap, Globe } from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const CommoditiesPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const commodities = [
    { name: "Gold (XAU/USD)", price: "$2,412.50", change: "+0.85%", category: "Precious Metals", spread: "0.15 pts" },
    { name: "Silver (XAG/USD)", price: "$28.40", change: "+1.20%", category: "Precious Metals", spread: "0.02 pts" },
    { name: "Brent Crude Oil", price: "$82.10", change: "-0.45%", category: "Energy", spread: "0.03 pts" },
    { name: "Natural Gas (NG)", price: "$2.15", change: "+2.40%", category: "Energy", spread: "0.005 pts" },
    { name: "Copper (HG)", price: "$4.25", change: "+0.60%", category: "Industrial Metals", spread: "0.002 pts" },
    { name: "Corn & Wheat", price: "$412.00", change: "-0.20%", category: "Agriculture", spread: "0.25 pts" }
  ];

  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
            PHYSICAL & FUTURES COMMODITIES
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            Trade Metals, Energy & Agriculture Spot & Futures
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Hedge inflation and speculate on physical commodities across CME, ICE, and LME with institutional leverage and tight raw spreads.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commodities.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-slate-500">
                  <span>{item.category}</span>
                  <span className="text-emerald-700 font-bold">Spread: {item.spread}</span>
                </div>
                <h3 className="text-lg font-bold font-serif-heading text-slate-900">{item.name}</h3>
                <div className="flex justify-between items-baseline pt-2 border-t border-slate-100 font-mono">
                  <span className="text-xl font-extrabold text-slate-900">{item.price}</span>
                  <span className={`text-xs font-bold ${item.change.startsWith('+') ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {item.change}
                  </span>
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
