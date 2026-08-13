import React from 'react';
import { PricingHero } from '../components/Pricing/PricingHero';
import { PricingTiersSection } from '../components/Pricing/PricingTiersSection';
import { StickyPricingNav } from '../components/Pricing/StickyPricingNav';
import { WhyTransparencyMatters } from '../components/Pricing/WhyTransparencyMatters';
import { CommissionPricingTable } from '../components/Pricing/CommissionPricingTable';
import { CashYieldSection } from '../components/Pricing/CashYieldSection';
import { ShortSaleCostsSection } from '../components/Pricing/ShortSaleCostsSection';
import { MarketDataPricingSection } from '../components/Pricing/MarketDataPricingSection';
import { OtherFeesAccordionSection } from '../components/Pricing/OtherFeesAccordionSection';
import { FeeTransparencyCards } from '../components/Pricing/FeeTransparencyCards';
import { CompareBrokerBrosTable } from '../components/Pricing/CompareBrokerBrosTable';
import { InteractivePricingCalculator } from '../components/Pricing/InteractivePricingCalculator';
import { WhyBrokerBrosSavesMoney } from '../components/Pricing/WhyBrokerBrosSavesMoney';
import { PricingStatsGrid } from '../components/Pricing/PricingStatsGrid';
import { PricingFAQAccordion } from '../components/Pricing/PricingFAQAccordion';
import { PricingCTA } from '../components/Pricing/PricingCTA';

interface PricingPageProps {
  onOpenAccount: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenAccount }) => {
  const scrollToCalculator = () => {
    const el = document.getElementById('pricing-calculator');
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white dark:bg-[#090D14] text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-300">
      {/* 1. Premium Hero Section */}
      <PricingHero
        onOpenAccount={onOpenAccount}
        onScrollToCalculator={scrollToCalculator}
      />

      {/* 1.5 Enterprise SaaS Pricing Tiers (Monthly / Annual) */}
      <PricingTiersSection onOpenAccount={onOpenAccount} />

      {/* 3. Why Transparent Pricing Matters */}
      <WhyTransparencyMatters />

      {/* 4. SECTION 1: COMMISSIONS */}
      <div id="commissions" className="scroll-mt-28">
        <CommissionPricingTable onOpenAccount={onOpenAccount} />
      </div>

      {/* 5. SECTION 2: INTEREST RATES */}
      <div id="interest-rates" className="scroll-mt-28">
        <CashYieldSection onOpenAccount={onOpenAccount} />
      </div>

      {/* 6. SECTION 3: SHORT SALE COST */}
      <div id="short-sale-cost" className="scroll-mt-28">
        <ShortSaleCostsSection />
      </div>

      {/* 7. SECTION 4: MARKET DATA PRICING */}
      <div id="market-data-pricing" className="scroll-mt-28">
        <MarketDataPricingSection />
      </div>

      {/* 8. SECTION 5: OTHER FEES */}
      <div id="other-fees" className="scroll-mt-28">
        <OtherFeesAccordionSection />
      </div>

      {/* 9. Fee Transparency Guarantee Cards */}
      <FeeTransparencyCards />

      {/* 10. Compare BrokerBros Table */}
      <CompareBrokerBrosTable onOpenAccount={onOpenAccount} />

      {/* 11. Interactive Pricing Calculator */}
      <InteractivePricingCalculator onOpenAccount={onOpenAccount} />

      {/* 12. Why BrokerBros Saves You Money */}
      <WhyBrokerBrosSavesMoney />

      {/* 13. Pricing Statistics */}
      <PricingStatsGrid />

      {/* 14. FAQs */}
      <PricingFAQAccordion />

      {/* 15. Final CTA */}
      <PricingCTA
        onOpenAccount={onOpenAccount}
        onScrollToCalculator={scrollToCalculator}
      />
    </div>
  );
};


