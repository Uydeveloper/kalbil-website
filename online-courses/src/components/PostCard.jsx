import React, { useState } from 'react';

const PostCard = ({ post, onLike, onComment, onSelect, onEdit, onDelete, currentUser, lang, darkMode }) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const isLiked = post.likes?.includes(currentUser?.id);
  const isAuthor = currentUser && post.authorId === currentUser.id;
  const isAdmin = currentUser && currentUser.role === 'admin';

  // كاردا ئېگىزلىكى مۇقىم
  const cardHeight = '420px';

  const handleLikeClick = (e) => {
    e.stopPropagation();
    if (!currentUser) {
      alert(lang === 'ug' ? 'ئالدى بىلەن تىزىملىتىڭ!' : 'Please login first!');
      return;
    }
    onLike(post.id);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!currentUser) {
      alert(lang === 'ug' ? 'ئالدى بىلەن تىزىملىتىڭ!' : 'Please login first!');
      return;
    }
    if (newComment.trim()) {
      onComment(post.id, newComment.trim());
      setNewComment('');
    }
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    if (onEdit) onEdit(post);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (onDelete) onDelete(post.id);
  };

  // كاتېگورىيە رەڭلىرى
  const categoryColors = {
    physics: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    mathematics: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    programming: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    philosophy: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    quantum: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
    technology: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    other: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
  };

  const categoryLabel = {
    physics: lang === 'ug' ? 'فىزىكا' : 'Physics',
    mathematics: lang === 'ug' ? 'ماتېماتىكا' : 'Mathematics',
    programming: lang === 'ug' ? 'پروگراممىلاش' : 'Programming',
    philosophy: lang === 'ug' ? 'پەلسەپە' : 'Philosophy',
    quantum: lang === 'ug' ? 'كوانت فىزىكىسى' : 'Quantum Physics',
    technology: lang === 'ug' ? 'تېخنولوگىيە' : 'Technology',
    other: lang === 'ug' ? 'باشقىلار' : 'Other'
  };

  return (
    <div 
      className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
      }`}
      style={{ height: cardHeight }}
      onClick={() => onSelect(post)}
    >
      
      {/* رەسىم / ۋىدىئو */}
      {post.image && (
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {/* كاتېگورىيە بەلگىسى */}
          {post.category && (
            <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${categoryColors[post.category] || categoryColors.other}`}>
              {categoryLabel[post.category] || categoryLabel.other}
            </div>
          )}
        </div>
      )}

      {/* مەزمۇن بۆلۈمى */}
      <div className="p-4 flex-1 flex flex-col">
        {/* تېما */}
        <h3 className="text-lg font-bold mb-2 text-blue-600 dark:text-blue-400 line-clamp-2 flex-shrink-0">
          {post.title}
        </h3>

        {/* ئاپتور ئۇچۇرلىرى */}
        <div className="flex items-center gap-3 mb-3 flex-shrink-0">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {post.authorName?.charAt(0) || 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm truncate">{post.authorName}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {new Date(post.createdAt).toLocaleDateString(lang === 'ug' ? 'ug-CN' : 'en-US')}
            </p>
          </div>
        </div>

        {/* يازما مەزمۇنى */}
        <div className="flex-1 overflow-hidden mb-3">
          <p className={`text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 ${
            lang === 'ug' ? 'text-right' : 'text-left'
          }`} style={{ direction: lang === 'ug' ? 'rtl' : 'ltr' }}>
            {post.content}
          </p>
        </div>

        {/* ئىنتېرئاكتىپلار - مۇقىم ئورۇندا */}
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={handleLikeClick}
              className={`flex items-center gap-1 transition-colors ${
                isLiked ? 'text-red-500' : 'hover:text-red-500'
              }`}
            >
              <span className="text-base">❤️</span>
              <span className="text-xs">{post.likes?.length || 0}</span>
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowComments(!showComments);
              }}
              className="flex items-center gap-1 hover:text-blue-500 transition-colors"
            >
              <span className="text-base">💬</span>
              <span className="text-xs">{post.comments?.length || 0}</span>
            </button>
            <div className="flex items-center gap-1">
              <span className="text-base">👁️</span>
              <span className="text-xs">{post.views || 0}</span>
            </div>
          </div>
          
          {/* باشقۇرۇش تۇمىلىرى */}
          <div className="flex items-center gap-1">
            {(isAdmin || isAuthor) && (
              <>
                <button
                  onClick={handleEditClick}
                  className="w-6 h-6 bg-blue-500 text-white rounded text-xs flex items-center justify-center hover:bg-blue-600 transition-colors"
                  title={lang === 'ug' ? 'ئىدىت قىلىش' : 'Edit'}
                >
                  ✏️
                </button>
                <button
                  onClick={handleDeleteClick}
                  className="w-6 h-6 bg-red-500 text-white rounded text-xs flex items-center justify-center hover:bg-red-600 transition-colors"
                  title={lang === 'ug' ? 'ئۆچۈرۈش' : 'Delete'}
                >
                  🗑️
                </button>
              </>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(post);
              }}
              className="text-blue-500 hover:text-blue-600 font-semibold text-xs px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/30"
            >
              {lang === 'ug' ? 'تەپسىلات' : 'Details'}
            </button>
          </div>
        </div>
      </div>

      {/* كوممېنتلار - ئايرىم بۆلۈم */}
      {showComments && (
        <div 
          className="border-t border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-700/50 flex-shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-h-32 overflow-y-auto mb-2">
            {post.comments?.slice(0, 2).map(comment => (
              <div key={comment.id} className="mb-2 last:mb-0">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">
                    {comment.userName?.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-xs text-gray-700 dark:text-gray-300 truncate">
                      {comment.userName}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
                      {comment.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {post.comments && post.comments.length > 2 && (
              <p className="text-xs text-gray-500 text-center">
                + {post.comments.length - 2} {lang === 'ug' ? 'تېخىمۇ كۆپ' : 'more'}
              </p>
            )}
          </div>

          {/* يېڭى كوممېنت يېزىش */}
          <form onSubmit={handleCommentSubmit} className="flex gap-1">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={lang === 'ug' ? 'كوممېنت...' : 'Comment...'}
              className="flex-1 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
              style={{ direction: lang === 'ug' ? 'rtl' : 'ltr' }}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors text-xs"
            >
              {lang === 'ug' ? 'يوللا' : 'Post'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostCard;