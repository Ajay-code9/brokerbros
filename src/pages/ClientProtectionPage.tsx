import React from 'react';
import { ShieldCheck, CheckCircle, Lock } from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const ClientProtectionPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            CLIENT ASSET PROTECTION
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            SIPC Protection + $30 Million Excess Insurance Coverage
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Your securities and cash assets are held in fully segregated bank accounts at Tier-1 institutions and backed by SIPC protection up to $500,000 plus additional Lloyd's of London excess coverage up to $30 million per client account.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-2xl font-bold font-serif-heading text-slate-900">SIPC Coverage</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Securities Investor Protection Corporation (SIPC) coverage protects client securities and cash up to $500,000 (including $250,000 for cash claims).</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-2xl font-bold font-serif-heading text-slate-900">Lloyd's Excess Insurance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Underwritten by Lloyd's of London syndicates, providing additional coverage up to $30 million per account with an aggregate limit of $150 million.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="light" onOpenAccount={onOpenAccount} />
    </div>
  );
};
