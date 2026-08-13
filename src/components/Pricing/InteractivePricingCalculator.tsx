import React, { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const InteractivePricingCalculator: React.FC<{ onOpenAccount: () => void }> = ({ onOpenAccount }) => {
  const [tradesPerMonth, setTradesPerMonth] = useState<number>(30);
  const [avgOrderSize, setAvgOrderSize] = useState<number>(15000);
  const [idleCash, setIdleCash] = useState<number>(80000);
  const [marginLoan, setMarginLoan] = useState<number>(50000);

  // Math Logic
  // 1. Commission Savings
  const competitorAnnualCommission = tradesPerMonth * 12 * 7.50;
  const brokerbrosAnnualCommission = tradesPerMonth * 12 * 1.50;
  const commissionSavings = Math.max(0, Math.round(competitorAnnualCommission - brokerbrosAnnualCommission));

  // 2. Cash Yield Earned
  const brokerbrosCashYield = Math.round(idleCash * 0.0485); // 4.85% APY
  const competitorCashYield = Math.round(idleCash * 0.0045); // 0.45% APY
  const cashYieldAdvantage = Math.round(brokerbrosCashYield - competitorCashYield);

  // 3. Margin Interest Savings
  const competitorMarginCost = Math.round(marginLoan * 0.1180);
  const brokerbrosMarginCost = Math.round(marginLoan * 0.0583);
  const marginSavings = Math.max(0, Math.round(competitorMarginCost - brokerbrosMarginCost));

  // Total Annual Value
  const totalAnnualAdvantage = commissionSavings + cashYieldAdvantage + marginSavings;

  return (
    <section id="pricing-calculator" className="relative py-6 lg:py-10 bg-slate-50/90 dark:bg-[#0E1420] border-b border-slate-200 dark:border-[#1E293B] text-slate-900 dark:text-white font-sans overflow-hidden transition-colors duration-300">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-100/40 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 relative z-10 font-sans w-full">
        
        {/* Section Header - Compact */}
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-[11px] font-mono font-bold uppercase tracking-wider">
            <Calculator className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            <span>INTERACTIVE SAVINGS & YIELD ESTIMATOR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white font-sans">
            Calculate Your Total Annual Savings
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-sans max-w-xl mx-auto">
            Adjust your monthly trading volume, idle portfolio cash, and margin balance to estimate your savings.
          </p>
        </div>

        {/* Calculator Grid - Compact 100vh fit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 bg-white dark:bg-[#141C2B] rounded-2xl border border-slate-200 dark:border-[#1E293B] p-5 shadow-md space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Slider 1: Monthly Trades */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Monthly Trade Volume:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">{tradesPerMonth} trades / month</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={tradesPerMonth}
                  onChange={(e) => setTradesPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-[#1E293B] rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              {/* Slider 2: Average Order Value */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Average Trade Order Value:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">${avgOrderSize.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="2000"
                  value={avgOrderSize}
                  onChange={(e) => setAvgOrderSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-[#1E293B] rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              {/* Slider 3: Uninvested Cash */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Uninvested Cash Balance (4.85% APY):</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">${idleCash.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="500000"
                  step="5000"
                  value={idleCash}
                  onChange={(e) => setIdleCash(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-[#1E293B] rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              {/* Slider 4: Margin Borrow Balance */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Margin Borrow Balance (5.83% APY):</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">${marginLoan.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="300000"
                  step="5000"
                  value={marginLoan}
                />
              </div>

            </div>

            <div className="text-[10px] text-slate-400 border-t border-slate-100 pt-2 font-mono">
              * Calculations compare BrokerBros Pro Tier vs standard rates of major traditional US retail brokerages.
            </div>
          </div>

          {/* Right Column: Dynamic Results Card (Rich Dark Accent Card) */}
          <div className="lg:col-span-5 bg-slate-950 text-white rounded-2xl border border-slate-800 p-5 shadow-xl space-y-4 flex flex-col justify-between relative">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">ESTIMATED ANNUAL VALUE</span>
                  <h3 className="text-lg font-extrabold text-white font-sans">BrokerBros Value Advantage</h3>
                </div>
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>

              {/* Total Callout Box */}
              <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/30 text-center space-y-0.5">
                <span className="text-[10px] text-emerald-300 font-mono font-bold uppercase">YOUR TOTAL ESTIMATED ANNUAL SAVINGS</span>
                <div className="text-3xl font-black font-mono text-emerald-400 tracking-tight">
                  +${totalAnnualAdvantage.toLocaleString()} / yr
                </div>
                <span className="text-[10px] text-slate-300 font-mono">Directly kept in your portfolio balance</span>
              </div>

              {/* Breakdown List */}
              <div className="space-y-2 font-mono text-xs">
                
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-slate-300 text-[11px]">Commission Fee Savings:</span>
                  </div>
                  <span className="font-bold text-emerald-400">+${commissionSavings.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-slate-300 text-[11px]">Cash Interest Earned (4.85%):</span>
                  </div>
                  <span className="font-bold text-emerald-400">+${cashYieldAdvantage.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-slate-300 text-[11px]">Margin Loan Interest Savings:</span>
                  </div>
                  <span className="font-bold text-emerald-400">+${marginSavings.toLocaleString()}</span>
                </div>

              </div>
            </div>

            <button
              onClick={onOpenAccount}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
            >
              <span>Capture Your +${totalAnnualAdvantage.toLocaleString()} Advantage</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
