import React from 'react';
import { LoginForm } from '../../components/Auth/LoginForm';
import { useRouter } from '../../router';
import { ArrowLeft, ShieldCheck, Lock, UserPlus } from 'lucide-react';

interface LoginPageProps {
  onOpenAccount: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onOpenAccount }) => {
  const { navigate } = useRouter();

  const handleOpenAccountRedirect = () => {
    navigate('/open-account');
    onOpenAccount();
  };

  const handleSuccessLogin = () => {
    navigate('/platforms');
  };

  return (
    <div className="h-screen w-screen bg-white text-slate-900 font-sans selection:bg-emerald-500 selection:text-white flex flex-col justify-between relative overflow-hidden">
      
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

      {/* Top Header Navigation */}
      <header className="relative z-10 border-b border-slate-100 bg-white/80 backdrop-blur-md py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <img src="/logo-white.png" alt="BrokerBros" className="h-9 w-auto object-contain" />
          </button>

          {/* Right Action: Sign Up Button */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs text-slate-500 font-medium">Don't have an account?</span>
            <button
              onClick={handleOpenAccountRedirect}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign Up</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Login Card Section (Centered Fit) */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-2 sm:py-4 overflow-y-auto">
        <div className="w-full max-w-md my-auto">
          <LoginForm
            onOpenAccount={handleOpenAccountRedirect}
            onSuccessLogin={handleSuccessLogin}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-100 bg-white py-3 px-4 sm:px-8 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>256-Bit SSL Encrypted • Member SIPC & FINRA</span>
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

