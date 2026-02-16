// online-courses/src/components/learn-modules/tests/tests.jsx
import React, { useState, Suspense, lazy, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// تەپ تىزىملىكى — ھەر بىرىنىڭ ئۇيغۇرچە ۋە ئىنگلىزچە نامى
const testItems = [
  { 
    id: 'statistics-test1', 
    title: 'ئىستاتىستىكىلىق سىناق 1', 
    en: 'Probability & Distributions',
    category: 'statistics',
    difficulty: 'يېڭى باشلىغۇچى',
    questions: 20,
    time: '30 مىنۇت',
    completed: false,
    progress: 0,
    color: 'from-blue-500 to-indigo-600'
  },
  { 
    id: 'statistics-test2', 
    title: 'ئىستاتىستىكىلىق سىناق 2', 
    en: 'Parameter Estimation',
    category: 'statistics',
    difficulty: 'ئوتتۇرا',
    questions: 25,
    time: '45 مىنۇت',
    completed: true,
    progress: 100,
    color: 'from-purple-500 to-pink-600'
  },
  { 
    id: 'statistics-test3', 
    title: 'ئىستاتىستىكىلىق سىناق 3', 
    en: 'Hypothesis Testing',
    category: 'statistics',
    difficulty: 'ئالىي',
    questions: 30,
    time: '60 مىنۇت',
    completed: false,
    progress: 45,
    color: 'from-green-500 to-teal-600'
  },
  { 
    id: 'statistics-test4', 
    title: 'ئىستاتىستىكىلىق سىناق 4', 
    en: 'Multivariate Analysis',
    category: 'statistics',
    difficulty: 'ئىختىساسلىق',
    questions: 35,
    time: '75 مىنۇت',
    completed: false,
    progress: 0,
    color: 'from-amber-500 to-orange-600'
  },
  { 
    id: 'python-test1', 
    title: 'Python سىناق 1', 
    en: 'Python Basics',
    category: 'python',
    difficulty: 'يېڭى باشلىغۇچى',
    questions: 15,
    time: '25 مىنۇت',
    completed: true,
    progress: 100,
    color: 'from-emerald-500 to-cyan-600'
  },
  { 
    id: 'python-test2', 
    title: 'Python سىناق 2', 
    en: 'NumPy & Pandas',
    category: 'python',
    difficulty: 'ئوتتۇرا',
    questions: 22,
    time: '40 مىنۇت',
    completed: false,
    progress: 70,
    color: 'from-rose-500 to-red-600'
  },
  { 
    id: 'python-test3', 
    title: 'Python سىناق 3', 
    en: 'Machine Learning',
    category: 'python',
    difficulty: 'ئالىي',
    questions: 28,
    time: '55 مىنۇت',
    completed: false,
    progress: 30,
    color: 'from-violet-500 to-purple-600'
  },
  { 
    id: 'python-test4', 
    title: 'Python سىناق 4', 
    en: 'Data Visualization',
    category: 'python',
    difficulty: 'ئوتتۇرا',
    questions: 18,
    time: '35 مىنۇت',
    completed: false,
    progress: 10,
    color: 'from-sky-500 to-blue-600'
  },
];

// دىنامىك import — ئوخشاش ئاتلىق فېيددىن
const loadTestComponent = (id) => {
  try {
    // @ts-ignore
    return lazy(() => import(`./${id}.jsx`));
  } catch (err) {
    console.error(`Component not found: ${id}.jsx`);
    return null;
  }
};

const TestsDashboard = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ھەممىسى');
  const [searchTerm, setSearchTerm] = useState('');
  
  // سىناقلارنىڭ ئومۇمىي ئەھۋالى
  const stats = {
    total: testItems.length,
    completed: testItems.filter(item => item.completed).length,
    inProgress: testItems.filter(item => !item.completed && item.progress > 0).length,
    notStarted: testItems.filter(item => !item.completed && item.progress === 0).length
  };

  const openTest = async (test) => {
    try {
      setError(null);
      const Comp = loadTestComponent(test.id);
      if (!Comp) throw new Error(`Component ${test.id} not found`);
      setSelectedTest({ ...test, Component: Comp });
      setIsModalOpen(true);
    } catch (err) {
      setError(`فېيد يوق ياكى خاتالىق: ${test.id}.jsx`);
      console.error(err);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTest(null);
    setError(null);
  };

  // سۈزگۈچلەر
  const categories = ['ھەممىسى', 'ئىستاتىستىكا', 'Python'];
  
  const filteredTests = testItems.filter(test => {
    const matchesCategory = 
      activeCategory === 'ھەممىسى' || 
      (activeCategory === 'ئىستاتىستىكا' && test.category === 'statistics') ||
      (activeCategory === 'Python' && test.category === 'python');
    
    const matchesSearch = 
      searchTerm === '' || 
      test.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.en.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // ئېنىماتسىيە ئۆزگىرىشى
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* باشلىق ۋە ئۇچۇرلار */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
              ئۆگىنىش مودۇللىرى
            </span>
            <span className="block text-2xl md:text-3xl mt-2 text-gray-700">سىناق بازىسى</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
            ئىستاتىستىكىلىق ۋە Python دەرىجىلىك سىناقلىرىنى مودال شەكلىدە كۆرۈش
          </p>
          
          {/* ئومۇمىي ئەھۋال سانلىق مەلۇماتى */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
              <div className="text-sm text-gray-600">جەمئىي سىناق</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
              <div className="text-sm text-gray-600">تاماملانغان</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-amber-600">{stats.inProgress}</div>
              <div className="text-sm text-gray-600">داۋاملاشتۇرۋاتقان</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-gray-600">{stats.notStarted}</div>
              <div className="text-sm text-gray-600">باشلانمىغان</div>
            </div>
          </div>
        </motion.div>

        {/* سۈزگۈچ ۋە ئىزدەش */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    activeCategory === category 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="سىناق ئىزدەش..."
                className="pl-10 pr-4 py-2 w-full md:w-64 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* تەپ تىزىملىكى */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredTests.map((test) => (
            <motion.div
              key={test.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openTest(test)}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden hover:border-blue-300 relative"
            >
              {/* ئۇسلۇب رەڭلىك باند */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${test.color}`}></div>
              
              {/* تاماملاش بەلگىسى */}
              {test.completed && (
                <div className="absolute top-3 right-3 bg-green-500 text-white p-1 rounded-full">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${test.color} flex items-center justify-center mb-3 shadow-md`}>
                    <span className="text-white text-xl font-bold">
                      {test.category === 'statistics' ? '📊' : '🐍'}
                    </span>
                  </div>
                  
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    test.difficulty === 'يېڭى باشلىغۇچى' ? 'bg-blue-100 text-blue-800' :
                    test.difficulty === 'ئوتتۇرا' ? 'bg-green-100 text-green-800' :
                    test.difficulty === 'ئالىي' ? 'bg-amber-100 text-amber-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {test.difficulty}
                  </span>
                </div>
                
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition">{test.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{test.en}</p>
                
                {/* سىناق تەپسىلاتلىرى */}
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {test.questions} سوئال
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {test.time}
                  </div>
                </div>
                
                {/* ئىلگىرىلەش تەڭشىكى */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>ئىلگىرىلەش</span>
                    <span>{test.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        test.progress === 100 ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
                        'bg-gradient-to-r from-blue-400 to-indigo-500'
                      }`}
                      style={{ width: `${test.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* باشلاش توپچىسى */}
                <button className="w-full py-2.5 text-sm font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all border border-blue-200 group-hover:border-blue-300">
                  {test.completed ? 'قايتا كۆرۈش' : test.progress > 0 ? 'داۋاملاشتۇرۇش' : 'باشلاش'}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* ھېچقانداق نەتىجە تېپىلمىسا */}
        {filteredTests.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">سىناق تېپىلمىدى</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              "{searchTerm}" دېگەن سۆز بىلەن ماس كېلىدىغان سىناق يوق. باشقا سۆز بىلەن ئىزدەپ بېقىڭ ياكى سۈزگۈچلەرنى ئۆزگەرتۈڭ.
            </p>
          </motion.div>
        )}
      </div>

      {/* مودال */}
      <AnimatePresence>
        {isModalOpen && selectedTest && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200"
            >
              {/* مودال باشلىقى */}
              <div className={`bg-gradient-to-r ${selectedTest.color} text-white p-6`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-2xl">
                          {selectedTest.category === 'statistics' ? '📊' : '🐍'}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedTest.title}</h2>
                      <p className="text-blue-100 opacity-90">{selectedTest.en}</p>
                      <div className="flex items-center mt-2">
                        <span className="text-xs bg-white/30 px-3 py-1 rounded-full mr-2">
                          {selectedTest.questions} سوئال
                        </span>
                        <span className="text-xs bg-white/30 px-3 py-1 rounded-full mr-2">
                          {selectedTest.time}
                        </span>
                        <span className="text-xs bg-white/30 px-3 py-1 rounded-full">
                          {selectedTest.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-white hover:text-gray-200 text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-black hover:bg-opacity-20 transition"
                  >
                    &times;
                  </button>
                </div>
              </div>

              {/* مودال مەزمۇنى */}
              <div className="flex-1 overflow-auto p-8 bg-gradient-to-b from-gray-50 to-white">
                {error ? (
                  <motion.div 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl shadow-sm"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-red-800">فېيد خاتالىقى</h3>
                        <div className="mt-2 text-red-700">
                          <p>❌ {error}</p>
                          <p className="text-sm mt-2">
                            فېيد بارلىقىنى، نامىنىڭ توغرىلىقىنى ۋە <code>export default</code> قىلىنغانلىقىنى
                            تەكشۈرۈڭ.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : selectedTest.Component ? (
                  <Suspense fallback={
                    <div className="flex flex-col items-center justify-center py-16">
                      <div className="relative">
                        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-lg">
                            {selectedTest.category === 'statistics' ? '📊' : '🐍'}
                          </span>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-600 font-medium">سىناق يۈكلەۋاتىدۇ...</p>
                    </div>
                  }>
                    <selectedTest.Component />
                  </Suspense>
                ) : (
                  <div className="text-center py-16 text-gray-500">
                    <p className="text-xl">كومپونېنت يۈكلەلمىدى.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestsDashboard;