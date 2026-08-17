import React from 'react';
import { Users, ShieldCheck, Award, Briefcase, CheckCircle2 } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const SuccessManagerPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="Dedicated Success Manager"
      heroBadge="1-ON-1 EXECUTIVE HANDHOLDING"
      heroDescription="A named senior account executive assigned to your brokerage to guide technical integrations, license optimization, and revenue growth."
      slaMetric={{ label: "Account Executive Availability", value: "Dedicated", sub: "Named Senior FinTech Advisor" }}
      deliverables={[
        { title: "Named Account Manager", desc: "Single point of contact for all strategic, operational, and commercial needs.", icon: Users, sla: "Dedicated" },
        { title: "Weekly Growth Audits", desc: "Regular reviews of trading volume, conversion rates, and server performance.", icon: Briefcase, sla: "Weekly" },
        { title: "Priority Feature Requests", desc: "Direct input into BrokerBros product roadmap & custom patch prioritization.", icon: Award, sla: "VIP Priority" },
        { title: "Regulatory Assistance", desc: "Guidance on reporting metrics, audit logs, and compliance documentation.", icon: ShieldCheck, sla: "Continuous" }
      ]}
      workflowSteps={[
        { step: "01", title: "Executive Onboarding", desc: "Introduction call with your assigned Account Executive." },
        { step: "02", title: "Business Alignment", desc: "Custom strategic roadmap built for your specific target market." },
        { step: "03", title: "Proactive Optimization", desc: "Weekly check-ins, performance tuning, and fee audits." },
        { step: "04", title: "Quarterly Strategy Review", desc: "Executive QBR analyzing growth metrics and infrastructure scaling." }
      ]}
      scopeInclusions={[
        { feature: "Account Management", standard: "Pooled Desk", enterprise: "Dedicated Named Executive" },
        { feature: "Strategic Reviews", standard: "Annual Review", enterprise: "Weekly Touchpoints & Quarterly QBRs" },
        { feature: "Roadmap Input", standard: "General Feedback", enterprise: "Direct Product Team Access" },
        { feature: "Onboarding Support", standard: "Self-Serve Docs", enterprise: "Fully Managed Setup" }
      ]}
      specs={[
        { label: "Executive Experience", value: "8+ Years" },
        { label: "Check-in Frequency", value: "Weekly" },
        { label: "QBR Analysis", value: "Quarterly" },
        { label: "Response Time", value: "< 1 Hour" }
      ]}
      faqs={[
        { q: "What does a Dedicated Success Manager do for my broker?", a: "Your Success Manager coordinates technical onboarding, optimizes system performance, conducts staff training, and acts as your internal advocate at BrokerBros." },
        { q: "How often will we meet with our Success Manager?", a: "We schedule structured weekly tactical syncs and formal quarterly business reviews (QBRs), with real-time Slack access in between." },
        { q: "Can the Success Manager help with marketing or IB acquisition strategies?", a: "Yes. Our team shares industry best practices for IB compensation structuring, client retention workflows, and affiliate tracking." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
