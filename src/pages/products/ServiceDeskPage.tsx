import React, { useState } from 'react';
import {
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Download,
  Activity,
  Sliders,
  ChevronDown,
  Globe2,
  MessageSquare,
  Clock,
  UserCheck,
  Check,
  Layers,
  Sparkles,
  Zap,
  Headphones
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface ServiceDeskPageProps {
  onOpenAccount: () => void;
}

export const ServiceDeskPage: React.FC<ServiceDeskPageProps> = ({ onOpenAccount }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTicketTab, setActiveTicketTab] = useState<'open' | 'resolved' | 'sla'>('open');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: Headphones,
      title: 'Integrated Helpdesk & Ticketing System',
      description: 'Centralized support portal for trader inquiries regarding deposits, withdrawals, MT4/MT5 tech issues, and KYC status updates.',
      badge: 'Helpdesk Engine'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat & Instant Messaging Widgets',
      description: 'Embeddable live chat widget for your website and trader portal with automated bot routing and agent assignment.',
      badge: 'Live Chat'
    },
    {
      icon: Clock,
      title: 'Automated SLA & Escalation Engine',
      description: 'Set priority response SLA tiers (e.g. VIP traders < 5 mins response) with auto-escalation to senior management.',
      badge: 'SLA Protection'
    },
    {
      icon: ShieldCheck,
      title: 'Trader Verification & Audit Context',
      description: 'Support agents immediately view trader balance, open positions, equity, account leverage, and KYC tier during chats.',
      badge: 'Context View'
    },
    {
      icon: Globe2,
      title: 'Multilingual AI Auto-Translation',
      description: 'Real-time auto-translation of trader messages across 24+ languages, allowing agents to respond seamlessly in native languages.',
      badge: 'AI Translation'
    },
    {
      icon: Layers,
      title: 'Knowledge Base & Self-Service Portal',
      description: 'Empower traders with searchable FAQs, platform tutorial guides, and video tutorials reducing support volume by 40%.',
      badge: 'Self-Service'
    }
  ];

  const specs = [
    { module: 'Ticket Response SLA Tracking', tier: 'Real-Time Stopwatch & Auto-Escalation', status: 'Active' },
    { module: 'Live Chat Latency', tier: 'Sub-100ms WebSocket Connection', status: 'Instant' },
    { module: 'Multilingual Auto-Translate', tier: 'DeepL / Google Neural API Bridge', status: '24 Languages' },
    { module: 'CRM & Back Office Sync', tier: 'Native Bidirectional Account Lookup', status: 'Direct API' },
    { module: 'Support Agent Seats', tier: 'Unlimited Concurrent Agents', status: 'Unlimited' },
  ];

  const faqs = [
    {
      q: 'How does the Service Desk integrate with trader accounts?',
      a: 'When a trader opens a chat or submits a ticket, the Service Desk automatically pulls their real-time MT4/MT5 equity, open trades, deposit status, and KYC verification tier directly into the agent dashboard.'
    },
    {
      q: 'Can we set custom SLA response time warnings for VIP clients?',
      a: 'Yes. You can define priority queues (VIP, Institutional, Standard) with automated alert triggers if a ticket remains unanswered past your defined SLA limit.'
    },
    {
      q: 'Does it support live chat widget customization?',
      a: 'Absolutey. The live chat widget can be fully customized with your brokerage logo, brand colors, custom welcome messages, and pre-chat survey forms.'
    },
    {
      q: 'Is real-time message translation available for global brokers?',
      a: 'Yes. Integrated AI translation allows your support agents to communicate with traders worldwide in their local languages instantly.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#090D14] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      
      {/* SECTION 1: HERO & INTERACTIVE SERVICE DESK MOCKUP */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-slate-200 dark:border-slate-800/80">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 shadow-xs">
              <Headphones className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Trader Support & Helpdesk Module</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Enterprise Brokerage{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Service Desk & Support Portal
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Deliver world-class 24/7 customer support for your traders. Integrated ticketing, real-time live chat widget, AI translation, and direct live trader account context.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenAccount}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Launch Service Desk Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onOpenAccount}
                className="w-full sm:w-auto px-7 py-4 font-bold text-sm rounded-xl border transition-all flex items-center justify-center gap-2 cursor-pointer bg-slate-50 dark:bg-[#121520] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Support SLA Architecture Spec</span>
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Real-Time Live Chat Widget</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Multilingual AI Translation</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Direct MT4/MT5 Account Lookup</span>
            </div>
          </div>

          {/* Interactive Service Desk Preview Card */}
          <div className="mt-14 max-w-5xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#121520] shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <Headphones className="w-5 h-5 text-emerald-500" />
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">BrokerBros Agent Console • Ticket Queue</span>
              </div>
              <div className="flex items-center gap-2">
                {(['open', 'resolved', 'sla'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTicketTab(tab)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer uppercase ${
                      activeTicketTab === tab
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-emerald-500'
                    }`}
                  >
                    {tab} Queue
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Open Ticket Queue</span>
                  <span className="text-emerald-500 font-bold">Sub-2 Min Response</span>
                </div>
                <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">14 Active</div>
                <div className="text-[11px] text-slate-500 font-mono">3 VIP Priority Tickets</div>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>First Response Time</span>
                  <span className="text-emerald-500 font-bold">Optimal</span>
                </div>
                <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">1m 42s Avg</div>
                <div className="text-[11px] text-slate-500 font-mono">99.2% SLA Compliance</div>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Live Chat Widget</span>
                  <span className="text-emerald-500 font-bold">Online 24/7</span>
                </div>
                <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-5 h-5" />
                  <span>AI Translation Active</span>
                </div>
                <p className="text-[11px] text-slate-500 font-mono">Auto-Sync With Back Office</p>
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
              Institutional Service Desk Features
            </h2>
            <p className="text-slate-600 dark:text-slate-300 font-medium">
              Everything your customer support team needs to deliver rapid, high-touch assistance to retail and institutional traders.
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
              <span>Trader Support Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Automated Support Resolution Flow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Trader Inquiry', desc: 'Trader initiates live chat or submits ticket via Client Area or Mobile App.' },
              { step: '02', title: 'Context Fetch', desc: 'System automatically attaches MT4/MT5 account balance, leverage, and KYC tier to ticket.' },
              { step: '03', title: 'AI Translation & Agent', desc: 'Message is auto-translated; available agent responds in seconds with exact account info.' },
              { step: '04', title: 'Resolution & Audit', desc: 'Ticket closed with satisfaction rating; transcript logged into immutable audit history.' },
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
              Service Desk Technical Benchmarks
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
            Support Channel Integrations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {['Web Live Chat', 'Portal Ticketing', 'Email Gateway', 'Telegram Bot', 'WhatsApp API', 'DeepL AI'].map((item, i) => (
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
              Service Desk FAQ
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
      <CTASection onOpenAccount={onOpenAccount} title="Elevate Your Brokerage Support Experience Today." />

    </div>
  );
};
