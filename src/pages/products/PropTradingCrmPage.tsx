import React, { useState } from 'react';
import {
  Trophy,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Download,
  Activity,
  Sliders,
  ChevronDown,
  AlertTriangle,
  Zap,
  Target,
  BarChart3,
  DollarSign,
  Users,
  Award,
  Layers,
  Sparkles
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PropTradingCrmPageProps {
  onOpenAccount: () => void;
}

export const PropTradingCrmPage: React.FC<PropTradingCrmPageProps> = ({ onOpenAccount }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPhase, setSelectedPhase] = useState<'phase1' | 'phase2' | 'funded'>('phase1');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: Target,
      title: 'Automated Rule Evaluation Engine',
      description: 'Instant calculation of maximum daily loss, overall trailing drawdown, profit target, and minimum trading day rules with sub-second accuracy.',
      badge: 'Rule Engine'
    },
    {
      icon: Trophy,
      title: 'Custom Challenge Builder',
      description: 'Create multi-phase evaluation tiers (1-Step, 2-Step, Instant Funding) with customized profit splits up to 90/10.',
      badge: 'Flexibility'
    },
    {
      icon: AlertTriangle,
      title: 'Anti-Cheating & Arbitrage Shield',
      description: 'Detect latency arbitrage, EA exploitation, copy trading between accounts, and news event manipulation before payouts are triggered.',
      badge: 'Security'
    },
    {
      icon: DollarSign,
      title: 'Automated Payout Gateway',
      description: 'Streamlined trader payout processing supporting Crypto (USDT), Deel, Wise, and direct bank wire transfers.',
      badge: 'Payouts'
    },
    {
      icon: BarChart3,
      title: 'Trader Leaderboard & Analytics',
      description: 'Public and internal leaderboards showcasing top funded traders, win rate statistics, equity curves, and risk distribution.',
      badge: 'Engagement'
    },
    {
      icon: Users,
      title: 'Integrated Prop CRM Portal',
      description: 'Manage challenge purchases, KYC verification, certificate generation, and Discord/Telegram automated role updates.',
      badge: 'CRM Integration'
    }
  ];

  const specs = [
    { module: 'Rule Processing Latency', tier: '< 0.5 milliseconds', status: 'Real-Time' },
    { module: 'Supported Trading Platforms', tier: 'MT4, MT5, cTrader, TradeLocker', status: 'Native API' },
    { module: 'Drawdown Calculation Mode', tier: 'High-Water Mark / Static / Daily Balance', status: 'Configurable' },
    { module: 'Automated Account Provisioning', tier: '< 3 seconds post-payment', status: 'Instant SLA' },
    { module: 'Certificate Generation', tier: 'Automated High-Res PDF Watermarking', status: 'Included' },
  ];

  const faqs = [
    {
      q: 'Can we build custom 1-Step and 2-Step challenge rules?',
      a: 'Yes. BrokerBros Prop Firm CRM allows complete customization of evaluation phases, max daily drawdown (e.g. 5%), total max drawdown (e.g. 10%), profit targets, and profit share percentages.'
    },
    {
      q: 'How are account breaches handled?',
      a: 'The moment a trader violates a daily loss limit or total drawdown threshold, the system immediately revokes trading access, closes open positions, and sends automated breach notifications.'
    },
    {
      q: 'Does the system integrate with payment gateways like Stripe or Crypto?',
      a: 'Yes. Challenge purchases and subscription payments are pre-integrated with Stripe, Crypto gateways (USDT/BTC/ETH), and local payment processors.'
    },
    {
      q: 'Is copy trading between challenge accounts blocked automatically?',
      a: 'Our Anti-Cheating Shield continuously scans execution timestamps, IP addresses, and trade direction parameters to identify unauthorized group copy trading.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#090D14] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      
      {/* SECTION 1: HERO & INTERACTIVE PROP MOCKUP */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-slate-200 dark:border-slate-800/80">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 shadow-xs">
              <Trophy className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Prop Firm Infrastructure Module</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Turnkey Prop Firm{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Challenge & CRM Engine
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Launch your funded trading firm in under 3 days. Complete rule engine, automated breach detection, instant challenge account creation, and 90/10 payout management.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenAccount}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Launch Prop Engine Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onOpenAccount}
                className="w-full sm:w-auto px-7 py-4 font-bold text-sm rounded-xl border transition-all flex items-center justify-center gap-2 cursor-pointer bg-slate-50 dark:bg-[#121520] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Prop Firm Business Whitepaper</span>
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Automated Risk Breach Detection</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 1-Step & 2-Step Support</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Crypto & Deel Payouts</span>
            </div>
          </div>

          {/* Interactive Challenge Tracker Preview Card */}
          <div className="mt-14 max-w-5xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#121520] shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">$100,000 Executive Challenge Status</span>
              </div>
              <div className="flex items-center gap-2">
                {(['phase1', 'phase2', 'funded'] as const).map((phase) => (
                  <button
                    key={phase}
                    onClick={() => setSelectedPhase(phase)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer uppercase ${
                      selectedPhase === phase
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-emerald-500'
                    }`}
                  >
                    {phase}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Profit Target ($10,000)</span>
                  <span className="text-emerald-500 font-bold">84% Complete</span>
                </div>
                <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">$8,420.00</div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[84%]" />
                </div>
                <p className="text-[11px] text-slate-500 font-mono">Remaining: $1,580.00</p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Max Daily Loss ($5,000)</span>
                  <span className="text-emerald-500 font-bold">Safe</span>
                </div>
                <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">-$1,120.00</div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[22%]" />
                </div>
                <p className="text-[11px] text-slate-500 font-mono">Buffer: $3,880.00</p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Trading Days</span>
                  <span className="text-emerald-500 font-bold">Passed</span>
                </div>
                <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">7 / 4 Min Days</div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[100%]" />
                </div>
                <p className="text-[11px] text-slate-500 font-mono">Minimum Day SLA Met</p>
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
              Institutional Prop Firm Suite
            </h2>
            <p className="text-slate-600 dark:text-slate-300 font-medium">
              Everything needed to operate, scale, and automate a modern funded trading challenge firm.
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
              <span>Prop Lifecycle Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              End-to-End Challenge Execution Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Challenge Purchase', desc: 'Trader selects $10K–$200K evaluation and pays via Credit Card or Crypto.' },
              { step: '02', title: 'Instant Account Provision', desc: 'System automatically creates MT4/MT5 demo credentials in under 3 seconds.' },
              { step: '03', title: 'Real-Time Monitoring', desc: 'Rule engine monitors daily drawdown, total loss, and profit target with < 0.5ms speed.' },
              { step: '04', title: 'Payout & Scaling', desc: 'Upon meeting targets, system generates certificate and unlocks up to 90% profit share.' },
            ].map((step, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#121520] border border-slate-200 dark:border-slate-800 space-y-3">
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
              Prop Engine Specifications & Performance Limits
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
            Prop Platform & Gateway Integrations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {['MT4 / MT5 API', 'cTrader API', 'TradeLocker', 'Stripe', 'Deel Payouts', 'USDT / Crypto'].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-[#121520] border border-slate-200 dark:border-slate-800 font-mono font-bold text-xs text-slate-700 dark:text-slate-300 flex items-center justify-center">
                {item}
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
              Prop Firm CRM FAQ
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
      <CTASection onOpenAccount={onOpenAccount} title="Launch Your Own Prop Trading Firm Today." />

    </div>
  );
};
