import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Key,
  Server,
  Database,
  Globe,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Eye,
  EyeOff,
  UserCheck,
  FileCheck2,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const DataSecurityPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [maskedPreview, setMaskedPreview] = useState<boolean>(true);

  return (
    <div className="bg-slate-50 dark:bg-[#090D14] text-slate-900 dark:text-slate-100 min-h-screen font-sans transition-colors duration-300">

      {/* 1. HERO SECTION (100% ABOVE-THE-FOLD AT LANDING TIME WITH ENLARGED TEXT & BALANCED PADDING) */}
      <section className="relative min-h-[calc(100vh-90px)] flex flex-col justify-center py-6 sm:py-10 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1420]">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-5 my-auto w-full">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-800/50">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>BROKERBROS DATA SECURITY SERVICES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Data Security & Protection <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400">
              Guaranteed Brokerage Vault SLA
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            Data security and protection are paramount. BrokerBros fortifies your brokerage CRM, client phone numbers, and financial records with asymmetric RSA encryption, isolated dedicated vaults, and zero-trust IP allowlisting.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAccount}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-md shadow-emerald-600/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Security Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Integrated SLA Metric Card */}
          <div className="pt-3 max-w-xl mx-auto w-full">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
              <div className="text-left space-y-0.5">
                <div className="text-xs font-mono font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>DATA ENCRYPTION STANDARD</span>
                </div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Asymmetric RSA-2048 & Standalone Brand Vaults
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400 px-3.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                100% Vault
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CHRONOLOGICAL 4-STEP SECURITY & PROTECTION PROCESS */}
      <section className="py-14 sm:py-18 bg-white dark:bg-[#0E1420] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              <Lock className="w-4 h-4" />
              <span>STEP-BY-STEP DATA PROTECTION WORKFLOW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How BrokerBros Vault System Protects Your Data
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Simple 4-step security process from vault isolation to real-time compliance logging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 space-y-3 relative">
              <div className="w-9 h-9 rounded-xl font-mono font-bold flex items-center justify-center text-sm border bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                01
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-500" />
                <span>Isolated Vault Setup</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Deploy dedicated RSA-2048 encrypted database vault servers isolated from shared hardware.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 space-y-3 relative">
              <div className="w-9 h-9 rounded-xl font-mono font-bold flex items-center justify-center text-sm border bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
                02
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Lock className="w-4 h-4 text-blue-500" />
                <span>Field-Level Masking</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Automatically mask client phone numbers, emails, and balances across staff dashboards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 space-y-3 relative">
              <div className="w-9 h-9 rounded-xl font-mono font-bold flex items-center justify-center text-sm border bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20">
                03
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-500" />
                <span>Zero-Trust IP Firewall</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Enforce strict 2FA, biometric logins, zero-trust IP allowlisting, and WAF threat defense.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 space-y-3 relative">
              <div className="w-9 h-9 rounded-xl font-mono font-bold flex items-center justify-center text-sm border bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20">
                04
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-amber-500" />
                <span>Audit Logs & Alerts</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Track every staff database access attempt with real-time SOC alerts and tamper-proof logs.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 2. THREE PILLARS OF PROTECTION */}
      <section className="py-16 sm:py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Data Security and Protection as Top Priority
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              At BrokerBros, data security and protection are paramount. We implement stringent multi-layer controls ensuring your client records remain safe, un-tampered, and accessible only to authorized staff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#141C2B] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Multiple Layers of Protection</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Comprehensive Security: Our CRM system is fortified with defense-in-depth mechanisms, ensuring robust defense against potential internal and external threats.
              </p>
            </div>

            <div className="bg-white dark:bg-[#141C2B] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-500/20">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Ensuring Safety & Integrity</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Safeguarding Your Data: We prioritize the safety and integrity of your broker database, ensuring that it remains protected, encrypted, and untampered with.
              </p>
            </div>

            <div className="bg-white dark:bg-[#141C2B] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-500/20">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Users Personal Data Security</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Supreme Importance: We place supreme importance on protecting users' personal data, particularly phone numbers, emails, and KYC identity documents.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE BROKERBROS VAULT SYSTEM */}
      <section id="vault-architecture" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
              <Database className="w-3.5 h-3.5" />
              <span>ISOLATED BRAND STORAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              The BrokerBros Vault System — Dedicated Standalone Server Isolation
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We have developed the **BrokerBros Vault System** to decrypt sensitive fields (such as client phone numbers) hosted on dedicated stand-alone servers per customer brand. This ensures zero multi-tenant leakage and the highest security standards in financial software.
            </p>
          </div>

          {/* Interactive Vault Visualizer Mockup */}
          <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-emerald-400">BROKERBROS VAULT REPO: STANDALONE_NODE_UK_04</span>
              </div>
              <button
                onClick={() => setMaskedPreview(!maskedPreview)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono font-bold text-slate-200 border border-slate-700 flex items-center gap-2 cursor-pointer"
              >
                {maskedPreview ? <Eye className="w-3.5 h-3.5 text-emerald-400" /> : <EyeOff className="w-3.5 h-3.5 text-amber-400" />}
                <span>{maskedPreview ? "Simulate Authorized Agent Decryption" : "Simulate Role-Based Field Masking"}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Box 1: Phone Encryption Standard */}
              <div className="bg-[#0B111E] p-6 rounded-xl border border-slate-800/80 space-y-3 font-mono text-xs">
                <div className="text-slate-400 font-bold uppercase flex items-center justify-between">
                  <span>Client Data Record</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">RSA-2048 Asymmetric</span>
                </div>
                <div className="p-3 bg-slate-950 rounded border border-slate-800 space-y-2 text-[11px]">
                  <div><span className="text-slate-500">Client ID:</span> <span className="text-slate-300">BB-849201</span></div>
                  <div><span className="text-slate-500">Encrypted Phone:</span> <span className="text-emerald-400 font-semibold">{maskedPreview ? "RSA_ENC::8a9f39d02b... [ENCRYPTED]" : "+44 7911 123456"}</span></div>
                  <div><span className="text-slate-500">Agent Access Rule:</span> <span className="text-amber-400">Requires Permission Log</span></div>
                </div>
              </div>

              {/* Box 2: Vault Audit Log */}
              <div className="bg-[#0B111E] p-6 rounded-xl border border-slate-800/80 space-y-3 font-mono text-xs">
                <div className="text-slate-400 font-bold uppercase flex items-center justify-between">
                  <span>Real-Time Audit Log Entry</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Immutable Trail</span>
                </div>
                <div className="p-3 bg-slate-950 rounded border border-slate-800 space-y-1.5 text-[11px] text-slate-300">
                  <div className="text-emerald-400">[AUDIT] 14:08:22 UTC - IP 194.28.14.2 (Authorized)</div>
                  <div className="text-slate-400">Action: AGENT_REVEAL_PHONE | Target: BB-849201</div>
                  <div className="text-slate-500">Status: GRANTED | Vault Token: VLT-8492</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. GRANULAR ACCESS CONTROL & IP ALLOWLIST */}
      <section className="py-16 sm:py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-500/30">
                <UserCheck className="w-3.5 h-3.5" />
                <span>GRANULAR GOVERNANCE</span>
              </div>

              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Role-Based Access Control & IP-Based Allowlists
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                We enforce a stringent IP-based allow-list within our CRM, allowing access only to authorized office IPs while restricting unauthorized IPs from ever reaching the login page.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Role & Profile-Based Access</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Access to data within the CRM is strictly role-based, ensuring agents can only access fields pertinent to their role.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Customizable Field Concealing</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">We provide customizable options to conceal or reveal specific fields based on staff roles, with field-level editing permissions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Permission-Based Actions</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Agents must obtain explicit permission before accessing personal data, with each view recorded for accountability.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card Feature Box */}
            <div className="bg-white dark:bg-[#141C2B] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-emerald-500" />
                <span>Audit Logs for Transparent Access</span>
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Our CRM system maintains detailed audit logs to track data and agents' actions, ensuring transparency and accountability. This proactive approach enables us to detect and address any unauthorized access or suspicious activities swiftly.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E1420] border border-slate-200 dark:border-slate-800 space-y-2 font-mono text-[11px]">
                <div className="text-emerald-600 dark:text-emerald-400 font-bold">ALLOWLIST FIREWALL: ACTIVE</div>
                <div className="text-slate-500">Allowed IP Block: 194.28.14.0/24 (London HQs)</div>
                <div className="text-slate-500">Blocked External IP: 185.220.101.4 (Rejected 403)</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CLOUD HOSTING & THREAT DEFENSE */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-[#090D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Hosting Environment & Advanced Protection
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              BrokerBros relies on reputable cloud infrastructure and AI-driven security defenses to keep your platform online 24/7/365.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white dark:bg-[#141C2B] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Reputable Cloud Servers</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Hosted on reputable and secure GCP (Google Cloud Platform) and AWS (Amazon Web Services) datacenters, ensuring 99.999% uptime and reliability.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-[#141C2B] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Google reCAPTCHA Enterprise</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Integrated Machine Learning (ML) and Artificial Intelligence (AI) components to safeguard your website from scraping, credential stuffing, and automated bot accounts.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-[#141C2B] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Web Application Firewall (WAF)</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Integrated ReBlaze WAF and Cloudflare Anti-DDoS protection fortifying your brokerage defenses against high-capacity volumetric DDoS online threats.
              </p>
            </div>

          </div>

          {/* Commitment Summary Box */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white space-y-4 text-center max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl font-extrabold">Our Uncompromising Commitment to Data Security</h3>
            <p className="text-sm leading-relaxed text-emerald-50 font-medium">
              BrokerBros is committed to delivering the highest security and protection for our client's data. We continuously strive to maintain our clients' trust and confidence by upholding the most stringent security standards, protocols, and audit logs.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenAccount}
                className="px-8 py-3.5 bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm rounded-xl shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Book a Dedicated Security Consultation</span>
                <ArrowRight className="w-4 h-4 text-emerald-600" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection variant="light" onOpenAccount={onOpenAccount} />

    </div>
  );
};
