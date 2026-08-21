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
  Briefcase,
  Sun,
  Moon,
  Smartphone,
  Users,
  PieChart,
  Activity,
  Coins,
  Network,
  LayoutGrid,
  Monitor
} from 'lucide-react';
import { useRouter } from '../../router';
import { useTheme } from '../../context/ThemeContext';

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
  const { currentPath, navigate } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const isSolutionsPage = Boolean(currentPath && currentPath.startsWith('/solutions/'));
  const isDarkNavbar = theme === 'dark';

  const PRODUCTS_MENU = [
    { title: "BrokerBros Trader", path: "/products/brokerbros-trader", desc: "Flagship multi-asset trading suite", icon: Monitor },
    { title: "Web Trader", path: "/products/web-trader", desc: "Browser-based institutional terminal", icon: Globe },
    { title: "Mobile Applications", path: "/products/mobile-app", desc: "Native iOS & Android trading apps", icon: Smartphone },
    { title: "Forex CRM", path: "/products/forex-crm", desc: "Multi-tier broker CRM & client portal", icon: Briefcase },
    { title: "Simplex", path: "/products/simplex", desc: "Lightweight turnkey trading engine", icon: Zap },
    { title: "Social Trading", path: "/products/social-trading", desc: "Community copy trading & signals", icon: Users },
    { title: "Financial Charts", path: "/products/financial-charts", desc: "Professional HTML5 charting suite", icon: BarChart3 },
    { title: "BrokerBros Quote Engine (BQE)", path: "/products/quote-engine", desc: "Sub-10ms price feed aggregator", icon: Activity },
    { title: "BrokerBros PAMM/MAM System", path: "/products/pamm-mam", desc: "Multi-account manager allocation", icon: PieChart },
    { title: "IB Portal", path: "/products/ib-portal", desc: "Multi-tier affiliate & rebate engine", icon: Network },
    { title: "Crypto ETFs", path: "/products/crypto-etfs", desc: "Digital asset index routing", icon: Coins },
    { title: "Financial Widgets", path: "/products/financial-widgets", desc: "Embeddable web tickers & calendar", icon: LayoutGrid },
    { title: "Plugins", path: "/products/plugins", desc: "MT5 server plugins & bridge add-ons", icon: Cpu }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isDarkNavbar
        ? isScrolled
          ? 'bg-[#0d121d]/95 backdrop-blur-md border-b border-slate-800/80 text-white shadow-xl'
          : 'bg-[#0d121d] border-b border-transparent text-white'
        : isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-md'
          : 'bg-white border-b border-transparent text-slate-900'
    }`}>
      {/* Container matching sleek institutional header */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'h-14 sm:h-16' : 'h-18 sm:h-20'
      }`}>
        <button onClick={() => handleNav('/')} className="flex items-center group shrink-0 text-left cursor-pointer py-1">
          <div className={`relative flex items-center transition-all duration-300 ${
            isScrolled ? 'h-8 sm:h-9 lg:h-10' : 'h-10 sm:h-11 lg:h-12'
          }`}>
            <img
              src="/logo-black.png"
              alt="BrokerBros"
              className="h-full w-auto object-contain transition-opacity duration-300 ease-in-out opacity-0 dark:opacity-100 group-hover:scale-[1.01]"
            />
            <img
              src="/logo-white.png"
              alt="BrokerBros"
              className="h-full w-auto object-contain transition-opacity duration-300 ease-in-out opacity-100 dark:opacity-0 absolute inset-0 group-hover:scale-[1.01]"
            />
          </div>
        </button>

        {/* Centered Navigation Links */}
        <nav className={`hidden lg:flex items-center justify-center flex-1 mx-4 xl:mx-8 gap-4 xl:gap-6 text-[11.5px] xl:text-xs font-semibold ${
          isDarkNavbar ? 'text-slate-200' : 'text-slate-700'
        }`}>
            
            {/* 1. Why BrokerBros Direct Link */}
            <button
              type="button"
              onClick={() => handleNav('/why-brokerbros')}
              className={`transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap flex items-center ${
                currentPath === '/why-brokerbros' || currentPath.startsWith('/why-brokerbros/')
                  ? 'text-emerald-500 font-bold'
                  : isDarkNavbar ? 'hover:text-emerald-400' : 'hover:text-emerald-700'
              }`}
            >
              <span>Why BrokerBros</span>
            </button>

            {/* 2. Products Dropdown (NEW!) */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleMouseEnter('products');
                }}
                className={`transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap flex items-center ${
                  activeDropdown === 'products'
                    ? 'text-emerald-500 font-bold'
                    : isDarkNavbar ? 'hover:text-emerald-400' : 'hover:text-emerald-700'
                }`}
              >
                <span>Products</span>
              </button>
              {activeDropdown === 'products' && (
                <div
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[680px] rounded-2xl shadow-2xl border border-t-2 border-t-emerald-600 p-3.5 grid grid-cols-2 gap-2 animate-in fade-in duration-150 z-50 ${
                    isDarkNavbar
                      ? 'bg-[#131926] border-slate-800 text-white'
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  {/* Upward pointing pointer arrow */}
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-600" />

                  {PRODUCTS_MENU.map((prod, pIdx) => {
                    const IconComp = prod.icon;
                    return (
                      <button
                        key={pIdx}
                        onClick={() => handleNav(prod.path)}
                        className={`p-2.5 rounded-xl transition-all text-left cursor-pointer flex items-start gap-3 group ${
                          isDarkNavbar
                            ? 'hover:bg-slate-800/80 hover:text-emerald-400'
                            : 'hover:bg-emerald-50/60 hover:text-emerald-600'
                        }`}
                      >
                        <div className={`p-2 rounded-lg shrink-0 transition-transform group-hover:scale-110 ${
                          isDarkNavbar ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-100/70 text-emerald-700'
                        }`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5 min-w-0">
                          <div className="text-xs font-bold font-sans tracking-tight leading-tight group-hover:text-emerald-500 transition-colors">
                            {prod.title}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-sans line-clamp-1">
                            {prod.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 3. Services Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleMouseEnter('services');
                }}
                className={`transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap flex items-center ${
                  activeDropdown === 'services' || (isSolutionsPage && isDarkNavbar)
                    ? 'text-emerald-500 font-bold'
                    : isDarkNavbar ? 'hover:text-emerald-400' : 'hover:text-emerald-700'
                }`}
              >
                <span>Services</span>
              </button>
              {activeDropdown === 'services' && (
                <div
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-72 rounded-none shadow-2xl border border-t-2 border-t-emerald-600 p-2 grid grid-cols-1 gap-1 animate-in fade-in duration-150 z-50 ${
                    isDarkNavbar
                      ? 'bg-[#131926] border-slate-800 text-white'
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-600" />

                  <button onClick={() => handleNav('/services/technical-support')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer flex items-center justify-between ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    <span>24/7 Technical Support</span>
                    <span className="text-[9px] bg-emerald-500/20 text-emerald-400 font-mono px-1.5 py-0.5 rounded">SLA</span>
                  </button>
                  <button onClick={() => handleNav('/services/success-manager')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Dedicated Success Manager
                  </button>
                  <button onClick={() => handleNav('/services/hosting-server-management')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Hosting & Server Management
                  </button>
                  <button onClick={() => handleNav('/services/cyber-security-ddos')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    DDoS Protection & Cyber Services
                  </button>
                  <button onClick={() => handleNav('/services/website-ux-ui')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Website UX/UI Development
                  </button>
                  <button onClick={() => handleNav('/services/user-training')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    User Training & Onboarding
                  </button>
                  <button onClick={() => handleNav('/services/custom-system-development')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Custom System Development
                  </button>
                  <button onClick={() => handleNav('/solutions/fix-api-liquidity')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    FIX API & Liquidity Engine
                  </button>
                  <button onClick={() => handleNav('/security/regulation')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer flex items-center justify-between ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    <span>Data Security & Compliance</span>
                    <span className="text-[9px] bg-emerald-500/20 text-emerald-400 font-mono px-1.5 py-0.5 rounded">ISO 27001</span>
                  </button>
                </div>
              )}
            </div>

            {/* 4. Platforms Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('platforms')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleMouseEnter('platforms');
                }}
                className={`transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap flex items-center ${
                  activeDropdown === 'platforms'
                    ? 'text-emerald-500 font-bold'
                    : isDarkNavbar ? 'hover:text-emerald-400' : 'hover:text-emerald-700'
                }`}
              >
                <span>Platforms</span>
              </button>
              {activeDropdown === 'platforms' && (
                <div
                  onMouseEnter={() => handleMouseEnter('platforms')}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-64 rounded-none shadow-2xl border border-t-2 border-t-emerald-600 p-2 grid grid-cols-1 gap-1 animate-in fade-in duration-150 z-50 ${
                    isDarkNavbar
                      ? 'bg-[#131926] border-slate-800 text-white'
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-600" />

                  <button onClick={() => handleNav('/products/web-trader')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    WebTrader Terminal
                  </button>
                  <button onClick={() => handleNav('/products/mobile-app')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Mobile Trading Apps
                  </button>
                  <button onClick={() => handleNav('/platforms/desktop')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Desktop Workstation
                  </button>
                  <button onClick={() => handleNav('/products/plugins')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    MT5 & Server Plugins
                  </button>
                  <button onClick={() => handleNav('/api-integrations')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    API Integrations & Docs
                  </button>
                </div>
              )}
            </div>

            {/* 5. Pricing Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('pricing')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleMouseEnter('pricing');
                }}
                className={`transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap flex items-center ${
                  activeDropdown === 'pricing'
                    ? 'text-emerald-500 font-bold'
                    : isDarkNavbar ? 'hover:text-emerald-400' : 'hover:text-emerald-700'
                }`}
              >
                <span>Pricing</span>
              </button>
              {activeDropdown === 'pricing' && (
                <div
                  onMouseEnter={() => handleMouseEnter('pricing')}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-64 rounded-none shadow-2xl border border-t-2 border-t-emerald-600 p-2 grid grid-cols-1 gap-1 animate-in fade-in duration-150 z-50 ${
                    isDarkNavbar
                      ? 'bg-[#131926] border-slate-800 text-white'
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-600" />

                  <button onClick={() => handleNav('/pricing')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Turnkey SaaS Tiers
                  </button>
                  <button onClick={() => handleNav('/pricing/commissions')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Volume & Execution Fees
                  </button>
                  <button onClick={() => handleNav('/pricing/market-data')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Market Data Subscriptions
                  </button>
                  <button onClick={() => handleNav('/pricing/other-fees')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Infrastructure & Hosting Fees
                  </button>
                  <button onClick={() => handleNav('/partner')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Partners & IB Rebate Program
                  </button>
                </div>
              )}
            </div>

            {/* 6. Education Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('education')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleMouseEnter('education');
                }}
                className={`transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap flex items-center ${
                  activeDropdown === 'education'
                    ? 'text-emerald-500 font-bold'
                    : isDarkNavbar ? 'hover:text-emerald-400' : 'hover:text-emerald-700'
                }`}
              >
                <span>Education</span>
              </button>
              {activeDropdown === 'education' && (
                <div
                  onMouseEnter={() => handleMouseEnter('education')}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-64 rounded-none shadow-2xl border border-t-2 border-t-emerald-600 p-2 grid grid-cols-1 gap-1 animate-in fade-in duration-150 z-50 ${
                    isDarkNavbar
                      ? 'bg-[#131926] border-slate-800 text-white'
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-600" />

                  <button onClick={() => handleNav('/education/academy')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Brokerage Launch Academy
                  </button>
                  <button onClick={() => handleNav('/api-integrations')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    API & Developer Docs
                  </button>
                  <button onClick={() => handleNav('/research/news')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    News & Market Insights
                  </button>
                </div>
              )}
            </div>

        </nav>

        {/* Action Buttons on Right */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNav('/contact')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              isDarkNavbar
                ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Contact Us
          </button>

          <button
            onClick={onOpenSearch}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-300 ease-in-out cursor-pointer ${
              isDarkNavbar
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-700'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search...</span>
          </button>

          {/* Universal Theme Toggle Button */}
          <button
            onClick={(e) => toggleTheme(e)}
            aria-label="Toggle Light/Dark Theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="relative p-1.5 transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer flex items-center justify-center bg-transparent border-0 text-slate-600 dark:text-amber-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-lg overflow-hidden group"
          >
            <div className="relative w-4 h-4 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
              <Sun className={`w-4 h-4 text-amber-400 absolute transition-all duration-500 transform ${
                theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
              }`} />
              <Moon className={`w-4 h-4 text-slate-600 dark:text-amber-400 absolute transition-all duration-500 transform ${
                theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
              }`} />
            </div>
          </button>

          <button
            onClick={onLogin}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg shadow-sm shadow-emerald-600/20 transition-all duration-300 ease-in-out flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>Log In</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu & Theme Controls */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Mobile Theme Switcher */}
          <button
            onClick={(e) => toggleTheme(e)}
            aria-label="Toggle Theme"
            className="relative p-1.5 transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer flex items-center justify-center bg-transparent border-0 text-slate-600 dark:text-amber-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-lg overflow-hidden group"
          >
            <div className="relative w-4 h-4 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
              <Sun className={`w-4 h-4 text-amber-400 absolute transition-all duration-500 transform ${
                theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
              }`} />
              <Moon className={`w-4 h-4 text-slate-600 dark:text-amber-400 absolute transition-all duration-500 transform ${
                theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
              }`} />
            </div>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border cursor-pointer ${
              isDarkNavbar
                ? 'bg-slate-900 border-slate-800 text-white'
                : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b p-4 space-y-4 animate-in slide-in-from-top duration-200 ${
          isDarkNavbar ? 'bg-[#0d121d] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
        }`}>
          <button
            onClick={() => handleNav('/why-brokerbros')}
            className="w-full text-left p-2 rounded-lg font-bold hover:text-emerald-500 flex items-center justify-between text-xs border-b border-slate-200 dark:border-slate-800"
          >
            <span className="text-emerald-500 font-extrabold">Why BrokerBros</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
          </button>
          <div className="space-y-1">
            <div className="text-[10px] font-mono font-bold text-emerald-500 uppercase px-2 py-1 tracking-wider">Products</div>
            <button
              onClick={() => handleNav('/products/back-office')}
              className="w-full text-left p-2 rounded-lg font-bold hover:text-emerald-500 flex items-center justify-between text-xs"
            >
              <span>Back Office</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              onClick={() => handleNav('/products/prop-trading-crm')}
              className="w-full text-left p-2 rounded-lg font-bold hover:text-emerald-500 flex items-center justify-between text-xs"
            >
              <span>Prop Trading CRM</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              onClick={() => handleNav('/products/client-area')}
              className="w-full text-left p-2 rounded-lg font-bold hover:text-emerald-500 flex items-center justify-between text-xs"
            >
              <span>Client Area</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              onClick={() => handleNav('/products/mobile-app')}
              className="w-full text-left p-2 rounded-lg font-bold hover:text-emerald-500 flex items-center justify-between text-xs"
            >
              <span>Mobile App</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              onClick={() => handleNav('/products/partner-area')}
              className="w-full text-left p-2 rounded-lg font-bold hover:text-emerald-500 flex items-center justify-between text-xs"
            >
              <span>Partner Area</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              onClick={() => handleNav('/products/b2b-crm')}
              className="w-full text-left p-2 rounded-lg font-bold hover:text-emerald-500 flex items-center justify-between text-xs"
            >
              <span>B2B CRM</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              onClick={() => handleNav('/products/service-desk')}
              className="w-full text-left p-2 rounded-lg font-bold hover:text-emerald-500 flex items-center justify-between text-xs"
            >
              <span>Service Desk</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 flex gap-2">
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
