import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  DollarSign,
  Globe2,
  Globe,
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
    <section className="relative bg-white text-slate-900 h-[calc(100vh-80px)] min-h-[560px] max-h-[820px] flex items-center border-b border-slate-100 overflow-hidden font-sans">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-50/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column — Institutional Value Proposition */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Top Institutional Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold border border-emerald-200/80">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>THE INSTITUTIONAL BROKERAGE STANDARD</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-950 font-sans">
              Lowest Costs. Global Access. <br />
              <span className="text-emerald-700">Uncompromising Execution.</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-sans font-normal">
              Invest globally in stocks, options, futures, currencies, bonds, and funds from a single unified account. Benefit from $0.00 commissions, 4.85% APY cash sweep, and zero-PFOF SmartRouting.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAccount}
                className="px-7 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer text-sm"
              >
                <span>Open Protected Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExplorePlatforms}
                className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-lg border border-slate-300 transition-all flex items-center gap-2 cursor-pointer text-sm"
              >
                <Globe className="w-4 h-4 text-emerald-600" />
                <span>Explore Global Venues</span>
              </button>
            </div>

            {/* IBKR-Grade Quick Metrics Row */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <div className="text-slate-400 text-xs">US Equity Trade</div>
                <div className="text-emerald-700 font-extrabold text-sm sm:text-base mt-0.5">$0.00 Fixed</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs">USD Cash Sweep</div>
                <div className="text-slate-950 font-extrabold text-sm sm:text-base mt-0.5">4.85% APY</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs">Margin Borrow</div>
                <div className="text-emerald-700 font-extrabold text-sm sm:text-base mt-0.5">5.83% Rate</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs">Connected Markets</div>
                <div className="text-slate-950 font-extrabold text-sm sm:text-base mt-0.5">150+ Venues</div>
              </div>
            </div>

          </div>

          {/* Right Column — Clean Real Workstation Mockup */}
          <div className="lg:col-span-5">
            <img
              src="/trading_platform_desktop.png"
              alt="BrokerBros Pro Workstation Terminal"
              className="w-full h-auto max-h-[420px] object-contain shadow-md rounded-xl border border-slate-200"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
