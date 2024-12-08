import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  link: string;
  buttonText: string;
}

const CategoryCard = ({
  title,
  description,
  icon: Icon,
  color,
  bgColor,
  link,
  buttonText
}: CategoryCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`
        ${bgColor} bg-opacity-100 dark:bg-opacity-20 
        backdrop-blur-sm rounded-2xl p-8 
        shadow-lg hover:shadow-xl
        border border-gray-200/20 dark:border-gray-700/20
        bg-gradient-to-br from-purple-100 to-pink-100
        dark:from-gray-800/50 dark:to-transparent
      `}
    >
      <div className={`
        ${color} bg-opacity-90 dark:bg-opacity-30 
        w-12 h-12 rounded-full 
        flex items-center justify-center mb-6
      `}>
        <Icon className="w-6 h-6 dark:text-gray-200" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {description}
      </p>
      <Link
        to={link}
        className="inline-flex items-center justify-center w-full 
          bg-black/90 dark:bg-white/10 
          text-white dark:text-gray-100 
          py-3 px-6 rounded-lg 
          hover:bg-gray-800 dark:hover:bg-white/20 
          transition-colors"
      >
        {buttonText}
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;