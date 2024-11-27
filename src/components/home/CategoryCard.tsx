import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

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
    <div className={`${bgColor} rounded-2xl p-8 shadow-lg transition-transform hover:scale-105`}>
      <div className={`${color} w-12 h-12 rounded-full flex items-center justify-center mb-6`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-8">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center justify-center w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
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
    </div>
  );
};

export default CategoryCard;