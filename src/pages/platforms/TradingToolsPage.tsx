import React from 'react';
import { Cpu, Zap, ShieldCheck, ArrowRight, BarChart3 } from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const TradingToolsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const tools = [
    { title: "SmartRouting™ Visualizer", desc: "Track microsecond order venue routing across 150+ exchanges and dark pools in real-time." },
    { title: "Portfolio Margin Stress Lab", desc: "Simulate portfolio tail-risk under extreme market stress tests (-20% crash, rate hikes)." },
    { title: "Option Volatility & Greeks Lab", desc: "Analyze implied volatility surfaces, historical skew, delta neutral hedging, and theta decay." },
    { title: "Stock Borrow Fee Finder", desc: "Real-time short borrow interest rates, locate availability, and hard-to-borrow stock inventories." }
  ];

  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            QUANTITATIVE TRADING TOOLS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            Institutional Risk Analytics & Execution Laboratories
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Empower your trading strategies with sophisticated mathematical modeling tools, real-time borrow rates, and execution venue analytics.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-3">
                <h3 className="text-2xl font-bold font-serif-heading text-slate-900">{tool.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{tool.desc}</p>
                <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1 cursor-pointer">
                  <span>Launch Tool Simulation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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
