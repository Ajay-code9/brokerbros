import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  Clock,
  Award,
  Users,
  Sparkles,
  ChevronRight,
  Check
} from 'lucide-react';


interface PageProps {
  onOpenAccount: () => void;
}

interface CourseCard {
  id: string;
  title: string;
  level: string;
  lessons: string;
  duration: string;
  description: string;
  topics: string[];
  badgeColor: string;
}

export const AcademyPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedCourse, setSelectedCourse] = useState<CourseCard | null>(null);

  const courses: CourseCard[] = [
    {
      id: '1',
      title: 'Turnkey Brokerage Launch Masterclass',
      level: 'Executive',
      lessons: '5 Modules',
      duration: '2.0 Hours',
      description: 'Step-by-step guide on launching a white-label Forex broker, connecting CRM portals, and setting up MT5 bridges.',
      topics: [
        'Offshore Licensing & Banking Setup',
        'White-Label Broker CRM & Portal Config',
        'MetaTrader 5 & WebTrader Server Hooks',
        'KYC Workflows & Payment Gateway Integration'
      ],
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200'
    },
    {
      id: '2',
      title: 'Prop Firm Architecture & Evaluation Rules',
      level: 'Advanced',
      lessons: '6 Modules',
      duration: '2.5 Hours',
      description: 'Architecting funded trader evaluation challenges, automated breach engines, drawdown math, and profit payout rules.',
      topics: [
        'Step 1 & Step 2 Challenge Parameter Design',
        'Real-Time Daily Drawdown & Equity Breach Detection',
        'Automated Risk Rules & Trailing Drawdowns',
        'Profit Split Payout & Wallet Management'
      ],
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    {
      id: '3',
      title: 'A-Book vs B-Book Dealing Desk Management',
      level: 'Institutional',
      lessons: '5 Modules',
      duration: '2.0 Hours',
      description: 'Mastering brokerage dealing desk execution models, STP routing to LPs, internalization profit rules, and auto-hedging.',
      topics: [
        'A-Book STP Routing & Prime Broker Accounts',
        'B-Book Internalization & Toxic Flow Detection',
        'Hybrid C-Book Routing Triggers',
        'Real-Time Net Exposure & Margin Call Limits'
      ],
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200'
    },
    {
      id: '4',
      title: 'Multi-Tier IB & Affiliate Network Architecture',
      level: 'Commercial',
      lessons: '6 Modules',
      duration: '2.0 Hours',
      description: 'Structuring multi-level referral rebate trees, commission tier overrides, marketing portals, and automated payouts.',
      topics: [
        'Multi-Tier Rebate Hierarchy Calculation',
        'Volume, Spread & Commission Override Rules',
        'IB Portal Dashboard & Custom Affiliate Links',
        'Automated Monthly & Instant Rebate Distribution'
      ],
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200'
    }
  ];

  const filteredCourses = activeTab === 'All'
    ? courses
    : courses.filter(c => c.level === activeTab);

  return (
    <div className="bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-300 min-h-screen font-sans transition-colors duration-300">
      
      {/* 1. GROUNDED HERO SECTION */}
      <section className="relative bg-white dark:bg-[#0a0a0a] py-16 sm:py-20 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Soft Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 text-xs font-semibold border border-emerald-200 dark:border-emerald-800/50">
            <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>BROKERBROS TRADING ACADEMY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Learn Trading Step-by-Step with Clear & Easy Courses
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Free, easy-to-understand video guides and lessons designed for beginners and growing traders. No complicated jargon.
          </p>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>100% Free Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Short Video Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Self-Paced Learning</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SIMPLE COURSE CATALOG */}
      <section className="py-16 bg-slate-50 dark:bg-[#121520] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Section Header & Tab Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Explore Courses
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                Choose a course level that fits your trading goals.
              </p>
            </div>

            {/* Level Tabs */}
            <div className="flex flex-wrap items-center gap-1 bg-white dark:bg-[#0a0a0a] p-1 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs">
              {['All', 'Beginner', 'Intermediate', 'Advanced', 'Quantitative'].map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveTab(level)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    activeTab === level
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Course Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-[#0a0a0a] p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Badge & Duration */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className={`px-2.5 py-1 rounded-md font-bold border ${course.badgeColor} dark:bg-slate-900/80 dark:border-slate-700 dark:text-slate-200`}>
                      {course.level}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">
                      {course.lessons} • {course.duration}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {course.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Topic List */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-xs font-bold text-slate-700 dark:text-slate-300">What you will learn:</div>
                    {course.topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="w-full py-2.5 bg-slate-900 dark:bg-slate-800 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>Start Course Free</span>
                </button>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. THREE SIMPLE BENEFITS */}
      <section className="py-16 bg-white dark:bg-[#0a0a0a] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Why Learn With BrokerBros?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Everything you need to build confidence in financial markets.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#121520] border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800/40">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Clear & Short Lessons</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Short 5-to-10 minute videos that explain complex market concepts in plain language.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#121520] border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center border border-blue-200 dark:border-blue-800/40">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Live Q&A Webinars</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Ask questions directly to market instructors during live weekly trading sessions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#121520] border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-400 flex items-center justify-center border border-purple-200 dark:border-purple-800/40">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Free Course Certificate</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Earn a certificate when you finish any learning track to showcase your knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COURSE PREVIEW MODAL */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-xl bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            
            <div className="flex items-start justify-between">
              <div>
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border ${selectedCourse.badgeColor} dark:bg-slate-900/80 dark:border-slate-700 dark:text-slate-200`}>
                  {selectedCourse.level}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                  {selectedCourse.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              {selectedCourse.description}
            </p>

            <div className="space-y-2 p-4 bg-slate-50 dark:bg-[#121520] rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">Course Syllabus ({selectedCourse.lessons}):</div>
              {selectedCourse.topics.map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 font-mono text-[10px] flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedCourse(null);
                  onOpenAccount();
                }}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Start Learning Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
