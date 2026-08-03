import React from 'react';
import { Tag, Sparkles } from 'lucide-react';
import { POPULAR_TOPICS } from '../../data/researchData';

interface PopularTopicsFilterProps {
  activeTopic: string;
  onSelectTopic: (topic: string) => void;
}

export const PopularTopicsFilter: React.FC<PopularTopicsFilterProps> = ({
  activeTopic,
  onSelectTopic
}) => {
  return (
    <section className="py-8 bg-slate-900 border-b border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* Header Label */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
          <Tag className="w-3.5 h-3.5 text-emerald-400" />
          <span>FILTER RESEARCH BY TOPIC</span>
        </div>

        {/* Chips Row */}
        <div className="flex flex-wrap items-center gap-2.5">
          {POPULAR_TOPICS.map((topic) => {
            const isActive = activeTopic === topic;

            return (
              <button
                key={topic}
                onClick={() => {
                  onSelectTopic(topic);
                  const section = document.getElementById('featured-research');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 font-black scale-102'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {isActive && <Sparkles className="w-3 h-3 text-slate-950 animate-pulse" />}
                <span>{topic}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
