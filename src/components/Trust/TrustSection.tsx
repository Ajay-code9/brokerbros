import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  Lock,
  Landmark,
  ChevronRight,
  Scale,
  Building2,
  CheckCircle2,
  Shield,
  Percent,
  Coins,
  BadgeCheck,
  PieChart,
  Download,
  Zap,
  Globe2,
  DollarSign,
  Check
} from 'lucide-react';

interface TrustSectionProps {
  onOpenAccount: () => void;
}

type StoryKey = 'routing' | 'capital' | 'insurance' | 'rating';

const STORY_KEYS: StoryKey[] = ['routing', 'capital', 'insurance', 'rating'];

export const TrustSection: React.FC<TrustSectionProps> = ({ onOpenAccount }) => {
  const [activeTab, setActiveTab] = useState<StoryKey>('routing');
  const [hasCompletedStory, setHasCompletedStory] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isLockedRef = useRef(false);

  const tabData = {
    routing: {
      badge: 'DIRECT MARKET EXECUTION',
      amount: '150+ Venues',
      lastAudited: 'Updated Daily',
      verifiedStatus: 'Direct Market Access',
      heading: '100% Direct Market Access Routing',
      paragraph:
        'BrokerBros routes your orders directly to global lit exchanges and primary liquidity venues. Experience institutional execution with transparent pricing, maximum order speed, and complete alignment with your investment objectives.',
      imagePath: '/section-one.png',
      placeholderLabel: 'Transparent Trade Execution Illustration',
      metrics: [
        {
          title: 'Direct Market Routing',
          value: '150+ Venues',
          subtitle: 'Direct access to major global exchanges',
          icon: Globe2,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        },
        {
          title: 'Routing Transparency',
          value: '100% DMA',
          subtitle: 'Direct lit exchange execution',
          icon: DollarSign,
          highlight: 'bg-blue-50 text-blue-700 border-blue-200'
        },
        {
          title: 'Fast Execution Speed',
          value: '1.2 ms',
          subtitle: 'Ultra-fast order routing & confirmation',
          icon: Zap,
          highlight: 'bg-slate-50 text-slate-700 border-slate-200'
        },
        {
          title: 'Order Selling Rate',
          value: '0%',
          subtitle: 'We never sell your trades to third parties',
          icon: ShieldCheck,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        },
        {
          title: 'Price Protection',
          value: '100% Guaranteed',
          subtitle: 'Always executed at best available price',
          icon: Lock,
          highlight: 'bg-slate-50 text-slate-700 border-slate-200'
        },
        {
          title: 'Total Investor Savings',
          value: '$142 Million',
          subtitle: 'Saved for clients in lower execution costs',
          icon: Coins,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        }
      ]
    },
    capital: {
      badge: 'VERIFIED FINANCIAL STRENGTH',
      amount: '$28.4 Billion Base',
      lastAudited: 'Independent Audit Q2 2026',
      verifiedStatus: 'Regulatory Capital Verified',
      heading: 'Strong Capital Base Protecting Your Funds',
      paragraph:
        'BrokerBros holds over $16.2 Billion in excess net capital reserve—more than 2.7x mandatory regulatory requirements. This guarantees that your funds and liquidity are 100% safe and available for withdrawal at any moment, even during sudden market downturns.',
      imagePath: '/section-second.png',
      placeholderLabel: 'Strong Capital Position Illustration',
      metrics: [
        {
          title: 'Excess Capital Reserve',
          value: '$16.2 Billion',
          subtitle: '2.7x higher than mandatory legal limit',
          icon: Landmark,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        },
        {
          title: 'Capital Reserves Ratio',
          value: '28.5%',
          subtitle: 'Far exceeds international banking standard',
          icon: Percent,
          highlight: 'bg-blue-50 text-blue-700 border-blue-200'
        },
        {
          title: 'Long-Term Debt Risk',
          value: '$0.00 Debt',
          subtitle: 'Zero debt burden on firm operations',
          icon: Scale,
          highlight: 'bg-slate-50 text-slate-700 border-slate-200'
        },
        {
          title: 'Liquidity Coverage',
          value: '310%',
          subtitle: 'High liquid cash reserves on demand',
          icon: Shield,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        },
        {
          title: 'Consolidated Capital',
          value: '$28.4 Billion',
          subtitle: 'Solid balance sheet backing every client',
          icon: Coins,
          highlight: 'bg-slate-50 text-slate-700 border-slate-200'
        },
        {
          title: 'Independent Credit Rating',
          value: 'A- (Stable)',
          subtitle: 'High investment grade credit ranking',
          icon: Award,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        }
      ]
    },
    insurance: {
      badge: 'CLIENT PROTECTION POLICY',
      amount: '$30,000,000 / Acct',
      lastAudited: 'Fully Insured 2026',
      verifiedStatus: 'SIPC Member Registered',
      heading: 'Complete Insurance & Account Protection',
      paragraph:
        "Every client account is covered by standard SIPC protection up to $500,000. For complete peace of mind, BrokerBros carries additional excess insurance underwritten by Lloyd's of London, protecting individual client accounts up to $30 Million.",
      imagePath: '/section-third.png',
      placeholderLabel: 'Client Asset Protection Illustration',
      metrics: [
        {
          title: 'Excess Insurance Limit',
          value: '$30.0 Million',
          subtitle: 'Maximum protection limit per account',
          icon: Shield,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        },
        {
          title: 'Standard SIPC Safety',
          value: '$500,000',
          subtitle: 'Includes $250,000 cash protection limit',
          icon: ShieldCheck,
          highlight: 'bg-blue-50 text-blue-700 border-blue-200'
        },
        {
          title: 'Total Policy Backup',
          value: '$150.0 Million',
          subtitle: "Underwritten by Lloyd's of London",
          icon: Building2,
          highlight: 'bg-slate-50 text-slate-700 border-slate-200'
        },
        {
          title: 'Segregated Client Funds',
          value: '100% Isolated',
          subtitle: 'Your assets are kept separate from firm cash',
          icon: Lock,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        },
        {
          title: 'SIPC Protection Status',
          value: 'Active Member',
          subtitle: 'Official registration CRD #184920',
          icon: BadgeCheck,
          highlight: 'bg-slate-50 text-slate-700 border-slate-200'
        },
        {
          title: 'Tier-1 Custodial Banks',
          value: 'Top-Tier Banks',
          subtitle: 'Stored in world-class financial institutions',
          icon: Landmark,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        }
      ]
    },
    rating: {
      badge: 'INDEPENDENT AUDITS',
      amount: 'S&P Rated A-',
      lastAudited: 'Reviewed 2026',
      verifiedStatus: 'Highest Safety Standards',
      heading: 'Proven Financial Stability & Solvency',
      paragraph:
        'Independently audited and rated "A- Outlook Stable" by S&P Global and "A3" by Moody\'s. These ratings confirm that BrokerBros maintains exceptional financial health, prudent risk management, and long-term stability.',
      imagePath: '/section-fourth.png',
      placeholderLabel: 'Financial Stability Illustration',
      metrics: [
        {
          title: 'S&P Financial Rating',
          value: 'A- (Stable)',
          subtitle: 'Strong investment grade financial rating',
          icon: Award,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        },
        {
          title: 'Moody\'s Issuer Rating',
          value: 'A3 (Prime)',
          subtitle: 'Highest category of financial stability',
          icon: ShieldCheck,
          highlight: 'bg-blue-50 text-blue-700 border-blue-200'
        },
        {
          title: 'Fitch Solvency Score',
          value: 'A- Verified',
          subtitle: 'Proven ability to fulfill all commitments',
          icon: BadgeCheck,
          highlight: 'bg-slate-50 text-slate-700 border-slate-200'
        },
        {
          title: 'Operating Risk Level',
          value: 'Ultra-Low',
          subtitle: 'Conservative management principles',
          icon: Scale,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        },
        {
          title: 'Financial Health',
          value: 'Top 1%',
          subtitle: 'Strong profit retention and capital reserves',
          icon: PieChart,
          highlight: 'bg-slate-50 text-slate-700 border-slate-200'
        },
        {
          title: 'Audit Frequency',
          value: 'Quarterly',
          subtitle: 'Regular audits by Big-4 accounting firms',
          icon: ShieldCheck,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        }
      ]
    }
  };

  const currentContent = tabData[activeTab];
  const currentIndex = STORY_KEYS.indexOf(activeTab);

  // Wheel listener for desktop sticky storytelling (DOWNWARD ONLY)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Desktop screens (>=1024px) only
      if (window.innerWidth < 1024) return;
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isScrollUp = e.deltaY < 0;
      const isScrollDown = e.deltaY > 0;

      // 1. CRITICAL: If scrolling UP, NEVER intercept or lock scroll!
      if (isScrollUp) {
        // If user scrolled all the way back above the section top, reset completion flag for next downward pass
        if (rect.top > 100) {
          setHasCompletedStory(false);
          setActiveTab(STORY_KEYS[0]);
        }
        return; // Allow native upward scroll without trapping
      }

      // 2. If scrolling DOWN: Check if section header top is aligned at top of viewport (0px to 40px)
      const isSectionAtTop = rect.top >= -20 && rect.top <= 80;

      if (isScrollDown && isSectionAtTop && !hasCompletedStory) {
        if (currentIndex < STORY_KEYS.length - 1) {
          // Lock viewport scroll while stepping through stories 1 -> 4
          e.preventDefault();
          if (!isLockedRef.current) {
            isLockedRef.current = true;
            setActiveTab(STORY_KEYS[currentIndex + 1]);
            setTimeout(() => {
              isLockedRef.current = false;
            }, 450);
          }
        } else if (currentIndex === STORY_KEYS.length - 1) {
          // Finished 4th story: Immediately mark completed and release lock to allow natural downward scroll
          setHasCompletedStory(true);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex, hasCompletedStory]);

  return (
    <section
      ref={sectionRef}
      id="trust"
      className="py-6 lg:py-10 bg-white text-slate-900 border-b border-slate-200/50 relative overflow-hidden font-sans"
    >
      {/* Subtle Animated Background Grid (Opacity < 5%) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.035]">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:28px_28px] animate-pulse"></div>
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500 via-teal-500 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/70 pb-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-slate-900 text-white font-mono text-[11px] border border-slate-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-bold tracking-wider">SEC & FINRA REGISTERED</span>
              <span className="text-slate-700">|</span>
              <span className="text-slate-300 font-bold">$30.0M LLOYD'S COVERAGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 font-sans">
              Engineered for Complete Investor Peace of Mind
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md font-sans font-medium">
            Our strong capital reserves, $28.4 Billion equity base, and strict policy against selling customer trades guarantee your assets stay safe in every market environment.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/40 overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all">

          {/* LEFT STICKY NAVIGATION PANEL */}
          <div className="lg:col-span-4 bg-slate-900 text-white p-5 space-y-4 flex flex-col justify-between relative overflow-hidden border-r border-slate-800">
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none"></div>

            <div className="relative z-10 space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Shield className="w-3 h-3" />
                  TRUST & SECURITY PILLARS
                </span>
                <p className="text-[11px] text-slate-300 font-sans leading-snug">
                  Choose a topic below to review how we protect your money and execute your trades fairly:
                </p>
              </div>

              {/* STORY PROGRESS BAR & CARDS */}
              <div className="relative space-y-2 pt-1">
                {/* Thin vertical progress line */}
                <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-slate-800 rounded-full z-0 hidden lg:block">
                  <motion.div
                    className="w-full bg-emerald-400 rounded-full"
                    animate={{ height: `${((currentIndex + 1) / STORY_KEYS.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {[
                  {
                    id: 'routing' as StoryKey,
                    title: 'Transparent Trade Execution',
                    badge: 'We Never Sell Your Orders',
                    icon: Lock
                  },
                  {
                    id: 'capital' as StoryKey,
                    title: 'Strong Capital Position',
                    badge: '$28.4B Equity Capital Reserve',
                    icon: Landmark
                  },
                  {
                    id: 'insurance' as StoryKey,
                    title: 'Client Asset Protection',
                    badge: '$30M Excess SIPC Insurance',
                    icon: ShieldCheck
                  },
                  {
                    id: 'rating' as StoryKey,
                    title: 'Financial Stability',
                    badge: 'S&P Rated A- (Stable)',
                    icon: Award
                  }
                ].map((tab, idx) => {
                  const isSelected = activeTab === tab.id;
                  const isCompleted = STORY_KEYS.indexOf(tab.id) < currentIndex;
                  const IconComponent = tab.icon;

                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      whileHover={{ x: 3, y: -1 }}
                      transition={{ duration: 0.15 }}
                      className={`w-full p-3 rounded-xl text-left transition-all duration-300 cursor-pointer relative overflow-hidden border group ${isSelected
                        ? 'bg-gradient-to-r from-slate-800 to-slate-900 border-emerald-500/90 text-white shadow-md shadow-emerald-950/40 ring-1 ring-emerald-500/50'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800/60 hover:border-slate-700'
                        }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activeTabGlow"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                        />
                      )}

                      <div className="flex items-center justify-between gap-2.5 relative z-10">
                        <div className="flex items-center gap-2.5">
                          {/* Progress indicator dot / check */}
                          <div className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-mono">
                            {isCompleted ? (
                              <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                            ) : isSelected ? (
                              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            ) : (
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                            )}
                          </div>

                          <div
                            className={`p-1.5 rounded-lg transition-colors ${isSelected
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : 'bg-slate-800/80 text-slate-400 group-hover:text-slate-200'
                              }`}
                          >
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div
                              className={`text-xs font-bold font-sans tracking-tight ${isSelected ? 'text-white font-extrabold' : 'text-slate-300'
                                }`}
                            >
                              {tab.title}
                            </div>
                            <div
                              className={`text-[10px] font-mono font-medium mt-0.5 ${isSelected ? 'text-emerald-400 font-bold' : 'text-slate-500'
                                }`}
                            >
                              {tab.badge}
                            </div>
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${isSelected
                            ? 'translate-x-1 text-emerald-400'
                            : 'text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5'
                            }`}
                        />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <BadgeCheck className="w-3 h-3 text-emerald-400" />
                FINRA / SIPC MEMBER
              </span>
              <span className="text-emerald-400 font-bold tracking-wider">256-BIT ENCRYPTED</span>
            </div>
          </div>

          {/* RIGHT STORY CONTENT PANEL (SMOOTH ANIMATED TRANSITION) */}
          <div className="lg:col-span-8 p-5 sm:p-6 flex flex-col justify-between space-y-5 bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                {/* Top Badge & Audit Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 shadow-2xs">
                      {currentContent.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {currentContent.verifiedStatus}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-400">
                    {currentContent.lastAudited}
                  </span>
                </div>

                {/* Main Story Info & Image Crossfade */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                  <div className="lg:col-span-7 space-y-2.5">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                        Verified Trust Standard
                      </div>
                      <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-slate-900">
                        {currentContent.amount}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-sans text-slate-900 leading-snug">
                      {currentContent.heading}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                      {currentContent.paragraph}
                    </p>
                  </div>

                  {/* Image Crossfade with Scale & Translate */}
                  <div className="lg:col-span-5 flex items-center justify-center">
                    <div className="relative w-full flex items-center justify-center overflow-hidden">
                      <motion.img
                        key={currentContent.imagePath}
                        initial={{ opacity: 0, scale: 0.96, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        src={currentContent.imagePath}
                        alt={currentContent.placeholderLabel}
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                          const parent = (e.target as HTMLElement).parentElement;
                          if (parent) {
                            const placeholderDiv = parent.querySelector('.placeholder-info');
                            if (placeholderDiv) placeholderDiv.classList.remove('hidden');
                          }
                        }}
                        className="w-full h-auto max-h-[200px] object-contain select-none scale-105"
                      />
                      <div className="placeholder-info hidden w-full aspect-[4/3] rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/80 flex flex-col items-center justify-center p-4 text-center">
                        <div className="p-2 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80 mb-1.5">
                          <PieChart className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono font-bold text-slate-800 uppercase tracking-wide">
                          {currentContent.placeholderLabel}
                        </span>
                        <span className="text-[10px] font-sans text-slate-500 mt-0.5">
                          Path: {currentContent.imagePath}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Staggered Metric Cards */}
                <div className="pt-1">
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    KEY PROTECTION & EXECUTION HIGHLIGHTS
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {currentContent.metrics.map((metric, idx) => {
                      const MetricIcon = metric.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.06 }}
                          className="px-2.5 py-2 rounded-lg border border-slate-200/80 bg-slate-50/70 hover:bg-white hover:border-emerald-300 hover:shadow-xs transition-all duration-200 space-y-0.5 group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono font-semibold text-slate-500 truncate max-w-[130px]">
                              {metric.title}
                            </span>
                            <div className={`p-0.5 rounded border text-[9px] ${metric.highlight}`}>
                              <MetricIcon className="w-2.5 h-2.5" />
                            </div>
                          </div>
                          <div className="text-sm font-black font-mono text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                            {metric.value}
                          </div>
                          <div className="text-[9.5px] font-sans text-slate-500 leading-tight truncate">
                            {metric.subtitle}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Regulatory Footer Strip */}
            <div className="pt-2.5 border-t border-slate-200 space-y-2.5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center">
                <div className="py-1 px-2 rounded-md bg-slate-50 border border-slate-200/70 flex items-center justify-center gap-1.5 text-[10px] font-mono font-bold text-slate-800">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>FINRA Regulated</span>
                </div>
                <div className="py-1 px-2 rounded-md bg-slate-50 border border-slate-200/70 flex items-center justify-center gap-1.5 text-[10px] font-mono font-bold text-slate-800">
                  <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Client Assets Protected</span>
                </div>
                <div className="py-1 px-2 rounded-md bg-slate-50 border border-slate-200/70 flex items-center justify-center gap-1.5 text-[10px] font-mono font-bold text-slate-800">
                  <BadgeCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Bank-Level Security</span>
                </div>
                <div className="py-1 px-2 rounded-md bg-slate-50 border border-slate-200/70 flex items-center justify-center gap-1.5 text-[10px] font-mono font-bold text-slate-800">
                  <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Transparent Pricing</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-0.5">
                <a
                  href="https://brokercheck.finra.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[10.5px] font-mono font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg border border-slate-300/80 transition-all justify-center cursor-pointer"
                >
                  <Download className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Learn How Trade Execution Works →</span>
                </a>

                <motion.button
                  onClick={onOpenAccount}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-[11px] rounded-lg shadow-sm shadow-emerald-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer group"
                >
                  <span>Open Your Account →</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
