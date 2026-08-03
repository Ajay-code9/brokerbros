import React, { useState, useEffect } from 'react';
import {
  Zap,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Cpu,
  CheckCircle,
  XCircle,
  HelpCircle,
  ArrowRight,
  Download,
  Layers,
  Globe,
  Clock,
  ChevronDown,
  ChevronUp,
  Sliders,
  Activity,
  Check,
  AlertTriangle,
  Lock,
  FileText
} from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';
import { VideoHeroBackground } from '../components/Common/VideoHeroBackground';

interface BestExecutionPageProps {
  onOpenAccount: () => void;
}

export const BestExecutionPage: React.FC<BestExecutionPageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [simulatedOrderType, setSimulatedOrderType] = useState<'market' | 'block' | 'limit'>('market');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simStep, setSimStep] = useState<number>(3);
  const [downloadToast, setDownloadToast] = useState<boolean>(false);

  const handleDownloadRule605 = () => {
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 4000);
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimStep(0);
    setTimeout(() => setSimStep(1), 600);
    setTimeout(() => setSimStep(2), 1200);
    setTimeout(() => {
      setSimStep(3);
      setIsSimulating(false);
    }, 1800);
  };

  const whatIsBestExec = [
    {
      title: "Direct Order Routing",
      desc: "Orders bypass high-frequency retail internalizers and route instantly through direct electronic links to primary exchanges, multilateral facilities, and lit pools.",
      icon: Layers,
      highlight: "Direct Exchange Links"
    },
    {
      title: "Substantial Price Improvement",
      desc: "By searching both lit exchange quotes and non-displayed dark pool midpoint orders, our engine fills trades at prices better than the prevailing NBBO.",
      icon: TrendingUp,
      highlight: "Avg $0.024/sh Saved"
    },
    {
      title: "Deterministic Execution Quality",
      desc: "Orders are judged solely on price improvement, fill probability, and latency — never on kickbacks or payment rebates from market makers.",
      icon: ShieldCheck,
      highlight: "100% Client Aligned"
    },
    {
      title: "Ultra-Low Latency Fill Speed",
      desc: "Colocated fiber connections inside Equinix NY4, LD4, and TY3 financial centers deliver sub-millisecond execution dispatch.",
      icon: Zap,
      highlight: "1.2 ms Avg Latency"
    },
    {
      title: "Deep Global Liquidity Aggregation",
      desc: "Simultaneous scanning across 150+ liquidity centers prevents market impact and minimizes slippage even on multi-million dollar block orders.",
      icon: Globe,
      highlight: "150+ Venues Scanned"
    }
  ];

  const executionStats = [
    { label: "Average Execution Speed", value: "1.2 ms", sub: "Colocated NY4/LD4 Datacenters", highlight: "Sub-Millisecond" },
    { label: "Price Improvement Rate", value: "88.4%", sub: "Of all marketable retail & block orders", highlight: "Industry Leading" },
    { label: "Average Price Savings", value: "$0.024", sub: "Saved per share vs NBBO benchmark", highlight: "$24.00 / 1k shares" },
    { label: "Connected Liquidity Venues", value: "150+", sub: "Lit Exchanges, ECNs & Dark Pools", highlight: "Global Reach" },
    { label: "Daily Processed Orders", value: "12.8M+", sub: "Across equities, options & futures", highlight: "$480B+ Volume" },
    { label: "Fill Gateway Uptime", value: "99.999%", sub: "Redundant fault-tolerant routing", highlight: "Zero Downtime" }
  ];

  const pfofComparison = [
    {
      feature: "Payment For Order Flow (PFOF)",
      brokerbros: "ZERO (100% Rejected)",
      retailApp: "Accepts $0.002–$0.005/sh",
      internalizer: "Pockets Spread Margin",
      isHighlight: true
    },
    {
      feature: "Order Routing Objective",
      brokerbros: "Best Price & Price Improvement",
      retailApp: "Highest PFOF Bidder",
      internalizer: "Internal B-Book Matching"
    },
    {
      feature: "Price Improvement Rate",
      brokerbros: "88.4% of Orders Improved",
      retailApp: "15%–35% (NBBO Fill)",
      internalizer: "Minimal / Negative Slippage"
    },
    {
      feature: "Venue Transparency (Rule 605/606)",
      brokerbros: "Full Monthly Audit Disclosure",
      retailApp: "Basic Aggregated Disclosures",
      internalizer: "Opaque Internal System"
    },
    {
      feature: "Direct Exchange Access (NYSE/NASDAQ/IEX)",
      brokerbros: "Direct Member Connections",
      retailApp: "Routed to 2-3 Market Makers",
      internalizer: "No External Lit Routing"
    },
    {
      feature: "Order Types Supported",
      brokerbros: "Midpoint, Pegged, Iceberg, IOC",
      retailApp: "Basic Market & Limit Only",
      internalizer: "Restricted Proprietary Types"
    }
  ];

  const techPillars = [
    {
      title: "Colocated Fiber Infrastructure",
      desc: "Server clusters situated directly inside primary exchange datacenters (Equinix NY4 Secaucus, LD4 Slough, TY3 Tokyo) minimize physical network hop latency.",
      tag: "Microsecond Colocation"
    },
    {
      title: "Custom FPGA Hardware Acceleration",
      desc: "Field-Programmable Gate Array (FPGA) chips parse incoming market data streams and dispatch orders at hardware speeds without software OS bottlenecks.",
      tag: "Hardware Speed"
    },
    {
      title: "IEX Speed Bump & Anti-Internalization",
      desc: "Integrated logic protects market orders from toxic high-frequency latency arbitrage and predatory front-running algorithms.",
      tag: "HFT Protection"
    },
    {
      title: "Direct Market Data Feeds (SIP + ITCH)",
      desc: "Subscribes directly to NASDAQ ITCH, NYSE ArcaBook, and CBOE direct feeds instead of relying on delayed consolidated SIP tickers.",
      tag: "Direct Book Depth"
    }
  ];

  const faqs = [
    {
      q: "What is Payment for Order Flow (PFOF) and why does BrokerBros reject it?",
      a: "Payment for Order Flow occurs when a brokerage receives cash rebates or compensation from high-frequency market makers in exchange for routing client orders to them. This creates an inherent conflict of interest, as the broker is incentivized to send trades to whichever market maker pays the highest rebate rather than the venue that offers the best price. BrokerBros rejects 100% of PFOF, ensuring every trade is routed purely for maximum price improvement."
    },
    {
      q: "How does SmartRouting achieve price improvement better than the NBBO?",
      a: "The National Best Bid and Offer (NBBO) represents the best public displayed prices across lit exchanges. SmartRouting continuously scans non-displayed dark pools, hidden midpoint liquidity, and institutional crossing networks alongside lit venues. By matching trades at the midpoint of the bid-ask spread or discovering hidden quotes, SmartRouting frequently fills orders at prices significantly better than the published NBBO."
    },
    {
      q: "Is SmartRouting available for all asset classes?",
      a: "Yes. SmartRouting is active across US Equities, ETFs, Equity Options, Index Futures, and Forex. The routing algorithm dynamically adjusts its strategy based on asset liquidity, volatility, and order size."
    },
    {
      q: "Can I inspect my individual trade execution quality reports?",
      a: "Absolutely. Every client account has access to detailed execution reports showing the exact execution venue, execution timestamp down to the microsecond, price improvement amount saved, and NBBO benchmark comparison."
    },
    {
      q: "Where can I view BrokerBros' SEC Rule 605 and Rule 606 disclosures?",
      a: "Under SEC Rules 605 and 606, BrokerBros publishes detailed monthly public reports analyzing order execution quality and order routing statistics. You can download these audited PDF and XML files anytime from our Execution Transparency Center."
    }
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white text-slate-900 selection:bg-emerald-500 selection:text-white font-sans antialiased">
      {/* Download Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-950 text-white px-5 py-4 rounded-xl border border-emerald-500/40 shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <div className="text-xs font-bold text-white">Rule 605 Execution Report Downloaded</div>
            <div className="text-[11px] text-slate-400">Audited quarterly execution quality metrics file saved.</div>
          </div>
        </div>
      )}

      {/* 1. HERO SECTION (Apple & IBKR Clean White Institutional Style) */}
      <section className="relative bg-white text-slate-900 py-12 lg:py-16 min-h-[calc(100vh-80px)] flex flex-col justify-center border-b border-slate-100 overflow-hidden font-sans">
        
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold border border-emerald-200/80">
                <Zap className="w-3.5 h-3.5 text-emerald-600" />
                <span>SMARTROUTING ENGINE & ZERO PFOF</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-950 font-sans">
                Best Execution & <br />
                <span className="text-emerald-700">Zero Payment For Order Flow</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-sans font-normal">
                BrokerBros rejects 100% of PFOF rebates. Our SmartRouting engine scans 150+ lit ECNs, market centers, and dark pools to deliver an average price improvement of $0.024 per share.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenAccount}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer text-sm"
                >
                  <span>Start Trading with SmartRouting</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleDownloadRule605}
                  className="px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-lg border border-slate-300 transition-all flex items-center gap-2 cursor-pointer text-sm"
                >
                  <Download className="w-4 h-4 text-emerald-600" />
                  <span>Download SEC Rule 605 Disclosure</span>
                </button>
              </div>

              {/* Quick Execution Highlights */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <div className="text-slate-400 text-xs">PFOF Policy</div>
                  <div className="text-emerald-700 font-extrabold text-sm sm:text-base mt-0.5">Zero (100% Rejected)</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs">Avg Fill Speed</div>
                  <div className="text-slate-950 font-extrabold text-sm sm:text-base mt-0.5">1.2 ms (NY4 Colocated)</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs">Price Improvement</div>
                  <div className="text-emerald-700 font-extrabold text-sm sm:text-base mt-0.5">88.4% of Orders</div>
                </div>
              </div>
            </div>

            {/* Right — Premium Glassmorphism Image Card */}
            <div className="lg:col-span-5 relative">
              {/* Ambient glow halo */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-emerald-500/30 via-teal-400/20 to-cyan-500/25 blur-2xl opacity-60 animate-pulse pointer-events-none" />

              {/* Card shell */}
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 border border-emerald-500/25 shadow-2xl bg-gradient-to-b from-[#0D2231]/80 to-[#06141D]/90 backdrop-blur-xl">

                {/* Image */}
                <div className="relative h-60 sm:h-72 group overflow-hidden">
                  <img
                    src="/datacenter_latency.png"
                    alt="Datacenter Latency Network"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle vignette only at bottom edge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06141D]/80 via-transparent to-transparent" />
                </div>

                {/* Frosted glass stats strip */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-white/10 bg-white/5 backdrop-blur-md font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>1.2ms SmartRoute</span>
                  </div>
                  <div className="text-slate-400 font-semibold">NASDAQ / NYSE / IEX</div>
                  <div className="text-cyan-300 font-bold">0% PFOF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS BEST EXECUTION? */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              The Five Pillars of Institutional Best Execution
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Best Execution is a strict legal and operational standard requiring a broker-dealer to execute client orders at the most favorable terms under prevailing market conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatIsBestExec.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                      <IconComp className="w-6 h-6 text-emerald-600" />
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-serif-heading text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SMARTROUTING TECHNOLOGY */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">PROPRIETARY ROUTING ARCHITECTURE</div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-white">
              How SmartRouting Scans & Executes Orders
            </h2>
            <p className="text-slate-400 text-sm">
              Instead of sending your order to a single market maker, SmartRouting searches 150+ venues simultaneously to capture hidden price improvement.
            </p>
          </div>

          {/* Interactive Routing Architecture Diagram */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-8 sm:p-10 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center text-center font-mono">
              
              {/* Step 1 */}
              <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mx-auto flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <div className="font-bold text-white text-sm">Client Order</div>
                <div className="text-slate-400 text-xs">1,000 Shares @ MKT</div>
              </div>

              <div className="hidden lg:flex justify-center text-emerald-400">
                <ArrowRight className="w-6 h-6 animate-pulse" />
              </div>

              {/* Step 2 */}
              <div className="p-5 bg-emerald-950/60 rounded-xl border border-emerald-500/60 space-y-2 shadow-lg shadow-emerald-500/10">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 mx-auto flex items-center justify-center font-extrabold text-xs">
                  02
                </div>
                <div className="font-bold text-emerald-300 text-sm">SmartRouting Engine</div>
                <div className="text-slate-300 text-xs">Microsecond Liquidity Scan</div>
              </div>

              <div className="hidden lg:flex justify-center text-emerald-400">
                <ArrowRight className="w-6 h-6 animate-pulse" />
              </div>

              {/* Step 3 */}
              <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mx-auto flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <div className="font-bold text-white text-sm">Optimal Fill</div>
                <div className="text-emerald-400 text-xs font-bold">+$0.035/sh Price Saved</div>
              </div>

            </div>

            {/* Venue Breakdown Grid */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Lit Exchanges (NYSE, NASDAQ, CBOE)
                </div>
                <p className="text-slate-400 leading-relaxed font-sans text-xs">
                  Direct connection to primary exchange order books ensuring access to public top-of-book displayed liquidity.
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Non-Displayed Dark Pools
                </div>
                <p className="text-slate-400 leading-relaxed font-sans text-xs">
                  Queries institutional dark pools for non-displayed midpoint orders without signaling intent to the open market.
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="text-indigo-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  Electronic Communication Networks (ECNs)
                </div>
                <p className="text-slate-400 leading-relaxed font-sans text-xs">
                  Accesses institutional crossing networks and IEX speed-bump protection against predatory high-frequency trading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY ZERO PFOF MATTERS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              TRANSPARENT EXECUTION COMPARISON
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              BrokerBros Zero PFOF vs Industry Models
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              When a broker takes PFOF, they compromise execution quality for kickbacks. See how BrokerBros aligns 100% with trader interests.
            </p>
          </div>

          {/* Detailed Comparison Table */}
          <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700 text-xs uppercase font-mono border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6 font-bold">Execution Metric</th>
                  <th className="py-4 px-6 font-bold text-emerald-800 bg-emerald-50/80">BrokerBros (Zero PFOF)</th>
                  <th className="py-4 px-6 font-bold">Standard Retail PFOF App</th>
                  <th className="py-4 px-6 font-bold">B-Book Internalizer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {pfofComparison.map((row, idx) => (
                  <tr key={idx} className={row.isHighlight ? "bg-emerald-50/40 font-semibold" : "hover:bg-slate-50 text-slate-600"}>
                    <td className="py-4 px-6 font-bold text-slate-900">{row.feature}</td>
                    <td className="py-4 px-6 font-mono font-bold text-emerald-900 bg-emerald-50/30">
                      <span className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        {row.brokerbros}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-slate-600">{row.retailApp}</td>
                    <td className="py-4 px-6 font-mono text-xs text-slate-500">{row.internalizer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. EXECUTION PERFORMANCE STATISTICS */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
            <div>
              <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">VERIFIED PERFORMANCE METRICS</div>
              <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-white">Execution Metrics At A Glance</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Audited quarterly figures confirming our speed, price improvement, and venue connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {executionStats.map((st, idx) => (
              <div key={idx} className="bg-slate-900/90 p-8 rounded-xl border border-slate-800 space-y-3 relative overflow-hidden group hover:border-emerald-500/40 transition-colors">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                  <span>{st.label}</span>
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{st.highlight}</span>
                </div>
                <div className="text-3xl sm:text-4xl font-serif-heading font-extrabold text-white tracking-tight pt-1">
                  {st.value}
                </div>
                <div className="text-xs font-sans text-slate-400 pt-1 border-t border-slate-800/80">
                  {st.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY INFRASTRUCTURE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Low-Latency Institutional Infrastructure
            </h2>
            <p className="text-slate-600 text-base">
              Engineered specifically for microsecond processing speeds and high-volume institutional order flows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techPillars.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-3 hover:border-emerald-500/50 transition-colors">
                <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold font-serif-heading text-slate-900 pt-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BEST EXECUTION POLICY */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">REGULATORY DISCLOSURES</div>
              <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-white">
                Best Execution Philosophy & Governance Policy
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                BrokerBros maintains a dedicated Best Execution Committee that conducts regular quantitative reviews of execution speed, fill rates, price improvement, and venue toxicity. Under SEC Rule 605 and Rule 606, all quarterly order execution and order routing reports are published unedited for public review.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <button
                onClick={handleDownloadRule605}
                className="w-full py-3.5 px-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <Download className="w-4 h-4" />
                <span>SEC Rule 605 Disclosure (PDF)</span>
              </button>

              <button
                onClick={handleDownloadRule605}
                className="w-full py-3.5 px-6 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>SEC Rule 606 Order Routing (XML)</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Execution & Routing FAQ
            </h2>
            <p className="text-slate-600 text-base">
              Detailed answers regarding SmartRouting, NBBO compliance, and PFOF policy.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-slate-900 text-base sm:text-lg font-serif-heading">{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
