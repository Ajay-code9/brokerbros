import React from 'react';
import { Activity, Zap, Cpu, Server, ShieldCheck, Layers, Link, Sliders, ShieldAlert, Radio } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const QuoteEnginePage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="BrokerBros Quote Engine (BQE)"
      heroBadge="FAST REAL-TIME PRICE FEED ENGINE"
      heroDescription="Fast price feed aggregator that combines live quotes from 20+ top banks and liquidity providers into ultra-tight spreads with automated price spike protection."
      productMetric={{ label: "Price Update Speed", value: "< 2.1 ms", sub: "Ultra-Fast Live Quotes from 20+ LPs" }}
      workflowSteps={[
        { num: '01', title: 'Connect Bank Feeds', desc: 'Connect live price feeds from 20+ Tier-1 banks, prime brokers, and ECN liquidity pools via FIX 4.4.', icon: Link },
        { num: '02', title: 'Apply Spread Markups', desc: 'Set your desired pip or percentage spread markups per client group (e.g. VIP, Standard, Pro).', icon: Sliders },
        { num: '03', title: 'Activate Spike Protection', desc: 'Enable microsecond filters that automatically reject bad price ticks and artificial market spikes.', icon: ShieldAlert },
        { num: '04', title: 'Stream Quotes to Terminals', desc: 'Broadcast ultra-tight live price quotes to WebTrader, Mobile Apps, and MT5 servers in under 2ms.', icon: Radio }
      ]}
      visualizerTabs={[
        { id: "aggregator", label: "Live Price Aggregator", previewText: "Combines quotes from top liquidity providers into one super-tight bid/ask price for your traders." },
        { id: "spikes", label: "Spike & Bad Price Filter", previewText: "Automated filters remove wrong prices or artificial spikes before they reach trader charts." }
      ]}
      modules={[
        { title: "20+ Bank Feed Aggregation", desc: "Combines price quotes from 20+ major banks and liquidity pools for the tightest spreads.", icon: Activity, highlight: "20+ Banks" },
        { title: "Price Spike Protection", desc: "Automatically blocks bad market ticks and wrong quotes from triggering trader stop-losses unfairly.", icon: ShieldCheck, highlight: "Spike Protection" },
        { title: "Custom Spread Markups", desc: "Set your own spread markups per client group (e.g., VIP, Standard, Pro) with 1 click.", icon: Zap, highlight: "Custom Spreads" },
        { title: "Multi-Asset Coverage", desc: "Delivers live prices for Forex pairs, Gold, Oil, Global Stock Indices, and Crypto assets.", icon: Layers, highlight: "All Markets" }
      ]}
      techSpecs={[
        { label: "Update Speed", value: "< 2.1 ms" },
        { label: "Bank Connectors", value: "20+ LPs" },
        { label: "Data Format", value: "FIX 4.4 / WebSockets" },
        { label: "Spike Defense", value: "Automated" }
      ]}
      faqs={[
        { q: "What does BrokerBros Quote Engine (BQE) do?", a: "BQE collects prices from multiple top banks, cleans out bad price spikes, and sends super-fast quotes to your trading platforms." },
        { q: "Can we add custom markup to spreads?", a: "Yes. You can add your desired markup per pip or percentage across different account types in seconds." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
