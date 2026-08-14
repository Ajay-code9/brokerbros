import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenAccount: () => void;
  onExplorePlatforms: () => void;
}

interface SlideItem {
  id: number;
  bgImage: string;
  badge: string;
  headline: string;
  subtext: string;
  buttonText: string;
  actionType: 'platforms' | 'crm' | 'institutional';
  textColor: 'black' | 'white';
}

const HERO_SLIDES: SlideItem[] = [
  {
    id: 1,
    bgImage: '/Homepage/hero-one.webp',
    badge: 'MULTI-ASSET TRADING VENUE',
    headline: 'Lowest Costs. Global Access.\nUncompromising Execution.',
    subtext: 'Invest globally in stocks, options, futures, currencies, bonds, and funds from a single unified account. Benefit from $0.00 commissions and zero-PFOF SmartRouting.',
    buttonText: 'EXPLORE GLOBAL VENUES',
    actionType: 'platforms',
    textColor: 'black',
  },
  {
    id: 2,
    bgImage: '/Homepage/hero-two.webp',
    badge: 'TURNKEY BROKERAGE INFRASTRUCTURE',
    headline: 'White-Label Broker CRM &\nAdmin Backoffice Suite.',
    subtext: 'Comprehensive broker operating system featuring multi-level IB management, client onboarding, risk monitoring, and prop firm evaluation engines.',
    buttonText: 'EXPLORE BROKER CRM',
    actionType: 'crm',
    textColor: 'white',
  },
  {
    id: 3,
    bgImage: '/Homepage/hero-three.webp',
    badge: 'INSTITUTIONAL CONNECTIVITY',
    headline: 'Tier-1 Liquidity Bridge &\nLow-Latency FIX APIs.',
    subtext: 'Direct FIX 4.4/5.0 liquidity bridges, MT5 server hooks, real-time WebSocket tick feeds, and automated multi-chain crypto gateways.',
    buttonText: 'CONNECT TO LIQUIDITY',
    actionType: 'institutional',
    textColor: 'black',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAccount, onExplorePlatforms }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = HERO_SLIDES[currentSlide];
  const isWhiteText = slide.textColor === 'white';

  const handleAction = (type: string) => {
    if (type === 'crm') {
      window.location.hash = '/solutions/broker-crm';
    } else if (type === 'institutional') {
      window.location.hash = '/institutional';
    } else {
      onExplorePlatforms();
    }
  };

  return (
    <section
      className="relative bg-slate-900 text-white min-h-[460px] sm:min-h-[510px] flex items-center overflow-hidden border-b border-slate-800 font-sans select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Original Still Background Image Carousel (Untouched by theme transitions) */}
      <div className="absolute inset-0 w-full h-full no-theme-transition">
        {HERO_SLIDES.map((item, idx) => (
          <img
            key={item.id}
            src={item.bgImage}
            alt={`BrokerBros Hero Slide ${item.id}`}
            className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-opacity duration-500 ease-in-out no-theme-transition ${
              currentSlide === idx ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 sm:py-16">
        <div className="max-w-2xl space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="space-y-4"
            >
              {/* Headline - Dynamic Black or White based on slide background */}
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] whitespace-pre-line font-sans ${
                isWhiteText ? 'text-white drop-shadow-md' : 'text-slate-950'
              }`}>
                {slide.headline}
              </h1>

              {/* Subtext */}
              <p className={`text-sm sm:text-base leading-relaxed font-medium max-w-xl font-sans ${
                isWhiteText ? 'text-slate-100 drop-shadow-sm' : 'text-slate-900'
              }`}>
                {slide.subtext}
              </p>

              {/* Action Button */}
              <div className="pt-3">
                <button
                  onClick={() => handleAction(slide.actionType)}
                  className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-none transition-colors cursor-pointer text-xs sm:text-sm tracking-wider uppercase font-sans shadow-sm"
                >
                  {slide.buttonText}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Navigation Controls & Indicators */}
      <div className="absolute bottom-5 left-4 sm:left-8 lg:left-12 z-20 flex items-center gap-4">
        {/* Indicators */}
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer ${
                currentSlide === idx
                  ? 'w-8 bg-emerald-600'
                  : isWhiteText
                  ? 'w-3 bg-white/40 hover:bg-white/70'
                  : 'w-3 bg-slate-400/60 hover:bg-slate-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <div className={`flex items-center gap-1 border-l pl-3 ${isWhiteText ? 'border-white/30' : 'border-slate-300'}`}>
          <button
            onClick={() => setCurrentSlide(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            className={`p-1.5 transition-colors cursor-pointer ${
              isWhiteText ? 'text-white hover:text-emerald-400' : 'text-slate-800 hover:text-emerald-700'
            }`}
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length)}
            className={`p-1.5 transition-colors cursor-pointer ${
              isWhiteText ? 'text-white hover:text-emerald-400' : 'text-slate-800 hover:text-emerald-700'
            }`}
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
