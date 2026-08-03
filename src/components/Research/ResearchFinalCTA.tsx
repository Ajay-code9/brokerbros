import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';

interface ResearchFinalCTAProps {
  onOpenAccount: () => void;
}

export const ResearchFinalCTA: React.FC<ResearchFinalCTAProps> = ({ onOpenAccount }) => {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200 font-sans relative overflow-hidden">
      {/* Background Accent Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold rounded-full border border-emerald-200 shadow-2xs font-sans">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Empowering Smart Capital</span>
        </div>

        {/* Large Editorial Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-[1.12]">
          Stay Ahead of the Markets. <br />
          <span className="text-emerald-700">Start Investing with BrokerBros.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-lg sm:text-xl font-sans max-w-2xl mx-auto leading-relaxed">
          Open your account in under 3 minutes to unlock real-time research, Level II market depth, and $0 commission equity trading.
        </p>

        {/* CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAccount}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-xl transition-all shadow-lg hover:shadow-xl shadow-emerald-600/25 flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <span>Open Free Account</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenAccount}
            className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-base rounded-xl border border-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Demo Trading</span>
          </button>
        </div>

        {/* Guarantees Line */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-sans">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            $0 Account Minimums
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            SIP Protection up to $500,000
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            No Platform Fees
          </span>
        </div>

      </div>
    </section>
  );
};
