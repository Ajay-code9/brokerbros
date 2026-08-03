import React from 'react';

interface VideoHeroBackgroundProps {
  videoSrc: string;
  opacity?: number;
  theme?: 'light' | 'dark';
}

export const VideoHeroBackground: React.FC<VideoHeroBackgroundProps> = ({
  videoSrc,
  opacity = 0.6,
  theme = 'light'
}) => {
  const isLight = theme === 'light';

  return (
    <>
      {/* Background Video Element */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-105 contrast-125 transition-opacity duration-700`}
        style={{ opacity }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Layered Gradient Overlays for Readability */}
      {isLight ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/70 pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80 pointer-events-none" />
        </>
      )}
    </>
  );
};
