import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Server, 
  Headphones, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  CreditCard,
  Building2,
  Users
} from 'lucide-react';

export const PricingTiersSection: React.FC<{ onOpenAccount: () => void }> = ({ onOpenAccount }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      name: 'Starter Broker Suite',
      badge: '14 White-Label Modules Included',
      priceMonthly: 1499,
      priceAnnual: 1199,
      description: 'Complete turnkey technology package to launch your forex brokerage or trading platform with zero hassle.',
      features: [
        'Branded WebTrader & Mobile Apps (iOS & Android)',
        'Client Portal & Backoffice CRM Management',
        'Multi-Tier IB Referral & Automated Pip Rebates',
        'Sub-Millisecond FIX 4.4 Liquidity Bridge Gateway',
        'Built-in Crypto & Bank Payment Gateways',
        'Live Real-time WebSocket Price Charting Stream',
        '24/7 Dedicated Customer & Tech Support'
      ],
      ctaText: 'Launch Starter Suite',
      popular: false
    },
    {
      name: 'Growth PropFirm & FX Suite',
      badge: 'PropFirm CRM & PAMM Included',
      priceMonthly: 3499,
      priceAnnual: 2799,
      description: 'Advanced suite with automated PropFirm challenge engine, PAMM asset manager, and social copy trading.',
      features: [
        'Includes Everything in Starter Broker Suite',
        'PropFirm Challenge Builder & Rule Engine',
        'PAMM / MAM Multi-Account Fund Manager',
        'Social Trading Copier Engine (Master-Follower)',
        'Automated Risk Manager & EA Safeguards',
        '150+ Institutional Liquidity Provider Access',
        'Priority Technical Support (< 15 min SLA)'
      ],
      ctaText: 'Start Growth Suite',
      popular: true
    },
    {
      name: 'Institutional Master',
      badge: 'Dedicated Equinix Infrastructure',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      description: 'Dedicated Equinix LD4/NY4 cross-connects, custom FIX protocol dictionary, MT5 server plugins, and full LP aggregation.',
      features: [
        'Dedicated Equinix LD4 (London) & NY4 (New York) Servers',
        'MetaTrader 5 Server Plugins & Bridge Add-ons',
        'Custom FIX 5.0 Matching Engine Protocol',
        'Segregated Custody & Multi-Bank Wallet Setup',
        'High Throughput (100,000+ messages per second)',
        'Custom Compliance & Regulatory Audit Logging',
        'Dedicated Senior Solutions Architect'
      ],
      ctaText: 'Talk to Institutional Team',
      popular: false
    }
  ];

  const saasSteps = [
    {
      step: '01',
      title: 'Pick Your Plan',
      desc: 'Select the turnkey SaaS tier that best fits your brokerage size and growth targets.',
      icon: Layers
    },
    {
      step: '02',
      title: 'Upload Your Brand',
      desc: 'Our team configures your logo, domain, custom brand colors, and payment gateways.',
      icon: Building2
    },
    {
      step: '03',
      title: 'Connect Liquidity',
      desc: 'Link your existing liquidity provider or tap into our pre-built sub-1ms FIX 4.4 feeds.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Go Live in 3 Days',
      desc: 'Launch your branded WebTrader, Mobile Apps, and Client CRM to traders worldwide.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="bg-slate-50/70 dark:bg-[#0E1420] py-12 lg:py-16 border-b border-slate-200 dark:border-[#1E293B] relative overflow-hidden font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header - Simple & Clean Language */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold shadow-2xs">
            <Server className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>SIMPLE FLAT MONTHLY SAAS PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Turnkey SaaS Tiers. <span className="text-emerald-600 dark:text-emerald-400">Zero Commission Markup.</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-xl mx-auto font-medium">
            Keep 100% of your brokerage revenue. Flat monthly pricing with zero hidden fees, zero revenue share, and 24/7 expert support.
          </p>

          {/* Billing Switcher */}
          <div className="flex items-center justify-center space-x-3 pt-3">
            <span className={`text-xs font-semibold ${!isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Monthly Billing
            </span>
            
            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-slate-300 dark:border-[#1E293B] p-0.5 transition-colors duration-200 ease-in-out focus:outline-none bg-slate-200 dark:bg-[#141C2B]"
            >
              <span className="sr-only">Toggle annual billing</span>
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-sm transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>

            <span className={`text-xs font-semibold ${isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Annual Billing <span className="text-emerald-600 dark:text-emerald-400 font-bold">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* 4-Step Setup Workflow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-xs">
          {saasSteps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold flex items-center justify-center text-xs shrink-0 border border-emerald-500/20">
                {step.step}
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <step.icon className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{step.title}</span>
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => {
            const isCustom = typeof tier.priceMonthly === 'string';
            const displayPrice = isCustom 
              ? 'Custom' 
              : isAnnual 
                ? `$${tier.priceAnnual.toLocaleString()}` 
                : `$${tier.priceMonthly.toLocaleString()}`;

            return (
              <div
                key={index}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? 'bg-white dark:bg-[#141C2B] border-2 border-emerald-500 shadow-xl dark:shadow-emerald-950/40'
                    : 'bg-white dark:bg-[#141C2B] border border-slate-200 dark:border-[#1E293B] shadow-md hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-mono font-extrabold uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="space-y-2 mb-6">
                    <span className="inline-block text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800/50">
                      {tier.badge}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {tier.description}
                    </p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black font-mono text-slate-900 dark:text-white">
                        {displayPrice}
                      </span>
                      {!isCustom && (
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          / month
                        </span>
                      )}
                    </div>
                    {!isCustom && isAnnual && (
                      <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                        Billed annually (Save ${( (tier.priceMonthly as number - tier.priceAnnual) * 12 ).toLocaleString()}/yr)
                      </div>
                    )}
                  </div>

                  {/* Feature List with Vector Icons */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenAccount}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    tier.popular
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 font-extrabold'
                      : 'bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white border border-slate-800 dark:border-slate-700'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
