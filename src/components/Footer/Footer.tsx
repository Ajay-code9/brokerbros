import React from 'react';
import { ShieldCheck, AlertTriangle, ArrowUpRight, Lock, Globe } from 'lucide-react';
import { useRouter } from '../../router';

interface FooterProps {
  onOpenAccount: () => void;
  onLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAccount, onLogin }) => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-slate-100 dark:bg-[#050B10] text-slate-600 dark:text-slate-400 font-sans border-t border-slate-200 dark:border-slate-800/80 text-xs relative overflow-hidden transition-colors duration-300">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 relative z-10">

        {/* Top Header & Brand Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800/70">
          <div className="space-y-1.5 max-w-lg">
            <div className="flex items-center gap-2">
              <img src="/logo-white.png" alt="BrokerBros" className="h-10 sm:h-12 lg:h-14 w-auto object-contain dark:hidden" />
              <img src="/logo-black.png" alt="BrokerBros" className="h-10 sm:h-12 lg:h-14 w-auto object-contain hidden dark:block" />
              <span className="text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 px-2 py-0.5 rounded-full tracking-wider uppercase">
                Enterprise SaaS
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs leading-normal">
              Next-generation white-label brokerage infrastructure, multi-asset trading terminals & liquidity engine.
            </p>
          </div>

          {/* Quick CTA buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onLogin}
              className="px-4 py-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs rounded-lg border border-slate-200 dark:border-slate-700/80 shadow-xs transition-all cursor-pointer"
            >
              Client Portal Login
            </button>
            <button
              onClick={onOpenAccount}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg shadow-sm shadow-emerald-600/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              Get Demo <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Normal Spaced Sitemap Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10 border-b border-slate-200 dark:border-slate-800/70">
          {/* Column 1: Products */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              Products
            </h4>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[8.5px]">
              <li><button onClick={() => navigate('/trading/web-terminal')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Web Trading Terminal</button></li>
              <li><button onClick={() => navigate('/trading/mobile-apps')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Mobile Trading Apps</button></li>
              <li><button onClick={() => navigate('/trading/robots')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Trading Robots & Algo</button></li>
              <li><button onClick={() => navigate('/trading/indicators')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Technical Indicators</button></li>
              <li><button onClick={() => navigate('/platforms/desktop')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Desktop Workstation</button></li>
            </ul>
          </div>

          {/* Column 2: Markets */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              Markets
            </h4>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[8.5px]">
              <li><button onClick={() => navigate('/markets/stocks')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Stocks & ETFs</button></li>
              <li><button onClick={() => navigate('/markets/options')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Options & Volatility</button></li>
              <li><button onClick={() => navigate('/markets/forex')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Forex Currency Pairs</button></li>
              <li><button onClick={() => navigate('/markets/commodities')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Commodities & Metals</button></li>
              <li><button onClick={() => navigate('/markets/indices')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Global Stock Indices</button></li>
            </ul>
          </div>

          {/* Column 3: B2B Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              B2B Services
            </h4>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[8.5px]">
              <li><button onClick={() => navigate('/accounts')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">White-Label Broker CRM</button></li>
              <li><button onClick={() => navigate('/institutional')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Liquidity & FIX Bridge</button></li>
              <li><button onClick={() => navigate('/pricing')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Prop Firm Suite</button></li>
              <li><button onClick={() => navigate('/funding')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Multi-Currency Wallet</button></li>
              <li><button onClick={() => navigate('/partner')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">IB & Partner Program</button></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              Resources
            </h4>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[8.5px]">
              <li><button onClick={() => navigate('/research/calendar')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Economic Calendar</button></li>
              <li><button onClick={() => navigate('/education/academy')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Trading Academy</button></li>
              <li><button onClick={() => navigate('/help')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Help & Support Center</button></li>
              <li><button onClick={() => navigate('/api-integrations')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">API & Integration Docs</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Contact Desk</button></li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              Company
            </h4>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[8.5px]">
              <li><button onClick={() => navigate('/about')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">About Infrastructure</button></li>
              <li><button onClick={() => navigate('/security/regulation')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Security & Regulation</button></li>
              <li><button onClick={() => navigate('/legal')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Terms & Conditions</button></li>
              <li><button onClick={() => navigate('/legal')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Privacy Policy</button></li>
              <li><button onClick={() => navigate('/careers')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Careers & Roles</button></li>
            </ul>
          </div>
        </div>

        {/* Regulatory Risk Notice Box */}
        <div className="bg-white dark:bg-[#09131C] p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800/90 space-y-1.5 shadow-xs">
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300 font-semibold text-[10px] font-mono uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>RISK WARNING & DISCLOSURE</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-[10px] leading-relaxed font-normal">
            Trading CFDs, Forex, stocks, options, and financial derivatives involves substantial risk of loss and is not suitable for all investors.
            Leverage can amplify both gains and losses. Please ensure you fully understand the risks involved and take independent advice if necessary.
          </p>
        </div>

        {/* Compliance Badges & Legal Copyright */}
        <div className="pt-2 space-y-3 text-[10px] text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800/60 pb-3">
            <div className="flex flex-wrap items-center gap-2">
              {['ISO 27001 Certified', '256-Bit SSL', 'FINRA / SIPC Compliant', 'SOC 2 Type II'].map((b) => (
                <span key={b} className="px-2.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded font-mono text-[10px] text-slate-700 dark:text-slate-400 shadow-2xs">
                  {b}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3.5 text-slate-600 dark:text-slate-400 font-mono text-[10px]">
              <button onClick={() => navigate('/security/regulation')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Regulation</button>
              <span>·</span>
              <button onClick={() => navigate('/legal')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Terms</button>
              <span>·</span>
              <button onClick={() => navigate('/legal')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Privacy</button>
              <span>·</span>
              <button onClick={() => navigate('/contact')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Contact</button>
            </div>
          </div>

          <p className="text-slate-500 text-[10px] leading-relaxed">
            BrokerBros® is a registered trademark of BrokerBros Technology Ltd. All platform modules subject to separate licensing terms.
          </p>

          <div className="text-slate-500 text-[10px] text-center font-mono pt-1">
            © 2026 BrokerBros Financial Group Inc. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
