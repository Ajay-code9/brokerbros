import React from 'react';
import { Activity, Zap, Cpu, Server, ShieldCheck, Layers } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const QuoteEnginePage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="BrokerBros Quote Engine (BQE)"
      heroBadge="SUB-10MS PRICE FEED AGGREGATOR"
      heroDescription="Ultra-low latency price feed aggregator aggregating raw quotes from 20+ Tier-1 banks and non-bank liquidity providers with customizable spread markups."
      productMetric={{ label: "Feed Latency", value: "< 2.1 ms", sub: "Aggregated Raw Liquidity Feed from 20+ LPs" }}
      visualizerTabs={[
        { id: "aggregator", label: "Liquidity Aggregator", previewText: "Combines quotes from LMAX, Finalto, Saxo, and CME into a single tight best bid/offer (BBO)." },
        { id: "spikes", label: "Spike & Off-Quote Filter", previewText: "Automated algorithms detect and filter bad ticks, artificial spikes, and stale quotes." }
      ]}
      modules={[
        { title: "20+ LP Feed Aggregation", desc: "Aggregates bid/ask quotes in real-time to generate ultra-tight spreads.", icon: Activity, highlight: "20+ LPs Aggregated" },
        { title: "Automated Spike & Bad-Tick Filter", desc: "Prevents artificial price spikes and non-market quotes from triggering client stop-losses.", icon: ShieldCheck, highlight: "Spike Filter" },
        { title: "Custom Spread Markup Engine", desc: "Apply dynamic volume-based spread markups or commission schedules per group.", icon: Zap, highlight: "Dynamic Markups" },
        { title: "Multi-Asset Feed Support", desc: "Delivers quotes for Forex, Indices, Commodities, Metals, Crypto, and US Stocks.", icon: Layers, highlight: "Multi-Asset" }
      ]}
      techSpecs={[
        { label: "Feed Latency", value: "< 2.1 ms" },
        { label: "LP Connections", value: "20+ Tier-1 LPs" },
        { label: "Protocol", value: "FIX 4.4 / WS" },
        { label: "Spike Filter", value: "Microsecond AI" }
      ]}
      faqs={[
        { q: "How does BQE handle market open price gaps and bad quotes?", a: "BQE uses statistical price deviation algorithms to identify anomalous quotes and discard bad ticks before broadcasting to trading terminals." },
        { q: "Can we add our own custom liquidity provider feeds to BQE?", a: "Yes. BQE includes a universal FIX 4.4 adapter for connecting any FIX liquidity provider feed in minutes." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
