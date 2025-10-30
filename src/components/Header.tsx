import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:705-760-2413" className="flex items-center gap-2 hover:text-green-200 transition-colors">
              <Phone className="w-4 h-4" />
              705-760-2413
            </a>
            <a href="mailto:redferndogresort@gmail.com" className="flex items-center gap-2 hover:text-green-200 transition-colors">
              <Mail className="w-4 h-4" />
              redferndogresort@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            2813 Lakefield Rd, Peterborough, ON K9J 6X5
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-white font-bold text-xl">🐕</div>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center">
                  <div className="text-white text-xs">🏠</div>
                </div>
              </div>
              <div>
                <h1 className={`font-bold text-2xl transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  <span className="text-green-600">Red</span>fern
                </h1>
                <p className={`text-sm transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-green-100'
                }`}>Dog Resort</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Reviews', 'Pricing', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-green-600' 
                      : 'text-white hover:text-green-200'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white rounded-lg shadow-xl p-4 mb-4">
              <nav className="space-y-4">
                {['Home', 'About', 'Services', 'Reviews', 'Pricing', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;