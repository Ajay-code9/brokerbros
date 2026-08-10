import React from 'react';
import { Check, X, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export const CompareBrokerBrosTable: React.FC<{ onOpenAccount: () => void }> = ({ onOpenAccount }) => {
  const features = [
    {
      label: 'US Stock Commission',
      brokerbros: '$0.00 Fixed / $0.0035 Tiered',
      schwab: '$0.00 Fixed',
      etrade: '$0.00 Fixed',
      fidelity: '$0.00 Fixed',
      neo: '$0.00 Fixed',
      highlight: true,
    },
    {
      label: 'Options Contract Fee',
      brokerbros: '$0.15–$0.50 / contract',
      schwab: '$0.65 / contract',
      etrade: '$0.65 / contract',
      fidelity: '$0.65 / contract',
      neo: '$0.65 / contract',
      highlight: true,
    },
    {
      label: 'Uninvested Cash APY (USD)',
      brokerbros: '4.85% APY (Auto Sweep)',
      schwab: '0.45% APY',
      etrade: '0.45% APY',
      fidelity: '2.72% APY',
      neo: '0.01% APY (w/o sub)',
      highlight: true,
    },
    {
      label: 'Margin Borrow Rate ($100k)',
      brokerbros: '5.83% APY',
      schwab: '11.82% APY',
      etrade: '12.20% APY',
      fidelity: '11.50% APY',
      neo: '11.75% APY',
      highlight: true,
    },
    {
      label: 'Avg Price Improvement (per 100 shs)',
      brokerbros: '$0.48 / 100 shares',
      schwab: '$0.28 / 100 shares',
      etrade: '$0.22 / 100 shares',
      fidelity: '$0.34 / 100 shares',
      neo: 'Internalized (PFOF)',
      highlight: true,
    },
    {
      label: 'FX Currency Conversion Fee',
      brokerbros: '0.02% (2 pips spot)',
      schwab: '1.00%–2.50% markup',
      etrade: '1.50% markup',
      fidelity: '1.00% markup',
      neo: 'Restricted FX',
      highlight: false,
    },
    {
      label: 'Direct Exchange DMA Routing',
      brokerbros: 'Included (150+ venues)',
      schwab: 'Restricted',
      etrade: 'Restricted',
      fidelity: 'Restricted',
      neo: 'No DMA (100% PFOF)',
      highlight: false,
    },
    {
      label: 'Level-2 Real-Time Streaming Data',
      brokerbros: 'Free for Active Accounts',
      schwab: 'Paid / Restricted',
      etrade: 'Paid Surcharge',
      fidelity: 'Paid / Tiered',
      neo: 'Basic Only',
      highlight: false,
    },
    {
      label: 'Monthly Inactivity Fee',
      brokerbros: '$0.00 Always',
      schwab: '$0.00',
      etrade: '$0.00',
      fidelity: '$0.00',
      neo: '$0.00',
      highlight: false,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50/80 border-b border-slate-200 text-slate-900 font-sans relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10 font-sans">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>COMPETITIVE BENCHMARK MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans">
            How BrokerBros Outperforms Legacy Brokers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            See how BrokerBros stacks up against traditional retail brokerages on execution cost, margin rates, and cash yields.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-xl">
          <table className="w-full text-left text-xs font-sans min-w-[700px]">
            <thead>
              <tr className="bg-slate-950 text-white font-mono uppercase tracking-wider text-[11px] border-b border-slate-800">
                <th className="py-4 px-5 font-bold text-white w-1/4">Feature / Pricing Dimension</th>
                <th className="py-4 px-5 text-emerald-400 font-bold bg-slate-900 border-x-2 border-emerald-500 shadow-inner">
                  <div className="flex items-center gap-1.5">
                    <span>BrokerBros Pro</span>
                    <span className="text-[10px] bg-emerald-500 text-slate-950 px-1.5 py-0.5 rounded font-black">TOP CHOICE</span>
                  </div>
                </th>
                <th className="py-4 px-4 font-semibold text-slate-300">Charles Schwab</th>
                <th className="py-4 px-4 font-semibold text-slate-300">E*TRADE / MS</th>
                <th className="py-4 px-4 font-semibold text-slate-300">Fidelity</th>
                <th className="py-4 px-4 font-semibold text-slate-300">Neo-Brokers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {features.map((f, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50/80 transition-colors' : 'bg-slate-50/40 hover:bg-slate-50/90 transition-colors'}>
                  <td className="py-3.5 px-5 font-bold text-slate-900 font-sans">
                    {f.label}
                  </td>
                  <td className="py-3.5 px-5 font-mono font-extrabold text-emerald-700 bg-emerald-50/60 border-x-2 border-emerald-500/80">
                    {f.brokerbros}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-600">{f.schwab}</td>
                  <td className="py-3.5 px-4 font-mono text-slate-600">{f.etrade}</td>
                  <td className="py-3.5 px-4 font-mono text-slate-600">{f.fidelity}</td>
                  <td className="py-3.5 px-4 font-mono text-slate-600">{f.neo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Banner */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-base font-bold text-slate-900">Ready to stop overpaying legacy brokers?</div>
            <div className="text-xs text-slate-600">Transfer existing portfolios seamlessly with up to $150 in ACATS fee reimbursements.</div>
          </div>
          <button
            onClick={onOpenAccount}
            className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <span>Switch to BrokerBros Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
