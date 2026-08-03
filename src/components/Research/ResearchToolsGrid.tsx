import React, { useState } from 'react';
import { 
  Search, 
  Zap, 
  BarChart3, 
  Eye, 
  Grid, 
  Calendar, 
  Award, 
  ArrowRight, 
  Wrench,
  CheckCircle2
} from 'lucide-react';
import { RESEARCH_TOOLS_DATA } from '../../data/researchData';

interface ResearchToolsGridProps {
  onOpenAccount: () => void;
}

export const ResearchToolsGrid: React.FC<ResearchToolsGridProps> = ({ onOpenAccount }) => {
  const [activeToolModal, setActiveToolModal] = useState<typeof RESEARCH_TOOLS_DATA[0] | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return Search;
      case 'Zap': return Zap;
      case 'BarChart3': return BarChart3;
      case 'Eye': return Eye;
      case 'Grid': return Grid;
      case 'Calendar': return Calendar;
      case 'Award': return Award;
      default: return Wrench;
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-[#06141D] border-b border-emerald-900/40 text-white font-sans relative overflow-hidden">
      
      {/* Mesh Glow Accent */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
              <Wrench className="w-3.5 h-3.5 text-cyan-400" />
              <span>TERMINAL UTILITIES & ENGINES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight">
              Institutional Research Tools
            </h2>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl font-sans leading-relaxed">
            High-performance screening engines, real-time heatmaps, and portfolio analytics tools integrated directly into your workspace.
          </p>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_TOOLS_DATA.map((tool) => {
            const IconComp = getIcon(tool.iconName);

            return (
              <div
                key={tool.id}
                onClick={() => setActiveToolModal(tool)}
                className="bg-[#0D2231]/90 backdrop-blur-md rounded-2xl border border-emerald-500/30 p-6 space-y-4 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                      <IconComp className="w-5 h-5 text-cyan-400 group-hover:text-slate-950" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-700/60 px-2 py-0.5 rounded">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-sans text-white group-hover:text-cyan-300 transition-colors">
                    {tool.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-cyan-400">
                  <span>{tool.actionText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Tool Preview Modal */}
      {activeToolModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 relative font-sans">
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {activeToolModal.badge} Utility
                </span>
                <h3 className="text-2xl font-bold font-serif-heading text-slate-900 mt-2">
                  {activeToolModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveToolModal(null)}
                className="text-slate-400 hover:text-slate-900 text-lg font-bold p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed font-sans">
              {activeToolModal.description}
            </p>

            <div className="bg-emerald-50/80 border border-emerald-200 p-4 rounded-xl space-y-2 text-xs text-emerald-950">
              <span className="font-bold font-mono text-emerald-800 uppercase block">Pro Capabilities:</span>
              <ul className="space-y-1">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Export custom CSV reports</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Real-time WebSocket streaming updates</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Zero subscription fees for account holders</li>
              </ul>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveToolModal(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveToolModal(null);
                  onOpenAccount();
                }}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5"
              >
                <span>Launch {activeToolModal.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
