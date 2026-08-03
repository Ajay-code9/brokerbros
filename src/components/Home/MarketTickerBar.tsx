import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface TickerItem {
  symbol: string;
  price: number;
  change: number;
  changePct: number;
}

const INITIAL_TICKERS: TickerItem[] = [
  { symbol: 'SPX', price: 5842.25, change: 28.4, changePct: 0.49 },
  { symbol: 'NVDA', price: 128.64, change: 4.83, changePct: 3.90 },
  { symbol: 'AAPL', price: 217.96, change: -1.22, changePct: -0.56 },
  { symbol: 'TSLA', price: 248.50, change: 7.14, changePct: 2.96 },
  { symbol: 'QQQ', price: 492.30, change: 3.18, changePct: 0.65 },
  { symbol: 'MSFT', price: 445.82, change: -2.40, changePct: -0.54 },
  { symbol: 'AMZN', price: 198.73, change: 5.12, changePct: 2.64 },
  { symbol: 'GOLD', price: 2341.80, change: -8.60, changePct: -0.37 },
  { symbol: 'BTC', price: 67842.00, change: 1240.00, changePct: 1.86 },
  { symbol: 'EUR/USD', price: 1.0842, change: 0.0012, changePct: 0.11 },
  { symbol: 'US10Y', price: 4.281, change: -0.015, changePct: -0.35 },
  { symbol: 'META', price: 531.20, change: 12.80, changePct: 2.47 },
];

export const MarketTickerBar: React.FC = () => {
  const [tickers, setTickers] = useState<TickerItem[]>(INITIAL_TICKERS);

  // Simulate live price jitter every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setTickers(prev =>
        prev.map(t => {
          const delta = (Math.random() - 0.48) * t.price * 0.0008;
          const newPrice = parseFloat((t.price + delta).toFixed(t.symbol.includes('/') ? 4 : 2));
          const newChange = parseFloat((t.change + delta * 0.5).toFixed(2));
          const newPct = parseFloat(((newChange / (newPrice - newChange)) * 100).toFixed(2));
          return { ...t, price: newPrice, change: newChange, changePct: newPct };
        })
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const doubled = [...tickers, ...tickers, ...tickers];

  return (
    <div className="w-full bg-slate-950 border-b border-slate-800 py-2 overflow-hidden font-mono text-xs select-none">
      <div className="max-w-full mx-auto flex items-center gap-0">
        {/* Left label */}
        <div className="flex items-center gap-1.5 px-4 shrink-0 border-r border-slate-800 z-10 bg-slate-950 h-full pr-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <Activity className="w-3 h-3 text-emerald-400" />
          <span className="text-emerald-400 font-bold tracking-wider text-[10px] uppercase">Live Markets</span>
        </div>

        {/* Scrolling ticker */}
        <div className="overflow-hidden flex-1 relative">
          <div className="flex gap-0 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
            {doubled.map((item, idx) => {
              const isUp = item.changePct >= 0;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 border-r border-slate-800/60 shrink-0 py-0.5"
                >
                  <span className="text-white font-bold">{item.symbol}</span>
                  <span className="text-slate-300">
                    {item.symbol === 'EUR/USD' || item.symbol === 'US10Y'
                      ? item.price.toFixed(4)
                      : item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  <span className={`flex items-center gap-0.5 font-semibold ${isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {isUp ? '+' : ''}{item.changePct.toFixed(2)}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
