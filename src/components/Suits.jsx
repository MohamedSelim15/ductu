import React from 'react';
import suitClassic from '../assets/suit_classic.jpg';
import suitWedding from '../assets/suit_wedding.jpg';

const Suits = ({ onExplore }) => {
  return (
    <section id="البدل" className="bg-[#0a0a0c] py-32 relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -left-20 top-20 text-[15rem] font-black text-white/[0.02] tracking-tighter pointer-events-none rotate-90 md:rotate-0 select-none">
        BESPOKE
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-right order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-8 justify-end">
              <span className="h-[2px] w-16 bg-gradient-to-r from-transparent to-brand-gold"></span>
              <span className="text-brand-gold text-sm font-bold tracking-widest uppercase">البدل الرجالية</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              فن تفصيل <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600">
                الشخصية
              </span>
            </h2>
            
            <p className="text-brand-gray text-lg mb-10 leading-relaxed font-light">
              سواء كنت تبحث عن الأناقة الكلاسيكية لاجتماعات العمل، أو التميز الاستثنائي في يوم زفافك. نقدم لك مجموعة واسعة من التصاميم التي تُفصل خصيصاً لتبرز أفضل ما فيك، مع الاهتمام بأدق التفاصيل من نوع الياقة إلى خيوط الأزرار.
            </p>
            
            <div className="flex flex-wrap items-center justify-end gap-6 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
                </div>
                <div className="text-right">
                  <h4 className="text-white font-bold text-sm">أقمشة فاخرة</h4>
                  <p className="text-brand-gray text-xs">من إيطاليا وإنجلترا</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="text-right">
                  <h4 className="text-white font-bold text-sm">قياس مثالي</h4>
                  <p className="text-brand-gray text-xs">يُصنع خصيصاً لك</p>
                </div>
              </div>
            </div>

            <button onClick={onExplore} className="relative overflow-hidden group bg-transparent border border-brand-gold text-brand-gold px-10 py-4 rounded-full font-bold transition-all duration-500">
              <span className="relative z-10 group-hover:text-brand-dark transition-colors duration-500">تصفح تصاميم البدل</span>
              <div className="absolute inset-0 h-full w-0 bg-brand-gold group-hover:w-full transition-all duration-500 ease-out z-0"></div>
            </button>
          </div>

          {/* Creative Image Composition */}
          <div className="flex-1 w-full relative order-1 lg:order-2 h-[500px] md:h-[600px]">
            {/* Main Image */}
            <div className="absolute right-0 top-0 w-3/4 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/10 group">
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-all duration-700 z-10"></div>
              <img 
                src={suitClassic} 
                alt="بدلة كلاسيك" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            
            {/* Secondary Overlapping Image */}
            <div className="absolute left-0 bottom-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-brand-dark group">
              <div className="absolute inset-0 bg-brand-gold/10 group-hover:bg-transparent transition-all duration-700 z-10"></div>
              <img 
                src={suitWedding} 
                alt="بدلة زفاف" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 z-30 bg-brand-dark/80 backdrop-blur-md border border-brand-gold/30 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-[bounce_4s_infinite]">
              <div className="text-right">
                <div className="text-brand-gold font-black text-2xl">١٩٨٥</div>
                <div className="text-white text-xs">تاريخ من الأناقة</div>
              </div>
              <div className="w-1 h-10 bg-brand-gold rounded-full"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Suits;
