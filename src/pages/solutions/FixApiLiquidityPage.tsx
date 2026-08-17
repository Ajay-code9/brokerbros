import React from 'react';
import { GitBranch, Zap, Route, Layers, Radio, ShieldCheck, Cpu, Server } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const FixApiLiquidityPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="FIX API & Liquidity Engine"
      heroBadge="SUB-5MS EXECUTION & DIRECT CROSS-CONNECT"
      heroDescription="Institutional FIX 4.4 protocol bridge connecting your brokerage servers directly to 20+ Tier-1 liquidity providers, ECNs, and prime brokers with microsecond smart order routing."
      slaMetric={{ label: "Average FIX Latency", value: "< 4.8 ms", sub: "Equinix LD4/NY4/TY3 Cross-Connect SLA" }}
      deliverables={[
        { title: "FIX 4.4 Protocol Bridge", desc: "Full FIX 4.4 protocol implementation with session management, heartbeat monitoring, and instant failover.", icon: GitBranch, sla: "FIX 4.4 Native" },
        { title: "Ultra-Low Latency Routing", desc: "Co-located direct fiber cross-connects at LD4 London and NY4 New York for sub-5ms fill rates.", icon: Zap, sla: "Sub-5ms Latency" },
        { title: "Multi-LP Aggregation", desc: "Aggregate 20+ liquidity providers simultaneously with best-bid/best-ask order book compilation.", icon: Layers, sla: "20+ LPs Aggregated" },
        { title: "A/B/C Book Routing Engine", desc: "Configurable dealing desk rules for A-Book (STP), B-Book (internalization), and C-Book hybrid execution.", icon: Route, sla: "Real-Time P&L" }
      ]}
      workflowSteps={[
        { step: "01", title: "Cross-Connect Provisioning", desc: "Dedicated fiber cross-connect setup at Equinix LD4, NY4, or TY3 financial datacenters." },
        { step: "02", title: "Session & LP Mapping", desc: "FIX 4.4 session handshake, sequence store configuration, and multi-LP credit line mapping." },
        { step: "03", title: "Smart Routing & Risk Rules", desc: "Configure A/B/C book execution triggers, spread markup rules, and net position risk limits." },
        { step: "04", title: "Live Execution & 24/7 Monitoring", desc: "Sub-5ms order routing goes live backed by 24/7 microsecond latency monitoring and auto-hedging." }
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
