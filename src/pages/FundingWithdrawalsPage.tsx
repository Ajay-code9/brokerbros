import React from 'react';
import { Wallet, ShieldCheck, CheckCircle, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const FundingWithdrawalsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const methods = [
    { name: "Instant ACH Transfer", depositTime: "Instant (up to $50k/day)", fee: "$0.00", limit: "$100,000 / day" },
    { name: "FedWire & SWIFT Wire", depositTime: "Same Day / 1 Business Day", fee: "$0.00 BrokerBros Fee", limit: "Unlimited" },
    { name: "Direct ACATS Account Transfer", depositTime: "3 - 5 Business Days", fee: "$0.00 (Reimburse transfer fees up to $150)", limit: "Unlimited" },
    { name: "Multi-Currency Spot FX Conversion", depositTime: "Instant Execution", fee: "0.08 - 0.20 bps above interbank", limit: "26 Settled Currencies" }
  ];

  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <Wallet className="w-3.5 h-3.5 text-emerald-600" />
            FUNDING & WITHDRAWALS DESK
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            Seamless Deposit & Multi-Currency Capital Mobility
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Zero deposit fees, instant ACH buying power, free wire transfers, and automated recurring deposits in 26 settled currencies.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold font-serif-heading text-slate-900">Funding Options & Transfer Limits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methods.map((m, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-3">
                <h3 className="text-2xl font-bold font-serif-heading text-slate-900">{m.name}</h3>
                <div className="space-y-1 text-xs font-mono text-slate-600 pt-2 border-t border-slate-100">
                  <div>Processing Speed: <span className="font-bold text-slate-900">{m.depositTime}</span></div>
                  <div>Broker Fee: <span className="font-bold text-emerald-700">{m.fee}</span></div>
                  <div>Daily Transfer Limit: <span className="font-bold text-slate-900">{m.limit}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="light" onOpenAccount={onOpenAccount} />
    </div>
  );
};
