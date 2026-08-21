import React from 'react';
import { GitBranch, Zap, Route, Layers, Radio, ShieldCheck, Cpu, Server, Link, Sliders } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const FixApiLiquidityPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="FIX API & Liquidity Engine"
      heroBadge="FAST FIX 4.4 LIQUIDITY BRIDGE"
      heroDescription="Institutional FIX API engine connecting your brokerage directly to 20+ top banks and liquidity providers with sub-5ms trade execution."
      slaMetric={{ label: "Trade Execution Latency", value: "< 4.8 ms", sub: "Equinix LD4 / NY4 Direct Fiber Cross-Connect" }}
      deliverables={[
        { title: "FIX 4.4 Protocol Bridge", desc: "Native FIX 4.4 engine with automated session health checks and instant failover protection.", icon: GitBranch, sla: "FIX 4.4 Protocol" },
        { title: "Sub-5ms Execution Latency", desc: "Co-located direct fiber connections at Equinix LD4 (London) and NY4 (New York) for instant fills.", icon: Zap, sla: "<5ms Latency" },
        { title: "20+ LP Bank Aggregation", desc: "Combines 20+ bank and liquidity feeds into one ultra-tight order book for your traders.", icon: Layers, sla: "20+ LPs Aggregated" },
        { title: "Smart Order Routing Engine", desc: "Set automatic A-Book (STP to banks) or B-Book (internalization) routing rules per client group.", icon: Route, sla: "Smart Routing" }
      ]}
      workflowSteps={[
        { step: "01", title: "Fiber Cross-Connect", desc: "Set up direct fiber cross-connect cables inside Equinix LD4 or NY4 datacenters.", icon: Link },
        { step: "02", title: "FIX 4.4 Handshake", desc: "Configure FIX 4.4 sessions, order books, and bank credit lines.", icon: Sliders },
        { step: "03", title: "Set Routing Rules", desc: "Configure A-Book and B-Book execution rules and spread markups.", icon: Route },
        { step: "04", title: "Live Execution & 24/7 SLA", desc: "Start routing live trades with sub-5ms execution backed by 24/7 server monitoring.", icon: Radio }
      ]}
      scopeInclusions={[
        { feature: "FIX Protocol Version", standard: "FIX 4.2 / 4.4 Standard", enterprise: "FIX 4.4 High-Frequency Native" },
        { feature: "LP Connections", standard: "Up to 3 LPs", enterprise: "Unlimited LP Aggregation (20+ LPs)" },
        { feature: "Co-Location Venue", standard: "Standard Cloud Hosting", enterprise: "Direct Cross-Connect LD4 / NY4 / TY3" },
        { feature: "Execution Model", standard: "A-Book Only", enterprise: "Full A/B/C Book Smart Order Routing" }
      ]}
      specs={[
        { label: "Execution Latency", value: "< 4.8 ms" },
        { label: "Data Center Location", value: "Equinix LD4/NY4" },
        { label: "Supported Protocol", value: "FIX 4.4 Native" },
        { label: "Network SLA Uptime", value: "99.999%" }
      ]}
      faqs={[
        { q: "Which FIX protocol versions are supported?", a: "We natively support FIX 4.4, which is the industry standard for FX liquidity. FIX 4.2 compatibility mode is also available for legacy LP connections." },
        { q: "How many liquidity providers can we connect?", a: "There is no limit. Our aggregation engine supports 20+ simultaneous LP connections with independent session management, failover logic, and quote timeout handling for each." },
        { q: "What execution models are supported?", a: "Full support for A-Book (STP to LP), B-Book (internalization), and C-Book (hybrid) models. Routing rules are configurable per client group, symbol, or trade size." },
        { q: "Do you offer co-location services?", a: "Yes. We offer co-located infrastructure at Equinix LD4 (London), NY4 (New York), and TY3 (Tokyo) with direct cross-connect to major LPs for fiber-optic latency." },
        { q: "How does the aggregation engine work?", a: "Quotes from all connected LPs are compiled in real-time. The engine selects the best bid/ask across all sources, applies your markup rules, and routes orders to the LP offering the best price." },
        { q: "Is there automatic hedging?", a: "Yes. Configure auto-hedging rules based on net position thresholds, client groups, or symbol exposure. The system automatically sends hedging orders to your preferred LP when limits are reached." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
