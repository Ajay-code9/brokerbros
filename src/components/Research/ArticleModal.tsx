import React from 'react';
import { X, Clock, Calendar, Share2, Bookmark, ArrowRight, UserCheck } from 'lucide-react';
import { Article } from '../../data/researchData';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onOpenAccount: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onOpenAccount }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-white text-slate-900 rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8 z-10 font-sans max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded">
              {article.category}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">{article.readTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => alert("Article bookmarked to your BrokerBros library.")}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Bookmark"
            >
              <Bookmark className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: article.title, text: article.summary, url: window.location.href });
                } else {
                  alert("Link copied to clipboard!");
                }
              }}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Share"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Article Image Banner */}
          <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-200">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>

          {/* Title & Metadata */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif-heading font-semibold text-slate-900 leading-snug">
              {article.title}
            </h2>

            {/* Author Byline */}
            <div className="flex items-center gap-4 py-3 border-y border-slate-100">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-11 h-11 rounded-full object-cover border border-slate-200"
              />
              <div>
                <div className="text-sm font-bold text-slate-900 font-sans">{article.author.name}</div>
                <div className="text-xs text-slate-500 font-sans">{article.author.title} • Published {article.publishedDate}</div>
              </div>
            </div>
          </div>

          {/* Summary Box */}
          <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-4 text-emerald-950 text-sm font-medium leading-relaxed font-sans">
            <span className="font-bold text-emerald-800 block text-xs font-mono uppercase mb-1">Executive Summary</span>
            {article.summary}
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Callout Footer */}
          <div className="mt-8 bg-slate-900 text-white rounded-xl p-6 space-y-3">
            <h4 className="text-base font-bold font-sans text-white">Trade This Insight on BrokerBros</h4>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Get direct market access with $0 commission trading, real-time Level II market depth, and instant order execution.
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenAccount();
              }}
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Open BrokerBros Account</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
