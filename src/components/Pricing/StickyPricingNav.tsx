import React, { useState, useEffect } from 'react';
import { Percent, Layers, ArrowDownRight, Database, DollarSign, Sparkles } from 'lucide-react';
import { useRouter } from '../../router';

interface NavItem {
  id: string;
  path: string;
  label: string;
  badge?: string;
  icon: React.ElementType;
}

export const StickyPricingNav: React.FC = () => {
  const { currentPath, navigate } = useRouter();

  const navItems: NavItem[] = [
    { id: 'commissions', path: '/pricing/commissions', label: 'Commissions', badge: '$0 Tier', icon: Layers },
    { id: 'interest-rates', path: '/pricing/interest-rates', label: 'Interest Rates', badge: '4.85% APY', icon: Percent },
    { id: 'short-sale-cost', path: '/pricing/short-sale-cost', label: 'Short Sale Cost', badge: 'Live Borrow', icon: ArrowDownRight },
    { id: 'market-data-pricing', path: '/pricing/market-data', label: 'Market Data', badge: 'Level I & II', icon: Database },
    { id: 'other-fees', path: '/pricing/other-fees', label: 'Other Fees', badge: 'Transparent', icon: DollarSign },
  ];

  const handleNavClick = (item: NavItem) => {
    if (currentPath === item.path || (currentPath === '/pricing' && window.location.hash.includes(item.id))) {
      const element = document.getElementById(item.id);
      if (element) {
        const yOffset = -110;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate(item.path);
    }
  };

  const scrollToCalculator = () => {
    const calculator = document.getElementById('pricing-calculator');
    if (calculator) {
      const yOffset = -110;
      const y = calculator.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-20 z-30 py-1.5 pointer-events-none font-sans">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="pointer-events-auto bg-slate-900/95 text-white backdrop-blur-xl border border-slate-800/80 rounded-xl sm:rounded-full p-1 sm:p-1.5 shadow-xl ring-1 ring-white/10 flex flex-nowrap items-center justify-between gap-1.5 transition-all overflow-x-auto no-scrollbar">
          
          {/* Floating Pill Nav Bar with Left Savings Estimator */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5 w-full justify-start px-0.5 shrink-0 sm:shrink">
            
            {/* 0. Savings Estimator Left Button (Always Visible) */}
            <button
              onClick={scrollToCalculator}
              className="px-3 py-1.5 rounded-full text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-950 shrink-0" />
              <span>Savings Estimator</span>
            </button>

            {/* Nav Items */}
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = currentPath === item.path || (currentPath === '/pricing' && activeSectionId(item.id));

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-1.5 group shrink-0 ${
                    isActive
                      ? 'bg-emerald-600 text-white font-bold shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <IconComp className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-colors shrink-0 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-emerald-400'}`} />
                  <span className="whitespace-nowrap">{item.label}</span>

                  {item.badge && (
                    <span
                      className={`text-[9px] sm:text-[10px] font-mono px-1 sm:px-1.5 py-0.5 rounded transition-colors whitespace-nowrap ${
                        isActive
                          ? 'bg-emerald-800 text-white font-bold'
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

        </div>
      </div>
    </div>
  );
};

function activeSectionId(id: string) {
  if (typeof window === 'undefined') return false;
  return window.location.hash.includes(id);
}
