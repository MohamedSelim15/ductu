import React from 'react';
import heroBg from '../assets/hero_bg.jpg';

const Hero = ({ onExplore }) => {
  return (
    <section id="الرئيسية" className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden">
      {/* Background Image with Creative Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity transform scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Complex Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[150px] pointer-events-none"></div>
      </div>

      {/* Vertical Decorative Text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8 z-10">
        <div className="w-[1px] h-32 bg-gradient-to-b from-brand-gold to-transparent"></div>
        <span className="text-white/20 font-black tracking-[0.5em] text-sm writing-vertical-lr rotate-180 uppercase select-none">
          Ductu Bespoke Tailoring
        </span>
        <div className="w-[1px] h-32 bg-gradient-to-t from-brand-gold to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center mt-20">
        {/* Right Side text (RTL) */}
        <div className="max-w-3xl text-right">
          
          {/* Top Label */}
          <div className="flex items-center gap-4 mb-8 justify-end">
            <span className="h-[2px] w-20 bg-gradient-to-r from-transparent to-brand-gold"></span>
            <span className="text-brand-gold text-sm font-bold tracking-widest uppercase bg-brand-gold/10 px-4 py-1.5 rounded-full border border-brand-gold/20 backdrop-blur-sm">
              تفصيل يدوي منذ ١٩٨٥
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6">
            الأناقة ليست مجرد <br/>
            <span className="relative inline-block mt-4">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold">ملابس</span>
              <div className="absolute -bottom-2 left-0 w-full h-[6px] bg-brand-gold/40 rounded-full blur-[2px]"></div>
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white/80 block mt-4">
              بل حضور <span className="text-brand-gold">لا يُنسى</span>
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-brand-gray text-xl mb-12 leading-relaxed max-w-xl ml-auto font-light border-r-4 border-brand-gold/50 pr-6">
            بدل رجالية مفصلة بعناية فائقة من أرقى الأقمشة الإيطالية. تُصنع خصيصاً على مقاسك لتمنحك ثقةً تُرى وتُحس قبل أن تُنطق بكلمة.
          </p>
          
          {/* Buttons */}
<<<<<<< HEAD
          <div className="flex flex-wrap items-center mb-4 justify-end gap-6">
            <button onClick={onExplore} className="relative overflow-hidden group bg-brand-gold text-brand-dark px-10 py-4 rounded-full font-bold transition-all duration-500 hover:shadow-[0_0_30px_rgba(196,161,100,0.5)] hover:-translate-y-1">
              <span className="relative z-10 transition-colors duration-500">استكشف المجموعة</span>
=======
          <div className="flex flex-wrap items-center justify-end gap-6">
            <button className="relative overflow-hidden group bg-brand-gold text-brand-dark px-10 py-4 rounded-full font-bold transition-all duration-500 hover:shadow-[0_0_30px_rgba(196,161,100,0.5)] hover:-translate-y-1">
              <a href="#االمجموعة" className="relative z-10 transition-colors duration-500">استكشف المجموعة</a>
>>>>>>> 8037d621fa534490114db3a926289405d446550a
              <div className="absolute inset-0 h-full w-0 bg-white group-hover:w-full transition-all duration-500 ease-out z-0 opacity-20"></div>
            </button>
            
            <a href="#الحرفة" className="flex items-center gap-4 group cursor-pointer">
              <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white group-hover:border-brand-gold group-hover:bg-brand-gold/10 transition-all duration-500">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <span className="text-white font-semibold group-hover:text-brand-gold transition-colors duration-500">قصة الحرفة</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a href="#الحرفة" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group z-20">
        <span className="text-brand-gold text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors duration-300">اكتشف</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scrollDown_2s_ease-in-out_infinite]"></div>
        </div>
      </a>
      
      {/* Custom Keyframe for Scroll Indicator */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollDown {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
      `}} />
    </section>
  );
};

export default Hero;
