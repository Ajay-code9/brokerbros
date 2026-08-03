import React from 'react';
import { Globe, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const ForexPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const fxPairs = [
    { pair: "EUR/USD", bid: "1.08842", ask: "1.08844", spread: "0.2 pips", status: "Active" },
    { pair: "GBP/USD", bid: "1.29150", ask: "1.29153", spread: "0.3 pips", status: "Active" },
    { pair: "USD/JPY", bid: "153.420", ask: "153.423", spread: "0.3 pips", status: "Active" },
    { pair: "AUD/USD", bid: "0.65420", ask: "0.65423", spread: "0.3 pips", status: "Active" },
    { pair: "USD/CAD", bid: "1.38120", ask: "1.38123", spread: "0.3 pips", status: "Active" },
    { pair: "USD/CHF", bid: "0.88410", ask: "0.88413", spread: "0.3 pips", status: "Active" }
  ];

  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            INSTITUTIONAL FOREX ECN
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            100+ FX Currency Pairs with Raw Spreads from 0.0 Pips
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Deep interbank liquidity from Tier-1 banks, ultra-fast order routing, no dealing desk intervention, and multi-currency capital settlement.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold font-serif-heading text-slate-900">Major Currency Pairs Live Spreads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fxPairs.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex justify-between items-center font-mono text-xs">
                  <span className="font-bold text-slate-900 text-base">{item.pair}</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md">{item.spread}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <div className="text-slate-400 text-[10px]">BID</div>
                    <div className="font-bold text-slate-900 text-sm">{item.bid}</div>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <div className="text-slate-400 text-[10px]">ASK</div>
                    <div className="font-bold text-slate-900 text-sm">{item.ask}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
