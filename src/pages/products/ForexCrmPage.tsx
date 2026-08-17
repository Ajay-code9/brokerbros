import React from 'react';
import { Briefcase, Users, Zap, ShieldCheck, Layers, FileCheck2 } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const ForexCrmPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="BrokerBros Forex CRM"
      heroBadge="ALL-IN-ONE BROKERAGE CRM & PORTAL"
      heroDescription="Enterprise broker CRM solution combining automated client onboarding, instant KYC verification, multi-tiered IB management, and multi-asset deposit processing."
      productMetric={{ label: "KYC Processing Speed", value: "Instant", sub: "SumSub & Onfido Automated Verification" }}
      visualizerTabs={[
        { id: "dashboard", label: "Broker Operations Center", previewText: "Real-time client registration feed, deposit flows, and active trader volume metrics." },
        { id: "ib", label: "Multi-Tier IB Hierarchy", previewText: "Visual tree structure of IBs, sub-affiliates, rebates, and instant volume-based payouts." },
        { id: "kyc", label: "Automated KYC & Compliance", previewText: "AI document scanning, Sanction list checks, and instant passport verification." }
      ]}
      modules={[
        { title: "Automated Trader Onboarding", desc: "Instant registration forms, document upload, and automated email verification workflows.", icon: Users, highlight: "Instant KYC" },
        { title: "Multi-Tier IB & Affiliate Portal", desc: "Complex multi-level rebate structures, customized referral links, and real-time payout tracking.", icon: Briefcase, highlight: "Multi-Tier IB" },
        { title: "Payment Gateway Aggregator", desc: "Pre-integrated with 50+ PSPs, credit card processors, bank wires, and crypto gateways.", icon: Zap, highlight: "50+ PSPs" },
        { title: "Automated Deposit Reconciliation", desc: "Instant wallet funding, automated ledger updates, and MT5 credit balance sync.", icon: Layers, highlight: "Instant Funding" },
        { title: "Compliance & Audit Logging", desc: "Full audit trails for regulatory compliance (FCA, CySEC, ASIC, FINMA ready).", icon: ShieldCheck, highlight: "Regulatory Ready" },
        { title: "Custom Lead Management", desc: "Automated sales lead assignment, call logging, and conversion funnel analytics.", icon: FileCheck2, highlight: "Sales Funnel" }
      ]}
      techSpecs={[
        { label: "CRM Architecture", value: "Multi-Tenant SaaS" },
        { label: "KYC Partners", value: "SumSub / Onfido" },
        { label: "PSP Connections", value: "50+ Gateways" },
        { label: "MT5 Sync Speed", value: "< 100 ms" }
      ]}
      faqs={[
        { q: "How quickly can Forex CRM be deployed for a new brokerage?", a: "Standard white-label CRM setups are fully provisioned, branded, and operational within 24 to 48 hours." },
        { q: "Does the CRM support multiple trading server accounts?", a: "Yes. Forex CRM seamlessly connects to multiple MT4, MT5, cTrader, and Web Trader servers simultaneously." },
        { q: "Can we set up custom commission rules for our IBs?", a: "Yes. The IB module supports volume-based rebates, pip markups, lot rebates, and multi-tier sub-IB commission splits." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
