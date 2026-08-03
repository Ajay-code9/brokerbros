import React from 'react';
import { Activity, Zap, Server, Globe, Users, ShieldCheck } from 'lucide-react';

export const PlatformPerformanceMetrics: React.FC = () => {
  const metrics = [
    {
      value: "99.999%",
      label: "System Availability SLA",
      subtext: "Guaranteed core trading engine uptime with redundant hardware failover",
      icon: ShieldCheck
    },
    {
      value: "< 3.8ms",
      label: "Average Order Execution",
      subtext: "Sub-millisecond fiber routing directly to primary exchange matching engines",
      icon: Zap
    },
    {
      value: "4.2M+",
      label: "Daily Executed Orders",
      subtext: "Processed across global equities, options, futures, and currency markets",
      icon: Activity
    },
    {
      value: "18 Hubs",
      label: "Global Server Locations",
      subtext: "Co-located infrastructure in Equinix NY4, LD4, TY3, and SG1 data hubs",
      icon: Server
    },
    {
      value: "150+",
      label: "Market Centers Supported",
      subtext: "Direct market access to North America, Europe, Asia-Pacific, & Emerging markets",
      icon: Globe
    },
    {
      value: "850,000+",
      label: "Active Platform Traders",
      subtext: "Trusted by active retail investors, family offices, and quantitative funds",
      icon: Users
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-emerald-600" />
            <span>ENTERPRISE PERFORMANCE METRICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight">
            Engineered for Uncompromising Scale
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Real-time operating benchmarks demonstrating our industry-leading technology performance.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((m, idx) => {
            const IconComp = m.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl p-8 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-500/50 transition-all duration-300 space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 border border-slate-200 flex items-center justify-center font-bold group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-700 tracking-tight">
                    {m.value}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-serif-heading">
                    {m.label}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-sans">
                    {m.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
