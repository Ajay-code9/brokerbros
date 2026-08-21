import React from 'react';
import { Briefcase, Users, Zap, ShieldCheck, Layers, FileCheck2, Settings, CreditCard, UserPlus, Wallet } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const ForexCrmPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="BrokerBros Forex CRM"
      heroBadge="ALL-IN-ONE BROKERAGE CRM & CLIENT PORTAL"
      heroDescription="All-in-one software to manage your brokerage clients, verify KYC documents instantly, track IB referrals, and process trader deposits automatically from one dashboard."
      productMetric={{ label: "KYC Verification Time", value: "Instant", sub: "Automated Document & ID Verification" }}
      workflowSteps={[
        { num: '01', title: 'Setup Admin Portal', desc: 'Provision your branded broker CRM with your logo, brand colors, and custom staff access roles.', icon: Settings },
        { num: '02', title: 'Configure PSPs & KYC', desc: 'Connect payment gateways (credit card, wire, crypto) and instant AI passport verification APIs.', icon: CreditCard },
        { num: '03', title: 'Onboard Traders & IBs', desc: 'Allow traders to open live accounts self-service while IBs generate custom referral tree links.', icon: UserPlus },
        { num: '04', title: 'Automate Deposits & Payouts', desc: 'Process deposits automatically and sync trading balances into MetaTrader 5 in seconds.', icon: Wallet }
      ]}
      visualizerTabs={[
        { id: "dashboard", label: "Broker Operations Dashboard", previewText: "View client signups, live deposits, pending KYC documents, and daily trading volume in real time." },
        { id: "ib", label: "IB & Referral Management", previewText: "Manage multi-level IB networks, track referral links, and calculate volume commissions automatically." },
        { id: "kyc", label: "Automated Document Verification", previewText: "Fast ID and passport scanning that automatically approves genuine client accounts." }
      ]}
      modules={[
        { title: "Easy Client Registration", desc: "Simple signup forms for traders with automated welcome emails and password resets.", icon: Users, highlight: "Fast Onboarding" },
        { title: "Multi-Level IB Referral Portal", desc: "Set up multi-tier commission structures, referral links, and automated IB payouts.", icon: Briefcase, highlight: "IB Management" },
        { title: "Payment & Crypto Gateways", desc: "Accept payments via credit cards, bank transfers, and crypto wallets with 50+ integrations.", icon: Zap, highlight: "50+ Gateways" },
        { title: "Instant Wallet Deposits", desc: "Traders can deposit funds instantly and see their trading platform balance update in seconds.", icon: Layers, highlight: "Instant Deposit" },
        { title: "Regulatory Audit Logs", desc: "Keep complete records of client actions, deposits, and staff access for regulatory peace of mind.", icon: ShieldCheck, highlight: "Full Audit Trail" },
        { title: "Sales & Lead Tracking", desc: "Assign leads to sales agents, record call notes, and track client conversion rates easily.", icon: FileCheck2, highlight: "Lead Management" }
      ]}
      techSpecs={[
        { label: "Platform Type", value: "Cloud SaaS" },
        { label: "KYC Processing", value: "Automated" },
        { label: "Payment Options", value: "50+ PSPs" },
        { label: "Server Sync", value: "Real-Time" }
      ]}
      faqs={[
        { q: "How long does it take to set up Forex CRM?", a: "Your CRM is branded with your logo, colors, and domain and goes live within 24 to 48 hours." },
        { q: "Can we connect multiple MT5 or WebTrader accounts to one CRM?", a: "Yes. Forex CRM connects to multiple trading servers simultaneously so clients can manage all their accounts in one place." },
        { q: "Can we customize IB commission rates?", a: "Yes. You can set custom per-lot rebates, spread markups, and multi-tier sub-IB referral trees easily." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
