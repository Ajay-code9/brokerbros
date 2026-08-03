import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Zap, Globe2 } from 'lucide-react';
import { VideoHeroBackground } from '../Common/VideoHeroBackground';

interface CTASectionProps {
  onOpenAccount: () => void;
  title?: string;
  subtitle?: string;
  badge?: string;
  variant?: 'default' | 'institutional' | 'light';
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenAccount,
  title = "Ready to Experience Institutional Precision & Lower Costs?",
  subtitle = "Open your BrokerBros account in minutes with zero account minimums. Earn up to 4.85% APY on uninvested cash reserves today.",
  badge = "INSTITUTIONAL EXECUTION GATEWAY",
  variant = 'default'
}) => {
  const isDark = variant !== 'light';

  return (
    <section className={`relative overflow-hidden py-24 lg:py-32 font-sans ${isDark ? 'bg-[#06141D] text-white border-t border-slate-800' : 'bg-slate-50 text-slate-900 border-t border-slate-200'}`}>

      {/* Video background (dark only) */}
      {isDark && <VideoHeroBackground videoSrc="/test.mp4" opacity={0.20} theme="dark" />}

      {/* Mesh glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[250px] bg-teal-500/8 rounded-full blur-[90px] pointer-events-none" />

      {/* Grid pattern overlay */}
      {isDark && (
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(52,211,153,1) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      )}

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center space-y-8">

        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-bold uppercase tracking-wider ${isDark ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`}>
          <ShieldCheck className="w-3.5 h-3.5" />
          {badge}
        </div>

        {/* Headline */}
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-[1.1] ${isDark ? 'text-white' : 'text-slate-900'}`}>
          The Brokerage Built for{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Serious Investors.
          </span>
        </h2>

        <p className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenAccount}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 text-slate-950 font-extrabold text-base rounded-xl shadow-2xl shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Open Free Account — $0 Minimum</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onOpenAccount}
            className={`w-full sm:w-auto px-7 py-4 font-bold text-sm rounded-xl border transition-all flex items-center justify-center gap-2 cursor-pointer ${isDark ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-700 backdrop-blur' : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'}`}
          >
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>Request Institutional Clearing Review</span>
          </button>
        </div>

        {/* Trust checkmarks */}
        <div className={`flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {[
            { icon: CheckCircle2, label: '$0 Account Minimums' },
            { icon: ShieldCheck, label: 'SIPC + $30M Excess Insurance' },
            { icon: Zap, label: '1.2ms Execution Speed' },
            { icon: Globe2, label: '150+ Global Exchanges' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <span key={i} className="flex items-center gap-1.5">
                <Icon className="w-4 h-4 text-emerald-400" />
                {item.label}
              </span>
            );
          })}
        </div>

        {/* Subtle divider stat line */}
        {isDark && (
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-[11px] font-mono text-slate-500">
            <span>SEC & FINRA Registered</span>
            <span className="text-slate-700">·</span>
            <span>$28.4B Consolidated Equity Capital</span>
            <span className="text-slate-700">·</span>
            <span>S&P A- Credit Rating</span>
            <span className="text-slate-700">·</span>
            <span>2.4M+ Active Accounts</span>
          </div>
        )}
      </div>
    </section>
  );
};
