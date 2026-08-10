export interface TickerItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  market: 'US' | 'EU' | 'ASIA' | 'FX' | 'COMMODITY' | 'CRYPTO';
  volume?: string;
  high?: number;
  low?: number;
}

export interface MarketCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  commission: string;
  marginRate: string;
  instrumentsCount: string;
  highlights: string[];
  popularSymbols: { symbol: string; name: string; price: string; change: string; isPositive: boolean }[];
}

export interface AccountType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  minDeposit: string;
  recommendedFor: string;
  badge?: string;
}

export interface PlatformFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  specs: { label: string; value: string }[];
  keyTools: string[];
  imageType: 'chart' | 'order' | 'dom' | 'mobile';
}

export interface FAQItem {
  id: string;
  category: 'Licensing & Pricing' | 'Liquidity & FIX' | 'Compliance & Security' | 'Infrastructure & Setup' | 'Prop Firm Engine';
  question: string;
  answer: string;
}

export interface ResearchArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  summary: string;
  tag: string;
}

export interface ExchangeMarket {
  id: string;
  name: string;
  city: string;
  code: string;
  timezone: string;
  openTimeUtc: number; // Hour in UTC (e.g. 14.5 for 14:30)
  closeTimeUtc: number;
  coordinates: { x: number; y: number }; // percentage on SVG map
  currencies: string[];
  volume24h: string;
}
