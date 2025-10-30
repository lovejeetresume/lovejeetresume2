import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl animate-float">🐕</div>
        <div className="absolute top-40 right-20 text-6xl animate-float delay-500">🏠</div>
        <div className="absolute bottom-20 left-1/4 text-7xl animate-float delay-1000">🐾</div>
        <div className="absolute bottom-40 right-10 text-5xl animate-float delay-1500">❤️</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Phone className="w-4 h-4" />
            <span className="font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Happy Paws
            </span>{' '}
            and Play!
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Ready to give your furry friend the ultimate experience? Contact us today to schedule a visit or book their stay.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <a href="tel:705-760-2413" className="text-green-200 hover:text-white transition-colors">
                      705-760-2413
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <a href="mailto:redferndogresort@gmail.com" className="text-green-200 hover:text-white transition-colors">
                      redferndogresort@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Visit Us</h4>
                    <p className="text-green-200">
                      2813 Lakefield Rd<br />
                      Peterborough, ON K9J 6X5
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Hours of Operation</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                  <span className="font-medium">Monday - Friday</span>
                  <div className="text-right text-sm">
                    <div>Drop: 7:00am - 9:00am</div>
                    <div>Pick: 3:00pm - 6:00pm</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                  <span className="font-medium">Saturday & Sunday</span>
                  <div className="text-right text-sm">
                    <div>Drop: 8:00am - 10:00am</div>
                    <div>Pick: 8:00am - 5:00pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-colors placeholder-white/70"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-colors placeholder-white/70"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-colors placeholder-white/70"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Dog's Name & Breed</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-colors placeholder-white/70"
                  placeholder="Buddy - Golden Retriever"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-colors">
                  <option value="">Select a service</option>
                  <option value="daycare">Day Care</option>
                  <option value="boarding">Boarding</option>
                  <option value="tour">Schedule a Tour</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-colors placeholder-white/70 resize-none"
                  placeholder="Tell us about your pup and what you need..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;