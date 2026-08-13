import React, { useState } from 'react';
import {
  Smartphone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Download,
  Activity,
  Sliders,
  ChevronDown,
  Globe2,
  Zap,
  Bell,
  Lock,
  Cpu,
  BarChart3,
  Sparkles,
  Check
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface MobileAppProductPageProps {
  onOpenAccount: () => void;
}

export const MobileAppProductPage: React.FC<MobileAppProductPageProps> = ({ onOpenAccount }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedDevice, setSelectedDevice] = useState<'ios' | 'android'>('ios');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: Smartphone,
      title: 'Native iOS & Android White-Label Apps',
      description: 'Fully branded apps published directly under your brokerage Developer Account on Apple App Store & Google Play Store.',
      badge: 'Native Apps'
    },
    {
      icon: BarChart3,
      title: 'TradingView Mobile Charting',
      description: 'Integrated TradingView HTML5 charts with 80+ technical indicators, multi-timeframe overlays, and gesture-driven order placement.',
      badge: 'Charting'
    },
    {
      icon: Bell,
      title: 'Push Notifications & Price Alerts',
      description: 'Instant push alerts for price triggers, margin calls, order fills, economic news events, and promotional campaigns.',
      badge: 'Notifications'
    },
    {
      icon: Lock,
      title: 'Biometric Face ID & Touch ID',
      description: 'Secure, zero-friction biometric login with hardware enclave security, session timeout rules, and PIN backup.',
      badge: 'Security'
    },
    {
      icon: Zap,
      title: 'One-Tap Order Execution',
      description: 'Lightning-fast order entry with pre-configured stop loss, take profit, trailing stops, and depth of market (DOM) visualization.',
      badge: 'Execution'
    },
    {
      icon: Globe2,
      title: 'Integrated Mobile Deposit & KYC',
      description: 'In-app camera photo capture for instant KYC document upload and Apple Pay / Google Pay / Crypto deposit integration.',
      badge: 'In-App Funding'
    }
  ];

  const specs = [
    { module: 'Supported Mobile OS', tier: 'iOS 14+ & Android 9.0+ (API Level 28+)', status: 'Native Swift/Kotlin' },
    { module: 'Order Execution Speed', tier: '< 12ms Mobile WebSocket Engine', status: 'Ultra-Fast' },
    { module: 'App Store Publishing Time', tier: '7 to 10 Days Approval SLA', status: 'Managed' },
    { module: 'Security Standard', tier: 'OWASP Mobile Top 10 Compliant', status: 'Bank-Grade' },
    { module: 'Push Notification Engine', tier: 'Firebase FCM + Apple APNs Gateway', status: 'Unlimited' },
  ];

  const faqs = [
    {
      q: 'Will the mobile app be published under our broker brand name?',
      a: 'Yes. We build, sign, and publish the app directly under your corporate Apple Developer Program and Google Play Console accounts with your logo, splash screens, and app store graphics.'
    },
    {
      q: 'Does the app support custom charting indicators?',
      a: 'Yes. The app embeds high-performance TradingView mobile charts complete with drawing tools, custom indicators, candle types, and tap-to-trade chart execution.'
    },
    {
      q: 'How fast can a mobile order be executed?',
      a: 'Mobile orders are transmitted via secure binary WebSocket channels directly to your MT4/MT5/cTrader server backend, achieving average order execution under 12 milliseconds.'
    },
    {
      q: 'Are push notifications supported for margin calls and news?',
      a: 'Absolutey. You can send automated push notifications for margin warnings, order executions, daily market insights, and custom promotional announcements.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#090D14] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      
      {/* SECTION 1: HERO & INTERACTIVE MOBILE MOCKUP */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-slate-200 dark:border-slate-800/80">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 shadow-xs">
              <Smartphone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Mobile Trading Platform Module</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              White-Label Mobile{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Trading Apps for iOS & Android
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Deliver a world-class mobile trading experience under your brokerage brand. Native iOS & Android apps with TradingView charts, biometric login, push alerts, and 1-tap order execution.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenAccount}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Request App Store Demo Build</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onOpenAccount}
                className="w-full sm:w-auto px-7 py-4 font-bold text-sm rounded-xl border transition-all flex items-center justify-center gap-2 cursor-pointer bg-slate-50 dark:bg-[#121520] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Mobile SDK Documentation</span>
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Apple App Store & Google Play</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> TradingView Charts Included</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Biometric Face ID Auth</span>
            </div>
          </div>

          {/* Interactive Mobile Terminal Preview Card */}
          <div className="mt-14 max-w-4xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#121520] shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-emerald-500" />
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">BrokerBros Mobile Terminal v3.2</span>
              </div>
              <div className="flex items-center gap-2">
                {(['ios', 'android'] as const).map((device) => (
                  <button
                    key={device}
                    onClick={() => setSelectedDevice(device)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer uppercase ${
                      selectedDevice === device
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-emerald-500'
                    }`}
                  >
                    {device} Build
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>EUR/USD Spot</span>
                  <span className="text-emerald-500 font-bold">+0.42%</span>
                </div>
                <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">1.08942</div>
                <div className="text-[11px] text-slate-500 font-mono flex items-center justify-between">
                  <span>BID: 1.08938</span>
                  <span className="text-emerald-500">ASK: 1.08942</span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>BTC/USD Crypto</span>
                  <span className="text-emerald-500 font-bold">+2.85%</span>
                </div>
                <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">$94,820.00</div>
                <div className="text-[11px] text-slate-500 font-mono">Push Price Alert Active</div>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#090D14] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Face ID Security</span>
                  <span className="text-emerald-500 font-bold">Enclave Active</span>
                </div>
                <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <Lock className="w-5 h-5" />
                  <span>Biometric Verified</span>
                </div>
                <p className="text-[11px] text-slate-500 font-mono">Zero-Knowledge Token Auth</p>
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
              Institutional Mobile App Suite
            </h2>
            <p className="text-slate-600 dark:text-slate-300 font-medium">
              Give your retail and institutional clients a high-end mobile app experience designed for peak trading engagement.
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
              <span>App Publishing Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              7-Day Mobile Launch SLA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Brand Customization', desc: 'Configure app themes, splash logos, app icons, and custom color palettes.' },
              { step: '02', title: 'Server API Linking', desc: 'Secure connection to your MT4/MT5/cTrader backend and payment gateway REST APIs.' },
              { step: '03', title: 'App Store Submission', desc: 'We prepare App Store & Google Play metadata, privacy disclosures, and binary builds.' },
              { step: '04', title: 'Live Store Approval', desc: 'Your branded app goes live globally on Apple App Store and Google Play Store.' },
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
              Mobile Technical Specifications
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-[#121520]">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 uppercase font-bold">
                <tr>
                  <th className="py-4 px-6">Mobile Component</th>
                  <th className="py-4 px-6">Specification Tier</th>
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
            Mobile Technology Integrations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {['Apple APNs Push', 'Firebase FCM', 'TradingView Charts', 'Face ID Enclave', 'Apple Pay', 'Google Pay'].map((item, i) => (
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
              Mobile Trading App FAQ
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
      <CTASection onOpenAccount={onOpenAccount} title="Launch Branded iOS & Android Apps For Your Brokerage." />

    </div>
  );
};
