import React from 'react';
import { Sparkles, Calendar, DollarSign, ArrowRight, ShieldCheck } from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const IposPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const upcomingIpos = [
    { company: "QuantumCompute Inc", symbol: "QMPT", exchange: "NASDAQ", estPrice: "$22.00 - $25.00", status: "Filing Active", date: "Q3 2026" },
    { company: "BioGenetics Global", symbol: "BGG", exchange: "NYSE", estPrice: "$18.00 - $20.00", status: "Book Building", date: "August 2026" },
    { company: "Apex Robotics Corp", symbol: "APEX", exchange: "NASDAQ", estPrice: "$30.00 - $34.00", status: "Roadshow Active", date: "September 2026" }
  ];

  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            PRIMARY MARKET IPO ALLOCATIONS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            Access Initial Public Offerings at Offering Price
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            BrokerBros provides retail and institutional clients equal access to high-profile IPO allocations without management markups or high account minimums.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold font-serif-heading text-slate-900">Upcoming IPO Pipeline</h2>
          
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700 text-xs font-mono uppercase border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-6">Company</th>
                  <th className="py-3.5 px-4">Exchange</th>
                  <th className="py-3.5 px-4">Estimated Range</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">Target Date</th>
                  <th className="py-3.5 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {upcomingIpos.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold">
                      <div className="text-slate-900">{item.company}</div>
                      <div className="text-xs font-mono text-emerald-700">{item.symbol}</div>
                    </td>
                    <td className="py-4 px-4 font-mono text-xs text-slate-600">{item.exchange}</td>
                    <td className="py-4 px-4 font-mono text-xs text-slate-900 font-bold">{item.estPrice}</td>
                    <td className="py-4 px-4">
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-md">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-mono text-xs text-slate-600">{item.date}</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={onOpenAccount}
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-md cursor-pointer"
                      >
                        Indicate Interest
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
