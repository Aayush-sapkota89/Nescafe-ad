import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-red-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join our community of coffee lovers and be the first to know about 
            new blends, exclusive offers, and coffee inspiration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-red-900 to-black rounded-2xl shadow-xl p-8 border border-yellow-400/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400 rounded-full p-3">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-300">businessinfoaayush@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400 rounded-full p-3">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-gray-300">9812321619</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400 rounded-full p-3">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-gray-300">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-yellow-400/20">
              <p className="text-gray-300 mb-4">Follow us on social media</p>
              <div className="flex space-x-4">
                {[Instagram, Facebook, Twitter].map((Icon, index) => (
                  <button
                    key={index}
                    className="bg-red-600 hover:bg-yellow-400 hover:text-black text-white p-3 rounded-full transition-all duration-300 border border-yellow-400/30"
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl shadow-xl p-8 text-white border border-yellow-400/20">
            <h3 className="text-2xl font-bold mb-6">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-red-100 mb-6 leading-relaxed">
              Get exclusive access to new product launches, brewing tips, 
              and special offers delivered straight to your inbox.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-black/20 border border-yellow-400/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-black/20 border border-yellow-400/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-lg font-bold transition-colors duration-300"
              >
                Subscribe Now
              </button>
            </form>

            <p className="text-red-200 text-sm mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;