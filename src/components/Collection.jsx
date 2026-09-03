import React, { useState } from 'react';
import suitClassic from '../assets/suit_classic.jpg';
import suitWedding from '../assets/suit_wedding.jpg';

const products = [
  { id: 1, title: 'كلاسيك', category: 'كلاسيك', image: suitClassic },
  { id: 2, title: 'زفاف', category: 'زفاف', image: suitWedding },
  { id: 3, title: 'سمارت كاجوال', category: 'سمارت كاجوال', image: suitClassic },
  { id: 4, title: 'بلاك تاي', category: 'زفاف', image: suitWedding },
  { id: 5, title: 'رملي الصيف', category: 'سمارت كاجوال', image: suitClassic },
  { id: 6, title: 'جاكيت الزيتون', category: 'سمارت كاجوال', image: suitClassic },
  { id: 7, title: 'أناقة الصغار', category: 'أطفال', image: '/Kids.jpeg' },
];

const categories = ['الكل', 'كلاسيك', 'زفاف', 'سمارت كاجوال', 'أطفال'];

const Collection = ({ activeCategory, setActiveCategory }) => {

  const filteredProducts = activeCategory === 'الكل' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="المجموعة" className="bg-[#050505] py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-brand-gold/30 to-transparent"></div>
      <div className="absolute top-1/2 right-1/4 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Watermark */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 text-[6rem] md:text-[10rem] lg:text-[15rem] font-black text-white/[0.02] tracking-widest pointer-events-none select-none whitespace-nowrap">
        GALLERY
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-gradient-to-r from-transparent to-brand-gold"></span>
            <span className="text-brand-gold text-sm font-bold tracking-widest uppercase">المجموعة الحصرية</span>
            <span className="h-[2px] w-12 bg-gradient-to-l from-transparent to-brand-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            أحدث <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600">التصاميم</span>
          </h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto font-light leading-relaxed">
            مختارات من أعمالنا الأخيرة - كل قطعة صُنعت لشخص واحد، ويمكن أن تُصنع لك بشخصيتك وتفاصيلك الخاصة.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12 md:mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-full font-bold transition-all duration-500 overflow-hidden group ${
                activeCategory === category 
                  ? 'text-brand-dark bg-brand-gold shadow-[0_0_20px_rgba(196,161,100,0.4)]' 
                  : 'text-brand-gray bg-white/5 border border-white/10 hover:border-brand-gold/50'
              }`}
            >
              <span className="relative z-10">{category}</span>
              {activeCategory !== category && (
                <div className="absolute inset-0 bg-brand-gold/10 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
              )}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[3/4] border border-white/5 hover:border-brand-gold/30 hover:shadow-[0_20px_50px_rgba(196,161,100,0.15)] transition-all duration-700"
            >
              {/* Image & Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out origin-center"
              />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-right">
                <span className="inline-block px-4 py-1.5 rounded-full border border-brand-gold/50 text-brand-gold text-xs font-bold mb-4 bg-black/40 backdrop-blur-md">
                  {product.category}
                </span>
                <h3 className="text-3xl font-bold text-white group-hover:text-brand-gold transition-colors duration-500">
                  {product.title}
                </h3>
                
                {/* Expandable Line */}
                <div className="w-0 h-[1px] bg-brand-gold mt-4 mb-2 group-hover:w-full transition-all duration-700 ease-out"></div>
                
                <p className="text-brand-gray text-sm opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                  تفصيل فاخر يناسب ذوقك الراقي مع اهتمام بأدق التفاصيل.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Collection;
