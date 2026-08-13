import { TestimonialsSection } from '../../components/Common/TestimonialsSection';
import { ProductGallerySection } from '../../components/Common/ProductGallerySection';
import { ProductVideoSection } from '../../components/Common/ProductVideoSection';
import React, { useState } from 'react';
import {
  Users, CreditCard, BarChart3, ArrowRight, UserPlus, FileCheck,
  Building2, Database, Settings, ShieldCheck, Activity, Globe, Play, Server,
  Check, ExternalLink, Network, FileText, Download, Award, ArrowDown, PieChart, Layers, TrendingUp, Percent, Scale
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}



export const PammMamPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePlan, setActivePlan] = useState<'monthly' | 'annual'>('annual');

  const features = [
    { icon: PieChart, title: 'Multiple Allocation Methods', desc: 'Support equity-based, lot-based, balance-based, and custom allocation methods. Money managers choose the model that fits their strategy best.', badge: 'Flexible' },
    { icon: Layers, title: 'Master/Sub-Account Sync', desc: 'Real-time synchronization between master and investor sub-accounts. Every trade, partial close, and modification is instantly reflected across all linked accounts.', badge: 'Real-Time' },
    { icon: TrendingUp, title: 'High-Water Mark Tracking', desc: 'Automated high-water mark calculation ensures performance fees are only charged on new net profits, protecting investor interests.', badge: 'Fair Fees' },
    { icon: Percent, title: 'Custom Fee Structures', desc: 'Configure management fees, performance fees, entry/exit fees, and minimum investment thresholds per fund with complete flexibility.', badge: 'Revenue' },
    { icon: Scale, title: 'Risk Controls & Limits', desc: 'Set maximum drawdown, daily loss limits, and margin utilization thresholds that automatically pause trading when breached.', badge: 'Protection' },
    { icon: BarChart3, title: 'Investor Reporting', desc: 'Automated daily, weekly, and monthly performance reports delivered to investors. Full transparency on NAV, P&L, and fee deductions.', badge: 'Transparency' }
  ];

  const modules = [
    { icon: PieChart, title: 'Allocation Engine', items: ['Equity allocation method', 'Lot allocation method', 'Balance-based allocation', 'Custom hybrid models', 'Proportional risk scaling'] },
    { icon: TrendingUp, title: 'Fund Management', items: ['NAV calculation engine', 'High-water mark tracking', 'Subscription/redemption periods', 'Lock-in period management', 'Investor waitlist system'] },
    { icon: CreditCard, title: 'Fee & Revenue', items: ['Performance fee automation', 'Management fee schedules', 'Entry/exit fee rules', 'Broker commission split', 'Tax withholding support'] },
    { icon: BarChart3, title: 'Reporting Suite', items: ['Daily NAV statements', 'Monthly investor reports', 'Trade-by-trade breakdown', 'Fee deduction history', 'Comparative benchmarks'] },
    { icon: ShieldCheck, title: 'Risk Framework', items: ['Max drawdown alerts', 'Margin utilization limits', 'Daily loss thresholds', 'Forced liquidation rules', 'Concentration limits'] },
    { icon: Users, title: 'Investor Portal', items: ['Fund performance view', 'Investment/withdrawal requests', 'Fee transparency dashboard', 'Manager track record', 'Document center'] }
  ];

  const integrations = [
    { name: 'MetaTrader 4', desc: 'PAMM Plugin' },
    { name: 'MetaTrader 5', desc: 'MAM Plugin' },
    { name: 'cTrader', desc: 'cMAM Module' },
    { name: 'DXtrade', desc: 'Allocation API' },
    { name: 'Match-Trader', desc: 'MAM API' },
    { name: 'Bloomberg', desc: 'Market Data' },
    { name: 'Refinitiv', desc: 'Benchmarks' },
    { name: 'Stripe', desc: 'Investor Payments' },
    { name: 'DocuSign', desc: 'Fund Agreements' },
    { name: 'AWS', desc: 'Infrastructure' }
  ];

  const testimonials = [
    { quote: "We manage $200M across 15 PAMM funds. The allocation engine handles 10,000+ sub-accounts without a single sync issue. Trade execution is reflected instantly across all investors.", name: "Alexander Volkov", role: "Chief Fund Manager, Volkov Capital", rating: 5 },
    { quote: "The investor portal is beautifully designed. Our clients can see their NAV, fee deductions, and fund performance in real-time. It builds the trust that institutional investors demand.", name: "Sarah Mitchell", role: "Director of Operations, Sterling Asset Management", rating: 5 },
    { quote: "High-water mark tracking was our number one requirement. BrokerBros handles it perfectly — no manual calculations, no disputes. Performance fees are auto-deducted at the right time.", name: "Hassan Khouri", role: "Head of Wealth, Levant Markets", rating: 5 }
  ];

  const faqs = [
    { q: 'What allocation methods are supported?', a: 'We support equity-based, lot-based, balance-based, and custom hybrid allocation methods. Money managers can switch methods at any time through the admin panel.' },
    { q: 'How are performance fees calculated?', a: 'Performance fees are calculated using a high-water mark model. Fees are only charged on new net profits above the previous peak, ensuring investors are not charged twice for the same gains.' },
    { q: 'Can investors deposit and withdraw at any time?', a: 'You can configure flexible or fixed subscription/redemption periods. Support for instant, daily, weekly, or monthly windows with optional lock-in periods for premium funds.' },
    { q: 'How many sub-accounts can a single master manage?', a: 'There is no limit. Our allocation engine has been tested with 10,000+ sub-accounts per master with zero performance degradation or sync delays.' },    { q: 'Does it work with MT4 and MT5?', a: 'Yes. Native PAMM/MAM plugins for both MT4 and MT5, plus server-to-server integration with cTrader, DXtrade, and Match-Trader for multi-platform deployments.' },
    { q: 'Can we offer multiple funds simultaneously?', a: 'Yes. You can run unlimited PAMM/MAM funds, each with its own manager, fee structure, allocation method, and investor base — all from one admin dashboard.' }
  ];

  const plans = [
    { name: 'Single Fund', price: activePlan === 'annual' ? '$499' : '$599', period: '/ month', desc: 'One PAMM/MAM fund for small operations.', features: ['1 Master Account', 'Up to 500 Investors', 'Equity Allocation', 'Basic Reports', 'Email Support'], cta: 'Request Demo', highlight: false },
    { name: 'Multi-Fund', price: activePlan === 'annual' ? '$999' : '$1,199', period: '/ month', desc: 'Multiple funds with advanced features.', features: ['Unlimited Funds', 'Unlimited Investors', 'All Allocation Methods', 'Investor Portal', 'High-Water Mark', '24/7 Priority Support'], cta: 'Start Free Trial', highlight: true },
    { name: 'Enterprise', price: 'Custom', period: '', desc: 'Institutional-grade fund management.', features: ['Unlimited Everything', 'Custom Allocation Models', 'Dedicated Infrastructure', 'Account Manager', 'SLA Guarantee'], cta: 'Contact Sales', highlight: false }
  ];

  return (
    <div className="bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-300 min-h-screen transition-colors duration-300 selection:bg-emerald-500/30 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-24 overflow-hidden border-b border-slate-200 dark:border-slate-800/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <h1 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.1]">
                Professional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                  PAMM / MAM Engine
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light">
                Equip money managers with institutional-grade allocation tools. Handle thousands of sub-accounts effortlessly with volume, equity, or custom allocation methods.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button 
                  onClick={onOpenAccount}
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  Request CRM Demo <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-lg border border-slate-300 dark:border-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                  <Play className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> Watch Overview
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 text-[11px] font-mono text-slate-500 dark:text-slate-400">
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
                  className="w-full h-auto rounded-[18px] shadow-2xl border border-slate-200 dark:border-slate-800 relative z-10" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCT VIDEO SHOWCASE (BELOW HERO SECTION) */}
      <ProductVideoSection
        title="PAMM / MAM Asset Management Walkthrough"
        subtitle="Learn how asset managers allocate orders across thousands of sub-accounts using equity, lot, and high-water mark logic."
        videoSrc="/test2.mp4"
        posterSrc="/pricing-showcase.webp"
      />

      {/* PRODUCT GALLERY SHOWCASE (2 SECTIONS BELOW HERO) */}
      <ProductGallerySection
        title="PAMM / MAM Asset Management Suite Gallery"
        subtitle="Explore screenshots of equity allocation matrix, high-water mark fee calculators, and multi-account trading dashboards."
      />



      {/* 2. STATS BAR */}
      <section className="bg-slate-50 dark:bg-[#0e1017] border-b border-slate-200 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200 dark:divide-slate-800/50">
            <div className="text-center">
              <div className="text-3xl font-black text-slate-900 dark:text-white font-mono mb-1">10,000+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Sub-Accounts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-slate-900 dark:text-white font-mono mb-1">2.4M</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-slate-900 dark:text-white font-mono mb-1">&lt;3s</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Slippage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono mb-1">99.99%</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">System Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLATFORM INTEGRATIONS */}
      <section className="py-12 border-b border-slate-200 dark:border-slate-800/50 overflow-hidden w-full bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 relative z-10">
          <p className="text-center text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Pre-Integrated With Industry Leaders</p>
        </div>
        
        {/* Marquee Container */}
        <div className="w-full relative group overflow-hidden">
          <div className="flex animate-marquee gap-4 w-max px-4">
            {[...integrations, ...integrations].map((integration, i) => (
              <div key={i} className="flex-shrink-0 w-48 bg-slate-50 dark:bg-[#121520] border border-slate-200 dark:border-slate-800 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-white dark:hover:bg-slate-800 transition-colors">
                <div className="w-10 h-10 bg-emerald-50 dark:bg-slate-800 rounded-full mb-3 flex items-center justify-center text-emerald-600 dark:text-emerald-500 font-black text-xl">
                  {integration.name.charAt(0)}
                </div>
                <div className="font-bold text-slate-900 dark:text-white text-sm">{integration.name}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{integration.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE FEATURES GRID */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800/50 bg-slate-50/80 dark:bg-transparent relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-900/10 rounded-[100%] blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">Asset Management Suite</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Professional PAMM and MAM tools for money managers to allocate trades across thousands of investor sub-accounts.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group shadow-xs">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-900 px-2 py-1 rounded">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEEP DIVE MODULES */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800/50 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">Fund Architecture</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">Institutional-grade allocation engine with real-time NAV tracking, automated fee distribution, and comprehensive investor reporting.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-start gap-3">
                <div className="text-emerald-600 dark:text-emerald-400 mt-1"><Check className="w-5 h-5" /></div>
                <div>
                  <div className="text-slate-900 dark:text-white font-bold text-sm">Automated Workflows</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs mt-1">Rules-based routing for KYC & deposits</div>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-start gap-3">
                <div className="text-emerald-600 dark:text-emerald-400 mt-1"><Check className="w-5 h-5" /></div>
                <div>
                  <div className="text-slate-900 dark:text-white font-bold text-sm">API First</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs mt-1">Headless capability via REST APIs</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs">
            {modules.map((module, i) => (
              <div key={i} className="bg-white dark:bg-[#0a0a0a] p-8">
                <module.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{module.title}</h3>
                <ul className="space-y-3">
                  {module.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CLIENT TESTIMONIALS */}
      <TestimonialsSection />

      {/* 7. PRICING */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800/50 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-6">Transparent System Pricing</h2>
            
            {/* Toggle */}
            <div className="inline-flex items-center p-1 bg-slate-100 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 rounded-lg">
              <button 
                onClick={() => setActivePlan('monthly')}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all cursor-pointer ${activePlan === 'monthly' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setActivePlan('annual')}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${activePlan === 'annual' ? 'bg-emerald-600 text-white shadow' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Annually <span className="text-[9px] bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded uppercase tracking-wider">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`bg-white dark:bg-[#0a0a0a] border rounded-2xl p-8 flex flex-col ${plan.highlight ? 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative scale-105 z-10' : 'border-slate-200 dark:border-slate-800'}`}>
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 h-10">{plan.desc}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">{plan.price}</span>
                  <span className="text-slate-500 dark:text-slate-400 font-mono text-sm ml-1">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-lg font-bold text-sm transition-colors cursor-pointer ${plan.highlight ? 'bg-emerald-600 hover:bg-emerald-500 text-white' : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800/50 bg-slate-50/50 dark:bg-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-all shadow-xs">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div className={`text-emerald-600 dark:text-emerald-500 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}>
                    <ArrowDown className="w-5 h-5" />
                  </div>
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 relative overflow-hidden bg-slate-50/80 dark:bg-transparent">
        <div className="absolute inset-0 bg-emerald-500/5 dark:bg-emerald-900/10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">Scale Your Asset Management Operations</h2>
          <p className="text-slate-600 dark:text-emerald-100/80 text-xl mb-10 max-w-2xl mx-auto">
            Deploy a fully branded, secure client portal and management hub tailored to your brokerage. Launch in days, not months.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onOpenAccount}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors shadow-xl cursor-pointer"
            >
              Request Live Demo
            </button>
            <button className="px-8 py-4 bg-slate-900 dark:bg-emerald-800 text-white font-bold rounded-lg border border-slate-800 dark:border-emerald-700 hover:bg-slate-800 dark:hover:bg-emerald-700 transition-colors cursor-pointer">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>

  </div>
  );
};
