import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, TrendingUp, Sparkles, RefreshCw, CheckCircle2, ShieldCheck } from 'lucide-react';

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
    <section id="pricing-calculator" className="relative py-8 lg:py-12 bg-[#06141D] border-b border-emerald-900/40 text-white font-sans min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      
      {/* Mesh Glow Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 lg:space-y-8 relative z-10 font-sans w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-bold uppercase tracking-wider">
            <Calculator className="w-3 h-3 text-emerald-400" />
            <span>INTERACTIVE SAVINGS & YIELD ESTIMATOR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white font-sans">
            Calculate Your Total Annual Savings
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans max-w-xl mx-auto">
            Adjust your monthly trading volume, idle portfolio cash, and margin balance to estimate your total financial advantage with BrokerBros.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 bg-[#0D2231]/90 backdrop-blur-md rounded-3xl border border-emerald-500/30 p-6 sm:p-8 space-y-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              
              {/* Slider 1: Monthly Trades */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-700 font-bold uppercase">1. Monthly Trade Volume</span>
                  <span className="text-emerald-700 font-black text-base">{tradesPerMonth} trades / month</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={200}
                  step={5}
                  value={tradesPerMonth}
                  onChange={(e) => setTradesPerMonth(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>0 trades</span>
                  <span>100 trades</span>
                  <span>200+ trades</span>
                </div>
              </div>

              {/* Slider 2: Average Order Size */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-700 font-bold uppercase">2. Average Trade Order Size</span>
                  <span className="text-emerald-700 font-black text-base">${avgOrderSize.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={100000}
                  step={1000}
                  value={avgOrderSize}
                  onChange={(e) => setAvgOrderSize(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$1,000</span>
                  <span>$50,000</span>
                  <span>$100,000</span>
                </div>
              </div>

              {/* Slider 3: Uninvested Idle Cash */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-700 font-bold uppercase">3. Uninvested Idle USD Cash</span>
                  <span className="text-emerald-700 font-black text-base">${idleCash.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={500000}
                  step={5000}
                  value={idleCash}
                  onChange={(e) => setIdleCash(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$0</span>
                  <span>$250,000</span>
                  <span>$500,000</span>
                </div>
              </div>

              {/* Slider 4: Margin Loan Balance */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-700 font-bold uppercase">4. Margin Loan Balance</span>
                  <span className="text-emerald-700 font-black text-base">${marginLoan.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={250000}
                  step={5000}
                  value={marginLoan}
                  onChange={(e) => setMarginLoan(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$0</span>
                  <span>$100,000</span>
                  <span>$250,000</span>
                </div>
              </div>

            </div>

            <div className="text-[11px] text-slate-500 border-t border-slate-100 pt-4 font-mono">
              * Calculations compare BrokerBros Pro Tier vs standard rates of major traditional US retail brokerages.
            </div>
          </div>

          {/* Right Column: Dynamic Results Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-emerald-300 p-6 sm:p-8 shadow-sm space-y-6 flex flex-col justify-between relative">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wider">ESTIMATED ANNUAL VALUE</span>
                  <h3 className="text-xl font-bold text-slate-900 font-serif-heading">BrokerBros Value Advantage</h3>
                </div>
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>

              {/* Total Callout Box */}
              <div className="bg-emerald-50/80 p-5 rounded-xl border border-emerald-200 text-center space-y-1">
                <span className="text-xs text-slate-600 font-mono font-bold">YOUR TOTAL ESTIMATED ANNUAL SAVINGS</span>
                <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-800 tracking-tight">
                  +${totalAnnualAdvantage.toLocaleString()} / yr
                </div>
                <span className="text-[11px] text-emerald-800 font-mono font-semibold">Directly kept in your portfolio balance</span>
              </div>

              {/* Breakdown List */}
              <div className="space-y-3 font-mono text-xs">
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-slate-700">Commission Fee Savings:</span>
                  </div>
                  <span className="font-bold text-emerald-800">+${commissionSavings.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-slate-700">Cash Interest Earned (4.85%):</span>
                  </div>
                  <span className="font-bold text-emerald-800">+${cashYieldAdvantage.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-slate-700">Margin Loan Interest Savings:</span>
                  </div>
                  <span className="font-bold text-emerald-800">+${marginSavings.toLocaleString()}</span>
                </div>

              </div>
            </div>

            <button
              onClick={onOpenAccount}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
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

