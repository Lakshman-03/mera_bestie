// src/components/shared/ProductModal.tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Heart } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [isLiked, setIsLiked] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={cn(
                "relative",
                "w-full max-w-4xl",
                "bg-white dark:bg-gray-800",
                "rounded-2xl shadow-2xl",
                "mx-auto my-8",
                "overflow-hidden",
                "z-50"
              )}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 
                         bg-black/50 hover:bg-black/70 
                         rounded-full text-white 
                         transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative aspect-square">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Price */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                        ₹{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-purple-600 text-white 
                                py-3 px-6 rounded-lg
                                hover:bg-purple-700 
                                transition-colors duration-200
                                flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsLiked(!isLiked);
                        }}
                        className={cn(
                          "p-3 rounded-lg transition-all duration-200",
                          isLiked 
                            ? "bg-pink-100 dark:bg-pink-900/30" 
                            : "bg-gray-100 dark:bg-gray-700",
                          isLiked
                            ? "hover:bg-pink-200 dark:hover:bg-pink-900/50"
                            : "hover:bg-purple-100 dark:hover:bg-purple-900/30"
                        )}
                      >
                        <Heart 
                          className={cn(
                            "w-5 h-5 transition-colors duration-200",
                            isLiked 
                              ? "text-pink-500 fill-pink-500" 
                              : "text-gray-600 dark:text-gray-400"
                          )}
                        />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;