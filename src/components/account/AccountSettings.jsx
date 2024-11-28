import React from "react";
import { Mail, Lock, Bell } from "lucide-react";

const AccountSettings = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6 dark:text-gray-200">
        Account Settings
      </h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            value="bestie@example.com"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
            disabled
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <button className="text-purple-600 dark:text-purple-400 text-sm">
            Change Password
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">
            Email Notifications
          </span>
          <button className="w-12 h-6 bg-purple-600 rounded-full relative">
            <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
