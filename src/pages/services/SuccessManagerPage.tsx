import React from 'react';
import { Users, ShieldCheck, Award, Briefcase, CheckCircle2, UserPlus, Target, LineChart, Calendar } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const SuccessManagerPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="Dedicated Success Manager"
      heroBadge="1-ON-1 EXECUTIVE HANDHOLDING"
      heroDescription="A dedicated senior account manager assigned to your broker to assist with platform setup, license optimization, and business growth."
      slaMetric={{ label: "Account Executive Availability", value: "Dedicated 1-on-1", sub: "Named Senior FinTech Advisor" }}
      deliverables={[
        { title: "Named Account Manager", desc: "Single direct contact person for all your operational, technical, and trading desk needs.", icon: Users, sla: "Dedicated 1-on-1" },
        { title: "Weekly Performance Audits", desc: "Regular reviews of trading volume, conversion rates, and server execution speeds.", icon: Briefcase, sla: "Weekly Sync" },
        { title: "Priority Feature Requests", desc: "Direct priority input into BrokerBros product roadmap and custom feature requests.", icon: Award, sla: "VIP Priority" },
        { title: "Regulatory Assistance", desc: "Guidance on trade reporting logs, audit trails, and compliance documentation.", icon: ShieldCheck, sla: "Continuous SLA" }
      ]}
      workflowSteps={[
        { step: "01", title: "Executive Intro", desc: "1-on-1 introduction call with your assigned Account Executive.", icon: UserPlus },
        { step: "02", title: "Setup Roadmap", desc: "Build a custom setup and growth roadmap tailored to your broker goals.", icon: Target },
        { step: "03", title: "Weekly Sync & Tuning", desc: "Weekly check-ins, performance tuning, and trading volume optimization.", icon: LineChart },
        { step: "04", title: "Quarterly Growth Review", desc: "Quarterly review analyzing client volume growth and system scaling.", icon: Calendar }
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
