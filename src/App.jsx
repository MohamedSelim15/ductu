import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Craft from './components/Craft';
import Suits from './components/Suits';
import Kids from './components/Kids';
import Collection from './components/Collection';
import Footer from './components/Footer';

function App() {
  const [activeCategory, setActiveCategory] = useState('الكل');

  const handleExploreKids = () => {
    setActiveCategory('أطفال');
    const collectionSection = document.getElementById('المجموعة');
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreSuits = () => {
    setActiveCategory('الكل');
    const collectionSection = document.getElementById('المجموعة');
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-gold selection:text-brand-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <Craft />
      <Suits onExplore={handleExploreSuits} />
      <Kids onExplore={handleExploreKids} />
      <Collection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <Footer />
    </div>
  );
}

export default App;
