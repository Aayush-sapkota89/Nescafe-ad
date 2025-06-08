import React from 'react';
import { Coffee, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold">NESCAFÉ</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Bringing you the world's finest coffee experiences since 1938. 
              From bean to cup, we're committed to quality and sustainability.
            </p>
            <div className="flex items-center text-gray-300">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-2 text-red-500" />
              <span>for coffee lovers worldwide</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-red-400 transition-colors">NESCAFÉ Gold</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">NESCAFÉ Classic</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">NESCAFÉ Red Cup</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Special Editions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-red-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-400/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 NESCAFÉ. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-red-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-red-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-red-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;