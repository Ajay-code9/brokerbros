import React, { useState } from 'react';
import { OpenAccountHero } from '../../components/Auth/OpenAccountHero';
import { OpenAccountForm } from '../../components/Auth/OpenAccountForm';
import { useRouter } from '../../router';
import { ArrowLeft, ShieldCheck, Lock, LogIn } from 'lucide-react';

interface OpenAccountPageProps {
  onLoginRedirect?: () => void;
}

export const OpenAccountPage: React.FC<OpenAccountPageProps> = () => {
  const { navigate } = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-500 selection:text-white flex flex-col justify-between relative overflow-hidden">
      
      {/* Subtle Grid & Light Ambient Glow */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Navigation Header */}
      <header className="relative z-10 border-b border-slate-100 bg-white/80 backdrop-blur-md py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <img src="/logo-white.png" alt="BrokerBros" className="h-9 w-auto object-contain" />
          </button>

          {/* Right Action: Log In Button */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs text-slate-500 font-medium">Already have an account?</span>
            <button
              onClick={handleLoginRedirect}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>Log In</span>
            </button>
          </div>

        </div>
      </header>

      {/* Hero Header & Progress Indicator */}
      <OpenAccountHero
        currentStep={currentStep}
        onSelectStep={(step) => setCurrentStep(step)}
      />

      {/* Primary Form Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <OpenAccountForm
          currentStep={currentStep}
          onStepChange={(step) => setCurrentStep(step)}
          onLoginRedirect={handleLoginRedirect}
        />
      </main>

      {/* Security Footer Bar */}
      <footer className="relative z-10 bg-white border-t border-slate-100 py-5 px-4 sm:px-8 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>BrokerBros Digital Onboarding • Member SIPC & FINRA</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/legal')} className="hover:text-slate-700 transition-colors">Privacy</button>
            <button onClick={() => navigate('/security')} className="hover:text-slate-700 transition-colors">Security</button>
            <button onClick={() => navigate('/help')} className="hover:text-slate-700 transition-colors">Support</button>
          </div>
        </div>
      </footer>

    </div>
  );
};

