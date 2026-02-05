import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#001F3F] text-white pt-24 pb-12 px-6 md:px-20">
      <div className="container mx-auto grid md:grid-cols-3 gap-20 border-b border-white/10 pb-20">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(0,123,255,0.5)]">
               <span className="text-[#001F3F] font-black text-3xl">V</span>
             </div>
             <h4 className="text-3xl font-black tracking-tighter uppercase italic">VINAYAK VENTURE</h4>
          </div>
          <p className="text-slate-400 font-medium leading-relaxed">
            TOTAL SOLUTIONS IN STRETCH FILM PACKAGING. <br />
            Protecting industrial loads with high-strength engineered solutions.
          </p>
        </div>

        <div className="space-y-10">
          <h5 className="text-xl font-black text-[#007BFF] uppercase tracking-widest">Contact Details</h5>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
               <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#007BFF] transition-colors">📞</div>
               <p className="text-2xl font-black group-hover:text-[#007BFF] transition-colors">+91 63547 68985</p>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
               <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#007BFF] transition-colors">📧</div>
               <p className="text-lg font-bold underline decoration-[#007BFF] decoration-2 underline-offset-8">info.vinayakventure@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <h5 className="text-xl font-black text-[#007BFF] uppercase tracking-widest">Headquarters</h5>
          <div className="flex items-start gap-4">
             <div className="text-2xl mt-1">📍</div>
             <p className="text-slate-300 font-bold leading-loose text-sm">
               491-C/19, Chandan Complex, <br />
               Opp. Himalaya Factory, G.I.D.C., <br />
               Makarpura, Vadodara-390010.
             </p>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-slate-500 font-black text-[10px] uppercase tracking-[0.5em]">
        © 2026 Vinayak Venture | Industrial Packaging Specialists | Serving Pan-India
      </div>
    </footer>
  );
};

export default Footer;