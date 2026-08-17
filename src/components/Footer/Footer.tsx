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
              <div className="relative h-9 sm:h-11 lg:h-12 flex items-center shrink-0">
                <img
                  src="/logo-black.png"
                  alt="BrokerBros"
                  className="h-full w-auto object-contain transition-opacity duration-300 ease-in-out opacity-0 dark:opacity-100"
                />
                <img
                  src="/logo-white.png"
                  alt="BrokerBros"
                  className="h-full w-auto object-contain transition-opacity duration-300 ease-in-out opacity-100 dark:opacity-0 absolute inset-0"
                />
              </div>
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
          {/* Column 1: SaaS Products */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              SaaS Products
            </h4>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[8.5px]">
              <li><button onClick={() => navigate('/products/web-trader')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">WebTrader Terminal</button></li>
              <li><button onClick={() => navigate('/products/mobile-app')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Mobile Trading Apps</button></li>
              <li><button onClick={() => navigate('/products/forex-crm')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">White-Label Forex CRM</button></li>
              <li><button onClick={() => navigate('/products/simplex')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Simplex Trading Engine</button></li>
              <li><button onClick={() => navigate('/products/plugins')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">MT5 Server Plugins</button></li>
            </ul>
          </div>

          {/* Column 2: Enterprise Solutions */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              Solutions
            </h4>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[8.5px]">
              <li><button onClick={() => navigate('/products/pamm-mam')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">PAMM / MAM Manager</button></li>
              <li><button onClick={() => navigate('/products/social-trading')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Social Copy Trading</button></li>
              <li><button onClick={() => navigate('/products/ib-portal')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Multi-Tier IB Portal</button></li>
              <li><button onClick={() => navigate('/solutions/fix-api-liquidity')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">FIX API Liquidity Bridge</button></li>
              <li><button onClick={() => navigate('/products/quote-engine')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">BrokerBros Quote Engine</button></li>
            </ul>
          </div>

          {/* Column 3: Managed Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              Managed Services
            </h4>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[8.5px]">
              <li><button onClick={() => navigate('/services/technical-support')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">24/7 Tech Support SLA</button></li>
              <li><button onClick={() => navigate('/services/success-manager')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Dedicated Success Manager</button></li>
              <li><button onClick={() => navigate('/services/hosting-server-management')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Hosting & Server Infra</button></li>
              <li><button onClick={() => navigate('/services/cyber-security-ddos')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">DDoS & Cyber Defense</button></li>
              <li><button onClick={() => navigate('/services/custom-system-development')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Custom FinTech Dev</button></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              Resources
            </h4>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[8.5px]">
              <li><button onClick={() => navigate('/education/academy')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Brokerage Launch Academy</button></li>
              <li><button onClick={() => navigate('/education/learning-center')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">API & Developer Docs</button></li>
              <li><button onClick={() => navigate('/pricing')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Turnkey SaaS Tiers</button></li>
              <li><button onClick={() => navigate('/pricing/commissions')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Volume & Execution Tiers</button></li>
              <li><button onClick={() => navigate('/help')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Help & Support Desk</button></li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              Company
            </h4>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[8.5px]">
              <li><button onClick={() => navigate('/why-brokerbros')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Why BrokerBros</button></li>
              <li><button onClick={() => navigate('/security/regulation')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Security & Compliance</button></li>
              <li><button onClick={() => navigate('/legal')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Terms & SLA Agreement</button></li>
              <li><button onClick={() => navigate('/legal')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Privacy Policy</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Contact Institutional Desk</button></li>
            </ul>
          </div>
        </div>

        {/* B2B Technology & Infrastructure Disclosure Box */}
        <div className="bg-white dark:bg-[#09131C] p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800/90 space-y-1.5 shadow-xs">
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300 font-semibold text-[10px] font-mono uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>B2B TECHNOLOGY & INFRASTRUCTURE DISCLOSURE</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-[10px] leading-relaxed font-normal">
            BrokerBros is an enterprise B2B financial technology provider supplying white-label broker CRM platforms, multi-asset trading terminals, liquidity bridge plugins, and co-located server infrastructure. BrokerBros does not provide retail brokerage services, manage retail client funds, or act as a counterparty to retail trades.
          </p>
        </div>

        {/* Compliance Badges & Legal Copyright */}
        <div className="pt-2 space-y-3 text-[10px] text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800/60 pb-3">
            <div className="flex flex-wrap items-center gap-2">
              {['ISO 27001 Certified', '256-Bit SSL', 'SOC 2 Type II Certified', 'Equinix LD4/NY4 Co-Located'].map((b) => (
                <span key={b} className="px-2.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded font-mono text-[10px] text-slate-700 dark:text-slate-400 shadow-2xs">
                  {b}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3.5 text-slate-600 dark:text-slate-400 font-mono text-[10px]">
              <button onClick={() => navigate('/security/regulation')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Security</button>
              <span>·</span>
              <button onClick={() => navigate('/legal')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Terms</button>
              <span>·</span>
              <button onClick={() => navigate('/legal')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Privacy</button>
              <span>·</span>
              <button onClick={() => navigate('/contact')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Contact Desk</button>
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
