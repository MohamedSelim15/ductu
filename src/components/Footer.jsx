import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="تواصل معنا" className="bg-[#050505] pt-20 relative z-10 text-right overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
          
          {/* Secondary Menu */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-6 text-start flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
              روابط سريعة
            </h4>
            <ul className="space-y-4 text-brand-gray text-sm flex flex-col items-start">
              <li><a href="#الرئيسية" className="hover:text-brand-gold hover:-translate-x-2 transition-all duration-300 inline-block">الرئيسية</a></li>
              <li><a href="#الحرفة" className="hover:text-brand-gold hover:-translate-x-2 transition-all duration-300 inline-block">الحرفة</a></li>
              <li><a href="#المجموعة" className="hover:text-brand-gold hover:-translate-x-2 transition-all duration-300 inline-block">المجموعة</a></li>
              <li><a href="#تواصل" className="hover:text-brand-gold hover:-translate-x-2 transition-all duration-300 inline-block">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Schedule */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-6 flex items-center justify-start gap-2">
              <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
              المواعيد
            </h4>
            <ul className="space-y-4 text-brand-gray text-sm">
              <li className="flex flex-col items-start border-b border-white/5 pb-3">
                <span className="text-white mb-1">السبت - الخميس</span>
                <span className="text-brand-gold font-bold font-mono" dir="ltr">10:00 AM - 10:00 PM</span>
              </li>
              <li className="flex flex-col items-start border-b border-white/5 pb-3">
                <span className="text-white mb-1">الجمعة</span>
                <span className="text-brand-gold font-bold font-mono" dir="ltr">04:00 PM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-6 flex items-center justify-start gap-2">
              <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
              للتواصل
            </h4>
            <ul className="space-y-4 text-brand-gray text-sm text-start">
              <li className="flex flex-col items-start border-b border-white/5 pb-3">
                <span className="text-white mb-1">رقم الهاتف</span>
                <span className="text-brand-gold font-bold font-mono" dir="ltr">01060893805</span>
              </li>
              <li className="flex flex-col items-start border-b border-white/5 pb-3">
                <span className="text-white mb-1">العنوان</span>
                <span className="text-brand-gray">وسط البلد، القاهرة</span>
              </li>
            </ul>
          </div>

          {/* Brand Info */}
          <div className="md:col-span-1 flex flex-col items-end">
            <div className="flex items-center gap-4 mb-6 justify-end">
              <span className="text-white font-bold text-3xl tracking-widest uppercase">Ductu</span>
              <div className="w-14 h-14 shadow-[0_0_30px_rgba(196,161,100,0.3)] rounded-full border border-brand-gold flex items-center justify-center text-brand-gold font-black text-2xl">
                D
              </div>
            </div>
            <p className="text-brand-gray text-sm leading-relaxed mb-8 text-start font-light">
              معرض تفصيل رجالي وأطفالي يقدم بدلاً مصنوعة يدوياً بأقمشة مختارة. نصنع لك حضوراً لا يُنسى.
            </p>
            <div className="flex gap-4 justify-start">
              <a href="https://wa.me/201060893805" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/ductu.uu?igsi=MTRyejd0ODRkeXo3ag==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/share/1Da8r4EwNV/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-gray/60 font-light tracking-wide">
          <p className="mb-4 md:mb-0">صُنع بشغف وحرفية في القاهرة</p>
          <p>© 2026 DUCTU BESPOKE. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
