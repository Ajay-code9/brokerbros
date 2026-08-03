import React, { useState } from 'react';
import { Layers, ArrowRight, Check, Info, ShieldCheck, Zap, DollarSign } from 'lucide-react';

interface AssetPricingData {
  id: string;
  name: string;
  category: string;
  fixedRate: string;
  tieredRate: string;
  instRate: string;
  minTicket: string;
  maxCap: string;
  passThroughFees: string;
  example: string;
  highlights: string[];
}

export const CommissionPricingTable: React.FC<{ onOpenAccount: () => void }> = ({ onOpenAccount }) => {
  const [activeTab, setActiveTab] = useState<string>('stocks');

  const assetClasses: AssetPricingData[] = [
    {
      id: 'stocks',
      name: 'US & Global Stocks',
      category: 'Equities',
      fixedRate: '$0.00 / Trade (Fixed Tier)',
      tieredRate: '$0.0035 / Share (Pro Tier)',
      instRate: '$0.0005 / Share (Institutional)',
      minTicket: '$0.35 per order',
      maxCap: '0.5% of trade value max',
      passThroughFees: 'Direct SEC ($0.0000278) and FINRA TAF ($0.000166/share) passed through with zero markup.',
      example: 'Buying 500 shares of AAPL ($112,000 value): Fixed = $0.00 | Tiered = $1.75 total fee vs $19.95 standard broker rate.',
      highlights: ['24/5 Overnight Market Access', 'Direct exchange Smart Order Routing (SOR)', 'Short stock borrow rates disclosed daily'],
    },
    {
      id: 'etfs',
      name: 'ETFs & Index Funds',
      category: 'Funds',
      fixedRate: '$0.00 / Trade',
      tieredRate: '$0.0035 / Share',
      instRate: '$0.0005 / Share',
      minTicket: '$0.00 on 1,500+ Commission-Free ETFs',
      maxCap: '0.5% of trade value max',
      passThroughFees: 'Exchange liquidity add/remove rebates fully credited to client account.',
      example: 'Buying 200 shares of SPY ($100,000 value): Total commission = $0.00 on commission-free list or $0.70 on Tiered.',
      highlights: ['1,500+ Commission-Free ETFs', 'Liquidity rebates pass-through', 'Fractional shares execution from $1.00'],
    },
    {
      id: 'options',
      name: 'Equity & Index Options',
      category: 'Derivatives',
      fixedRate: '$0.65 / Contract',
      tieredRate: '$0.25–$0.50 / Contract',
      instRate: '$0.15 / Contract',
      minTicket: '$0.00 base fee per order',
      maxCap: 'No maximum cap',
      passThroughFees: 'CBOE / OCC pass-through regulatory clearing fees ($0.03/contract).',
      example: 'Trading 10 SPX Call options: Pro Tier = $5.00 total commission ($0.50/contract) with $0 exercise or assignment fee.',
      highlights: ['Zero exercise & assignment fees', 'Multi-leg spread routing in single ticket', 'Real-time Greeks & Volatility Surface Lab'],
    },
    {
      id: 'futures',
      name: 'E-Mini & Micro Futures',
      category: 'Derivatives',
      fixedRate: '$1.25 / Standard Contract',
      tieredRate: '$0.85 / Micro Contract',
      instRate: '$0.25 / Micro Contract',
      minTicket: '$0.00 base fee per order',
      maxCap: 'No maximum cap',
      passThroughFees: 'CME / ICE / Eurex exchange & clearing fees passed through at exact cost.',
      example: 'Trading 5 Micro E-mini NQ contracts: Total BrokerBros fee = $4.25 ($0.85/contract) + CME exchange pass-through.',
      highlights: ['CME, Eurex, ICE, HKEX markets', 'Span margin optimization', 'Full Depth-of-Market (DOM) order book'],
    },
    {
      id: 'forex',
      name: 'Spot Forex Currencies',
      category: 'FX',
      fixedRate: '0.2 pips All-Inclusive Spread',
      tieredRate: 'Raw Spread + $2.00 / $100k turn',
      instRate: 'Raw Spread + $1.00 / $100k turn',
      minTicket: '0.1 pips EUR/USD spread',
      maxCap: 'No hidden markup',
      passThroughFees: 'Direct ECN liquidity pool aggregated from 16 tier-1 banks.',
      example: 'Trading 100,000 EUR/USD (1 Lot): Raw spread 0.1 pips + $2.00 commission = $3.00 total cost vs $15 at retail brokers.',
      highlights: ['16 Tier-1 bank ECN aggregate liquidity', 'Zero stop-loss hunting or market making', 'Over 100 currency pairs available'],
    },
    {
      id: 'bonds',
      name: 'Treasuries & Corporate Bonds',
      category: 'Fixed Income',
      fixedRate: '0.05% of par value',
      tieredRate: '0.02% of par value',
      instRate: '0.005% of par value',
      minTicket: '$5.00 per trade',
      maxCap: '$250 max per trade',
      passThroughFees: 'Zero markups or undisclosed bid-ask spread expansions.',
      example: 'Buying $50,000 US 10-Yr Treasuries: Total fee = $10.00 vs $50+ markup at retail banks.',
      highlights: ['Direct US Treasury auctions ($0 fee)', '1,000,000+ Municipals & Corporates', 'Live yield curve matrix & ladder'],
    },
    {
      id: 'funds',
      name: 'Mutual Funds',
      category: 'Funds',
      fixedRate: '$0.00 on No-Load NTF Funds',
      tieredRate: '$14.95 for Transaction-Fee Funds',
      instRate: '$9.95 for Institutional Share Classes',
      minTicket: '$0.00 for 12,000+ NTF funds',
      maxCap: '$14.95 max per order',
      passThroughFees: 'Fund manager 12b-1 fees fully rebated to client where permitted by law.',
      example: 'Investing $25,000 in Vanguard Admiral Shares: $0 transaction fee on No-Transaction-Fee (NTF) platform.',
      highlights: ['12,000+ No-Transaction-Fee (NTF) funds', 'Automatic dividend reinvestment (DRIP)', 'Institutional share class access'],
    },
    {
      id: 'ipos',
      name: 'IPO & New Issue Allocations',
      category: 'Primary Market',
      fixedRate: '$0.00 Commission',
      tieredRate: '$0.00 Commission',
      instRate: '$0.00 Commission',
      minTicket: '$0.00',
      maxCap: '$0.00',
      passThroughFees: 'Underwriter syndicate fees paid by issuer.',
      example: 'Participating in a public IPO allocation: You pay exact offer price per share with $0 added commission.',
      highlights: ['Direct retail IPO allocation desk', 'Zero participation surcharge', 'Instant secondary market trading'],
    },
  ];

  const currentAsset = assetClasses.find((a) => a.id === activeTab) || assetClasses[0];

  return (
    <section id="pricing-tables" className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>Complete Asset Class Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight">
            Commission & Execution Rates
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
            Transparent, low-cost pricing models across all major asset classes with zero hidden ticket surcharges or payment for order flow markups.
          </p>
        </div>

        {/* Asset Class Tabs Filter */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {assetClasses.map((ac) => (
            <button
              key={ac.id}
              onClick={() => setActiveTab(ac.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === ac.id
                  ? 'bg-emerald-600 text-white shadow-md font-bold'
                  : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <span>{ac.name}</span>
            </button>
          ))}
        </div>

        {/* Pricing Detail Table & Tier Cards (White Enterprise Theme) */}
        <div className="bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8 font-sans">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">{currentAsset.category} PRICING TIER SCHEDULE</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-heading mt-0.5">{currentAsset.name}</h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 font-medium">Ready to trade?</span>
              <button
                onClick={onOpenAccount}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Open Account</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3 Tier Comparison Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Fixed Tier */}
            <div className="bg-slate-50/80 p-6 rounded-xl border border-slate-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase">TIER 1 · FIXED RATE</div>
                <div className="text-xl font-bold text-slate-900">{currentAsset.fixedRate}</div>
                <p className="text-xs text-slate-600 leading-relaxed">Simple, straightforward execution rate with zero monthly volume minimum required.</p>
              </div>
              <ul className="space-y-2 pt-4 border-t border-slate-200 text-xs text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Zero minimum volume requirement</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> All-inclusive simple commission</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Free real-time Level 1 streaming quotes</li>
              </ul>
            </div>

            {/* Pro Tier (Featured) */}
            <div className="bg-white p-6 rounded-xl border-2 border-emerald-500 shadow-md space-y-4 flex flex-col justify-between relative">
              <div className="absolute -top-3 right-4 bg-emerald-600 text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
                RECOMMENDED
              </div>
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-emerald-700 uppercase">TIER 2 · PRO TIERED</div>
                <div className="text-xl font-bold text-emerald-800">{currentAsset.tieredRate}</div>
                <p className="text-xs text-slate-600 leading-relaxed">Volume-tiered rates that drop automatically as your monthly trading activity scales.</p>
              </div>
              <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Exchange liquidity pass-through rebates</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Min ticket: {currentAsset.minTicket}</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Max cap: {currentAsset.maxCap}</li>
              </ul>
            </div>

            {/* Institutional Tier */}
            <div className="bg-slate-50/80 p-6 rounded-xl border border-slate-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase">TIER 3 · INSTITUTIONAL PRIME</div>
                <div className="text-xl font-bold text-slate-900">{currentAsset.instRate}</div>
                <p className="text-xs text-slate-600 leading-relaxed">Custom FIX 4.4 API connectivity, direct exchange clearing, and dedicated prime broker desk.</p>
              </div>
              <ul className="space-y-2 pt-4 border-t border-slate-200 text-xs text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Tailored custom volume schedules</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Dedicated institutional desk contact</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Equinix NY4 / LD4 co-located gateways</li>
              </ul>
            </div>

          </div>

          {/* Concrete Execution Example Callout */}
          <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-200/80 space-y-2.5 text-xs">
            <div className="flex items-center gap-2 text-emerald-900 font-bold font-mono">
              <Info className="w-4 h-4 shrink-0 text-emerald-700" />
              <span>REAL-WORLD ORDER COST EXAMPLE:</span>
            </div>
            <p className="text-slate-700 text-xs leading-relaxed font-sans font-medium">
              {currentAsset.example}
            </p>
            <div className="pt-2 border-t border-emerald-200/60 text-[11px] text-slate-500">
              * Regulatory Pass-Through: {currentAsset.passThroughFees}
            </div>
          </div>

          {/* Highlights checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            {currentAsset.highlights.map((h, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

