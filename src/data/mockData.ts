import { TickerItem, MarketCategory, AccountType, PlatformFeature, FAQItem, ResearchArticle, ExchangeMarket } from '../types';

export const INITIAL_TICKERS: TickerItem[] = [
  { symbol: 'S&P 500', name: 'SPX', price: 5432.80, change: 18.40, changePercent: 0.34, market: 'US', volume: '3.2B', high: 5440.10, low: 5412.50 },
  { symbol: 'NASDAQ 100', name: 'NDX', price: 19842.15, change: 112.30, changePercent: 0.57, market: 'US', volume: '4.8B', high: 19890.00, low: 19710.20 },
  { symbol: 'AAPL', name: 'Apple Inc.', price: 224.50, change: 2.10, changePercent: 0.94, market: 'US', volume: '58.4M', high: 225.80, low: 222.10 },
  { symbol: 'NVDA', name: 'NVIDIA Corp', price: 128.40, change: -1.25, changePercent: -0.96, market: 'US', volume: '92.1M', high: 130.50, low: 126.80 },
  { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: 1.0892, change: 0.0018, changePercent: 0.17, market: 'FX', volume: '$120B' },
  { symbol: 'FTSE 100', name: 'London SE', price: 8210.40, change: -14.20, changePercent: -0.17, market: 'EU', volume: '890M' },
  { symbol: 'NIKKEI 225', name: 'Tokyo Stock Exchange', price: 38920.00, change: 310.00, changePercent: 0.80, market: 'ASIA', volume: '1.4B' },
  { symbol: 'GOLD', name: 'XAU/USD Spot', price: 2415.80, change: 12.40, changePercent: 0.52, market: 'COMMODITY', volume: '$45B' },
  { symbol: 'BRENT CRUDE', name: 'Brent Oil', price: 81.20, change: -0.65, changePercent: -0.79, market: 'COMMODITY' },
  { symbol: 'BTC/USD', name: 'Bitcoin', price: 67450.00, change: 1280.00, changePercent: 1.93, market: 'CRYPTO' },
  { symbol: 'MSFT', name: 'Microsoft Corp', price: 448.90, change: 3.40, changePercent: 0.76, market: 'US' },
  { symbol: 'AMZN', name: 'Amazon.com Inc', price: 186.20, change: 0.85, changePercent: 0.46, market: 'US' },
];

export const MARKET_CATEGORIES: MarketCategory[] = [
  {
    id: 'stocks-etfs',
    name: 'Stocks & ETFs',
    tagline: 'Trade 15,000+ US & Global Equities 24 Hours a Day',
    description: 'Direct market access to equities across 35 countries with fractional trading, zero minimums, and best-execution routing.',
    commission: '$0.00 to $0.005/share',
    marginRate: 'From 5.83% APY',
    instrumentsCount: '15,000+',
    highlights: [
      'Overnight 24/5 Trading on 10,000+ Stocks & ETFs',
      'Fractional shares starting from $1 USD',
      'Smart Routing technology for best execution',
      'Earn interest on short-sale stock lending'
    ],
    popularSymbols: [
      { symbol: 'NVDA', name: 'NVIDIA Corp', price: '$128.40', change: '-0.96%', isPositive: false },
      { symbol: 'AAPL', name: 'Apple Inc.', price: '$224.50', change: '+0.94%', isPositive: true },
      { symbol: 'VOO', name: 'Vanguard S&P 500 ETF', price: '$498.12', change: '+0.38%', isPositive: true },
      { symbol: 'MSFT', name: 'Microsoft Corp', price: '$448.90', change: '+0.76%', isPositive: true }
    ]
  },
  {
    id: 'options',
    name: 'Options',
    tagline: 'Trade Multi-Leg Options & Implied Volatility Surface',
    description: 'Execute complex multi-leg options strategies, index options, and LEAPS with institutional-grade risk models and strategy lab builders.',
    commission: '$0.15 to $0.65 / contract',
    marginRate: 'Portfolio Margin Available',
    instrumentsCount: 'Global Options',
    highlights: [
      'Option Strategy Lab for automatic payoff curves',
      'Probability Lab & Real-time Volatility Surface',
      'Index options (SPX, NDX, VIX) tax advantages',
      'Automated roll wizard and early assignment warnings'
    ],
    popularSymbols: [
      { symbol: 'SPX', name: 'S&P 500 Index Options', price: '5,432.80', change: '+0.34%', isPositive: true },
      { symbol: 'QQQ', name: 'Invesco QQQ Options', price: '$482.10', change: '+0.58%', isPositive: true },
      { symbol: 'VIX', name: 'CBOE Volatility Index', price: '13.85', change: '-3.20%', isPositive: false },
      { symbol: 'TSLA', name: 'Tesla Options', price: '$218.90', change: '+2.14%', isPositive: true }
    ]
  },
  {
    id: 'futures',
    name: 'Futures & Commodities',
    tagline: '24/6 Global Futures Execution Across CME & ICE Exchanges',
    description: 'Trade E-mini, Micro, and commodity futures contracts with industry-leading low margin requirements and ultra-fast FIX API connectivity.',
    commission: '$0.25 to $0.85 / contract',
    marginRate: 'Low Intra-day Margins',
    instrumentsCount: '300+ Futures',
    highlights: [
      'Micro Futures starting at low margin requirements',
      'Direct exchange connectivity to CME, ICE, Eurex',
      'Real-time Level II Market Depth & Time and Sales',
      'Automated roll alerts and physical delivery protection'
    ],
    popularSymbols: [
      { symbol: 'ES', name: 'E-mini S&P 500 Futures', price: '5,441.25', change: '+19.50', isPositive: true },
      { symbol: 'NQ', name: 'E-mini NASDAQ Futures', price: '19,895.00', change: '+118.00', isPositive: true },
      { symbol: 'GC', name: 'Gold Futures', price: '$2,418.50', change: '+$14.10', isPositive: true },
      { symbol: 'CL', name: 'Crude Oil Futures', price: '$81.15', change: '-$0.70', isPositive: false }
    ]
  },
  {
    id: 'bonds',
    name: 'Fixed Income & Bonds',
    tagline: 'Trade 1,000,000+ Corporate, Municipal & Sovereign Bonds',
    description: 'Access transparent, low-cost debt securities from US Treasuries to high-yield corporates with zero hidden markups or OTC spreads.',
    commission: '0.002% to 0.10% total value',
    marginRate: 'Conservative Bond Collateral',
    instrumentsCount: '1M+ Bonds',
    highlights: [
      'Comprehensive bond scanner filtering by yield',
      'Direct US Treasury auctions with zero markup',
      'Institutional yield curve visualization tools',
      'Monthly interest cashflow schedule generator'
    ],
    popularSymbols: [
      { symbol: 'US10Y', name: 'US Treasury 10-Yr Yield', price: '4.18%', change: '-0.04%', isPositive: true },
      { symbol: 'US02Y', name: 'US Treasury 2-Yr Yield', price: '4.38%', change: '-0.02%', isPositive: true },
      { symbol: 'HYG', name: 'High Yield Corporate Bond ETF', price: '$77.80', change: '+0.15%', isPositive: true },
      { symbol: 'MUNI', name: 'AAA Municipal Bond Index', price: '3.42% YTM', change: 'Stable', isPositive: true }
    ]
  },
  {
    id: 'forex',
    name: 'Spot Forex & Currencies',
    tagline: 'Interbank Spreads with Direct Liquidity from Tier-1 Banks',
    description: 'Trade 100+ currency pairs with ECN execution, institutional quotes, tight interbank spreads as low as 0.1 pips, and no dealer markup.',
    commission: '0.08 to 0.20 bps',
    marginRate: 'Up to 50:1 Leverage (Qualified)',
    instrumentsCount: '100+ Currency Pairs',
    highlights: [
      'Real-time interbank quotes aggregated from banks',
      'Multi-currency accounts holding funds in 26 currencies',
      'Spot FX swap rates passed through transparently',
      'Algorithmic FX execution algorithms (TWAP/VWAP)'
    ],
    popularSymbols: [
      { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: '1.0892', change: '+0.0018', isPositive: true },
      { symbol: 'USD/JPY', name: 'US Dollar / Yen', price: '153.85', change: '-0.4200', isPositive: false },
      { symbol: 'GBP/USD', name: 'British Pound / USD', price: '1.2915', change: '+0.0025', isPositive: true },
      { symbol: 'AUD/USD', name: 'Australian Dollar / USD', price: '0.6650', change: '+0.0012', isPositive: true }
    ]
  }
];

export const ACCOUNT_TYPES: AccountType[] = [
  {
    id: 'individual',
    title: 'Individual Account',
    subtitle: 'Single Owner Investor Account',
    description: 'For solo investors trading equities, options, futures, and currencies globally. Full access to margin or cash setups.',
    features: [
      'Access 150+ global exchanges from 1 account',
      'Earn 4.85% APY on uninvested cash reserves',
      'Free real-time research & professional tools',
      'No account inactivity fees or setup charges'
    ],
    minDeposit: '$0 Minimum',
    recommendedFor: 'Active Traders & Investors'
  },
  {
    id: 'joint',
    title: 'Joint Account',
    subtitle: 'Shared Ownership for Two Partners',
    description: 'Co-owned by two individuals (Tenants with Rights of Survivorship or Tenants in Common) with shared trading authority.',
    features: [
      'Dual access logins with individual security tokens',
      'Consolidated tax reporting and statement generation',
      'Flexible power of attorney and trading permission roles',
      'FDIC insured cash sweep options up to $2,500,000'
    ],
    minDeposit: '$0 Minimum',
    recommendedFor: 'Couples & Business Partners'
  },
  {
    id: 'trust',
    title: 'Trust & Estate Account',
    subtitle: 'Fiduciary & Estate Planning',
    description: 'Established for revocable or irrevocable legal trusts, managed by appointed trustees for designated beneficiaries.',
    features: [
      'Seamless compliance and legal entity onboarding',
      'Custom fiduciary sub-accounting and asset segregation',
      'Integrated estate distribution reporting tools',
      'Institutional fixed income desk advisory access'
    ],
    minDeposit: '$10,000 USD',
    recommendedFor: 'High Net Worth Trusts & Estates'
  },
  {
    id: 'institutional',
    title: 'Institutional & Family Office',
    subtitle: 'Hedge Funds, Advisors & Prop Trading Desk',
    description: 'Enterprise solution providing prime brokerage services, execution algorithms, white-label portals, and custom API gateways.',
    features: [
      'Multi-clearing accounts & omnibus sub-account structures',
      'FIX Protocol & REST API low-latency connectivity',
      'Dedicated Institutional Relationship Manager',
      'Custom prime brokerage margin & stock borrow rates'
    ],
    minDeposit: '$100,000 USD',
    recommendedFor: 'Hedge Funds, RIAs & Family Offices',
    badge: 'Enterprise Tier'
  }
];

export const PLATFORM_FEATURES: PlatformFeature[] = [
  {
    id: 'pro-desktop',
    title: 'BrokerBros Pro Desktop Terminal',
    subtitle: 'High-Performance Workbench for Active Traders',
    description: 'Built for speed and precision. Features multi-monitor layouts, advanced technical charting with 120+ indicators, depth-of-market order books, and real-time risk monitor.',
    specs: [
      { label: 'Order Execution Speed', value: '< 12 ms' },
      { label: 'Order Types & Algos', value: '100+ Types' },
      { label: 'Custom Indicators', value: '120+ Built-in' },
      { label: 'Max Chart Windows', value: '32 Panels' }
    ],
    keyTools: ['BookTrader Level II', 'OptionTrader Strategy Builder', 'BasketTrader Algo', 'Real-time PortfolioAnalyst'],
    imageType: 'chart'
  },
  {
    id: 'web-trader',
    title: 'BrokerBros Web Portal',
    subtitle: 'Clean Browser Interface with Zero Installation Required',
    description: 'A responsive, modern web interface that delivers fast execution, full account overview, intuitive order tickets, and live market streaming on any modern browser.',
    specs: [
      { label: 'Compatibility', value: 'Chrome / Safari / Edge' },
      { label: 'Security', value: '256-Bit SSL + 2FA' },
      { label: 'Data Sync', value: 'Instant Cloud Sync' },
      { label: 'Watchlists', value: 'Unlimited Dynamic Lists' }
    ],
    keyTools: ['One-Click Order Entry', 'Interactive Economic Calendar', 'AI Screener Studio', 'ESG & Fundamentals'],
    imageType: 'order'
  },
  {
    id: 'mobile-app',
    title: 'BrokerBros Mobile Trader',
    subtitle: 'Institutional Power in the Palm of Your Hand',
    description: 'Manage positions, stream live level-2 quotes, set price alerts, and execute multi-leg orders anywhere in the world on iOS and Android devices.',
    specs: [
      { label: 'Biometrics', value: 'FaceID & TouchID' },
      { label: 'Push Alerts', value: 'Sub-second Notifications' },
      { label: 'App Store Rating', value: '4.9 ★★★★★' },
      { label: 'Offline Mode', value: 'Encrypted Vault Storage' }
    ],
    keyTools: ['Mobile Charting with Gestures', 'Instant Push Order Alerts', 'Quick Cash Deposit via Mobile Check', 'Option Chain Matrix'],
    imageType: 'mobile'
  }
];

export const EXCHANGE_MARKETS: ExchangeMarket[] = [
  {
    id: 'nyse',
    name: 'New York Stock Exchange / NASDAQ',
    city: 'New York, USA',
    code: 'NYSE / NASDAQ',
    timezone: 'EST (UTC-5)',
    openTimeUtc: 14.5, // 9:30 AM EST
    closeTimeUtc: 21,   // 4:00 PM EST
    coordinates: { x: 26, y: 36 },
    currencies: ['USD'],
    volume24h: '$48.2 Billion'
  },
  {
    id: 'lse',
    name: 'London Stock Exchange',
    city: 'London, UK',
    code: 'LSE',
    timezone: 'GMT (UTC+0)',
    openTimeUtc: 8,
    closeTimeUtc: 16.5,
    coordinates: { x: 48, y: 26 },
    currencies: ['GBP', 'EUR', 'USD'],
    volume24h: '£8.4 Billion'
  },
  {
    id: 'xetra',
    name: 'Frankfurt Stock Exchange (Xetra)',
    city: 'Frankfurt, Germany',
    code: 'FWB',
    timezone: 'CET (UTC+1)',
    openTimeUtc: 8,
    closeTimeUtc: 16.5,
    coordinates: { x: 52, y: 28 },
    currencies: ['EUR'],
    volume24h: '€6.1 Billion'
  },
  {
    id: 'hkex',
    name: 'Hong Kong Exchanges & Clearing',
    city: 'Hong Kong',
    code: 'HKEX',
    timezone: 'HKT (UTC+8)',
    openTimeUtc: 1.5, // 9:30 AM HKT
    closeTimeUtc: 8,   // 4:00 PM HKT
    coordinates: { x: 79, y: 46 },
    currencies: ['HKD', 'CNH', 'USD'],
    volume24h: '$14.8 Billion HKD'
  },
  {
    id: 'tse',
    name: 'Tokyo Stock Exchange',
    city: 'Tokyo, Japan',
    code: 'TSE',
    timezone: 'JST (UTC+9)',
    openTimeUtc: 0,
    closeTimeUtc: 6,
    coordinates: { x: 88, y: 38 },
    currencies: ['JPY'],
    volume24h: '¥4.2 Trillion JPY'
  },
  {
    id: 'asx',
    name: 'Australian Securities Exchange',
    city: 'Sydney, Australia',
    code: 'ASX',
    timezone: 'AEST (UTC+10)',
    openTimeUtc: 0,
    closeTimeUtc: 6,
    coordinates: { x: 89, y: 78 },
    currencies: ['AUD'],
    volume24h: '$5.6 Billion AUD'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Pricing & Yield',
    question: 'How does BrokerBros calculate interest paid on uninvested cash balances?',
    answer: 'BrokerBros pays up to 4.85% APY interest on fully liquid, uninvested cash settled balances in client accounts. Interest is calculated daily on balances exceeding $10,000 USD and paid monthly directly into your account with no lockup periods.'
  },
  {
    id: 'faq-2',
    category: 'Trading',
    question: 'What is BrokerBros Smart Routing and how does it prevent PFOF conflicts?',
    answer: 'Unlike zero-commission retail brokers that accept Payment for Order Flow (PFOF) to send your orders to market makers, BrokerBros SmartRouting continuously evaluates fast-changing market conditions and routes your order to dark pools, exchanges, and ECNs to achieve the highest price improvement.'
  },
  {
    id: 'faq-3',
    category: 'Security & Accounts',
    question: 'How are my securities and funds protected at BrokerBros?',
    answer: 'Client accounts are protected by SIPC for up to $500,000 (including $250,000 for cash claims). Additionally, BrokerBros carries excess SIPC coverage through Lloyd’s of London for up to $30 million per account. Uninvested cash can also be swept into insured bank accounts via our FDIC Insured Sweep Program for up to $2,500,000 in coverage.'
  },
  {
    id: 'faq-4',
    category: 'Trading',
    question: 'Can I trade US stocks outside standard market hours?',
    answer: 'Yes! BrokerBros offers 24/5 Overnight Trading on 10,000+ US equities and ETFs, allowing you to react instantly to earnings announcements, economic data releases, and global geopolitical events from Sunday 8:00 PM EST through Friday 8:00 PM EST.'
  },
  {
    id: 'faq-5',
    category: 'Pricing & Yield',
    question: 'What are the margin interest rates for borrowing cash?',
    answer: 'BrokerBros offers some of the lowest margin borrowing rates in the financial industry, starting at 5.83% for Tier 1 institutional accounts and scaled transparently based on benchmark central bank rates plus a small tiered spread.'
  },
  {
    id: 'faq-6',
    category: 'Technology',
    question: 'Do you offer FIX Protocol or REST API access for automated algorithmic trading?',
    answer: 'Yes. Every client account can connect to our REST API, WebSockets API, and FIX 4.2/4.4 gateways. We provide SDKs in Python, C++, Java, Node.js, and C# with comprehensive documentation and paper trading sandbox environments.'
  }
];

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    id: 'res-1',
    title: 'Global Macro Outlook Q3: Interest Rate Cuts & Volatility Shifts',
    category: 'Market Insights',
    date: 'July 28, 2026',
    author: 'Dr. Marcus Vance, Chief Economist',
    readTime: '6 min read',
    summary: 'An in-depth analysis of central bank interest rate decisions, global yield curve inversions, and sector rotations across US and European equity markets.',
    tag: 'Macroeconomy'
  },
  {
    id: 'res-2',
    title: 'Mastering Portfolio Margin: Capital Efficiency for Options Traders',
    category: 'Trading Academy',
    date: 'July 24, 2026',
    author: 'Elena Rostova, Quantitative Risk Analyst',
    readTime: '8 min read',
    summary: 'Learn how risk-based portfolio margin replaces legacy Reg T requirements to lower margin requirements on hedged multi-leg positions by up to 70%.',
    tag: 'Advanced Trading'
  },
  {
    id: 'res-3',
    title: 'Sovereign Bond Yield Analysis: Opportunities in 2-Year vs 10-Year Notes',
    category: 'Fixed Income',
    date: 'July 20, 2026',
    author: 'Jonathan Hayes, Fixed Income Strategist',
    readTime: '5 min read',
    summary: 'Evaluating inflation expectations and yield differentials between US Treasuries, German Bunds, and UK Gilts for fixed income investors.',
    tag: 'Bonds & Rates'
  }
];
