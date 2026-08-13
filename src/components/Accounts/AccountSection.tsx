import React, { useState } from 'react';
import { ACCOUNT_TYPES } from '../../data/mockData';
import { User, Users, Shield, Building2, Briefcase, ArrowRight, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';

interface AccountSectionProps {
  onOpenAccount: () => void;
}

export const AccountSection: React.FC<AccountSectionProps> = ({ onOpenAccount }) => {
  const [selectedAccountId, setSelectedAccountId] = useState<string>(ACCOUNT_TYPES[0].id);
  const selectedAccount = ACCOUNT_TYPES.find(a => a.id === selectedAccountId) || ACCOUNT_TYPES[0];

  return (
    <section className="py-12 lg:py-16 bg-[#F8FAFC] dark:bg-[#0E1420] border-b border-slate-200/80 dark:border-[#1E293B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-[#1E293B] pb-5">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-500/30">
              <User className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>MODULAR BROKERAGE INFRASTRUCTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
              Configured for Your Brokerage Business Model
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md font-sans">
            From White-Label Retail Brokers to Prop Firms and Multi-Tier IB Networks — select the infrastructure stack that matches your target market and go live in days.
          </p>
        </div>

        {/* Account Type Cards Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACCOUNT_TYPES.map((account, idx) => {
            const isSelected = account.id === selectedAccountId;
            return (
              <div
                key={account.id}
                onClick={() => setSelectedAccountId(account.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 dark:bg-[#141C2B] text-white border-emerald-500/80 shadow-xl shadow-slate-900/10 ring-1 ring-emerald-500/30'
                    : 'bg-white dark:bg-[#141C2B] text-slate-900 dark:text-slate-100 border-slate-200/80 dark:border-[#1E293B] hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
                    }`}>
                      0{idx + 1}
                    </span>
                    {account.badge && (
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                        isSelected
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-extrabold'
                          : 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30'
                      }`}>
                        {account.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className={`text-base font-bold font-sans ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{account.title}</h3>
                    <div className={`text-[11px] font-mono mt-0.5 ${isSelected ? 'text-emerald-400' : 'text-slate-500 dark:text-slate-400'}`}>{account.subtitle}</div>
                  </div>

                  <p className={`text-[11px] leading-relaxed font-sans ${isSelected ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>
                    {account.description}
                  </p>

                  <div className={`space-y-1.5 pt-2.5 border-t text-[11px] font-sans ${isSelected ? 'border-slate-800 text-slate-300' : 'border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300'}`}>
                    {account.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start gap-1.5">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isSelected ? 'text-emerald-400' : 'text-emerald-600 dark:text-emerald-400'}`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`pt-3.5 mt-3.5 border-t flex items-center justify-between ${isSelected ? 'border-slate-800' : 'border-slate-100 dark:border-slate-800'}`}>
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-emerald-400' : 'text-slate-900 dark:text-white'}`}>{account.minDeposit}</span>
                  <button
                    onClick={onOpenAccount}
                    className={`text-xs font-bold flex items-center gap-1 cursor-pointer group ${
                      isSelected ? 'text-white hover:text-emerald-400' : 'text-emerald-700 dark:text-emerald-400 hover:text-emerald-800'
                    }`}
                  >
                    <span>Configure</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3-Step Digital Onboarding Banner (Interactive Animated Timeline) */}
        <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 space-y-8 shadow-2xl overflow-hidden group">
          
          {/* Subtle Dynamic Ambient Lighting Effects */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-700"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none"></div>

          <div className="relative z-10 text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>TURNKEY BROKERAGE DEPLOYMENT WORKFLOW</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
              Live Brokerage Launch in 3 Steps
            </h3>
          </div>

          {/* Interactive Connected Steps Progress Pipeline */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-2">
            
            {/* Step 1 */}
            <div className="relative space-y-4 bg-slate-900/90 p-6 rounded-xl border border-slate-800/80 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group/card">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-black flex items-center justify-center text-sm shadow-inner group-hover/card:bg-emerald-500 group-hover/card:text-slate-950 transition-colors duration-300">
                  01
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400/80 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                  Step 1 • 1 Day
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-sans group-hover/card:text-emerald-400 transition-colors">Select Infrastructure Modules</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mt-1.5">
                  Choose your brokerage stack: CRM, Prop Engine, Webtrader, Mobile App, FIX LP Bridge, Copy Trading, and more from 14 available modules.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>14 Enterprise Modules Available</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative space-y-4 bg-slate-900/90 p-6 rounded-xl border border-slate-800/80 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group/card">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-black flex items-center justify-center text-sm shadow-inner group-hover/card:bg-emerald-500 group-hover/card:text-slate-950 transition-colors duration-300">
                  02
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400/80 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                  Step 2 • 1–2 Days
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-sans group-hover/card:text-emerald-400 transition-colors">Custom Branding & API Configuration</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mt-1.5">
                  Upload your logo, brand colors, and domain. We configure MT5 server hooks, FIX LP sessions, and all API credentials to your specification.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero-Code White-Label Branding Engine</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative space-y-4 bg-slate-900/90 p-6 rounded-xl border border-slate-800/80 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group/card">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-black flex items-center justify-center text-sm shadow-inner group-hover/card:bg-emerald-500 group-hover/card:text-slate-950 transition-colors duration-300">
                  03
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400/80 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                  Step 3 • Live
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-sans group-hover/card:text-emerald-400 transition-colors">Go Live & Onboard Your First Clients</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mt-1.5">
                  Your branded brokerage portal, mobile apps, and admin backoffice are live. Begin client onboarding with built-in KYC and AML compliance flows.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>99.99% Uptime SLA Guaranteed</span>
              </div>
            </div>

          </div>

          <div className="relative z-10 text-center pt-2">
            <button
              onClick={onOpenAccount}
              className="px-8 py-3.5 bg-[#22C55E] hover:bg-emerald-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-xl shadow-emerald-500/20 transition-all cursor-pointer inline-flex items-center gap-2 group/btn"
            >
              <span>Request a Live Demo & Module Quotation</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

