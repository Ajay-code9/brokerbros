import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Globe, Percent, Layers, BarChart2 } from 'lucide-react';

interface InstitutionalClassyShowcaseProps {
  onOpenAccount: () => void;
}

export const InstitutionalClassyShowcase: React.FC<InstitutionalClassyShowcaseProps> = ({ onOpenAccount }) => {
  return (
    <section className="bg-white text-slate-900 py-16 sm:py-24 font-sans border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* ── 1. B2B MODULAR INFRASTRUCTURE SHOWCASE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-extrabold text-slate-950 tracking-tight leading-[1.15] font-sans">
              Empower Your Brokerage With Turnkey Infrastructure
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium font-sans">
              Deploy white-label trading terminals, multi-tier IB rebate engines, prop firm evaluation workflows, and low-latency FIX liquidity bridges — engineered for global brokers and financial institutions.
            </p>

            {/* B2B Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 pb-2 border-y border-slate-100">
              <div>
                <div className="text-2xl font-black text-slate-950 font-sans">14+</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5 font-sans">Modular Systems</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-950 font-sans">150+</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5 font-sans">Connected LPs</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-950 font-sans">99.99%</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5 font-sans">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-950 font-sans">500+</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5 font-sans">Global Partners</div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <button
                onClick={onOpenAccount}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-none transition-colors text-xs tracking-wider uppercase font-sans cursor-pointer shadow-xs"
              >
                Explore 14 Modular Solutions
              </button>
            </div>

            {/* System Infrastructure Status */}
            <div className="text-[11px] font-mono text-slate-500 pt-1">
              SYSTEM SLA: <span className="text-emerald-700 font-bold">99.99%</span> · FIX BRIDGE: <span className="text-emerald-700 font-bold">ONLINE</span> · API HOOKS: <span className="text-emerald-700 font-bold">ACTIVE</span>
            </div>
          </div>

          {/* Right Column World Map Graphic */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-2xl">
              <img
                src="/worldmap.png"
                alt="Global Market Access Map"
                className="w-full h-auto object-contain opacity-85"
                onError={(e) => {
                  // Fallback clean SVG map look if image fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>

        </div>

        {/* ── 2. IBKR STYLE: REAL LAPTOP DEVICE MOCKUP ── */}
        <div className="py-8 text-center space-y-6">
          <div className="relative max-w-4xl mx-auto">
            <img
              src="/desktop-terminal.png"
              alt="BrokerBros Pro Trading Terminal"
              className="w-full h-auto object-contain shadow-2xl rounded-2xl border border-slate-200"
            />
          </div>
        </div>

        {/* ── 3. B2B MODULAR SOLUTIONS ENGINE (2-COL GRID) ── */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight font-sans">
              Complete Modular Infrastructure Engine
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium font-sans">
              Turnkey software modules designed to launch, operate, and scale modern brokerages and prop trading firms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {/* Card 1 */}
            <div className="space-y-2.5 p-6 bg-slate-50/70 border border-slate-200/80 border-l-4 border-l-emerald-600 hover:bg-white hover:shadow-md transition-all group">
              <h3 className="text-base font-bold text-slate-950 font-sans group-hover:text-emerald-700 transition-colors">
                White-Label Broker CRM & Backoffice
              </h3>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-medium font-sans">
                Complete client portal, automated KYC verification, and multi-tier IB rebate management.
              </p>
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs hover:text-emerald-800 transition-colors cursor-pointer pt-1"
              >
                <span>Explore CRM Suite</span>
                <span className="w-4 h-4 rounded-none bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

            {/* Card 2 */}
            <div className="space-y-2.5 p-6 bg-slate-50/70 border border-slate-200/80 border-l-4 border-l-emerald-600 hover:bg-white hover:shadow-md transition-all group">
              <h3 className="text-base font-bold text-slate-950 font-sans group-hover:text-emerald-700 transition-colors">
                Prop Firm Evaluation Engine
              </h3>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-medium font-sans">
                Automated daily drawdown tracking, profit target rules, breach alerts, and payout management.
              </p>
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs hover:text-emerald-800 transition-colors cursor-pointer pt-1"
              >
                <span>Explore Prop Firm Engine</span>
                <span className="w-4 h-4 rounded-none bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

            {/* Card 3 */}
            <div className="space-y-2.5 p-6 bg-slate-50/70 border border-slate-200/80 border-l-4 border-l-emerald-600 hover:bg-white hover:shadow-md transition-all group">
              <h3 className="text-base font-bold text-slate-950 font-sans group-hover:text-emerald-700 transition-colors">
                Web & Mobile Trading Apps
              </h3>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-medium font-sans">
                Custom branded Webtrader, iOS, and Android applications with real-time charting and instant execution.
              </p>
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs hover:text-emerald-800 transition-colors cursor-pointer pt-1"
              >
                <span>Explore Trading Apps</span>
                <span className="w-4 h-4 rounded-none bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

            {/* Card 4 */}
            <div className="space-y-2.5 p-6 bg-slate-50/70 border border-slate-200/80 border-l-4 border-l-emerald-600 hover:bg-white hover:shadow-md transition-all group">
              <h3 className="text-base font-bold text-slate-950 font-sans group-hover:text-emerald-700 transition-colors">
                Copy Trading & PAMM / MAM
              </h3>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-medium font-sans">
                Ultra-fast trade copying, flexible equity allocation, and automated performance fee splitting.
              </p>
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs hover:text-emerald-800 transition-colors cursor-pointer pt-1"
              >
                <span>Explore Copy & PAMM</span>
                <span className="w-4 h-4 rounded-none bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

            {/* Card 5 */}
            <div className="space-y-2.5 p-6 bg-slate-50/70 border border-slate-200/80 border-l-4 border-l-emerald-600 hover:bg-white hover:shadow-md transition-all group">
              <h3 className="text-base font-bold text-slate-950 font-sans group-hover:text-emerald-700 transition-colors">
                MT5 Server APIs & WebSockets
              </h3>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-medium font-sans">
                Server-side MetaTrader 5 API hooks, event triggers, and real-time WebSocket tick price streaming.
              </p>
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs hover:text-emerald-800 transition-colors cursor-pointer pt-1"
              >
                <span>Explore Server APIs</span>
                <span className="w-4 h-4 rounded-none bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

            {/* Card 6 */}
            <div className="space-y-2.5 p-6 bg-slate-50/70 border border-slate-200/80 border-l-4 border-l-emerald-600 hover:bg-white hover:shadow-md transition-all group">
              <h3 className="text-base font-bold text-slate-950 font-sans group-hover:text-emerald-700 transition-colors">
                FIX Liquidity & Crypto Gateways
              </h3>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-medium font-sans">
                Direct FIX 4.4/5.0 liquidity bridge to 150+ LPs and instant crypto deposit auto-crediting.
              </p>
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs hover:text-emerald-800 transition-colors cursor-pointer pt-1"
              >
                <span>Explore FIX & Gateways</span>
                <span className="w-4 h-4 rounded-none bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

          </div>
        </div>

        {/* ── 4. B2B TRANSPARENT PRICING & ZERO HIDDEN FEES ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10 border-t border-slate-100">
          
          {/* Left Column Graphic */}
          <div className="lg:col-span-5">
            <img
              src="/pricing-showcase.png"
              alt="BrokerBros B2B Modular Analytics"
              className="w-full h-auto object-cover rounded-none border border-slate-200 shadow-sm"
            />
          </div>

          {/* Right Column Institutional Transparency Copy */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight font-sans">
              Transparent Modular Pricing. Zero Hidden Fees.
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium font-sans">
              Predictable monthly licensing designed to maximize operational profit margins for brokers and prop trading firms worldwide.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-sans pt-1">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 font-medium font-sans">
                  <strong className="text-slate-900 font-bold">White-Label CRM:</strong> Flat monthly fee with unlimited client accounts and zero per-trader penalty charges.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 font-medium font-sans">
                  <strong className="text-slate-900 font-bold">FIX Liquidity Bridge:</strong> Direct Tier-1 LP connectivity with transparent volume tiers and zero hidden markups.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 font-medium font-sans">
                  <strong className="text-slate-900 font-bold">Prop Firm Engine:</strong> 100% automated drawdown monitoring, instant breach alerts, and profit-split accuracy.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs hover:text-emerald-800 transition-colors cursor-pointer group"
              >
                <span>REQUEST MODULAR PRICING QUOTE</span>
                <span className="w-4 h-4 rounded-none bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
