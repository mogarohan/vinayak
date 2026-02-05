"use client";
import React, { useState, useEffect } from 'react';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000',
    title: 'PROTECTION IN EVERY LAYER',
    subtitle: 'VINAYAK VENTURE',
    desc: 'Industrial-grade stretch film solutions designed for secure wrapping, load stability, and dependable protection during transit and storage.'
  },
  {
    url: 'https://images.unsplash.com/photo-1587293855926-7067302943e7?q=80&w=2000',
    title: 'ENGINEERED RELIABILITY',
    subtitle: 'QUALITY YOU CAN TRUST',
    desc: 'Supporting businesses with products built for strength, consistency, and efficiency in every stretch.'
  },
  {
    url: 'https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=2000',
    title: 'PAN-INDIA SUPPLY NETWORK',
    subtitle: 'GLOBAL STANDARDS',
    desc: 'Serving major sectors including Logistics, Warehousing, and Manufacturing with reliable material sourcing.'
  },
  {
    url: 'https://images.unsplash.com/photo-1512413316925-fd47914c9c22?q=80&w=2000',
    title: 'STRENGTH & STABILITY',
    subtitle: 'HEAVY-DUTY SOLUTIONS',
    desc: 'High-performance stretch films with load holding capacity up to 2600 lbs for demanding industrial applications.'
  }
];

const Hero: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, i) => (
        <div 
          key={i} 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === active ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0,31,63,0.7), rgba(0,31,63,0.85)), url(${slide.url})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        />
      ))}

      {/* Main Content - Adjusted for better vertical balance */}
      <div className="relative z-10 text-center px-6 max-w-4xl mt-12 md:mt-20">
        <div className="mb-4 inline-block py-1.5 px-5 border border-blue-400/30 bg-blue-900/40 backdrop-blur-md rounded-full shadow-xl">
            <span className="text-blue-300 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">
                {slides[active].subtitle}
            </span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9] drop-shadow-2xl italic">
          {slides[active].title}
        </h1>

        <p className="text-base md:text-lg text-blue-50/80 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
          {slides[active].desc}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-[#007BFF] hover:bg-blue-600 text-white px-10 py-3.5 rounded-full font-black uppercase tracking-widest shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 text-sm"
          >
            Contact Us
          </a>
          <a 
            href="#products" 
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-3.5 rounded-full font-black uppercase tracking-widest transition-all hover:border-blue-400 text-sm"
          >
            Technical Specs
          </a>
        </div>
      </div>

      {/* Modern Slider Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`transition-all duration-500 rounded-full ${
              i === active ? 'w-10 h-1.5 bg-blue-500' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;