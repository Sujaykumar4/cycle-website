import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import oldBikeImg from '../src/images/oldbike.jpeg';

const UpgradeSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section className="w-full bg-dark py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="font-display text-5xl md:text-6xl italic uppercase leading-none">
          <span className="text-primary block mb-2">Upgrade</span>
          <span className="text-white">Old Bike</span>
        </h2>
        <p className="text-gray-400 mt-6 max-w-sm mx-auto text-sm">
          Upgrade your old bike and give your ride a fresh new life.
        </p>
      </div>

      <div
        className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#FDB871] to-[#E96D3B] select-none cursor-ew-resize touch-none"
        onMouseMove={handleMouseMove}
        onTouchMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.touches[0].clientX - rect.left;
          const percentage = (x / rect.width) * 100;
          setSliderPosition(Math.max(0, Math.min(100, percentage)));
        }}
      >

        {/* Layer 1: Blurred "Old" Bike (Background) */}
        <div className="absolute inset-0 z-0">
          <img
            src={oldBikeImg}
            alt="Old Bike Blurred"
            className="w-full h-full object-cover filter blur-sm grayscale-[30%] scale-105"
          />

        </div>

        {/* Layer 2: Sharp "New" Bike (Foreground) - Revealed by Clip Path */}
        <div
          className="absolute inset-0 z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={oldBikeImg}
            alt="New Bike Sharp"
            className="w-full h-full object-cover"
          />

        </div>

        {/* Vertical White Line */}
        <div
          className="absolute top-0 bottom-0 w-[4px] bg-white z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          style={{ left: `${sliderPosition}%` }}
        />

        {/* Center UI Element (Slider Handle) */}
        <div
          className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.4)] transition-transform hover:scale-110 cursor-ew-resize">
            <div className="flex gap-2 items-center text-dark">
              <ArrowLeft size={16} strokeWidth={3} />
              <ArrowRight size={16} strokeWidth={3} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UpgradeSection;
