import React, { useState } from 'react';
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Headphones,
  Server,
  FileCheck2,
  Users,
  Cpu,
  Activity,
  Award
} from 'lucide-react';
import { CTASection } from '../CTA/CTASection';

export interface ServiceDeliverable {
  title: string;
  desc: string;
  icon: React.ElementType;
  sla: string;
}

export interface ServiceWorkflowStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceScopeItem {
  feature: string;
  standard: string;
  enterprise: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceMasterPageProps {
  serviceTitle: string;
  heroBadge: string;
  heroDescription: string;
  slaMetric: { label: string; value: string; sub: string };
  deliverables: ServiceDeliverable[];
  workflowSteps: ServiceWorkflowStep[];
  scopeInclusions: ServiceScopeItem[];
  specs: { label: string; value: string }[];
  faqs: ServiceFaq[];
  onOpenAccount: () => void;
}

export const ServiceMasterPageTemplate: React.FC<ServiceMasterPageProps> = ({
  serviceTitle,
  heroBadge,
  heroDescription,
  slaMetric,
  deliverables,
  workflowSteps,
  scopeInclusions,
  specs,
  faqs,
  onOpenAccount
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D14] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      
      {/* 1. DISTINCT SERVICE BLUEPRINT: EXECUTIVE FULL-WIDTH SLA HERO BANNER */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <Headphones className="w-3.5 h-3.5" />
            <span>{heroBadge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            {serviceTitle} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400">
              Institutional Managed Service SLA
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            {heroDescription}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAccount}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Dedicated Service Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Integrated Top Executive SLA Metric Bar */}
          <div className="pt-8 max-w-2xl mx-auto">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md flex items-center justify-between">
              <div className="text-left space-y-1">
                <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{slaMetric.label}</span>
                </div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  {slaMetric.sub}
                </div>
              </div>
              <div className="text-3xl font-black font-mono text-slate-900 dark:text-white px-4 py-1.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30">
                {slaMetric.value}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SERVICE DELIVERABLES & SLA FRAMEWORK */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Guaranteed Service Deliverables
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Every managed service contract includes strict Service Level Agreements (SLAs) and transparent performance reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-md hover:border-emerald-500/50 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {item.sla}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. 4-STEP OPERATIONAL WORKFLOW TIMELINE */}
      <section className="py-16 sm:py-20 bg-slate-100 dark:bg-[#0d121d] border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Clock className="w-4 h-4" />
              OPERATIONAL TIMELINE & METHODOLOGY
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              4-Step Service Execution Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 relative"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-mono font-bold text-sm flex items-center justify-center">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICE SCOPE COMPARISON MATRIX */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Service Scope & Tiered Inclusions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Transparent breakdown of Standard vs Enterprise Managed Service tiers.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131926] shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-mono uppercase text-[11px] border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="py-4 px-6 font-bold">Service Deliverable</th>
                <th className="py-4 px-6 font-bold text-slate-700 dark:text-slate-300">Standard Scope</th>
                <th className="py-4 px-6 font-bold text-emerald-600 dark:text-emerald-400">Enterprise Managed Scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800/80">
              {scopeInclusions.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 dark:text-white">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400 font-mono">
                    {row.standard}
                  </td>
                  <td className="py-4 px-6 font-bold font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                    <span>{row.enterprise}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. HUMAN EXPERTS & INFRASTRUCTURE SPECS */}
      <section className="py-16 sm:py-20 bg-slate-100 dark:bg-[#0d121d] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Service Infrastructure Specifications
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specs.map((item, idx) => (
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

      {/* 6. SERVICE FAQ ACCORDION */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Service Questions & Answers
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

      {/* 7. CONSULTATION CTA */}
      <CTASection
        title={`Deploy ${serviceTitle} for Your Brokerage Today`}
        onOpenAccount={onOpenAccount}
      />
    </div>
  );
};
