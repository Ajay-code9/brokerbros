import React from 'react';
import { Lightbulb, TrendingUp, ShieldAlert, Award, Compass, PieChart, ArrowUpRight } from 'lucide-react';

export const MarketInsights: React.FC = () => {
  const sectorPerformance = [
    { name: 'Information Technology', change: '+1.82%', width: '88%', positive: true },
    { name: 'Healthcare & MedTech', change: '+1.15%', width: '72%', positive: true },
    { name: 'Financials & Banking', change: '+0.64%', width: '54%', positive: true },
    { name: 'Industrials & Energy', change: '+0.21%', width: '42%', positive: true },
    { name: 'Utilities & Consumer Defensive', change: '-0.38%', width: '30%', positive: false },
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#06141D] border-b border-emerald-900/40 text-white font-sans relative overflow-hidden">
      
      {/* Mesh Glow Accent */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0D2231] text-white font-mono text-[11px] border border-slate-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-bold tracking-wider">DTCC & OCC LIQUIDITY MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight">
              Institutional Market Insights & Strategy
            </h2>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl font-sans leading-relaxed">
            Distilling complex market signals, sector rotational flows, and risk factors into clear, digestible themes.
          </p>
        </div>

        {/* Visual Global Network Banner Card */}
        <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl h-48 sm:h-56 group">
          <img
            src="/global_economy_network.png"
            alt="Global Financial Network"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06141D] via-[#06141D]/70 to-transparent" />
          <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-center max-w-xl space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-700/60 w-max">
              GLOBAL LIQUIDITY MAP 2026
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-sans">
              Interconnected Exchange Networks & Macro Liquidity Routing
            </h3>
            <p className="text-xs text-slate-300 font-sans line-clamp-2">
              Streaming real-time cross-border order book depth across DTCC, OCC, Euroclear, and CME Globex gateways.
            </p>
          </div>
        </div>

        {/* 5 Insight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Market Trends */}
          <div className="bg-[#0D2231]/90 backdrop-blur-md rounded-2xl border border-emerald-500/30 p-6 space-y-4 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-700/60">
                  MACRO TREND
                </span>
              </div>
              <h3 className="text-xl font-bold font-sans text-white group-hover:text-cyan-300 transition-colors">
                AI Capex Expansion Phase
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Cloud hyperscaler infrastructure budgets exceed $180B for 2026. Custom ASIC designers and grid transformer manufacturers benefit from multi-year backlog visibility.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-400">
              <span>View Trend Playbook</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: Sector Performance (Visual bar chart representation) */}
          <div className="bg-[#0D2231]/90 backdrop-blur-md rounded-2xl border border-emerald-500/30 p-6 space-y-4 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold">
                  <PieChart className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-[11px] font-mono font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-700/60">
                  SECTOR FLOWS
                </span>
              </div>
              <h3 className="text-xl font-bold font-sans text-white group-hover:text-emerald-300 transition-colors">
                Sector Performance Today
              </h3>
              
              {/* Minimal bar chart indicators */}
              <div className="space-y-2 pt-1">
                {sectorPerformance.map((sec) => (
                  <div key={sec.name} className="space-y-1">
                    <div className="flex justify-between text-[11px] font-sans">
                      <span className="font-medium text-slate-300 truncate pr-2">{sec.name}</span>
                      <span className={`font-mono font-bold ${sec.positive ? 'text-emerald-400' : 'text-rose-400'}`}>{sec.change}</span>
                    </div>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800">
                      <div
                        className={`h-full rounded-full ${sec.positive ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-rose-500'}`}
                        style={{ width: sec.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-cyan-400">
              <span>Full Heatmap Breakdown</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3: Investment Opportunities */}
          <div className="bg-[#0D2231]/90 backdrop-blur-md rounded-2xl border border-emerald-500/30 p-6 space-y-4 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5 text-teal-400" />
                </div>
                <span className="text-[11px] font-mono font-bold text-teal-300 bg-teal-950/80 px-2.5 py-0.5 rounded border border-teal-700/60">
                  OPPORTUNITY
                </span>
              </div>
              <h3 className="text-xl font-bold font-sans text-white group-hover:text-emerald-300 transition-colors">
                Quality Dividend Growth
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                As short-term cash yields normalize toward 3.5%, high-grade dividend aristocrats with interest coverage above 6.0x offer attractive total return potential.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-teal-400">
              <span>View Dividend Screener</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 4: Risk Alerts */}
          <div className="bg-[#0D2231]/90 backdrop-blur-md rounded-2xl border border-rose-500/30 p-6 space-y-4 hover:border-rose-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center font-bold">
                  <ShieldAlert className="w-5 h-5 text-rose-400" />
                </div>
                <span className="text-[11px] font-mono font-bold text-rose-300 bg-rose-950/80 px-2.5 py-0.5 rounded border border-rose-700/60">
                  RISK MONITOR
                </span>
              </div>
              <h3 className="text-xl font-bold font-sans text-white group-hover:text-rose-300 transition-colors">
                Central Bank Rate Divergence
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Divergent monetary paths between the ECB, Bank of Japan, and Federal Reserve increase cross-border currency volatility and yield curve steepening risks.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-rose-400">
              <span>Read Currency Risk Assessment</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 5: Analyst Opinion */}
          <div className="bg-[#0D2231]/90 backdrop-blur-md rounded-2xl border border-emerald-500/30 p-6 space-y-4 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between md:col-span-2 lg:col-span-2 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-700/60">
                  CHIEF STRATEGIST NOTE
                </span>
              </div>
              <h3 className="text-xl font-bold font-sans text-white group-hover:text-emerald-300 transition-colors">
                Q3 Portfolio Positioning Framework
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                "We advise maintaining an overweight stance on mega-cap technology and healthcare while selectively adding duration in high-grade corporate bonds as rate cuts materialize."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-400">
              <span>Read Marcus Vance's Full Strategy Note</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
