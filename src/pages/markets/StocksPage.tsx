import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  Clock,
  CheckCircle,
  ShieldCheck,
  Search,
  Filter,
  ArrowRight,
  DollarSign,
  Zap,
  Globe,
  Layers,
  BarChart3,
  Activity,
  PieChart,
  Sliders,
  Cpu,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Award,
  Lock,
  BookOpen,
  AlertCircle,
  Sparkles,
  Building2,
  Eye,
  ArrowUpRight,
  Check,
  Calculator,
  Calendar,
  X,
  Play
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';
import { MarketTickerBanner } from '../../components/Common/MarketTickerBanner';
import { VideoHeroBackground } from '../../components/Common/VideoHeroBackground';

interface StocksPageProps {
  onOpenAccount: () => void;
}

export const StocksPage: React.FC<StocksPageProps> = ({ onOpenAccount }) => {
  // Ticker items for live ticker banner
  const liveTicker = [
    { symbol: 'NVDA', price: '$128.40', change: '+2.85%', up: true },
    { symbol: 'AAPL', price: '$224.30', change: '+1.12%', up: true },
    { symbol: 'MSFT', price: '$448.20', change: '-0.45%', up: false },
    { symbol: 'AMZN', price: '$186.50', change: '+1.94%', up: true },
    { symbol: 'GOOGL', price: '$172.10', change: '+0.88%', up: true },
    { symbol: 'TSLA', price: '$218.80', change: '-2.15%', up: false },
    { symbol: 'META', price: '$512.40', change: '+3.10%', up: true },
    { symbol: 'BRK.B', price: '$452.10', change: '+0.32%', up: true },
    { symbol: 'JPM', price: '$208.60', change: '+0.75%', up: true },
    { symbol: 'LLY', price: '$845.20', change: '+1.62%', up: true }
  ];

  // Screener state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tech' | 'mega' | 'dividends' | 'growth'>('all');

  // Interactive Dividend Calculator State
  const [initialInvestment, setInitialInvestment] = useState<number>(10000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [expectedYield, setExpectedYield] = useState<number>(4.2);
  const [years, setYears] = useState<number>(10);

  // Platform Mockup Active Tab State
  const [platformTab, setPlatformTab] = useState<'charting' | 'depth' | 'order' | 'analytics'>('charting');

  // FAQ Active Index
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Notification Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Calculate dividend projections
  const calculateCompoundReturn = () => {
    let balance = initialInvestment;
    const monthlyYield = expectedYield / 100 / 12;
    const totalMonths = years * 12;
    let totalDividendsEarned = 0;

    for (let i = 0; i < totalMonths; i++) {
      const monthlyDiv = balance * monthlyYield;
      totalDividendsEarned += monthlyDiv;
      balance += monthlyDiv + monthlyContribution;
    }

    return {
      finalValue: Math.round(balance),
      dividendsEarned: Math.round(totalDividendsEarned),
      contributions: initialInvestment + monthlyContribution * totalMonths
    };
  };

  const compoundResult = calculateCompoundReturn();

  // Stock listings data
  const stockListings = [
    { symbol: 'NVDA', name: 'NVIDIA Corporation', sector: 'Tech / AI Semiconductors', price: '$128.40', change: '+2.85%', isUp: true, cap: '$3.15T', pe: '42.1', yield: '0.08%', cat: 'tech' },
    { symbol: 'AAPL', name: 'Apple Inc.', sector: 'Consumer Electronics', price: '$224.30', change: '+1.12%', isUp: true, cap: '$3.42T', pe: '31.4', yield: '0.45%', cat: 'mega' },
    { symbol: 'MSFT', name: 'Microsoft Corporation', sector: 'Enterprise Cloud & AI', price: '$448.20', change: '-0.45%', isUp: false, cap: '$3.33T', pe: '35.8', yield: '0.68%', cat: 'mega' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', sector: 'E-Commerce & AWS', price: '$186.50', change: '+1.94%', isUp: true, cap: '$1.94T', pe: '40.2', yield: '0.00%', cat: 'growth' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', sector: 'Search & Cloud AI', price: '$172.10', change: '+0.88%', isUp: true, cap: '$2.12T', pe: '24.6', yield: '0.46%', cat: 'mega' },
    { symbol: 'JPM', name: 'JPMorgan Chase & Co.', sector: 'Diversified Banking', price: '$208.60', change: '+0.75%', isUp: true, cap: '$598B', pe: '11.8', yield: '2.25%', cat: 'dividends' },
    { symbol: 'LLY', name: 'Eli Lilly and Company', sector: 'Pharmaceuticals / Bio', price: '$845.20', change: '+1.62%', isUp: true, cap: '$802B', pe: '58.4', yield: '0.62%', cat: 'growth' },
    { symbol: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare & Pharma', price: '$156.80', change: '+0.42%', isUp: true, cap: '$378B', pe: '15.2', yield: '3.15%', cat: 'dividends' }
  ];

  const filteredStocks = stockListings.filter(s => {
    const matchesSearch = s.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.sector.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'all' || s.cat === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const exchangeVenues = [
    { code: 'NYSE', name: 'New York Stock Exchange', city: 'New York, USA', cap: '$28.2T', status: 'Core Market Open' },
    { code: 'NASDAQ', name: 'NASDAQ Global Select', city: 'New York, USA', cap: '$25.1T', status: 'Core Market Open' },
    { code: 'LSE', name: 'London Stock Exchange', city: 'London, UK', cap: '$3.8T', status: 'Overnight Access' },
    { code: 'HKEX', name: 'Hong Kong Exchange', city: 'Hong Kong', cap: '$4.7T', status: 'Asian Session' },
    { code: 'JPX', name: 'Tokyo Stock Exchange', city: 'Tokyo, Japan', cap: '$5.8T', status: 'Asian Session' },
    { code: 'EURONEXT', name: 'Euronext Paris / Amsterdam', city: 'Pan-European', cap: '$6.5T', status: 'European Session' }
  ];

  const whyInvestPoints = [
    { title: 'Long-Term Capital Appreciation', desc: 'Global equities have historically outpaced inflation, compounding wealth over multi-year horizons.', icon: TrendingUp, metric: '+10.2% Avg Annual S&P 500 Return' },
    { title: 'Passive Dividend Income Streams', desc: 'Collect quarterly cash distributions directly into your multi-currency cash balance with automated reinvestment.', icon: DollarSign, metric: '$480B+ Global Dividends Paid' },
    { title: 'Inflation Shield & Purchasing Power', desc: 'Corporate earnings and revenues naturally scale with price levels, preserving real economic purchasing power.', icon: ShieldCheck, metric: 'Real Return Protection' },
    { title: 'Fractional Share Ownership', desc: 'Buy high-priced premium shares starting with as little as $1.00, enabling precise dollar-cost averaging.', icon: Layers, metric: 'Fractional From $1.00' }
  ];

  const whyBrokerBrosGrid = [
    { title: 'Sub-Millisecond Execution Speed', desc: 'Direct exchange member links route trades in 1.2ms without intermediate market-maker delays.', icon: Zap, highlight: '1.2ms Avg Fill' },
    { title: '24/5 Overnight Market Access', desc: 'Trade 15,000+ US and international equities continuously from Sunday 8 PM to Friday 8 PM EST.', icon: Clock, highlight: '20-Hour Continuous' },
    { title: 'Smart Order Routing (Zero PFOF)', desc: 'We reject Payment for Order Flow. Orders are executed for maximum price improvement across 150+ venues.', icon: ShieldCheck, highlight: '+$0.024/sh Saved' },
    { title: 'Institutional Level II Depth', desc: 'Stream real-time NASDAQ ITCH and NYSE ArcaBook bid/ask queues with complete order book visibility.', icon: BarChart3, highlight: 'Full Order Book' },
    { title: 'Real-Time Portfolio Risk Engine', desc: 'Monitor position exposure, beta sensitivity, value-at-risk, and sectoral concentration dynamically.', icon: Activity, highlight: 'Live VaR Analytics' },
    { title: 'Automated Dividend Reinvestment (DRIP)', desc: 'Automatically reinvest equity cash dividends into fractional shares with zero commission fees.', icon: RefreshCw, highlight: 'Zero-Fee DRIP' }
  ];

  const statsCounters = [
    { label: 'Tradable Global Stocks', value: '15,000+', sub: 'US, European, Asian & Emerging Equities', badge: '150+ Venues' },
    { label: 'Average Fill Speed', value: '1.2 ms', sub: 'Sub-millisecond direct exchange routing', badge: 'Colocated NY4' },
    { label: 'Price Improvement Rate', value: '88.4%', sub: 'Of all marketable orders executed better than NBBO', badge: 'Zero PFOF' },
    { label: 'Average Price Savings', value: '$0.024', sub: 'Saved per share compared to NBBO benchmark', badge: '$24 per 1k Shares' },
    { label: 'Supported Currencies', value: '26', sub: 'Single account multi-currency cash wallet', badge: 'Spot FX 0.1 Pip' },
    { label: 'Excess SIPC Insurance', value: '$30M', sub: 'Institutional client balance protection', badge: "Lloyd's Backed" }
  ];

  const educationalStrategies = [
    { title: 'Growth Investing', tag: 'Capital Gains Focus', desc: 'Targeting market-leading companies with high revenue growth, expanding market share, and heavy R&D reinvestment in AI, cloud computing, and biotechnology.' },
    { title: 'Value Investing', tag: 'Margin of Safety', desc: 'Identifying fundamentally strong, cash-generative companies trading at a discount to intrinsic value using discounted cash flow (DCF) modeling and low P/E multiples.' },
    { title: 'Dividend Aristocrats', tag: 'Income Generation', desc: 'Constructing high-yield portfolios with S&P 500 companies that have consistently increased dividend payouts for 25+ consecutive years.' },
    { title: 'Dollar-Cost Averaging (DCA)', tag: 'Risk Management', desc: 'Investing fixed dollar amounts at recurring intervals to remove market timing emotion and average out entry price volatility.' }
  ];

  const pricingComparison = [
    { feature: 'US Stocks & ETFs Commission', brokerbros: '$0.00 / Share', legacy: '$4.95 - $6.95 / Trade', apps: '$0.00 (High PFOF)' },
    { feature: 'Payment For Order Flow (PFOF)', brokerbros: 'ZERO (100% Rejected)', legacy: 'Accepts PFOF', apps: 'Pockets Large Spread' },
    { feature: '24/5 Overnight Market Access', brokerbros: 'Included Free', legacy: 'Not Available', apps: 'Restricted Tickers' },
    { feature: 'Level II Real-Time Depth', brokerbros: 'Free for Active Accounts', legacy: '$15 - $30 / Month', apps: 'Basic Delayed Top-of-Book' },
    { feature: 'Fractional Shares Minimum', brokerbros: '$1.00 Minimum', legacy: 'Full Shares Only', apps: '$1.00 (Internalized)' },
    { feature: 'Monthly Inactivity Fees', brokerbros: '$0.00', legacy: '$10 - $25 / Month', apps: '$0.00' }
  ];

  const faqs = [
    {
      q: 'How does 24/5 Overnight Stock Trading work on BrokerBros?',
      a: 'BrokerBros connects directly to overnight Alternative Trading Systems (ATS) and institutional dark pools. You can trade 15,000+ US stocks and ETFs continuous from Sunday 8:00 PM EST through Friday 8:00 PM EST, allowing you to react immediately to earnings releases and global news events as they break.'
    },
    {
      q: 'Are there any hidden fees or commissions on US equity trades?',
      a: 'None. BrokerBros offers zero-commission trading on all US stocks and ETFs. Furthermore, because we do not accept Payment for Order Flow (PFOF), your trades are routed directly to primary exchanges and dark pools for maximum price improvement.'
    },
    {
      q: 'Can I trade fractional shares on international stock exchanges?',
      a: 'Yes. You can buy fractional shares starting at just $1.00 across US equities and major European/Asian ADRs. All fractional positions receive proportional dividend distributions.'
    },
    {
      q: 'What stock research and Level II data are provided?',
      a: 'Every verified account receives free access to real-time Level II Depth of Market (NASDAQ ITCH and NYSE ArcaBook), TipRanks institutional consensus analyst price targets, SEC Form 4 insider transaction trackers, and real-time financial statements.'
    },
    {
      q: 'How are stock dividends deposited and taxed?',
      a: 'Dividends are deposited directly into your multi-currency cash balance on payable dates in the company\'s home currency. For non-US residents, BrokerBros automatically handles W-8BEN tax treaty exemptions to ensure reduced withholding tax rates.'
    }
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-950 text-white px-5 py-4 rounded-xl border border-emerald-500/40 shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <div className="text-xs font-bold text-white">Action Executed</div>
            <div className="text-[11px] text-slate-400">{toastMessage}</div>
          </div>
        </div>
      )}

      {/* Reusable Obsidian Market Ticker Banner */}
      <MarketTickerBanner
        items={liveTicker.map(t => ({
          symbol: t.symbol,
          name: t.symbol,
          price: t.price,
          change: t.change,
          isPositive: t.up
        }))}
      />

      {/* 1. HERO SECTION (100vh Viewport Lock - Clean Simple Layout) */}
      <section className="relative bg-white text-slate-900 h-[calc(100vh-80px)] min-h-[520px] max-h-[800px] flex items-center border-b border-slate-100 overflow-hidden font-sans">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Copy Block */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold border border-emerald-200/80">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>DIRECT MARKET ACCESS • ZERO PFOF • 24/5 OVERNIGHT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-slate-950 font-sans">
                Trade 15,000+ Global Stocks <br />
                <span className="text-emerald-700">With Sub-Millisecond Speed</span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal">
                Direct market access to US and international equities across 35 countries. Benefit from fractional share trading from $1, zero account minimums, 24/5 overnight trading, and zero PFOF SmartRouting.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOpenAccount}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer text-sm"
                >
                  <span>Open Stock Trading Account</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('screener-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-lg border border-slate-300 transition-all flex items-center gap-2 cursor-pointer text-sm"
                >
                  <Search className="w-4 h-4 text-emerald-600" />
                  <span>Explore Stock Screener</span>
                </button>
              </div>

              {/* Key Quick Badges */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <div className="text-slate-400 text-xs">US & Global Equities</div>
                  <div className="text-emerald-700 font-extrabold text-sm sm:text-base mt-0.5">15,000+ Stocks</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs">Trading Hours</div>
                  <div className="text-slate-950 font-extrabold text-sm sm:text-base mt-0.5">24 Hours / 5 Days</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs">Fractional Shares</div>
                  <div className="text-emerald-700 font-extrabold text-sm sm:text-base mt-0.5">From $1.00 Min</div>
                </div>
              </div>
            </div>

            {/* Right Desktop Mockup - Clean Simple Image */}
            <div className="lg:col-span-5">
              <img
                src="/market_research_terminal.png"
                alt="Stocks Trading Terminal"
                className="w-full h-auto max-h-[420px] object-contain shadow-md rounded-xl border border-slate-200"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY INVEST IN EQUITIES */}
      <section className="py-12 lg:py-16 min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Why Global Equities Belong in Every Portfolio
            </h2>
            <p className="text-slate-600 text-base">
              Stock ownership represents fractional equity in the world’s most profitable corporate innovation engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyInvestPoints.map((pt, idx) => {
              const IconComp = pt.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                    <IconComp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 block w-fit">
                    {pt.metric}
                  </span>
                  <h3 className="text-xl font-bold font-serif-heading text-slate-900">{pt.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{pt.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. GLOBAL MARKET COVERAGE & INTERACTIVE EXCHANGES */}
      <section className="py-12 lg:py-16 min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <Globe className="w-3.5 h-3.5 text-emerald-700" />
              DIRECT MARKET ACCESS (DMA)
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              150+ Connected Primary Stock Exchanges
            </h2>
            <p className="text-slate-600 text-base">
              Route orders directly to top global exchanges with sub-millisecond connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exchangeVenues.map((v, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3 hover:bg-white hover:border-emerald-500 hover:shadow-md transition-all">
                <div className="flex justify-between items-center font-mono text-xs">
                  <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">{v.code}</span>
                  <span className="text-emerald-700 font-bold">{v.status}</span>
                </div>
                <h3 className="text-lg font-bold font-serif-heading text-slate-900">{v.name}</h3>
                <div className="flex justify-between items-center text-xs font-mono text-slate-600 border-t border-slate-200 pt-2">
                  <span>Location: {v.city}</span>
                  <strong>Cap: {v.cap}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 24/5 OVERNIGHT TRADING */}
      <section className="py-12 lg:py-16 min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">CONTINUOUS MARKET ACCESS</div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-white">
              24/5 Overnight Stock Trading Session
            </h2>
            <p className="text-slate-400 text-sm">
              Markets don’t stop moving when the floor closes. Trade major US stocks and ETFs continuous 20 hours a day, 5 days a week.
            </p>
          </div>

          {/* Animated Timeline */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center font-mono text-xs">

              <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="text-slate-400 font-bold">PRE-MARKET</div>
                <div className="text-emerald-400 text-sm font-bold">04:00 - 09:30 EST</div>
                <p className="text-slate-500 text-[11px] font-sans">React to early European market movements and morning macro data releases.</p>
              </div>

              <div className="p-5 bg-emerald-950/60 rounded-xl border border-emerald-500/60 space-y-2 shadow-lg shadow-emerald-500/10">
                <div className="text-emerald-400 font-bold">CORE US SESSION</div>
                <div className="text-white text-sm font-bold">09:30 - 16:00 EST</div>
                <p className="text-slate-300 text-[11px] font-sans">NYSE & NASDAQ regular hours trading with maximum lit volume liquidity.</p>
              </div>

              <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="text-slate-400 font-bold">POST-MARKET</div>
                <div className="text-emerald-400 text-sm font-bold">16:00 - 20:00 EST</div>
                <p className="text-slate-500 text-[11px] font-sans">Trade earnings reports released immediately after the closing bell.</p>
              </div>

              <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="text-slate-400 font-bold">OVERNIGHT SESSION</div>
                <div className="text-emerald-400 text-sm font-bold">20:00 - 04:00 EST</div>
                <p className="text-slate-500 text-[11px] font-sans">Direct ATS venue routing aligned with Asian market open hours.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY TRADE WITH BROKERBROS (FEATURE GRID) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Built for Institutional Execution Quality
            </h2>
            <p className="text-slate-600 text-base">
              Everything active traders and long-term investors need for superior equity performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyBrokerBrosGrid.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                      <IconComp className="w-6 h-6 text-emerald-600" />
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100">
                      {feat.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-serif-heading text-slate-900">{feat.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. MARKET STATISTICS */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
            <div>
              <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">AUDITED EQUITY METRICS</div>
              <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-white">Execution Metrics At A Glance</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Institutional performance statistics verified across all active equity accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {statsCounters.map((st, idx) => (
              <div key={idx} className="bg-slate-900/90 p-8 rounded-xl border border-slate-800 space-y-3 hover:border-emerald-500/40 transition-colors">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                  <span>{st.label}</span>
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{st.badge}</span>
                </div>
                <div className="text-3xl sm:text-4xl font-serif-heading font-extrabold text-white tracking-tight pt-1">
                  {st.value}
                </div>
                <div className="text-xs font-sans text-slate-400 pt-1 border-t border-slate-800/80">
                  {st.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROFESSIONAL TRADING PLATFORM SHOWCASE */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Institutional Stock Trading Workspace
            </h2>
            <p className="text-slate-600 text-base">
              A responsive, ultra-fast platform available on Web, Desktop (Windows/Mac/Linux), and Mobile iOS/Android.
            </p>

            {/* Platform Feature Selector */}
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              <button
                onClick={() => setPlatformTab('charting')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${platformTab === 'charting' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                Advanced Technical Charting
              </button>
              <button
                onClick={() => setPlatformTab('depth')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${platformTab === 'depth' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                Level II Order Book Depth
              </button>
              <button
                onClick={() => setPlatformTab('order')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${platformTab === 'order' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                Smart Order Entry & Pegging
              </button>
              <button
                onClick={() => setPlatformTab('analytics')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${platformTab === 'analytics' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                Portfolio Risk & VaR Matrix
              </button>
            </div>
          </div>

          {/* Interactive Mockup Container */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8 shadow-2xl text-white font-mono text-xs">
            {platformTab === 'charting' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <span className="font-bold text-emerald-400">NVDA 1D · Interactive Indicators: EMA (20/50), VWAP, RSI (14), MACD</span>
                  <span className="text-slate-400">100+ Indicators Included</span>
                </div>
                <div className="h-64 bg-slate-900 rounded-xl p-4 border border-slate-800 flex items-end justify-between gap-1 relative overflow-hidden">
                  <div className="absolute top-4 left-4 text-slate-400 text-[11px]">VOLATILITY BREAKOUT PATTERN</div>
                  {[30, 35, 45, 42, 60, 58, 75, 70, 88, 92, 85, 98, 100].map((val, idx) => (
                    <div key={idx} className="flex-1 bg-emerald-500 rounded-t-xs hover:bg-emerald-400 transition-all" style={{ height: `${val}%` }}></div>
                  ))}
                </div>
              </div>
            )}

            {platformTab === 'depth' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <span className="font-bold text-emerald-400">NASDAQ ITCH & NYSE ARCABOOK LIVE DEPTH (AAPL)</span>
                  <span className="text-slate-400">Microsecond Refresh</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1">
                    <div className="text-emerald-400 font-bold border-b border-slate-800 pb-1">BID QUEUE (BUY)</div>
                    <div className="flex justify-between text-[11px]"><span>$224.28</span><span>1,200 sh</span><span className="text-slate-500">NASDAQ</span></div>
                    <div className="flex justify-between text-[11px]"><span>$224.27</span><span>2,500 sh</span><span className="text-slate-500">NYSE</span></div>
                    <div className="flex justify-between text-[11px]"><span>$224.25</span><span>4,100 sh</span><span className="text-slate-500">IEX</span></div>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1">
                    <div className="text-rose-400 font-bold border-b border-slate-800 pb-1">ASK QUEUE (SELL)</div>
                    <div className="flex justify-between text-[11px]"><span>$224.30</span><span>800 sh</span><span className="text-slate-500">NASDAQ</span></div>
                    <div className="flex justify-between text-[11px]"><span>$224.31</span><span>1,900 sh</span><span className="text-slate-500">EDGA</span></div>
                    <div className="flex justify-between text-[11px]"><span>$224.33</span><span>3,200 sh</span><span className="text-slate-500">DARK</span></div>
                  </div>
                </div>
              </div>
            )}

            {platformTab === 'order' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <span className="font-bold text-emerald-400">ADVANCED ORDER TYPES: PEGGED, MIDPOINT, ICEBERG, IOC</span>
                  <span className="text-slate-400">Zero PFOF Direct Routing</span>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-slate-400 text-[11px] block mb-1">Order Mode</label>
                    <div className="p-2 bg-slate-950 rounded border border-slate-800 text-white font-bold">Midpoint Pegged</div>
                  </div>
                  <div>
                    <label className="text-slate-400 text-[11px] block mb-1">Quantity</label>
                    <div className="p-2 bg-slate-950 rounded border border-slate-800 text-white font-bold">500 Shares</div>
                  </div>
                  <div>
                    <label className="text-slate-400 text-[11px] block mb-1">Execution Venue</label>
                    <div className="p-2 bg-slate-950 rounded border border-slate-800 text-emerald-400 font-bold">SmartRouting (All Venues)</div>
                  </div>
                </div>
              </div>
            )}

            {platformTab === 'analytics' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <span className="font-bold text-emerald-400">PORTFOLIO BETA & VALUE-AT-RISK (VaR) ANALYTICS</span>
                  <span className="text-slate-400">Real-Time Risk Calculation</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="text-slate-400 text-[11px]">Portfolio Beta</div>
                    <div className="text-2xl font-bold text-white pt-1">1.08</div>
                  </div>
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="text-slate-400 text-[11px]">1-Day 99% VaR</div>
                    <div className="text-2xl font-bold text-emerald-400 pt-1">$1,240.00</div>
                  </div>
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="text-slate-400 text-[11px]">Sharpe Ratio</div>
                    <div className="text-2xl font-bold text-white pt-1">2.14</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. POPULAR EQUITIES SCREENER & TABLE */}
      <section id="screener-section" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-semibold text-slate-900">
                Popular Equities Market Screener
              </h2>
              <p className="text-slate-600 text-sm">Real-time quotes with direct market venue execution.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Category Filter */}
              <div className="flex gap-1 bg-white p-1 rounded-lg border border-slate-300 text-xs font-mono font-bold">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1.5 rounded cursor-pointer transition-all ${selectedCategory === 'all' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedCategory('tech')}
                  className={`px-3 py-1.5 rounded cursor-pointer transition-all ${selectedCategory === 'tech' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  Tech
                </button>
                <button
                  onClick={() => setSelectedCategory('mega')}
                  className={`px-3 py-1.5 rounded cursor-pointer transition-all ${selectedCategory === 'mega' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  Mega Cap
                </button>
                <button
                  onClick={() => setSelectedCategory('dividends')}
                  className={`px-3 py-1.5 rounded cursor-pointer transition-all ${selectedCategory === 'dividends' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  High Yield
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Filter ticker or sector..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 w-56"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700 text-xs font-mono uppercase border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-6">Symbol / Company</th>
                  <th className="py-3.5 px-4">Sector</th>
                  <th className="py-3.5 px-4">Last Price</th>
                  <th className="py-3.5 px-4">24h Change</th>
                  <th className="py-3.5 px-4">P/E Ratio</th>
                  <th className="py-3.5 px-4">Div Yield</th>
                  <th className="py-3.5 px-4">Market Cap</th>
                  <th className="py-3.5 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {filteredStocks.map((stock, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold">
                      <div className="text-slate-900 font-mono text-sm">{stock.symbol}</div>
                      <div className="text-xs font-normal text-slate-500">{stock.name}</div>
                    </td>
                    <td className="py-4 px-4 font-mono text-xs text-slate-600">{stock.sector}</td>
                    <td className="py-4 px-4 font-bold font-mono text-slate-900">{stock.price}</td>
                    <td className={`py-4 px-4 font-mono font-bold ${stock.isUp ? 'text-emerald-700' : 'text-rose-700'}`}>
                      {stock.change}
                    </td>
                    <td className="py-4 px-4 font-mono text-xs text-slate-600">{stock.pe}</td>
                    <td className="py-4 px-4 font-mono text-xs text-slate-600">{stock.yield}</td>
                    <td className="py-4 px-4 font-mono text-xs text-slate-600">{stock.cap}</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={onOpenAccount}
                        className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-md transition-colors cursor-pointer font-mono"
                      >
                        Trade {stock.symbol}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. INTERACTIVE DIVIDEND COMPOUND CALCULATOR */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <Calculator className="w-3.5 h-3.5 text-emerald-700" />
              INVESTMENT PLANNING TOOL
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Dividend Reinvestment Compound Calculator
            </h2>
            <p className="text-slate-600 text-base">
              Simulate how automated zero-fee dividend reinvestment compounds portfolio capital over time.
            </p>
          </div>

          <div className="bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Calculator Controls */}
            <div className="lg:col-span-6 space-y-6">

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 mb-2">
                  <span>Initial Principal Deposit</span>
                  <span className="text-emerald-700">${initialInvestment.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 mb-2">
                  <span>Monthly Contribution</span>
                  <span className="text-emerald-700">${monthlyContribution.toLocaleString()} / mo</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 mb-2">
                  <span>Expected Dividend Yield (%)</span>
                  <span className="text-emerald-700">{expectedYield}% p.a.</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="10.0"
                  step="0.1"
                  value={expectedYield}
                  onChange={(e) => setExpectedYield(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 mb-2">
                  <span>Time Horizon (Years)</span>
                  <span className="text-emerald-700">{years} Years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

            </div>

            {/* Calculator Output Card */}
            <div className="lg:col-span-6 bg-slate-950 text-white p-8 rounded-xl border border-slate-800 space-y-6">
              <div className="text-xs font-mono text-slate-400">PROJECTED PORTFOLIO OUTCOME ({years} YEARS)</div>

              <div className="space-y-1">
                <div className="text-slate-400 text-xs font-mono">Estimated Total Balance</div>
                <div className="text-4xl font-serif-heading font-extrabold text-emerald-400">
                  ${compoundResult.finalValue.toLocaleString()}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-4 font-mono text-xs">
                <div>
                  <div className="text-slate-400">Total Cash Contributed</div>
                  <div className="text-white font-bold text-sm pt-0.5">${compoundResult.contributions.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-slate-400">Dividends Reinvested</div>
                  <div className="text-emerald-400 font-bold text-sm pt-0.5">${compoundResult.dividendsEarned.toLocaleString()}</div>
                </div>
              </div>

              <button
                onClick={onOpenAccount}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold rounded-lg transition-colors cursor-pointer text-xs font-mono text-center"
              >
                Start Reinvesting Dividends Automatically
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 10. PRICING & COMMISSIONS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Transparent Institutional Pricing
            </h2>
            <p className="text-slate-600 text-base">
              No hidden fees, no markup spreads, and zero payment for order flow.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700 text-xs font-mono uppercase border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6 font-bold">Feature / Fee</th>
                  <th className="py-4 px-6 font-bold text-emerald-800 bg-emerald-50/80">BrokerBros</th>
                  <th className="py-4 px-6 font-bold">Legacy Brokers</th>
                  <th className="py-4 px-6 font-bold">Discount Retail Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {pricingComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 text-slate-600">
                    <td className="py-4 px-6 font-bold text-slate-900">{row.feature}</td>
                    <td className="py-4 px-6 font-mono font-bold text-emerald-900 bg-emerald-50/30">
                      <span className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        {row.brokerbros}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-slate-600">{row.legacy}</td>
                    <td className="py-4 px-6 font-mono text-xs text-slate-500">{row.apps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 11. EDUCATIONAL STRATEGIES SECTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Equity Investment Frameworks
            </h2>
            <p className="text-slate-600 text-base">
              Core portfolio methodologies supported by BrokerBros analytical tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationalStrategies.map((strat, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-200 space-y-3 hover:border-emerald-500/50 transition-colors">
                <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
                  {strat.tag}
                </span>
                <h3 className="text-xl font-bold font-serif-heading text-slate-900 pt-1">{strat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{strat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ ACCORDION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Stocks & Equities FAQ
            </h2>
            <p className="text-slate-600 text-base">
              Frequently asked questions regarding stock trading, execution, and dividend handling.
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

      {/* 13. FINAL CTA */}
      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
