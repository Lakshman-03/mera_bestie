import React from 'react';
import { X } from 'lucide-react';

interface SearchBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SearchBar = ({ isOpen, setIsOpen }: SearchBarProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-24">
      <div className="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Search for gifts...</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <input
          type="text"
          placeholder="Search for gifts..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          autoFocus
        />
      </div>
    </div>
  );
};

export default SearchBar;