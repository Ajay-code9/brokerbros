import React, { useState } from 'react';
import { Search, X, TrendingUp, Layers, HelpCircle, ArrowRight, BookOpen } from 'lucide-react';
import { INITIAL_TICKERS } from '../../data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAccount: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onOpenAccount }) => {
  const [query, setQuery] = useState<string>('');

  if (!isOpen) return null;

  const filteredSymbols = INITIAL_TICKERS.filter(item =>
    item.symbol.toLowerCase().includes(query.toLowerCase()) ||
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white text-slate-900 rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden">
        
        {/* Search Bar Input */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-emerald-600 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search symbols (AAPL, NVDA, SPX), products, or help articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base font-sans outline-none bg-transparent text-slate-900 placeholder:text-slate-400"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 max-h-96 overflow-y-auto space-y-4 font-sans text-xs">
          
          {/* Symbols Section */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
              Market Instruments
            </div>
            {filteredSymbols.length === 0 ? (
              <div className="text-slate-500 py-2">No matching symbols found.</div>
            ) : (
              <div className="grid grid-cols-1 gap-1.5">
                {filteredSymbols.map(item => (
                  <div
                    key={item.symbol}
                    onClick={() => {
                      onClose();
                      onOpenAccount();
                    }}
                    className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center font-mono text-xs">
                        {item.symbol.substring(0, 3)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-emerald-700 font-mono">
                          {item.symbol}
                        </div>
                        <div className="text-slate-500 text-[11px]">{item.name}</div>
                      </div>
                    </div>

                    <div className="text-right font-mono">
                      <div className="font-bold text-slate-900">${item.price}</div>
                      <div className={`text-[11px] font-semibold ${item.change >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {item.change >= 0 ? '+' : ''}{item.changePercent}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Help Links */}
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
              Popular Quick Links
            </div>
            <div className="grid grid-cols-2 gap-2 text-slate-700 font-medium">
              <a href="#pricing" onClick={onClose} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-lg flex items-center justify-between">
                <span>4.85% APY Interest Rates</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a href="#trust" onClick={onClose} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-lg flex items-center justify-between">
                <span>SIPC & Excess Protection</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a href="#platform" onClick={onClose} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-lg flex items-center justify-between">
                <span>Pro Desktop Terminal</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a href="#faq" onClick={onClose} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-lg flex items-center justify-between">
                <span>SmartRouting Engine</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

        <div className="p-3 bg-slate-50 border-t border-slate-200 text-center text-[11px] text-slate-500 font-mono">
          Press ESC or click outside to dismiss
        </div>

      </div>
    </div>
  );
};
