import React, { useState } from 'react';
import { Database, ShieldCheck, Zap, Layers, Check, Sparkles, Server, Info } from 'lucide-react';

interface ExchangeFeed {
  exchange: string;
  code: string;
  level1NonPro: string;
  level2NonPro: string;
  proRate: string;
  waiveCondition: string;
}

export const MarketDataPricingSection: React.FC = () => {
  const [userType, setUserType] = useState<'non-pro' | 'pro'>('non-pro');

  const feeds: ExchangeFeed[] = [
    {
      exchange: 'NYSE (New York Stock Exchange)',
      code: 'NYSE',
      level1NonPro: '$1.50 / mo',
      level2NonPro: '$25.00 / mo',
      proRate: '$45.00 / mo',
      waiveCondition: 'Waived with $30/mo trading commissions or $2k account balance',
    },
    {
      exchange: 'NASDAQ TotalView & Basic',
      code: 'NASDAQ',
      level1NonPro: '$1.00 / mo',
      level2NonPro: '$15.00 / mo',
      proRate: '$38.00 / mo',
      waiveCondition: 'Waived with $30/mo trading commissions or $2k account balance',
    },
    {
      exchange: 'CME Group (Futures Depth of Market)',
      code: 'CME',
      level1NonPro: '$1.25 / mo',
      level2NonPro: '$10.00 / mo',
      proRate: '$115.00 / mo',
      waiveCondition: 'Waived with 5 futures trades / mo',
    },
    {
      exchange: 'CBOE OPRA (Options Price Reporting)',
      code: 'OPRA',
      level1NonPro: '$1.50 / mo',
      level2NonPro: '$12.00 / mo',
      proRate: '$33.00 / mo',
      waiveCondition: 'Waived with $15/mo options commissions',
    },
    {
      exchange: 'LSE (London Stock Exchange)',
      code: 'LSE',
      level1NonPro: '$6.00 / mo',
      level2NonPro: '$28.00 / mo',
      proRate: '$85.00 / mo',
      waiveCondition: 'Waived for active global equity accounts',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <Database className="w-3.5 h-3.5 text-emerald-600" />
            <span>Exchange Subscriptions & Tick Feeds</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight">
            Market Data Pricing
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Direct exchange market data subscriptions with zero broker markups. Standard non-professional Level 1 data is automatically waived for active accounts.
          </p>
        </div>

        {/* Non-Pro vs Pro Selector Tabs */}
        <div className="flex justify-center">
          <div className="bg-slate-100 p-1 rounded-xl border border-slate-200 inline-flex">
            <button
              onClick={() => setUserType('non-pro')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                userType === 'non-pro'
                  ? 'bg-white text-emerald-700 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Non-Professional Trader (Waived Rates)
            </button>
            <button
              onClick={() => setUserType('pro')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                userType === 'pro'
                  ? 'bg-white text-emerald-700 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Professional Institutional Subscriber
            </button>
          </div>
        </div>

        {/* Market Data Cards & Table */}
        <div className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-8">
          
          {/* Top Callout Box */}
          <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Level 1 Streaming Data Fee Waiver Guarantee</div>
                <div className="text-slate-600 mt-0.5">
                  Generate $30/month in commissions or hold $2,000+ in portfolio assets to get NYSE, NASDAQ, and AMEX Level 1 real-time streaming quotes <strong>100% Free</strong>.
                </div>
              </div>
            </div>
            <span className="bg-emerald-600 text-white font-mono font-bold px-3 py-1 rounded-lg uppercase tracking-wider shrink-0 text-center text-[11px]">
              $0.00 / Mo Fee Waiver
            </span>
          </div>

          {/* Exchange Table */}
          <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-mono uppercase text-[11px]">
                  <th className="py-3.5 px-4 font-bold">Exchange</th>
                  <th className="py-3.5 px-4 font-bold">Level I Quote Feed</th>
                  <th className="py-3.5 px-4 font-bold">Level II Depth of Market</th>
                  <th className="py-3.5 px-4 font-bold">Fee Waiver Terms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {feeds.map((f) => (
                  <tr key={f.code} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-bold text-slate-900">{f.exchange}</div>
                      <div className="text-[11px] font-mono text-emerald-700">{f.code} Exchange Code</div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-slate-900">
                      {userType === 'non-pro' ? (
                        <span className="flex items-center gap-1.5 text-emerald-700">
                          <Check className="w-3.5 h-3.5" />
                          <span>{f.level1NonPro}</span>
                        </span>
                      ) : (
                        <span>{f.proRate}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-slate-900">
                      {userType === 'non-pro' ? f.level2NonPro : `$65.00 - $120.00 / mo`}
                    </td>
                    <td className="py-4 px-4 text-slate-600 text-[11px] font-medium">
                      {f.waiveCondition}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Institutional FIX & API Data Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200/90 space-y-2">
              <Server className="w-5 h-5 text-emerald-600" />
              <div className="font-bold text-slate-900 text-xs">FIX 4.4 Protocol Feeds</div>
              <div className="text-xs text-slate-600">Ultra-low latency raw binary tick stream directly from NY4/LD4 servers.</div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/90 space-y-2">
              <Zap className="w-5 h-5 text-emerald-600" />
              <div className="font-bold text-slate-900 text-xs">WebSocket Live Streaming</div>
              <div className="text-xs text-slate-600">Sub-millisecond JSON tick stream for custom quantitative trading bots.</div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/90 space-y-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <div className="font-bold text-slate-900 text-xs">Historical Tick Database</div>
              <div className="text-xs text-slate-600">Full 10-year tick history available for algorithmic backtesting at $0 cost.</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
