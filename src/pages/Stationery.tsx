import React from 'react';
import { motion } from 'framer-motion';
import ProductCard, { Product } from '../components/shared/ProductCard';

const StationeryProducts: Product[] = [
  {
    id: 1,
    name: 'Premium Notebook Set',
    price: 599,
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe',
    description: 'High-quality notebook set with premium paper'
  },
  {
    id: 2,
    name: 'Colored Pen Collection',
    price: 299,
    image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/pen/6/e/j/48-pc-gel-pens-set-color-gel-pens-glitter-shopngift-original-imagnx8g6zwm8zdt.jpeg?q=90&crop=false',
    description: 'Set of 12 vibrant colored pens'
  },
  // Add more products as needed
];

const Stationery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 bg-clip-text text-transparent 
                   bg-gradient-to-r from-purple-600 to-pink-600"
      >
        Stationery Collection
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {StationeryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Stationery;