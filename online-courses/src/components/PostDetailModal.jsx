import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useLang } from '../context/LanguageContext';

const PostDetailModal = ({ post, onClose, onLike, onComment, onEdit, onDelete, currentUser }) => {
  const { lang } = useLang();
  const [newComment, setNewComment] = useState('');
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [showEditMenu, setShowEditMenu] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  const isLiked = post.likes?.includes(currentUser?.id);
  const isAuthor = currentUser && post.authorId === currentUser.id;
  const isAdmin = currentUser && currentUser.role === 'admin';

  // خەت چوڭلۇقىنى تەڭشەش
  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));
  const resetFontSize = () => setFontSize(16);

  const handleLike = () => {
    if (!currentUser) {
      alert(lang === 'ug' ? 'ئالدى بىلەن تىزىملىتىڭ!' : 'Please login first!');
      return;
    }
    onLike(post.id);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert(lang === 'ug' ? 'ئالدى بىلەن تىزىملىتىڭ!' : 'Please login first!');
      return;
    }
    if (newComment.trim()) {
      onComment(post.id, newComment.trim());
      setNewComment('');
      setShowCommentForm(false);
    }
  };

  const handleEdit = () => {
    setShowEditMenu(false);
    onEdit(post);
  };

  const handleDelete = () => {
    setShowDeleteConfirm(false);
    onDelete(post.id);
  };

  // مەزمۇننى ئابزاسلارغا ئايرىش
  const renderContent = () => {
    if (!post.content) return null;

    const paragraphs = post.content.split('\n\n').filter(p => p.trim());
    
    return paragraphs.map((paragraph, index) => {
      if (!paragraph.trim()) return null;

      // ماتېماتىكا فورمۇلا تەكشۈرۈش
      const mathMatch = paragraph.match(/^\$\$(.+)\$$/);
      if (mathMatch) {
        return (
          <div key={index} className="my-8 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg text-center border border-gray-200 dark:border-gray-600">
            <div className="text-2xl font-math text-gray-800 dark:text-gray-200" style={{ fontSize: `${fontSize + 4}px` }}>
              {mathMatch[1]}
            </div>
          </div>
        );
      }

      // كود بۆلۈمى تەكشۈرۈش
      const codeMatch = paragraph.match(/^```(?:\w+)?\n([\s\S]*?)\n```$/);
      if (codeMatch) {
        return (
          <div key={index} className="my-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 text-gray-300 text-sm">
                {lang === 'ug' ? 'كود' : 'Code'}
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-green-400 font-mono text-sm leading-relaxed">
                  {codeMatch[1]}
                </code>
              </pre>
            </div>
          </div>
        );
      }

      // نورمال ئابزاس
      return (
        <div 
          key={index} 
          className={`my-8 leading-relaxed ${
            lang === 'ug' 
              ? 'text-right font-uyghur pr-8' 
              : 'text-left font-sans pl-8'
          }`}
          style={{
            direction: lang === 'ug' ? 'rtl' : 'ltr',
            fontSize: `${fontSize}px`,
            lineHeight: lang === 'ug' ? '2.2' : '1.8'
          }}
        >
          {/* بىرىنچى ئابزاسنىڭ بىرىنچى ھەرپىنى چوڭ قىلىش */}
          {index === 0 ? (
            <>
              <span 
                className={`inline-block text-blue-600 dark:text-blue-400 font-bold ${
                  lang === 'ug' ? 'float-right ml-4 -mt-1' : 'float-left mr-4 -mt-1'
                }`}
                style={{
                  fontSize: `${fontSize + 16}px`,
                  lineHeight: '0.8'
                }}
              >
                {paragraph.charAt(0)}
              </span>
              <span className="text-gray-800 dark:text-gray-200">
                {paragraph.slice(1)}
              </span>
            </>
          ) : (
            <span className="text-gray-800 dark:text-gray-200">
              {paragraph}
            </span>
          )}
        </div>
      );
    });
  };

  // رەڭ پالىترىسى
  const commentColors = [
    'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-700',
    'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-700',
    'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-700',
    'bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-700',
    'bg-pink-50 border-pink-200 dark:bg-pink-900/20 dark:border-pink-700',
    'bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-700',
    'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-700',
    'bg-teal-50 border-teal-200 dark:bg-teal-900/20 dark:border-teal-700',
    'bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-700',
    'bg-cyan-50 border-cyan-200 dark:bg-cyan-900/20 dark:border-cyan-700'
  ];

  const getCommentColor = (userId) => {
    const index = userId ? parseInt(userId.toString().slice(-2)) % commentColors.length : 0;
    return commentColors[index];
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto relative">
        
        {/* يېپىش تۇمىسى */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <span className="text-xl">✕</span>
        </button>

        {/* ئىدىت/ئۆچۈرۈش تۇمىلىرى - پەقەت باشقۇرغۇچى ياكى يازغۇچى ئۈچۈن */}
        {(isAdmin || isAuthor) && (
          <div className="absolute top-4 left-4 z-10">
            <div className="relative">
              <button
                onClick={() => setShowEditMenu(!showEditMenu)}
                className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <span className="text-xl">⚙️</span>
              </button>
              
              {showEditMenu && (
                <div className="absolute top-12 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 min-w-32">
                  <button
                    onClick={handleEdit}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span>✏️</span>
                    <span>{lang === 'ug' ? 'ئىدىت قىلىش' : 'Edit'}</span>
                  </button>
                  {isAuthor && (
                    <button
                      onClick={() => setShowDeleteConfirm(true)}
                      className="w-full px-4 py-2 text-left hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 rounded-b-lg flex items-center gap-2"
                    >
                      <span>🗑️</span>
                      <span>{lang === 'ug' ? 'ئۆچۈرۈش' : 'Delete'}</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="p-8">
          {/* ئاپتور ئۇچۇرلىرى */}
          <div className="text-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-8">
            <div className="flex flex-col items-center">
              {/* ئاۋاتار */}
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg">
                {post.authorName?.charAt(0) || 'U'}
              </div>
              
              {/* ئىسىم ۋە تەرجىمال */}
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {post.authorName}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4 max-w-md leading-relaxed">
                {post.authorBio || (lang === 'ug' ? 'بىلىم ھەۋەسكارى، ئىجادكار يازغۇچى' : 'Knowledge enthusiast, creative writer')}
              </p>
            </div>
          </div>

          {/* ۋىدىئو / رەسىم */}
          {(post.image || post.video) && (
            <div className="mb-12 rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              {post.video ? (
                <video 
                  controls 
                  className="w-full h-auto max-h-96 object-cover"
                  poster={post.image}
                >
                  <source src={post.video} type="video/mp4" />
                  {lang === 'ug' ? 'ۋىدىئو قوللىمايدۇ' : 'Video not supported'}
                </video>
              ) : (
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-auto max-h-96 object-cover"
                />
              )}
            </div>
          )}

          {/* يازما تېمىسى */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
              {post.title}
            </h1>
          </div>

          {/* خەت چوڭلۇقى تەڭشەش تۇمىلىرى */}
          <div className="flex justify-center items-center gap-4 mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
              {lang === 'ug' ? 'خەت چوڭلۇقى:' : 'Font Size:'}
            </span>
            <button
              onClick={decreaseFontSize}
              className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
              title={lang === 'ug' ? 'كىچىكلەت' : 'Decrease'}
            >
              A
            </button>
            <button
              onClick={resetFontSize}
              className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors font-medium"
              title={lang === 'ug' ? 'نورمال' : 'Normal'}
            >
              A
            </button>
            <button
              onClick={increaseFontSize}
              className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-lg font-medium"
              title={lang === 'ug' ? 'چوڭايت' : 'Increase'}
            >
              A
            </button>
          </div>

          {/* يازما مەزمۇنى */}
          <div className="mb-12">
            {renderContent()}
          </div>

          {/* ئۆچۈرۈش جەزملەشتۈرۈش مودالى */}
          {showDeleteConfirm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm mx-4 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
                  {lang === 'ug' ? 'ئۆچۈرۈشنى جەزملەشتۈرۈڭ' : 'Confirm Deletion'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {lang === 'ug' 
                    ? 'بۇ يازمىنى ئۆچۈرۈشنى جەزملەشتۈرەمسىز؟ بۇ ھەرىكەت قايتۇرۇلمايدۇ.' 
                    : 'Are you sure you want to delete this post? This action cannot be undone.'}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
                  >
                    {lang === 'ug' ? 'بىكار قىلىش' : 'Cancel'}
                  </button>
                  <button
                    onClick={handleDelete}
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
                  >
                    {lang === 'ug' ? 'ئۆچۈرۈش' : 'Delete'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* كوممېنتلار بۆلۈمى */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            {/* كوممېنت يېزىش فورمىسى */}
            {showCommentForm && (
              <form onSubmit={handleCommentSubmit} className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder={lang === 'ug' ? 'كوممېنتىڭىزنى يېزىڭ...' : 'Write your comment...'}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none placeholder-gray-400 font-sans"
                  style={{ direction: lang === 'ug' ? 'rtl' : 'ltr' }}
                />
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    type="button"
                    onClick={() => setShowCommentForm(false)}
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors font-medium"
                  >
                    {lang === 'ug' ? 'بىكار قىلىش' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    disabled={!newComment.trim()}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors font-medium"
                  >
                    {lang === 'ug' ? 'كوممېنت قوشۇش' : 'Add Comment'}
                  </button>
                </div>
              </form>
            )}

            {/* كوممېنتلار تىزىملىكى */}
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {lang === 'ug' ? 'كوممېنتلار' : 'Comments'} ({post.comments?.length || 0})
                </h3>
                <button
                  onClick={() => setShowCommentForm(!showCommentForm)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  {lang === 'ug' ? 'كوممېنت يېزىش' : 'Write Comment'}
                </button>
              </div>
              
              {post.comments?.map((comment, index) => {
                const isOwnComment = currentUser && comment.userId === currentUser.id;
                const commentColor = getCommentColor(comment.userId);
                
                return (
                  <div 
                    key={comment.id} 
                    className={`p-4 rounded-xl border-2 ${commentColor} ${
                      isOwnComment 
                        ? (lang === 'ug' ? 'ml-12 mr-0' : 'mr-12 ml-0') 
                        : (lang === 'ug' ? 'mr-12 ml-0' : 'ml-12 mr-0')
                    }`}
                  >
                    <div className={`flex gap-3 ${lang === 'ug' ? 'flex-row-reverse' : ''}`}>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-md">
                        {comment.userName?.charAt(0)}
                      </div>
                      <div className={`flex-1 min-w-0 ${lang === 'ug' ? 'text-right' : 'text-left'}`}>
                        <div className={`flex justify-between items-start mb-2 ${lang === 'ug' ? 'flex-row-reverse' : ''}`}>
                          <span className="font-semibold text-gray-800 dark:text-white text-base">
                            {comment.userName}
                            {isOwnComment && (
                              <span className="text-blue-500 text-sm ml-2 font-medium">
                                ({lang === 'ug' ? 'سىز' : 'You'})
                              </span>
                            )}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex-shrink-0 font-medium">
                            {new Date(comment.timestamp).toLocaleDateString(lang === 'ug' ? 'ug-CN' : 'en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                        </div>
                        <p 
                          className="text-gray-700 dark:text-gray-200 text-base break-words leading-relaxed font-sans"
                          style={{ 
                            direction: lang === 'ug' ? 'rtl' : 'ltr',
                            textAlign: lang === 'ug' ? 'right' : 'left'
                          }}
                        >
                          {comment.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {(!post.comments || post.comments.length === 0) && (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  <span className="text-5xl mb-4 block">💬</span>
                  <p className="text-lg font-medium mb-2">
                    {lang === 'ug' ? 'تېخى ھېچقانداق كوممېنت يوق' : 'No comments yet'}
                  </p>
                  <p className="text-sm">
                    {lang === 'ug' ? 'بىرىنچى كوممېنتىڭىزنى يېزىڭ!' : 'Be the first to write a comment!'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailModal;