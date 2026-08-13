import { TestimonialsSection } from '../../components/Common/TestimonialsSection';
import { ProductGallerySection } from '../../components/Common/ProductGallerySection';
import { ProductVideoSection } from '../../components/Common/ProductVideoSection';
import React, { useState } from 'react';
import {
  Users, CreditCard, BarChart3, ArrowRight, UserPlus, FileCheck,
  Building2, Database, Settings, ShieldCheck, Activity, Globe, Play, Server,
  Check, ExternalLink, Network, FileText, Download, Award, ArrowDown, Copy, TrendingUp, Zap, Star, Timer
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}



export const SocialCopyTradingPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePlan, setActivePlan] = useState<'monthly' | 'annual'>('annual');

  const features = [
    { icon: Copy, title: 'One-Click Copy Trading', desc: 'Followers subscribe to top-performing signal providers and automatically replicate every trade in real-time with proportional lot sizing.', badge: 'Instant Copy' },
    { icon: TrendingUp, title: 'Signal Provider Leaderboard', desc: 'Public ranking of traders by ROI, drawdown, win rate, and Sharpe ratio. Verified track records build trust and drive follower acquisition.', badge: 'Ranked' },
    { icon: Zap, title: 'Sub-Millisecond Execution', desc: 'Trades are copied to follower accounts within microseconds of the master account execution, ensuring minimal slippage and price deviation.', badge: 'Ultra-Fast' },
    { icon: Star, title: 'Automated Profit Sharing', desc: 'Configure performance fees, subscription charges, and volume-based commissions that are automatically deducted and distributed to signal providers.', badge: 'Revenue' },
    { icon: ShieldCheck, title: 'Risk Controls for Followers', desc: 'Followers can set max drawdown limits, lot size caps, instrument filters, and auto-stop rules to protect their capital while copying.', badge: 'Protection' },
    { icon: Timer, title: 'Cross-Server Copying', desc: 'Copy trades across MT4, MT5, and cTrader servers seamlessly. Support for multi-platform brokerages with unified follower management.', badge: 'Multi-Platform' }
  ];

  const modules = [
    { icon: TrendingUp, title: 'Leaderboard Engine', items: ['Real-time ROI calculation', 'Risk-adjusted rankings', 'Verified trade history', 'Custom ranking filters', 'Provider profile pages'] },
    { icon: Copy, title: 'Copy Engine', items: ['Proportional lot sizing', 'Fixed lot copying', 'Equity-based allocation', 'Partial close mirroring', 'Pending order replication'] },
    { icon: Star, title: 'Revenue System', items: ['Performance fee models', 'Monthly subscriptions', 'High-water mark tracking', 'Automated invoicing', 'Broker revenue share'] },
    { icon: ShieldCheck, title: 'Risk Management', items: ['Max drawdown limits', 'Lot size caps per copier', 'Instrument blacklists', 'Auto-disconnect rules', 'Margin protection'] },
    { icon: Users, title: 'Social Features', items: ['Provider news feed', 'Follower comments', 'Trading strategy descriptions', 'Performance badges', 'Notification system'] },
    { icon: BarChart3, title: 'Analytics Dashboard', items: ['Copy trade statistics', 'Follower growth trends', 'Revenue reports', 'Slippage monitoring', 'Provider comparison tools'] }
  ];

  const integrations = [
    { name: 'MetaTrader 4', desc: 'Copy Engine' },
    { name: 'MetaTrader 5', desc: 'Copy Engine' },
    { name: 'cTrader', desc: 'Copy Engine' },
    { name: 'DXtrade', desc: 'Copy Engine' },
    { name: 'ZuluTrade', desc: 'Social Platform' },
    { name: 'Myfxbook', desc: 'Verification' },
    { name: 'TradingView', desc: 'Charts' },
    { name: 'Stripe', desc: 'Subscriptions' },
    { name: 'Firebase', desc: 'Push Notifications' },
    { name: 'SendGrid', desc: 'Email Alerts' }
  ];

  const testimonials = [
    { quote: "Our copy trading platform attracted 15,000 new retail clients in 3 months. The leaderboard and social features create a sticky, community-driven experience that keeps traders engaged.", name: "Lena Fernandez", role: "CEO, SocialTrade Pro", rating: 5 },
    { quote: "Cross-server copying between MT4 and MT5 was the feature we needed most. Our signal providers can trade on MT5 while followers on MT4 get the same trades instantly.", name: "Raj Patel", role: "CTO, Fusion Markets", rating: 5 },
    { quote: "The automated profit-sharing model generates consistent revenue. Signal providers earn performance fees, we take a cut, and followers get verified results. Everyone wins.", name: "Yuki Nakamura", role: "Head of Product, Tokyo FX", rating: 5 }
  ];
  const faqs = [
    { q: 'How fast are trades copied?', a: 'Trades are replicated to follower accounts within sub-millisecond latency. Our copy engine runs co-located with MT4/MT5 servers to minimize execution delay and slippage.' },
    { q: 'Can followers set their own risk limits?', a: 'Yes. Followers can configure max drawdown, lot size caps, instrument filters, and auto-disconnect thresholds. If any limit is breached, copying pauses automatically.' },
    { q: 'How does profit sharing work?', a: 'Signal providers earn via performance fees (e.g., 20% of profits) or monthly subscriptions. Fees are calculated using a high-water mark model and auto-deducted from follower accounts.' },
    { q: 'Does it support cross-platform copying?', a: 'Yes. Our engine supports copying between MT4, MT5, cTrader, and DXtrade servers seamlessly. A provider trading on MT5 can have followers on MT4 and vice versa.' },
    { q: 'How is the leaderboard ranked?', a: 'Providers are ranked by ROI, maximum drawdown, Sharpe ratio, win rate, and trade frequency. All metrics are verified against real trade history — no demo accounts allowed.' },
    { q: 'Can we white-label the social trading platform?', a: 'Absolutely. The entire platform — leaderboard, provider profiles, follower dashboard — is fully white-labeled under your brand with your domain and design.' }
  ];

  const plans = [
    { name: 'Starter Social', price: activePlan === 'annual' ? '$399' : '$499', period: '/ month', desc: 'Basic copy trading for small brokerages.', features: ['Up to 50 Signal Providers', '1,000 Followers', 'Basic Leaderboard', 'MT4/MT5 Support', 'Email Support'], cta: 'Request Demo', highlight: false },
    { name: 'Pro Social', price: activePlan === 'annual' ? '$899' : '$1,099', period: '/ month', desc: 'Full social trading ecosystem.', features: ['Unlimited Providers', 'Unlimited Followers', 'Cross-Server Copying', 'Profit Sharing Engine', 'White-Label Portal', '24/7 Priority Support'], cta: 'Start Free Trial', highlight: true },
    { name: 'Enterprise', price: 'Custom', period: '', desc: 'Dedicated copy trading infrastructure.', features: ['Unlimited Everything', 'Custom Ranking Algo', 'Dedicated Server Cluster', 'Account Manager', 'SLA Guarantee'], cta: 'Contact Sales', highlight: false }
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
                Institutional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                  Social Copy Trading
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light">
                Launch a highly engaging community-driven platform where beginners copy top performers with sub-millisecond execution and automated profit sharing.
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
        title="Institutional Social Copy Trading Engine"
        subtitle="Experience sub-millisecond trade replication, provider leaderboards, and automated performance fee allocation in real-time."
        videoSrc="/test.mp4"
        posterSrc="/copy-pamm-showcase.webp"
      />

      {/* PRODUCT GALLERY SHOWCASE (2 SECTIONS BELOW HERO) */}
      <ProductGallerySection
        title="Social Copy Trading Platform Screenshot Gallery"
        subtitle="View live master trader leaderboards, sub-millisecond copiers, performance fee calculators, and subscriber dashboards."
      />



      {/* 2. STATS BAR */}
      <section className="bg-slate-50 dark:bg-[#0e1017] border-b border-slate-200 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200 dark:divide-slate-800/50">
            <div className="text-center">
              <div className="text-3xl font-black text-slate-900 dark:text-white font-mono mb-1">&lt;1ms</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Copy Latency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-slate-900 dark:text-white font-mono mb-1">2.4M</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-slate-900 dark:text-white font-mono mb-1">&lt;3s</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Fee Deductions</div>
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
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">Social Trading Ecosystem</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Build a thriving community where top traders share strategies and followers replicate their success automatically.</p>
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
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">Copy Trading Architecture</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">High-performance infrastructure for real-time trade replication, social engagement, and automated revenue distribution at scale.</p>
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
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">Scale Your Copy Trading Operations</h2>
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
