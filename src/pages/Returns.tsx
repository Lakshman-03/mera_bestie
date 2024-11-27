import React from 'react';
import { RotateCcw, Shield, MessageCircle } from 'lucide-react';

const Returns = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Returns & Refunds</h1>

      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
              <RotateCcw className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">Return Policy</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Returns accepted within 7 days of delivery</li>
                <li>Item must be unused and in original packaging</li>
                <li>Customized items are non-returnable</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">Refund Process</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Refunds are processed within 5-7 business days after receiving the returned item. 
                The amount will be credited to your original payment method.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">Contact Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Need help with your return? Our customer support team is available 24/7 to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;