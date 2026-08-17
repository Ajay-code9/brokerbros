import React from 'react';
import { Server, Zap, ShieldCheck, Cpu, CheckCircle2 } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const HostingServerPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="Hosting & Server Management"
      heroBadge="EQUINIX NY4 / LD4 CO-LOCATION"
      heroDescription="Managed high-performance infrastructure inside prime financial datacenters with sub-10ms optical cross-connects and 99.999% SLA uptime."
      slaMetric={{ label: "Datacenter Uptime SLA", value: "99.999%", sub: "Equinix NY4 / LD4 / TY3 Active-Active Co-location" }}
      deliverables={[
        { title: "Financial Co-location", desc: "Bare-metal dedicated servers inside Equinix NY4 (NJ), LD4 (London), and TY3 (Tokyo).", icon: Server, sla: "Tier-4 Facility" },
        { title: "Direct Fiber Cross-Connects", desc: "Sub-10ms optical interconnects to liquidity providers, exchanges, and MT5 servers.", icon: Zap, sla: "<10ms Speed" },
        { title: "Automated Backup & Failover", desc: "Real-time snapshot replication and automatic DNS failover between datacenters.", icon: Cpu, sla: "Active-Active" },
        { title: "24/7 Server Hardware Monitoring", desc: "Continuous CPU, RAM, disk I/O, and network bandwidth diagnostics.", icon: ShieldCheck, sla: "100% Monitored" }
      ]}
      workflowSteps={[
        { step: "01", title: "Infrastructure Audit", desc: "Analysis of your current server load, latency, and geographic traffic." },
        { step: "02", title: "Co-location Setup", desc: "Deployment of custom bare-metal servers inside Equinix datacenters." },
        { step: "03", title: "Fiber Cross-Connection", desc: "Provisioning direct optical fiber cross-connects to liquidity venues." },
        { step: "04", title: "Active SLA Monitoring", desc: "24/7 automated monitoring with automatic failover triggers." }
      ]}
      scopeInclusions={[
        { feature: "Datacenter Tier", standard: "Standard Cloud VPS", enterprise: "Equinix NY4/LD4 Dedicated Co-location" },
        { feature: "Network Latency", standard: "50ms - 150ms", enterprise: "Sub-10ms Direct Fiber Cross-Connect" },
        { feature: "Uptime SLA", standard: "99.9%", enterprise: "99.999% Guaranteed with Financial SLA" },
        { feature: "Data Backups", standard: "Daily Snapshots", enterprise: "Real-Time Continuous Replication" }
      ]}
      specs={[
        { label: "Datacenters", value: "NY4/LD4/TY3" },
        { label: "Network Latency", value: "< 8.4 ms" },
        { label: "Uptime SLA", value: "99.999%" },
        { label: "Port Speed", value: "10 Gbps Direct" }
      ]}
      faqs={[
        { q: "Where are BrokerBros servers co-located?", a: "Our primary hardware is co-located inside Equinix NY4 (Secaucus, NJ), Equinix LD4 (Slough, UK), and Equinix TY3 (Tokyo, Japan)." },
        { q: "What happens if a server hardware failure occurs?", a: "Our active-active redundant node architecture instantly reroutes all incoming traffic to backup servers in under 100 milliseconds without dropping active connections." },
        { q: "Can you manage our existing MetaTrader or CRM servers?", a: "Yes. Our server management team can take over management, optimization, and security monitoring of your existing infrastructure." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
