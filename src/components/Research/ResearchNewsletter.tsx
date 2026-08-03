import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const ResearchNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-slate-900 border-b border-slate-800 font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Background Gradient Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text & Value Props (7 Cols) */}
          <div className="lg:col-span-7 space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold rounded-md border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE DAILY INTEL NEWSLETTER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Morning Market Briefings <br className="hidden sm:inline" />
              Direct to Your Inbox
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed max-w-xl">
              Join over 280,000 active investors receiving our 5-minute pre-market summary before the opening bell every business day. Zero spam. Unsubscribe anytime.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                No Paywalls
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Key Economic Catalysts
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Curated by Wall St Veterans
              </span>
            </div>
          </div>

          {/* Right Form Box (5 Cols) */}
          <div className="lg:col-span-5 relative z-10">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl">
              {isSubscribed ? (
                <div className="text-center py-6 space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold font-serif-heading text-slate-900">
                    You're Subscribed!
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Check your inbox shortly for your first edition of The Daily Intel and exclusive research guides.
                  </p>
                  <button
                    onClick={() => setIsSubscribed(false)}
                    className="text-xs font-bold text-emerald-700 hover:underline pt-2 inline-block cursor-pointer"
                  >
                    Subscribe another email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase font-mono tracking-wider">
                      Work / Personal Email
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="investor@example.com"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 font-sans"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Subscribe Free</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center font-sans">
                    We respect your privacy. Read our <a href="/legal" className="underline hover:text-slate-600">Privacy Policy</a>.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
