import React from 'react';
import { Cpu, Server, Zap, ShieldCheck, Code2, Layers } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const PluginsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="BrokerBros MT5 & Bridge Plugins"
      heroBadge="HIGH-PERFORMANCE SERVER ADD-ONS"
      heroDescription="Enterprise MetaTrader 5 server plugins, custom bridge extensions, margin risk managers, and automated Execution Manager add-ons built in native C++."
      productMetric={{ label: "Plugin Latency", value: "< 0.5 ms", sub: "Native C++ MT5 Server API Plugins" }}
      visualizerTabs={[
        { id: "risk", label: "Margin & Liquidation Plugin", previewText: "Monitors client margins in microsecond intervals and executes partial liquidations before negative balance occurs." },
        { id: "bridge", label: "FIX Liquidity Bridge Gateway", previewText: "Direct FIX 4.4 bridge connecting MT5 trade server directly to institutional LPs." }
      ]}
      modules={[
        { title: "Automated Margin Risk Plugin", desc: "Prevents negative balance and manages microsecond stop-outs without dealer lag.", icon: Cpu, highlight: "Microsecond Risk" },
        { title: "A/B Book Hybrid Router", desc: "Automated volume-based order routing between B-book internalizer and A-book FIX bridge.", icon: Zap, highlight: "Hybrid Routing" },
        { title: "Dynamic Spread & Swap Plugin", desc: "Automate dynamic spread markups based on market volatility and asset class.", icon: Layers, highlight: "Dynamic Swaps" },
        { title: "Multi-Asset FIX Bridge Add-On", desc: "Connect MT5 directly to Tier-1 banks, LMAX, Finalto, and CME Group.", icon: Server, highlight: "FIX 4.4 Bridge" }
      ]}
      techSpecs={[
        { label: "Core Language", value: "Native C++" },
        { label: "API Standard", value: "MT5 Server API" },
        { label: "Execution Overhead", value: "< 0.5 ms" },
        { label: "Compatibility", value: "MT5 Build 4000+" }
      ]}
      faqs={[
        { q: "Are your plugins built in native C++ for MT5?", a: "Yes. All BrokerBros server plugins are written in optimized native C++ using the official MetaTrader 5 Server API for sub-millisecond execution." },
        { q: "Will installing plugins require restarting our MT5 trade server?", a: "Most plugins can be loaded dynamically via MT5 Server Manager without interrupting live client trading." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
