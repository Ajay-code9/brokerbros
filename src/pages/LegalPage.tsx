import React from 'react';
import { ShieldCheck, FileText, Lock } from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const LegalPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <FileText className="w-3.5 h-3.5 text-emerald-600" />
            LEGAL, PRIVACY & REGULATORY DISCLOSURES
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            Legal Terms, Privacy Policies & Risk Statements
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            BrokerBros Securities LLC is a registered broker-dealer and member of FINRA/SIPC. All client accounts are subject to customer agreements and regulatory disclosures.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 text-sm leading-relaxed">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900">1. Customer Account Agreement & Disclosures</h2>
            <p>Trading in stocks, options, futures, forex, and foreign equities carries substantial risk of capital loss and is not suitable for all investors. Margin borrowing increases financial leverage and magnifies potential losses.</p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900">2. Privacy Policy & Data Protection</h2>
            <p>BrokerBros protects client financial records and personal identification in compliance with SOC-2 Type II standards, Gramm-Leach-Bliley Act (GLBA), and EU General Data Protection Regulation (GDPR).</p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900">3. Order Execution & Best Execution Policy</h2>
            <p>BrokerBros does not accept Payment for Order Flow (PFOF) for US equity orders. Orders are routed via proprietary SmartRouting algorithms to public exchanges, dark pools, and alternative trading systems to achieve optimal price improvement.</p>
          </div>
        </div>
      </section>

      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
