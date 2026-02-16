import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Brain, 
  Image as ImageIcon, 
  Video, 
  Music, 
  AlertTriangle,
  CheckCircle,
  Zap,
  TrendingUp,
  Users,
  Shield,
  PenTool,
  Target,
  Globe,
  BarChart,
  MessageSquare,
  Share2,
  BookOpen,
  Clock,
  Eye,
  Download,
  Smartphone,
  Cpu,
  Database,
  Code
} from 'lucide-react';

const injectUyghurFont = () => {
  if (!document.fonts || document.fonts.check('16px "Noto Nastaliq Uyghur"')) return;
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Uyghur:wght@300;400;500;600;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

const SectionProgress = ({ sections }) => {
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:block z-40">
      <div className="flex flex-col items-center gap-4">
        <div className="h-48 w-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="w-full bg-gradient-to-b from-cyan-400 to-indigo-500"
            style={{ height: `${progress.get()}%` }}
          />
        </div>
        <div className="text-sm text-gray-400 font-mono">
          {Math.round(progress.get())}%
        </div>
      </div>
    </div>
  );
};

const Tooltip = ({ children, text }) => {
  const [visible, setVisible] = useState(false);
  
  return (
    <div className="relative inline-block">
      <div 
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="cursor-help"
      >
        {children}
      </div>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-gray-300 whitespace-nowrap z-50"
          >
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Blog19() {
  const containerRef = useRef(null);
  const [activeTool, setActiveTool] = useState('all');
  const [readingTime, setReadingTime] = useState('6');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [completionRate, setCompletionRate] = useState(0);

  useEffect(() => {
    injectUyghurFont();
    
    // Calculate reading time
    const wordCount = document.querySelector('.content-area')?.textContent?.split(/\s+/).length || 0;
    const minutes = Math.ceil(wordCount / 200);
    setReadingTime(minutes.toString());

    // Track reading progress
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const rate = Math.min(100, (scrollTop / scrollHeight) * 100);
      setCompletionRate(rate);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tools = [
    { id: 'text', name: 'تېكىست', icon: <PenTool size={20} />, color: 'from-blue-500 to-cyan-500', examples: ['ChatGPT', 'Claude', 'Gemini'] },
    { id: 'image', name: 'رەسىم', icon: <ImageIcon size={20} />, color: 'from-purple-500 to-pink-500', examples: ['Midjourney', 'DALL-E 3', 'Stable Diffusion'] },
    { id: 'video', name: 'سىن', icon: <Video size={20} />, color: 'from-red-500 to-orange-500', examples: ['Runway', 'Sora', 'Pika'] },
    { id: 'audio', name: 'ئاۋاز', icon: <Music size={20} />, color: 'from-green-500 to-emerald-500', examples: ['Suno', 'Murf', 'ElevenLabs'] },
    { id: 'code', name: 'كود', icon: <Code size={20} />, color: 'from-yellow-500 to-amber-500', examples: ['GitHub Copilot', 'Replit', 'Tabnine'] }
  ];

  const quizQuestions = [
    {
      id: 1,
      question: 'تۈزۈلگەن سۈنئىي ئەقىلنىڭ ئاساسىي خۇسۇسىيىتى نېمە؟',
      options: [
        'تەھلىل قىلىش',
        'ئىجادچانلىق قىلىش',
        'بۇيرۇق قوبۇل قىلىش',
        'ئەخلاقنى بەلگىلەش'
      ],
      correct: 1
    },
    {
      id: 2,
      question: 'قايسىسى تېكىست تۈزۈش ئۈچۈن ئەڭ ياخشى قورال؟',
      options: ['Midjourney', 'ChatGPT', 'Runway', 'Suno'],
      correct: 1
    }
  ];

  const handleShare = async () => {
    const shareData = {
      title: 'ھاسىللغۇچ سۈنئىي ئەقىل دېگىنىمۇ نېمە؟',
      text: 'باشلانغۇچلار ئۈچۈن ئەڭ يېڭى تېخنىكىغا كىرگۈزۈش',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setIsShared(true);
        setTimeout(() => setIsShared(false), 2000);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setIsShared(true);
        setTimeout(() => setIsShared(false), 2000);
      }
    } catch (err) {
      console.log('ھەمبەھىرلەش مەغلۇپ بولدى:', err);
    }
  };

  const sections = [
    { id: 'intro', title: 'باشلانغۇچ' },
    { id: 'definition', title: 'مەنىسى نېمە؟' },
    { id: 'tools', title: 'قوراللار' },
    { id: 'benefits', title: 'پايدىلىرى' },
    { id: 'risks', title: 'خەتەرلىرى' },
    { id: 'affiliate', title: 'ئەگەرلىك ئىشلىتىش' },
    { id: 'checklist', title: 'تەكشۈرۈش تىزىملىكى' },
    { id: 'conclusion', title: 'خۇلاسە' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-950 to-black text-white" ref={containerRef}>
      {/* AI Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500"
          style={{ width: `${completionRate}%` }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>

      {/* Floating AI Assistant */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed right-4 bottom-4 z-40"
      >
        <div className="relative group">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 shadow-2xl cursor-pointer"
            onClick={() => setShowQuiz(!showQuiz)}
          >
            <Brain size={28} />
          </motion.div>
          <div className="absolute bottom-full right-0 mb-2 p-2 bg-gray-900 border border-gray-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            <span className="text-sm">سىناق سۇئالى</span>
          </div>
        </div>
      </motion.div>

      {/* Quiz Modal */}
      <AnimatePresence>
        {showQuiz && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowQuiz(false)} />
            <div className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Brain className="text-cyan-400" />
                  سۈنئىي ئەقىل بىلىم سىناقى
                </h3>
                <button 
                  onClick={() => setShowQuiz(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-6">
                {quizQuestions.map((q, index) => (
                  <div key={q.id} className="p-4 bg-gray-800/50 rounded-xl">
                    <h4 className="font-semibold mb-3">
                      {index + 1}. {q.question}
                    </h4>
                    <div className="space-y-2">
                      {q.options.map((option, optIndex) => (
                        <label key={optIndex} className="flex items-center gap-3 p-2 hover:bg-gray-700/50 rounded-lg cursor-pointer">
                          <input
                            type="radio"
                            name={`q${q.id}`}
                            checked={quizAnswers[q.id] === optIndex}
                            onChange={() => setQuizAnswers({...quizAnswers, [q.id]: optIndex})}
                            className="text-cyan-500"
                          />
                          <span>{option}</span>
                          {quizAnswers[q.id] === optIndex && optIndex === q.correct && (
                            <CheckCircle className="text-green-500 ml-auto" size={20} />
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={() => {
                    const score = quizQuestions.filter(q => quizAnswers[q.id] === q.correct).length;
                    alert(`نەتىجىڭىز: ${score}/${quizQuestions.length}`);
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg font-semibold"
                >
                  نەتىجىنى كۆرۈش
                </button>
                <button
                  onClick={() => setQuizAnswers({})}
                  className="px-6 py-2 bg-gray-800 rounded-lg"
                >
                  قايتا باشلاش
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-12"
        >
          <div className="relative rounded-3xl overflow-hidden border border-indigo-800/40 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1677442135722-5f11f0601095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="تۈزۈلگەن سۈنئىي ئەقىل"
              className="w-full h-[400px] md:h-[500px] object-cover"
              loading="eager"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="flex flex-wrap gap-2 mb-4">
                {['سۈنئىي ئەقىل', 'تېخنىكا', 'باشلانغۇچ', 'ئەگەرلىك'].map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 rounded-full text-sm font-semibold backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-600/90 to-blue-600/90 rounded-full text-sm mb-4">
                سېرىيە #5
              </div>
            </div>
          </div>
          
          {/* Stats Overlay */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-11/12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { icon: <Clock size={20} />, label: 'ئوقۇش ۋاقتى', value: `${readingTime} مىنۇت` },
                { icon: <BookOpen size={20} />, label: 'كەلتۈرۈلگەن', value: '12+ قورال' },
                { icon: <Eye size={20} />, label: 'ئەندىزە', value: 'باشلانغۇچ' },
                { icon: <Target size={20} />, label: 'ئىشلىتىش دائىرىسى', value: 'كەڭ' }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-800/50 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-cyan-400">{stat.icon}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                  <div className="text-xl font-bold">{stat.value}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16 mt-20"
        >
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed mb-6 px-4"
            style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", lineHeight: '1.8' }}
          >
            <span className="block mb-4">ھاسىللغۇچ سۈنئىي ئەقىل دېگىنىمۇ نېمە؟</span>
            <span className="text-2xl md:text-3xl text-gray-300">
              باشلانغۇچلار ئۈچۈن ئەڭ يېڭى تېخنىكىغا كىرگۈزۈش
            </span>
          </h1>

          {/* Author & Date */}
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 px-4 py-6 rounded-2xl bg-gradient-to-r from-gray-900/50 to-indigo-900/30 border border-gray-800/50 backdrop-blur-sm"
            style={{ fontFamily: "'Noto Nastaliq Uyghur', serif" }}
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-600 to-indigo-700 flex items-center justify-center font-bold text-xl">
                  ق
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900" />
              </div>
              <div>
                <div className="font-semibold text-lg">قاۋۇلجان</div>
                <div className="text-indigo-300/80">سۈنئىي ئەقىل ئىلمى ئىزدەنگۈچىسى</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-cyan-300 font-medium">2025-يىل 7-دېكابىر</div>
              <div className="text-gray-400 text-sm">سائەت 12:32 | يېڭىلاندى</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 ${isBookmarked ? 'bg-gradient-to-r from-yellow-600 to-amber-600' : 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700'}`}
            >
              <BookOpen size={20} />
              {isBookmarked ? 'ساقلاندى' : 'ساقلاش'}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShare}
              className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 ${isShared ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'bg-gradient-to-r from-indigo-600 to-purple-600'}`}
            >
              <Share2 size={20} />
              {isShared ? 'كۆچۈرۈلدى!' : 'ھەمبەھىرلەش'}
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#tools"
              className="px-6 py-3 rounded-full font-semibold flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600"
            >
              <Zap size={20} />
              قوراللارنى كۆرۈش
            </motion.a>
          </div>
        </motion.div>

        {/* Interactive Tools Filter */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          id="tools"
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Sparkles className="text-cyan-400" />
              <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                تۈزۈلگەن سۈنئىي ئەقىل قوراللىرى
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              مەزمۇن تۈرىگە قاراپ مۇۋاپىق قورال تاللاش
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveTool('all')}
              className={`px-4 py-2 rounded-full transition-all ${activeTool === 'all' ? 'bg-gradient-to-r from-cyan-600 to-indigo-600' : 'bg-gray-800 hover:bg-gray-700'}`}
            >
              ھەممىسى
            </button>
            {tools.map(tool => (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${activeTool === tool.id ? `bg-gradient-to-r ${tool.color}` : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                {tool.icon}
                {tool.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTool === 'all' ? tools : tools.filter(t => t.id === activeTool)).map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-800/50 backdrop-blur-sm hover:border-${tool.color.split('-')[1]}-500/50 transition-all`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center mb-4`}>
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{tool.name} تۈزۈشچى</h3>
                <div className="space-y-2 mb-4">
                  {tool.examples.map((example, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-current" />
                      {example}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  تەپسىلاتلىق رەھبەرلىك ۋە ئىشلىتىش ئۇسۇلى
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="content-area space-y-16" style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", fontSize: '1.18rem', lineHeight: '1.9' }}>
          
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
            id="intro"
          >
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-cyan-500/50 to-transparent hidden md:block" />
            <div className="pl-0 md:pl-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center">
                  <span className="text-sm font-bold">1</span>
                </div>
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  باشلانغۇچ
                </span>
              </h2>
              <div className="space-y-5 text-justify">
                <p>
                  ئاخىرلىرىق «ھاسىللغۇچ سۈنئىي ئەقىل (Generative AI)» دېگەن سۆزنى كۆپ ئاڭلىشىدۇ. ChatGPT ياكى رەسىم تۈزۈشچان سۈنئىي ئەقىل قاتارلىقلارنىڭ ئىسمىنى بىلسىمۇ، «ئاسلىدا بۇ نېمە؟» دەپ شۈبھىلەنگەن كۆپ ئادەم بار. بۇ ماقالەدە باشلانغۇچلارمۇ چۈشىنىدىغاندەك تۈزۈلگەن سۈنئىي ئەقىلنىڭ ئاساسىي مەزمۇنىنى تەپسىلىي تەرجىمە قىلىپ، ئەگەرلىك (ئاففىلىيات) ۋە بىلوگ بىلەن شۇغۇللىنىشقا قانداق ياردەم بېرىدىغانلىقىنى كۆرسىتىمەن.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                  {[
                    { value: '$100B+', label: 'بازار قىممىتى' },
                    { value: '1.7B+', label: 'ئىشلەتكۈچى' },
                    { value: '500+', label: 'قورال' },
                    { value: '85%', label: 'شىركەتلەر ئىشلىتىدۇ' }
                  ].map((stat, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-transparent border border-gray-800/50 text-center">
                      <div className="text-2xl font-bold text-cyan-300 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Definition Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
            id="definition"
          >
            <div className="pl-0 md:pl-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <Brain size={18} />
                </div>
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  ھاسىللغۇچ سۈنئىي ئەقىل دېگىنىمۇ نېمە؟
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <p>
                    ھاسىللغۇچ سۈنئىي ئەقىل (Generative AI) دېگىنىمىز — ئىنسانلارنىڭ سىفردىن ئىجاد قىلغاندەك، <strong>تېكىست، رەسىم، ئاۋاز، سىن</strong> قاتارلىق يېڭى مەزمۇنلارنى ئاپتوماتىك تۈزىدىغان سۈنئىي ئەقىلدۇر.
                  </p>
                  
                  <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-800/30">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Target size={20} className="text-cyan-400" />
                      تاڭرىمۇ:
                    </h4>
                    <p className="text-gray-300">
                      بېرىلگەن بۇيرۇق (پرومت) نىڭ ئاساسىدا، تېكىست، رەسىم، ئاۋاز، سىننى ئاپتوماتىك تۈزىدىغان سۈنئىي ئەقىل.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-5">
                  <div className="p-5 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-800/50">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Zap size={20} className="text-yellow-400" />
                      خۇسۇسىيىتى:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-green-400 mt-1 flex-shrink-0" />
                        <span>ئەنئەنىۋى سۈنئىي ئەقىل «تەھلىل ۋە بولجىققا قاراپ ئالدىن بىلىش»</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Sparkles size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                        <span>تۈزۈلگەن سۈنئىي ئەقىل «ئىجادچانلىق» قىلىشقا بولۇپ بېكىتىلگەن</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-5 rounded-xl bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-800/30">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Globe size={20} className="text-blue-400" />
                      كۆرۈنەرلىك مىساللار:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['ChatGPT', 'Midjourney', 'Runway', 'Suno'].map((ex, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-800/50 rounded-full text-sm">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Benefits vs Risks */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
            id="benefits"
          >
            <div className="pl-0 md:pl-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center">
                  <TrendingUp size={18} />
                </div>
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  پايدىلىرى vs خەتەرلىرى
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Benefits */}
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-800/30">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-300">
                      <CheckCircle size={24} />
                      پايدىلىرى
                    </h3>
                    <ul className="space-y-3">
                      {[
                        { icon: <Zap size={18} />, text: 'سامارىلىقنى 10 ھەسسە يۇقىرى قىلىش' },
                        { icon: <Sparkles size={18} />, text: 'ئىجادچانلىق دائىرىسىنى كەڭەيتىش' },
                        { icon: <BarChart size={18} />, text: 'چىقىم قىسقىرتىش' },
                        { icon: <Users size={18} />, text: 'مۇلازىمەت ھېسسىياتىنى ياخشىلاش' }
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="text-green-400 mt-1">{item.icon}</div>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Risks */}
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-800/30">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-300">
                      <AlertTriangle size={24} />
                      دىققەت قىلىش لازىم
                    </h3>
                    <ul className="space-y-3">
                      {[
                        { icon: <AlertTriangle size={18} />, text: 'خاتا ئۇچۇر (Hallucination)' },
                        { icon: <Shield size={18} />, text: 'مۈلۈك ھوقۇقى مەسىلىسى' },
                        { icon: <AlertTriangle size={18} />, text: 'ئەخلاقىي خەۋپلەر' },
                        { icon: <Database size={18} />, text: 'ئۇچۇر باشقۇرۇش' }
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="text-red-400 mt-1">{item.icon}</div>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Affiliate Marketing Guide */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
            id="affiliate"
          >
            <div className="pl-0 md:pl-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-600 flex items-center justify-center">
                  <Smartphone size={18} />
                </div>
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  ئەگەرلىك (ئاففىلىيات) سەھەيتىدە ئىشلىتىش مىسالى
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'ماقىلە يازغۇچ',
                    icon: <PenTool size={24} />,
                    color: 'from-blue-500 to-cyan-500',
                    steps: ['پرومت يېزىش', 'قايتا تۈزۈش', 'ئۆز مەزمۇنىڭى قوشۇش']
                  },
                  {
                    title: 'رەسىم تۈزۈش',
                    icon: <ImageIcon size={24} />,
                    color: 'from-purple-500 to-pink-500',
                    steps: ['ئۇسلۇب تاللاش', 'پرومت تەپسىلاتلاش', 'ئۆزگەرتىش']
                  },
                  {
                    title: 'ئىجتىمائىي تور',
                    icon: <Share2 size={24} />,
                    color: 'from-green-500 to-emerald-500',
                    steps: ['ئېلان تېكىستى', 'ھاشتېگ تاللاش', 'ۋاقىت بېكىتىش']
                  },
                  {
                    title: 'مەھسۇلات تونۇشتۇرۇش',
                    icon: <Target size={24} />,
                    color: 'from-red-500 to-orange-500',
                    steps: ['خۇسۇسىيەت تاللاش', 'قىممەت تەكىتلەش', 'كېلىشىم قىلىش']
                  },
                  {
                    title: 'ئوقۇغۇچى بىلەن مۇناسىۋەت',
                    icon: <MessageSquare size={24} />,
                    color: 'from-indigo-500 to-blue-500',
                    steps: ['كوممېنت جاۋابى', 'سۇئال جاۋابى', 'ئالاقە قىلىش']
                  },
                  {
                    title: 'نەتىجىنى تەھلىل',
                    icon: <BarChart size={24} />,
                    color: 'from-cyan-500 to-teal-500',
                    steps: ['سان-سىستاتىستىكا', 'ئۆزگەرتىش', 'ياخشىلاش']
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-800/50 backdrop-blur-sm"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.steps.map((step, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-current" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Interactive Checklist */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
            id="checklist"
          >
            <div className="pl-0 md:pl-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center">
                  <CheckCircle size={18} />
                </div>
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  باشلانغۇچلار ئۈچۈن تەكشۈرۈش تىزىملىكى
                </span>
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    step: 'مەقسىتىڭىزنى بەلگىلەڭ',
                    details: '«تۈزۈلگەن سۈنئىي ئەقىلنى نېمە ئۈچۈن ئىشلىتىمسىز؟»'
                  },
                  {
                    step: 'ئىشلىتىدىغان ئۈسۇللىرىڭىزنى تاللاڭ',
                    details: 'تېكىست ئۈچۈن ChatGPT، رەسىم ئۈچۈن Midjourney'
                  },
                  {
                    step: 'پرومتىڭىزنى ياخشىلاڭ',
                    details: 'مەزمۇنى بار تەپسىلاتلىق بۇيرۇق كۆرەك'
                  },
                  {
                    step: 'تۈزۈلگەن نەتىجىنى تەكشۈرۈڭ',
                    details: 'خاتا ئۇچۇر، مۈلۈك ھوقۇقى مەسىلىلىرىنى تەكشۈرۈڭ'
                  },
                  {
                    step: 'ئۆز سۆزىڭىزنى قوشۇڭ',
                    details: 'ئۆز تەجرىبىڭىز، ھېسسىياتىڭىزنى قوشۇڭ'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-5 rounded-xl bg-gradient-to-r from-gray-900/50 to-transparent border border-gray-800/50 hover:border-cyan-500/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">{item.step}</h4>
                        <p className="text-gray-300">{item.details}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
            id="conclusion"
          >
            <div className="pl-0 md:pl-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-800/50 backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                  <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                    خۇلاسە
                  </span>
                </h2>
                
                <div className="space-y-5 text-center max-w-3xl mx-auto">
                  <p className="text-xl leading-relaxed">
                    تۈزۈلگەن سۈنئىي ئەقىل — <span className="font-bold text-cyan-300">«سامارىلىق» ۋە «ئىجادچانلىقنى كەڭەيتىش»</span> نى بىرلا ۋاقىتتا قاندۇرغۇچى، كۈچلۈك قورال.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    {[
                      { value: 'تولۇق چۈشىنىش', icon: <Brain size={20} /> },
                      { value: 'مۇۋاپىق قوللىنىش', icon: <Target size={20} /> },
                      { value: 'دىققەت قىلىش', icon: <Shield size={20} /> },
                      { value: 'داۋاملاشتۇرۇش', icon: <TrendingUp size={20} /> }
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/50">
                        <div className="text-cyan-400 mb-2 flex justify-center">{item.icon}</div>
                        <div className="text-sm">{item.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="leading-relaxed">
                    لېكىن خاتا ئۇچۇر، مۈلۈك ھوقۇقى مەسىلىلىرىگە دىققەت قىلىش كېرەك. تولۇق چۈشىنىپ، رېجىلى ھالدا قوللىنىش ئارقىلىق، ئەگەرلىك ياكى بىلوگ بىلەن شۇغۇللىنىشنىڭ چوڭ ياردەمچىسىگە ئايلىنىدۇ.
                  </p>
                  
                  <div className="mt-8 pt-8 border-t border-indigo-800/50">
                    <p className="text-indigo-300 italic">
                      — تۈزۈلگەن سۈنئىي ئەقىل، بىزنىڭ ئىدىيە ياراتقان قېنىمىزغا يېڭى قان قوشىدۇ —
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Resources Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="pl-0 md:pl-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center">
                  <Download size={18} />
                </div>
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  قوشۇمچە مەنبەلەر
                </span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'پۇللىنىش قوراللىرى',
                    items: ['ChatGPT Plus', 'Midjourney Pro', 'Runway Pro'],
                    color: 'from-blue-900/30 to-cyan-900/30'
                  },
                  {
                    title: 'ھەقسىز ئالتېرناتىپلار',
                    items: ['Claude (ھەقسىز)', 'Bing Image Creator', 'Leonardo AI'],
                    color: 'from-purple-900/30 to-pink-900/30'
                  },
                  {
                    title: 'ئۆگىنىش مەنبەلىرى',
                    items: ['Learn Prompting', 'AI Art School', 'Coursera AI'],
                    color: 'from-green-900/30 to-emerald-900/30'
                  }
                ].map((resource, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl bg-gradient-to-br ${resource.color} border border-gray-800/50`}>
                    <h3 className="text-xl font-bold mb-4">{resource.title}</h3>
                    <ul className="space-y-2">
                      {resource.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-current" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        {/* Completion Message */}
        {completionRate >= 95 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-700/50 text-center backdrop-blur-sm"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <CheckCircle className="text-green-400" size={28} />
              <h3 className="text-xl font-bold">ماقالىنى ئوقۇش تاماملاندى!</h3>
            </div>
            <p className="text-gray-300">
              سۈنئىي ئەقىل بىلەن ئىشلەشنىڭ ئاساسىي قائىدىسىنى ئۆگەندىڭىز. ئىندى ئەمەلىيەتكە ئۆتۈۈش ۋاقتى!
            </p>
          </motion.div>
        )}
      </div>

      {/* Section Progress */}
      <SectionProgress sections={sections} />
    </div>
  );
}