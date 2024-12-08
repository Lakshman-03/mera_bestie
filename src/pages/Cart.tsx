import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Minus, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => { 
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleProceed = () => {
    alert('Order placed successfully');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <h1 className="text-3xl font-bold mb-8 dark:text-gray-200">Shopping Cart</h1>
      
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Cart Items Section */}
        <div className="lg:col-span-8">
          <AnimatePresence>
            <motion.div
              layout
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-6">
                  <img
                    src="https://images.unsplash.com/photo-1585336261022-680e295ce3fe"
                    alt="Product"
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold dark:text-gray-200">Premium Notebook Set</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">₹599</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <button onClick={handleDecrement} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center dark:text-gray-200">{quantity}</span>
                      <button onClick={handleIncrement} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Order Summary Section */}
        <div className="lg:col-span-4 mt-8 lg:mt-0">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-4">
            <h2 className="text-lg font-semibold mb-4 dark:text-gray-200">Order Summary</h2>
            <div className="space-y-3 border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal</span>
                <span>₹599</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Shipping</span>
                <span>₹50</span>
              </div>
            </div>
            <div className="flex justify-between text-lg font-semibold mb-6 dark:text-gray-200">
              <span>Total</span>
              <span>₹649</span>
            </div>
            <button onClick={handleProceed} className={cn(
              "w-full py-3 px-4 rounded-lg",
              "bg-purple-600 hover:bg-purple-700 transition-colors",
              "text-white font-medium",
              "transform active:scale-[0.98] transition-transform"
            )}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;