import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const PlatformsFAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need to install any software to trade on BrokerBros Web Trader?",
      a: "No software download is required for Web Trader. It runs natively in any modern HTML5 web browser (Chrome, Safari, Edge, Firefox). Your custom workspace layouts, indicators, and watchlists automatically save to our secure cloud."
    },
    {
      q: "What are the hardware requirements for Desktop Pro multi-monitor workstation?",
      a: "Desktop Pro is optimized in native C++ for maximum graphics performance. For quad or octa-monitor setups, we recommend an Intel Core i7 / Apple M2 processor or better, 16GB RAM, and a dedicated GPU (NVIDIA RTX / AMD Radeon or Apple Silicon GPU)."
    },
    {
      q: "Can I test my trading strategies on a Paper Trading account before risking live capital?",
      a: "Yes! Every BrokerBros account includes a free $100,000 Paper Trading virtual portfolio with real-time market data feed simulation across Web, Desktop Pro, and Mobile interfaces."
    },
    {
      q: "How does SmartOrder Routing guarantee NBBO price improvement?",
      a: "Our proprietary SmartRouting™ engine continuously scans 15+ primary exchanges (NASDAQ, NYSE, ARCA, BATS) and dark pools in sub-milliseconds, automatically splitting and executing orders at the venue offering the best price fill."
    },
    {
      q: "What API protocols are available for algorithmic and automated trading?",
      a: "We support FIX 4.4 protocol for high-frequency direct exchange execution, alongside streaming REST and WebSockets APIs with official SDKs for Python, C++, C#, Java, and Node.js."
    },
    {
      q: "Are Level II Depth of Market data feeds included with active accounts?",
      a: "Yes. Active traders meeting minimum monthly volume thresholds receive complimentary real-time Level I and Level II Depth of Market data feeds across US Equities, Options, and Futures."
    },
    {
      q: "How does cross-device workspace cloud synchronization work?",
      a: "All chart drawings, watchlists, technical indicators, and order preferences sync automatically to your BrokerBros cloud profile in real time. Any change made on your Desktop Workstation immediately updates on your Mobile App and Web Trader."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>PLATFORM FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Everything you need to know about our trading platforms, infrastructure, and technical requirements.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className="font-serif-heading font-bold text-slate-900 text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'bg-emerald-600 text-white rotate-180' : 'bg-white text-slate-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
