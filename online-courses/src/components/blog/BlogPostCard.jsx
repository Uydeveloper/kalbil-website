// BlogPostCard.jsx
import React from 'react';
import { FaUser, FaCalendarAlt, FaHeart, FaComment, FaGlobe, FaTag } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BlogPostCard = ({ post, onClick }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ug-CN', options);
  };

  // كاتېگورىيە رەڭگى
  const getCategoryStyle = (category) => {
    switch (category) {
      case 'تېخنىكا': return 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white';
      case 'مەدەنىيەت': return 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white';
      case 'سەنئەت': return 'bg-gradient-to-r from-pink-500 to-rose-600 text-white';
      case 'تىل': return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white';
      default: return 'bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white';
    }
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full border border-gray-200 dark:border-gray-700 flex flex-col"
      style={{ direction: 'rtl' }}
      whileHover={{ y: -8, scale: 1.015 }}
      onClick={onClick}
    >
      {/* رەسىم */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 rounded-full text-sm font-bold ${getCategoryStyle(post.category)}`}>
            {post.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end pb-4 px-4">
          <p className="text-white text-sm line-clamp-2">{post.summary}</p>
        </div>
      </div>
      
      {/* مەزمۇن */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-md">
              <FaUser className="w-5 h-5 text-white" />
            </div>
            <div style={{ textAlign: 'right' }}>
              <p className="font-bold text-sm text-gray-900 dark:text-white">{post.author}</p>
              <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs" style={{ direction: 'ltr' }}>
                <FaCalendarAlt className="w-3.5 h-3.5" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5 bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-full">
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 line-clamp-2 dark:text-white" style={{ textAlign: 'right' }}>
          {post.title}
        </h3>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4" style={{ justifyContent: 'flex-end' }}>
            {post.tags.slice(0, 3).map((tag, tagIndex) => (
              <span 
                key={tagIndex} 
                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-700 dark:text-gray-300 flex items-center gap-1 border border-gray-200 dark:border-gray-600 transition hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <FaTag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                <FaHeart className="w-4 h-4 text-red-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{post.likes}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaComment className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{post.comments}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaGlobe className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{post.views}</span>
              </div>
            </div>
            
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm flex items-center gap-1">
              ← تولۇق ئوقۇش
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;