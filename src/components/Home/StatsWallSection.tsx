import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, DollarSign, Globe2, TrendingUp, Shield, Zap } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 2400000,
    suffix: '+',
    display: '2.4M+',
    label: 'Active Accounts',
    sub: 'Retail & Institutional',
    color: 'text-emerald-400',
    glow: 'from-emerald-500/20 to-transparent',
  },
  {
    icon: DollarSign,
    value: 428,
    suffix: 'B',
    display: '$428B+',
    label: 'Assets Under Custody',
    sub: 'Fully Segregated & Insured',
    color: 'text-cyan-400',
    glow: 'from-cyan-500/20 to-transparent',
  },
  {
    icon: Globe2,
    value: 35,
    suffix: '',
    display: '35',
    label: 'Countries',
    sub: '150+ Global Exchanges',
    color: 'text-teal-400',
    glow: 'from-teal-500/20 to-transparent',
  },
  {
    icon: TrendingUp,
    value: 12.8,
    suffix: 'M+',
    display: '12.8M+',
    label: 'Orders Per Day',
    sub: '$480B+ Daily Volume',
    color: 'text-emerald-400',
    glow: 'from-emerald-500/20 to-transparent',
  },
  {
    icon: Zap,
    value: 1.2,
    suffix: 'ms',
    display: '1.2ms',
    label: 'Avg Execution Speed',
    sub: 'Colocated NY4 / LD4',
    color: 'text-yellow-400',
    glow: 'from-yellow-500/15 to-transparent',
  },
  {
    icon: Shield,
    value: 30,
    suffix: 'M',
    display: '$30M',
    label: 'Excess Insurance',
    sub: "SIPC + Lloyd's of London",
    color: 'text-cyan-400',
    glow: 'from-cyan-500/20 to-transparent',
  },
];

function AnimatedNumber({ target, suffix, display }: { target: number; suffix: string; display: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  const formatted = () => {
    if (target >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (Number.isInteger(target) && target < 1000) return count.toFixed(0);
    return count.toFixed(1);
  };

  return <span ref={ref}>{inView ? formatted() + suffix : '0' + suffix}</span>;
}

export const StatsWallSection: React.FC = () => {
  return (
    <section className="relative bg-slate-950 border-b border-slate-800 py-14 overflow-hidden font-sans">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(52,211,153,1) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-cyan-500/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-emerald-400 text-[11px] font-mono font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Audited Platform Statistics · Q2 2026
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-800">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.25, 1, 0.5, 1] }}
                className="relative bg-slate-950 p-6 flex flex-col items-center text-center gap-3 group hover:bg-slate-900 transition-colors duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-b ${stat.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className={`w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-4 h-4" />
                </div>

                <div className={`text-2xl sm:text-3xl font-black tracking-tight ${stat.color} font-mono`}>
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} display={stat.display} />
                </div>

                <div>
                  <div className="text-white font-bold text-xs sm:text-sm">{stat.label}</div>
                  <div className="text-slate-500 text-[10px] sm:text-xs mt-0.5">{stat.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
