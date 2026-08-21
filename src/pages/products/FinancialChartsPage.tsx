import React from 'react';
import { BarChart3, Activity, Zap, Layers, Globe, ShieldCheck, Code, Sliders, Play, MousePointer } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const FinancialChartsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="BrokerBros Financial Charts"
      heroBadge="PROFESSIONAL HTML5 CHARTING SUITE"
      heroDescription="High-speed HTML5 charting software for web and mobile. Give your traders 100+ technical indicators, drawing tools, and 1-click chart trading."
      productMetric={{ label: "Chart Render Speed", value: "60 FPS", sub: "Super-Smooth High Speed Charting" }}
      workflowSteps={[
        { num: '01', title: 'Embed Chart Widget', desc: 'Embed our lightweight HTML5 chart component into your website or web trading platform in minutes.', icon: Code },
        { num: '02', title: 'Connect Live Price Feeds', desc: 'Stream sub-10ms real-time price quotes for Forex, Gold, Commodities, and Crypto onto trader charts.', icon: Activity },
        { num: '03', title: 'Enable 100+ Indicators', desc: 'Provide your traders with technical indicators, drawing tools, multi-chart grids, and dark/light themes.', icon: Sliders },
        { num: '04', title: '1-Click Chart Trading', desc: 'Allow traders to buy/sell directly from price chart lines with drag-and-drop stop-loss handles.', icon: MousePointer }
      ]}
      visualizerTabs={[
        { id: "indicators", label: "100+ Technical Indicators", previewText: "RSI, MACD, Moving Averages, Bollinger Bands, Fibonacci, and Volume Profile." },
        { id: "layouts", label: "Multi-Chart Grid Layouts", previewText: "View up to 8 active charts at the same time with synchronized crosshairs and time periods." }
      ]}
      modules={[
        { title: "Fast 60 FPS Charting", desc: "Hardware-accelerated engine that scrolls and zooms smoothly without lag or freezing.", icon: BarChart3, highlight: "60 FPS Smooth" },
        { title: "100+ Built-In Indicators", desc: "Full library of trend, momentum, volatility, and volume indicators ready for traders.", icon: Activity, highlight: "100+ Indicators" },
        { title: "Multi-Timeframe Analysis", desc: "Compare 1-second, 1-minute, 1-hour, daily, and monthly candlestick bars easily.", icon: Layers, highlight: "All Timeframes" },
        { title: "Brand Customization", desc: "Customize chart colors, background themes, and default watchlists to match your brand.", icon: Globe, highlight: "Custom Styling" }
      ]}
      techSpecs={[
        { label: "Chart Technology", value: "HTML5 / WebGL" },
        { label: "Frame Rate", value: "60 FPS" },
        { label: "Indicators", value: "100+ Built-In" },
        { label: "Data Streaming", value: "WebSockets" }
      ]}
      faqs={[
        { q: "Can we embed Financial Charts into our existing website?", a: "Yes. Financial Charts embeds easily into any web app, CRM, or portal via a simple JavaScript widget." },
        { q: "Can traders save their custom chart layouts?", a: "Yes. Traders can save custom indicator setups, drawings, and color themes automatically." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
