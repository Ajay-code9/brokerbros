import React, { useState } from 'react';
import {
  Users, CreditCard, BarChart3, ArrowRight, UserPlus, FileCheck,
  Building2, Database, Settings, ShieldCheck, Activity, Globe, Play, Server,
  Check, ExternalLink, Network, FileText, Download, Award, ArrowDown, GitBranch, Zap, Radio, Route, Layers
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}



export const FixApiLiquidityPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePlan, setActivePlan] = useState<'monthly' | 'annual'>('annual');

  const features = [
    { icon: GitBranch, title: 'FIX 4.4 Protocol Native', desc: 'Full FIX 4.4 protocol implementation for connecting to Tier-1 liquidity providers, prime brokers, and ECNs with institutional-grade message handling.', badge: 'FIX 4.4' },
    { icon: Zap, title: 'Ultra-Low Latency Routing', desc: 'Smart order routing with sub-5ms execution. Co-located at LD4 (London) and NY4 (New York) for the fastest possible fill rates on major instruments.', badge: 'Sub-5ms' },
    { icon: Route, title: 'A/B/C Book Engine', desc: 'Configurable dealing rules for A-Book (STP), B-Book (internalization), and C-Book (hybrid) execution models with real-time P&L tracking per book.', badge: 'Smart Route' },
    { icon: Layers, title: 'Multi-LP Aggregation', desc: 'Aggregate quotes from 20+ liquidity providers simultaneously. Best-bid/best-ask compilation with automatic failover and quote timeout handling.', badge: 'Aggregation' },
    { icon: Radio, title: 'Cross-Connect Options', desc: 'Direct cross-connect at Equinix LD4/NY4/TY3 data centers for fiber-optic connectivity to LPs. Eliminate internet latency with dedicated lines.', badge: 'Co-Location' },
    { icon: ShieldCheck, title: 'Risk & Exposure Management', desc: 'Real-time net position monitoring per LP, automated hedging rules, and margin requirement calculations to optimize capital efficiency.', badge: 'Risk Engine' }
  ];

  const modules = [
    { icon: GitBranch, title: 'FIX Engine', items: ['FIX 4.4 message handling', 'Session management', 'Heartbeat monitoring', 'Sequence gap detection', 'Message store & replay'] },
    { icon: Route, title: 'Smart Order Router', items: ['Best-price execution', 'Volume-weighted routing', 'Failover logic', 'Latency-based selection', 'Custom routing rules'] },
    { icon: Layers, title: 'LP Aggregator', items: ['Multi-source quotes', 'Best bid/ask compilation', 'Quote timeout handling', 'Spread markup engine', 'Synthetic instrument creation'] },
    { icon: BarChart3, title: 'Dealing Desk Tools', items: ['A-Book / B-Book routing', 'Real-time P&L per book', 'Client risk profiling', 'Manual intervention tools', 'Trade rejection rules'] },
    { icon: Radio, title: 'Infrastructure', items: ['LD4 London co-location', 'NY4 New York co-location', 'TY3 Tokyo co-location', 'Redundant fiber paths', 'Auto-failover switching'] },
    { icon: ShieldCheck, title: 'Risk Controls', items: ['Net position limits', 'LP credit monitoring', 'Margin requirement calc', 'Auto-hedging rules', 'Exposure alerts'] }
  ];

  const integrations = [
    { name: 'LMAX', desc: 'Tier-1 LP' },
    { name: 'Currenex', desc: 'ECN' },
    { name: 'Integral', desc: 'Aggregation' },
    { name: 'CFH Clearing', desc: 'Prime Broker' },
    { name: 'Fortex', desc: 'Bridge Provider' },
    { name: 'PrimeXM', desc: 'Aggregation' },
    { name: 'MetaTrader 5', desc: 'Gateway Plugin' },
    { name: 'cTrader', desc: 'FIX Bridge' },
    { name: 'Equinix LD4', desc: 'Co-Location' },
    { name: 'Equinix NY4', desc: 'Co-Location' }
  ];

  const testimonials = [
    { quote: "The FIX bridge cut our average fill time from 40ms to under 5ms. We connected 8 LPs through BrokerBros and the aggregation engine consistently finds the best price.", name: "Thomas Bergström", role: "CEO, Nordic Liquidity AB", rating: 5 },
    { quote: "A/B Book routing automation is exceptional. We define rules based on client profile and the engine routes seamlessly. P&L per book is tracked in real-time for full transparency.", name: "Dmitri Kozlov", role: "Head of Dealing, EastBridge FX", rating: 5 },
    { quote: "Cross-connect at LD4 eliminated our last-mile latency. Combined with the smart order router, our institutional clients get fills that rival Tier-1 bank execution.", name: "Margaret Wu", role: "CTO, AsiaConnect Markets", rating: 5 }
  ];

  const faqs = [
    { q: 'Which FIX protocol versions are supported?', a: 'We natively support FIX 4.4, which is the industry standard for FX liquidity. FIX 4.2 compatibility mode is also available for legacy LP connections.' },
    { q: 'How many liquidity providers can we connect?', a: 'There is no limit. Our aggregation engine supports 20+ simultaneous LP connections with independent session management, failover logic, and quote timeout handling for each.' },
    { q: 'What execution models are supported?', a: 'Full support for A-Book (STP to LP), B-Book (internalization), and C-Book (hybrid) models. Routing rules are configurable per client group, symbol, or trade size.' },
    { q: 'Do you offer co-location services?', a: 'Yes. We offer co-located infrastructure at Equinix LD4 (London), NY4 (New York), and TY3 (Tokyo) with direct cross-connect to major LPs for fiber-optic latency.' },
    { q: 'How does the aggregation engine work?', a: 'Quotes from all connected LPs are compiled in real-time. The engine selects the best bid/ask across all sources, applies your markup rules, and routes orders to the LP offering the best price.' },
    { q: 'Is there automatic hedging?', a: 'Yes. Configure auto-hedging rules based on net position thresholds, client groups, or symbol exposure. The system automatically sends hedging orders to your preferred LP when limits are reached.' }
  ];

  const plans = [
    { name: 'Bridge Starter', price: activePlan === 'annual' ? '$799' : '$999', period: '/ month', desc: 'Basic FIX connectivity for small brokers.', features: ['Up to 3 LP Connections', 'A-Book Routing Only', 'Standard Co-Location', 'Basic Risk View', 'Email Support'], cta: 'Request Demo', highlight: false },
    { name: 'Pro Bridge', price: activePlan === 'annual' ? '$1,999' : '$2,499', period: '/ month', desc: 'Full aggregation with dealing desk tools.', features: ['Unlimited LP Connections', 'A/B/C Book Engine', 'Smart Order Router', 'LD4 + NY4 Co-Location', 'Real-Time Risk Dashboard', '24/7 Priority Support'], cta: 'Start Free Trial', highlight: true },
    { name: 'Enterprise', price: 'Custom', period: '', desc: 'Dedicated liquidity infrastructure.', features: ['Unlimited Everything', 'Custom Routing Logic', 'Dedicated Cross-Connect', 'Dedicated Engineer', 'SLA Guarantee'], cta: 'Contact Sales', highlight: false }
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
                Direct Market Access <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                  FIX API Bridge
                </span>
              </h1>
              
              <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
                Connect your servers directly to Tier-1 liquidity providers. Ultra-low latency B-Book and A-Book routing rules with cross-connect options at LD4/NY4.
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
              <div className="text-3xl font-black text-white font-mono mb-1">FIX 4.4</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Native</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white font-mono mb-1">2.4M</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white font-mono mb-1">&lt;3s</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Routing</div>
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
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Liquidity Infrastructure</h2>
            <p className="text-slate-400 text-lg">Connect directly to Tier-1 liquidity providers with ultra-low latency FIX protocol bridges and intelligent order routing.</p>
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
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Bridge Architecture</h2>
              <p className="text-slate-400 text-lg">Enterprise-grade FIX 4.4 bridge with multi-LP aggregation, smart order routing, and co-located infrastructure at major financial data centers.</p>
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
