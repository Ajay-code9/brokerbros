import React from 'react';
import { AccountSection } from '../components/Accounts/AccountSection';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const AccountsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <div className="bg-white text-slate-900">
      <AccountSection onOpenAccount={onOpenAccount} />
      <CTASection variant="light" onOpenAccount={onOpenAccount} />
    </div>
  );
};
