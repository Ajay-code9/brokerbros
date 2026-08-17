import React from 'react';
import { Users, Zap, ShieldCheck, Activity, Award, BarChart3 } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const SocialTradingPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="BrokerBros Social & Copy Trading"
      heroBadge="SUB-100MS COPY TRADING ENGINE"
      heroDescription="Institutional copy trading platform allowing traders to discover top signal providers, copy strategies in real-time, and automate performance fee payouts."
      productMetric={{ label: "Copy Execution Speed", value: "< 80 ms", sub: "Microsecond Signal Replication across MT5/Web" }}
      visualizerTabs={[
        { id: "leaderboard", label: "Signal Provider Leaderboard", previewText: "Verified performance metrics, win rates, drawdown stats, and equity curve rankings." },
        { id: "copier", label: "Proportional Copy Engine", previewText: "Flexible volume allocation modes: Multiplier, Fixed Lot, Equity Ratio, or Risk Percentage." }
      ]}
      modules={[
        { title: "Sub-100ms Signal Mirroring", desc: "Instant order replication across master and follower accounts with zero slippage.", icon: Zap, highlight: "<80ms Mirroring" },
        { title: "Automated High-Watermark Fees", desc: "Calculates performance fees automatically based on true high-watermark profit.", icon: Award, highlight: "High-Watermark" },
        { title: "Flexible Risk Controls", desc: "Followers can set max drawdown limits, emergency equity stop-loss, and lot caps.", icon: ShieldCheck, highlight: "Risk Controls" },
        { title: "Provider Public Profiles", desc: "Embeddable performance widgets and equity charts for signal provider marketing.", icon: Users, highlight: "Public Pages" }
      ]}
      techSpecs={[
        { label: "Copy Latency", value: "< 80 ms" },
        { label: "Allocation Modes", value: "4 Modes" },
        { label: "Fee Engine", value: "High-Watermark" },
        { label: "Platform Compatibility", value: "MT5 / Web" }
      ]}
      faqs={[
        { q: "How does the Copy Trading engine prevent slippage on follower accounts?", a: "Signals are broadcast via direct memory channels directly on the server level, ensuring follower trades open at identical prices." },
        { q: "How are performance fees collected and paid to strategy providers?", a: "Our automated fee engine computes performance fees at the end of each trading period and handles instant distribution to master strategy accounts." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
