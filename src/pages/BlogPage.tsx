import React from 'react';
import { NewsInsightsPage } from './research/NewsInsightsPage';

interface PageProps {
  onOpenAccount: () => void;
}

export const BlogPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return <NewsInsightsPage onOpenAccount={onOpenAccount} />;
};
