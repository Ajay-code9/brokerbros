import React, { useState, useRef } from 'react';
import { Play, Pause, X, CheckCircle2, Volume2, VolumeX } from 'lucide-react';

interface VideoChapter {
  time: string;
  title: string;
}

interface ProductVideoSectionProps {
  title?: string;
  subtitle?: string;
  videoSrc?: string;
  posterSrc?: string;
  chapters?: VideoChapter[];
}

export const ProductVideoSection: React.FC<ProductVideoSectionProps> = ({
  title = 'Product Video Walkthrough',
  subtitle = 'Watch how our institutional platform powers real-time execution, admin management, and automated client workflows.',
  videoSrc = '/test.mp4',
  posterSrc = '/broker-crm-img-one.webp',
  chapters = [
    { time: '0:00', title: 'Platform Overview & Architecture' },
    { time: '1:15', title: 'Live Client & Admin Workspace' },
    { time: '2:40', title: 'Real-Time Risk & Execution Controls' },
    { time: '4:10', title: 'Automated Workflows & Reporting' },
  ]
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="py-16 border-b border-slate-200 dark:border-[#1E293B] bg-slate-50/80 dark:bg-[#0E1420] relative overflow-hidden font-sans transition-colors duration-300">
      {/* Background subtle radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Video Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#141C2B] shadow-2xl group">
            
            {/* Video Container (Hover to Play) */}
            <div 
              className="relative aspect-video w-full bg-slate-950 overflow-hidden cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setModalOpen(true)}
            >
              <video
                ref={videoRef}
                src={videoSrc}
                poster={posterSrc}
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Center Play/Pause overlay button on hover */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-250 ${
                  isHovered || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white flex items-center justify-center transition-all duration-200 shadow-[0_0_25px_rgba(16,185,129,0.4)] border border-emerald-400/40 cursor-pointer"
                  title={isPlaying ? 'Pause Video' : 'Play Video'}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 fill-current" />
                  ) : (
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Video Chapters Footer */}
            <div className="p-3.5 bg-white dark:bg-[#0E1420] border-t border-slate-200 dark:border-[#1E293B] grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {chapters.map((chap, i) => (
                <button
                  key={i}
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-[#1B2538] transition-colors text-left group/chap cursor-pointer border border-slate-200 dark:border-[#1E293B]"
                >
                  <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20 flex-shrink-0">
                    {chap.time}
                  </span>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300 group-hover/chap:text-emerald-600 dark:group-hover/chap:text-emerald-400 transition-colors line-clamp-1">
                    {chap.title}
                  </span>
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Video Modal Lightbox */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-5xl bg-[#121520] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
            
            {/* Modal Header */}
            <div className="px-6 py-3.5 border-b border-slate-800 flex items-center justify-between bg-[#0a0a0a]">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <h4 className="text-sm font-bold text-white tracking-wide">{title} — Fullscreen Walkthrough</h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                src={videoSrc}
                controls
                autoPlay
                muted={isMuted}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
