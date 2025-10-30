import React from 'react';
import { Check, Calendar, Moon, Heart } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      title: 'Day Care',
      icon: Calendar,
      price: '$42',
      period: 'per day',
      description: 'Perfect for busy days when your pup needs socialization and fun',
      features: [
        'Full day of supervised play',
        'Socialization with other dogs',
        'Fresh air and exercise',
        'Flexible drop-off/pick-up',
        'Daily activity updates'
      ],
      discount: '25% off second dog',
      color: 'from-blue-500 to-blue-600',
      popular: false
    },
    {
      title: 'Boarding',
      icon: Moon,
      price: '$80',
      period: 'per night',
      description: 'A home away from home with 24/7 supervision and care',
      features: [
        'Private comfortable room',
        '24/7 professional supervision',
        'Daily exercise and walks',
        'Personalized care routine',
        'Regular updates for owners',
        'Special dietary accommodations'
      ],
      discount: '$40 extra for second dog',
      color: 'from-green-500 to-green-600',
      popular: true
    }
  ];

  const packages_extended = [
    {
      duration: '7 nights',
      price: '$560',
      savings: 'Save $0'
    },
    {
      duration: '14 nights',
      price: '$1,050',
      savings: 'Save $70'
    }
  ];

  const requirements = [
    {
      icon: '💉',
      title: 'Bordetella Vaccination',
      description: 'Required for all dogs'
    },
    {
      icon: '🦠',
      title: 'Rabies Vaccination',
      description: 'Current vaccination certificate needed'
    },
    {
      icon: '🐛',
      title: 'Flea & Tick Control',
      description: 'Recent treatment required'
    },
    {
      icon: '✂️',
      title: 'Spayed/Neutered',
      description: 'Required (puppies exempt)'
    }
  ];

  const packingList = [
    'Comfortable bed or blanket',
    'Favorite toys for comfort',
    'Special treats (if any)',
    'Walking leash',
    'Food with feeding instructions',
    'Any required medications ($5 administration fee)'
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
            <Heart className="w-4 h-4" />
            <span className="font-medium">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Simple,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Fair Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All prices include taxes - no hidden fees, no surprises. Just quality care at honest prices.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white p-8 rounded-3xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                pkg.popular ? 'border-green-200 ring-2 ring-green-100' : 'border-gray-100'
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular ⭐
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <pkg.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                <p className="text-gray-600">{pkg.description}</p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-gray-800">{pkg.price}</span>
                  <span className="text-gray-500 text-lg">{pkg.period}</span>
                </div>
                <div className="mt-2">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.discount}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full bg-gradient-to-r ${pkg.color} text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                Book {pkg.title}
              </button>
            </div>
          ))}
        </div>

        {/* Extended stay pricing */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Extended Stay Packages</h3>
            <p className="text-gray-600">Special pricing for longer boarding stays</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {packages_extended.map((pkg, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{pkg.duration}</h4>
                <div className="text-3xl font-bold text-green-600 mb-1">{pkg.price}</div>
                <div className="text-green-700 text-sm font-medium">{pkg.savings}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-600 italic">*Ask us about pricing for extended stays</p>
          </div>
        </div>

        {/* Requirements and packing */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Requirements */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-sm">📋</span>
              </div>
              Health Requirements
            </h3>
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
                  <div className="text-2xl">{req.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{req.title}</h4>
                    <p className="text-gray-600 text-sm">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Packing list */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">🎒</span>
              </div>
              What to Bring
            </h3>
            <div className="space-y-3">
              {packingList.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-200">
              <p className="text-orange-800 text-sm">
                <strong>Note:</strong> If your dog eats during the day, please bring their food with clear feeding instructions for the rest of their stay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;