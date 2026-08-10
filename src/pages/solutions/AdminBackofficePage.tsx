import React, { useState } from 'react';
import {
  Users, CreditCard, BarChart3, ArrowRight, UserPlus, FileCheck,
  Building2, Database, Settings, ShieldCheck, Activity, Globe, Play, Server,
  Check, ExternalLink, Network, FileText, Download, Award, ArrowDown, Eye, Lock, AlertTriangle, Search, Sliders
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}



export const AdminBackofficePage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePlan, setActivePlan] = useState<'monthly' | 'annual'>('annual');

  const features = [
    { icon: Eye, title: '360° Client View', desc: 'See every client interaction, trading account, deposit, withdrawal, KYC document, and support ticket from a single unified profile page.', badge: 'Unified View' },
    { icon: Sliders, title: 'Real-Time Risk Management', desc: 'Monitor firm-wide exposure, A/B book allocation, symbol concentration, and large position alerts across all trading platforms.', badge: 'Risk Engine' },
    { icon: Lock, title: 'Role-Based Access Control', desc: 'Create custom permission sets for compliance officers, sales agents, support staff, and finance teams with granular module-level access.', badge: 'RBAC' },
    { icon: FileText, title: 'Automated Compliance Reports', desc: 'Generate MiFID II, EMIR, CySEC, and custom regulatory reports automatically on daily, weekly, or monthly schedules.', badge: 'Regulatory' },
    { icon: AlertTriangle, title: 'Smart Alerts & Triggers', desc: 'Configure custom alerts for margin calls, large deposits, suspicious trading patterns, delayed KYC approvals, and withdrawal anomalies.', badge: 'Monitoring' },
    { icon: Search, title: 'Advanced Search & Filtering', desc: 'Elasticsearch-powered querying across millions of client records, transactions, and trades for instant dispute resolution.', badge: 'Search' }
  ];

  const modules = [
    { icon: Sliders, title: 'Risk Dashboard', items: ['Real-time symbol exposure', 'A-Book / B-Book ratios', 'Margin utilization heatmap', 'Large position alerts', 'P&L by dealing desk'] },
    { icon: ShieldCheck, title: 'Compliance Center', items: ['KYC queue management', 'AML sanction screening', 'Document verification workflow', 'Audit trail logging', 'Jurisdiction rulesets'] },
    { icon: CreditCard, title: 'Finance Operations', items: ['Payment gateway management', 'Manual approval workflows', 'Bank reconciliation tools', 'Chargeback handling', 'Fee configuration'] },
    { icon: Users, title: 'Staff Management', items: ['Custom role creation', 'Permission matrix editor', 'Action audit logging', 'IP whitelisting', 'Session management'] },
    { icon: BarChart3, title: 'Business Intelligence', items: ['Client lifetime value', 'Deposit/withdrawal trends', 'Conversion analytics', 'Retention cohort analysis', 'Revenue breakdowns'] },
    { icon: Server, title: 'Infrastructure Monitor', items: ['Server uptime tracking', 'API latency monitoring', 'Database health checks', 'Automated failover alerts', 'Capacity planning'] }
  ];

  const integrations = [
    { name: 'MetaTrader 4', desc: 'Manager API' },
    { name: 'MetaTrader 5', desc: 'Manager API' },
    { name: 'cTrader', desc: 'Server API' },
    { name: 'Sumsub', desc: 'KYC/AML' },
    { name: 'Jumio', desc: 'Identity' },
    { name: 'Elasticsearch', desc: 'Search' },
    { name: 'Grafana', desc: 'Monitoring' },
    { name: 'PagerDuty', desc: 'Alerts' },
    { name: 'Slack', desc: 'Notifications' },
    { name: 'AWS CloudWatch', desc: 'Infrastructure' }
  ];

  const testimonials = [
    { quote: "The risk dashboard alone pays for itself. We can see our entire firm's exposure across 200+ symbols in real-time. No more blind spots in our dealing desk operations.", name: "Viktor Petrov", role: "Risk Manager, Baltic Brokers", rating: 5 },
    { quote: "RBAC was a game-changer. Our compliance team can only see KYC docs, sales only see their leads, and finance handles withdrawals. Clean separation with full audit trails.", name: "Nina Tanaka", role: "COO, Sakura FX", rating: 5 },
    { quote: "We generate our CySEC quarterly reports in 2 clicks now. Used to take our compliance team an entire week of manual data compilation.", name: "George Papadopoulos", role: "Compliance Director, Aegean Markets", rating: 5 }
  ];

  const faqs = [
    { q: 'Can I restrict access for my sales team?', a: 'Yes. Role-Based Access Control (RBAC) lets you restrict sales agents so they only see their assigned leads and clients. Sensitive financial data, KYC documents, and admin settings are fully masked.' },
    { q: 'Does the backoffice integrate with MT4 and MT5?', a: 'Yes. Deep bidirectional integration via Manager API allows real-time syncing of accounts, trades, balances, leverage changes, and password resets directly from the backoffice.' },
    { q: 'Is there an audit log for staff actions?', a: 'Every action by any staff member — approving withdrawals, changing leverage, modifying KYC status — is logged with a timestamp, IP address, and user ID for complete accountability.' },
    { q: 'Can I generate regulatory reports automatically?', a: 'Yes. Configure scheduled reports for MiFID II, EMIR, CySEC, and custom templates. Reports auto-generate and can be emailed to compliance officers or exported as CSV/PDF.' },
    { q: 'How does the risk management module work?', a: 'The risk dashboard provides real-time exposure monitoring per symbol, per group, and per dealing desk. You can set automated A/B book routing rules and receive alerts for concentration risks.' },
    { q: 'Can multiple staff members work simultaneously?', a: 'Yes. The backoffice supports unlimited concurrent users with real-time data sync. Each user sees only what their role permits, and all actions are logged for auditing.' }
  ];

  const plans = [
    { name: 'Core Backoffice', price: activePlan === 'annual' ? '$399' : '$499', period: '/ month', desc: 'Essential admin tools for small teams.', features: ['Up to 5 Admin Users', 'Basic Risk View', 'Standard Reports', 'Email Support'], cta: 'Request Demo', highlight: false },
    { name: 'Pro Desk', price: activePlan === 'annual' ? '$899' : '$1,099', period: '/ month', desc: 'Advanced risk and compliance workflows.', features: ['Up to 25 Admin Users', 'Live Risk Dashboard', 'Automated KYC Queue', 'Regulatory Reports', 'API Access', '24/7 Priority Support'], cta: 'Start Free Trial', highlight: true },
    { name: 'Enterprise', price: 'Custom', period: '', desc: 'Unlimited scalability and custom infrastructure.', features: ['Unlimited Admin Users', 'Custom Report Builder', 'Dedicated Account Manager', 'On-Premise Option', 'SLA Guarantee'], cta: 'Contact Sales', highlight: false }
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
                Powerful Admin <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                  Backoffice Hub
                </span>
              </h1>
              
              <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
                Centralize your brokerage operations with deep insights, risk management, trade monitoring, and customizable permission levels for your entire staff.
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
                  src="/broker-crm-img-one.webp" 
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
              <div className="text-3xl font-black text-white font-mono mb-1">360°</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Client View</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white font-mono mb-1">2.4M</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white font-mono mb-1">&lt;3s</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Roles</div>
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
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Admin Command Center</h2>
            <p className="text-slate-400 text-lg">A unified operations hub for risk managers, compliance officers, finance teams, and support staff to run your brokerage.</p>
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
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Backoffice Architecture</h2>
              <p className="text-slate-400 text-lg">Enterprise-grade admin tools with real-time risk monitoring, compliance automation, and granular access control for your entire staff.</p>
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
