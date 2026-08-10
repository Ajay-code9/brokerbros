import React, { useState } from 'react';
import { 
  Users, CreditCard, Ticket, BarChart3, ArrowRight, UserPlus, FileCheck,
  Building2, Database, Settings, ShieldCheck, Activity, Globe, Play, Server,
  Check, ExternalLink, Network, FileText, Download, Fingerprint, Eye, Award, ArrowDown
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}



export const BrokerCrmPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePlan, setActivePlan] = useState<'monthly' | 'annual'>('annual');

  const features = [
    { icon: Users, title: 'Lead & Client Profiles', desc: 'Track multi-channel lead acquisition, client activity logs, status pipelines, and contact interactions in one central dashboard.', badge: '360° View' },
    { icon: FileCheck, title: 'KYC & Document Workflow', desc: 'Automated identity verification, proof of address approvals, document expiry tracking, and compliance audit trail.', badge: 'Auto-KYC' },
    { icon: UserPlus, title: 'Trading Account Management', desc: 'Create MT4/MT5/cTrader accounts instantly, manage leverage levels, currency base settings, and password resets.', badge: 'Multi-Platform' },
    { icon: CreditCard, title: 'Deposits & Withdrawals', desc: 'Streamlined payment requests, automated wallet-to-trading account transfers, and instant fiat & crypto gateway handling.', badge: 'Auto-Processing' },
    { icon: Ticket, title: 'Tickets & Communication', desc: 'Built-in support ticket system, automated email triggers, client notes, and real-time chat integration for client managers.', badge: 'Helpdesk' },
    { icon: BarChart3, title: 'Analytics & Audit History', desc: 'Comprehensive real-time reporting on client lifetime value, net deposits, active traders, and administrative action logs.', badge: 'Live Metrics' },
  ];

  const modules = [
    { icon: Globe, title: 'White-Label Client Portal', items: ['Custom branded domain', 'Mobile-responsive UI', 'Multi-language support', 'Customisable color schemes', 'Embedded web trader'] },
    { icon: ShieldCheck, title: 'Compliance Engine', items: ['Sumsub & Jumio integration', 'Risk scoring & AML checks', 'Automated document expiry alerts', 'Jurisdiction rulesets', 'MiFID II / CySEC reporting'] },
    { icon: Database, title: 'Multi-Tier IB System', items: ['Unlimited IB levels', 'Rebate calculation engine', 'Custom commission structures', 'IB referral links & banners', 'Real-time payout processing'] },
    { icon: Network, title: 'Platform Integrations', items: ['MetaTrader 4 / 5 Manager API', 'cTrader Server integration', 'Match-Trader connectivity', 'DXtrade sync', 'PAMM / MAM integration'] },
    { icon: Activity, title: 'Marketing Automation', items: ['Automated email sequences', 'Welcome & KYC reminders', 'Deposit bonus campaigns', 'Abandoned cart recovery', 'UTM tracking & analytics'] },
    { icon: Server, title: 'Enterprise Security', items: ['Role-based access control (RBAC)', '2FA enforced logins', 'Detailed audit trails', 'IP whitelisting', 'Encrypted data at rest'] },
  ];

  const integrations = [
    { name: 'MetaTrader 4', desc: 'Trading Platform' },
    { name: 'MetaTrader 5', desc: 'Trading Platform' },
    { name: 'cTrader', desc: 'Trading Platform' },
    { name: 'Sumsub', desc: 'KYC/AML' },
    { name: 'Jumio', desc: 'Identity' },
    { name: 'Stripe', desc: 'Fiat Payments' },
    { name: 'Binance Pay', desc: 'Crypto Gateway' },
    { name: 'Match-Trader', desc: 'Platform' },
    { name: 'Zendesk', desc: 'Support' },
    { name: 'Twilio', desc: 'SMS/Voice' },
  ];

  const testimonials = [
    {
      quote: "BrokerBros CRM completely transformed our operations. We reduced KYC processing time from 24 hours to 3 minutes, and the automated deposit flows have significantly boosted our conversion rates.",
      name: "Marcus Reynolds",
      role: "CEO, Vertex Markets",
      rating: 5,
    },
    {
      quote: "The multi-tier IB system is the best we've seen. Calculating complex rebates across 5 levels used to take our accounting team days. Now it's entirely automated and real-time.",
      name: "Elena Rostova",
      role: "Head of Partnerships, Nexus FX",
      rating: 5,
    },
    {
      quote: "Migrating 50,000 clients from our legacy CRM was seamless. The support team is incredible, and the MT5 Manager API integration works flawlessly without any delays.",
      name: "David Chen",
      role: "CTO, Horizon Brokerage",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: 'Does the CRM integrate with MT4 and MT5?',
      a: 'Yes, our CRM features deep, native integration with both MetaTrader 4 and MetaTrader 5 via the Manager API. This allows for instant account creation, password resets, leverage changes, and real-time balance/equity sync directly from the CRM.',
    },
    {
      q: 'Can we customise the Client Portal with our own branding?',
      a: 'Absolutely. The White-Label Client Portal can be hosted on your own domain (e.g., portal.yourbroker.com). You can customize logos, colors, typography, email templates, and the entire layout to match your brand guidelines perfectly.',
    },
    {
      q: 'How does the KYC automation work?',
      a: 'We integrate with leading KYC providers like Sumsub and Jumio. When a client uploads their documents, the system uses AI to verify identity and proof of address instantly. If approved, the system automatically opens their trading account without manual intervention.',
    },
    {
      q: 'Can we set up custom roles and permissions for our staff?',
      a: 'Yes, the CRM includes a granular Role-Based Access Control (RBAC) system. You can create custom roles (e.g., KYC Officer, Sales Agent, Support Staff) and define exactly which modules, data, and actions they can access.',
    },
    {
      q: 'Is a multi-tier IB (Introducing Broker) system included?',
      a: 'Yes. The CRM includes a comprehensive IB portal and rebate engine. You can configure infinite hierarchical levels, set custom pip or percentage-based rebate rules per instrument, and automate daily payouts to IB wallets.',
    },
    {
      q: 'Where is our client data hosted?',
      a: 'Data is hosted on highly secure, compliant AWS or Google Cloud infrastructure in your preferred jurisdiction (e.g., Frankfurt, London, Singapore). We utilize bank-grade encryption at rest and in transit.',
    },
  ];

  const plans = [
    {
      name: 'Startup Broker',
      price: activePlan === 'annual' ? '$499' : '$599',
      period: '/ month',
      desc: 'Essential CRM and Client Portal for new brokerages.',
      features: ['Up to 5,000 Active Clients', '1 Trading Platform Integration', 'Standard Client Portal', 'Basic IB System (1 Tier)', 'Email Support'],
      cta: 'Request Demo',
      highlight: false,
    },
    {
      name: 'Growth Broker',
      price: activePlan === 'annual' ? '$999' : '$1,199',
      period: '/ month',
      desc: 'Advanced automation and multi-tier IB for growing firms.',
      features: ['Up to 25,000 Active Clients', '3 Trading Platform Integrations', 'Multi-Tier IB System', 'Automated KYC Integrations', 'API Access', '24/7 Priority Support'],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'Dedicated infrastructure for large-scale operations.',
      features: ['Unlimited Clients', 'Unlimited Integrations', 'Custom Development Hours', 'Dedicated Account Manager', 'On-Premise Deployment Option', 'SLA Uptime Guarantee'],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-slate-300 selection:bg-emerald-500/30 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-24 overflow-hidden border-b border-slate-800/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
                Complete Client <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                  Lifecycle Control
                </span>
              </h1>
              
              <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
                Manage every lead, client, document, account, and interaction from one connected broker workspace. Unified operations built for scale, speed, and real-time visibility.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button 
                  onClick={onOpenAccount}
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2"
                >
                  Request CRM Demo <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" /> Watch Overview
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> SOC2 Compliant</div>
                <div className="flex items-center gap-1.5"><Server className="w-4 h-4 text-emerald-500" /> 99.99% Uptime SLA</div>
                <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> GDPR Ready</div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-[24px] blur-2xl"></div>
              
              <div className="relative">
                <img 
                  src="/broker-crm-img-one.png" 
                  alt="Broker CRM Interface" 
                  className="w-full h-auto rounded-[18px] shadow-2xl border border-slate-800 relative z-10" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800/50">
            <div className="text-center">
              <div className="text-3xl font-black text-white font-mono mb-1">500+</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Brokers Powered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white font-mono mb-1">2.4M</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white font-mono mb-1">&lt;3s</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Auto-KYC Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-emerald-400 font-mono mb-1">99.99%</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">System Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLATFORM INTEGRATIONS */}
      <section className="py-12 border-b border-slate-800/50 overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 relative z-10">
          <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest">Pre-Integrated With Industry Leaders</p>
        </div>
        
        {/* Marquee Container */}
        <div className="w-full relative group overflow-hidden">
          {/* Gradient Fades for edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-marquee gap-4 w-max px-4">
            {[...integrations, ...integrations].map((integration, i) => (
              <div key={i} className="flex-shrink-0 w-48 bg-slate-900 border border-slate-800 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-slate-800 hover:border-slate-700 transition-colors">
                <div className="w-10 h-10 bg-slate-800 rounded-full mb-3 flex items-center justify-center text-emerald-500 font-black text-xl">
                  {integration.name.charAt(0)}
                </div>
                <div className="font-bold text-white text-sm">{integration.name}</div>
                <div className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">{integration.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE FEATURES GRID */}
      <section className="py-24 border-b border-slate-800/50 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-900/10 rounded-[100%] blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Complete Operations Hub</h2>
            <p className="text-slate-400 text-lg">Engineered specifically for forex brokers, prop firms, and institutional multi-asset trading operations.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 border border-emerald-900 px-2 py-1 rounded">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEEP DIVE MODULES */}
      <section className="py-24 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Advanced Architecture</h2>
              <p className="text-slate-400 text-lg">Every tool your staff needs to manage thousands of clients efficiently, without touching a database or writing a line of code.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl flex items-start gap-3">
                <div className="text-emerald-400 mt-1"><Check className="w-5 h-5" /></div>
                <div>
                  <div className="text-white font-bold text-sm">Automated Workflows</div>
                  <div className="text-slate-500 text-xs mt-1">Rules-based routing for KYC & deposits</div>
                </div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl flex items-start gap-3">
                <div className="text-emerald-400 mt-1"><Check className="w-5 h-5" /></div>
                <div>
                  <div className="text-white font-bold text-sm">API First</div>
                  <div className="text-slate-500 text-xs mt-1">Headless capability via REST APIs</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 border border-slate-800 rounded-2xl overflow-hidden">
            {modules.map((module, i) => (
              <div key={i} className="bg-slate-950 p-8">
                <module.icon className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{module.title}</h3>
                <ul className="space-y-3">
                  {module.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 border-b border-slate-800/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Trusted by Top Brokers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col h-full relative group hover:border-slate-700 transition-colors">
                <div className="absolute top-8 right-8 text-slate-800 group-hover:text-slate-700 transition-colors">
                   <div className="text-6xl font-serif">"</div>
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(test.rating)].map((_, j) => (
                    <div key={j} className="w-4 h-4 bg-emerald-500 rounded-sm" />
                  ))}
                </div>
                <p className="text-slate-300 mb-8 flex-1 relative z-10 text-sm leading-relaxed">
                  "{test.quote}"
                </p>
                <div>
                  <div className="font-bold text-white">{test.name}</div>
                  <div className="text-xs text-slate-500">{test.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRICING */}
      <section className="py-24 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">Transparent CRM Pricing</h2>
            
            {/* Toggle */}
            <div className="inline-flex items-center p-1 bg-slate-950 border border-slate-800 rounded-lg">
              <button 
                onClick={() => setActivePlan('monthly')}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activePlan === 'monthly' ? 'bg-slate-800 text-white shadow' : 'text-slate-500 hover:text-white'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setActivePlan('annual')}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${activePlan === 'annual' ? 'bg-emerald-600 text-white shadow' : 'text-slate-500 hover:text-white'}`}
              >
                Annually <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded uppercase tracking-wider">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`bg-slate-950 border rounded-2xl p-8 flex flex-col ${plan.highlight ? 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative scale-105 z-10' : 'border-slate-800'}`}>
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-400 mb-6 h-10">{plan.desc}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-slate-500 font-mono text-sm ml-1">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-lg font-bold text-sm transition-colors ${plan.highlight ? 'bg-emerald-600 hover:bg-emerald-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-24 border-b border-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-all">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between font-bold text-white hover:bg-slate-800/50 transition-colors text-left"
                >
                  <span>{faq.q}</span>
                  <div className={`text-emerald-500 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}>
                    <ArrowDown className="w-5 h-5" />
                  </div>
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Scale Your Brokerage Operations</h2>
          <p className="text-emerald-100/80 text-xl mb-10 max-w-2xl mx-auto">
            Deploy a fully branded, secure client portal and management hub tailored to your brokerage. Launch in days, not months.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onOpenAccount}
              className="px-8 py-4 bg-white text-emerald-900 font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-xl"
            >
              Request Live Demo
            </button>
            <button className="px-8 py-4 bg-emerald-800 text-white font-bold rounded-lg border border-emerald-700 hover:bg-emerald-700 transition-colors">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
