import React from 'react';
import { ShieldCheck, AlertTriangle, ExternalLink, Globe, Lock } from 'lucide-react';
import { useRouter } from '../../router';

interface FooterProps {
  onOpenAccount: () => void;
  onLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAccount, onLogin }) => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-slate-100 text-slate-700 text-xs font-sans border-t border-slate-300 pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Regulatory Risk Disclaimer Header Box */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider font-mono">
            <AlertTriangle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>FINRA / SIPC / SEC Regulatory Notice & Multi-Asset Risk Disclosure</span>
          </div>
          <p className="text-slate-600 leading-relaxed text-xs">
            BrokerBros Financial Group Inc. operates through its regulated broker-dealer subsidiaries: BrokerBros Securities LLC (Member FINRA / SIPC / NFA CRD #284102), BrokerBros UK Ltd (Authorized & Regulated by FCA FRN #592014), and BrokerBros Asia Pte. Ltd. (Regulated by MAS). Securities, options, futures, and foreign exchange trading involve substantial risk of loss and are not suitable for all investors. Portfolio margin trading carries high financial leverage risks where losses may exceed initial deposited capital. Before initiating trades, clients must review mandatory regulatory disclosures: Characteristics and Risks of Standardized Options (ODD), Margin Risk Disclosure Statement, and SEC Rule 605 / 606 Execution Quality Reports. Client securities accounts are protected by SIPC up to $500,000 (including $250,000 for claims for cash) and excess SIPC coverage up to $30,000,000 per account underwritten by Lloyd's of London underwriters.
          </p>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-slate-200 pb-10">
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider">
              Account & Services
            </h4>
            <ul className="space-y-2 text-slate-600 text-xs font-sans">
              <li><button onClick={onLogin} className="hover:text-emerald-700 hover:underline cursor-pointer">Client Portal Login</button></li>
              <li><button onClick={onOpenAccount} className="hover:text-emerald-700 hover:underline cursor-pointer">Open an Account</button></li>
              <li><button onClick={() => navigate('/accounts')} className="hover:text-emerald-700 hover:underline cursor-pointer">Account Structures & Types</button></li>
              <li><button onClick={() => navigate('/pricing')} className="hover:text-emerald-700 hover:underline cursor-pointer">Earn 4.85% APY Cash Yield</button></li>
              <li><button onClick={() => navigate('/security/client-protection')} className="hover:text-emerald-700 hover:underline cursor-pointer">SIPC & $30M Excess Insurance</button></li>
              <li><button onClick={() => navigate('/funding')} className="hover:text-emerald-700 hover:underline cursor-pointer">Funding & Withdrawal Desks</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider">
              Software & Downloads
            </h4>
            <ul className="space-y-2 text-slate-600 text-xs font-sans">
              <li><button onClick={() => navigate('/platforms/desktop')} className="hover:text-emerald-700 hover:underline cursor-pointer">BrokerBros Pro Desktop</button></li>
              <li><button onClick={() => navigate('/platforms/web')} className="hover:text-emerald-700 hover:underline cursor-pointer">BrokerBros Web Trader</button></li>
              <li><button onClick={() => navigate('/platforms/mobile')} className="hover:text-emerald-700 hover:underline cursor-pointer">BrokerBros Mobile App</button></li>
              <li><button onClick={() => navigate('/api-integrations')} className="hover:text-emerald-700 hover:underline cursor-pointer">FIX Protocol 4.4 & REST API</button></li>
              <li><button onClick={() => navigate('/platforms/tools')} className="hover:text-emerald-700 hover:underline cursor-pointer">Trading Analytics Tools</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider">
              Support & Tools
            </h4>
            <ul className="space-y-2 text-slate-600 text-xs font-sans">
              <li><button onClick={() => navigate('/help')} className="hover:text-emerald-700 hover:underline cursor-pointer">24/5 Client Help Desk</button></li>
              <li><button onClick={() => navigate('/pricing')} className="hover:text-emerald-700 hover:underline cursor-pointer">Margin Interest Calculator</button></li>
              <li><button onClick={() => navigate('/research/calendar')} className="hover:text-emerald-700 hover:underline cursor-pointer">Economic Calendar</button></li>
              <li><button onClick={() => navigate('/education/academy')} className="hover:text-emerald-700 hover:underline cursor-pointer">BrokerBros Academy</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-emerald-700 hover:underline cursor-pointer">Global Desks & Contacts</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider">
              About BrokerBros
            </h4>
            <ul className="space-y-2 text-slate-600 text-xs font-sans">
              <li><button onClick={() => navigate('/about')} className="hover:text-emerald-700 hover:underline cursor-pointer">About Our Institution</button></li>
              <li><button onClick={() => navigate('/why-brokerbros')} className="hover:text-emerald-700 hover:underline cursor-pointer">Why BrokerBros</button></li>
              <li><button onClick={() => navigate('/institutional')} className="hover:text-emerald-700 hover:underline cursor-pointer">Institutional Prime Services</button></li>
              <li><button onClick={() => navigate('/partner')} className="hover:text-emerald-700 hover:underline cursor-pointer">Partner & IB Program</button></li>
              <li><button onClick={() => navigate('/careers')} className="hover:text-emerald-700 hover:underline cursor-pointer">Careers & Open Roles</button></li>
            </ul>
          </div>
        </div>

        {/* Regulatory Memberships & Copyright Footer */}
        <div className="space-y-4 pt-2 text-xs text-slate-500 font-sans">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center">
              <img src="/logo-white.png" alt="BrokerBros - Trading Tools Trust" className="h-9 w-auto object-contain" />
            </div>

            <div className="flex flex-wrap items-center gap-3 text-slate-600 font-medium text-xs">
              <button onClick={() => navigate('/security/regulation')} className="hover:text-slate-900 cursor-pointer">Regulation</button>
              <span className="text-slate-300">•</span>
              <button onClick={() => navigate('/legal')} className="hover:text-slate-900 cursor-pointer">Terms & Conditions</button>
              <span className="text-slate-300">•</span>
              <button onClick={() => navigate('/legal')} className="hover:text-slate-900 cursor-pointer">Privacy Policy</button>
              <span className="text-slate-300">•</span>
              <button onClick={() => navigate('/contact')} className="hover:text-slate-900 cursor-pointer">Contact Us</button>
            </div>
          </div>

          <p className="leading-relaxed text-[11px] text-slate-500">
            BrokerBros®, BrokerBros Pro™, BrokerBros SmartRouting™, and PortfolioAnalyst® are registered trademarks of BrokerBros Financial Group Inc. Member FINRA / SIPC / NFA / SEC / FCA. Registered Office: 500 Financial Center Blvd, New York, NY 10005. Customer Service Desk: +1 (800) 555-0199.
          </p>

          <div className="text-slate-400 text-[11px] text-center pt-2 font-mono">
            © 2026 BrokerBros Financial Group Inc. All rights reserved. Data and figures for illustrative financial demonstration.
          </div>
        </div>

      </div>
    </footer>
  );
};

