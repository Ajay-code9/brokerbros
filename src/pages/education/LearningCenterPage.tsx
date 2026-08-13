import React from 'react';
import { Sparkles, Clock, Compass, Layers } from 'lucide-react';

interface PageProps {
  onOpenAccount: () => void;
}

export const LearningCenterPage: React.FC<PageProps> = () => {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-300 min-h-[85vh] flex items-center justify-center relative overflow-hidden font-sans transition-colors duration-300">
      
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-60 pointer-events-none" />

      {/* Main Centered Section */}
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10 space-y-8 py-16">
        
        {/* Sleek Animated Icon Graphic */}
        <div className="relative inline-flex items-center justify-center">
          {/* Outer Pulsing Rings */}
          <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-emerald-500/20 animate-ping opacity-40" />
          <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-emerald-400/30 blur-md animate-pulse" />

          {/* Center Glass Sphere Icon Box */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-slate-900 dark:bg-[#121520] text-emerald-400 flex items-center justify-center shadow-2xl shadow-emerald-500/20 border border-slate-800 dark:border-slate-700 transform hover:scale-105 transition-transform duration-300">
            <Compass className="w-10 h-10 sm:w-12 sm:h-12 animate-spin-slow text-emerald-400" />
          </div>
        </div>

        {/* Big Bold Titles */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 text-xs font-mono font-extrabold uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            <span>KNOWLEDGE HUB IN DEVELOPMENT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight font-sans">
            Learning Centre
          </h1>

          <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight font-mono">
            COMING SOON
          </div>
        </div>

        {/* Short Subtitle */}
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          We are building an interactive financial encyclopedia and trading reference hub. Stay tuned!
        </p>

      </div>

    </div>
  );
};
