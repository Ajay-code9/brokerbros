import React from 'react';
import { 
  User, 
  ShieldCheck, 
  CreditCard, 
  CheckCircle2, 
  Sparkles, 
  Lock, 
  FileCheck,
  ChevronRight
} from 'lucide-react';
import { VideoHeroBackground } from '../Common/VideoHeroBackground';

interface OpenAccountHeroProps {
  currentStep: number;
  onSelectStep: (step: number) => void;
}

export const OpenAccountHero: React.FC<OpenAccountHeroProps> = ({
  currentStep,
  onSelectStep
}) => {
  const steps = [
    {
      id: 1,
      name: 'Personal Information',
      short: 'Personal Info',
      desc: 'Legal identity, contact details, & password setup',
      icon: User
    },
    {
      id: 2,
      name: 'Identity Verification',
      short: 'Identity KYC',
      desc: 'Government ID scan & instant FINRA compliance check',
      icon: ShieldCheck
    },
    {
      id: 3,
      name: 'Financial Details',
      short: 'Financial Setup',
      desc: 'Base currency, employment, & trading experience',
      icon: CreditCard
    },
    {
      id: 4,
      name: 'Review & Submit',
      short: 'Final Review',
      desc: 'Digital electronic signature & account activation',
      icon: FileCheck
    }
  ];

  return (
    <section className="bg-[#06141D] text-white py-6 sm:py-8 font-sans relative overflow-hidden border-b border-emerald-900/40">
      {/* Background Video */}
      <VideoHeroBackground videoSrc="/test.mp4" opacity={0.25} theme="dark" />

      {/* Mesh Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 relative z-10">
        
        {/* Top Editorial Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/25">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>FAST 3-MINUTE DIGITAL ONBOARDING</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white font-sans leading-[1.12]">
            Open Your BrokerBros Account
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed max-w-2xl mx-auto">
            Zero account minimums. Access 150+ global markets, direct routing, and earn up to 4.85% APY on cash.
          </p>
        </div>

        {/* Multi-Step Progress Tracker Bar */}
        <div className="bg-slate-900/80 backdrop-blur border border-slate-800/90 rounded-2xl p-2.5 sm:p-4 shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 relative">
            
            {steps.map((stepItem, idx) => {
              const IconComp = stepItem.icon;
              const isActive = currentStep === stepItem.id;
              const isCompleted = currentStep > stepItem.id;

              return (
                <div
                  key={stepItem.id}
                  onClick={() => onSelectStep(stepItem.id)}
                  className={`p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 relative group ${
                    isActive
                      ? 'bg-slate-800/90 border-emerald-500 shadow-md shadow-emerald-500/10 ring-1 ring-emerald-500/30'
                      : isCompleted
                      ? 'bg-emerald-950/40 border-emerald-800/60 hover:bg-slate-800/60'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-[11px] ${
                      isActive
                        ? 'bg-emerald-500 text-slate-950 shadow-xs'
                        : isCompleted
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : `0${stepItem.id}`}
                    </div>

                    <span className={`text-[8px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${
                      isActive
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : isCompleted
                        ? 'bg-emerald-900/50 text-emerald-400'
                        : 'bg-slate-800 text-slate-500'
                    }`}>
                      {isActive ? 'Current' : isCompleted ? 'Done' : 'Step'}
                    </span>
                  </div>

                  {/* Step Title & Icon */}
                  <div>
                    <div className="flex items-center gap-1.5 font-bold font-sans text-xs text-white group-hover:text-emerald-400 transition-colors">
                      <IconComp className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                      <span>{stepItem.name}</span>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};
