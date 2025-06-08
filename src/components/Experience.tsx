import React from 'react';
import { Sunrise, Clock, Coffee, Moon } from 'lucide-react';

const Experience = () => {
  const moments = [
    {
      icon: Sunrise,
      title: "Morning Ritual",
      description: "Start your day with the perfect cup that awakens your senses",
      time: "6:00 AM",
      image: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg"
    },
    {
      icon: Clock,
      title: "Midday Break",
      description: "Take a moment to recharge with our smooth, energizing blend",
      time: "12:00 PM",
      image: "https://images.pexels.com/photos/5081929/pexels-photo-5081929.jpeg"
    },
    {
      icon: Coffee,
      title: "Afternoon Focus",
      description: "Enhance your productivity with our premium afternoon selection",
      time: "3:00 PM",
      image: "https://images.pexels.com/photos/3109673/pexels-photo-3109673.jpeg"
    },
    {
      icon: Moon,
      title: "Evening Unwind",
      description: "End your day with our gentle, sophisticated evening blend",
      time: "7:00 PM",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-red-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Your Perfect Day
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every moment deserves the perfect cup. Discover how NESCAFÉ 
            complements every part of your day with exceptional taste.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {moments.map((moment, index) => (
            <div
              key={moment.title}
              className="group relative bg-gradient-to-br from-red-900/50 to-black rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-1 border border-yellow-400/20"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-red-600 rounded-full p-3 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300 border border-yellow-400/30">
                    <moment.icon className="h-6 w-6 text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-sm font-bold text-black bg-yellow-400 px-3 py-1 rounded-full">
                      {moment.time}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {moment.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {moment.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 relative h-48 rounded-xl overflow-hidden border border-yellow-400/20">
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;