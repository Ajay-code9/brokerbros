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
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300 ${
      isScrolled ? 'shadow-md py-0' : 'shadow-2xs py-0.5'
    }`}>
      {/* Primary Brand Navbar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 flex items-center justify-between ${
        isScrolled ? 'h-12' : 'h-15 lg:h-16'
      }`}>
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <button onClick={() => handleNav('/')} className="flex items-center group shrink-0 text-left cursor-pointer">
            <img
              src="/logo-white.png"
              alt="BrokerBros - Trading Tools Trust"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? 'h-7 sm:h-8' : 'h-9 sm:h-10'
              }`}
            />
          </button>

          {/* Desktop Navigation Dropdowns */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {/* Nav Item: Why BrokerBros */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('why')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNav('/why-brokerbros')}
                className="px-2.5 py-1 text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1 rounded-md hover:bg-slate-100/80 transition-colors whitespace-nowrap cursor-pointer"
              >
                Why BrokerBros
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
              {activeDropdown === 'why' && (
                <div
                  onMouseEnter={() => handleMouseEnter('why')}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border border-slate-200 p-3 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50"
                >
                  <button onClick={() => handleNav('/why-brokerbros')} className="flex items-start gap-2.5 p-2 rounded-md hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Capital Strength & S&P Rating</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">$28.4B equity capital and conservative balance sheet protection.</div>
                    </div>
                  </button>
                  <button onClick={() => handleNav('/why-brokerbros/best-execution')} className="flex items-start gap-2.5 p-2 rounded-md hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    <Zap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Best Execution & Zero PFOF</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">SmartRouting engine searches dark pools & ECNs for maximum price improvement.</div>
                    </div>
                  </button>
                  <button onClick={() => handleNav('/why-brokerbros/global-market-access')} className="flex items-start gap-2.5 p-2 rounded-md hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    <Globe className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Global Market Access</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">150+ market centers in 35 countries in 26 settled currencies.</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Nav Item: Products & Markets */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNav('/markets')}
                className="px-2.5 py-1 text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1 rounded-md hover:bg-slate-100/80 transition-colors whitespace-nowrap cursor-pointer"
              >
                Products & Markets
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
              {activeDropdown === 'products' && (
                <div
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-0 w-[460px] bg-white rounded-lg shadow-xl border border-slate-200 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50"
                >
                  <button onClick={() => handleNav('/markets/stocks')} className="p-2.5 rounded-md hover:bg-slate-50 border border-slate-100 transition-colors text-left cursor-pointer">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      Stocks & Equities
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">15,000+ equities with 24/5 Overnight market trading.</div>
                  </button>
                  <button onClick={() => handleNav('/markets/options')} className="p-2.5 rounded-md hover:bg-slate-50 border border-slate-100 transition-colors text-left cursor-pointer">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-emerald-600" />
                      Options & Volatility
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Multi-leg strategies, Greeks lab, low $0.15/contract execution.</div>
                  </button>
                  <button onClick={() => handleNav('/markets/futures-options')} className="p-2.5 rounded-md hover:bg-slate-50 border border-slate-100 transition-colors text-left cursor-pointer">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
                      Global Futures
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Micro & E-mini futures on CME, Eurex, ICE, and HKEX.</div>
                  </button>
                  <button onClick={() => handleNav('/markets/bonds')} className="p-2.5 rounded-md hover:bg-slate-50 border border-slate-100 transition-colors text-left cursor-pointer">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Wallet className="w-3.5 h-3.5 text-emerald-600" />
                      Bonds & Fixed Income
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">1,000,000+ Treasuries, Municipals, and Corporates with zero markup.</div>
                  </button>
                </div>
              )}
            </div>

            {/* Nav Item: Pricing & Yield */}
            <button
              onClick={() => handleNav('/pricing')}
              className="px-2.5 py-1 text-xs font-semibold text-slate-700 hover:text-slate-900 rounded-md hover:bg-slate-100/80 transition-colors whitespace-nowrap cursor-pointer"
            >
              Pricing & Yield
            </button>

            {/* Nav Item: Platforms */}
            <button
              onClick={() => handleNav('/platforms')}
              className="px-2.5 py-1 text-xs font-semibold text-slate-700 hover:text-slate-900 rounded-md hover:bg-slate-100/80 transition-colors whitespace-nowrap cursor-pointer"
            >
              Platforms
            </button>

            {/* Nav Item: Research & Academy */}
            <button
              onClick={() => handleNav('/research')}
              className="px-2.5 py-1 text-xs font-semibold text-slate-700 hover:text-slate-900 rounded-md hover:bg-slate-100/80 transition-colors whitespace-nowrap cursor-pointer"
            >
              Research & News
            </button>
          </nav>
        </div>

        {/* Right Nav Actions & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="text-slate-500 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg transition-colors hidden sm:flex items-center gap-2 text-xs font-medium border border-slate-200 px-3 py-1.5 bg-slate-50/50 cursor-pointer"
            title="Search markets, products, help"
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-600">Search</span>
          </button>

          <button
            onClick={() => handleNav('/login')}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-xs transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5 text-emerald-100" />
            <span>Log In</span>
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
