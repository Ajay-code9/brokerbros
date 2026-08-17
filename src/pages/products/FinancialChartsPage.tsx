import React from 'react';
import { BarChart3, Activity, Zap, Layers, Globe, ShieldCheck } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const FinancialChartsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="BrokerBros Financial Charts"
      heroBadge="PROFESSIONAL HTML5 CHARTING SUITE"
      heroDescription="Institutional-grade HTML5 charting package featuring 100+ technical indicators, drawing tools, multi-timeframe analysis, and real-time WebSocket feeds."
      productMetric={{ label: "Chart Render Speed", value: "60 FPS", sub: "Canvas & WebGL High-Speed Rendering" }}
      visualizerTabs={[
        { id: "indicators", label: "100+ Technical Indicators", previewText: "RSI, MACD, Bollinger Bands, Ichimoku Cloud, Volume Profile, Fibonacci, and custom Pine Script style indicators." },
        { id: "layouts", label: "Multi-Timeframe Grids", previewText: "Sync up to 8 chart windows with linked crosshairs and time-synced playback." }
      ]}
      modules={[
        { title: "HTML5 Canvas & WebGL Engine", desc: "Hardware-accelerated charting engine supporting smooth 60 FPS scrolling and zooming.", icon: BarChart3, highlight: "60 FPS Canvas" },
        { title: "100+ Technical Indicators", desc: "Pre-built library of trend, momentum, volatility, and volume-based indicators.", icon: Activity, highlight: "100+ Indicators" },
        { title: "Multi-Timeframe Synchronization", desc: "Compare tick, 1-second, 1-minute, daily, and monthly bars side-by-side.", icon: Layers, highlight: "Multi-Timeframe" },
        { title: "Custom Theme Styling", desc: "Full dark and light mode theme customization matching your brokerage brand.", icon: Globe, highlight: "Custom Themes" }
      ]}
      techSpecs={[
        { label: "Rendering Engine", value: "WebGL / Canvas" },
        { label: "Frame Rate", value: "60 FPS" },
        { label: "Indicators Included", value: "100+" },
        { label: "Data Source", value: "WebSockets Feed" }
      ]}
      faqs={[
        { q: "Can Financial Charts be embedded into our existing web or mobile app?", a: "Yes. Financial Charts is a lightweight JS/React component that embeds cleanly via npm package or iframe." },
        { q: "Does the charting suite support custom user drawings and saved templates?", a: "Yes. Traders can save chart layouts, custom indicator parameters, and drawings directly to local storage or CRM profile." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
