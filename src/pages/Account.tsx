import React from 'react';
import { User, Package, Heart, Settings } from 'lucide-react';

const Account = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-purple-100 p-3 rounded-full">
                <User className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="font-semibold">John Doe</h2>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
            </div>
            <nav className="space-y-2">
              <a href="#orders" className="flex items-center space-x-2 p-2 hover:bg-purple-50 rounded-lg">
                <Package className="w-5 h-5" />
                <span>My Orders</span>
              </a>
              <a href="#wishlist" className="flex items-center space-x-2 p-2 hover:bg-purple-50 rounded-lg">
                <Heart className="w-5 h-5" />
                <span>Wishlist</span>
              </a>
              <a href="#settings" className="flex items-center space-x-2 p-2 hover:bg-purple-50 rounded-lg">
                <Settings className="w-5 h-5" />
                <span>Account Settings</span>
              </a>
            </nav>
          </div>
        </div>
        
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Order #12345</span>
                  <span className="text-purple-600">Processing</span>
                </div>
                <p className="text-gray-600">Placed on March 15, 2024</p>
              </div>
              {/* Add more orders as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;