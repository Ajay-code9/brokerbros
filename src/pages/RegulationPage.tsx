import React from 'react';
import { ShieldCheck, CheckCircle, FileText, Globe } from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const RegulationPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const regulators = [
    { name: "US Securities and Exchange Commission (SEC)", license: "CRD #184920 / SEC #8-69210", country: "United States" },
    { name: "Financial Industry Regulatory Authority (FINRA)", license: "Member Broker-Dealer", country: "United States" },
    { name: "Financial Conduct Authority (FCA)", license: "FRN #592019", country: "United Kingdom" },
    { name: "Monetary Authority of Singapore (MAS)", license: "CMS License #100842", country: "Singapore" },
    { name: "Australian Securities and Investments Commission (ASIC)", license: "AFSL #482910", country: "Australia" }
  ];

  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            GLOBAL REGULATORY COMPLIANCE
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            Regulated by Top Tier Financial Authorities Worldwide
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            BrokerBros operates under strict capital requirements, regular SEC and FINRA audits, and segregated bank accounts across multiple Tier-1 jurisdictions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regulators.map((r, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">{r.country}</span>
                <h3 className="text-xl font-bold font-serif-heading text-slate-900 pt-2">{r.name}</h3>
                <div className="text-xs font-mono text-slate-500 pt-1">License ID: <span className="font-bold text-slate-800">{r.license}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
