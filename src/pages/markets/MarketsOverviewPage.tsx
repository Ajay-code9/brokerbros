import React from 'react';
import { TrendingUp, Layers, BarChart3, Wallet, Globe, ArrowRight, ShieldCheck, Sparkles, DollarSign } from 'lucide-react';
import { useRouter } from '../../router';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const MarketsOverviewPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const { navigate } = useRouter();

  const categories = [
    {
      title: "Stocks & Equities",
      path: "/markets/stocks",
      count: "15,000+ Symbols",
      desc: "Direct access to 35 countries with 24/5 Overnight market trading and level II depth.",
      highlights: ["Zero commission on US stocks", "24/5 overnight trading", "Fractional share trading"],
      icon: TrendingUp,
      color: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      title: "ETFs & Thematics",
      path: "/markets/etfs",
      count: "13,000+ Global ETFs",
      desc: "Zero-commission ETFs covering broad index, thematic sector, leveraged, and inverse funds.",
      highlights: ["Free ETF screener", "Automated DRIP program", "Low expense ratio tracking"],
      icon: Layers,
      color: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      title: "Mutual Funds",
      path: "/markets/mutual-funds",
      count: "48,000+ Funds",
      desc: "No-load funds from Vanguard, BlackRock, Fidelity, and Schwab with zero transaction fees.",
      highlights: ["No load fees", "Automatic dollar-cost averaging", "Yield comparison engine"],
      icon: Wallet,
      color: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      title: "Bonds & Fixed Income",
      path: "/markets/bonds",
      count: "1,000,000+ Securities",
      desc: "US Treasuries, Corporates, Municipals, and CDs with live yield curve calculators.",
      highlights: ["Zero markup Treasuries", "Live yield curve builder", "Fixed monthly payouts"],
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      title: "Futures & Options",
      path: "/markets/futures-options",
      count: "CME, Eurex, HKEX",
      desc: "Micro & E-mini futures and multi-leg options chains with live Greeks analytics.",
      highlights: ["$0.15 option contracts", "Multi-leg strategy builder", "SPAN margin optimization"],
      icon: BarChart3,
      color: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      title: "Global Forex",
      path: "/markets/forex",
      count: "100+ Currency Pairs",
      desc: "ECN raw spreads from 0.0 pips with deep interbank liquidity from Tier-1 banks.",
      highlights: ["Raw spreads from 0.0 pips", "Leverage up to 1:50", "No dealing desk"],
      icon: Globe,
      color: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      title: "Physical Commodities",
      path: "/markets/commodities",
      count: "Metals, Energy, Agri",
      desc: "Trade Gold, Silver, Crude Oil, Natural Gas, and Wheat with competitive leverage.",
      highlights: ["Spot & futures contracts", "Physical delivery option", "Real-time supply news"],
      icon: DollarSign,
      color: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      title: "IPOs & Primary Issues",
      path: "/markets/ipos",
      count: "Primary Access",
      desc: "Participate in high-profile public offerings at the initial offering price.",
      highlights: ["Retail allocation access", "No minimum portfolio requirement", "Live IPO calendar"],
      icon: Sparkles,
      color: "bg-emerald-50 text-emerald-800 border-emerald-200"
    }
  ];

  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            GLOBAL MULTI-ASSET MARKETS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            One Single Account. Every Major Global Exchange.
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Access equities, options, futures, forex, fixed income, mutual funds, and commodities across 150+ market centers in 35 countries from a unified multi-currency account.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => navigate(item.path)}
                  className="bg-white p-8 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-lg ${item.color}`}>
                        <IconComp className="w-6 h-6 text-emerald-700" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                        {item.count}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-serif-heading text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
                    <span>Explore Asset Class</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection variant="light" onOpenAccount={onOpenAccount} />
    </div>
  );
};
