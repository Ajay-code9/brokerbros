import React, { useState } from 'react';
import { Calendar, Filter, Globe, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const EconomicCalendarPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const events = [
    { time: "08:30 EST", country: "US", event: "Core CPI (MoM)", forecast: "0.2%", previous: "0.3%", impact: "HIGH" },
    { time: "10:00 EST", country: "US", event: "ISM Manufacturing PMI", forecast: "49.5", previous: "48.8", impact: "MEDIUM" },
    { time: "14:00 EST", country: "US", event: "FOMC Meeting Minutes", forecast: "-", previous: "-", impact: "HIGH" },
    { time: "02:00 EST", country: "UK", event: "GDP (YoY)", forecast: "0.7%", previous: "0.5%", impact: "HIGH" },
    { time: "05:00 EST", country: "EU", event: "ECB Interest Rate Decision", forecast: "3.75%", previous: "4.00%", impact: "HIGH" },
    { time: "23:30 EST", country: "JP", event: "Tokyo CPI (YoY)", forecast: "2.2%", previous: "2.1%", impact: "MEDIUM" }
  ];

  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200 font-mono">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            LIVE ECONOMIC CALENDAR
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            Real-Time Global Macro Economic Calendar
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Track high-impact central bank announcements, non-farm payrolls, inflation CPI data, and global GDP releases as they happen.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700 text-xs font-mono uppercase border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-6">Time (EST)</th>
                  <th className="py-3.5 px-4">Country</th>
                  <th className="py-3.5 px-6">Economic Event</th>
                  <th className="py-3.5 px-4">Forecast</th>
                  <th className="py-3.5 px-4">Previous</th>
                  <th className="py-3.5 px-6 text-right">Vol Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
                {events.map((e, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-4 px-6 text-slate-500 font-bold">{e.time}</td>
                    <td className="py-4 px-4 font-bold text-slate-900">{e.country}</td>
                    <td className="py-4 px-6 font-sans font-bold text-slate-900 text-sm">{e.event}</td>
                    <td className="py-4 px-4 text-emerald-700 font-bold">{e.forecast}</td>
                    <td className="py-4 px-4 text-slate-500">{e.previous}</td>
                    <td className="py-4 px-6 text-right">
                      <span className={`px-2.5 py-1 rounded font-bold text-[10px] ${e.impact === 'HIGH' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'}`}>
                        {e.impact}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection variant="light" onOpenAccount={onOpenAccount} />
    </div>
  );
};
