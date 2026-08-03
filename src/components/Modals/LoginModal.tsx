import React from 'react';
import { X } from 'lucide-react';
import { LoginWorkstationGraphic } from '../Auth/LoginWorkstationGraphic';
import { LoginForm } from '../Auth/LoginForm';
import { useRouter } from '../../router';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAccount: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onOpenAccount }) => {
  const { navigate } = useRouter();

  if (!isOpen) return null;

  const handleOpenAccountClick = () => {
    onClose();
    navigate('/open-account');
    onOpenAccount();
  };

  const handleSuccessLogin = () => {
    onClose();
    navigate('/platforms');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 font-sans">
      <div className="bg-slate-50 text-slate-900 rounded-3xl max-w-6xl w-full border border-slate-200 shadow-2xl overflow-hidden relative my-auto">
        
        {/* Top Close Button Header */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
            title="Close Login Window"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Asymmetrical Grid Content */}
        <div className="p-4 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
            
            {/* Left Graphic Column (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <LoginWorkstationGraphic />
            </div>

            {/* Right Form Column (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <LoginForm
                onOpenAccount={handleOpenAccountClick}
                onSuccessLogin={handleSuccessLogin}
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
