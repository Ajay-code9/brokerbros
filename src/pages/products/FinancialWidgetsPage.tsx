import React from 'react';
import { LayoutGrid, Globe, Activity, Zap, Code2, Layers } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const FinancialWidgetsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="BrokerBros Financial Widgets"
      heroBadge="EMBEDDABLE WEB TICKERS & CALENDARS"
      heroDescription="Suite of lightweight, customizable HTML5 web widgets including real-time market tickers, economic calendars, currency converters, and market heatmaps."
      productMetric={{ label: "Widget Load Speed", value: "< 15 ms", sub: "Lightweight Asynchronous Embed" }}
      visualizerTabs={[
        { id: "ticker", label: "Live Market Ticker Bar", previewText: "Streaming real-time prices for Forex pairs, US Stocks, Indices, and Crypto with color-coded tick flashes." },
        { id: "calendar", label: "Interactive Economic Calendar", previewText: "Filter global economic news releases by impact level (High, Medium, Low) and currency." }
      ]}
      modules={[
        { title: "Real-Time Price Tickers", desc: "Streaming prices with tick flash animations for website headers and sidebars.", icon: Activity, highlight: "Streaming Ticks" },
        { title: "Impact Economic Calendar", desc: "Real-time economic releases with consensus, previous, and actual data points.", icon: LayoutGrid, highlight: "Live Calendar" },
        { title: "Market Heatmaps & Movers", desc: "Visual gainers/losers heatmap showing top market trends.", icon: Globe, highlight: "Market Heatmaps" },
        { title: "Easy iframe & JS Embed", desc: "Copy-paste 1 line of HTML code to embed widgets into any website.", icon: Code2, highlight: "1-Line Embed" }
      ]}
      techSpecs={[
        { label: "Embed Format", value: "HTML / React / iframe" },
        { label: "Data Feed", value: "Real-time WebSockets" },
        { label: "Theme Support", value: "Dark / Light Auto" },
        { label: "Load Impact", value: "< 15 ms" }
      ]}
      faqs={[
        { q: "How do we embed BrokerBros Financial Widgets into our website?", a: "Simply copy and paste our 1-line JavaScript or iframe embed tag into your website HTML." },
        { q: "Do the widgets match our website dark or light theme?", a: "Yes. Widgets automatically inherit your site's dark/light theme or can be styled with custom CSS colors." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
