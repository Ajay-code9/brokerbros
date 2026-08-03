import React from 'react';
import { Star, ShieldCheck, Award, Globe, Users, TrendingUp, CheckCircle2, Building2 } from 'lucide-react';

export const InvestorTrustSection: React.FC = () => {
  const awards = [
    {
      title: "Best Desktop Workstation 2025",
      issuer: "StockBrokers.com Industry Review",
      rating: "5.0 / 5.0",
      desc: "Recognized as the premier multi-monitor desktop terminal for professional traders and active portfolio managers."
    },
    {
      title: "Top Rated Mobile Trading App",
      issuer: "App Store & Google Play Rating",
      rating: "4.9 ★ (120,000+ Reviews)",
      desc: "Voted #1 for real-time mobile options chaining, push notifications, and biometric security infrastructure."
    },
    {
      title: "Best Institutional Execution",
      issuer: "Global Finance Technology Awards",
      rating: "#1 Execution Quality",
      desc: "Awarded for price improvement on 98.4% of eligible orders via our proprietary SmartRouting™ engine."
    }
  ];

  const testimonials = [
    {
      quote: "The low latency and multi-monitor custom workspace layout on BrokerBros Desktop Pro transformed our active intraday strategies. Execution speed is unmatched.",
      author: "David Vance",
      role: "Managing Director, Apex Alpha Fund",
      stats: "$18M+ Portfolio Managed",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
    },
    {
      quote: "Being able to trade full multi-leg options chains with live Greeks and risk analysis on my iPad while traveling has given me true institutional flexibility.",
      author: "Elena Rostova",
      role: "Quantitative Options Specialist",
      stats: "Active Derivatives Trader",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const globalStats = [
    { value: "$42.8B+", label: "Daily Global Volume", subtext: "Processed across 150+ market centers" },
    { value: "99.999%", label: "Core Engine Uptime", subtext: "Redundant cloud & hardware failover" },
    { value: "<12ms", label: "Average Order Latency", subtext: "Direct exchange fiber routing" },
    { value: "850,000+", label: "Active Platform Traders", subtext: "In over 120 countries worldwide" }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>INSTITUTIONAL TRUST & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight">
            Trusted By Serious Investors & Global Institutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
            Engineered to meet the stringent demands of quantitative hedge funds, active retail traders, and family offices worldwide.
          </p>
        </div>

        {/* Industry Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 rounded-2xl p-8 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 space-y-5 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-100/80 text-emerald-900 border border-emerald-200">
                    {award.rating}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-serif-heading pt-2 group-hover:text-emerald-700 transition-colors">
                  {award.title}
                </h3>
                <div className="text-xs font-mono font-bold text-slate-500">{award.issuer}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{award.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Independent Audit</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Statistics Bar */}
        <div className="bg-slate-900 rounded-2xl p-8 lg:p-10 text-white border border-slate-800 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {globalStats.map((stat, idx) => (
              <div key={idx} className={`space-y-2 text-center lg:text-left ${idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}>
                <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-100">{stat.label}</div>
                <p className="text-xs text-slate-400 font-sans">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xs space-y-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-slate-700 text-base sm:text-lg leading-relaxed font-serif-heading italic">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/30"
                />
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.role}</div>
                  <div className="text-[11px] text-emerald-700 font-mono font-semibold mt-0.5">{t.stats}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
