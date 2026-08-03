import React, { useState } from 'react';
import { Search, ShieldAlert, ArrowDownRight, RefreshCw, Info, DollarSign, Percent, Check, HelpCircle } from 'lucide-react';

interface ShortableStock {
  ticker: string;
  name: string;
  status: 'General Availability' | 'Hard to Borrow' | 'Pre-Borrow Required';
  borrowRate: string;
  annualPercent: number;
  availableShares: string;
  dailyCostPer10k: string;
}

export const ShortSaleCostsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const sampleStocks: ShortableStock[] = [
    { ticker: 'AAPL', name: 'Apple Inc.', status: 'General Availability', borrowRate: '0.25% APY', annualPercent: 0.25, availableShares: '10M+', dailyCostPer10k: '$0.07' },
    { ticker: 'NVDA', name: 'NVIDIA Corporation', status: 'General Availability', borrowRate: '0.30% APY', annualPercent: 0.30, availableShares: '8.5M', dailyCostPer10k: '$0.08' },
    { ticker: 'TSLA', name: 'Tesla, Inc.', status: 'General Availability', borrowRate: '0.45% APY', annualPercent: 0.45, availableShares: '5M+', dailyCostPer10k: '$0.13' },
    { ticker: 'RIVN', name: 'Rivian Automotive', status: 'Hard to Borrow', borrowRate: '2.85% APY', annualPercent: 2.85, availableShares: '450K', dailyCostPer10k: '$0.79' },
    { ticker: 'PLTR', name: 'Palantir Tech', status: 'General Availability', borrowRate: '0.35% APY', annualPercent: 0.35, availableShares: '6M', dailyCostPer10k: '$0.10' },
    { ticker: 'GME', name: 'GameStop Corp.', status: 'Hard to Borrow', borrowRate: '8.40% APY', annualPercent: 8.40, availableShares: '85K', dailyCostPer10k: '$2.33' },
    { ticker: 'AMC', name: 'AMC Entertainment', status: 'Pre-Borrow Required', borrowRate: '18.50% APY', annualPercent: 18.50, availableShares: '12K', dailyCostPer10k: '$5.14' },
  ];

  const filteredStocks = sampleStocks.filter(
    (s) => s.ticker.toLowerCase().includes(searchTerm.toLowerCase()) || s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 sm:py-24 bg-slate-50/80 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 border border-slate-300 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <ArrowDownRight className="w-3.5 h-3.5 text-emerald-600" />
            <span>Short Sale Mechanics & Locate Rates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight">
            Short Sale Costs & Borrow Rates
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Direct access to global stock loan pools, transparent indicative borrow rates updated every 15 minutes, and automated automated locate requests for hard-to-borrow securities.
          </p>
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold text-sm">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Real-Time Indicative Rates</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Borrow rates are streamed live in trading tickets so you know the exact cost before placing a short position.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold text-sm">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Hard-to-Borrow (HTB) Desk</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated locate engine searches over 20 prime broker liquidity pools to find hard-to-borrow stock allocations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold text-sm">
              <Percent className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Short Interest Credit</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Earn interest credit on short sale cash proceeds for balances over $100,000 at competitive money market rates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold text-sm">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Daily Fee Formula</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fee = <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px] font-mono text-slate-800">(Shares × Price × Rate) / 360</code>. Charged daily, zero hidden markups.
            </p>
          </div>
        </div>

        {/* Live Stock Borrow Rate Lookup Table Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">STOCK LOAN DESK PREVIEW</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif-heading mt-0.5">Live Indicative Stock Borrow Rates</h3>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search symbol (e.g. AAPL, TSLA)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-mono uppercase text-[11px]">
                  <th className="py-3 px-4 font-bold">Symbol & Name</th>
                  <th className="py-3 px-4 font-bold">Availability Status</th>
                  <th className="py-3 px-4 font-bold">Borrow Rate (APY)</th>
                  <th className="py-3 px-4 font-bold">Available Shares</th>
                  <th className="py-3 px-4 font-bold text-right">Daily Cost / $10k Short</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredStocks.map((s) => (
                  <tr key={s.ticker} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <span className="font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 mr-2">{s.ticker}</span>
                      <span className="text-slate-600 font-normal">{s.name}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                        s.status === 'General Availability'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : s.status === 'Hard to Borrow'
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : 'bg-rose-50 text-rose-800 border-rose-200'
                      }`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900">{s.borrowRate}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-600">{s.availableShares}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-emerald-700 text-right">{s.dailyCostPer10k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>* Borrow fees are annualized and calculated daily based on market value. Rates fluctuate based on market demand.</span>
            <span className="hidden sm:inline">Updated every 15 mins</span>
          </div>
        </div>

      </div>
    </section>
  );
};
