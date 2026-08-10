import React, { useState } from 'react';
import {
  ArrowRight, TrendingUp, DollarSign, ShieldCheck, CheckCircle2, Zap, BarChart2, Check,
  ChevronDown, ChevronUp, ExternalLink, Globe, Building2, Layers, PieChart, Activity,
  Clock, Lock, RefreshCw, Headphones, FileText, Search, Filter, Sliders, Layout, BarChart3,
  CandlestickChart
} from 'lucide-react';

interface StocksPageProps {
  onOpenAccount: () => void;
}

const MockStocksScreener = () => (
  <div className="bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-xs font-sans w-full max-w-lg mx-auto">
    <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
      <div className="flex items-center gap-2">
        <span className="text-white font-bold text-xs">GLOBAL STOCKS & ETFs SCREENER</span>
      </div>
      <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] text-emerald-400 font-bold font-mono">
        10,000+ Tickers Live
      </div>
    </div>
    <div className="p-3 bg-slate-950 space-y-2">
      {[
        { sym: 'NVDA', name: 'NVIDIA Corp', price: '$128.40', chg: '+3.14%', vol: '68.2M', exch: 'NASDAQ' },
        { sym: 'AAPL', name: 'Apple Inc.', price: '$224.38', chg: '+1.82%', vol: '54.2M', exch: 'NASDAQ' },
        { sym: 'SPY', name: 'SPDR S&P 500 ETF', price: '$545.20', chg: '+0.95%', vol: '42.1M', exch: 'NYSE Arca' },
        { sym: 'QQQ', name: 'Invesco QQQ Trust', price: '$480.15', chg: '+1.45%', vol: '38.9M', exch: 'NASDAQ' },
        { sym: 'MSFT', name: 'Microsoft Corp', price: '$448.20', chg: '+0.65%', vol: '22.4M', exch: 'NASDAQ' },
      ].map((stk) => (
        <div key={stk.sym} className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-xl border border-slate-800/80 font-mono">
          <div>
            <div className="text-white font-bold text-xs flex items-center gap-2">
              {stk.sym} <span className="text-[9px] text-slate-400 font-sans font-normal">{stk.name}</span>
            </div>
            <div className="text-[9px] text-slate-500">{stk.exch} · Vol: {stk.vol}</div>
          </div>
          <div className="text-right">
            <div className="text-white font-bold">{stk.price}</div>
            <div className="text-emerald-400 text-[10px] font-bold">{stk.chg}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const StocksPage: React.FC<StocksPageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePlan, setActivePlan] = useState<'monthly' | 'annual'>('annual');

  const stats = [
    { value: '10,000+', label: 'US & Global Stocks & ETFs', sub: 'NYSE, NASDAQ, LSE & XETRA' },
    { value: '$0.00', label: 'Commission Per Trade', sub: 'Zero commission US stock trading' },
    { value: 'Pre / After', label: 'Extended Hours Access', sub: '4:00 AM to 8:00 PM ET trading' },
    { value: 'Fractional', label: 'Shares Investment', sub: 'Invest from just $1 per share' },
  ];

  const features = [
    { icon: TrendingUp, title: '10,000+ US & Global Stocks', desc: 'Direct market access to NYSE, NASDAQ, CME, LSE, and European exchanges.', badge: '10,000+ Equities' },
    { icon: DollarSign, title: '$0 Commission Trading', desc: 'Trade US equities and ETFs with zero commission per share and zero platform markup.', badge: '$0 Commission' },
    { icon: Clock, title: 'Extended Hours Trading', desc: 'Trade pre-market from 4:00 AM ET and after-hours until 8:00 PM ET seamlessly.', badge: 'Pre/After Hours' },
    { icon: PieChart, title: 'Fractional Share Trading', desc: 'Buy any stock or ETF by dollar amount starting from $1, even mega-caps.', badge: 'Fractionals' },
    { icon: Layers, title: 'Direct Market Access (DMA)', desc: 'Smart routing directly to primary exchange matching engines with sub-millisecond fills.', badge: 'DMA Execution' },
    { icon: ShieldCheck, title: 'SIPC Account Protection', desc: 'Securities in your account protected up to $500,000 (including $250k cash) via SIPC.', badge: 'SIPC Insured' },
  ];

  const modules = [
    { icon: TrendingUp, title: 'US Equities Market', items: ['S&P 500 & NASDAQ 100', 'Small & Mid-cap equities', 'IPO access & new listings', 'Real-time Level II quotes', 'Extended session routing'] },
    { icon: Layers, title: 'Global ETF Suite', items: ['Index ETFs (SPY, QQQ, VTI)', 'Sector & thematic ETFs', 'Leveraged & inverse ETFs', 'Dividend & yield ETFs', 'Bond & fixed income ETFs'] },
    { icon: Clock, title: 'Extended Hours Desk', items: ['4:00 AM ET pre-market open', '8:00 PM ET after-hours close', 'Full Level II depth in extended', 'Earnings release execution', '24/5 global coverage'] },
    { icon: PieChart, title: 'Fractional Investment', items: ['Invest dollar amounts from $1', 'Automated DRIP reinvestment', 'Portfolio rebalancing tool', 'Custom stock baskets', 'Recurring auto-invest'] },
    { icon: DollarSign, title: 'Dividend Center', items: ['Ex-dividend calendar', 'Automatic dividend payouts', 'DRIP auto-reinvestment', 'Yield analysis calculator', 'Tax lot accounting'] },
    { icon: ShieldCheck, title: 'Institutional Execution', items: ['Zero PFOF smart routing', 'Co-located NY4 data center', 'Sub-millisecond fill latency', 'Dark pool liquidity access', 'SIPC protection up to $500k'] },
  ];

  const workflowSteps = [
    { step: '01', title: 'Open Account', desc: 'Create account and verify KYC in under 3 minutes.', icon: Building2 },
    { step: '02', title: 'Fund Account', desc: 'Deposit funds instantly via ACH, bank wire, or card.', icon: DollarSign },
    { step: '03', title: 'Search Tickers', desc: 'Search 10,000+ US stocks and ETFs in screener.', icon: Search },
    { step: '04', title: 'Analyze & Quote', desc: 'View real-time Level II order book and Streaming charts.', icon: BarChart2 },
    { step: '05', title: 'Execute $0 Trade', desc: 'Place market, limit, or fractional order instantly.', icon: TrendingUp },
  ];

  const faqs = [
    { q: 'Are US stock trades really $0 commission?', a: 'Yes! BrokerBros offers zero commission on all US stocks and ETFs with zero hidden platform markups.' },
    { q: 'Can I trade during extended pre-market and after-hours sessions?', a: 'Yes. Pre-market trading is available from 4:00 AM ET and after-hours runs until 8:00 PM ET with full Level II streaming depth.' },
    { q: 'What is SIPC coverage on my stock account?', a: 'Your securities account is protected up to $500,000 (including $250,000 for cash claims) through SIPC membership.' },
    { q: 'Can I buy fractional shares of expensive stocks like Berkshire or NVDA?', a: 'Yes! You can purchase fractional shares by entering any dollar amount starting from just $1.' },
  ];

  const testimonials = [
    { quote: "Zero PFOF execution means my limit orders get filled faster and at better prices than with retail brokers.", name: "Arthur Pendelton", role: "Equity Investor", rating: 5 },
    { quote: "The pre-market routing starting at 4:00 AM ET allows me to trade earnings announcements with institutional latency.", name: "Nathan Vance", role: "Active Trader", rating: 5 },
    { quote: "Fractional share buys combined with automated dividend reinvestment make building my long-term portfolio effortless.", name: "Sarah Jenkins", role: "Portfolio Manager", rating: 5 },
  ];

  const plans = [
    { name: 'Starter', price: '$0', period: '/ month', desc: 'For individual equity investors', features: ['$0 commission US stocks & ETFs', 'Fractional share trading', 'Real-time L1 market quotes', 'Standard trading hours', 'Basic portfolio analytics'], cta: 'Open Free Account', highlight: false },
    { name: 'Trader Pro', price: activePlan === 'annual' ? '$29' : '$39', period: '/ month', desc: 'For active stock traders', features: ['Everything in Starter', 'Full extended hours (4AM - 8PM ET)', 'Level II full order book depth', 'Advanced algo order types', 'Zero PFOF priority routing', 'API trading access'], cta: 'Start Pro Trial', highlight: true },
    { name: 'Enterprise', price: 'Custom', period: '', desc: 'For broker-dealers & desks', features: ['Everything in Trader Pro', 'Dedicated FIX 5.0 DMA line', 'Institutional sub-accounts', 'Portfolio margin (SPAN)', 'Dedicated account manager'], cta: 'Contact Sales', highlight: false },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <section className="relative bg-white min-h-[85vh] py-16 lg:py-24 border-b border-slate-100 overflow-hidden flex flex-col justify-center items-center font-sans">
        <div className="absolute top-0 -right-16 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 w-full flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-600 tracking-wider uppercase font-mono shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>DIRECT MARKET ACCESS STOCKS & ETFS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1] max-w-3xl">
            10,000+ Global Equities.{' '}
            <span className="text-emerald-600">$0 Commission.</span>
          </h1>

          <p className="text-slate-500 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Trade US stocks and ETFs with sub-millisecond Direct Market Access (DMA), zero commission,
            full extended hours, and SIPC protection up to $500,000.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button onClick={onOpenAccount} className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-md shadow-emerald-600/20 transition-all text-sm cursor-pointer">
              <span>Open Free Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={onOpenAccount} className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold rounded-lg transition-all text-sm cursor-pointer">
              <TrendingUp className="w-4 h-4" />
              <span>Explore Stock Screener</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            {['$0 Commission', 'Pre & After Hours', 'Fractional Shares', 'SIPC Insured'].map((label) => (
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
            <span className="text-emerald-700 font-bold text-sm font-sans tracking-tight">Equities Features</span>
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
                <span>INSTITUTIONAL EQUITY ROUTING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
                Zero PFOF.<br />Superior Execution Quality.
              </h2>
              <p className="text-slate-500 text-base leading-relaxed max-w-lg">
                Every equity order is routed to lit exchange centers for price improvement. We completely reject Payment for Order Flow (PFOF).
              </p>
              <ul className="space-y-3">
                {[
                  { icon: TrendingUp, text: 'Direct Market Access (DMA) to NYSE, NASDAQ, and CME' },
                  { icon: Clock, text: 'Extended hours trading from 4:00 AM to 8:00 PM ET' },
                  { icon: ShieldCheck, text: 'SIPC member protection up to $500,000 on your account' },
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
                Start Stock Trading <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative flex justify-center">
              <MockStocksScreener />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50/50 border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">Equities & ETF Modules</h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">Six comprehensive modules built for active stock traders and long-term investors.</p>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">Trading Setup in 5 Steps</h2>
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
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950">Investor Feedback</h2>
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
          <h2 className="text-3xl font-black text-slate-950">Equities & ETF FAQ</h2>
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
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950">Simple Stock Plans</h2>
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
          <h2 className="text-3xl sm:text-4xl font-black">Trade 10,000+ Stocks & ETFs $0 Commission</h2>
          <button onClick={onOpenAccount} className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-all inline-flex items-center gap-2">
            Open Free Account <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <div className="py-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 text-xs text-slate-400 text-center">
          <span className="font-semibold text-slate-500">Risk Disclaimer:</span> Stock and ETF trading involves risk including potential loss of principal. Securities offered through BrokerBros LLC, member FINRA/SIPC.
        </div>
      </div>
    </div>
  );
};
