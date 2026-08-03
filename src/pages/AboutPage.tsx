import React from 'react';
import { motion } from 'motion/react';
import { Building2, ShieldCheck, Globe2, Award, Users, TrendingUp, CheckCircle, ArrowRight, FileText } from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const AboutPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const leadership = [
    {
      name: "Marcus Sterling",
      role: "Chief Executive Officer",
      bio: "Former Head of Institutional Equity Trading at Goldman Sachs with 22 years of market microstructure experience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Elena Rostova",
      role: "Chief Technology Officer",
      bio: "Ex-Citadel Principal Engineer. Architected ultra-low latency FIX engines and distributed dark pool routing networks.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "David Vance, CFA",
      role: "Chief Risk & Compliance Officer",
      bio: "Former Director of Regulatory Supervision at FINRA with deep expertise in global capital adequacy requirements.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Aisha Chen",
      role: "Head of Global Prime Services",
      bio: "Pioneered multi-asset clearing and cross-margin collateral optimization at Morgan Stanley Prime Brokerage.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const milestones = [
    { year: "2011", title: "Founded in New York", desc: "Established with a mandate to deliver institutional dark-pool routing directly to retail investors without Payment for Order Flow." },
    { year: "2015", title: "European & Asian Expansion", desc: "Secured FCA (UK) and MAS (Singapore) licenses, opening direct market connectivity to 80+ global exchanges." },
    { year: "2019", title: "BrokerBros Pro Launch", desc: "Introduced native C++ and Python API trading engines processing over 4.2 million orders daily." },
    { year: "2023", title: "$28.4B Equity Capital Milestone", desc: "Earned S&P 'A-' credit rating and expanded uninvested cash APY program up to 4.85%." },
    { year: "2026", title: "3.8 Million Active Clients", desc: "Operating across 35 countries in 26 settled currencies with over $140B in client assets under custody." }
  ];

  return (
    <div className="bg-[#070a11] text-white font-sans selection:bg-emerald-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(7,10,17,1))] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold rounded-md border border-emerald-500/20">
            <Building2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>ABOUT BROKERBROS INSTITUTIONAL</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl text-white font-sans">
            Built on Capital Strength, Transparent Pricing & Direct Execution
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl font-sans leading-relaxed">
            BrokerBros is a global financial institution servicing over 3.8 million individual and institutional accounts worldwide. We engineer high-precision trading technology without payment for order flow conflicts.
          </p>

          <div className="pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl font-mono">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">$28.4B</div>
              <div className="text-[11px] text-slate-400 font-sans mt-0.5">Consolidated Equity Capital</div>
            </div>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white">3.8M+</div>
              <div className="text-[11px] text-slate-400 font-sans mt-0.5">Global Accounts</div>
            </div>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">150+</div>
              <div className="text-[11px] text-slate-400 font-sans mt-0.5">Market Centers</div>
            </div>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white">S&P A-</div>
              <div className="text-[11px] text-slate-400 font-sans mt-0.5">Credit Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Core Principles */}
      <section className="py-20 bg-slate-900/50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              CORE GOVERNANCE PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
              Our Core Institutional Principles
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              We believe that every trader—from an individual investor to a multi-billion dollar hedge fund—deserves direct market access, fair execution prices, and complete capital security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 space-y-4 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-sans">Zero Payment for Order Flow</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                We reject 100% of PFOF rebates. Your orders are routed directly to lit exchanges and dark pools for authentic price improvement averaging $0.024/share.
              </p>
            </div>

            <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 space-y-4 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center font-bold">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-sans">Single Account Global Access</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                Trade 150+ market centers in 35 countries across 26 settled currencies without maintaining fragmented brokerage accounts.
              </p>
            </div>

            <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 space-y-4 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-sans">Conservative Leverage Shield</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                Zero long-term debt leverage and $16.2 Billion in excess net regulatory capital ensure stability across all market volatility regimes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-[#070a11] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              EXECUTIVE GOVERNANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
              Led by Wall Street Trading & Quantitative Veterans
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member, idx) => (
              <div key={idx} className="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover object-center grayscale hover:grayscale-0 transition-all duration-300" />
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-white font-sans">{member.name}</h3>
                  <div className="text-xs font-mono text-emerald-400 font-bold">{member.role}</div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans pt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              OUR HISTORICAL TIMELINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
              15 Years of Institutional Innovation
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {milestones.map((m, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 font-sans">
                <span className="px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono font-bold text-sm border border-emerald-500/20 shrink-0">
                  {m.year}
                </span>
                <div>
                  <h4 className="text-base font-bold text-white">{m.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5 leading-relaxed">{m.desc}</p>
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
