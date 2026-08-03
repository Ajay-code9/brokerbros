import React, { useState } from 'react';
import { CTASection } from '../../components/CTA/CTASection';
import { VideoHeroBackground } from '../../components/Common/VideoHeroBackground';
import {
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  ShieldCheck,
  ShieldAlert,
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
  SlidersHorizontal,
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
  Play,
  Scale,
  Gauge,
  Percent,
  Crosshair,
  ArrowRightLeft,
  Info,
  Terminal,
  Flame,
  Coins,
  Landmark,
  ChevronRight
} from 'lucide-react';

interface FuturesOptionsPageProps {
  onOpenAccount: () => void;
}

export const FuturesOptionsPage: React.FC<FuturesOptionsPageProps> = ({ onOpenAccount }) => {
  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Live Futures Market Ticker
  const liveFuturesTicker = [
    { symbol: 'E-mini S&P (ES)', price: '5,548.25', change: '+0.85%', isUp: true, vol: '1.42M' },
    { symbol: 'Micro NQ (MNQ)', price: '19,842.50', change: '+1.24%', isUp: true, vol: '890K' },
    { symbol: 'Crude Oil (CL)', price: '$78.42', change: '-1.15%', isUp: false, vol: '640K' },
    { symbol: 'Gold (GC)', price: '$2,418.80', change: '+0.45%', isUp: true, vol: '320K' },
    { symbol: 'FDAX (DEX)', price: '18,420.00', change: '+0.62%', isUp: true, vol: '180K' },
    { symbol: 'HSI Futures (HSI)', price: '17,890.00', change: '-0.38%', isUp: false, vol: '210K' },
    { symbol: '10Y Note (ZN)', price: '108-16', change: '+0.12%', isUp: true, vol: '950K' }
  ];

  // Global Exchanges Data
  const [activeExchange, setActiveExchange] = useState<'CME' | 'Eurex' | 'ICE' | 'HKEX' | 'SGX' | 'CBOE'>('CME');

  const exchangesData = {
    CME: {
      name: 'CME Group (Chicago)',
      flag: '🇺🇸',
      location: 'Chicago, USA',
      latency: '< 1.2 ms',
      hours: '23 Hours / Day (Sun 6pm - Fri 5pm ET)',
      keyContracts: ['E-mini S&P 500 (ES)', 'Micro Nasdaq (MNQ)', 'Crude Oil (CL)', 'Gold (GC)', '10Y Note (ZN)'],
      description: 'The world’s largest and most liquid derivatives marketplace, spanning stock indices, interest rates, foreign exchange, energy, and metals.',
      volume: '18.5M+ Contracts / Day',
      coLocation: 'Equinix NY4 / Aurora Data Center'
    },
    Eurex: {
      name: 'Eurex Exchange (Frankfurt)',
      flag: '🇪🇺',
      location: 'Frankfurt, Germany',
      latency: '< 1.5 ms',
      hours: '01:00 - 23:00 CET',
      keyContracts: ['FDAX (DAX 40)', 'Euro STOXX 50 (FESX)', 'Euro-Bund (FGBL)', 'Euro-Bobl (FGBM)'],
      description: 'Europe’s premier derivatives exchange offering benchmark index, fixed income, and single stock futures with institutional liquidity.',
      volume: '6.8M+ Contracts / Day',
      coLocation: 'Equinix FR2 Frankfurt'
    },
    ICE: {
      name: 'Intercontinental Exchange (ICE)',
      flag: '🌐',
      location: 'Atlanta / London',
      latency: '< 1.8 ms',
      hours: '22 Hours / Day',
      keyContracts: ['Brent Crude Oil (B)', 'WTI Crude Oil', 'US Dollar Index (DX)', 'Coffee (KC)', 'Sugar No. 11'],
      description: 'Global benchmark operator for energy markets, agricultural soft commodities, and the US Dollar Index.',
      volume: '5.2M+ Contracts / Day',
      coLocation: 'Equinix LD4 London / NY4'
    },
    HKEX: {
      name: 'Hong Kong Exchanges & Clearing (HKEX)',
      flag: '🇭🇰',
      location: 'Hong Kong',
      latency: '< 2.1 ms',
      hours: '09:15 - 03:00 HKT',
      keyContracts: ['Hang Seng Index (HSI)', 'Micro HSI (MHI)', 'Hang Seng TECH Index (HTI)', 'USD/CNH FX'],
      description: 'Gateway to Asian equity benchmarks and Offshore Renminbi (CNH) derivatives for international institutional investors.',
      volume: '1.9M+ Contracts / Day',
      coLocation: 'TKO Data Centre Hong Kong'
    },
    SGX: {
      name: 'Singapore Exchange (SGX)',
      flag: '🇸🇬',
      location: 'Singapore',
      latency: '< 2.4 ms',
      hours: '08:30 - 05:15 SGT',
      keyContracts: ['FTSE China A50 (CN)', 'Nikkei 225 (NK)', 'SGX Iron Ore 62% (FEF)', 'INR/USD FX'],
      description: 'Asia’s international multi-asset gateway providing primary hedging benchmarks for Chinese equities, Japanese Nikkei, and Iron Ore.',
      volume: '1.4M+ Contracts / Day',
      coLocation: 'SGX Data Centre Singapore'
    },
    CBOE: {
      name: 'CBOE Futures Exchange (CFE)',
      flag: '🇺🇸',
      location: 'Chicago, USA',
      latency: '< 1.1 ms',
      hours: '23 Hours / Day',
      keyContracts: ['VIX Futures (VX)', 'Mini VIX Futures (VXM)', 'AMERIBOR Futures'],
      description: 'Home of the CBOE Volatility Index (VIX) futures, providing pure-play hedging instruments against global market volatility shocks.',
      volume: '850K+ Contracts / Day',
      coLocation: 'Equinix NY4 Secaucus'
    }
  };

  const activeExData = exchangesData[activeExchange];

  // Available Futures Categories State
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'equity' | 'energy' | 'metals' | 'rates' | 'agri' | 'fx' | 'micro'>('all');

  const futuresCategories = [
    {
      id: 'equity',
      name: 'Equity Indices',
      icon: TrendingUp,
      count: '18 Contracts',
      desc: 'Liquid benchmarks covering US, European, and Asian equity stock indices.',
      topContracts: ['E-mini S&P 500 (ES)', 'E-mini Nasdaq-100 (NQ)', 'Micro E-mini Russell 2000 (M2K)', 'DAX 40 (FDAX)']
    },
    {
      id: 'energy',
      name: 'Energy & Commodities',
      icon: Flame,
      count: '14 Contracts',
      desc: 'Trade physical energy benchmarks with tight spreads and real-time inventory impact.',
      topContracts: ['WTI Crude Oil (CL)', 'Brent Crude (B)', 'Natural Gas (NG)', 'Micro WTI Oil (MCL)']
    },
    {
      id: 'metals',
      name: 'Precious & Industrial Metals',
      icon: Coins,
      count: '12 Contracts',
      desc: 'Hedge inflation and macroeconomic moves with physical gold, silver, and copper.',
      topContracts: ['Gold Futures (GC)', 'Silver Futures (SI)', 'High Grade Copper (HG)', 'Micro Gold (MGC)']
    },
    {
      id: 'rates',
      name: 'Treasuries & Rates',
      icon: Landmark,
      count: '16 Contracts',
      desc: 'Access global yield curves, US Treasuries, and SOFR interest rate benchmarks.',
      topContracts: ['10-Year Note (ZN)', '30-Year Treasury Bond (ZB)', '3-Month SOFR (SR3)', 'Euro-Bund (FGBL)']
    },
    {
      id: 'agri',
      name: 'Agriculture & Softs',
      icon: Layers,
      count: '15 Contracts',
      desc: 'Global grain, livestock, and soft commodity contracts traded on CME and ICE.',
      topContracts: ['Corn (ZC)', 'Soybeans (ZS)', 'Wheat (ZW)', 'Coffee (KC)']
    },
    {
      id: 'fx',
      name: 'Currency Futures',
      icon: Globe,
      count: '22 Contracts',
      desc: 'Institutional FX futures eliminating counterparty risk with centralized exchange clearing.',
      topContracts: ['Euro FX (6E)', 'Japanese Yen (6J)', 'British Pound (6B)', 'Offshore CNH (CNH)']
    },
    {
      id: 'micro',
      name: 'Micro & E-mini Contracts',
      icon: Sparkles,
      count: '24 Contracts',
      desc: 'Trade at 1/10th the size of standard contracts for precise position sizing and lower margin.',
      topContracts: ['Micro E-mini S&P (MES)', 'Micro Nasdaq (MNQ)', 'Micro Crude Oil (MCL)', 'Micro Gold (MGC)']
    }
  ];

  // Contract Specifications Table Data
  const [contractSearch, setContractSearch] = useState('');

  const contractSpecs = [
    { symbol: 'ES', name: 'E-mini S&P 500', exchange: 'CME', category: 'equity', size: '$50 × Index', tick: '0.25 pt ($12.50)', dayMargin: '$1,250', initMargin: '$12,500', hours: '23/5', settle: 'Financial Cash' },
    { symbol: 'MES', name: 'Micro E-mini S&P 500', exchange: 'CME', category: 'micro', size: '$5 × Index', tick: '0.25 pt ($1.25)', dayMargin: '$125', initMargin: '$1,250', hours: '23/5', settle: 'Financial Cash' },
    { symbol: 'NQ', name: 'E-mini Nasdaq-100', exchange: 'CME', category: 'equity', size: '$20 × Index', tick: '0.25 pt ($5.00)', dayMargin: '$1,820', initMargin: '$18,200', hours: '23/5', settle: 'Financial Cash' },
    { symbol: 'MNQ', name: 'Micro E-mini Nasdaq', exchange: 'CME', category: 'micro', size: '$2 × Index', tick: '0.25 pt ($0.50)', dayMargin: '$182', initMargin: '$1,820', hours: '23/5', settle: 'Financial Cash' },
    { symbol: 'CL', name: 'Crude Oil (WTI)', exchange: 'NYMEX/CME', category: 'energy', size: '1,000 Barrels', tick: '$0.01 ($10.00)', dayMargin: '$680', initMargin: '$6,800', hours: '23/5', settle: 'Physical' },
    { symbol: 'MCL', name: 'Micro WTI Crude Oil', exchange: 'NYMEX/CME', category: 'micro', size: '100 Barrels', tick: '$0.01 ($1.00)', dayMargin: '$68', initMargin: '$680', hours: '23/5', settle: 'Financial Cash' },
    { symbol: 'GC', name: 'Gold Futures', exchange: 'COMEX/CME', category: 'metals', size: '100 troy oz', tick: '$0.10 ($10.00)', dayMargin: '$920', initMargin: '$9,200', hours: '23/5', settle: 'Physical' },
    { symbol: 'MGC', name: 'Micro Gold', exchange: 'COMEX/CME', category: 'micro', size: '10 troy oz', tick: '$0.10 ($1.00)', dayMargin: '$92', initMargin: '$920', hours: '23/5', settle: 'Financial Cash' },
    { symbol: 'FDAX', name: 'DAX 40 Futures', exchange: 'Eurex', category: 'equity', size: '€25 × Index', tick: '1.0 pt (€25.00)', dayMargin: '€3,200', initMargin: '€32,000', hours: '22/5', settle: 'Financial Cash' },
    { symbol: 'ZN', name: '10-Year U.S. Treasury Note', exchange: 'CBOT/CME', category: 'rates', size: '$100,000 Par', tick: '1/64 pt ($15.625)', dayMargin: '$220', initMargin: '$2,200', hours: '23/5', settle: 'Physical Delivery' },
    { symbol: 'B', name: 'Brent Crude Oil', exchange: 'ICE', category: 'energy', size: '1,000 Barrels', tick: '$0.01 ($10.00)', dayMargin: '$710', initMargin: '$7,100', hours: '22/5', settle: 'Financial Cash' },
    { symbol: 'HSI', name: 'Hang Seng Index Futures', exchange: 'HKEX', category: 'equity', size: 'HK$50 × Index', tick: '1 pt (HK$50)', dayMargin: 'HK$12,800', initMargin: 'HK$128,000', hours: '18/5', settle: 'Financial Cash' }
  ];

  const filteredContracts = contractSpecs.filter((c) => {
    const matchesCat = selectedCategory === 'all' ? true : c.category === selectedCategory || (selectedCategory === 'micro' && c.symbol.startsWith('M'));
    const matchesSearch = c.name.toLowerCase().includes(contractSearch.toLowerCase()) || c.symbol.toLowerCase().includes(contractSearch.toLowerCase()) || c.exchange.toLowerCase().includes(contractSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Platform Showcase Tab State
  const [activePlatformTab, setActivePlatformTab] = useState<'dom' | 'chart' | 'ladder' | 'positions'>('dom');

  // Margin Calculator Interactive State
  const [calcContract, setCalcContract] = useState<'ES' | 'MES' | 'NQ' | 'MNQ' | 'CL' | 'GC'>('MES');
  const [calcNumContracts, setCalcNumContracts] = useState<number>(5);

  const calcRatesMap = {
    ES: { name: 'E-mini S&P 500', dayMargin: 1250, initMargin: 12500, tickVal: 12.50 },
    MES: { name: 'Micro E-mini S&P 500', dayMargin: 125, initMargin: 1250, tickVal: 1.25 },
    NQ: { name: 'E-mini Nasdaq-100', dayMargin: 1820, initMargin: 18200, tickVal: 5.00 },
    MNQ: { name: 'Micro E-mini Nasdaq', dayMargin: 182, initMargin: 1820, tickVal: 0.50 },
    CL: { name: 'Crude Oil (WTI)', dayMargin: 680, initMargin: 6800, tickVal: 10.00 },
    GC: { name: 'Gold Futures', dayMargin: 920, initMargin: 9200, tickVal: 10.00 }
  };

  const activeCalcData = calcRatesMap[calcContract];
  const totalDayMargin = activeCalcData.dayMargin * calcNumContracts;
  const totalInitMargin = activeCalcData.initMargin * calcNumContracts;

  // Education Active State
  const [activeEduTab, setActiveEduTab] = useState<'micro_vs_emini' | 'margins' | 'rollover' | 'settlement'>('micro_vs_emini');

  // FAQ Active State
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the difference between Day Trading Margin and Overnight Initial Margin?',
      a: 'Intraday (Day Trading) Margin is the reduced capital required to enter and hold a futures position during active market hours (typically 9:30 AM to 4:00 PM ET). BrokerBros offers 10% intraday margins (e.g. $125 for Micro S&P). Overnight Initial Margin is mandated by exchange clearinghouses (e.g. CME) and applies if positions remain open past 5:00 PM ET.'
    },
    {
      q: 'How does contract rollover work for futures traders at BrokerBros?',
      a: 'Futures contracts expire on fixed quarterly schedules (March, June, September, December). Our automated Contract Explorer alerts you 5 days prior to first notice date or expiration, allowing 1-click rollover to the next active contract month with zero leg-risk.'
    },
    {
      q: 'Can I trade Micro Futures with a smaller account balance?',
      a: 'Yes. Micro E-mini futures (MES, MNQ, MCL, MGC) are 1/10th the contract size of standard E-mini contracts. You can trade Micro S&P 500 futures with as little as $125 day trading margin, making them ideal for active retail traders and precise portfolio hedging.'
    },
    {
      q: 'What clearing exchanges does BrokerBros connect to directly?',
      a: 'BrokerBros provides direct co-located DMA (Direct Market Access) gateways to CME Group (CME, CBOT, NYMEX, COMEX), Eurex, ICE Futures Europe/US, HKEX, SGX, and CBOE Futures Exchange (CFE).'
    },
    {
      q: 'Are there any hidden ticket surcharges or routing fees?',
      a: 'No. Futures execution fees are transparent: Micro contracts start at $0.25 per side, and E-mini contracts start at $0.85 per side. Exchange clearing fees and NFA regulatory fees are itemized directly on daily trade confirmations.'
    }
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-white text-slate-900 px-5 py-4 rounded-xl border border-emerald-500/40 shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <div>
            <div className="text-xs font-bold text-slate-900">Action Confirmed</div>
            <div className="text-[11px] text-slate-500">{toastMessage}</div>
          </div>
        </div>
      )}

      {/* Live Futures Market Ticker Tape */}
      <div className="bg-slate-950 border-b border-slate-800 py-2.5 overflow-hidden font-mono text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold shrink-0 z-10 bg-slate-950 pr-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            GLOBAL FUTURES STREAM:
          </div>
          <div className="overflow-hidden flex-1 relative group no-scrollbar">
            <div className="flex gap-6 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
              {[...liveFuturesTicker, ...liveFuturesTicker, ...liveFuturesTicker, ...liveFuturesTicker].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 shrink-0 bg-slate-900/90 px-3 py-1 rounded border border-slate-800 shadow-xs">
                  <span className="font-bold text-white">{item.symbol}</span>
                  <span className="text-slate-300">{item.price}</span>
                  <span className={item.isUp ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                    {item.change}
                  </span>
                  <span className="text-slate-500 text-[10px]">Vol {item.vol}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 1. PREMIUM HERO SECTION WITH REUSABLE VIDEO BACKGROUND */}
      <section className="relative bg-gradient-to-b from-[#06141D] via-[#0B1E2B] to-[#0A1A24] text-white py-8 lg:py-14 min-h-[calc(100vh-80px)] flex items-center border-b border-emerald-900/40 overflow-hidden font-sans">
        
        {/* Mesh Glow Lighting Accents */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Reusable Video Hero Background */}
        <VideoHeroBackground videoSrc="/test.mp4" opacity={0.35} theme="dark" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-4 lg:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-lg shadow-emerald-500/10">
                <Globe className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '12s' }} />
                <span>CME • EUREX • ICE • HKEX • SGX • CBOE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white font-sans">
                Sub-Millisecond Global Futures <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  & Micro E-Mini Execution.
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal">
                Trade 60+ global benchmark futures with 50% intraday margin leverage, sub-1.2ms CME Globex co-located routing, and zero hidden ticket fees.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOpenAccount}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 text-slate-950 font-black rounded-xl shadow-xl shadow-emerald-500/25 transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
                >
                  <span>Open Futures Account</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('contract-specs-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-3 bg-slate-900/90 hover:bg-slate-800 text-cyan-300 font-bold rounded-xl border border-cyan-500/40 shadow-lg backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
                >
                  <Search className="w-4 h-4 text-cyan-400" />
                  <span>View Contract Specs</span>
                </button>
              </div>
            </div>

            {/* Right Sleek Border Image Card (Zero Text Overlays) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/40 via-teal-500/30 to-cyan-500/40 opacity-40 blur-xl animate-pulse pointer-events-none" />
              <div className="relative p-1.5 rounded-2xl bg-[#0B1E2B] border border-slate-800 shadow-2xl ring-1 ring-emerald-500/30 overflow-hidden group">
                <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden">
                  <img
                    src="/futures_globex_terminal.png"
                    alt="Futures Globex Terminal"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY TRADE FUTURES? */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <Award className="w-3.5 h-3.5 text-emerald-700" />
              CAPITAL EFFICIENCY & DIRECT CLEARING
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Why Institutional Traders Prefer Global Futures
            </h2>
            <p className="text-slate-600 text-base">
              Futures contracts provide superior leverage, 23-hour continuous market access, tax advantages, and centralized exchange clearing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Portfolio & Equity Hedging</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hedge physical equity portfolios, interest rate exposure, or raw material supply costs with exact correlation and zero stock picking risk.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold">1:1 Beta Correlation</div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">10% Intraday Day Trading Leverage</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Control large notionals ($275,000 S&P index value) with as little as $1,250 intraday margin, freeing up capital for active strategies.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold">Up to 20x Capital Efficiency</div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">23/5 Continuous Global Access</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Respond instantly to overnight economic data releases, earnings, and geopolitical events while equity markets are closed.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold">Sun 6pm - Fri 5pm ET</div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                <Percent className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Section 1256 Favorable Tax Status</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                US futures traders benefit from Section 1256 tax treatment: 60% long-term and 40% short-term capital gains rates regardless of holding period.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold">60/40 Blended Tax Treatment</div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                <BarChart3 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Centralized Exchange Liquidity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                All market participants see identical Order Books (DOM) cleared directly through regulated clearinghouses (CME Clearing, Eurex Clearing).
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold">Zero Counterparty Risk</div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Micro & E-mini Flex Contracts</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Scale position sizing with precision. Micro futures allow smaller accounts to manage risk with 1/10th contract sizing.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold">Micro Sizing Available</div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. GLOBAL FUTURES EXCHANGES MAP / SELECTOR */}
      <section className="relative py-8 lg:py-12 bg-[#06141D] text-white border-b border-emerald-900/40 font-sans min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
        
        {/* Glow Lighting Accents */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 lg:space-y-8 relative z-10 font-sans w-full">
          
          <div className="text-center max-w-3xl mx-auto space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-bold uppercase tracking-wider">
              <Globe className="w-3 h-3 text-emerald-400 animate-spin" style={{ animationDuration: '12s' }} />
              <span>DIRECT MARKET ACCESS (DMA) NETWORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-sans tracking-tight">
              Connected to Premier Futures Exchanges
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans max-w-xl mx-auto">
              Click an exchange below to view direct latency specs, trading hours, and primary traded contracts.
            </p>
          </div>

          {/* Exchange Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 font-mono text-xs">
            {(['CME', 'Eurex', 'ICE', 'HKEX', 'SGX', 'CBOE'] as const).map((exKey) => (
              <button
                key={exKey}
                onClick={() => setActiveExchange(exKey)}
                className={`px-5 py-2.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 font-mono ${
                  activeExchange === exKey
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md shadow-emerald-500/25'
                    : 'bg-[#0D2231] text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{exchangesData[exKey].flag}</span>
                <span>{exKey}</span>
              </button>
            ))}
          </div>

          {/* Active Exchange Detailed Card */}
          <div className="bg-[#0D2231]/95 backdrop-blur-md rounded-2xl border border-emerald-500/30 p-5 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-2xl">
            
            <div className="lg:col-span-7 space-y-3.5">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{activeExData.flag}</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-sans">{activeExData.name}</h3>
                  <div className="text-[11px] font-mono text-slate-400">{activeExData.location}</div>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">{activeExData.description}</p>

              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider">Primary Benchmark Contracts:</div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {activeExData.keyContracts.map((c, i) => (
                    <span key={i} className="bg-[#06141D] px-2.5 py-1 rounded border border-slate-800 text-slate-200">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#06141D] p-4 sm:p-5 rounded-xl border border-slate-800 space-y-2.5 font-mono text-[11px]">
              <div className="text-slate-400 text-center border-b border-slate-800 pb-2 uppercase font-bold text-[10px] tracking-wider">
                Direct Infrastructure Metrics
              </div>

              <div className="flex justify-between items-center p-2.5 bg-[#0D2231] rounded-lg border border-slate-800">
                <span className="text-slate-400">Co-Location Latency</span>
                <span className="text-emerald-400 font-bold">{activeExData.latency}</span>
              </div>

              <div className="flex justify-between items-center p-2.5 bg-[#0D2231] rounded-lg border border-slate-800">
                <span className="text-slate-400">Daily Clearing Volume</span>
                <span className="text-white font-bold">{activeExData.volume}</span>
              </div>

              <div className="flex justify-between items-center p-2.5 bg-[#0D2231] rounded-lg border border-slate-800">
                <span className="text-slate-400">Trading Hours</span>
                <span className="text-slate-300 text-[10px] sm:text-[11px] text-right">{activeExData.hours}</span>
              </div>

              <div className="flex justify-between items-center p-2.5 bg-[#0D2231] rounded-lg border border-slate-800">
                <span className="text-slate-400">Primary Gateway</span>
                <span className="text-cyan-400 font-bold">{activeExData.coLocation}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. AVAILABLE FUTURES MARKETS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <Layers className="w-3.5 h-3.5 text-emerald-700" />
              GLOBAL ASSET CLASS COVERAGE
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Explore Available Futures Markets
            </h2>
            <p className="text-slate-600 text-base">
              Filter products across major global asset classes to find contracts tailored to your trading style.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futuresCategories.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="bg-white p-7 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                        <CatIcon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100">
                        {cat.count}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-serif-heading text-slate-900">{cat.name}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{cat.desc}</p>

                    <div className="space-y-1 pt-2">
                      <div className="text-[11px] font-mono text-slate-500 uppercase">Top Contracts:</div>
                      <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                        {cat.topContracts.map((tc, idx) => (
                          <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                            {tc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCategory(cat.id as any);
                      const el = document.getElementById('contract-specs-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono font-bold rounded-lg transition-colors cursor-pointer text-xs flex items-center justify-center gap-1 mt-4"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. CONTRACT SPECIFICATIONS TABLE */}
      <section id="contract-specs-section" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200 mb-2">
                <BarChart3 className="w-3.5 h-3.5 text-emerald-700" />
                ENTERPRISE CONTRACT MATRIX
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-semibold text-slate-900">
                Contract Specifications & Margins
              </h2>
              <p className="text-slate-600 text-sm">Real-time margin requirements, tick sizes, and trading hours.</p>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search contract or symbol..."
                  value={contractSearch}
                  onChange={(e) => setContractSearch(e.target.value)}
                  className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-mono focus:outline-hidden focus:border-emerald-500 w-60"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as any)}
                className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-mono focus:outline-hidden focus:border-emerald-500 cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="equity">Equity Indices</option>
                <option value="micro">Micro Futures</option>
                <option value="energy">Energy</option>
                <option value="metals">Precious Metals</option>
                <option value="rates">Treasuries & Rates</option>
              </select>
            </div>
          </div>

          {/* Specs Table */}
          <div className="overflow-x-auto bg-slate-950 text-white rounded-xl border border-slate-800 shadow-xl font-mono text-xs">
            <table className="w-full text-left">
              <thead className="bg-slate-900 text-slate-400 uppercase text-[11px] border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4 font-bold">Symbol / Name</th>
                  <th className="py-3.5 px-4 font-bold">Exchange</th>
                  <th className="py-3.5 px-4 font-bold">Contract Size</th>
                  <th className="py-3.5 px-4 font-bold">Tick Size & Value</th>
                  <th className="py-3.5 px-4 font-bold text-emerald-400">Day Margin (10%)</th>
                  <th className="py-3.5 px-4 font-bold">Overnight Initial</th>
                  <th className="py-3.5 px-4 font-bold">Trading Hours</th>
                  <th className="py-3.5 px-4 font-bold text-right">Trade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850">
                {filteredContracts.map((c, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">
                      <div className="flex items-center gap-2">
                        <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                          {c.symbol}
                        </span>
                        <span>{c.name}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-300">{c.exchange}</td>
                    <td className="py-3.5 px-4 text-slate-300">{c.size}</td>
                    <td className="py-3.5 px-4 text-slate-300">{c.tick}</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-400 bg-emerald-500/5">{c.dayMargin}</td>
                    <td className="py-3.5 px-4 text-slate-300">{c.initMargin}</td>
                    <td className="py-3.5 px-4 text-slate-400">{c.hours}</td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => showToast(`Selected ${c.name} (${c.symbol}) for trading`)}
                        className="px-3 py-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded transition-colors cursor-pointer text-[11px]"
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 6. MARKET STATISTICS STATS STRIP */}
      <section className="py-16 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center font-mono">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">100+</div>
              <div className="text-xs text-slate-400 mt-1 uppercase">Futures Products</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">6</div>
              <div className="text-xs text-slate-400 mt-1 uppercase">Global Exchange Clusters</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">14.8M+</div>
              <div className="text-xs text-slate-400 mt-1 uppercase">Monthly Contracts</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">23/5</div>
              <div className="text-xs text-slate-400 mt-1 uppercase">Continuous Access</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">&lt; 1.2ms</div>
              <div className="text-xs text-slate-400 mt-1 uppercase">Execution Latency</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRADING PLATFORM SHOWCASE */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">INSTITUTIONAL TERMINAL</div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-white">
              Professional Futures Trading Interface
            </h2>
            <p className="text-slate-400 text-sm">
              Features custom Depth of Market (DOM) price ladders, 1-click bracket execution, footprint volume profiling, and real-time risk gauges.
            </p>
          </div>

          {/* Platform Feature Selector */}
          <div className="flex flex-wrap justify-center gap-2 font-mono text-xs">
            {[
              { id: 'dom', label: 'Depth of Market (DOM) Superladder' },
              { id: 'chart', label: 'Tick & Volume Profile Charts' },
              { id: 'ladder', label: '1-Click Bracket Execution' },
              { id: 'positions', label: 'Live Risk & Positions Monitor' }
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePlatformTab(p.id as any)}
                className={`px-5 py-2.5 rounded-xl font-bold transition-all cursor-pointer ${
                  activePlatformTab === p.id
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Platform Preview Window Container */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 lg:p-8 shadow-2xl space-y-6">
            
            {activePlatformTab === 'dom' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
                  <span className="font-bold text-white text-sm">CME E-mini S&P 500 (ESU26) - Live DOM Superladder</span>
                  <span className="text-emerald-400 font-bold">1-CLICK ORDERING ACTIVE</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-slate-400 text-center font-bold">BUY LIMIT COLUMN</div>
                    <div className="space-y-1">
                      <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded flex justify-between">
                        <span>5,548.00</span>
                        <span className="font-bold">240 Contracts</span>
                      </div>
                      <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded flex justify-between">
                        <span>5,547.75</span>
                        <span className="font-bold">380 Contracts</span>
                      </div>
                      <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded flex justify-between">
                        <span>5,547.50</span>
                        <span className="font-bold">510 Contracts</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2 text-center">
                    <div className="text-slate-400 font-bold">LAST TRADED PRICE</div>
                    <div className="text-3xl font-extrabold text-emerald-400 my-4">5,548.25</div>
                    <div className="text-xs text-slate-400">Total Volume: 1,420,850</div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-slate-400 text-center font-bold">SELL LIMIT COLUMN</div>
                    <div className="space-y-1">
                      <div className="p-2 bg-rose-500/10 text-rose-400 rounded flex justify-between">
                        <span>5,548.50</span>
                        <span className="font-bold">190 Contracts</span>
                      </div>
                      <div className="p-2 bg-rose-500/10 text-rose-400 rounded flex justify-between">
                        <span>5,548.75</span>
                        <span className="font-bold">290 Contracts</span>
                      </div>
                      <div className="p-2 bg-rose-500/10 text-rose-400 rounded flex justify-between">
                        <span>5,549.00</span>
                        <span className="font-bold">420 Contracts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePlatformTab === 'chart' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
                  <span className="font-bold text-white text-sm">Volume Profile & Heikin-Ashi Tick Charts</span>
                  <span className="text-cyan-400 font-bold">POC: 5,542.50</span>
                </div>
                <div className="h-64 bg-slate-900 rounded-xl border border-slate-800 p-4 relative flex items-center justify-center">
                  <svg className="w-full h-full text-emerald-400" viewBox="0 0 500 150" fill="none">
                    <path d="M 10 120 L 80 100 L 140 110 L 220 40 L 300 60 L 380 20 L 480 30" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                    <line x1="0" y1="75" x2="500" y2="75" stroke="#334155" strokeDasharray="4 4" />
                  </svg>
                  <div className="absolute top-4 left-4 bg-slate-950/90 px-3 py-1.5 rounded border border-slate-800 text-xs font-mono">
                    <span className="text-slate-400">Point of Control (POC): </span>
                    <span className="text-emerald-400 font-bold">5,542.50</span>
                  </div>
                </div>
              </div>
            )}

            {activePlatformTab === 'ladder' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
                  <span className="font-bold text-white text-sm">Automated OCO Bracket Orders (Target + Stop)</span>
                  <span className="text-emerald-400 font-bold">AUTO BRACKET ACTIVE</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-3">
                    <div className="text-emerald-400 font-bold">Take-Profit Target (Limit)</div>
                    <div className="flex justify-between text-slate-300">
                      <span>Target Ticks:</span>
                      <span className="font-bold text-white">+16 Ticks (+4.00 pts)</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Expected Gain:</span>
                      <span className="font-bold text-emerald-400">+$200.00 / Contract</span>
                    </div>
                  </div>
                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-3">
                    <div className="text-rose-400 font-bold">Stop-Loss Protection (Stop-Market)</div>
                    <div className="flex justify-between text-slate-300">
                      <span>Stop Ticks:</span>
                      <span className="font-bold text-white">-8 Ticks (-2.00 pts)</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Max Risk:</span>
                      <span className="font-bold text-rose-400">-$100.00 / Contract</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePlatformTab === 'positions' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
                  <span className="font-bold text-white text-sm">Live Positions & Real-Time Margin Monitor</span>
                  <span className="text-emerald-400 font-bold">UNREALIZED P&L: +$1,420.00</span>
                </div>
                <div className="overflow-x-auto font-mono text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-slate-900 text-slate-400">
                      <tr>
                        <th className="p-3">Contract</th>
                        <th className="p-3">Pos</th>
                        <th className="p-3">Avg Entry</th>
                        <th className="p-3">Last</th>
                        <th className="p-3">Margin Used</th>
                        <th className="p-3 text-right">Unrealized P&L</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      <tr>
                        <td className="p-3 font-bold text-white">MESU26 (Micro S&P)</td>
                        <td className="p-3 text-emerald-400 font-bold">+10 Long</td>
                        <td className="p-3 text-slate-300">5,520.00</td>
                        <td className="p-3 text-slate-300">5,548.25</td>
                        <td className="p-3 text-slate-300">$1,250.00</td>
                        <td className="p-3 text-right font-bold text-emerald-400">+$1,412.50</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-white">MGCQ26 (Micro Gold)</td>
                        <td className="p-3 text-emerald-400 font-bold">+5 Long</td>
                        <td className="p-3 text-slate-300">$2,410.00</td>
                        <td className="p-3 text-slate-300">$2,418.80</td>
                        <td className="p-3 text-slate-300">$460.00</td>
                        <td className="p-3 text-right font-bold text-emerald-400">+$440.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 8. RISK MANAGEMENT & MARGIN CALCULATOR */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <Calculator className="w-3.5 h-3.5 text-emerald-700" />
              INTERACTIVE RISK & MARGIN CALCULATOR
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Calculate Your Margin & Position Size
            </h2>
            <p className="text-slate-600 text-base">
              Test day trading margins versus overnight requirements before submitting live orders.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Calculator Controls */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-700 uppercase">Select Futures Contract</label>
                <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                  {(['MES', 'ES', 'MNQ', 'NQ', 'CL', 'GC'] as const).map((sym) => (
                    <button
                      key={sym}
                      onClick={() => setCalcContract(sym)}
                      className={`p-2.5 rounded-lg font-bold border transition-all cursor-pointer ${
                        calcContract === sym
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {sym}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between text-slate-700">
                  <span>Number of Contracts:</span>
                  <span className="font-bold text-emerald-700 text-sm">{calcNumContracts} Contracts</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={calcNumContracts}
                  onChange={(e) => setCalcNumContracts(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1 font-mono text-xs text-slate-600">
                <div>Contract: <strong className="text-slate-900">{activeCalcData.name}</strong></div>
                <div>Tick Value: <strong className="text-emerald-700">${activeCalcData.tickVal.toFixed(2)} / tick</strong></div>
              </div>
            </div>

            {/* Margin Output Display */}
            <div className="lg:col-span-6 bg-slate-950 text-white p-8 rounded-xl border border-slate-800 space-y-6 font-mono">
              <div className="text-xs text-slate-400 text-center border-b border-slate-800 pb-2 uppercase">
                Calculated Capital Requirements
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-xs text-slate-400">Intraday Day Margin (10%)</div>
                  <div className="text-2xl font-extrabold text-emerald-400">${totalDayMargin.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500">Required 9:30am - 4:00pm ET</div>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-xs text-slate-400">Overnight Initial Margin</div>
                  <div className="text-2xl font-extrabold text-white">${totalInitMargin.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500">Required Past 5:00pm ET</div>
                </div>
              </div>

              <button
                onClick={() => showToast(`Simulated Account Ready: $${totalDayMargin.toLocaleString()} allocated for ${calcNumContracts}x ${calcContract}`)}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-colors cursor-pointer text-xs"
              >
                APPLY FOR $125 INTRADAY MARGIN ACCOUNT
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 9. ORDER EXECUTION ROUTING DIAGRAM */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">DIRECT EXCHANGE GATEWAY</div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-white">
              Sub-Millisecond Order Routing Engine
            </h2>
            <p className="text-slate-400 text-sm">
              How BrokerBros transmits futures orders directly to global exchange matching engines without intermediary markups or delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 font-mono text-xs items-center">
            
            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto font-bold">1</div>
              <div className="font-bold text-white">Client Order</div>
              <div className="text-[11px] text-slate-400">Web / Mobile / API</div>
            </div>

            <div className="text-emerald-400 text-center hidden md:block">
              <ArrowRight className="w-6 h-6 mx-auto animate-pulse" />
            </div>

            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto font-bold">2</div>
              <div className="font-bold text-white">BrokerBros Smart Routing</div>
              <div className="text-[11px] text-slate-400">Co-located Gateway</div>
            </div>

            <div className="text-emerald-400 text-center hidden md:block">
              <ArrowRight className="w-6 h-6 mx-auto animate-pulse" />
            </div>

            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 text-center space-y-2 border-emerald-500/50">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto font-bold">3</div>
              <div className="font-bold text-emerald-400">CME / Eurex Match</div>
              <div className="text-[11px] text-slate-400">&lt; 1.2ms Fill Confirmation</div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. MARKET EDUCATION CARDS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              FUTURES ACADEMY & MECHANICS
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Master Futures Contract Mechanics
            </h2>
            <p className="text-slate-600 text-base">
              Clear, practical explanations of contract month codes, rollover timing, and physical vs cash settlement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Quarterly Expiration Month Codes</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Futures contracts use standardized single-letter codes to designate expiration months:
              </p>
              <div className="grid grid-cols-4 gap-2 font-mono text-xs text-center">
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                  <div className="font-bold text-emerald-700">H</div>
                  <div className="text-[10px] text-slate-500">March</div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                  <div className="font-bold text-emerald-700">M</div>
                  <div className="text-[10px] text-slate-500">June</div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                  <div className="font-bold text-emerald-700">U</div>
                  <div className="text-[10px] text-slate-500">September</div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                  <div className="font-bold text-emerald-700">Z</div>
                  <div className="text-[10px] text-slate-500">December</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Cash Settlement vs Physical Delivery</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Equity index futures (ES, NQ) are 100% cash-settled directly into your account balance upon expiration. Physical commodity futures (CL, GC) are automatically rolled or closed by BrokerBros prior to First Notice Date to prevent physical delivery obligations.
              </p>
              <div className="p-3 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200 text-xs font-mono">
                ✓ 100% Automated Rollover Protection Active
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 11. FAQ ACCORDION SECTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-serif-heading font-semibold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm">Everything you need to know about global futures trading at BrokerBros.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center cursor-pointer hover:bg-slate-50 text-sm sm:text-base font-serif-heading"
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="p-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. FINAL CTA SECTION */}
      <CTASection onOpenAccount={onOpenAccount} />

    </div>
  );
};
