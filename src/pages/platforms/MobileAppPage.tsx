import React, { useState } from 'react';
import {
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  Bell,
  BarChart2,
  Download,
  Apple,
  Play,
  Check,
  HelpCircle,
  Layers
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';
import { ProductVideoSection } from '../../components/Common/ProductVideoSection';
import { ProductGallerySection } from '../../components/Common/ProductGallerySection';

interface PageProps {
  onOpenAccount: () => void;
}

export const MobileAppPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeMobileView, setActiveMobileView] = useState<'watch' | 'chart' | 'order'>('watch');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const mobileViews = {
    watch: {
      title: 'Real-Time Watchlists & Quote Stream',
      subtitle: 'Swipe through live bid/ask prices, daily % changes, and volume heatmaps across global stock, options, and forex pairs.',
      image: '/web-mobile-app.webp',
      badge: 'Watchlist Stream Active'
    },
    chart: {
      title: 'Full-Screen Touch Gesture Charting',
      subtitle: 'Pinch-to-zoom candlestick charts with technical indicators, drawing tools, and crosshair price inspection on mobile screens.',
      image: '/webterminal.webp',
      badge: 'Touch Chart Active'
    },
    order: {
      title: '1-Tap Order Ticket & Bracket Stop-Loss',
      subtitle: 'Set preset lot sizes, stop-losses, and profit targets. Place market or limit orders instantly with biometric FaceID authorization.',
      image: '/broker-crm-img-one.webp',
      badge: 'Order Ticket Active'
    }
  };

  return (
    <div className="bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-300 min-h-screen font-sans selection:bg-emerald-500/20 transition-colors duration-300">
      
      {/* 1. GROUNDED HUMAN HERO SECTION */}
      <section className="relative bg-white dark:bg-[#0a0a0a] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Soft Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-70 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 text-xs font-semibold border border-emerald-200 dark:border-emerald-800/50">
            <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>IOS & ANDROID MOBILE APP</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Trade Stocks, Options & Forex Anywhere on Your Phone
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Fast, secure, and easy to use. Monitor your portfolio, track live prices, place orders with 1-tap, and receive instant execution push alerts wherever you go.
          </p>

          {/* Action Buttons & App Store Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenAccount}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Download Free Mobile App</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenAccount}
                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>App Store (iOS)</span>
              </button>
              <button
                onClick={onOpenAccount}
                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Google Play (Android)</span>
              </button>
            </div>
          </div>

          {/* EMPIRICAL AUDITED METRICS BAR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-100 dark:border-slate-800/80 text-left">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#121520] border border-slate-200/80 dark:border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono">0.8s</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">FaceID Login Speed</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#121520] border border-slate-200/80 dark:border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">Instant</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Push Execution Alerts</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#121520] border border-slate-200/80 dark:border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono">256-Bit</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Hardware Key Enclave</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#121520] border border-slate-200/80 dark:border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">100%</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Free App Download</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. DEMO VIDEO SHOWCASE */}
      <ProductVideoSection
        title="See How the Mobile App Works in Action"
        subtitle="Watch how you can swipe through watchlists, open full-screen mobile charts, set stop-losses, and track your account balance in real-time."
        videoSrc="/test.mp4"
        posterSrc="/web-mobile-app.webp"
        chapters={[
          { time: '0:00', title: 'Mobile App Home & Portfolio' },
          { time: '1:05', title: 'Touch Charting & Technical Studies' },
          { time: '2:15', title: '1-Tap Order Entry & Stop-Losses' },
          { time: '3:30', title: 'Instant Mobile Deposits & Alerts' }
        ]}
      />

      {/* 3. INTERACTIVE MOBILE VIEW SWITCHER */}
      <section className="py-20 bg-slate-50 dark:bg-[#121520] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold uppercase border border-emerald-200 dark:border-emerald-800/40">
              <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              MOBILE SCREEN PRESETS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Designed for Intuitive One-Handed Navigation
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Click below to preview pre-configured mobile screens for watchlists, touch charts, and order tickets.
            </p>
          </div>

          {/* Interactive Mobile Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'watch', label: 'Watchlists & Quotes' },
              { id: 'chart', label: 'Touch Charting' },
              { id: 'order', label: '1-Tap Order Ticket' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMobileView(tab.id as any)}
                className={`px-5 py-2.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                  activeMobileView === tab.id
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/20'
                    : 'bg-white dark:bg-[#0a0a0a] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Active Screenshot Showcase */}
          <div className="bg-white dark:bg-[#0a0a0a] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/50 px-2 py-0.5 rounded uppercase">
                  {mobileViews[activeMobileView].badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {mobileViews[activeMobileView].title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
                {mobileViews[activeMobileView].subtitle}
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner group">
              <img
                src={mobileViews[activeMobileView].image}
                alt={mobileViews[activeMobileView].title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. ASYMMETRIC ALTERNATING FEATURE SPLITS */}
      <section className="py-20 bg-white dark:bg-[#0a0a0a] border-b border-slate-200 dark:border-slate-800 space-y-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Split 1: Image Left / Text Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-xl group">
              <img
                src="/web-mobile-app.webp"
                alt="Instant Lock Screen Push Alerts"
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded text-xs font-mono font-bold shadow">
                Lock Screen Push Engine
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800/40">
                <Bell className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Instant Price & Fill Lock Screen Notifications
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                Receive instant push alerts directly on your lock screen whenever your target price is hit, an order fills, or a margin warning is triggered — even when your phone is locked or in your pocket.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Custom price target alert triggers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Instant fill notifications for market & limit orders</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Economic news release & earnings calendar alerts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Split 2: Text Left / Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 md:order-1 order-2">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center border border-blue-200 dark:border-blue-800/40">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Biometric FaceID & Encrypted Hardware Key Enclave
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                Log in securely in under a second using iPhone FaceID or Android fingerprint recognition. Your sensitive API credentials and session tokens are protected by 256-bit hardware encryption.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Sub-second FaceID & TouchID biometric login</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Hardware enclave token storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Two-factor authentication (2FA) for fund withdrawals</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-xl group md:order-2 order-1">
              <img
                src="/broker-crm-img-one.webp"
                alt="Biometric Security Enclave"
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded text-xs font-mono font-bold shadow">
                FaceID Enclave Security
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. PRODUCT INTERFACE GALLERY */}
      <ProductGallerySection
        title="Explore Mobile App Screenshots"
        subtitle="View high-resolution screenshots of the mobile trading workspace, watchlists, order tickets, and funding screens."
        categories={['All Screenshots', 'Overview', 'Client Portal', 'Admin Desk', 'Analytics']}
        items={[
          {
            id: 'mob-1',
            title: 'Mobile App Main Dashboard',
            category: 'Client Portal',
            imageSrc: '/web-mobile-app.webp',
            description: 'Mobile trading dashboard with live portfolio balance, open positions, and instant 1-tap trade order entry.'
          },
          {
            id: 'mob-2',
            title: 'Web & Mobile Synchronized Portal',
            category: 'Overview',
            imageSrc: '/broker-crm-img-one.webp',
            description: 'Cloud synchronized account dashboard tracking deposits, margin requirements, and active watchlists.'
          },
          {
            id: 'mob-3',
            title: 'Mobile Trading Workstation',
            category: 'Client Portal',
            imageSrc: '/webterminal.webp',
            description: 'Full responsive trading terminal accessible across smartphone browsers and native app wrappers.'
          }
        ]}
      />

      {/* 6. AUTHENTIC TRADER FAQS */}
      <section className="py-20 bg-slate-50 dark:bg-[#121520] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions (Real Mobile Doubts)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Clear answers to practical questions about mobile trading and security.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'What happens if I get an incoming phone call during an active trade?',
                a: 'Your open order or stop-loss remains 100% active on the exchange matching engine server. Phone calls will not interrupt or cancel your orders.'
              },
              {
                q: 'Can I deposit funds directly inside the mobile app?',
                a: 'Yes. You can manage instant USDT/BTC crypto deposits, bank wires, and card funding directly inside the mobile app.'
              },
              {
                q: 'Do my watchlists and price alerts sync with my computer?',
                a: 'Yes! Everything you set up on mobile (watchlists, custom alerts, indicator templates) syncs instantly with your web browser and desktop workspace.'
              },
              {
                q: 'Is the mobile app free to download on iPhone and Android?',
                a: 'Yes, 100% free to download on Apple App Store and Google Play Store for all account holders.'
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0a0a0a] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center justify-between cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 text-lg font-mono font-bold ml-2">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>

                {activeFaq === idx && (
                  <div className="p-4 sm:p-5 pt-0 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-[#121520]/50 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. DYNAMIC CTA SECTION */}
      <CTASection onOpenAccount={onOpenAccount} />

    </div>
  );
};
