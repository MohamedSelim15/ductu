import React from 'react';
import craftBg from '../assets/craft_bg.jpg';
import { FaCut, FaTape, FaGem } from 'react-icons/fa';

const Craft = () => {
  return (
    <section id="الحرفة" className="bg-[#08080a] py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Watermark */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-[14rem] font-black text-white/[0.02] tracking-widest pointer-events-none select-none writing-vertical-lr rotate-180 md:rotate-0 md:writing-horizontal-tb">
        HERITAGE
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Right Side: Text & Stats */}
          <div className="flex-1 text-right order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6 justify-end">
              <span className="h-[2px] w-16 bg-gradient-to-l from-transparent to-brand-gold"></span>
              <span className="text-brand-gold text-sm font-bold tracking-widest uppercase">حرفتنا</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
              من القماش الخام إلى <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-gold to-yellow-600">
                قطعة تحمل اسمك
              </span>
            </h2>
            
            <p className="text-brand-gray text-lg mb-8 leading-relaxed font-light">
              نختار أقمشتنا من معامل عريقة في بيلا ونابولي. صوف خفيف، يتنفس في الصيف، ويدفئ في الشتاء. ثم يبدأ العمل الحقيقي: قص يدوي، بطانة قابلة للتشكّل، وأكتاف تُبنى طبقة فوق طبقة حتى تستقر على جسدك كأنها وُلدت معه.
            </p>
            <p className="text-white text-lg mb-12 font-medium border-r-4 border-brand-gold pr-4">
              نؤمن أن البدلة الجيدة لا تُشترى مرتين – لذلك نصنعها لتبقى.
            </p>

            {/* Statistics with Icons & Glassmorphism */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative border border-white/10 rounded-3xl p-6 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 overflow-hidden text-center hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(196,161,100,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <FaGem className="text-brand-gold w-8 h-8 mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-4xl font-black text-white mb-2 group-hover:text-brand-gold transition-colors duration-500">%١٠٠</h3>
                <p className="text-brand-gray text-sm font-semibold">صوف إيطالي</p>
              </div>
              
              <div className="group relative border border-white/10 rounded-3xl p-6 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 overflow-hidden text-center hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(196,161,100,0.15)] md:translate-y-4">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <FaTape className="text-brand-gold w-8 h-8 mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-4xl font-black text-white mb-2 group-hover:text-brand-gold transition-colors duration-500">١٢</h3>
                <p className="text-brand-gray text-sm font-semibold">قياسًا لكل بدلة</p>
              </div>
              
              <div className="group relative border border-white/10 rounded-3xl p-6 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 overflow-hidden text-center hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(196,161,100,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <FaCut className="text-brand-gold w-8 h-8 mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-4xl font-black text-white mb-2 group-hover:text-brand-gold transition-colors duration-500">+٤٠</h3>
                <p className="text-brand-gray text-sm font-semibold">ساعة عمل يدوية</p>
              </div>
            </div>
          </div>

          {/* Left Side: Creative Image */}
          <div className="flex-1 w-full order-1 lg:order-2 relative mt-10 lg:mt-0">
            {/* Background Frame */}
            <div className="absolute inset-0 border-2 border-brand-gold/30 rounded-3xl transform translate-x-6 -translate-y-6 lg:translate-x-10 lg:-translate-y-10 -z-10"></div>
            
            <div className="relative rounded-3xl overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-brand-gold opacity-50 z-20"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-brand-gold opacity-50 z-20"></div>

              <img 
                src={craftBg} 
                alt="خياطة يدوية" 
                className="w-full h-auto min-h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Craft;
