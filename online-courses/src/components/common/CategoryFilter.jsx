import React from 'react';
import { motion } from 'framer-motion';

const CategoryFilter = ({ categories, activeFilter, onFilterChange }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            activeFilter === category 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;