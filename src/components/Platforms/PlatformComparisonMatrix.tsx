import React, { useState } from 'react';
import { Layers, Check, X, Search } from 'lucide-react';

interface FeatureRow {
  name: string;
  category: 'trading' | 'analytics' | 'orders' | 'security';
  web: boolean | string;
  desktop: boolean | string;
  mobile: boolean | string;
  portal: boolean | string;
  api: boolean | string;
}

export const PlatformComparisonMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const features: FeatureRow[] = [
    // Trading
    { name: "Stocks & ETFs Trading", category: "trading", web: true, desktop: true, mobile: true, portal: "View Only", api: true },
    { name: "Multi-Leg Options Chains", category: "trading", web: true, desktop: true, mobile: true, portal: false, api: true },
    { name: "Futures & Futures Options", category: "trading", web: "Level I", desktop: true, mobile: "Level I", portal: false, api: true },
    { name: "Spot Forex & Currency Desk", category: "trading", web: true, desktop: true, mobile: true, portal: "Convert", api: true },
    { name: "Direct Market Access (DMA)", category: "trading", web: false, desktop: true, mobile: false, portal: false, api: true },

    // Analytics
    { name: "TradingView HTML5 Charts", category: "analytics", web: true, desktop: true, mobile: "Mobile Version", portal: false, api: "Data Feed" },
    { name: "Level II Depth of Market", category: "analytics", web: true, desktop: true, mobile: "Level I", portal: false, api: true },
    { name: "100+ Technical Indicators", category: "analytics", web: true, desktop: true, mobile: "25+ Indicators", portal: false, api: "Raw Data" },
    { name: "Real-time Technical Screeners", category: "analytics", web: true, desktop: true, mobile: "Preset", portal: false, api: true },
    { name: "Options Volatility Lab", category: "analytics", web: true, desktop: true, mobile: false, portal: false, api: true },

    // Orders & Workspace
    { name: "SmartOrder Routing (NBBO)", category: "orders", web: true, desktop: true, mobile: true, portal: false, api: true },
    { name: "Multi-Monitor Matrix (Up to 8 Displays)", category: "orders", web: false, desktop: true, mobile: false, portal: false, api: false },
    { name: "Cloud Workspace Synchronization", category: "orders", web: true, desktop: true, mobile: true, portal: true, api: false },
    { name: "Algo / Bracket Orders", category: "orders", web: true, desktop: true, mobile: true, portal: false, api: true },
    { name: "Portfolio Margin Stress Simulator", category: "orders", web: true, desktop: true, mobile: false, portal: true, api: true },

    // Security & Admin
    { name: "Biometric 2FA Security", category: "security", web: "SMS / App", desktop: "App 2FA", mobile: "FaceID / TouchID", portal: "FaceID", api: "OAuth 2.0" },
    { name: "Automated Tax Lot Optimizer", category: "security", web: true, desktop: true, mobile: true, portal: true, api: "API Lot" },
    { name: "FIX 4.4 / WebSockets Access", category: "security", web: false, desktop: true, mobile: false, portal: false, api: true },
    { name: "Multi-Currency Sub-Accounts", category: "security", web: true, desktop: true, mobile: true, portal: true, api: true },
    { name: "Data Export (CSV / PDF / TurboTax)", category: "security", web: true, desktop: true, mobile: true, portal: true, api: "JSON / CSV" },
  ];

  const filteredFeatures = features.filter((f) => {
    const matchesSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'all' || f.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const renderValue = (val: boolean | string) => {
    if (typeof val === 'string') {
      return (
        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-400">
          {val}
        </span>
      );
    }
    if (val === true) {
      return (
        <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </div>
      );
    }
    return (
      <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
        <X className="w-3.5 h-3.5" />
      </div>
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-[#091824] text-white border-b border-emerald-900/40 font-sans relative overflow-hidden">
      
      {/* Mesh Glow Accent */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>INSTITUTIONAL PLATFORM MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
            Execution Capabilities Matrix
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Technical feature breakdown across all BrokerBros trading interfaces.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: 'All Capabilities' },
              { id: 'trading', label: 'Markets & Assets' },
              { id: 'analytics', label: 'Charts & Level II' },
              { id: 'orders', label: 'Routing & Orders' },
              { id: 'security', label: 'API & Security' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search features..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
            />
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-950 text-slate-400 font-mono border-b border-slate-800">
                  <th className="p-4 font-bold uppercase tracking-wider text-white">Feature Metric</th>
                  <th className="p-4 text-center font-bold">Web Trader</th>
                  <th className="p-4 text-center font-bold text-emerald-400">Desktop Pro</th>
                  <th className="p-4 text-center font-bold">Mobile App</th>
                  <th className="p-4 text-center font-bold">Portal</th>
                  <th className="p-4 text-center font-bold">FIX / API</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {filteredFeatures.map((f, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 font-semibold text-slate-200">{f.name}</td>
                    <td className="p-4 text-center">{renderValue(f.web)}</td>
                    <td className="p-4 text-center bg-emerald-500/5">{renderValue(f.desktop)}</td>
                    <td className="p-4 text-center">{renderValue(f.mobile)}</td>
                    <td className="p-4 text-center">{renderValue(f.portal)}</td>
                    <td className="p-4 text-center">{renderValue(f.api)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
