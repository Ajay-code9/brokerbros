import React from 'react';
import { Globe, Cpu, Zap, ShieldCheck, BarChart3, Activity } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const WebTraderPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="BrokerBros Web Trader"
      heroBadge="SUB-10MS BROWSER TRADING TERMINAL"
      heroDescription="Institutional HTML5 web trading platform offering ultra-low latency execution, multi-chart layout controls, and direct FIX engine connectivity without software installation."
      productMetric={{ label: "Execution Latency", value: "< 7.2 ms", sub: "Direct WebSockets & FIX Engine Connector" }}
      visualizerTabs={[
        { id: "charting", label: "Multi-Chart Workstation", previewText: "Grid layouts supporting up to 8 simultaneous active charts with TradingView & Custom Indicators." },
        { id: "dom", label: "Level-2 Depth of Market", previewText: "Real-time Order Book depth showing top-10 bid/ask liquidity levels directly from Tier-1 LPs." },
        { id: "execution", label: "One-Click Order Routing", previewText: "Sub-10ms 1-click execution with automated trailing stops and OCO order types." }
      ]}
      modules={[
        { title: "HTML5 Zero-Install Architecture", desc: "Runs on any web browser across desktop and tablet without plugins or flash.", icon: Globe, highlight: "Cross-Platform" },
        { title: "Sub-10ms WebSockets Feed", desc: "Real-time streaming ticks and depth updates over encrypted WebSockets.", icon: Zap, highlight: "Streaming Ticks" },
        { title: "Level-2 Order Book (DOM)", desc: "Full depth of market visibility with instant one-click order placement.", icon: BarChart3, highlight: "Depth of Market" },
        { title: "White-Label Brand Customization", desc: "Custom logo, color palette, custom domain, and localized language translation.", icon: Cpu, highlight: "100% Branded" },
        { title: "Built-In Technical Indicators", desc: "100+ native technical indicators, drawing tools, and automated chart pattern detectors.", icon: Activity, highlight: "100+ Indicators" },
        { title: "Bank-Grade Encryption", desc: "TLS 1.3 encryption and dual-factor authentication (2FA) for total account protection.", icon: ShieldCheck, highlight: "TLS 1.3 Security" }
      ]}
      techSpecs={[
        { label: "Platform Tech", value: "HTML5 / React" },
        { label: "Feed Latency", value: "< 7.2 ms" },
        { label: "Chart Engine", value: "TradingView API" },
        { label: "Security Standard", value: "TLS 1.3 + 2FA" }
      ]}
      faqs={[
        { q: "Does Web Trader require any download or software installation?", a: "No. BrokerBros Web Trader is 100% browser-based and runs seamlessly on Chrome, Safari, Edge, and Firefox." },
        { q: "Can we brand Web Trader with our brokerage logo and colors?", a: "Yes. Web Trader supports complete white-label customization including domain mapping (trader.yourbroker.com), custom brand CSS, logos, and default watchlists." },
        { q: "Is Web Trader connected to our CRM and MT5 servers?", a: "Yes. Web Trader integrates directly with BrokerBros CRM and MetaTrader 5 / FIX API liquidity gateways." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
