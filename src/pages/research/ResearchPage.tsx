import React, { useState } from 'react';
import { ResearchHero } from '../../components/Research/ResearchHero';
import { MarketSnapshot } from '../../components/Research/MarketSnapshot';
import { ResearchCategories } from '../../components/Research/ResearchCategories';
import { PopularTopicsFilter } from '../../components/Research/PopularTopicsFilter';
import { FeaturedResearch } from '../../components/Research/FeaturedResearch';
import { MarketInsights } from '../../components/Research/MarketInsights';
import { EconomicCalendarSection } from '../../components/Research/EconomicCalendarSection';
import { EducationalGuides } from '../../components/Research/EducationalGuides';
import { ResearchToolsGrid } from '../../components/Research/ResearchToolsGrid';
import { ResearchNewsletter } from '../../components/Research/ResearchNewsletter';
import { ResearchFAQ } from '../../components/Research/ResearchFAQ';
import { ResearchFinalCTA } from '../../components/Research/ResearchFinalCTA';

interface PageProps {
  onOpenAccount: () => void;
}

export const ResearchPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>('All');

  const handleExploreResearch = () => {
    const el = document.getElementById('featured-research');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewSnapshot = () => {
    const el = document.getElementById('market-snapshot');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (catName: string) => {
    setSelectedCategory(catName === selectedCategory ? null : catName);
    const el = document.getElementById('featured-research');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTopic = (topic: string) => {
    setSelectedTopic(topic);
    const el = document.getElementById('featured-research');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen selection:bg-emerald-500 selection:text-white">
      {/* 1. Premium Hero */}
      <ResearchHero
        onOpenAccount={onOpenAccount}
        onExploreResearch={handleExploreResearch}
        onViewSnapshot={handleViewSnapshot}
      />

      {/* 2. Today's Market Snapshot */}
      <MarketSnapshot />

      {/* 3. Research Categories */}
      <ResearchCategories
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 8. Popular Topics Chips Filter */}
      <PopularTopicsFilter
        activeTopic={selectedTopic}
        onSelectTopic={handleSelectTopic}
      />

      {/* 4. Featured Research */}
      <FeaturedResearch
        activeCategory={selectedCategory}
        activeTopic={selectedTopic}
        onOpenAccount={onOpenAccount}
      />

      {/* 5. Market Insights */}
      <MarketInsights />

      {/* 6. Economic Calendar */}
      <EconomicCalendarSection />

      {/* 7. Learn Before You Invest */}
      <EducationalGuides onOpenAccount={onOpenAccount} />

      {/* 9. Research Tools */}
      <ResearchToolsGrid onOpenAccount={onOpenAccount} />

      {/* 10. Newsletter */}
      <ResearchNewsletter />

      {/* 11. FAQ Accordion */}
      <ResearchFAQ />

      {/* 12. Final CTA */}
      <ResearchFinalCTA onOpenAccount={onOpenAccount} />
    </div>
  );
};
