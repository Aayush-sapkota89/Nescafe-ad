import React from 'react';
import { Star, Award, Leaf, Clock } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "NESCAFÉ Gold",
      description: "Premium freeze-dried coffee with rich, smooth taste",
      image: "https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg",
      features: ["100% Arabica", "Freeze Dried", "Premium Blend"],
      icon: Award
    },
    {
      name: "NESCAFÉ Classic",
      description: "The perfect balance of taste and aroma in every cup",
      image: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg",
      features: ["Rich Taste", "Instant", "Authentic"],
      icon: Star
    },
    {
      name: "NESCAFÉ Red Cup",
      description: "Bold and intense flavor for the true coffee connoisseur",
      image: "https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg",
      features: ["Bold Flavor", "Premium", "Intense"],
      icon: Leaf
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-black to-red-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Premium Collection
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium coffee blends, 
            each crafted to deliver an exceptional taste experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group bg-gradient-to-br from-red-900 to-black rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:transform hover:-translate-y-2 border border-yellow-400/20"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-black p-2 rounded-full">
                  <product.icon className="h-5 w-5" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium border border-yellow-400/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-semibold transition-colors duration-300 border border-yellow-400/20">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;