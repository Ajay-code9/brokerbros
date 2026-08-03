import React, { useState } from 'react';
import {
  ChevronDown,
  Search,
  Globe,
  UserCheck,
  Building2,
  ShieldCheck,
  TrendingUp,
  Cpu,
  BarChart3,
  BookOpen,
  HelpCircle,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Lock,
  Layers,
  Wallet,
  Zap,
  Briefcase
} from 'lucide-react';
import { useRouter } from '../../router';

interface NavbarProps {
  onOpenAccount: () => void;
  onLogin: () => void;
  onOpenSearch: () => void;
  selectedSegment: 'individual' | 'institutional';
  setSelectedSegment: (seg: 'individual' | 'institutional') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAccount,
  onLogin,
  onOpenSearch,
  selectedSegment,
  setSelectedSegment
}) => {
  const { navigate } = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuKey: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleNav = (path: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    navigate(path);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300 ${
      isScrolled ? 'shadow-sm py-0' : 'py-0.5'
    }`}>
      {/* Primary Institutional Navbar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 flex items-center justify-between ${
        isScrolled ? 'h-14' : 'h-16 lg:h-18'
      }`}>
        {/* Brand Logo */}
        <div className="flex items-center gap-10">
          <button onClick={() => handleNav('/')} className="flex items-center group shrink-0 text-left cursor-pointer">
            <img
              src="/logo-white.png"
              alt="BrokerBros"
              className={`w-auto object-contain transition-all duration-300 group-hover:opacity-90 ${
                isScrolled ? 'h-8 sm:h-9' : 'h-10 sm:h-11'
              }`}
            />
          </button>

          {/* Desktop Navigation Links (Classy Minimalist Typography) */}
          <nav className="hidden lg:flex items-center gap-1">
            
            {/* Why BrokerBros */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('why')}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 flex items-center gap-1 transition-colors whitespace-nowrap cursor-default font-sans select-none"
              >
                <span>Why BrokerBros</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
              {activeDropdown === 'why' && (
                <div
                  onMouseEnter={() => handleMouseEnter('why')}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 p-2 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50"
                >
                  <button onClick={() => handleNav('/why-brokerbros')} className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-950">Capital Strength & Safety</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">$28.4B equity capital and conservative balance sheet protection.</div>
                    </div>
                  </button>
                  <button onClick={() => handleNav('/why-brokerbros/best-execution')} className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    <Zap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-950">Best Execution & Zero PFOF</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">SmartRouting scans 150+ lit ECNs for maximum price improvement.</div>
                    </div>
                  </button>
                  <button onClick={() => handleNav('/why-brokerbros/global-market-access')} className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    <Globe className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-950">Global Market Access</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">150+ market centers in 35 countries in 26 settled currencies.</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Pricing */}
            <button
              onClick={() => handleNav('/pricing')}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors whitespace-nowrap cursor-pointer font-sans"
            >
              Pricing
            </button>

            {/* Trading & Markets */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 flex items-center gap-1 transition-colors whitespace-nowrap cursor-default font-sans select-none"
              >
                <span>Trading</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
              {activeDropdown === 'products' && (
                <div
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-0 w-[440px] bg-white rounded-xl shadow-2xl border border-slate-200 p-3 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50"
                >
                  <button onClick={() => handleNav('/markets/stocks')} className="p-2.5 rounded-lg hover:bg-slate-50 border border-slate-100 transition-colors text-left cursor-pointer">
                    <div className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      Stocks & ETFs
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">15,000+ equities with 24/5 Overnight market trading.</div>
                  </button>
                  <button onClick={() => handleNav('/markets/options')} className="p-2.5 rounded-lg hover:bg-slate-50 border border-slate-100 transition-colors text-left cursor-pointer">
                    <div className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-emerald-600" />
                      Options & Volatility
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Multi-leg strategies, Greeks lab, low $0.15/contract execution.</div>
                  </button>
                  <button onClick={() => handleNav('/markets/futures-options')} className="p-2.5 rounded-lg hover:bg-slate-50 border border-slate-100 transition-colors text-left cursor-pointer">
                    <div className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                      <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
                      Global Futures
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Micro & E-mini futures on CME, Eurex, ICE, and HKEX.</div>
                  </button>
                  <button onClick={() => handleNav('/markets/bonds')} className="p-2.5 rounded-lg hover:bg-slate-50 border border-slate-100 transition-colors text-left cursor-pointer">
                    <div className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                      <Wallet className="w-3.5 h-3.5 text-emerald-600" />
                      Bonds & Fixed Income
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">1,000,000+ Treasuries, Municipals with zero markup.</div>
                  </button>
                </div>
              )}
            </div>

            {/* Platforms */}
            <button
              onClick={() => handleNav('/platforms')}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors whitespace-nowrap cursor-pointer font-sans"
            >
              Services
            </button>

            {/* Education & Research */}
            <button
              onClick={() => handleNav('/research')}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors whitespace-nowrap cursor-pointer font-sans"
            >
              Education
            </button>
          </nav>
        </div>

        {/* Right Nav Actions (IBKR Classy Outline Log In + Solid Red Open Account Buttons) */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="text-slate-400 hover:text-slate-950 p-1.5 rounded-lg transition-colors cursor-pointer"
            title="Search markets & services"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Clean Outline Log In Button (Classy Emerald) */}
          <button
            onClick={() => handleNav('/login')}
            className="px-4 py-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-900 bg-white border border-emerald-600/80 hover:border-emerald-700 rounded transition-all cursor-pointer whitespace-nowrap"
          >
            Log In
          </button>

          {/* Solid Institutional Emerald Open Account Button */}
          <button
            onClick={() => handleNav('/open-account')}
            className="px-4 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded transition-all cursor-pointer whitespace-nowrap shadow-xs"
          >
            Open Account
          </button>

          {/* Mobile Hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-700 lg:hidden rounded-md hover:bg-slate-100"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-150 max-h-[85vh] overflow-y-auto">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between p-2.5 bg-slate-100 rounded-lg text-xs text-slate-600 font-medium cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-emerald-600" />
              <span>Search symbol, market, or help...</span>
            </div>
          </button>

          <div className="space-y-1 pt-2 border-t border-slate-100 text-slate-900 font-semibold text-xs">
            <button
              onClick={() => handleNav('/why-brokerbros')}
              className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer flex items-center justify-between font-bold"
            >
              <span>Why BrokerBros</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Markets Dropdown */}
            <div className="space-y-1 p-2 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-2 py-1 font-bold">Products & Markets</div>
              <div className="grid grid-cols-2 gap-1 text-[11px] font-medium text-slate-700">
                <button onClick={() => handleNav('/markets/stocks')} className="text-left p-1.5 hover:text-emerald-700">Stocks & ETFs</button>
                <button onClick={() => handleNav('/markets/options')} className="text-left p-1.5 hover:text-emerald-700">Options</button>
                <button onClick={() => handleNav('/markets/futures')} className="text-left p-1.5 hover:text-emerald-700">Futures</button>
                <button onClick={() => handleNav('/markets/forex')} className="text-left p-1.5 hover:text-emerald-700">Spot Forex</button>
                <button onClick={() => handleNav('/markets/bonds')} className="text-left p-1.5 hover:text-emerald-700">Bonds</button>
                <button onClick={() => handleNav('/markets/mutual-funds')} className="text-left p-1.5 hover:text-emerald-700">Mutual Funds</button>
              </div>
            </div>

            {/* Platforms Dropdown */}
            <div className="space-y-1 p-2 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-2 py-1 font-bold">Platforms</div>
              <div className="grid grid-cols-2 gap-1 text-[11px] font-medium text-slate-700">
                <button onClick={() => handleNav('/platforms/desktop')} className="text-left p-1.5 hover:text-emerald-700">Desktop Pro</button>
                <button onClick={() => handleNav('/platforms/web')} className="text-left p-1.5 hover:text-emerald-700">WebTrader</button>
                <button onClick={() => handleNav('/platforms/mobile')} className="text-left p-1.5 hover:text-emerald-700">Mobile App</button>
                <button onClick={() => handleNav('/platforms/tools')} className="text-left p-1.5 hover:text-emerald-700">Trading Tools</button>
                <button onClick={() => handleNav('/platforms/api')} className="text-left p-1.5 hover:text-emerald-700">Developer API</button>
              </div>
            </div>

            <button
              onClick={() => handleNav('/pricing')}
              className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer flex items-center justify-between font-bold"
            >
              <span>Pricing & Yield</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <button
              onClick={() => handleNav('/research')}
              className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer flex items-center justify-between font-bold"
            >
              <span>Research & News</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <button
              onClick={() => handleNav('/help')}
              className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer flex items-center justify-between font-bold"
            >
              <span>Support & FAQs</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => handleNav('/login')}
              className="w-full py-2.5 text-center font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs cursor-pointer shadow-md"
            >
              Log In to Client Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
;
