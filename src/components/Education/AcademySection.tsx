import React from 'react';
import { BookOpen, Video, FileText, ArrowRight, GraduationCap, Play, Star, Clock, Code, TrendingUp, Layers } from 'lucide-react';

interface AcademySectionProps {
  onOpenAccount: () => void;
}

export const AcademySection: React.FC<AcademySectionProps> = ({ onOpenAccount }) => {
  const courses = [
    {
      title: 'Options Strategy Masterclass & Volatility Surfaces',
      level: 'Intermediate',
      levelColor: 'bg-amber-50 text-amber-800 border-amber-200',
      lessons: '12 Video Lessons',
      duration: '2.5 Hours',
      rating: '4.9',
      students: '4,280 traders',
      desc: 'Master multi-leg spread execution, implied volatility skew, delta-neutral hedging, and early assignment risk mitigation.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600',
      icon: TrendingUp
    },
    {
      title: 'Algorithmic Trading with Python & FIX Protocol API',
      level: 'Advanced',
      levelColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      lessons: '18 Modules',
      duration: '4.0 Hours',
      rating: '5.0',
      students: '2,950 traders',
      desc: 'Build, backtest, and deploy high-frequency quantitative algorithms using WebSockets API SDKs and direct market DMA links.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
      icon: Code
    },
    {
      title: 'Fixed Income & Bond Yield Curve Fundamentals',
      level: 'Beginner',
      levelColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      lessons: '8 Lessons',
      duration: '1.5 Hours',
      rating: '4.8',
      students: '6,100 traders',
      desc: 'Understand US Treasury yield curves, corporate credit spreads, duration risk, and interest rate sensitivity models.',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600',
      icon: Layers
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-mono font-bold border border-emerald-200">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
              <span>TRADER ACADEMY & EDUCATION DESK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-sans">
              Elevate Your Trading Mastery
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md font-sans">
            Free structured courses, live daily webinars, interactive podcasts, and institutional market research guides.
          </p>
        </div>

        {/* 3 Interactive Visual Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => {
            const IconComp = course.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group"
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
                    <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{course.rating}</span>
                      </div>
                      <span className="text-slate-400">• {course.students}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-emerald-700 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {course.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Footer Action */}
                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-600">{course.lessons}</span>
                  <button
                    onClick={onOpenAccount}
                    className="text-xs font-extrabold text-emerald-800 hover:text-emerald-700 flex items-center gap-1.5 cursor-pointer group/btn"
                  >
                    <span>Start Masterclass</span>
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
            <span>Explore All 45+ Institutional Academy Courses & Webinars</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
          </button>
        </div>

      </div>
    </section>
  );
};
