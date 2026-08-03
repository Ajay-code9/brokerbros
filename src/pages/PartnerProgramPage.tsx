import React from 'react';
import { Users, DollarSign, ArrowRight, ShieldCheck } from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const PartnerProgramPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            INTRODUCING BROKER & PARTNER PROGRAM
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            Partner with a S&P A- Rated Global Financial Institution
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Expand your financial advisory or brokerage business with custom revenue share tiers, white label platforms, and dedicated relationship managers.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Introducing Broker (IB)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Earn ongoing commission rebates and interest share on referred client volume.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">White Label Solutions</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Launch your own branded brokerage with BrokerBros turnkey clearing and trading engine.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Affiliate Network</h3>
              <p className="text-slate-600 text-sm leading-relaxed">High CPA and recurring revenue models for financial publishers, educators, and content creators.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
