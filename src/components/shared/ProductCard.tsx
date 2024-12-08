// src/components/shared/ProductCard.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import ProductModal from './ProductModal';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  originalPrice?: number;
  onSale?: boolean;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    console.log('Added to cart:', product);
  };

  const handleAddToWishlist = () => {
    // TODO: Implement wishlist functionality
    console.log('Added to wishlist:', product);
  };

  const handleQuickView = () => {
    // TODO: Implement quick view functionality
    console.log('Quick view:', product);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {product.onSale && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Sale
            </span>
          </div>
        )}
        
        <div className="relative overflow-hidden aspect-square">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full text-gray-800 hover:bg-purple-600 hover:text-white transition-colors"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full text-gray-800 hover:bg-purple-600 hover:text-white transition-colors"
              onClick={handleAddToWishlist}
            >
              <Heart className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full text-gray-800 hover:bg-purple-600 hover:text-white transition-colors"
              onClick={handleQuickView}
            >
              <Eye className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
            {product.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 
                      transition-colors flex items-center gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </motion.button>
          </div>
        </div>
      </motion.div>

      <ProductModal 
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;