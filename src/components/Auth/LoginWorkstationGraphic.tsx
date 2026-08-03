import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  Globe, 
  TrendingUp, 
  Zap, 
  BarChart2, 
  Activity, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Sparkles,
  Server
} from 'lucide-react';

export const LoginWorkstationGraphic: React.FC = () => {
  const [activePrice, setActivePrice] = useState(5842.25);
  const [activeTick, setActiveTick] = useState<'+' | '-'>('+');

  // Simulate real-time ticking index price
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * 1.5;
      setActivePrice((prev) => {
        const next = prev + delta;
        setActiveTick(delta >= 0 ? '+' : '-');
        return parseFloat(next.toFixed(2));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-slate-900 rounded-3xl p-8 lg:p-10 text-white overflow-hidden flex flex-col justify-between border border-slate-800 shadow-2xl">
      
      {/* Background Decorative Grids & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Status */}
      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
              <Server className="w-5 h-5 text-emerald-400 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>SSL GATEWAY CONNECTED</span>
              </div>
              <h3 className="text-base font-bold text-slate-100 font-sans mt-0.5">
                BrokerBros Institutional Node #849
              </h3>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 px-3 py-1.5 rounded-lg text-xs font-mono">
            <span className="text-slate-400">LATENCY:</span>
            <span className="text-emerald-400 font-bold">0.42 ms</span>
          </div>
        </div>

        {/* Live Terminal Mini Canvas Widget */}
        <div className="bg-slate-950/80 rounded-2xl border border-slate-800 p-5 space-y-4 backdrop-blur-md shadow-inner">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <BarChart2 className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white">S&P 500 E-MINI (ES_F)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">LIVE FEED</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                NYSE / CME
              </span>
            </div>
          </div>

          <div className="flex items-baseline justify-between pt-1">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black font-mono tracking-tight text-white">
                {activePrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>
              <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                activeTick === '+' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
              }`}>
                {activeTick === '+' ? '+14.50 (+0.25%)' : '-3.25 (-0.06%)'}
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              VOL: 1,842,910 CONTRACTS
            </span>
          </div>

          {/* Simulated Order Book Routing Streams */}
          <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono">
            <div className="bg-emerald-950/30 border border-emerald-800/40 rounded-lg p-2.5 space-y-1">
              <div className="text-slate-400 flex justify-between text-[10px]">
                <span>BEST BID</span>
                <span className="text-emerald-400">SMART ORDER</span>
              </div>
              <div className="font-bold text-emerald-300 flex justify-between">
                <span>5,842.00</span>
                <span>x 420</span>
              </div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2.5 space-y-1">
              <div className="text-slate-400 flex justify-between text-[10px]">
                <span>BEST ASK</span>
                <span className="text-slate-300">NASDAQ DARK</span>
              </div>
              <div className="font-bold text-slate-200 flex justify-between">
                <span>5,842.25</span>
                <span>x 680</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Highlights Section */}
      <div className="relative z-10 space-y-4 py-6">
        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-2">
          INSTITUTIONAL TRUST GUARANTEES
        </h4>

        <ul className="space-y-3 font-sans text-xs">
          <li className="flex items-start gap-3 text-slate-200">
            <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-white block font-semibold">Bank-grade Security</strong>
              <span className="text-slate-400 text-[11px] leading-relaxed">
                256-bit AES encryption, TLS 1.3 transport security, & SOC2 Type II compliance.
              </span>
            </div>
          </li>

          <li className="flex items-start gap-3 text-slate-200">
            <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-white block font-semibold">Multi-Factor Authentication</strong>
              <span className="text-slate-400 text-[11px] leading-relaxed">
                Hardware YubiKey token support, biometrics, & TOTP authenticator protection.
              </span>
            </div>
          </li>

          <li className="flex items-start gap-3 text-slate-200">
            <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-white block font-semibold">Encrypted Sessions</strong>
              <span className="text-slate-400 text-[11px] leading-relaxed">
                Real-time IP fingerprinting, device binding, and automated anomaly isolation.
              </span>
            </div>
          </li>

          <li className="flex items-start gap-3 text-slate-200">
            <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-white block font-semibold">Trusted by Investors Worldwide</strong>
              <span className="text-slate-400 text-[11px] leading-relaxed">
                Over $28.4 Billion in client equity across 150+ international market centers.
              </span>
            </div>
          </li>
        </ul>
      </div>

      {/* Footer Badge Line */}
      <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <ShieldCheck className="w-4 h-4" />
          <span>SIPC MEMBER ACCOUNT</span>
        </div>
        <span>256-BIT ENCRYPTED</span>
      </div>

    </div>
  );
};
