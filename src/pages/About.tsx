import React from 'react';
import { Gift, Heart, Truck } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Mera Bestie</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Your trusted destination for thoughtful gifts, premium stationery, and heartfelt greeting cards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Curated Selection</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Carefully selected products that bring joy and meaning to every occasion.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Each product is chosen with care to ensure the highest quality and satisfaction.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Truck className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Quick and reliable shipping to bring happiness to your doorstep.
          </p>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/10 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center">
          Founded with a passion for bringing people closer through meaningful gifts, Mera Bestie has grown 
          into a beloved destination for those seeking to express their feelings through carefully curated 
          products. Our journey began with a simple idea: to make gift-giving more personal and meaningful.
        </p>
      </div>
    </div>
  );
};

export default About;