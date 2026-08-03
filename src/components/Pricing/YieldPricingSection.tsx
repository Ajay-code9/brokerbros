import React, { useState } from 'react';
import { DollarSign, Percent, TrendingUp, CheckCircle, ShieldCheck, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';

interface YieldPricingSectionProps {
  onOpenAccount: () => void;
}

export const YieldPricingSection: React.FC<YieldPricingSectionProps> = ({ onOpenAccount }) => {
  const [cashBalance, setCashBalance] = useState<number>(100000);

  // Interest calculation logic
  const APY = 0.0485; // 4.85%
  const BROKERBROS_ANNUAL = Math.round(cashBalance * APY);
  const COMPETITOR_AVG_APY = 0.0045; // 0.45%
  const COMPETITOR_ANNUAL = Math.round(cashBalance * COMPETITOR_AVG_APY);
  const EXTRA_EARNINGS = BROKERBROS_ANNUAL - COMPETITOR_ANNUAL;

  return (
    <section id="pricing" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Section Header (Matching img2 Design Exactly) */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12 pb-10">

          {/* Left Block: Green Vertical Bar + Badge + Headline with Green 'For You' */}
          <div className="flex items-stretch gap-4 lg:gap-6 max-w-xl">
            {/* Green Vertical Bar (Matching img2) */}
            <div className="flex flex-col items-center shrink-0">
              <div className="w-[3px] h-6 bg-emerald-500/40 rounded-full mb-2" />
              <div className="w-[3px] flex-1 bg-emerald-500 rounded-full" />
            </div>

            <div className="space-y-3">
              {/* High-Density Status Ticker Bar */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white font-mono text-[11px] border border-slate-800 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-400 font-bold tracking-wider">4.85% APY YIELD</span>
                <span className="text-slate-700">|</span>
                <span className="text-slate-300 font-bold">5.83% MARGIN RATE</span>
              </div>

              {/* Headline with 'For You' in green (Matching img2) */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-slate-950 font-sans leading-[1.12]">
                Keep More Capital Working <span className="text-emerald-500">For You</span>
              </h2>
            </div>
          </div>

          {/* Center Vertical Divider (Matching img2) */}
          <div className="hidden lg:block w-[1px] bg-slate-200 shrink-0 self-stretch my-1" />

          {/* Right Block: Paragraph + 3 Feature Icon Pills (Matching img2) */}
          <div className="space-y-6 max-w-lg flex flex-col justify-between">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-medium">
              Transparent platform pricing, zero account maintenance fees, and industry-leading interest paid on uninvested cash.
            </p>

            {/* 3 Icon Feature Pills (Matching img2) */}
            <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-100">
              {/* Feature 1 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900 leading-tight">
                  Transparent<br />Pricing
                </div>
              </div>

              <div className="w-[1px] h-6 bg-slate-200 shrink-0" />

              {/* Feature 2 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900 leading-tight">
                  Zero Base<br />Fees
                </div>
              </div>

              <div className="w-[1px] h-6 bg-slate-200 shrink-0" />

              {/* Feature 3 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900 leading-tight">
                  Industry-Leading<br />Interest
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 2-Column: Key Features + Interactive Yield Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Pricing Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-serif-heading font-semibold text-slate-900">
              Experience Professional Transparent Pricing
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Zero Added Spreads or Ticket Fees</div>
                  <div className="text-xs text-slate-600 mt-1">
                    Pay transparent tiered rates ($0.00 to $0.005/share) with direct exchange pass-through pricing and zero custody fees.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Earn Up to 4.85% APY Interest on Cash</div>
                  <div className="text-xs text-slate-600 mt-1">
                    Uninvested cash automatically earns benchmark interest calculated daily and paid out monthly with no minimum lockups.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Lowest Margin Borrowing Rates in Industry</div>
                  <div className="text-xs text-slate-600 mt-1">
                    Margin loans start from 5.83% APY — save thousands compared to traditional retail brokers charging 12%+ APY.
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenAccount}
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              Open Account & Start Earning Yield
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Interactive Yield Calculator */}
          <div className="lg:col-span-6 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">
                  INTERACTIVE YIELD CALCULATOR
                </span>
                <h4 className="text-xl font-bold text-white font-sans mt-0.5">
                  Uninvested USD Cash Yield
                </h4>
              </div>
              <span className="text-2xl font-black text-emerald-400 font-mono">4.85% APY</span>
            </div>

            {/* Cash Balance Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">Your Uninvested Cash Balance:</span>
                <span className="text-xl font-black text-emerald-400 font-mono">
                  ${cashBalance.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min={10000}
                max={1000000}
                step={10000}
                value={cashBalance}
                onChange={(e) => setCashBalance(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>$10,000</span>
                <span>$500,000</span>
                <span>$1,000,000</span>
              </div>
            </div>

            {/* Comparison Visual Box */}
            <div className="space-y-3 bg-slate-950 p-5 rounded-xl border border-slate-800">
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>BrokerBros (4.85% APY):</span>
                  <span className="text-base font-black text-emerald-400 font-mono">
                    +${BROKERBROS_ANNUAL.toLocaleString()} / yr
                  </span>
                </div>
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Typical Major Broker (0.45% APY):</span>
                  <span className="text-xs font-bold text-slate-400 font-mono">
                    +${COMPETITOR_ANNUAL.toLocaleString()} / yr
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-slate-600 rounded-full"
                    style={{ width: `${Math.max(8, (COMPETITOR_ANNUAL / BROKERBROS_ANNUAL) * 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-300 font-bold">Your Extra Cash Profit with BrokerBros:</span>
                <span className="text-base font-black text-emerald-400 font-mono">
                  +${EXTRA_EARNINGS.toLocaleString()} / year
                </span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 leading-relaxed font-sans">
              * Interest paid on liquid uninvested cash balance exceeding $10,000 USD. Calculated daily, credited monthly. Rates subject to central bank benchmark adjustments.
            </div>
          </div>

        </div>

        {/* Margin Rate Comparison Table */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="text-xl font-extrabold text-slate-900 font-sans">
              Industry Margin Loan Rate Benchmark
            </h3>
            <p className="text-xs text-slate-600">
              Compare margin interest rates on a $100,000 USD margin loan balance.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-slate-300 text-slate-500 uppercase tracking-wider font-mono">
                  <th className="py-3 px-4">Brokerage Firm</th>
                  <th className="py-3 px-4">Margin Rate ($100k Loan)</th>
                  <th className="py-3 px-4">Annual Interest Cost</th>
                  <th className="py-3 px-4">Annual Savings w/ BrokerBros</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-emerald-50/80 font-bold text-slate-900">
                  <td className="py-3.5 px-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                    BrokerBros (Pro Tier)
                  </td>
                  <td className="py-3.5 px-4 font-mono text-emerald-700 font-black">5.83% APY</td>
                  <td className="py-3.5 px-4 font-mono text-slate-900">$5,830</td>
                  <td className="py-3.5 px-4 font-mono text-emerald-700 font-black">BASE LEVEL</td>
                </tr>
                <tr className="text-slate-700">
                  <td className="py-3.5 px-4 font-medium">E*TRADE / Morgan Stanley</td>
                  <td className="py-3.5 px-4 font-mono">12.20% APY</td>
                  <td className="py-3.5 px-4 font-mono">$12,200</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-700">Save $6,370 / yr</td>
                </tr>
                <tr className="text-slate-700">
                  <td className="py-3.5 px-4 font-medium">Charles Schwab</td>
                  <td className="py-3.5 px-4 font-mono">11.82% APY</td>
                  <td className="py-3.5 px-4 font-mono">$11,820</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-700">Save $5,990 / yr</td>
                </tr>
                <tr className="text-slate-700">
                  <td className="py-3.5 px-4 font-medium">Fidelity Investments</td>
                  <td className="py-3.5 px-4 font-mono">11.50% APY</td>
                  <td className="py-3.5 px-4 font-mono">$11,500</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-700">Save $5,670 / yr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
