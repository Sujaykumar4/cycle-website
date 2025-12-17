import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="w-full bg-dark py-24 overflow-hidden" id="gallery">
      {/* Marquee Container */}
      <div className="flex w-full overflow-hidden group">
        <div className="flex gap-6 animate-scroll shrink-0 whitespace-nowrap items-center px-3">
          {GALLERY_IMAGES.map((src, index) => (
            <GalleryItem key={`a-${index}`} src={src} index={index} />
          ))}
        </div>
        <div className="flex gap-6 animate-scroll shrink-0 whitespace-nowrap items-center px-3">
          {GALLERY_IMAGES.map((src, index) => (
            <GalleryItem key={`b-${index}`} src={src} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const GalleryItem: React.FC<{ src: string; index: number }> = ({ src, index }) => (
  <div
    className={`
      relative w-64 md:w-80 h-80 md:h-96 shrink-0 rounded-xl overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-105 hover:z-50 cursor-pointer
      ${index % 2 === 0 ? 'rotate-[-2deg] translate-y-4' : 'rotate-[2deg] -translate-y-4'}
    `}
  >
    <img src={src} alt={`Gallery ${index}`} className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110" />

    {/* Shine effect overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  </div>
);

export default Gallery;