import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  DollarSign,
  Globe2,
  Play,
  TrendingUp,
  TrendingDown,
  ChevronDown,
  Activity,
  Lock,
  Wifi,
} from 'lucide-react';
import { VideoHeroBackground } from '../Common/VideoHeroBackground';

interface HeroSectionProps {
  onOpenAccount: () => void;
  onExplorePlatforms: () => void;
}

// ─── Realistic Area Chart ────────────────────────────────────────────────────
// Generates a realistic-looking intraday price path
function generatePath(seed: number, up: boolean): number[] {
  const pts: number[] = [];
  let val = 50;
  for (let i = 0; i < 40; i++) {
    const rng = Math.sin(seed * 9301 + i * 49297 + 233) * 0.5 + 0.5;
    const trend = up ? 0.55 : 0.45;
    val += (rng > trend ? 1.8 : -1.4) * (Math.abs(Math.sin(i * 0.7)) + 0.3);
    val = Math.max(10, Math.min(90, val));
    pts.push(val);
  }
  return pts;
}

function pointsToSvgPath(pts: number[], w: number, h: number): string {
  if (pts.length === 0) return '';
  const xStep = w / (pts.length - 1);
  const min = Math.min(...pts);
  const max = Math.max(...pts);
  const range = max - min || 1;
  const toY = (v: number) => h - ((v - min) / range) * (h * 0.8) - h * 0.1;
  const toX = (i: number) => i * xStep;
  let d = `M ${toX(0)} ${toY(pts[0])}`;
  for (let i = 1; i < pts.length; i++) {
    const cpx = toX(i - 0.5);
    d += ` C ${cpx} ${toY(pts[i - 1])}, ${cpx} ${toY(pts[i])}, ${toX(i)} ${toY(pts[i])}`;
  }
  return d;
}

const LiveAreaChart: React.FC<{ up: boolean; symbol: string }> = ({ up, symbol }) => {
  const W = 280;
  const H = 80;
  const [pts, setPts] = useState(() => generatePath(symbol.charCodeAt(0) * 7, up));

  useEffect(() => {
    const iv = setInterval(() => {
      setPts(prev => {
        const last = prev[prev.length - 1];
        const delta = (Math.random() - (up ? 0.42 : 0.58)) * 4;
        const next = Math.max(10, Math.min(90, last + delta));
        return [...prev.slice(1), next];
      });
    }, 1800);
    return () => clearInterval(iv);
  }, [up]);

  const linePath = pointsToSvgPath(pts, W, H);
  const areaPath = linePath + ` L ${W} ${H} L 0 ${H} Z`;
  const color = up ? '#10b981' : '#f43f5e';
  const gradId = `grad-${symbol}`;

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Grid lines */}
      {[0.25, 0.5, 0.75].map(y => (
        <line key={y} x1="0" y1={H * y} x2={W} y2={H * y} stroke="rgba(148,163,184,0.08)" strokeWidth="1" />
      ))}
      {/* Area fill */}
      <path d={areaPath} fill={`url(#${gradId})`} />
      {/* Line */}
      <path d={linePath} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Endpoint dot */}
      {pts.length > 0 && (() => {
        const last = pts[pts.length - 1];
        const min = Math.min(...pts);
        const max = Math.max(...pts);
        const range = max - min || 1;
        const cy = H - ((last - min) / range) * (H * 0.8) - H * 0.1;
        return (
          <>
            <circle cx={W} cy={cy} r="3" fill={color} />
            <circle cx={W} cy={cy} r="5" fill={color} fillOpacity="0.3" />
          </>
        );
      })()}
    </svg>
  );
};

// ─── Company logo badge (Google favicon service — always works) ──────────────
const LogoBadge: React.FC<{ logoUrl: string; symbol: string; color: string }> = ({ logoUrl, symbol, color }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-700/80 bg-white flex items-center justify-center shrink-0 p-0.5">
      {!failed ? (
        <img
          src={logoUrl}
          alt={symbol}
          className="w-full h-full object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="w-full h-full bg-slate-800 rounded flex items-center justify-center">
          <span className={`text-[10px] font-black font-mono ${color}`}>{symbol.slice(0, 2)}</span>
        </div>
      )}
    </div>
  );
};

// ─── Data ───────────────────────────────────────────────────────────────────
const HERO_SLIDES = [
  {
    badge: '24/5 GLOBAL DMA EXECUTION',
    title: 'Trade Global Equities, Options & Futures',
    highlight: 'Around the Clock.',
    description: 'Direct market access across 150+ market centers in 35 countries. Trade 10,000+ US Stocks & ETFs 24 hours a day, 5 days a week.',
    cta: 'Open Protected Account',
  },
  {
    badge: 'AUTOMATED HIGH-YIELD CASH',
    title: 'Earn Up to 4.85% APY on',
    highlight: 'Uninvested USD Reserves.',
    description: 'Daily interest calculation, monthly compounding. Fully liquid with zero lockups and FDIC coverage up to $2.5 Million.',
    cta: 'Calculate APY Earnings',
  },
  {
    badge: 'INSTITUTIONAL PRICING ENGINE',
    title: 'Ultra-Low Commissions &',
    highlight: 'Zero PFOF Execution.',
    description: 'SmartRouting scans 150+ lit exchanges, ECNs & dark pools in microseconds — averaging $0.024/share better than NBBO.',
    cta: 'View Fee Schedule',
  },
];

const WATCHLIST = [
  { symbol: 'NVDA', name: 'NVIDIA Corp', logoUrl: 'https://www.google.com/s2/favicons?domain=nvidia.com&sz=128',    base: 128.64, upInit: true,  color: 'text-green-400'  },
  { symbol: 'AAPL', name: 'Apple Inc',   logoUrl: 'https://www.google.com/s2/favicons?domain=apple.com&sz=128',     base: 217.96, upInit: false, color: 'text-slate-700'  },
  { symbol: 'TSLA', name: 'Tesla Inc',   logoUrl: 'https://www.google.com/s2/favicons?domain=tesla.com&sz=128',     base: 248.50, upInit: true,  color: 'text-blue-400'   },
  { symbol: 'MSFT', name: 'Microsoft',   logoUrl: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128', base: 445.82, upInit: false, color: 'text-yellow-400' },
  { symbol: 'AMZN', name: 'Amazon',      logoUrl: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=128',    base: 198.73, upInit: true,  color: 'text-orange-400' },
];

// ─── Component ───────────────────────────────────────────────────────────────
export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAccount, onExplorePlatforms }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const [isManualClicked, setIsManualClicked] = useState(false);
  const [selectedSymbol, setSelectedSymbol] = useState(0); // which stock's chart to show

  // Live prices
  const [prices, setPrices] = useState(
    WATCHLIST.map(r => ({ ...r, price: r.base, changePct: r.upInit ? 0.48 : -0.28, up: r.upInit, logoUrl: r.logoUrl }))
  );

  useEffect(() => {
    const iv = setInterval(() => {
      setPrices(prev =>
        prev.map(item => {
          const delta = (Math.random() - 0.48) * item.price * 0.0009;
          const newPrice = parseFloat((item.price + delta).toFixed(2));
          const changePct = parseFloat(((newPrice - item.base) / item.base * 100).toFixed(2));
          return { ...item, price: newPrice, changePct, up: delta >= 0 };
        })
      );
    }, 2000);
    return () => clearInterval(iv);
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    if (isPaused) return;
    const iv = setInterval(() => {
      setDirection(1);
      setActiveTab(prev => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(iv);
  }, [isPaused]);

  const handleTabClick = (index: number) => {
    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  };

  const currentSlide = HERO_SLIDES[activeTab];
  const activeStock = prices[selectedSymbol];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0 }),
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative bg-[#06141D] text-white overflow-hidden min-h-[calc(100vh-80px)] flex items-center border-b border-emerald-900/40 font-sans"
    >
      <VideoHeroBackground videoSrc="/test3.mp4" opacity={0.28} theme="dark" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ── LEFT ── */}
          <div className="lg:col-span-7 space-y-4">
            {/* Tab selector */}
            <div className="flex flex-wrap gap-0.5 bg-slate-900/80 backdrop-blur p-1 rounded-lg border border-slate-800/80 w-fit shadow-md mb-2">
              {HERO_SLIDES.map((slide, i) => (
                <button
                  key={i}
                  onClick={() => handleTabClick(i)}
                  className={`px-2.5 py-1 rounded-md text-[9px] sm:text-[10px] font-mono font-bold tracking-tight transition-all cursor-pointer ${
                    activeTab === i
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {slide.badge}
                </button>
              ))}
            </div>

            {/* Headline & Description Container */}
            <div className="relative min-h-[240px] sm:min-h-[210px] lg:min-h-[220px] overflow-hidden flex items-start">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeTab}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  className="space-y-3 w-full pt-1"
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-[3.1rem] font-black tracking-tight leading-[1.15] text-white font-sans">
                    {currentSlide.title}{' '}
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                      {currentSlide.highlight}
                    </span>
                  </h1>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl pt-1">
                    {currentSlide.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onOpenAccount}
                className="px-7 py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-xl shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{currentSlide.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onExplorePlatforms}
                className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-sm rounded-xl border border-slate-700/80 backdrop-blur transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                <span>Explore Platform Sandbox</span>
              </button>
            </div>

            {/* Trust bar */}
            <div className="pt-5 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs font-sans">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">S&P Rated A-</div>
                  <div className="text-slate-500 text-[11px]">Stable Credit Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <DollarSign className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">$28.4B Capital</div>
                  <div className="text-slate-500 text-[11px]">Audited Balance Sheet</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">26 Currencies</div>
                  <div className="text-slate-500 text-[11px]">Single Settled Account</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT — Professional Terminal Card ── */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-teal-400/10 to-cyan-500/15 blur-2xl opacity-80 animate-pulse pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-[#0A1929] ring-1 ring-white/5">

              {/* ── Title bar (macOS-style) ── */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0D2035] border-b border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="ml-3 text-slate-400 text-[10px] font-mono">BrokerBros Pro · Market Watch</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px]">
                  <Wifi className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">LIVE</span>
                  <span className="text-slate-600 mx-1">·</span>
                  <span className="text-slate-400">NY4</span>
                  <span className="text-slate-600 mx-1">·</span>
                  <span className="text-slate-300 font-bold">1.2ms</span>
                </div>
              </div>

              {/* ── Chart area for selected stock ── */}
              <div className="px-4 pt-3 pb-2 bg-[#081524] border-b border-slate-800/60">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <div className="flex items-center gap-2">
                      <LogoBadge logoUrl={activeStock.logoUrl} symbol={activeStock.symbol} color={activeStock.color} />
                      <div>
                        <div className="text-white font-black text-sm font-mono">{activeStock.symbol}</div>
                        <div className="text-slate-500 text-[9px]">{activeStock.name}</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-black text-xl font-mono">
                      ${activeStock.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className={`flex items-center justify-end gap-1 text-[11px] font-mono font-bold ${activeStock.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {activeStock.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {activeStock.up ? '+' : ''}{activeStock.changePct.toFixed(2)}%
                      <span className="text-slate-500 font-normal text-[10px] ml-1">Today</span>
                    </div>
                  </div>
                </div>

                {/* Live area chart */}
                <div className="h-20 w-full mt-2">
                  <LiveAreaChart up={activeStock.up} symbol={activeStock.symbol} />
                </div>

                {/* Time axis */}
                <div className="flex justify-between text-slate-700 text-[9px] font-mono mt-1">
                  <span>9:30</span><span>11:00</span><span>12:30</span><span>14:00</span><span>15:30</span><span>16:00</span>
                </div>
              </div>

              {/* ── Watchlist rows ── */}
              <div className="divide-y divide-slate-800/50">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-1.5 bg-[#0D2035]/60">
                  <span className="text-slate-600 text-[9px] font-mono uppercase tracking-widest">Symbol</span>
                  <span className="text-slate-600 text-[9px] font-mono uppercase tracking-widest">Chart</span>
                  <span className="text-slate-600 text-[9px] font-mono uppercase tracking-widest">Last / Chg%</span>
                </div>

                {prices.map((item, idx) => (
                  <motion.button
                    key={item.symbol}
                    onClick={() => setSelectedSymbol(idx)}
                    className={`w-full flex items-center justify-between px-4 py-2 transition-colors cursor-pointer text-left ${
                      selectedSymbol === idx ? 'bg-emerald-500/8 border-l-2 border-emerald-500' : 'hover:bg-slate-800/30 border-l-2 border-transparent'
                    }`}
                    animate={{ backgroundColor: item.up ? 'rgba(16,185,129,0.02)' : 'rgba(244,63,94,0.02)' }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Logo + name */}
                    <div className="flex items-center gap-2 w-28">
                      <LogoBadge logoUrl={item.logoUrl} symbol={item.symbol} color={item.color} />
                      <div>
                        <div className="text-white font-bold text-xs font-mono">{item.symbol}</div>
                        <div className="text-slate-600 text-[9px] truncate max-w-[60px]">{item.name.split(' ')[0]}</div>
                      </div>
                    </div>

                    {/* Mini sparkline */}
                    <div className="w-16 h-7 opacity-80">
                      <LiveAreaChart up={item.up} symbol={item.symbol + 'mini'} />
                    </div>

                    {/* Price + change */}
                    <div className="text-right w-24">
                      <div className="text-white font-mono font-bold text-xs">
                        ${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                      <div className={`font-mono text-[10px] font-bold ${item.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {item.up ? '▲' : '▼'} {Math.abs(item.changePct).toFixed(2)}%
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* ── Footer ── */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0D2035]/80 border-t border-slate-800/80 font-mono text-[10px]">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>SIPC · $30M Lloyd's · SEC Regulated</span>
                </div>
                <button
                  onClick={onOpenAccount}
                  className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors cursor-pointer"
                >
                  <span>Start Trading</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll chevron */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-slate-500 text-[9px] font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-emerald-400" />
        </motion.div>
      </div>
    </section>
  );
};
