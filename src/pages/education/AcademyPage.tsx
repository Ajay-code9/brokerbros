import React, { useState } from 'react';
import {
  GraduationCap,
  Clock,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Mail,
  Send,
  BookOpen,
  Zap,
  Users,
  Server,
  Layers
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const AcademyPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const curriculumSneakPeek = [
    {
      module: 'Module 01',
      title: 'Turnkey Brokerage Setup & CRM Configuration',
      desc: 'Step-by-step masterclass on offshore company incorporation, corporate banking, CRM setup, and payment gateway integration.',
      topics: ['Offshore Jurisdictions & Licensing', 'Client Portal & B2B CRM Setup', 'Payment Gateway Integration']
    },
    {
      module: 'Module 02',
      title: 'Prop Firm Challenge Engine Architecture',
      desc: 'Architecting funded trader evaluation rules, daily drawdown limits, trailing equity caps, and automated breach engines.',
      topics: ['2-Step Evaluation Challenge Math', 'Automated Breach Detection', 'Funded Account Profit Payouts']
    },
    {
      module: 'Module 03',
      title: 'A-Book vs B-Book Risk & Dealing Desk',
      desc: 'Mastering brokerage execution models, prime broker STP routing, toxic flow detection, and internalized B-Book risk.',
      topics: ['STP vs B-Book Risk Strategies', 'Liquidity Provider Bridge Hooks', 'Real-Time Exposure & Margin Safeguards']
    },
    {
      module: 'Module 04',
      title: 'Multi-Tier IB Hierarchy & Rebate Engine',
      desc: 'Structuring multi-level referral rebate trees, commission tier overrides, white-label partner portals, and automated payouts.',
      topics: ['Infinite-Tier Rebate Hierarchies', 'Automated Daily Payout Ledger', 'Affiliate Tracking & UTM Attribution']
    }
  ];

  const roadmapSteps = [
    {
      step: '01',
      title: 'Curriculum Finalization',
      desc: 'Senior institutional architects curate 20+ video modules and brokerage operational blueprints.'
    },
    {
      step: '02',
      title: 'Early VIP Registration',
      desc: 'Broker founders and prop firm creators reserve early-access spots with a 50% discount.'
    },
    {
      step: '03',
      title: 'Private Beta Access',
      desc: 'Waitlist members receive early access to course materials and downloadable operational templates.'
    },
    {
      step: '04',
      title: 'Official Q4 Launch & Certification',
      desc: 'Full platform launch with 1-on-1 strategy sessions and accredited Executive Brokerage Certificates.'
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#090D14] text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-300 min-h-screen">
      
      {/* 1. HERO SECTION (100% ABOVE-THE-FOLD LANDING FIT & DUAL THEME COMPATIBLE) */}
      <section className="relative min-h-[calc(100vh-90px)] flex flex-col justify-center py-6 sm:py-10 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1420]">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-5 my-auto w-full">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-800/50">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>BROKERAGE LAUNCH ACADEMY • COMING SOON (Q4 2026)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Brokerage Launch Academy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400">
              Executive Masterclass & Certification Program
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            The definitive educational masterclass suite for brokerage founders, prop firm creators, and asset managers. Learn dealing desk risk management, licensing, and turnkey technology setup directly from industry architects.
          </p>

          {/* Early Access Waitlist Form */}
          <div className="pt-2 max-w-md mx-auto w-full">
            {!submitted ? (
              <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter business email for VIP access..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-[#141C2B] border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 font-medium shadow-xs"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Join Waitlist</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>You're on the VIP list! We will notify you first upon launch.</span>
              </div>
            )}
          </div>

          {/* Integrated Metric Card */}
          <div className="pt-3 max-w-xl mx-auto w-full">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
              <div className="text-left space-y-0.5">
                <div className="text-xs font-mono font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>EARLY ACCESS BENEFIT</span>
                </div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  50% Discount + 1-on-1 Strategy Architecture Session
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400 px-3.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                Q4 2026
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CHRONOLOGICAL 4-STEP PRE-LAUNCH ROADMAP */}
      <section className="py-14 sm:py-18 bg-white dark:bg-[#0E1420] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>ACADEMY LAUNCH ROADMAP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Pre-Launch Timeline & Milestones
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              How early VIP waitlist members gain exclusive masterclass advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {roadmapSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 space-y-3 relative">
                <div className="w-9 h-9 rounded-xl font-mono font-bold flex items-center justify-center text-sm border bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                  {step.step}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CURRICULUM SNEAK PEEK GRID */}
      <section className="py-16 sm:py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Masterclass Curriculum Sneak Peek
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Curated by senior dealing desk managers and financial software engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculumSneakPeek.map((course, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-[#141C2B] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800">
                      {course.module}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-amber-500" />
                      Unlocks Q4 2026
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{course.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {course.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  {course.topics.map((t, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CTA SECTION */}
      <CTASection onOpenAccount={onOpenAccount} />

    </div>
  );
};
