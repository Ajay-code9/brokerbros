import React from 'react';
import { BookOpen, Video, FileText, ArrowRight, GraduationCap, Play, Star, Clock, Code, TrendingUp, Layers } from 'lucide-react';

interface AcademySectionProps {
  onOpenAccount: () => void;
}

export const AcademySection: React.FC<AcademySectionProps> = ({ onOpenAccount }) => {
  const courses = [
    {
      title: 'White-Label Brokerage Operations: CRM, KYC & Backoffice Setup',
      level: 'Admin Guide',
      levelColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      lessons: '10 Video Modules',
      duration: '35 mins',
      desc: 'Complete walkthrough of your brokerage backoffice: managing client registration queues, approving KYC uploads, managing IB tree rebates, and tracking deposits.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600',
      icon: TrendingUp
    },
    {
      title: 'Prop Firm Engine Setup: Challenge Rules & Automated Risk Breach Locks',
      level: 'Risk Guide',
      levelColor: 'bg-slate-100 text-slate-800 border-slate-200',
      lessons: '14 Modules',
      duration: '45 mins',
      desc: 'Configure multi-phase prop evaluation rules, trailing drawdowns, automated breach lockout, and funded account payout automation using the BrokerBros Prop Engine.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
      icon: Code
    },
    {
      title: 'FIX 4.4 LP Bridge & MetaTrader 5 API Integration Guide',
      level: 'Tech Guide',
      levelColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      lessons: '9 Modules',
      duration: '30 mins',
      desc: 'Connect your brokerage to Tier-1 liquidity providers via FIX 4.4, configure A-Book/B-Book routing rules, and link MT5 server APIs for live trade execution.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600',
      icon: Layers
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-mono font-bold border border-emerald-200">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
              <span>BROKER OPERATOR ACADEMY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-sans">
              Master Your Brokerage Operations
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md font-sans">
            Operator-focused training guides, integration playbooks, and step-by-step video walkthroughs for every BrokerBros infrastructure module.
          </p>
        </div>

        {/* 3 Interactive Visual Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => {
            const IconComp = course.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail Image with Glass Overlay Play Icon */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                    
                    {/* Level Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded-md border shadow-2xs ${course.levelColor}`}>
                        {course.level}
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-white px-2.5 py-1 rounded-md text-[11px] font-mono font-bold border border-slate-700/60 flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      <span>{course.duration}</span>
                    </div>

                    {/* Center Hover Play Circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/90 text-slate-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-slate-950 translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-base font-bold text-slate-900 font-sans group-hover:text-emerald-700 transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {course.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Footer Action */}
                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-500">{course.lessons}</span>
                  <button
                    onClick={onOpenAccount}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 cursor-pointer group/btn"
                  >
                    <span>Watch Operator Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Explorer Link Bar */}
        <div className="pt-2 text-center">
          <button
            onClick={onOpenAccount}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 text-xs font-extrabold rounded-xl border border-slate-300 shadow-xs transition-all cursor-pointer group"
          >
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Explore All Operator Integration Guides & Playbooks</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
          </button>
        </div>

      </div>
    </section>
  );
};
