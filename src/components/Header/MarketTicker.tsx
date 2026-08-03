import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Clock, Activity, ArrowUpRight } from 'lucide-react';
import { TickerItem } from '../../types';
import { INITIAL_TICKERS } from '../../data/mockData';

interface MarketTickerProps {
  onSelectTicker?: (ticker: TickerItem) => void;
}

export const MarketTicker: React.FC<MarketTickerProps> = ({ onSelectTicker }) => {
  const [tickers, setTickers] = useState<TickerItem[]>(INITIAL_TICKERS);
  const [lastUpdate, setLastUpdate] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLastUpdate(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const clockInterval = setInterval(updateTime, 1000);

    // Simulate subtle real-time market price updates
    const tickerInterval = setInterval(() => {
      setTickers(prev =>
        prev.map(item => {
          if (Math.random() > 0.6) {
            const deltaPct = (Math.random() - 0.48) * 0.2;
            const newPrice = +(item.price * (1 + deltaPct / 100)).toFixed(item.market === 'FX' ? 4 : 2);
            const diff = +(newPrice - item.price).toFixed(item.market === 'FX' ? 4 : 2);
            return {
              ...item,
              price: newPrice,
              change: +(item.change + diff).toFixed(item.market === 'FX' ? 4 : 2),
              changePercent: +((item.change + diff) / (item.price - item.change) * 100).toFixed(2)
            };
          }
          return item;
        })
      );
    }, 2500);

    return () => {
      clearInterval(clockInterval);
      clearInterval(tickerInterval);
    };
  }, []);

  return (
    <div className="bg-slate-950 text-slate-200 border-b border-slate-800 text-[11px] py-1 px-4 select-none overflow-hidden font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Market Status Indicator */}
        <div className="flex items-center gap-3 shrink-0 text-slate-400">
          <span className="flex items-center gap-1.5 font-sans font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            24/5 LIVE MARKETS
          </span>
          <span className="hidden sm:inline-block text-slate-700">|</span>
          <span className="hidden sm:flex items-center gap-1 text-slate-400 font-sans">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            UTC {lastUpdate}
          </span>
        </div>

        {/* Ticker Stream */}
        <div className="relative overflow-hidden flex-1 group no-scrollbar">
          <div className="flex gap-6 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...tickers, ...tickers, ...tickers, ...tickers].map((item, idx) => {
              const isPositive = item.change >= 0;
              return (
                <div
                  key={`${item.symbol}-${idx}`}
                  onClick={() => onSelectTicker?.(item)}
                  className="inline-flex items-center gap-2 cursor-pointer hover:bg-slate-900/80 px-2 py-0.5 rounded transition-colors"
                >
                  <span className="font-bold text-slate-100 font-sans tracking-tight">{item.symbol}</span>
                  <span className="text-slate-300">${item.price.toLocaleString(undefined, { minimumFractionDigits: item.market === 'FX' ? 4 : 2 })}</span>
                  <span
                    className={`inline-flex items-center text-[11px] font-semibold ${
                      isPositive ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {isPositive ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                    {isPositive ? '+' : ''}{item.changePercent}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Exchange Status pill */}
        <div className="hidden lg:flex items-center gap-2 shrink-0 font-sans text-slate-400 text-[11px]">
          <span>NYSE: <strong className="text-emerald-400">OPEN</strong></span>
          <span>LSE: <strong className="text-emerald-400">OPEN</strong></span>
          <span>HKEX: <strong className="text-slate-500">CLOSED</strong></span>
        </div>
      </div>
    </div>
  );
};
