import React from 'react';
import { motion } from 'framer-motion';
import ProductCard, { Product } from '../components/shared/ProductCard';

const CoupleGiftProducts: Product[] = [
  {
    id: 1,
    name: 'Personalized Photo Frame',
    price: 999,
    image: 'https://images.unsplash.com/photo-1518378188025-22bd89516ee2',
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
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 bg-clip-text text-transparent 
                   bg-gradient-to-r from-purple-600 to-pink-600"
      >
        Couple Gifts Collection
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {CoupleGiftProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CoupleGifts;