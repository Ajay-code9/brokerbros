import React, { useState } from 'react';
import { X } from 'lucide-react';
import { OpenAccountHero } from '../Auth/OpenAccountHero';
import { OpenAccountForm } from '../Auth/OpenAccountForm';
import { AuthTrustSection } from '../Auth/AuthTrustSection';
import { useRouter } from '../../router';

interface OpenAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OpenAccountModal: React.FC<OpenAccountModalProps> = ({ isOpen, onClose }) => {
  const { navigate } = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  if (!isOpen) return null;

  const handleLoginRedirect = () => {
    onClose();
    navigate('/login');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 font-sans">
      <div className="bg-slate-50 text-slate-900 rounded-3xl max-w-6xl w-full border border-slate-200 shadow-2xl overflow-hidden relative my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header with Close Button */}
        <div className="bg-slate-900 text-white p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
              BB
            </div>
            <div>
              <h3 className="text-lg font-serif-heading font-semibold text-white">
                BrokerBros Digital Onboarding Portal
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                SEC / FINRA Regulated Global Account Setup
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-8 space-y-8">
          <OpenAccountHero
            currentStep={currentStep}
            onSelectStep={(step) => setCurrentStep(step)}
          />

          <OpenAccountForm
            currentStep={currentStep}
            onStepChange={(step) => setCurrentStep(step)}
            onLoginRedirect={handleLoginRedirect}
          />

          <AuthTrustSection />
        </div>

      </div>
    </div>
  );
};
