import React from "react";
import { Package } from "lucide-react";

const MyOrders = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6 dark:text-gray-200">
        My Orders
      </h2>
      <div className="space-y-4">
        <div className="border-b dark:border-gray-700 pb-4">
          <div className="flex justify-between mb-2">
            <span className="font-semibold dark:text-gray-200">
              Order #12345
            </span>
            <span className="text-purple-600 dark:text-purple-400">
              Processing
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Placed on March 15, 2024
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
            Premium Notebook Set, Greeting Cards (2)
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
