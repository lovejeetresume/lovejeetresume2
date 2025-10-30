import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-orange-50">
      <Header />
      <Hero />
      <About />
      <Services />
      <Features />
      <Reviews />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;