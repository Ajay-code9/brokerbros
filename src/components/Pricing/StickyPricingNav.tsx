import React, { useState, useEffect } from 'react';
import { Percent, Layers, ArrowDownRight, Database, DollarSign, Calculator, Sparkles } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  badge?: string;
  icon: React.ElementType;
}

export const StickyPricingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('commissions');

  const navItems: NavItem[] = [
    { id: 'commissions', label: 'Commissions', badge: '$0 Tier', icon: Layers },
    { id: 'interest-rates', label: 'Interest Rates', badge: '4.85% APY', icon: Percent },
    { id: 'short-sale-cost', label: 'Short Sale Cost', badge: 'Live Borrow', icon: ArrowDownRight },
    { id: 'market-data-pricing', label: 'Market Data', badge: 'Level I & II', icon: Database },
    { id: 'other-fees', label: 'Other Fees', badge: 'Transparent', icon: DollarSign },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-20 z-30 py-1.5 pointer-events-none font-sans">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="pointer-events-auto bg-slate-900/95 text-white backdrop-blur-xl border border-slate-800/80 rounded-xl sm:rounded-full p-1 sm:p-1.5 shadow-xl ring-1 ring-white/10 flex flex-nowrap items-center justify-between gap-1.5 transition-all overflow-x-auto no-scrollbar">
          
          {/* Scrollable Floating Pill Nav */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5 w-full lg:w-auto px-0.5 shrink-0 sm:shrink">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-1.5 group shrink-0 ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <IconComp className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-colors shrink-0 ${isActive ? 'text-slate-950' : 'text-slate-400 group-hover:text-emerald-400'}`} />
                  <span className="whitespace-nowrap">{item.label}</span>

                  {item.badge && (
                    <span
                      className={`text-[9px] sm:text-[10px] font-mono px-1 sm:px-1.5 py-0.5 rounded transition-colors whitespace-nowrap ${
                        isActive
                          ? 'bg-slate-950/20 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Savings Calculator Shortcut */}
          <div className="hidden lg:flex items-center gap-1.5 shrink-0 pr-0.5 pl-2 border-l border-slate-800">
            <button
              onClick={() => {
                const calculator = document.getElementById('pricing-calculator');
                if (calculator) {
                  const yOffset = -110;
                  const y = calculator.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 animate-pulse shrink-0" />
              <span>Savings Estimator</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};


