import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
}

interface ProductGallerySectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  categories?: string[];
  items?: GalleryItem[];
}

export const ProductGallerySection: React.FC<ProductGallerySectionProps> = ({
  title = 'Product Interface Gallery',
  subtitle = 'Explore high-resolution screenshots of the client portal, admin backoffice, risk desk, and analytics workstation.',
  categories = ['All Screenshots', 'Overview', 'Client Portal', 'Admin Desk', 'Analytics'],
  items = [
    {
      id: '1',
      title: 'Main Operations Dashboard',
      category: 'Overview',
      imageSrc: '/broker-crm-img-one.webp',
      description: 'Real-time overview of active clients, daily volume, pending KYC requests, and key financial performance indicators.'
    },
    {
      id: '2',
      title: 'White-Label Client Portal',
      category: 'Client Portal',
      imageSrc: '/copy-pamm-showcase.webp',
      description: 'Mobile-responsive client portal allowing traders to deposit, manage accounts, submit documents, and view trading logs.'
    },
    {
      id: '3',
      title: 'Risk & Dealing Operations',
      category: 'Admin Desk',
      imageSrc: '/fix-bridge-showcase.webp',
      description: 'Granular A/B book routing controls, live market exposure monitors, and automated margin warning triggers.'
    },
    {
      id: '4',
      title: 'Performance & Revenue Analytics',
      category: 'Analytics',
      imageSrc: '/pricing-showcase.webp',
      description: 'Comprehensive business intelligence reports tracking LTV, cohort retention, deposit channels, and referral rebates.'
    },
    {
      id: '5',
      title: 'Multi-Terminal Desktop Suite',
      category: 'Overview',
      imageSrc: '/desktop-terminal.webp',
      description: 'Multi-monitor desktop workstation interface designed for high-volume institutional traders and prop firm managers.'
    },
    {
      id: '6',
      title: 'Mobile Web App Experience',
      category: 'Client Portal',
      imageSrc: '/web-mobile-app.webp',
      description: 'Fast, native-feeling progressive web app interface for on-the-go account management and instant deposits.'
    }
  ]
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Screenshots');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All Screenshots'
    ? items
    : items.filter(item => item.category === activeCategory);

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(selectedImageIndex === 0 ? filteredItems.length - 1 : selectedImageIndex - 1);
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(selectedImageIndex === filteredItems.length - 1 ? 0 : selectedImageIndex + 1);
  };

  return (
    <section className="py-20 border-b border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#090D14] relative overflow-hidden font-sans transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                  : 'bg-slate-50 dark:bg-[#141C2B] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-[#1E293B] hover:border-emerald-500/40 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative bg-white dark:bg-[#141C2B] border border-slate-200 dark:border-[#1E293B] rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
            >
              {/* Image Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 border border-emerald-400/30">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono font-bold text-emerald-400 border border-slate-800 uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              {/* Title & Description */}
              <div className="p-4 sm:p-5 space-y-1.5 bg-white dark:bg-[#141C2B]">
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Fullscreen Gallery Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-5xl bg-[#121520] border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Modal Top Bar */}
            <div className="px-6 py-3.5 border-b border-slate-800 flex items-center justify-between bg-[#0a0a0a]">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 border border-emerald-900 px-2 py-0.5 rounded">
                  {filteredItems[selectedImageIndex].category}
                </span>
                <h4 className="text-sm font-bold text-white">
                  {filteredItems[selectedImageIndex].title} ({selectedImageIndex + 1} of {filteredItems.length})
                </h4>
              </div>
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative flex-1 bg-black flex items-center justify-center p-4 min-h-[350px] overflow-hidden">
              <img
                src={filteredItems[selectedImageIndex].imageSrc}
                alt={filteredItems[selectedImageIndex].title}
                className="max-h-[60vh] w-auto max-w-full object-contain rounded shadow-xl"
              />

              {/* Prev / Next buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/90 hover:bg-emerald-600 text-white border border-slate-700 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/90 hover:bg-emerald-600 text-white border border-slate-700 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Caption Footer */}
            <div className="p-4 bg-[#0a0a0a] border-t border-slate-800 text-center">
              <p className="text-xs text-slate-300 max-w-2xl mx-auto">
                {filteredItems[selectedImageIndex].description}
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
