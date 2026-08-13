import React, { useState } from 'react';
import { ChevronDown, RefreshCw, Send, ArrowRightLeft, FileText, ShieldCheck, DollarSign, HelpCircle, Check } from 'lucide-react';

interface FeeAccordionItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ElementType;
  details: { label: string; value: string; note: string }[];
  summaryText: string;
}

export const OtherFeesAccordionSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    fx: true,
    transfers: false,
    acats: false,
    statements: false,
    custody: false,
    misc: false,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const accordionItems: FeeAccordionItem[] = [
    {
      id: 'fx',
      title: 'Currency Conversion (Foreign Exchange)',
      subtitle: 'Multi-currency sub-accounts with direct interbank spot execution',
      badge: '0.02% - 0.08% Spread',
      icon: RefreshCw,
      summaryText: 'Convert funds between USD, EUR, GBP, JPY, CAD, AUD, and SGD instantly. We charge a pure 0.02% to 0.08% spread over interbank spot rates with zero hidden markups.',
      details: [
        { label: 'Tier 1 FX Conversion (< $100k)', value: 'Spot + 0.08%', note: 'Saves up to 2.5% compared to commercial retail banks' },
        { label: 'Tier 2 FX Conversion ($100k - $1M)', value: 'Spot + 0.04%', note: 'Institutional volume rate' },
        { label: 'Tier 3 FX Conversion (> $1M)', value: 'Spot + 0.02%', note: 'Wholesale prime broker rate' },
        { label: 'Multi-Currency Sub-Accounts', value: '$0.00 / mo', note: 'Hold balance in 10+ currencies simultaneously' },
      ],
    },
    {
      id: 'transfers',
      title: 'Wire & ACH Funding Transfers',
      subtitle: 'Instant digital funding with zero incoming charges',
      badge: 'Free ACH & Incoming Wires',
      icon: Send,
      summaryText: 'Fund your trading account quickly with zero deposit fees. All electronic ACH deposits and incoming wire transfers are completely free.',
      details: [
        { label: 'Incoming ACH & Direct Deposit', value: '$0.00', note: 'Instant processing for connected bank accounts' },
        { label: 'Incoming Domestic & Int. Wires', value: '$0.00', note: 'BrokerBros never charges incoming wire fees' },
        { label: 'Outgoing ACH Withdrawals', value: '$0.00', note: '100% free unlimited ACH withdrawals' },
        { label: 'Outgoing Wire Transfer', value: '1 Free / Mo ($10 thereafter)', note: 'Covers bank processing costs' },
      ],
    },
    {
      id: 'acats',
      title: 'Account Transfers (ACATS) & Reimbursement',
      subtitle: 'Seamless automated transfer from your existing broker',
      badge: 'Up to $150 Fee Reimbursement',
      icon: ArrowRightLeft,
      summaryText: 'Transfer your stock positions, ETFs, and cash seamlessly from Robinhood, Schwab, Fidelity, or E*Trade without liquidating. We reimburse up to $150 in exit fees.',
      details: [
        { label: 'Incoming Full / Partial ACATS', value: '$0.00', note: 'Automated 3-5 business day transfer' },
        { label: 'Transfer Fee Reimbursement', value: 'Up to $150.00', note: 'Credit applied automatically for transfers > $10,000' },
        { label: 'Outgoing Full ACATS Transfer', value: '$75.00', note: 'Standard clearing house processing fee' },
        { label: 'DTC / DWAC Stock Certificate Deposit', value: '$0.00', note: 'Free electronic certificate intake' },
      ],
    },
    {
      id: 'statements',
      title: 'Statements, Confirmations & Tax Reporting',
      subtitle: 'Comprehensive electronic recordkeeping and annual tax packages',
      badge: '$0 Digital Delivery',
      icon: FileText,
      summaryText: 'All trade confirmations, monthly statements, gain/loss reports, and 1099 tax forms are delivered electronically in PDF and CSV format at zero cost.',
      details: [
        { label: 'Electronic Monthly Statements & PDFs', value: '$0.00', note: '10-year online statement archive' },
        { label: 'Real-Time Trade Confirmation Emails', value: '$0.00', note: 'Instant execution notifications' },
        { label: '1099 / Consolidated Tax Statements', value: '$0.00', note: 'TurboTax, H&R Block, & CSV export compatible' },
        { label: 'Physical Paper Statement Mailings', value: '$5.00 / statement', note: 'Optional paper delivery surcharge' },
      ],
    },
    {
      id: 'custody',
      title: 'Corporate Actions, Custody & Dividend Reinvestment',
      subtitle: 'Zero asset-based custody fees and automated DRIP options',
      badge: '$0 Custody Surcharge',
      icon: ShieldCheck,
      summaryText: 'Hold equities, bonds, ETFs, and funds indefinitely without paying asset-based custody or maintenance fees. Dividends are collected and reinvested automatically.',
      details: [
        { label: 'Asset Custody & Holding Fee', value: '$0.00', note: 'SIPC protected up to $500,000' },
        { label: 'Automated Dividend Reinvestment (DRIP)', value: '$0.00', note: 'Fractional share reinvestment from $1.00' },
        { label: 'Mandatory Corporate Action Processing', value: '$0.00', note: 'Splits, dividends, spinoffs, and mergers' },
        { label: 'Voluntary Proxy Voting & Tender Offers', value: '$0.00', note: 'Free online shareholder voting' },
      ],
    },
    {
      id: 'misc',
      title: 'Miscellaneous Services & Specialized Reporting',
      subtitle: 'Transparent pricing for rare operational services',
      badge: '100% Transparent Schedule',
      icon: DollarSign,
      summaryText: 'Clear, predictable pricing for infrequent specialized requests like overnight check delivery, legal audit verifications, or physical certificate issuance.',
      details: [
        { label: 'Overnight Courier Service (FedEx/UPS)', value: '$25.00', note: 'Physical document delivery' },
        { label: 'Legal Audit Confirmation Letter', value: '$0.00', note: 'Free CPA / auditor verification letter' },
        { label: 'Stop Payment / Bounced Check Fee', value: '$25.00', note: 'Standard banking processing fee' },
        { label: 'Checkwriting Service (Pro Accounts)', value: '$0.00', note: 'Optional free checkbook on margin accounts' },
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 dark:bg-[#0E1420] border-b border-slate-200 dark:border-[#1E293B] font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 dark:bg-[#141C2B] border border-slate-300 dark:border-[#1E293B] text-slate-800 dark:text-slate-200 text-xs font-semibold uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Comprehensive Fee Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-semibold text-slate-900 dark:text-white tracking-tight">
            Other Fees & Service Charges
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            No fine print, no hidden surcharges. Expand any service category below to view our complete itemized operational fee schedule.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="max-w-4xl mx-auto space-y-4">
          {accordionItems.map((item) => {
            const IconComp = item.icon;
            const isOpen = !!openItems[item.id];

            return (
              <div
                key={item.id}
                className="bg-white dark:bg-[#141C2B] text-slate-900 dark:text-white rounded-2xl border border-slate-200 dark:border-[#1E293B] shadow-xs overflow-hidden transition-all"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 dark:hover:bg-[#1B2538] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
                        <span className="hidden sm:inline-block text-[11px] font-mono font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-500/30">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="sm:hidden text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/20 px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                    <div className={`w-8 h-8 rounded-lg bg-slate-100 dark:bg-[#0E1420] flex items-center justify-center text-slate-600 dark:text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-slate-200 dark:bg-[#1E293B] text-slate-900 dark:text-white' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Details Body */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-[#1E293B] space-y-4 bg-slate-50/40 dark:bg-[#0E1420]/50">
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {item.summaryText}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {item.details.map((d, dIdx) => (
                        <div key={dIdx} className="bg-white dark:bg-[#141C2B] p-3.5 rounded-xl border border-slate-200/80 dark:border-[#1E293B] shadow-2xs space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-slate-900 dark:text-white">{d.label}</span>
                            <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">{d.value}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">{d.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
