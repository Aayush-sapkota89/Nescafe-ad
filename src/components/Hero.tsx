import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900 to-black">
        <img
          src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"
          alt="Premium coffee beans"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-8 w-8 text-yellow-400 mr-3" />
          <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">
            Premium Experience
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Awaken Your
          <span className="block text-yellow-400">Senses</span>
        </h1>

        <p className="text-xl sm:text-2xl mb-8 text-gray-200 leading-relaxed max-w-2xl mx-auto">
          From the finest coffee beans to your cup, experience the rich heritage 
          and unparalleled taste of NESCAFÉ's premium collection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-xl border border-yellow-400/20">
            Discover Collection
          </button>
          <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
            Watch Story
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-yellow-400 animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;