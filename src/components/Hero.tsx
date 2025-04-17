
import React from 'react';
import { MoveRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#009EDB]/10 to-white pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,158,219,0.1)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block bg-[#009EDB]/10 text-[#009EDB] px-4 py-2 rounded-full text-sm mb-4 animate-pulse">
            Empowering Young Diplomats Since 2000
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Kenya Model United Nations
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            The PREMIER youth leadership platform producing excellent young diplomats for over 20 years, serving Kenya and the world through deliberative and value-based Diplomacy.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-[#009EDB] text-white px-8 py-3 rounded-md hover:bg-[#0082B3] transition-colors duration-300 group"
            >
              Learn More
              <MoveRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/leadership"
              className="inline-flex items-center gap-2 border border-[#009EDB] text-[#009EDB] px-8 py-3 rounded-md hover:bg-[#009EDB]/10 transition-colors duration-300"
            >
              Our Leadership
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
