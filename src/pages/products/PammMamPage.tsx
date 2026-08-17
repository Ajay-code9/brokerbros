import React from 'react';
import { PieChart, Users, Zap, ShieldCheck, Award, Layers } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const PammMamPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="BrokerBros PAMM / MAM System"
      heroBadge="MULTI-ACCOUNT MANAGER ALLOCATION ENGINE"
      heroDescription="Institutional asset management software for fund managers, money managers, and family offices to execute single trades across thousands of sub-accounts."
      productMetric={{ label: "Allocation Precision", value: "Sub-Cent", sub: "Equity, Balance, or Percentage Proportional Allocation" }}
      visualizerTabs={[
        { id: "allocation", label: "Master Account Manager", previewText: "Execute 1 order on Master Account and instantly allocate across 500+ investor sub-accounts." },
        { id: "fees", label: "Automated Fee Distribution", previewText: "Configure management fees, performance fees (High-Watermark), and IB commissions." }
      ]}
      modules={[
        { title: "Sub-Cent Proportional Allocation", desc: "Sub-account allocation based on Equity, Balance, or Fixed Lot Ratios without rounding errors.", icon: PieChart, highlight: "Sub-Cent Precision" },
        { title: "Automated Performance & Mgmt Fees", desc: "Automatic deduction of management and high-watermark performance fees.", icon: Award, highlight: "Automated Fees" },
        { title: "Investor Portal & Reporting", desc: "Investors monitor sub-account performance in real-time without interfering with master orders.", icon: Users, highlight: "Investor Access" },
        { title: "Unlimited Sub-Account Scaling", desc: "Supports thousands of sub-accounts linked to a single master trading account.", icon: Layers, highlight: "Unlimited Sub-Accounts" }
      ]}
      techSpecs={[
        { label: "Allocation Engine", value: "Microsecond C++" },
        { label: "Allocation Methods", value: "5 Methods" },
        { label: "Fee Deduction", value: "Automated" },
        { label: "Max Sub-Accounts", value: "Unlimited" }
      ]}
      faqs={[
        { q: "What allocation methods are supported in the PAMM/MAM system?", a: "Supports Equity Proportional, Balance Proportional, Equity Percentage, Lot Proportional, and Equal Allocation." },
        { q: "Can investor accounts deposit or withdraw funds while a master trade is open?", a: "Yes. Our dynamic rebalancing engine recalculates lot proportions in real-time when deposits or withdrawals occur." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
