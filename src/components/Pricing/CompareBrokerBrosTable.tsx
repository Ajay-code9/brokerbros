import React from 'react';
import { Check, X, ShieldCheck, Sparkles } from 'lucide-react';

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
      neo: '0.01% APY (w/o paid sub)',
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
    <section className="py-16 lg:py-24 bg-[#091824] border-b border-emerald-900/40 text-white font-sans relative overflow-hidden">
      
      {/* Mesh Glow Accent */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10 font-sans">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>COMPETITIVE BENCHMARK MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
            How BrokerBros Outperforms Legacy Brokers
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            See how BrokerBros stacks up against traditional retail brokerages and legacy platforms on execution cost and cash yields.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="overflow-x-auto bg-[#0D2231]/90 backdrop-blur-md rounded-3xl border border-emerald-500/30 shadow-2xl">
          <table className="w-full text-left text-xs font-sans min-w-[700px]">
            <thead>
              <tr className="bg-slate-950 text-slate-400 font-mono uppercase tracking-wider text-[11px] border-b border-slate-800">
                <th className="py-4 px-5 font-bold text-white">Feature / Pricing Dimension</th>
                <th className="py-4 px-5 text-emerald-300 font-bold bg-emerald-500/10 border-x border-emerald-500/40">
                  BrokerBros Pro 👑
                </th>
                <th className="py-4 px-4 font-semibold text-slate-400">Charles Schwab</th>
                <th className="py-4 px-4 font-semibold text-slate-700">E*TRADE / MS</th>
                <th className="py-4 px-4 font-semibold text-slate-700">Fidelity</th>
                <th className="py-4 px-4 font-semibold text-slate-700">Neo-Brokers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {features.map((f, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className="py-3.5 px-5 font-bold text-slate-900 font-sans">
                    {f.label}
                  </td>
                  <td className="py-3.5 px-5 font-mono font-bold text-emerald-800 bg-emerald-50/50 border-x border-emerald-200/80">
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

        {/* Action Row */}
        <div className="bg-emerald-50/80 p-6 rounded-2xl border border-emerald-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-lg font-bold font-serif-heading text-slate-900">Ready to stop overpaying legacy brokers?</div>
            <div className="text-xs text-slate-600">Transfer existing portfolios seamlessly with up to $150 in ACATS fee reimbursements.</div>
          </div>
          <button
            onClick={onOpenAccount}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-sm transition-all whitespace-nowrap cursor-pointer"
          >
            Switch to BrokerBros Today
          </button>
        </div>

      </div>
    </section>
  );
};

