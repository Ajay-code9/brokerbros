import React, { useState } from 'react';
import {
  ShieldCheck,
  TrendingUp,
  Award,
  Lock,
  Building2,
  CheckCircle,
  AlertCircle,
  FileText,
  Globe,
  ArrowRight,
  Download,
  HelpCircle,
  Layers,
  ChevronDown,
  ChevronUp,
  Zap,
  BarChart3,
  DollarSign,
  PieChart,
  Check,
  X,
  Clock,
  Briefcase
} from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';
import { VideoHeroBackground } from '../components/Common/VideoHeroBackground';
import { UniversalCard } from '../components/Common/UniversalCard';

interface PageProps {
  onOpenAccount: () => void;
}

export const WhyBrokerBrosPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState<number>(4);
  const [activeBalanceTab, setActiveBalanceTab] = useState<'assets' | 'capital' | 'liquidity'>('capital');
  const [downloadToast, setDownloadToast] = useState<boolean>(false);

  const handleDownloadReport = () => {
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 4000);
  };

  const metrics = [
    { label: "Consolidated Equity Capital", value: "$28.4 Billion", sub: "S&P Investment Grade Standard", highlight: "+14.2% YoY" },
    { label: "Excess Regulatory Capital", value: "$14.2 Billion", sub: "28.5% CET1 Ratio vs 10.5% Req.", highlight: "2.7x Required" },
    { label: "Daily Average Trading Vol.", value: "$480+ Billion", sub: "Over 12M Executed Trades Daily", highlight: "Global Liquidity" },
    { label: "Active Client Accounts", value: "2.8 Million+", sub: "Institutions & Retail Investors", highlight: "35 Countries" },
    { label: "Client Assets Under Custody", value: "$320+ Billion", sub: "Held in Tier-1 Bank Segregation", highlight: "100% Segregated" },
    { label: "Excess SIPC Insurance", value: "$30 Million", sub: "Per Account via Lloyd's Syndicates", highlight: "Tier-1 Protection" }
  ];

  const pillars = [
    {
      title: "Uncompromising Client Confidence",
      desc: "Investors require total assurance that their capital is shielded from systemic shocks. Our $28.4B capital base ensures peace of mind through any market cycle.",
      icon: ShieldCheck,
      metric: "S&P A- Rated"
    },
    {
      title: "Market Downturn Protection",
      desc: "During extreme volatility spikes or liquidity squeezes, BrokerBros maintains robust excess capital buffers to execute client orders uninterrupted.",
      icon: TrendingUp,
      metric: "28.5% CET1 Ratio"
    },
    {
      title: "Immediate Capital Liquidity",
      desc: "Client cash reserves are held in overnight Tier-1 bank deposits and short-dated US Treasuries, guaranteeing same-day withdrawal capabilities.",
      icon: Zap,
      metric: "Zero Illiquid Assets"
    },
    {
      title: "Continuous Operational Resilience",
      desc: "Redundant clearing pathways, multi-region datacenters, and zero PFOF routing protect execution speeds even during record volume days.",
      icon: Building2,
      metric: "99.999% Uptime"
    },
    {
      title: "Generational Sustainability",
      desc: "Operating conservatively with zero long-term debt leverage ensures long-term institutional longevity for wealth management & family offices.",
      icon: Award,
      metric: "Zero Debt Leverage"
    }
  ];

  const ratingComparisons = [
    { broker: "BrokerBros Securities", rating: "S&P: A- (Stable)", moodys: "Moody's: A3", cet1: "28.5%", pfof: "Zero PFOF", protection: "SIPC + $30M Excess" },
    { broker: "Legacy Tier-1 Broker A", rating: "S&P: BBB+", moodys: "Moody's: Baa1", cet1: "14.2%", pfof: "Accepts PFOF", protection: "SIPC Only" },
    { broker: "Fintech Retail App B", rating: "S&P: BBB- / Unrated", moodys: "Moody's: Baa3", cet1: "11.0%", pfof: "Heavy PFOF Dependent", protection: "SIPC Only" },
    { broker: "Offshore CFD Broker C", rating: "Unrated (Non-US)", moodys: "Unrated", cet1: "Unknown", pfof: "B-Book Internalizer", protection: "No SIPC Protection" }
  ];

  const riskFramework = [
    {
      title: "Real-Time Automated Margin Risk Engine",
      desc: "Scans client positions every 100 milliseconds using stress-testing algorithms to prevent negative equity balances before liquidations occur.",
      tag: "Microsecond Risk Analytics"
    },
    {
      title: "Daily Monte Carlo Stress Testing",
      desc: "Simulates severe multi-asset market crash scenarios daily to verify that capital reserves exceed extreme 99.9th percentile loss expectations.",
      tag: "99.9th Percentile VaR"
    },
    {
      title: "Tier-1 Central Clearing Gateways",
      desc: "Direct clearing membership with DTCC, OCC, CME Clearing, and Euroclear eliminates intermediary credit risks.",
      tag: "Direct Exchange Member"
    },
    {
      title: "SOC-2 Type II Cyber Resilience",
      desc: "Multi-datacenter fault tolerance with hardware security modules (HSM) and encrypted multi-signature vault architecture.",
      tag: "Hardware Level Encryption"
    }
  ];

  const timelineEvents = [
    { year: "2012", title: "Foundation & SEC/FINRA Registration", detail: "Established with $250M initial capital base focused on direct market access." },
    { year: "2016", title: "S&P Investment Grade Credit Rating", detail: "Received inaugural S&P BBB+ rating following global clearing expansion." },
    { year: "2020", title: "Capital Reaches $15.0 Billion", detail: "Expanded excess regulatory capital reserves to absorb unprecedented pandemic market volume." },
    { year: "2024", title: "S&P Upgrade to A- (Stable)", detail: "Upgraded by S&P Global Ratings citing outstanding balance sheet strength & zero PFOF." },
    { year: "2026", title: "$28.4B Consolidated Capital Today", detail: "Serving 2.8M accounts across 35 countries with $320B+ assets under custody." }
  ];

  const globalHubs = [
    { city: "New York (Global HQ)", region: "Americas", status: "Active • 24/5 Desk", volume: "$210B Daily", address: "One World Trade Center, 74th Fl" },
    { city: "London", region: "EMEA", status: "Active • 24/5 Desk", volume: "$130B Daily", address: "25 Bank Street, Canary Wharf" },
    { city: "Singapore", region: "Asia-Pacific", status: "Active • 24/5 Desk", volume: "$95B Daily", address: "Marina Bay Financial Centre" },
    { city: "Tokyo", region: "Asia-Pacific", status: "Active • 24/5 Desk", volume: "$45B Daily", address: "Roppongi Hills Mori Tower" }
  ];

  const faqs = [
    {
      q: "What does the S&P A- Investment Grade rating mean for my account safety?",
      a: "An S&P Global rating of A- indicates strong financial security and an exceptional capacity to meet financial commitments. Unlike unrated or lower-rated retail brokers, BrokerBros maintains conservative capital reserves that undergo rigorous independent credit evaluation annually."
    },
    {
      q: "How are my cash and securities protected if BrokerBros experiences market distress?",
      a: "Client assets are held in fully segregated accounts at Tier-1 banking institutions (e.g., JPMorgan Chase, Bank of America) completely separate from BrokerBros corporate funds. In addition, client securities are protected by SIPC up to $500,000 (including $250,000 for cash claims) and backed by additional Lloyd's of London excess insurance up to $30,000,000 per client account."
    },
    {
      q: "Does BrokerBros lend out my fully paid stock for short selling without my permission?",
      a: "No. Fully paid client securities are never lent out or re-hypothecated without your explicit written opt-in through our Fully Paid Stock Yield Enhancement Program, where you receive 50% of earned loan interest fees."
    },
    {
      q: "What is CET1 Capital Ratio and why is 28.5% significant?",
      a: "Common Equity Tier 1 (CET1) measures an institution's core capital against its total risk-weighted assets. While international banking regulations require a minimum CET1 ratio of 10.5%, BrokerBros maintains a 28.5% CET1 ratio — almost 3x the regulatory threshold — ensuring unmatched balance sheet resilience."
    },
    {
      q: "Can I review BrokerBros' official audited balance sheet and regulatory filings?",
      a: "Yes. As a registered broker-dealer, BrokerBros files quarterly financial reports with the SEC and FINRA. You can download our latest audited financial disclosures directly from our Investor Relations hub or request a physical report copy."
    }
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white text-slate-900 selection:bg-emerald-500 selection:text-white font-sans antialiased">
      {/* Toast Notification for Financial Report Download */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-950 text-white px-5 py-4 rounded-xl border border-emerald-500/40 shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <div className="text-xs font-bold text-white">2026 Financial Strength Report Downloaded</div>
            <div className="text-[11px] text-slate-400">Audited SEC & FINRA financial disclosures sent to your browser.</div>
          </div>
        </div>
      )}

      {/* 1. HERO SECTION (Apple & IBKR Clean White Institutional Style) */}
      {/* 1. HERO SECTION WITH NATURAL BACKGROUND IMAGE (Shifted Upward for Perfect Viewport Balance) */}
      <section 
        className="relative text-slate-900 min-h-[calc(100vh-80px)] py-10 lg:py-14 border-b border-slate-200 overflow-hidden font-sans bg-cover bg-center bg-no-repeat flex flex-col justify-between"
        style={{ backgroundImage: "url('/backgroundimage-one.webp')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
          <div className="max-w-3xl space-y-5 -mt-6 sm:-mt-8">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-emerald-800 text-xs font-mono font-bold border border-emerald-300 shadow-sm backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>INSTITUTIONAL CAPITAL & CREDIT STANDING</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-950 font-sans">
              Built on Unshakeable <br />
              <span className="text-emerald-700">Capital Strength & S&P Rating</span>
            </h1>

            <p className="text-slate-900 text-base sm:text-lg leading-relaxed max-w-2xl font-sans font-semibold bg-white/60 backdrop-blur-xs p-3 rounded-xl border border-white/80 shadow-2xs">
              BrokerBros operates with $28.4 Billion in consolidated equity capital, an S&P A- credit rating, and $30 Million in excess client protection per account.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAccount}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer text-sm"
              >
                <span>Open Protected Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadReport}
                className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-xl border border-slate-300 shadow-sm transition-all flex items-center gap-2 cursor-pointer text-sm"
              >
                <Download className="w-4 h-4 text-emerald-600" />
                <span>Download 2026 Audit Report</span>
              </button>
            </div>

          </div>
        </div>

        {/* Key Quick Badges - Positioned at Bottom Fold */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8 pb-2">
          <div className="pt-6 border-t border-slate-300/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono max-w-3xl">
            <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-slate-500 text-xs font-sans">S&P Credit Rating</div>
              <div className="text-emerald-700 font-extrabold text-sm sm:text-base mt-0.5">A- (Stable Outlook)</div>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-slate-500 text-xs font-sans">CET1 Capital Ratio</div>
              <div className="text-slate-950 font-extrabold text-sm sm:text-base mt-0.5">28.5% (2.7x Req)</div>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-slate-500 text-xs font-sans">Client Protection</div>
              <div className="text-emerald-700 font-extrabold text-sm sm:text-base mt-0.5">$30M Excess Policy</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CAPITAL STRENGTH MATTERS (Interactive Universal 3D Cards) */}
      <section className="py-20 bg-slate-50/80 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight">
              Why Capital Strength Matters When Selecting a Brokerage
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-sans">
              Financial markets experience extreme volatility, liquidity shocks, and credit tightening. A heavily capitalized broker acts as an indestructible fortress for your life's savings and institutional portfolios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <UniversalCard
                  key={idx}
                  icon={<IconComp className="w-6 h-6" />}
                  title={item.title}
                  description={item.desc}
                  badge={item.metric}
                  onClick={onOpenAccount}
                  variant="light"
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FINANCIAL STRENGTH HIGHLIGHTS (Interactive Glowing Metric Tiles) */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
            <div>
              <div className="text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider mb-2">FINANCIAL STANDING HIGHLIGHTS</div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight">Institutional Key Metrics</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md font-sans">
              Audited quarterly figures confirming BrokerBros position among the world's most capitalized independent brokerages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 p-8 rounded-2xl border border-slate-200/80 space-y-3 relative overflow-hidden group hover:bg-white hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-between items-center text-xs font-mono text-slate-500">
                  <span className="font-semibold text-slate-700">{m.label}</span>
                  <span className="text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">{m.highlight}</span>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight pt-1 font-sans group-hover:text-emerald-700 transition-colors">
                  {m.value}
                </div>
                <div className="text-xs font-sans text-slate-600 pt-2 border-t border-slate-200/60">
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CREDIT RATING & STANDING */}
      <section className="py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold font-mono rounded-md border border-emerald-200">
              <Award className="w-3.5 h-3.5 text-emerald-700" />
              S&P GLOBAL CREDIT EVALUATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-sans">
              S&P A- Credit Rating Comparison
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Standard & Poor's investment grade rating evaluates operational liquidity, equity reserves, risk management discipline, and counterparty reliability.
            </p>
          </div>

          {/* Rating Comparison Table */}
          <div className="overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950 text-white text-xs uppercase font-mono border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6 font-bold">Brokerage Firm</th>
                  <th className="py-4 px-6 font-bold text-emerald-400">S&P Credit Rating</th>
                  <th className="py-4 px-6 font-bold">Moody's Rating</th>
                  <th className="py-4 px-6 font-bold">CET1 Ratio</th>
                  <th className="py-4 px-6 font-bold">PFOF Model</th>
                  <th className="py-4 px-6 font-bold">Client Protection</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {ratingComparisons.map((row, idx) => {
                  const isBrokerBros = idx === 0;
                  return (
                    <tr key={idx} className={isBrokerBros ? "bg-slate-900 text-white font-bold" : "hover:bg-slate-50 text-slate-700 transition-colors"}>
                      <td className="py-4.5 px-6 flex items-center gap-2">
                        {isBrokerBros && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 animate-pulse" />}
                        <span className={isBrokerBros ? "text-white font-bold text-base" : "font-semibold"}>{row.broker}</span>
                      </td>
                      <td className="py-4.5 px-6 font-mono">
                        <span className={isBrokerBros ? "bg-emerald-500 text-slate-950 font-black px-3 py-1 rounded text-xs shadow-md" : "text-slate-700 font-semibold"}>
                          {row.rating}
                        </span>
                      </td>
                      <td className="py-4.5 px-6 font-mono text-xs">{row.moodys}</td>
                      <td className="py-4.5 px-6 font-mono text-xs font-bold text-emerald-400">{row.cet1}</td>
                      <td className="py-4.5 px-6 text-xs font-semibold">{row.pfof}</td>
                      <td className="py-4.5 px-6 text-xs font-semibold">{row.protection}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. BALANCE SHEET STRENGTH & CET1 GAUGE */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-sans">
              Interactive Balance Sheet & Capital Fortress
            </h2>
            <p className="text-slate-600 text-base font-sans">
              Detailed view of consolidated equity reserves, segregated client assets, and unencumbered US Treasury liquidity.
            </p>

            {/* Tabs */}
            <div className="flex justify-center gap-2 pt-4">
              <button
                onClick={() => setActiveBalanceTab('capital')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${activeBalanceTab === 'capital' ? 'bg-slate-950 text-white shadow-md' : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                Capital Reserves ($28.4B)
              </button>
              <button
                onClick={() => setActiveBalanceTab('assets')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${activeBalanceTab === 'assets' ? 'bg-slate-950 text-white shadow-md' : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                Client Custody Assets ($320B)
              </button>
              <button
                onClick={() => setActiveBalanceTab('liquidity')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${activeBalanceTab === 'liquidity' ? 'bg-slate-950 text-white shadow-md' : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
              >
                US Treasuries & Cash Reserves
              </button>
            </div>
          </div>

          {/* Dynamic Tab Content Box with Visual Capital Gauge */}
          <div className="bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xl max-w-4xl mx-auto space-y-8">
            {activeBalanceTab === 'capital' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-sans">Consolidated Equity & Regulatory Reserve Buffer</h3>
                    <p className="text-slate-500 text-xs font-mono">SEC & FINRA audited net capital compliance</p>
                  </div>
                  <span className="text-emerald-700 font-bold font-mono text-xl">$28,420,000,000</span>
                </div>

                {/* CET1 Fortress Capital Progress Gauge */}
                <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="font-bold text-slate-900">BrokerBros CET1 Ratio: 28.5%</span>
                    <span className="text-emerald-700 font-bold">2.7x Regulatory Minimum (10.5%)</span>
                  </div>
                  <div className="w-full bg-slate-200 h-4 rounded-full overflow-hidden relative">
                    <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full rounded-full transition-all duration-1000 shadow-inner" style={{ width: '82%' }}></div>
                    <div className="absolute left-[30%] top-0 bottom-0 w-0.5 bg-slate-400 z-10"></div>
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-1">
                    <span>0%</span>
                    <span>10.5% Regulatory Min</span>
                    <span>28.5% Fortress Capital</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono">
                  <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-1 shadow-2xs">
                    <div className="text-slate-500">Tier-1 Common Equity Capital</div>
                    <div className="text-slate-900 font-bold text-lg">$18,200,000,000</div>
                    <div className="text-emerald-700 text-[11px] font-bold">Unencumbered core equity</div>
                  </div>
                  <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-1 shadow-2xs">
                    <div className="text-slate-500">Excess Regulatory Reserve</div>
                    <div className="text-slate-900 font-bold text-lg">$10,220,000,000</div>
                    <div className="text-emerald-700 text-[11px] font-bold">2.7x mandatory threshold</div>
                  </div>
                </div>
              </div>
            )}

            {activeBalanceTab === 'assets' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-sans">Client Custody Asset Breakdown</h3>
                    <p className="text-slate-500 text-xs font-mono">Held off-balance sheet in fully segregated Tier-1 accounts</p>
                  </div>
                  <span className="text-emerald-700 font-bold font-mono text-xl">$320,000,000,000+</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-1 shadow-2xs">
                    <div className="text-slate-500">Equities & ETFs</div>
                    <div className="text-slate-900 font-bold text-lg">$210.4B</div>
                  </div>
                  <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-1 shadow-2xs">
                    <div className="text-slate-500">Fixed Income & Treasuries</div>
                    <div className="text-slate-900 font-bold text-lg">$68.2B</div>
                  </div>
                  <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-1 shadow-2xs">
                    <div className="text-slate-500">Segregated Cash Deposits</div>
                    <div className="text-slate-900 font-bold text-lg">$41.4B</div>
                  </div>
                </div>
              </div>
            )}

            {activeBalanceTab === 'liquidity' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-sans">Instant Liquidity & Cash Reserves</h3>
                    <p className="text-slate-500 text-xs font-mono">Zero exposure to illiquid commercial real estate or venture debt</p>
                  </div>
                  <span className="text-emerald-700 font-bold font-mono text-xl">100% Liquid</span>
                </div>

                <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 font-mono space-y-2">
                  <div className="font-bold">Liquidity Composition:</div>
                  <p>• 62% Short-dated US Treasury Bills (&lt;90 day maturity)</p>
                  <p>• 38% Federal Reserve Bank & Tier-1 Demand Cash Deposits</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. RISK MANAGEMENT FRAMEWORK (Interactive Microsecond Pulse Cards) */}
      <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider">ENTERPRISE RISK GOVERNANCE</div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight">
              Multi-Layered Risk Management Architecture
            </h2>
            <p className="text-slate-600 text-sm font-sans">
              Our automated risk engines execute continuous real-time oversight to protect institutional capital integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riskFramework.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200 space-y-3 shadow-xs hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                    {item.tag}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 pt-2 font-sans group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT ASSET PROTECTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight">
              Multi-Tiered Client Asset Protection
            </h2>
            <p className="text-slate-600 text-base font-sans">
              How BrokerBros protects retail investors, family offices, and institutional accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold">
                <ShieldCheck className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-sans">SIPC Protection</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-sans">
                Securities Investor Protection Corporation (SIPC) protects securities and cash up to $500,000 (including $250,000 for cash claims).
              </p>
            </div>

            <div className="bg-slate-950 text-white p-8 rounded-2xl border border-slate-800 space-y-4 shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/30">
                <Lock className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase">EXCLUSIVE INSTITUTIONAL POLICY</div>
              <h3 className="text-xl font-bold text-white font-sans">$30 Million Excess Insurance</h3>
              <p className="text-slate-300 text-xs leading-relaxed font-sans">
                Underwritten by Lloyd's of London syndicates, providing up to $30,000,000 per client account with an aggregate firm limit of $150,000,000.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold">
                <Building2 className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-sans">Bank Segregation</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-sans">
                Client cash is deposited into special reserve accounts at Tier-1 banks (JPMorgan Chase, Bank of America) strictly in accordance with SEC Rule 15c3-3.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GLOBAL FINANCIAL PRESENCE (Live Node Status Badges) */}
      <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider">GLOBAL FINANCIAL HUBS</div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight">
              Regulated Operating Desks Worldwide
            </h2>
            <p className="text-slate-600 text-sm font-sans">
              Continuous 24-hour liquidity and trading support across major international financial centers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalHubs.map((hub, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 space-y-3 shadow-2xs hover:border-emerald-500/60 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-500 font-bold">{hub.region}</span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-800 font-bold text-[11px] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>{hub.status}</span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-emerald-700 transition-colors">{hub.city}</h3>
                <div className="text-xs font-mono text-slate-500">{hub.address}</div>
                <div className="text-xs font-mono text-emerald-800 font-bold pt-2 border-t border-slate-100">
                  Daily Clearing Volume: {hub.volume}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. HORIZONTAL TIMELINE (Connected Progress Pipeline) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight">
              Timeline of Financial Capital Growth
            </h2>
            <p className="text-slate-600 text-base font-sans">
              Fourteen years of continuous organic capital accumulation and balance sheet strengthening.
            </p>
          </div>

          {/* Interactive Connected Stepper */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
            {timelineEvents.map((item, idx) => {
              const isSelected = selectedTimelineIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedTimelineIndex(idx)}
                  className={`p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${isSelected
                    ? 'bg-slate-950 text-white border-emerald-500 shadow-xl ring-2 ring-emerald-500/40 translate-y-[-2px]'
                    : 'bg-slate-50 text-slate-700 border-slate-200/90 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                >
                  <div className={`text-xs font-mono font-bold flex items-center justify-between ${isSelected ? 'text-emerald-400' : 'text-emerald-700'}`}>
                    <span>{item.year}</span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>}
                  </div>
                  <h3 className={`text-sm font-bold font-sans mt-2.5 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs mt-2 leading-relaxed font-sans ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {item.detail}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FAQs (Smooth Expand Accordions) */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight">
              Frequently Asked Questions on Capital Safety
            </h2>
            <p className="text-slate-600 text-base font-sans">
              Clear answers regarding regulatory oversight, account protection, and financial standing.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${isOpen ? 'border-emerald-500/80 shadow-md ring-1 ring-emerald-500/20' : 'border-slate-200/90 hover:border-slate-300 shadow-2xs'
                    }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-slate-900 text-base font-sans leading-snug">{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3.5 font-sans animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
