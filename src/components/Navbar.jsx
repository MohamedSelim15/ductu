import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${
      isScrolled 
        ? 'bg-[#050505]/90 backdrop-blur-md border-brand-gold/20 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
        : 'bg-transparent border-transparent py-6'
    }`}>
      {/* Decorative top border line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>

      <div className="container mx-auto px-6 flex justify-between items-center">
 

        {/* Left side: Navigation Menu */}
        <div className="hidden md:flex items-center gap-10">
          {['الرئيسية', 'الحرفة', 'البدل', 'الأطفال', 'المجموعة'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="group relative text-white/80 hover:text-brand-gold transition-colors text-sm font-semibold tracking-wide py-2"
            >
              {item}
              {/* Hover Underline Animation */}
              <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          ))}
          
          {/* Highlighted Contact Button */}
          <a 
            href="#تواصل معنا" 
            className={`relative overflow-hidden group px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-500 ${
              isScrolled
                ? 'bg-brand-gold text-brand-dark hover:shadow-[0_0_20px_rgba(196,161,100,0.4)]'
                : 'bg-white/10 text-white border border-white/20 hover:border-brand-gold hover:text-brand-gold backdrop-blur-sm'
            }`}
          >
            <span className="relative z-10">تواصل معنا</span>
            {isScrolled && (
              <div className="absolute inset-0 h-full w-0 bg-white group-hover:w-full transition-all duration-500 ease-out z-0 opacity-20"></div>
            )}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-brand-gold transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* Right side: Logo & Brand (RTL Layout) */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <span className={`font-bold tracking-[0.2em] uppercase transition-all duration-500 ${
            isScrolled ? 'text-white text-xl' : 'text-white text-2xl'
          }`}>
            Ductu
          </span>
          <div className={`rounded-full border flex items-center justify-center font-black transition-all duration-500 ${
            isScrolled 
              ? 'w-10 h-10 border-brand-gold text-brand-gold text-lg shadow-[0_0_15px_rgba(196,161,100,0.4)]' 
              : 'w-12 h-12 border-white/30 text-white group-hover:border-brand-gold group-hover:text-brand-gold text-xl'
          }`}>
            D
          </div>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-lg border-b border-brand-gold/20 overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-[400px] py-4 shadow-xl' : 'max-h-0 py-0 border-transparent'
      }`}>
        <div className="flex flex-col items-center gap-6">
          {['الرئيسية', 'الحرفة', 'البدل', 'الأطفال', 'المجموعة'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/90 hover:text-brand-gold transition-colors text-lg font-bold tracking-wide"
            >
              {item}
            </a>
          ))}
          <a 
            href="#تواصل معنا" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 bg-brand-gold text-brand-dark px-8 py-3 rounded-full font-bold text-sm hover:shadow-[0_0_15px_rgba(196,161,100,0.4)] transition-all duration-300"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
