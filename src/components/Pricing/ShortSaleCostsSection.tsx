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
    <section className="py-12 sm:py-16 bg-slate-50/80 dark:bg-[#0E1420] border-b border-slate-200 dark:border-[#1E293B] font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
            <ArrowDownRight className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Short Sale Mechanics & Locate Rates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight font-sans">
            Short Sale Costs & Borrow Rates
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Direct access to global stock loan pools, transparent indicative borrow rates updated every 15 minutes, and automated locate requests.
          </p>
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#141C2B] p-5 rounded-2xl border border-slate-200 dark:border-[#1E293B] shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center font-bold text-sm">
              <RefreshCw className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Real-Time Indicative Rates</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Borrow rates are streamed live in trading tickets so you know exact costs upfront.
            </p>
          </div>

          <div className="bg-white dark:bg-[#141C2B] p-5 rounded-2xl border border-slate-200 dark:border-[#1E293B] shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center font-bold text-sm">
              <ShieldAlert className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Hard-to-Borrow (HTB) Desk</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Automated locate engine scans 20+ prime broker pools for hard-to-borrow stock allocations.
            </p>
          </div>

          <div className="bg-white dark:bg-[#141C2B] p-5 rounded-2xl border border-slate-200 dark:border-[#1E293B] shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center font-bold text-sm">
              <Percent className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Short Interest Credit</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Earn interest credit on short sale cash proceeds for balances over $100,000.
            </p>
          </div>

          <div className="bg-white dark:bg-[#141C2B] p-5 rounded-2xl border border-slate-200 dark:border-[#1E293B] shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center font-bold text-sm">
              <DollarSign className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Daily Fee Formula</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Fee = <code className="bg-slate-100 dark:bg-[#0E1420] px-1 py-0.5 rounded text-[11px] font-mono text-slate-800 dark:text-slate-200">(Shares × Price × Rate)/360</code>.
            </p>
          </div>
        </div>

        {/* Live Stock Borrow Rate Lookup Table Card */}
        <div className="bg-white dark:bg-[#141C2B] text-slate-900 dark:text-white rounded-2xl border border-slate-200 dark:border-[#1E293B] shadow-md p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-[#1E293B] pb-5">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">STOCK LOAN DESK PREVIEW</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white font-sans mt-0.5">Live Indicative Stock Borrow Rates</h3>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search company (e.g. Apple, Tesla)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-[#0E1420] border border-slate-200 dark:border-[#1E293B] rounded-xl text-xs font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Table with Local Public Images */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0E1420] text-slate-600 dark:text-slate-400 font-mono uppercase text-[11px]">
                  <th className="py-3 px-4 font-bold">Company</th>
                  <th className="py-3 px-4 font-bold">Availability Status</th>
                  <th className="py-3 px-4 font-bold">Borrow Rate (APY)</th>
                  <th className="py-3 px-4 font-bold">Available Shares</th>
                  <th className="py-3 px-4 font-bold text-right">Daily Cost / $10k Short</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-[#1E293B]">
                {filteredStocks.map((s) => (
                  <tr key={s.ticker} className="hover:bg-slate-50/80 dark:hover:bg-[#1B2538] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                      <div className="flex items-center gap-3">
                        {/* Company Real Logo Container */}
                        <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-[#0E1420] border border-slate-200 dark:border-[#1E293B] p-1.5 flex items-center justify-center shrink-0 shadow-2xs">
                          <img 
                            src={s.logo} 
                            alt={s.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-slate-950 dark:text-white font-bold text-sm leading-tight">{s.name}</span>
                          <span className="text-slate-400 font-mono text-[11px] font-medium">{s.ticker}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                        s.status === 'General Availability'
                          ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30'
                          : s.status === 'Hard to Borrow'
                          ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-500/30'
                          : 'bg-rose-50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-500/30'
                      }`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900 dark:text-white text-sm">{s.borrowRate}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-600 dark:text-slate-300 font-medium">{s.availableShares}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-emerald-700 dark:text-emerald-400 text-right text-sm">{s.dailyCostPer10k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span>* Borrow fees are annualized and calculated daily based on market value. Rates fluctuate based on market demand.</span>
            <span className="hidden sm:inline">Updated every 15 mins</span>
          </div>
        </div>

      </div>
    </section>
  );
};
