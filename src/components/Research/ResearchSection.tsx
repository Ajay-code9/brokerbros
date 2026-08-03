import React from 'react';
import { RESEARCH_ARTICLES } from '../../data/mockData';
import { BookOpen, Calendar, ArrowRight, TrendingUp, Globe, Cpu, Filter, Award, Sparkles } from 'lucide-react';

interface ResearchSectionProps {
  onOpenAccount: () => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ onOpenAccount }) => {
  return (
    <section id="research" className="py-16 lg:py-20 bg-[#06141D] text-white border-b border-emerald-900/40 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Quantitative Intelligence Institutional Showcase Header */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end border-b border-slate-800 pb-8 overflow-hidden">
          
          {/* Subtle Green Radial Glow */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* LEFT SIDE (lg:col-span-8): Status Bar Ticker, Heading, Paragraph, Horizontal Feature Row */}
          <div className="lg:col-span-8 space-y-4 text-left relative z-10">
            
            {/* Wall Street Live Data Ticker Status Bar */}
            <div className="inline-flex flex-wrap items-center gap-3 px-3 py-1 rounded-md bg-[#0D2231] text-white font-mono text-[11px] border border-slate-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-bold tracking-wider">REFINITIV & BLOOMBERG LIVE FEEDS</span>
              <span className="text-slate-700">|</span>
              <span className="text-cyan-300 font-bold">200+ INSTITUTIONAL PROVIDERS</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-white font-sans leading-[1.12]">
              Market Insights <span className="text-emerald-400">&</span><br className="hidden sm:inline" /> Quantitative Research Desk
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              Access over 200 free and premium global research providers, real-time economic calendars, earnings estimates, AI-powered screeners, market sentiment, and institutional quantitative research.
            </p>

            {/* Horizontal Feature Row */}
            <div className="pt-2 flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 border-t border-slate-800 pt-4">
              
              {/* Feature 1 */}
              <div className="flex items-center gap-3 pr-4 sm:pr-6 border-r border-slate-800 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0 border border-emerald-500/40">
                  <Globe className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-base font-black text-white font-mono leading-none">200+</div>
                  <div className="text-[11px] font-medium text-slate-400 mt-1">Research Providers</div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3 pr-4 sm:pr-6 border-r border-slate-800 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold shrink-0 border border-cyan-500/40">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-base font-black text-white font-mono leading-none">24/5 Live</div>
                  <div className="text-[11px] font-medium text-slate-400 mt-1">Economic Clock</div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold shrink-0 border border-teal-500/40">
                  <TrendingUp className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <div className="text-base font-black text-emerald-400 font-mono leading-none">1.2ms</div>
                  <div className="text-[11px] font-medium text-slate-400 mt-1">Quant Screeners</div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE (lg:col-span-4): Soft Background Illustration (Map + Candlestick + Trend) + CTA Button */}
          <div className="lg:col-span-4 relative flex flex-col justify-end items-start lg:items-end min-h-[160px] pt-4 lg:pt-0">
            
            {/* Subtle Background Illustration (5-10% Opacity) */}
            <div className="absolute inset-0 pointer-events-none opacity-8 flex items-center justify-center">
              {/* Dotted Map Pattern */}
              <svg className="w-full h-full" viewBox="0 0 300 150">
                <pattern id="research-dots" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="1" fill="#64748B" />
                </pattern>
                <rect width="300" height="150" fill="url(#research-dots)" />
                {/* Candlesticks & Upward Trend Line */}
                <rect x="30" y="80" width="8" height="40" fill="#22C55E" rx="1" />
                <rect x="70" y="60" width="8" height="60" fill="#0F172A" rx="1" />
                <rect x="110" y="40" width="8" height="70" fill="#22C55E" rx="1" />
                <path d="M 20 90 Q 90 60, 160 30 T 260 15" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeDasharray="4 3" />
              </svg>
            </div>

            {/* Tiny Dotted Grid Decoration (Bottom-Right Corner) */}
            <div className="absolute bottom-0 right-0 w-16 h-16 opacity-20 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 40 40">
                <pattern id="dot-corner-2" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="4" cy="4" r="1" fill="#0F172A" />
                </pattern>
                <rect width="40" height="40" fill="url(#dot-corner-2)" />
              </svg>
            </div>

            {/* CTA Button Aligned Bottom-Right */}
            <div className="relative z-10 w-full sm:w-auto">
              <button
                onClick={onOpenAccount}
                className="h-[52px] px-7 bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-sm rounded-[16px] shadow-md hover:shadow-lg hover:shadow-emerald-500/10 -translate-y-0 hover:-translate-y-[2px] transition-all duration-250 ease-out flex items-center justify-center gap-3 cursor-pointer group w-full sm:w-auto"
              >
                <span>Explore Full Research Portal</span>
                <ArrowRight className="w-4 h-4 text-[#22C55E] group-hover:translate-x-1.5 transition-transform duration-250" />
              </button>
            </div>

          </div>

        </div>

        {/* 3 Research Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESEARCH_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-emerald-500 hover:shadow-lg transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded">
                    {article.tag}
                  </span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-sans leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>{article.author}</span>
                <span className="text-emerald-700 font-bold">{article.readTime}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Institutional Fintech Product Showcase Banner */}
        <div className="relative bg-[#0F172A] text-white rounded-[28px] border border-white/[0.05] shadow-[0_18px_45px_rgba(15,23,42,0.18)] p-6 sm:p-10 lg:p-12 overflow-hidden font-sans">
          
          {/* Soft Top Inner Highlight */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

          {/* Extremely Subtle Radial Green Glow behind Center Column only (4% opacity) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

          {/* 3 Equal Open Columns separated by thin vertical dividers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative z-10">
            
            {/* COLUMN 1: PortfolioAnalyst® */}
            <div className="md:pr-8 lg:pr-10 md:border-r md:border-white/[0.08] p-4 rounded-2xl hover:bg-[#131F37] hover:-translate-y-1 transition-all duration-250 ease-out group cursor-pointer relative overflow-hidden space-y-5">
              
              {/* Background Illustration (Column 1: Glowing Upward Trendline & Stock Chart - 6% Opacity) */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" viewBox="0 0 200 150">
                <path d="M 10 120 L 50 100 L 90 110 L 140 60 L 190 30" stroke="#22C55E" strokeWidth="2" fill="none" />
                <rect x="20" y="90" width="6" height="30" fill="#22C55E" opacity="0.6" />
                <rect x="60" y="80" width="6" height="40" fill="#22C55E" opacity="0.6" />
                <rect x="100" y="50" width="6" height="70" fill="#22C55E" opacity="0.6" />
              </svg>

              {/* Icon Container (64x64, 18px rounded, soft green glow) */}
              <div className="w-[64px] h-[64px] rounded-[18px] bg-[#22C55E]/[0.08] text-[#22C55E] flex items-center justify-center font-bold shadow-[0_0_20px_rgba(34,197,94,0.15)] group-hover:bg-[#22C55E]/[0.15] transition-all duration-250">
                <TrendingUp className="w-7 h-7 group-hover:scale-[1.05] transition-transform duration-250" />
              </div>

              {/* Title & Accent Line */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-[-0.03em]">
                  PortfolioAnalyst®
                </h3>
                <div className="w-[50px] h-[2px] bg-[#22C55E] rounded-full" />
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-[1.8] font-normal max-w-xs">
                Consolidate, evaluate, and benchmark your complete net worth across all financial accounts in one comprehensive dashboard.
              </p>

              {/* Bottom Link */}
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#22C55E] group-hover:text-emerald-300 relative">
                  <span className="relative">
                    Learn More
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#22C55E] group-hover:w-full transition-all duration-250 ease-out" />
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#22C55E] group-hover:translate-x-2 transition-transform duration-250 ease-out" />
                </span>
              </div>

            </div>

            {/* COLUMN 2: AI Screener Studio */}
            <div className="md:px-8 lg:px-10 md:border-r md:border-white/[0.08] p-4 rounded-2xl hover:bg-[#131F37] hover:-translate-y-1 transition-all duration-250 ease-out group cursor-pointer relative overflow-hidden space-y-5">
              
              {/* Background Illustration (Column 2: Minimal AI Neural Network Particles - 6% Opacity) */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" viewBox="0 0 200 150">
                <circle cx="40" cy="40" r="3" fill="#22C55E" />
                <circle cx="100" cy="30" r="4" fill="#22C55E" />
                <circle cx="160" cy="50" r="3" fill="#22C55E" />
                <circle cx="70" cy="100" r="4" fill="#22C55E" />
                <circle cx="140" cy="110" r="3" fill="#22C55E" />
                <line x1="40" y1="40" x2="100" y2="30" stroke="#22C55E" strokeWidth="1" />
                <line x1="100" y1="30" x2="160" y2="50" stroke="#22C55E" strokeWidth="1" />
                <line x1="100" y1="30" x2="70" y2="100" stroke="#22C55E" strokeWidth="1" />
                <line x1="70" y1="100" x2="140" y2="110" stroke="#22C55E" strokeWidth="1" />
              </svg>

              {/* Icon Container */}
              <div className="w-[64px] h-[64px] rounded-[18px] bg-[#22C55E]/[0.08] text-[#22C55E] flex items-center justify-center font-bold shadow-[0_0_20px_rgba(34,197,94,0.15)] group-hover:bg-[#22C55E]/[0.15] transition-all duration-250">
                <Sparkles className="w-7 h-7 group-hover:scale-[1.05] transition-transform duration-250" />
              </div>

              {/* Title & Accent Line */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-[-0.03em]">
                  AI Screener Studio
                </h3>
                <div className="w-[50px] h-[2px] bg-[#22C55E] rounded-full" />
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-[1.8] font-normal max-w-xs">
                Filter global equities and options by financial ratios, ESG scores, earnings surprise history, and technical momentum.
              </p>

              {/* Bottom Link */}
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#22C55E] group-hover:text-emerald-300 relative">
                  <span className="relative">
                    Learn More
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#22C55E] group-hover:w-full transition-all duration-250 ease-out" />
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#22C55E] group-hover:translate-x-2 transition-transform duration-250 ease-out" />
                </span>
              </div>

            </div>

            {/* COLUMN 3: Economic & Earnings Calendar */}
            <div className="md:pl-8 lg:pl-10 p-4 rounded-2xl hover:bg-[#131F37] hover:-translate-y-1 transition-all duration-250 ease-out group cursor-pointer relative overflow-hidden space-y-5">
              
              {/* Background Illustration (Column 3: Subtle Vertical Bar Chart & Calendar Dots - 6% Opacity) */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" viewBox="0 0 200 150">
                <rect x="30" y="70" width="12" height="50" fill="#94A3B8" rx="2" />
                <rect x="60" y="40" width="12" height="80" fill="#22C55E" rx="2" />
                <rect x="90" y="60" width="12" height="60" fill="#94A3B8" rx="2" />
                <rect x="120" y="30" width="12" height="90" fill="#22C55E" rx="2" />
                <circle cx="160" cy="40" r="3" fill="#22C55E" />
                <circle cx="175" cy="40" r="3" fill="#22C55E" />
                <circle cx="160" cy="55" r="3" fill="#22C55E" />
                <circle cx="175" cy="55" r="3" fill="#22C55E" />
              </svg>

              {/* Icon Container */}
              <div className="w-[64px] h-[64px] rounded-[18px] bg-[#22C55E]/[0.08] text-[#22C55E] flex items-center justify-center font-bold shadow-[0_0_20px_rgba(34,197,94,0.15)] group-hover:bg-[#22C55E]/[0.15] transition-all duration-250">
                <Calendar className="w-7 h-7 group-hover:scale-[1.05] transition-transform duration-250" />
              </div>

              {/* Title & Accent Line */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-[-0.03em]">
                  Economic & Earnings Calendar
                </h3>
                <div className="w-[50px] h-[2px] bg-[#22C55E] rounded-full" />
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-[1.8] font-normal max-w-xs">
                Track central bank announcements, corporate earnings releases, and dividend ex-dates in real-time with push alerts.
              </p>

              {/* Bottom Link */}
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#22C55E] group-hover:text-emerald-300 relative">
                  <span className="relative">
                    Learn More
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#22C55E] group-hover:w-full transition-all duration-250 ease-out" />
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#22C55E] group-hover:translate-x-2 transition-transform duration-250 ease-out" />
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
