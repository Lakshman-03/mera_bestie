import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Gift } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';
import { cn } from '../../lib/utils';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full",
      "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm",
      "border-b border-gray-200/50 dark:border-gray-800/50",
      "transition-colors duration-200"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <Gift className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <Link to="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              MERA Bestie
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/shop" 
              className={cn(
                "text-gray-700 dark:text-gray-300",
                "hover:text-purple-600 dark:hover:text-purple-400",
                "transition-colors"
              )}
            >
              Shop
            </Link>
            <div className="relative group">
              <button 
                className={cn(
                  "text-gray-700 dark:text-gray-300",
                  "hover:text-purple-600 dark:hover:text-purple-400",
                  "transition-colors flex items-center gap-1"
                )}
              >
                Categories
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={cn(
                "absolute top-full left-0 mt-1 w-48",
                "bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm",
                "rounded-lg shadow-lg",
                "py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100",
                "transition-all duration-200",
                "border border-gray-200/50 dark:border-gray-700/50"
              )}>
                <div className="py-1">
                  <Link to="/stationery" className={cn(
                    "block px-4 py-2",
                    "text-gray-700 dark:text-gray-300",
                    "hover:bg-purple-50 dark:hover:bg-gray-700/50"
                  )}>
                    Stationery Items
                  </Link>
                  <Link to="/greeting-cards" className={cn(
                    "block px-4 py-2",
                    "text-gray-700 dark:text-gray-300",
                    "hover:bg-purple-50 dark:hover:bg-gray-700/50"
                  )}>
                    Greeting Cards & Gifts
                  </Link>
                  <Link to="/couple-gifts" className={cn(
                    "block px-4 py-2",
                    "text-gray-700 dark:text-gray-300",
                    "hover:bg-purple-50 dark:hover:bg-gray-700/50"
                  )}>
                    Gifts for Couples
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/about" className={cn(
              "text-gray-700 dark:text-gray-300",
              "hover:text-purple-600 dark:hover:text-purple-400",
              "transition-colors"
            )}>
              About
            </Link>
            <Link to="/contact" className={cn(
              "text-gray-700 dark:text-gray-300",
              "hover:text-purple-600 dark:hover:text-purple-400",
              "transition-colors"
            )}>
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-6">
            <SearchBar isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
            <button 
              onClick={() => setIsSearchOpen(true)}
              className={cn(
                "text-gray-700 dark:text-gray-300",
                "hover:text-purple-600 dark:hover:text-purple-400",
                "transition-colors"
              )}
            >
              <Search className="w-5 h-5" />
            </button>
            <Link to="/cart" className={cn(
              "text-gray-700 dark:text-gray-300",
              "hover:text-purple-600 dark:hover:text-purple-400",
              "transition-colors"
            )}>
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <Link to="/account" className={cn(
              "text-gray-700 dark:text-gray-300",
              "hover:text-purple-600 dark:hover:text-purple-400",
              "transition-colors"
            )}>
              <User className="w-5 h-5" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;