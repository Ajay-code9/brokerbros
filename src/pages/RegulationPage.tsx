import React from 'react';
import { DataSecurityPage } from './security/DataSecurityPage';

interface PageProps {
  onOpenAccount: () => void;
}

export const RegulationPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return <DataSecurityPage onOpenAccount={onOpenAccount} />;
};
