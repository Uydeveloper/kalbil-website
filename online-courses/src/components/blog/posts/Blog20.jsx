import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Baby, 
  Brain, 
  Heart, 
  Dna,
  Cpu,
  Sparkles,
  AlertTriangle,
  CheckCircle,
  Zap,
  Users,
  Shield,
  Target,
  Globe,
  BookOpen,
  Clock,
  Eye,
  Share2,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
  Volume2,
  VolumeX,
  BarChart,
  TrendingUp,
  Home,
  School,
  GraduationCap,
  HeartPulse,
  Star,
  Crown,
  Rocket,
  Wind,
  Moon,
  Sun,
  Cloud,
  Droplets,
  Flower
} from 'lucide-react';

const injectUyghurFont = () => {
  if (!document.fonts || document.fonts.check('16px "Noto Nastaliq Uyghur"')) return;
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Uyghur:wght@300;400;500;600;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

const TimelineNode = ({ year, title, description, icon, color, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`relative flex items-start gap-4 p-4 rounded-xl transition-all ${isActive ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/20 border border-purple-700/40' : 'bg-gray-900/30 border border-gray-800/30'}`}
    >
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
            {year}
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
            تەخمىنەن
          </span>
        </div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      {isActive && (
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
      )}
    </motion.div>
  );
};

const ScenarioCard = ({ title, description, pros, cons, probability, icon, bgColor }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-2xl overflow-hidden border ${bgColor}`}
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-900/50 flex items-center justify-center">
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="text-sm text-gray-400">ئېھتىماللىق:</div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${i < probability ? 'bg-cyan-500' : 'bg-gray-700'}`}
                    />
                  ))}
                  <span className="text-sm text-cyan-300 ml-2">{probability * 20}%</span>
                </div>
              </div>
            </div>
          </div>
          {expanded ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
      
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-gray-800/50"
          >
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div>
                <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                  <CheckCircle size={18} />
                  پايدىلىرى
                </h4>
                <ul className="space-y-2">
                  {pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <span className="text-sm">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                  <AlertTriangle size={18} />
                  خەتەرلىرى
                </h4>
                <ul className="space-y-2">
                  {cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />
                      <span className="text-sm">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const EthicalDilemma = ({ question, options, correctAnswer, onAnswer }) => {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSelect = (index) => {
    if (!submitted) {
      setSelected(index);
    }
  };
  
  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
      if (onAnswer) onAnswer(selected === correctAnswer);
    }
  };
  
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-800/50">
      <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
        <Brain className="text-cyan-400" />
        ئەخلاقىي قىيىن تاللاش
      </h4>
      <p className="text-gray-300 mb-6">{question}</p>
      
      <div className="space-y-3 mb-6">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`p-4 rounded-xl cursor-pointer transition-all ${
              selected === index 
                ? submitted 
                  ? index === correctAnswer 
                    ? 'bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-700/50' 
                    : 'bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-700/50'
                  : 'bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-700/50'
                : 'bg-gray-900/40 border border-gray-800/50 hover:border-gray-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                selected === index 
                  ? submitted && index === correctAnswer 
                    ? 'bg-green-500' 
                    : submitted 
                      ? 'bg-red-500' 
                      : 'bg-cyan-500'
                  : 'bg-gray-800'
              }`}>
                {String.fromCharCode(65 + index)}
              </div>
              <span>{option}</span>
              {submitted && index === correctAnswer && (
                <CheckCircle className="ml-auto text-green-400" size={20} />
              )}
            </div>
          </div>
        ))}
      </div>
      
      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className={`w-full py-3 rounded-lg font-semibold ${selected === null ? 'bg-gray-800 text-gray-500' : 'bg-gradient-to-r from-cyan-600 to-blue-600'}`}
        >
          جاۋابىمنى تەستىقلاش
        </button>
      ) : (
        <div className="text-center p-4 rounded-xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50">
          <p className="text-gray-300">
            {selected === correctAnswer 
              ? 'ئۇرىن! سىز ئەخلاقىي تاللاشنى چۈشەندىڭىز.' 
              : 'ئەخلاقىي مەسىلىلەر ساددە ئەمەس، تېخىمۇ تەپسىلىي ئويلىنىش كېرەك.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default function Blog20() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const [activeScenario, setActiveScenario] = useState('all');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEthicsQuiz, setShowEthicsQuiz] = useState(false);
  const [muted, setMuted] = useState(true);
  const [answers, setAnswers] = useState({});
  
  useEffect(() => {
    injectUyghurFont();
    
    // Auto-play subtle animations on scroll
    const handleScroll = () => {
      // Animation logic here
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scenarios = [
    {
      id: 'utopia',
      title: 'يۇتۇپىيەلىك كەلگۈسى',
      description: 'سۈنئىي ئەقىل بالىلىقى پۈتۈن جەھەتتىن كەڭ تارقىلىپ، ئىنسانىيەت يېڭى كۆتۈرۈلۈشكە ئېرىشىدۇ',
      pros: [
        'ھەممە بالىلار ئىدىئال مۇھىتتا ئۆسىدۇ',
        'ئىنسانىيەتنىڭ ئىقتىدارى چەكسىز يېتىلىدۇ',
        'ساغلاملىق ۋە بەخت دەرىجىسى يۇقىرى',
        'ئىجتىمائىي تەڭسىزلىك يوقىتىلىدۇ'
      ],
      cons: [
        'ئىنسانچىلىقنىڭ ئەسلىيەتلىرى يوقىلىدۇ',
        'مۇستەقىل پىكىر قىلىش ئىقتىدارى تۆۋەن',
        'ھەسسىياتىي مۇرەككەپلىك ئاجىز',
        'يېڭى خەتەرلەر پەيدا بولۇشى مۇمكىن'
      ],
      probability: 4,
      icon: <Sparkles className="text-yellow-400" size={24} />,
      bgColor: 'bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border-yellow-800/30'
    },
    {
      id: 'dystopia',
      title: 'دىستۇپىيەلىك كەلگۈسى',
      description: 'سۈنئىي ئەقىل بالىلىقى جەمئىيەتنى پارچىلاپ، يېڭى ئىجتىمائىي قاتلاملارنى پەيدا قىلىدۇ',
      pros: [
        'تېخنىكىلىق تەرەققىيات تېزلىشىدۇ',
        'جىسمانىي كەمسىتىش يوقىتىلىدۇ',
        'ئۆلۈم-سۇقۇت نىسبىتى تۆۋەن',
        'خۇسۇسىيەتلەر ئۈستىدە كۆزىتىش ئىمكانى'
      ],
      cons: [
        'ئىنسان خۇسۇسىيىتى يوقىلىدۇ',
        'مۇكەممەللىك بېسىمى يېڭى جىنايەتلەرنى كەلتۈرۈپ چىقىرىدۇ',
        'ئىنسانلار ئارىسىدىكى فەرق چوڭىيىدۇ',
        'ئىنسانچىلىقتىن ۋاز كېچىش خەۋپى'
      ],
      probability: 2,
      icon: <AlertTriangle className="text-red-400" size={24} />,
      bgColor: 'bg-gradient-to-r from-red-900/20 to-orange-900/20 border-red-800/30'
    },
    {
      id: 'hybrid',
      title: 'ئارىلاش مودېل',
      description: 'سۈنئىي ئەقىل ئىنسان بالىلىقىنى قوللاش ۋە ياخشىلاش ئۈچۈن ئىشلىتىلىدۇ',
      pros: [
        'ئىنسانچىلىق ساقلانىدۇ',
        'تېخنىكا ئارقىلىق قۇسۇرلۇقلار تولدۇرۇلىدۇ',
        'مۇتلەق مۇكەممەللىكتىن قۇتۇلۇش',
        'ئائىلە مۇناسىۋىتى ساقلانىدۇ'
      ],
      cons: [
        'يېڭى ئىجتىمائىي قىيىنچىلىقلار',
        'تېخنىكا-ئىنسان توغرىسىدىكى تاللاش',
        'تەڭسىز تەرەققىيات خەۋپى',
        'ئەخلاقىي چەكلىمىلەرنىڭ كۈچەيمەسلىكى'
      ],
      probability: 3,
      icon: <Brain className="text-purple-400" size={24} />,
      bgColor: 'bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-800/30'
    }
  ];

  const ethicalQuestions = [
    {
      id: 1,
      question: 'سۈنئىي ئەقىل بىلەن "مۇكەممەل" بالا تۇغۇشقا قانۇن بەرمەكچى بولسىڭىز، قايسى چەكلەش ئورنىتىسىز؟',
      options: [
        'پەقەت ئېغىر كېسەللىكلەرنىڭ ئالدىنى ئېلىش ئۈچۈن',
        'بارلىق بېجىرىلگەن كېسەللىكلەر ئۈچۈن',
        'پەقەت جىسىمىي كېسەللىكلەر ئۈچۈن، رۇھىي ئەمەس',
        'ھېچقانداق چەك قويمايمەن، ئۆز ئىختىيارىدا بولۇشى كېرەك'
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: 'سۈنئىي ئەقىل بالىلىقى كەڭ تارقىلىپ، ئاتا-ئانىلارنىڭ رولى ئازىيىپ كەتسە، بۇنى قانداق قارايسىز؟',
      options: [
        'بۇ ئىنسانىيەتنىڭ تەرەققىياتى، ئاتا-ئانىلىق مەنىسى ئۆزگىرىدۇ',
        'ئاتا-ئانىلار يېڭى روللارغا ئېرىشىدۇ، ئەمما مۇھەببەت ساقلانىدۇ',
        'بۇ ئائىلە قۇرۇلمىسىنىڭ ۋايرانى، توسالغۇسىز',
        'ئاتا-ئانىلارنىڭ مۇھىملىقى تېخىمۇ كۈچىيىدۇ'
      ],
      correctAnswer: 1
    }
  ];

  const timelineData = [
    {
      year: '2030',
      title: 'ئاساسىي جەريان باشلىنىشى',
      description: 'سۈنئىي ئەقىل ياردىمچىسى بار تەربىيە سىستېمىلىرى كەڭ تارقىلىدۇ',
      icon: <Brain size={24} />,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      isActive: true
    },
    {
      year: '2040',
      title: 'ئىختىيارىي گېنوم تۈزىتىش',
      description: 'جىددىي كېسەللىكلەرنىڭ ئالدىنى ئېلىش ئۈچۈن گېنوم تۈزىتىش كەڭ قوللىنىلىدۇ',
      icon: <Dna size={24} />,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      year: '2050',
      title: 'سۈنئىي ئەقىل رەھىمى تەجرىبىسى',
      description: 'سۈنئىي رەھىم سىستېمىلىرى كەڭ تارقىلىپ، تۇغۇت قىيىنچىلىقىنى ئازايتىدۇ',
      icon: <HeartPulse size={24} />,
      color: 'bg-gradient-to-r from-red-500 to-orange-500'
    },
    {
      year: '2060',
      title: 'تولۇق مۇكەممەللەشتۈرۈش',
      description: 'تېخنىكا تەرەققىياتى بىلەن بىرگە، تولۇق مۇكەممەللەشتۈرۈش مۇمكىنچىلىكى كۆرۈلىدۇ',
      icon: <Target size={24} />,
      color: 'bg-gradient-to-r from-green-500 to-emerald-500'
    }
  ];

  const handleShare = async () => {
    const shareData = {
      title: 'سۈنئىي ئەقىلگە بالىلىقنى تولۇق تاپشۇرۇشنىڭ كەلگۈسى',
      text: '«ئاتا-ئانا» دېگەن سۆز يەنە زۆرۈر بولامدۇ؟',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('ئۇلىنىش كۆچۈرۈلدى!');
      }
    } catch (err) {
      console.log('ھەمبەھىرلەش مەغلۇپ بولدى:', err);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-black text-white overflow-x-hidden"
    >
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-950/30 to-black" />
        
        {/* Floating elements representing AI and childhood */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0
            }}
            animate={{
              y: [null, -100, null],
              rotate: 360,
              x: Math.sin(i * 0.5) * 50
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          >
            {i % 3 === 0 ? <Baby className="text-purple-400/20" size={24} /> :
             i % 3 === 1 ? <Brain className="text-cyan-400/20" size={24} /> :
             <Heart className="text-pink-400/20" size={24} />}
          </motion.div>
        ))}
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          style={{ scaleX: scrollYProgress }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>

      {/* Floating Control Panel */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col gap-3 p-3 rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-gray-800/50">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 rounded-xl bg-gray-800 hover:bg-gray-700"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMuted(!muted)}
            className="p-3 rounded-xl bg-gray-800 hover:bg-gray-700"
          >
            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowEthicsQuiz(!showEthicsQuiz)}
            className="p-3 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600"
          >
            <Brain size={20} />
          </motion.button>
        </div>
      </div>

      {/* Ethics Quiz Modal */}
      <AnimatePresence>
        {showEthicsQuiz && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowEthicsQuiz(false)} />
            <div className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <Brain className="text-cyan-400" />
                    سۈنئىي ئەقىل بالىلىقى ئەخلاقىي سىناقى
                  </h3>
                  <button 
                    onClick={() => setShowEthicsQuiz(false)}
                    className="p-2 hover:bg-gray-800 rounded-lg"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-gray-400 mt-2">
                  بۇ سىناق سىزنىڭ سۈنئىي ئەقىل ۋە بالىلىق توغرىسىدىكى ئەخلاقىي قاراشلىرىڭىزنى تەكشۈرىدۇ
                </p>
              </div>
              
              <div className="p-6 grid md:grid-cols-2 gap-6">
                {ethicalQuestions.map((q) => (
                  <EthicalDilemma
                    key={q.id}
                    question={q.question}
                    options={q.options}
                    correctAnswer={q.correctAnswer}
                    onAnswer={(correct) => {
                      setAnswers(prev => ({ ...prev, [q.id]: correct }));
                    }}
                  />
                ))}
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
          className="relative mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden border border-purple-800/40 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-purple-900/30 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="AI ۋە بالىلىق"
              className="w-full h-[400px] md:h-[500px] object-cover"
              loading="eager"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="flex flex-wrap gap-2 mb-4">
                {['سۈنئىي ئەقىل', 'بالىلىق', 'كەلگۈسى', 'ئەخلاق'].map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-purple-600/90 to-pink-600/90 rounded-full text-sm font-semibold backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12 px-4"
          >
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed mb-6"
              style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", lineHeight: '1.8' }}
            >
              <span className="block mb-4">سۈنئىي ئەقىلگە بالىلىقنى تولۇق تاپشۇرۇشنىڭ كەلگۈسى</span>
              <span className="text-2xl md:text-3xl text-gray-300">
                «ئاتا-ئانا» دېگەن سۆز يەنە زۆرۈر بولامدۇ؟
              </span>
            </h1>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              {[
                { icon: <Clock size={20} />, value: '12 مىنۇت', label: 'ئوقۇش ۋاقتى' },
                { icon: <Eye size={20} />, value: 'ئادەتتىن ئاشقان', label: 'چوڭقۇرلۇق' },
                { icon: <Brain size={20} />, value: '5+', label: 'كەلگۈسى سېنارىيىسى' },
                { icon: <Target size={20} />, value: '10+', label: 'ئەخلاقىي مەسىلە' }
              ].map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-gray-900/50 border border-gray-800/50">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-cyan-400">{stat.icon}</div>
                    <div className="text-lg font-bold">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Author & Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-900/50 to-purple-900/30 border border-gray-800/50 backdrop-blur-sm">
                <p className="text-justify text-lg leading-relaxed" style={{ fontFamily: "'Noto Nastaliq Uyghur', serif" }}>
                  زەمەنەۋى جەمئىيەتتە «بالىلىق» دېگەن سۆزنىڭ ئېگىزلىكى ھېسابلىنىشقا بولمايدۇ. بىز ئاتا-ئانىلاردىن مۇھەببەت ناملىق، سان-ھېساب قىلىنمىغان بەھىرىدىن مىراث قۇبۇل قىلىپ بۈگۈنكى ئەۋلادنى يېشىۋاتىمىز. لېكىن يەنە بىر تەرەپتىن، ئىقتىسادىي فەرق-پەسلىك تەلىپ-تەلەپ فەرق-پەسلىككە، ئاتا-ئانىلارنىڭ رۇھىي ھالىتى بالىلارنىڭ كەلگۈسىگە تەسىر كۆرسىتىش كەبى ئىنتايىن نامۇكەممەل ۋە قاتتىق ھەقىقەت مەۋجۇت.
                </p>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-800/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center font-bold text-2xl">
                  ق
                </div>
                <div>
                  <div className="font-bold text-lg">قاۋۇلجان</div>
                  <div className="text-cyan-300/80 text-sm">پۈتۈنلەي تەجرىبىلىك ئىلمىي ئىزدەنگۈچى</div>
                </div>
              </div>
              <div className="text-sm text-gray-300">
                <div className="mb-2">2025-يىل 23-سېنتەبىر</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  يېڭىلانغان: 1 كۈن ئىلگىرى
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleShare}
                  className="flex-1 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 font-semibold flex items-center justify-center gap-2"
                >
                  <Share2 size={18} />
                  ھەمبەھىرلەش
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowEthicsQuiz(true)}
                  className="flex-1 py-2 rounded-lg bg-gray-800 font-semibold flex items-center justify-center gap-2"
                >
                  <Brain size={18} />
                  سىناق
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Sections */}
        <div className="space-y-20" style={{ fontFamily: "'Noto Nastaliq Uyghur', serif" }}>
          
          {/* Question Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-cyan-500/50 to-transparent hidden md:block" />
            <div className="pl-0 md:pl-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <span className="text-lg font-bold">?</span>
                </div>
                <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  ئاساسىي سوئال: ئىنسانلارنىڭ بالىلىقى راستىنلا ئەڭ ياخشىمۇ؟
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-800/30">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <CheckCircle className="text-green-400" />
                      ئىنسان بالىلىقىنىڭ كۈچى
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'ئاتا-بالا باغلىنىشى ۋە مۇھەببىتى ئالماشتۇرغۇسىز',
                        'ئەخلاقىي قىممەتلەرنىڭ ئاساسى',
                        'مۇرەككەپ ھېسسىياتىي تەرەققىيات',
                        'ئىجتىمائىي مەھەرەتلەرنى ئۆگىنىش'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-800/30">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <AlertTriangle className="text-red-400" />
                      نامۇكەممەللىكى
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'ئاتا-ئانىلارنىڭ بىلىم چەكلىمىسى',
                        'ھېسسىيات تالىشى ۋە قىيىنچىلىقى',
                        'ئىقتىسادىي چەكلىمىلەر',
                        'ئاڭسىز يەنسىزلىك ۋە قاتتىق بېسىم'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-800/50">
                <p className="text-lg leading-relaxed text-center italic">
                  "بەزىدە بالىنىڭ ئىقتىدارلىرىنى يېشىشتىن بولۇپ، يۆتكىپ قويىش ھەتتىكى كۆپ ئۇچرايدۇ. بۇ تەڭسىزلىك ۋە نامۇرەككەپلىكنى «بۇ تۇرمۇش» دەپ بايىدۇرۇش ياخشىمۇ؟"
                </p>
              </div>
            </div>
          </motion.section>

          {/* Timeline Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <Clock className="text-cyan-400" size={28} />
                <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  تەرەققىيات يۆلى: سۈنئىي ئەقىل بالىلىقىنىڭ كەلگۈسى
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                2030-يىلدىن 2060-يىلغىچە بولغان كۈتۈلگەن تەرەققىيات باسقۇچلىرى
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-pink-500/30 hidden md:block" />
              
              <div className="space-y-8 max-w-4xl mx-auto">
                {timelineData.map((item, index) => (
                  <div key={index} className={`relative ${index % 2 === 0 ? 'md:pr-1/2 md:pl-8' : 'md:pl-1/2 md:pr-8'}`}>
                    <div className={`absolute top-6 ${index % 2 === 0 ? 'md:right-full md:left-auto md:mr-8' : 'md:left-full md:right-auto md:ml-8'} left-6 md:left-auto`}>
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
                    </div>
                    <TimelineNode {...item} />
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* AI Womb & Education System */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-800/50">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center mb-4">
                  <HeartPulse size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">سۈنئىي ئەقىل رەھىمى</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    'نانو دەرىجىلىك بەھىر تەرتىپى',
                    'ئىنھورمون مۇۋازىنىتىنى باشقۇرۇش',
                    '365 كۈن 24 سائەت تەكشۈرۈش',
                    'ئىدىئال مۇھىتتا ئۆسۈش',
                    'ئانىنىڭ شىدىدلىقىدىن قۇتۇلۇش'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-green-400 flex-shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-800/50">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">سۈنئىي ئەقىل تەربىيە سىستېمىسى</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    'ھەر بىر بالىغا خاس تەلىپ-تەلەپ',
                    'ئەقىل قانچىسىغا ماسلاشتۇرۇش',
                    'VR ئارقىلىق تەجرىبىلىك ئۆگىنىش',
                    'ئىنتىزانلىق ۋە چۈشىنىشنى ئاشۇرۇش',
                    'ئەخلاقىي مەسىلىلەرنى سىمۇلياتسىيە'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Sparkles className="text-yellow-400 flex-shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-gray-900/50 to-transparent border border-gray-800/50">
              <p className="text-lg leading-relaxed text-center">
                "كېچىسى يىغلاش دېگەن تۈنۈكلۈك مەزگىلى يوقىتىلىدۇ. ئاتا-ئانىلار ئۇخلاش ۋە شىدىدلىقدىن قۇتۇلۇپ، پەقەت بالىغا مۇھەببەت بىلەن قاراش ۋاقتى ۋە ئىمكانىيىتىگە ئىگە بولىدۇ."
              </p>
            </div>
          </motion.section>

          {/* Future Scenarios */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <Globe className="text-cyan-400" size={28} />
                <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  كەلگۈسى سېنارىيىلىرى
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-6">
                سۈنئىي ئەقىل بالىلىقى كەڭ تارقىلىشىدىكى ئۈچ ئاساسىي ئېھتىماللىق
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <button
                  onClick={() => setActiveScenario('all')}
                  className={`px-4 py-2 rounded-full ${activeScenario === 'all' ? 'bg-gradient-to-r from-cyan-600 to-purple-600' : 'bg-gray-800 hover:bg-gray-700'}`}
                >
                  ھەممىسى
                </button>
                {scenarios.map(scenario => (
                  <button
                    key={scenario.id}
                    onClick={() => setActiveScenario(scenario.id)}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 ${activeScenario === scenario.id ? 'bg-gradient-to-r from-cyan-600 to-purple-600' : 'bg-gray-800 hover:bg-gray-700'}`}
                  >
                    {scenario.icon}
                    {scenario.title}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {(activeScenario === 'all' ? scenarios : scenarios.filter(s => s.id === activeScenario)).map((scenario, index) => (
                <ScenarioCard key={scenario.id} {...scenario} />
              ))}
            </div>
          </motion.section>

          {/* Parental Role Evolution */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <Users className="text-pink-400" size={28} />
                <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  ئاتا-ئانىلارنىڭ يېڭى رولى
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'مۇھەببەت ۋە ئالاقە',
                  description: 'ئاتا-ئانىلار بالىلار بىلەن بولغان مۇھەببەت ۋە ئالاقە ۋاقتىغا تېخىمۇ كۆپ ئەھمىيەت بېرىدۇ',
                  icon: <Heart className="text-red-400" size={24} />,
                  color: 'from-red-900/20 to-pink-900/20'
                },
                {
                  title: 'يېتەكچى ۋە يولداش',
                  description: 'ئاتا-ئانىلار بالىلارنىڭ ئەقلىي ۋە ھېسسىياتىي يېتىلىشىنى يېتەكلەيدۇ',
                  icon: <Target className="text-cyan-400" size={24} />,
                  color: 'from-cyan-900/20 to-blue-900/20'
                },
                {
                  title: 'ئەخلاقىي يېتەكچى',
                  description: 'ئاتا-ئانىلار بالىلارغا ئەخلاق ۋە قىممەت قارىشىنى ئۆگىتىدۇ',
                  icon: <Shield className="text-green-400" size={24} />,
                  color: 'from-green-900/20 to-emerald-900/20'
                }
              ].map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${role.color} border border-gray-800/50 backdrop-blur-sm`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-900/50 flex items-center justify-center mb-4">
                    {role.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{role.title}</h3>
                  <p className="text-gray-300">{role.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-800/50 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  خۇلاسە: ئىنسانىيەتنىڭ چوڭقۇر ئويلىنىشى
                </span>
              </h2>
              
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="p-6 rounded-xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-800/50">
                  <p className="text-lg leading-relaxed text-center">
                    "بىز بىر جۇنۇنچىلىق سۇئالغا دۇچ كېلىمىز: «ئەگەر سۈنئىي ئەقىل بۇ نامۇكەممەللىكنىڭ ھەممىسىنى يوقىتىپ، مۇكەممەل بالىلىقنى ئامالغا ئاشۇرسا، دۇنيا قانداق ئۆزگىرىدۇ؟»"
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-800/50">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Sun className="text-yellow-400" />
                      يورۇق تەرەپ
                    </h4>
                    <p className="text-gray-300">
                      سۈنئىي ئەقىل ئارقىلىق ھەممە بالا ئۆز ئىمكانىيىتىنى تولۇق جارى قىلدۇرۇپ، ساغلام ۋە بەختلىك ئۆسۈشى مۇمكىن.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-gradient-to-r from-purple-900/20 to-gray-900/20 border border-purple-800/50">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Moon className="text-blue-400" />
                      قارىراق تەرەپ
                    </h4>
                    <p className="text-gray-300">
                      ئىنسانچىلىقنىڭ ئەسلىيەتلىرى يوقىلىپ، يېڭى خەتەرلەر پەيدا بولۇشى مۇمكىن.
                    </p>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl bg-gradient-to-r from-gray-900/50 to-transparent border border-gray-800/50">
                  <p className="text-lg leading-relaxed text-center">
                    "بۇ ھىكايە ئەمدى فەن-ئىجازىلىك چوقۇم ئەمەس. سۈنئىي ئەقىل تېخنىكىسىنىڭ ئىلگىرىلەش ئارقىلىق بىز بۇ سۇئال بىلەن مەجبۇرى يۈزلىشىمىز كېرەك. ھايات نېمە؟ ئىنسان نېمە؟ بىز قايدىلىك؟"
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Interactive Reflection */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-800/50 text-center">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                <Brain className="text-cyan-400" />
                سىزنىڭ قارىشىڭىز قانداق؟
              </h3>
              <p className="text-gray-300 mb-6">
                بۇ ماقالىنى ئوقۇغاندىن كېيىن، سۈنئىي ئەقىلگە بالىلىقنى تاپشۇرۇش توغرىسىدا قانداق ھېس قىلىسىز؟
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { label: 'مەن بۇنى قوبۇل قىلىمەن', color: 'from-green-600 to-emerald-600' },
                  { label: 'ئارىلاش ھېسسىيات', color: 'from-yellow-600 to-amber-600' },
                  { label: 'مەن قارشىمەن', color: 'from-red-600 to-orange-600' },
                  { label: 'تېخى ئويلاشقىلى كېرەك', color: 'from-gray-600 to-gray-700' }
                ].map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-full font-semibold bg-gradient-to-r ${option.color}`}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-800/50">
            <p className="text-indigo-300 italic text-lg">
              — يېڭى ئالەم بىلەن يېڭى ئىنسان، بىزنىڭ تاللاشىمىزدا —
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}