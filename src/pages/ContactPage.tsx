import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send, ShieldCheck, Globe, Building2 } from 'lucide-react';

interface PageProps {
  onOpenAccount: () => void;
}

export const ContactPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [submitted, setSubmitted] = useState(false);

  const offices = [
    { city: "New York (Global HQ)", address: "One World Trade Center, 74th Floor, NY 10007", phone: "+1 (800) 555-BROS" },
    { city: "London", address: "25 Bank Street, Canary Wharf, London E14 5JP", phone: "+44 (20) 7946 0912" },
    { city: "Singapore", address: "Marina Bay Financial Centre Tower 1, Singapore 018981", phone: "+65 6789 0123" },
    { city: "Tokyo", address: "Roppongi Hills Mori Tower, Minato-ku, Tokyo 106-6108", phone: "+81 (3) 5555 0140" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white dark:bg-[#090D14] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans min-h-[calc(100vh-90px)] flex flex-col justify-center py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 my-auto w-full">
        
        {/* 1. Header (Compact & Crisp) */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>24/5 GLOBAL CLIENT & DESK SUPPORT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get in Touch With BrokerBros
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-medium">
            Reach our trade execution desks, client services team, or institutional specialists directly 24 hours a day, 5 days a week.
          </p>
        </div>

        {/* 2. Direct 2-Column Landing Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Contact Cards & Offices Grid */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Quick Contact Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#141C2B] border border-slate-200 dark:border-slate-800 space-y-1">
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <div className="text-xs font-bold text-slate-900 dark:text-white">Direct Desk</div>
                <div className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-bold">+1 (800) 555-BROS</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#141C2B] border border-slate-200 dark:border-slate-800 space-y-1">
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <div className="text-xs font-bold text-slate-900 dark:text-white">Support Email</div>
                <div className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-bold">support@brokerbros.com</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#141C2B] border border-slate-200 dark:border-slate-800 space-y-1">
                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <div className="text-xs font-bold text-slate-900 dark:text-white">Desk Hours</div>
                <div className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-bold">24 Hours / 5 Days</div>
              </div>
            </div>

            {/* Global Offices 2x2 Grid */}
            <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-[#0E1420] border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>GLOBAL OFFICE LOCATIONS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {offices.map((off, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-[#141C2B] border border-slate-200 dark:border-slate-800 space-y-1">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">{off.city}</h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">{off.address}</p>
                    <div className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 pt-0.5">{off.phone}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-6 bg-white dark:bg-[#141C2B] p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Send Us an Inquiry</h2>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800/50">
                Avg Response: &lt; 2 Hours
              </span>
            </div>

            {submitted ? (
              <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-400 space-y-2 text-xs font-medium">
                <div className="font-bold text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Inquiry Submitted Successfully!</span>
                </div>
                <p>A BrokerBros specialist will get back to your business email within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Alexander Hamilton" 
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0E1420] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl text-xs focus:outline-none focus:border-emerald-500 font-medium" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">Business Email</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="name@company.com" 
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0E1420] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl text-xs focus:outline-none focus:border-emerald-500 font-medium" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">Topic</label>
                  <select className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0E1420] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl text-xs focus:outline-none focus:border-emerald-500 font-medium">
                    <option>Individual Account Onboarding</option>
                    <option>Institutional & Prime Brokerage</option>
                    <option>API & FIX Gateway Access</option>
                    <option>White-Label Broker CRM</option>
                    <option>Introducing Broker Program</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea 
                    required 
                    rows={3} 
                    placeholder="How can our desk assist your trading today?" 
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0E1420] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl text-xs focus:outline-none focus:border-emerald-500 font-medium resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
