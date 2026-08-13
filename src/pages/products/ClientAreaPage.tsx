import React, { useState } from 'react';
import {
  UserCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Download,
  Activity,
  Sliders,
  ChevronDown,
  Globe2,
  Wallet,
  Lock,
  Smartphone,
  CreditCard,
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface ClientAreaPageProps {
  onOpenAccount: () => void;
}

export const ClientAreaPage: React.FC<ClientAreaPageProps> = ({ onOpenAccount }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activePortalTab, setActivePortalTab] = useState<'deposit' | 'accounts' | 'kyc'>('deposit');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: UserCheck,
      title: 'Automated AI-Powered KYC/AML',
      description: 'Instant document verification, passport OCR scanning, and biometric liveness checks reducing onboarding time to under 60 seconds.',
      badge: 'Onboarding'
    },
    {
      icon: Wallet,
      title: 'Multi-Currency Wallet System',
      description: 'Support 26+ fiat base currencies and major cryptocurrencies (USDT, BTC, ETH) with real-time internal wallet-to-trading account transfers.',
      badge: 'Treasury'
    },
    {
      icon: CreditCard,
      title: 'Instant Payment Gateway Hub',
      description: 'Pre-integrated with Visa/Mastercard, Apple Pay, Google Pay, Neteller, Skrill, Wire, and automated Crypto payment processors.',
      badge: 'Payments'
    },
    {
      icon: Lock,
      title: 'Enterprise Security & 2FA',
      description: 'Google Authenticator 2FA, hardware WebAuthn passkey support, session anomaly detection, and SMS OTP transaction verification.',
      badge: 'Security'
    },
    {
      icon: Layers,
      title: 'Multi-Account & PAMM Portal',
      description: 'Traders can open live/demo MT4 & MT5 accounts, switch leverage, join PAMM/MAM pools, and copy master traders in one click.',
      badge: 'Trading Hub'
    },
    {
      icon: Smartphone,
      title: 'Fully Customizable White-Label UI',
      description: 'Tailor colors, branding, logos, and custom domains with full CSS dark/light theme options matching your brokerage brand.',
      badge: 'Customization'
    }
  ];

  const specs = [
    { module: 'Portal Authentication SLA', tier: '256-Bit SSL + WebAuthn Hardware Keys', status: 'Bank-Grade' },
    { module: 'KYC Document Verification Time', tier: '< 45 seconds average', status: 'Automated AI' },
    { module: 'Payment Gateway Processing', tier: 'Instant API Webhooks', status: 'Live 24/7' },
    { module: 'Supported Languages', tier: '24 Native International Languages', status: 'Multilingual' },
    { module: 'Mobile Web Optimization', tier: 'Progressive Web App (PWA) Ready', status: 'Responsive' },
  ];

  const faqs = [
    {
      q: 'Can the Client Area be branded with our brokerage domain and logo?',
      a: 'Yes. The Client Area is 100% white-labeled. It operates under your custom domain (e.g. portal.yourbrokerage.com) with your logo, color themes, and custom emails.'
    },
    {
      q: 'Which KYC providers are pre-integrated into the portal?',
      a: 'BrokerBros Client Area includes built-in API bridges for Sumsub, Veriff, Shufti Pro, and Onfido for zero-friction identity and proof of address verification.'
    },
    {
      q: 'How do traders deposit and withdraw funds?',
      a: 'Traders can deposit via integrated credit cards, wire transfer, local e-wallets, or automated crypto gateways. Withdrawals are processed instantly or forwarded to admin approval based on risk rules.'
    },
    {
      q: 'Does it support multi-language localizations?',
      a: 'Yes. The portal automatically detects browser language and supports 24+ languages including English, Spanish, Arabic, Chinese, Vietnamese, Portuguese, and French.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#090D14] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      
      {/* SECTION 1: HERO & INTERACTIVE CLIENT PORTAL MOCKUP */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-slate-200 dark:border-slate-800/80">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 shadow-xs">
              <UserCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Trader Portal & Onboarding Module</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Next-Generation Trader{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Client Area & Portal
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Empower your traders with a sleek, self-service client dashboard. Instant automated KYC, multi-currency deposit/withdrawal engine, MT4/MT5 account creation, and 2FA security.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenAccount}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Explore Live Client Portal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onOpenAccount}
                className="w-full sm:w-auto px-7 py-4 font-bold text-sm rounded-xl border transition-all flex items-center justify-center gap-2 cursor-pointer bg-slate-50 dark:bg-[#121520] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Client Area Feature Matrix</span>
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 60-Second Automated KYC</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Multi-Currency Treasury</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% White-Label Branding</span>
            </div>
          </div>

          {/* Interactive Portal Preview Card */}
          <div className="mt-14 max-w-5xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#121520] shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <Wallet className="w-5 h-5 text-emerald-500" />
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">Investor Dashboard • Wallet ID: BB-94028</span>
              </div>
              <div className="flex items-center gap-2">
                {(['deposit', 'accounts', 'kyc'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActivePortalTab(tab)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer uppercase ${
                      activePortalTab === tab
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-emerald-500'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Total Wallet Equity</span>
                  <span className="text-emerald-500 font-bold">USD Balance</span>
                </div>
                <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">$45,280.50</div>
                <div className="text-[11px] text-slate-500 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Instant Transfer Available</span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>MT5 Live Account #84021</span>
                  <span className="text-emerald-500 font-bold">1:500 Leverage</span>
                </div>
                <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">$12,850.00</div>
                <div className="text-[11px] text-slate-500 font-mono">Margin Level: 842.4%</div>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>KYC Status</span>
                  <span className="text-emerald-500 font-bold">Verified</span>
                </div>
                <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Tier 3 Approved</span>
                </div>
                <p className="text-[11px] text-slate-500 font-mono">Unlimited Deposit Limit</p>
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
              Complete Client Portal Capabilities
            </h2>
            <p className="text-slate-600 dark:text-slate-300 font-medium">
              Designed to optimize trader conversion, speed up deposit funding, and minimize administrative support tickets.
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
              <span>Trader Onboarding Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              60-Second Onboarding & Funding Flow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Registration', desc: 'Trader signs up with email/social auth and receives instant portal access.' },
              { step: '02', title: 'AI Verification', desc: 'Passport/ID photo scan completes automated KYC check in under 60 seconds.' },
              { step: '03', title: 'Instant Funding', desc: 'Trader deposits funds via Credit Card, Wire, or Crypto with 0% gateway friction.' },
              { step: '04', title: 'Live Trading', desc: 'MT4/MT5 account credentials generated and linked to WebTrader terminal.' },
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
              Client Area Technical Benchmarks
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-[#121520]">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 uppercase font-bold">
                <tr>
                  <th className="py-4 px-6">System Feature</th>
                  <th className="py-4 px-6">Technical Standard</th>
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
            Pre-Integrated Payment & KYC Providers
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {['Sumsub KYC', 'Veriff AI', 'Visa / Mastercard', 'Stripe Gateway', 'Skrill & Neteller', 'Crypto Payments'].map((item, i) => (
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
              Client Area FAQ
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
      <CTASection onOpenAccount={onOpenAccount} title="Deliver A White-Label Portal Your Traders Will Love." />

    </div>
  );
};
