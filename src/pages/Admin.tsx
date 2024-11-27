import React from 'react';
import { Package, Users, ShoppingBag, BarChart2 } from 'lucide-react';

const Admin = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Orders</p>
              <h3 className="text-2xl font-bold">1,234</h3>
            </div>
            <Package className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Customers</p>
              <h3 className="text-2xl font-bold">5,678</h3>
            </div>
            <Users className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Products</p>
              <h3 className="text-2xl font-bold">890</h3>
            </div>
            <ShoppingBag className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Revenue</p>
              <h3 className="text-2xl font-bold">₹1.2M</h3>
            </div>
            <BarChart2 className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">#12345</p>
                <p className="text-sm text-gray-600">March 15, 2024</p>
              </div>
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                Processing
              </span>
            </div>
            {/* Add more orders */}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Low Stock Products</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Premium Notebook Set</p>
                <p className="text-sm text-gray-600">5 items left</p>
              </div>
              <button className="text-purple-600 hover:text-purple-700">
                Restock
              </button>
            </div>
            {/* Add more products */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;