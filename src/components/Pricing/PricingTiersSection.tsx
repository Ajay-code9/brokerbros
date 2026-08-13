import React, { useState } from 'react';
import { Check, ArrowRight, Server, Headphones } from 'lucide-react';

export const PricingTiersSection: React.FC<{ onOpenAccount: () => void }> = ({ onOpenAccount }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      name: 'Starter Broker Suite',
      badge: '14 White-Label Modules Included',
      priceMonthly: 1499,
      priceAnnual: 1199,
      description: 'Complete turn-key white-label technology suite to launch your FX brokerage or trading business.',
      features: [
        'Client CRM & Backoffice Admin Panel',
        'Branded WebTrader & Mobile Apps (iOS/Android)',
        'CRM with Multi-Level IB Tree & Rebate Engine',
        '24/7 FIX 4.4 / FIX 5.0 Liquidity Bridge Access',
        'Crypto & Fiat Integrated Payment Gateway',
        'Tick-by-tick WebSocket Chart & Price Streaming',
        'Standard Email & Ticket Support (24h SLA)'
      ],
      ctaText: 'Launch Starter Suite',
      popular: false
    },
    {
      name: 'Growth PropFirm & FX Suite',
      badge: 'Full PropFirm CRM & PAMM Included',
      priceMonthly: 3499,
      priceAnnual: 2799,
      description: 'Complete suite with automated PropFirm challenge engine, PAMM/MAM asset management, and social copier.',
      features: [
        'Everything in Starter Broker Suite',
        'PropFirm CRM (Challenge Builder, Rule & Breach Engine)',
        'PAMM / MAM Asset Management Module',
        'Social Trading Copier Engine (Master-follower allocation)',
        'Trading Robots & EA Risk Safeguards',
        '150+ Tier-1 LP Liquidity Bridge Connectivity',
        'Dedicated Slack/Telegram Engineering Channel (< 15 min SLA)'
      ],
      ctaText: 'Start Growth Suite',
      popular: true
    },
    {
      name: 'Institutional Master',
      badge: 'Dedicated Equinix LD4 Infrastructure',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      description: 'Dedicated Equinix LD4/NY4 cross-connects, custom FIX dictionary, MT5 Advanced Server APIs, and full LP aggregation.',
      features: [
        'Dedicated Equinix LD4/NY4 server infrastructure',
        'MT5 Advanced Server-Side APIs & Group Controls',
        'Custom FIX 5.0 SP2 protocol dictionary & matching engine',
        'Segregated LP wallet & custody integration',
        'Unlimited messaging throughput (100k+ msg/sec)',
        'Custom regulatory audit log reporting (FCA/CySEC/ASIC)',
        'Dedicated 1-on-1 Senior Solutions Architect'
      ],
      ctaText: 'Talk to Institutional Team',
      popular: false
    }
  ];

  return (
    <section className="bg-slate-50/70 dark:bg-[#0E1420] py-8 lg:py-12 border-b border-slate-200 dark:border-[#1E293B] relative overflow-hidden font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Compact & Tight */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-6">
          <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-white dark:bg-[#141C2B] border border-slate-200 dark:border-[#1E293B] text-slate-700 dark:text-slate-300 text-[11px] font-mono font-semibold shadow-2xs">
            <Server className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            <span>FLAT MONTHLY SAAS PRICING</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
            Simple Flat Monthly SaaS Tiers. <span className="text-emerald-600 dark:text-emerald-400">Zero Commission Markup.</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Keep 100% of your brokerage profits. Choose a plan tailored to your trading volume and scale seamlessly.
          </p>

          {/* Billing Switcher */}
          <div className="flex items-center justify-center space-x-3 pt-2">
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

            <span className={`text-xs font-semibold flex items-center space-x-1 ${isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              <span>Annual Billing</span>
              <span className="px-2 py-0.2 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold font-mono">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        {/* Tiers Grid - Compact 3 Column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, index) => {
            const isCustom = typeof tier.priceMonthly === 'string';
            const price = isAnnual ? tier.priceAnnual : tier.priceMonthly;

            return (
              <div
                key={index}
                className={`rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.popular
                    ? 'bg-white dark:bg-[#141C2B] border-2 border-emerald-600 dark:border-emerald-500 shadow-lg shadow-emerald-600/10 z-20'
                    : 'bg-white dark:bg-[#141C2B] border border-slate-200 dark:border-[#1E293B] shadow-2xs hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 dark:bg-emerald-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="mb-3">
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-sans">{tier.name}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">{tier.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-4 pb-4 border-b border-slate-100 dark:border-[#1E293B]">
                    {isCustom ? (
                      <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-sans">Custom Tier</div>
                    ) : (
                      <div className="flex items-baseline space-x-1">
                        <span className="text-3xl font-black text-slate-900 dark:text-white font-mono">${price}</span>
                        <span className="text-slate-500 dark:text-slate-400 text-xs font-medium">/ month</span>
                      </div>
                    )}
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                      {isAnnual ? 'Billed annually ($' + (typeof price === 'number' ? price * 12 : '') + '/yr)' : 'Billed monthly'}
                    </p>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-2 mb-5">
                    <p className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">What's Included:</p>
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200/60 dark:border-emerald-500/30">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="font-medium text-xs leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenAccount}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                    tier.popular
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20'
                      : 'bg-slate-900 dark:bg-[#1B2538] hover:bg-slate-800 dark:hover:bg-[#232F47] text-white border border-transparent dark:border-[#1E293B]'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Compact Guarantee Banner */}
        <div className="mt-6 p-4 rounded-xl bg-slate-950 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Headphones className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Need custom Equinix LD4 rack allocation or specific LP bridges?</h4>
              <p className="text-[11px] text-slate-400">Our senior solutions engineers will set up your sandbox environment in under 2 hours.</p>
            </div>
          </div>
          <button
            onClick={onOpenAccount}
            className="shrink-0 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all cursor-pointer"
          >
            Talk to Solutions Architect
          </button>
        </div>

      </div>
    </section>
  );
};
