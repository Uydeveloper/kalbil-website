import React from 'react';
import { FaArrowRight, FaTimes, FaUser, FaCalendarAlt, FaHeart, FaComment, FaEye, FaClock, FaHashtag } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BlogDetailModal = ({ post, PostContent, onClose }) => {
  // ئاكادېمىك ئۇسلۇبتىكى ۋاقىت پىچىمى
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ug-CN', options);
  };

  // كىۋانت ئاكادېمىيە نۇسخىسىدىكى كاتېگورىيە رەڭ لاھىيەسى
  const getCategoryStyle = (category) => {
    switch (category) {
      case 'تېخنىكا': return 'from-cyan-600 to-blue-700 shadow-cyan-500/10';
      case 'مەدەنىيەت': return 'from-amber-500 to-amber-700 shadow-amber-500/10';
      case 'سەنئەت': return 'from-rose-500 to-pink-600 shadow-rose-500/10';
      case 'تىل': return 'from-emerald-500 to-teal-700 shadow-emerald-500/10';
      default: return 'from-indigo-500 to-purple-600 shadow-indigo-500/10';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto font-uyghur antialiased custom-modal-scrollbar"
      style={{ direction: 'rtl' }}
      dir="rtl"
    >
      {/* 🔮 ئارقا كۆرۈنۈش نۇرلۇق بوشلۇقى قەۋىتى */}
      <motion.div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* 🏛️ ئاساسىي ئېكران گەۋدىسى */}
      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        
        {/* 🔮 كىۋانت ئېنېرگىيە نۇر ئېففېكتى */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

        {/* 📌 يۇقىرى چوققا مېنۇ (Sticky Navigation Bar) */}
        <div className="sticky top-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 border-b border-slate-200/80 dark:border-slate-800/80 flex justify-between items-center shadow-sm">
          
          {/* ئوڭ تەرەپ: قايتىش كۇنۇپكىسى (RTL يۆنىلىشى بويىچە FaArrowRight ئىشلىتىلدى) */}
          <motion.button
            onClick={onClose}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-bold text-sm group transition-colors cursor-pointer"
            whileHover={{ x: -4 }}
          >
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <span>بىلوگلارغا قايتىش</span>
          </motion.button>

          {/* ئوتتۇرا قىسىم: تېما */}
          <h2 className="hidden md:block text-base font-black text-slate-800 dark:text-slate-100 text-center flex-1 px-8 max-w-2xl truncate">
            {post.title}
          </h2>

          {/* سول تەرەپ: يېپىش كۇنۇپكىسى */}
          <button
            onClick={onClose}
            className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl transition-all active:scale-95 cursor-pointer"
            aria-label="يېپىش"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>

        {/* 📄 مەزمۇن كۆزنىكى قۇتىسى (90% چوڭلۇق قىلىپ تۈزەلدى) */}
        <div
          className="mx-auto px-4 py-10 relative z-10"
          style={{
            width: '90%',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-8"
          >
            
            {/* 🏷️ چوڭ باش بەلگە كارتىسى (Header Card) */}
            <div
              className={`bg-gradient-to-r ${getCategoryStyle(post.category)} text-white rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden`}
              style={{ textAlign: 'right' }}
            >
              {/* بېزەك تېخنىكىلىق چەمبەر */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-md" />

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-xl text-xs font-black tracking-wide">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-white/80 text-xs font-medium">
                  <FaCalendarAlt className="w-3.5 h-3.5" />
                  <span>{formatDate(post.date)}</span>
                </div>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-8 leading-snug drop-shadow-sm">
                {post.title}
              </h1>

              {/* ئاپتور ۋە سىتاتىستىكا ئۇچۇرلىرى */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
                
                {/* ئاپتور قىسمى */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
                    <FaUser className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-base text-white">{post.author}</p>
                    <p className="text-xs text-white/80 flex items-center gap-1.5 mt-0.5 font-sans font-light">
                      <FaClock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </p>
                  </div>
                </div>

                {/* سانلىق مەلۇمات بەلگىلىرى */}
                <div className="flex items-center gap-5 bg-black/10 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/5 self-start sm:self-auto font-sans text-xs font-bold">
                  <div className="flex items-center gap-1.5 hover:text-red-200 transition-colors">
                    <FaHeart className="text-red-400" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="w-px h-3 bg-white/20" />
                  <div className="flex items-center gap-1.5 hover:text-cyan-200 transition-colors">
                    <FaComment className="text-cyan-300" />
                    <span>{post.comments}</span>
                  </div>
                  <div className="w-px h-3 bg-white/20" />
                  <div className="flex items-center gap-1.5">
                    <FaEye className="text-emerald-300" />
                    <span>{post.views}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* 📖 ئاساسىي مەزمۇن تاختىسى */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] p-6 md:p-10 shadow-xl transition-all duration-300">
              
              {/* بىلوگ رەسىمى */}
              {post.image && (
                <div className="mb-8 rounded-2xl overflow-hidden shadow-md max-h-[460px] bg-slate-100 dark:bg-slate-950">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              )}

              {/* خەتكۈشلەر (Tags) */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2.5 mb-8 justify-start">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800/80 hover:bg-cyan-50 dark:hover:bg-cyan-950/30 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1 shadow-sm border border-slate-200/30 dark:border-slate-700/30 cursor-default"
                    >
                      <FaHashtag className="opacity-40 text-[10px]" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              )}

              {/* مەنبە كومپونېنتتىن كەلگەن تولۇق ئاكادېمىك تېكىست مەزمۇنى */}
              <div className="prose prose-slate lg:prose-lg max-w-none dark:prose-invert prose-headings:font-black prose-p:leading-loose prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:text-justify text-base md:text-lg">
                {PostContent ? (
                  <PostContent />
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-slate-400 gap-3">
                    <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm font-medium">مەزمۇن يۈكلىنىۋاتىدۇ...</p>
                  </div>
                )}
              </div>

            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailModal;