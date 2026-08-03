import React, { useState } from 'react';
import { Play, BookOpen, FileText, Code, CheckCircle2, ArrowRight, Video, Download, ExternalLink } from 'lucide-react';
import { useRouter } from '../../router';

export const PlatformLearningResources: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const tutorials = [
    {
      title: "Mastering Desktop Pro Multi-Monitor Workspace",
      category: "PLATFORM WALKTHROUGH",
      duration: "12 Min Video",
      desc: "Step-by-step guide to configuring custom quad-monitor workspace layouts, Level II DOM hotkeys, and order entry ladders.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
      type: "video"
    },
    {
      title: "Multi-Leg Options Chaining & Volatility Lab",
      category: "DERIVATIVES TUTORIAL",
      duration: "18 Min Video",
      desc: "Learn how to build Iron Condors, Bull Call Spreads, and analyze live options Greeks with real-time probability surface maps.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
      type: "video"
    },
    {
      title: "Quantitative FIX 4.4 & Python SDK Quickstart",
      category: "DEVELOPER GUIDE",
      duration: "15 Min Read",
      desc: "Complete technical guide for connecting Python scripts to our co-located REST and WebSockets API gateways.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      type: "guide"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/80 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>PLATFORM ACADEMY & DEMOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight">
            Learn How to Trade Like a Pro
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Video walkthroughs, platform manuals, and API developer guides to help you maximize your trading setup.
          </p>
        </div>

        {/* Video & Guide Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutorials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors">
                    <button
                      onClick={() => setSelectedVideo(item.title)}
                      className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                    </button>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono font-bold">
                    <span className="px-2.5 py-1 bg-slate-950/80 backdrop-blur-md text-emerald-400 rounded-md border border-slate-800">
                      {item.category}
                    </span>
                    <span className="px-2.5 py-1 bg-slate-950/80 backdrop-blur-md text-slate-200 rounded-md border border-slate-800">
                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold font-serif-heading text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Footer Link */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                <button
                  onClick={() => navigate('/education')}
                  className="hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Watch Walkthrough</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Manuals & PDF Quick Download Strip */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold font-serif-heading text-slate-900">
                Official Platform User Guides & Keyboard Shortcuts PDF
              </h4>
              <p className="text-xs text-slate-500 font-sans">
                Download the complete 84-page BrokerBros Workstation Pro manual and hotkey map.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/education')}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Download Documentation</span>
          </button>
        </div>

      </div>
    </section>
  );
};
