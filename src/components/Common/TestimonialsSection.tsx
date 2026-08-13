import React from 'react';
import { Star, Quote, CheckCircle2, Building2, ShieldCheck } from 'lucide-react';

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company?: string;
  rating?: number;
  location?: string;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: TestimonialItem[];
  variant?: 'dark' | 'light';
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = "Trusted by Top Brokers & Financial Institutions",
  subtitle = "See how leading brokerages, prop firms, and fund managers scale operations with BrokerBros infrastructure.",
  testimonials = [
    {
      quote: "BrokerBros CRM completely transformed our operations. We reduced KYC processing time from 24 hours to 3 minutes, and automated deposit flows significantly boosted our conversion rates.",
      name: "Marcus Reynolds",
      role: "CEO & Founder",
      company: "Vertex Markets Ltd",
      rating: 5,
      location: "London, UK"
    },
    {
      quote: "The multi-tier IB partner system is the best we have seen. Calculating complex rebates across 5 levels used to take our accounting team days. Now it is entirely automated in real-time.",
      name: "Elena Rostova",
      role: "Head of Partnerships",
      company: "Nexus Forex Group",
      rating: 5,
      location: "Cyprus"
    },
    {
      quote: "Migrating 50,000 active trading accounts from our legacy CRM was completely seamless. The MT5 Manager API integration works flawlessly with sub-millisecond execution stability.",
      name: "David Chen",
      role: "Chief Technology Officer",
      company: "Horizon Capital Brokerage",
      rating: 5,
      location: "Singapore"
    }
  ],
  variant = 'dark'
}) => {
  const isDark = variant === 'dark';

  return (
    <section className={`py-20 lg:py-24 border-b relative overflow-hidden font-sans ${
      isDark
        ? 'bg-[#0e1017] text-white border-slate-800/80'
        : 'bg-slate-50 text-slate-900 border-slate-200'
    }`}>
      {/* Background Radial Glow */}
      {isDark ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
            isDark
              ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
              : 'bg-emerald-50 border border-emerald-200 text-emerald-800'
          }`}>
            <ShieldCheck className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
            CLIENT SUCCESS STORIES
          </div>

          <h2 className={`text-3xl sm:text-4xl font-black tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {title}
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {subtitle}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl border flex flex-col justify-between relative group transition-all duration-300 shadow-xl ${
                isDark
                  ? 'bg-[#121520] border-slate-800/80 hover:border-emerald-500/40'
                  : 'bg-white border-slate-200 hover:border-emerald-500/40 hover:shadow-md'
              }`}
            >
              {/* Top Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                {/* Real Glowing Star Rating Icons */}
                <div className="flex items-center gap-1">
                  {[...Array(test.rating || 5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-emerald-400 fill-emerald-400 shrink-0"
                    />
                  ))}
                </div>

                <Quote className={`w-8 h-8 transition-colors ${
                  isDark
                    ? 'text-slate-800 group-hover:text-emerald-500/30'
                    : 'text-slate-200 group-hover:text-emerald-600/30'
                }`} />
              </div>

              {/* Quote Text */}
              <p className={`text-sm leading-relaxed mb-8 flex-1 relative z-10 ${
                isDark ? 'text-slate-300 font-normal' : 'text-slate-700 font-medium'
              }`}>
                "{test.quote}"
              </p>

              {/* Author Footer Info */}
              <div className={`pt-4 border-t flex items-center justify-between ${
                isDark ? 'border-slate-800/70' : 'border-slate-100'
              }`}>
                <div className="flex items-center gap-3">
                  {/* Executive Avatar Initial Circle */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-sm border shrink-0 ${
                    isDark
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  }`}>
                    {test.name.charAt(0)}
                  </div>

                  <div>
                    <div className={`font-bold text-sm leading-tight flex items-center gap-1.5 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      <span>{test.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </div>
                    <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {test.role} • <span className="font-semibold text-emerald-500">{test.company}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
