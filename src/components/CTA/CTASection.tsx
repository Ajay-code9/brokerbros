import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Zap, Globe2 } from 'lucide-react';

interface CTASectionProps {
  onOpenAccount: () => void;
  title?: string;
  subtitle?: string;
  badge?: string;
  variant?: 'default' | 'institutional' | 'light' | 'dark';
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenAccount,
  title,
  subtitle = "14 enterprise infrastructure modules. Flat monthly SaaS pricing. Zero revenue share. Your brand, your clients, your revenue.",
  badge = "TURNKEY BROKERAGE LAUNCH GATEWAY",
}) => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-28 font-sans bg-white dark:bg-[#090D14] text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">

      {/* Mesh Glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Background Dot Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60 dark:opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center space-y-8">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          {badge}
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-[1.1] text-slate-900 dark:text-white">
          {title ? (
            title
          ) : (
            <>
              Launch Your White-Label{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Brokerage Infrastructure.
              </span>
            </>
          )}
        </h2>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenAccount}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base rounded-xl shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Request Custom Module Quotation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={onOpenAccount}
            className="w-full sm:w-auto px-7 py-4 font-bold text-sm rounded-xl border transition-all flex items-center justify-center gap-2 cursor-pointer bg-slate-50 dark:bg-[#121520] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 shadow-xs"
          >
            <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Schedule a Live Platform Demo</span>
          </button>
        </div>

        {/* Trust Checkmarks */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono font-semibold text-slate-600 dark:text-slate-400">
          {[
            { icon: CheckCircle2, label: '14 Enterprise Modules' },
            { icon: ShieldCheck, label: 'Zero Revenue Share' },
            { icon: Zap, label: '1–3 Day Go-Live SLA' },
            { icon: Globe2, label: 'Flat SaaS Pricing' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <span key={i} className="flex items-center gap-1.5">
                <Icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                {item.label}
              </span>
            );
          })}
        </div>

        {/* Divider Stat Line */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400">
          <span>ISO 27001 Certified</span>
          <span>•</span>
          <span>99.99% Uptime SLA</span>
          <span>•</span>
          <span>26 Currency Support</span>
          <span>•</span>
          <span>500+ Active Brokerage Clients</span>
        </div>

      </div>
    </section>
  );
};
