import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Clock, CheckCircle } from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const ContactPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [submitted, setSubmitted] = useState(false);

  const offices = [
    { city: "New York (Global HQ)", address: "One World Trade Center, 74th Floor, New York, NY 10007", phone: "+1 (800) 555-BROS", hours: "24/5 Customer Desk" },
    { city: "London", address: "25 Bank Street, Canary Wharf, London E14 5JP", phone: "+44 (20) 7946 0912", hours: "24/5 Trading Desk" },
    { city: "Singapore", address: "Marina Bay Financial Centre Tower 1, Singapore 018981", phone: "+65 6789 0123", hours: "24/5 Asia Support" },
    { city: "Tokyo", address: "Roppongi Hills Mori Tower, Minato-ku, Tokyo 106-6108", phone: "+81 (3) 5555 0140", hours: "24/5 Japan Desk" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white dark:bg-[#090D14] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      <section className="relative bg-white dark:bg-[#090D14] text-slate-900 dark:text-white py-20 lg:py-24 border-b border-slate-200 dark:border-[#1E293B] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 text-xs font-semibold rounded-md border border-emerald-200 dark:border-emerald-500/20 font-mono">
            <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            24/5 GLOBAL CLIENT DESK
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 dark:text-white font-sans">
            Contact BrokerBros Institutional Desks Worldwide
          </h1>
          <p className="text-slate-700 dark:text-slate-300 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Our trade execution, client services, and prime brokerage specialists are available 24 hours a day, 5 days a week across major global financial hubs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50/80 dark:bg-[#0E1420] border-b border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-[#141C2B] p-8 rounded-xl border border-slate-200 dark:border-[#1E293B] shadow-xs space-y-6">
              <h2 className="text-2xl font-bold font-sans text-slate-900 dark:text-white">Send Us an Inquiry</h2>

              {submitted ? (
                <div className="p-6 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl border border-emerald-200 dark:border-emerald-500/20 text-emerald-900 dark:text-emerald-300 space-y-2 font-mono text-sm">
                  <div className="font-bold flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    Inquiry Received
                  </div>
                  <p>A BrokerBros client relationship manager will respond to your registered email address within 2 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                    <input required type="text" placeholder="e.g. Alexander Hamilton" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0E1420] border border-slate-300 dark:border-[#1E293B] text-slate-900 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">Business Email</label>
                    <input required type="email" placeholder="name@company.com" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0E1420] border border-slate-300 dark:border-[#1E293B] text-slate-900 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">Inquiry Topic</label>
                    <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0E1420] border border-slate-300 dark:border-[#1E293B] text-slate-900 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option>Individual Account Onboarding</option>
                      <option>Institutional & Prime Brokerage</option>
                      <option>API & FIX Gateway Access</option>
                      <option>Introducing Broker Program</option>
                      <option>General Support & Billing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">Message</label>
                    <textarea required rows={4} placeholder="How can our desk assist you today?" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0E1420] border border-slate-300 dark:border-[#1E293B] text-slate-900 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
                  </div>

                  <button type="submit" className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-lg transition-colors cursor-pointer">
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Global Offices */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-sans text-slate-900 dark:text-white">Global Office Locations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {offices.map((off, idx) => (
                  <div key={idx} className="bg-white dark:bg-[#141C2B] p-6 rounded-xl border border-slate-200 dark:border-[#1E293B] shadow-xs space-y-2">
                    <h3 className="text-lg font-bold font-sans text-slate-900 dark:text-white">{off.city}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300">{off.address}</p>
                    <div className="pt-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">{off.phone}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{off.hours}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
