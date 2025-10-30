import React from 'react';
import { Calendar, Clock, Home, TreePine } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: 'Doggy Day Care',
      description: 'Perfect for busy days when your pup needs fun and socialization',
      price: '$42.00/day',
      discount: '25% off for second dog',
      features: [
        'Supervised playtime',
        'Socialization with other dogs',
        'Fresh air and exercise',
        'Flexible drop-off/pick-up times'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      emoji: '🌅'
    },
    {
      icon: Home,
      title: 'Boarding Kennel',
      description: 'A home away from home with 24/7 supervision and love',
      price: '$80.00/night',
      discount: '$40 extra for second dog',
      features: [
        'Private comfortable rooms',
        '24-hour supervision',
        'Regular exercise and walks',
        'Personalized care routine'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      emoji: '🌙'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4" />
            <span className="font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tail-Wagging{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our premium day care or boarding services, each designed with your dog's happiness in mind
          </p>
        </div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${service.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-white/50`}
            >
              {/* Service header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <div className="text-3xl animate-bounce">{service.emoji}</div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-gray-800">{service.price}</span>
                  <span className="text-gray-600">starting from</span>
                </div>
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {service.discount}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full mt-8 bg-gradient-to-r ${service.color} text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                Book {service.title}
              </button>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 opacity-10">
                <div className="text-6xl">🐾</div>
              </div>
            </div>
          ))}
        </div>

        {/* Hours section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Operating Hours</h3>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Convenient hours designed around your busy schedule
              </p>
            </div>
            
            <div className="space-y-4">
              {/* Weekday hours */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-2xl border border-green-200">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="text-green-600">📅</span>
                  Monday - Friday
                </h4>
                <div className="space-y-1 text-gray-700">
                  <p><span className="font-medium">Drop-off:</span> 7:00am - 9:00am</p>
                  <p><span className="font-medium">Pick-up:</span> 3:00pm - 6:00pm</p>
                </div>
              </div>

              {/* Weekend hours */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl border border-blue-200">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="text-blue-600">🌅</span>
                  Saturday & Sunday
                </h4>
                <div className="space-y-1 text-gray-700">
                  <p><span className="font-medium">Drop-off:</span> 8:00am - 10:00am</p>
                  <p><span className="font-medium">Pick-up:</span> 8:00am - 5:00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;