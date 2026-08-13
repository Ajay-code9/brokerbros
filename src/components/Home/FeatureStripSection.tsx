import React from 'react';
import { Percent, Globe2, Cpu, ShieldCheck } from 'lucide-react';

export const FeatureStripSection: React.FC = () => {
  const features = [
    {
      imageSrc: '/Homepage/icon-one.webp',
      title: 'Institutional Pricing',
      description: 'Flat SaaS monthly module pricing, zero per-trade commissions or revenue share, and full spread control.',
    },
    {
      imageSrc: '/Homepage/icon-two.webp',
      title: 'Global Market Access',
      description: 'Pre-integrated connectivity across 150+ Tier-1 LPs, prime brokers, and exchanges in 35 countries.',
    },
    {
      imageSrc: '/Homepage/icon-three.webp',
      title: 'Turnkey Technology',
      description: 'White-label webtrader, branded iOS/Android apps, prop firm evaluation engine, and FIX 4.4/5.0 APIs.',
    },
    {
      imageSrc: '/Homepage/icon-four.webp',
      title: 'Capital & Security',
      description: 'ISO 27001 security standards, segregated client wallet architecture, and automated audit logs.',
    },
  ];

  return (
    <section className="bg-white dark:bg-[#090D14] border-b border-slate-200 dark:border-[#1E293B] py-10 sm:py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 group">
              <div className="shrink-0 flex items-center justify-center">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-20 h-20 object-contain dark:invert dark:brightness-200 group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight font-sans">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal font-sans max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
