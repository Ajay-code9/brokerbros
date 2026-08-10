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
    title: 'White-Label Client Accounts',
    subtitle: 'Multi-Currency Client Portal',
    description: 'Full-featured branded client account portal with instant deposit/withdrawal, multi-currency wallets, and real-time balance dashboards.',
    features: [
      'Branded portal under your own domain & logo',
      'Multi-currency wallets (26 currency pairs)',
      'Instant deposit & withdrawal processing',
      'Real-time P&L and statement generation'
    ],
    minDeposit: 'SaaS Module Pricing',
    recommendedFor: 'Retail Brokers & White-Label Operators'
  },
  {
    id: 'joint',
    title: 'Multi-Tier IB Partner Accounts',
    subtitle: 'Unlimited IB Rebate Tree Network',
    description: 'Deploy unlimited multi-level Introducing Broker networks with automated lot-based rebate calculations and real-time commission tracking.',
    features: [
      'Unlimited IB tree depth & sub-IB hierarchy',
      'Automated lot-based rebate calculations',
      'Real-time commission & volume dashboards',
      'Custom rebate rules per asset class'
    ],
    minDeposit: 'SaaS Module Pricing',
    recommendedFor: 'IB Networks & Affiliate Managers'
  },
  {
    id: 'trust',
    title: 'Prop Firm Funded Trader Accounts',
    subtitle: 'Challenge & Evaluation Engine',
    description: 'Automated prop firm evaluation with configurable daily drawdown limits, profit targets, breach lock mechanisms, and funded account payouts.',
    features: [
      'Configurable challenge phases & profit targets',
      'Automated drawdown breach & account lock',
      'Funded trader dashboard with payout rules',
      'MT5 & FIX API integration for live feeds'
    ],
    minDeposit: 'SaaS Module Pricing',
    recommendedFor: 'Prop Firms & Funded Trader Platforms'
  },
  {
    id: 'institutional',
    title: 'Omnibus Clearing Accounts',
    subtitle: 'Prime Brokerage & FIX Execution',
    description: 'Institutional-grade prime brokerage clearing with omnibus sub-accounts, FIX 4.4 bridge connectivity, and dedicated LP relationship management.',
    features: [
      'Omnibus sub-account & prime clearing structure',
      'FIX 4.4 & REST API low-latency execution',
      'Dedicated Liquidity & LP Relationship Manager',
      'Custom spread markup & volume-based pricing'
    ],
    minDeposit: 'Enterprise Quotation',
    recommendedFor: 'Institutional Brokers & Prime Clearing',
    badge: 'Enterprise Tier'
  }
];

export const PLATFORM_FEATURES: PlatformFeature[] = [
  {
    id: 'pro-desktop',
    title: 'White-Label Desktop Workstation',
    subtitle: 'High-Performance Execution Workbench',
    description: 'Custom branded desktop terminal engineered for active traders. Features multi-monitor layouts, 120+ indicators, level-2 depth of market, and native MT5 server hooks.',
    specs: [
      { label: 'Order Execution', value: '< 12 ms' },
      { label: 'Order Algos', value: '100+ Types' },
      { label: 'MT5 Server API', value: 'C++ Hooks' },
      { label: 'Chart Panels', value: '32 Workstations' }
    ],
    keyTools: ['BookTrader Level II', 'OptionTrader Strategy Builder', 'BasketTrader Algo', 'Real-time Risk Monitor'],
    imageType: 'chart'
  },
  {
    id: 'web-trader',
    title: 'White-Label Webtrader Portal',
    subtitle: 'Browser Interface with Zero Installation',
    description: 'Deliver instant web-based trading access for your clients. Includes TradingView charting integration, automated deposit workflows, and full broker brand customization.',
    specs: [
      { label: 'Compatibility', value: 'Chrome / Safari / Edge' },
      { label: 'Security', value: '256-Bit SSL + 2FA' },
      { label: 'Chart Engine', value: 'TradingView Native' },
      { label: 'Deployment', value: 'Turnkey Cloud' }
    ],
    keyTools: ['One-Click Order Entry', 'Interactive Economic Calendar', 'AI Screener Studio', 'ESG & Fundamentals'],
    imageType: 'order'
  },
  {
    id: 'mobile-app',
    title: 'Branded iOS & Android Mobile Apps',
    subtitle: 'Published to App Store & Google Play',
    description: 'Provide your clients with high-rated mobile trading apps under your own broker brand name, icon, and custom color theme tokens.',
    specs: [
      { label: 'App Stores', value: 'Apple & Google Play' },
      { label: 'Authentication', value: 'FaceID & TouchID' },
      { label: 'Push Alerts', value: 'Instant Order Fills' },
      { label: 'App Rating', value: '4.9 ★★★★★' }
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
    category: 'Licensing & Pricing',
    question: 'How is BrokerBros infrastructure priced — per seat, per module, or flat SaaS?',
    answer: 'BrokerBros operates on a flat monthly SaaS licensing model per module. Brokers select only the modules they need (CRM, Prop Engine, Webtrader, FIX Bridge, etc.) and pay a fixed monthly fee with zero per-trade revenue share. Volume-based enterprise discounts are available for high-frequency deployments.'
  },
  {
    id: 'faq-2',
    category: 'Liquidity & FIX',
    question: 'How does the FIX 4.4 LP Bridge connect to our existing liquidity providers?',
    answer: 'The BrokerBros FIX 4.4 Bridge connects directly to your preferred Tier-1 LP or Prime of Prime via standard FIX protocol sessions. Configuration takes under 2 business days. We support Aggregation, A-Book, B-Book, and hybrid routing rules with sub-millisecond execution speeds.'
  },
  {
    id: 'faq-3',
    category: 'Compliance & Security',
    question: 'How are client funds segregated within the BrokerBros infrastructure?',
    answer: 'All client fund balances are maintained in fully segregated ledger accounts at Tier-1 custodian banks, completely isolated from operational capital. The multi-currency wallet module supports 26 currency pairs with automated daily reconciliation and cryptographic audit logs for regulator submission.'
  },
  {
    id: 'faq-4',
    category: 'Infrastructure & Setup',
    question: 'What is the typical go-live timeline for a complete White-Label Brokerage setup?',
    answer: 'A standard White-Label Brokerage deployment (CRM + Webtrader + Mobile App + Client Portal) takes 1–3 business days after branding assets and MT5 server credentials are submitted. FIX Bridge connectivity and Prop Firm Engine configurations typically add 1–2 additional business days.'
  },
  {
    id: 'faq-5',
    category: 'Licensing & Pricing',
    question: 'Does BrokerBros charge any revenue share or per-lot commissions on client trades?',
    answer: 'No. BrokerBros charges zero per-lot commissions or revenue share on client trade activity. All pricing is transparent flat SaaS monthly fees. Brokers retain 100% of the spread markup, commission income, and swap revenue generated from their client base.'
  },
  {
    id: 'faq-6',
    category: 'Prop Firm Engine',
    question: 'Does the Prop Firm Engine support automated drawdown breach and account lock?',
    answer: 'Yes. The Prop Firm Evaluation Engine includes fully automated real-time drawdown monitoring with configurable daily loss limits, trailing drawdown, and maximum drawdown thresholds. When a breach is detected, the engine automatically locks the trading account and triggers a notification workflow to the operator dashboard within milliseconds.'
  }
];

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    id: 'res-1',
    title: 'Connecting Your MT5 Server to FIX Liquidity Providers (A-Book vs B-Book Setup)',
    category: 'Liquidity Setup',
    date: 'July 28, 2026',
    author: 'Alex Mercer • Head of Systems Integration',
    readTime: '5 min read',
    summary: 'A simple guide to configuring FIX 4.4 liquidity bridges. Learn how to balance A-Book execution and B-Book risk management for optimum spread margins.',
    tag: 'Liquidity & Execution'
  },
  {
    id: 'res-2',
    title: 'Setting Up Prop Firm Challenges: Drawdown Rules & Automated Account Lockout',
    category: 'Prop Firm Guide',
    date: 'July 24, 2026',
    author: 'Sarah Chen • Lead Product Specialist',
    readTime: '6 min read',
    summary: 'Step-by-step setup for evaluation phases, daily drawdown rules, profit targets, and automated funded trader payouts using the BrokerBros Prop Engine.',
    tag: 'Prop Firm Operations'
  },
  {
    id: 'res-3',
    title: 'Offshore & Onshore Licensing Checklist (FCA, CySEC, ASIC, & VFSC Setup)',
    category: 'Compliance Guide',
    date: 'July 20, 2026',
    author: 'David Miller • Senior Regulatory Consultant',
    readTime: '4 min read',
    summary: 'Everything you need to launch under regulated jurisdictions. How to use pre-built KYC document queues and AML background checks for fast client onboarding.',
    tag: 'Compliance & Regulation'
  }
];
