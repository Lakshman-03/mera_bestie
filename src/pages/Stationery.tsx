import React from 'react';
import { ShoppingCart } from 'lucide-react';

const StationeryProducts = [
  {
    id: 1,
    name: 'Premium Notebook Set',
    price: 599,
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'High-quality notebook set with premium paper'
  },
  {
    id: 2,
    name: 'Colored Pen Collection',
    price: 299,
    image: 'https://images.unsplash.com/photo-1581077968936-c88830cd1744?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Set of 12 vibrant colored pens'
  },
  // Add more products as needed
];

const Stationery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Stationery Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {StationeryProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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

export default Stationery;