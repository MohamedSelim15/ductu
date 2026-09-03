import React from 'react';

const Kids = ({ onExplore }) => {
  return (
    <section id="الأطفال" className="bg-[#0a0a0c] py-32 relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -right-20 top-40 text-[12rem] font-black text-white/[0.02] tracking-tighter pointer-events-none rotate-90 md:rotate-0 select-none">
        YOUTH
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-right">
            <div className="flex items-center gap-4 mb-8 justify-end">
              <span className="h-[2px] w-16 bg-gradient-to-l from-transparent to-brand-gold"></span>
              <span className="text-brand-gold text-sm font-bold tracking-widest uppercase">قسم الأطفال</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              أناقة لا تعترف <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-gold to-yellow-600">
                بالعمر
              </span>
            </h2>
            
            <p className="text-brand-gray text-lg mb-10 leading-relaxed font-light">
              نقدم نفس مستوى الدقة والحرفية العالية في تفصيل بدل الأطفال. سواء للمناسبات الخاصة، الأفراح، أو لتطابق إطلالة الأب والابن، نصنع بدلاً تمنح طفلك مظهراً فخماً ومريحاً يجعله نجم المناسبة.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="flex items-center gap-3 justify-end">
                <span className="text-white text-sm font-bold">راحة طوال اليوم</span>
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  ✓
                </div>
              </div>
              <div className="flex items-center gap-3 justify-end">
                <span className="text-white text-sm font-bold">أقمشة مرنة</span>
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  ✓
                </div>
              </div>
              <div className="flex items-center gap-3 justify-end">
                <span className="text-white text-sm font-bold">تصاميم مطابقة للأب</span>
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  ✓
                </div>
              </div>
              <div className="flex items-center gap-3 justify-end">
                <span className="text-white text-sm font-bold">تفصيل دقيق</span>
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  ✓
                </div>
              </div>
            </div>

            <button onClick={onExplore} className="relative overflow-hidden group bg-brand-gold text-brand-dark px-10 py-4 rounded-full font-bold transition-all duration-500 hover:shadow-[0_0_20px_rgba(196,161,100,0.4)]">
              <span className="relative z-10 transition-colors duration-500">استكشف تشكيلة الأطفال</span>
              <div className="absolute inset-0 h-full w-0 bg-white group-hover:w-full transition-all duration-500 ease-out z-0 opacity-20"></div>
            </button>
          </div>

          {/* Creative Image Composition */}
          <div className="flex-1 w-full relative h-[500px] md:h-[600px] mt-10 lg:mt-0">
            {/* Main Image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent z-10"></div>
              <img 
                src="/Kids.jpeg" 
                alt="بدل أطفال" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 origin-bottom"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -left-6 top-1/4 z-30 bg-white/5 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl flex items-center gap-4 animate-[pulse_4s_infinite]">
              <div className="text-right">
                <div className="text-brand-gold font-bold text-lg">أناقة موازية</div>
                <div className="text-brand-gray text-xs">للأب والابن</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-black text-xl">
                ★
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Kids;
