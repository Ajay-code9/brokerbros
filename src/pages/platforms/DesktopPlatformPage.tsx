import React from 'react';
import { Monitor, Cpu, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const DesktopPlatformPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <Monitor className="w-3.5 h-3.5 text-emerald-600" />
            BROKERBROS PRO DESKTOP WORKSTATION
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            Native C++ Institutional Desktop Terminal for Professional Traders
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Engineered for multi-monitor workstations, algorithmic Python & C++ strategy backtesting, direct FIX 4.4 protocol protocol access, and sub-millisecond execution speeds.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-2xl font-bold font-serif-heading text-slate-900">FIX 4.4 & API Direct Gateway</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Connect custom algorithmic execution models via low-latency FIX protocol or native Python/C++ SDKs directly to exchange order matching engines.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-2xl font-bold font-serif-heading text-slate-900">Multi-Monitor Matrix Layouts</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Support for up to 8 4K displays with unlinked window synchronization, hotkey order routing, and custom Level 2 depth DOMs.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
