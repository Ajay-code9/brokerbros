import React, { useState } from 'react';
import {
  ArrowRight, Globe, Monitor, BarChart2, Layers, Zap, ShieldCheck, CheckCircle2,
  Clock, Wifi, Layout, Activity, ChevronDown, ChevronUp, ChevronRight, TrendingUp, Lock,
  Database, Settings, RefreshCw, Terminal, Code2, Bell, Smartphone, Filter,
  Search, Users, Star, Quote, Check, ExternalLink, BarChart3, LineChart,
  Cpu, Server, Eye, Fingerprint, Award, Building2, Play, Wallet, Network, CandlestickChart, PieChart,
  UserPlus, FileCheck, Headphones, Megaphone, AlertTriangle, FileText, ArrowDown, Download, UserCheck, DollarSign
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

const MockDashboard = () => (
  <div className="bg-white border border-slate-200 rounded-[18px] shadow-lg overflow-hidden text-xs font-sans">
    {/* Top bar */}
    <div className="bg-slate-950 px-4 py-2.5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <span className="text-slate-400 font-mono text-[10px]">BrokerBros Web Terminal — LIVE</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-green-600/20 border border-green-600/40 px-2 py-0.5 rounded">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-green-400 font-mono text-[9px] font-bold">CONNECTED</span>
        </div>
      </div>
    </div>

    {/* Toolbar */}
    <div className="bg-slate-900 px-4 py-2 flex items-center gap-4 border-b border-slate-800">
      {['AAPL', 'NVDA', 'TSLA', 'BTC/USD', 'EUR/USD'].map((sym, i) => (
        <button key={sym} className={`text-[10px] font-mono px-2 py-1 rounded ${i === 0 ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}>
          {sym}
        </button>
      ))}
      <div className="ml-auto flex items-center gap-2">
        {['1m', '5m', '15m', '1H', '4H', '1D'].map((tf, i) => (
          <span key={tf} className={`text-[10px] font-mono cursor-pointer ${i === 4 ? 'text-emerald-400 font-bold' : 'text-slate-500'}`}>{tf}</span>
        ))}
      </div>
    </div>

    <div className="flex" style={{ height: 240 }}>
      {/* Left Panel — Symbol Info */}
      <div className="w-36 bg-slate-950 border-r border-slate-800 p-3 space-y-2 flex-shrink-0">
        <div className="text-white font-bold text-sm font-mono">AAPL</div>
        <div className="text-emerald-400 font-mono text-base font-black">$224.38</div>
        <div className="text-emerald-500 text-[10px] font-mono">+1.14 (+0.51%)</div>
        <div className="mt-3 space-y-1.5">
          {[['Open', '222.19'], ['High', '225.60'], ['Low', '221.88'], ['Vol', '54.2M']].map(([k, v]) => (
            <div key={k} className="flex justify-between">
              <span className="text-slate-500 text-[9px]">{k}</span>
              <span className="text-slate-300 text-[9px] font-mono">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex-1 bg-slate-950 p-3 relative">
        <svg viewBox="0 0 300 160" className="w-full h-full" preserveAspectRatio="none">
          {/* Grid lines */}
          {[40, 80, 120, 160].map(y => (
            <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#1e293b" strokeWidth="0.5" />
          ))}
          {[60, 120, 180, 240].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="160" stroke="#1e293b" strokeWidth="0.5" />
          ))}
          {/* Area fill */}
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16a34a" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,140 L30,120 L60,100 L90,115 L120,95 L150,80 L180,70 L210,60 L240,45 L270,35 L300,30 L300,160 L0,160 Z"
            fill="url(#areaGrad)"
          />
          <path
            d="M0,140 L30,120 L60,100 L90,115 L120,95 L150,80 L180,70 L210,60 L240,45 L270,35 L300,30"
            fill="none" stroke="#16a34a" strokeWidth="1.5"
          />
          {/* Candle tooltip */}
          <rect x="230" y="10" width="60" height="28" rx="3" fill="#0f172a" />
          <text x="235" y="22" fill="#94a3b8" fontSize="7" fontFamily="monospace">CLOSE</text>
          <text x="235" y="33" fill="#4ade80" fontSize="8" fontFamily="monospace" fontWeight="bold">$224.38</text>
        </svg>
      </div>

      {/* Right Panel — Order Book */}
      <div className="w-28 bg-slate-950 border-l border-slate-800 p-2 flex-shrink-0">
        <div className="text-[9px] text-slate-400 font-mono mb-1.5 font-bold">ORDER BOOK</div>
        <div className="space-y-0.5">
          {[['225.10', '1,240'], ['224.95', '2,810'], ['224.80', '540']].map(([p, s]) => (
            <div key={p} className="flex justify-between">
              <span className="text-red-400 text-[9px] font-mono">{p}</span>
              <span className="text-slate-500 text-[9px]">{s}</span>
            </div>
          ))}
          <div className="border-t border-emerald-800 my-1" />
          {[['224.38', '3,100'], ['224.20', '1,820'], ['224.05', '4,200']].map(([p, s]) => (
            <div key={p} className="flex justify-between">
              <span className="text-emerald-400 text-[9px] font-mono">{p}</span>
              <span className="text-slate-500 text-[9px]">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom Order Entry */}
    <div className="bg-slate-900 border-t border-slate-800 px-4 py-2.5 flex items-center gap-4">
      <div className="flex items-center gap-2">
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-md">BUY</button>
        <button className="bg-red-600 hover:bg-red-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-md">SELL</button>
      </div>
      <div className="flex items-center gap-2 ml-2">
        <span className="text-slate-400 text-[9px]">QTY</span>
        <div className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[10px] text-white font-mono w-14">100</div>
        <span className="text-slate-400 text-[9px]">LIMIT</span>
        <div className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[10px] text-white font-mono w-16">224.00</div>
      </div>
      <div className="ml-auto text-[9px] text-slate-500 font-mono">EST COST: $22,400 · MARGIN: $2,240</div>
    </div>
  </div>
);

const FloatingCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`absolute bg-white border border-slate-200 rounded-xl shadow-xl p-3 text-xs ${className}`}>
    {children}
  </div>
);

export const WebTradingTerminalPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePlan, setActivePlan] = useState<'monthly' | 'annual'>('annual');

  const features = [
    { icon: BarChart2, title: 'Integrated TradingView Engine', desc: '100+ technical indicators, multi-timeframe analysis, candlestick & footprint charts, and one-click order execution directly on chart overlays.', badge: '100+ Indicators' },
    { icon: Layers, title: '28+ Advanced Algo Orders', desc: 'Bracket orders, trailing stops, TWAP, VWAP, adaptive SmartRouting, and hidden icebergs from a single unified order ticket.', badge: '28 Order Types' },
    { icon: Wifi, title: 'Sub-Millisecond WebSocket Data', desc: 'Streaming real-time Level II Depth of Market from 150+ lit ECNs and dark pools. NASDAQ ITCH and NYSE ArcaBook feeds included.', badge: '<1ms Latency' },
    { icon: Layout, title: 'Multi-Monitor Workspace Engine', desc: 'Drag-and-drop panel layouts, unlimited named workspaces, and synchronized crosshairs across all chart panels and monitors.', badge: 'Unlimited Panels' },
    { icon: Clock, title: 'Extended Hours & 24/5 Access', desc: 'Pre-market from 4:00 AM and after-hours until 8:00 PM ET. Full order routing and real-time quotes during extended sessions.', badge: 'Pre / After Hours' },
    { icon: ShieldCheck, title: 'Zero PFOF Smart Routing', desc: 'Every order is routed to primary exchanges for maximum price improvement. We reject Payment for Order Flow completely.', badge: 'Zero PFOF' },
  ];

  const modules = [
    { icon: BarChart3, title: 'Advanced Charting', items: ['100+ built-in indicators', 'Custom Pine Script support', 'Drawing & annotation tools', 'Multi-timeframe mode', 'Chart templates & sharing'] },
    { icon: Database, title: 'Level II Market Depth', items: ['Full NASDAQ ITCH feed', 'NYSE ArcaBook streaming', 'Dark pool prints', 'Time & Sales tape', 'Large print alerts'] },
    { icon: Settings, title: 'Options Suite', items: ['Live options chain', 'Black-Scholes Greeks', 'IV surface visualiser', 'Spread builder (4-leg)', 'Unusual activity scanner'] },
    { icon: Code2, title: 'Algo & API Access', items: ['REST API + WebSocket', 'FIX 4.4 / 5.0 support', 'Python & JS SDKs', 'Paper trading sandbox', 'Strategy backtester'] },
    { icon: Activity, title: 'Portfolio & Risk', items: ['Real-time P&L engine', 'Position beta exposure', 'VaR & stress testing', 'Margin dashboard', 'Tax lot management'] },
    { icon: Bell, title: 'Smart Alerts', items: ['Price-level alerts', 'Technical pattern triggers', 'Unusual volume alerts', 'News sentiment alerts', 'Push / SMS / Email delivery'] },
  ];

  const integrations = [
    { name: 'NYSE', desc: 'Direct Exchange' },
    { name: 'NASDAQ', desc: 'DMA Access' },
    { name: 'CBOE', desc: 'Options Routing' },
    { name: 'CME', desc: 'Futures & FX' },
    { name: 'LSE', desc: 'International' },
    { name: 'TradingView', desc: 'Chart Engine' },
    { name: 'Bloomberg', desc: 'News Feed' },
    { name: 'Reuters', desc: 'Market Data' },
    { name: 'Binance', desc: 'Crypto CFDs' },
    { name: 'Sumsub', desc: 'KYC/AML' },
  ];

  const testimonials = [
    {
      quote: "BrokerBros Web Terminal completely replaced our Bloomberg subscription for intraday equity trading. The Level II depth and VWAP order execution are institutional quality at a fraction of the cost.",
      name: "James Harrington",
      role: "Head of Equities, Meridian Capital",
      rating: 5,
    },
    {
      quote: "The options analytics suite is the best browser-based tool available. Real-time Greeks, IV surfaces, and the 4-leg spread builder all in one tab without downloading anything.",
      name: "Priya Mehta",
      role: "Derivatives Strategist, Quantum Alpha",
      rating: 5,
    },
    {
      quote: "We onboarded 40 traders to BrokerBros in 48 hours. The workspace persistence and SmartRouting meant our team was productive from day one. Zero PFOF is a deal-maker for us.",
      name: "Thomas Bauer",
      role: "CTO, TradeDesk Europe",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: 'Is there any software to download?',
      a: 'None. The BrokerBros Web Terminal runs entirely in your browser using HTML5 and WebSocket technology. It works on Chrome, Firefox, Safari, and Edge across Windows, macOS, and Linux with no plugins required.',
    },
    {
      q: 'What Level II data is included?',
      a: 'All active accounts receive free streaming NASDAQ ITCH (full order book) and NYSE ArcaBook data. This includes complete bid/ask depth from 150+ lit venues plus consolidated Time & Sales tape with large-print alerts.',
    },
    {
      q: 'Can I use the API alongside the web terminal simultaneously?',
      a: 'Yes. Your REST API and WebSocket connections share the same account and positions as the web terminal. You can monitor algo execution in the terminal UI while your robot trades via the API.',
    },
    {
      q: 'What happens to my workspace layout if I log in from a different device?',
      a: 'Your watchlists, chart templates, indicator settings, workspace layouts, and alert configurations are stored in the cloud and sync instantly when you log in from any device.',
    },
    {
      q: 'Do you support extended-hours trading?',
      a: 'Yes. Pre-market trading is available from 4:00 AM ET and after-hours trading runs until 8:00 PM ET. Full order routing and real-time Level II quotes are available throughout both extended sessions.',
    },
    {
      q: 'Is there a minimum account balance to access all features?',
      a: 'No minimum balance is required. All accounts regardless of size receive access to the full web terminal including Level II data, 28+ order types, options analytics, and the strategy backtester.',
    },
  ];

  const plans = [
    {
      name: 'Starter',
      price: activePlan === 'annual' ? '$0' : '$0',
      period: '/ month',
      desc: 'For individual retail traders getting started.',
      features: ['Full web terminal access', '50+ indicators', 'Market & limit orders', 'Real-time L1 quotes', 'Basic alerts (5 active)', '5 saved workspaces'],
      cta: 'Open Free Account',
      highlight: false,
    },
    {
      name: 'Professional',
      price: activePlan === 'annual' ? '$29' : '$39',
      period: '/ month',
      desc: 'For active traders who need institutional tools.',
      features: ['Everything in Starter', 'Level II full order book', '100+ indicators + Pine Script', '28 algo order types', 'Options Greeks suite', 'Unlimited alerts & workspaces', 'API access (REST + WebSocket)', 'Priority execution routing'],
      cta: 'Start Pro Trial',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'For institutional desks and broker-dealers.',
      features: ['Everything in Professional', 'FIX 4.4 / 5.0 Protocol', 'Co-located NY4 / LD4 servers', 'Portfolio Margin (SPAN)', 'Multi-user sub-accounts', 'Dedicated account manager', 'SLA uptime guarantee', 'White-label options'],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  const workflowSteps = [
    { step: '01', title: 'Create Account', desc: 'Instant onboarding. No downloads. Verify identity in under 3 minutes via Sumsub KYC.', icon: Users },
    { step: '02', title: 'Fund & Set Up', desc: 'Fund via bank wire, ACH, or card. Configure your workspace, watchlists, and risk parameters.', icon: Settings },
    { step: '03', title: 'Build Your Workspace', desc: 'Arrange charts, order books, scanners, and alerts exactly how your strategy demands.', icon: Layout },
    { step: '04', title: 'Connect Your Algos', desc: 'Link your trading robot via REST API or FIX Protocol. Test in paper trading sandbox first.', icon: Code2 },
    { step: '05', title: 'Trade Live', desc: 'Execute with sub-millisecond order routing across 150+ exchanges. Monitor in real time.', icon: TrendingUp },
  ];

  const stats = [
    { value: '150+', label: 'Global Exchanges Connected', sub: 'NYSE, NASDAQ, LSE, CME, CBOE & more' },
    { value: '<1ms', label: 'Average Order Latency', sub: 'Co-located NY4 & LD4 data centres' },
    { value: '28+', label: 'Order Types Supported', sub: 'From market to 4-leg algo combos' },
    { value: '99.99%', label: 'Platform Uptime SLA', sub: 'Zero planned downtime deployments' },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">

      {/* ═══════════════════════════════════════
          1. HERO — WEB TRADING TERMINAL
      ═══════════════════════════════════════ */}
      <section className="relative bg-white min-h-[88vh] py-16 lg:py-24 border-b border-slate-100 overflow-hidden flex flex-col justify-center items-center font-sans">
        {/* Ambient glow */}
        <div className="absolute top-0 -right-16 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="hidden lg:block absolute bottom-12 right-12 w-48 h-48 rounded-full border border-emerald-400/30 pointer-events-none" />
        <div className="hidden lg:block absolute top-24 left-16 w-16 h-16 rounded-full border border-emerald-400/30 pointer-events-none" />
        {/* Dot grids */}
        <div className="hidden md:block absolute top-12 left-12 opacity-25 pointer-events-none">
          <div className="grid grid-cols-6 gap-2.5">
            {Array.from({ length: 30 }).map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-600" />)}
          </div>
        </div>
        <div className="hidden md:block absolute bottom-16 right-16 opacity-25 pointer-events-none">
          <div className="grid grid-cols-6 gap-2.5">
            {Array.from({ length: 30 }).map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-600" />)}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 w-full flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-600 tracking-wider uppercase font-mono shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>INSTITUTIONAL-GRADE BROWSER TERMINAL</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1] max-w-3xl">
            Trade Like a Pro.{' '}
            <span className="text-emerald-600">From Any Browser.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Full Level II order book, real-time options Greeks, 28+ advanced order types,
            and sub-millisecond execution — all in your browser. Zero downloads. Zero PFOF.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenAccount}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-md shadow-emerald-600/20 transition-all text-sm cursor-pointer"
            >
              <span>Open Free Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenAccount}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold rounded-lg transition-all text-sm cursor-pointer"
            >
              <Play className="w-4 h-4" />
              <span>Try Demo Terminal</span>
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            {['No credit card', 'Zero PFOF', 'Free Level II data', 'Cancel anytime'].map((label) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-slate-500">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                {label}
              </div>
            ))}
          </div>

          {/* Exchange logo strip */}
          <div className="w-full max-w-4xl pt-4">
            <div className="bg-white border border-slate-200/80 rounded-xl p-3 sm:p-4 shadow-sm">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center mb-3">Connected to</div>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {[
                  { name: 'NYSE', icon: TrendingUp },
                  { name: 'NASDAQ', icon: BarChart2 },
                  { name: 'CME', icon: Globe },
                  { name: 'CBOE', icon: Activity },
                  { name: 'LSE', icon: Building2 },
                  { name: 'Binance', icon: Zap },
                ].map((brand) => (
                  <div key={brand.name} className="flex items-center gap-1.5 font-black text-slate-700 text-[11px] tracking-wider">
                    <brand.icon className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{brand.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. STATS BAR + FEATURES MARQUEE
      ═══════════════════════════════════════ */}
      <section className="py-14 bg-gradient-to-b from-emerald-50/60 via-emerald-50/30 to-white border-b border-slate-100/80 font-sans overflow-hidden">
        <div className="space-y-10">

          {/* Stats bar */}
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">{s.value}</div>
                <div className="text-xs font-semibold text-slate-700">{s.label}</div>
                <div className="text-[10px] text-slate-400 font-normal">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 max-w-6xl mx-auto px-4">
            <div className="w-16 sm:w-24 h-px bg-emerald-300/60" />
            <span className="text-emerald-700 font-bold text-sm font-sans tracking-tight">
              Platform Features
            </span>
            <div className="w-16 sm:w-24 h-px bg-emerald-300/60" />
          </div>

          {/* Marquee */}
          <div className="relative w-full overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-emerald-50/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-emerald-50/80 to-transparent z-10 pointer-events-none" />
            <div className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused] py-2">
              {[...features, ...features].map((card, i) => (
                <div
                  key={i}
                  className="w-[320px] sm:w-[360px] bg-white/90 backdrop-blur-sm border border-emerald-100/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex items-start gap-4 flex-shrink-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-6 h-6 text-emerald-600 stroke-[1.75]" />
                  </div>
                  <div className="space-y-1 pt-0.5">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-900 text-sm">{card.title}</h3>
                      <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded-full">{card.badge}</span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed font-normal">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. LIVE PLATFORM SHOWCASE
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-slate-100 font-sans relative overflow-hidden">
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 -right-20 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — copy */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-600 uppercase tracking-wider font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>LIVE PLATFORM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
                See exactly what<br />you're trading with.
              </h2>

              <p className="text-slate-500 text-base leading-relaxed max-w-lg">
                Full order book visibility, real-time Greeks, portfolio P&L, and execution quality metrics — all on one screen, in real time.
              </p>

              <ul className="space-y-3">
                {[
                  { icon: Eye, text: 'Complete bid/ask depth from 150+ lit venues and dark pools' },
                  { icon: Activity, text: 'Real-time options Greeks and IV surface visualiser' },
                  { icon: TrendingUp, text: 'Live P&L with position beta and VaR calculations' },
                  { icon: Zap, text: 'Sub-millisecond order routing with execution quality reports' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-600 text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all text-sm shadow-md shadow-emerald-600/20"
              >
                Open Free Account <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right — MockDashboard + floating notification cards */}
            <div className="relative flex justify-center">
              <div className="w-full max-w-xl">
                <MockDashboard />
              </div>

              {/* Alert card */}
              <div className="absolute -top-4 -left-4 bg-white border border-slate-100 rounded-2xl p-3.5 shadow-xl w-52 flex items-center gap-3 hidden lg:flex">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                  <Bell className="w-5 h-5 text-amber-600 stroke-[2.25]" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xs">Alert Triggered</div>
                  <div className="text-[10px] text-slate-500">NVDA crossed $130.00</div>
                  <div className="text-[10px] text-emerald-600 font-semibold">+2.3% in 4H session</div>
                </div>
              </div>

              {/* Order executed card */}
              <div className="absolute top-1/2 -right-4 bg-white border border-slate-100 rounded-2xl p-3.5 shadow-xl w-52 flex items-center gap-3 hidden lg:flex">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 stroke-[2.25]" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xs">Order Executed</div>
                  <div className="text-[10px] text-slate-500">TSLA VWAP Buy · 200 shares</div>
                  <div className="text-[10px] text-emerald-600 font-semibold">@ $218.75 avg fill</div>
                </div>
              </div>

              {/* P&L card */}
              <div className="absolute -bottom-4 left-4 bg-white border border-slate-100 rounded-2xl p-3.5 shadow-xl w-48 flex items-center gap-3 hidden lg:flex">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-emerald-600 stroke-[2.25]" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xs">Today's P&L</div>
                  <div className="text-emerald-600 font-extrabold text-sm">+$4,218</div>
                  <div className="text-[10px] text-slate-400">+3.8%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. TERMINAL MODULES
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-600 uppercase tracking-wider font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>TERMINAL MODULES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
              One terminal, every tool.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Six tightly integrated modules form a complete institutional trading environment — all running in your browser.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <div
                key={i}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 space-y-4 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100/60 transition-colors">
                    <mod.icon className="w-5 h-5 text-emerald-600 stroke-[1.75]" />
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

      {/* ═══════════════════════════════════════
          5. GETTING STARTED — LIVE IN 5 STEPS
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-600 uppercase tracking-wider font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>GETTING STARTED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Live in 5 steps.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              From account creation to live trading in under 10 minutes. No paperwork, no waiting rooms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            {workflowSteps.map((step, idx, arr) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3 relative group">
                <div className="relative flex items-center justify-center">
                  <div className="absolute -top-1 font-mono text-[10px] font-bold text-white bg-emerald-600 w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-20">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:border-emerald-400 group-hover:shadow-md transition-all z-10">
                    <step.icon className="w-7 h-7 text-emerald-600 stroke-[1.75]" />
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-6 h-6 rounded-full bg-emerald-600 text-white">
                      <ChevronRight className="w-4 h-4 stroke-[3]" />
                    </div>
                  )}
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

      {/* ═══════════════════════════════════════
          6. SEAMLESS INTEGRATIONS
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100 font-sans relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-600 uppercase tracking-wider font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>SEAMLESS INTEGRATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Plugged into every market.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Direct connections to primary exchanges, data providers, and financial infrastructure partners.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              { name: 'NYSE', label: 'NYSE', sub: 'Direct Exchange', icon: TrendingUp },
              { name: 'NASDAQ', label: 'NASDAQ', sub: 'DMA Access', icon: BarChart2 },
              { name: 'CBOE', label: 'CBOE', sub: 'Options Routing', icon: Activity },
              { name: 'CME', label: 'CME', sub: 'Futures & FX', icon: Globe },
              { name: 'LSE', label: 'LSE', sub: 'International', icon: Building2 },
              { name: 'TradingView', label: 'TradingView', sub: 'Chart Engine', icon: LineChart },
              { name: 'Bloomberg', label: 'Bloomberg', sub: 'News Feed', icon: FileText },
              { name: 'Reuters', label: 'Reuters', sub: 'Market Data', icon: Wifi },
              { name: 'Binance', label: 'Binance', sub: 'Crypto CFDs', icon: Zap },
              { name: 'Sumsub', label: 'Sumsub', sub: 'KYC / AML', icon: ShieldCheck },
            ].map((intg, i) => (
              <div
                key={i}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center space-y-2 group min-h-[120px]"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <intg.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="font-bold text-slate-800 text-xs">{intg.label}</span>
                <span className="text-[10px] text-slate-400">{intg.sub}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-16 sm:w-32 h-px bg-slate-200" />
            <div className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>150+ exchanges connected globally</span>
            </div>
            <div className="w-16 sm:w-32 h-px bg-slate-200" />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          Security & Compliance Strip
      ═══════════════════════════════════════ */}
      <section className="py-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-xs text-slate-400 font-medium uppercase tracking-widest mr-4">Security & Compliance</span>
            {['AWS', 'Cloudflare', 'SSL / TLS 1.3', 'GDPR', 'PCI DSS', 'SOC 2 Type II', 'FINRA', 'SEC'].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-[#F8F9FA] border-b border-slate-100 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-600 uppercase tracking-wider font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
              What Our Clients Say
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              Trusted by serious traders worldwide to power their market strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-emerald-500 font-serif font-black leading-none" style={{ fontSize: '3rem', lineHeight: 1 }}>&ldquo;</span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#EAB308">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">{t.quote}</p>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>

          <div className="border-t border-slate-200 mb-8" />

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">TRUSTED BY SERIOUS TRADERS</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { abbr: '//', name: 'Meridian Capital' },
                { abbr: 'Q', name: 'Quantum Alpha' },
                { abbr: 'T', name: 'TradeDesk Europe' },
                { abbr: 'A', name: 'Apex Strategies' },
                { abbr: 'V', name: 'Vega Partners' },
              ].map((brand, i) => (
                <div key={i} className="flex items-center gap-1.5 text-slate-600">
                  <span className="font-black text-base text-slate-800">{brand.abbr}</span>
                  <span className="font-bold text-sm text-slate-600 tracking-wide">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. FAQ
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-600 uppercase tracking-wider font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>FAQ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">Frequently asked questions.</h2>
              <p className="text-slate-500 text-sm leading-relaxed">Can't find the answer you're looking for? Reach out to our support team directly.</p>
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-600 transition-colors"
              >
                Contact Support <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="lg:col-span-3 space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-[14px] overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-slate-900 text-sm pr-4">{faq.q}</span>
                    {activeFaq === i
                      ? <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    }
                  </button>
                  {activeFaq === i && (
                    <div className="px-5 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-200 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          9. PRICING PLANS
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-[#F8F9FA] border-b border-slate-100 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-600 uppercase tracking-wider font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>PRICING PLANS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Simple, Transparent Pricing
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              Start free. Upgrade when you need more.<br />No hidden fees, no PFOF, no surprises.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-3 pt-3">
              <span className={`text-sm font-medium transition-colors ${activePlan === 'monthly' ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
              <button
                onClick={() => setActivePlan(activePlan === 'monthly' ? 'annual' : 'monthly')}
                className="relative w-12 h-6 rounded-full bg-slate-900 transition-all focus:outline-none"
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all ${activePlan === 'annual' ? 'left-6' : 'left-0.5'}`} />
              </button>
              <span className={`text-sm font-medium transition-colors ${activePlan === 'annual' ? 'text-slate-900' : 'text-slate-400'}`}>
                Annual <span className="text-emerald-600 font-bold">(Save 25%)</span>
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 items-stretch">

            {/* Starter */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-base">Starter</div>
                  <div className="text-slate-400 text-xs">For individual retail traders</div>
                </div>
              </div>
              <div className="mb-5">
                <span className="text-4xl font-black text-slate-950">$0</span>
                <span className="text-slate-400 text-sm ml-1">/ month</span>
              </div>
              <ul className="space-y-2.5 flex-1 mb-6">
                {['Full web terminal access', '50+ indicators', 'Market & limit orders', 'Real-time L1 quotes', 'Basic alerts (5 active)', '5 saved workspaces'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={onOpenAccount}
                className="w-full py-3 rounded-xl border border-slate-300 text-slate-900 font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                Open Free Account <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Professional — Most Popular */}
            <div className="rounded-2xl overflow-hidden flex flex-col shadow-xl" style={{ background: '#0D1117' }}>
              <div className="bg-slate-800 text-white text-center text-[10px] font-bold py-2 tracking-widest uppercase">
                MOST POPULAR
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-600/20 border border-emerald-600/30 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">Professional</div>
                    <div className="text-slate-400 text-xs">For active traders</div>
                  </div>
                </div>
                <div className="mb-5">
                  <span className="text-4xl font-black text-emerald-400">{activePlan === 'annual' ? '$29' : '$39'}</span>
                  <span className="text-slate-400 text-sm ml-1">/ month</span>
                </div>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {['Everything in Starter', 'Level II full order book', '100+ indicators + Pine Script', '28 algo order types', 'Options Greeks suite', 'Unlimited alerts & workspaces', 'API access (REST + WebSocket)', 'Priority execution routing'].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onOpenAccount}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  Start Pro Trial <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-base">Enterprise</div>
                  <div className="text-slate-400 text-xs">For institutional desks</div>
                </div>
              </div>
              <div className="mb-5">
                <span className="text-4xl font-black text-slate-950">Custom</span>
              </div>
              <ul className="space-y-2.5 flex-1 mb-6">
                {['Everything in Professional', 'FIX 4.4 / 5.0 Protocol', 'Co-located NY4 / LD4 servers', 'Portfolio Margin (SPAN)', 'Multi-user sub-accounts', 'Dedicated account manager', 'SLA uptime guarantee', 'White-label options'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={onOpenAccount}
                className="w-full py-3 rounded-xl border border-slate-300 text-slate-900 font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                Contact Sales <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Custom plan banner */}
          <div className="rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 mb-8" style={{ background: '#0D1117' }}>
            <div className="absolute right-0 bottom-0 w-48 h-48 opacity-10 pointer-events-none">
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="#22c55e" strokeWidth="1">
                <path d="M10,100 Q55,10 100,100 Q145,190 190,100" />
                <path d="M10,120 Q55,30 100,120 Q145,210 190,120" />
                <path d="M10,80 Q55,-10 100,80 Q145,170 190,80" />
              </svg>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-900/60 border border-emerald-700/40 flex items-center justify-center flex-shrink-0">
                <Headphones className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Need a Custom Plan?</h3>
                <p className="text-slate-400 text-sm">For institutional desks, broker-dealers, or prop firms with specific requirements.</p>
              </div>
            </div>
            <button
              onClick={onOpenAccount}
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all text-sm"
            >
              Talk to Sales <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-2">
            {[
              { icon: ShieldCheck, label: 'No Setup Fees' },
              { icon: Lock, label: 'Zero PFOF' },
              { icon: RefreshCw, label: 'Cancel Anytime' },
              { icon: Headphones, label: '24/7 Support' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-slate-500 text-sm">
                <Icon className="w-4 h-4 text-slate-400" />
                <span>{label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          10. FINAL CTA
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-[#F8F9FA] font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-600 uppercase tracking-wider font-mono">
              <Zap className="w-3 h-3" />
              <span>GET STARTED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Start trading with{' '}
              <span className="text-emerald-600">institutional tools</span> today.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              Open a free account in 3 minutes. No downloads. No minimums.<br />Full Level II access from day one.
            </p>
          </div>

          {/* 4 feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Zap, title: 'Instant Setup', desc: 'Live in under 10 minutes. No software to install or configure.' },
              { icon: ShieldCheck, title: 'Secure & Regulated', desc: 'FINRA/SIPC member. Bank-level security and data encryption.' },
              { icon: Monitor, title: 'Any Device', desc: 'Works on Chrome, Firefox, Safari across desktop, tablet, and mobile.' },
              { icon: Headphones, title: '24/7 Support', desc: 'Our expert trading desk is always here to help you succeed.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md transition-all duration-200">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-emerald-600 stroke-[1.75]" />
                </div>
                <div className="font-bold text-slate-900 text-sm mb-2">{title}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>

          {/* Dark CTA banner */}
          <div className="rounded-2xl p-7 sm:p-10 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6" style={{ background: '#0D1117' }}>
            <div className="absolute right-0 bottom-0 w-48 h-48 opacity-10 pointer-events-none">
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="#22c55e" strokeWidth="1">
                <path d="M10,100 Q55,10 100,100 Q145,190 190,100" />
                <path d="M10,120 Q55,30 100,120 Q145,210 190,120" />
                <path d="M10,80 Q55,-10 100,80 Q145,170 190,80" />
              </svg>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-900/60 border border-emerald-700/40 flex items-center justify-center flex-shrink-0">
                <Terminal className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Open Your Free Trading Account <span className="text-emerald-400">Today.</span></h3>
                <p className="text-slate-400 text-sm">No credit card required. Full Level II access. No downloads. Start in minutes.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all text-sm"
              >
                Open Free Account <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all text-sm"
              >
                Talk to Sales <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          RISK DISCLAIMER (Compliance Required)
      ═══════════════════════════════════════ */}
      <div className="py-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-400 leading-relaxed text-center max-w-4xl mx-auto">
            <span className="font-semibold text-slate-500">Risk Disclaimer:</span> Trading CFDs, Forex, stocks, and other financial instruments involves substantial risk and may not be suitable for all investors. You may lose some or all of your invested capital. Leverage can work against you. Past performance is not indicative of future results. Please ensure you fully understand the risks involved and seek independent financial advice if necessary. BrokerBros LLC is a member of FINRA/SIPC. Securities are protected up to $500,000 (including $250,000 for cash claims) through SIPC.
          </p>
        </div>
      </div>

      {/* Universal Footer is rendered by global App layout */}

    </div>
  );
};
