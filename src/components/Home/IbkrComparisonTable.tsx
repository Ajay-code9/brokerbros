import React, { useState } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface IbkrComparisonTableProps {
  onOpenAccount: () => void;
}

export const IbkrComparisonTable: React.FC<IbkrComparisonTableProps> = ({ onOpenAccount }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'rates' | 'yields' | 'execution'>('all');

  const comparisonData = [
    {
      category: 'rates',
      feature: 'Margin Loan Borrow Rate ($100k Loan)',
      brokerbros: '5.83% APY',
      schwab: '11.825%',
      fidelity: '11.575%',
      etrade: '12.450%',
      highlight: true,
      note: 'Save up to $6,600/yr per $100k margin borrow'
    },
    {
      category: 'yields',
      feature: 'Uninvested USD Cash Sweep Yield',
      brokerbros: '4.85% APY',
      schwab: '0.45% APY',
      fidelity: '2.72% APY',
      etrade: '0.45% APY',
      highlight: true,
      note: 'Automatic daily accrual with zero minimum lockup'
    },
    {
      category: 'execution',
      feature: 'Payment For Order Flow (PFOF) Policy',
      brokerbros: '0% PFOF (100% Rejected)',
      schwab: 'Accepts PFOF Rebates',
      fidelity: 'Zero on Equities',
      etrade: 'Accepts PFOF Rebates',
      highlight: false,
      note: 'Rejects PFOF to maximize price improvement fills'
    },
    {
      category: 'execution',
      feature: 'Average Price Improvement Per Share',
      brokerbros: '$0.024 / Share',
      schwab: '$0.008 / Share',
      fidelity: '$0.015 / Share',
      etrade: '$0.006 / Share',
      highlight: false,
      note: 'Audited SEC Rule 605 quarterly execution reports'
    },
    {
      category: 'rates',
      feature: 'US Equities & ETF Fixed Commission',
      brokerbros: '$0.00 Fixed',
      schwab: '$0.00 Fixed',
      fidelity: '$0.00 Fixed',
      etrade: '$0.00 Fixed',
      highlight: false,
      note: 'Zero base ticket fee or recurring inactivity fee'
    },
    {
      category: 'execution',
      feature: 'Connected Global Market Centers',
      brokerbros: '150+ Venues (35 Nations)',
      schwab: 'US Markets Only',
      fidelity: 'Limited Foreign ADRs',
      etrade: 'US Markets Only',
      highlight: true,
      note: 'Trade 26 currencies in a single settled account'
    }
  ];

  const filteredData = selectedCategory === 'all' 
    ? comparisonData 
    : comparisonData.filter(item => item.category === selectedCategory);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>TRANSPARENT INSTITUTIONAL PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Why Active Investors Choose BrokerBros
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Compare our institutional margin rates, USD cash sweep yield, and zero-PFOF execution quality directly against legacy retail brokerages.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200'
            }`}
          >
            All Metrics
          </button>
          <button
            onClick={() => setSelectedCategory('rates')}
            className={`px-4 py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
              selectedCategory === 'rates'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200'
            }`}
          >
            Margin Borrow Rates
          </button>
          <button
            onClick={() => setSelectedCategory('yields')}
            className={`px-4 py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
              selectedCategory === 'yields'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200'
            }`}
          >
            Cash Yields
          </button>
          <button
            onClick={() => setSelectedCategory('execution')}
            className={`px-4 py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
              selectedCategory === 'execution'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200'
            }`}
          >
            Execution Quality
          </button>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans text-xs">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                  <th className="py-4 px-6 min-w-[220px]">Institutional Feature</th>
                  <th className="py-4 px-6 min-w-[180px] bg-emerald-50 text-emerald-900 border-x border-emerald-200 text-sm font-extrabold">
                    BrokerBros Pro
                  </th>
                  <th className="py-4 px-6 min-w-[140px] text-slate-600">Charles Schwab</th>
                  <th className="py-4 px-6 min-w-[140px] text-slate-600">Fidelity</th>
                  <th className="py-4 px-6 min-w-[140px] text-slate-600">E*TRADE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      <div>{row.feature}</div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">{row.note}</div>
                    </td>
                    <td className="py-4 px-6 bg-emerald-50/70 border-x border-emerald-200 font-extrabold text-emerald-800 text-sm">
                      {row.brokerbros}
                    </td>
                    <td className="py-4 px-6 text-slate-600 font-medium">{row.schwab}</td>
                    <td className="py-4 px-6 text-slate-600 font-medium">{row.fidelity}</td>
                    <td className="py-4 px-6 text-slate-600 font-medium">{row.etrade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Action */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 font-normal">
              * Rates and cash yield metrics verified quarterly. Securities trades routed directly via SmartRouting without PFOF internalization.
            </div>
            <button
              onClick={onOpenAccount}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Open Institutional Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
