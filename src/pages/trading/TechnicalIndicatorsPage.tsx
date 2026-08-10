import React, { useState } from 'react';
import {
  ArrowRight, BarChart2, LineChart, CandlestickChart, Activity, Zap, CheckCircle2,
  TrendingUp, ShieldCheck, Check, ChevronDown, ChevronUp, ChevronRight, Layout,
  Layers, Search, Sliders, Play, Code2, Headphones, FileText
} from 'lucide-react';

interface PageProps {
  onOpenAccount: () => void;
}

const MockIndicatorChart = () => (
  <div className="bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-xs font-sans w-full max-w-lg mx-auto">
    <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
      <div className="flex items-center gap-2">
        <span className="text-white font-mono font-bold text-xs">NASDAQ: NVDA</span>
        <span className="text-emerald-400 font-mono text-[11px]">$130.45 (+2.8%)</span>
      </div>
      <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
        <span className="text-emerald-400 font-bold">RSI(14): 64.2</span> · <span>MACD: BULLISH</span>
      </div>
    </div>
    <div className="p-3 bg-slate-950 h-52 relative">
      <svg viewBox="0 0 300 120" className="w-full h-full" preserveAspectRatio="none">
        {/* Candlesticks mock */}
        <line x1="20" y1="90" x2="20" y2="40" stroke="#10b981" strokeWidth="1" />
        <rect x="16" y="50" width="8" height="30" fill="#10b981" />
        <line x1="60" y1="80" x2="60" y2="30" stroke="#10b981" strokeWidth="1" />
        <rect x="56" y="35" width="8" height="35" fill="#10b981" />
        <line x1="100" y1="60" x2="100" y2="20" stroke="#ef4444" strokeWidth="1" />
        <rect x="96" y="25" width="8" height="25" fill="#ef4444" />
        <line x1="140" y1="70" x2="140" y2="15" stroke="#10b981" strokeWidth="1" />
        <rect x="136" y="20" width="8" height="40" fill="#10b981" />
        {/* EMA Line */}
        <path d="M10,80 Q70,60 140,30 T290,15" fill="none" stroke="#3b82f6" strokeWidth="2" />
        {/* Bollinger Band upper/lower */}
        <path d="M10,65 Q70,45 140,15 T290,5" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M10,95 Q70,75 140,45 T290,25" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    </div>
    <div className="bg-slate-900 px-4 py-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
      <span>Indicators Active: <strong>EMA(20), VWAP, RSI, Bollinger Bands</strong></span>
      <span className="text-emerald-400 font-bold">100+ Indicators Included</span>
    </div>
  </div>
);

export const TechnicalIndicatorsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePlan, setActivePlan] = useState<'monthly' | 'annual'>('annual');

  const stats = [
    { value: '100+', label: 'Built-in Technical Indicators', sub: 'Overlap, oscillator & volume' },
    { value: 'Pine Script', label: 'Custom Indicator Engine', sub: 'Compile & overlay custom code' },
    { value: 'Multi-TF', label: 'Timeframe Syncing', sub: '1s to 1M candle aggregation' },
    { value: 'Sub-Sec', label: 'Indicator Recalculation', sub: 'Streaming tick-by-tick math' },
  ];

  const features = [
    { icon: BarChart2, title: '100+ Built-In Indicators', desc: 'RSI, MACD, Moving Averages, Ichimoku Clouds, Supertrend, Bollinger Bands, and Volume Profile.', badge: '100+ Included' },
    { icon: LineChart, title: 'Pine Script Support', desc: 'Import or write custom indicator scripts with full Pine Script syntax highlighting and debugging.', badge: 'Pine Script' },
    { icon: CandlestickChart, title: 'Volume Profile & Footprint', desc: 'Institutional volume at price analysis, point of control (POC), and delta footprints.', badge: 'Order Flow' },
    { icon: Activity, title: 'Multi-Timeframe Overlays', desc: 'Plot 4-hour EMA or daily pivot points directly on 1-minute intraday charts seamlessly.', badge: 'Multi-TF' },
    { icon: Sliders, title: 'Fully Customizable Inputs', desc: 'Adjust lengths, source inputs, color gradients, fill opacities, and alert threshold lines.', badge: 'Full Control' },
    { icon: Zap, title: 'Indicator Alert Triggers', desc: 'Set automated push notifications whenever indicators cross over, overbought, or oversold.', badge: 'Instant Alerts' },
  ];

  const modules = [
    { icon: LineChart, title: 'Trend Indicators', items: ['EMA / SMA / WMA / HMA', 'Ichimoku Kinko Hyo', 'Supertrend Indicator', 'Parabolic SAR', 'ADX & DMI Direction'] },
    { icon: Activity, title: 'Momentum Oscillators', items: ['RSI (Relative Strength)', 'MACD & Histogram', 'Stochastic Oscillator', 'CCI & Commodity Channel', 'Williams %R'] },
    { icon: CandlestickChart, title: 'Volume & Order Flow', items: ['VWAP (Session & Anchored)', 'Volume Profile (VPVR/VPFR)', 'On-Balance Volume (OBV)', 'Cumulative Delta', 'Money Flow Index (MFI)'] },
    { icon: Sliders, title: 'Volatility Indicators', items: ['Bollinger Bands', 'Keltner Channels', 'ATR (Average True Range)', 'Donchian Channels', 'Standard Deviation'] },
    { icon: Code2, title: 'Custom Script Studio', items: ['Pine Script v5 compiler', 'Custom plotting colors', 'Pine indicator sharing', 'Script backtest module', 'Syntax autocomplete'] },
    { icon: Layout, title: 'Chart Template Engine', items: ['Save custom indicator sets', '1-click layout recall', 'Cross-device cloud sync', 'Default preset library', 'Multi-chart linking'] },
  ];

  const workflowSteps = [
    { step: '01', title: 'Open Chart', desc: 'Launch Web Terminal chart overlay for any asset.', icon: BarChart2 },
    { step: '02', title: 'Open Indicator Library', desc: 'Search 100+ built-in indicators or import custom Pine Script.', icon: Search },
    { step: '03', title: 'Configure Parameters', desc: 'Tune periods, inputs, line styles, and alert triggers.', icon: Sliders },
    { step: '04', title: 'Save As Template', desc: 'Store layout template to cloud for instant recall across devices.', icon: Layout },
    { step: '05', title: 'Trade Signals', desc: 'Execute orders directly when technical indicator signals trigger.', icon: TrendingUp },
  ];

  const faqs = [
    { q: 'Are technical indicators included for free?', a: 'Yes! All 100+ technical indicators, VWAP, and custom Pine Script support are included free with every BrokerBros account.' },
    { q: 'Can I write custom indicators in Pine Script?', a: 'Yes. Our web terminal features a full Pine Script compiler supporting custom plots, alerts, and strategy backtesting.' },
    { q: 'Do indicators sync between web and mobile apps?', a: 'Yes. Any indicator templates and settings saved in your workspace cloud sync automatically to the mobile app.' },
    { q: 'Is Volume Profile and VWAP supported?', a: 'Yes. Session VWAP, Anchored VWAP, and Volume Profile (VPVR/VPFR) are available across all stock, crypto, and futures charts.' },
  ];

  const testimonials = [
    { quote: "The VWAP and Volume Profile implementation in BrokerBros is as crisp as institutional software like TradingView Pro.", name: "Derek Chen", role: "Equity Scalper", rating: 5 },
    { quote: "Importing my custom Pine Script indicators took 30 seconds. The multi-timeframe overlay is a game changer for my setup.", name: "Samantha Miller", role: "Technical Analyst", rating: 5 },
    { quote: "Having 100+ indicators available on web and mobile without extra fees saves me hundreds per year in chart subscriptions.", name: "Robert Taylor", role: "Swing Trader", rating: 5 },
  ];

  const plans = [
    { name: 'Starter', price: '$0', period: '/ month', desc: 'For retail chartists', features: ['Full indicator library (100+)', '5 active chart overlays', 'Standard indicators', '5 saved chart presets', 'Real-time L1 data'], cta: 'Open Free Account', highlight: false },
    { name: 'Professional', price: activePlan === 'annual' ? '$29' : '$39', period: '/ month', desc: 'For technical pros', features: ['Everything in Starter', 'Pine Script compiler', 'Volume Profile & Anchored VWAP', 'Unlimited active overlays', 'Multi-timeframe sync', 'Indicator alerts'], cta: 'Start Pro Trial', highlight: true },
    { name: 'Enterprise', price: 'Custom', period: '', desc: 'For research desks', features: ['Everything in Pro', 'Custom indicator development', 'Proprietary feed integration', 'Dedicated quant support', 'SLA data uptime'], cta: 'Contact Sales', highlight: false },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <section className="relative bg-white min-h-[85vh] py-16 lg:py-24 border-b border-slate-100 overflow-hidden flex flex-col justify-center items-center font-sans">
        <div className="absolute top-0 -right-16 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 w-full flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-600 tracking-wider uppercase font-mono shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>ADVANCED TECHNICAL ANALYSIS SUITE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1] max-w-3xl">
            100+ Indicators.{' '}
            <span className="text-emerald-600">Custom Pine Script Engine.</span>
          </h1>

          <p className="text-slate-500 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Analyze markets with institutional precision. Overlap indicators, oscillators, volume profiles,
            and custom Pine Script code directly on live streaming charts.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button onClick={onOpenAccount} className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-md shadow-emerald-600/20 transition-all text-sm cursor-pointer">
              <span>Open Free Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={onOpenAccount} className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold rounded-lg transition-all text-sm cursor-pointer">
              <BarChart2 className="w-4 h-4" />
              <span>Explore Indicators</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            {['100+ Built-In', 'Pine Script Support', 'Volume Profile', 'Multi-TF Overlays'].map((label) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-slate-500">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-b from-emerald-50/60 via-emerald-50/30 to-white border-b border-slate-100/80 font-sans overflow-hidden">
        <div className="space-y-10">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">{s.value}</div>
                <div className="text-xs font-semibold text-slate-700">{s.label}</div>
                <div className="text-[10px] text-slate-400 font-normal">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 max-w-6xl mx-auto px-4">
            <div className="w-16 sm:w-24 h-px bg-emerald-300/60" />
            <span className="text-emerald-700 font-bold text-sm font-sans tracking-tight">Technical Analysis Features</span>
            <div className="w-16 sm:w-24 h-px bg-emerald-300/60" />
          </div>

          <div className="relative w-full overflow-hidden group">
            <div className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused] py-2">
              {[...features, ...features].map((card, i) => (
                <div key={i} className="w-[320px] sm:w-[360px] bg-white/90 backdrop-blur-sm border border-emerald-100/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex items-start gap-4 flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-6 h-6 text-emerald-600 stroke-[1.75]" />
                  </div>
                  <div className="space-y-1 pt-0.5">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-900 text-sm">{card.title}</h3>
                      <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded-full">{card.badge}</span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-100 font-sans relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-600 uppercase tracking-wider font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>REAL-TIME INDICATOR OVERLAYS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
                Institutional Charts.<br />Zero Extra Cost.
              </h2>
              <p className="text-slate-500 text-base leading-relaxed max-w-lg">
                Plot volume profiles, anchored VWAPs, multi-timeframe moving averages, and custom Pine Script code on live streaming WebSocket feeds.
              </p>
              <ul className="space-y-3">
                {[
                  { icon: BarChart2, text: '100+ pre-built technical indicators with instant recalculation' },
                  { icon: Code2, text: 'Full Pine Script editor with custom script sharing and alert rules' },
                  { icon: Layout, text: 'Cloud template engine saves your chart setups across all devices' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-600 text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
              <button onClick={onOpenAccount} className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all text-sm shadow-md shadow-emerald-600/20">
                Start Technical Analysis <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative flex justify-center">
              <MockIndicatorChart />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50/50 border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">Technical Analysis Modules</h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">Six powerful indicator suites built into the BrokerBros charting workstation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    <mod.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">{mod.title}</h3>
                </div>
                <ul className="space-y-2">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">Workflow in 5 Steps</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3">
                <div className="relative flex items-center justify-center">
                  <div className="absolute -top-1 font-mono text-[10px] font-bold text-white bg-emerald-600 w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-20">{step.step}</div>
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center z-10">
                    <step.icon className="w-7 h-7 text-emerald-600 stroke-[1.75]" />
                  </div>
                </div>
                <div className="space-y-1 pt-1 max-w-[160px]">
                  <h4 className="font-bold text-slate-900 text-sm">{step.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA] border-b border-slate-100 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950">Analyst Testimonials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between">
                <p className="text-slate-600 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-black text-slate-950">Technical Indicator FAQ</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-[14px] p-5">
                <div className="font-semibold text-slate-900 text-sm mb-2">{faq.q}</div>
                <div className="text-slate-500 text-sm leading-relaxed">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA] border-b border-slate-100 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950">Indicator & Charting Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map((p, i) => (
              <div key={i} className={`p-7 rounded-2xl border text-left flex flex-col ${p.highlight ? 'bg-slate-950 text-white border-emerald-500' : 'bg-white text-slate-900 border-slate-200'}`}>
                <div className="font-bold text-lg">{p.name}</div>
                <div className="text-3xl font-black my-3">{p.price}<span className="text-xs font-normal text-slate-400">{p.period}</span></div>
                <ul className="space-y-2 mb-6 flex-1 text-sm">
                  {p.features.map(f => <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" />{f}</li>)}
                </ul>
                <button onClick={onOpenAccount} className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-500 transition-all">{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0D1117] text-white">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">Analyze Markets With 100+ Indicators Today</h2>
          <button onClick={onOpenAccount} className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-all inline-flex items-center gap-2">
            Get Started Free <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <div className="py-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 text-xs text-slate-400 text-center">
          <span className="font-semibold text-slate-500">Risk Disclaimer:</span> Technical indicators are analytical tools and do not guarantee profitable trading outcomes. Member FINRA/SIPC.
        </div>
      </div>
    </div>
  );
};
