import React, { useState } from 'react';
import { 
  Newspaper, 
  Search, 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  Clock, 
  Globe, 
  DollarSign, 
  ShieldCheck, 
  Filter,
  CheckCircle2,
  Activity,
  Flame,
  Bookmark,
  Share2
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

interface NewsArticle {
  id: string;
  category: string;
  title: string;
  snippet: string;
  timeAgo: string;
  readTime: string;
  impact: 'High' | 'Medium' | 'Low';
  author: string;
  imageSrc: string;
  trending?: boolean;
}

export const NewsInsightsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Forex & Currencies',
    'Central Banks & Fed',
    'Stocks & Earnings',
    'Crypto Assets',
    'Commodities & Oil'
  ];

  const newsArticles: NewsArticle[] = [
    {
      id: '1',
      category: 'Central Banks & Fed',
      title: 'Federal Reserve Signals Interest Rate Pause Ahead of Inflation Data',
      snippet: 'Chairman Powell indicates policy rates will remain steady as core PCE inflation metrics cool across major manufacturing sectors.',
      timeAgo: '12 mins ago',
      readTime: '4 min read',
      impact: 'High',
      author: 'Marcus Vance, Chief Macro Strategist',
      imageSrc: '/research-hero-one.webp',
      trending: true
    },
    {
      id: '2',
      category: 'Forex & Currencies',
      title: 'EUR/USD Tests 1.0850 Level as European Central Bank Reaffirms Target',
      snippet: 'Euro gains momentum against the USD following hawkish ECB comments regarding eurozone wage growth resilience.',
      timeAgo: '35 mins ago',
      readTime: '3 min read',
      impact: 'High',
      author: 'Elena Rostova, FX Analyst',
      imageSrc: '/stock-trading-bg.webp',
      trending: true
    },
    {
      id: '3',
      category: 'Stocks & Earnings',
      title: 'Big Tech Rally Boosts S&P 500 & NASDAQ 100 to Record Session Highs',
      snippet: 'Semiconductor manufacturers lead equity gains as enterprise cloud demand accelerates quarterly revenue forecasts.',
      timeAgo: '1 hour ago',
      readTime: '5 min read',
      impact: 'Medium',
      author: 'David Chen, Senior Equity Strategist',
      imageSrc: '/trader-workstation.webp'
    },
    {
      id: '4',
      category: 'Crypto Assets',
      title: 'Bitcoin Consolidates Above $65,000 as Institutional ETF Inflows Resume',
      snippet: 'Digital asset spot ETFs register over $420M in net daily inflows following increased retail broker adoption.',
      timeAgo: '2 hours ago',
      readTime: '3 min read',
      impact: 'Medium',
      author: 'Sarah Jenkins, Crypto Lead',
      imageSrc: '/copy-pamm-showcase.webp'
    },
    {
      id: '5',
      category: 'Commodities & Oil',
      title: 'Crude Oil Surges 2.4% Following Middle East Supply Chain Adjustments',
      snippet: 'Brent Crude benchmark tops $84 per barrel as OPEC+ members confirm voluntary production cut extensions into Q4.',
      timeAgo: '3 hours ago',
      readTime: '4 min read',
      impact: 'High',
      author: 'Tariq Al-Mansoor, Energy Analyst',
      imageSrc: '/b2b-crm-dash.webp'
    },
    {
      id: '6',
      category: 'Central Banks & Fed',
      title: 'Bank of Japan Maintains Yield Curve Control Parameters',
      snippet: 'Governor Ueda highlights wage growth trajectory before considering further monetary policy normalization steps.',
      timeAgo: '4 hours ago',
      readTime: '4 min read',
      impact: 'Low',
      author: 'Kenji Sato, Asia-Pac Economist',
      imageSrc: '/liquidity-engine.webp'
    }
  ];

  const newsSteps = [
    {
      step: '01',
      title: 'Flash Breaking News',
      desc: 'Sub-second wire feeds deliver macroeconomic announcements and central bank policy changes live.',
      icon: Zap
    },
    {
      step: '02',
      title: 'Institutional Analysis',
      desc: 'Expert market strategists breakdown real-world trade implications and price targets.',
      icon: Activity
    },
    {
      step: '03',
      title: 'Volatility Signals',
      desc: 'Identify asset correlation shifts, liquidity surges, and high-impact volatility events.',
      icon: TrendingUp
    },
    {
      step: '04',
      title: 'Execute on Terminal',
      desc: 'Trade instantly with 1-click execution on WebTrader, MT5, or native mobile apps.',
      icon: CheckCircle2
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesQuery = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="bg-slate-50 dark:bg-[#090D14] text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-300 min-h-screen">
      
      {/* 1. HERO SECTION (100% LANDING FIT & DUAL THEME COMPATIBLE) */}
      <section className="relative min-h-[calc(100vh-90px)] flex flex-col justify-center py-6 sm:py-10 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1420]">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-5 my-auto w-full">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-800/50">
            <Newspaper className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>REAL-TIME MARKET NEWS & FINANCIAL INSIGHTS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Global Market News & Insights <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400">
              Live Macro Analysis & Central Bank Feeds
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            Stay ahead of global financial markets with real-time news streams, macro economic event coverage, central bank rate decisions, and expert institutional market analysis.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAccount}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-md shadow-emerald-600/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Live Trading Terminal Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Integrated SLA Metric Card */}
          <div className="pt-3 max-w-xl mx-auto w-full">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
              <div className="text-left space-y-0.5">
                <div className="text-xs font-mono font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>NEWS STREAM LATENCY</span>
                </div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Sub-10ms Live Exchange Wire Ticker
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400 px-3.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                24/7 Live
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CHRONOLOGICAL 4-STEP NEWS WORKFLOW */}
      <section className="py-12 bg-white dark:bg-[#0E1420] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              <Activity className="w-4 h-4" />
              <span>MARKET NEWS WORKFLOW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              From Breaking News to Trade Execution
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              How real-time macroeconomic news powers smart institutional trading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {newsSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 space-y-3 relative">
                <div className="w-9 h-9 rounded-xl font-mono font-bold flex items-center justify-center text-sm border bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                  {step.step}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <step.icon className="w-4 h-4 text-emerald-500" />
                  <span>{step.title}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE CATEGORY & SEARCH FILTER BAR */}
      <section className="py-12 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input Box */}
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search market news, fed rates, forex..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#141C2B] border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 font-medium"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-white dark:bg-[#141C2B] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* News Articles Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div 
                key={article.id}
                className="bg-white dark:bg-[#141C2B] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:border-emerald-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Article Card Image */}
                  <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img 
                      src={article.imageSrc} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {article.trending && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-rose-600 text-white text-[10px] font-mono font-bold flex items-center gap-1 shadow-md">
                        <Flame className="w-3 h-3" />
                        <span>TRENDING</span>
                      </span>
                    )}
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono font-semibold">
                      {article.category}
                    </span>
                  </div>

                  {/* Article Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-500" />
                        {article.timeAgo}
                      </span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {article.snippet}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 mt-4">
                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                    {article.author}
                  </span>
                  <button className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 text-xs font-bold flex items-center gap-1 cursor-pointer">
                    <span>Read Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CTA SECTION */}
      <CTASection onOpenAccount={onOpenAccount} />

    </div>
  );
};
