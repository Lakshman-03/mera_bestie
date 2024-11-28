import React from "react";
import { Heart, ShoppingCart } from "lucide-react";

const Wishlist = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6 dark:text-gray-200">
        My Wishlist
      </h2>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1577937927133-66ef06acdf18"
            alt="Product"
            className="w-16 h-16 object-cover rounded"
          />
          <div className="flex-grow">
            <h3 className="font-semibold dark:text-gray-200">
              Couple Coffee Mugs
            </h3>
            <p className="text-gray-600 dark:text-gray-400">₹699</p>
          </div>
          <button className="p-2 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-full">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
