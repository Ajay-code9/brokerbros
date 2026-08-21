import React from 'react';
import { 
  ArrowRight, 
  DollarSign, 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  FileText, 
  CreditCard, 
  Wallet,
  Server,
  Cpu,
  Globe,
  Sliders,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { OtherFeesAccordionSection } from '../../components/Pricing/OtherFeesAccordionSection';
import { FeeTransparencyCards } from '../../components/Pricing/FeeTransparencyCards';
import { InteractivePricingCalculator } from '../../components/Pricing/InteractivePricingCalculator';
import { PricingFAQAccordion } from '../../components/Pricing/PricingFAQAccordion';
import { PricingCTA } from '../../components/Pricing/PricingCTA';

interface OtherFeesPageProps {
  onOpenAccount: () => void;
}

export const OtherFeesPage: React.FC<OtherFeesPageProps> = ({ onOpenAccount }) => {
  const scrollToCalculator = () => {
    const el = document.getElementById('pricing-calculator');
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const hostingSteps = [
    {
      step: '01',
      title: 'Select Data Center',
      desc: 'Choose Equinix LD4 (London), NY4 (New York), or TY3 (Tokyo) server hubs.',
      icon: Globe
    },
    {
      step: '02',
      title: 'Provision Server Hardware',
      desc: 'Deploy dedicated bare-metal servers or cloud virtual instances.',
      icon: Server
    },
    {
      step: '03',
      title: 'Establish Cross-Connects',
      desc: 'Direct sub-millisecond fiber cross-connects to liquidity providers and exchanges.',
      icon: Zap
    },
    {
      step: '04',
      title: '24/7 Managed Monitoring',
      desc: '24/7 active hardware uptime tracking, automated failover, and DDoS mitigation.',
      icon: CheckCircle2
    }
  ];

  return (
    <div className="bg-white dark:bg-[#090D14] text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-300 min-h-screen">
      
      {/* 1. HERO SECTION (100% ABOVE-THE-FOLD AT LANDING TIME & SIMPLE LANGUAGE) */}
      <section className="relative min-h-[calc(100vh-90px)] flex flex-col justify-center py-6 sm:py-10 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1420]">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-5 my-auto w-full">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-800/50">
            <Server className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>INFRASTRUCTURE & DEDICATED HOSTING FEES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Infrastructure & Hosting Pricing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400">
              Equinix Co-Location & Server Management
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            Deploy enterprise trading servers directly inside Equinix LD4 (London), NY4 (New York), and TY3 (Tokyo) financial data centers. Transparent server hosting, fiber cross-connects, and 24/7 managed infrastructure monitoring.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAccount}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-md shadow-emerald-600/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View Hosting Fee Schedule</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToCalculator}
              className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 dark:bg-[#141C2B] hover:bg-slate-800 dark:hover:bg-[#1B2538] text-white font-semibold rounded-xl border border-slate-800 dark:border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm shadow-xs"
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Calculate Savings</span>
            </button>
          </div>

          {/* Integrated SLA Metric Card */}
          <div className="pt-3 max-w-2xl mx-auto w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-xs text-center">
              <div>
                <div className="text-xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400">99.99%</div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">Uptime SLA Guarantee</div>
              </div>
              <div className="border-y sm:border-y-0 sm:border-x border-slate-200 dark:border-slate-800 py-2 sm:py-0">
                <div className="text-xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400">Equinix LD4/NY4</div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">Financial Data Centers</div>
              </div>
              <div>
                <div className="text-xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400">$0 Hidden Fee</div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">Transparent Pricing</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CHRONOLOGICAL 4-STEP HOSTING PROVISIONING WORKFLOW */}
      <section className="py-12 bg-slate-50/50 dark:bg-[#0E1420] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>SERVER PROVISIONING STEPS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              4 Steps to Provision Trading Infrastructure
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Deploy server nodes in world-class financial co-location facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {hostingSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 space-y-3 relative">
                <div className="w-9 h-9 rounded-xl font-mono font-bold flex items-center justify-center text-sm border bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                  {step.step}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <step.icon className="w-4 h-4 text-emerald-500" />
                  <span>{step.title}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Administrative & Infrastructure Fee Accordion */}
      <div id="other-fees" className="py-4">
        <OtherFeesAccordionSection />
      </div>

      {/* 4. Fee Transparency Cards & Calculator */}
      <FeeTransparencyCards />
      <InteractivePricingCalculator onOpenAccount={onOpenAccount} />

      {/* 5. FAQs & CTA */}
      <PricingFAQAccordion />
      <PricingCTA onOpenAccount={onOpenAccount} onScrollToCalculator={scrollToCalculator} />
    </div>
  );
};
