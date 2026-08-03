import React from 'react';
import { ResearchPage } from './ResearchPage';

interface PageProps {
  onOpenAccount: () => void;
}

export const NewsInsightsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return <ResearchPage onOpenAccount={onOpenAccount} />;
};
