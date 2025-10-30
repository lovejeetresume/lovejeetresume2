import React from 'react';
import { Heart, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-white font-bold text-xl">🐕</div>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center">
                  <div className="text-white text-xs">🏠</div>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-2xl">
                  <span className="text-green-400">Red</span>fern Dog Resort
                </h1>
                <p className="text-gray-300 text-sm">Since 1972</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Providing premium doggy day care and boarding services in Peterborough for over 50 years. 
              Your furry family deserves the best care while you're away.
            </p>
            
            <div className="flex items-center gap-2 text-green-400">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm">Made with love for dogs and their families</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <div className="space-y-3">
              {['About Us', 'Services', 'Pricing', 'Reviews', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '')}`}
                  className="block text-gray-300 hover:text-green-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <a href="tel:705-760-2413" className="text-gray-300 hover:text-white transition-colors">
                    705-760-2413
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <a href="mailto:redferndogresort@gmail.com" className="text-gray-300 hover:text-white transition-colors break-all">
                    redferndogresort@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5" />
                <div className="text-gray-300">
                  2813 Lakefield Rd<br />
                  Peterborough, ON K9J 6X5
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hours section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-green-400" />
            <h3 className="font-bold text-lg">Hours of Operation</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-4 rounded-xl">
              <h4 className="font-semibold text-green-400 mb-2">Monday - Friday</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Drop-off: 7:00am - 9:00am</p>
                <p>Pick-up: 3:00pm - 6:00pm</p>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
              <h4 className="font-semibold text-green-400 mb-2">Saturday & Sunday</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Drop-off: 8:00am - 10:00am</p>
                <p>Pick-up: 8:00am - 5:00pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © 2025 Redfern Dog Resort. All rights reserved. | Serving Peterborough and surrounding areas since 1972.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>🐾 Licensed & Insured</span>
            <span>❤️ Family Owned</span>
            <span>⭐ 5-Star Rated</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;