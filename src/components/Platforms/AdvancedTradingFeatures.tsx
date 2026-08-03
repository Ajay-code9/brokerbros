import React from 'react';
import {
  Zap,
  Activity,
  BarChart2,
  Sliders,
  TrendingUp,
  Shield,
  Bell,
  Calendar,
  Layers,
  Sparkles,
  Eye,
  CheckCircle2
} from 'lucide-react';

export const AdvancedTradingFeatures: React.FC = () => {
  const features = [
    {
      title: "SmartOrder Routing (NBBO)",
      tag: "EXECUTION OPTIMIZATION",
      desc: "Automatically splits and routes orders across 15+ execution venues for guaranteed best price fills and price improvement.",
      icon: Zap,
      graphic: (
        <div className="h-24 bg-slate-900 rounded-xl p-3 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1.5">
          <div className="flex justify-between text-emerald-400 font-bold">
            <span>ORDER: BUY 500 NVDA</span>
            <span>PRICE IMPROVED</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>ARCA: $128.46 (200)</span>
            <span>BATS: $128.44 (300)</span>
          </div>
          <div className="text-[10px] text-emerald-300 bg-emerald-950/60 p-1 rounded border border-emerald-500/30">
            ★ Saved $12.50 via SmartRouting
          </div>
        </div>
      )
    },
    {
      title: "Options Volatility & Greeks Lab",
      tag: "DERIVATIVES ANALYTICS",
      desc: "Simulate multi-leg option strategies, compute real-time Delta, Gamma, Theta, Vega, and visualize 3D implied volatility surfaces.",
      icon: TrendingUp,
      graphic: (
        <div className="h-24 bg-slate-900 rounded-xl p-3 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
          <div className="flex justify-between text-slate-200 font-bold">
            <span>STRATEGY: BULL CALL SPREAD</span>
            <span className="text-emerald-400">P(Win): 68%</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-[10px] text-slate-400 pt-1">
            <div className="bg-slate-950 p-1 rounded">Delta: 0.42</div>
            <div className="bg-slate-950 p-1 rounded">Theta: -$0.05</div>
            <div className="bg-slate-950 p-1 rounded">IV: 38.2%</div>
          </div>
        </div>
      )
    },
    {
      title: "Real-time Market Heatmaps",
      tag: "SECTOR & LIQUIDITY MAPS",
      desc: "Visualize real-time capital flow across market sectors, market cap tiers, and option volume concentrations at a glance.",
      icon: BarChart2,
      graphic: (
        <div className="h-24 bg-slate-900 rounded-xl p-2 border border-slate-800 grid grid-cols-3 gap-1 font-mono text-[10px] text-white">
          <div className="bg-emerald-600 p-1.5 rounded flex flex-col justify-between">
            <span className="font-bold">NVDA</span>
            <span className="text-[9px]">+4.2%</span>
          </div>
          <div className="bg-emerald-700 p-1.5 rounded flex flex-col justify-between">
            <span className="font-bold">AAPL</span>
            <span className="text-[9px]">+1.8%</span>
          </div>
          <div className="bg-rose-600/90 p-1.5 rounded flex flex-col justify-between">
            <span className="font-bold">TSLA</span>
            <span className="text-[9px]">-1.2%</span>
          </div>
        </div>
      )
    },
    {
      title: "Level II Depth of Market",
      tag: "ORDER BOOK LADDER",
      desc: "Inspect real-time bid/ask order volume across market makers with one-click limit order placement directly on the DOM ladder.",
      icon: Layers,
      graphic: (
        <div className="h-24 bg-slate-900 rounded-xl p-2 border border-slate-800 font-mono text-[10px] space-y-1">
          <div className="flex justify-between text-emerald-400 font-bold border-b border-slate-800 pb-1">
            <span>ASK: 128.45 (1,400 sh)</span>
            <span>ARCA</span>
          </div>
          <div className="flex justify-between text-rose-400 font-bold">
            <span>BID: 128.42 (2,200 sh)</span>
            <span>BATS</span>
          </div>
        </div>
      )
    },
    {
      title: "AI Watchlists & Smart Discovery",
      tag: "INTELLIGENT SCREENING",
      desc: "Automated pattern recognition scanning for unusual option volume, moving average crossovers, and technical breakouts.",
      icon: Sparkles,
      graphic: (
        <div className="h-24 bg-slate-900 rounded-xl p-3 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI PATTERN ALERT</span>
          </div>
          <p className="text-[10px] text-slate-300">Bullish Flag Breakout detected on QQQ with 3.2x average volume.</p>
        </div>
      )
    },
    {
      title: "Portfolio Margin Stress Simulator",
      tag: "RISK MANAGEMENT",
      desc: "Simulate portfolio margin requirements under extreme market shock scenarios (-15% crash, +20% spike, IV expansion).",
      icon: Shield,
      graphic: (
        <div className="h-24 bg-slate-900 rounded-xl p-3 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
          <span className="text-slate-400 block text-[10px]">SCENARIO: -15% S&P SHOCK</span>
          <div className="text-emerald-400 font-bold">Margin Coverage: 240% (SAFE)</div>
          <div className="text-[10px] text-slate-400">Max Drawdown: -$14,200</div>
        </div>
      )
    },
    {
      title: "Real-time Push & Execution Alerts",
      tag: "CROSS-DEVICE NOTIFICATIONS",
      desc: "Set custom price alerts, indicator triggers, and execution fill confirmations sent instantly to your phone or desktop.",
      icon: Bell,
      graphic: (
        <div className="h-24 bg-slate-900 rounded-xl p-3 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
          <div className="flex items-center justify-between text-emerald-400 font-bold">
            <span>PUSH ALERT: FILLED</span>
            <span>12:04:02 PM</span>
          </div>
          <p className="text-[10px] text-slate-300">Bought 500 NVDA @ $128.45 Limit. Sub-12ms execution.</p>
        </div>
      )
    },
    {
      title: "Economic Calendar & News Stream",
      tag: "MACRO & CENTRAL BANK EVENTS",
      desc: "Live economic data release countdowns (CPI, NFP, FOMC) with institutional consensus estimates and market impact ratings.",
      icon: Calendar,
      graphic: (
        <div className="h-24 bg-slate-900 rounded-xl p-3 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
          <div className="flex justify-between text-amber-400 font-bold">
            <span>FOMC RATE DECISION</span>
            <span>TODAY 2:00 PM</span>
          </div>
          <p className="text-[10px] text-slate-400">Consensus: 5.25% • Prior: 5.25% • High Impact</p>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#06141D] text-white border-b border-emerald-900/40 font-sans relative overflow-hidden">
      
      {/* Glow Lighting Accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>ALGORITHMIC & HIGH-FREQUENCY SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
            Engineered for Active Professional Traders
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Deep-dive into the proprietary tools, algorithmic order types, and risk management systems powering BrokerBros platforms.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => {
            const IconComp = f.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D2231]/90 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/30 shadow-xl hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 space-y-5 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 uppercase">
                      {f.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-sans group-hover:text-cyan-300 transition-colors pt-1">
                    {f.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed font-sans">
                    {f.desc}
                  </p>
                </div>

                {/* Graphic Illustration Box */}
                {f.graphic}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
