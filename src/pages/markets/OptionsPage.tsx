import React, { useState } from 'react';
import { CTASection } from '../../components/CTA/CTASection';
import { VideoHeroBackground } from '../../components/Common/VideoHeroBackground';
import {
  TrendingUp,
  TrendingDown,
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
  Play,
  Scale,
  Gauge,
  Percent,
  Crosshair,
  ArrowRightLeft,
  ShieldAlert,
  SlidersHorizontal,
  Info
} from 'lucide-react';

interface OptionsPageProps {
  onOpenAccount: () => void;
}

export const OptionsPage: React.FC<OptionsPageProps> = ({ onOpenAccount }) => {
  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Live Market Volatility & Options Ticker
  const liveVixTicker = [
    { symbol: 'CBOE VIX', price: '14.82', change: '-3.15%', isUp: false, sub: 'Low Reg Vol' },
    { symbol: 'SPX 0DTE Calls', vol: '1.82M', IV: '12.4%', change: '+18.4%', isUp: true },
    { symbol: 'NVDA Options IV', price: '48.2%', change: '+4.20%', isUp: true, sub: 'IV Rank 78%' },
    { symbol: 'TSLA Call Sweep', val: '$4.8M', strike: '$220 C 14DTE', isUp: true },
    { symbol: 'AAPL Put/Call Ratio', price: '0.62', status: 'Bullish Bias', isUp: true },
    { symbol: 'QQQ Options IV', price: '18.1%', change: '-1.10%', isUp: false, sub: 'IV Rank 34%' }
  ];

  // Strategy Builder State
  const [selectedStrategy, setSelectedStrategy] = useState<string>('iron_condor');
  const [underlyingPrice, setUnderlyingPrice] = useState<number>(450);
  const [impliedVol, setImpliedVol] = useState<number>(25);
  const [daysToExpiry, setDaysToExpiry] = useState<number>(30);

  // Options Chain State
  const [chainTicker, setChainTicker] = useState<'SPX' | 'NVDA' | 'AAPL' | 'TSLA'>('NVDA');
  const [chainDte, setChainDte] = useState<string>('7DTE');

  // Greeks Lab State
  const [activeGreek, setActiveGreek] = useState<'delta' | 'gamma' | 'theta' | 'vega' | 'rho'>('delta');

  // Platform Showcase Tab State
  const [platformTab, setPlatformTab] = useState<'matrix' | 'payoff' | 'flow' | 'greeks'>('matrix');

  // FAQ Active Index State
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Strategies Data
  const strategiesList = [
    {
      id: 'covered_call',
      name: 'Covered Call',
      bias: 'Neutral to Mildly Bullish',
      complexity: 'Beginner',
      legs: 'Long 100 Stock + Short 1 OTM Call',
      description: 'Generate steady quarterly income against existing equity positions while establishing defined upside price targets.',
      maxGain: 'Strike Price - Stock Entry + Premium Received',
      maxLoss: 'Stock Price - Premium Received',
      pop: '68% - 75%',
      diagramType: 'call'
    },
    {
      id: 'protective_put',
      name: 'Protective Put',
      bias: 'Bullish with Downside Shield',
      complexity: 'Beginner',
      legs: 'Long 100 Stock + Long 1 OTM Put',
      description: 'Establish a guaranteed hard floor price on your equity positions against black swan market drops without capping upside.',
      maxGain: 'Unlimited',
      maxLoss: 'Stock Price - Put Strike + Premium Paid',
      pop: '55% - 65%',
      diagramType: 'put'
    },
    {
      id: 'vertical_spread',
      name: 'Vertical Bull Spread',
      bias: 'Directional Bullish',
      complexity: 'Intermediate',
      legs: 'Buy ITM/ATM Call + Sell OTM Call',
      description: 'Capitalize on targeted price appreciation with capped risk and lower net capital outlay than buying outright calls.',
      maxGain: 'Width of Strikes - Net Debit',
      maxLoss: 'Net Premium Paid',
      pop: '58% - 68%',
      diagramType: 'vertical'
    },
    {
      id: 'iron_condor',
      name: 'Iron Condor',
      bias: 'Delta Neutral / Range Bound',
      complexity: 'Advanced',
      legs: 'Sell OTM Put Spread + Sell OTM Call Spread',
      description: 'Collect maximum premium when an underlying stock remains within a calculated price corridor through expiration.',
      maxGain: 'Net Credit Received',
      maxLoss: 'Width of Spread - Net Credit',
      pop: '72% - 84%',
      diagramType: 'condor'
    },
    {
      id: 'iron_butterfly',
      name: 'Iron Butterfly',
      bias: 'Pin Price Target',
      complexity: 'Advanced',
      legs: 'Sell ATM Straddle + Buy OTM Strangle',
      description: 'High-reward strategy centered around pinning an exact target price prior to earnings or major volatility crush events.',
      maxGain: 'Net Credit Received',
      maxLoss: 'Width of Wing Strikes - Net Credit',
      pop: '45% - 55%',
      diagramType: 'butterfly'
    },
    {
      id: 'straddle',
      name: 'Long Straddle',
      bias: 'High Volatility Direction Agnostic',
      complexity: 'Intermediate',
      legs: 'Buy ATM Call + Buy ATM Put',
      description: 'Profit from explosive price swings in either direction prior to FDA approvals, earnings announcements, or central bank rate decisions.',
      maxGain: 'Unlimited',
      maxLoss: 'Total Net Debit Paid',
      pop: '38% - 48%',
      diagramType: 'straddle'
    }
  ];

  const selectedStratObj = strategiesList.find(s => s.id === selectedStrategy) || strategiesList[3];

  // Options Chain Data Generator
  const chainDataMap = {
    NVDA: {
      underlying: '$128.40',
      iv: '48.2%',
      ivRank: '78%',
      strikes: [
        { strike: 120, callBid: 10.40, callAsk: 10.55, callVol: '14.2K', callOI: '42.1K', callDelta: 0.82, callIV: '49.1%', putBid: 1.85, putAsk: 1.92, putVol: '8.4K', putOI: '28.1K', putDelta: -0.18, putIV: '48.5%', itmCall: true, itmPut: false },
        { strike: 125, callBid: 6.80, callAsk: 6.95, callVol: '28.5K', callOI: '85.4K', callDelta: 0.65, callIV: '48.4%', putBid: 3.20, putAsk: 3.30, putVol: '19.2K', putOI: '52.0K', putDelta: -0.35, putIV: '48.1%', itmCall: true, itmPut: false },
        { strike: 128, callBid: 4.85, callAsk: 4.95, callVol: '54.1K', callOI: '120.2K', callDelta: 0.52, callIV: '48.2%', putBid: 4.25, putAsk: 4.35, putVol: '48.6K', putOI: '98.5K', putDelta: -0.48, putIV: '48.0%', itmCall: true, itmPut: false },
        { strike: 130, callBid: 3.75, callAsk: 3.85, callVol: '42.8K', callOI: '94.6K', callDelta: 0.42, callIV: '48.0%', putBid: 5.10, putAsk: 5.25, putVol: '22.1K', putOI: '61.4K', putDelta: -0.58, putIV: '48.2%', itmCall: false, itmPut: true },
        { strike: 135, callBid: 1.95, callAsk: 2.05, callVol: '31.2K', callOI: '72.3K', callDelta: 0.25, callIV: '47.8%', putBid: 8.30, putAsk: 8.45, putVol: '12.4K', putOI: '34.8K', putDelta: -0.75, putIV: '48.4%', itmCall: false, itmPut: true },
        { strike: 140, callBid: 0.92, callAsk: 0.98, callVol: '18.4K', callOI: '58.9K', callDelta: 0.12, callIV: '47.5%', putBid: 12.10, putAsk: 12.30, putVol: '5.2K', putOI: '18.2K', putDelta: -0.88, putIV: '48.8%', itmCall: false, itmPut: true }
      ]
    },
    SPX: {
      underlying: '5,520.40',
      iv: '14.2%',
      ivRank: '28%',
      strikes: [
        { strike: 5480, callBid: 58.20, callAsk: 59.40, callVol: '8.4K', callOI: '24.1K', callDelta: 0.72, callIV: '14.5%', putBid: 16.80, putAsk: 17.50, putVol: '12.1K', putOI: '38.2K', putDelta: -0.28, putIV: '14.2%', itmCall: true, itmPut: false },
        { strike: 5500, callBid: 42.10, callAsk: 43.20, callVol: '22.1K', callOI: '68.4K', callDelta: 0.58, callIV: '14.3%', putBid: 21.40, putAsk: 22.10, putVol: '18.4K', putOI: '54.1K', putDelta: -0.42, putIV: '14.1%', itmCall: true, itmPut: false },
        { strike: 5520, callBid: 28.50, callAsk: 29.40, callVol: '48.2K', callOI: '112.0K', callDelta: 0.50, callIV: '14.2%', putBid: 27.80, putAsk: 28.60, putVol: '42.5K', putOI: '98.2K', putDelta: -0.50, putIV: '14.0%', itmCall: true, itmPut: false },
        { strike: 5540, callBid: 17.20, callAsk: 18.00, callVol: '32.1K', callOI: '84.2K', callDelta: 0.38, callIV: '14.0%', putBid: 36.40, putAsk: 37.20, putVol: '21.0K', putOI: '48.1K', putDelta: -0.62, putIV: '14.2%', itmCall: false, itmPut: true },
        { strike: 5560, callBid: 9.40, callAsk: 10.10, callVol: '18.5K', callOI: '52.4K', callDelta: 0.22, callIV: '13.8%', putBid: 48.50, putAsk: 49.50, putVol: '9.2K', putOI: '28.4K', putDelta: -0.78, putIV: '14.4%', itmCall: false, itmPut: true }
      ]
    },
    AAPL: {
      underlying: '$224.30',
      iv: '22.4%',
      ivRank: '42%',
      strikes: [
        { strike: 215, callBid: 11.20, callAsk: 11.40, callVol: '9.4K', callOI: '31.2K', callDelta: 0.78, callIV: '22.8%', putBid: 1.65, putAsk: 1.72, putVol: '5.2K', putOI: '18.4K', putDelta: -0.22, putIV: '22.2%', itmCall: true, itmPut: false },
        { strike: 220, callBid: 7.40, callAsk: 7.55, callVol: '18.2K', callOI: '54.1K', callDelta: 0.62, callIV: '22.5%', putBid: 2.85, putAsk: 2.95, putVol: '12.8K', putOI: '32.1K', putDelta: -0.38, putIV: '22.1%', itmCall: true, itmPut: false },
        { strike: 225, callBid: 4.10, callAsk: 4.22, callVol: '38.4K', callOI: '89.2K', callDelta: 0.48, callIV: '22.4%', putBid: 4.60, putAsk: 4.72, putVol: '28.1K', putOI: '64.2K', putDelta: -0.52, putIV: '22.0%', itmCall: false, itmPut: true },
        { strike: 230, callBid: 2.05, callAsk: 2.15, callVol: '22.1K', callOI: '62.4K', callDelta: 0.28, callIV: '22.1%', putBid: 7.40, putAsk: 7.55, putVol: '14.2K', putOI: '38.0K', putDelta: -0.72, putIV: '22.3%', itmCall: false, itmPut: true }
      ]
    },
    TSLA: {
      underlying: '$218.80',
      iv: '62.5%',
      ivRank: '88%',
      strikes: [
        { strike: 200, callBid: 24.50, callAsk: 24.80, callVol: '12.4K', callOI: '38.1K', callDelta: 0.74, callIV: '63.1%', putBid: 5.20, putAsk: 5.40, putVol: '18.2K', putOI: '48.2K', putDelta: -0.26, putIV: '62.0%', itmCall: true, itmPut: false },
        { strike: 210, callBid: 16.80, callAsk: 17.10, callVol: '28.5K', callOI: '72.4K', callDelta: 0.60, callIV: '62.8%', putBid: 7.80, putAsk: 8.00, putVol: '22.1K', putOI: '58.4K', putDelta: -0.40, putIV: '62.2%', itmCall: true, itmPut: false },
        { strike: 220, callBid: 10.90, callAsk: 11.20, callVol: '64.2K', callOI: '142.1K', callDelta: 0.49, callIV: '62.5%', putBid: 11.80, putAsk: 12.10, putVol: '58.9K', putOI: '124.0K', putDelta: -0.51, putIV: '62.4%', itmCall: false, itmPut: true },
        { strike: 230, callBid: 6.40, callAsk: 6.60, callVol: '41.2K', callOI: '98.5K', callDelta: 0.35, callIV: '62.1%', putBid: 17.20, putAsk: 17.50, putVol: '31.2K', putOI: '72.1K', putDelta: -0.65, putIV: '62.6%', itmCall: false, itmPut: true }
      ]
    }
  };

  const activeChain = chainDataMap[chainTicker];

  // Why Trade Options Features
  const whyTradeFeatures = [
    {
      title: 'Atomic Multi-Leg Strategy Execution',
      desc: 'Route complex 2-leg, 3-leg, and 4-leg spread orders in a single atomic transaction without leg-risk or partial execution gaps.',
      highlight: 'Up to 4 Legs',
      icon: Layers
    },
    {
      title: 'Ultra-Low $0.15 / Contract Pricing',
      desc: 'Industry-leading $0.15 per contract with zero base ticket fees, zero exercise/assignment surcharges, and zero platform minimums.',
      highlight: 'Zero Ticket Fee',
      icon: DollarSign
    },
    {
      title: 'Sub-Millisecond Direct Venue Routing',
      desc: 'Direct order links to 16 US options exchanges (CBOE, ISE, MIAX, PEARL, PHLX) with smart order price improvement.',
      highlight: '1.4ms Avg Speed',
      icon: Zap
    },
    {
      title: 'Real-Time Microsecond Greeks Engine',
      desc: 'Stream live 100-millisecond Delta, Gamma, Theta, Vega, and Rho updates driven by real-time black-scholes volatility surface models.',
      highlight: 'Live Black-Scholes',
      icon: BarChart3
    },
    {
      title: 'SPAN & Portfolio Margin (Up to 6.8x)',
      desc: 'Reduce margin requirements by up to 70% using risk-based portfolio margin that calculates net hedged exposure across position legs.',
      highlight: '6.8x Leverage',
      icon: Scale
    },
    {
      title: 'Unusual Options Flow & Block Sweeps',
      desc: 'Monitor institutional dark-pool sweep orders, golden sweeps, high IV rank surges, and large block trades in real time.',
      highlight: 'Institutional Flow',
      icon: Eye
    }
  ];

  // Greeks Data
  const greeksInfo = {
    delta: {
      name: 'Delta (Δ)',
      tagline: 'Directional Sensitivity ($ Price Change)',
      desc: 'Measures the rate of change of option value per $1.00 move in the underlying stock price. Also serves as an approximate proxy for the probability of expiring in-the-money (ITM).',
      callVal: '+0.52',
      putVal: '-0.48',
      impact: 'High Impact on Strategy Direction'
    },
    gamma: {
      name: 'Gamma (Γ)',
      tagline: 'Convexity & Delta Acceleration',
      desc: 'Measures the rate of change of Delta for a $1.00 move in the underlying asset. Highest for at-the-money options close to expiration, driving non-linear option profits.',
      callVal: '+0.048',
      putVal: '+0.048',
      impact: 'Crucial for 0DTE & Pin Risk'
    },
    theta: {
      name: 'Theta (Θ)',
      tagline: 'Time Decay per Calendar Day',
      desc: 'Quantifies the daily dollar reduction in an option’s extrinsic value as time passes toward expiration. Accelerates exponentially during the final 30 days before DTE.',
      callVal: '-$0.145 / day',
      putVal: '-$0.142 / day',
      impact: 'Net Income for Options Sellers'
    },
    vega: {
      name: 'Vega (ν)',
      tagline: 'Volatility Sensitivity (1% IV Shift)',
      desc: 'Measures option price change for every 1.0% shift in Implied Volatility (IV). Buying Vega before earnings or volatility expansions yields massive price spikes.',
      callVal: '+$0.24 per 1% IV',
      putVal: '+$0.24 per 1% IV',
      impact: 'Key Metric for Earnings Trades'
    },
    rho: {
      name: 'Rho (ρ)',
      tagline: 'Interest Rate Sensitivity (1% Rate Shift)',
      desc: 'Measures option price sensitivity relative to a 1.0% change in risk-free interest rates. Particularly impactful for long-dated LEAPS options.',
      callVal: '+$0.082 per 1%',
      putVal: '-$0.078 per 1%',
      impact: 'Macro Rate Curve Protection'
    }
  };

  const activeGreekData = greeksInfo[activeGreek];

  // Pricing Comparison Table
  const optionsPricingComparison = [
    { feature: 'Options Contract Fee', brokerbros: '$0.15 / Contract', legacy: '$0.65 / Contract', appBrokers: '$0.00 + High Spread' },
    { feature: 'Base Ticket Fee', brokerbros: '$0.00 / Trade', legacy: '$4.95 - $6.95 / Trade', appBrokers: '$0.00' },
    { feature: 'Exercise & Assignment Fee', brokerbros: '$0.00', legacy: '$19.95 / Event', appBrokers: '$5.00 - $10.00' },
    { feature: 'Multi-Leg Order Execution', brokerbros: 'Single Ticket Atomic', legacy: 'Legged Separately', appBrokers: 'Frequent Leg Slips' },
    { feature: 'Portfolio Margin Minimum', brokerbros: '$100,000 Deposit', legacy: '$110,000 - $250,000', appBrokers: 'Not Supported' },
    { feature: 'Real-Time Level II Options Depth', brokerbros: 'Free for Active Accounts', legacy: '$25 - $45 / Month', appBrokers: 'Basic Top of Book' }
  ];

  // FAQs Data
  const faqs = [
    {
      q: 'How does BrokerBros achieve low $0.15 per contract execution?',
      a: 'Through co-located high-speed infrastructure directly linked to 16 options exchanges (CBOE, MIAX, ISE, PHLX) and internalizing volume across institutional dark pools, we pass clearing efficiencies directly to options traders without markup or hidden ticket surcharges.'
    },
    {
      q: 'What is the minimum capital required for Portfolio Margin?',
      a: 'BrokerBros offers risk-based Portfolio Margin (using SPAN models) for accounts meeting a $100,000 Net Liquidation Value threshold. Portfolio Margin lowers required capital by up to 70% on hedged multi-leg positions compared to standard Reg T rules.'
    },
    {
      q: 'Can I execute 4-leg strategies like Iron Condors in a single ticket?',
      a: 'Yes. Our Smart Order Routing engine handles 2-leg, 3-leg, and 4-leg combo order tickets atomically. You receive a single net limit price fill across all legs with zero leg-risk or execution slippage.'
    },
    {
      q: 'What data feeds and Greeks analytics are included?',
      a: 'All options accounts receive streaming OPRA microsecond market depth, live Black-Scholes Greeks, 3D Implied Volatility surface analysis, real-time IV Rank & Percentile screeners, and unusual institutional block sweep alerts.'
    },
    {
      q: 'Are there any fees for option exercise or assignment at expiration?',
      a: 'No. BrokerBros charges zero dollars ($0.00) for exercise or assignment events, whether automated at expiration or requested early.'
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

      {/* Live Volatility & Options Ticker Banner */}
      <div className="bg-slate-950 border-b border-slate-800 py-2.5 overflow-hidden font-mono text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold shrink-0 z-10 bg-slate-950 pr-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            LIVE OPTIONS FEED:
          </div>
          <div className="overflow-hidden flex-1 relative group no-scrollbar">
            <div className="flex gap-6 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
              {[...liveVixTicker, ...liveVixTicker, ...liveVixTicker, ...liveVixTicker].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 shrink-0 bg-slate-900/90 px-3 py-1 rounded border border-slate-800">
                  <span className="font-bold text-white">{item.symbol}</span>
                  {item.price && <span className="text-slate-300">{item.price}</span>}
                  {item.vol && <span className="text-slate-400">{item.vol}</span>}
                  {item.val && <span className="text-emerald-400 font-bold">{item.val}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION (100vh Viewport Lock - Clean Simple Layout) */}
      <section className="relative bg-white text-slate-900 h-[calc(100vh-80px)] min-h-[520px] max-h-[800px] flex items-center border-b border-slate-100 overflow-hidden font-sans">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Copy Block */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold border border-emerald-200/80">
                <Activity className="w-3.5 h-3.5 text-emerald-600" />
                <span>MULTI-LEG STRATEGIES • GREEKS LAB • $0.15 / CONTRACT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-slate-950 font-sans">
                Master Volatility With <br />
                <span className="text-emerald-700">Institutional Options Analytics</span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal">
                Execute complex 4-leg option spreads with sub-millisecond precision, streaming microsecond Black-Scholes Greeks, real-time IV surfaces, and zero ticket fees.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOpenAccount}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer text-sm"
                >
                  <span>Open Options Account</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('strategy-builder-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-lg border border-slate-300 transition-all flex items-center gap-2 cursor-pointer text-sm"
                >
                  <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
                  <span>Launch Strategy Builder</span>
                </button>
              </div>

              {/* Key Quick Badges */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <div className="text-slate-400 text-xs">Contract Rate</div>
                  <div className="text-emerald-700 font-extrabold text-sm sm:text-base mt-0.5">$0.15 / Contract</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs">Spread Execution</div>
                  <div className="text-slate-950 font-extrabold text-sm sm:text-base mt-0.5">Atomic Multi-Leg</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs">Portfolio Margin</div>
                  <div className="text-emerald-700 font-extrabold text-sm sm:text-base mt-0.5">Up to 6.8x Leverage</div>
                </div>
              </div>
            </div>

            {/* Right Options Image - Clean Simple Image */}
            <div className="lg:col-span-5">
              <img
                src="/options_greeks_terminal.png"
                alt="Options Greeks & Volatility Terminal"
                className="w-full h-auto max-h-[420px] object-contain shadow-md rounded-xl border border-slate-200"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY TRADE OPTIONS WITH BROKERBROS */}
      <section className="py-12 lg:py-16 min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <Award className="w-3.5 h-3.5 text-emerald-700" />
              INSTITUTIONAL DERIVATIVES ENGINE
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Why Derivatives Traders Choose BrokerBros
            </h2>
            <p className="text-slate-600 text-base">
              Engineered for options strategists requiring institutional fill rates, transparent pricing, and sub-millisecond execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyTradeFeatures.map((feat, idx) => {
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

      {/* 3. MULTI-LEG STRATEGY BUILDER */}
      <section id="strategy-builder-section" className="py-8 lg:py-12 bg-[#06141D] text-white border-b border-emerald-900/40 font-sans relative overflow-hidden">
        
        {/* Glow Lighting Accents */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10 font-sans">
          
          <div className="text-center max-w-3xl mx-auto space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-bold uppercase tracking-wider">
              <SlidersHorizontal className="w-3 h-3 text-emerald-400" />
              <span>INTERACTIVE DERIVATIVES STUDIO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-sans tracking-tight">
              Multi-Leg Options Strategy Builder
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans max-w-xl mx-auto">
              Select a strategy, simulate market parameters, and inspect live risk profiles.
            </p>
          </div>

          <div className="bg-[#0D2231]/90 backdrop-blur-md rounded-2xl border border-emerald-500/30 p-4 lg:p-6 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Strategy Selector List (4 cols) */}
            <div className="lg:col-span-4 space-y-2">
              <div className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>SELECT STRATEGY PATTERN</span>
                <span className="text-[10px] text-slate-400">6 PATTERNS</span>
              </div>
              
              <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1 custom-scrollbar">
                {strategiesList.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedStrategy(s.id)}
                    className={`w-full p-3 rounded-xl text-left border transition-all cursor-pointer font-sans ${
                      selectedStrategy === s.id
                        ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-emerald-400 text-white shadow-md shadow-emerald-500/10'
                        : 'bg-[#06141D]/90 border-slate-800 text-slate-300 hover:border-emerald-500/40 hover:text-white'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs sm:text-sm text-white font-sans">{s.name}</span>
                      <span className="text-[9px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700/60">
                        {s.complexity}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5 font-sans">{s.bias}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Strategy Payoff Visualizer (8 cols) */}
            <div className="lg:col-span-8 space-y-4 flex flex-col justify-between">
              
              {/* Header Box */}
              <div className="bg-[#06141D] p-3.5 rounded-xl border border-slate-800 space-y-1">
                <div className="flex justify-between items-center border-b border-slate-800 pb-1.5 font-mono">
                  <h3 className="text-lg font-black text-white font-sans">{selectedStratObj.name}</h3>
                  <span className="text-[11px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    {selectedStratObj.legs}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans">{selectedStratObj.description}</p>
              </div>

              {/* Sliders for Simulation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-[11px]">
                <div className="bg-[#06141D] p-3 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex justify-between text-slate-400">
                    <span>Underlying Price</span>
                    <span className="text-emerald-400 font-bold">${underlyingPrice}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    value={underlyingPrice}
                    onChange={(e) => setUnderlyingPrice(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-slate-900 rounded-lg"
                  />
                </div>

                <div className="bg-[#06141D] p-3 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex justify-between text-slate-400">
                    <span>Implied Volatility</span>
                    <span className="text-cyan-300 font-bold">{impliedVol}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={impliedVol}
                    onChange={(e) => setImpliedVol(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-900 rounded-lg"
                  />
                </div>

                <div className="bg-[#06141D] p-3 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex justify-between text-slate-400">
                    <span>Days To Expiry (DTE)</span>
                    <span className="text-emerald-400 font-bold">{daysToExpiry} Days</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="90"
                    value={daysToExpiry}
                    onChange={(e) => setDaysToExpiry(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-slate-900 rounded-lg"
                  />
                </div>
              </div>

              {/* Dynamic Payoff Graph Box */}
              <div className="bg-[#06141D] rounded-xl border border-emerald-500/30 p-3.5 space-y-2 relative overflow-hidden">
                <div className="flex justify-between items-center text-[11px] font-mono">
                  <span className="text-slate-300">Payoff At Expiration (T+0 vs T+{daysToExpiry})</span>
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    Probability of Profit: {selectedStratObj.pop}
                  </span>
                </div>

                {/* SVG Payoff Curve Rendering */}
                <div className="w-full h-24 relative py-1">
                  <svg className="w-full h-full text-emerald-400" viewBox="0 0 400 100" fill="none">
                    {selectedStrategy === 'covered_call' && (
                      <path d="M 20 90 L 150 20 L 380 20" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                    )}
                    {selectedStrategy === 'protective_put' && (
                      <path d="M 20 80 L 120 80 L 380 10" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                    )}
                    {selectedStrategy === 'vertical_spread' && (
                      <path d="M 20 85 L 140 85 L 260 15 L 380 15" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                    )}
                    {selectedStrategy === 'iron_condor' && (
                      <path d="M 20 85 L 100 85 L 150 15 L 250 15 L 300 85 L 380 85" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                    )}
                    {selectedStrategy === 'iron_butterfly' && (
                      <path d="M 20 85 L 120 85 L 200 15 L 280 85 L 380 85" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                    )}
                    {selectedStrategy === 'straddle' && (
                      <path d="M 20 15 L 200 85 L 380 15" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                    )}
                    <line x1="0" y1="50" x2="400" y2="50" stroke="#334155" strokeDasharray="4 4" strokeWidth="1.5" />
                  </svg>
                </div>

                <div className="flex justify-between items-center text-[11px] font-mono border-t border-slate-800 pt-2">
                  <div>Max Loss: <strong className="text-rose-400 font-bold">{selectedStratObj.maxLoss}</strong></div>
                  <div>Max Gain: <strong className="text-emerald-400 font-bold">{selectedStratObj.maxGain}</strong></div>
                </div>
              </div>

              {/* Order Ticket Submit Button */}
              <button
                onClick={() => showToast(`Simulated Order: ${selectedStratObj.name} loaded into ticket`)}
                className="w-full py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 text-slate-950 font-black font-mono rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer text-xs tracking-wider"
              >
                LOAD {selectedStratObj.name.toUpperCase()} INTO ORDER TICKET ($0.15/CONTRACT)
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* 4. GREEKS ANALYTICS LAB */}
      <section className="relative py-8 lg:py-12 bg-[#0A1A24] text-white border-b border-emerald-900/40 font-sans min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
        
        {/* Glow Lighting Accents */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 lg:space-y-8 relative z-10 font-sans w-full">
          
          <div className="text-center max-w-3xl mx-auto space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-bold uppercase tracking-wider">
              <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span>MICROSECOND QUANTITATIVE ENGINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-sans tracking-tight">
              Greeks Analytics Lab
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans max-w-xl mx-auto">
              Real-time Black-Scholes sensitivity matrices calculated dynamically for every position in your portfolio.
            </p>
          </div>

          {/* Greek Selector Buttons */}
          <div className="flex flex-wrap justify-center gap-2 font-mono text-xs">
            {(['delta', 'gamma', 'theta', 'vega', 'rho'] as const).map((gKey) => (
              <button
                key={gKey}
                onClick={() => setActiveGreek(gKey)}
                className={`px-5 py-2.5 rounded-xl font-bold uppercase transition-all cursor-pointer font-mono ${
                  activeGreek === gKey
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md shadow-emerald-500/25'
                    : 'bg-[#06141D] text-slate-300 hover:bg-[#0D2231] hover:text-white border border-slate-800'
                }`}
              >
                {gKey} ({gKey === 'delta' ? 'Δ' : gKey === 'gamma' ? 'Γ' : gKey === 'theta' ? 'Θ' : gKey === 'vega' ? 'ν' : 'ρ'})
              </button>
            ))}
          </div>

          {/* Active Greek Focus Display Card */}
          <div className="bg-[#0D2231]/95 backdrop-blur-md rounded-2xl border border-emerald-500/30 p-5 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-2xl">
            
            <div className="lg:col-span-7 space-y-3.5">
              <div className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-700/60 w-fit">
                {activeGreekData.tagline}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-sans">{activeGreekData.name}</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">{activeGreekData.desc}</p>
              <div className="p-3 bg-[#06141D] rounded-xl border border-slate-800 text-[11px] font-mono text-slate-300">
                <span className="text-emerald-400 font-bold">Practical Trading Impact:</span> {activeGreekData.impact}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#06141D] p-4 sm:p-5 rounded-xl border border-slate-800 space-y-3 font-mono text-[11px]">
              <div className="text-slate-400 text-center border-b border-slate-800 pb-2 font-bold text-[10px] tracking-wider">
                STANDARD ATM 30DTE BENCHMARK VALUES
              </div>

              <div className="space-y-2.5 pt-0.5">
                <div className="flex justify-between items-center bg-[#0D2231] p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-300">Call Option {activeGreekData.name.split(' ')[0]}</span>
                  <span className="text-emerald-400 font-bold text-xs sm:text-sm">{activeGreekData.callVal}</span>
                </div>

                <div className="flex justify-between items-center bg-[#0D2231] p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-300">Put Option {activeGreekData.name.split(' ')[0]}</span>
                  <span className="text-cyan-300 font-bold text-xs sm:text-sm">{activeGreekData.putVal}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. VOLATILITY ANALYSIS ENGINE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <Activity className="w-3.5 h-3.5 text-emerald-700" />
              VOLATILITY MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              3D Implied Volatility Surface & Volatility Smile
            </h2>
            <p className="text-slate-600 text-base">
              Analyze IV Crush, Historical Volatility gaps, and strike skews to uncover mispriced option contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-slate-500">IV RANK & PERCENTILE</span>
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">78% IV Rank</span>
              </div>
              <h3 className="text-lg font-bold font-serif-heading text-slate-900">IV vs Historical Volatility</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Compare 30-day Implied Volatility against 30-day Historical Volatility (HV) to determine whether option premiums are rich or cheap.
              </p>
              <div className="h-24 bg-slate-50 rounded-lg p-2 border border-slate-200 flex items-end justify-between gap-1">
                {[45, 52, 68, 74, 82, 90, 85, 78, 88, 95].map((val, idx) => (
                  <div key={idx} className="flex-1 bg-emerald-600 rounded-t-xs" style={{ height: `${val}%` }}></div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-slate-500">STRIKE SKEW CURVE</span>
                <span className="text-xs font-mono font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">Put Skew Premium</span>
              </div>
              <h3 className="text-lg font-bold font-serif-heading text-slate-900">Volatility Smile & Skew</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Visualize institutional demand for OTM downside puts vs OTM upside calls to gauge market tail-risk sentiment.
              </p>
              <div className="h-24 bg-slate-50 rounded-lg p-3 border border-slate-200 flex items-center justify-center">
                <svg className="w-full h-full text-cyan-600" viewBox="0 0 200 60" fill="none">
                  <path d="M 10 10 Q 100 50 190 20" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-slate-500">EVENT VOLATILITY</span>
                <span className="text-xs font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">IV Crush Alert</span>
              </div>
              <h3 className="text-lg font-bold font-serif-heading text-slate-900">Earnings IV Expansion & Crush</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Track how option premiums inflate prior to quarterly earnings announcements and collapse instantly post-announcement.
              </p>
              <div className="h-24 bg-slate-50 rounded-lg p-2 border border-slate-200 flex items-end justify-between gap-1">
                {[30, 35, 42, 58, 85, 98, 28, 32, 35, 40].map((val, idx) => (
                  <div key={idx} className={`flex-1 rounded-t-xs ${idx === 5 ? 'bg-rose-500' : 'bg-slate-400'}`} style={{ height: `${val}%` }}></div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. REAL INSTITUTIONAL OPTIONS CHAIN INTERFACE */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200 mb-2">
                <BarChart3 className="w-3.5 h-3.5 text-emerald-700" />
                LIVE OPRA MARKET DEPTH
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-semibold text-slate-900">
                Institutional Options Chain Matrix
              </h2>
              <p className="text-slate-600 text-sm">Direct OPRA streaming quotes with click-to-trade order ticket routing.</p>
            </div>

            {/* Ticker & DTE Selector Controls */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              
              <div className="flex gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                {(['NVDA', 'SPX', 'AAPL', 'TSLA'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setChainTicker(t)}
                    className={`px-3 py-1.5 rounded font-bold cursor-pointer transition-all ${
                      chainTicker === t ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="flex gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                {['0DTE', '7DTE', '14DTE', '30DTE', '60DTE'].map((dte) => (
                  <button
                    key={dte}
                    onClick={() => setChainDte(dte)}
                    className={`px-3 py-1.5 rounded font-bold cursor-pointer transition-all ${
                      chainDte === dte ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {dte}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Underlying Header Banner */}
          <div className="bg-slate-950 text-white p-4 rounded-xl border border-slate-800 flex flex-wrap justify-between items-center font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="font-bold text-emerald-400 text-sm">{chainTicker} UNDERLYING: {activeChain.underlying}</span>
              <span className="text-slate-400">30-Day IV: <strong className="text-white">{activeChain.iv}</strong></span>
              <span className="text-slate-400">IV Rank: <strong className="text-emerald-400">{activeChain.ivRank}</strong></span>
            </div>
            <div className="text-slate-400">
              EXPIRATION: <strong className="text-white">AUG 15, 2026 ({chainDte})</strong>
            </div>
          </div>

          {/* Options Chain Table */}
          <div className="overflow-x-auto bg-slate-950 text-white rounded-xl border border-slate-800 shadow-xl font-mono text-xs">
            <table className="w-full text-center">
              <thead className="bg-slate-900 text-slate-400 uppercase text-[11px] border-b border-slate-800">
                <tr>
                  <th colSpan={5} className="py-2.5 bg-emerald-950/40 text-emerald-400 border-r border-slate-800 font-bold">CALL OPTIONS (BUY / SELL)</th>
                  <th className="py-2.5 bg-slate-800 text-white font-extrabold px-4">STRIKE</th>
                  <th colSpan={5} className="py-2.5 bg-rose-950/40 text-rose-400 border-l border-slate-800 font-bold">PUT OPTIONS (BUY / SELL)</th>
                </tr>
                <tr className="border-t border-slate-800 text-[10px]">
                  <th className="py-2 px-3">Call Bid</th>
                  <th className="py-2 px-3">Call Ask</th>
                  <th className="py-2 px-3">Volume</th>
                  <th className="py-2 px-3">Delta</th>
                  <th className="py-2 px-3 border-r border-slate-800">IV</th>
                  <th className="py-2 px-4 bg-slate-900 text-amber-400 font-bold">STRIKE</th>
                  <th className="py-2 px-3 border-l border-slate-800">IV</th>
                  <th className="py-2 px-3">Delta</th>
                  <th className="py-2 px-3">Volume</th>
                  <th className="py-2 px-3">Put Bid</th>
                  <th className="py-2 px-3">Put Ask</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850 text-xs">
                {activeChain.strikes.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-850 transition-colors">
                    
                    {/* Call Side */}
                    <td
                      onClick={() => showToast(`Sold ${chainTicker} $${row.strike} Call @ $${row.callBid}`)}
                      className={`py-3 px-3 cursor-pointer hover:bg-emerald-950/60 transition-colors ${row.itmCall ? 'bg-emerald-950/20 text-emerald-300 font-bold' : 'text-slate-300'}`}
                    >
                      ${row.callBid.toFixed(2)}
                    </td>
                    <td
                      onClick={() => showToast(`Bought ${chainTicker} $${row.strike} Call @ $${row.callAsk}`)}
                      className={`py-3 px-3 cursor-pointer hover:bg-emerald-950/60 transition-colors ${row.itmCall ? 'bg-emerald-950/20 text-emerald-300 font-bold' : 'text-slate-300'}`}
                    >
                      ${row.callAsk.toFixed(2)}
                    </td>
                    <td className="py-3 px-3 text-slate-400">{row.callVol}</td>
                    <td className="py-3 px-3 text-emerald-400">{row.callDelta}</td>
                    <td className="py-3 px-3 text-slate-400 border-r border-slate-800">{row.callIV}</td>

                    {/* Strike Center */}
                    <td className="py-3 px-4 font-extrabold text-amber-400 bg-slate-900">{row.strike}</td>

                    {/* Put Side */}
                    <td className="py-3 px-3 text-slate-400 border-l border-slate-800">{row.putIV}</td>
                    <td className="py-3 px-3 text-rose-400">{row.putDelta}</td>
                    <td className="py-3 px-3 text-slate-400">{row.putVol}</td>
                    <td
                      onClick={() => showToast(`Sold ${chainTicker} $${row.strike} Put @ $${row.putBid}`)}
                      className={`py-3 px-3 cursor-pointer hover:bg-rose-950/60 transition-colors ${row.itmPut ? 'bg-rose-950/20 text-rose-300 font-bold' : 'text-slate-300'}`}
                    >
                      ${row.putBid.toFixed(2)}
                    </td>
                    <td
                      onClick={() => showToast(`Bought ${chainTicker} $${row.strike} Put @ $${row.putAsk}`)}
                      className={`py-3 px-3 cursor-pointer hover:bg-rose-950/60 transition-colors ${row.itmPut ? 'bg-rose-950/20 text-rose-300 font-bold' : 'text-slate-300'}`}
                    >
                      ${row.putAsk.toFixed(2)}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center text-xs font-mono text-slate-500">
            Click any Bid or Ask price to load that individual leg into your active order ticket.
          </div>

        </div>
      </section>

      {/* 7. RISK MANAGEMENT & PORTFOLIO MARGIN */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <Scale className="w-3.5 h-3.5 text-emerald-700" />
              CAPITAL EFFICIENCY & SPAN MARGIN
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Portfolio Margin vs Standard Reg T Margin
            </h2>
            <p className="text-slate-600 text-base">
              Calculate net hedged portfolio risk across position legs to unlock up to 70% capital reduction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Reg T Card */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 space-y-4">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase">Standard Reg T Margin Rules</div>
              <h3 className="text-2xl font-bold font-serif-heading text-slate-900">$50,000 Iron Condor Requirement</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Evaluates each leg independently, requiring full collateral for every spread side without recognizing offsetting portfolio hedges.
              </p>
              <div className="p-4 bg-slate-100 rounded-lg font-mono text-xs space-y-1 text-slate-700">
                <div>• Fixed Strategy Collateral Schedules</div>
                <div>• No Cross-Asset Margin Offsets</div>
                <div>• Maximum Leverage: ~2.0x Cap</div>
              </div>
            </div>

            {/* Portfolio Margin Card */}
            <div className="bg-slate-950 text-white p-8 rounded-xl border border-emerald-500/40 space-y-4 shadow-xl">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">SPAN Risk-Based Portfolio Margin</span>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Up to 6.8x Leverage</span>
              </div>
              <h3 className="text-2xl font-bold font-serif-heading text-white">$15,000 Portfolio Margin Requirement</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Simulates 16 stress-test market scenarios to measure actual maximum loss across all positions, unlocking 70% excess cash liquidity.
              </p>
              <div className="p-4 bg-slate-900 rounded-lg font-mono text-xs space-y-1 text-slate-300 border border-slate-800">
                <div className="text-emerald-400 font-bold">• 16 Stress-Test Market Simulations</div>
                <div>• Full Netting Between Stock & Options</div>
                <div>• Minimum Account Requirement: $100,000</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. EXECUTION TECHNOLOGY */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">SMART ORDER ROUTING (SOR)</div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-white">
              Direct Connectivity to 16 US Options Exchanges
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Orders are scanned across CBOE, MIAX, ISE, PHLX, BOX, and ARCA in parallel to sweep price improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center font-mono text-xs">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-2">
              <div className="text-emerald-400 font-bold text-base">STEP 1</div>
              <div className="text-white font-bold">Order Ticket Entry</div>
              <p className="text-slate-400 text-[11px] font-sans">Single limit price submitted for up to 4-leg combination order.</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-2">
              <div className="text-emerald-400 font-bold text-base">STEP 2</div>
              <div className="text-white font-bold">Venue Sweep Engine</div>
              <p className="text-slate-400 text-[11px] font-sans">Simultaneous sub-millisecond query across 16 lit exchanges & dark pools.</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-2">
              <div className="text-emerald-400 font-bold text-base">STEP 3</div>
              <div className="text-white font-bold">Price Improvement</div>
              <p className="text-slate-400 text-[11px] font-sans">Averaging +$0.082 price improvement per contract relative to NBBO.</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-2">
              <div className="text-emerald-400 font-bold text-base">STEP 4</div>
              <div className="text-white font-bold">Atomic Fill Confirmation</div>
              <p className="text-slate-400 text-[11px] font-sans">All legs filled simultaneously at 1.4ms average fill latency.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 9. PLATFORM SHOWCASE */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Professional Options Trading Workstation
            </h2>
            <p className="text-slate-600 text-base">
              Available on Desktop (Windows/Mac/Linux), High-Performance Web, and Mobile iOS/Android.
            </p>

            <div className="flex flex-wrap justify-center gap-2 pt-2 font-mono text-xs">
              <button
                onClick={() => setPlatformTab('matrix')}
                className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer ${
                  platformTab === 'matrix' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Option Matrix Workspace
              </button>
              <button
                onClick={() => setPlatformTab('payoff')}
                className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer ${
                  platformTab === 'payoff' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Multi-Leg Payoff Simulator
              </button>
              <button
                onClick={() => setPlatformTab('flow')}
                className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer ${
                  platformTab === 'flow' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Unusual Flow & Block Sweeps
              </button>
            </div>
          </div>

          <div className="bg-slate-950 text-white rounded-2xl border border-slate-800 p-8 shadow-2xl font-mono text-xs">
            {platformTab === 'matrix' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="font-bold text-emerald-400">DESKTOP TERMINAL · REAL-TIME LEVEL II OPRA MATRIX</span>
                  <span className="text-slate-400">100ms Microsecond Refresh</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="text-slate-400">Active Option Contracts</div>
                    <div className="text-2xl font-bold text-white pt-1">1,420,000+</div>
                  </div>
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="text-slate-400">Fill Speed</div>
                    <div className="text-2xl font-bold text-emerald-400 pt-1">1.4 ms</div>
                  </div>
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="text-slate-400">Contract Rate</div>
                    <div className="text-2xl font-bold text-white pt-1">$0.15</div>
                  </div>
                </div>
              </div>
            )}

            {platformTab === 'payoff' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="font-bold text-emerald-400">REAL-TIME RISK ANALYZER & POP PROBABILITY ENGINE</span>
                  <span className="text-slate-400">Monte Carlo Simulation</span>
                </div>
                <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center text-slate-300">
                  Interactive Monte Carlo Risk Curve Loaded (10,000 Iterations Executed)
                </div>
              </div>
            )}

            {platformTab === 'flow' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="font-bold text-emerald-400">INSTITUTIONAL UNUSUAL SWEEP RADAR</span>
                  <span className="text-slate-400">Dark Pool Block Alerts</span>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex justify-between text-xs"><span className="text-emerald-400 font-bold">TSLA $220 Call Sweep</span><span>$4.8M Premium</span><span className="text-slate-400">14DTE MIAX</span></div>
                  <div className="flex justify-between text-xs"><span className="text-emerald-400 font-bold">NVDA $135 Call Sweep</span><span>$8.2M Premium</span><span className="text-slate-400">30DTE CBOE</span></div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 10. PRICING & TRANSPARENT COMPARISON */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Transparent $0.15 / Contract Execution Pricing
            </h2>
            <p className="text-slate-600 text-base">
              Compare our transparent contract fee structure against legacy brokers and payment-for-order-flow apps.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700 text-xs font-mono uppercase border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6">Pricing Feature</th>
                  <th className="py-4 px-6 bg-emerald-50 text-emerald-800 font-bold">BrokerBros</th>
                  <th className="py-4 px-6">Legacy Brokers</th>
                  <th className="py-4 px-6">Zero-Fee Retail Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {optionsPricingComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">{row.feature}</td>
                    <td className="py-4 px-6 bg-emerald-50/50 font-bold font-mono text-emerald-700">{row.brokerbros}</td>
                    <td className="py-4 px-6 font-mono text-slate-600">{row.legacy}</td>
                    <td className="py-4 px-6 font-mono text-slate-600">{row.appBrokers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 11. FAQS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-serif-heading font-semibold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Got questions about options execution, margin rules, or contract pricing?
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold font-serif-heading text-slate-900 flex justify-between items-center cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. GLOBAL CTA SECTION */}
      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
