import React, { useState } from 'react';
import { GraduationCap, BookOpen, PieChart, HelpCircle, Brain, ShieldCheck, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { EDUCATIONAL_GUIDES } from '../../data/researchData';

interface EducationalGuidesProps {
  onOpenAccount: () => void;
}

export const EducationalGuides: React.FC<EducationalGuidesProps> = ({ onOpenAccount }) => {
  const [activeGuideModal, setActiveGuideModal] = useState<typeof EDUCATIONAL_GUIDES[0] | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return BookOpen;
      case 'PieChart': return PieChart;
      case 'HelpCircle': return HelpCircle;
      case 'Brain': return Brain;
      case 'ShieldCheck': return ShieldCheck;
      default: return BookOpen;
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-[#091824] border-b border-emerald-900/40 text-white font-sans relative overflow-hidden">
      
      {/* Mesh Glow Accent */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              <span>FOUNDATIONAL & ADVANCED ACADEMY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight">
              Learn Before You Invest
            </h2>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl font-sans leading-relaxed">
            Approachable, bite-sized educational breakdowns designed to build confidence for first-time investors and sharpen advanced strategy.
          </p>
        </div>

        {/* Educational Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EDUCATIONAL_GUIDES.map((guide) => {
            const IconComp = getIcon(guide.iconName);

            return (
              <div
                key={guide.id}
                onClick={() => setActiveGuideModal(guide)}
                className="bg-[#0D2231]/90 backdrop-blur-md rounded-2xl border border-emerald-500/30 p-6 space-y-4 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-700/60">
                      {guide.level}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-bold text-cyan-300">
                    {guide.category}
                  </div>

                  <h3 className="text-lg font-bold font-sans text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {guide.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {guide.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    {guide.time}
                  </span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Guide Modal Reader */}
      {activeGuideModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 relative font-sans">
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {activeGuideModal.category}
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-slate-900 mt-2">
                  {activeGuideModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveGuideModal(null)}
                className="text-slate-400 hover:text-slate-900 text-lg font-bold p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed font-sans">
              {activeGuideModal.summary}
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2 text-xs text-slate-600">
              <h5 className="font-bold text-slate-900 font-mono uppercase">Key Learning Outcomes:</h5>
              <ul className="space-y-1 list-disc list-inside">
                <li>Understand core financial ratios without complex mathematics.</li>
                <li>Identify key metrics on financial statements.</li>
                <li>Apply risk mitigation rules directly to your BrokerBros portfolio.</li>
              </ul>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveGuideModal(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveGuideModal(null);
                  onOpenAccount();
                }}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5"
              >
                <span>Practice on Demo Account</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
