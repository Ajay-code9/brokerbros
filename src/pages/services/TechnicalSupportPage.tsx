import React from 'react';
import { Headphones, ShieldCheck, Clock, Server, Zap, CheckCircle2, PhoneCall, UserCheck, Wrench, FileText } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const TechnicalSupportPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="24/7 Technical Support SLA Desk"
      heroBadge="24/7 DIRECT HUMAN SUPPORT"
      heroDescription="Direct 24/7 access to senior brokerage engineers and server specialists. Instant response with zero dead-end chatbot delays."
      slaMetric={{ label: "Average Response Time", value: "< 24 Seconds", sub: "24/7 Direct Human Answer Guarantee" }}
      deliverables={[
        { title: "24/7 Live Desk Access", desc: "Reach senior engineers via phone, VIP Slack channels, or urgent ticketing system.", icon: Headphones, sla: "<30s Answer" },
        { title: "Emergency Priority Hotline", desc: "Instant priority dispatch desk for urgent server or trade connectivity issues.", icon: Zap, sla: "Immediate" },
        { title: "Trading Log Diagnostics", desc: "Fast log analysis for order execution queries, price feed issues, and server status.", icon: Server, sla: "Real-Time" },
        { title: "Multi-Language Team", desc: "Support available in English, Spanish, Arabic, Mandarin, and Cantonese.", icon: ShieldCheck, sla: "Global Team" }
      ]}
      workflowSteps={[
        { step: "01", title: "Instant Call / Ticket", desc: "Contact our desk via phone, Slack, or portal ticket.", icon: PhoneCall },
        { step: "02", title: "Assigned Senior Engineer", desc: "Your query goes straight to an experienced MT5 & FIX engineer.", icon: UserCheck },
        { step: "03", title: "Fast System Fix", desc: "Diagnostics and fixes applied directly to resolve your issue.", icon: Wrench },
        { step: "04", title: "Resolution Report", desc: "Complete incident report provided detailing root cause and fix.", icon: FileText }
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
