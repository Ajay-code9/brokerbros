import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface FaqItem {
  id?: string | number;
  question: string;
  answer: string;
  category?: string;
}

interface InstitutionalFaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number | null;
}

export const InstitutionalFaqAccordion: React.FC<InstitutionalFaqAccordionProps> = ({
  items,
  defaultOpenIndex = 0
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'border-emerald-500/80 shadow-md ring-1 ring-emerald-500/20'
                : 'border-slate-200/90 hover:border-slate-300 shadow-2xs'
            }`}
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 cursor-pointer"
            >
              <span className="font-bold text-slate-900 text-sm sm:text-base font-sans leading-snug flex items-center gap-3">
                {item.category && (
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded shrink-0 ${
                      isOpen
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {item.category}
                  </span>
                )}
                <span>{item.question}</span>
              </span>
              {isOpen ? (
                <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
              )}
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3.5 font-sans animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
