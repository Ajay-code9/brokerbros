import React from 'react';
import {
  Globe,
  Monitor,
  Smartphone,
  Shield,
  Code,
  CheckCircle2,
  ArrowRight,
  Download,
  Zap,
  Activity,
  Layers,
  Cpu,
  Lock,
  ChevronRight
} from 'lucide-react';
import { useRouter } from '../../router';

interface SectionProps {
  onOpenAccount: () => void;
}

export const DedicatedPlatformShowcase: React.FC<SectionProps> = ({ onOpenAccount }) => {
  const { navigate } = useRouter();

  const platformSections = [
    {
      id: "web-trader",
      title: "BrokerBros Web Workstation",
      tag: "ZERO-INSTALLATION PRECISION",
      badge: "HTML5 & TRADINGVIEW INTEGRATION",
      description: "A complete browser-based trading workstation designed for speed, flexibility, and power. Built with HTML5 and WebSockets, offering full TradingView chart capabilities without downloading local software.",
      keyBenefits: [
        "Full TradingView charting engine with 100+ technical indicators",
        "Level II Depth of Market with single-click order entry ladder",
        "Drag-and-drop workspace layout customization with multi-tab support",
        "Instant server-side cloud sync across all web sessions"
      ],
      stats: [
        { label: "Fill Speed", val: "< 15ms" },
        { label: "Chart Indicators", val: "100+" },
        { label: "Exchanges", val: "150+" }
      ],
      systemReqs: "Chrome 110+, Safari 16+, Edge 110+, Firefox 110+",
      osList: ["macOS", "Windows", "Linux", "ChromeOS"],
      ctaText: "Launch Web Trader",
      ctaPath: "/platforms/web",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
      accentBg: "bg-emerald-50/60"
    },
    {
      id: "desktop-pro",
      title: "BrokerBros Workstation Pro (Desktop)",
      tag: "NATIVE C++ MULTI-MONITOR MATRIX",
      badge: "HIGH-FREQUENCY PERFORMANCE",
      description: "Engineered from the ground up in native C++ for active professional day traders, quantitative arbitrageurs, and derivatives market makers requiring multi-monitor displays.",
      keyBenefits: [
        "Native C++ graphics engine rendering charts at 120 FPS",
        "Multi-monitor matrix support for up to 8 physical 4K displays",
        "Direct Exchange Routing (ARCA, BATS, NASDAQ, NYSE, CME)",
        "Integrated Volatility Lab & Portfolio Margin Stress Testing"
      ],
      stats: [
        { label: "Execution Latency", val: "< 3.8ms" },
        { label: "Display Support", val: "Up to 8 Displays" },
        { label: "Core Protocol", val: "FIX 4.4 Native" }
      ],
      systemReqs: "Intel i7/M2 Processor, 16GB RAM, Dedicated GPU, Windows 11 / macOS Sonoma",
      osList: ["Windows 11/10", "macOS Sonoma/Ventura", "Ubuntu / RHEL Linux"],
      ctaText: "Download Desktop Pro (v4.8)",
      ctaPath: "/platforms/desktop",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200",
      accentBg: "bg-slate-50"
    },
    {
      id: "mobile-app",
      title: "BrokerBros Mobile Trading App",
      tag: "INSTITUTIONAL MOBILE PRECISION",
      badge: "BIOMETRIC 2FA SECURITY",
      description: "Complete portfolio management and multi-leg option chaining on iOS and Android. Stay connected to global markets with sub-second execution push notifications and face-id security.",
      keyBenefits: [
        "Complete multi-leg options chain with live Greeks & probability matrix",
        "Real-time push notifications for price targets & execution fills",
        "Biometric FaceID / TouchID security with hardware key support",
        "Unified account balance & position monitoring on the go"
      ],
      stats: [
        { label: "App Rating", val: "4.9 / 5.0" },
        { label: "Push Latency", val: "< 50ms" },
        { label: "Options Greeks", val: "Real-time" }
      ],
      systemReqs: "iOS 15.0+ or Android 10.0+ with Biometric Security",
      osList: ["iPhone / iPadOS", "Android Phones & Tablets"],
      ctaText: "Explore Mobile App",
      ctaPath: "/platforms/mobile",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200",
      accentBg: "bg-emerald-50/60"
    },
    {
      id: "client-portal",
      title: "Enterprise Client & Tax Portal",
      tag: "ACCOUNT & PORTFOLIO GOVERNANCE",
      badge: "AUTOMATED TAX LOT OPTIMIZER",
      description: "Manage deposits, wire transfers, automated dividend reinvestments, sub-accounts, and tax reporting documents seamlessly in one centralized, encrypted dashboard.",
      keyBenefits: [
        "Automated Tax Lot Selection (FIFO, LIFO, Max Loss Minimizer)",
        "Multi-currency conversion desk (USD, EUR, GBP, JPY, AUD, CAD)",
        "Detailed performance statements, gain/loss reports, and 1099 exports",
        "Role-based institutional user permissioning & sub-account management"
      ],
      stats: [
        { label: "Currencies", val: "22 Global" },
        { label: "Tax Export", val: "CSV / TurboTax / PDF" },
        { label: "Security", val: "256-Bit TLS 1.3" }
      ],
      systemReqs: "Accessible via any web browser or mobile app",
      osList: ["Universal Web Portal"],
      ctaText: "Open Account Portal",
      ctaPath: "/accounts",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      accentBg: "bg-slate-50"
    },
    {
      id: "api-integrations",
      title: "Quantitative FIX 4.4 & REST/WebSocket API",
      tag: "ALGORITHMIC TRADING GATEWAY",
      badge: "SUB-MILLISECOND DMA",
      description: "Connect custom Python scripts, C++ trading bots, and institutional execution algorithms directly to our co-located servers in Equinix NY4 and LD4 data centers.",
      keyBenefits: [
        "FIX 4.4 Protocol support for institutional high-frequency trading",
        "Streaming WebSockets API for real-time tick-by-tick market data",
        "Official SDKs for Python, C++, C#, Java, and Node.js",
        "Dedicated Stock Borrow Desk API for locating hard-to-borrow shares"
      ],
      stats: [
        { label: "Co-Location Latency", val: "< 1.2ms" },
        { label: "SDKs Available", val: "5 Native Languages" },
        { label: "Data Protocol", val: "FIX 4.4 / WebSockets" }
      ],
      systemReqs: "REST / WebSockets / FIX 4.4 compliant software",
      osList: ["Linux", "Windows Server", "Cloud Servers"],
      ctaText: "Explore API Docs",
      ctaPath: "/api-integrations",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
      accentBg: "bg-emerald-50/60"
    }
  ];

  return (
    <div id="platform-showcase" className="font-sans">
      {platformSections.map((sec, idx) => {
        const isEven = idx % 2 === 0;

        return (
          <section
            key={sec.id}
            id={sec.id}
            className={`py-20 lg:py-28 ${sec.accentBg} border-b border-slate-200`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Text Content Block */}
                <div className={`lg:col-span-6 space-y-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-900 border border-emerald-200 uppercase tracking-wider">
                        {sec.tag}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-900 text-slate-100">
                        {sec.badge}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-tight">
                      {sec.title}
                    </h2>

                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                      {sec.description}
                    </p>
                  </div>

                  {/* Stats Callouts */}
                  <div className="grid grid-cols-3 gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                    {sec.stats.map((s, i) => (
                      <div key={i} className="text-center space-y-0.5">
                        <div className="text-lg sm:text-xl font-black font-mono text-emerald-700">{s.val}</div>
                        <div className="text-[11px] text-slate-500 font-medium">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Benefits Checklist */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                      Core Platform Advantages:
                    </div>
                    <div className="space-y-2">
                      {sec.keyBenefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold bg-white/80 p-3 rounded-xl border border-slate-200/80">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* System Reqs & OS Badges */}
                  <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs font-mono text-slate-600 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                      <span className="text-slate-400 font-bold">SUPPORTED OS:</span>
                      <div className="flex items-center gap-1.5 font-bold text-slate-800">
                        {sec.osList.map((os, i) => (
                          <span key={i} className="bg-slate-100 px-2 py-0.5 rounded text-[11px]">{os}</span>
                        ))}
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      <span className="font-bold text-slate-700">Specs: </span>{sec.systemReqs}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => navigate(sec.ctaPath)}
                      className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>{sec.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={onOpenAccount}
                      className="px-5 py-3.5 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs rounded-xl border border-slate-300 transition-all cursor-pointer"
                    >
                      Open Account
                    </button>
                  </div>

                </div>

                {/* Screenshot / Mockup Preview Container */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />
                    
                    <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-slate-900">
                      <img
                        src={sec.image}
                        alt={sec.title}
                        className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                      />

                      {/* Overlay Badge */}
                      <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 text-white flex items-center justify-between text-xs font-mono">
                        <div>
                          <span className="text-emerald-400 font-bold block">{sec.title}</span>
                          <span className="text-slate-400 text-[10px]">Real-time execution active</span>
                        </div>
                        <span className="px-2.5 py-1 bg-emerald-500 text-slate-950 font-bold rounded text-[10px]">
                          ONLINE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>
        );
      })}
    </div>
  );
};
