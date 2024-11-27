import React from 'react';
import { Truck, Clock, MapPin } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Shipping Policy</h1>
      
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">Delivery Options</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Standard Delivery (3-5 business days)</li>
                <li>Express Delivery (1-2 business days)</li>
                <li>Same Day Delivery (select cities only)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">Shipping Coverage</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We currently ship to all major cities across India. Remote locations may require additional delivery time.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">Processing Time</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Orders are processed within 24 hours of placement. Custom orders may require additional processing time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;