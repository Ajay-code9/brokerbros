import React from 'react';
import { GraduationCap, Users, Video, BookOpen, CheckCircle2, FileSearch, Award } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const UserTrainingPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="User Training & Staff Onboarding"
      heroBadge="COMPLETE STAFF CERTIFICATION"
      heroDescription="Hands-on training, live video workshops, and step-by-step guides for your back-office staff, risk managers, support teams, and sales agents."
      slaMetric={{ label: "Staff Certification Rate", value: "100%", sub: "Live Hands-on Back Office & Risk Training" }}
      deliverables={[
        { title: "Back Office Operations Training", desc: "Step-by-step training on client onboarding, KYC approvals, deposit processing, and IB payouts.", icon: GraduationCap, sla: "Complete Staff" },
        { title: "Risk Management Workshops", desc: "Specialized training for risk officers on margin monitoring, A/B book routing, and PnL hedging.", icon: Users, sla: "Risk Certified" },
        { title: "Sales & Support Staff Training", desc: "Equipping your sales agents and support staff with CRM best practices and client tools.", icon: Video, sla: "Interactive" },
        { title: "Custom Documentation & Manuals", desc: "Branded operating guides and video tutorials customized to your brokerage workflows.", icon: BookOpen, sla: "Custom Manuals" }
      ]}
      workflowSteps={[
        { step: "01", title: "Team Role Review", desc: "We review your staff roles, experience levels, and software permissions.", icon: FileSearch },
        { step: "02", title: "Custom Training Plan", desc: "Build a tailored training agenda for your sales, risk, and support teams.", icon: BookOpen },
        { step: "03", title: "Live Video Workshops", desc: "Interactive live training sessions conducted by senior FinTech specialists.", icon: Video },
        { step: "04", title: "Staff Certification", desc: "Final practical assessment, staff certification, and ongoing Q&A support desk.", icon: Award }
      ]}
      scopeInclusions={[
        { feature: "Training Format", standard: "Recorded Video Library", enterprise: "Live Interactive 1-on-1 Workshops" },
        { feature: "Staff Coverage", standard: "Admin Staff Only", enterprise: "All Departments (Risk, Sales, Support, Operations)" },
        { feature: "Operating Manuals", standard: "Generic User Guide", enterprise: "Custom Branded SOP Manuals & Video Tutorials" },
        { feature: "Ongoing Refresher", standard: "Self-Serve", enterprise: "Quarterly Staff Refresher & New Feature Training" }
      ]}
      specs={[
        { label: "Training Delivery", value: "Live & Remote" },
        { label: "Completion Time", value: "3 - 5 Days" },
        { label: "Departments", value: "All Roles" },
        { label: "SOP Documentation", value: "Included" }
      ]}
      faqs={[
        { q: "How long does a typical staff onboarding training program take?", a: "Most brokerage teams complete full operational training in 3 to 5 business days, conducted via interactive live video sessions." },
        { q: "Do you provide training for specialized roles like Risk Managers?", a: "Yes. Our risk training covers automated liquidation rules, B-book hedging parameters, margin stress testing, and dealer intervention." },
        { q: "Can we record the training sessions for future hires?", a: "Yes. All live training sessions are recorded, indexed, and provided in your private documentation portal for onboarding future team members." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
