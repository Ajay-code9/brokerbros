import React, { useState } from 'react';
import { Globe, Monitor, Smartphone, Shield, Code, CheckCircle2, ArrowRight, Terminal, Cpu, Zap, Download } from 'lucide-react';
import { useRouter } from '../../router';

type TabKey = 'web' | 'desktop' | 'mobile' | 'portal' | 'api';

interface TabDetail {
  id: TabKey;
  label: string;
  icon: React.ElementType;
  headline: string;
  subtext: string;
  features: string[];
  osBadges: string[];
  primaryAction: string;
  routePath: string;
  mockupType: 'chart' | 'multi' | 'mobile' | 'portal' | 'code';
}

export const PlatformInteractiveTabs: React.FC<{ onOpenAccount: () => void }> = ({ onOpenAccount }) => {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<TabKey>('web');
  const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'cpp' | 'fix'>('python');

  const tabs: TabDetail[] = [
    {
      id: 'web',
      label: 'Web Trader',
      icon: Globe,
      headline: 'Browser-Based Institutional Precision Terminal',
      subtext: 'Zero software downloads required. Experience HTML5 TradingView charts, custom workspace templates, and sub-second execution directly from any modern web browser.',
      features: [
        '100+ Built-in Technical Indicators & Drawing Tools',
        'Level II Depth of Market with Order Book ladder',
        'Custom Drag-and-Drop Workspace Layouts',
        'Integrated Volatility Surface & Options Chain'
      ],
      osBadges: ['Chrome', 'Safari', 'Edge', 'Firefox'],
      primaryAction: 'Launch Web Trader Demo',
      routePath: '/platforms/web',
      mockupType: 'chart'
    },
    {
      id: 'desktop',
      label: 'Desktop Pro',
      icon: Monitor,
      headline: 'High-Performance C++ Multi-Monitor Workstation',
      subtext: 'Built natively in C++ for maximum throughput and 120 FPS chart updates. Manage up to 8 physical monitors with direct exchange fiber routing.',
      features: [
        'Native C++ Graphics Engine for Zero Lag',
        'Multi-Monitor Matrix Preset Layouts',
        'Direct Market Access (DMA) to ARCA, BATS, NASDAQ',
        'Options Volatility Lab & Portfolio Margin Simulator'
      ],
      osBadges: ['Windows 11/10', 'macOS Sonoma', 'Linux Ubuntu/RHEL'],
      primaryAction: 'Download Desktop Pro (v4.8)',
      routePath: '/platforms/desktop',
      mockupType: 'multi'
    },
    {
      id: 'mobile',
      label: 'Mobile App',
      icon: Smartphone,
      headline: 'Institutional Power in the Palm of Your Hand',
      subtext: 'Full multi-leg options chaining, live price push alerts, and FaceID/TouchID biometric security. Keep full control of your portfolio anywhere in the world.',
      features: [
        'Real-time Options Chain with Live Greeks',
        'Biometric 2FA & Hardware Key Security',
        'One-Tap Order Execution & Position Adjustments',
        'Instant Push Notifications for Price & Execution'
      ],
      osBadges: ['iOS App Store', 'Google Play Store', 'iPadOS'],
      primaryAction: 'Download Mobile App',
      routePath: '/platforms/mobile',
      mockupType: 'mobile'
    },
    {
      id: 'portal',
      label: 'Client Portal',
      icon: Shield,
      headline: 'Centralized Account, Tax & Portfolio Management',
      subtext: 'Manage deposits and instant wires, download tax reporting docs (1099/8949), configure multi-currency sub-accounts, and view real-time portfolio margin stats.',
      features: [
        'Automated Tax Lot Selection (FIFO, LIFO, Max Loss)',
        'Multi-Currency Deposit & Conversion Desk',
        'Detailed Performance Reporting & Gain/Loss Export',
        'Institutional User Access Control & Sub-Accounts'
      ],
      osBadges: ['Web Portal', 'Encrypted TLS 1.3'],
      primaryAction: 'Manage Account Portal',
      routePath: '/accounts',
      mockupType: 'portal'
    },
    {
      id: 'api',
      label: 'API & Integrations',
      icon: Code,
      headline: 'Low-Latency FIX 4.4, REST & WebSockets APIs',
      subtext: 'Connect custom quantitative algorithms, backtest trading strategies, and execute high-frequency trades via direct co-located API endpoints.',
      features: [
        'FIX 4.4 Protocol Support with Sub-1.2ms Latency',
        'REST & WebSockets Streaming Market Data APIs',
        'Native Python, C++, C#, and Node.js SDKs',
        'Dedicated Sandbox Environment for Strategy Backtesting'
      ],
      osBadges: ['Python SDK', 'C++ Library', 'REST / FIX 4.4'],
      primaryAction: 'View API Documentation',
      routePath: '/api-integrations',
      mockupType: 'code'
    }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  const codeSnippets = {
    python: `import brokerbros as bb

# Initialize institutional API client
client = bb.Client(api_key="bb_live_9942a", env="production")

# Submit SmartRouted Limit Order
order = client.orders.create(
    symbol="NVDA",
    qty=500,
    side="BUY",
    type="LIMIT",
    limit_price=128.45,
    time_in_force="GTC",
    routing="SMART_NBBO"
)

print(f"Order Transmitted: ID {order.id} | Status: {order.status}")`,
    cpp: `#include <brokerbros/fix_engine.hpp>

int main() {
    bb::FixSession session("tcp://fix.brokerbros.com:9800", "ACCOUNT_8842");
    
    bb::NewOrderSingle order;
    order.setSymbol("NVDA");
    order.setSide(bb::Side::BUY);
    order.setOrderQty(500);
    order.setPrice(128.45);
    order.setOrdType(bb::OrdType::LIMIT);

    session.send(order);
    return 0;
}`,
    fix: `8=FIX.4.4|9=148|35=D|49=CLIENT_PRO|56=BROKERBROS|34=102|52=20260731-08:20:00|11=ORD_99182|55=NVDA|54=1|38=500|40=2|44=128.45|59=0|10=182|`
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            <span>UNIFIED PLATFORM ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight">
            Explore All Trading Terminals
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Switch between our dedicated platforms to compare feature sets and technical capabilities.
          </p>
        </div>

        {/* Horizontal Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200 max-w-4xl mx-auto">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Detail Showcase Box */}
        <div className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text & Spec List (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                {currentTab.osBadges.map((os, idx) => (
                  <span key={idx} className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                    {os}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading text-slate-900">
                {currentTab.headline}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {currentTab.subtext}
              </p>
            </div>

            {/* Features Checklist */}
            <div className="space-y-2.5">
              {currentTab.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold bg-white p-3 rounded-xl border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate(currentTab.routePath)}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{currentTab.primaryAction}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenAccount}
                className="px-5 py-3 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs rounded-xl border border-slate-300 transition-all cursor-pointer"
              >
                Open Account
              </button>
            </div>
          </div>

          {/* Right Live Visual Mockup Preview (6 cols) */}
          <div className="lg:col-span-6 bg-slate-950 rounded-2xl p-5 sm:p-6 border border-slate-800 text-white shadow-2xl relative overflow-hidden min-h-[340px] flex flex-col justify-between">
            
            {/* Mockup Header Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-slate-200 font-bold uppercase">{currentTab.label} Visualizer</span>
              </div>
              <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">INTERACTIVE PREVIEW</span>
            </div>

            {/* Dynamic Content Preview based on Tab */}
            {currentTab.mockupType === 'chart' && (
              <div className="space-y-4 my-auto py-4">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-300 font-bold">NVDA • 15 MIN HTML5 CHART</span>
                  <span className="text-emerald-400 font-bold">$128.45 (+3.82%)</span>
                </div>
                <div className="h-40 bg-slate-900 rounded-lg p-3 border border-slate-800 flex items-end justify-between gap-2">
                  {[40, 55, 48, 65, 70, 62, 85, 90, 88, 98].map((h, idx) => (
                    <div key={idx} className="flex-1 bg-emerald-500 rounded-xs" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>INDICATORS: MACD (12,26,9) • RSI (14) • VWAP</span>
                  <span className="text-emerald-400">BUY TICKET READY</span>
                </div>
              </div>
            )}

            {currentTab.mockupType === 'multi' && (
              <div className="space-y-3 my-auto py-4">
                <div className="text-xs font-mono text-slate-300 font-bold">MULTI-MONITOR MATRIX PRESET (QUAD DISPLAY)</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-[11px] font-mono space-y-1">
                    <span className="text-emerald-400 font-bold block">SCREEN 1: LEVEL II</span>
                    <span className="text-slate-400">Ask: 128.45 (1,200)</span>
                    <span className="text-slate-400">Bid: 128.42 (2,400)</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-[11px] font-mono space-y-1">
                    <span className="text-cyan-400 font-bold block">SCREEN 2: OPTIONS SURF</span>
                    <span className="text-slate-400">IV Rank: 42%</span>
                    <span className="text-slate-400">Delta/Gamma Matrix</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-[11px] font-mono space-y-1">
                    <span className="text-amber-400 font-bold block">SCREEN 3: TAPE STREAM</span>
                    <span className="text-slate-400">Sub-12ms Fills</span>
                    <span className="text-slate-400">Direct ARCA / BATS</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-[11px] font-mono space-y-1">
                    <span className="text-purple-400 font-bold block">SCREEN 4: RISK LAB</span>
                    <span className="text-slate-400">Portfolio Margin: OK</span>
                    <span className="text-slate-400">VaR Stress -15%</span>
                  </div>
                </div>
              </div>
            )}

            {currentTab.mockupType === 'mobile' && (
              <div className="space-y-4 my-auto py-4 text-xs font-mono">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-emerald-400">APPLE (AAPL) OCT 18 $230 CALL</span>
                    <span className="text-emerald-400 font-bold">$4.85</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-400">
                    <div>Delta: <span className="text-white">0.52</span></div>
                    <div>Gamma: <span className="text-white">0.08</span></div>
                    <div>Theta: <span className="text-white">-0.04</span></div>
                  </div>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-slate-300 font-bold block">Biometric Authentication</span>
                    <span className="text-[10px] text-slate-500">FaceID / TouchID Active</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-bold">VERIFIED</span>
                </div>
              </div>
            )}

            {currentTab.mockupType === 'portal' && (
              <div className="space-y-3 my-auto py-4 text-xs font-mono">
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-slate-400 text-[10px]">TOTAL NET LIQUIDATION VALUE</span>
                  <div className="text-xl font-bold text-emerald-400">$248,920.50</div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">IDLE CASH YIELD</span>
                    <span className="font-bold text-white">4.85% APY</span>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">TAX LOT METHOD</span>
                    <span className="font-bold text-white">Max Loss Optimizer</span>
                  </div>
                </div>
              </div>
            )}

            {currentTab.mockupType === 'code' && (
              <div className="space-y-3 my-auto py-2">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                  {(['python', 'cpp', 'fix'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`text-[10px] font-mono px-2.5 py-1 rounded cursor-pointer ${
                        selectedLanguage === lang
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
                <pre className="text-[11px] font-mono text-emerald-400 bg-slate-900 p-3 rounded-lg overflow-x-auto border border-slate-800 leading-relaxed">
                  {codeSnippets[selectedLanguage]}
                </pre>
              </div>
            )}

            {/* Bottom Footer Note */}
            <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex justify-between">
              <span>SECURITY: 256-BIT TLS 1.3</span>
              <span className="text-emerald-400">100% CLOUD SYNCHRONIZED</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
