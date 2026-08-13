import React from 'react';
import { FaqSection } from '../components/FAQ/FaqSection';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const HelpCenterPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <div className="bg-white text-slate-900">
      <FaqSection />
      <CTASection variant="light" onOpenAccount={onOpenAccount} />
    </div>
  );
};
