import React from 'react';
import { TreePine, Home, Footprints, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: TreePine,
      title: '2.5 Lush Acres',
      description: 'Fully fenced and perfect for dogs of all ages and sizes',
      details: 'Our spacious grounds provide plenty of room for your pup to run, play, and explore safely',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: Footprints,
      title: 'Private Trail Walks',
      description: 'Over 200 acres worth of private trails for endless canine adventures',
      details: 'Explore nature with guided walks through our extensive trail system',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Home,
      title: 'Private Rooms',
      description: 'A puppy paradise away from home with 24 hour supervision',
      details: 'Comfortable, climate-controlled spaces designed for rest and relaxation',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    },
    {
      icon: Shield,
      title: 'State-of-the-Art Facility',
      description: 'Fully heated and air conditioned facility',
      details: 'Modern amenities ensure comfort and safety in all weather conditions',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
            <Home className="w-4 h-4" />
            <span className="font-medium">Premium Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Everything Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Pup Needs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our world-class facilities and amenities ensure your furry friend has the best possible experience
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${feature.bgColor} p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-white/50`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 font-medium mb-3">{feature.description}</p>
              <p className="text-gray-500 text-sm">{feature.details}</p>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 opacity-10 text-4xl">
                {index === 0 && '🌲'}
                {index === 1 && '🐾'}
                {index === 2 && '🏠'}
                {index === 3 && '⭐'}
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action section */}
        <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-6xl animate-float">🐕</div>
            <div className="absolute top-20 right-20 text-4xl animate-float delay-500">🦴</div>
            <div className="absolute bottom-10 left-20 text-5xl animate-float delay-1000">🎾</div>
            <div className="absolute bottom-20 right-10 text-4xl animate-float delay-1500">❤️</div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Give Your Pup the Ultimate Experience?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join our pack of happy dogs and satisfied pet parents. Book your visit today and see why we're the premier choice for dog care in Peterborough.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Schedule a Tour 🏠
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors shadow-lg">
                Book Now 📅
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;