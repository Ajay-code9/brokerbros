import React, { useState } from 'react';
import { 
  Lock, 
  Mail, 
  KeyRound, 
  Fingerprint, 
  ArrowRight, 
  ShieldCheck, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  Info
} from 'lucide-react';

interface LoginFormProps {
  onOpenAccount: () => void;
  onSuccessLogin?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenAccount, onSuccessLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showBiometricNotice, setShowBiometricNotice] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSubmitted, setForgotSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authenticating session
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      if (onSuccessLogin) {
        setTimeout(onSuccessLogin, 1500);
      }
    }, 1200);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotSubmitted(true);
  };

  return (
    <div className="w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-2xl shadow-slate-200/60 space-y-7 font-sans">
      
      {/* Card Header with Clean Logo */}
      <div className="space-y-2.5 text-center flex flex-col items-center">
        <img src="/logo-white.png" alt="BrokerBros" className="h-11 sm:h-14 w-auto object-contain mb-1" />
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">
            Client Portal Login
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-sans mt-0.5">
            Secure access to your global trading account
          </p>
        </div>
      </div>

      {isSuccess ? (
        <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-600/30">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold font-serif-heading text-slate-900">
            Authentication Successful
          </h3>
          <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
            Encrypted session established. Launching BrokerBros Pro Trading Terminal...
          </p>
          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono font-bold text-emerald-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Redirecting to Dashboard...</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email / Client ID Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              Email or Client Account ID
            </label>
            <div className="relative group">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-600 transition-colors" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="investor@domain.com or BB-84920"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-sans placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowForgotModal(true)}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative group">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-600 transition-colors" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••••••"
                className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-sans placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember Me Toggle */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-600 select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300"
              />
              <span>Remember account username</span>
            </label>
          </div>

          {/* Primary Login CTA */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 group"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Authenticating SSL Gateway...</span>
              </div>
            ) : (
              <>
                <span>Login to Client Terminal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {/* Biometric Login Button (Coming Soon) */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowBiometricNotice(true)}
              className="w-full py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs rounded-xl border border-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Fingerprint className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span>Login with Touch ID / Face ID</span>
              <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded ml-1">
                Coming Soon
              </span>
            </button>
          </div>

        </form>
      )}

      {/* Biometric Tooltip Banner Modal */}
      {showBiometricNotice && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2 animate-in fade-in duration-200 text-xs">
          <div className="flex items-center justify-between text-emerald-900 font-bold">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Hardware Passkey & Biometrics
            </span>
            <button
              onClick={() => setShowBiometricNotice(false)}
              className="text-slate-400 hover:text-slate-700 font-bold"
            >
              ✕
            </button>
          </div>
          <p className="text-slate-600 text-xs leading-relaxed">
            Biometric Touch ID, Face ID, and WebAuthn hardware key enrollment will be enabled in your Client Settings after your initial password authentication.
          </p>
        </div>
      )}

      {/* Need an account Link Section */}
      <div className="pt-4 border-t border-slate-100 text-center space-y-3">
        <p className="text-xs text-slate-600 font-sans">
          Need an account?{' '}
          <button
            onClick={onOpenAccount}
            className="text-emerald-700 font-bold hover:underline cursor-pointer inline-flex items-center gap-1 ml-0.5"
          >
            <span>Open BrokerBros Account</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </p>
      </div>

      {/* Subtle Security Badges */}
      <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] font-mono text-slate-500 text-center">
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200/80 flex flex-col items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>SIPC Protected</span>
        </div>
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200/80 flex flex-col items-center gap-1">
          <Lock className="w-3.5 h-3.5 text-emerald-600" />
          <span>256-Bit SSL</span>
        </div>
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200/80 flex flex-col items-center gap-1">
          <KeyRound className="w-3.5 h-3.5 text-emerald-600" />
          <span>SOC2 Type II</span>
        </div>
      </div>

      {/* Last Login Protection Notice */}
      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] font-sans text-slate-500 space-y-1">
        <div className="flex items-center gap-1.5 font-bold text-slate-700">
          <Info className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Last Login Security Record</span>
        </div>
        <p className="leading-relaxed">
          Last active session: July 31, 2026 at 08:42 AM EST from IP <span className="font-mono text-slate-700">192.168.1.***</span> (New York, USA). Unrecognized? Contact Security.
        </p>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-5 border border-slate-200 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">
                Reset Client Account Password
              </h3>
              <button
                onClick={() => {
                  setShowForgotModal(false);
                  setForgotSubmitted(false);
                }}
                className="text-slate-400 hover:text-slate-700 font-bold p-1"
              >
                ✕
              </button>
            </div>

            {forgotSubmitted ? (
              <div className="space-y-3 py-2 text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Password Reset Link Sent
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We have dispatched an encrypted recovery link to <strong className="text-slate-900">{forgotEmail || 'your email'}</strong>. Please check your inbox within 15 minutes.
                </p>
                <button
                  onClick={() => {
                    setShowForgotModal(false);
                    setForgotSubmitted(false);
                  }}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl mt-2 cursor-pointer"
                >
                  Return to Login
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-4 text-xs font-sans">
                <p className="text-slate-600 text-xs leading-relaxed">
                  Enter your registered client email address or account ID. We will send a multi-factor verification code to reset your credentials securely.
                </p>
                <div className="space-y-1">
                  <label className="block font-bold text-slate-700 uppercase font-mono text-[10px]">
                    Registered Client Email
                  </label>
                  <input
                    type="email"
                    required
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="investor@domain.com"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg cursor-pointer"
                  >
                    Send Recovery Code
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
