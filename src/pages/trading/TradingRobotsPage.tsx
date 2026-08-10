import React, { useState } from 'react';
import {
  ArrowRight, Bot, Code2, Zap, BarChart2, Lock, CheckCircle2, Settings, Activity,
  RefreshCw, Database, ShieldCheck, Check, ExternalLink, ChevronDown, ChevronUp, ChevronRight,
  TrendingUp, Wifi, Layout, Headphones, Play, Megaphone, FileText, UserPlus, FileCheck, Wallet,
  CandlestickChart, PieChart, Star, Building2, Terminal, Cpu, Server
} from 'lucide-react';

interface PageProps {
  onOpenAccount: () => void;
}

const MockRobotCodeTerminal = () => (
  <div className="bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-xs font-mono w-full max-w-lg mx-auto">
    <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="text-slate-400 text-[11px] ml-2">mean_reversion_bot.py</span>
      </div>
      <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] text-emerald-400 font-bold">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        RUNNING (NY4 Co-Located)
      </div>
    </div>
    <div className="p-4 space-y-2 text-[11px] leading-relaxed text-slate-300">
      <div><span className="text-purple-400">from</span> brokerbros <span className="text-purple-400">import</span> AlgoEngine, OrderType</div>
      <div><span className="text-blue-400">bot</span> = AlgoEngine(api_key=<span className="text-emerald-400">"bb_live_9921"</span>, venue=<span className="text-emerald-400">"NY4"</span>)</div>
      <div className="text-slate-500"># Listening for WebSocket market depth ticks</div>
      <div><span className="text-purple-400">async def</span> <span className="text-yellow-400">on_tick</span>(depth):</div>
      <div className="pl-4"><span className="text-purple-400">if</span> depth.spread &lt; <span className="text-amber-400">0.02</span> <span className="text-purple-400">and</span> depth.vwap_deviation &gt; <span className="text-amber-400">1.8</span>:</div>
      <div className="pl-8 text-emerald-400">await bot.submit_order(symbol="NVDA", qty=500, side="BUY", algo="VWAP_LIMIT")</div>
      <div className="pt-2 border-t border-slate-800 text-slate-400 flex items-center justify-between text-[10px]">
        <span>Latency: <strong className="text-emerald-400">0.28ms</strong></span>
        <span>Fills today: <strong className="text-white">1,420</strong></span>
        <span>Bot P&L: <strong className="text-emerald-400">+$12,450.00</strong></span>
      </div>
    </div>
  </div>
);

export const TradingRobotsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePlan, setActivePlan] = useState<'monthly' | 'annual'>('annual');

  const stats = [
    { value: '0.28ms', label: 'Order Execution Latency', sub: 'Co-located NY4 & LD4 servers' },
    { value: '20+ Yrs', label: 'Tick Data Backtest Engine', sub: 'Sub-second historical simulation' },
    { value: 'FIX 5.0', label: 'Protocol Connectivity', sub: 'Direct institutional DMA gateway' },
    { value: '99.99%', label: 'Uptime Guarantee', sub: 'Redundant automated execution' },
  ];

  const features = [
    { icon: Bot, title: 'Automated Bot Deployment', desc: 'Run Python, JS, or C++ trading robots in co-located cloud environments 24/5.', badge: 'Python / JS / FIX' },
    { icon: Code2, title: 'REST API & WebSockets', desc: 'Low-latency REST endpoints and duplex WebSockets for live order routing.', badge: '<1ms API' },
    { icon: Database, title: '20-Year Tick Data Engine', desc: 'Simulate strategies against 20+ years of high-frequency tick data with slippage.', badge: 'Tick Data' },
    { icon: Zap, title: 'Visual Strategy Builder', desc: 'Build logic without code using pre-built indicators, condition blocks, and triggers.', badge: 'No-Code Builder' },
    { icon: ShieldCheck, title: 'Algorithmic Risk Safeguards', desc: 'Max drawdown limits, stop-loss enforcement, and order frequency protection.', badge: 'Risk Shield' },
    { icon: RefreshCw, title: 'Paper Trading Sandbox', desc: 'Test robots in live market conditions without risking capital before deployment.', badge: '100% Free Sandbox' },
  ];

  const modules = [
    { icon: Code2, title: 'REST & WebSocket API', items: ['Duplex WebSocket data', 'Sub-millisecond REST fills', 'Python & Node.js SDKs', 'Rate limit free tier', 'OAuth2 security'] },
    { icon: Cpu, title: 'FIX Protocol 4.4/5.0', items: ['Direct DMA connection', 'Institutional session tags', 'Drop-copy execution feeds', 'Ultra-low latency line', 'Dedicated cross-connect'] },
    { icon: Database, title: 'Backtesting Engine', items: ['20+ years tick historicals', 'Monte Carlo simulations', 'Order book replay', 'Custom commission models', 'Slippage simulation'] },
    { icon: Zap, title: 'No-Code Strategy Studio', items: ['Drag & drop logic nodes', '50+ indicator triggers', 'Multi-condition rules', 'One-click cloud deploy', 'Visual P&L backtest'] },
    { icon: ShieldCheck, title: 'Automated Risk Controls', items: ['Max daily loss limit', 'Position sizing limits', 'Circuit breaker trigger', 'Kill-switch button', 'Concentration caps'] },
    { icon: Server, title: 'Co-Location Infrastructure', items: ['NY4 Equinix (New York)', 'LD4 Equinix (London)', 'Redundant power & feed', 'Hardware cross-connect', 'Sub-0.5ms roundtrip'] },
  ];

  const workflowSteps = [
    { step: '01', title: 'Get API Credentials', desc: 'Generate secure REST API and WebSocket keys from your dashboard.', icon: Code2 },
    { step: '02', title: 'Develop or Select Bot', desc: 'Code with Python SDK or choose from pre-built strategy templates.', icon: Bot },
    { step: '03', title: 'Backtest on Tick Data', desc: 'Simulate performance over 20+ years of tick-level order book data.', icon: Database },
    { step: '04', title: 'Paper Trade Sandbox', desc: 'Run in live sandbox mode to verify order routing and risk rules.', icon: RefreshCw },
    { step: '05', title: 'Deploy Live', desc: 'Go live on co-located NY4/LD4 servers with automated execution.', icon: TrendingUp },
  ];

  const faqs = [
    { q: 'What programming languages are supported for trading robots?', a: 'We provide official SDKs for Python and JavaScript/TypeScript, plus raw REST API and FIX 4.4/5.0 protocol access for C++, Rust, Go, or Java.' },
    { q: 'Where are your algo execution servers located?', a: 'Our trading engines are co-located in Equinix NY4 (Secaucus, NJ) and LD4 (Slough, UK) data centers right next to primary exchange matching engines.' },
    { q: 'Can I build a trading robot without coding?', a: 'Yes! Our Visual Strategy Studio allows you to build, test, and deploy automated trading rules visually with drag-and-drop indicator blocks.' },
    { q: 'Is paper trading supported for algos?', a: 'Yes. Every account gets full access to a live paper trading sandbox that mirrors real-time WebSocket order books with zero risk.' },
  ];

  const testimonials = [
    { quote: "Our quant strategy execution latency dropped from 18ms to 0.3ms after moving to BrokerBros FIX gateway in Equinix NY4.", name: "Dr. Aris Thorne", role: "Head Quant, Aether Capital", rating: 5 },
    { quote: "The Python SDK is remarkably clean. We went from backtesting to live automated trading in less than 48 hours.", name: "Siddharth Rao", role: "Algorithmic Trader", rating: 5 },
    { quote: "The 20-year tick historical backtester saved us months of data collection work. It's an indispensable tool for automated strategies.", name: "Claire Dupont", role: "Systematic Trader", rating: 5 },
  ];

  const plans = [
    { name: 'Developer', price: '$0', period: '/ month', desc: 'For retail quant coders', features: ['Full REST & WebSocket API', 'Paper trading sandbox', 'Basic strategy builder', '50,000 daily API calls', 'Community support'], cta: 'Get Free API Keys', highlight: false },
    { name: 'Quant Pro', price: activePlan === 'annual' ? '$29' : '$39', period: '/ month', desc: 'For systematic traders', features: ['Everything in Developer', '20-year tick backtester', 'Visual Strategy Studio', 'Unlimited API calls', 'NY4/LD4 co-location access', 'Priority execution routing'], cta: 'Start Pro Trial', highlight: true },
    { name: 'Institutional FIX', price: 'Custom', period: '', desc: 'For hedge funds & desks', features: ['Everything in Pro', 'Dedicated FIX 4.4/5.0 session', 'Physical cross-connect', 'Custom co-location rack', 'Dedicated quant engineer'], cta: 'Contact Sales', highlight: false },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <section className="relative bg-white min-h-[85vh] py-16 lg:py-24 border-b border-slate-100 overflow-hidden flex flex-col justify-center items-center font-sans">
        <div className="absolute top-0 -right-16 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 w-full flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-600 tracking-wider uppercase font-mono shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>AUTOMATED TRADING & ALGO ENGINE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1] max-w-3xl">
            Automate Your Strategy.{' '}
            <span className="text-emerald-600">With Institutional Robots.</span>
          </h1>

          <p className="text-slate-500 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Deploy algorithmic trading robots via REST API, FIX Protocol, or our no-code strategy builder.
            Backtest on 20+ years of tick data with sub-millisecond co-located execution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button onClick={onOpenAccount} className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-md shadow-emerald-600/20 transition-all text-sm cursor-pointer">
              <span>Deploy Your Robot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={onOpenAccount} className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold rounded-lg transition-all text-sm cursor-pointer">
              <Code2 className="w-4 h-4" />
              <span>View API Docs</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            {['Python & JS SDKs', 'FIX 5.0 Protocol', 'Sub-0.5ms NY4 Latency', 'Free Tick Data'].map((label) => (
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
            <span className="text-emerald-700 font-bold text-sm font-sans tracking-tight">Algo Capabilities</span>
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
                <span>ALGOENGINE ENVIRONMENT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
                High-Frequency Code.<br />Zero Infrastructure Hassle.
              </h2>
              <p className="text-slate-500 text-base leading-relaxed max-w-lg">
                Focus purely on alpha generation while BrokerBros manages co-location, market data feeds, and execution risk protection.
              </p>
              <ul className="space-y-3">
                {[
                  { icon: Zap, text: 'Co-located execution in Equinix NY4 (US) and LD4 (UK) data centers' },
                  { icon: Code2, text: 'Full SDK support for Python, TypeScript, C++, and FIX 5.0' },
                  { icon: ShieldCheck, text: 'Hard risk circuit breakers and automated stop-outs at the engine layer' },
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
                Deploy Robot Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative flex justify-center">
              <MockRobotCodeTerminal />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50/50 border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">AlgoEngine Suite</h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">Six core components engineered for quantitative development and automated trading.</p>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">Robot Deployment Flow</h2>
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
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950">Quant Testimonials</h2>
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
          <h2 className="text-3xl font-black text-slate-950">AlgoEngine FAQ</h2>
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
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950">Developer & Quant Plans</h2>
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
          <h2 className="text-3xl sm:text-4xl font-black">Build & Deploy Algorithmic Robots Today</h2>
          <button onClick={onOpenAccount} className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-all inline-flex items-center gap-2">
            Get Started Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <div className="py-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 text-xs text-slate-400 text-center">
          <span className="font-semibold text-slate-500">Risk Disclaimer:</span> Algorithmic and automated trading involves risk of financial loss. Past backtesting results are not guarantees of live performance. BrokerBros LLC is member FINRA/SIPC.
        </div>
      </div>
    </div>
  );
};
