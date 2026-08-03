import React from 'react';
import { PlatformsHero } from '../../components/Platforms/PlatformsHero';
import { InvestorTrustSection } from '../../components/Platforms/InvestorTrustSection';
import { InteractivePlatformSelector } from '../../components/Platforms/InteractivePlatformSelector';
import { PlatformInteractiveTabs } from '../../components/Platforms/PlatformInteractiveTabs';
import { DedicatedPlatformShowcase } from '../../components/Platforms/DedicatedPlatformShowcase';
import { PlatformComparisonMatrix } from '../../components/Platforms/PlatformComparisonMatrix';
import { AdvancedTradingFeatures } from '../../components/Platforms/AdvancedTradingFeatures';
import { CrossDeviceSyncSection } from '../../components/Platforms/CrossDeviceSyncSection';
import { TechnologyArchitecture } from '../../components/Platforms/TechnologyArchitecture';
import { PlatformPerformanceMetrics } from '../../components/Platforms/PlatformPerformanceMetrics';
import { PlatformLearningResources } from '../../components/Platforms/PlatformLearningResources';
import { PlatformsFAQAccordion } from '../../components/Platforms/PlatformsFAQAccordion';
import { PlatformsCTA } from '../../components/Platforms/PlatformsCTA';

interface PageProps {
  onOpenAccount: () => void;
}

export const PlatformsOverviewPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen selection:bg-emerald-500 selection:text-white">
      {/* 1. Premium Hero */}
      <PlatformsHero onOpenAccount={onOpenAccount} />

      {/* 2. Trusted By Serious Investors */}
      <InvestorTrustSection />

      {/* 3. Find Your Perfect Platform (Interactive Selector) */}
      <InteractivePlatformSelector onOpenAccount={onOpenAccount} />

      {/* 4. Platform Navigation Tabs */}
      <PlatformInteractiveTabs onOpenAccount={onOpenAccount} />

      {/* 5. Dedicated Platform Showcase */}
      <DedicatedPlatformShowcase onOpenAccount={onOpenAccount} />

      {/* 6. Platform Comparison Matrix */}
      <PlatformComparisonMatrix />

      {/* 7. Advanced Trading Features */}
      <AdvancedTradingFeatures />

      {/* 8. Cross Device Experience & Continuity */}
      <CrossDeviceSyncSection />

      {/* 9. Technology Architecture */}
      <TechnologyArchitecture />

      {/* 10. Performance Metrics */}
      <PlatformPerformanceMetrics />

      {/* 11. Learning Resources & Demos */}
      <PlatformLearningResources />

      {/* 12. Frequently Asked Questions */}
      <PlatformsFAQAccordion />

      {/* 13. Final CTA */}
      <PlatformsCTA onOpenAccount={onOpenAccount} />
    </div>
  );
};
