import React from 'react';
import { ArrowRight, Download, Globe, ShieldCheck, Zap, Lock, Activity } from 'lucide-react';
import { useRouter } from '../../router';

export const PlatformsCTA: React.FC<{ onOpenAccount: () => void }> = ({ onOpenAccount }) => {
  const { navigate } = useRouter();

  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden font-sans">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(16,185,129,0.2),rgba(255,255,255,0))]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 text-emerald-400" />
          <span>START TRADING IN MINUTES</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-heading font-semibold text-white tracking-tight leading-tight">
          Ready to Experience Enterprise Trading Precision?
        </h2>

        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Open your BrokerBros account today to access sub-12ms SmartRouting, multi-monitor C++ Desktop Pro, and full options chaining on mobile.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAccount}
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl shadow-xl shadow-emerald-500/25 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Open Live Trading Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => navigate('/platforms/desktop')}
            className="px-7 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Download Desktop Pro</span>
          </button>

          <button
            onClick={() => navigate('/platforms/web')}
            className="px-6 py-4 bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 font-semibold text-sm rounded-xl border border-slate-800 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Globe className="w-4 h-4 text-teal-400" />
            <span>Launch Web Trader</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-10 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>SIPC INSURED UP TO $500,000</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>FINRA & SEC REGULATED BROKER-DEALER</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>99.999% ENGINE UPTIME SLA</span>
          </div>
        </div>

      </div>
    </section>
  );
};
