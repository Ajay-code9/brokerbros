import React from 'react';
import { 
  ShieldCheck, 
  Globe, 
  Lock, 
  Zap, 
  Headphones, 
  Building2, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

export const AuthTrustSection: React.FC = () => {
  const trustCards = [
    {
      icon: ShieldCheck,
      title: 'Protected Client Assets',
      description: 'SIPC member protection up to $500,000 per account (including $250,000 cash claims) plus Lloyd\'s excess SIPC policy up to $150M.',
      badge: 'SIPC Member'
    },
    {
      icon: Globe,
      title: 'Global Market Access',
      description: 'Direct market execution across 150+ international exchanges in 33 countries with multi-currency cash settlement.',
      badge: '150+ Exchanges'
    },
    {
      icon: Lock,
      title: 'Institutional Grade Security',
      description: 'SOC2 Type II compliant data centers, YubiKey hardware key support, biometrics, & 256-bit TLS 1.3 end-to-end encryption.',
      badge: 'SOC2 Type II'
    },
    {
      icon: Zap,
      title: 'Fast Digital Onboarding',
      description: 'Paperless 100% digital onboarding with automated FINRA identity checks and instant bank linking via ACH / Wire.',
      badge: '< 3 Mins'
    },
    {
      icon: Headphones,
      title: 'Responsive Support',
      description: '24/5 dedicated institutional client support desk with average response times under 15 seconds.',
      badge: '24/5 Live Desk'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-mono font-bold rounded-full border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>UNCOMPROMISED PROTECTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900 tracking-tight">
            Institutional Trust & Capital Safeguards
          </h2>

          <p className="text-slate-600 text-sm font-sans leading-relaxed">
            BrokerBros provides world-class financial infrastructure designed to protect investor assets and deliver high-speed execution.
          </p>
        </div>

        {/* 5 Trust Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustCards.map((card, idx) => {
            const IconComp = card.icon;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 hover:border-emerald-500 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif-heading text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
