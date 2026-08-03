import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Globe, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  AlertCircle,
  Eye,
  EyeOff,
  Check,
  ChevronDown
} from 'lucide-react';

interface OpenAccountFormProps {
  currentStep: number;
  onStepChange: (step: number) => void;
  onLoginRedirect: () => void;
}

export const OpenAccountForm: React.FC<OpenAccountFormProps> = ({
  currentStep,
  onStepChange,
  onLoginRedirect
}) => {
  // Step 1 Form State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('United States');
  const [accountType, setAccountType] = useState<'Individual' | 'Joint' | 'Institutional' | 'Trust'>('Individual');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Checkboxes
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeRisk, setAgreeRisk] = useState(false);

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Calculate password strength
  const getPasswordRequirements = () => {
    return {
      length: password.length >= 8,
      number: /\d/.test(password),
      uppercase: /[A-Z]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  };

  const reqs = getPasswordRequirements();
  const passedReqs = Object.values(reqs).filter(Boolean).length;

  const passwordsMatch = password.length > 0 && confirmPassword.length > 0 && password === confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms || !agreePrivacy || !agreeRisk) {
      alert('Please accept all required agreements to proceed.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsCompleted(true);
    }, 1200);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 font-sans max-w-4xl mx-auto space-y-8">
      
      {isCompleted ? (
        <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-600/20">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              REGISTRATION SUBMITTED
            </span>
            <h3 className="text-3xl font-serif-heading font-bold text-slate-900">
              Welcome to BrokerBros!
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Your preliminary application for a <strong className="text-slate-900">{accountType} Account</strong> has been initiated. A temporary verification token has been sent to <strong className="text-slate-900">{email || 'your email'}</strong>.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl max-w-sm mx-auto text-xs font-mono space-y-1 text-slate-700">
            <div className="text-slate-400">APPLICATION REFERENCE ID:</div>
            <div className="text-base font-bold text-emerald-700">BB-REG-2026-98412</div>
            <div className="text-[11px] text-slate-500 pt-1">
              Encrypted SSL Session Token • FINRA / SEC Compliance
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onLoginRedirect}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enter Paper Trading Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsCompleted(false)}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl transition-all cursor-pointer"
            >
              Modify Application
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Step Guidance Header */}
          <div className="border-b border-slate-100 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block">
                STEP {currentStep} OF 4 • ACCOUNT SETUP
              </span>
              <h2 className="text-2xl font-serif-heading font-semibold text-slate-900 mt-1">
                {currentStep === 1 && 'Personal Information & Credentials'}
                {currentStep === 2 && 'Identity Verification (KYC / AML)'}
                {currentStep === 3 && 'Financial Profile & Trading Experience'}
                {currentStep === 4 && 'Review & Electronic Signature'}
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>256-BIT ENCRYPTED</span>
            </div>
          </div>

          {/* Conditional Form Body based on currentStep */}
          {currentStep === 1 ? (
            <div className="space-y-6">
              
              {/* Account Type Selection Grid */}
              <div className="space-y-3">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  Select Desired Account Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      id: 'Individual',
                      title: 'Individual Account',
                      desc: 'Single owner for equity, options, & futures trading.',
                      badge: 'Most Popular'
                    },
                    {
                      id: 'Joint',
                      title: 'Joint Account',
                      desc: 'Co-owned by two or more partners with survivorship rights.',
                      badge: 'Shared Wealth'
                    },
                    {
                      id: 'Institutional',
                      title: 'Corporate / Institutional',
                      desc: 'For LLCs, hedge funds, family offices, & RIAs.',
                      badge: 'Institutional'
                    },
                    {
                      id: 'Trust',
                      title: 'Trust & Retirement',
                      desc: 'Fiduciary accounts, IRAs, & estate asset management.',
                      badge: 'Tax Advantage'
                    }
                  ].map((item) => {
                    const isSelected = accountType === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setAccountType(item.id as any)}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/20 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold text-slate-900 font-sans">
                              {item.title}
                            </h4>
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                              isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-sans">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name Fields Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                    First Name (as on Legal ID)
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="e.g. Alexander"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-sans focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                    Last Name (as on Legal ID)
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="e.g. Vance"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-sans focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                    Primary Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alexander@domain.com"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-sans focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                    Mobile Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs font-mono font-bold focus:outline-none focus:border-emerald-600"
                    >
                      <option value="+1">🇺🇸 +1 (US)</option>
                      <option value="+44">🇬🇧 +44 (UK)</option>
                      <option value="+65">🇸🇬 +65 (SG)</option>
                      <option value="+49">🇩🇪 +49 (DE)</option>
                      <option value="+61">🇦🇺 +61 (AU)</option>
                      <option value="+91">🇮🇳 +91 (IN)</option>
                      <option value="+1-CA">🇨🇦 +1 (CA)</option>
                    </select>

                    <div className="relative flex-1">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="(555) 000-0000"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-sans focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Country of Residence */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  Country of Tax Residence
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-sans focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 appearance-none cursor-pointer"
                  >
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Germany">Germany</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Japan">Japan</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Password & Confirm Password Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                    Create Security Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••••••"
                      className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-sans focus:outline-none focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all"
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

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                      Confirm Password
                    </label>
                    {confirmPassword && (
                      <span className={`text-[10px] font-mono font-bold ${passwordsMatch ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {passwordsMatch ? '✓ Passwords Match' : '✗ Passwords Do Not Match'}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••••••••••"
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-900 text-sm font-sans focus:outline-none focus:bg-white transition-all ${
                        confirmPassword && !passwordsMatch
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                          : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Password Strength Checklist */}
              {password && (
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 font-bold">PASSWORD STRENGTH:</span>
                    <span className={`font-bold uppercase ${
                      passedReqs <= 2 ? 'text-rose-600' : passedReqs === 3 ? 'text-amber-600' : 'text-emerald-600'
                    }`}>
                      {passedReqs <= 2 ? 'Weak' : passedReqs === 3 ? 'Medium' : 'Institutional Grade'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                    <span className={`flex items-center gap-1 ${reqs.length ? 'text-emerald-700 font-bold' : 'text-slate-400'}`}>
                      {reqs.length ? '✓' : '○'} 8+ Characters
                    </span>
                    <span className={`flex items-center gap-1 ${reqs.number ? 'text-emerald-700 font-bold' : 'text-slate-400'}`}>
                      {reqs.number ? '✓' : '○'} Contains Number
                    </span>
                    <span className={`flex items-center gap-1 ${reqs.uppercase ? 'text-emerald-700 font-bold' : 'text-slate-400'}`}>
                      {reqs.uppercase ? '✓' : '○'} Uppercase Letter
                    </span>
                    <span className={`flex items-center gap-1 ${reqs.special ? 'text-emerald-700 font-bold' : 'text-slate-400'}`}>
                      {reqs.special ? '✓' : '○'} Special Character
                    </span>
                  </div>
                </div>
              )}

              {/* Legal Checkboxes */}
              <div className="space-y-3 pt-2 font-sans text-xs">
                <label className="flex items-start gap-3 cursor-pointer text-slate-700">
                  <input
                    type="checkbox"
                    required
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 shrink-0"
                  />
                  <span>
                    I agree to the <a href="/legal" className="text-emerald-700 font-bold hover:underline">BrokerBros Customer Agreement</a> and electronic disclosure authorization.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer text-slate-700">
                  <input
                    type="checkbox"
                    required
                    checked={agreePrivacy}
                    onChange={(e) => setAgreePrivacy(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 shrink-0"
                  />
                  <span>
                    I consent to the <a href="/privacy-policy" className="text-emerald-700 font-bold hover:underline">Global Privacy Policy</a> for electronic identity verification.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer text-slate-700">
                  <input
                    type="checkbox"
                    required
                    checked={agreeRisk}
                    onChange={(e) => setAgreeRisk(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 shrink-0"
                  />
                  <span>
                    I acknowledge receipt of the <a href="/security" className="text-emerald-700 font-bold hover:underline">FINRA / SEC Risk Disclosure Statement</a> regarding securities trading.
                  </span>
                </label>
              </div>

            </div>
          ) : (
            /* Placeholder previews for Steps 2, 3, and 4 */
            <div className="py-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-4 font-sans">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">
                {currentStep === 2 && 'Step 2: Identity Verification (KYC / Passport Scan)'}
                {currentStep === 3 && 'Step 3: Financial Details & Base Currency'}
                {currentStep === 4 && 'Step 4: Final Review & Electronic Signature'}
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                This section will automatically un-lock after submitting Step 1 personal information. You can return to Step 1 to complete your profile registration.
              </p>
              <button
                type="button"
                onClick={() => onStepChange(1)}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl cursor-pointer"
              >
                Return to Step 1 Personal Info
              </button>
            </div>
          )}

          {/* Form Action CTAs */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <button
                type="button"
                onClick={onLoginRedirect}
                className="text-xs font-sans text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Already have an account? <strong className="text-emerald-700 hover:underline">Log In →</strong>
              </button>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => onStepChange(currentStep - 1)}
                  className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl cursor-pointer"
                >
                  Back
                </button>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 group"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Registration...</span>
                  </div>
                ) : (
                  <>
                    <span>Create My Account</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>

        </form>
      )}

    </div>
  );
};
