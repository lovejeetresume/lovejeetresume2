import React from 'react';
import { Heart, Users, Clock, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
            <Heart className="w-4 h-4" />
            <span className="font-medium">About Our Pack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Making a Difference,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              One Paw at a Time
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 1972, we've been creating tail-wagging experiences for dogs and peace of mind for their families
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                <p className="text-green-100 leading-relaxed">
                  At Redfern Resort, we've proudly been a part of the local community since 1972, 
                  providing a safe and nurturing environment for your beloved dogs. Our experienced 
                  team is dedicated to ensuring that your furry friends receive the love, attention, 
                  and care they deserve while you're away.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Promise</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With spacious play areas and a variety of engaging activities, every dog enjoys an 
                  enriching experience that promotes both socialization and fun. We offer a stimulating 
                  environment with the majority of their stay spent outside enjoying the fresh air, 
                  socializing and lots of exercise.
                </p>
                <p className="text-gray-800 font-semibold">
                  Trust us to keep your pup happy and healthy during their stay with us!
                </p>
              </div>
            </div>

            {/* Meet the team */}
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-6 rounded-2xl border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-orange-500" />
                Meet Tanya & Todd
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tanya and Todd will be your on-hands hosts for your fur babies while they stay with us. 
                Their passion for dogs and commitment to excellence ensures every pup receives personalized 
                care and attention.
              </p>
            </div>
          </div>

          {/* Stats and features */}
          <div className="space-y-6">
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-green-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">53+</div>
                <div className="text-gray-600 font-medium">Years of Excellence</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Supervised Care</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-orange-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">
                  🌲
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">200+</div>
                <div className="text-gray-600 font-medium">Acres of Trails</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-pink-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">
                  🐕
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">2.5</div>
                <div className="text-gray-600 font-medium">Lush Acres</div>
              </div>
            </div>

            {/* Feature highlights */}
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Why Choose Redfern?</h4>
              <div className="space-y-4">
                {[
                  { icon: '🏡', text: 'State-of-the-art facility with heating and A/C' },
                  { icon: '🔒', text: 'Fully fenced and secure environment' },
                  { icon: '🎾', text: 'Spacious play areas for all ages and sizes' },
                  { icon: '🌿', text: 'Clean, fun environment with fresh air focus' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;