import React from 'react';
import { Layout, Palette, Zap, Globe, CheckCircle2 } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const WebsiteDevPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="Website UX/UI Development"
      heroBadge="HIGH-CONVERTING BROKER WEBSITES"
      heroDescription="Bespoke financial website design, landing pages, and interactive client portals built for maximum trader conversion, mobile responsiveness, and SEO dominance."
      slaMetric={{ label: "Delivery Timeline", value: "14 Days", sub: "Fully Custom Branded Broker Website" }}
      deliverables={[
        { title: "Custom Brand UI Design", desc: "Premium dark/light mode interface design tailored specifically to your brokerage identity.", icon: Palette, sla: "Custom UI" },
        { title: "Mobile & Terminal Optimization", desc: "Ultra-fast, responsive web interfaces tested across all mobile devices and screen resolutions.", icon: Layout, sla: "100% Responsive" },
        { title: "CRM & Widget Integration", desc: "Seamless integration with BrokerBros CRM, live ticker widgets, and registration forms.", icon: Zap, sla: "Pre-Integrated" },
        { title: "Financial SEO & Speed Tuning", desc: "Optimized for Google Lighthouse 100/100 performance, fast page loads, and organic ranking.", icon: Globe, sla: "SEO Ready" }
      ]}
      workflowSteps={[
        { step: "01", title: "Brand Strategy", desc: "Discovery call to analyze your target markets, branding, and color palette." },
        { step: "02", title: "Figma UI/UX Mockup", desc: "Interactive Figma designs created and refined until 100% approved." },
        { step: "03", title: "Frontend Engineering", desc: "Clean React/Vite code development with smooth micro-animations." },
        { step: "04", title: "Launch & CRM Connect", desc: "Deployment to high-speed CDN and live CRM registration form integration." }
      ]}
      scopeInclusions={[
        { feature: "Design Customization", standard: "Pre-made Template", enterprise: "100% Bespoke Custom Figma Design" },
        { feature: "CRM Form Integration", standard: "Basic Form", enterprise: "Deep API Integration with Instant KYCs" },
        { feature: "Page Speed Score", standard: "70-80 Score", enterprise: "Guaranteed 95+ Google Lighthouse Score" },
        { feature: "Content Revisions", standard: "1 Revision Round", enterprise: "Unlimited Revisions until Launch Approval" }
      ]}
      specs={[
        { label: "Delivery Time", value: "14 Days" },
        { label: "Page Speed Score", value: "95+ Score" },
        { label: "Framework", value: "React/Tailwind" },
        { label: "SEO Readiness", value: "100% Optimized" }
      ]}
      faqs={[
        { q: "Do you build websites from generic templates or custom design?", a: "Every BrokerBros website is designed from scratch in Figma to match your unique brand identity, regulatory requirements, and target audience." },
        { q: "Will the website integrate cleanly with BrokerBros Client Portal & CRM?", a: "Yes. All registration forms, live account open buttons, deposit popups, and live market tickers link directly to your CRM back office out of the box." },
        { q: "Is the website optimized for mobile phones and tablets?", a: "Yes. Our frontend engineers optimize every component for smartphones, tablets, laptops, and ultra-wide trading displays." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
