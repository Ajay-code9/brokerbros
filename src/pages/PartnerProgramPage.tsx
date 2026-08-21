import React from 'react';
import { 
  Users, 
  DollarSign, 
  ArrowRight, 
  ShieldCheck, 
  Network, 
  Globe, 
  Share2, 
  PieChart, 
  CheckCircle2, 
  Server, 
  Award,
  Zap,
  Building2,
  Briefcase
} from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const PartnerProgramPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const partnerModels = [
    {
      icon: Network,
      title: 'Introducing Broker (IB)',
      desc: 'Earn ongoing pip-based rebates and interest share on referred trading volume across unlimited downline tiers.',
      badge: 'Multi-Tier Rebates',
      perks: ['Pip rebate customization', 'Real-time trade ledger', 'Daily automatic payouts']
    },
    {
      icon: Building2,
      title: 'White Label Solutions',
      desc: 'Launch your own fully branded brokerage with custom domain, WebTrader, MT5 server plugins, and B2B CRM.',
      badge: 'Turnkey Brokerage',
      perks: ['100% Brand ownership', 'Zero revenue share option', 'Hosted on your domain']
    },
    {
      icon: Share2,
      title: 'Affiliate Network',
      desc: 'High CPA and recurring revenue models for financial publishers, educators, media buyers, and signal providers.',
      badge: 'High CPA Models',
      perks: ['UTM link generator', 'Cookie & postback tracking', 'Instant conversion funnel']
    },
    {
      icon: Briefcase,
      title: 'Money Manager (PAMM/MAM)',
      desc: 'Manage master investor capital with flexible performance fees, high-water mark logic, and sub-second execution.',
      badge: 'Asset Management',
      perks: ['Flexible performance fee', 'High-water mark tracking', 'Multi-account allocation']
    },
    {
      icon: Zap,
      title: 'FIX Liquidity Partner',
      desc: 'Connect institutional liquidity and prime brokerage volume via sub-millisecond FIX 4.4 protocol sessions.',
      badge: 'Sub-1ms Latency',
      perks: ['FIX 4.4 direct gateway', 'LD4/NY4 co-location', 'B2B Liquidity bridge']
    },
    {
      icon: Globe,
      title: 'Regional Master Partner',
      desc: 'Exclusive regional territory rights to onboard local IBs, sub-affiliates, and retail brokers under your brand.',
      badge: 'Territory Ownership',
      perks: ['Exclusive country rights', 'Dedicated Account Manager', 'Customized local marketing']
    }
  ];

  const onboardingSteps = [
    {
      step: '01',
      title: 'Register Partner Portal',
      desc: 'Complete quick online onboarding to access your dedicated multi-tier partner dashboard and referral links.'
    },
    {
      step: '02',
      title: 'Choose Commission Structure',
      desc: 'Select between Pip Rebate, CPA, or Hybrid Revenue Share tailored to your target client demographic.'
    },
    {
      step: '03',
      title: 'Share Tracking Links',
      desc: 'Distribute unique referral links, promo codes, and banners with real-time click and conversion tracking.'
    },
    {
      step: '04',
      title: 'Receive Daily Payouts',
      desc: 'Earnings are automatically credited to your partner wallet with instant withdrawal via Crypto, Wire, or E-Wallets.'
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#090D14] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans min-h-screen">
      
      {/* 1. HERO SECTION (100% ABOVE-THE-FOLD AT LANDING TIME & DUAL THEME COMPATIBLE) */}
      <section className="relative min-h-[calc(100vh-90px)] flex flex-col justify-center py-6 sm:py-10 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1420]">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-5 my-auto w-full">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-800/50">
            <Users className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>INTRODUCING BROKER & GLOBAL PARTNER NETWORK</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Partner with an Institutional Global Financial Brokerage <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400">
              Turnkey IB & Affiliate Network Solution
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            Expand your financial advisory or brokerage business with multi-tier pip rebate calculations, custom CPA structures, white-label client portals, and automated payouts across 150+ global markets.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAccount}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-md shadow-emerald-600/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Partner Portal Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Integrated SLA Metric Card */}
          <div className="pt-3 max-w-xl mx-auto w-full">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
              <div className="text-left space-y-0.5">
                <div className="text-xs font-mono font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>AUTOMATED REBATE ENGINE</span>
                </div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Real-Time Pip Calculation & Instant Payouts
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400 px-3.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                100% Automated
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CHRONOLOGICAL 4-STEP PARTNER ONBOARDING FLOW */}
      <section className="py-14 sm:py-18 bg-white dark:bg-[#0E1420] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              <Network className="w-4 h-4" />
              <span>PARTNER ONBOARDING STEPS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Start Earning in 4 Simple Steps
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Launch your referral network with automated downline attribution and transparent commission ledgers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {onboardingSteps.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 space-y-3 relative">
                <div className="w-9 h-9 rounded-xl font-mono font-bold flex items-center justify-center text-sm border bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                  {item.step}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. PARTNER PROGRAM MODELS GRID */}
      <section className="py-16 sm:py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Tailored Partnership Models for Every Business
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Whether you are an introducing broker, media publisher, fund manager, or regional financial institution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerModels.map((model, idx) => (
              <div key={idx} className="bg-white dark:bg-[#141C2B] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-5 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-500/20">
                      <model.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 px-2.5 py-1 rounded-md">
                      {model.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{model.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {model.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  {model.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CTA SECTION */}
      <CTASection onOpenAccount={onOpenAccount} />

    </div>
  );
};
