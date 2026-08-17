import React from 'react';
import { Coins, Zap, ShieldCheck, Globe, Layers, Activity } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const CryptoEtfsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="BrokerBros Crypto ETFs"
      heroBadge="INSTITUTIONAL DIGITAL ASSET ROUTING"
      heroDescription="Institutional spot & futures Crypto ETF liquidity gateway, providing regulated brokers access to Bitcoin, Ethereum, and multi-asset crypto index baskets."
      productMetric={{ label: "Supported Assets", value: "250+ Cryptos & ETFs", sub: "Deep Order Book Liquidity with 24/7 Execution" }}
      visualizerTabs={[
        { id: "etfs", label: "Spot Crypto ETF Baskets", previewText: "Direct liquidity routing for Spot Bitcoin & Ethereum ETFs with institutional cold storage custody." },
        { id: "custody", label: "Cold Storage Custody", previewText: "Multi-sig MPC custody backed by Tier-1 insurance coverage for digital assets." }
      ]}
      modules={[
        { title: "Regulated Spot & ETF Liquidity", desc: "Access institutional liquidity for Bitcoin, Ethereum, and crypto index baskets.", icon: Coins, highlight: "Regulated Spot" },
        { title: "Multi-Sig MPC Cold Custody", desc: "Institutional digital asset custody utilizing MPC keys and Lloyd's insured vaults.", icon: ShieldCheck, highlight: "MPC Custody" },
        { title: "24/7 Continuous Execution", desc: "Non-stop crypto trading execution with zero weekend maintenance windows.", icon: Zap, highlight: "24/7 Execution" },
        { title: "Instant Fiat & Stablecoin Settlement", desc: "Settle trades instantly in USD, EUR, USDT, or USDC with zero conversion drag.", icon: Layers, highlight: "Instant Settlement" }
      ]}
      techSpecs={[
        { label: "Assets Supported", value: "250+ Spot & ETFs" },
        { label: "Custody Standard", value: "Multi-Sig MPC" },
        { label: "Settlement Speed", value: "Instant T+0" },
        { label: "Execution Availability", value: "24/7/365" }
      ]}
      faqs={[
        { q: "Is Crypto ETF liquidity compliant with global regulations?", a: "Yes. Our crypto liquidity partners operate under strict regulatory frameworks with full AML/KYC screening." },
        { q: "How are client digital assets secured?", a: "Assets are secured in segregated multi-signature cold storage vaults provided by regulated institutional custodians." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
