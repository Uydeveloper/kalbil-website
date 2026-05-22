// MyBlog.jsx
import React, { useState, lazy, Suspense } from 'react';
import { FaNewspaper } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import BlogPostCard from '../components/blog/BlogPostCard';
import BlogDetailModal from '../components/blog/BlogDetailModal';
import CategoryFilter from '../components/common/CategoryFilter';
import { BLOG_POSTS, categories } from '../utils/blogData';


// Lazy loading
const Blog01 = lazy(() => import('../components/blog/posts/Blog01'));
const Blog02 = lazy(() => import('../components/blog/posts/Blog02'));
const Blog03 = lazy(() => import('../components/blog/posts/Blog03'));
const Blog04 = lazy(() => import('../components/blog/posts/Blog04'));
const Blog05 = lazy(() => import('../components/blog/posts/Blog05'));
const Blog06 = lazy(() => import('../components/blog/posts/Blog06'));
const Blog07 = lazy(() => import('../components/blog/posts/Blog07'));
const Blog08 = lazy(() => import('../components/blog/posts/Blog08'));
const Blog09 = lazy(() => import('../components/blog/posts/Blog09'));
const Blog10 = lazy(() => import('../components/blog/posts/Blog10'));
const Blog11 = lazy(() => import('../components/blog/posts/Blog11'));
const Blog12 = lazy(() => import('../components/blog/posts/Blog12'));
const Blog13 = lazy(() => import('../components/blog/posts/Blog13'));
const Blog14 = lazy(() => import('../components/blog/posts/Blog14'));
const Blog15 = lazy(() => import('../components/blog/posts/Blog15'));
const Blog16 = lazy(() => import('../components/blog/posts/Blog16'));
const Blog17 = lazy(() => import('../components/blog/posts/Blog17'));
const Blog18 = lazy(() => import('../components/blog/posts/Blog18'));
const Blog19 = lazy(() => import('../components/blog/posts/Blog19'));
const Blog20 = lazy(() => import('../components/blog/posts/Blog20'));
const Blog21 = lazy(() => import('../components/blog/posts/Blog21'));
const Blog22 = lazy(() => import('../components/blog/posts/Blog22'));
const Blog23 = lazy(() => import('../components/blog/posts/Blog23'));
const Blog24 = lazy(() => import('../components/blog/posts/Blog24'));
const Blog25 = lazy(() => import('../components/blog/posts/Blog25'));
const Blog26 = lazy(() => import('../components/blog/posts/Blog26'));
const Blog27 = lazy(() => import('../components/blog/posts/Blog27'));
const Blog28 = lazy(() => import('../components/blog/posts/Blog28'));
const Blog29 = lazy(() => import('../components/blog/posts/Blog29'));
const Blog30 = lazy(() => import('../components/blog/posts/Blog30'));
const Blog31 = lazy(() => import('../components/blog/posts/Blog31'));
const Blog32 = lazy(() => import('../components/blog/posts/Blog32'));
const Blog33 = lazy(() => import('../components/blog/posts/Blog33'));
const Blog34 = lazy(() => import('../components/blog/posts/Blog34'));
const Blog35 = lazy(() => import('../components/blog/posts/Blog35'));
const Blog36 = lazy(() => import('../components/blog/posts/Blog36'));
const Blog37 = lazy(() => import('../components/blog/posts/Blog37'));
const Blog38 = lazy(() => import('../components/blog/posts/Blog38'));
const Blog39 = lazy(() => import('../components/blog/posts/Blog39'));
const Blog40 = lazy(() => import('../components/blog/posts/Blog40'));
const Blog41 = lazy(() => import('../components/blog/posts/Blog41'));
const Blog42 = lazy(() => import('../components/blog/posts/Blog42'));
const Blog43 = lazy(() => import('../components/blog/posts/Blog43'));
const Blog44 = lazy(() => import('../components/blog/posts/Blog44'));
const Blog45 = lazy(() => import('../components/blog/posts/Blog45'));
const Blog46 = lazy(() => import('../components/blog/posts/Blog46'));
const Blog47 = lazy(() => import('../components/blog/posts/Blog47'));
const Blog48 = lazy(() => import('../components/blog/posts/Blog48'));
const Blog49 = lazy(() => import('../components/blog/posts/Blog49'));
const Blog50 = lazy(() => import('../components/blog/posts/Blog50'));
const Blog51 = lazy(() => import('../components/blog/posts/Blog51'));
const Blog52 = lazy(() => import('../components/blog/posts/Blog52'));
const Blog53 = lazy(() => import('../components/blog/posts/Blog53'));
const Blog54 = lazy(() => import('../components/blog/posts/Blog54'));
const Blog55 = lazy(() => import('../components/blog/posts/Blog55'));
const Blog56 = lazy(() => import('../components/blog/posts/Blog56'));
const Blog57 = lazy(() => import('../components/blog/posts/Blog57'));
const Blog58 = lazy(() => import('../components/blog/posts/Blog58'));
const Blog59 = lazy(() => import('../components/blog/posts/Blog59'));
const Blog60 = lazy(() => import('../components/blog/posts/Blog60'));
const Blog61 = lazy(() => import('../components/blog/posts/Blog61'));
const Blog62 = lazy(() => import('../components/blog/posts/Blog62'));
const Blog63 = lazy(() => import('../components/blog/posts/Blog63'));
const Blog64 = lazy(() => import('../components/blog/posts/Blog64'));
const Blog65 = lazy(() => import('../components/blog/posts/Blog65'));
const Blog66 = lazy(() => import('../components/blog/posts/Blog66'));
const Blog67 = lazy(() => import('../components/blog/posts/Blog67'));
const Blog68 = lazy(() => import('../components/blog/posts/Blog68'));
const Blog69 = lazy(() => import('../components/blog/posts/Blog69'));
const Blog70 = lazy(() => import('../components/blog/posts/Blog70'));
const Blog71 = lazy(() => import('../components/blog/posts/Blog71'));
const Blog72 = lazy(() => import('../components/blog/posts/Blog72'));
const Blog73 = lazy(() => import('../components/blog/posts/Blog73'));
const Blog74 = lazy(() => import('../components/blog/posts/Blog74'));
const Blog75 = lazy(() => import('../components/blog/posts/Blog75'));
const Blog76 = lazy(() => import('../components/blog/posts/Blog76'));
const Blog77 = lazy(() => import('../components/blog/posts/Blog77'));
const Blog78 = lazy(() => import('../components/blog/posts/Blog78'));
const Blog79 = lazy(() => import('../components/blog/posts/Blog79'));
const Blog80 = lazy(() => import('../components/blog/posts/Blog80'));
const Blog81 = lazy(() => import('../components/blog/posts/Blog81'));
const Blog82 = lazy(() => import('../components/blog/posts/Blog82'));
const Blog83 = lazy(() => import('../components/blog/posts/Blog83'));
const Blog84 = lazy(() => import('../components/blog/posts/Blog84'));
const Blog85 = lazy(() => import('../components/blog/posts/Blog85'));
const Blog86 = lazy(() => import('../components/blog/posts/Blog86'));
const Blog87 = lazy(() => import('../components/blog/posts/Blog87'));
const Blog88 = lazy(() => import('../components/blog/posts/Blog88'));
const Blog89 = lazy(() => import('../components/blog/posts/Blog89'));
const Blog90 = lazy(() => import('../components/blog/posts/Blog90'));
const Blog91 = lazy(() => import('../components/blog/posts/Blog91'));
const Blog92 = lazy(() => import('../components/blog/posts/Blog92'));
const Blog93 = lazy(() => import('../components/blog/posts/Blog93'));
const Blog94 = lazy(() => import('../components/blog/posts/Blog94'));
const Blog95 = lazy(() => import('../components/blog/posts/Blog95'));
const Blog96 = lazy(() => import('../components/blog/posts/Blog96'));
const Blog97 = lazy(() => import('../components/blog/posts/Blog97'));
const Blog98 = lazy(() => import('../components/blog/posts/Blog98'));
const Blog99 = lazy(() => import('../components/blog/posts/Blog99'));
const Blog100 = lazy(() => import('../components/blog/posts/Blog100'));
const Blog101 = lazy(() => import('../components/blog/posts/Blog101'));
const Blog102 = lazy(() => import('../components/blog/posts/Blog102'));
const Blog103 = lazy(() => import('../components/blog/posts/Blog103'));
const Blog104 = lazy(() => import('../components/blog/posts/Blog104'));
const Blog105 = lazy(() => import('../components/blog/posts/Blog105'));
const Blog106 = lazy(() => import('../components/blog/posts/Blog106'));
const Blog107 = lazy(() => import('../components/blog/posts/Blog107'));
const Blog108 = lazy(() => import('../components/blog/posts/Blog108'));
const Blog109 = lazy(() => import('../components/blog/posts/Blog109'));
const Blog110 = lazy(() => import('../components/blog/posts/Blog110'));
const Blog111 = lazy(() => import('../components/blog/posts/Blog111'));
const Blog112 = lazy(() => import('../components/blog/posts/Blog112'));
const Blog113 = lazy(() => import('../components/blog/posts/Blog113'));
const Blog114 = lazy(() => import('../components/blog/posts/Blog114'));
const Blog115 = lazy(() => import('../components/blog/posts/Blog115'));
const Blog116 = lazy(() => import('../components/blog/posts/Blog116'));
const Blog117 = lazy(() => import('../components/blog/posts/Blog117'));
const Blog118 = lazy(() => import('../components/blog/posts/Blog118'));
const Blog119 = lazy(() => import('../components/blog/posts/Blog119'));
const Blog120 = lazy(() => import('../components/blog/posts/Blog120'));
const Blog121 = lazy(() => import('../components/blog/posts/Blog121'));
const Blog122 = lazy(() => import('../components/blog/posts/Blog122'));
const Blog123 = lazy(() => import('../components/blog/posts/Blog123'));
const Blog124 = lazy(() => import('../components/blog/posts/Blog124'));
const Blog125 = lazy(() => import('../components/blog/posts/Blog125'));
const Blog126 = lazy(() => import('../components/blog/posts/Blog126'));
const Blog127 = lazy(() => import('../components/blog/posts/Blog127'));
const Blog128 = lazy(() => import('../components/blog/posts/Blog128'));
const Blog129 = lazy(() => import('../components/blog/posts/Blog129'));





// Fallback for missing components
const FallbackComponent = ({ post }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
          <FaNewspaper className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
            بىلوگ مەزمۇنى
          </span>
        </div>
        
        <h1 className="font-uyghur text-xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
              {post.author.charAt(0)}
            </div>
            <span>ئاپتور: {post.author}</span>
          </div>
          <div className="hidden md:block">•</div>
          <div>{post.date}</div>
          <div className="hidden md:block">•</div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
      
      <div className="prose prose-lg max-w-none dark:prose-invert" style={{ direction: 'rtl', textAlign: 'right' }}>
        <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl">
          <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-300">
            مەزمۇن تەييارلىنىۋاتىدۇ...
          </h3>
          <p className="text-blue-700 dark:text-blue-200">
            بۇ بىلوگنىڭ تولۇق مەزمۇنى تەييارلىنىۋاتىدۇ. تېخىمۇ كۆپ ئۇچۇر ئۈچۈن كېيىن قايتا كىرىڭ.
          </p>
          <div className="mt-6">
            <button 
              onClick={() => window.history.back()}
              className="font-uyghur text-2xl px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              ← ئارقاغا قايتىش
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MyBlog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ھەممىسى');

  const filteredPosts = activeFilter === 'ھەممىسى'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === activeFilter);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseDetail = () => {
    setSelectedPost(null);
  };

  // كومپونېنتنى قايتۇرۇش (ئىشلەتكەن component نامى بويىچە)
  const getPostComponent = (componentName) => {
    switch (componentName) {
      case 'Blog129': return Blog129;
      case 'Blog128': return Blog128;
      case 'Blog127': return Blog127;
      case 'Blog126': return Blog126;
      case 'Blog125': return Blog125;
      case 'Blog124': return Blog124;
      case 'Blog123': return Blog123;
      case 'Blog122': return Blog122;
      case 'Blog121': return Blog121;
      case 'Blog120': return Blog120;
      case 'Blog01': return Blog01;
      case 'Blog02': return Blog02;
      case 'Blog03': return Blog03;
      case 'Blog04': return Blog04;
      case 'Blog05': return Blog05;
      case 'Blog06': return Blog06;
      case 'Blog07': return Blog07;
      case 'Blog08': return Blog08;
      case 'Blog09': return Blog09;
      case 'Blog10': return Blog10;
      case 'Blog11': return Blog11;
      case 'Blog12': return Blog12;
      case 'Blog13': return Blog13;
      case 'Blog14': return Blog14;
      case 'Blog15': return Blog15;
      case 'Blog16': return Blog16;
      case 'Blog17': return Blog17;
      case 'Blog18': return Blog18;
      case 'Blog19': return Blog19;
      case 'Blog20': return Blog20;
      case 'Blog21': return Blog21;
      case 'Blog22': return Blog22;
      case 'Blog23': return Blog23;
      case 'Blog24': return Blog24;
      case 'Blog25': return Blog25;
      case 'Blog26': return Blog26;
      case 'Blog27': return Blog27;
      case 'Blog28': return Blog28;
      case 'Blog29': return Blog29;
      case 'Blog30': return Blog30;
      case 'Blog31': return Blog31;
      case 'Blog32': return Blog32;
      case 'Blog33': return Blog33;
      case 'Blog34': return Blog34;
      case 'Blog35': return Blog35;
      case 'Blog36': return Blog36;
      case 'Blog37': return Blog37;
      case 'Blog38': return Blog38;
      case 'Blog39': return Blog39;
      case 'Blog40': return Blog40;
      case 'Blog41': return Blog41;
      case 'Blog42': return Blog42;
      case 'Blog43': return Blog43;
      case 'Blog44': return Blog44;
      case 'Blog45': return Blog45;
      case 'Blog46': return Blog46;
      case 'Blog47': return Blog47;
      case 'Blog48': return Blog48;
      case 'Blog49': return Blog49;
      case 'Blog50': return Blog50;
      case 'Blog51': return Blog51;
      case 'Blog52': return Blog52;
      case 'Blog53': return Blog53;
      case 'Blog54': return Blog54;
      case 'Blog55': return Blog55;
      case 'Blog56': return Blog56;
      case 'Blog57': return Blog57;
      case 'Blog58': return Blog58;
      case 'Blog59': return Blog59;
      case 'Blog60': return Blog60;
      case 'Blog61': return Blog61;
      case 'Blog62': return Blog62;
      case 'Blog63': return Blog63;
      case 'Blog64': return Blog64;
      case 'Blog65': return Blog65;
      case 'Blog66': return Blog66;
      case 'Blog67': return Blog67;
      case 'Blog68': return Blog68;
      case 'Blog69': return Blog69;
      case 'Blog70': return Blog70;
      case 'Blog71': return Blog71;
      case 'Blog72': return Blog72;
      case 'Blog73': return Blog73;
      case 'Blog74': return Blog74;
      case 'Blog75': return Blog75;
      case 'Blog76': return Blog76;
      case 'Blog77': return Blog77;
      case 'Blog78': return Blog78;
      case 'Blog79': return Blog79;
      case 'Blog80': return Blog80;
      case 'Blog81': return Blog81;
      case 'Blog82': return Blog82;
      case 'Blog83': return Blog83;
      case 'Blog84': return Blog84;
      case 'Blog85': return Blog85;
      case 'Blog86': return Blog86;
      case 'Blog87': return Blog87;
      case 'Blog88': return Blog88;
      case 'Blog89': return Blog89;
      case 'Blog90': return Blog90;
      case 'Blog91': return Blog91;
      case 'Blog92': return Blog92;
      case 'Blog93': return Blog93;
      case 'Blog94': return Blog94;
      case 'Blog95': return Blog95;
      case 'Blog96': return Blog96;
      case 'Blog97': return Blog97;
      case 'Blog98': return Blog98;
      case 'Blog99': return Blog99;
      case 'Blog100': return Blog100;
      case 'Blog101': return Blog101;
      case 'Blog102': return Blog102;
      case 'Blog103': return Blog103;
      case 'Blog104': return Blog104;
      case 'Blog105': return Blog105;
      case 'Blog106': return Blog106;
      case 'Blog107': return Blog107;
      case 'Blog108': return Blog108;
      case 'Blog109': return Blog109;
      case 'Blog110': return Blog110;
      case 'Blog111': return Blog111;
      case 'Blog112': return Blog112;
      case 'Blog113': return Blog113;
      case 'Blog114': return Blog114;
      case 'Blog115': return Blog115;
      case 'Blog116': return Blog116;
      case 'Blog117': return Blog117;
      case 'Blog118': return Blog118;
      case 'Blog119': return Blog119;

      



      
      default: return ({ post }) => <FallbackComponent post={post} />;
    }
  };

  // PostContent نى كومپونېنت قىلىپ تەييارلاش
  const PostContent = selectedPost ? getPostComponent(selectedPost.component) : null;

  return (
    <div className="font-uyghur text-xl min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800" style={{ direction: 'rtl' }}>
      <AnimatePresence mode="wait">
        {selectedPost ? (
          <Suspense fallback={
            <div className="font-uyghur text-2xl fixed inset-0 z-50 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center" style={{ direction: 'rtl' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="font-uyghur text-2xl text-center"
              >
                <div className="font-uyghur text-2xl w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                <motion.h3 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-uyghur text-2xl font-bold mb-2 text-gray-900 dark:text-white"
                >
                  مەزمۇن يۈكلەۋاتىدۇ
                </motion.h3>
                <motion.p 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 dark:text-gray-300"
                >
                  {selectedPost.title}
                </motion.p>
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6"
                >
                  <div className="font-uyghur text-2xl flex justify-center gap-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          }>
            <BlogDetailModal
              post={selectedPost}
              PostContent={PostContent}
              onClose={handleCloseDetail}
            />
          </Suspense>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="font-uyghur container mx-auto px-4 py-8"
            style={{ direction: 'rtl' }}
          >
            {/* باش بەلگە */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6"
              >
                <div className="relative">
                 <img   src= {`${process.env.PUBLIC_URL}/images/image05.png` } 
  /> 
                
                  {/* <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <FaNewspaper className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div> */}
                </div>
              </motion.div>

              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-1xl md:text-5xl font-bold mb-10 mt-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                 تورخاتىرەم

              </motion.h1>

              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto  mb-8"
              >
                ئۇيغۇر مەدەنىيىتى، تېخنىكا ۋە سەنئەت ھەققىدىكى ئەڭ يېڭى خەۋەرلەر ۋە تەھلىللەر
              </motion.p>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-uyghur text-2xl  flex flex-wrap justify-center gap-4"
              >
                <div className="font-uyghur text-2xl flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <span className="text-blue-700 dark:text-blue-300 font-medium">
                    {BLOG_POSTS.length} ماقالى
                  </span>
                </div>
                <div className=" flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <span className="text-purple-700 dark:text-purple-300 font-medium">
                    {BLOG_POSTS.reduce((sum, post) => sum + post.views, 0).toLocaleString()} كۆرۈش
                  </span>
                </div>
              </motion.div>
            </div>

            {/* تۈرلەر تاللاش */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-uyghur text-2xl mb-12"
            >
              <CategoryFilter
                categories={categories}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </motion.div>

            {/* بىلوگ كارتىلىرى */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-uyghur text-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <BlogPostCard
                    post={post}
                    onClick={() => handlePostClick(post)}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* ئۇچۇر خاتىرىسى */}
            {filteredPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="font-uyghur text-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-lg mb-12 overflow-hidden relative"
              >
                <div className="font-uyghur text-2xl absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="font-uyghur text-2xl absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full translate-y-20 -translate-x-20"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                    ستاتىستىكىلىق مەلۇماتلار
                  </h3>
                  
                  <div className="font-uyghur text-2xl grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="font-uyghur text-2xl  text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {BLOG_POSTS.length}
                      </div>
                      <div className="text-gray-700 dark:text-gray-300">تولۇق خەۋەر</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                        {BLOG_POSTS.reduce((sum, post) => sum + post.views, 0).toLocaleString()}
                      </div>
                      <div className="text-gray-700 dark:text-gray-300">ئومۇمىي كۆرۈش</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                        {BLOG_POSTS.reduce((sum, post) => sum + post.likes, 0).toLocaleString()}
                      </div>
                      <div className="text-gray-700 dark:text-gray-300">ئومۇمىي لايىك</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                        {BLOG_POSTS.reduce((sum, post) => sum + post.comments, 0).toLocaleString()}
                      </div>
                      <div className="text-gray-700 dark:text-gray-300">ئومۇمىي باھا</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                      <div className="text-center md:text-right">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">ئەڭ كۆپ كۆرۈلگەن ماقالى</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {BLOG_POSTS.reduce((max, post) => post.views > max.views ? post : max, BLOG_POSTS[0]).title}
                        </p>
                      </div>
                      <div className="text-center md:text-left">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">ئەڭ كۆپ لايىك تاپقان</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {BLOG_POSTS.reduce((max, post) => post.likes > max.likes ? post : max, BLOG_POSTS[0]).title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ئىزدەش ۋە قوشۇمچە ئۇچۇر */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              <div className="font-uyghur text-3xl bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h4 className="font-uyghur text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  تېخىمۇ كۆپ ماقالىلەر كېلەۋاتىدۇ
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  بىز تېخىمۇ كۆپ ئۇيغۇر مەدەنىيىتى ۋە تېخنىكا مەزمۇنلىرىنى تەييارلاۋاتىمىز.
                </p>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <span className="text-sm font-medium">مۇناسىۋەتلىك تېمىلار:</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm">دىجىتال سەنئەت</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full text-sm">تىل تېخنىكىسى</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full text-sm">مۇزىكا تېخنىكىسى</span>
                  </div>
                </div>
              </div>
              
              <div className="font-uyghur text-3xl bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 shadow-lg text-white">
                <h4 className="text-xl font-bold mb-4">ئەزا بولۇڭ</h4>
                <p className="mb-4 opacity-90">
                  يېڭى ماقالىلەرگە ۋاقىتا ئېرىشىش ئۈچۈن ئەزا بولۇڭ.
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="ئېلېكترونلۇق خەت ئادرېسىڭىز"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="px-4 py-2 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  ئەزا بولۇش
                  </button>
                </div>
              </div>
            </motion.div>

            {/* ئاستىدىكى ئۇچۇر */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="font-uyghur text-2xl text-center text-gray-500 dark:text-gray-400 text-sm"
            >
              <p className="font-uyghur text-2xl mb-2">© 2024 ئۇيغۇر رەقەملىك مەدەنىيەت بىلوگى. بارلىق ھوقۇقلار مەخپىي.</p>
              <p className="font-uyghur text-2xl ">بىلوگنىڭ بارلىق مەزمۇنلىرى ئەسلىي ۋە ئىجادىيەت مەھسۇلاتىدۇر.</p>
              <div className="flex justify-center gap-4 mt-4">
                <button className="font-uyghur text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xs">
                  ئىشلىتىش شەرتلىرى
                </button>
                <button className="font-uyghur text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xs">
                  مەخپىيەتلىك سىياسىتى
                </button>
                <button className="font-uyghur text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xs">
                  ئالاقە
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyBlog;