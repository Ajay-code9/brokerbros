import React from 'react';
import { Cpu, Code2, Zap, FileCheck2, CheckCircle2 } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const CustomDevelopmentPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="Custom System Development"
      heroBadge="BESPOKE FINTECH ENGINEERING"
      heroDescription="Tailor-made software engineering, proprietary trading plugins, custom API bridges, and bespoke CRM integrations built to your exact institutional specifications."
      slaMetric={{ label: "Engineering Quality SLA", value: "100%", sub: "Full Source Code Ownership & Microsecond Benchmarks" }}
      deliverables={[
        { title: "Bespoke Trading Plugins", desc: "Custom C++ and MQL5 plugins for MetaTrader 5, cTrader, and proprietary platforms.", icon: Cpu, sla: "Custom C++" },
        { title: "Proprietary API Connectors", desc: "Custom REST, WebSocket, and FIX API bridges connecting custom CRMs and liquidity pools.", icon: Code2, sla: "High-Speed" },
        { title: "Custom CRM Module Engineering", desc: "Custom affiliate reward algorithms, payment gateway plugins, and reporting views.", icon: Zap, sla: "Tailored" },
        { title: "Rigorous QA & Code Audit", desc: "Comprehensive unit testing, load stress testing, and security code reviews.", icon: FileCheck2, sla: "100% Tested" }
      ]}
      workflowSteps={[
        { step: "01", title: "Technical Scoping", desc: "Detailed engineering discovery to map out architecture and specifications." },
        { step: "02", title: "Architecture Design", desc: "System diagramming, database schema design, and API contract definition." },
        { step: "03", title: "Agile Development", desc: "Sprint-based software engineering with weekly demo builds and code reviews." },
        { step: "04", title: "UAT & Deployment", desc: "User Acceptance Testing, load testing, and deployment to production servers." }
      ]}
      scopeInclusions={[
        { feature: "Code Ownership", standard: "Licensed Module", enterprise: "100% Source Code Ownership Option" },
        { feature: "Development Methodology", standard: "Fixed Scope", enterprise: "Dedicated Agile Engineering Squad" },
        { feature: "Performance Benchmarking", standard: "Standard QA", enterprise: "Microsecond Latency & Stress Load Testing" },
        { feature: "Warranty & Patch Support", standard: "30 Days", enterprise: "1 Year Full Warranty & SLA Maintenance" }
      ]}
      specs={[
        { label: "Languages", value: "C++, Rust, React" },
        { label: "Protocols", value: "FIX, WS, REST" },
        { label: "Development Model", value: "Agile Sprints" },
        { label: "Warranty Support", value: "1 Year SLA" }
      ]}
      faqs={[
        { q: "Can BrokerBros develop custom MT5 server plugins or bridge extensions?", a: "Yes. Our senior C++ engineers specialize in building low-latency MetaTrader 5 server plugins, custom risk management managers, and bridge connectors." },
        { q: "Who owns the intellectual property and source code of custom projects?", a: "For custom enterprise engineering projects, full IP rights and complete source code ownership are transferred to your firm upon delivery." },
        { q: "How do you ensure custom code doesn't slow down server execution?", a: "All custom plugins undergo rigorous microsecond benchmark testing and stress load simulations up to 50,000 requests per second before production deployment." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
