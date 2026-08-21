import { TestimonialsSection } from '../../components/Common/TestimonialsSection';
import { ProductGallerySection } from '../../components/Common/ProductGallerySection';
import { ProductVideoSection } from '../../components/Common/ProductVideoSection';
import React, { useState } from 'react';
import {
  Users, CreditCard, BarChart3, ArrowRight, UserPlus, FileCheck,
  Building2, Database, Settings, ShieldCheck, Activity, Globe, Play, Server,
  Check, ExternalLink, Network, FileText, Download, Award, ArrowDown, Share2, DollarSign, PieChart, Link2
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}



export const IbPartnerModulePage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePlan, setActivePlan] = useState<'monthly' | 'annual'>('annual');

  const features = [
    { icon: Network, title: 'Multi-Tier IB Hierarchies', desc: 'Build infinite-depth IB networks with Master IBs, Sub-IBs, and affiliates. Each level gets its own customizable rebate structure and commission rules.', badge: 'Unlimited Tiers' },
    { icon: DollarSign, title: 'Real-Time Rebate Engine', desc: 'Automatically calculate and distribute pip-based, percentage-based, or fixed-fee commissions to IB wallets the instant trades are closed.', badge: 'Auto-Calc' },
    { icon: Share2, title: 'Affiliate Link Tracking', desc: 'Generate unique referral links, promo codes, and post-back URLs. Track every click, registration, and deposit with full UTM attribution.', badge: 'Marketing' },
    { icon: PieChart, title: 'Partner Performance Dashboard', desc: 'Equip IBs with a branded portal to monitor their downline, conversion funnels, accrued commissions, and payout history in real time.', badge: 'Analytics' },
    { icon: ShieldCheck, title: 'Anti-Fraud Protection', desc: 'Detect and prevent rebate churning, self-referrals, and latency arbitrage with automated rule-based monitoring and alert triggers.', badge: 'Security' },
    { icon: Link2, title: 'White-Label IB Portal', desc: 'Offer your partners a fully branded, mobile-responsive portal hosted on your domain with custom colors, logos, and marketing materials.', badge: 'Branded' }
  ];

  const modules = [
    { icon: DollarSign, title: 'Commission Engine', items: ['Pip-based rebate rules', 'Percentage revenue sharing', 'Volume-based CPA triggers', 'Instrument-specific rates', 'Real-time payout ledger'] },
    { icon: Globe, title: 'IB Partner Portal', items: ['Custom branded domain', 'Sub-IB management tools', 'Marketing asset library', 'Conversion analytics', 'Self-service payout requests'] },
    { icon: BarChart3, title: 'Tracking & Attribution', items: ['UTM parameter tracking', 'Cookie-based attribution', 'Campaign ROI reporting', 'Click-to-deposit funnels', 'Postback URL integration'] },
    { icon: Network, title: 'Network Management', items: ['Tree-view IB hierarchy', 'Client migration tools', 'Bulk IB onboarding', 'Territory assignments', 'Performance benchmarks'] },
    { icon: Activity, title: 'Automated Payouts', items: ['Weekly/monthly schedules', 'Minimum threshold rules', 'Multi-currency support', 'Tax withholding options', 'Payout audit trails'] },
    { icon: ShieldCheck, title: 'Compliance & Audit', items: ['IB agreement management', 'KYC for partners', 'Activity audit logs', 'Churn detection alerts', 'Regulatory reporting'] }
  ];

  const integrations = [
    { name: 'MetaTrader 4', desc: 'Trading Platform' },
    { name: 'MetaTrader 5', desc: 'Trading Platform' },
    { name: 'cTrader', desc: 'Trading Platform' },
    { name: 'HasOffers', desc: 'Affiliate Network' },
    { name: 'Affise', desc: 'Tracking' },
    { name: 'Cellxpert', desc: 'Partner Mgmt' },
    { name: 'Stripe', desc: 'Payouts' },
    { name: 'Skrill', desc: 'E-Wallet' },
    { name: 'Neteller', desc: 'E-Wallet' },
    { name: 'PROFTIT', desc: 'CRM' }
  ];

  const testimonials = [
    { quote: "The multi-tier IB system transformed our partnership business. We went from manually calculating rebates in spreadsheets to fully automated real-time payouts across 5 tiers.", name: "Sarah Kowalski", role: "Head of Partnerships, Apex FX", rating: 5 },
    { quote: "Our IBs love the branded partner portal. Registration-to-first-deposit conversion jumped 40% after we deployed the BrokerBros IB module with tracking links.", name: "James Liu", role: "CEO, Pacific Markets", rating: 5 },
    { quote: "We manage over 2,000 active IBs globally. The anti-fraud engine catches rebate churning before it costs us money. Absolutely essential.", name: "Ahmed Al-Rashid", role: "COO, Gulf Trading Co.", rating: 5 }
  ];

  const faqs = [
    { q: 'How many IB tiers are supported?', a: 'Our system supports unlimited hierarchical tiers, allowing you to create complex Master IB and Sub-IB networks with cascading rebate distributions at every level.' },
    { q: 'Are rebates calculated in real-time?', a: 'Yes. Our rebate engine processes and credits commissions to IB wallets within milliseconds of the underlying trade closing on MT4/MT5/cTrader servers.' },
    { q: 'Can IBs withdraw commissions automatically?', a: 'Yes. You can configure automatic payout schedules (daily, weekly, monthly) with minimum thresholds, or require manual compliance approval before IB withdrawals.' },
    { q: 'Is the IB portal white-labeled?', a: 'Absolutely. The IB portal is fully brandable — custom domain, your logo, color scheme, and marketing assets. Your partners will see only your brand.' },    { q: 'How does affiliate tracking work?', a: 'Each IB gets unique referral links with UTM parameters. We track clicks, registrations, and deposits with cookie-based attribution and support postback URLs for external campaigns.' },
    { q: 'Can we set different commission structures per IB?', a: 'Yes. You can assign custom rebate plans per IB with instrument-specific rates (pip-based, percentage, or CPA), and even override rates for individual high-value partners.' }
  ];

  const plans = [
    { name: 'Standard IB', price: activePlan === 'annual' ? '$299' : '$399', period: '/ month', desc: 'Basic 2-tier affiliate system for small brokerages.', features: ['2 IB Tiers', 'Standard Tracking Links', 'Monthly Payouts', 'Basic Analytics', 'Email Support'], cta: 'Request Demo', highlight: false },
    { name: 'Pro Partner', price: activePlan === 'annual' ? '$699' : '$899', period: '/ month', desc: 'Advanced multi-tier tracking with branded portal.', features: ['Unlimited IB Tiers', 'Real-Time Rebate Engine', 'White-Label IB Portal', 'Anti-Fraud Detection', 'API Access', '24/7 Priority Support'], cta: 'Start Free Trial', highlight: true },
    { name: 'Enterprise', price: 'Custom', period: '', desc: 'Dedicated infrastructure for large IB networks.', features: ['Unlimited Everything', 'Custom Commission Engine', 'Dedicated Account Manager', 'On-Premise Option', 'SLA Uptime Guarantee'], cta: 'Contact Sales', highlight: false }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#090D14] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans min-h-screen">
      
      {/* 1. HERO SECTION (100% ABOVE-THE-FOLD AT LANDING TIME WITH ENLARGED TEXT & DUAL THEME COMPATIBILITY) */}
      <section className="relative min-h-[calc(100vh-90px)] flex flex-col justify-center py-6 sm:py-10 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1420]">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left my-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-800/50">
                <Users className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>MULTI-TIER IB & AFFILIATE PARTNER ENGINE</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Advanced IB & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400">
                  Partner Network Portal
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
                Scale your brokerage with multi-tier IB systems, real-time rebate calculations, automated downline tracking, and white-label partner portals built for global growth.
              </p>

              {/* CTA & Metric Card */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={onOpenAccount}
                  className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-md shadow-emerald-600/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                >
                  <span>Request IB Module Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Metric Card Pill */}
                <div className="inline-flex items-center gap-3 p-2.5 px-4 rounded-xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-xs shrink-0">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-base font-extrabold font-mono text-emerald-600 dark:text-emerald-400">
                    100%
                  </div>
                  <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 shrink-0" />
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Automated Real-Time Rebates
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> SOC2 Certified</div>
                <div className="flex items-center gap-1.5"><Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> 99.99% Uptime SLA</div>
                <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> GDPR Ready</div>
              </div>

            </div>

            {/* Right Visual Interface */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-[24px] blur-2xl pointer-events-none" />
              
              <div className="relative">
                <img 
                  src="/broker-crm-img-one.webp" 
                  alt="IB Partner Portal Interface" 
                  className="w-full h-auto rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 relative z-10" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCT VIDEO SHOWCASE (BELOW HERO SECTION) */}
      <ProductVideoSection
        title="Multi-Tier IB & Partner Module Tour"
        subtitle="Discover how multi-level affiliate tracking, real-time rebate calculations, and automated payouts empower your partner network."
        videoSrc="/test2.mp4"
        posterSrc="/copy-pamm-showcase.webp"
      />

      {/* PRODUCT GALLERY SHOWCASE (2 SECTIONS BELOW HERO) */}
      <ProductGallerySection
        title="IB & Partner Portal Screenshot Gallery"
        subtitle="View detailed screenshots of multi-tier commission structures, sub-affiliate lineage trees, and instant withdrawal gateways."
      />



      {/* 2. STATS BAR */}
      <section className="border-b border-slate-200 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200 dark:divide-slate-800/50">
            <div className="text-center">
              <div className="text-3xl font-black text-slate-900 dark:text-white font-mono mb-1">10k+</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Active IBs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-slate-900 dark:text-white font-mono mb-1">2.4M</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-slate-900 dark:text-white font-mono mb-1">&lt;3s</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Tiers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono mb-1">99.99%</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">System Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLATFORM INTEGRATIONS */}
      <section className="py-12 border-b border-slate-200 dark:border-slate-800/50 overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 relative z-10">
          <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest">Pre-Integrated With Industry Leaders</p>
        </div>
        
        {/* Marquee Container */}
        <div className="w-full relative group overflow-hidden">
          {/* Gradient Fades for edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-marquee gap-4 w-max px-4">
            {[...integrations, ...integrations].map((integration, i) => (
              <div key={i} className="flex-shrink-0 w-48 bg-white dark:bg-[#121520] border border-slate-200 dark:border-slate-800 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-xs">
                <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full mb-3 flex items-center justify-center text-emerald-600 dark:text-emerald-500 font-black text-xl">
                  {integration.name.charAt(0)}
                </div>
                <div className="font-bold text-slate-900 dark:text-white text-sm">{integration.name}</div>
                <div className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">{integration.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE FEATURES GRID */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800/50 relative bg-slate-50/80 dark:bg-transparent">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/5 dark:bg-emerald-900/10 rounded-[100%] blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">Partner Network Hub</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Everything you need to build, manage, and scale a global network of introducing brokers and affiliates.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group shadow-xs">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-900 px-2 py-1 rounded">
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
      <section className="py-24 border-b border-slate-200 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">IB Infrastructure</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">Purpose-built tools for managing complex partner relationships, automated payouts, and marketing attribution at scale.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-start gap-3 shadow-xs">
                <div className="text-emerald-600 dark:text-emerald-400 mt-1"><Check className="w-5 h-5" /></div>
                <div>
                  <div className="text-slate-900 dark:text-white font-bold text-sm">Automated Workflows</div>
                  <div className="text-slate-500 text-xs mt-1">Rules-based routing for KYC & deposits</div>
                </div>
              </div>
              <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-start gap-3 shadow-xs">
                <div className="text-emerald-600 dark:text-emerald-400 mt-1"><Check className="w-5 h-5" /></div>
                <div>
                  <div className="text-slate-900 dark:text-white font-bold text-sm">API First</div>
                  <div className="text-slate-500 text-xs mt-1">Headless capability via REST APIs</div>
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
      <section className="py-24 border-b border-slate-200 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-6">Transparent CRM Pricing</h2>
            
            {/* Toggle */}
            <div className="inline-flex items-center p-1 bg-slate-100 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 rounded-lg">
              <button 
                onClick={() => setActivePlan('monthly')}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all cursor-pointer ${activePlan === 'monthly' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs' : 'text-slate-600 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setActivePlan('annual')}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${activePlan === 'annual' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Annually <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded uppercase tracking-wider">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`bg-white dark:bg-[#0a0a0a] border rounded-2xl p-8 flex flex-col shadow-xs ${plan.highlight ? 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative scale-105 z-10' : 'border-slate-200 dark:border-slate-800'}`}>
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 dark:bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 h-10">{plan.desc}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">{plan.price}</span>
                  <span className="text-slate-500 font-mono text-sm ml-1">{plan.period}</span>
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
      <section className="py-24 border-b border-slate-200 dark:border-slate-800/50">
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
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">Scale Your Brokerage Operations</h2>
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
