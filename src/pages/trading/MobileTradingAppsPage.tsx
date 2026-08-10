import React, { useState } from 'react';
import {
  ArrowRight, Smartphone, ShieldCheck, CheckCircle2, Zap, BarChart2, Bell, RefreshCw,
  Fingerprint, Globe, Check, ExternalLink, ChevronDown, ChevronUp, ChevronRight, TrendingUp,
  Lock, Activity, Wifi, Layout, Database, Code2, Headphones, Play, Megaphone, FileText,
  UserPlus, FileCheck, Wallet, CandlestickChart, PieChart, Star, Building2, Apple, PlaySquare, BarChart3
} from 'lucide-react';

interface PageProps {
  onOpenAccount: () => void;
}

const MockMobileScreen = () => (
  <div className="bg-slate-950 border-[6px] border-slate-800 rounded-[32px] shadow-2xl overflow-hidden text-xs font-sans w-full max-w-[320px] mx-auto">
    <div className="bg-slate-950 px-5 py-2 flex items-center justify-between border-b border-slate-800/60">
      <span className="text-[10px] text-slate-400 font-mono font-bold">9:41 AM</span>
      <div className="flex items-center gap-1.5">
        <Wifi className="w-3 h-3 text-emerald-400" />
        <div className="w-3 h-2 bg-emerald-500 rounded-xs" />
      </div>
    </div>

    <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs font-mono">B</div>
        <span className="text-white font-bold text-xs">BrokerBros Mobile</span>
      </div>
      <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-emerald-400 font-mono text-[9px] font-bold">LIVE</span>
      </div>
    </div>

    <div className="p-3 bg-slate-950 space-y-2">
      <div className="flex justify-between items-baseline">
        <div>
          <span className="text-white font-bold text-sm font-mono">AAPL</span>
          <span className="text-slate-400 text-[10px] ml-2">Apple Inc.</span>
        </div>
        <span className="text-emerald-400 font-mono font-black text-sm">$224.38</span>
      </div>

      <div className="h-28 bg-slate-900/80 rounded-xl p-2 relative overflow-hidden border border-slate-800">
        <svg viewBox="0 0 280 90" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mobGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,70 L30,50 L70,60 L110,35 L150,45 L190,20 L230,30 L280,10 L280,90 L0,90 Z" fill="url(#mobGrad)" />
          <path d="M0,70 L30,50 L70,60 L110,35 L150,45 L190,20 L230,30 L280,10" fill="none" stroke="#10b981" strokeWidth="2" />
        </svg>
        <div className="absolute top-2 right-2 bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[9px] font-mono font-bold">+1.84 (+0.82%)</div>
      </div>
    </div>

    <div className="p-3 bg-slate-900 border-t border-slate-800 space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <button className="bg-emerald-600 py-2 rounded-lg text-white font-bold text-xs flex items-center justify-center gap-1">
          BUY <span className="font-mono text-[10px] opacity-80">224.38</span>
        </button>
        <button className="bg-red-600 py-2 rounded-lg text-white font-bold text-xs flex items-center justify-center gap-1">
          SELL <span className="font-mono text-[10px] opacity-80">224.32</span>
        </button>
      </div>
    </div>
  </div>
);

export const MobileTradingAppsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePlan, setActivePlan] = useState<'monthly' | 'annual'>('annual');

  const stats = [
    { value: '4.9 ★', label: 'App Store Rating', sub: 'From 12,000+ reviews' },
    { value: '<1ms', label: 'Order Execution Latency', sub: 'Direct mobile ECN gateway' },
    { value: '100%', label: 'Cloud Workspace Sync', sub: 'Web, desktop & mobile in sync' },
    { value: '256-bit', label: 'Biometric Encryption', sub: 'Face ID & Touch ID secured' },
  ];

  const features = [
    { icon: Smartphone, title: 'Native iOS & Android Apps', desc: 'Custom built in Swift and Kotlin for zero-lag mobile charting and instant execution.', badge: 'Native Tech' },
    { icon: BarChart2, title: 'Interactive Mobile Charts', desc: 'TradingView powered mobile engine with 80+ technical indicators and touch drawing.', badge: '80+ Indicators' },
    { icon: Bell, title: 'Smart Push Alerts', desc: 'Real-time price breakout, pattern match, and execution notifications delivered instantly.', badge: 'Sub-Sec Alerts' },
    { icon: Fingerprint, title: 'Biometric Face ID Security', desc: 'Bank-grade login security with optional hardware key 2FA and app PIN lock.', badge: 'Face ID / Touch ID' },
    { icon: RefreshCw, title: 'Instant Cloud Synchronization', desc: 'Changes to watchlists, alerts, and open positions reflect across all devices.', badge: 'Real-Time Sync' },
    { icon: Zap, title: 'One-Tap Execution', desc: 'Pre-configure order presets for lightning fast market, limit, and stop entries.', badge: '1-Tap Trades' },
  ];

  const modules = [
    { icon: BarChart3, title: 'Mobile Charting', items: ['80+ indicators', 'Pinch & zoom gestures', 'Multi-timeframe mode', 'Custom chart themes', 'Crosshair overlay'] },
    { icon: Bell, title: 'Alert Center', items: ['Price level triggers', 'Volatility spikes', 'Economic calendar alerts', 'Order fill notifications', 'Push & SMS delivery'] },
    { icon: Activity, title: 'Mobile Options Suite', items: ['Live options chains', 'Real-time Greeks', 'Spread order builder', 'IV rank scanner', 'Option P&L preview'] },
    { icon: Wallet, title: 'Instant Funding', items: ['Apple Pay & Google Pay', 'Bank ACH & Wire', 'Crypto wallet deposit', 'Instant internal transfer', 'Withdrawal tracking'] },
    { icon: ShieldCheck, title: 'Biometric Security', items: ['Face ID / Touch ID', '2FA Authenticator', 'Session lock timer', 'IP whitelist option', 'Device management'] },
    { icon: RefreshCw, title: 'Cloud Sync Engine', items: ['Synced watchlists', 'Shared chart templates', 'Cross-device positions', 'Saved alert rules', 'Unified P&L tracking'] },
  ];

  const workflowSteps = [
    { step: '01', title: 'Download App', desc: 'Get BrokerBros Mobile on iOS App Store or Google Play Store.', icon: Smartphone },
    { step: '02', title: 'Biometric Setup', desc: 'Enable Face ID or Touch ID for frictionless and secure access.', icon: Fingerprint },
    { step: '03', title: 'Fund Account', desc: 'Deposit funds instantly via Apple Pay, ACH, wire, or crypto.', icon: Wallet },
    { step: '04', title: 'Customize Layout', desc: 'Set up watchlists, chart indicators, and quick-order presets.', icon: Layout },
    { step: '05', title: 'Trade Anywhere', desc: 'Execute orders with sub-second latency from anywhere in the world.', icon: TrendingUp },
  ];

  const faqs = [
    { q: 'Is the mobile app free to download?', a: 'Yes! The BrokerBros Mobile app is completely free to download from both the Apple App Store and Google Play Store with no hidden subscription fees.' },
    { q: 'Are my watchlists synced between Web Terminal and Mobile?', a: 'Yes. Watchlists, open orders, positions, and alert rules synchronize instantly across Web, Desktop, and Mobile via our high-speed cloud engine.' },
    { q: 'Can I trade options on the mobile app?', a: 'Absolutely. The mobile app includes a full options suite with live chains, Greeks visualization, and spread order placement.' },
    { q: 'What security measures protect mobile trading?', a: 'We use 256-bit SSL encryption, mandatory biometric authentication (Face ID / Touch ID), 2FA, and automatic session lockouts.' },
  ];

  const testimonials = [
    { quote: "Trading on mobile used to feel restrictive, but BrokerBros Mobile gives me full Level II depth and instant execution right on my phone.", name: "Marcus Vance", role: "FX Trader", rating: 5 },
    { quote: "The option chain module on iPhone is smooth and intuitive. Building 4-leg spreads while on the go has never been easier.", name: "Elena Rostova", role: "Options Specialist", rating: 5 },
    { quote: "Push alerts fire faster than any other app I've used. I haven't missed a market breakout since switching to BrokerBros Mobile.", name: "David Kim", role: "Day Trader", rating: 5 },
  ];

  const plans = [
    { name: 'Starter', price: '$0', period: '/ month', desc: 'For mobile retail traders', features: ['Full mobile app access', '50+ indicators', 'Real-time quotes', 'Push price alerts', 'Biometric login'], cta: 'Open Free Account', highlight: false },
    { name: 'Professional', price: activePlan === 'annual' ? '$29' : '$39', period: '/ month', desc: 'For active mobile pros', features: ['Everything in Starter', 'Level II mobile book', '80+ indicators', 'Options Greeks suite', 'Unlimited push alerts', 'Cloud workspace sync'], cta: 'Start Pro Trial', highlight: true },
    { name: 'Enterprise', price: 'Custom', period: '', desc: 'For institutional teams', features: ['Everything in Pro', 'Custom mobile build', 'Dedicated FIX gateway', 'Sub-account management', 'VIP support desk'], cta: 'Contact Sales', highlight: false },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <section className="relative bg-white min-h-[85vh] py-16 lg:py-24 border-b border-slate-100 overflow-hidden flex flex-col justify-center items-center font-sans">
        <div className="absolute top-0 -right-16 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 w-full flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-600 tracking-wider uppercase font-mono shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>NATIVE MOBILE TRADING APPS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1] max-w-3xl">
            Institutional Power.{' '}
            <span className="text-emerald-600">In Your Pocket.</span>
          </h1>

          <p className="text-slate-500 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Full-featured iOS and Android apps built for high-performance trading.
            Execute complex orders, monitor Greeks, receive instant alerts, and sync seamlessly with your workstation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button onClick={onOpenAccount} className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-md shadow-emerald-600/20 transition-all text-sm cursor-pointer">
              <span>Open Free Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={onOpenAccount} className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold rounded-lg transition-all text-sm cursor-pointer">
              <Smartphone className="w-4 h-4" />
              <span>Download Mobile App</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            {['iOS & Android', 'Face ID / Touch ID', 'Zero Lag', 'Instant Cloud Sync'].map((label) => (
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
            <span className="text-emerald-700 font-bold text-sm font-sans tracking-tight">Mobile Features</span>
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
                <span>MOBILE TRADING EXPERIENCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
                Trading on the go,<br />without compromise.
              </h2>
              <p className="text-slate-500 text-base leading-relaxed max-w-lg">
                Manage your portfolio, view full depth order books, and place complex multi-leg options strategies anywhere you go.
              </p>
              <ul className="space-y-3">
                {[
                  { icon: Zap, text: 'One-tap order entry with pre-configured risk parameters' },
                  { icon: Bell, text: 'Instant push alerts for price levels and technical patterns' },
                  { icon: Fingerprint, text: 'Biometric Face ID authentication for safe and instant access' },
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
                Download Mobile App <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative flex justify-center">
              <MockMobileScreen />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50/50 border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">Mobile App Suite</h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">Six powerful modules built specifically for high-speed iOS and Android performance.</p>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">Mobile Setup in 5 Steps</h2>
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

      <section className="py-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs text-slate-400 font-medium uppercase tracking-widest">Supported Ecosystems</div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['iOS App Store', 'Google Play Store', 'Face ID', 'Touch ID', 'Apple Pay', 'Google Pay', '256-Bit SSL'].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA] border-b border-slate-100 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950">Trader Feedback</h2>
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
          <h2 className="text-3xl font-black text-slate-950">Mobile FAQ</h2>
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
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950">Transparent Mobile Plans</h2>
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
          <h2 className="text-3xl sm:text-4xl font-black">Trade Anywhere With BrokerBros Mobile</h2>
          <button onClick={onOpenAccount} className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-all inline-flex items-center gap-2">
            Get Started Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <div className="py-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 text-xs text-slate-400 text-center">
          <span className="font-semibold text-slate-500">Risk Disclaimer:</span> Mobile trading involves substantial risk. Market conditions and network latency may affect execution. BrokerBros LLC is member FINRA/SIPC.
        </div>
      </div>
    </div>
  );
};
