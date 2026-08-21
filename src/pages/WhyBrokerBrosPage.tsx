import React, { useState } from 'react';
import {
  Zap,
  ShieldCheck,
  Building2,
  Clock,
  CheckCircle2,
  Award,
  Lock,
  Headphones,
  Users,
  Activity,
  ArrowRight,
  Server,
  FileCheck2,
  HelpCircle,
  ChevronDown,
  Globe2,
  Cpu
} from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';

interface WhyBrokerBrosPageProps {
  onOpenAccount: () => void;
}

export const WhyBrokerBrosPage: React.FC<WhyBrokerBrosPageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedLatencyLoc, setSelectedLatencyLoc] = useState<'ny4' | 'ld4' | 'ty3'>('ny4');

  const speedMetrics = [
    { label: "Execution Latency", value: "< 8.4 ms", sub: "Equinix NY4 Direct Fiber", highlight: "Sub-10ms Standard" },
    { label: "SLA Uptime", value: "99.999%", sub: "Multi-Region Redundant Node", highlight: "Zero Downtime" },
    { label: "Human Support Response", value: "< 30 Sec", sub: "24/7 Direct Desk Access", highlight: "No Support Bots" },
    { label: "Order Execution Rate", value: "12M+/Day", sub: "Zero-PFOF SmartRouting", highlight: "100% Transparent" },
    { label: "Capital Equity Base", value: "$28.4 Billion", sub: "Tier-1 Capital Reserves", highlight: "S&P Rated" },
    { label: "Segregated Accounts", value: "100% Isolated", sub: "Top-Tier Bank Accounts", highlight: "Audit-Ready" }
  ];

  const speedPillars = [
    {
      title: "Sub-10ms Direct Fiber Interconnects",
      desc: "Co-located directly inside Equinix NY4, LD4, and TY3 financial datacenters. Our ultra-low latency fiber cross-connects route your orders to prime liquidity providers in single-digit milliseconds.",
      icon: Zap,
      metric: "8.4ms Avg Speed",
      color: "emerald"
    },
    {
      title: "Human-Centric 24/7 Trading Desk",
      desc: "We believe institutional trading requires genuine human intellect. Speak directly to senior market specialists in under 30 seconds — no frustrating AI support bots or phone mazes.",
      icon: Headphones,
      metric: "24/7 Human Desk",
      color: "blue"
    },
    {
      title: "Uncompromising 99.999% SLA Uptime",
      desc: "Built on redundant multi-datacenter failover nodes. Even during historic market volatility spikes, our infrastructure operates seamlessly without order queuing or gateway freeze.",
      icon: Server,
      metric: "99.999% SLA",
      color: "purple"
    },
    {
      title: "Zero PFOF & Pure SmartRouting",
      desc: "We never sell your order flow to third-party internalizers or market makers. Every trade is routed directly to liquidity venues to secure the absolute best price execution for your firm.",
      icon: Cpu,
      metric: "Zero PFOF",
      color: "amber"
    },
    {
      title: "Transparent & Accountable Culture",
      desc: "Zero hidden markups, zero overnight surprise fees, and full microsecond execution timestamp logs provided for every filled order. Complete clarity from onboarding to execution.",
      icon: FileCheck2,
      metric: "100% Transparent",
      color: "teal"
    },
    {
      title: "Institutional $28.4B Capital Base",
      desc: "Your capital is safeguarded by a conservative $28.4B equity base, holding 28.5% CET1 ratio — nearly 3x the global regulatory requirement.",
      icon: ShieldCheck,
      metric: "$28.4B Capital",
      color: "cyan"
    }
  ];

  const latencyLocations = {
    ny4: [
      { venue: "NASDAQ / NYSE Direct", latency: "1.2 ms", route: "Direct Cross-Connect" },
      { venue: "CME Group Chicago", latency: "7.8 ms", route: "Microwave Wireless" },
      { venue: "London LSE / LME", latency: "34.2 ms", route: "Transatlantic Fiber" },
      { venue: "Tokyo JPX / TSE", latency: "94.1 ms", route: "Transpacific Fiber" }
    ],
    ld4: [
      { venue: "London LSE / LME", latency: "1.1 ms", route: "Direct Cross-Connect" },
      { venue: "Eurex / Deutsche Börse", latency: "6.4 ms", route: "European Sub-Sea" },
      { venue: "NASDAQ / NYSE Direct", latency: "34.1 ms", route: "Transatlantic Fiber" },
      { venue: "Singapore SGX", latency: "88.4 ms", route: "Indo-Euro Cable" }
    ],
    ty3: [
      { venue: "Tokyo JPX / TSE", latency: "1.4 ms", route: "Direct Cross-Connect" },
      { venue: "Hong Kong HKEX", latency: "28.6 ms", route: "East Asia Sub-Sea" },
      { venue: "Singapore SGX", latency: "32.1 ms", route: "South Asia Cable" },
      { venue: "NASDAQ / NYSE Direct", latency: "94.5 ms", route: "Transpacific Fiber" }
    ]
  };

  const humanComparison = [
    { feature: "Support Accessibility", brokerBros: "24/7 Live Human Desk (<30s)", retailApps: "Chatbot / Email Only (24-48h)" },
    { feature: "Execution Speed", brokerBros: "Sub-10ms Direct Fiber", retailApps: "150ms - 500ms Delayed" },
    { feature: "Order Routing Model", brokerBros: "Zero PFOF SmartRouting", retailApps: "PFOF Sold to Internalizers" },
    { feature: "Infrastructure Uptime", brokerBros: "99.999% SLA Failover", retailApps: "Frequent Volatility Outages" },
    { feature: "Fee Transparency", brokerBros: "Zero Hidden Markups", retailApps: "Hidden Spread Markups" },
    { feature: "Client Capital Safety", brokerBros: "100% Segregated Top Tier", retailApps: "Co-mingled Operating Pool" }
  ];

  const faqs = [
    {
      q: "What makes BrokerBros execution faster than typical brokers?",
      a: "BrokerBros servers are co-located directly inside major financial hubs (Equinix NY4 New Jersey, LD4 London, TY3 Tokyo). By utilizing optical fiber cross-connects and zero-PFOF SmartRouting, order latency stays consistently under 10 milliseconds."
    },
    {
      q: "How does 24/7 Human Desk support work?",
      a: "Unlike retail fintech apps that force clients into unhelpful AI chatbot loops, BrokerBros provides direct phone and chat channels to experienced human trading specialists 24 hours a day, 7 days a week. Average answer time is under 30 seconds."
    },
    {
      q: "What does 99.999% SLA Uptime mean for my firm?",
      a: "Our infrastructure operates with less than 5.2 minutes of total downtime per year across our entire network. Dual active-active datacenter redundancy ensures your trading terminals, APIs, and client portals remain operational during record market volatility spikes."
    },
    {
      q: "How is client capital segregated and protected?",
      a: "All client funds are held in dedicated, segregated bank accounts at Tier-1 banking institutions (such as JPMorgan Chase, Barclays, and UBS), completely separate from BrokerBros corporate operating funds. Daily automated balance reconciliations guarantee instant withdrawal liquidity."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D14] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      
      {/* 1. HERO SECTION (WELL-PADDED & FULLY VISIBLE BELOW FIXED HEADER) */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-8 my-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Engineered for Millisecond Speed. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400">
              Built on Unshakable Human Trust.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            BrokerBros combines sub-10ms direct fiber execution, 99.999% SLA uptime, and a 24/7 dedicated human trading desk — giving institutional operators and proprietary firms the fastest, most reliable financial infrastructure on earth.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenAccount}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Started with BrokerBros</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#speed-benchmarks"
              className="w-full sm:w-auto px-7 py-3.5 bg-slate-200 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm rounded-xl border border-slate-300 dark:border-slate-700 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Activity className="w-4 h-4 text-emerald-500" />
              <span>Explore Execution Benchmarks</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. CORE SPEED & RELIABILITY PILLARS & METRICS */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Metric Badges Strip (Appears on Scroll) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {speedMetrics.map((m, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-1"
            >
              <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                {m.highlight}
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-slate-900 dark:text-white">
                {m.value}
              </div>
              <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Financial Institutions Choose BrokerBros
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Every layer of our stack is optimized for maximum velocity, total transparency, and continuous human availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speedPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800/80 shadow-md hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      {p.metric}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. LATENCY BENCHMARK VISUALIZER */}
      <section id="speed-benchmarks" className="py-16 sm:py-20 bg-slate-100 dark:bg-[#0d121d] border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <Globe2 className="w-4 h-4" />
                GLOBAL EQUINIX FIBER NETWORK
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Real-Time Execution Latency Benchmarks
              </h2>
            </div>

            {/* Datacenter Switcher */}
            <div className="flex items-center p-1 bg-slate-200 dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700">
              <button
                onClick={() => setSelectedLatencyLoc('ny4')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedLatencyLoc === 'ny4'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Equinix NY4 (New Jersey)
              </button>
              <button
                onClick={() => setSelectedLatencyLoc('ld4')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedLatencyLoc === 'ld4'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Equinix LD4 (London)
              </button>
              <button
                onClick={() => setSelectedLatencyLoc('ty3')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedLatencyLoc === 'ty3'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Equinix TY3 (Tokyo)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {latencyLocations[selectedLatencyLoc].map((loc, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
              >
                <div className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                  {loc.venue}
                </div>
                <div className="text-3xl font-black font-mono text-emerald-600 dark:text-emerald-400">
                  {loc.latency}
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <span>{loc.route}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE HUMAN DIFFERENCE (BROKERBROS VS RETAIL APPS) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Users className="w-4 h-4" />
            HUMAN ACCESSIBILITY & AUDITABILITY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            BrokerBros vs Standard Retail Apps
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            See how our speed, reliability, and dedicated human desk support compare against legacy and retail brokers.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131926] shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-mono uppercase text-[11px] border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="py-4 px-6 font-bold">Feature Metric</th>
                <th className="py-4 px-6 font-bold text-emerald-600 dark:text-emerald-400">BrokerBros Master Standard</th>
                <th className="py-4 px-6 font-bold text-slate-500">Retail Fintech Brokers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800/80">
              {humanComparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 dark:text-white">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 font-bold font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                    <span>{row.brokerBros}</span>
                  </td>
                  <td className="py-4 px-6 text-slate-500 dark:text-slate-400 font-mono">
                    {row.retailApps}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. FAQ ACCORDION */}
      <section className="py-16 sm:py-20 bg-slate-100 dark:bg-[#0d121d] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Understanding Why BrokerBros Leads
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131926] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer hover:text-emerald-500 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 text-emerald-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 font-sans font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <CTASection
        title="Experience Sub-10ms Speed & 24/7 Human Trust Today"
        onOpenAccount={onOpenAccount}
      />
    </div>
  );
};
