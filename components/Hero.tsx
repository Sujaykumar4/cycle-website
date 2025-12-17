import React from "react";
import heroSection from "../src/images/hero section.jpeg";
import hero2 from "../src/images/hero2.jpeg";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[110vh] min-h-[700px] overflow-hidden bg-black text-white">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSection}
          alt="Hero Bike Background"
          className="w-full h-full object-cover object-[45%_center] lg:object-center transform translate-y-20"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full">

        {/* Title Section - Top Left */}
        <div className="absolute top-[15%] left-[6%] lg:top-[12%] lg:left-[11%]">
          <div className="flex items-center gap-3 mb-3 justify-start lg:justify-end">
            <div className="h-[2px] w-16 lg:w-32 bg-white"></div>
            <h3 className="uppercase font-extrabold text-xs lg:text-sm tracking-[0.2em] lg:tracking-[0.3em] text-white whitespace-nowrap">
              Let's Ride The
            </h3>
          </div>

          <h1 className="font-display italic font-black text-white text-[42px] md:text-[50px] lg:text-[70px] leading-none tracking-wide drop-shadow-2xl ml-2 lg:ml-24">
            ADVANTURE
          </h1>
        </div>

        {/* Feature Dots */}
        {/* Seat Dot - Top Right */}
        <div className="hidden lg:flex absolute top-[28%] right-[12%] items-center gap-4">
          <div className="w-5 h-5 rounded-full bg-white border-[4px] border-[#ff6b35]"></div>
          <div className="w-40 h-[2px] bg-white"></div>
          <div className="uppercase font-bold text-xs tracking-[0.3em] whitespace-nowrap">Protection</div>
        </div>

        {/* Frame Dot - Center */}
        <div className="hidden lg:block absolute top-[54%] left-[60.2%]">
          <div className="w-5 h-5 rounded-full bg-white border-[4px] border-[#ff6b35]"></div>
        </div>

        {/* Wheels Dot - Bottom Right */}
        <div className="hidden lg:block absolute bottom-[26.5%] right-[26%]">
          <div className="w-5 h-5 rounded-full bg-white border-[4px] border-[#ff6b35]"></div>
        </div>

        {/* Mobile: Hidden / Desktop: Bottom Right Text */}
        <div className="hidden lg:block absolute bottom-[9%] right-[5%] text-left z-20">
          <h4 className="uppercase font-extrabold text-lg tracking-tight mb-2 text-white">
            Since It's More
          </h4>
          <p className="text-orange-300 text-sm leading-relaxed font-semibold">
            In general, mountain bike<br />
            provide more significant<br />
            protection.
          </p>
        </div>

        {/* Bottom Feature Card */}
        <div className="absolute bottom-[5%] left-[5%] right-[5%] lg:bottom-[8%] lg:left-[4%] lg:right-auto lg:w-auto z-20">
          <div className="bg-black/70 backdrop-blur-sm border border-white/20 px-4 py-4 lg:px-6 lg:py-5 rounded-lg flex items-start gap-3 lg:gap-4 max-w-full lg:max-w-[340px]">
            <img
              src={hero2}
              alt="Cyclist thumb"
              className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] rounded-md object-cover border border-white/20 flex-shrink-0"
            />
            <div>
              <h4 className="uppercase font-extrabold text-sm lg:text-base tracking-tight leading-tight text-white">
                High-Quality
              </h4>
              <h4 className="uppercase font-extrabold text-sm lg:text-base tracking-tight leading-tight text-white mb-2">
                Materials ----
              </h4>
              <p className="text-gray-300 text-[10px] lg:text-xs leading-relaxed">
                Premium materials and<br />
                advanced build for<br />
                lasting durability.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;