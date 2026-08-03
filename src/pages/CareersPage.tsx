import React from 'react';
import { Users, Briefcase, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const CareersPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const jobs = [
    { title: "Senior C++ Execution Engine Engineer", team: "Core Infrastructure", location: "New York / Hybrid", type: "Full-Time" },
    { title: "Quantitative Market Microstructure Analyst", team: "SmartRouting Lab", location: "London / Remote", type: "Full-Time" },
    { title: "Senior Rust FIX Protocol Developer", team: "Exchange Gateway", location: "Singapore / Hybrid", type: "Full-Time" },
    { title: "Director of Regulatory Compliance & SEC Filings", team: "Legal & Risk", location: "New York / On-Site", type: "Full-Time" },
    { title: "Staff Product Designer - Trading Workstation", team: "Product Experience", location: "San Francisco / Remote", type: "Full-Time" }
  ];

  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
            CAREERS AT BROKERBROS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            Engineer the Future of Global Financial Infrastructure
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Join a world-class team of quantitative researchers, systems architects, and regulatory experts building low-latency trading systems for millions of clients worldwide.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold font-serif-heading text-slate-900">Open Engineering & Research Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-emerald-500 transition-colors">
                <div>
                  <h3 className="text-lg font-bold font-serif-heading text-slate-900">{job.title}</h3>
                  <div className="text-xs font-mono text-slate-500 mt-1 flex items-center gap-3">
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">{job.team}</span>
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button
                  onClick={onOpenAccount}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-colors shrink-0 cursor-pointer"
                >
                  Apply for Position
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
