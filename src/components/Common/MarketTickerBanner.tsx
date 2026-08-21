import React from 'react';

interface TickerItem {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
}

interface MarketTickerBannerProps {
  label?: string;
  items: TickerItem[];
}

export const MarketTickerBanner: React.FC<MarketTickerBannerProps> = ({
  label = "LIVE FEEDS",
  items
}) => {
  return (
    <div className="bg-slate-950 border-b border-slate-800 py-2.5 overflow-hidden font-mono text-xs text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-6">
        <div className="flex items-center gap-1.5 text-emerald-400 font-bold shrink-0 z-10 bg-slate-950 pr-4 border-r border-slate-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>{label}</span>
        </div>
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap overflow-x-auto no-scrollbar">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-slate-900/90 px-3 py-1 rounded border border-slate-800 shadow-xs hover:border-slate-700 transition-all shrink-0"
            >
              <span className="font-bold text-white">{item.symbol}</span>
              <span className="text-slate-400 text-[11px]">{item.price}</span>
              <span
                className={`text-[11px] font-bold ${
                  item.isPositive ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
