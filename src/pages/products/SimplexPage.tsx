import React from 'react';
import { Zap, Cpu, Server, ShieldCheck, Layers, Activity } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const SimplexPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="BrokerBros Simplex Engine"
      heroBadge="LIGHTWEIGHT TURNKEY TRADING ENGINE"
      heroDescription="Ultra-fast, lightweight turnkey trading engine designed for emerging brokers and prop firms requiring zero-friction execution and minimal server overhead."
      productMetric={{ label: "Server Footprint", value: "Minimal", sub: "High-Throughput Zero-Bloat Architecture" }}
      visualizerTabs={[
        { id: "engine", label: "Core Execution Hub", previewText: "Lightweight C++ matching kernel processing 50,000+ orders per second with zero memory leaks." },
        { id: "routing", label: "Direct Bridge Router", previewText: "Low-latency FIX bridge routing orders directly to prime liquidity venues." }
      ]}
      modules={[
        { title: "Zero-Bloat C++ Core", desc: "Built with pure C++ for maximum throughput and minimum CPU/RAM resource footprint.", icon: Cpu, highlight: "Pure C++" },
        { title: "Rapid Turnkey Setup", desc: "Go live in under 24 hours with pre-configured liquidity bridges and risk parameters.", icon: Zap, highlight: "24h Setup" },
        { title: "Lightweight Web Terminal", desc: "Ultra-fast web interface optimized for low-bandwidth mobile connections.", icon: Server, highlight: "Low-Bandwidth" },
        { title: "Plug-and-Play Connectors", desc: "Pre-built connectors for MT5, FIX API, liquidity providers, and payment gateways.", icon: Layers, highlight: "Pre-Built" }
      ]}
      techSpecs={[
        { label: "Core Language", value: "C++ 20" },
        { label: "Order Capacity", value: "50k / Sec" },
        { label: "Deployment", value: "Docker / Bare Metal" },
        { label: "Latency", value: "< 5 ms" }
      ]}
      faqs={[
        { q: "What makes Simplex different from standard trading platforms?", a: "Simplex is built for extreme speed and minimal resource usage, allowing start-up brokers to run enterprise-grade execution at a fraction of server cost." },
        { q: "Can Simplex scale as our trader volume grows?", a: "Yes. Simplex uses containerized microservices that scale horizontally across cloud or bare-metal servers without downtime." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
