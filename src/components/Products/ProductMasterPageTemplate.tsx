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
  ExternalLink,
  SlidersHorizontal,
  Workflow,
  Sparkles,
  BarChart3,
  Globe,
  Settings,
  Users
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

export interface ProductWorkflowStep {
  num: string;
  title: string;
  desc: string;
  icon: React.ElementType;
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
  workflowSteps?: ProductWorkflowStep[];
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
  workflowSteps,
  visualizerTabs,
  modules,
  techSpecs,
  faqs,
  onOpenAccount
}) => {
  const [activeTab, setActiveTab] = useState<string>(visualizerTabs[0]?.id || 'tab1');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const currentTabObj = visualizerTabs.find((t) => t.id === activeTab) || visualizerTabs[0];

  // Default fallback workflow steps if product page does not supply custom ones
  const defaultSteps: ProductWorkflowStep[] = [
    { num: '01', title: 'Instant Setup', desc: 'Connect your brokerage server, CRM database, or liquidity feeds with 1-click cloud connectors.', icon: Settings },
    { num: '02', title: 'Custom Branding', desc: 'Upload your brokerage logo, select custom color themes, and map your custom domain name.', icon: SlidersHorizontal },
    { num: '03', title: 'Launch to Clients', desc: 'Enable self-service trader registration, IB portals, mobile apps, and automated funding gateways.', icon: Users },
    { num: '04', title: 'Monitor & Grow', desc: 'Track live trading volume, risk exposure, referral payouts, and server health from one dashboard.', icon: BarChart3 }
  ];

  const activeSteps = workflowSteps || defaultSteps;

  const stepColors = [
    'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 text-emerald-500',
    'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 text-blue-500',
    'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 text-purple-500',
    'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 text-amber-500'
  ];

  // Colorful icon theme colors for feature cards
  const iconThemeColors = [
    { bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20', badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
    { bg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20', badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
    { bg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20', badge: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' },
    { bg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20', badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' },
    { bg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20', badge: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20' },
    { bg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20', badge: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D14] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">

      {/* 1. HERO SECTION (100% ABOVE-THE-FOLD AT LANDING TIME WITH ENLARGED TEXT & BALANCED PADDING) */}
      <section className="relative min-h-[calc(100vh-90px)] flex flex-col justify-center py-6 sm:py-10 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1420]">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left my-auto">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            
            {/* Top Product Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-800/50">
              <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{heroBadge}</span>
            </div>

            {/* Clear Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              {productTitle} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400">
                Turnkey Brokerage Solution
              </span>
            </h1>

            {/* Easy-to-Understand Slightly Larger Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-3xl">
              {heroDescription}
            </p>

            {/* CTA & Metric Card */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenAccount}
                className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-md shadow-emerald-600/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                <span>Request Demo / Launch {productTitle}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Metric Card Pill */}
              <div className="inline-flex items-center gap-3 p-2.5 px-4 rounded-xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-xs shrink-0">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div className="text-base font-extrabold font-mono text-emerald-600 dark:text-emerald-400">
                  {productMetric.value}
                </div>
                <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 shrink-0" />
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {productMetric.label}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CHRONOLOGICAL HOW IT WORKS WORKFLOW */}
      <section className="py-14 sm:py-18 bg-white dark:bg-[#0E1420] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              <Workflow className="w-4 h-4" />
              <span>STEP-BY-STEP DEPLOYMENT WORKFLOW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How {productTitle} Works For Your Brokerage
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Simple 4-step process from setup to live trading execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {activeSteps.map((stepItem, sIdx) => {
              const StepIcon = stepItem.icon;
              const colorStyle = stepColors[sIdx % stepColors.length];

              return (
                <div key={sIdx} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 space-y-3 relative">
                  <div className={`w-9 h-9 rounded-xl font-mono font-bold flex items-center justify-center text-sm border ${colorStyle}`}>
                    {stepItem.num}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <StepIcon className="w-4 h-4" />
                    <span>{stepItem.title}</span>
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {stepItem.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. CORE FEATURES WITH RICH VECTOR ICONS */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>KEY PRODUCT FEATURES</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Designed to Make Broker Operations Simple
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            Everything your brokerage needs to deliver a world-class trading experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((item, idx) => {
            const IconComp = item.icon;
            const theme = iconThemeColors[idx % iconThemeColors.length];

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl border ${theme.bg}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded border ${theme.badge}`}>
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. INTERACTIVE MODULE CONTROL & LIVE VISUAL PREVIEW */}
      <section className="py-14 sm:py-18 bg-slate-100 dark:bg-[#0E1420] border-t border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Interactive Module Views
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Click below to preview different functional controls of {productTitle}.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {visualizerTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white dark:bg-[#131926] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Visualizer Display Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-lg space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 ml-2">
                  {productTitle} // {currentTabObj?.label}
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                Operational Status: OK
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              {currentTabObj?.previewText}
            </p>

            {currentTabObj?.codeSnippet && (
              <div className="p-4 rounded-xl bg-slate-950 font-mono text-xs text-emerald-400 overflow-x-auto border border-slate-800">
                <pre>{currentTabObj.codeSnippet}</pre>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 5. SIMPLE TECH SPECS & FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Specs Table */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {productTitle} Specifications Overview
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techSpecs.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 text-center space-y-1">
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                  {item.label}
                </div>
                <div className="text-base font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Clear answers to common questions about deploying {productTitle}.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => {
              const isOpen = activeFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center justify-between cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </section>

      {/* CTA SECTION */}
      <CTASection variant="light" onOpenAccount={onOpenAccount} />

    </div>
  );
};
