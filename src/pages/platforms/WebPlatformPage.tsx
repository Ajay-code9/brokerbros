import React, { useState } from 'react';
import {
  Globe,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Monitor,
  LayoutGrid,
  BarChart3,
  Lock,
  Smartphone,
  Check,
  PlayCircle,
  HelpCircle,
  Activity,
  Layers,
  Cpu
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';
import { ProductVideoSection } from '../../components/Common/ProductVideoSection';
import { ProductGallerySection } from '../../components/Common/ProductGallerySection';

interface PageProps {
  onOpenAccount: () => void;
}

export const WebPlatformPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<'day' | 'options' | 'swing'>('day');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const workspaceViews = {
    day: {
      title: 'Day Trader Multi-Chart Layout',
      subtitle: 'Configured for high-frequency scalpers needing 4 simultaneous TradingView chart windows, Level 2 depth DOM, and 1-click execution hotkeys.',
      image: '/webterminal.webp',
      badge: '4-Chart Grid Active'
    },
    options: {
      title: 'Options Volatility & Greeks Matrix View',
      subtitle: 'Optimized for options traders tracking implied volatility skew curves, multi-leg order entry tickets, and real-time Delta/Gamma exposure.',
      image: '/pricing-showcase.webp',
      badge: 'Option Chain Active'
    },
    swing: {
      title: 'Swing Trader Macro & Watchlist Layout',
      subtitle: 'Clean 1-chart setup with custom watchlists, news feed streaming, and automated bracket take-profit / stop-loss orders.',
      image: '/desktop-terminal.webp',
      badge: 'Macro Watchlist Active'
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
            <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>WEB TRADING TERMINAL</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Trade Stocks, Options & Forex Directly in Your Browser
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Fast, clean, and reliable. Open any web browser on Mac, Windows, or tablet to access live charts, 1-click order execution, and your portfolio — with zero software downloads.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenAccount}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Open Free Web Trading Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#demo-video"
              className="w-full sm:w-auto px-7 py-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm rounded-xl border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <PlayCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Watch 2-Minute Platform Demo</span>
            </a>
          </div>

          {/* EMPIRICAL AUDITED METRICS BAR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-100 dark:border-slate-800/80 text-left">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#121520] border border-slate-200/80 dark:border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono">99.982%</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Audited Server Uptime</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#121520] border border-slate-200/80 dark:border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">4.2ms</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Average Execution Speed</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#121520] border border-slate-200/80 dark:border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono">150+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Global Liquidity Venues</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#121520] border border-slate-200/80 dark:border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">HTML5</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Zero Plugins Required</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. DEMO VIDEO SHOWCASE */}
      <div id="demo-video">
        <ProductVideoSection
          title="See How Easy It Is to Trade in Your Browser"
          subtitle="Watch how you can customize your watchlists, open TradingView charts, set stop-losses, and track your account balance in real-time."
          videoSrc="/test2.mp4"
          posterSrc="/webterminal.webp"
          chapters={[
            { time: '0:00', title: 'Web Terminal Overview' },
            { time: '1:10', title: 'Chart Indicators & Drawing Tools' },
            { time: '2:25', title: '1-Click Order Entry & Bracket Orders' },
            { time: '3:40', title: 'Live Account & Position Management' }
          ]}
        />
      </div>

      {/* 3. INTERACTIVE WORKSPACE VIEW SWITCHER */}
      <section className="py-20 bg-slate-50 dark:bg-[#121520] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold uppercase border border-emerald-200 dark:border-emerald-800/40">
              <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              DYNAMIC WORKSPACE PRESETS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Switch Workspaces Tailored to Your Strategy
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Click below to preview pre-configured screen arrangements for Day Trading, Options, or Swing Trading.
            </p>
          </div>

          {/* Interactive Workspace Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'day', label: 'Day Trader Multi-Chart' },
              { id: 'options', label: 'Options Volatility Matrix' },
              { id: 'swing', label: 'Swing Trader Watchlist' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveWorkspaceTab(tab.id as any)}
                className={`px-5 py-2.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                  activeWorkspaceTab === tab.id
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
                  {workspaceViews[activeWorkspaceTab].badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {workspaceViews[activeWorkspaceTab].title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
                {workspaceViews[activeWorkspaceTab].subtitle}
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner group">
              <img
                src={workspaceViews[activeWorkspaceTab].image}
                alt={workspaceViews[activeWorkspaceTab].title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-slate-950/90 text-white px-3 py-1.5 rounded-lg text-xs font-mono border border-slate-800 backdrop-blur-md">
                <span>Active Resolution: 3840 x 2160 (4K HTML5 Canvas)</span>
              </div>
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
                src="/webterminal.webp"
                alt="Built-in TradingView Engine"
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded text-xs font-mono font-bold shadow">
                TradingView Engine
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800/40">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Integrated TradingView Chart Engine
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                Use 100+ technical indicators, candlestick & bar charts, drawing tools, and footprint charts. Draw your analysis and place orders directly from the chart overlay with one click.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Real-time tick-by-tick candlestick updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>1-click order entry directly on chart line overlays</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Save custom indicator templates across sessions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Split 2: Text Left / Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 md:order-1 order-2">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center border border-blue-200 dark:border-blue-800/40">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                1-Click Execution & Server-Side Stop-Loss Safety
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                Set preset order lot sizes, stop-losses, and profit targets before entering a trade. When you execute a market order, your bracket stop-loss is stored directly on the exchange server — keeping your trade safe even if your internet connection drops.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Server-side bracket order protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Sub-millisecond fill confirmation alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Instant "Flatten All Positions" kill-switch</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-xl group md:order-2 order-1">
              <img
                src="/pricing-showcase.webp"
                alt="Order Ticket & Risk Controls"
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded text-xs font-mono font-bold shadow">
                Server-Side Stop Loss
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. PRODUCT INTERFACE GALLERY */}
      <ProductGallerySection
        title="Explore Web Terminal Workstation Screenshots"
        subtitle="High-resolution screenshots of chart overlays, order entry tickets, Level 2 depth of market, and live portfolio monitors."
        categories={['All Screenshots', 'Overview', 'Client Portal', 'Admin Desk', 'Analytics']}
        items={[
          {
            id: 'web-1',
            title: 'Web Trading Workspace Overview',
            category: 'Overview',
            imageSrc: '/webterminal.webp',
            description: 'Clean multi-asset trading dashboard featuring live TradingView charts, watchlists, and order book widgets.'
          },
          {
            id: 'web-2',
            title: 'Desktop & Web Workstation Suite',
            category: 'Client Portal',
            imageSrc: '/desktop-terminal.webp',
            description: 'Multi-monitor trading workstation layout with order entry tickets and position monitors.'
          },
          {
            id: 'web-3',
            title: 'Mobile & Web Synchronized App',
            category: 'Client Portal',
            imageSrc: '/web-mobile-app.webp',
            description: 'Mobile responsive web trading portal with instant trade execution and account management.'
          },
          {
            id: 'web-4',
            title: 'White-Label Client Account Portal',
            category: 'Overview',
            imageSrc: '/broker-crm-img-one.webp',
            description: 'Client funding, deposit history, account leverage settings, and security controls.'
          }
        ]}
      />

      {/* 6. AUTHENTIC TRADER FAQS */}
      <section className="py-20 bg-slate-50 dark:bg-[#121520] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions (Real Trader Doubts)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Clear answers to practical questions about browser trading, order safety, and sync.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'What happens to my open trade if my home WiFi or browser crashes?',
                a: 'Your stop-loss and take-profit orders are stored directly on the exchange server side (not on your browser). If your WiFi disconnects or your browser crashes, your stop-loss remains 100% active and protected.'
              },
              {
                q: 'Do my chart line drawings and watchlists save automatically?',
                a: 'Yes! Every trendline, indicator preset, and watchlist you set up is automatically saved to your cloud profile in real-time. Log in on any computer or mobile phone and your exact layout will load.'
              },
              {
                q: 'Can I use TradingView indicators on an iPad or tablet browser?',
                a: 'Yes. The web terminal is built on HTML5 responsive touch standards. You can use TradingView chart drawings, indicators, and 1-tap trade execution on iPad, Surface, or Android tablets.'
              },
              {
                q: 'Do I need to pay any extra monthly fee for web terminal access?',
                a: 'No. Access to the BrokerBros Web Terminal is 100% free for all funded account holders, including live streaming Level 1 prices.'
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
