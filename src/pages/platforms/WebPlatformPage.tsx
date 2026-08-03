import React from 'react';
import { Globe, CheckCircle, ArrowRight, ShieldCheck, Zap, Monitor } from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const WebPlatformPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            BROKERBROS WEB WORKSTATION
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            Browser-Based Institutional Trading Without Software Downloads
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Access HTML5 TradingView charts, Level II Depth of Market, multi-asset order ticket templates, and real-time portfolio risk metrics directly from any modern web browser.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="text-emerald-700 font-bold font-mono text-sm">01 / HTML5 Charting</div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Integrated TradingView Engine</h3>
              <p className="text-slate-600 text-sm leading-relaxed">100+ technical indicators, candlestick & footprint charts, order execution directly on chart overlays.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="text-emerald-700 font-bold font-mono text-sm">02 / Order Types</div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">28+ Advanced Algo Orders</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Bracket orders, trailing stops, TWAP, VWAP, adaptive SmartRouting, and hidden icebergs.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="text-emerald-700 font-bold font-mono text-sm">03 / Cross-Device Sync</div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Cloud Workspace Persistence</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Your watchlists, chart templates, and workspace arrangements sync seamlessly to mobile and desktop.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
