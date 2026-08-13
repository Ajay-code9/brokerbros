import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  ArrowRight,
  Activity,
  Zap,
  Globe2,
  ShieldCheck,
  Cpu,
  Layers,
  Users,
  Terminal,
  Database
} from 'lucide-react';

interface ProductsSectionProps {
  onOpenAccount: () => void;
}

interface B2BModuleTab {
  id: string;
  name: string;
  shortTag: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  deploymentTime: string;
  slaMetric: string;
  image: string;
  highlights: string[];
  consoleMetrics: {
    title: string;
    endpoint: string;
    status: string;
    latency: string;
    syncRate: string;
    logs: string[];
  };
}

const B2B_MODULE_TABS: B2BModuleTab[] = [
  {
    id: 'crm-backoffice',
    name: 'White-Label CRM & Backoffice',
    shortTag: 'Modules 01, 02, 03',
    icon: Database,
    tagline: 'Turnkey White-Label Broker CRM & IB Partner Engine',
    description: 'Comprehensive broker operating system featuring multi-level IB rebate hierarchies, automated KYC document processing, multi-currency client wallets, and granular admin compliance queues.',
    deploymentTime: '1 - 3 Days',
    slaMetric: 'Unlimited IBs',
    image: '/module-showcase.webp',
    highlights: [
      'Multi-currency client portal with instant deposit/withdrawal workflows',
      'Unlimited multi-tier IB rebate tree with real-time lot calculations',
      'Automated KYC document upload and identity verification queue',
      'Granular manager role permissions & immutable compliance audit logs',
    ],
    consoleMetrics: {
      title: 'BROKER CRM CORE API',
      endpoint: 'wss://api.brokerbros.io/v1/crm/rebates/stream',
      status: 'ONLINE 99.99%',
      latency: '< 12ms',
      syncRate: 'Instant Rebates',
      logs: [
        'POST /v1/client/onboard -> KYC Verified (Automated)',
        'SYNC /v1/ib/rebates -> Tier-4 Rebate Credited ($12.50)',
        'QUEUE /v1/admin/approvals -> Deposit Approved ($10,000 USD)',
      ],
    },
  },
  {
    id: 'prop-firm',
    name: 'PropFirm Evaluation Engine',
    shortTag: 'Module 12',
    icon: ShieldCheck,
    tagline: 'Real-Time Breach Engine & Evaluation CRM',
    description: 'Purpose-built evaluation engine for funded trader programs. Automates daily drawdown limits, maximum equity loss limits, profit target flags, and automated payout splits with zero manual delay.',
    deploymentTime: 'Turnkey Setup',
    slaMetric: 'Real-Time Breach',
    image: '/desktop-terminal.webp',
    highlights: [
      'Automated daily equity snapshot & trailing drawdown breach detection',
      'Configurable 1-Step, 2-Step, or Instant Funding evaluation rules',
      'Automated breach account locking & email notification triggers',
      'Integrated profit-split calculator & payout processing portal',
    ],
    consoleMetrics: {
      title: 'PROP ENGINE RISK CONSOLE',
      endpoint: 'wss://api.brokerbros.io/v1/prop/drawdown/monitor',
      status: 'ACTIVE RISK MONITOR',
      latency: '< 4ms',
      syncRate: 'Sub-second Breach',
      logs: [
        'LISTEN /v1/accounts/drawdown -> Daily Equity Snapshot OK',
        'RULE /v1/evaluation/target -> Phase 1 Profit Target Passed (10%)',
        'FLAG /v1/risk/breach -> Max Drawdown Safe (Current -2.1%)',
      ],
    },
  },
  {
    id: 'trading-apps',
    name: 'Web & Mobile Terminals',
    shortTag: 'Modules 04, 05',
    icon: Cpu,
    tagline: 'Branded Webtrader & Native iOS / Android Apps',
    description: 'Deploy custom branded trading platforms for web and mobile. Features real-time TradingView charting, one-click order execution, depth of market (DOM), and custom color tokens for your broker brand.',
    deploymentTime: 'Custom Branded',
    slaMetric: 'Sub-10ms Order',
    image: '/web-mobile-app.webp',
    highlights: [
      'Cross-platform Web-first terminal with full TradingView indicator suite',
      'Native iOS & Android mobile apps published directly to App Store / Play Store',
      'Level II Market Depth (DOM) & Advanced Algorithmic Order Types',
      'Multi-chart layouts with custom broker color palette and logo branding',
    ],
    consoleMetrics: {
      title: 'WEBTRADER ENGINE TERMINAL',
      endpoint: 'wss://stream.brokerbros.io/v2/ticks/websocket',
      status: 'LIVE TICKS STREAMING',
      latency: '< 8.2ms',
      syncRate: '1000 Ticks/sec',
      logs: [
        'CONNECT /ws/EURUSD -> Subscribed Real-Time Feed',
        'EXECUTE /order/market -> Buy 1.00 Lot EURUSD @ 1.08450',
        'CONFIRM /order/fill -> Fill Time 6.4ms (SmartRouted)',
      ],
    },
  },
  {
    id: 'copy-pamm',
    name: 'Copy Trading & PAMM / MAM',
    shortTag: 'Modules 06, 07',
    icon: Users,
    tagline: 'Sub-Millisecond Master-Follower Copier & PAMM Suite',
    description: 'Scale social trading and asset management programs. Connect signal providers to unlimited followers with sub-millisecond copier execution, equity/balance proportional modes, and high-watermark fee splits.',
    deploymentTime: 'Instant Hook',
    slaMetric: '< 1ms Copy Latency',
    image: '/copy-pamm-showcase.webp',
    highlights: [
      'Sub-millisecond trade replication with zero slippage or execution lag',
      'Flexible allocation modes: Equity Ratio, Balance Ratio, Lot Multiplier',
      'PAMM/MAM automated high-watermark performance fee calculation engine',
      'Investor discovery leaderboards with verified historical performance stats',
    ],
    consoleMetrics: {
      title: 'PAMM / COPY EXECUTION MATRIX',
      endpoint: 'wss://api.brokerbros.io/v1/copy/master/stream',
      status: 'COPIER ENGINE ACTIVE',
      latency: '< 0.8ms',
      syncRate: '100% Replication',
      logs: [
        'MASTER /order/open -> Sold 5.00 Lots XAUUSD @ 2350.20',
        'COPIER /replicate/all -> Replicated to 1,420 Followers (<0.8ms)',
        'PAMM /fee/watermark -> Performance Fee Accrued ($3,450 USD)',
      ],
    },
  },
  {
    id: 'fix-apis',
    name: 'FIX LP Bridge & MT5 APIs',
    shortTag: 'Modules 08, 09, 13, 14',
    icon: Layers,
    tagline: 'Low-Latency FIX 4.4/5.0 Bridge & MetaTrader 5 Server APIs',
    description: 'Connect directly to Tier-1 prime brokers, bank ECNs, and crypto LPs via standardized FIX 4.4/5.0 protocols. Includes server-side MT5 C++ API hooks and automated multi-chain crypto deposit gateways.',
    deploymentTime: 'Direct LP Hook',
    slaMetric: '150+ Connected LPs',
    image: '/fix-bridge-showcase.webp',
    highlights: [
      'FIX 4.4 / 5.0 standardized protocol bridge connecting 150+ Tier-1 LPs',
      'MetaTrader 5 server-side API hooks for custom EA execution & account sync',
      'Automated crypto payment gateway with multi-chain deposit auto-crediting',
      'SmartRouting order aggregation engine for tightest bid-ask spreads',
    ],
    consoleMetrics: {
      title: 'FIX 4.4 LIQUIDITY BRIDGE CONSOLE',
      endpoint: 'fix://fix-gateway.brokerbros.io:9800/session',
      status: 'FIX SESSION ESTABLISHED',
      latency: '< 3.1ms',
      syncRate: 'Direct LP Aggregation',
      logs: [
        'FIX.4.4 / Logon -> Session ACTIVE (CompID: BROKERBROS_LP1)',
        'ROUTE /smart -> Best Ask LP-Alpha 1.08451 | Best Bid LP-Beta 1.08449',
        'GATEWAY /crypto/usdt -> Deposit Confirmed (TRC20 TxHash 0x8f...2a)',
      ],
    },
  },
];

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenAccount }) => {
  const [activeTabId, setActiveTabId] = useState<string>(B2B_MODULE_TABS[0].id);
  const activeTab = B2B_MODULE_TABS.find(t => t.id === activeTabId) || B2B_MODULE_TABS[0];

  return (
    <section id="products" className="py-14 sm:py-20 bg-white dark:bg-[#090D14] text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-[#1E293B] font-sans select-none transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Section Header - Clean Enterprise Style */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight font-sans">
            Explore Our 14 Modular Infrastructure Solutions
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium font-sans">
            Select a software module below to view enterprise capabilities, API specifications, and deployment workflows.
          </p>
        </div>

        {/* B2B Solution Module Filter Tabs Bar */}
        <div className="bg-slate-100 dark:bg-[#0E1420] p-1.5 border border-slate-200 dark:border-[#1E293B] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
          {B2B_MODULE_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            const IconComp = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`py-3 px-3 transition-all flex items-center justify-center gap-2 text-center cursor-pointer font-sans ${
                  isActive
                    ? 'bg-white dark:bg-[#141C2B] text-slate-950 dark:text-white border border-slate-300 dark:border-[#1E293B] shadow-xs'
                    : 'bg-transparent text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-[#141C2B]/60'
                }`}
              >
                <IconComp className={`w-4 h-4 shrink-0 ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500'}`} />
                <span className={`text-xs tracking-tight ${isActive ? 'font-extrabold text-slate-950 dark:text-white' : 'font-semibold text-slate-700 dark:text-slate-300'}`}>
                  {tab.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Content Showcase Box */}
        <div className="bg-slate-50 dark:bg-[#0E1420] border border-slate-200 dark:border-[#1E293B] p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column (lg:col-span-7): Module Specifications & Features */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Module Header */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight font-sans">
                    {activeTab.tagline}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium font-sans">
                    {activeTab.description}
                  </p>
                </div>

                {/* Metric Badges Row */}
                <div className="grid grid-cols-2 gap-4 bg-white dark:bg-[#141C2B] p-4 border border-slate-200 dark:border-[#1E293B]">
                  <div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">ESTIMATED DEPLOYMENT</div>
                    <div className="text-sm font-extrabold font-sans text-slate-950 dark:text-white mt-0.5">{activeTab.deploymentTime}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">ENTERPRISE PERFORMANCE</div>
                    <div className="text-sm font-extrabold font-sans text-emerald-700 dark:text-emerald-400 mt-0.5">{activeTab.slaMetric}</div>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5">
                  {activeTab.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 font-medium font-sans">
                      <div className="w-4 h-4 bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    onClick={onOpenAccount}
                    className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-none transition-colors text-xs tracking-wider uppercase font-sans cursor-pointer flex items-center gap-2 shadow-xs"
                  >
                    <span>Request {activeTab.name} Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column (lg:col-span-5): Floating 3D Isometric Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab.id}
                src={activeTab.image}
                alt={`BrokerBros ${activeTab.name} Showcase`}
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="w-full h-auto object-contain select-none filter drop-shadow-xl"
              />
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
