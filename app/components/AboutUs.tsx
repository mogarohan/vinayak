import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-6 md:px-20">
        
        {/* SECTION 1: WHO WE ARE (PDF Page 2) */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="relative order-2 lg:order-1 group">
            <div className="absolute -inset-6 bg-[#007BFF]/5 rounded-[4rem] -rotate-2 group-hover:rotate-0 transition-all duration-1000"></div>
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200" 
              alt="Vinayak Venture Warehouse" 
              className="relative z-10 rounded-[3rem] shadow-2xl grayscale-[30%] hover:grayscale-0 transition-all duration-700 object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-12 -right-12 z-20 bg-[#001F3F] text-white p-10 rounded-[2.5rem] shadow-2xl hidden xl:block">
              <div className="text-5xl font-black text-[#007BFF] mb-1 italic">100%</div>
              <p className="text-xs font-black tracking-[0.3em] uppercase opacity-80 leading-tight">
                Quality Checked <br /> Performance
              </p>
            </div>
          </div>

          <div className="space-y-10 order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 py-2 px-5 bg-blue-50 border border-blue-100 rounded-full">
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#007BFF]"></span>
               </span>
               <span className="text-[#007BFF] font-black uppercase tracking-[0.2em] text-[11px]">Industrial Excellence</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#001F3F] leading-[0.9] tracking-tighter">
              WHO WE <br /><span className="text-[#007BFF] italic underline decoration-slate-200">REALLY</span> ARE
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed font-semibold">
              Vinayak Venture is a <span className="text-[#001F3F]">Professional supplier</span> of Industrial Stretch Film Packaging Solutions, supporting businesses with products built for strength, consistency, and efficiency.
            </p>
            <div className="space-y-6">
               <p className="text-lg text-slate-600 leading-relaxed italic border-l-[6px] border-[#007BFF] pl-8 bg-white py-10 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.05)] rounded-r-[2rem]">
                 "Our focus is on dependable sourcing and Performance-Driven materials that help protect goods during handling, storage, and transportation."
               </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: SUPPLY CAPABILITY & MARKET (PDF Page 3) */}
        <div className="mb-40">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-[#001F3F] rounded-[4rem] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#007BFF]/10 rounded-full blur-[120px] -mr-48 -mt-48 transition-all group-hover:bg-[#007BFF]/20"></div>
              <h3 className="text-4xl font-black mb-12 border-b border-white/10 pb-6 uppercase italic tracking-tighter">
                Supply <span className="text-[#007BFF]">Capability</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                {[
                  { t: "Reliable Sourcing", d: "Consistent material sourcing for every batch." },
                  { t: "Grade Standards", d: "Maintaining industrial-grade stretch film standards." },
                  { t: "Bulk Support", d: "Fully equipped for high-volume bulk supply." },
                  { t: "Performance", d: "Quality-checked performance for every roll." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group/item">
                    <div className="w-12 h-12 bg-[#007BFF] rounded-2xl flex items-center justify-center font-black shrink-0 shadow-lg group-hover/item:rotate-12 transition-transform">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-1">{item.t}</h4>
                      <p className="text-slate-400 text-sm font-medium leading-snug">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex-1 bg-white p-12 rounded-[4rem] shadow-xl border border-slate-100 flex flex-col justify-center group hover:border-[#007BFF]/30 transition-all">
                 <p className="text-[#007BFF] font-black text-xs tracking-[0.4em] uppercase mb-4">Market Presence</p>
                 <h3 className="text-4xl font-black text-[#001F3F] leading-tight mb-4 uppercase">
                   PAN-INDIA <br /><span className="text-slate-300 italic">NETWORK</span>
                 </h3>
                 <p className="text-slate-500 font-bold leading-relaxed">
                   Serving major sectors including Logistics, Warehousing, and Manufacturing.
                 </p>
              </div>
              <div className="h-48 rounded-[4rem] overflow-hidden shadow-xl relative group">
                 <img 
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" 
                  alt="Industrial Stretch Film" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] to-transparent opacity-70"></div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: STRENGTHS (PDF Page 4) - IMPROVED CARDS */}
        <div className="text-center mb-24">
          <h2 className="text-6xl font-black text-[#001F3F] tracking-tighter uppercase leading-none">
            OUR <span className="text-[#007BFF] italic underline decoration-slate-200 decoration-8 underline-offset-[12px]">STRENGTHS</span>
          </h2>
          <p className="text-slate-400 font-black mt-8 italic tracking-[0.3em] uppercase text-sm">Engineered for your peace of mind</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            { t: "High-Strength Films", d: "Designed for the most demanding applications." },
            { t: "Consistent Wrapping", d: "Predictable performance in every application." },
            { t: "Transparent Pricing", d: "Competitive and clear pricing structures." },
            { t: "24/7 Timely Support", d: "Uninterrupted supply chain and timely delivery." },
            { t: "Professional Approach", d: "Built on long-term professional relationships." }
          ].map((s, i) => (
            <div key={i} className="group relative p-12 bg-white rounded-[3.5rem] shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,123,255,0.15)] transition-all duration-500 border border-slate-100 hover:-translate-y-4 flex flex-col justify-between h-[320px]">
              <div className="absolute top-10 right-10 text-7xl font-black text-slate-50 group-hover:text-blue-50/50 transition-colors pointer-events-none">
                0{i+1}
              </div>
              <div className="w-16 h-16 bg-blue-50 rounded-[1.5rem] flex items-center justify-center group-hover:bg-[#007BFF] transition-all duration-500 shadow-inner">
                <span className="text-[#007BFF] group-hover:text-white font-black text-2xl tracking-tighter italic">V</span>
              </div>
              <div className="relative z-10">
                <h4 className="text-[#001F3F] font-black text-2xl leading-tight mb-3 uppercase tracking-tighter">{s.t}</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
          
          {/* Static CTA Card */}
          <div className="p-12 bg-gradient-to-br from-[#001F3F] to-[#000a14] rounded-[3.5rem] shadow-2xl flex flex-col justify-center text-center group cursor-pointer hover:scale-[0.98] transition-transform">
             <div className="w-12 h-1 bg-[#007BFF] mx-auto mb-6 rounded-full"></div>
             <p className="text-white font-black text-3xl italic tracking-tighter uppercase leading-none mb-4">
               Dependable <br /> Protection
             </p>
             <p className="text-[#007BFF] font-bold text-xs tracking-widest uppercase">Since Day One</p>
          </div>
        </div>
        
        {/* FINAL QUOTE (PDF Page 4 Quote) */}
        <div className="relative py-20 border-t border-slate-200 mt-20">
          <div className="text-center relative z-10">
            <p className="text-3xl md:text-6xl font-black italic text-[#001F3F] tracking-tighter leading-tight max-w-5xl mx-auto">
              "High-strength stretch films <br /> you can <span className="text-[#007BFF] underline decoration-blue-100 decoration-8 underline-offset-4">depend on</span>."
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-serif text-slate-100/50 select-none z-0 tracking-tighter italic">
            Quality
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;