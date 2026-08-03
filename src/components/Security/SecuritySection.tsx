import React from 'react';
import { ShieldCheck, Lock, Landmark, CheckCircle, FileText, ExternalLink } from 'lucide-react';

interface SecuritySectionProps {
  onOpenAccount: () => void;
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({ onOpenAccount }) => {
  return (
    <section className="py-14 sm:py-16 bg-white border-b border-[#E5E7EB] font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Institutional Regulatory & Security Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E5E7EB] pb-10">
          
          {/* LEFT SIDE: Badge, Large Heading, 2-line supporting paragraph, horizontal trust chips */}
          <div className="lg:col-span-7 space-y-4 text-left">
            
            {/* 1. Small Premium Badge */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200/80">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>REGULATORY & ASSET PROTECTION</span>
              </div>
            </div>

            {/* 2. Large Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] font-sans leading-[1.12]">
              Tier-1 Security &<br className="hidden sm:inline" /> Regulatory Oversight
            </h2>

            {/* 3. Supporting Paragraph (2 lines) */}
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              BrokerBros operates under globally recognized financial regulations with strict compliance standards, segregated client funds, and independent oversight designed to protect investors.
            </p>

            {/* 4. Horizontal Row of Trust Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7]/60 text-emerald-800 text-xs font-semibold border border-emerald-200/60">
                <CheckCircle className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>SEC Regulated</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7]/60 text-emerald-800 text-xs font-semibold border border-emerald-200/60">
                <CheckCircle className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>FINRA Member</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7]/60 text-emerald-800 text-xs font-semibold border border-emerald-200/60">
                <CheckCircle className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>SIPC Protected</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7]/60 text-emerald-800 text-xs font-semibold border border-emerald-200/60">
                <CheckCircle className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>Independent Audits</span>
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: Information Block with Dotted World Map Watermark + Soft Green Glow */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-50/80 to-white rounded-[20px] border border-[#E5E7EB] p-6 sm:p-7 relative overflow-hidden shadow-xs">
            
            {/* Soft Radial Green Glow behind the map */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/6 rounded-full blur-2xl pointer-events-none" />

            {/* Dotted World Map Background Illustration (5-8% opacity) */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" viewBox="0 0 400 200" preserveAspectRatio="none">
              <pattern id="sec-dotted-map" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="1.2" fill="#0F172A" />
              </pattern>
              <rect width="400" height="200" fill="url(#sec-dotted-map)" />
            </svg>

            {/* Information Block Content */}
            <div className="relative z-10 space-y-4 text-left">
              <div>
                <div className="text-[11px] font-mono font-bold text-[#64748B] tracking-wider uppercase">
                  GLOBAL REGULATORY COVERAGE
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#0F172A] font-mono tracking-tight">35+</span>
                  <span className="text-sm font-semibold text-[#64748B]">Countries & Jurisdictions</span>
                </div>
              </div>

              <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed font-normal border-t border-[#E5E7EB] pt-3.5">
                BrokerBros is regulated across major financial jurisdictions to maintain transparency, segregated client assets, and institutional-grade investor protection.
              </p>
            </div>

          </div>

        </div>

        {/* Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-[#E5E7EB] space-y-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_45px_rgba(34,197,94,0.10)] hover:border-[#22C55E] hover:bg-[#FCFFFD] -translate-y-0 hover:-translate-y-1 transition-all duration-250 ease-out cursor-pointer group relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold transition-all duration-250 group-hover:bg-[#DCFCE7] group-hover:text-[#22C55E] group-hover:rotate-2">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-950 font-sans transition-colors duration-250">
              SIPC Insurance & Lloyd's Excess
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Securities accounts are protected by the Securities Investor Protection Corporation (SIPC) for up to $500,000 (including $250,000 cash). Our excess SIPC policy with Lloyd’s of London provides additional coverage up to $30.0 million per client.
            </p>
            <div className="relative text-xs font-mono font-bold text-[#22C55E] pt-3.5 border-t border-[#E5E7EB] group-hover:border-emerald-200/80 transition-colors duration-250 overflow-hidden">
              <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-[#22C55E] transition-all duration-350 ease-out" />
              Total SIPC + Excess Protection: $30.5M
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-[#E5E7EB] space-y-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_45px_rgba(34,197,94,0.10)] hover:border-[#22C55E] hover:bg-[#FCFFFD] -translate-y-0 hover:-translate-y-1 transition-all duration-250 ease-out cursor-pointer group relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold transition-all duration-250 group-hover:bg-[#DCFCE7] group-hover:text-[#22C55E] group-hover:rotate-2">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-950 font-sans transition-colors duration-250">
              FDIC Insured Sweep Program
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Eligible uninvested cash balances can be automatically swept into partner FDIC-insured program banks, offering up to $2,500,000 in combined FDIC insurance protection while earning top-tier 4.85% APY cash yield.
            </p>
            <div className="relative text-xs font-mono font-bold text-[#22C55E] pt-3.5 border-t border-[#E5E7EB] group-hover:border-emerald-200/80 transition-colors duration-250 overflow-hidden">
              <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-[#22C55E] transition-all duration-350 ease-out" />
              FDIC Cash Sweep Limit: $2,500,000
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-[#E5E7EB] space-y-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_45px_rgba(34,197,94,0.10)] hover:border-[#22C55E] hover:bg-[#FCFFFD] -translate-y-0 hover:-translate-y-1 transition-all duration-250 ease-out cursor-pointer group relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold transition-all duration-250 group-hover:bg-[#DCFCE7] group-hover:text-[#22C55E] group-hover:rotate-2">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-950 font-sans transition-colors duration-250">
              Strict Asset Segregation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Client fully-paid securities are strictly segregated in dedicated special reserve accounts at Tier-1 custodian banks and clearing houses, completely isolated from firm proprietary trading activities.
            </p>
            <div className="relative text-xs font-mono font-bold text-[#22C55E] pt-3.5 border-t border-[#E5E7EB] group-hover:border-emerald-200/80 transition-colors duration-250 overflow-hidden">
              <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-[#22C55E] transition-all duration-350 ease-out" />
              Rule 15c3-3 Special Reserve Compliance
            </div>
          </div>

        </div>

        {/* Regulatory Badges (Trust Bar) */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E5E7EB] flex flex-wrap items-center justify-around gap-4 text-slate-600 text-xs font-bold font-mono shadow-[0_4px_16px_rgba(15,23,42,0.03)]">
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-transparent hover:border-emerald-300 hover:bg-[#FAFFFB] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle className="w-4 h-4 text-[#22C55E] group-hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.4)] transition-all" /> SEC Regulated (USA)
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-transparent hover:border-emerald-300 hover:bg-[#FAFFFB] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle className="w-4 h-4 text-[#22C55E] group-hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.4)] transition-all" /> FINRA Member
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-transparent hover:border-emerald-300 hover:bg-[#FAFFFB] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle className="w-4 h-4 text-[#22C55E] group-hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.4)] transition-all" /> FCA Authorized (UK)
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-transparent hover:border-emerald-300 hover:bg-[#FAFFFB] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle className="w-4 h-4 text-[#22C55E] group-hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.4)] transition-all" /> MAS Licensed (Singapore)
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-transparent hover:border-emerald-300 hover:bg-[#FAFFFB] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            <CheckCircle className="w-4 h-4 text-[#22C55E] group-hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.4)] transition-all" /> SEBI Registered
          </span>
        </div>

      </div>
    </section>
  );
};
