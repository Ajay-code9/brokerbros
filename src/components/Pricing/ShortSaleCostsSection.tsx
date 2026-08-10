import React, { useState } from 'react';
import { Search, ShieldAlert, ArrowDownRight, RefreshCw, DollarSign, Percent } from 'lucide-react';

interface ShortableStock {
  ticker: string;
  name: string;
  logo: string;
  status: 'General Availability' | 'Hard to Borrow' | 'Pre-Borrow Required';
  borrowRate: string;
  annualPercent: number;
  availableShares: string;
  dailyCostPer10k: string;
}

export const ShortSaleCostsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const sampleStocks: ShortableStock[] = [
    { 
      ticker: 'AAPL', 
      name: 'Apple Inc.', 
      logo: '/Homepage/apple-logo.webp',
      status: 'General Availability', 
      borrowRate: '0.25% APY', 
      annualPercent: 0.25, 
      availableShares: '10M+', 
      dailyCostPer10k: '$0.07' 
    },
    { 
      ticker: 'NVDA', 
      name: 'NVIDIA Corporation', 
      logo: '/Homepage/nvidia-logo.webp',
      status: 'General Availability', 
      borrowRate: '0.30% APY', 
      annualPercent: 0.30, 
      availableShares: '8.5M', 
      dailyCostPer10k: '$0.08' 
    },
    { 
      ticker: 'TSLA', 
      name: 'Tesla, Inc.', 
      logo: '/Homepage/tesla-logo.webp',
      status: 'General Availability', 
      borrowRate: '0.45% APY', 
      annualPercent: 0.45, 
      availableShares: '5M+', 
      dailyCostPer10k: '$0.13' 
    },
    { 
      ticker: 'RIVN', 
      name: 'Rivian Automotive', 
      logo: '/Homepage/Rivian-logo.webp',
      status: 'Hard to Borrow', 
      borrowRate: '2.85% APY', 
      annualPercent: 2.85, 
      availableShares: '450K', 
      dailyCostPer10k: '$0.79' 
    },
    { 
      ticker: 'PLTR', 
      name: 'Palantir Technologies', 
      logo: '/Homepage/plantir-logo.webp',
      status: 'General Availability', 
      borrowRate: '0.35% APY', 
      annualPercent: 0.35, 
      availableShares: '6M', 
      dailyCostPer10k: '$0.10' 
    },
    { 
      ticker: 'GME', 
      name: 'GameStop Corp.', 
      logo: '/Homepage/GameStop-logo.webp',
      status: 'Hard to Borrow', 
      borrowRate: '8.40% APY', 
      annualPercent: 8.40, 
      availableShares: '85K', 
      dailyCostPer10k: '$2.33' 
    },
    { 
      ticker: 'AMC', 
      name: 'AMC Entertainment', 
      logo: '/Homepage/AMC-logo.webp',
      status: 'Pre-Borrow Required', 
      borrowRate: '18.50% APY', 
      annualPercent: 18.50, 
      availableShares: '12K', 
      dailyCostPer10k: '$5.14' 
    },
  ];

  const filteredStocks = sampleStocks.filter(
    (s) => s.ticker.toLowerCase().includes(searchTerm.toLowerCase()) || s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-12 sm:py-16 bg-slate-50/80 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <ArrowDownRight className="w-3.5 h-3.5 text-emerald-600" />
            <span>Short Sale Mechanics & Locate Rates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans">
            Short Sale Costs & Borrow Rates
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            Direct access to global stock loan pools, transparent indicative borrow rates updated every 15 minutes, and automated locate requests.
          </p>
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold text-sm">
              <RefreshCw className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Real-Time Indicative Rates</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Borrow rates are streamed live in trading tickets so you know exact costs upfront.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold text-sm">
              <ShieldAlert className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Hard-to-Borrow (HTB) Desk</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated locate engine scans 20+ prime broker pools for hard-to-borrow stock allocations.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold text-sm">
              <Percent className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Short Interest Credit</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Earn interest credit on short sale cash proceeds for balances over $100,000.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold text-sm">
              <DollarSign className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Daily Fee Formula</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fee = <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px] font-mono text-slate-800">(Shares × Price × Rate)/360</code>.
            </p>
          </div>
        </div>

        {/* Live Stock Borrow Rate Lookup Table Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">STOCK LOAN DESK PREVIEW</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-sans mt-0.5">Live Indicative Stock Borrow Rates</h3>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search company (e.g. Apple, Tesla)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Table with Local Public Images */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-mono uppercase text-[11px]">
                  <th className="py-3 px-4 font-bold">Company</th>
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
                      <div className="flex items-center gap-3">
                        {/* Company Real Logo Container */}
                        <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 p-1.5 flex items-center justify-center shrink-0 shadow-2xs">
                          <img 
                            src={s.logo} 
                            alt={s.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-slate-950 font-bold text-sm leading-tight">{s.name}</span>
                          <span className="text-slate-400 font-mono text-[11px] font-medium">{s.ticker}</span>
                        </div>
                      </div>
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
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900 text-sm">{s.borrowRate}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-600 font-medium">{s.availableShares}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-emerald-700 text-right text-sm">{s.dailyCostPer10k}</td>
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
