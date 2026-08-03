import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MARKET_CATEGORIES } from '../../data/mockData';
import { MarketCategory } from '../../types';
import {
  Check,
  ArrowRight,
  TrendingUp,
  Layers,
  Activity,
  Zap,
  Percent,
  Sparkles,
  Globe2,
  ShieldCheck,
  Landmark,
  Coins,
  Clock,
  PieChart,
  FileText,
  ChevronDown
} from 'lucide-react';

interface ProductsSectionProps {
  onOpenAccount: () => void;
  onSelectCategory?: (cat: MarketCategory) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenAccount, onSelectCategory }) => {
  const [activeTabId, setActiveTabId] = useState<string>(MARKET_CATEGORIES[0].id);
  const selectedCategory = MARKET_CATEGORIES.find(cat => cat.id === activeTabId) || MARKET_CATEGORIES[0];

  // Helper SVG sparklines for live stream
  const sparklineUp = (
    <svg className="w-16 h-6 text-emerald-400 stroke-current fill-none stroke-[2]" viewBox="0 0 60 20">
      <path d="M0 15 Q 15 18, 30 10 T 60 3" />
    </svg>
  );

  const sparklineDown = (
    <svg className="w-16 h-6 text-rose-400 stroke-current fill-none stroke-[2]" viewBox="0 0 60 20">
      <path d="M0 3 Q 15 5, 30 12 T 60 17" />
    </svg>
  );

  return (
    <section id="products" className="py-5 lg:py-7 bg-white text-slate-900 border-b border-slate-200/50 relative overflow-hidden font-sans">
      {/* Outer Section Background Image /backgroundone.png */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/backgroundone.png"
          alt="Products Background"
          className="w-full h-full object-cover opacity-30 select-none mix-blend-multiply"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

        {/* Asset Class Filter Tabs (Ultra-Compact Fitted Green Strip Bar) */}
        <div className="bg-emerald-950 text-white rounded-xl sm:rounded-2xl border border-emerald-800/80 w-full max-w-6xl mx-auto shadow-md shadow-emerald-950/20 p-1 flex items-center justify-between gap-0.5 sm:gap-1 select-none overflow-hidden">
          {MARKET_CATEGORIES.map((category, index) => {
            const isActive = category.id === activeTabId;

            // Clean Lucide stroke icons (12-14px)
            const getIcon = (id: string) => {
              const iconClasses = `w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 transition-colors ${isActive ? 'text-emerald-700' : 'text-emerald-300 group-hover:text-white'
                }`;
              switch (id) {
                case 'stocks-etfs':
                  return <TrendingUp className={iconClasses} strokeWidth={2} />;
                case 'options':
                  return <PieChart className={iconClasses} strokeWidth={2} />;
                case 'futures':
                  return <Layers className={iconClasses} strokeWidth={2} />;
                case 'bonds':
                  return <FileText className={iconClasses} strokeWidth={2} />;
                case 'forex':
                default:
                  return <Globe2 className={iconClasses} strokeWidth={2} />;
              }
            };

            return (
              <React.Fragment key={category.id}>
                {index > 0 && <div className="hidden lg:block w-[1px] h-4 bg-emerald-800/60 shrink-0" />}
                <button
                  onClick={() => {
                    setActiveTabId(category.id);
                    onSelectCategory?.(category);
                  }}
                  className={`flex-1 h-[32px] sm:h-[35px] rounded-lg transition-all duration-200 ease-out flex items-center justify-center gap-1 sm:gap-1.5 px-1 sm:px-2 cursor-pointer whitespace-nowrap group ${isActive
                      ? 'bg-white text-slate-950 border-[1.5px] border-emerald-400 shadow-sm shadow-emerald-950/40'
                      : 'bg-transparent text-emerald-100 border border-transparent hover:bg-emerald-900/60 hover:text-white'
                    }`}
                >
                  {getIcon(category.id)}
                  <span
                    className={`text-[10px] sm:text-[11px] lg:text-[11.5px] tracking-tight whitespace-nowrap transition-colors ${isActive ? 'font-black text-slate-950' : 'font-semibold text-slate-200 group-hover:text-white'
                      }`}
                  >
                    {category.name}
                  </span>
                  <span
                    className={`text-[8.5px] sm:text-[9.5px] px-1.5 py-0.1 rounded-full font-mono font-bold whitespace-nowrap transition-colors ${isActive
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        : 'bg-emerald-900/80 text-emerald-300 group-hover:bg-emerald-800 group-hover:text-emerald-100'
                      }`}
                  >
                    {category.instrumentsCount}
                  </span>
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* 3-COLUMN COMPOSITION (Compact Viewport Fitted Box WITH /check.png INNER BACKGROUND) */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 lg:p-7 shadow-lg shadow-slate-200/40 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center relative overflow-hidden">
          {/* Inner Div Background Image /check.png */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            <img
              src="/check.png"
              alt="Content Card Inner Background"
              className="w-full h-full object-cover opacity-20 select-none mix-blend-multiply"
            />
          </div>

          {/* LEFT (45% -> lg:col-span-5): Marketing Content, Cards, Checklist, CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="space-y-3"
              >
                {/* Small Green Badge */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[11px] font-mono font-bold border border-emerald-200/80 shadow-2xs">
                    <Activity className="w-3 h-3 text-emerald-600" />
                    <span>MARKET SPECIFICATIONS & PRICING</span>
                  </div>
                </div>

                {/* Institutional Headline (Strict Fixed Height Box) */}
                <h2 className="text-xl sm:text-2xl lg:text-[23px] font-black text-slate-900 font-sans tracking-tight leading-[1.25] h-[58px] flex items-center">
                  {selectedCategory.tagline}
                </h2>

                {/* Supporting Paragraph (Strict Fixed Height Box) */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-medium max-w-lg h-[42px] flex items-center">
                  {selectedCategory.description}
                </p>

                {/* Two Premium Statistic Cards (Side-by-Side - Strict Fixed Height Box) */}
                <div className="grid grid-cols-2 gap-2 bg-slate-50/70 p-2 rounded-xl border border-slate-200/80 shadow-xs h-[58px] items-center">
                  <div className="flex items-center gap-2 p-0.5">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 border border-emerald-200/80 shrink-0">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[8.5px] font-mono font-bold text-slate-400 uppercase tracking-wider truncate">COMMISSION & SPREAD</div>
                      <div className="text-[11px] sm:text-xs font-black font-mono text-slate-900 tracking-tight truncate">{selectedCategory.commission}</div>
                      <div className="text-[9.5px] font-sans text-slate-500 truncate">Transparent Rates</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-0.5 border-l border-slate-200/80 pl-2">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 border border-emerald-200/80 shrink-0">
                      <Percent className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[8.5px] font-mono font-bold text-slate-400 uppercase tracking-wider truncate">MARGIN ADVANTAGE</div>
                      <div className="text-[11px] sm:text-xs font-black font-mono text-emerald-600 tracking-tight truncate">{selectedCategory.marginRate}</div>
                      <div className="text-[9.5px] font-sans text-slate-500 truncate">Leverage Rate</div>
                    </div>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-1.5 pt-0.5">
                  {selectedCategory.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 shrink-0 shadow-2xs">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Large CTA Button */}
                <div className="pt-1">
                  <button
                    onClick={onOpenAccount}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/25 transition-all flex items-center gap-2 cursor-pointer group"
                  >
                    <span>Trade {selectedCategory.name} Market</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CENTER (20% -> lg:col-span-3): FIXED HERO ILLUSTRATION */}
          <div className="lg:col-span-3 h-full flex items-center justify-center p-0">
            <div className="w-full max-w-xs h-[340px] flex items-center justify-center">
              <img
                src="/newsection.png"
                alt="BrokerBros Market Illustration"
                className="w-full h-full object-contain select-none scale-105 transition-transform duration-300 drop-shadow-md"
              />
            </div>
          </div>

          {/* RIGHT (35% -> lg:col-span-4): BLOOMBERG / TRADINGVIEW HERO MARKET TERMINAL */}
          <div className="lg:col-span-4 bg-[#090d16] text-white p-4 rounded-xl border border-slate-800/90 shadow-2xl shadow-slate-950/80 space-y-3 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-2.5">
              {/* Terminal Header (Single Line Guarantee) */}
              <div className="flex items-center justify-between border-b border-slate-800/90 pb-2.5">
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-[10.5px] font-mono font-black text-slate-200 uppercase tracking-wider truncate">
                    {selectedCategory.id === 'stocks-etfs' ? 'STOCKS & ETFS' :
                     selectedCategory.id === 'options' ? 'OPTIONS MARKET' :
                     selectedCategory.id === 'futures' ? 'FUTURES STREAM' :
                     selectedCategory.id === 'bonds' ? 'BONDS STREAM' : 'SPOT FOREX'} TERMINAL
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[8.5px] font-mono font-bold text-emerald-400 bg-emerald-950/90 px-1.5 py-0.5 rounded border border-emerald-800/70">
                    REALTIME
                  </span>
                  <span className="text-[9px] font-mono text-slate-400">09:30:00</span>
                </div>
              </div>

              {/* Dynamic Symbol Stream Rows */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-1.5 font-mono"
                >
                  {selectedCategory.popularSymbols.map((row, idx) => {
                    // Generate unique organic sparklines for each symbol row
                    const isUp = row.isPositive;
                    const pathData = isUp
                      ? `M 0 16 Q 15 ${12 - (idx % 3) * 3}, 30 ${14 - idx * 2} T 60 ${4 + (idx % 2) * 2}`
                      : `M 0 4 Q 15 ${6 + (idx % 3) * 2}, 30 ${10 + idx * 2} T 60 ${16 - (idx % 2) * 2}`;
                    
                    // Clean formatting to prevent double plus signs like ++0.0018
                    const formattedChange = row.change.startsWith('+') || row.change.startsWith('-') ? row.change : (isUp ? `+${row.change}` : row.change);

                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-900 transition-all duration-150 group/row"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-7 h-7 rounded-md flex items-center justify-center font-sans text-[10px] font-extrabold shrink-0 border ${
                            isUp 
                              ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/50' 
                              : 'bg-rose-950/60 text-rose-400 border-rose-800/50'
                          }`}>
                            {row.symbol.slice(0, 3)}
                          </div>
                          <div>
                            <div className="font-bold text-[11px] text-slate-100 tracking-tight group-hover/row:text-emerald-400 transition-colors">
                              {row.symbol}
                            </div>
                            <div className="text-[9px] text-slate-400 font-sans truncate max-w-[90px]">
                              {row.name}
                            </div>
                          </div>
                        </div>

                        {/* Varied Organic Sparkline Chart */}
                        <div className="hidden sm:block shrink-0 opacity-85 group-hover/row:opacity-100 transition-opacity">
                          <svg className="w-15 h-5 overflow-visible">
                            <path
                              d={pathData}
                              fill="none"
                              stroke={isUp ? '#10b981' : '#f43f5e'}
                              strokeWidth="1.75"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>

                        <div className="text-right">
                          <div className="font-bold text-xs text-slate-100 font-mono tracking-tight">
                            {row.price}
                          </div>
                          <div className={`text-[9.5px] font-mono font-bold ${isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {formattedChange}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Institutional Execution Footer */}
            <div className="pt-2 border-t border-slate-800/90 space-y-2">
              <div className="grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800/60">
                  <div className="text-[9px] text-slate-400 uppercase font-sans">DMA Routing</div>
                  <div className="text-[11px] font-extrabold text-emerald-400">Direct FIX 4.4</div>
                </div>
                <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800/60">
                  <div className="text-[9px] text-slate-400 uppercase font-sans">Latency</div>
                  <div className="text-[11px] font-extrabold text-white">&lt; 8.2ms</div>
                </div>
                <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800/60">
                  <div className="text-[9px] text-slate-400 uppercase font-sans">Fill Rate</div>
                  <div className="text-[11px] font-extrabold text-emerald-400">99.98%</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


