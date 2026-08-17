import React from 'react';
import { Headphones, ShieldCheck, Clock, Server, Zap, CheckCircle2 } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const TechnicalSupportPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="24/7 Technical Support Desk"
      heroBadge="SUB-30 SECOND RESPONSE SLA"
      heroDescription="Direct 24/7 access to senior market technicians, system engineers, and infrastructure specialists. Zero dead-end AI support chatbots."
      slaMetric={{ label: "Average Response Time", value: "< 24 Seconds", sub: "24/7/365 Direct Human Answer SLA" }}
      deliverables={[
        { title: "24/7 Live Desk Access", desc: "Phone, Slack, and encrypted portal channels to tier-3 engineering technicians.", icon: Headphones, sla: "<30s Response" },
        { title: "Emergency Incident Desk", desc: "Priority dispatch desk for urgent execution or connectivity anomalies.", icon: Zap, sla: "100% Priority" },
        { title: "Server Log Diagnostics", desc: "Microsecond timestamp analysis for order execution and gateway logs.", icon: Server, sla: "Real-time" },
        { title: "Multi-Language Desk", desc: "Support in English, Spanish, Mandarin, Arabic, and Cantonese.", icon: ShieldCheck, sla: "Global" }
      ]}
      workflowSteps={[
        { step: "01", title: "Direct Intake", desc: "Incident or query logged via phone or VIP Slack channel." },
        { step: "02", title: "Senior Triage", desc: "Assigned immediately to a dedicated senior FinTech engineer." },
        { step: "03", title: "Rapid Resolution", desc: "Diagnostic testing, log tracing, and gateway fix applied." },
        { step: "04", title: "Post-Mortem SLA", desc: "Full root cause analysis (RCA) report provided within 4 hours." }
      ]}
      scopeInclusions={[
        { feature: "Support Channels", standard: "Ticketing & Email", enterprise: "24/7 Direct Phone, VIP Slack & Portal" },
        { feature: "Response Time SLA", standard: "< 2 Hours", enterprise: "< 30 Seconds Guaranteed" },
        { feature: "Dedicated Engineers", standard: "Shared Desk", enterprise: "Assigned Named Support Engineers" },
        { feature: "Root Cause Reports", standard: "Monthly Summary", enterprise: "Immediate RCA within 4 Hours" }
      ]}
      specs={[
        { label: "SLA Response Time", value: "< 30 Sec" },
        { label: "Desk Availability", value: "24/7/365" },
        { label: "Engineer Seniority", value: "Tier-3 Lead" },
        { label: "Uptime Commitment", value: "99.999%" }
      ]}
      faqs={[
        { q: "Do you use AI support chatbots for ticket triage?", a: "No. BrokerBros guarantees direct human connection to experienced FinTech engineers for every support ticket, phone call, or Slack message." },
        { q: "What is your emergency incident response SLA?", a: "P1 critical incidents receive an immediate priority answer under 30 seconds and active war-room escalation within 5 minutes." },
        { q: "Can our technical staff communicate over Slack or Teams?", a: "Yes. Enterprise clients receive dedicated private Slack, Microsoft Teams, and Telegram channels connected directly to our engineering desk." },
        { q: "Are support technicians knowledgeable about MT5, FIX APIs, and CRMs?", a: "All technicians are certified in MetaTrader 5 server administration, FIX protocol messaging, liquidity bridge routing, and CRM database management." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
