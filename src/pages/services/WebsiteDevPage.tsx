import React from 'react';
import { Layout, Palette, Zap, Globe, CheckCircle2, Figma, Code, Rocket } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const WebsiteDevPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="Website UX/UI Development"
      heroBadge="HIGH-CONVERTING BROKER WEBSITES"
      heroDescription="Bespoke financial website design, landing pages, and interactive client portals built for maximum trader conversion, mobile responsiveness, and fast loading speeds."
      slaMetric={{ label: "Delivery Timeline Guarantee", value: "14 Days", sub: "Fully Custom Branded Broker Website Launch" }}
      deliverables={[
        { title: "Custom Brand UI Design", desc: "Premium interface design tailored specifically to your brokerage brand identity.", icon: Palette, sla: "Custom UI" },
        { title: "Mobile & Terminal Optimization", desc: "Fast, responsive web design tested across all smartphones, tablets, and desktop displays.", icon: Layout, sla: "100% Responsive" },
        { title: "CRM & Widget Integration", desc: "Seamless integration with BrokerBros CRM, live ticker widgets, and registration forms.", icon: Zap, sla: "CRM Ready" },
        { title: "Financial SEO & Speed Tuning", desc: "Optimized for Google 95+ speed performance score, fast page loads, and search rankings.", icon: Globe, sla: "SEO Ready" }
      ]}
      workflowSteps={[
        { step: "01", title: "Brand Strategy Call", desc: "Discovery call to analyze your target market, logo, and preferred color palette.", icon: Palette },
        { step: "02", title: "Figma UI/UX Design", desc: "Custom Figma wireframes and visual designs created for your approval.", icon: Figma },
        { step: "03", title: "Frontend Engineering", desc: "Clean React code development with smooth micro-animations and fast loading.", icon: Code },
        { step: "04", title: "Launch & CRM Connect", desc: "Deployment to high-speed CDN and live CRM registration form integration.", icon: Rocket }
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
