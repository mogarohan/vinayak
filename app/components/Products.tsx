import React from 'react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-20">
        
        {/* SECTION 1: PRODUCT VISION (Page 5 & 6 Barikiyaan) */}
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-5xl md:text-7xl font-black text-[#001F3F] tracking-tighter uppercase leading-none">
            ENGINEERED <span className="text-[#007BFF] italic">SOLUTIONS</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-semibold leading-relaxed">
            Our stretch films are not just wraps; they are engineered layers designed to provide 
            <span className="text-[#001F3F]"> maximum load stability</span> and surface protection for 
            demanding industrial environments.
          </p>
          <div className="h-2 w-48 bg-gradient-to-r from-[#007BFF] to-transparent mx-auto rounded-full"></div>
        </div>

        {/* SECTION 2: THE COMPLETE RANGE (Page 5, 6 & 8 Word-to-Word) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {[
            { 
              title: "Machine Stretch Film", 
              desc: "Engineered for high-speed automatic wrapping machines. Provides superior puncture resistance and consistent performance for high-volume operations.",
              img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800" 
            },
            { 
              title: "Hand Stretch Film", 
              desc: "Premium quality film for manual application. Offers excellent cling and ease of use for flexible wrapping needs across various load types.",
              img: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800" 
            },
            { 
              title: "Vented Stretch Film", 
              desc: "Best for pharmaceutical and fresh produce loads requiring airflow to prevent condensation and maintain product integrity.",
              img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800" 
            },
            { 
              title: "Colored Stretch Film", 
              desc: "Available in multiple shades for load identification, inventory coding, and tamper evidence while maintaining industrial strength.",
              img: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=800" 
            },
            { 
              title: "Extended Core Film", 
              desc: "Features a built-in handle for easy manual application, removing the need for separate dispensers and increasing efficiency.",
              img: "https://images.unsplash.com/photo-1589793907316-f940155a1834?q=80&w=800" 
            },
            { 
              title: "Anti-Static Film", 
              desc: "Specialized protection for electronic components to prevent static discharge during transit and storage phases.",
              img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800" 
            }
          ].map((product, i) => (
            <div key={i} className="group bg-[#F8FAFC] rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
              <div className="h-64 overflow-hidden relative">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] to-transparent opacity-40"></div>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-black text-[#001F3F] mb-4 uppercase italic tracking-tighter">{product.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed text-sm italic">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 3: TECH SPECS & SUPPLY (Page 3 & 7 Combined) */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          
          {/* Detailed Table: 100% PDF Verified */}
          <div className="bg-[#001F3F] p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#007BFF]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <h3 className="text-3xl font-black text-white mb-10 border-l-8 border-[#007BFF] pl-6 uppercase tracking-tighter italic">
              Technical <span className="text-[#007BFF]">Specifications</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <tbody className="divide-y divide-white/10 font-bold text-slate-300">
                  <tr className="hover:bg-white/5 transition-colors"><td className="py-4 font-black text-white uppercase text-[10px] tracking-widest">Material Grade</td><td className="py-4">LLDPE (Linear Low-Density Polyethylene)</td></tr>
                  <tr className="hover:bg-white/5 transition-colors"><td className="py-4 font-black text-white uppercase text-[10px] tracking-widest">Gauge (Thickness)</td><td className="py-4 text-[#007BFF]">60 / 80 / 90 / 100 (15-25 Microns)</td></tr>
                  <tr className="hover:bg-white/5 transition-colors"><td className="py-4 font-black text-white uppercase text-[10px] tracking-widest">Width Availability</td><td className="py-4 italic">6" | 12" | 18" | 20" (Inches)</td></tr>
                  <tr className="hover:bg-white/5 transition-colors"><td className="py-4 font-black text-white uppercase text-[10px] tracking-widest">Roll Length</td><td className="py-4">Manual: 300-600m | Machine: 1500-3000m</td></tr>
                  <tr className="hover:bg-white/5 transition-colors"><td className="py-4 font-black text-white uppercase text-[10px] tracking-widest text-lg">Stretch Capability</td><td className="py-4 font-black text-2xl text-white italic tracking-tighter underline decoration-[#007BFF] underline-offset-8">Up to 200% - 300%</td></tr>
                  <tr className="hover:bg-white/5 transition-colors"><td className="py-4 font-black text-white uppercase text-[10px] tracking-widest">Load Capacity</td><td className="py-4 italic">Up to 2600 lbs Load Holding Capacity</td></tr>
                  <tr className="hover:bg-white/5 transition-colors"><td className="py-4 font-black text-white uppercase text-[10px] tracking-widest">Cling Properties</td><td className="py-4">Single or Double Side Cling Available</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-10">
            {/* Supply Capability (Page 3 Details) */}
            <div className="bg-white p-12 rounded-[4rem] shadow-xl border border-slate-100 group hover:border-[#007BFF]/30 transition-all">
              <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-[#001F3F]">Supply Capability</h3>
              <div className="grid grid-cols-1 gap-6">
                {[
                  "Reliable and consistent material sourcing",
                  "Industrial-grade stretch film standards",
                  "Bulk supply support for large operations",
                  "Quality-checked performance for every batch"
                ].map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-sm font-bold text-slate-600 uppercase italic">
                    <span className="w-10 h-10 bg-blue-50 text-[#007BFF] rounded-xl flex items-center justify-center font-black group-hover:bg-[#007BFF] group-hover:text-white transition-all">✓</span>
                    {cap}
                  </div>
                ))}
              </div>
            </div>

            {/* Application Focus (Page 7) */}
            <div className="bg-[#F8FAFC] p-12 rounded-[4rem] shadow-sm border border-slate-200">
              <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-[#001F3F]">Application Areas</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-slate-500 font-black text-[10px] uppercase tracking-widest italic">
                <li className="flex items-center gap-2">• Pallet wrapping</li>
                <li className="flex items-center gap-2">• Industrial load stabilization</li>
                <li className="flex items-center gap-2">• Logistics and transportation</li>
                <li className="flex items-center gap-2">• Export packaging</li>
                <li className="flex items-center gap-2">• Warehousing and storage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 4: MARKET & INDUSTRIES (Page 3 & 8 Content) */}
        <div className="relative py-28 bg-[#001F3F] rounded-[5rem] overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10 container mx-auto px-10">
            <div className="text-center mb-16 space-y-4">
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-none">
                PAN-INDIA <span className="text-[#007BFF]">PRESENCE</span>
              </h3>
              <p className="text-blue-200 font-bold uppercase tracking-widest text-xs">Serving Major Sectors Across the Nation</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {[
                'Manufacturing', 
                'Logistics and Warehousing', 
                'FMCG', 
                'Pharmaceuticals', 
                'Electronics', 
                'Export and Shipping'
              ].map(ind => (
                <div key={ind} className="px-10 py-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] shadow-lg hover:bg-[#007BFF] transition-all duration-500 group cursor-pointer">
                  <span className="font-black text-white text-[10px] md:text-xs uppercase tracking-[0.3em] group-hover:scale-110 transition-transform inline-block">
                    {ind}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;