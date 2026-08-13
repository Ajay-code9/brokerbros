import React from 'react';
import { RESEARCH_ARTICLES } from '../../data/mockData';
import { BookOpen, Calendar, ArrowRight, TrendingUp, Globe, Cpu, Filter, Award, Sparkles } from 'lucide-react';

interface ResearchSectionProps {
  onOpenAccount: () => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ onOpenAccount }) => {
  return (
    <section id="research" className="py-16 lg:py-20 bg-slate-50/70 dark:bg-[#0E1420] text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-[#1E293B] font-sans relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Humanized B2B Operator Guides Header */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end border-b border-slate-200 dark:border-[#1E293B] pb-8">
          
          {/* LEFT SIDE: Clean Header & Feature Pills */}
          <div className="lg:col-span-8 space-y-4 text-left relative z-10">
            
            {/* Clean Simple Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 font-mono text-[11px] font-bold border border-emerald-200 dark:border-emerald-500/30 shadow-2xs">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>RESOURCES & SETUP GUIDES</span>
            </div>

            {/* Natural Human Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-900 dark:text-white font-sans leading-[1.15]">
              Brokerage Launch Guides <span className="text-emerald-600 dark:text-emerald-400">&</span> Documentation
            </h2>

            {/* Clear Paragraph */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              Practical guides and API documentation to help you configure liquidity feeds, launch prop firm challenges, and manage client onboarding.
            </p>

            {/* Horizontal Key Metrics Row */}
            <div className="pt-2 flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 border-t border-slate-200/80 dark:border-[#1E293B] pt-4">
              
              {/* Feature 1 */}
              <div className="flex items-center gap-3 pr-4 sm:pr-6 border-r border-slate-200 dark:border-[#1E293B] shrink-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0 border border-emerald-200 dark:border-emerald-500/30">
                  <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-white font-mono leading-none">14</div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">Platform Modules</div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3 pr-4 sm:pr-6 border-r border-slate-200 dark:border-[#1E293B] shrink-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0 border border-emerald-200 dark:border-emerald-500/30">
                  <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-white font-mono leading-none">FIX 4.4</div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">API Documentation</div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0 border border-emerald-200 dark:border-emerald-500/30">
                  <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-base font-bold text-emerald-700 dark:text-emerald-400 font-mono leading-none">48 Hours</div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">Avg Onboarding Time</div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE: Action Button */}
          <div className="lg:col-span-4 relative flex flex-col justify-end items-start lg:items-end min-h-[120px]">
            <div className="relative z-10 w-full sm:w-auto">
              <button
                onClick={onOpenAccount}
                className="h-[46px] px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer group w-full sm:w-auto"
              >
                <span>View Full Knowledge Base</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* 3 Research Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESEARCH_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white dark:bg-[#141C2B] rounded-2xl border border-slate-200/90 dark:border-[#1E293B] p-6 flex flex-col justify-between hover:border-emerald-500/70 dark:hover:border-emerald-500/70 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 font-bold rounded border border-emerald-200 dark:border-emerald-500/30">
                    {article.tag}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {article.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors font-sans leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>{article.author}</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">{article.readTime}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Humanized B2B Proof Cards Banner */}
        <div className="bg-slate-900 dark:bg-[#121520] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 font-sans shadow-lg">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            
            {/* COLUMN 1: Active Broker Network */}
            <div className="md:pr-8 md:border-r md:border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-3xl font-bold text-white font-mono">500+</div>
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">Active Brokerage Clients</div>
              </div>
              <h3 className="text-base font-bold text-white font-sans">Proven Broker Network</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Over 500 regulated brokers, prop firms, and IB networks run on BrokerBros infrastructure across 35 global hubs.
              </p>
            </div>

            {/* COLUMN 2: Go-Live Speed */}
            <div className="md:px-8 md:border-r md:border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-3xl font-bold text-white font-mono">48 Hours</div>
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">Average Launch Time</div>
              </div>
              <h3 className="text-base font-bold text-white font-sans">Fast Turnkey Onboarding</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Get your branded client portal, MT5 server hooks, and admin CRM configured and live in under 2 business days.
              </p>
            </div>

            {/* COLUMN 3: LP Network */}
            <div className="md:pl-8 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-3xl font-bold text-white font-mono">150+</div>
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">Connected Liquidity Feeds</div>
              </div>
              <h3 className="text-base font-bold text-white font-sans">Pre-Integrated LP Links</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Direct FIX 4.4 connections to 150+ Tier-1 banks, prime brokers, and non-bank market makers for instant liquidity.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
