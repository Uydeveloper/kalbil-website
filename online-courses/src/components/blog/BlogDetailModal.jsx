// components/blog/BlogDetailModal.jsx
import React from 'react';
import { FaArrowLeft, FaTimes, FaUser, FaCalendarAlt, FaHeart, FaComment, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BlogDetailModal = ({ post, PostContent, onClose }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ug-CN', options);
  };

  // كاتېگورىيە رەڭگى
  const getCategoryStyle = (category) => {
    switch (category) {
      case 'تېخنىكا': return 'from-blue-500 to-indigo-600';
      case 'مەدەنىيەت': return 'from-yellow-500 to-amber-600';
      case 'سەنئەت': return 'from-pink-500 to-rose-600';
      case 'تىل': return 'from-green-500 to-emerald-600';
      default: return 'from-purple-500 to-fuchsia-600';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ direction: 'rtl' }}
      dir="rtl"
    >
      {/* ئارقا توش */}
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* ئىككىران ئاساسىي مەزمۇن */}
      <div className="relative min-h-screen bg-white dark:bg-gray-900">
        {/* ئۇستىدىكى مېنۇ */}
        <div className="sticky top-0 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center shadow-sm">
          <motion.button
            onClick={onClose}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium group"
            whileHover={{ x: 5 }}
          >
            <FaArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            بىلوگلارغا قايتىش
          </motion.button>

          <h2 className="text-xl font-bold text-gray-800 dark:text-white text-center flex-1 px-8 truncate">
            {post.title}
          </h2>

          <button
            onClick={onClose}
            className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full ml-4 transition-colors"
            aria-label="يېپ"
          >
            <FaTimes className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* مەزمۇن قۇتىسى — 90% چوڭلۇق، 5% سول ۋە ئوڭ بوس */}
        <div
          className="mx-auto px-4 py-8"
          style={{
            width: '90%',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-10"
          >
            {/* خەۋەر باش بەلگىسى */}
            <div
              className={`bg-gradient-to-r ${getCategoryStyle(post.category)} text-white rounded-3xl p-8 md:p-10 mb-10 shadow-xl`}
              style={{ textAlign: 'right' }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-white/90">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-relaxed">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FaUser className="w-6 h-6" />
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p className="font-bold text-lg">{post.author}</p>
                    <p className="text-sm opacity-90">{post.readTime} ئوقۇش ۋاقتى</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2.5">
                    <FaHeart className="text-xl text-red-200" />
                    <span className="font-medium">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FaComment className="text-xl text-blue-200" />
                    <span className="font-medium">{post.comments}</span>
                  </div>
                  <div className ="flex items-center gap-2.5">
                    <FaEye className="text-xl text-green-200" />
                    <span className="font-medium">{post.views} كۆرۈش</span>
                  </div>
                </div>
              </div>
            </div>

            {/* خەۋەر مەزمۇنى */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-10 shadow-lg border border-gray-200 dark:border-gray-700">
              {post.image && (
                <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}

              <div className="flex flex-wrap gap-3 mb-10 justify-end">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-5 py-2.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* ئايرىم كومپونېنتتىن كەلگەن تولۇق مەزمۇن */}
              <div className="prose prose-lg max-w-none dark:prose-invert">
                {PostContent ? <PostContent /> : <p className="text-gray-500 dark:text-gray-400">مەزمۇن يۈكلىنىۋاتىدۇ...</p>}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailModal;