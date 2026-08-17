import React, { useState } from 'react';
import {
  Zap,
  CheckCircle2,
  Clock,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Cpu,
  Layers,
  ShieldCheck,
  Code2,
  Terminal,
  Activity,
  Server,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { CTASection } from '../CTA/CTASection';

export interface ProductModule {
  title: string;
  desc: string;
  icon: React.ElementType;
  highlight: string;
}

export interface ProductVisualizerTab {
  id: string;
  label: string;
  previewText: string;
  codeSnippet?: string;
}

export interface ProductFaq {
  q: string;
  a: string;
}

export interface ProductMasterPageProps {
  productTitle: string;
  heroBadge: string;
  heroDescription: string;
  productMetric: { label: string; value: string; sub: string };
  visualizerTabs: ProductVisualizerTab[];
  modules: ProductModule[];
  techSpecs: { label: string; value: string }[];
  faqs: ProductFaq[];
  onOpenAccount: () => void;
}

export const ProductMasterPageTemplate: React.FC<ProductMasterPageProps> = ({
  productTitle,
  heroBadge,
  heroDescription,
  productMetric,
  visualizerTabs,
  modules,
  techSpecs,
  faqs,
  onOpenAccount
}) => {
  const [activeTab, setActiveTab] = useState<string>(visualizerTabs[0]?.id || 'tab1');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const currentTabObj = visualizerTabs.find((t) => t.id === activeTab) || visualizerTabs[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D14] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      
      {/* 1. DISTINCT PRODUCT BLUEPRINT: LEFT-ALIGNED SAAS HERO (SPACIOUS 100VH LANDING FIT) */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-blue-500/5 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left my-auto pb-6 sm:pb-10">
          <div className="max-w-3xl space-y-5 lg:space-y-6">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              {productTitle} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400">
                Institutional Software Module
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
              {heroDescription}
            </p>

            <div className="pt-2 flex flex-col items-start gap-4">
              <button
                onClick={onOpenAccount}
                className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                <span>Deploy {productTitle} Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Compact Left-Aligned Metric Pill below CTA Button */}
              <div className="inline-flex items-center gap-3 p-2.5 px-4 rounded-xl bg-white/90 dark:bg-[#131926]/90 border border-slate-200/90 dark:border-slate-800/90 shadow-md backdrop-blur-md hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 group">
                
                {/* Icon & Live Dot */}
                <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold shrink-0">
                  <Zap className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300 text-emerald-600 dark:text-emerald-400" />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500" />
                </div>

                {/* Metric Main Value */}
                <div className="text-base sm:text-lg font-extrabold font-mono tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400">
                    {productMetric.value}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 shrink-0" />

                {/* Metric Label & Subtitle */}
                <div className="text-left space-y-0 text-[11px]">
                  <div className="font-mono font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider leading-tight">
                    {productMetric.label}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                    {productMetric.sub}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE PLATFORM / ENGINE VISUALIZER & KEY METRICS */}
      <section className="py-16 sm:py-20 bg-slate-100 dark:bg-[#0d121d] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Activity className="w-4 h-4" />
              INTERACTIVE ENGINE ARCHITECTURE
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Explore Live Module Controls
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {visualizerTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white dark:bg-[#131926] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Visualizer Display Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 ml-2">
                  BrokerBros Engine Terminal // {currentTabObj?.label}
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Active Cluster Status: OK
              </span>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              {currentTabObj?.previewText}
            </p>

            {currentTabObj?.codeSnippet && (
              <div className="p-4 rounded-xl bg-slate-900 dark:bg-[#060a12] font-mono text-xs text-emerald-400 overflow-x-auto border border-slate-800">
                <pre>{currentTabObj.codeSnippet}</pre>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. CORE PRODUCT MODULES GRID */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core Technical Capabilities
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Every feature is engineered for high throughput, sub-10ms synchronization, and non-stop operational resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-md hover:border-emerald-500/50 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. TECHNICAL SPECS & API INTEGRATION HIGHLIGHTS */}
      <section className="py-16 sm:py-20 bg-slate-100 dark:bg-[#0d121d] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Software Engine Specifications
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techSpecs.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 text-center space-y-1">
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                  {item.label}
                </div>
                <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRODUCT FAQ ACCORDION */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Product Questions & Technical Answers
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131926] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer hover:text-emerald-500 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 text-emerald-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 font-sans font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. PRODUCT CTA SECTION */}
      <CTASection
        title={`Deploy ${productTitle} for Your Organization Today`}
        onOpenAccount={onOpenAccount}
      />
    </div>
  );
};
