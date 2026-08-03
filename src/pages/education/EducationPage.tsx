import React from 'react';
import { BookOpen, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';
import { useRouter } from '../../router';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const EducationPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const { navigate } = useRouter();

  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            INVESTOR EDUCATION & RESEARCH
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            Empower Your Trading with Institutional Insights
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Access free educational courses, market microstructure analysis, platform tutorials, and risk management guides.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              onClick={() => navigate('/education/academy')}
              className="bg-white p-8 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer space-y-4 group"
            >
              <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-lg flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold font-serif-heading text-slate-900 group-hover:text-emerald-700 transition-colors">
                Trader Academy Curriculum
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Step-by-step tracks covering Stocks 101, Advanced Options Mechanics, Futures Spread Trading, and Algorithmic Python Backtesting.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1">
                <span>View All Courses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div
              onClick={() => navigate('/education/learning-center')}
              className="bg-white p-8 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer space-y-4 group"
            >
              <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-lg flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold font-serif-heading text-slate-900 group-hover:text-emerald-700 transition-colors">
                Learning Center & Glossary
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Comprehensive dictionary of 1,500+ financial terms, platform video walkthroughs, and weekly live Q&A webinars.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1">
                <span>Open Learning Center</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
