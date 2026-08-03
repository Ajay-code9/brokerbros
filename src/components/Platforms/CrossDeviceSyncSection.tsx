import React from 'react';
import { Cloud, Smartphone, Monitor, Globe, Tablet, Lock, CheckCircle2, RefreshCw, Zap } from 'lucide-react';

export const CrossDeviceSyncSection: React.FC = () => {
  const syncFeatures = [
    {
      title: "Cloud Workspace Continuity",
      desc: "Draw trendlines or customize chart indicators on your Desktop Workstation, and instantly see them reflect on your Mobile App and Web Trader."
    },
    {
      title: "Universal Order State Engine",
      desc: "Place a limit order on Web Trader, modify its stop-loss from your iPad on the go, and receive fill confirmation via mobile push notification."
    },
    {
      title: "Biometric Hardware Key 2FA",
      desc: "Seamless, secure biometric authentication using Apple FaceID, TouchID, Android Fingerprint, or YubiKey hardware tokens across devices."
    },
    {
      title: "Unified Multi-Currency Balance",
      desc: "Real-time margin liquidation tracking and cash interest yield accrual updated every second across all signed-in sessions."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <Cloud className="w-3.5 h-3.5 text-emerald-600" />
            <span>CROSS-DEVICE CONTINUITY ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight">
            One Unified Workspace Across Every Screen
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Transition effortlessly between your home trading desk, laptop browser, tablet, and mobile phone without losing a single chart drawing, watchlist item, or order state.
          </p>
        </div>

        {/* Sync Illustration & Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Diagram Box (6 cols) */}
          <div className="lg:col-span-6 bg-slate-950 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span className="text-emerald-400 font-bold flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-emerald-400 animate-spin" />
                BROKERBROS CLOUD SYNC ACTIVE
              </span>
              <span>256-BIT ENCRYPTED TLS 1.3</span>
            </div>

            {/* Central Cloud Node & Connected Devices */}
            <div className="py-6 space-y-6">
              
              {/* Central Cloud Badge */}
              <div className="bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 border border-emerald-500/40 rounded-2xl p-4 text-center max-w-xs mx-auto shadow-lg space-y-1">
                <Cloud className="w-8 h-8 text-emerald-400 mx-auto" />
                <div className="text-sm font-bold font-mono text-emerald-300">BrokerBros Cloud Core</div>
                <p className="text-[10px] text-slate-300 font-mono">Sub-10ms Global State Replication</p>
              </div>

              {/* Devices Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                  <Monitor className="w-5 h-5 text-emerald-400 mx-auto" />
                  <span className="font-bold text-white block">Desktop Pro</span>
                  <span className="text-[10px] text-emerald-400">SYNCED</span>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                  <Globe className="w-5 h-5 text-teal-400 mx-auto" />
                  <span className="font-bold text-white block">Web Trader</span>
                  <span className="text-[10px] text-emerald-400">SYNCED</span>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                  <Tablet className="w-5 h-5 text-cyan-400 mx-auto" />
                  <span className="font-bold text-white block">Tablet Pro</span>
                  <span className="text-[10px] text-emerald-400">SYNCED</span>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                  <Smartphone className="w-5 h-5 text-emerald-400 mx-auto" />
                  <span className="font-bold text-white block">Mobile App</span>
                  <span className="text-[10px] text-emerald-400">SYNCED</span>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 text-center">
              * Active positions and risk margins update simultaneously across all logged-in devices in real time.
            </div>

          </div>

          {/* Right Features List (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {syncFeatures.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 hover:border-emerald-500/50 hover:bg-white transition-all duration-300 space-y-2 group shadow-2xs"
                >
                  <div className="flex items-center gap-2 text-slate-900 font-bold font-serif-heading text-lg group-hover:text-emerald-700 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{f.title}</span>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-7 font-sans">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
