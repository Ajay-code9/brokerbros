import React from 'react';
import { Monitor, Cpu, Zap, ShieldCheck, BarChart3, Activity } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const BrokerBrosTraderPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="BrokerBros Trader"
      heroBadge="ALL-IN-ONE INSTITUTIONAL TRADING TERMINAL"
      heroDescription="Flagship multi-asset trading software suite integrating WebTrader, Desktop Workstation, and Mobile Apps with unified order books, custom indicators, and microsecond LP routing."
      productMetric={{ label: "Terminal Processing Speed", value: "< 4.2 ms", sub: "Multi-Asset FIX 4.4 & WebSocket Engine" }}
      visualizerTabs={[
        { id: "workstation", label: "Unified Multi-Asset Workstation", previewText: "Cross-platform trading engine supporting Forex, Indices, Crypto, Commodities, and Equities in one interface." },
        { id: "depth", label: "Institutional Order Book & L2 DOM", previewText: "Deep Level-2 market depth with real-time liquidity aggregator and volume profile visualization." },
        { id: "routing", label: "Smart Order Routing Engine", previewText: "Sub-5ms multi-LP smart routing with automated A/B/C book execution triggers and slippage protection." }
      ]}
      modules={[
        { title: "Unified Cross-Platform Engine", desc: "Seamless synchronized experience across Web, Desktop, and Mobile terminals with real-time state sync.", icon: Monitor, highlight: "All-in-One Suite" },
        { title: "Sub-5ms Execution Latency", desc: "Direct fiber co-location at Equinix LD4/NY4 datacenters for microsecond fill rates.", icon: Zap, highlight: "Sub-5ms Fill" },
        { title: "Level-2 Depth & Volume Profile", desc: "Full order book visibility with 10-level depth, volume distribution, and one-click execution.", icon: BarChart3, highlight: "Institutional DOM" },
        { title: "White-Label Broker Customization", desc: "Complete visual branding including custom domain, logos, UI themes, and localized translations.", icon: Cpu, highlight: "100% Branded" },
        { title: "Advanced Technical Analysis", desc: "Over 120+ built-in indicators, interactive drawing tools, and TradingView charting integration.", icon: Activity, highlight: "120+ Indicators" },
        { title: "Institutional Security Architecture", desc: "TLS 1.3 encryption, biometric 2FA, session token isolation, and anti-DDoS protection.", icon: ShieldCheck, highlight: "Bank-Grade Security" }
      ]}
      techSpecs={[
        { label: "Execution Engine", value: "C++ / WebSockets" },
        { label: "Average Latency", value: "< 4.2 ms" },
        { label: "Data Center Venue", value: "Equinix LD4/NY4" },
        { label: "Security Protocol", value: "TLS 1.3 + 2FA" }
      ]}
      faqs={[
        { q: "What is BrokerBros Trader?", a: "BrokerBros Trader is our flagship institutional trading software suite combining WebTrader, Mobile Apps, and Desktop Workstations into a unified white-label trading solution for brokerages." },
        { q: "Can we brand BrokerBros Trader with our brokerage identity?", a: "Yes. BrokerBros Trader supports total white-label customization including custom domain names, logo placement, brand color schemes, and custom default watchlists." },
        { q: "How does BrokerBros Trader connect to liquidity providers?", a: "It connects directly to Tier-1 prime brokers and ECNs via our built-in sub-5ms FIX 4.4 Liquidity Bridge and BrokerBros Quote Engine (BQE)." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
