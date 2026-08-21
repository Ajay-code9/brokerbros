import React from 'react';
import { Server, Zap, ShieldCheck, Cpu, CheckCircle2, Search, Activity } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const HostingServerPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="Hosting & Server Management"
      heroBadge="EQUINIX FINANCIAL DATACENTERS"
      heroDescription="High-speed hosting inside Equinix LD4 (London) and NY4 (New York) financial datacenters with sub-10ms connections and 99.999% uptime."
      slaMetric={{ label: "Server Uptime Guarantee", value: "99.999%", sub: "Equinix NY4 (New York) & LD4 (London) Co-Location" }}
      deliverables={[
        { title: "Financial Co-Location", desc: "Dedicated high-speed servers co-located directly inside Equinix NY4, LD4, and TY3 datacenters.", icon: Server, sla: "Equinix LD4/NY4" },
        { title: "Direct Fiber Connections", desc: "Sub-10ms direct fiber connections to liquidity providers, banks, and trading servers.", icon: Zap, sla: "<10ms Speed" },
        { title: "Automated Failover", desc: "Real-time data backups and automatic failover if any server hardware experiences an issue.", icon: Cpu, sla: "Auto Failover" },
        { title: "24/7 Server Hardware Monitoring", desc: "Continuous monitoring of CPU load, RAM usage, storage space, and network bandwidth.", icon: ShieldCheck, sla: "24/7 Monitored" }
      ]}
      workflowSteps={[
        { step: "01", title: "Server Audit", desc: "We review your current server load, latency speeds, and traffic locations.", icon: Search },
        { step: "02", title: "Equinix Deployment", desc: "Provision dedicated bare-metal servers inside Equinix LD4 or NY4 facilities.", icon: Server },
        { step: "03", title: "Direct Cross-Connect", desc: "Plug in direct fiber cables to banks, liquidity providers, and MetaTrader 5.", icon: Zap },
        { step: "04", title: "24/7 Monitoring", desc: "Enable 24/7 automatic monitoring with instant failover protection.", icon: Activity }
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
