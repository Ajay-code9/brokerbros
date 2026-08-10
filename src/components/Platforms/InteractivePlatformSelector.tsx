import React, { useState } from 'react';
import { Sliders, CheckCircle2, ArrowRight, Monitor, Smartphone, Globe, Cpu, Sparkles, Shield, Zap } from 'lucide-react';
import { useRouter } from '../../router';

type ProfileType = 'beginner' | 'intermediate' | 'professional' | 'institutional';

interface Recommendation {
  title: string;
  badge: string;
  matchScore: number;
  primaryPlatform: string;
  secondaryPlatform: string;
  description: string;
  keyFeatures: string[];
  latency: string;
  learningCurve: string;
  recommendedDevice: string;
  icon: React.ElementType;
}

export const InteractivePlatformSelector: React.FC<{ onOpenAccount: () => void }> = ({ onOpenAccount }) => {
  const { navigate } = useRouter();
  const [selectedProfile, setSelectedProfile] = useState<ProfileType>('professional');

  const recommendations: Record<ProfileType, Recommendation> = {
    beginner: {
      title: "BrokerBros Web Trader & Mobile App",
      badge: "STREAMLINED & ACCESSIBLE",
      matchScore: 99,
      primaryPlatform: "Web Trader (Browser-based)",
      secondaryPlatform: "iOS & Android Mobile App",
      description: "Designed for investors seeking clean, intuitive charts, effortless stock & ETF execution, one-click buy/sell tickets, and automated dividend reinvestment without workspace clutter.",
      keyFeatures: [
        "Interactive TradingView HTML5 charts with simple indicators",
        "Biometric 2FA login with instant cloud synchronization",
        "Fractional shares trading & automated dollar-cost averaging",
        "Integrated AI educational insights & market news feed"
      ],
      latency: "< 25ms Web Execution",
      learningCurve: "Low (5-10 Minutes)",
      recommendedDevice: "Web Browser / Smartphone",
      icon: Globe
    },
    intermediate: {
      title: "Web Workstation + Mobile Options Suite",
      badge: "BALANCED POWER & FLEXIBILITY",
      matchScore: 97,
      primaryPlatform: "Web Workstation Pro",
      secondaryPlatform: "Mobile Derivatives App",
      description: "Ideal for active swing traders and multi-leg option traders requiring customizable widget panels, Level I/II depth of market, technical screeners, and real-time options Greeks.",
      keyFeatures: [
        "Drag-and-drop widget workspace with multi-tab support",
        "Options strategy builder with multi-leg visual probability matrix",
        "Real-time technical scanners & volume breakout alerts",
        "SmartOrder Routing with price improvement optimization"
      ],
      latency: "< 15ms Sub-Second Fill",
      learningCurve: "Moderate (30 Minutes)",
      recommendedDevice: "Laptop / Dual Monitors",
      icon: Monitor
    },
    professional: {
      title: "BrokerBros Workstation Pro (Desktop C++)",
      badge: "ULTRA-LOW LATENCY MULTI-MONITOR",
      matchScore: 98,
      primaryPlatform: "Desktop Pro (Native C++)",
      secondaryPlatform: "Python Strategy API",
      description: "Engineered for high-volume day traders, momentum traders, and derivatives specialists who require multi-monitor display layouts, direct market access (DMA), and Level II depth.",
      keyFeatures: [
        "Native C++ graphics engine with 120 FPS chart rendering",
        "Multi-monitor workspace matrix (up to 8 physical displays)",
        "Direct Exchange Routing (ARCA, NASDAQ, BATS, NYSE)",
        "Options Volatility Lab & Portfolio Margin Stress Testing"
      ],
      latency: "< 3.8ms Direct Fiber Routing",
      learningCurve: "Advanced (1-2 Hours)",
      recommendedDevice: "Quad/Octa Monitor Workstation",
      icon: Cpu
    },
    institutional: {
      title: "Institutional FIX 4.4 / REST & C++ API",
      badge: "HIGH FREQUENCY & ALGORITHMIC",
      matchScore: 100,
      primaryPlatform: "FIX 4.4 Engine & API Gateway",
      secondaryPlatform: "Desktop Pro Admin Console",
      description: "Built for quantitative hedge funds, prop trading desks, and algorithmic firms needing FIX protocol endpoints, co-located servers in Equinix NY4/LD4, and custom Python/C++ SDKs.",
      keyFeatures: [
        "FIX 4.4 & REST / WebSockets streaming data feeds",
        "Sub-millisecond order execution via co-located infrastructure",
        "Dedicated Stock Borrow Desk with real-time locator API",
        "Multi-account omnibus clearing & custom risk controls"
      ],
      latency: "< 1.2ms Sub-Millisecond DMA",
      learningCurve: "Developer / Quantitative",
      recommendedDevice: "Co-Located Server / Custom Linux Suite",
      icon: Zap
    }
  };

  const rec = recommendations[selectedProfile];
  const RecommendedIcon = rec.icon;

  return (
    <section className="py-16 lg:py-24 bg-[#0A1A24] border-b border-emerald-900/40 text-white font-sans relative overflow-hidden">
      
      {/* Glow Lighting Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5 text-emerald-400" />
            <span>INTELLIGENT MATCHING ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans tracking-tight">
            Find Your Ideal Platform Architecture
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
            Select your trading profile below to instantly receive personalized platform configuration recommendations tailored to your latency requirements and strategy complexity.
          </p>
        </div>

        {/* Profile Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mx-auto p-1.5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
          {[
            { id: 'beginner', label: 'Beginner Investor' },
            { id: 'intermediate', label: 'Intermediate Trader' },
            { id: 'professional', label: 'Active Professional' },
            { id: 'institutional', label: 'Institutional / Algo' },
          ].map((item) => {
            const isSelected = selectedProfile === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedProfile(item.id as ProfileType)}
                className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer text-center ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Recommendation Card Container */}
        <div className="bg-[#0D2231]/90 backdrop-blur-md rounded-3xl border border-emerald-500/30 p-6 sm:p-10 shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Summary & Features (7 cols) */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <span className="text-xs font-mono font-bold px-3 py-1 bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 rounded-full uppercase">
                  {rec.badge}
                </span>

                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>MATCH RATING:</span>
                  <span className="text-emerald-400 font-black text-sm">{rec.matchScore}% Match</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <RecommendedIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-sans">
                    {rec.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    Primary: <span className="font-bold text-emerald-400">{rec.primaryPlatform}</span> | Secondary: <span className="font-bold text-cyan-300">{rec.secondaryPlatform}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                {rec.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Key Capabilities Included:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 font-medium font-sans">
                  {rec.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-slate-800">
              <button
                onClick={onOpenAccount}
                className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Launch Your {rec.primaryPlatform.split(' ')[0]} Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Mobile Visual Asset & Specs (5 cols) */}
          <div className="lg:col-span-5 bg-[#06141D] text-white rounded-2xl p-6 sm:p-7 space-y-5 flex flex-col justify-between border border-slate-800 shadow-2xl relative overflow-hidden group">
            
            {/* Generated Mobile App Preview Image */}
            <div className="relative h-44 rounded-xl overflow-hidden border border-emerald-500/30">
              <img
                src="/mobile_trading_app.webp"
                alt="Mobile App"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06141D] via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-2.5 left-3 text-[10px] font-mono font-bold bg-slate-950/90 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/40">
                iOS & Android Mobile App Sync
              </span>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">System Specifications</span>
                <Zap className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Order Execution Latency</span>
                    <span className="font-bold text-emerald-400">{rec.latency}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full rounded-full transition-all duration-500" style={{ width: `${rec.matchScore}%` }} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Learning Curve</span>
                    <span className="font-bold text-slate-200">{rec.learningCurve}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-teal-400 h-full rounded-full transition-all duration-500" style={{ width: '85%' }} />
                  </div>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 text-xs font-mono">
                  <span className="text-slate-400 block text-[10px]">RECOMMENDED HARDWARE / SUITE</span>
                  <span className="font-bold text-emerald-300">{rec.recommendedDevice}</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 font-mono border-t border-slate-800 pt-3">
              * All platforms share live unified cloud portfolio sync and zero data latency lag across devices.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
