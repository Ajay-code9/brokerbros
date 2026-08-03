import React from 'react';
import { 
  Globe, 
  TrendingUp, 
  Layers, 
  BarChart2, 
  Compass, 
  Building, 
  Cpu, 
  Sparkles, 
  PieChart, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { RESEARCH_CATEGORIES } from '../../data/researchData';
import { UniversalCard } from '../Common/UniversalCard';

interface ResearchCategoriesProps {
  selectedCategory: string | null;
  onSelectCategory: (catId: string) => void;
}

export const ResearchCategories: React.FC<ResearchCategoriesProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return Globe;
      case 'TrendingUp': return TrendingUp;
      case 'Layers': return Layers;
      case 'BarChart2': return BarChart2;
      case 'Compass': return Compass;
      case 'Building': return Building;
      case 'Cpu': return Cpu;
      case 'Sparkles': return Sparkles;
      case 'PieChart': return PieChart;
      default: return Globe;
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              <Filter className="w-3.5 h-3.5 text-emerald-600" />
              <span>EXPLORE BY THEME</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight">
              Research Categories
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl font-sans leading-relaxed">
            Select an intelligence channel below to filter real-time market notes, equity coverage, macro indicators, and sector analysis.
          </p>
        </div>

        {/* 9 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_CATEGORIES.map((cat) => {
            const IconComp = getIcon(cat.iconName);
            const isSelected = selectedCategory === cat.name || selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.name)}
                className={`p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 group relative overflow-hidden ${
                  isSelected
                    ? 'bg-emerald-900 text-white border-emerald-800 shadow-lg ring-2 ring-emerald-500/30'
                    : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-emerald-500/50 hover:shadow-md'
                }`}
              >
                {/* Header Icon + Count */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                    isSelected
                      ? 'bg-emerald-800 text-emerald-300'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                  }`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full ${
                    isSelected
                      ? 'bg-emerald-800 text-emerald-200'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-800'
                  }`}>
                    {cat.articleCount} articles
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className={`text-xl font-bold font-serif-heading ${
                    isSelected ? 'text-white' : 'text-slate-900 group-hover:text-emerald-700 transition-colors'
                  }`}>
                    {cat.name}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isSelected ? 'text-emerald-100' : 'text-slate-600'
                  }`}>
                    {cat.description}
                  </p>
                </div>

                {/* Footer Action Arrow */}
                <div className={`pt-2 flex items-center justify-between text-xs font-bold font-sans ${
                  isSelected ? 'text-emerald-300' : 'text-emerald-700 group-hover:text-emerald-800'
                }`}>
                  <span>{isSelected ? 'Currently Viewing' : `Explore ${cat.name}`}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Filter Button if active */}
        {selectedCategory && (
          <div className="text-center pt-2">
            <button
              onClick={() => onSelectCategory('All')}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Reset Category Filter (Viewing: {selectedCategory})</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
