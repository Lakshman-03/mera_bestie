import React, { useState } from 'react';
import { User, Package, Heart, Settings } from 'lucide-react';
import MyOrders from '../components/account/MyOrders';
import Wishlist from '../components/account/Wishlist';
import AccountSettings from '../components/account/AccountSettings';
import { cn } from '../lib/utils';

const Account = () => {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 dark:text-gray-200">My Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-full">
                <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h2 className="font-semibold dark:text-gray-200">Bestie</h2>
                <p className="text-gray-600 dark:text-gray-400">bestie@example.com</p>
              </div>
            </div>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('orders')}
                className={cn(
                  "flex items-center space-x-2 p-2 w-full rounded-lg",
                  "hover:bg-purple-50 dark:hover:bg-purple-900/20",
                  activeTab === 'orders' && "bg-purple-50 dark:bg-purple-900/20"
                )}
              >
                <Package className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">My Orders</span>
              </button>
              <button
                onClick={() => setActiveTab('wishlist')}
                className={cn(
                  "flex items-center space-x-2 p-2 w-full rounded-lg",
                  "hover:bg-purple-50 dark:hover:bg-purple-900/20",
                  activeTab === 'wishlist' && "bg-purple-50 dark:bg-purple-900/20"
                )}
              >
                <Heart className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">Wishlist</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={cn(
                  "flex items-center space-x-2 p-2 w-full rounded-lg",
                  "hover:bg-purple-50 dark:hover:bg-purple-900/20",
                  activeTab === 'settings' && "bg-purple-50 dark:bg-purple-900/20"
                )}
              >
                <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">Account Settings</span>
              </button>
            </nav>
          </div>
        </div>
        
        <div className="col-span-2">
          {activeTab === 'orders' && <MyOrders />}
          {activeTab === 'wishlist' && <Wishlist />}
          {activeTab === 'settings' && <AccountSettings />}
        </div>
      </div>
    </div>
  );
};

export default Account;