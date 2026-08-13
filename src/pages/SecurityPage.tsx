import React from 'react';
import { SecuritySection } from '../components/Security/SecuritySection';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const SecurityPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <div className="bg-white text-slate-900">
      <SecuritySection onOpenAccount={onOpenAccount} />
      <CTASection variant="light" onOpenAccount={onOpenAccount} />
    </div>
  );
};
