import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Tracey Nader',
      rating: 5,
      text: 'Great place! Owners are super friendly and my dog loves it here. Clean and tidy kennels. Very reasonably priced. Would highly recommend 👍',
      avatar: '👩‍🦱',
      dogBreed: 'Golden Retriever Mix'
    },
    {
      name: 'Matthew Cooper',
      rating: 5,
      text: 'My grandparents owned this place for many years and sold it to the most recent owners some time ago. They both passed in the last three plus years. I miss this place and am happy it\'s going strong with a great upgraded facility :-)',
      avatar: '👨‍🦲',
      dogBreed: 'Family Legacy'
    },
    {
      name: 'Gillian Beggs',
      rating: 5,
      text: 'My dog Jack is a very high energy puppy (husky) and I was so nervous to see how he would do somewhere else other than our home. He absolutely loved Redfern kennels! We had him there for a whole week during the day and he was always excited to go there and was exhausted when he came home. They give the dogs lots of exercise which is great! Highly recommended 😊',
      avatar: '👩‍🦰',
      dogBreed: 'Husky'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-medium">Happy Tails</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Pack Parents
            </span>{' '}
            Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the families who trust us with their beloved companions
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-6 text-gray-200 group-hover:text-purple-200 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-700 leading-relaxed mb-6 line-clamp-4">
                "{review.text}"
              </p>

              {/* Reviewer info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.dogBreed} Parent</p>
                </div>
              </div>

              {/* Decorative paw prints */}
              <div className="absolute bottom-4 right-6 opacity-5 text-purple-500">
                <div className="text-3xl">🐾</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-white fill-current" />
              </div>
              <div className="text-3xl font-bold text-gray-800">5.0</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl">
                💬
              </div>
              <div className="text-3xl font-bold text-gray-800">50+</div>
              <div className="text-gray-600 font-medium">Happy Reviews</div>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl">
                🐕
              </div>
              <div className="text-3xl font-bold text-gray-800">500+</div>
              <div className="text-gray-600 font-medium">Dogs Cared For</div>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl">
                ❤️
              </div>
              <div className="text-3xl font-bold text-gray-800">100%</div>
              <div className="text-gray-600 font-medium">Love & Care</div>
            </div>
          </div>
        </div>

        {/* Review CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Have you visited us? Share your experience!</p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            Leave a Review ⭐
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;