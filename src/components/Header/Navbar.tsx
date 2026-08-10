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
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 transition-all duration-200">
      {/* Container matching sleek institutional header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo - Prominent & Large */}
        <button onClick={() => handleNav('/')} className="flex items-center group shrink-0 text-left cursor-pointer py-1">
          <img
            src="/logo-white.webp"
            alt="BrokerBros"
            className="h-11 sm:h-13 lg:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
          />
        </button>

        {/* Right Aligned Navigation & Actions */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Navigation Links - Signature IBKR Sleek Layout with Full PDF Modules */}
          <nav className="flex items-center gap-5 xl:gap-7 text-xs xl:text-[13px] font-semibold text-slate-700">
            
            {/* 1. Why BrokerBros Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('why')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleMouseEnter('why');
                }}
                className={`transition-colors cursor-pointer whitespace-nowrap ${activeDropdown === 'why' ? 'text-emerald-600 font-bold' : 'hover:text-emerald-700'}`}
              >
                Why BrokerBros
              </button>
              {activeDropdown === 'why' && (
                <div
                  onMouseEnter={() => handleMouseEnter('why')}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-64 bg-white rounded-none shadow-2xl border border-slate-200 border-t-2 border-t-emerald-600 p-2 grid grid-cols-1 gap-1 animate-in fade-in duration-150 z-50"
                >
                  {/* Upward pointing pointer arrow */}
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-600" />

                  <button onClick={() => handleNav('/why-brokerbros/capital-safety')} className="px-3 py-2 text-xs font-semibold text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    Capital Strength & Safety
                  </button>
                  <button onClick={() => handleNav('/why-brokerbros/best-execution')} className="px-3 py-2 text-xs font-semibold text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    Best Execution & Zero PFOF
                  </button>
                  <button onClick={() => handleNav('/why-brokerbros/global-market-access')} className="px-3 py-2 text-xs font-semibold text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    Global Market Access
                  </button>
                </div>
              )}
            </div>

            {/* 2. Pricing Dropdown (Matching Image 1 Submenus) */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('pricing')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  // Non-clickable direct navigation as requested, or opens dropdown
                  handleMouseEnter('pricing');
                }}
                className={`transition-colors cursor-pointer whitespace-nowrap ${activeDropdown === 'pricing' ? 'text-emerald-600 font-bold' : 'hover:text-emerald-700'}`}
              >
                Pricing
              </button>
              {activeDropdown === 'pricing' && (
                <div
                  onMouseEnter={() => handleMouseEnter('pricing')}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-56 bg-white rounded-none shadow-2xl border border-slate-200 border-t-2 border-t-emerald-600 p-2 grid grid-cols-1 gap-1 animate-in fade-in duration-150 z-50"
                >
                  {/* Upward pointing pointer arrow in emerald green */}
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-600" />

                  <button
                    onClick={() => handleNav('/pricing/commissions')}
                    className="px-3 py-2 text-xs font-semibold text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    Commissions
                  </button>
                  
                  <button
                    onClick={() => handleNav('/pricing/interest-rates')}
                    className="px-3 py-2 text-xs font-semibold text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    Interest Rates
                  </button>

                  <button
                    onClick={() => handleNav('/pricing/short-sale-cost')}
                    className="px-3 py-2 text-xs font-semibold text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    Short Sale Cost
                  </button>

                  <button
                    onClick={() => handleNav('/pricing/market-data')}
                    className="px-3 py-2 text-xs font-semibold text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    Market Data Pricing
                  </button>

                  <button
                    onClick={() => handleNav('/pricing/other-fees')}
                    className="px-3 py-2 text-xs font-semibold text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    Other Fees
                  </button>
                </div>
              )}
            </div>

            {/* 3. Trading Dropdown (Modules 04, 05, 10, 11 + Markets) */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('trading')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNav('/markets')}
                className={`transition-colors cursor-pointer whitespace-nowrap ${activeDropdown === 'trading' ? 'text-emerald-600 font-bold' : 'hover:text-emerald-700'}`}
              >
                Trading
              </button>
              {activeDropdown === 'trading' && (
                <div
                  onMouseEnter={() => handleMouseEnter('trading')}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-60 bg-white rounded-none shadow-2xl border border-slate-200 border-t-2 border-t-emerald-600 p-2 grid grid-cols-1 gap-1 animate-in fade-in duration-150 z-50"
                >
                  {/* Upward pointing pointer arrow */}
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-600" />

                  <button onClick={() => handleNav('/trading/web-terminal')} className="px-3 py-2 text-xs font-medium text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    Web Trading Terminal
                  </button>
                  <button onClick={() => handleNav('/trading/mobile-apps')} className="px-3 py-2 text-xs font-medium text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    Mobile Trading Apps
                  </button>
                  <button onClick={() => handleNav('/trading/robots')} className="px-3 py-2 text-xs font-medium text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    Trading Robots
                  </button>
                  <button onClick={() => handleNav('/trading/indicators')} className="px-3 py-2 text-xs font-medium text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    Technical Indicators
                  </button>
                  <button onClick={() => handleNav('/markets/stocks')} className="px-3 py-2 text-xs font-medium text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    Stocks & ETFs
                  </button>
                  <button onClick={() => handleNav('/markets/options')} className="px-3 py-2 text-xs font-medium text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    Options & Volatility
                  </button>
                </div>
              )}
            </div>

            {/* 4. Services Dropdown (PDF Infrastructure Modules 01, 02, 03, 06, 07, 08, 09, 12, 13, 14) */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNav('/solutions/broker-crm')}
                className={`transition-colors cursor-pointer whitespace-nowrap ${activeDropdown === 'services' ? 'text-emerald-600 font-bold' : 'hover:text-emerald-700'}`}
              >
                Services
              </button>
              {activeDropdown === 'services' && (
                <div
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-64 bg-white rounded-none shadow-2xl border border-slate-200 border-t-2 border-t-emerald-600 p-2 grid grid-cols-1 gap-1 animate-in fade-in duration-150 z-50"
                >
                  {/* Upward pointing pointer arrow */}
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-600" />

                  <button onClick={() => handleNav('/solutions/broker-crm')} className="px-3 py-2 text-xs font-medium text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    White-Label Broker CRM
                  </button>
                  <button onClick={() => handleNav('/solutions/ib-partner')} className="px-3 py-2 text-xs font-medium text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    CRM with IB Module
                  </button>
                  <button onClick={() => handleNav('/solutions/admin-backoffice')} className="px-3 py-2 text-xs font-medium text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    Admin Backoffice
                  </button>
                  <button onClick={() => handleNav('/solutions/social-copy-trading')} className="px-3 py-2 text-xs font-medium text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    Social Copy Trading
                  </button>
                  <button onClick={() => handleNav('/solutions/pamm-mam')} className="px-3 py-2 text-xs font-medium text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    PAMM / MAM Asset Management
                  </button>
                  <button onClick={() => handleNav('/solutions/prop-firm-crm')} className="px-3 py-2 text-xs font-medium text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    PropFirm CRM Engine
                  </button>

                  <button onClick={() => handleNav('/solutions/mt5-server-apis')} className="px-3 py-2 text-xs font-medium text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    MT5 Server APIs
                  </button>
                  <button onClick={() => handleNav('/solutions/websockets-streaming')} className="px-3 py-2 text-xs font-medium text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    WebSockets Streaming
                  </button>
                  <button onClick={() => handleNav('/solutions/crypto-gateway')} className="px-3 py-2 text-xs font-medium text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    Crypto Gateway
                  </button>
                  <button onClick={() => handleNav('/solutions/fix-api-liquidity')} className="px-3 py-2 text-xs font-medium text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors text-left cursor-pointer">
                    FIX API Liquidity Bridge
                  </button>
                </div>
              )}
            </div>

            {/* 5. Education */}
            <button
              onClick={() => handleNav('/education')}
              className="hover:text-emerald-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Education
            </button>
          </nav>

          {/* Search Icon & Action Buttons */}
          <div className="flex items-center gap-3 border-l border-slate-200 pl-5">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="text-slate-600 hover:text-emerald-600 transition-colors p-1 cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Outlined Log In Button */}
            <button
              onClick={() => handleNav('/login')}
              className="px-4 py-1.5 text-xs font-semibold text-emerald-700 bg-white border border-emerald-600 hover:bg-emerald-50 rounded-none transition-colors cursor-pointer whitespace-nowrap"
            >
              Log In
            </button>

            {/* Solid Open Account Button */}
            <button
              onClick={() => handleNav('/open-account')}
              className="px-4 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-none transition-colors cursor-pointer whitespace-nowrap shadow-xs uppercase tracking-wider"
            >
              Open Account
            </button>
          </div>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={onOpenSearch}
            className="text-slate-600 p-1.5"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-700 rounded-md hover:bg-slate-100"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
