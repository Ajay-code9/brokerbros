import React, { useState } from 'react';
import {
  Briefcase,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Download,
  Activity,
  Sliders,
  ChevronDown,
  Globe2,
  Users,
  BarChart3,
  Layers,
  Sparkles,
  Zap,
  Target,
  FileSpreadsheet
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface B2bCrmPageProps {
  onOpenAccount: () => void;
}

export const B2bCrmPage: React.FC<B2bCrmPageProps> = ({ onOpenAccount }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPipelineStage, setSelectedPipelineStage] = useState<'lead' | 'contacted' | 'funded'>('lead');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: Briefcase,
      title: 'Institutional Lead Pipeline Automation',
      description: 'Kanban-style sales pipeline tailored for forex & CFD brokerages. Track leads from registration through deposit conversion.',
      badge: 'Sales Engine'
    },
    {
      icon: Users,
      title: 'Role-Based Access Control (RBAC)',
      description: 'Granular permissions for sales managers, retention agents, compliance officers, and regional country managers.',
      badge: 'Security'
    },
    {
      icon: Target,
      title: 'Automated Lead Distribution Engine',
      description: 'Intelligent lead assignment based on trader language, geographic region, deposit size, and agent capacity.',
      badge: 'Lead Routing'
    },
    {
      icon: BarChart3,
      title: 'Sales Retention & Deposit Analytics',
      description: 'Real-time sales leaderboards, agent call metrics, conversion rates, and client LTV (Lifetime Value) forecasting.',
      badge: 'Analytics'
    },
    {
      icon: FileSpreadsheet,
      title: 'Integrated VOIP & SMS Dialing',
      description: 'Click-to-call VOIP integration (Twilio, VoIPms) with call recording, automated SMS reminders, and WhatsApp API webhooks.',
      badge: 'Communication'
    },
    {
      icon: Layers,
      title: 'Multi-Brand & White-Label Isolation',
      description: 'Manage multiple brokerage brands, offshore entities, and regulated subsidiaries within a single unified CRM database.',
      badge: 'Multi-Brand'
    }
  ];

  const specs = [
    { module: 'Database Query Speed', tier: '< 2.5ms Indexing Engine', status: 'High-Performance' },
    { module: 'VOIP & Telephony API', tier: 'Twilio / Asterisk / SIP Native', status: 'Pre-Built' },
    { module: 'Automated Lead Assignment SLA', tier: 'Instant (< 1 second post-signup)', status: 'Real-Time' },
    { module: 'Compliance Audit Trail', tier: 'Full Agent Activity Logging', status: 'Immutable' },
    { module: 'Max CRM Active Users', tier: 'Unlimited Sales & Support Agents', status: 'Scalable' },
  ];

  const faqs = [
    {
      q: 'How does the B2B CRM help sales and retention teams?',
      a: 'The CRM provides sales agents with complete 360-degree client visibility, including live MT4/MT5 trading activity, deposit history, call logs, automated follow-up reminders, and instant click-to-dial VOIP.'
    },
    {
      q: 'Can we restrict sales agents from viewing client contact details?',
      a: 'Yes. Our Role-Based Access Control (RBAC) allows masking phone numbers and emails so sales agents can call clients via integrated VOIP without exporting sensitive data.'
    },
    {
      q: 'Does it support VOIP call recording and SMS integration?',
      a: 'Yes. It integrates natively with Twilio, Asterisk, and SIP VOIP providers for 1-click dialing, call recording storage, and automated SMS/WhatsApp notifications.'
    },
    {
      q: 'Can multiple brokerage brands be managed under one CRM?',
      a: 'Absolutey. The multi-tenant architecture allows managing separate brokerage entities, domains, and brands with strict data isolation between teams.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#090D14] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      
      {/* SECTION 1: HERO & INTERACTIVE B2B CRM MOCKUP */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-slate-200 dark:border-slate-800/80">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 shadow-xs">
              <Briefcase className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Enterprise CRM Infrastructure</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Institutional B2B Brokerage{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Sales & Retention CRM
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Supercharge your sales team and retention agents. Automated lead distribution, integrated VOIP dialing, role-based data protection, and real-time deposit conversion analytics.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenAccount}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Request B2B CRM Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onOpenAccount}
                className="w-full sm:w-auto px-7 py-4 font-bold text-sm rounded-xl border transition-all flex items-center justify-center gap-2 cursor-pointer bg-slate-50 dark:bg-[#121520] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>B2B CRM Workflow Blueprint</span>
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Integrated VOIP & 1-Click Dialing</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Automated Lead Routing</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Role-Based Data Masking</span>
            </div>
          </div>

          {/* Interactive B2B CRM Preview Card */}
          <div className="mt-14 max-w-5xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#121520] shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-emerald-500" />
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">BrokerBros B2B Sales Engine • Pipeline View</span>
              </div>
              <div className="flex items-center gap-2">
                {(['lead', 'contacted', 'funded'] as const).map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setSelectedPipelineStage(stage)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer uppercase ${
                      selectedPipelineStage === stage
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-emerald-500'
                    }`}
                  >
                    {stage} Stage
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Monthly New Registrations</span>
                  <span className="text-emerald-500 font-bold">+32% Conversion</span>
                </div>
                <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">1,482 Leads</div>
                <div className="text-[11px] text-slate-500 font-mono">Auto-Assigned to 12 Sales Agents</div>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>First Time Deposits (FTD)</span>
                  <span className="text-emerald-500 font-bold">$1,250 Avg FTD</span>
                </div>
                <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">$842,500.00</div>
                <p className="text-[11px] text-slate-500 font-mono">Retention Call SLA: Sub-15 Mins</p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>VOIP Telephony SLA</span>
                  <span className="text-emerald-500 font-bold">Twilio Active</span>
                </div>
                <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Call Recording Encrypted</span>
                </div>
                <p className="text-[11px] text-slate-500 font-mono">Data Masking Active</p>
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
              Complete B2B Sales & Retention Suite
            </h2>
            <p className="text-slate-600 dark:text-slate-300 font-medium">
              Engineered specifically for institutional sales teams, call centers, and multi-regional brokerage entities.
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
              <span>Sales Conversion Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Automated Lead-to-Deposit Flow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Lead Capture', desc: 'New trader signs up via website, landing page, or partner referral link.' },
              { step: '02', title: 'Smart Distribution', desc: 'System assigns lead to appropriate regional sales desk based on language & IP.' },
              { step: '03', title: 'VOIP Contact', desc: 'Agent initiates 1-click call from CRM with encrypted phone number masking.' },
              { step: '04', title: 'Deposit & Retention', desc: 'Deposit confirmed in real-time; client tagged for ongoing retention follow-up.' },
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
              B2B CRM Specifications & Security Benchmarks
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
            Supported B2B Telephony & Messaging Integrations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {['Twilio VOIP', 'SIP Telephony', 'WhatsApp Business', 'SendGrid Email', 'SMS Gateways', 'Zapier Webhooks'].map((item, i) => (
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
              B2B CRM FAQ
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
      <CTASection onOpenAccount={onOpenAccount} title="Empower Your Sales Team With Institutional B2B CRM." />

    </div>
  );
};
