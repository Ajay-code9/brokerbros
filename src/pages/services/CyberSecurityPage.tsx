import React from 'react';
import { ShieldCheck, Lock, Zap, Server, CheckCircle2, ShieldAlert, Globe, Activity, FileCheck } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const CyberSecurityPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="DDoS Protection & Cyber Services"
      heroBadge="TERABIT-SCALE CYBER DEFENSE"
      heroDescription="Enterprise cyber defense and DDoS scrubbing network built to keep your trading platforms online during massive market volatility and cyber attacks."
      slaMetric={{ label: "DDoS Mitigation Capacity", value: "3.2 Tbps+", sub: "Instant Sub-Second Scrubbing & Zero Downtime" }}
      deliverables={[
        { title: "3.2 Tbps DDoS Scrubbing", desc: "Always-on multi-layer scrubbing network that filters out Layer 3, 4, and 7 attacks instantly.", icon: Zap, sla: "<1s Scrubbing" },
        { title: "Web Application Firewall (WAF)", desc: "Custom firewall rules blocking SQL injection, XSS, and unauthorized bot scrapers.", icon: Lock, sla: "Always-On" },
        { title: "Penetration Testing & Audits", desc: "Quarterly vulnerability scans and security penetration tests for regulatory compliance.", icon: ShieldCheck, sla: "Quarterly Audit" },
        { title: "24/7 Security Desk (SOC)", desc: "Security Operations Center monitoring network traffic anomalies 24/7/365.", icon: Server, sla: "24/7 SOC Desk" }
      ]}
      workflowSteps={[
        { step: "01", title: "Security Assessment", desc: "Full audit of your domain, web apps, API endpoints, and server infrastructure.", icon: ShieldAlert },
        { step: "02", title: "DNS & WAF Setup", desc: "Route your incoming traffic through our high-speed DDoS scrubbing network.", icon: Globe },
        { step: "03", title: "Real-Time Packet Scrubbing", desc: "Automated threat detection filters out malicious traffic in sub-seconds.", icon: Activity },
        { step: "04", title: "Compliance Reports", desc: "Receive detailed attack telemetry and security compliance certificates.", icon: FileCheck }
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
