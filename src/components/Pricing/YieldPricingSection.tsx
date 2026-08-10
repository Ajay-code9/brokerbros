import React from 'react';
import { ShieldCheck, Check, ArrowRight, Layers, Users, Zap } from 'lucide-react';

interface YieldPricingSectionProps {
  onOpenAccount: () => void;
}

export const YieldPricingSection: React.FC<YieldPricingSectionProps> = ({ onOpenAccount }) => {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 font-sans select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Clean Enterprise Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight font-sans">
            Transparent B2B Pricing & Zero Hidden Surcharges
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium font-sans">
            BrokerBros enterprise modules are offered with clear fixed-tier licensing or ultra-low volume models without hidden markup traps. Enjoy predictable operational expenses and maximum profit margins for your brokerage.
          </p>
        </div>

        {/* 3 Clean Enterprise Solution Cards (White Background, Sharp Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {/* Card 1: White-Label CRM */}
          <div className="bg-white p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-950 font-sans">
                  White-Label CRM & Backoffice
                </h3>
                <div className="text-xs font-mono font-bold text-emerald-700 mt-1">
                  FLAT MONTHLY LICENSE
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Complete broker operating system with unlimited client onboarding, multi-tier IB rebate tree calculations, and automated KYC processing.
              </p>

              <div className="pt-2 space-y-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Zero per-trader penalty fees</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Unlimited multi-level IB hierarchies</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Granular compliance audit logs</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-medium block">
                Guarantee: <strong className="text-slate-900 font-semibold">Zero User Capacity Caps</strong>
              </span>
            </div>
          </div>

          {/* Card 2: FIX Liquidity Bridge */}
          <div className="bg-white p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-950 font-sans">
                  FIX 4.4 Liquidity Bridge
                </h3>
                <div className="text-xs font-mono font-bold text-emerald-700 mt-1">
                  ZERO VOLUME SURCHARGE
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Connect directly to Tier-1 prime brokers, bank ECNs, and crypto LPs with sub-3ms latency routing and MT5 server API hooks.
              </p>

              <div className="pt-2 space-y-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Zero volume surcharge up to agreed throughput</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>150+ Tier-1 LPs pre-integrated</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>SmartRouting order aggregation</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-medium block">
                Guarantee: <strong className="text-slate-900 font-semibold">Sub-3ms Execution Latency</strong>
              </span>
            </div>
          </div>

          {/* Card 3: Prop Firm Engine */}
          <div className="bg-white p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-950 font-sans">
                  Prop Firm Evaluation Engine
                </h3>
                <div className="text-xs font-mono font-bold text-emerald-700 mt-1">
                  100% AUTOMATED BREACH ENGINE
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Automated risk engine for funded trader programs. Monitors daily drawdown, max loss, profit targets, and instant account locks.
              </p>

              <div className="pt-2 space-y-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% automated breach detection with zero manual lag</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Configurable 1-Step, 2-Step evaluation rules</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Integrated profit split & payout processing</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-medium block">
                Guarantee: <strong className="text-slate-900 font-semibold">Real-Time Risk Monitoring</strong>
              </span>
            </div>
          </div>

        </div>

        {/* Clean Center Action CTA */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenAccount}
            className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-none transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <span>Request Custom Institutional Quotation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
