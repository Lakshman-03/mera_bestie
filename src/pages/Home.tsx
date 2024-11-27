import React from 'react';
import { Pen, Mail, Heart } from 'lucide-react';
import CategoryCard from '../components/home/CategoryCard';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Gift boxes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find the Perfect Gift for Your Bestie
            </h1>
            <p className="text-xl mb-8">
              Discover our curated collection of unique gifts, stationery, and greeting cards that will make your loved ones smile.
            </p>
            <a
              href="#categories"
              className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Explore Categories
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard
            title="Stationery Items"
            description="Elegant and practical stationery for all your needs."
            icon={Pen}
            color="bg-purple-100"
            bgColor="bg-purple-50"
            link="/stationery"
            buttonText="Shop Now"
          />
          <CategoryCard
            title="Greeting Cards & Gifts"
            description="Express your feelings with our thoughtful cards and gifts."
            icon={Mail}
            color="bg-pink-100"
            bgColor="bg-pink-50"
            link="/greeting-cards"
            buttonText="Explore"
          />
          <CategoryCard
            title="Gifts for Couples"
            description="Celebrate love with our specially curated couple gifts."
            icon={Heart}
            color="bg-red-100"
            bgColor="bg-red-50"
            link="/couple-gifts"
            buttonText="Discover"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;