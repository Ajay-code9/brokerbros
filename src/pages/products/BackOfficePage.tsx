import React, { useState } from 'react';
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  Database,
  Lock,
  Cpu,
  BarChart3,
  Server,
  Layers,
  ChevronDown,
  CheckCircle2,
  FileText,
  Activity,
  UserCheck,
  Settings,
  Sliders,
  RefreshCw,
  Clock,
  Terminal,
  Globe2,
  Download
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface BackOfficePageProps {
  onOpenAccount: () => void;
}

export const BackOfficePage: React.FC<BackOfficePageProps> = ({ onOpenAccount }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'risk' | 'accounts' | 'reporting'>('risk');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: Cpu,
      title: 'Automated A/B Book Routing Engine',
      description: 'Real-time toxic flow identification with configurable hybrid routing parameters based on account equity, leverage, and trading history.',
      badge: 'Core Engine'
    },
    {
      icon: ShieldCheck,
      title: 'Multi-Asset Margin & Risk Monitor',
      description: 'Instant margin call triggers, auto-liquidation protection, and dynamic negative balance shielding across FX, Crypto, & Indices.',
      badge: 'Risk Controls'
    },
    {
      icon: Database,
      title: 'Multi-Tenant Account Architecture',
      description: 'Manage unlimited IB hierarchies, sub-accounts, prop firm accounts, and demo environments from a single centralized master pane.',
      badge: 'Scalability'
    },
    {
      icon: FileText,
      title: 'Regulatory & Compliance Suite',
      description: 'Automated MiFID II, CySEC, ASIC, and FCA audit trail logs, transaction reporting exports, and anti-money laundering (AML) tracking.',
      badge: 'Compliance'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Financial Ledger',
      description: 'Double-entry general ledger accounting for deposits, withdrawals, swaps, commissions, and instant IB rebate calculations.',
      badge: 'Finances'
    },
    {
      icon: Sliders,
      title: 'Dynamic Leverage & Group Rules',
      description: 'Customize leverage tiers per symbol group, set custom spread markups, and configure instant swap-free Islamic account rules.',
      badge: 'Customization'
    }
  ];

  const specs = [
    { module: 'Execution Protocol', tier: 'FIX 4.4 / REST / WebSocket', status: 'Live 100%' },
    { module: 'Order Processing Speed', tier: '< 1.8 milliseconds', status: 'Sub-Millisecond' },
    { module: 'Supported Platform Bridges', tier: 'MT4, MT5, cTrader, Vertex, Fix', status: 'Native' },
    { module: 'Database Redundancy', tier: 'Multi-Region Active-Active Cluster', status: '99.999% SLA' },
    { module: 'Audit Logging Tier', tier: 'Immutable Cryptographic Logs', status: 'ISO Certified' },
  ];

  const faqs = [
    {
      q: 'How does the Back Office integrate with MT4/MT5 servers?',
      a: 'BrokerBros Back Office utilizes high-speed C++ server plugins and native Manager API integration to sync accounts, trades, leverage, and balance operations instantly without latency or platform restarts.'
    },
    {
      q: 'Can we configure custom A/B Book risk parameters per group?',
      a: 'Yes. You can define dynamic risk rules based on volume threshold, profit ratio, news trading flags, or scalping patterns to auto-switch accounts between A-Book execution and B-Book internal clearing.'
    },
    {
      q: 'Is multi-currency and multi-jurisdiction compliance supported?',
      a: 'Absolutey. The system supports 26+ base deposit currencies, multi-currency ledger balances, and automated regulatory export formats compliant with CySEC, FCA, ASIC, and offshore jurisdictions.'
    },
    {
      q: 'What is the setup time for a turnkey Back Office deployment?',
      a: 'Our cloud infrastructure template deploys in 24 to 48 hours, fully pre-integrated with your trading servers, payment gateways, and CRM modules.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#090D14] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      
      {/* SECTION 1: HERO & INTERACTIVE BACKOFFICE MOCKUP */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-slate-200 dark:border-slate-800/80">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 shadow-xs">
              <span>Live Operational Status</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Institutional Admin{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Back Office & Risk Control
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Complete command center for white-label brokerages. Automate A/B book routing, manage leverage risk, monitor multi-server liquidity, and streamline regulatory reporting.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenAccount}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Launch Back Office Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onOpenAccount}
                className="w-full sm:w-auto px-7 py-4 font-bold text-sm rounded-xl border transition-all flex items-center justify-center gap-2 cursor-pointer bg-slate-50 dark:bg-[#121520] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Download Tech Architecture Specs</span>
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> MT4/MT5 Server Native</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Sub-2ms Risk Execution</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 26 Base Currencies</span>
            </div>
          </div>

          {/* Interactive Back Office Dashboard Preview Card */}
          <div className="mt-14 max-w-5xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#121520] shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Header Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2">BrokerBros Admin Core v4.8</span>
              </div>
              <div className="flex items-center gap-2">
                {(['risk', 'accounts', 'reporting'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer capitalize ${
                      activeTab === tab
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-emerald-500'
                    }`}
                  >
                    {tab} Module
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Content Panel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>A-Book Volume</span>
                  <span className="text-emerald-500 font-bold">+18.4%</span>
                </div>
                <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">$148,920,400</div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[78%]" />
                </div>
                <p className="text-[11px] text-slate-500 font-mono">24 Liquidity Providers Connected</p>
              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>B-Book Exposure</span>
                  <span className="text-amber-500 font-bold">Optimal</span>
                </div>
                <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">$32,450,120</div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[42%]" />
                </div>
                <p className="text-[11px] text-slate-500 font-mono">Auto-Hedge Limit: $500K / Symbol</p>
              </div>

              {/* Card 3 */}
              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Active MT5 Traders</span>
                  <span className="text-emerald-500 font-bold">Online</span>
                </div>
                <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">18,492</div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-cyan-500 h-full w-[91%]" />
                </div>
                <p className="text-[11px] text-slate-500 font-mono">Execution SLA: 1.4ms Average</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: CORE FEATURES GRID */}
      <section className="py-24 bg-slate-50/50 dark:bg-[#0c1017] border-b border-slate-200 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Enterprise Risk & Management Capabilities
            </h2>
            <p className="text-slate-600 dark:text-slate-300 font-medium">
              Everything your dealing desk and risk department needs to protect capital and maximize brokerage margins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white dark:bg-[#121520] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-xl group space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: WORKFLOW VISUALIZER */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
              <Activity className="w-3.5 h-3.5" />
              <span>Real-Time Data Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              How Back Office Manages Your Brokerage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Trader Execution', desc: 'Orders arrive from MT4/MT5/cTrader terminals via ultra-low latency WebSocket bridge.' },
              { step: '02', title: 'Risk Engine Filter', desc: 'Back Office analyzes account equity, flow toxicity, and exposure limits in < 1.8ms.' },
              { step: '03', title: 'Smart A/B Routing', desc: 'Profitable flow is auto-routed to LPs (A-Book), while retail flow is matched internally (B-Book).' },
              { step: '04', title: 'Ledger & Audit', desc: 'P&L, commissions, and swap rebates are logged into immutable compliance audit records.' },
            ].map((step, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#121520] border border-slate-200 dark:border-slate-800 space-y-3 relative">
                <span className="text-3xl font-mono font-black text-emerald-500/40 dark:text-emerald-400/30">{step.step}</span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TECHNICAL SPECS TABLE */}
      <section className="py-24 bg-slate-50/50 dark:bg-[#0c1017] border-b border-slate-200 dark:border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
              Technical Specifications & Architecture Benchmarks
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-[#121520]">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 uppercase font-bold">
                <tr>
                  <th className="py-4 px-6">System Component</th>
                  <th className="py-4 px-6">Specification Tier</th>
                  <th className="py-4 px-6 text-right">Status SLA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/60 font-medium text-slate-800 dark:text-slate-200">
                {specs.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="py-4 px-6 font-bold">{item.module}</td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{item.tier}</td>
                    <td className="py-4 px-6 text-right text-emerald-600 dark:text-emerald-400 font-bold">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: INTEGRATION ECOSYSTEM */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            Native Platform & LP Compatibility
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {['MetaTrader 4', 'MetaTrader 5', 'cTrader', 'FIX 4.4 API', 'Match-Trader', 'DXtrade'].map((platform, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-[#121520] border border-slate-200 dark:border-slate-800 font-mono font-bold text-xs text-slate-700 dark:text-slate-300 flex items-center justify-center">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ ACCORDION */}
      <section className="py-24 bg-slate-50/50 dark:bg-[#0c1017] border-b border-slate-200 dark:border-slate-800/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Back Office FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#121520] overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === idx ? 'rotate-180 text-emerald-500' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <CTASection onOpenAccount={onOpenAccount} title="Deploy Back Office Engine For Your Brokerage." />

    </div>
  );
};
