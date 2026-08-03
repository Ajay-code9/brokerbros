export interface Article {
  id: string;
  title: string;
  category: string;
  topic: string;
  readTime: string;
  publishedDate: string;
  summary: string;
  content: string[];
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  imageUrl: string;
  featured?: boolean;
}

export interface EconomicEvent {
  id: string;
  time: string;
  date: string;
  country: string;
  countryFlag: string;
  event: string;
  impact: 'High' | 'Medium' | 'Low';
  forecast: string;
  previous: string;
  actual?: string;
  category: 'Rate' | 'Inflation' | 'GDP' | 'Employment';
}

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  articleCount: number;
}

export const RESEARCH_CATEGORIES: CategoryItem[] = [
  { id: 'market-news', name: 'Market News', description: 'Real-time breaking market coverage and institutional morning briefings.', iconName: 'Globe', articleCount: 142 },
  { id: 'stocks', name: 'Stocks', description: 'In-depth equity analysis, valuation frameworks, and earnings teardowns.', iconName: 'TrendingUp', articleCount: 289 },
  { id: 'etfs', name: 'ETFs', description: 'Sector fund flows, thematic basket trends, and cost efficiency rankings.', iconName: 'Layers', articleCount: 94 },
  { id: 'options', name: 'Options', description: 'Implied volatility matrix, unusual options flow, and hedging strategies.', iconName: 'BarChart2', articleCount: 115 },
  { id: 'global-markets', name: 'Global Markets', description: 'Cross-border macro movements, foreign exchange, and central bank divergence.', iconName: 'Compass', articleCount: 88 },
  { id: 'economy', name: 'Economy', description: 'Macroeconomic metrics, CPI inflation trends, yield curves, and employment.', iconName: 'Building', articleCount: 176 },
  { id: 'technology', name: 'Technology', description: 'AI infrastructure capex, semiconductor demand cycles, and enterprise SaaS.', iconName: 'Cpu', articleCount: 210 },
  { id: 'ipo-updates', name: 'IPO Updates', description: 'S-1 filing breakdowns, pre-IPO valuations, and lock-up expiry schedules.', iconName: 'Sparkles', articleCount: 62 },
  { id: 'earnings', name: 'Earnings', description: 'Quarterly scorecard analysis, management guidance, and EPS surprises.', iconName: 'PieChart', articleCount: 195 },
];

export const POPULAR_TOPICS = [
  'All',
  'Artificial Intelligence',
  'Technology',
  'EV',
  'Healthcare',
  'Banking',
  'Energy',
  'Dividend Stocks',
  'Growth Investing'
];

export const FEATURED_ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'AI Infrastructure Capex Surge: Why Semiconductor & Energy Utilities Are Re-rating Higher',
    category: 'Technology',
    topic: 'AI',
    readTime: '5 min read',
    publishedDate: '10 mins ago',
    summary: 'Hyperscale cloud providers have expanded 2026 data center capex guidance by $42B. We analyze the compound demand ripple through silicon foundries and power generation.',
    content: [
      'The global technology landscape is undergoing a structural capex reallocation not seen since the initial buildout of the fiber optic backbone in the late 1990s.',
      'Major cloud hyperscalers have collectively raised their aggregate infrastructure capital expenditure forecasts for 2026 to exceed $180 billion. Crucially, over 65% of this allocation is directly earmarked for high-density compute acceleration and specialized data center power infrastructure.',
      'Our quantitative equity strategy team has identified three primary transmission channels through which this capital spend converts into superior net profit margins: custom ASIC design foundries, high-voltage transformer manufacturers, and nuclear power purchase agreement (PPA) providers.',
      'Key takeaway for investors: Equity valuations in the semiconductor supply chain remain underpinned by multi-year order backlogs, offering defensive earnings visibility even in a decelerating consumer macro environment.'
    ],
    author: {
      name: 'Dr. Sarah Lin',
      title: 'Chief Technology Strategist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    },
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
    featured: true
  },
  {
    id: 'art-2',
    title: 'Fed Rate Cut Cycle Playbook: Historical Performance of High-Yield Dividends vs Growth Equities',
    category: 'Economy',
    topic: 'Dividend Stocks',
    readTime: '6 min read',
    publishedDate: '1 hour ago',
    summary: 'As central bank policy pivots from restrictive to neutral, historical market cycles reveal distinct sector rotation patterns across 5 previous monetary easing regimes.',
    content: [
      'With core PCE inflation trending sustainably toward the Federal Reserve’s 2.0% target, fixed income markets have fully priced in a series of 25-basis-point policy rate reductions.',
      'Analyzing market returns across the last five Fed rate-cutting cycles (1995, 1998, 2001, 2007, and 2019) demonstrates a sharp divergence in sector performance depending on whether the cuts coincided with an economic expansion or a recession.',
      'In soft-landing scenarios, high-quality dividend growth stocks outperformed the broader S&P 500 index by an average of 420 basis points over the trailing 12 months following the initial rate cut.',
      'BrokerBros Research recommends leaning into defensive dividend growth equities with interest coverage ratios exceeding 6.0x and low debt-to-equity ratios.'
    ],
    author: {
      name: 'Marcus Vance',
      title: 'Head of Global Macro',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1000',
    featured: true
  },
  {
    id: 'art-3',
    title: 'Global Automotive Shift: Hybrid Resilience & Next-Gen Solid State Battery Commercialization',
    category: 'Stocks',
    topic: 'EV',
    readTime: '4 min read',
    publishedDate: '3 hours ago',
    summary: 'Pure-play EV automakers adjust production targets while legacy OEMs leverage hybrid powertrains to maintain cash flow velocity through 2027.',
    content: [
      'The global EV adoption curve is transitioning from early adopters to pragmatic mass-market consumers, placing a premium on charging infrastructure density and total cost of ownership.',
      'Automakers with hybrid-heavy product lineups are recording record operating margins, using excess cash flows to fund next-generation solid-state lithium battery R&D.',
      'We examine balance sheet health, supply chain vertical integration, and patent portfolios across 12 major global auto manufacturers.'
    ],
    author: {
      name: 'Elena Rostova',
      title: 'Senior Mobility Analyst',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
    },
    imageUrl: 'https://images.unsplash.com/photo-1558441719-67710c9d747a?auto=format&fit=crop&q=80&w=1000',
    featured: false
  },
  {
    id: 'art-4',
    title: 'Healthcare Innovation & GLP-1 Expansion: Second-Order Winners in MedTech & Logistics',
    category: 'Stocks',
    topic: 'Healthcare',
    readTime: '7 min read',
    publishedDate: '5 hours ago',
    summary: 'Beyond pharmaceutical giants, metabolic therapeutics are creating high-margin supply chain opportunities in sterile fills, cold-chain distribution, and oral formulation tech.',
    content: [
      'The rapid adoption of metabolic GLP-1 receptor agonists represents one of the largest therapeutic drug launches in pharmaceutical history.',
      'While primary drug developers command high market caps, smart capital is flowing into specialized contract development and manufacturing organizations (CDMOs).',
      'Our healthcare research team outlines key supply chain bottlenecks and highlights 4 mid-cap suppliers poised for sustained revenue growth.'
    ],
    author: {
      name: 'David Thorne, CFA',
      title: 'Head of Equity Research',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
    featured: false
  },
  {
    id: 'art-5',
    title: 'Commercial Banking & Net Interest Margins: Navigating Deposit Costs in Easing Regimes',
    category: 'Global Markets',
    topic: 'Banking',
    readTime: '5 min read',
    publishedDate: 'Yesterday',
    summary: 'Regional bank balance sheets show stabilizing deposit beta, positioning Tier-1 capital ratios above regulatory stress test minimums.',
    content: [
      'Deposit pricing pressures are beginning to abate across US regional banks as wholesale funding costs decline in tandem with short-term Treasury yields.',
      'Credit quality across commercial real estate exposure remains closely monitored, but loan loss provisions appear well-buffered following aggressive conservative provisioning.'
    ],
    author: {
      name: 'Marcus Vance',
      title: 'Head of Global Macro',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    imageUrl: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&q=80&w=1000',
    featured: false
  },
  {
    id: 'art-6',
    title: 'The Clean Energy Grid Transition: Liquefied Natural Gas (LNG) & Grid Storage Scale-Up',
    category: 'Economy',
    topic: 'Energy',
    readTime: '6 min read',
    publishedDate: '2 days ago',
    summary: 'Global natural gas export terminals and utility-scale battery storage installations accelerate to maintain base-load grid reliability.',
    content: [
      'As renewable energy generation accounts for a higher percentage of the total energy mix, utility providers are investing heavily in lithium-iron-phosphate (LFP) battery storage facilities to manage peak load volatility.',
      'We evaluate export facility capacity additions along the US Gulf Coast and long-term contract pricing models with European and Asian utility buyers.'
    ],
    author: {
      name: 'Dr. Sarah Lin',
      title: 'Chief Technology Strategist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    },
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000',
    featured: false
  }
];

export const UPCOMING_ECONOMIC_EVENTS: EconomicEvent[] = [
  {
    id: 'evt-1',
    time: '08:30 AM EST',
    date: 'Today',
    country: 'United States',
    countryFlag: '🇺🇸',
    event: 'Core PCE Price Index YoY',
    impact: 'High',
    forecast: '2.6%',
    previous: '2.7%',
    actual: '2.5%',
    category: 'Inflation'
  },
  {
    id: 'evt-2',
    time: '10:00 AM EST',
    date: 'Today',
    country: 'United States',
    countryFlag: '🇺🇸',
    event: 'ISM Manufacturing PMI',
    impact: 'High',
    forecast: '49.2',
    previous: '48.5',
    actual: '49.8',
    category: 'GDP'
  },
  {
    id: 'evt-3',
    time: '02:00 PM EST',
    date: 'Today',
    country: 'United States',
    countryFlag: '🇺🇸',
    event: 'FOMC Meeting Minutes Release',
    impact: 'High',
    forecast: 'Neutral',
    previous: 'Hawkish',
    category: 'Rate'
  },
  {
    id: 'evt-4',
    time: '08:30 AM EST',
    date: 'Tomorrow',
    country: 'United States',
    countryFlag: '🇺🇸',
    event: 'Non-Farm Payrolls & Unemployment Rate',
    impact: 'High',
    forecast: '175K / 4.1%',
    previous: '168K / 4.1%',
    category: 'Employment'
  },
  {
    id: 'evt-5',
    time: '07:45 AM EST',
    date: 'Tomorrow',
    country: 'Eurozone',
    countryFlag: '🇪🇺',
    event: 'ECB Monetary Policy Press Conference',
    impact: 'High',
    forecast: '3.25%',
    previous: '3.50%',
    category: 'Rate'
  },
  {
    id: 'evt-6',
    time: '11:30 PM EST',
    date: 'This Week',
    country: 'Japan',
    countryFlag: '🇯🇵',
    event: 'Bank of Japan Policy Rate Statement',
    impact: 'Medium',
    forecast: '0.25%',
    previous: '0.25%',
    category: 'Rate'
  }
];

export const EDUCATIONAL_GUIDES = [
  {
    id: 'edu-1',
    title: 'How to Read an Income Statement & Balance Sheet in 10 Minutes',
    category: 'Beginner Guides',
    time: '8 min read',
    level: 'Beginner',
    summary: 'Master revenue recognition, gross margin math, and net debt metrics without getting bogged down in accounting accounting jargon.',
    iconName: 'BookOpen'
  },
  {
    id: 'edu-2',
    title: 'Asset Allocation 101: Balancing Equities, Fixed Income & Cash Reserves',
    category: 'Investment Basics',
    time: '6 min read',
    level: 'Beginner',
    summary: 'Build a durable, low-drag portfolio tailored to your investment horizon, liquidity needs, and risk tolerance.',
    iconName: 'PieChart'
  },
  {
    id: 'edu-3',
    title: 'Demystifying Valuation Metrics: P/E, PEG, ROIC & Free Cash Flow Yield',
    category: 'Market Terminology',
    time: '10 min read',
    level: 'Intermediate',
    summary: 'Learn when a low P/E is a value trap versus a genuine bargain, and why ROIC is the ultimate measure of management quality.',
    iconName: 'HelpCircle'
  },
  {
    id: 'edu-4',
    title: 'Trading Psychology: Eliminating Emotional Biases in Volatile Markets',
    category: 'Trading Psychology',
    time: '7 min read',
    level: 'All Levels',
    summary: 'Understand loss aversion, recency bias, and how systematic rules keep you disciplined when market noise spikes.',
    iconName: 'Brain'
  },
  {
    id: 'edu-5',
    title: 'Risk Management Frameworks: Position Sizing & Stop-Loss Protocols',
    category: 'Risk Management',
    time: '9 min read',
    level: 'Intermediate',
    summary: 'Protect your capital reserves using the 1% risk rule, trailing volatility bands, and portfolio correlation matrixes.',
    iconName: 'ShieldCheck'
  }
];

export const RESEARCH_TOOLS_DATA = [
  {
    id: 'tool-screener',
    title: 'Stock Screener',
    description: 'Filter over 10,000 global equities by valuation metrics, ESG ratings, dividend yields, and technical indicators.',
    iconName: 'Search',
    badge: 'Popular',
    actionText: 'Launch Screener'
  },
  {
    id: 'tool-scanner',
    title: 'Market Scanner',
    description: 'Detect unusual options volume, block trades, and real-time price breakout alerts across major global exchanges.',
    iconName: 'Zap',
    badge: 'Real-Time',
    actionText: 'Open Scanner'
  },
  {
    id: 'tool-portfolio',
    title: 'Portfolio Insights',
    description: 'Automated factor risk exposure analysis, stress testing against historical market shocks, and sector overlap checks.',
    iconName: 'BarChart3',
    badge: 'Analytics',
    actionText: 'Analyze Portfolio'
  },
  {
    id: 'tool-watchlists',
    title: 'Smart Watchlists',
    description: 'Create dynamic, cloud-synced lists with customizable push alerts for breaking news and target price triggers.',
    iconName: 'Eye',
    badge: 'Customizable',
    actionText: 'Build Watchlist'
  },
  {
    id: 'tool-heatmaps',
    title: 'Interactive Heatmaps',
    description: 'Visualize real-time capital flow, S&P 500 market cap weights, and relative sector strength at a glance.',
    iconName: 'Grid',
    badge: 'Visual',
    actionText: 'View Heatmap'
  },
  {
    id: 'tool-calendar',
    title: 'Economic Calendar',
    description: 'Track central bank interest rate decisions, CPI releases, and corporate earnings calls with consensus estimates.',
    iconName: 'Calendar',
    badge: 'Macro',
    actionText: 'Check Calendar'
  },
  {
    id: 'tool-ratings',
    title: 'Analyst Ratings Hub',
    description: 'Aggregated Wall Street target prices, consensus buy/sell ratios, and analyst track record rankings.',
    iconName: 'Award',
    badge: 'Consensus',
    actionText: 'Explore Ratings'
  }
];

export const RESEARCH_FAQS = [
  {
    question: "Are BrokerBros research reports and market data free for account holders?",
    answer: "Yes! All BrokerBros individual and institutional account holders receive unlimited complimentary access to our daily market research, morning briefings, macro analysis, and economic calendar. Advanced level II market data feeds are also included with qualifying account balances."
  },
  {
    question: "Where does BrokerBros source its financial intelligence and news feeds?",
    answer: "BrokerBros integrates direct institutional feeds from premier global providers including Reuters, Dow Jones Newswires, Bloomberg consensus data, and S&P Global, combined with proprietary quantitative research generated by our in-house strategist team."
  },
  {
    question: "How frequently are economic calendars and earnings consensus updated?",
    answer: "Our macro economic calendar and corporate earnings schedules are updated in real time via low-latency server streaming. Official releases (e.g. CPI, Non-Farm Payrolls, FOMC statements) are broadcast instantly upon publication."
  },
  {
    question: "Can I customize news alerts and research triggers for my portfolio?",
    answer: "Absolutely. You can set up custom push and email notifications based on ticker symbols, breaking news tags (e.g. AI, Fed, Earnings), economic indicator releases, or unexpected volatility triggers directly inside the BrokerBros web and mobile app."
  },
  {
    question: "Are the educational research guides suitable for absolute beginners?",
    answer: "Yes. Our 'Learn Before You Invest' series is specifically engineered to explain complex financial concepts in plain, jargon-free English. Each guide breaks down topics into 5–10 minute readable teardowns with real-world examples."
  },
  {
    question: "How can I integrate research screener results into my trading workflow?",
    answer: "Screener results, watchlists, and analyst rating matrices can be exported with one click into your BrokerBros Web Terminal or Mobile App for seamless order entry, target tracking, or paper trading."
  }
];
