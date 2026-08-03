import React from 'react';
import { Server, Cpu, ShieldCheck, Zap, Activity, Globe, ArrowRight, Lock, Wifi } from 'lucide-react';

export const TechnologyArchitecture: React.FC = () => {
  const infraHighlights = [
    {
      title: "Co-Located Data Centers",
      subtitle: "Equinix NY4, LD4 & TY3 Facilities",
      desc: "Direct fiber connections to major global exchanges with sub-millisecond physical proximity routing.",
      icon: Server
    },
    {
      title: "SmartRouting™ Liquidity Engine",
      subtitle: "Continuous NBBO Price Improvement",
      desc: "Scans dark pools, primary exchanges, and ECNs simultaneously to capture price improvement on 98.4% of market orders.",
      icon: Cpu
    },
    {
      title: "Active-Active Server Redundancy",
      subtitle: "99.999% Guaranteed Infrastructure SLA",
      desc: "Automatic sub-second failover between primary data centers with zero data loss or position state discrepancy.",
      icon: ShieldCheck
    },
    {
      title: "Encrypted FIX 4.4 & TLS 1.3",
      subtitle: "Bank-Grade Cyber Security Protocol",
      desc: "Hardware security modules (HSMs) and 256-bit AES encryption protecting all API tokens, orders, and market feeds.",
      icon: Lock
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#06141D] text-white border-b border-emerald-900/40 relative overflow-hidden font-sans">
      {/* Background Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>SUB-MILLISECOND DATACENTER INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans tracking-tight">
            Co-Located High-Frequency Architecture
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
            Our multi-billion dollar trading pipeline processes over 4.2 million daily orders with high availability, microsecond latency, and zero compromise on security.
          </p>
        </div>

        {/* Datacenter Visual Showcase Box */}
        <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl h-56 sm:h-72 group">
          <img
            src="/datacenter_latency.png"
            alt="High-Frequency Datacenter"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06141D] via-[#06141D]/70 to-transparent" />
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-center max-w-2xl space-y-3">
            <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/90 px-3 py-1 rounded-md border border-cyan-700/60 w-max">
              EQUINIX NY4 / LD4 / TY3 CO-LOCATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-sans">
              Direct Fiber Gateway Proximity to NYSE, CME & LSE
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans line-clamp-2">
              Eliminating multi-hop network congestion with dedicated dark fiber routes, active-active failovers, and sub-millisecond SmartOrder routing.
            </p>
          </div>
        </div>

        {/* Architecture Pipeline Flow Diagram */}
        <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="text-emerald-400 font-bold flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              ORDER EXECUTION PIPELINE ARCHITECTURE
            </span>
            <span>AVERAGE LATENCY: 3.8ms</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono relative">
            
            {/* Step 1 */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3 relative group hover:border-emerald-500/50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-bold text-white text-sm">Order Generation</h3>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Client transmits order from Web, Desktop, Mobile, or FIX/REST API.
              </p>
              <div className="text-[10px] text-emerald-400 font-bold">Latency: &lt; 0.5ms</div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3 relative group hover:border-emerald-500/50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-bold text-white text-sm">Risk Check & Pre-Trade</h3>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Real-time portfolio margin check, buying power verification, & token auth.
              </p>
              <div className="text-[10px] text-emerald-400 font-bold">Latency: &lt; 0.8ms</div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3 relative group hover:border-emerald-500/50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-bold text-white text-sm">SmartRouting™ Engine</h3>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Scans 15+ venues (ARCA, BATS, NASDAQ, Dark Pools) for best price fill.
              </p>
              <div className="text-[10px] text-emerald-400 font-bold">Latency: &lt; 1.2ms</div>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3 relative group hover:border-emerald-500/50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-bold text-white text-sm">Exchange Execution Fill</h3>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Direct fiber execution at market center with instant client fill report.
              </p>
              <div className="text-[10px] text-emerald-400 font-bold">Total: 3.8ms Fill</div>
            </div>

          </div>
        </div>

        {/* Infra Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infraHighlights.map((h, idx) => {
            const IconComp = h.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-950 text-emerald-400 border border-slate-800 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base font-serif-heading">{h.title}</h3>
                  <div className="text-[11px] font-mono text-emerald-400 font-semibold">{h.subtitle}</div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed font-sans">
                  {h.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
