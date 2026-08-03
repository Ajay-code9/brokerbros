import React from 'react';
import { Cpu, Terminal, ArrowRight, CheckCircle, Code } from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const ApiIntegrationsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <Code className="w-3.5 h-3.5 text-emerald-600" />
            DEVELOPER API & FIX PROTOCOL
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            Build Quantitative Trading Engine with REST, WebSockets & FIX 4.4
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Direct access to market data feeds, order execution REST endpoints, real-time WebSocket tick streams, and native Python and C++ SDKs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-950 p-8 rounded-xl border border-slate-800 text-slate-200 space-y-4 font-mono text-xs">
              <div className="text-emerald-400 font-bold border-b border-slate-800 pb-2">Python SDK Quickstart</div>
              <pre className="text-slate-300 overflow-x-auto p-3 bg-slate-900 rounded-lg">
{`from brokerbros import TradingClient, OrderType

client = TradingClient(api_key="bb_live_9f82...", secret="...")
order = client.place_order(
    symbol="AAPL",
    qty=100,
    side="buy",
    order_type=OrderType.SMART_LIMIT,
    limit_price=224.50
)
print(f"Order Executed ID: {order.id}")`}
              </pre>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-2xl font-bold font-serif-heading text-slate-900">FIX 4.4 Protocol Gateway</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Direct session connectivity for high-frequency algorithmic market makers requiring sub-millisecond roundtrip latency.</p>
              <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1">
                <Terminal className="w-4 h-4 text-emerald-600" />
                <span>Read API Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
