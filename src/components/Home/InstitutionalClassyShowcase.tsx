import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Globe, Percent, Layers, BarChart2 } from 'lucide-react';
import { useRouter } from '../../router';

interface InstitutionalClassyShowcaseProps {
  onOpenAccount: () => void;
}

export const InstitutionalClassyShowcase: React.FC<InstitutionalClassyShowcaseProps> = ({ onOpenAccount }) => {
  const { navigate } = useRouter();
  return (
    <section className="bg-white dark:bg-[#090D14] text-slate-900 dark:text-slate-100 py-16 sm:py-24 font-sans border-b border-slate-100 dark:border-[#1E293B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* ── 1. B2B MODULAR INFRASTRUCTURE SHOWCASE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.15] font-sans">
              Empower Your Brokerage With Turnkey Infrastructure
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-medium font-sans">
              Deploy white-label trading terminals, multi-tier IB rebate engines, prop firm evaluation workflows, and low-latency FIX liquidity bridges — engineered for global brokers and financial institutions.
            </p>

            {/* B2B Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 pb-2 border-y border-slate-100 dark:border-[#1E293B]">
              <div>
                <div className="text-2xl font-black text-slate-950 dark:text-white font-sans">14+</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 font-sans">Modular Systems</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-950 dark:text-white font-sans">150+</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 font-sans">Connected LPs</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-950 dark:text-white font-sans">99.99%</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 font-sans">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-950 dark:text-white font-sans">500+</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 font-sans">Global Partners</div>
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
            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-1">
              SYSTEM SLA: <span className="text-emerald-700 dark:text-emerald-400 font-bold">99.99%</span> · FIX BRIDGE: <span className="text-emerald-700 dark:text-emerald-400 font-bold">ONLINE</span> · API HOOKS: <span className="text-emerald-700 dark:text-emerald-400 font-bold">ACTIVE</span>
            </div>
          </div>

          {/* Right Column World Map Graphic */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-2xl">
              <img
                src="/worldmap.webp"
                alt="Global Market Access Map"
                className="w-full h-auto object-contain opacity-85 dark:invert dark:brightness-150 transition-all duration-300"
                onError={(e) => {
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
              src="/desktop-terminal.webp"
              alt="BrokerBros Pro Trading Terminal"
              className="w-full h-auto object-contain shadow-2xl rounded-2xl border border-slate-200 dark:border-[#1E293B]"
            />
          </div>
        </div>

        {/* ── 3. B2B MODULAR SOLUTIONS ENGINE (2-COL GRID) ── */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight font-sans">
              Complete Modular Infrastructure Engine
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium font-sans">
              Turnkey software modules designed to launch, operate, and scale modern brokerages and prop trading firms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {/* Card 1 */}
            <div className="space-y-2.5 p-6 bg-slate-50/70 dark:bg-[#141C2B] border border-slate-200/80 dark:border-[#1E293B] border-l-4 border-l-emerald-600 hover:bg-white dark:hover:bg-[#1B2538] hover:shadow-md transition-all group cursor-pointer" onClick={() => navigate('/products/forex-crm')}>
              <h3 className="text-base font-bold text-slate-950 dark:text-white font-sans group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                White-Label Broker CRM & Backoffice
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed font-medium font-sans">
                Complete client portal, automated KYC verification, and multi-tier IB rebate management.
              </p>
              <button
                onClick={(e) => { e.stopPropagation(); navigate('/products/forex-crm'); }}
                className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors cursor-pointer pt-1"
              >
                <span>Explore CRM Suite</span>
                <span className="w-4 h-4 rounded-none bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

            {/* Card 2 */}
            <div className="space-y-2.5 p-6 bg-slate-50/70 dark:bg-[#141C2B] border border-slate-200/80 dark:border-[#1E293B] border-l-4 border-l-emerald-600 hover:bg-white dark:hover:bg-[#1B2538] hover:shadow-md transition-all group cursor-pointer" onClick={() => navigate('/products/prop-trading-crm')}>
              <h3 className="text-base font-bold text-slate-950 dark:text-white font-sans group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                Prop Firm Evaluation Engine
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed font-medium font-sans">
                Automated daily drawdown tracking, profit target rules, breach alerts, and payout management.
              </p>
              <button
                onClick={(e) => { e.stopPropagation(); navigate('/products/prop-trading-crm'); }}
                className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors cursor-pointer pt-1"
              >
                <span>Explore Prop Firm Engine</span>
                <span className="w-4 h-4 rounded-none bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

            {/* Card 3 */}
            <div className="space-y-2.5 p-6 bg-slate-50/70 dark:bg-[#141C2B] border border-slate-200/80 dark:border-[#1E293B] border-l-4 border-l-emerald-600 hover:bg-white dark:hover:bg-[#1B2538] hover:shadow-md transition-all group cursor-pointer" onClick={() => navigate('/products/web-trader')}>
              <h3 className="text-base font-bold text-slate-950 dark:text-white font-sans group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                Web & Mobile Trading Apps
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed font-medium font-sans">
                Custom branded Webtrader, iOS, and Android applications with real-time charting and instant execution.
              </p>
              <button
                onClick={(e) => { e.stopPropagation(); navigate('/products/web-trader'); }}
                className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors cursor-pointer pt-1"
              >
                <span>Explore Trading Apps</span>
                <span className="w-4 h-4 rounded-none bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

            {/* Card 4 */}
            <div className="space-y-2.5 p-6 bg-slate-50/70 dark:bg-[#141C2B] border border-slate-200/80 dark:border-[#1E293B] border-l-4 border-l-emerald-600 hover:bg-white dark:hover:bg-[#1B2538] hover:shadow-md transition-all group cursor-pointer" onClick={() => navigate('/products/pamm-mam')}>
              <h3 className="text-base font-bold text-slate-950 dark:text-white font-sans group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                Copy Trading & PAMM / MAM
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed font-medium font-sans">
                Ultra-fast trade copying, flexible equity allocation, and automated performance fee splitting.
              </p>
              <button
                onClick={(e) => { e.stopPropagation(); navigate('/products/pamm-mam'); }}
                className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors cursor-pointer pt-1"
              >
                <span>Explore Copy & PAMM</span>
                <span className="w-4 h-4 rounded-none bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

            {/* Card 5 */}
            <div className="space-y-2.5 p-6 bg-slate-50/70 dark:bg-[#141C2B] border border-slate-200/80 dark:border-[#1E293B] border-l-4 border-l-emerald-600 hover:bg-white dark:hover:bg-[#1B2538] hover:shadow-md transition-all group cursor-pointer" onClick={() => navigate('/products/plugins')}>
              <h3 className="text-base font-bold text-slate-950 dark:text-white font-sans group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                MT5 Server APIs & WebSockets
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed font-medium font-sans">
                Server-side MetaTrader 5 API hooks, event triggers, and real-time WebSocket tick price streaming.
              </p>
              <button
                onClick={(e) => { e.stopPropagation(); navigate('/products/plugins'); }}
                className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors cursor-pointer pt-1"
              >
                <span>Explore Server APIs</span>
                <span className="w-4 h-4 rounded-none bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

            {/* Card 6 */}
            <div className="space-y-2.5 p-6 bg-slate-50/70 dark:bg-[#141C2B] border border-slate-200/80 dark:border-[#1E293B] border-l-4 border-l-emerald-600 hover:bg-white dark:hover:bg-[#1B2538] hover:shadow-md transition-all group cursor-pointer" onClick={() => navigate('/api-integrations')}>
              <h3 className="text-base font-bold text-slate-950 dark:text-white font-sans group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                FIX Liquidity & Crypto Gateways
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed font-medium font-sans">
                Direct FIX 4.4/5.0 liquidity bridge to 150+ LPs and instant crypto deposit auto-crediting.
              </p>
              <button
                onClick={(e) => { e.stopPropagation(); navigate('/api-integrations'); }}
                className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors cursor-pointer pt-1"
              >
                <span>Explore FIX & Gateways</span>
                <span className="w-4 h-4 rounded-none bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

          </div>
        </div>

        {/* ── 4. B2B TRANSPARENT PRICING & ZERO HIDDEN FEES ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10 border-t border-slate-100 dark:border-slate-800">
          
          {/* Left Column Graphic */}
          <div className="lg:col-span-5">
            <img
              src="/pricing-showcase.webp"
              alt="BrokerBros B2B Modular Analytics"
              className="w-full h-auto object-cover rounded-none border border-slate-200 dark:border-slate-800 shadow-sm"
            />
          </div>

          {/* Right Column Institutional Transparency Copy */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight font-sans">
              Transparent Modular Pricing. Zero Hidden Fees.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-medium font-sans">
              Predictable monthly licensing designed to maximize operational profit margins for brokers and prop trading firms worldwide.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans pt-1">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium font-sans">
                  <strong className="text-slate-900 dark:text-white font-bold">White-Label CRM:</strong> Flat monthly fee with unlimited client accounts and zero per-trader penalty charges.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium font-sans">
                  <strong className="text-slate-900 dark:text-white font-bold">FIX Liquidity Bridge:</strong> Direct Tier-1 LP connectivity with transparent volume tiers and zero hidden markups.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium font-sans">
                  <strong className="text-slate-900 dark:text-white font-bold">Prop Firm Engine:</strong> 100% automated drawdown monitoring, instant breach alerts, and profit-split accuracy.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors cursor-pointer group"
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
