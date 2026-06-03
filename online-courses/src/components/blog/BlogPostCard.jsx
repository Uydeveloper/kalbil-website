import React from 'react';
import { FaUser, FaCalendarAlt, FaHeart, FaComment, FaEye, FaHashtag, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BlogPostCard = ({ post, onClick }) => {
  // ئاكادېمىك ئۇسلۇبتىكى ۋاقىت پىچىمى
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ug-CN', options);
  };

  // كىۋانت ئاكادېمىيە نۇسخىسىدىكى نۇرلۇق كاتېگورىيە رەڭ لاھىيەسى
  const getCategoryStyle = (category) => {
    switch (category) {
      case 'تېخنىكا': return 'from-cyan-500 to-blue-600 shadow-cyan-500/20';
      case 'مەدەنىيەت': return 'from-amber-500 to-amber-600 shadow-amber-500/20';
      case 'سەنئەت': return 'from-rose-500 to-pink-600 shadow-rose-500/20';
      case 'تىل': return 'from-emerald-500 to-teal-600 shadow-emerald-500/20';
      default: return 'from-indigo-500 to-purple-600 shadow-indigo-500/20';
    }
  };

  return (
    <motion.div
      className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200/80 dark:border-slate-800/80 transition-all duration-500 cursor-pointer h-full flex flex-col font-uyghur select-none group relative"
      style={{ direction: 'rtl' }}
      whileHover={{ y: -8, scale: 1.01 }}
      onClick={onClick}
    >
      
      {/* 🖼️ رەسىم قىسمى (كۈچەيتىلگەن لىنزا ئېففېكتى) */}
      <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-950 flex-shrink-0">
        
        {/* بىلوگ رەسىمى */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* غۇۋا تۇمانلىق ئارقا قەۋەت رەڭ بېزەك */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:via-slate-950/40 transition-all duration-300" />
        
        {/* تاللانغان كاتېگورىيە بەلگىسى */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-4 py-1.5 bg-gradient-to-r ${getCategoryStyle(post.category)} text-white rounded-xl text-xs font-black shadow-lg backdrop-blur-md`}>
            {post.category}
          </span>
        </div>

        {/* رەسىم ئۈستىدىكى قىسقىچە مەزمۇن (ئابونت چاشقىنەكنى ئەكەلگەندە چىقىدۇ) */}
        <div className="absolute inset-0 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <p className="text-slate-200 text-xs leading-relaxed font-medium line-clamp-2 bg-slate-950/40 backdrop-blur-sm p-3 rounded-xl border border-white/5 shadow-inner">
            {post.summary}
          </p>
        </div>
      </div>
      
      {/* 📄 مەزمۇن تاختىسى قىسمى */}
      <div className="p-6 flex flex-col flex-grow bg-white dark:bg-slate-900 transition-colors duration-300">
        
        {/* ئاپتور ۋە ۋاقىت ئۇچۇرى */}
        <div className="flex items-center justify-between mb-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            {/* ئاپتور باش رەسىم قۇتىسى */}
            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-2xl flex items-center justify-center shadow-inner group-hover:border-cyan-500/30 transition-colors duration-300">
              <FaUser className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 transition-colors" />
            </div>
            <div style={{ textAlign: 'right' }}>
              <p className="font-black text-sm text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{post.author}</p>
              {/* ۋاقىت پىچىمى (RTL كود سىستېمىسىدا چىرايلىق چىقىرىلدى) */}
              <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-[11px] font-sans font-medium mt-0.5">
                <FaCalendarAlt className="w-3 h-3 text-slate-400/80" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </div>
          
          {/* ئوقۇش ۋاقتى بەلگىسى */}
          <div className="text-[10px] font-sans font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 px-2.5 py-1 rounded-xl">
            <span>{post.readTime}</span>
          </div>
        </div>
        
        {/* بىلوگ تېمىسى */}
        <h3 className="text-lg font-black mb-4 line-clamp-2 text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 leading-snug" style={{ textAlign: 'right' }}>
          {post.title}
        </h3>
        
        {/* ئاستى قىسىم: خەتكۈشلەر ۋە سىتاتىستىكا زەنجىرى */}
        <div className="mt-auto pt-4 space-y-4">
          
          {/* خەتكۈشلەر (Tags - ئەڭ كۆپ بولغاندا 3 تال كۆرسىتىدۇ) */}
          <div className="flex flex-wrap gap-2 justify-start">
            {post.tags.slice(0, 3).map((tag, tagIndex) => (
              <span 
                key={tagIndex} 
                className="px-3 py-1 bg-slate-50 dark:bg-slate-800/50 hover:bg-cyan-50 dark:hover:bg-cyan-950/20 text-[11px] text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-xl flex items-center gap-1 border border-slate-200/60 dark:border-slate-800/60 transition-all duration-200 font-bold"
              >
                <FaHashtag className="w-2.5 h-2.5 opacity-40" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
          
          {/* سىتاتىستىكا كۆرسەتكۈچلىرى ۋە ئۇلىنىش لىنىيەسى */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80 font-sans text-xs font-bold text-slate-500 dark:text-slate-400">
            
            {/* لىكلار، ئىنكاسلار ۋە كۆرۈش سانى (FaGlobe ئورنىغا ئەتراپلىق بولۇشى ئۈچۈن FaEye كۆز بەلگىسى ئىشلىتىلدى) */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 hover:text-rose-500 transition-colors">
                <FaHeart className="w-3.5 h-3.5 text-rose-400/90" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center gap-1 hover:text-cyan-500 transition-colors">
                <FaComment className="w-3.5 h-3.5 text-cyan-400/90" />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center gap-1 hover:text-emerald-500 transition-colors">
                <FaEye className="w-3.5 h-3.5 text-emerald-400/90" />
                <span>{post.views}</span>
              </div>
            </div>
            
            {/* سول تەرەپ: يۆنىلىشلىك ئوق كۇنۇپكىسى (RTL سۈپىتىدە FaArrowLeft جەلپكار قىلىندى) */}
            <span className="text-cyan-600 dark:text-cyan-400 font-black text-xs flex items-center gap-1 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors font-uyghur">
              <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>تولۇق ئوقۇش</span>
            </span>

          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default BlogPostCard;