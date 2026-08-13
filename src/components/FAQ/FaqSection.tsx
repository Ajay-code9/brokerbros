import React, { useState } from 'react';
import { FAQ_ITEMS } from '../../data/mockData';
import { HelpCircle, Search, ChevronDown, ChevronUp, MessageSquare, PhoneCall } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);

  const categories = ['ALL', 'Licensing & Pricing', 'Liquidity & FIX', 'Compliance & Security', 'Infrastructure & Setup'];

  const filteredFaqs = FAQ_ITEMS.filter(faq => {
    const matchesCategory = selectedCategory === 'ALL' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-16 lg:py-20 bg-[#F8FAFC] dark:bg-[#0E1420] border-b border-slate-200/80 dark:border-[#1E293B] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-500/30">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>KNOWLEDGE BASE & SUPPORT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Clear answers on deployment timelines, flat SaaS pricing, MT5 & FIX 4.4 integration, segregated client wallets, and multi-jurisdiction compliance frameworks.
          </p>
        </div>

        {/* Search Input & Category Pills */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g., FIX Bridge setup, KYC module, SaaS pricing, go-live timeline)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-[#141C2B] border border-slate-300 dark:border-[#1E293B] rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-xs sm:text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none shadow-xs transition-all"
            />
            {searchQuery && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-mono text-slate-400">
                {filteredFaqs.length} results
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 dark:bg-emerald-600 text-white shadow-xs'
                    : 'bg-white dark:bg-[#141C2B] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1B2538] border border-slate-200 dark:border-[#1E293B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 bg-white dark:bg-[#141C2B] rounded-xl border border-slate-200 dark:border-[#1E293B] text-slate-500 dark:text-slate-400 text-xs font-sans">
              No matching questions found for "{searchQuery}". Please refine your query or contact our 24/5 client desk.
            </div>
          ) : (
            filteredFaqs.map(faq => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white dark:bg-[#141C2B] rounded-xl border transition-all ${
                    isOpen
                      ? 'border-emerald-500/80 dark:border-emerald-500/80 shadow-md ring-1 ring-emerald-500/20'
                      : 'border-slate-200/80 dark:border-[#1E293B] hover:border-slate-300 dark:hover:border-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)]'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded shrink-0 ${
                        isOpen ? 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        {faq.category}
                      </span>
                      <span className="leading-snug">{faq.question}</span>
                    </span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-100 dark:border-[#1E293B] pt-3.5 font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Professional Support Contact Bar */}
        <div className="bg-white dark:bg-[#141C2B] p-6 rounded-2xl border border-slate-200 dark:border-[#1E293B] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Still have questions?</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Our B2B Enterprise Support Desk is available 24/5 via live chat and direct account manager line.</div>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => window.location.href = '#contact'}
              className="px-4 py-2.5 bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400 dark:text-white" />
              <span>Talk to B2B Specialist →</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
