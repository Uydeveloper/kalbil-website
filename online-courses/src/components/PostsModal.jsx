import React, { useState, useContext, useEffect, useRef } from 'react';
import { UserContext } from '../context/UserContext';
import { useLang } from '../context/LanguageContext';

const PostsModal = ({ post, onClose, onSuccess, isEditing = false }) => {
  const { user } = useContext(UserContext);
  const { lang } = useLang();
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [image, setImage] = useState(post?.image || '');
  const [video, setVideo] = useState(post?.video || '');
  const [category, setCategory] = useState(post?.category || '');
  const [paragraphType, setParagraphType] = useState('normal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentParagraph, setCurrentParagraph] = useState('');
  const [showMathSymbols, setShowMathSymbols] = useState(false);
  const contentTextareaRef = useRef(null);

  // كاتېگورىيەلەر
  const categories = [
    { value: 'physics', label: 'فىزىكا', color: 'bg-blue-500' },
    { value: 'mathematics', label: 'ماتېماتىكا', color: 'bg-green-500' },
    { value: 'programming', label: 'پروگراممىلاش', color: 'bg-purple-500' },
    { value: 'philosophy', label: 'پەلسەپە', color: 'bg-yellow-500' },
    { value: 'quantum', label: 'كوانت فىزىكىسى', color: 'bg-indigo-500' },
    { value: 'technology', label: 'تېخنولوگىيە', color: 'bg-red-500' },
    { value: 'other', label: 'باشقىلار', color: 'bg-gray-500' }
  ];

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setImage(post.image || '');
      setVideo(post.video || '');
      setCategory(post.category || '');
    }
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !category) {
      alert('تېما، مەزمۇن ۋە كاتېگورىيەنى تولدۇرۇڭ!');
      return;
    }

    setIsSubmitting(true);

    const postData = {
      id: isEditing ? post.id : Date.now().toString(),
      title: title.trim(),
      content: content.trim(),
      image: image.trim(),
      video: video.trim(),
      category: category,
      authorId: user.id,
      authorName: user.name || user.email,
      authorBio: user.bio || 'بىلىم ھەۋەسكارى، ئىجادكار يازغۇچى',
      createdAt: isEditing ? post.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      likes: isEditing ? post.likes : [],
      comments: isEditing ? post.comments : [],
      views: isEditing ? post.views : 0,
      editHistory: isEditing ? [...(post.editHistory || []), {
        editedBy: user.id,
        editedByName: user.name,
        editedAt: new Date().toISOString()
      }] : []
    };

    setTimeout(() => {
      onSuccess(postData);
      setIsSubmitting(false);
    }, 2000);
  };

  const insertAtCursor = (text) => {
    const textarea = contentTextareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = content.substring(0, start);
    const after = content.substring(end);
    
    setContent(before + text + after);
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + text.length, start + text.length);
    }, 0);
  };

  const addParagraph = () => {
    if (!currentParagraph.trim()) {
      alert('ئابزاسنى تولدۇرۇڭ!');
      return;
    }

    let formattedParagraph = currentParagraph;
    
    switch (paragraphType) {
      case 'math':
        formattedParagraph = `$$${currentParagraph}$`;
        break;
      case 'code':
        formattedParagraph = `\`\`\`\n${currentParagraph}\n\`\`\``;
        break;
      default:
        break;
    }

    const newContent = content ? `${content}\n\n${formattedParagraph}` : formattedParagraph;
    setContent(newContent);
    setCurrentParagraph('');
    setParagraphType('normal');
  };

  const insertMathSymbol = (symbol) => {
    setCurrentParagraph(prev => prev + symbol);
  };

  const insertCodeBlock = () => {
    insertAtCursor('\n```\n// كودىڭىزنى بۇ يەرگە يېزىڭ\n```\n');
  };

  const insertMathBlock = () => {
    insertAtCursor('\n$$\nفورمۇلا\n$$\n');
  };

  const mathSymbols = [
    'α', 'β', 'γ', 'δ', 'ε', 'θ', 'λ', 'μ', 'π', 'σ', 'ω',
    '∑', '∫', '∂', '∇', '∞', '√', '∛', '±', '≠', '≈', '≤', '≥',
    '×', '÷', '⋅', '→', '⇔', '∈', '∉', '⊂', '⊃', '∪', '∩',
    '∠', '△', '□', '○', '∴', '∵'
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-lg flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-y-auto border-2 border-blue-500 shadow-2xl">
        <div className="p-8">
          {/* ماكارون */}
          <div className="flex justify-between items-center mb-8 border-b-2 border-blue-400 pb-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-['Noto_Sans_Arabic']">
              {isEditing ? '✏️ يازما ئىدىت قىلىش' : '✨ يېڭى يازما يېزىش'}
            </h2>
            <button
              onClick={onClose}
              className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* تېما */}
            <div className="group">
              <label className="block text-lg font-semibold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors font-['Noto_Sans_Arabic']">
                📝 تېما *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="يازمىڭىزنىڭ تېمىسىنى كىرگۈزۈڭ..."
                className="w-full px-6 py-4 bg-gray-800 border-2 border-blue-500 rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white text-lg placeholder-gray-400 transition-all duration-300 font-['Noto_Sans_Arabic']"
                required
              />
            </div>

            {/* كاتېگورىيە ۋە مەدىيا ئادرېسلىرى */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* كاتېگورىيە */}
              <div className="group">
                <label className="block text-lg font-semibold text-green-300 mb-3 group-hover:text-green-200 transition-colors font-['Noto_Sans_Arabic']">
                  🏷️ كاتېگورىيە *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-800 border-2 border-green-500 rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white text-lg transition-all duration-300 appearance-none cursor-pointer font-['Noto_Sans_Arabic']"
                  required
                >
                  <option value="" className="bg-gray-700">كاتېگورىيە تاللاڭ</option>
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value} className="bg-gray-700">
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* مەدىيا ئادرېسلىرى */}
              <div className="space-y-4">
                <div className="group">
                  <label className="block text-lg font-semibold text-yellow-300 mb-3 group-hover:text-yellow-200 transition-colors font-['Noto_Sans_Arabic']">
                    🖼️ رەسىم ئادرېسى
                  </label>
                  <input
                    type="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-6 py-4 bg-gray-800 border-2 border-yellow-500 rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white text-lg placeholder-gray-400 transition-all duration-300 font-['Noto_Sans_Arabic']"
                  />
                </div>
                <div className="group">
                  <label className="block text-lg font-semibold text-red-300 mb-3 group-hover:text-red-200 transition-colors font-['Noto_Sans_Arabic']">
                    🎬 ۋىدىئو ئادرېسى
                  </label>
                  <input
                    type="url"
                    value={video}
                    onChange={(e) => setVideo(e.target.value)}
                    placeholder="https://example.com/video.mp4"
                    className="w-full px-6 py-4 bg-gray-800 border-2 border-red-500 rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white text-lg placeholder-gray-400 transition-all duration-300 font-['Noto_Sans_Arabic']"
                  />
                </div>
              </div>
            </div>

            {/* مەدىيا پرىۋىيۇسى */}
            {(image || video) && (
              <div className="p-6 bg-gray-800 rounded-2xl border-2 border-purple-500 shadow-lg">
                <h4 className="text-lg font-semibold text-purple-300 mb-4 flex items-center font-['Noto_Sans_Arabic']">
                  <span className="mr-2">👁️</span>
                  مەدىيا كۆرۈنۈشى
                </h4>
                <div className="rounded-xl overflow-hidden max-h-64 border-2 border-gray-600">
                  {video ? (
                    <video 
                      controls 
                      className="w-full h-auto max-h-60 object-cover"
                      poster={image}
                    >
                      <source src={video} type="video/mp4" />
                      ۋىدىئو قوللىمايدۇ
                    </video>
                  ) : (
                    <img 
                      src={image} 
                      alt="Preview" 
                      className="w-full h-auto max-h-60 object-cover"
                    />
                  )}
                </div>
              </div>
            )}

            {/* مەزمۇن بۆلۈمى */}
            <div className="group">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-lg font-semibold text-purple-300 group-hover:text-purple-200 transition-colors font-['Noto_Sans_Arabic']">
                  📖 مەزمۇن *
                </label>
                
                {/* كود ۋە ماتېماتىكا قوشۇش تۇمىلىرى */}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={insertCodeBlock}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center font-['Noto_Sans_Arabic']"
                  >
                    <span className="mr-2">💻</span>
                    كود قوشۇش
                  </button>
                  <button
                    type="button"
                    onClick={insertMathBlock}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center font-['Noto_Sans_Arabic']"
                  >
                    <span className="mr-2">📐</span>
                    فورمۇلا قوشۇش
                  </button>
                </div>
              </div>
              
              <textarea
                ref={contentTextareaRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={`يازمىڭىزنىڭ مەزمۇنىنى يېزىڭ...

• كود قوشۇش ئۈچۈن: كود قوشۇش تۇمىسىنى بېسىڭ
• ماتېماتىكا فورمۇلا ئۈچۈن: فورمۇلا قوشۇش تۇمىسىنى بېسىڭ
• ھەر بىر ئابزاس ئايرىم قۇردا بولسۇن`}
                rows="14"
                className="w-full px-6 py-4 bg-gray-800 border-2 border-purple-500 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white text-lg leading-relaxed placeholder-gray-400 resize-vertical font-['Noto_Sans_Arabic'] transition-all duration-300"
                required
              />
            </div>

            {/* ئابزاس قوشۇش قورالى */}
            <div className="p-6 bg-gray-800 rounded-2xl border-2 border-yellow-500 shadow-lg">
              <h4 className="text-lg font-semibold text-yellow-300 mb-4 flex items-center font-['Noto_Sans_Arabic']">
                <span className="mr-2">📝</span>
                ئابزاس قوشۇش
              </h4>
              
              {/* ئابزاس تىپى تاللاش */}
              <div className="flex gap-3 mb-4 flex-wrap">
                <button
                  type="button"
                  onClick={() => setParagraphType('normal')}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 font-['Noto_Sans_Arabic'] ${
                    paragraphType === 'normal' 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  📄 نورمال
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setParagraphType('math');
                    setShowMathSymbols(true);
                  }}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 font-['Noto_Sans_Arabic'] ${
                    paragraphType === 'math' 
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  📐 ماتېماتىكا
                </button>
                <button
                  type="button"
                  onClick={() => setParagraphType('code')}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 font-['Noto_Sans_Arabic'] ${
                    paragraphType === 'code' 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  💻 كود
                </button>
              </div>

              {/* ماتېماتىكا بەلگىلىرى */}
              {paragraphType === 'math' && showMathSymbols && (
                <div className="mb-4 p-4 bg-gray-700 rounded-xl border-2 border-green-500">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-semibold text-green-300 font-['Noto_Sans_Arabic']">
                      🔢 ماتېماتىكا بەلگىلىرى
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowMathSymbols(false)}
                      className="w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {mathSymbols.map((symbol, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => insertMathSymbol(symbol)}
                        className="w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-lg text-lg font-semibold text-white transition-all duration-300 transform hover:scale-110 flex items-center justify-center shadow-md"
                      >
                        {symbol}
                      </button>
                    ))}
                  </div>
                  <div className="text-sm text-gray-300 bg-gray-800 p-3 rounded-lg font-['Noto_Sans_Arabic']">
                    💡 ماتېماتىكا فورمۇلا: <code className="bg-gray-900 px-2 py-1 rounded">$فورمۇلا$</code> - LaTeX شەكلىدە يېزىڭ
                  </div>
                </div>
              )}

              {/* ئابزاس كىرگۈزۈش */}
              <div className="flex gap-3">
                <textarea
                  value={currentParagraph}
                  onChange={(e) => setCurrentParagraph(e.target.value)}
                  placeholder={
                    paragraphType === 'math' 
                      ? 'ماتېماتىكا فورمۇلا يېزىڭ...' 
                      : paragraphType === 'code'
                      ? 'كود يېزىڭ...'
                      : 'ئابزاس يېزىڭ...'
                  }
                  rows="4"
                  className="flex-1 px-4 py-3 bg-gray-700 border-2 border-blue-500 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white resize-none placeholder-gray-400 font-['Noto_Sans_Arabic'] transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={addParagraph}
                  disabled={!currentParagraph.trim()}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg self-start flex items-center font-['Noto_Sans_Arabic']"
                >
                  <span className="mr-2">➕</span>
                  قوشۇش
                </button>
              </div>
            </div>

            {/* ئاكتىپلار */}
            <div className="flex gap-4 pt-6 border-t-2 border-gray-700">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-8 py-4 bg-gray-700 hover:bg-gray-600 border-2 border-gray-500 text-white rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-['Noto_Sans_Arabic']"
              >
                <span className="mr-2">❌</span>
                بىكار قىلىش
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !title.trim() || !content.trim() || !category}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-['Noto_Sans_Arabic']"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    ساقلىنىۋاتىدۇ...
                  </>
                ) : (
                  <>
                    <span className="mr-2">{isEditing ? '💾' : '✨'}</span>
                    {isEditing ? 'يازمانى يېڭىلاش' : 'يازمانى ساقلاش'}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostsModal;