import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FAQ {
  id: string;
  category: 'Cash Yield' | 'Commissions' | 'Margin Rates' | 'Account Fees';
  question: string;
  answer: string;
}

export const PricingFAQAccordion: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQ[] = [
    {
      id: 'faq-1',
      category: 'Cash Yield',
      question: 'How is interest on uninvested cash calculated and paid?',
      answer: 'Interest is calculated daily based on your settled uninvested cash balance at midnight UTC and is paid automatically into your account on the 1st business day of each month. There are no lockup periods—your cash remains 100% liquid for trading or withdrawal at any time.',
    },
    {
      id: 'faq-2',
      category: 'Cash Yield',
      question: 'Is my uninvested cash protected by FDIC insurance?',
      answer: 'Yes. Eligible uninvested USD cash balances are automatically swept into an insured network of program banks, extending total FDIC coverage up to $2,500,000 per account (well beyond standard $250k bank limits).',
    },
    {
      id: 'faq-3',
      category: 'Commissions',
      question: 'What is the difference between Fixed Pricing and Pro Tiered Pricing?',
      answer: 'Fixed Pricing offers a simple flat fee per trade (e.g. $0.00 on stocks or $0.65 on options). Pro Tiered Pricing charges a lower per-share rate ($0.0035 down to $0.0005) plus exchange pass-through fees and credits liquidity rebates directly back to your account—ideal for active or high-volume traders.',
    },
    {
      id: 'faq-4',
      category: 'Margin Rates',
      question: 'How do BrokerBros margin interest rates compare to traditional brokers?',
      answer: 'BrokerBros charges wholesale margin rates benchmarked directly to central bank rates (starting at 5.83% APY for USD). Traditional brokers like Charles Schwab or Morgan Stanley charge between 11.5% and 13.0% APY on identical loan amounts, allowing our clients to save thousands annually.',
    },
    {
      id: 'faq-5',
      category: 'Account Fees',
      question: 'Are there any inactivity fees, custody fees, or account maintenance charges?',
      answer: 'No. BrokerBros has a strict Zero Hidden Fee policy. We charge $0 monthly account maintenance, $0 inactivity penalties, and $0 asset custody fees regardless of how frequently or infrequently you trade.',
    },
    {
      id: 'faq-6',
      category: 'Commissions',
      question: 'How does currency conversion work and what are the fees?',
      answer: 'You can convert currencies (USD, EUR, GBP, JPY, SGD) instantly inside your multi-currency account at the live interbank spot rate plus a transparent 0.02% (2 pips) execution fee—saving up to 2.5% compared to standard 3% bank conversion markups.',
    },
    {
      id: 'faq-7',
      category: 'Margin Rates',
      question: 'How is margin interest calculated and billed?',
      answer: 'Margin interest is calculated daily on your net settled margin debit balance and charged monthly at the beginning of the subsequent month. Rate tiers adjust automatically based on your total margin balance.',
    },
    {
      id: 'faq-8',
      category: 'Account Fees',
      question: 'Does BrokerBros reimburse transfer fees when moving portfolios from another broker?',
      answer: 'Yes! BrokerBros automatically reimburses ACATS account transfer fees up to $150 per account when transferring portfolio assets from another brokerage firm.',
    },
  ];

  const categories = ['All', 'Cash Yield', 'Commissions', 'Margin Rates', 'Account Fees'];

  const filteredFaqs = activeCategory === 'All'
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900 tracking-tight">
            Frequently Asked Questions About Pricing & Yield
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-sans">
            Everything you need to know about our commission schedules, cash yield accrual, and zero hidden fee guarantee.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-sans font-bold text-slate-900 text-base sm:text-lg cursor-pointer hover:text-emerald-700 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-slate-600 text-sm leading-relaxed font-sans border-t border-slate-200/60 mt-2 pt-4">
                    {faq.answer}
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
