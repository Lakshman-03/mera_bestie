import React from 'react';
import { motion } from 'framer-motion';
import { Pen, Mail, Heart, Star, Gift, Users, Clock, ShieldCheck } from 'lucide-react';
import CategoryCard from '../components/home/CategoryCard';

const Home = () => {
  const features = [
    { icon: Clock, title: "Fast Delivery", description: "Get your gifts delivered within 24-48 hours" },
    { icon: ShieldCheck, title: "Secure Payment", description: "100% secure payment methods" },
    { icon: Gift, title: "Gift Wrapping", description: "Free premium gift wrapping service" },
    { icon: Users, title: "24/7 Support", description: "Round the clock customer support" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Happy Customer",
      content: "Found the perfect gift for my best friend. The quality was amazing!",
      rating: 5
    },
    // Add more testimonials
  ];

  return (
    <div className="space-y-16">
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[600px] "
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Gift boxes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        </div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center"
        >
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
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <feature.icon className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Discover Our Categories
        </motion.h2>
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

      {/* Testimonials Section */}
      <section className="bg-purple-50 dark:bg-purple-900/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{testimonial.content}</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Make Someone's Day Special?</h2>
            <p className="text-lg mb-8">Join thousands of happy customers who found the perfect gift</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold"
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;