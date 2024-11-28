import React from 'react';
import { ShoppingCart } from 'lucide-react';

const CoupleGiftProducts = [
  {
    id: 1,
    name: 'Personalized Photo Frame',
    price: 999,
    image: 'https://images.unsplash.com/photo-1518378188025-22bd89516ee2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Custom photo frame with romantic design'
  },
  {
    id: 2,
    name: 'Couple Coffee Mugs',
    price: 699,
    image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Set of 2 matching couple coffee mugs'
  },
  // Add more products as needed
];

const CoupleGifts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Couple Gifts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {CoupleGiftProducts.map((product) => (
          <div key={product.id} className=" bg-opacity-80 dark:bg-opacity-20 backdrop-blur-sm
      rounded-2xl 
      shadow-lg transition-transform hover:scale-105
      border border-gray-200/20 dark:border-gray-700/20
      bg-gradient-to-br from-white/50 to-transparent
      dark:from-gray-800/50 dark:to-transparent rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-purple-600 font-bold">₹{product.price}</span>
                <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoupleGifts;