import React from 'react';
import { motion } from 'framer-motion';
import ProductCard, { Product } from '../components/shared/ProductCard';

const GreetingCardProducts: Product[] = [
  {
    id: 1,
    name: 'Birthday Wishes Card',
    price: 199,
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1',
    description: 'Beautifully designed birthday card with envelope'
  },
  {
    id: 2,
    name: 'Anniversary Card',
    price: 249,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Elegant anniversary card with golden details'
  },
  // Add more products as needed
];

const GreetingCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 bg-clip-text text-transparent 
                   bg-gradient-to-r from-purple-600 to-pink-600"
      >
        Greeting Cards Collection
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {GreetingCardProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default GreetingCards;