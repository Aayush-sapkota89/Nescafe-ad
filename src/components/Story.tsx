import React from 'react';
import { Globe, Users, Heart, Zap } from 'lucide-react';

const Story = () => {
  const stats = [
    { icon: Globe, value: "150+", label: "Countries Worldwide" },
    { icon: Users, value: "1B+", label: "Cups Served Daily" },
    { icon: Heart, value: "80+", label: "Years of Excellence" },
    { icon: Zap, value: "100%", label: "Quality Guarantee" }
  ];

  return (
    <section id="story" className="py-20 bg-gradient-to-r from-red-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              A Legacy of
              <span className="block text-yellow-400">Excellence</span>
            </h2>
            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              Since 1938, NESCAFÉ has been pioneering the art of instant coffee, 
              bringing people together through the shared love of exceptional taste.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From humble beginnings in Switzerland to becoming the world's favorite 
              coffee brand, our commitment to quality and innovation remains unwavering.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
              Discover Our Heritage
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg"
              alt="Coffee plantation"
              className="rounded-2xl shadow-2xl border border-yellow-400/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-red-800 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300 border border-yellow-400/30">
                <stat.icon className="h-8 w-8 text-yellow-400 group-hover:text-black transition-colors duration-300" />
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;