import React from 'react';
import { ShieldCheck, Lock, Zap, Server, CheckCircle2 } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const CyberSecurityPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="DDoS Protection & Cyber Services"
      heroBadge="TERABIT-SCALE MITIGATION"
      heroDescription="Enterprise cybersecurity, DDoS mitigation, and intrusion prevention designed specifically to safeguard brokerage platforms during extreme market volatility."
      slaMetric={{ label: "DDoS Mitigation Capacity", value: "3.2 Tbps+", sub: "Sub-Second Scrubbing & Zero Downtime" }}
      deliverables={[
        { title: "Terabit DDoS Mitigation", desc: "Always-on multi-layered scrubbing network filtering Layer 3, 4, and 7 attacks.", icon: Zap, sla: "<1s Scrubbing" },
        { title: "Web Application Firewall (WAF)", desc: "Custom financial WAF rules blocking SQL injection, XSS, and bot scrapers.", icon: Lock, sla: "Always-On" },
        { title: "Penetration Testing & Audits", desc: "Quarterly vulnerability scans and ethical hacking audits for regulatory compliance.", icon: ShieldCheck, sla: "Quarterly" },
        { title: "24/7 Security Operations Center", desc: "Dedicated SOC team monitoring real-time threat intelligence and traffic anomalies.", icon: Server, sla: "24/7 SOC" }
      ]}
      workflowSteps={[
        { step: "01", title: "Security Assessment", desc: "Comprehensive audit of your domain, API endpoints, and server infrastructure." },
        { step: "02", title: "DNS & WAF Setup", desc: "Routing traffic through our high-speed DDoS scrubbing network." },
        { step: "03", title: "Real-time Filtering", desc: "Continuous automated attack detection and instant packet scrubbing." },
        { step: "04", title: "Threat Reporting", desc: "Detailed attack telemetry reports and compliance security certificates." }
      ]}
      scopeInclusions={[
        { feature: "Mitigation Bandwidth", standard: "100 Gbps Basic", enterprise: "3.2 Tbps+ Unlimited Terabit Capacity" },
        { feature: "WAF Protection", standard: "Standard Rules", enterprise: "Custom FinTech WAF Rules & Bot Control" },
        { feature: "SOC Monitoring", standard: "Automated Alerts", enterprise: "24/7 Live Security Operations Desk" },
        { feature: "Security Audits", standard: "Annual Scan", enterprise: "Quarterly Penetration Testing & Audit Certification" }
      ]}
      specs={[
        { label: "Scrubbing Capacity", value: "3.2 Tbps" },
        { label: "Mitigation Time", value: "< 1 Sec" },
        { label: "WAF Rule Engine", value: "FinTech Custom" },
        { label: "SOC Availability", value: "24/7/365" }
      ]}
      faqs={[
        { q: "How does BrokerBros protect against Layer 7 HTTP flood attacks?", a: "Our proprietary Web Application Firewall (WAF) analyzes incoming request behavior in under 1 millisecond, identifying and scrubbing botnet floods before they reach your web servers." },
        { q: "Will DDoS scrubbing increase latency for our traders?", a: "No. Our global scrubbing centers are co-located in major internet exchange points worldwide, adding zero noticeable latency (<0.5ms) to legitimate trading traffic." },
        { q: "Can you provide penetration test reports for regulatory submission?", a: "Yes. Our SOC generates comprehensive ISO 27001-compliant security audit reports accepted by global regulatory authorities." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
