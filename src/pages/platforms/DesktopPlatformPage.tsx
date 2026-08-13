import React, { useState } from 'react';
import {
  Monitor,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  Layout,
  Terminal,
  Download,
  BarChart3,
  Check,
  PlayCircle,
  HelpCircle,
  Keyboard,
  Layers
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';
import { ProductVideoSection } from '../../components/Common/ProductVideoSection';
import { ProductGallerySection } from '../../components/Common/ProductGallerySection';

interface PageProps {
  onOpenAccount: () => void;
}

export const DesktopPlatformPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeDesktopView, setActiveDesktopView] = useState<'matrix' | 'dom' | 'algo'>('matrix');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const desktopViews = {
    matrix: {
      title: '8-Screen Multi-Monitor Matrix Layout',
      subtitle: 'Pop out charts, watchlists, Level 2 depth DOMs, and order logs across up to 8 4K displays without slowing down your graphics card.',
      image: '/desktop-terminal.webp',
      badge: '8-Screen Grid Active'
    },
    dom: {
      title: 'Level 2 Depth of Market & Time and Sales',
      subtitle: 'Inspect real-time bid/ask queue volumes across major exchanges to identify institutional support levels and seller walls.',
      image: '/fix-bridge-showcase.webp',
      badge: 'Level 2 DOM Active'
    },
    algo: {
      title: 'Python Strategy Backtester & FIX API Console',
      subtitle: 'Connect custom algorithmic trading bots in Python or C++ via direct FIX 4.4 protocol for sub-millisecond strategy execution.',
      image: '/webterminal.webp',
      badge: 'Python SDK Active'
    }
  };

  return (
    <div className="bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-300 min-h-screen font-sans selection:bg-emerald-500/20 transition-colors duration-300">
      
      {/* 1. GROUNDED HUMAN HERO SECTION */}
      <section className="relative bg-white dark:bg-[#0a0a0a] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Soft Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-70 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 text-xs font-semibold border border-emerald-200 dark:border-emerald-800/50">
            <Monitor className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>PRO DESKTOP TRADING WORKSTATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            High-Speed Desktop Software for Active & Day Traders
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Fast, stable, and powerful. Built for multi-monitor workstations, custom keyboard hotkeys, Level 2 market depth, and sub-second order execution.
          </p>

          {/* Action Buttons & Download Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenAccount}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Download Free Desktop Workstation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenAccount}
                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Download Windows (.exe)</span>
              </button>
              <button
                onClick={onOpenAccount}
                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Download macOS (.dmg)</span>
              </button>
            </div>
          </div>

          {/* EMPIRICAL AUDITED METRICS BAR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-100 dark:border-slate-800/80 text-left">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#121520] border border-slate-200/80 dark:border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono">8 Displays</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Up to 8 x 4K Screens</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#121520] border border-slate-200/80 dark:border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">&lt; 5ms</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium font-mono">Tick-to-Trade Speed</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#121520] border border-slate-200/80 dark:border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono">Native C++</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Zero-Lag Execution Engine</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#121520] border border-slate-200/80 dark:border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">Mac / Win</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Apple M1/M2/M3 & Win 11</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. DEMO VIDEO SHOWCASE */}
      <ProductVideoSection
        title="See How the Desktop Workstation Performs"
        subtitle="Watch how easily you can pop out multi-chart windows, map hotkeys, view Level 2 depth of market, and execute orders across multiple 4K monitors."
        videoSrc="/test3.mp4"
        posterSrc="/desktop-terminal.webp"
        chapters={[
          { time: '0:00', title: 'Multi-Monitor Layout Setup' },
          { time: '1:20', title: 'Level 2 DOM & Time and Sales' },
          { time: '2:40', title: 'Keyboard Hotkey Customization' },
          { time: '4:00', title: 'Strategy Backtesting & Python API' }
        ]}
      />

      {/* 3. INTERACTIVE DESKTOP VIEW SWITCHER */}
      <section className="py-20 bg-slate-50 dark:bg-[#121520] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold uppercase border border-emerald-200 dark:border-emerald-800/40">
              <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              DESKTOP WORKSPACE PRESETS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Configured for High-Frequency Workstations
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Click below to preview pre-built workstation configurations for multi-screen grids, Level 2 DOMs, or Python algo trading.
            </p>
          </div>

          {/* Interactive Desktop Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'matrix', label: '8-Screen Multi-Monitor Matrix' },
              { id: 'dom', label: 'Level 2 DOM Ladder' },
              { id: 'algo', label: 'Python & FIX API Backtester' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveDesktopView(tab.id as any)}
                className={`px-5 py-2.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                  activeDesktopView === tab.id
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/20'
                    : 'bg-white dark:bg-[#0a0a0a] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Active Screenshot Showcase */}
          <div className="bg-white dark:bg-[#0a0a0a] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/50 px-2 py-0.5 rounded uppercase">
                  {desktopViews[activeDesktopView].badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {desktopViews[activeDesktopView].title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
                {desktopViews[activeDesktopView].subtitle}
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner group">
              <img
                src={desktopViews[activeDesktopView].image}
                alt={desktopViews[activeDesktopView].title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. ASYMMETRIC ALTERNATING FEATURE SPLITS */}
      <section className="py-20 bg-white dark:bg-[#0a0a0a] border-b border-slate-200 dark:border-slate-800 space-y-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Split 1: Image Left / Text Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-xl group">
              <img
                src="/desktop-terminal.webp"
                alt="Multi-Monitor Grid Setup"
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded text-xs font-mono font-bold shadow">
                Multi-Monitor Detachable Grid
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800/40">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Multi-Monitor Detachable Workspaces
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                Pop out charts, watchlists, Level 2 depth DOMs, and order logs onto separate 4K displays. Save custom window arrangements for morning scanning or afternoon trading.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Support for up to 8 separate 4K monitors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Unlinked window group synchronization</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Custom color themes & font size accessibility</span>
                </div>
              </div>
            </div>
          </div>

          {/* Split 2: Text Left / Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 md:order-1 order-2">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center border border-blue-200 dark:border-blue-800/40">
                <Keyboard className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Custom Keyboard Hotkey Order Entry
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                Map custom hotkeys like Shift+B to buy market, Shift+S to sell limit, or ESC to cancel all orders. Enter and exit positions in milliseconds without touching your mouse.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Customizable order shortcuts & hotkey combos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>One-key "Flatten All Positions" emergency kill-switch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Audio order confirmation feedback</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-xl group md:order-2 order-1">
              <img
                src="/fix-bridge-showcase.webp"
                alt="Keyboard Hotkey Execution"
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded text-xs font-mono font-bold shadow">
                Sub-Millisecond Hotkey Engine
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. PRODUCT INTERFACE GALLERY */}
      <ProductGallerySection
        title="Explore Desktop Workstation Screenshots"
        subtitle="High-resolution screenshots of multi-monitor layouts, Level 2 depth DOMs, hotkey config, and strategy backtesting."
        categories={['All Screenshots', 'Overview', 'Client Portal', 'Admin Desk', 'Analytics']}
        items={[
          {
            id: 'desk-1',
            title: 'Multi-Monitor Desktop Workstation Suite',
            category: 'Overview',
            imageSrc: '/desktop-terminal.webp',
            description: 'Multi-monitor desktop workstation layout designed for active day traders and fund managers.'
          },
          {
            id: 'desk-2',
            title: 'Web & Desktop Trading Terminal',
            category: 'Client Portal',
            imageSrc: '/webterminal.webp',
            description: 'High-speed order entry workstation featuring live TradingView charts and watchlists.'
          },
          {
            id: 'desk-3',
            title: 'Risk Desk & Execution Routing Workstation',
            category: 'Admin Desk',
            imageSrc: '/fix-bridge-showcase.webp',
            description: 'FIX API liquidity routing matrix and order matching engine monitoring dashboard.'
          }
        ]}
      />

      {/* 6. AUTHENTIC TRADER FAQS */}
      <section className="py-20 bg-slate-50 dark:bg-[#121520] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions (Real Desktop Doubts)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Clear answers to practical questions about desktop workstation requirements.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Does the desktop workstation support Mac M1/M2/M3 Apple Silicon?',
                a: 'Yes! We offer native Apple Silicon (.dmg) builds optimized for Apple M1, M2, and M3 chips, as well as 64-bit Windows 10/11 installers.'
              },
              {
                q: 'How many monitors can I connect to the desktop workstation?',
                a: 'You can pop out and detach chart windows across up to 8 4K displays depending on your computer graphics card capabilities.'
              },
              {
                q: 'Can I test my trading strategies using paper trading first?',
                a: 'Yes. Every desktop download includes a free demo paper trading account pre-loaded with virtual funds to test layouts, hotkeys, and strategies risk-free.'
              },
              {
                q: 'Can I connect Python scripts to the desktop workstation?',
                a: 'Yes! Our native Python SDK and REST/FIX API connectors allow you to feed tick data into custom Python models and execute trades automatically.'
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0a0a0a] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center justify-between cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 text-lg font-mono font-bold ml-2">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>

                {activeFaq === idx && (
                  <div className="p-4 sm:p-5 pt-0 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-[#121520]/50 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. DYNAMIC CTA SECTION */}
      <CTASection onOpenAccount={onOpenAccount} />

    </div>
  );
};
