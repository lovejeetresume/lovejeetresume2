import React from 'react';
import { ArrowRight, Heart, Star, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-8 h-8 text-orange-300 animate-bounce delay-100">🦴</div>
        <div className="absolute top-40 right-20 w-6 h-6 text-green-400 animate-pulse delay-300">🐾</div>
        <div className="absolute bottom-40 left-20 w-10 h-10 text-blue-300 animate-bounce delay-500">⚽</div>
        <div className="absolute top-60 left-1/4 w-4 h-4 text-pink-300 animate-ping delay-700">💖</div>
        <div className="absolute bottom-60 right-10 w-6 h-6 text-yellow-400 animate-pulse delay-200">🌟</div>
      </div>

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-500 to-blue-600"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">Trusted Since 1972</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="inline-block animate-bounce-slow delay-100">Unleash</span>{' '}
            <span className="inline-block animate-bounce-slow delay-200 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
              Joy
            </span>
            <br />
            <span className="inline-block animate-bounce-slow delay-300">at</span>{' '}
            <span className="inline-block animate-bounce-slow delay-400 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400">
              Redfern
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Premium Doggy Day Care & Boarding Kennel
            <br />
            <span className="text-white font-semibold">Where Your Furry Friends Find Their Second Home</span>
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                🏡
              </div>
              <span className="text-white">2.5 Lush Acres</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                🚶
              </div>
              <span className="text-white">200+ Acre Trails</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 text-orange-400" />
              <span className="text-white">24/7 Supervision</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Book Your Pup's Stay
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300">
              Take a Virtual Tour
              <span className="ml-2 group-hover:animate-spin">🎥</span>
            </button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 hidden lg:block">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl animate-float">
              🐕
            </div>
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xl animate-float delay-1000">
              🐾
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 hidden lg:block">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xl animate-float delay-500">
              ❤️
            </div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl animate-float delay-1500">
              🏠
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;