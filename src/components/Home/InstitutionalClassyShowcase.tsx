import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Globe, Percent, Layers, BarChart2 } from 'lucide-react';

interface InstitutionalClassyShowcaseProps {
  onOpenAccount: () => void;
}

export const InstitutionalClassyShowcase: React.FC<InstitutionalClassyShowcaseProps> = ({ onOpenAccount }) => {
  return (
    <section className="bg-white text-slate-900 py-16 sm:py-24 font-sans border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* ── 1. IBKR STYLE: DISCOVER A WORLD OF OPPORTUNITIES ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-slate-950 tracking-tight leading-[1.15]">
              Discover a World of Opportunities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Invest globally in stocks, options, futures, currencies, bonds and funds from a single unified platform. Fund your account in multiple currencies and trade assets worldwide 24 hours a day, 5 days a week.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-2 pb-2">
              <div>
                <div className="text-3xl font-extrabold text-slate-950">150+</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Markets</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-slate-950">35</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-slate-950">26</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Currencies</div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={onOpenAccount}
              className="px-6 py-2.5 border border-slate-900 text-slate-900 hover:bg-slate-950 hover:text-white transition-all text-xs font-bold rounded cursor-pointer"
            >
              Global Markets Access
            </button>

            {/* Market Ticker Status */}
            <div className="text-[11px] font-mono text-slate-500 pt-2">
              NYSE: <span className="text-emerald-700 font-bold">OPEN</span> · LSE: <span className="text-slate-400 font-bold">CLOSED</span> · HKEX: <span className="text-slate-400 font-bold">CLOSED</span>
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
              src="/trading_platform_desktop.png"
              alt="BrokerBros Pro Trading Terminal"
              className="w-full h-auto object-contain shadow-2xl rounded-2xl border border-slate-200"
            />
          </div>
        </div>

        {/* ── 3. IBKR STYLE: POWERFUL TRADING PLATFORMS (2-COL MINIMAL LIST) ── */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Powerful Trading Platforms To Help You Succeed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
            
            {/* Item 1 */}
            <div className="space-y-2">
              <p className="text-slate-600 text-sm leading-relaxed">
                Award winning platforms for every investor from beginner to advanced on mobile, web and desktop.
              </p>
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs hover:text-emerald-800 transition-colors cursor-pointer group"
              >
                <span>Trading Platforms</span>
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

            {/* Item 2 */}
            <div className="space-y-2">
              <p className="text-slate-600 text-sm leading-relaxed">
                100+ order types - from limit orders to complex algorithmic trading - help you execute any trading strategy.
              </p>
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs hover:text-emerald-800 transition-colors cursor-pointer group"
              >
                <span>Order Types and Algos</span>
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

            {/* Item 3 */}
            <div className="space-y-2">
              <p className="text-slate-600 text-sm leading-relaxed">
                Discover new investment opportunities with over 200 free and premium global research and news providers.
              </p>
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs hover:text-emerald-800 transition-colors cursor-pointer group"
              >
                <span>Global Research and News</span>
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

            {/* Item 4 */}
            <div className="space-y-2">
              <p className="text-slate-600 text-sm leading-relaxed">
                Real-time trade confirmations, margin details, transaction cost analysis, sophisticated portfolio analysis and more.
              </p>
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs hover:text-emerald-800 transition-colors cursor-pointer group"
              >
                <span>Comprehensive Reporting</span>
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

            {/* Item 5 */}
            <div className="space-y-2">
              <p className="text-slate-600 text-sm leading-relaxed">
                Spot market opportunities, analyze results, manage your account and make better decisions with our free trading tools.
              </p>
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs hover:text-emerald-800 transition-colors cursor-pointer group"
              >
                <span>Free Trading Tools</span>
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

            {/* Item 6 */}
            <div className="space-y-2">
              <p className="text-slate-600 text-sm leading-relaxed">
                Sub-account hierarchy, multi-currency cash balances, automated tax-lot routing, and real-time risk monitoring.
              </p>
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs hover:text-emerald-800 transition-colors cursor-pointer group"
              >
                <span>Account Architecture</span>
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
              </button>
            </div>

          </div>
        </div>

        {/* ── 4. IBKR STYLE: NO MARKUPS OR BUILT-IN SPREADS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10 border-t border-slate-100">
          
          {/* Left Column Real Professional Stock Photo */}
          <div className="lg:col-span-5">
            <img
              src="/wallstreet_trader_analytics.png"
              alt="Professional Investor Analytics"
              className="w-full h-auto object-cover rounded-xl shadow-lg border border-slate-200"
            />
          </div>

          {/* Right Column Institutional Transparency Copy */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              No Mark-ups or Built-in Spreads
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At BrokerBros, trades are executed without hidden mark-ups or built-in spreads. By removing embedded fees, traders benefit from clearer price discovery, tighter bid-ask spreads, and improved strategy performance.
            </p>

            <div className="space-y-2 text-sm text-slate-700 font-sans">
              <div className="font-bold text-slate-900">Bond & Fixed Income Commissions:</div>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>Treasury bills, notes and bonds: <strong className="text-slate-900">0.2 bps</strong> for the first USD 1 million of face value.</li>
                <li>Corporate bonds: <strong className="text-slate-900">10 bps</strong> for the first USD 10,000 of face value.</li>
                <li>Municipal bonds: <strong className="text-slate-900">5 bps</strong> for the first USD 10,000 of face value.</li>
              </ul>
            </div>

            <button
              onClick={onOpenAccount}
              className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs hover:text-emerald-800 transition-colors cursor-pointer group pt-2"
            >
              <span>View Full Fee Transparency Schedule</span>
              <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
