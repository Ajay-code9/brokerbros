import React, { useState } from 'react';
import { Sparkles, ShieldCheck, DollarSign, Calendar, TrendingUp, Clock, ArrowRight, Lock, Percent, Scale, Check } from 'lucide-react';

export const CashYieldSection: React.FC<{ onOpenAccount: () => void }> = ({ onOpenAccount }) => {
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP' | 'SGD'>('USD');
  const [balance, setBalance] = useState<number>(150000);

  const yieldMap = {
    USD: { rate: 0.0485, symbol: '$', rateText: '4.85% APY', benchmark: 'Fed Funds Rate Pass-Through' },
    EUR: { rate: 0.0325, symbol: '€', rateText: '3.25% APY', benchmark: 'ECB Deposit Rate Pass-Through' },
    GBP: { rate: 0.0450, symbol: '£', rateText: '4.50% APY', benchmark: 'Bank of England Base Rate' },
    SGD: { rate: 0.0365, symbol: 'S$', rateText: '3.65% APY', benchmark: 'MAS Benchmark Rate' },
  };

  const activeYield = yieldMap[currency];
  const annualEarnings = Math.round(balance * activeYield.rate);
  const monthlyEarnings = Math.round(annualEarnings / 12);
  const dailyEarnings = (annualEarnings / 365).toFixed(2);

  // Competitor standard rate 0.45%
  const competitorAnnual = Math.round(balance * 0.0045);
  const extraGain = annualEarnings - competitorAnnual;

  return (
    <section className="py-8 lg:py-12 bg-slate-50/80 border-b border-slate-200 text-slate-900 font-sans relative overflow-hidden">
      
      {/* Mesh Glow Accent */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>INSTITUTIONAL CASH SWEEP ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-sans tracking-tight">
            Interest Rates & Idle Cash Yield
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            Automatically earn benchmark interest on uninvested cash or access industry-leading wholesale margin borrowing rates with daily interest accrual and monthly distributions.
          </p>
        </div>

        {/* Generated Digital Cash Vault Banner Card */}
        <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl h-56 sm:h-64 group">
          <img
            src="/pricing_cash_vault.webp"
            alt="Cash Vault Yield"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06141D] via-[#06141D]/70 to-transparent" />
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-center max-w-xl space-y-3">
            <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/90 px-3 py-1 rounded-md border border-cyan-700/60 w-max">
              CENTRAL BANK PASS-THROUGH YIELD
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-sans">
              4.85% APY High-Yield Auto Cash Sweep
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans line-clamp-2">
              Uninvested balances are automatically swept to insured FDIC program banks, generating daily interest calculations with zero lockups.
            </p>
          </div>
        </div>

        {/* Currency Tabs & Interactive Yield Engine Container */}
        <div className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Controls */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Currency Selector */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider">
                1. SELECT CURRENCY
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(['USD', 'EUR', 'GBP', 'SGD'] as const).map((cur) => (
                  <button
                    key={cur}
                    onClick={() => setCurrency(cur)}
                    className={`py-2.5 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
                      currency === cur
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cur} ({yieldMap[cur].rateText})
                  </button>
                ))}
              </div>
            </div>

            {/* Slider */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider">
                  2. UNINVESTED CASH BALANCE
                </span>
                <span className="text-2xl font-black font-mono text-emerald-700">
                  {activeYield.symbol}{balance.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min={10000}
                max={1000000}
                step={10000}
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>{activeYield.symbol}10,000</span>
                <span>{activeYield.symbol}500,000</span>
                <span>{activeYield.symbol}1,000,000</span>
              </div>
            </div>

            {/* Program Mechanics Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Daily Accrual, Monthly Payment</div>
                  <div className="text-xs text-slate-600">
                    Interest accrues every midnight based on settled cash balance and pays automatically on the 1st of each month.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <Lock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Zero Lockups or Minimum Term</div>
                  <div className="text-xs text-slate-600">
                    100% liquid cash. Use your funds to trade instantly or withdraw anytime without penalty or delay.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Up to $2.5 Million FDIC Insurance</div>
                  <div className="text-xs text-slate-600">
                    Program cash is swept into a network of FDIC-insured partner banks, expanding coverage up to $2,500,000 per account.
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenAccount}
              className="w-full sm:w-auto px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Earning {activeYield.rateText} Yield</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

          {/* Right Visual Earnings Display Card */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">CASH SWEEP YIELD</span>
                <div className="text-3xl font-black font-mono text-emerald-700">{activeYield.rateText}</div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">BENCHMARK PASS-THROUGH</span>
                <div className="text-xs text-slate-700 font-mono font-semibold">{activeYield.benchmark}</div>
              </div>
            </div>

            {/* Projected Earnings Grid */}
            <div className="grid grid-cols-3 gap-3 font-mono text-center">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <div className="text-[10px] text-slate-500 font-bold">DAILY ACCRUAL</div>
                <div className="text-sm sm:text-base font-bold text-emerald-700 mt-1">
                  +{activeYield.symbol}{dailyEarnings}
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <div className="text-[10px] text-slate-500 font-bold">MONTHLY PAYOUT</div>
                <div className="text-sm sm:text-base font-bold text-emerald-700 mt-1">
                  +{activeYield.symbol}{monthlyEarnings.toLocaleString()}
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <div className="text-[10px] text-slate-500 font-bold">ANNUAL YIELD</div>
                <div className="text-sm sm:text-base font-bold text-emerald-700 mt-1">
                  +{activeYield.symbol}{annualEarnings.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Visual Comparison Bar Chart Box */}
            <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80 font-mono text-xs">
              <div className="flex justify-between items-center text-slate-800">
                <span className="font-bold">BrokerBros ({activeYield.rateText}):</span>
                <span className="text-emerald-700 font-bold">+{activeYield.symbol}{annualEarnings.toLocaleString()} / yr</span>
              </div>
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-full rounded-full w-full"></div>
              </div>

              <div className="flex justify-between items-center text-slate-500 pt-1">
                <span>Standard Retail Broker (0.45% APY):</span>
                <span>+{activeYield.symbol}{competitorAnnual.toLocaleString()} / yr</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-slate-400 h-full rounded-full"
                  style={{ width: `${Math.max(8, (competitorAnnual / annualEarnings) * 100)}%` }}
                ></div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex justify-between items-center text-xs">
                <span className="text-slate-900 font-bold">Net Annual Yield Advantage:</span>
                <span className="text-emerald-700 font-black text-sm">+{activeYield.symbol}{extraGain.toLocaleString()} / yr</span>
              </div>
            </div>

            {/* Wholesale Margin Rates Highlight */}
            <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200/80 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-bold text-emerald-950 flex items-center gap-1.5 font-mono">
                  <Scale className="w-4 h-4 text-emerald-700" /> WHOLESALE MARGIN BORROW RATES
                </span>
                <span className="font-mono font-bold text-emerald-800 bg-emerald-200/60 px-2 py-0.5 rounded text-[11px]">
                  5.83% - 6.83% APY
                </span>
              </div>
              <p className="text-slate-700 text-xs leading-relaxed font-sans">
                Borrow against your portfolio at benchmark + 0.50% to 1.50% tiering. Standard retail brokers charge up to 13.50% APY. Save up to $7,670/year per $100k margin balance.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

