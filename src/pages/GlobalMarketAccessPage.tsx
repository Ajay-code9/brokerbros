import React, { useState } from 'react';
import {
  Globe,
  Globe2,
  Zap,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Building2,
  Clock,
  ArrowRight,
  Download,
  Layers,
  DollarSign,
  PieChart,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Check,
  RefreshCw,
  Coins,
  Compass,
  Briefcase,
  FileText,
  Lock
} from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';
import { VideoHeroBackground } from '../components/Common/VideoHeroBackground';

interface GlobalMarketAccessPageProps {
  onOpenAccount: () => void;
}

export const GlobalMarketAccessPage: React.FC<GlobalMarketAccessPageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'americas' | 'emea' | 'apac'>('all');
  const [selectedExchangeIndex, setSelectedExchangeIndex] = useState<number>(0);
  const [activeSession, setActiveSession] = useState<'asia' | 'europe' | 'us'>('us');
  const [downloadToast, setDownloadToast] = useState<boolean>(false);

  const handleDownloadBrochure = () => {
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 4000);
  };

  const coverageStats = [
    { label: "Connected Global Exchanges", value: "150+", sub: "Direct DMA Market Access", highlight: "35 Countries" },
    { label: "Supported Tradable Assets", value: "10,000+", sub: "Stocks, ETFs, Bonds, FX & Options", highlight: "Single Screen" },
    { label: "Multi-Currency Wallet", value: "26 Currencies", sub: "Instant 0.1 pip FX Conversion", highlight: "Auto-Settlement" },
    { label: "Countries Served", value: "35 Nations", sub: "Fully Regulated Local Entities", highlight: "SEC, FCA, MAS" },
    { label: "Overnight Trading Hours", value: "24 Hours / 5 Days", sub: "US & Asian Overnight DMA", highlight: "Round The Clock" },
    { label: "Daily Global Trading Vol.", value: "$480+ Billion", sub: "Institutional Liquidity Pool", highlight: "Zero Slippage" }
  ];

  const exchangesList = [
    { name: "NYSE (New York Stock Exchange)", region: "americas", location: "New York, USA", code: "NYSE", marketCap: "$28.2 Trillion", hours: "09:30 - 16:00 EST", products: "Equities, ETFs, Structured Notes" },
    { name: "NASDAQ Stock Market", region: "americas", location: "New York, USA", code: "NASDAQ", marketCap: "$25.1 Trillion", hours: "09:30 - 16:00 EST", products: "Tech Equities, Options, ETFs" },
    { name: "LSE (London Stock Exchange)", region: "emea", location: "London, UK", code: "LSE", marketCap: "$3.8 Trillion", hours: "08:00 - 16:30 GMT", products: "UK Equities, ADRs, Global Bonds" },
    { name: "Euronext (Paris, Amsterdam, Brussels)", region: "emea", location: "Pan-European", code: "EURONEXT", marketCap: "$6.5 Trillion", hours: "09:00 - 17:30 CET", products: "European Equities, Index Futures" },
    { name: "HKEX (Hong Kong Exchanges)", region: "apac", location: "Hong Kong", code: "HKEX", marketCap: "$4.7 Trillion", hours: "09:30 - 16:00 HKT", products: "H-Shares, Red Chips, Warrants" },
    { name: "JPX (Tokyo Stock Exchange)", region: "apac", location: "Tokyo, Japan", code: "TSE", marketCap: "$5.8 Trillion", hours: "09:00 - 15:00 JST", products: "Nikkei Equities, J-REITs, TOPIX" },
    { name: "SGX (Singapore Exchange)", region: "apac", location: "Singapore", code: "SGX", marketCap: "$820 Billion", hours: "09:00 - 17:00 SGT", products: "REITs, Asian Index Futures, FX" },
    { name: "ASX (Australian Securities Exchange)", region: "apac", location: "Sydney, Australia", code: "ASX", marketCap: "$1.9 Trillion", hours: "10:00 - 16:00 AEST", products: "Mining Equities, A-REITs, Bonds" },
    { name: "TSX (Toronto Stock Exchange)", region: "americas", location: "Toronto, Canada", code: "TSX", marketCap: "$3.2 Trillion", hours: "09:30 - 16:00 EST", products: "Energy, Materials, Canadian ETFs" },
    { name: "NSE & BSE (National & Bombay Exchange)", region: "apac", location: "Mumbai, India", code: "NSE / BSE", marketCap: "$4.6 Trillion", hours: "09:15 - 15:30 IST", products: "GDRs, Indian Equities, Index Futures" }
  ];

  const filteredExchanges = exchangesList.filter(
    (ex) => selectedRegion === 'all' || ex.region === selectedRegion
  );

  const currentExchange = filteredExchanges[selectedExchangeIndex % filteredExchanges.length] || filteredExchanges[0];

  const investmentProducts = [
    { title: "Global Equities", desc: "Trade 10,000+ US, European, Asian, and Emerging Market stocks with direct exchange execution.", icon: BarChart3, badge: "150+ Venues" },
    { title: "International ETFs", desc: "Access thematic, regional, and factor-based ETFs listed on NYSE, LSE, Xetra, and HKEX.", icon: Layers, badge: "Low Expense Ratios" },
    { title: "Global Fixed Income & Bonds", desc: "Sovereign US Treasuries, European Gilts, Bunds, and corporate investment-grade bonds.", icon: ShieldCheck, badge: "Direct Yields" },
    { title: "Foreign Exchange (FX)", desc: "Spot FX trading across 26 major and exotic currency pairs with tight 0.1 pip spreads.", icon: Coins, badge: "Spot & Swaps" },
    { title: "Options & Derivatives", desc: "Multi-leg equity and index options with real-time Greeks and risk analytics engines.", icon: TrendingUp, badge: "Institutional Greeks" },
    { title: "Global Commodities", desc: "Futures and spot contracts for Gold, Silver, Crude Oil, Natural Gas, and Agriculture.", icon: Compass, badge: "Direct CME Access" },
    { title: "Global Index Futures", desc: "S&P 500, NASDAQ-100, FTSE 100, DAX 40, Nikkei 225, and Hang Seng futures.", icon: Clock, badge: "24/5 DMA Routing" },
    { title: "Primary & Secondary IPO Access", desc: "Participate in international initial public offerings and syndicate allocations.", icon: Building2, badge: "Institutional Syndicate" }
  ];

  const multiCurrencyFeatures = [
    { title: "Single Multi-Currency Wallet", desc: "Hold, deposit, and trade in 26 currencies simultaneously without mandatory conversion." },
    { title: "Real-Time Spot Conversion", desc: "Convert funds at interbank wholesale rates with tight 0.1 pip margins and no hidden fees." },
    { title: "Automated Currency Sweeps", desc: "Automatically match dividend receipts and trade settlements in native asset currencies." },
    { title: "Seamless Cross-Border Wire Transfers", desc: "Local IBANs and wire accounts in the US, UK, EU, Singapore, and Hong Kong." }
  ];

  const marketSessions = [
    { key: 'asia', title: "Asia-Pacific Trading Session", time: "00:00 - 08:00 UTC", hubs: "Tokyo (JPX), Hong Kong (HKEX), Singapore (SGX), Sydney (ASX)", status: "Active Market Open" },
    { key: 'europe', title: "European / London Session", time: "07:00 - 15:30 UTC", hubs: "London (LSE), Frankfurt (Xetra), Paris (Euronext), Zurich (SIX)", status: "Active Market Open" },
    { key: 'us', title: "North American Session", time: "13:30 - 21:00 UTC", hubs: "New York (NYSE & NASDAQ), Chicago (CME), Toronto (TSX)", status: "Active Market Open" }
  ];

  const diversificationPillars = [
    { title: "Systemic Risk Mitigation", desc: "Spreading capital across international economies reduces reliance on single-country GDP shocks or local regulatory shifts." },
    { title: "Unlocking Regional Growth Motors", desc: "Gain direct exposure to high-growth emerging economies in Southeast Asia and South America alongside developed markets." },
    { title: "Hedging Currency Volatility", desc: "Holding assets in USD, EUR, GBP, JPY, and SGD cushions net portfolio value against fiat devaluation." },
    { title: "24-Hour Alpha Opportunities", desc: "React immediately to market-moving earnings announcements and geopolitical developments anywhere in the world." }
  ];

  const faqs = [
    {
      q: "Can I trade international stocks using my existing single account?",
      a: "Yes. BrokerBros operates on a unified global account architecture. With a single login and verified identity, you can immediately trade US, European, Asian, and Australian securities without opening separate regional accounts."
    },
    {
      q: "How does currency conversion work when buying foreign stocks?",
      a: "You can either convert funds manually before placing a trade or enable Automatic Currency Conversion. Automated conversions execute at interbank spot rates plus a minimal 0.1 pip spread at the exact moment of trade settlement, eliminating excess FX markup fees."
    },
    {
      q: "How are international dividends handled and taxed?",
      a: "Dividends paid by international companies are automatically credited to your multi-currency cash balance in the dividend's native currency. BrokerBros automatically applies applicable double-taxation treaties (e.g. W-8BEN for US equities) to minimize withholding taxes at the source."
    },
    {
      q: "Is 24/5 trading available for non-US markets?",
      a: "Yes. In addition to 24/5 US equity and index futures trading, BrokerBros provides direct market access to local exchange hours across Europe and Asia, allowing continuous trading coverage from Sunday evening to Friday evening EST."
    },
    {
      q: "Are my international assets covered by the same regulatory protection?",
      a: "All client assets, regardless of where the underlying security is issued or traded, are held under SEC and FINRA segregated custody rules with $30,000,000 in excess insurance per client account."
    }
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white text-slate-900 selection:bg-emerald-500 selection:text-white font-sans antialiased">
      {/* Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-950 text-white px-5 py-4 rounded-xl border border-emerald-500/40 shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <div className="text-xs font-bold text-white">Global Exchange Coverage Brochure Downloaded</div>
            <div className="text-[11px] text-slate-400">Complete listing of 150+ international exchange specifications.</div>
          </div>
        </div>
      )}

      {/* 1. HERO SECTION WITH NATURAL BACKGROUND IMAGE (100vh Landing Viewport Fit) */}
      <section 
        className="relative text-slate-900 min-h-[calc(100vh-80px)] py-12 lg:py-16 border-b border-slate-200 overflow-hidden font-sans bg-cover bg-center bg-no-repeat flex flex-col justify-between"
        style={{ backgroundImage: "url('/backgroundimage-three.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
          <div className="max-w-3xl space-y-6 pt-4 sm:pt-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-emerald-800 text-xs font-mono font-bold border border-emerald-300 shadow-sm backdrop-blur-md">
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span>150+ MARKET CENTERS • 35 COUNTRIES • 26 CURRENCIES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-950 font-sans">
              Trade Global Markets <br />
              <span className="text-emerald-700">From One Unified Account</span>
            </h1>

            <p className="text-slate-900 text-base sm:text-lg leading-relaxed max-w-2xl font-sans font-semibold bg-white/60 backdrop-blur-xs p-3.5 rounded-xl border border-white/80 shadow-2xs">
              Access 150+ global exchanges across 35 countries through a single multi-currency account with institutional execution quality.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAccount}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer text-sm"
              >
                <span>Open Global Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadBrochure}
                className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-xl border border-slate-300 shadow-sm transition-all flex items-center gap-2 cursor-pointer text-sm"
              >
                <Download className="w-4 h-4 text-emerald-600" />
                <span>Download Global Guide</span>
              </button>
            </div>

          </div>
        </div>

        {/* Quick Highlights - Bottom Fold Viewport Alignment */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8 pb-2">
          <div className="pt-6 border-t border-slate-300/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono max-w-3xl">
            <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-slate-500 text-xs font-sans">Exchanges</div>
              <div className="text-emerald-700 font-extrabold text-sm sm:text-base mt-0.5">150+ Direct Venues</div>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-slate-500 text-xs font-sans">Countries</div>
              <div className="text-slate-950 font-extrabold text-sm sm:text-base mt-0.5">35 Global Nations</div>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-slate-500 text-xs font-sans">Currencies</div>
              <div className="text-emerald-700 font-extrabold text-sm sm:text-base mt-0.5">26 Wallet Currencies</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ONE ACCOUNT. GLOBAL OPPORTUNITIES */}
      <section className="relative py-8 lg:py-12 bg-slate-50 border-b border-slate-200 min-h-[calc(100vh-80px)] flex items-center overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 w-full">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              One Account. Universal Global Access.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Eliminate the friction of opening multiple foreign brokerage accounts. BrokerBros aggregates world financial centers into a single streamlined trading workspace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                <Globe2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Unified Multi-Market Access</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Trade US Tech stocks at 10:00 AM EST, order European dividend Aristocrats at 2:00 PM CET, and hedge Asian index futures overnight — all from a single screen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                <Coins className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Multi-Currency Wallet</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fund your account in USD, EUR, GBP, SGD, or JPY. Hold foreign currencies without forced conversion or convert at tight interbank wholesale rates.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Global Regulatory Protection</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your international holdings remain fully segregated under SEC Rule 15c3-3 and backed by $30 Million in excess Lloyd's of London account insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GLOBAL MARKETS & EXCHANGES */}
      <section className="relative py-8 lg:py-12 bg-white border-b border-slate-200 min-h-[calc(100vh-80px)] flex items-center overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 w-full">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <Building2 className="w-3.5 h-3.5 text-emerald-700" />
              150+ CONNECTED EXCHANGE VENUES
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Explore Connected Global Exchanges
            </h2>
            <p className="text-slate-600 text-base">
              Direct market access routing to the world's primary liquidity centers.
            </p>

            {/* Region Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              <button
                onClick={() => { setSelectedRegion('all'); setSelectedExchangeIndex(0); }}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${selectedRegion === 'all' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                All Exchanges (150+)
              </button>
              <button
                onClick={() => { setSelectedRegion('americas'); setSelectedExchangeIndex(0); }}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${selectedRegion === 'americas' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                Americas (NYSE, NASDAQ, TSX)
              </button>
              <button
                onClick={() => { setSelectedRegion('emea'); setSelectedExchangeIndex(0); }}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${selectedRegion === 'emea' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                Europe & Middle East (LSE, Euronext)
              </button>
              <button
                onClick={() => { setSelectedRegion('apac'); setSelectedExchangeIndex(0); }}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${selectedRegion === 'apac' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                Asia-Pacific (HKEX, JPX, SGX, ASX)
              </button>
            </div>
          </div>

          {/* Exchange Cards Table / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredExchanges.map((ex, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2 hover:bg-white hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer"
                onClick={() => setSelectedExchangeIndex(idx)}
              >
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">{ex.code}</span>
                  <span className="text-slate-500">{ex.location}</span>
                </div>
                <h3 className="text-base font-bold font-serif-heading text-slate-900">{ex.name}</h3>
                <div className="text-xs font-mono text-slate-600 space-y-1 pt-2 border-t border-slate-200/80">
                  <div className="flex justify-between">
                    <span>Market Cap:</span>
                    <strong className="text-slate-900">{ex.marketCap}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Trading Hours:</span>
                    <span className="text-slate-700">{ex.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INVESTMENT PRODUCTS */}
      <section className="relative py-8 lg:py-12 bg-slate-950 text-white border-b border-slate-800 min-h-[calc(100vh-80px)] flex items-center overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 w-full">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">FULL ASSET CLASS DIVERSIFICATION</div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-white">
              Complete Global Investment Products
            </h2>
            <p className="text-slate-400 text-sm">
              Trade equities, fixed income, currencies, and derivatives across major international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentProducts.map((prod, idx) => {
              const IconComp = prod.icon;
              return (
                <div key={idx} className="bg-slate-900/90 p-6 rounded-xl border border-slate-800 space-y-3 hover:border-emerald-500/40 transition-colors">
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{prod.badge}</span>
                  </div>
                  <h3 className="text-lg font-bold font-serif-heading text-white">{prod.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{prod.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. MARKET COVERAGE STATISTICS */}
      <section className="relative py-8 lg:py-12 bg-white border-b border-slate-200 min-h-[calc(100vh-80px)] flex items-center overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
            <div>
              <div className="text-emerald-700 font-mono text-xs font-bold uppercase tracking-wider mb-2">GLOBAL SCALE & CONNECTIVITY</div>
              <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">Market Coverage In Numbers</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Institutional metrics representing the scope and execution speed of the BrokerBros global mesh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverageStats.map((st, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-200 space-y-3 hover:border-emerald-500/50 transition-colors">
                <div className="flex justify-between items-center text-xs font-mono text-slate-500">
                  <span>{st.label}</span>
                  <span className="text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded">{st.highlight}</span>
                </div>
                <div className="text-3xl sm:text-4xl font-serif-heading font-extrabold text-slate-900 tracking-tight pt-1">
                  {st.value}
                </div>
                <div className="text-xs font-sans text-slate-600 pt-1 border-t border-slate-200">
                  {st.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MULTI-CURRENCY TRADING */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Multi-Currency Wallet & Low-Cost FX
            </h2>
            <p className="text-slate-600 text-base">
              Hold cash balances in 26 currencies. Avoid forced conversions and enjoy institutional wholesale exchange rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {multiCurrencyFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-3 hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs font-bold">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>WHOLESALE FX FEATURE</span>
                </div>
                <h3 className="text-xl font-bold font-serif-heading text-slate-900">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TRADING AROUND THE CLOCK */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">CONTINUOUS 24/5 COVERAGE</div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-white">
              Follow the Sun: Global Trading Sessions
            </h2>
            <p className="text-slate-400 text-sm">
              As one market closes, another opens. Trade seamless market transitions around the clock.
            </p>
          </div>

          {/* Interactive Session Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {marketSessions.map((sess) => {
              const isSelected = activeSession === sess.key;
              return (
                <div
                  key={sess.key}
                  onClick={() => setActiveSession(sess.key as 'asia' | 'europe' | 'us')}
                  className={`p-6 rounded-xl border text-left transition-all cursor-pointer space-y-4 ${isSelected
                      ? 'bg-slate-900 border-emerald-500 shadow-xl shadow-emerald-500/10 scale-102'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                    }`}
                >
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-emerald-400 font-bold">{sess.time}</span>
                    <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px]">{sess.status}</span>
                  </div>
                  <h3 className="text-lg font-bold font-serif-heading text-white">{sess.title}</h3>
                  <div className="text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-3">
                    Primary Hubs: {sess.hubs}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. WHY GLOBAL DIVERSIFICATION MATTERS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Why Global Diversification Matters
            </h2>
            <p className="text-slate-600 text-base">
              The strategic benefits of expanding your portfolio beyond domestic market borders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diversificationPillars.map((pil, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-200 space-y-3 hover:border-emerald-500/50 transition-colors">
                <h3 className="text-xl font-bold font-serif-heading text-slate-900">{pil.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Global Market Access FAQ
            </h2>
            <p className="text-slate-600 text-base">
              Detailed answers regarding cross-border investing, tax treaties, and currency handling.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-slate-900 text-base sm:text-lg font-serif-heading">{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
