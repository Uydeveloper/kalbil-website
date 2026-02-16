import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useLang } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import PostsModal from './PostsModal';
import PostCard from './PostCard';
import PostDetailModal from './PostDetailModal';

const Posts = () => {
  const { user } = useContext(UserContext);
  const { lang } = useLang();
  const { darkMode } = useTheme();
  
  const [showPostsModal, setShowPostsModal] = useState(false);
  const [showPostDetail, setShowPostDetail] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  // كاتېگورىيەلەر
  const categories = [
    { value: 'all', label: lang === 'ug' ? 'ھەممىسى' : 'All' },
    { value: 'physics', label: lang === 'ug' ? 'فىزىكا' : 'Physics' },
    { value: 'mathematics', label: lang === 'ug' ? 'ماتېماتىكا' : 'Mathematics' },
    { value: 'programming', label: lang === 'ug' ? 'پروگراممىلاش' : 'Programming' },
    { value: 'philosophy', label: lang === 'ug' ? 'پەلسەپە' : 'Philosophy' },
    { value: 'quantum', label: lang === 'ug' ? 'كوانت فىزىكىسى' : 'Quantum Physics' },
    { value: 'technology', label: lang === 'ug' ? 'تېخنولوگىيە' : 'Technology' },
    { value: 'other', label: lang === 'ug' ? 'باشقىلار' : 'Other' }
  ];

  // يازمىلارنى يۈكلەش
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  // يېڭى يازما قوشۇش
  const handleNewPost = (newPost) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  // يازما ئۆزگەرتىش
  const handleEditPost = (updatedPost) => {
    const updatedPosts = posts.map(post => 
      post.id === updatedPost.id 
        ? { 
            ...updatedPost, 
            editHistory: [
              ...(post.editHistory || []),
              {
                editedBy: user.id,
                editedByName: user.name,
                editedAt: new Date().toISOString(),
                previousContent: post.content,
                previousTitle: post.title
              }
            ]
          } 
        : post
    );
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setEditingPost(null);
  };

  // يازما ئۆچۈرۈش
  const handleDeletePost = (postId) => {
    const postToDelete = posts.find(p => p.id === postId);
    const deletionRecord = {
      deletedBy: user.id,
      deletedByName: user.name,
      deletedAt: new Date().toISOString(),
      postTitle: postToDelete?.title,
      postAuthor: postToDelete?.authorName,
      postCategory: postToDelete?.category
    };

    const deletionHistory = JSON.parse(localStorage.getItem('postDeletionHistory')) || [];
    deletionHistory.push(deletionRecord);
    localStorage.setItem('postDeletionHistory', JSON.stringify(deletionHistory));

    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setShowPostDetail(false);
  };

  const handleDeleteCard = (postId) => {
    if (window.confirm(lang === 'ug' ? 'بۇ يازمىنى ئۆچۈرۈشنى جەزملەشتۈرەمسىز؟' : 'Are you sure you want to delete this post?')) {
      handleDeletePost(postId);
    }
  };

  const handleLike = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const isLiked = post.likes?.includes(user?.id);
        return {
          ...post,
          likes: isLiked 
            ? post.likes.filter(id => id !== user?.id)
            : [...(post.likes || []), user?.id]
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleAddComment = (postId, comment) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...(post.comments || []), {
            id: Date.now(),
            userId: user?.id,
            userName: user?.name || 'User',
            text: comment,
            timestamp: new Date().toISOString()
          }]
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    setShowPostDetail(true);
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setShowPostsModal(true);
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.authorName?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // 🛠️ باشقۇرغۇچى پانېلى
  const AdminPanel = () => {
    const [deletionHistory, setDeletionHistory] = useState([]);

    useEffect(() => {
      const history = JSON.parse(localStorage.getItem('postDeletionHistory')) || [];
      setDeletionHistory(history);
    }, []);

    const clearDeletionHistory = () => {
      localStorage.setItem('postDeletionHistory', JSON.stringify([]));
      setDeletionHistory([]);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center p-4 z-50">
        <div className={`rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {lang === 'ug' ? 'باشقۇرغۇچى پانېلى' : 'Admin Panel'}
              </h2>
              <button
                onClick={() => setShowAdminPanel(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* ئىستاتىستىكا كارتىلىرى */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: lang === 'ug' ? 'جەمئىي يازما' : 'Total Posts', value: posts.length, color: 'blue' },
                  { label: lang === 'ug' ? 'جەمئىي كوممېنت' : 'Total Comments', value: posts.reduce((a, p) => a + (p.comments?.length || 0), 0), color: 'green' },
                  { label: lang === 'ug' ? 'جەمئىي ياقتۇرۇش' : 'Total Likes', value: posts.reduce((a, p) => a + (p.likes?.length || 0), 0), color: 'yellow' },
                  { label: lang === 'ug' ? 'ئۆچۈرۈلگەن' : 'Deleted', value: deletionHistory.length, color: 'red' }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl text-center shadow-sm ${
                      darkMode
                        ? `bg-${stat.color}-900/20 border border-${stat.color}-800/50`
                        : `bg-${stat.color}-50 border border-${stat.color}-200`
                    }`}
                  >
                    <div className={`text-2xl font-bold ${
                      darkMode ? `text-${stat.color}-300` : `text-${stat.color}-600`
                    }`}>
                      {stat.value}
                    </div>
                    <div className={`text-xs mt-1 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* ئۆچۈرۈش تارىخى */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">
                    {lang === 'ug' ? 'ئۆچۈرۈش تارىخى' : 'Deletion History'}
                  </h3>
                  <button
                    onClick={clearDeletionHistory}
                    className="px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition"
                  >
                    {lang === 'ug' ? 'تازىلاش' : 'Clear'}
                  </button>
                </div>
                <div className={`max-h-64 overflow-y-auto p-2 rounded-lg ${
                  darkMode ? 'bg-gray-900/50' : 'bg-gray-50'
                }`}>
                  {deletionHistory.length > 0 ? (
                    deletionHistory.map((record, index) => (
                      <div
                        key={index}
                        className={`p-3 mb-2 last:mb-0 rounded-lg ${
                          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                        }`}
                      >
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">{record.postTitle}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {record.postCategory || '—'} • {record.postAuthor || '—'}
                            </p>
                          </div>
                          <div className="text-right text-xs text-gray-500 dark:text-gray-400">
                            <p>{record.deletedByName}</p>
                            <p>{new Date(record.deletedAt).toLocaleDateString()}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center py-4 text-gray-500 dark:text-gray-400">
                      {lang === 'ug' ? 'ئۆچۈرۈش تارىخى يوق' : 'No deletion history'}
                    </p>
                  )}
                </div>
              </div>

              {/* كاتېگورىيە ئىستاتىستىكىسى */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {lang === 'ug' ? 'كاتېگورىيە بويىچە' : 'By Category'}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {categories.filter(cat => cat.value !== 'all').map(category => {
                    const count = posts.filter(post => post.category === category.value).length;
                    return (
                      <div
                        key={category.value}
                        className={`p-3 rounded-lg text-center ${
                          darkMode ? 'bg-gray-800' : 'bg-gray-100'
                        }`}
                      >
                        <div className="font-bold text-lg">{count}</div>
                        <div className="text-xs mt-1 text-gray-600 dark:text-gray-300">
                          {category.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 🎨 ئورتاق رەڭ كىلاسسى
  const containerClass = darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800';
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const inputClass = darkMode
    ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400'
    : 'bg-white text-gray-800 border-gray-300 placeholder-gray-500';

  return (
    <div className={`min-h-screen py-10 px-4 ${containerClass}`}>
      <div className="max-w-7xl mx-auto">
        {/* باشلىق */}
        <div className="text-center mb-10 mt-6">
            <div className="relative inline-block mb-2">
                 <img   src= {`${process.env.PUBLIC_URL}/images/image05.png` } 
  /> 
                
                  {/* <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <FaNewspaper className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div> */}
                </div>
          {/* <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-5 shadow-lg">
              
            <span className="text-2xl text-white">📜</span>
          </div> */}
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent mb-3">
            {lang === 'ug' ? 'يازمىلار' : 'Posts'}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {lang === 'ug'
              ? 'ئەڭ يېڭى يازمىلار بىلەن تونۇشۇڭ'
              : 'Discover the latest posts and articles'}
          </p>
        </div>

        {/* باشقۇرغۇچى پانېلى تۇمىسى */}
        {user?.role === 'admin' && (
          <div className="text-center mb-6">
            <button
              onClick={() => setShowAdminPanel(true)}
              className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition shadow-lg"
            >
              🔧 {lang === 'ug' ? 'باشقۇرغۇچى پانېلى' : 'Admin Panel'}
            </button>
          </div>
        )}

        {/* فيلترلەش ۋە ئىزدەش */}
        <div className={`mb-10 p-6 rounded-2xl shadow-md border ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-2">
                {lang === 'ug' ? 'يازما ئىزدەش' : 'Search Posts'}
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'ug' ? 'تىما، مەزمۇن ياكى ئاپتور ئىزدەڭ...' : 'Search by title, content...'}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputClass}`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {lang === 'ug' ? 'كاتېگورىيە' : 'Category'}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputClass}`}
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-between items-center gap-3">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {lang === 'ug'
                ? `${filteredPosts.length} يازما تېپىلدى`
                : `${filteredPosts.length} posts found`}
            </span>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {lang === 'ug' ? 'فىلترلەرنى تازىلاش' : 'Clear Filters'}
              </button>
            )}
          </div>
        </div>

        {/* يازما يېزىش كۇنۇپكىسى */}
        {user && (
          <div className="text-center mb-10">
            <button
              onClick={() => {
                setEditingPost(null);
                setShowPostsModal(true);
              }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              ✍️ {lang === 'ug' ? 'يازما يېزىش' : 'Write Post'}
            </button>
          </div>
        )}

        {/* يازمىلار گرىدىسى */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <PostCard
                key={post.id}
                post={post}
                onLike={handleLike}
                onComment={handleAddComment}
                onSelect={handleSelectPost}
                onEdit={user?.role === 'admin' || post.authorId === user?.id ? handleEdit : null}
                onDelete={user?.role === 'admin' || post.authorId === user?.id ? handleDeleteCard : null}                currentUser={user}
                lang={lang}
                darkMode={darkMode}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 opacity-70">🔍</div>
            <h3 className="text-2xl font-bold text-gray-500 dark:text-gray-400 mb-3">
              {lang === 'ug' ? 'يازما تېپىلمىدى' : 'No posts found'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-6">
              {lang === 'ug'
                ? searchQuery || selectedCategory !== 'all'
                  ? 'باشقا ئىزدەش سۆزى ياكى كاتېگورىيە تاللاڭ'
                  : 'بىرىنچى يازمىڭىزنى يېزىڭ!'
                : searchQuery || selectedCategory !== 'all'
                ? 'Try different search terms or category'
                : 'Be the first to write a post!'}
            </p>
            {user && (
              <button
                onClick={() => setShowPostsModal(true)}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition"
              >
                ✍️ {lang === 'ug' ? 'يازما يېزىش' : 'Write Post'}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Modals */}
      {showPostsModal && (
        <PostsModal
          post={editingPost}
          onClose={() => {
            setShowPostsModal(false);
            setEditingPost(null);
          }}
          onSuccess={editingPost ? handleEditPost : handleNewPost}
          isEditing={!!editingPost}
        />
      )}

      {showPostDetail && selectedPost && (
        <PostDetailModal
          post={selectedPost}
          onClose={() => setShowPostDetail(false)}
          onLike={handleLike}
          onComment={handleAddComment}
          onEdit={user?.role === 'admin' || selectedPost.authorId === user?.id ? handleEdit : null}
          onDelete={user?.role === 'admin' || selectedPost.authorId === user?.id ? handleDeletePost : null}
          currentUser={user}
        />
      )}

      {showAdminPanel && <AdminPanel />}
    </div>
  );
};

export default Posts;