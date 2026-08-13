import React from 'react';
import { ArrowRight, Database, ShieldCheck, Zap, Server, Activity, CheckCircle2, Wifi } from 'lucide-react';
import { StickyPricingNav } from '../../components/Pricing/StickyPricingNav';
import { MarketDataPricingSection } from '../../components/Pricing/MarketDataPricingSection';
import { FeeTransparencyCards } from '../../components/Pricing/FeeTransparencyCards';
import { InteractivePricingCalculator } from '../../components/Pricing/InteractivePricingCalculator';
import { PricingFAQAccordion } from '../../components/Pricing/PricingFAQAccordion';
import { PricingCTA } from '../../components/Pricing/PricingCTA';

interface MarketDataPricingPageProps {
  onOpenAccount: () => void;
}

export const MarketDataPricingPage: React.FC<MarketDataPricingPageProps> = ({ onOpenAccount }) => {
  const scrollToCalculator = () => {
    const el = document.getElementById('pricing-calculator');
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white dark:bg-[#090D14] text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white transition-colors duration-300">
      
      {/* Dedicated Market Data Hero */}
      <section
        className="relative text-slate-900 dark:text-white min-h-[120vh] border-b border-slate-200 dark:border-[#1E293B] overflow-hidden font-sans flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/backgroundpricefourth.webp')" }}
      >
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-emerald-50/60 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        {/* Subtle overlay to douse background */}
        <div className="absolute inset-0 bg-white/20 dark:bg-[#090D14]/85 backdrop-blur-[2px] transition-colors duration-300 pointer-events-none" />

        {/* Main content — vertically centered in the viewport */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 w-full">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.12]">
              Direct Exchange Market Data & <br />
              <span className="text-emerald-600 dark:text-emerald-400">WebSocket / FIX Data Pricing</span>
            </h1>

            <p className="text-slate-900 dark:text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-semibold bg-white/65 dark:bg-[#141C2B]/80 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/80 dark:border-[#1E293B] shadow-sm">
              Pay exact exchange pass-through cost for NYSE, NASDAQ, LSE, and CME quotes. No arbitrary market data markups, plus automatic monthly data fee waivers for active trading accounts.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={onOpenAccount}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <span>Explore Exchange Data Fees</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToCalculator}
                className="px-5 py-3 bg-slate-900 dark:bg-[#141C2B] hover:bg-slate-800 dark:hover:bg-[#1B2538] text-white font-semibold rounded-xl border border-slate-700 dark:border-[#1E293B] transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Calculate Savings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stat Badges — pinned to bottom, visible only on scroll */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-8 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-slate-200 dark:border-[#1E293B] pt-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white font-mono">$0 / mo Waiver</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Available for Active Traders</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">Depth of Market</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Level 2 Book Liquidity</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white font-mono">FIX & WebSockets</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Sub-Millisecond Data Stream</div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Section: Market Data Fee Tables */}
      <div id="market-data-pricing" className="py-4">
        <MarketDataPricingSection />
      </div>

      {/* PDF Module 09 WebSockets & Streaming Feeds Details */}
      <section className="py-12 bg-slate-50/80 dark:bg-[#0E1420] border-b border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              <Wifi className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Real-Time Streaming Infrastructure (PDF Module 09)</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Tick-By-Tick Data Feeds for Algorithmic & Web Traders</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Connect to low-latency WebSocket price streams and FIX 4.4 market data channels hosted directly inside Equinix LD4, NY4, and TY3 financial hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-white dark:bg-[#141C2B] p-6 rounded-2xl border border-slate-200 dark:border-[#1E293B] shadow-sm space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">Tick-By-Tick Streaming</div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">Sub-10ms Price Updates</div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Zero sample averaging. Get raw exchange order book updates instantly to WebTrader, Mobile Apps, or custom Python SDKs.</p>
            </div>
            <div className="bg-white dark:bg-[#141C2B] p-6 rounded-2xl border border-slate-200 dark:border-[#1E293B] shadow-sm space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">Level 2 Depth of Market</div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">Full Book Transparency</div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">View top 10 bid & ask price levels across 150+ liquidity venues to identify large institutional block orders.</p>
            </div>
            <div className="bg-white dark:bg-[#141C2B] p-6 rounded-2xl border border-slate-200 dark:border-[#1E293B] shadow-sm space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">Automatic Fee Waivers</div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">100% Rebated for Active Accounts</div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Generate $30+ in monthly commissions to automatically waive non-professional market data subscription fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Transparency Cards */}
      <FeeTransparencyCards />

      {/* Interactive Savings Calculator */}
      <InteractivePricingCalculator onOpenAccount={onOpenAccount} />

      {/* FAQ Section */}
      <PricingFAQAccordion />

      {/* CTA Section */}
      <PricingCTA onOpenAccount={onOpenAccount} onScrollToCalculator={scrollToCalculator} />
    </div>
  );
};
