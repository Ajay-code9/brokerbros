import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { useRouter } from '../../router';

interface HeroProps {
  onOpenAccount: () => void;
}

export const PlatformsHero: React.FC<HeroProps> = ({ onOpenAccount }) => {
  const { navigate } = useRouter();

  return (
    <section className="relative bg-white text-slate-900 py-16 lg:py-24 min-h-[calc(100vh-80px)] flex items-center border-b border-slate-100 overflow-hidden font-sans">
      
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Live Data Ticker Status Bar */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 text-slate-700 rounded-full border border-slate-200/80 text-xs font-mono font-medium mx-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-slate-900 font-bold">SUB-MILLISECOND LATENCY</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-bold">150+ VENUES CONNECTED</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-950 font-sans">
            Trade with <br />
            <span className="text-emerald-700">Microsecond Precision</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            Direct market access across all asset classes with sub-millisecond execution, institutional order flow routing, and advanced algorithmic tools.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenAccount}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer text-sm"
            >
              <span>Open Free Trading Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('/platforms/desktop')}
              className="px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-lg border border-slate-300 transition-all flex items-center gap-2 cursor-pointer text-sm"
            >
              <Download className="w-4 h-4 text-emerald-600" />
              <span>Download Desktop Workstation</span>
            </button>
          </div>
        </div>

        {/* Real Mobile Trading App Frame Mockup */}
        <div className="mt-16 relative max-w-4xl mx-auto text-center">
          <img
            src="/mobile_trading_app.png"
            alt="BrokerBros Mobile Trading App"
            className="w-full h-auto max-h-[500px] object-contain shadow-2xl rounded-2xl border border-slate-200 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
