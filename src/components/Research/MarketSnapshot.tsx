import React from 'react';
import { TrendingUp, TrendingDown, Clock, Activity, Gauge, Flame, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { UPCOMING_ECONOMIC_EVENTS } from '../../data/researchData';

export const MarketSnapshot: React.FC = () => {
  const majorIndices = [
    { symbol: 'S&P 500', name: 'US Large Cap', value: '5,864.20', change: '+0.42%', positive: true },
    { symbol: 'NASDAQ', name: 'Tech Composite', value: '18,518.61', change: '+0.88%', positive: true },
    { symbol: 'DOW JONES', name: 'US Industrial', value: '42,114.40', change: '-0.12%', positive: false },
    { symbol: 'RUSSELL 2000', name: 'US Small Cap', value: '2,242.10', change: '+0.35%', positive: true },
    { symbol: 'NIKKEI 225', name: 'Japan Index', value: '38,981.75', change: '+1.15%', positive: true },
  ];

  const topGainers = [
    { ticker: 'NVDA', name: 'NVIDIA Corp', price: '$141.20', change: '+4.25%' },
    { ticker: 'TSLA', name: 'Tesla Inc', price: '$224.80', change: '+3.82%' },
    { ticker: 'AMD', name: 'Advanced Micro', price: '$156.40', change: '+2.90%' },
  ];

  const topLosers = [
    { ticker: 'INTC', name: 'Intel Corp', price: '$22.10', change: '-2.15%' },
    { ticker: 'DIS', name: 'Walt Disney Co', price: '$96.30', change: '-1.40%' },
    { ticker: 'NKE', name: 'Nike Inc', price: '$78.90', change: '-1.10%' },
  ];

  const todaysEvents = UPCOMING_ECONOMIC_EVENTS.filter(e => e.date === 'Today');

  return (
    <section id="market-snapshot" className="py-12 lg:py-16 bg-slate-50/80 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200 mb-2">
              <Activity className="w-3.5 h-3.5 text-emerald-600" />
              <span>REAL-TIME SNAPSHOT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight">
              Today's Market Snapshot
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
            Clean institutional overview of key market benchmark indices, daily momentum leaders, and today's macro economic catalysts.
          </p>
        </div>

        {/* Major Indices Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {majorIndices.map((idx) => (
            <div
              key={idx.symbol}
              className="bg-white p-4.5 rounded-xl border border-slate-200/90 shadow-2xs hover:border-emerald-500/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-2 group"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-slate-900 font-sans group-hover:text-emerald-700 transition-colors">{idx.symbol}</span>
                <span className={`inline-flex items-center text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                  idx.positive ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}>
                  {idx.positive ? <ArrowUpRight className="w-3 h-3 mr-0.5 text-emerald-600" /> : <ArrowDownRight className="w-3 h-3 mr-0.5 text-rose-600" />}
                  {idx.change}
                </span>
              </div>
              <div>
                <div className="text-lg font-black text-slate-900 font-mono tracking-tight">{idx.value}</div>
                <div className="text-[10px] text-slate-500 font-sans">{idx.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Grid: Sentiment Dial + Top Movers + Economic Events */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Sentiment & Fear & Greed Card (4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-base font-bold text-slate-900 font-sans">Market Sentiment</h3>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-500">Updated Hourly</span>
              </div>

              {/* Fear & Greed Gauge Bar */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="text-slate-500 font-medium">Fear & Greed Index</span>
                  <span className="font-mono font-bold text-emerald-700 text-sm">68 / 100</span>
                </div>

                {/* Meter Bar */}
                <div className="relative w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-500 rounded-full" />
                  {/* Indicator Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1.5 bg-slate-950 border border-white shadow-md rounded-full transform -translate-x-1/2"
                    style={{ left: '68%' }}
                  />
                </div>

                <div className="flex justify-between text-[10px] font-mono font-semibold text-slate-400 pt-1">
                  <span>Extreme Fear</span>
                  <span className="text-emerald-700 font-bold">Greed Zone</span>
                  <span>Extreme Greed</span>
                </div>
              </div>

              {/* Sentiment Summary */}
              <div className="space-y-1 pt-1">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Overall Bias: Cautiously Optimistic
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Institutional inflows continue into high-quality growth and semiconductors, cushioned by cooling inflation metrics.
                </p>
              </div>
            </div>
          </div>

          {/* Top Gainers & Losers (4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-500" />
                <h3 className="text-base font-bold text-slate-900 font-sans">Daily Market Movers</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">S&P 500</span>
            </div>

            {/* Gainers */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">Top Gainers</span>
              <div className="space-y-2">
                {topGainers.map((item) => (
                  <div key={item.ticker} className="flex items-center justify-between p-2.5 bg-emerald-50/50 rounded-xl border border-emerald-100/60">
                    <div>
                      <span className="text-xs font-bold font-mono text-slate-900 mr-2">{item.ticker}</span>
                      <span className="text-[11px] text-slate-500 font-sans hidden sm:inline">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold font-mono text-emerald-700 block">{item.change}</span>
                      <span className="text-[10px] font-mono text-slate-400">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Losers */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">Top Losers</span>
              <div className="space-y-2">
                {topLosers.map((item) => (
                  <div key={item.ticker} className="flex items-center justify-between p-2.5 bg-rose-50/50 rounded-xl border border-rose-100/60">
                    <div>
                      <span className="text-xs font-bold font-mono text-slate-900 mr-2">{item.ticker}</span>
                      <span className="text-[11px] text-slate-500 font-sans hidden sm:inline">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold font-mono text-rose-700 block">{item.change}</span>
                      <span className="text-[10px] font-mono text-slate-400">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Today's Economic Events (4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-base font-bold text-slate-900 font-sans">Key Macro Catalysts Today</h3>
                </div>
                <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">3 Releases</span>
              </div>

              <div className="space-y-3">
                {todaysEvents.map((evt) => (
                  <div key={evt.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-slate-700 flex items-center gap-1">
                        <span>{evt.countryFlag}</span>
                        <span>{evt.time}</span>
                      </span>
                      <span className="px-1.5 py-0.5 bg-rose-100 text-rose-800 font-bold text-[10px] rounded">
                        {evt.impact} Impact
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 font-sans pt-0.5">{evt.event}</div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                      <span>Exp: {evt.forecast}</span>
                      {evt.actual && <span className="font-bold text-emerald-700">Actual: {evt.actual}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 text-center border-t border-slate-100">
              <a href="#economic-calendar" className="text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-1 font-sans">
                <span>View Full Economic Calendar</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
