import React, { useState } from 'react';
import { Newspaper, Calendar, Clock, ArrowRight, UserCheck, Sparkles } from 'lucide-react';
import { Article, FEATURED_ARTICLES } from '../../data/researchData';
import { ArticleModal } from './ArticleModal';

interface FeaturedResearchProps {
  activeCategory: string | null;
  activeTopic: string;
  onOpenAccount: () => void;
}

export const FeaturedResearch: React.FC<FeaturedResearchProps> = ({
  activeCategory,
  activeTopic,
  onOpenAccount
}) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Filter logic
  const filteredArticles = FEATURED_ARTICLES.filter((art) => {
    const matchesCat = !activeCategory || activeCategory === 'All' || art.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesTopic = !activeTopic || activeTopic === 'All' || art.topic.toLowerCase() === activeTopic.toLowerCase();
    return matchesCat && matchesTopic;
  });

  const displayArticles = filteredArticles.length > 0 ? filteredArticles : FEATURED_ARTICLES;

  return (
    <section id="featured-research" className="py-16 lg:py-20 bg-[#0A1A24] border-b border-emerald-900/40 text-white font-sans relative overflow-hidden">
      
      {/* Background Lighting Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
              <Newspaper className="w-3.5 h-3.5 text-emerald-400" />
              <span>EDITORIAL & ANALYST COVERAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight">
              Featured Market Intelligence Reports
            </h2>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg font-sans leading-relaxed">
            Curated deep-dives, earnings breakdowns, and macro policy analysis authored by BrokerBros quantitative strategists.
          </p>
        </div>

        {/* Editorial Grid: First article is large hero card if available, followed by 2-column or 3-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Featured Lead Article (Large Card - 7 Cols) */}
          {displayArticles[0] && (
            <div
              onClick={() => setSelectedArticle(displayArticles[0])}
              className="lg:col-span-7 bg-[#0D2231]/90 backdrop-blur-md rounded-2xl border border-emerald-500/30 overflow-hidden shadow-2xl hover:border-emerald-400 hover:shadow-emerald-500/20 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-80 overflow-hidden bg-slate-900">
                <img
                  src="/wallstreet_trader_analytics.webp"
                  alt={displayArticles[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2231] via-[#0D2231]/40 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-mono font-black text-xs rounded-full shadow-lg">
                    {displayArticles[0].category}
                  </span>
                  <span className="px-2.5 py-1 bg-slate-950/80 text-cyan-300 border border-cyan-500/40 backdrop-blur-xs font-mono text-[11px] font-semibold rounded-full">
                    Lead Institutional Briefing
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Clock className="w-3.5 h-3.5" />
                      {displayArticles[0].publishedDate}
                    </span>
                    <span>•</span>
                    <span>{displayArticles[0].readTime}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-emerald-300 transition-colors leading-tight font-sans">
                    {displayArticles[0].title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed font-sans line-clamp-3">
                    {displayArticles[0].summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-sans">
                  <div className="flex items-center gap-3">
                    <img
                      src={displayArticles[0].author.avatar}
                      alt={displayArticles[0].author.name}
                      className="w-8 h-8 rounded-full object-cover border border-emerald-500/40"
                    />
                    <div>
                      <div className="font-bold text-white">{displayArticles[0].author.name}</div>
                      <div className="text-[11px] text-emerald-400">{displayArticles[0].author.title}</div>
                    </div>
                  </div>

                  <div className="text-emerald-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Full Briefing</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Featured Articles Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {displayArticles.slice(1, 3).map((art) => (
              <div
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="bg-[#0D2231]/90 backdrop-blur-md rounded-2xl border border-emerald-500/30 p-6 shadow-xl hover:shadow-2xl hover:border-emerald-400 transition-all duration-300 cursor-pointer group space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-bold rounded">
                      {art.category}
                    </span>
                    <span className="text-slate-400">{art.publishedDate} • {art.readTime}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug font-sans">
                    {art.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 font-sans">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{art.author.name}</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Remaining Articles Grid (3 Cols) */}
        {displayArticles.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {displayArticles.slice(3).map((art) => (
              <div
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-lg hover:border-emerald-500 transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 font-bold rounded">
                      {art.category}
                    </span>
                    <span className="text-slate-400">{art.readTime}</span>
                  </div>

                  <h4 className="text-base font-bold font-serif-heading text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {art.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-sans">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{art.author.name}</span>
                  <span className="text-emerald-700 font-bold">Read →</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Article Detail Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenAccount={onOpenAccount}
      />
    </section>
  );
};
