import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#000D1A] text-white shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-50 py-1 px-6 md:px-16 flex justify-between items-center border-b border-blue-900/40">
      
      {/* LEFT SIDE: LOGO - Large & Clear */}
      <div className="relative w-36 h-24 md:w-48 md:h-28 flex items-center justify-start group cursor-pointer overflow-visible">
        <img 
          src="/logo.png" 
          alt="Vinayak Venture Logo" 
          className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* RIGHT SIDE: PAGES/LINKS - Increased Font Size */}
      <div className="hidden md:flex items-center space-x-12 text-[13px] font-extrabold uppercase tracking-[0.15em]">
        <a href="#home" className="hover:text-[#007BFF] transition-all border-b-2 border-transparent hover:border-[#007BFF] pb-1">
          Home
        </a>
        <a href="#about" className="hover:text-[#007BFF] transition-all border-b-2 border-transparent hover:border-[#007BFF] pb-1">
          About Us
        </a>
        <a href="#products" className="hover:text-[#007BFF] transition-all border-b-2 border-transparent hover:border-[#007BFF] pb-1">
          Products & Specs
        </a>
        
        {/* Contact Us - Bigger Button Text */}
        <a 
          href="#contact" 
          className="bg-[#007BFF] hover:bg-blue-600 text-white px-10 py-4 rounded-full shadow-[0_0_25px_rgba(0,123,255,0.4)] transition-all transform hover:scale-105 active:scale-95 border border-white/10 text-[14px] font-black"
        >
          Contact Us
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-[#007BFF]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>

    </nav>
  );
};

export default Navbar;