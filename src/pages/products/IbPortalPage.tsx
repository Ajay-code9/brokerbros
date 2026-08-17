import React from 'react';
import { Network, Users, Award, Zap, Briefcase, ShieldCheck } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const IbPortalPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="BrokerBros IB Portal"
      heroBadge="MULTI-TIER AFFILIATE & REBATE ENGINE"
      heroDescription="Institutional Introducing Broker (IB) management platform featuring multi-level commission trees, real-time volume tracking, and instant automated rebate payouts."
      productMetric={{ label: "Payout Automation", value: "Real-Time", sub: "Instant Trade-by-Trade Rebate Credit" }}
      visualizerTabs={[
        { id: "tree", label: "Multi-Tier IB Hierarchy", previewText: "Configure up to 10 sub-IB levels with customized rebate percentages per lot or pip." },
        { id: "analytics", label: "Real-Time Trader Telemetry", previewText: "Track active referred clients, daily trading volume, and pending commission balances." }
      ]}
      modules={[
        { title: "Multi-Level Sub-IB Hierarchy", desc: "Support up to 10 sub-affiliate tiers with dynamic commission splitting.", icon: Network, highlight: "Up to 10 Tiers" },
        { title: "Instant Trade-by-Trade Rebates", desc: "Commissions are calculated and credited automatically as trades close.", icon: Zap, highlight: "Instant Payout" },
        { title: "Custom Tracking Links & Banners", desc: "IBs generate custom tracking links, promo codes, and landing page banners.", icon: Users, highlight: "Marketing Tools" },
        { title: "Multi-Currency IB Wallets", desc: "IBs can withdraw earnings instantly via bank transfer, crypto, or local PSPs.", icon: Briefcase, highlight: "Instant Withdrawal" }
      ]}
      techSpecs={[
        { label: "Sub-IB Tiers", value: "Up to 10 Levels" },
        { label: "Payout Frequency", value: "Real-Time" },
        { label: "Supported Rebates", value: "Lot, Pip, % Spread" },
        { label: "IB Wallet Specs", value: "Multi-Currency" }
      ]}
      faqs={[
        { q: "How many sub-IB levels can we configure?", a: "The IB Portal supports up to 10 sub-IB hierarchy levels with custom percentage splits per tier." },
        { q: "Are commission payouts credited automatically to IB wallets?", a: "Yes. Rebates can be credited instantly as trades close or calculated on a daily/weekly schedule based on broker preference." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
