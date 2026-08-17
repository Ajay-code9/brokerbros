import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface IbkrComparisonTableProps {
  onOpenAccount: () => void;
}

export const IbkrComparisonTable: React.FC<IbkrComparisonTableProps> = ({ onOpenAccount }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'crm' | 'copy' | 'apis'>('all');

  const comparisonData = [
    {
      category: 'crm',
      feature: 'White-Label Broker CRM Deployment',
      brokerbros: 'Turnkey Setup (1-3 Business Days)',
      legacy: '3-6 Months Complex Integration',
      inhouse: '12+ Months High R&D Risk',
      note: 'Multi-currency client portals, KYC workflows & document verification.',
    },
    {
      category: 'crm',
      feature: 'Multi-Level IB Rebate Tree Engine',
      brokerbros: 'Unlimited Tiers & Instant Rebate Calculation',
      legacy: '2-Tier Limit & Manual Monthly Calculations',
      inhouse: 'High Database & Server Overhead',
      note: 'Real-time rebate distribution across volume, spreads & commissions.',
    },
    {
      category: 'crm',
      feature: 'Admin Backoffice & Compliance Audit',
      brokerbros: 'Role-Based Approvals & Granular Audit Logs',
      legacy: 'Single Admin User & Static Log Exports',
      inhouse: 'Manual Compliance Reporting',
      note: 'Deposit/withdrawal queues, risk flags & manager permissions.',
    },
    {
      category: 'crm',
      feature: 'PropFirm CRM & Evaluation Engine',
      brokerbros: 'Real-Time Breach Engine & Profit Split Rules',
      legacy: 'Requires Third-Party Plug-in Subscriptions',
      inhouse: 'High Latency Breach Detection Risk',
      note: 'Automated daily drawdown calculation, breach alerts & payout rules.',
    },
    {
      category: 'copy',
      feature: 'Social Copy Trading Execution Engine',
      brokerbros: 'Sub-Millisecond Master-Follower Copier',
      legacy: '500ms+ High Slippage Copy Engine',
      inhouse: 'Unstable Socket Connections',
      note: 'Proportional lot allocation, risk caps & automated fee splitting.',
    },
    {
      category: 'copy',
      feature: 'PAMM / MAM Asset Management System',
      brokerbros: 'Flexible Equity & Balance Allocation Modes',
      legacy: 'Basic Balance-Only Allocation',
      inhouse: 'Complex Manual End-of-Month Math',
      note: 'High-watermark management, performance fees & investor reports.',
    },
    {
      category: 'apis',
      feature: 'MT5 Server APIs & WebSocket Feeds',
      brokerbros: 'Real-Time Tick Streaming & Event Hooks',
      legacy: 'Restricted Polling-Only REST Endpoints',
      inhouse: 'Difficult MT5 C++ Plugin Maintenance',
      note: 'Server-side order execution, account sync & tick streaming.',
    },
    {
      category: 'apis',
      feature: 'FIX 4.4 / 5.0 Liquidity Bridge',
      brokerbros: 'Direct Ultra-Low Latency LP Aggregation',
      legacy: 'Expensive Per-Million Volume Surcharges',
      inhouse: 'Fragile FIX Session Management',
      note: 'Connects to 150+ Tier-1 banks, prime brokers & crypto LPs.',
    },
  ];

  const filteredData = selectedCategory === 'all' 
    ? comparisonData 
    : comparisonData.filter(item => item.category === selectedCategory);

  return (
    <section className="py-10 sm:py-14 bg-slate-50/80 dark:bg-[#0E1420] border-b border-slate-200 dark:border-[#1E293B] font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header - B2B PDF Aligned */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight font-sans">
            Why Global Brokerages & Institutions Choose BrokerBros
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium font-sans">
            Compare our turn-key White-Label Broker CRM, IB Rebate Engines, Prop Firm Modules, and FIX Liquidity Bridges against legacy software vendors.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-1.5 text-xs font-bold rounded-none transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white dark:bg-[#141C2B] text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-[#1E293B]'
            }`}
          >
            All 14 Modular Solutions
          </button>
          <button
            onClick={() => setSelectedCategory('crm')}
            className={`px-4 py-1.5 text-xs font-bold rounded-none transition-all cursor-pointer ${
              selectedCategory === 'crm'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white dark:bg-[#141C2B] text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-[#1E293B]'
            }`}
          >
            Broker CRM & Backoffice
          </button>
          <button
            onClick={() => setSelectedCategory('copy')}
            className={`px-4 py-1.5 text-xs font-bold rounded-none transition-all cursor-pointer ${
              selectedCategory === 'copy'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white dark:bg-[#141C2B] text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-[#1E293B]'
            }`}
          >
            Copy Trading & PAMM
          </button>
          <button
            onClick={() => setSelectedCategory('apis')}
            className={`px-4 py-1.5 text-xs font-bold rounded-none transition-all cursor-pointer ${
              selectedCategory === 'apis'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white dark:bg-[#141C2B] text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-[#1E293B]'
            }`}
          >
            FIX Liquidity & APIs
          </button>
        </div>

        {/* Comparison Table */}
        <div className="bg-white dark:bg-[#141C2B] rounded-none border border-slate-200 dark:border-[#1E293B] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans text-xs">
              <thead>
                <tr className="bg-slate-100 dark:bg-[#090D14] border-b border-slate-200 dark:border-[#1E293B] text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
                  <th className="py-3.5 px-5 min-w-[240px]">Modular Infrastructure Feature</th>
                  <th className="py-3.5 px-5 min-w-[200px] bg-emerald-50 dark:bg-emerald-500/10 text-emerald-900 dark:text-emerald-400 border-x border-emerald-200 dark:border-emerald-500/30 text-xs font-extrabold">
                    BrokerBros Standard
                  </th>
                  <th className="py-3.5 px-5 min-w-[170px] text-slate-600 dark:text-slate-400">Legacy Software Vendors</th>
                  <th className="py-3.5 px-5 min-w-[170px] text-slate-600 dark:text-slate-400">Custom In-House Build</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-[#1E293B]">
                {filteredData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-[#1B2538] transition-colors">
                    <td className="py-3.5 px-5 font-semibold text-slate-900 dark:text-white">
                      <div>{row.feature}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal mt-0.5">{row.note}</div>
                    </td>
                    <td className="py-3.5 px-5 bg-emerald-50/70 dark:bg-emerald-500/10 border-x border-emerald-200 dark:border-emerald-500/30 font-extrabold text-emerald-800 dark:text-emerald-300 text-xs">
                      {row.brokerbros}
                    </td>
                    <td className="py-3.5 px-5 text-slate-600 dark:text-slate-300 font-medium">{row.legacy}</td>
                    <td className="py-3.5 px-5 text-slate-600 dark:text-slate-300 font-medium">{row.inhouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Action */}
          <div className="p-4 sm:p-5 bg-slate-50 dark:bg-[#0E1420] border-t border-slate-200 dark:border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              * All 14 modules available standalone or as a complete white-label brokerage suite.
            </div>
            <button
              onClick={onOpenAccount}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-none transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0 text-xs uppercase tracking-wider shadow-xs"
            >
              <span>Request Broker Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
