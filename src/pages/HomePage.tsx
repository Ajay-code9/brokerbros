import React from 'react';
import { motion } from 'motion/react';
import { HeroSection } from '../components/Hero/HeroSection';
import { FeatureStripSection } from '../components/Home/FeatureStripSection';
import { InstitutionalClassyShowcase } from '../components/Home/InstitutionalClassyShowcase';
import { IbkrComparisonTable } from '../components/Home/IbkrComparisonTable';
import { StatsWallSection } from '../components/Home/StatsWallSection';
import { TrustSection } from '../components/Trust/TrustSection';
import { ProductsSection } from '../components/Products/ProductsSection';
import { YieldPricingSection } from '../components/Pricing/YieldPricingSection';
import { TerminalShowcase } from '../components/Platform/TerminalShowcase';
import { GlobalMapSection } from '../components/GlobalPresence/GlobalMapSection';
import { ResearchSection } from '../components/Research/ResearchSection';
import { AccountSection } from '../components/Accounts/AccountSection';
import { AcademySection } from '../components/Education/AcademySection';
import { FaqSection } from '../components/FAQ/FaqSection';
import { CTASection } from '../components/CTA/CTASection';

interface HomePageProps {
  onOpenAccount: () => void;
  onExplorePlatforms: () => void;
}

// Varied animation presets to avoid monotony across sections
const fadeUp = { initial: { opacity: 0, y: 36 }, whileInView: { opacity: 1, y: 0 } };
const fadeLeft = { initial: { opacity: 0, x: -36 }, whileInView: { opacity: 1, x: 0 } };
const fadeRight = { initial: { opacity: 0, x: 36 }, whileInView: { opacity: 1, x: 0 } };
const scaleUp = { initial: { opacity: 0, scale: 0.96 }, whileInView: { opacity: 1, scale: 1 } };

const Section: React.FC<{
  children: React.ReactNode;
  anim?: typeof fadeUp;
  delay?: number;
}> = ({ children, anim = fadeUp, delay = 0 }) => (
  <motion.div
    {...anim}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.65, delay, ease: [0.25, 1, 0.5, 1] }}
  >
    {children}
  </motion.div>
);

export const HomePage: React.FC<HomePageProps> = ({ onOpenAccount, onExplorePlatforms }) => {
  return (
    <div className="selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden bg-white dark:bg-[#090D14] text-slate-900 dark:text-slate-100 transition-colors duration-300">

      {/* ① INSTITUTIONAL PURE WHITE HERO SECTION */}
      <HeroSection onOpenAccount={onOpenAccount} onExplorePlatforms={onExplorePlatforms} />

      {/* ② 4-COLUMN INSTITUTIONAL FEATURE STRIP */}
      <FeatureStripSection />

      {/* ③ IBKR-STYLE BROKERAGE COMPARISON TABLE */}
      <Section anim={fadeUp}>
        <IbkrComparisonTable onOpenAccount={onOpenAccount} />
      </Section>

      {/* ④ ULTRA CLASSY IBKR-STYLE SHOWCASE (Clean Whitespace, Real Mockup & 2-Col Grid) */}
      <Section anim={fadeUp}>
        <InstitutionalClassyShowcase onOpenAccount={onOpenAccount} />
      </Section>

      {/* ④ GLOBAL ASSET COVERAGE & PRODUCTS — Show what you can trade */}
      <Section anim={fadeUp}>
        <ProductsSection onOpenAccount={onOpenAccount} />
      </Section>

      {/* ⑤ CASH YIELD & MARGIN BORROWING — Monetization hook */}
      <Section anim={fadeLeft}>
        <YieldPricingSection onOpenAccount={onOpenAccount} />
      </Section>

      {/* ⑥ EXECUTION TERMINAL SHOWCASE — Platform proof */}
      <Section anim={scaleUp}>
        <TerminalShowcase onOpenAccount={onOpenAccount} />
      </Section>

      {/* ⑦ GLOBAL EXCHANGE MAP — Global reach, trust */}
      <Section anim={fadeRight}>
        <GlobalMapSection onOpenAccount={onOpenAccount} />
      </Section>

      {/* ⑧ INSTITUTIONAL RESILIENCE & TRUST — Build confidence mid-scroll */}
      <Section anim={fadeUp} delay={0.05}>
        <TrustSection onOpenAccount={onOpenAccount} />
      </Section>

      {/* ⑨ OPERATOR KNOWLEDGE BASE & INTELLIGENCE PORTAL */}
      <Section anim={scaleUp}>
        <ResearchSection onOpenAccount={onOpenAccount} />
      </Section>

      {/* ⑪ TAILORED ACCOUNT ARCHITECTURE */}
      <Section anim={fadeRight}>
        <AccountSection onOpenAccount={onOpenAccount} />
      </Section>

      {/* ⑫ TRADER ACADEMY & EDUCATION */}
      <Section anim={fadeUp}>
        <AcademySection onOpenAccount={onOpenAccount} />
      </Section>

      {/* ⑬ FREQUENTLY ASKED QUESTIONS */}
      <Section anim={fadeLeft}>
        <FaqSection />
      </Section>

      {/* ⑭ FINAL CINEMATIC CTA */}
      <CTASection variant="light" onOpenAccount={onOpenAccount} />
    </div>
  );
};
