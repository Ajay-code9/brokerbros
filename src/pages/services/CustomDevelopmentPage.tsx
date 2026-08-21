import React from 'react';
import { Cpu, Code2, Zap, FileCheck2, CheckCircle2, FileSearch, Layers, Code, Rocket } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const CustomDevelopmentPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="Custom System Development"
      heroBadge="BESPOKE FINTECH ENGINEERING"
      heroDescription="Tailor-made software engineering, proprietary trading plugins, custom API bridges, and custom CRM modules built to your exact specifications."
      slaMetric={{ label: "Source Code & Quality SLA", value: "100%", sub: "Full Source Code Ownership & High-Performance Benchmark" }}
      deliverables={[
        { title: "Custom Trading Plugins", desc: "Custom C++ and MQL5 plugins for MetaTrader 5, WebTrader, and proprietary platforms.", icon: Cpu, sla: "Custom C++" },
        { title: "Proprietary API Bridges", desc: "High-speed REST, WebSocket, and FIX API connectors connecting custom CRMs and liquidity feeds.", icon: Code2, sla: "Sub-5ms Speed" },
        { title: "Custom CRM Modules", desc: "Tailored IB commission calculators, payment gateway plugins, and custom admin reports.", icon: Zap, sla: "Tailored Code" },
        { title: "Rigorous QA & Code Audits", desc: "Thorough stress load testing, security audits, and code reviews before live launch.", icon: FileCheck2, sla: "100% Tested" }
      ]}
      workflowSteps={[
        { step: "01", title: "Project Scoping", desc: "We map out your exact system requirements, logic, and feature list.", icon: FileSearch },
        { step: "02", title: "Architecture Design", desc: "Create database schemas, API specs, and UI/UX wireframes.", icon: Layers },
        { step: "03", title: "Agile Coding Sprints", desc: "Build system modules in fast 2-week sprints with weekly live demos.", icon: Code },
        { step: "04", title: "UAT & Server Launch", desc: "Perform stress load tests, user acceptance testing, and launch to production.", icon: Rocket }
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
