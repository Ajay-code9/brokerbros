import React from 'react';
import { BookOpen, Search, ArrowRight } from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const LearningCenterPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const glossaryTerms = [
    { term: "Payment for Order Flow (PFOF)", def: "Compensation received by a brokerage firm from a market maker in exchange for routing customer orders to them." },
    { term: "Smart Order Routing (SOR)", def: "Automated execution logic that searches multiple liquidity venues simultaneously to execute orders at the best available price." },
    { term: "Portfolio Margin", def: "Risk-based margin methodology that calculates margin requirements based on net portfolio risk rather than fixed rules." },
    { term: "Implied Volatility (IV)", def: "Market expectation of future volatility embedded in option contract prices." }
  ];

  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            INSTITUTIONAL KNOWLEDGE HUB
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            Comprehensive Trading Guides & Financial Reference
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Explore hundreds of articles on order execution algorithms, margin mechanics, option greeks, fixed income yield curves, and market micro-structure.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold font-serif-heading text-slate-900">Featured Financial Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {glossaryTerms.map((g, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2">
                <h3 className="text-lg font-bold font-serif-heading text-slate-900">{g.term}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{g.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
