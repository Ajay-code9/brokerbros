import React, { useState } from 'react';
import { CTASection } from '../../components/CTA/CTASection';
import { VideoHeroBackground } from '../../components/Common/VideoHeroBackground';
import {
  ShieldCheck,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Search,
  Filter,
  Globe,
  Layers,
  BarChart3,
  PieChart,
  SlidersHorizontal,
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
  Scale,
  Gauge,
  Percent,
  Crosshair,
  Info,
  Coins,
  Landmark,
  ChevronRight,
  Clock,
  Activity,
  Zap,
  Briefcase,
  FileText,
  Users,
  PhoneCall,
  MapPin,
  Sliders,
  HelpCircle,
  ShieldAlert,
  ArrowRightLeft
} from 'lucide-react';

interface BondsPageProps {
  onOpenAccount: () => void;
}

export const BondsPage: React.FC<BondsPageProps> = ({ onOpenAccount }) => {
  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Live Treasury Rates Banner
  const liveTreasuryTicker = [
    { name: '1-Month T-Bill', yieldRate: '5.32%', change: '-0.01%', isUp: false, benchmark: 'US Govt' },
    { name: '3-Month T-Bill', yieldRate: '5.25%', change: '+0.00%', isUp: true, benchmark: 'US Govt' },
    { name: '2-Year Note', yieldRate: '4.78%', change: '+0.03%', isUp: true, benchmark: 'US Govt' },
    { name: '5-Year Note', yieldRate: '4.35%', change: '-0.02%', isUp: false, benchmark: 'US Govt' },
    { name: '10-Year Note', yieldRate: '4.22%', change: '+0.01%', isUp: true, benchmark: 'US Govt' },
    { name: '30-Year Bond', yieldRate: '4.38%', change: '+0.02%', isUp: true, benchmark: 'US Govt' },
    { name: 'IG Corp Avg (A)', yieldRate: '5.65%', change: '-0.04%', isUp: false, benchmark: 'US Corp' },
    { name: 'Muni Composite', yieldRate: '3.85%', change: '+0.00%', isUp: true, benchmark: 'Tax-Exempt' }
  ];

  // Global Debt Market Interactive Selection
  const [selectedRegion, setSelectedRegion] = useState<'US' | 'UK' | 'DE' | 'JP' | 'CA' | 'AU' | 'CORP'>('US');

  const regionalMarketData = {
    US: {
      title: 'United States Treasuries & Agencies',
      flag: '🇺🇸',
      marketSize: '$27.4 Trillion',
      benchmarkYield: '4.22% (10Y)',
      totalIssuers: 'US Treasury, Fannie Mae, Freddie Mac, FHLB',
      taxStatus: 'Exempt from State & Local Taxes',
      popularSecurities: ['US 10Y Treasury Note', '4-Week T-Bill', 'TIPS 10Y Inflation-Protected', 'FHLB 5.15% 2028 Bond'],
      desc: 'The world benchmark risk-free rate backed by the full faith and credit of the United States government.'
    },
    UK: {
      title: 'United Kingdom Sovereign Gilts',
      flag: '🇬🇧',
      marketSize: '£2.4 Trillion',
      benchmarkYield: '4.12% (10Y)',
      totalIssuers: 'HM Treasury, UK Debt Management Office',
      taxStatus: 'Capital Gains Tax Exempt for UK Individuals',
      popularSecurities: ['UK Gilt 4.25% 2034', 'Index-Linked Gilt 2036', 'UK Gilt 3.75% 2029', 'HM Treasury 3M Bill'],
      desc: 'High-liquidity sterling debt instruments with index-linked options tied to UK RPI inflation.'
    },
    DE: {
      title: 'German Sovereign Bunds & Eurobonds',
      flag: '🇩🇪',
      marketSize: '€2.1 Trillion',
      benchmarkYield: '2.52% (10Y)',
      totalIssuers: 'Federal Republic of Germany, KfW Bank',
      taxStatus: 'Eurozone Sovereign Standard',
      popularSecurities: ['Bund 2.20% 2034', 'Bobl 5Y Note', 'Schatz 2Y Short-Term', 'KfW AAA 3.10% Eurobond'],
      desc: 'The benchmark credit safe-haven of the European Union with AAA ratings across all major credit agencies.'
    },
    JP: {
      title: 'Japanese Government Bonds (JGBs)',
      flag: '🇯🇵',
      marketSize: '¥1,080 Trillion',
      benchmarkYield: '1.05% (10Y)',
      totalIssuers: 'Ministry of Finance Japan',
      taxStatus: 'Sovereign Yen Benchmark',
      popularSecurities: ['10Y JGB #374 1.10%', '2Y JGB Short Note', '30Y Ultra-Long JGB', '40Y JGB Sovereign'],
      desc: 'Primary fixed-income benchmark for Asian institutional capital, supported by Bank of Japan operations.'
    },
    CA: {
      title: 'Canadian Government Debt',
      flag: '🇨🇦',
      marketSize: 'C$1.6 Trillion',
      benchmarkYield: '3.65% (10Y)',
      totalIssuers: 'Government of Canada, Province of Ontario, Quebec',
      taxStatus: 'Federal & Provincial Tax Structure',
      popularSecurities: ['Canada 3.25% 2034 Note', 'Ontario 4.15% 2030 Muni', 'Quebec 3.90% 2032', 'Canada Real Return Bond'],
      desc: 'AAA sovereign stability paired with robust provincial municipal debt yielding attractive spreads.'
    },
    AU: {
      title: 'Australian Sovereign Bonds',
      flag: '🇦🇺',
      marketSize: 'A$1.1 Trillion',
      benchmarkYield: '4.18% (10Y)',
      totalIssuers: 'Australian Office of Financial Management',
      taxStatus: 'Withholding Tax Exempt for Qualified Institutions',
      popularSecurities: ['Australia 4.25% 2035 Bond', 'Australia 3.75% 2028', 'Treasury Indexed Bond 2032', 'NSW Treasury Corp 4.5%'],
      desc: 'High-yielding AAA commodity-backed economy sovereign debt with strong institutional market depth.'
    },
    CORP: {
      title: 'Global Corporate Investment Grade Debt',
      flag: '🏢',
      marketSize: '$30.2 Trillion',
      benchmarkYield: '5.45% Avg Yield',
      totalIssuers: 'Apple, Microsoft, JPMorgan, Shell, Toyota, Nestlé',
      taxStatus: 'Standard Interest Income',
      popularSecurities: ['Apple 4.65% 2031', 'Microsoft 3.95% 2030', 'JPMorgan 5.30% 2029', 'Berkshire Hathaway 4.20%'],
      desc: 'Direct primary & secondary market access to high quality blue-chip corporate debt across US and Europe.'
    }
  };

  const currentRegion = regionalMarketData[selectedRegion];

  // Bond Categories Selector
  const [selectedBondCategory, setSelectedBondCategory] = useState<'all' | 'treasuries' | 'corporates' | 'munis' | 'agencies' | 'intl' | 'highyield' | 'ig' | 'frn'>('all');

  const bondMarketCategories = [
    {
      id: 'treasuries',
      name: 'Government Treasuries',
      icon: Landmark,
      count: '1,200+ CUSIPs',
      yieldRange: '4.22% - 5.35%',
      risk: 'Virtually Zero (US Govt Backed)',
      desc: 'T-Bills, T-Notes, T-Bonds, and TIPS purchased directly via Treasury auction or zero-markup secondary book.',
      examples: ['4-Week T-Bill', '2Y Treasury Note', '10Y Treasury Note', '30Y Bond']
    },
    {
      id: 'ig',
      name: 'Investment Grade Corporates',
      icon: Building2,
      count: '420,000+ Bonds',
      yieldRange: '5.10% - 6.80%',
      risk: 'Low to Moderate (AAA to BBB-)',
      desc: 'Bonds issued by financially robust S&P 500 corporations with predictable cash flow and low default risk.',
      examples: ['Apple Inc 4.85% 2031', 'JPMorgan 5.50% 2029', 'Microsoft 4.20% 2035', 'Amazon 4.60% 2032']
    },
    {
      id: 'munis',
      name: 'Municipal Bonds (Tax-Exempt)',
      icon: MapPin,
      count: '380,000+ Issues',
      yieldRange: '3.60% - 4.95%',
      risk: 'Very Low (State / City Backed)',
      desc: 'State, county, and local city infrastructure bonds exempt from US Federal and state income taxes.',
      examples: ['NY State Dormitory 4.25%', 'CA State General Obligation', 'Texas Water Dev 4.0%', 'Florida Turnpike 4.5%']
    },
    {
      id: 'agencies',
      name: 'Agency & GSE Debt',
      icon: ShieldCheck,
      count: '85,000+ Bonds',
      yieldRange: '4.80% - 5.45%',
      risk: 'Extremely Low (Implicit Govt Backing)',
      desc: 'Bonds issued by Government Sponsored Enterprises (Fannie Mae, Freddie Mac, FHLB, Farm Credit).',
      examples: ['Fannie Mae 5.10% 2028', 'Freddie Mac 4.95% 2030', 'FHLB 5.25% Step-Up', 'Farm Credit 5.05%']
    },
    {
      id: 'intl',
      name: 'International & Sovereign Debt',
      icon: Globe,
      count: '95,000+ Bonds',
      yieldRange: '2.50% - 7.20%',
      risk: 'Sovereign Varies (AAA to A-)',
      desc: 'Access UK Gilts, German Bunds, Japanese JGBs, and Australian sovereign debt in native currencies.',
      examples: ['UK Gilt 4.12% 2034', 'German Bund 2.52%', 'Australia 4.18%', 'Canada Sovereign 3.65%']
    },
    {
      id: 'highyield',
      name: 'High Yield Corporate Bonds',
      icon: Sparkles,
      count: '110,000+ Bonds',
      yieldRange: '7.25% - 9.85%',
      risk: 'Moderate to High (BB+ to B-)',
      desc: 'Higher coupon income opportunities with comprehensive credit metrics, covenants, and default metrics.',
      examples: ['Ford Motor Credit 6.85%', 'T-Mobile US 5.80%', 'Netflix 5.375%', 'Ball Corp 6.00%']
    },
    {
      id: 'frn',
      name: 'Floating Rate Notes (FRNs)',
      icon: Activity,
      count: '45,000+ Issues',
      yieldRange: 'SOFR + 0.45% to +1.85%',
      risk: 'Low Duration Risk',
      desc: 'Bonds whose coupon payments automatically adjust quarterly based on short-term SOFR benchmark rates.',
      examples: ['US Treasury FRN 2026', 'Goldman Sachs SOFR+0.85%', 'Bank of America FRN', 'Toyota Credit FRN']
    }
  ];

  // Bond Screener Search & Filters
  const [screenerSearch, setScreenerSearch] = useState('');
  const [ratingFilter, setRatingFilter] = useState<'ALL' | 'AAA' | 'AA' | 'A' | 'BBB' | 'HY'>('ALL');
  const [typeFilter, setTypeFilter] = useState<'ALL' | 'Treasury' | 'Corporate' | 'Municipal' | 'Agency'>('ALL');

  const sampleBondsData = [
    { cusip: '912828ZD2', issuer: 'United States Treasury Note', type: 'Treasury', rating: 'AAA', coupon: '4.25%', yieldToMaturity: '4.22%', maturity: '2034-08-15', price: '99.85', markup: '$0.00' },
    { cusip: '912797FP3', issuer: 'United States Treasury Bill (13-Wk)', type: 'Treasury', rating: 'AAA', coupon: '0.00%', yieldToMaturity: '5.25%', maturity: '2026-11-01', price: '98.71', markup: '$0.00' },
    { cusip: '037833DV1', issuer: 'Apple Inc. Senior Unsecured', type: 'Corporate', rating: 'AAA', coupon: '4.85%', yieldToMaturity: '5.12%', maturity: '2031-05-10', price: '98.40', markup: '$0.00' },
    { cusip: '594918BY2', issuer: 'Microsoft Corp Senior Notes', type: 'Corporate', rating: 'AAA', coupon: '4.20%', yieldToMaturity: '4.95%', maturity: '2035-11-03', price: '95.20', markup: '$0.00' },
    { cusip: '46625HHJ8', issuer: 'JPMorgan Chase & Co. Sr Notes', type: 'Corporate', rating: 'A+', coupon: '5.50%', yieldToMaturity: '5.62%', maturity: '2029-01-23', price: '99.10', markup: '$0.00' },
    { cusip: '649721AC4', issuer: 'New York State Dormitory Authority', type: 'Municipal', rating: 'AA+', coupon: '4.25%', yieldToMaturity: '3.95%', maturity: '2038-03-15', price: '102.15', markup: '$0.00' },
    { cusip: '13063C7N9', issuer: 'California State General Obligation', type: 'Municipal', rating: 'AA', coupon: '4.50%', yieldToMaturity: '4.10%', maturity: '2036-11-01', price: '103.40', markup: '$0.00' },
    { cusip: '313384BG1', issuer: 'Federal Home Loan Banks (FHLB)', type: 'Agency', rating: 'AAA', coupon: '5.15%', yieldToMaturity: '5.18%', maturity: '2028-06-28', price: '99.90', markup: '$0.00' },
    { cusip: '345370CF2', issuer: 'Ford Motor Credit Co LLC', type: 'Corporate', rating: 'BBB-', coupon: '6.85%', yieldToMaturity: '7.15%', maturity: '2028-05-12', price: '98.80', markup: '$0.00' }
  ];

  const filteredBonds = sampleBondsData.filter((b) => {
    const matchesSearch = b.issuer.toLowerCase().includes(screenerSearch.toLowerCase()) || b.cusip.toLowerCase().includes(screenerSearch.toLowerCase());
    const matchesRating = ratingFilter === 'ALL' ? true : ratingFilter === 'HY' ? b.rating.startsWith('BB') || b.rating.startsWith('B') : b.rating.startsWith(ratingFilter);
    const matchesType = typeFilter === 'ALL' ? true : b.type === typeFilter;
    return matchesSearch && matchesRating && matchesType;
  });

  // Yield & Maturity Interactive Calculator State
  const [calcFaceValue, setCalcFaceValue] = useState<number>(10000);
  const [calcPrice, setCalcPrice] = useState<number>(98.50);
  const [calcCoupon, setCalcCoupon] = useState<number>(4.50);
  const [calcYears, setCalcYears] = useState<number>(5);

  // Approximate YTM Formula for quick client-side visualization
  // YTM approx = [C + (F - P)/n] / [(F + P)/2]
  const annualCouponAmt = (calcCoupon / 100) * calcFaceValue;
  const capitalGainLossPerYear = (calcFaceValue - (calcPrice / 100 * calcFaceValue)) / calcYears;
  const avgBondValue = (calcFaceValue + (calcPrice / 100 * calcFaceValue)) / 2;
  const calculatedYTM = (((annualCouponAmt + capitalGainLossPerYear) / avgBondValue) * 100).toFixed(2);
  const annualCashIncome = annualCouponAmt.toFixed(2);
  const totalReturnOverMaturity = ((annualCouponAmt * calcYears) + (calcFaceValue - (calcPrice / 100 * calcFaceValue))).toFixed(2);

  // Yield Curve Comparison Simulator State
  const [curveScenario, setCurveScenario] = useState<'normal' | 'inverted' | 'flat'>('normal');

  const curveDataMap = {
    normal: { label: 'Normal Slope (Economic Expansion)', rates: [ { tenure: '1M', rate: '3.20%' }, { tenure: '2Y', rate: '3.80%' }, { tenure: '5Y', rate: '4.15%' }, { tenure: '10Y', rate: '4.45%' }, { tenure: '30Y', rate: '4.85%' } ] },
    inverted: { label: 'Inverted Curve (Fed Tightening)', rates: [ { tenure: '1M', rate: '5.32%' }, { tenure: '2Y', rate: '4.78%' }, { tenure: '5Y', rate: '4.35%' }, { tenure: '10Y', rate: '4.22%' }, { tenure: '30Y', rate: '4.38%' } ] },
    flat: { label: 'Flat Curve (Policy Transition)', rates: [ { tenure: '1M', rate: '4.50%' }, { tenure: '2Y', rate: '4.52%' }, { tenure: '5Y', rate: '4.51%' }, { tenure: '10Y', rate: '4.50%' }, { tenure: '30Y', rate: '4.55%' } ] }
  };

  // Investment Strategy Active Selection
  const [activeStrategy, setActiveStrategy] = useState<'ladder' | 'barbell' | 'bullet' | 'income' | 'tips'>('ladder');

  const strategiesData = {
    ladder: {
      title: 'The Bond Ladder Strategy',
      subtitle: 'Staggered Maturities to Mitigate Reinvestment & Interest Rate Risk',
      diagram: ['1-Year Bond (5.25%)', '3-Year Bond (4.75%)', '5-Year Bond (4.50%)', '7-Year Bond (4.40%)', '10-Year Bond (4.35%)'],
      benefits: [
        'Annual liquidity event as shortest bond matures each year',
        'Reinvest maturing capital into prevailing higher or market rates',
        'Smoothes portfolio yield fluctuations over full economic cycles',
        'Provides predictable liquidity without selling long-term bonds at a discount'
      ]
    },
    barbell: {
      title: 'The Barbell Strategy',
      subtitle: 'Combining Short-Term Liquidity with Long-Term High Coupon Yields',
      diagram: ['Short-Term T-Bills (1Y - 5.25%)', '=== NO INTERMEDIATE ===', 'Long-Term Corporate Bonds (20Y - 6.20%)'],
      benefits: [
        'Short-term end provides immediate liquidity and protection against rising rates',
        'Long-term end locks in high fixed coupons for extended compound growth',
        'Flexibility to reallocate short-term funds if market disruptions occur'
      ]
    },
    bullet: {
      title: 'The Bullet Strategy',
      subtitle: 'Concentrated Maturities for Target Future Liabilities',
      diagram: ['Purchase 2026, 2027 & 2028 Bonds -> All Mature Concurrently in 2030'],
      benefits: [
        'Ideal for funding specific future cash requirements (college, house purchase, debt payoff)',
        'Minimizes reinvestment rate risk before target maturity date',
        'Locks in exact total payoff sum at predetermined horizon'
      ]
    },
    income: {
      title: 'Maximizing Monthly & Quarterly Cash Flow',
      subtitle: 'Multi-Sector Coupon Ladder Across IG Corporates & Municipals',
      diagram: ['Jan/Jul Coupons (Apple)', 'Feb/Aug Coupons (JPMorgan)', 'Mar/Sep Coupons (US Treasuries)', 'Apr/Oct Coupons (NY Muni)'],
      benefits: [
        'Provides steady monthly distributions to fund retirement living expenses',
        'Zero need to sell underlying principal assets during market downturns',
        'Blends tax-exempt municipal coupons with high-yielding corporate income'
      ]
    },
    tips: {
      title: 'Treasury Inflation-Protected Securities (TIPS)',
      subtitle: 'Principal Adjustments Tied Directly to US Consumer Price Index (CPI)',
      diagram: ['CPI Inflation Rises +3% -> Bond Principal Adjusts Upwards +3% -> Coupon Calculated on Higher Principal'],
      benefits: [
        'Direct mathematical hedge against purchasing power erosion',
        'Principal value increases with inflation and decreases with deflation',
        'Guaranteed by the US Federal Government at maturity'
      ]
    }
  };

  // Learning Center Expandable State
  const [expandedEdu, setExpandedEdu] = useState<number | null>(0);

  const eduItems = [
    {
      title: 'How Bonds Work: Par Value, Coupons & Maturities',
      icon: BookOpen,
      summary: 'A bond is a formal loan made by an investor to a borrower (government or corporation).',
      details: 'When you purchase a bond, you are lending money at a fixed or floating interest rate for a specified duration. The borrower promises to pay you regular interest payments (coupons), typically semiannually, and return the full face value ($1,000 Par Value) upon the bond’s maturity date. Bond prices fluctuate inversely to prevailing interest rates.'
    },
    {
      title: 'Yield to Maturity (YTM) vs. Coupon Rate',
      icon: Calculator,
      summary: 'Understanding the difference between the printed coupon rate and your actual expected return.',
      details: 'The Coupon Rate is the annual interest percentage printed on the bond certificate based on its $1,000 par value. Yield to Maturity (YTM) is the true total annual rate of return earned if you purchase the bond at its current market price (which may be at a premium above $1,000 or a discount below $1,000) and hold it until maturity.'
    },
    {
      title: 'Credit Ratings Demystified: AAA to High Yield',
      icon: ShieldCheck,
      summary: 'How Moody’s, S&P, and Fitch evaluate creditworthiness and default probability.',
      details: 'Bonds are categorized into Investment Grade (AAA down to BBB-) and High Yield / Speculative Grade (BB+ down to D). Investment grade issuers possess rock-solid balance sheets and near-zero historical default probability, making them prime candidates for capital preservation.'
    },
    {
      title: 'Understanding Duration & Interest Rate Sensitivity',
      icon: Scale,
      summary: 'Measuring how much a bond’s price will change for a 1.00% move in benchmark yields.',
      details: 'Duration is expressed in years and calculates price sensitivity. For example, a bond portfolio with a Modified Duration of 6.5 years will drop approximately 6.5% in price if benchmark interest rates rise by 1.00%, and rise 6.5% if interest rates fall by 1.00%. Shorter duration means lower price volatility.'
    },
    {
      title: 'Tax Advantages of Municipal Bonds & Treasuries',
      icon: Percent,
      summary: 'How tax exemptions significantly boost your Tax-Equivalent Yield (TEY).',
      details: 'US Treasury interest is exempt from state and local income taxes. Municipal bond interest issued by your home state is typically 100% exempt from both Federal and state income taxes. For investors in top tax brackets, a 4.00% tax-free municipal yield can equal a 6.50%+ taxable corporate yield.'
    }
  ];

  const bondsTickerData = [
    { symbol: "US 10-YR T-NOTE", yieldVal: "4.281%", price: "99-14+", change: "-0.015", isUp: false },
    { symbol: "US 2-YR T-NOTE", yieldVal: "4.412%", price: "99-28", change: "+0.008", isUp: true },
    { symbol: "US 30-YR T-BOND", yieldVal: "4.510%", price: "95-04", change: "-0.024", isUp: false },
    { symbol: "JPM 5.25% 2034 Corp", yieldVal: "5.380%", price: "$98.85", change: "+0.150", isUp: true },
    { symbol: "AAPL 4.10% 2031 Corp", yieldVal: "4.250%", price: "$99.10", change: "+0.080", isUp: true },
    { symbol: "NY ST MUNI 4.00% 2038", yieldVal: "3.850%", price: "$101.40", change: "+0.050", isUp: true }
  ];

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does BrokerBros provide over 1,000,000 bonds with zero markup?',
      a: 'BrokerBros connects directly to primary electronic execution venues (TM3, MarketAxess, Tradeweb, Bloomberg FIT) aggregating secondary liquidity from over 50 global institutional dealers. Unlike traditional retail brokerages that embed hidden 1% - 2% markups into bond prices, BrokerBros passes true institutional wholesale execution directly to your account with $0 markup.'
    },
    {
      q: 'What is the minimum investment required to trade Treasuries or Corporate Bonds?',
      a: 'US Treasury Bills, Notes, and Bonds have a minimum order size of $1,000 Par Value ($1 bond unit). Most Corporate and Municipal bonds trade in increments of $1,000 or $5,000 Par Value, allowing retail investors and wealth managers to build custom diversified portfolios with modest capital.'
    },
    {
      q: 'Can I sell my bonds on BrokerBros prior to their maturity date?',
      a: 'Yes. BrokerBros provides continuous live secondary market liquidity. You can request a live Request-For-Quote (RFQ) bid or list your bonds on the secondary order book at any time during market hours with institutional depth.'
    },
    {
      q: 'How are coupon interest payments paid into my brokerage account?',
      a: 'Coupon interest is deposited automatically in cash into your BrokerBros core cash or sweep account on the official payment dates (typically semiannually for US Treasuries and Corporate bonds, or monthly for mortgage-backed securities).'
    },
    {
      q: 'Does BrokerBros offer automated Bond Ladder building tools?',
      a: 'Yes. Our integrated Bond Ladder Builder allows you to specify your target investment amount, desired credit rating tier, and duration range (e.g. 1 to 5 years). The system automatically selects zero-markup CUSIPs with non-overlapping maturity dates and balanced annual cash flows.'
    },
    {
      q: 'How does BrokerBros handle Treasury Auction orders?',
      a: 'You can participate in weekly US Treasury Auctions (4-week Bills up to 30-year Bonds) directly through the BrokerBros platform at non-competitive bid pricing with zero commission and zero auction fees.'
    }
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white text-slate-900 selection:bg-emerald-500 selection:text-white font-sans">

      {/* 0. LIVE BONDS YIELD BANNER (OBSIDIAN DARK THEME) */}
      <div className="bg-slate-950 border-b border-slate-800 py-2.5 overflow-hidden font-mono text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold shrink-0 z-10 bg-slate-950 pr-4 border-r border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>YIELD CURVE FEEDS</span>
          </div>
          <div className="overflow-hidden flex-1 relative group no-scrollbar">
            <div className="flex gap-6 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
              {[...bondsTickerData, ...bondsTickerData, ...bondsTickerData].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 shrink-0 bg-slate-900/90 px-3 py-1 rounded border border-slate-800">
                  <span className="font-bold text-white">{item.symbol}</span>
                  <span className="text-emerald-400 font-bold">{item.yieldVal}</span>
                  <span className="text-slate-400">{item.price}</span>
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
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>INSTITUTIONAL FIXED INCOME & YIELD DESK</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-slate-950 font-sans">
                Access 1,000,000+ Bonds <br />
                <span className="text-emerald-700">With Zero Markup Pricing</span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal">
                Invest with confidence through global Treasuries, Municipals, Corporate Bonds, and CDs. Construct automated bond ladders backed by institutional liquidity, live yield metrics, and transparent wholesale pricing.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOpenAccount}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer text-sm"
                >
                  <span>Open Fixed Income Account</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('bond-screener-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-lg border border-slate-300 transition-all flex items-center gap-2 cursor-pointer text-sm"
                >
                  <Search className="w-4 h-4 text-emerald-600" />
                  <span>Search Bond Screener</span>
                </button>
              </div>

              {/* Key Quick Badges */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <div className="text-slate-400 text-xs">Available Bonds</div>
                  <div className="text-emerald-700 font-extrabold text-sm sm:text-base mt-0.5">1,000,000+ CUSIPs</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs">Bond Markup</div>
                  <div className="text-slate-950 font-extrabold text-sm sm:text-base mt-0.5">Zero ($0 Markup)</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs">10Y US Treasury</div>
                  <div className="text-emerald-700 font-extrabold text-sm sm:text-base mt-0.5">4.22% Yield</div>
                </div>
              </div>
            </div>

            {/* Right Bonds Image - Clean Simple Image */}
            <div className="lg:col-span-5">
              <img
                src="/bonds_treasury_vault.webp"
                alt="Bonds Treasury Vault"
                className="w-full h-auto max-h-[420px] object-contain shadow-md rounded-xl border border-slate-200"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY FIXED INCOME? (ELEGANT VISUAL CARDS) */}
      <section className="py-12 lg:py-16 min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              THE ANCHOR OF WEALTH MANAGEMENT
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Why Institutional & Private Investors Allocate to Fixed Income
            </h2>
            <p className="text-slate-600 text-base">
              Bonds provide essential capital preservation, predictable income distributions, and counter-cyclical stability during equity market volatility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Capital Preservation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Protect your core principal with sovereign guarantees and investment-grade corporate covenants. Return of capital is contractual upon maturity.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>100% Contractual Principal Redemption</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Regular Income Flow</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Receive contractual semiannual or monthly cash distributions to meet living expenses or fund compound reinvestment strategies.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Fixed Cashflows deposited to account</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                <Activity className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Portfolio Drawdown Shield</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Bonds historically demonstrate low or negative correlation to stock market drawdowns, cushioning overall portfolio valuations during downturns.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Negative Equity Beta Potential</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                <Globe className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Asset Class Diversification</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Spread risk across sovereign nations, US municipal infrastructure, global corporations, and floating rate instruments.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Multi-Sector Coverage</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                <Gauge className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Lower Volatility</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fixed income instruments exhibit significantly lower standard deviation compared to equity benchmarks, delivering peace of mind.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Subdued Price Variance</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                <Calculator className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Predictable Yield-to-Maturity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Unlike equities with uncertain dividend cuts, your yield to maturity is locked in at purchase if held to redemption date.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Mathematically Lockable YTM</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. EXPLORE BOND MARKETS (PREMIUM CARDS) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <Layers className="w-3.5 h-3.5 text-emerald-700" />
              COMPREHENSIVE MARKET DEPT
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Explore Available Fixed Income Sectors
            </h2>
            <p className="text-slate-600 text-base">
              Filter across government sovereign, corporate credit tiers, tax-exempt municipals, and inflation protection.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bondMarketCategories.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="bg-slate-50 p-7 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
                        <CatIcon className="w-5 h-5 text-emerald-700" />
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-800 bg-white px-2.5 py-1 rounded border border-emerald-200">
                        {cat.count}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-serif-heading text-slate-900">{cat.name}</h3>
                    
                    <div className="flex justify-between items-center text-xs font-mono bg-white p-2.5 rounded border border-slate-200">
                      <span className="text-slate-500">Yield Range:</span>
                      <span className="font-bold text-emerald-700">{cat.yieldRange}</span>
                    </div>

                    <p className="text-slate-600 text-xs leading-relaxed">{cat.desc}</p>

                    <div className="space-y-1 pt-1">
                      <div className="text-[11px] font-mono text-slate-500 uppercase">Featured Securities:</div>
                      <div className="flex flex-wrap gap-1 font-mono text-[11px]">
                        {cat.examples.map((ex, i) => (
                          <span key={i} className="bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setTypeFilter(
                        cat.id === 'treasuries' ? 'Treasury' :
                        cat.id === 'ig' || cat.id === 'highyield' ? 'Corporate' :
                        cat.id === 'munis' ? 'Municipal' :
                        cat.id === 'agencies' ? 'Agency' : 'ALL'
                      );
                      const el = document.getElementById('screener-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-mono font-bold rounded-lg transition-colors cursor-pointer text-xs flex items-center justify-center gap-1 mt-4"
                  >
                    <span>Filter Screener For {cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. GLOBAL FIXED INCOME MARKETPLACE (MAP & COUNTRY BENCHMARKS) */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">GLOBAL DEBT INFRASTRUCTURE</div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-white">
              Global Sovereign & Corporate Debt Markets
            </h2>
            <p className="text-slate-400 text-sm">
              Direct clearing connections to sovereign treasury auctions and international corporate eurobond markets. Select a regional cluster below.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap justify-center gap-2 font-mono text-xs">
            {[
              { id: 'US', flag: '🇺🇸', label: 'United States' },
              { id: 'UK', flag: '🇬🇧', label: 'United Kingdom' },
              { id: 'DE', flag: '🇩🇪', label: 'Germany (Eurozone)' },
              { id: 'JP', flag: '🇯🇵', label: 'Japan (JGB)' },
              { id: 'CA', flag: '🇨🇦', label: 'Canada' },
              { id: 'AU', flag: '🇦🇺', label: 'Australia' },
              { id: 'CORP', flag: '🏢', label: 'Global Corporates' }
            ].map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedRegion(r.id as any)}
                className={`px-4 py-2.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  selectedRegion === r.id
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{r.flag}</span>
                <span>{r.label}</span>
              </button>
            ))}
          </div>

          {/* Regional Detailed Card */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{currentRegion.flag}</span>
                <div>
                  <h3 className="text-2xl font-serif-heading font-bold text-white">{currentRegion.title}</h3>
                  <div className="text-xs font-mono text-slate-400">Total Outstanding Debt: <span className="text-emerald-400 font-bold">{currentRegion.marketSize}</span></div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">{currentRegion.desc}</p>

              <div className="grid grid-cols-2 gap-4 font-mono text-xs pt-2">
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-500">Benchmark Yield:</div>
                  <div className="text-lg font-bold text-emerald-400">{currentRegion.benchmarkYield}</div>
                </div>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-500">Tax Treatment:</div>
                  <div className="text-xs font-bold text-white">{currentRegion.taxStatus}</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase">Popular Benchmark Securities:</div>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {currentRegion.popularSecurities.map((s, idx) => (
                    <span key={idx} className="bg-slate-950 px-3 py-1.5 rounded border border-slate-800 text-slate-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4 font-mono text-xs">
              <div className="text-slate-400 text-center border-b border-slate-800 pb-2 uppercase">
                Institutional Clearing Architecture
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-lg">
                <span className="text-slate-400">Primary Clearing Network</span>
                <span className="text-emerald-400 font-bold">DTCC / FedWire / Euroclear</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-lg">
                <span className="text-slate-400">BrokerBros Execution Fee</span>
                <span className="text-white font-bold">$0.00 (Zero Markup)</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-lg">
                <span className="text-slate-400">Minimum Trade Unit</span>
                <span className="text-emerald-400 font-bold">$1,000 Par Value</span>
              </div>

              <button
                onClick={() => showToast(`Selected ${currentRegion.title} for search`)}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg transition-colors cursor-pointer text-xs flex items-center justify-center gap-2 mt-2"
              >
                <span>View {currentRegion.title} Books</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 5. YIELD & MATURITY DASHBOARD (INTERACTIVE VISUALIZATIONS) */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">INSTITUTIONAL METRICS DASHBOARD</div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-white">
              Yield Curve & Macro Fixed Income Analytics
            </h2>
            <p className="text-slate-400 text-sm">
              Simulate economic rate scenarios and evaluate term structure, duration risk, and credit spread distributions.
            </p>
          </div>

          {/* Scenario Buttons */}
          <div className="flex justify-center gap-3 font-mono text-xs">
            <button
              onClick={() => setCurveScenario('normal')}
              className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer ${
                curveScenario === 'normal' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
              }`}
            >
              Normal Curve Slope
            </button>
            <button
              onClick={() => setCurveScenario('inverted')}
              className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer ${
                curveScenario === 'inverted' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
              }`}
            >
              Inverted Rate Curve
            </button>
            <button
              onClick={() => setCurveScenario('flat')}
              className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer ${
                curveScenario === 'flat' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
              }`}
            >
              Flat Term Structure
            </button>
          </div>

          {/* Scenario Metrics Display */}
          <div className="bg-slate-950 p-6 lg:p-8 rounded-2xl border border-slate-800 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4 font-mono text-xs">
              <div>
                <span className="text-slate-400">Current Simulation: </span>
                <span className="text-emerald-400 font-bold">{curveDataMap[curveScenario].label}</span>
              </div>
              <span className="text-slate-500">Live Fed Funds Target: 5.25% - 5.50%</span>
            </div>

            {/* Simulated Yield Curve Chart */}
            <div className="grid grid-cols-5 gap-4 text-center font-mono text-xs">
              {curveDataMap[curveScenario].rates.map((r, i) => (
                <div key={i} className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-slate-400">{r.tenure} Maturity</div>
                  <div className="text-2xl font-extrabold text-emerald-400">{r.rate}</div>
                  <div className="text-[10px] text-slate-500">Benchmark Par</div>
                </div>
              ))}
            </div>

            {/* Credit Breakdown Bar Visual */}
            <div className="space-y-2 font-mono text-xs pt-4 border-t border-slate-800">
              <div className="flex justify-between text-slate-400">
                <span>Credit Rating Distribution across Marketplace</span>
                <span>1,000,000+ Bonds</span>
              </div>
              <div className="h-5 w-full bg-slate-900 rounded-lg overflow-hidden flex">
                <div className="bg-emerald-500 h-full w-[35%]" title="AAA Sovereign"></div>
                <div className="bg-cyan-500 h-full w-[25%]" title="AA High Quality"></div>
                <div className="bg-blue-500 h-full w-[25%]" title="A Corporate"></div>
                <div className="bg-amber-500 h-full w-[10%]" title="BBB Moderate"></div>
                <div className="bg-rose-500 h-full w-[5%]" title="High Yield"></div>
              </div>
              <div className="flex flex-wrap justify-between text-[11px] text-slate-400 pt-1">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> AAA (35%)</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span> AA (25%)</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> A (25%)</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> BBB (10%)</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> High Yield (5%)</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. BOND SCREENER & RESEARCH TOOLS MODULE */}
      <section id="screener-section" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-700" />
              ADVANCED INVESTOR TOOLS
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Bond Screener & Interactive Yield Calculator
            </h2>
            <p className="text-slate-600 text-base">
              Filter secondary market debt, calculate exact yield-to-maturity (YTM), and model portfolio cash flows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Interactive Calculator Sidebar */}
            <div className="lg:col-span-5 bg-slate-950 text-white p-6 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold border-b border-slate-800 pb-3">
                <Calculator className="w-4 h-4 text-emerald-400" />
                INSTITUTIONAL YIELD-TO-MATURITY (YTM) CALCULATOR
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <label className="text-slate-400 block mb-1">Face Value / Par Amount ($):</label>
                  <input
                    type="number"
                    value={calcFaceValue}
                    onChange={(e) => setCalcFaceValue(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-white font-bold focus:outline-hidden focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Purchase Price (% of Par e.g. 98.50):</label>
                  <input
                    type="number"
                    step="0.1"
                    value={calcPrice}
                    onChange={(e) => setCalcPrice(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-white font-bold focus:outline-hidden focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Coupon Rate (%):</label>
                    <input
                      type="number"
                      step="0.1"
                      value={calcCoupon}
                      onChange={(e) => setCalcCoupon(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-white font-bold focus:outline-hidden focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Years to Maturity:</label>
                    <input
                      type="number"
                      value={calcYears}
                      onChange={(e) => setCalcYears(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-white font-bold focus:outline-hidden focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Calculation Outputs */}
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Calculated YTM:</span>
                    <span className="text-2xl font-extrabold text-emerald-400">{calculatedYTM}%</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-800 pt-2">
                    <span className="text-slate-400">Annual Cash Coupon:</span>
                    <span className="text-white font-bold">${annualCashIncome} / yr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Total Return at Maturity:</span>
                    <span className="text-emerald-400 font-bold">${totalReturnOverMaturity}</span>
                  </div>
                </div>

                <button
                  onClick={() => showToast(`Calculated YTM: ${calculatedYTM}% for $${calcFaceValue} Par`)}
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg transition-colors cursor-pointer text-xs"
                >
                  Recalculate Yield
                </button>
              </div>
            </div>

            {/* Bond Screener Table View */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Screener Controls */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search CUSIP or Issuer..."
                    value={screenerSearch}
                    onChange={(e) => setScreenerSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:outline-hidden focus:border-emerald-500"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value as any)}
                    className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs cursor-pointer focus:outline-hidden focus:border-emerald-500"
                  >
                    <option value="ALL">All Sectors</option>
                    <option value="Treasury">Treasuries</option>
                    <option value="Corporate">Corporates</option>
                    <option value="Municipal">Municipals</option>
                    <option value="Agency">Agencies</option>
                  </select>

                  <select
                    value={ratingFilter}
                    onChange={(e) => setRatingFilter(e.target.value as any)}
                    className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs cursor-pointer focus:outline-hidden focus:border-emerald-500"
                  >
                    <option value="ALL">All Ratings</option>
                    <option value="AAA">AAA Rating</option>
                    <option value="AA">AA Rating</option>
                    <option value="A">A Rating</option>
                    <option value="BBB">BBB Rating</option>
                  </select>
                </div>
              </div>

              {/* Table Container */}
              <div className="overflow-x-auto bg-slate-950 text-white rounded-xl border border-slate-800 shadow-xl font-mono text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-900 text-slate-400 uppercase text-[11px] border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-3 font-bold">CUSIP / Issuer</th>
                      <th className="py-3 px-3 font-bold">Rating</th>
                      <th className="py-3 px-3 font-bold">Coupon</th>
                      <th className="py-3 px-3 font-bold text-emerald-400">YTM</th>
                      <th className="py-3 px-3 font-bold">Maturity</th>
                      <th className="py-3 px-3 font-bold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850">
                    {filteredBonds.map((b, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/80 transition-colors">
                        <td className="py-3 px-3">
                          <div className="font-bold text-white text-[11px]">{b.issuer}</div>
                          <div className="text-[10px] text-emerald-400">{b.cusip} • {b.type}</div>
                        </td>
                        <td className="py-3 px-3">
                          <span className="bg-slate-800 text-slate-200 px-2 py-0.5 rounded border border-slate-700 font-bold">
                            {b.rating}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-slate-300">{b.coupon}</td>
                        <td className="py-3 px-3 font-bold text-emerald-400 bg-emerald-500/5">{b.yieldToMaturity}</td>
                        <td className="py-3 px-3 text-slate-400">{b.maturity}</td>
                        <td className="py-3 px-3 text-right">
                          <button
                            onClick={() => showToast(`Selected ${b.cusip} for order placement`)}
                            className="px-2.5 py-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded transition-colors cursor-pointer text-[10px]"
                          >
                            Buy
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. WHY BROKERBROS FOR FIXED INCOME? (FEATURE CARDS) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <Award className="w-3.5 h-3.5 text-emerald-700" />
              THE BROKERBROS ADVANTAGE
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Institutional Power Built for Every Investor
            </h2>
            <p className="text-slate-600 text-base">
              Why wealth managers, family offices, and self-directed investors choose BrokerBros for fixed income.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Zero Markup Pricing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Most retail brokers mark up bond prices by 1% to 2%, pocketing thousands from your yield. BrokerBros passes wholesale dealer prices straight to you with $0 markup.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold">Transparent Pass-Through Execution</div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Layers className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">1,000,000+ Available Bonds</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Access the world's largest aggregated secondary bond book covering US Treasuries, agencies, 380k+ municipals, and global investment-grade corporates.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold">Unrivaled Selection Depth</div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Institutional Liquidity (RFQ)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Submit automated Request-For-Quote (RFQ) orders directly to 50+ institutional dealers simultaneously to receive tightest bid-ask spreads.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold">Multi-Dealer Competition</div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                <BarChart3 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Advanced Research & Dossiers</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                View complete issuer financial statements, credit rating histories, covenant terms, default probability scores, and SEC filings inside the platform.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold">Complete Credit Analysis</div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Dedicated Bond Desk Specialists</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Have complex custom order requirements or high-net-worth portfolio customization? Speak directly with our institutional fixed-income traders.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold">Personalized Desk Support</div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Globe className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900">Global Currency Multi-Asset</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hold bonds in USD, EUR, GBP, JPY, CAD, and AUD with seamless multi-currency settlement and automated FX hedging capabilities.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-bold">Multi-Currency Accounts</div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. MARKET STATISTICS COUNTER STRIP */}
      <section className="py-16 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 text-center font-mono">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">1,000,000+</div>
              <div className="text-xs text-slate-400 mt-1 uppercase">Available Bonds</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">100+</div>
              <div className="text-xs text-slate-400 mt-1 uppercase">Sovereign & Corp Issuers</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">$0.00</div>
              <div className="text-xs text-slate-400 mt-1 uppercase">Markup Fee</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">50+</div>
              <div className="text-xs text-slate-400 mt-1 uppercase">Dealer Liquidity Venues</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">$48B+</div>
              <div className="text-xs text-slate-400 mt-1 uppercase">Fixed Income AUM</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">24/5</div>
              <div className="text-xs text-slate-400 mt-1 uppercase">Global Desk Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. INVESTMENT STRATEGIES MODULE */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">STRATEGIC PORTFOLIO CONSTRUCTION</div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-white">
              Proven Fixed Income Investment Strategies
            </h2>
            <p className="text-slate-400 text-sm">
              Select a strategy below to explore structural diagrams and risk management benefits.
            </p>
          </div>

          {/* Strategy Tabs */}
          <div className="flex flex-wrap justify-center gap-2 font-mono text-xs">
            {[
              { id: 'ladder', label: 'Bond Ladder Strategy' },
              { id: 'barbell', label: 'Barbell Strategy' },
              { id: 'bullet', label: 'Bullet Strategy' },
              { id: 'income', label: 'Monthly Income Ladder' },
              { id: 'tips', label: 'TIPS Inflation Protection' }
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveStrategy(s.id as any)}
                className={`px-4 py-2.5 rounded-xl font-bold transition-all cursor-pointer ${
                  activeStrategy === s.id
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Strategy Card Preview */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl font-serif-heading font-bold text-white">
                {strategiesData[activeStrategy].title}
              </h3>
              <div className="text-xs font-mono text-emerald-400">
                {strategiesData[activeStrategy].subtitle}
              </div>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-slate-400 font-bold uppercase">Key Strategy Advantages:</div>
                <ul className="space-y-2">
                  {strategiesData[activeStrategy].benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300 text-xs">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-3 font-mono text-xs">
              <div className="text-slate-400 text-center border-b border-slate-800 pb-2 uppercase font-bold">
                Structural Allocation Flow
              </div>

              <div className="space-y-2 pt-1">
                {strategiesData[activeStrategy].diagram.map((d, i) => (
                  <div key={i} className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-center text-emerald-400 font-bold">
                    {d}
                  </div>
                ))}
              </div>

              <button
                onClick={() => showToast(`Constructing ${strategiesData[activeStrategy].title} template`)}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg transition-colors cursor-pointer text-xs mt-4"
              >
                Build Automated Ladder
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 10. PLATFORM SHOWCASE */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">INSTITUTIONAL TERMINAL INTERFACE</div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-white">
              Institutional Fixed Income Software Suite
            </h2>
            <p className="text-slate-400 text-sm">
              Trade bonds across desktop workstations, web terminals, and native mobile apps with real-time analytics.
            </p>
          </div>

          {/* Desktop Terminal Showcase Container */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 lg:p-8 shadow-2xl space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span className="text-slate-400 ml-2 font-bold">BrokerBros Fixed Income Workstation v4.2</span>
              </div>
              <span className="text-emerald-400 font-bold">CONNECTED: DTCC FIX GATEWAY</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="text-slate-400 font-bold uppercase border-b border-slate-800 pb-2">Live Order Entry</div>
                <div className="space-y-2">
                  <div className="text-slate-300">CUSIP: <strong className="text-white">912828ZD2</strong></div>
                  <div className="text-slate-300">Target Par: <strong className="text-emerald-400">$50,000 Par</strong></div>
                  <div className="text-slate-300">Ask Yield: <strong className="text-emerald-400">4.22% YTM</strong></div>
                  <div className="text-slate-300">Markup Surcharge: <strong className="text-emerald-400">$0.00</strong></div>
                </div>
                <button
                  onClick={() => showToast('Simulated Order Submitted: $50,000 US Treasury @ 4.22% YTM')}
                  className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded cursor-pointer"
                >
                  Submit Pass-Through Order
                </button>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="text-slate-400 font-bold uppercase border-b border-slate-800 pb-2">Portfolio Analytics</div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total Par Value:</span>
                    <span className="text-white font-bold">$250,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Weighted YTM:</span>
                    <span className="text-emerald-400 font-bold">5.18%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Portfolio Duration:</span>
                    <span className="text-white font-bold">4.2 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tax-Exempt Share:</span>
                    <span className="text-cyan-400 font-bold">28.5%</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="text-slate-400 font-bold uppercase border-b border-slate-800 pb-2">Credit Monitoring</div>
                <div className="space-y-2">
                  <div className="text-slate-300">Moody's Rating: <strong className="text-emerald-400">Aaa / Stable</strong></div>
                  <div className="text-slate-300">S&P Score: <strong className="text-emerald-400">AAA</strong></div>
                  <div className="text-slate-300">Default Risk Score: <strong className="text-emerald-400">0.001% (Minimal)</strong></div>
                  <div className="text-slate-300">SEC Filings: <strong className="text-white">Updated 2 Days Ago</strong></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 11. LEARNING CENTER (EXPANDABLE CARDS) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              FIXED INCOME ACADEMY
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Essential Bond Knowledge for Wealth Investors
            </h2>
            <p className="text-slate-600 text-base">
              Click any topic below to expand comprehensive educational insights.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {eduItems.map((item, idx) => {
              const ItemIcon = item.icon;
              const isExpanded = expandedEdu === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedEdu(isExpanded ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                        <ItemIcon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-serif-heading text-slate-900">{item.title}</h3>
                        <p className="text-xs text-slate-500 font-sans mt-0.5">{item.summary}</p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-slate-600 text-sm leading-relaxed bg-slate-50/50">
                      {item.details}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
              INVESTOR QUESTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900">
              Frequently Asked Questions About Fixed Income
            </h2>
            <p className="text-slate-600 text-base">
              Clear, transparent answers regarding zero markup pricing, Treasury auctions, and account settlement.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-bold text-slate-900 font-serif-heading text-base">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 13. FINAL CTA SECTION */}
      <CTASection onOpenAccount={onOpenAccount} />

    </div>
  );
};
