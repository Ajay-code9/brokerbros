import React from 'react';
import { GraduationCap, BookOpen, CheckCircle, ArrowRight, PlayCircle } from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const AcademyPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const courses = [
    { title: "Equities Market Foundations & SmartRouting", level: "Beginner", modules: "6 Modules", duration: "2.5 Hours", desc: "Understand exchange microstructure, limit order books, bid-ask spreads, and order routing mechanics." },
    { title: "Options Mechanics & Volatility Surfaces", level: "Intermediate", modules: "12 Modules", duration: "5.0 Hours", desc: "Master Delta, Gamma, Theta, Vega, implied volatility skew, and multi-leg strategies like Iron Condors." },
    { title: "Futures Spread Trading & SPAN Margin", level: "Advanced", modules: "8 Modules", duration: "4.0 Hours", desc: "Index and commodity futures calendar spreads, basis trading, and clearing margin calculations." },
    { title: "Algorithmic Trading with Python & FIX API", level: "Quantitative", modules: "15 Modules", duration: "8.0 Hours", desc: "Build automated trading bots using BrokerBros Python SDK, REST endpoints, and WebSocket data streams." }
  ];

  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            BROKERBROS TRADING ACADEMY
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            Master Institutional Trading Strategies & Volatility Risk
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Interactive courses, live trading webinars, and quantitative research papers designed for retail investors and professional portfolio managers.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((c, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">{c.level}</span>
                  <span className="text-slate-500">{c.modules} • {c.duration}</span>
                </div>
                <h3 className="text-2xl font-bold font-serif-heading text-slate-900">{c.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
                <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1 cursor-pointer">
                  <PlayCircle className="w-4 h-4 text-emerald-600" />
                  <span>Start Free Course</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
