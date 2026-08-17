import React from 'react';
import { GraduationCap, Users, Video, BookOpen, CheckCircle2 } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const UserTrainingPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="User Training & Staff Onboarding"
      heroBadge="COMPREHENSIVE TEAM CERTIFICATION"
      heroDescription="Hands-on training programs, live workshops, and operational certification for your brokerage staff, risk managers, support teams, and sales representatives."
      slaMetric={{ label: "Staff Certification Rate", value: "100%", sub: "Hands-on Back Office & Risk Management Training" }}
      deliverables={[
        { title: "Back Office Operations Training", desc: "In-depth instruction on client onboarding, KYC approvals, deposit approvals, and IB payouts.", icon: GraduationCap, sla: "Complete Staff" },
        { title: "Risk Management Workshops", desc: "Training for risk officers on margin monitoring, A/B book routing, and PnL hedging.", icon: Users, sla: "Risk Certified" },
        { title: "Sales & Support Staff Training", desc: "Equipping your account managers and support staff with CRM best practices.", icon: Video, sla: "Interactive" },
        { title: "Custom Documentation & SOPs", desc: "Bespoke operating manuals and video tutorials tailored to your firm's workflows.", icon: BookOpen, sla: "Custom Manuals" }
      ]}
      workflowSteps={[
        { step: "01", title: "Needs Assessment", desc: "Evaluating your staff roles, experience levels, and software modules." },
        { step: "02", title: "Curriculum Customization", desc: "Building a tailored training program for your specific operational procedures." },
        { step: "03", title: "Live Workshop Sessions", desc: "Interactive training sessions led by senior BrokerBros technical directors." },
        { step: "04", title: "Certification & Support", desc: "Final staff assessment, operational certification, and ongoing Q&A desk." }
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
