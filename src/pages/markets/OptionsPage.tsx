import React, { useState } from 'react';
import {
  ArrowRight, Activity, Zap, ShieldCheck, CheckCircle2, TrendingUp, Check,
  ChevronDown, ChevronUp, ExternalLink, Globe, Layers, PieChart, Clock, Lock,
  RefreshCw, Headphones, FileText, Search, Sliders, Layout, BarChart3, CandlestickChart,
  Eye, Gauge, Scale, Percent
} from 'lucide-react';

interface OptionsPageProps {
  onOpenAccount: () => void;
}

const MockOptionsChain = () => (
  <div className="bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-xs font-mono w-full max-w-lg mx-auto">
    <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
      <div className="flex items-center gap-2">
        <span className="text-white font-bold text-xs font-sans">AAPL OPTIONS CHAIN (EXP: 16 AUG)</span>
      </div>
      <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] text-emerald-400 font-bold">
        IV: 28.4% (HV: 22.1%)
      </div>
    </div>
    <div className="p-3 bg-slate-950 space-y-1.5 text-[10px]">
      <div className="grid grid-cols-7 text-slate-500 font-bold pb-1 border-b border-slate-800 text-center">
        <span>CALL ASK</span>
        <span>DELTA</span>
        <span>IV</span>
        <span className="text-emerald-400 font-sans">STRIKE</span>
        <span>IV</span>
        <span>DELTA</span>
        <span>PUT ASK</span>
      </div>
      {[
        { call: '$5.40', cDelta: '0.68', iv: '27.2%', strike: '$220.00', pIv: '28.1%', pDelta: '-0.32', put: '$1.05' },
        { call: '$2.85', cDelta: '0.52', iv: '28.0%', strike: '$225.00', pIv: '28.4%', pDelta: '-0.48', put: '$3.40' },
        { call: '$1.20', cDelta: '0.34', iv: '29.1%', strike: '$230.00', pIv: '29.5%', pDelta: '-0.66', put: '$6.80' },
        { call: '$0.45', cDelta: '0.18', iv: '31.4%', strike: '$235.00', pIv: '31.8%', pDelta: '-0.82', put: '$11.10' },
      ].map((row, i) => (
        <div key={i} className={`grid grid-cols-7 py-1.5 px-1 rounded text-center items-center ${i === 1 ? 'bg-emerald-950/40 border border-emerald-800/60' : 'bg-slate-900/40'}`}>
          <span className="text-emerald-400 font-bold">{row.call}</span>
          <span className="text-slate-400">{row.cDelta}</span>
          <span className="text-slate-500">{row.iv}</span>
          <span className="text-white font-bold font-sans bg-slate-800 rounded py-0.5">{row.strike}</span>
          <span className="text-slate-500">{row.pIv}</span>
          <span className="text-slate-400">{row.pDelta}</span>
          <span className="text-red-400 font-bold">{row.put}</span>
        </div>
      ))}
    </div>
  </div>
);

export const OptionsPage: React.FC<OptionsPageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePlan, setActivePlan] = useState<'monthly' | 'annual'>('annual');

  const stats = [
    { value: 'Real-Time', label: 'Black-Scholes Greeks Engine', sub: 'Delta, Gamma, Theta, Vega & Rho' },
    { value: '4-Leg', label: 'Multi-Leg Spread Builder', sub: 'Iron condors, straddles & spreads' },
    { value: '0.0ms', label: 'IV Surface Calculation', sub: 'Real-time volatility skew maps' },
    { value: 'Unusual', label: 'Options Volume Scanner', sub: 'Institutional sweep & block alerts' },
  ];

  const features = [
    { icon: Activity, title: 'Live Options Chain Suite', desc: 'Real-time streaming bid/ask options matrix across all US equity and index options.', badge: 'Streaming Chains' },
    { icon: Gauge, title: 'Black-Scholes Greeks Engine', desc: 'Continuous calculation of Delta, Gamma, Theta, Vega, and Rho for single legs and multi-leg portfolios.', badge: 'Real-Time Greeks' },
    { icon: Layers, title: '4-Leg Spread Builder', desc: 'Build vertical spreads, iron condors, straddles, strangles, and custom 4-leg combos with one ticket.', badge: '4-Leg Spreads' },
    { icon: Scale, title: 'IV Surface & Skew Visualizer', desc: 'Map implied volatility surfaces across strike prices and expiration dates to locate mispriced skew.', badge: 'IV Surface' },
    { icon: Zap, title: 'Unusual Activity Scanner', desc: 'Detect large block trades, institutional sweeps, and unusual options volume spikes in real time.', badge: 'Unusual Volume' },
    { icon: Percent, title: 'Options Profit & Loss Matrix', desc: 'Interactive P&L graph showing breakeven points, max gain, max loss, and time decay simulation.', badge: 'P&L Graph' },
  ];

  const modules = [
    { icon: Activity, title: 'Options Chain Matrix', items: ['Streaming L2 bid & ask quotes', 'Adjustable expiration tabs', 'Custom column configuration', 'Single-click order creation', 'Filter by strike & delta'] },
    { icon: Gauge, title: 'Real-Time Options Greeks', items: ['Delta position exposure', 'Gamma acceleration risk', 'Theta daily time decay', 'Vega volatility sensitivity', 'Portfolio-level aggregate Greeks'] },
    { icon: Layers, title: 'Multi-Leg Order Ticket', items: ['Vertical & Horizontal spreads', 'Iron Condors & Butterflies', 'Straddles & Strangles', 'Custom 4-leg combo builder', 'Atomic fill execution'] },
    { icon: Scale, title: 'Implied Volatility Studio', items: ['IV Rank & Percentile index', 'Volatility skew 3D graph', 'Historical vs Implied Vol', 'Earnings IV crush model', 'Vol surface comparison'] },
    { icon: Zap, title: 'Unusual Options Scanner', items: ['Option sweep order alerts', 'Dark pool block trades', 'High IV percentile scanner', 'Put/Call ratio tracker', 'Large premium flow alert'] },
    { icon: Percent, title: 'Risk & Expiration Desk', items: ['Interactive payoff diagram', 'Breakeven price calculator', 'Pin risk & assignment alert', 'Automated roll options tool', 'Early exercise management'] },
  ];

  const workflowSteps = [
    { step: '01', title: 'Open Chain', desc: 'Search any ticker to pull live options chain.', icon: Activity },
    { step: '02', title: 'Inspect Greeks & IV', desc: 'Analyze Delta, Gamma, Theta, and IV skew.', icon: Gauge },
    { step: '03', title: 'Build Strategy', desc: 'Select legs for single, vertical, or 4-leg spread.', icon: Layers },
    { step: '04', title: 'Simulate Payoff', desc: 'View interactive P&L graph and breakeven point.', icon: Percent },
    { step: '05', title: 'Atomic Execution', desc: 'Route multi-leg order as single combo ticket.', icon: TrendingUp },
  ];

  const faqs = [
    { q: 'What multi-leg options strategies are supported?', a: 'We support single calls/puts, vertical spreads, calendar spreads, iron condors, butterflies, straddles, strangles, and custom 4-leg combos.' },
    { q: 'Are real-time Greeks included without additional fees?', a: 'Yes! Black-Scholes Greeks (Delta, Gamma, Theta, Vega) and real-time IV calculations are included free across all options chains.' },
    { q: 'How does multi-leg order execution work?', a: 'Multi-leg spread orders are routed to options exchanges as a single atomic package order to eliminate leg risk.' },
    { q: 'Can I trade options on mobile?', a: 'Yes. The BrokerBros Mobile app includes the complete options chain, Greeks display, and spread builder.' },
  ];

  const testimonials = [
    { quote: "The 4-leg spread builder and IV skew visualizer are as fast and precise as any institutional derivatives workstation.", name: "Priya Mehta", role: "Derivatives Strategist", rating: 5 },
    { quote: "Having real-time Greeks calculated at the portfolio level gives me total confidence in managing my theta decay positions.", name: "Julian Rossi", role: "Options Income Specialist", rating: 5 },
    { quote: "Unusual options flow alerts pop up in real time. I caught several major institutional sweeps thanks to the scanner.", name: "Derrick Hall", role: "Volatility Trader", rating: 5 },
  ];

  const plans = [
    { name: 'Starter', price: '$0', period: '/ month', desc: 'For retail options traders', features: ['Streaming options chains', 'Real-time basic Greeks', 'Single-leg option orders', 'Standard P&L payoff graph', 'Real-time L1 quotes'], cta: 'Open Free Account', highlight: false },
    { name: 'Options Pro', price: activePlan === 'annual' ? '$29' : '$39', period: '/ month', desc: 'For active options strategists', features: ['Everything in Starter', '4-leg spread order builder', 'Full Black-Scholes Greeks suite', 'IV surface & skew visualizer', 'Unusual options flow scanner', 'Portfolio-level aggregate Greeks'], cta: 'Start Pro Trial', highlight: true },
    { name: 'Enterprise Desk', price: 'Custom', period: '', desc: 'For market makers & funds', features: ['Everything in Options Pro', 'Dedicated FIX options routing', 'Portfolio margin (SPAN)', 'Sub-millisecond leg execution', 'Dedicated options desk support'], cta: 'Contact Sales', highlight: false },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <section className="relative bg-white min-h-[85vh] py-16 lg:py-24 border-b border-slate-100 overflow-hidden flex flex-col justify-center items-center font-sans">
        <div className="absolute top-0 -right-16 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 w-full flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-600 tracking-wider uppercase font-mono shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>INSTITUTIONAL OPTIONS & VOLATILITY SUITE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1] max-w-3xl">
            Live Options Chains.{' '}
            <span className="text-emerald-600">Real-Time Greeks.</span>
          </h1>

          <p className="text-slate-500 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Trade equity and index options with Black-Scholes Greeks, IV surface skews, 4-leg spread builders,
            and unusual options activity alerts.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button onClick={onOpenAccount} className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-md shadow-emerald-600/20 transition-all text-sm cursor-pointer">
              <span>Open Free Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={onOpenAccount} className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold rounded-lg transition-all text-sm cursor-pointer">
              <Activity className="w-4 h-4" />
              <span>Explore Options Suite</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            {['Live Chains', 'Real-Time Greeks', '4-Leg Spreads', 'Unusual Flow Scanner'].map((label) => (
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
            <span className="text-emerald-700 font-bold text-sm font-sans tracking-tight">Options Capabilities</span>
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
                <span>ADVANCED DERIVATIVES TERMINAL</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
                Options Analytics.<br />In Your Browser.
              </h2>
              <p className="text-slate-500 text-base leading-relaxed max-w-lg">
                View real-time Greeks, build multi-leg spreads, and track institutional options flow without downloading heavy software.
              </p>
              <ul className="space-y-3">
                {[
                  { icon: Activity, text: 'Streaming options chains with real-time bid/ask and IV skew' },
                  { icon: Gauge, text: 'Black-Scholes Greeks calculated live for single legs & portfolios' },
                  { icon: Layers, text: 'Atomic 4-leg order routing to eliminate single-leg execution risk' },
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
                Start Options Trading <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative flex justify-center">
              <MockOptionsChain />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50/50 border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">Options Analytics Modules</h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">Six powerful options modules for retail traders and quantitative derivatives desks.</p>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">Options Execution in 5 Steps</h2>
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
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950">Derivatives Testimonials</h2>
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
          <h2 className="text-3xl font-black text-slate-950">Options Trading FAQ</h2>
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
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950">Transparent Options Plans</h2>
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
          <h2 className="text-3xl sm:text-4xl font-black">Trade Options With Real-Time Greeks Today</h2>
          <button onClick={onOpenAccount} className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-all inline-flex items-center gap-2">
            Open Free Account <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <div className="py-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 text-xs text-slate-400 text-center">
          <span className="font-semibold text-slate-500">Risk Disclaimer:</span> Options trading involves significant risk and is not suitable for all investors. Prior to trading options, please read the Characteristics and Risks of Standardized Options (ODD). BrokerBros LLC is member FINRA/SIPC.
        </div>
      </div>
    </div>
  );
};
