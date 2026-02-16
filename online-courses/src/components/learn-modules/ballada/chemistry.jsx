import React, { useState, useEffect, useRef } from 'react';
import { 
  BeakerIcon, 
  FireIcon, 
  SparklesIcon, 
  AcademicCapIcon,
  AtomIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  TrophyIcon,
  ArrowsRightLeftIcon,
  CubeIcon
} from '@heroicons/react/24/solid';

const ChemistryComponent = () => {
  const [currentTopic, setCurrentTopic] = useState('elements');
  const [mixture, setMixture] = useState([]);
  const [experimentResult, setExperimentResult] = useState(null);
  const [score, setScore] = useState(0);
  const [animation, setAnimation] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [experimentHistory, setExperimentHistory] = useState([]);
  const [showAtomicModel, setShowAtomicModel] = useState(false);
  const [currentElement, setCurrentElement] = useState('H');
  
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  
  // ئاساسىي خىمىيە تېمىلىرى
  const chemistryTopics = {
    elements: {
      title: 'خىمىيىلىك ئېلېمېنتلار',
      icon: '⚛️',
      color: 'from-blue-500 to-cyan-500',
      description: 'يەر يۈزىدىكى بارلىق ماددىلارنىڭ ئاساسى',
      elements: [
        { symbol: 'H', name: 'ھىدروگېن', emoji: '🔥', color: 'bg-red-100', mass: 1, facts: 'ئەڭ يېڭىل خىمىيىلىك ئېلېمېنت' },
        { symbol: 'O', name: 'ئوكسىگېن', emoji: '💨', color: 'bg-blue-100', mass: 16, facts: 'نەپەس ئېلىش ئۈچۈن زۆرۈر' },
        { symbol: 'C', name: 'كاربون', emoji: '💎', color: 'bg-gray-100', mass: 12, facts: 'ھايۋان ۋە ئۆسۈملۈكلەرنىڭ ئاساسى' },
        { symbol: 'Na', name: 'ناترىي', emoji: '🧂', color: 'bg-yellow-100', mass: 23, facts: 'تۇزنىڭ ئاساسىي قىسمى' },
        { symbol: 'Cl', name: 'كلور', emoji: '🧪', color: 'bg-green-100', mass: 35, facts: 'سۇنى تازىلاشتا ئىشلىتىلىدۇ' },
        { symbol: 'Fe', name: 'تۆمۈر', emoji: '🛡️', color: 'bg-orange-100', mass: 56, facts: 'قاننىڭ رەڭگىنى بېرىدۇ' },
        { symbol: 'Au', name: 'ئالتۇن', emoji: '🏆', color: 'bg-yellow-200', mass: 197, facts: 'ھەرگىز زەڭگىرمەيدۇ' },
        { symbol: 'Hg', name: 'سېلىۋېر', emoji: '🌡️', color: 'bg-silver-100', mass: 201, facts: 'ئۇششاقتىكى مېڭە' },
      ]
    },
    atoms: {
      title: 'ئاتوم قۇرۇلمىسى',
      icon: '🔬',
      color: 'from-purple-500 to-pink-500',
      description: 'ئاتوم ئىچىدىكى كىچىك دۇنيا',
      structure: {
        nucleus: 'يادرو (پروتون + نېيترون)',
        electrons: 'ئېلېكترون بۇلۇتلىرى',
        orbits: 'ئوربىتال يوللار',
        energyLevels: 'ئېنېرگىيە قەۋەتلىرى'
      },
      particles: [
        { name: 'پروتون', charge: '+', mass: 1, emoji: '➕', color: 'text-red-500' },
        { name: 'نېيترون', charge: '0', mass: 1, emoji: '⚪', color: 'text-gray-500' },
        { name: 'ئېلېكترون', charge: '-', mass: '0.0005', emoji: '➖', color: 'text-blue-500' }
      ],
      atomicModels: [
        { name: 'Thomson', year: '1904', description: 'ئۇرۇقلىق تىلىمۇش', emoji: '🍰' },
        { name: 'Rutherford', year: '1911', description: 'يادرولىق مودېل', emoji: '🎯' },
        { name: 'Bohr', year: '1913', description: 'ئوربىتال مودېل', emoji: '🎡' },
        { name: 'Modern', year: '1926', description: 'بۇلۇت مودېل', emoji: '☁️' }
      ]
    },
    reactions: {
      title: 'خىمىيىلىك رېئاكسىيەلەر',
      icon: '⚡',
      color: 'from-green-500 to-emerald-500',
      description: 'ماددىلارنىڭ ئۆز-ئارا تەسىرى',
      types: [
        {
          name: 'قوشۇلۇش رېئاكسىيەسى',
          formula: 'A + B → AB',
          example: '2H₂ + O₂ → 2H₂O',
          emoji: '🤝',
          explanation: 'ئىككى ماددى بىر ماددىغا ئايلىنىدۇ'
        },
        {
          name: 'ئاجرىش رېئاكسىيەسى',
          formula: 'AB → A + B',
          example: '2H₂O → 2H₂ + O₂',
          emoji: '💔',
          explanation: 'بىر ماددى ئىككى ماددىغا ئايرىلىدۇ'
        },
        {
          name: 'ئالماشتۇرۇش رېئاكسىيەسى',
          formula: 'AB + C → AC + B',
          example: '2Na + 2HCl → 2NaCl + H₂',
          emoji: '🔄',
          explanation: 'ئاتوملار ئورنىنى ئالماشتۇرىدۇ'
        }
      ],
      examples: [
        { reactants: ['🔥', '💨'], product: '💧', name: 'يېنىش', description: 'ھىدروگېن + ئوكسىگېن → سۇ' },
        { reactants: ['💧', '⚡'], products: ['💨', '💨'], name: 'سۇنى ئايرىش', description: 'سۇ → ھىدروگېن + ئوكسىگېن' },
        { reactants: ['🧪', '🧂'], product: '🧂💧', name: 'تۇز ھاسىل قىلىش', description: 'ناترىي + كلور → تۇز' }
      ]
    },
    states: {
      title: 'ماددىنىڭ ھالەتلىرى',
      icon: '❄️',
      color: 'from-cyan-500 to-blue-500',
      description: 'قاتتىق، سۇيۇق ۋە گاز ھالىتى',
      states: [
        {
          name: 'قاتتىق',
          emoji: '🧊',
          properties: 'شەكلى ئۆزگەرمەيدۇ',
          examples: 'مۇز، تاش، تۆمۈر',
          particles: 'ئاتوملار تۈز سىزىقتا تۇرىدۇ'
        },
        {
          name: 'سۇيۇق',
          emoji: '💧',
          properties: 'شەكلى ئۆزگىرىدۇ',
          examples: 'سۇ، سۇت، ماي',
          particles: 'ئاتوملار ئەركىن ھەرىكەتلىنىدۇ'
        },
        {
          name: 'گاز',
          emoji: '💨',
          properties: 'شەكلى ۋە ھەجىمى يوق',
          examples: 'ھاۋا، ھىدروگېن، ئوكسىگېن',
          particles: 'ئاتوملار ئۇچۇرۇپ يۈرىدۇ'
        },
        {
          name: 'پلازما',
          emoji: '⚡',
          properties: 'ئاتوملار ئايرىلىپ كېتىدۇ',
          examples: 'قۇياش، يورۇق لامپا',
          particles: 'ئاتوملار ئىونلارغا ئايرىلىدۇ'
        }
      ],
      changes: [
        { from: '🧊', to: '💧', name: 'ئېرىش', temp: '0°C+', emoji: '🔥' },
        { from: '💧', to: '💨', name: 'قايناش', temp: '100°C+', emoji: '♨️' },
        { from: '💨', to: '💧', name: 'كۆپۈكلىنىش', temp: 'تۆۋەن', emoji: '❄️' },
        { from: '💧', to: '🧊', name: 'توڭاش', temp: '0°C-', emoji: '🥶' }
      ]
    },
    acidsBases: {
      title: 'ئاسىد ۋە ئاساسلار',
      icon: '🧪',
      color: 'from-red-500 to-orange-500',
      description: 'ئېسىل ۋە ئەجىل تېتىماق',
      acids: [
        { name: 'سىترىك ئاسىدى', source: 'لىمون', emoji: '🍋', ph: 2, color: 'yellow' },
        { name: 'ئاستىك ئاسىدى', source: 'سىركە', emoji: '🍶', ph: 3, color: 'red' },
        { name: 'كاربون ئاسىدى', source: 'غازلىق ئىچىملىك', emoji: '🥤', ph: 4, color: 'brown' }
      ],
      bases: [
        { name: 'سودا', source: 'خورا سۇ', emoji: '🧼', ph: 12, color: 'white' },
        { name: 'ئاممونىي', source: 'تازىلاش ماددىسى', emoji: '🧴', ph: 11, color: 'blue' },
        { name: 'ماغنېزىي', source: 'كېرىش كۈچى', emoji: '💊', ph: 10, color: 'pink' }
      ],
      phScale: {
        0: { emoji: '🔥', name: 'كۈچلۈك ئاسىد', examples: 'باتارېيە ئاسىدى' },
        3: { emoji: '🍋', name: 'ئاسىد', examples: 'لىمون شەربىتى' },
        7: { emoji: '💧', name: 'بىتەرەپ', examples: 'ساپ سۇ' },
        11: { emoji: '🧼', name: 'ئاساس', examples: 'ساپون' },
        14: { emoji: '☢️', name: 'كۈچلۈك ئاساس', examples: 'سودا' }
      }
    },
    organic: {
      title: 'ئورگانىك خىمىيە',
      icon: '🌿',
      color: 'from-green-600 to-lime-500',
      description: 'ھايۋان ۋە ئۆسۈملۈكلەرنىڭ خىمىيەسى',
      compounds: [
        { name: 'كاربون ھىدرات', formula: 'C₆H₁₂O₆', emoji: '🍞', examples: 'نان، شېكەر، گۈرۈچ' },
        { name: 'ياغ', formula: 'C₅₅H₉₈O₆', emoji: '🧈', examples: 'ماي، سېرىق ماي' },
        { name: 'پروتىين', formula: 'C₂H₅NO₂', emoji: '🥩', examples: 'گۆش، سۇت، تۇخۇم' },
        { name: 'DNK', formula: 'C₁₀H₁₆N₅O₁₃P₃', emoji: '🧬', examples: 'ھەر بىر ھۈجەيرە' }
      ],
      processes: [
        { name: 'پوتوسىنتېز', input: 'CO₂ + H₂O + نور', output: 'C₆H₁₂O₆ + O₂', emoji: '🌱' },
        { name: 'ھەزم قىلىش', input: 'يېمەكلىك', output: 'ئېنېرگىيە', emoji: '🍎' },
        { name: 'نەپەس ئېلىش', input: 'O₂', output: 'CO₂ + ئېنېرگىيە', emoji: '👃' }
      ]
    }
  };

  // تەجرىبىلەر
  const experiments = {
    simple: [
      { 
        name: 'سۇ ۋە تۇز',
        ingredients: ['💧', '🧂'],
        result: '🧂💧',
        description: 'تۇزلۇق سۇ ھاسىل بولىدۇ',
        safe: true,
        difficulty: 'easy'
      },
      { 
        name: 'سۇ ۋە ئوت',
        ingredients: ['💧', '🔥'],
        result: '💨',
        description: 'سۇ قايناپ بۇغارغا ئايلىنىدۇ',
        safe: false,
        difficulty: 'medium'
      },
      { 
        name: 'سۈت ۋە شېكەر',
        ingredients: ['🥛', '🍬'],
        result: '🍫',
        description: 'تاتلىق سۈت ھاسىل بولىدۇ',
        safe: true,
        difficulty: 'easy'
      },
      { 
        name: 'سودا ۋە سىركە',
        ingredients: ['🧂', '🍶'],
        result: '🧪💨',
        description: 'گاز چىقىرىدىغان رېئاكسىيە',
        safe: false,
        difficulty: 'hard'
      }
    ],
    advanced: [
      { 
        name: 'ئاتوم بىرىكمىسى',
        ingredients: ['H', 'O', 'O'],
        result: 'H₂O',
        description: 'ئىككى ھىدروگېن ۋە بىر ئوكسىگېندىن سۇ ھاسىل بولىدۇ',
        safe: true,
        difficulty: 'medium'
      },
      { 
        name: 'تۇز ئايرىش',
        ingredients: ['Na', 'Cl'],
        result: 'NaCl',
        description: 'ناترىي ۋە كلوردىن تۇز ھاسىل بولىدۇ',
        safe: false,
        difficulty: 'medium'
      }
    ]
  };

  // خىمىيە سوئاللىرى
  const chemistryQuestions = {
    elements: [
      {
        question: 'ھەممە ئېلېمېنتلارنىڭ ئاساسى قايسى ئېلېمېنت؟',
        options: [
          'ھىدروگېن',
          'ئوكسىگېن',
          'كاربون',
          'ئالتۇن'
        ],
        correct: 0,
        explanation: 'ھىدروگېن - ئەڭ يېڭىل خىمىيىلىك ئېلېمېنت بولۇپ، يەر شارىدىكى ئېلېمېنتلارنىڭ %90 نى ئىگىلەيدۇ'
      },
      {
        question: 'قانداق ئېلېمېنت قاننىڭ رەڭگىنى بېرىدۇ؟',
        options: [
          'تۆمۈر (Fe)',
          'ئوكسىگېن (O)',
          'كاربون (C)',
          'ناترىي (Na)'
        ],
        correct: 0,
        explanation: 'تۆمۈر (Fe) قاندىكى ھېمۇگلوبىننىڭ تەركىبىي قىسمى بولۇپ، قاننى قىزىل رەتكە ئىگە قىلىدۇ'
      }
    ],
    atoms: [
      {
        question: 'ئاتومنىڭ ئەڭ ئېغىر قىسمى نېمە؟',
        options: [
          'يادرو',
          'ئېلېكترون',
          'پروتون',
          'نېيترون'
        ],
        correct: 0,
        explanation: 'يادرو ئاتومنىڭ ئەڭ ئېغىر قىسمى بولۇپ، ئۇ پروتون ۋە نېيترونلاردىن تەركىب تاپقان'
      },
      {
        question: 'قانداق پارتىكۇل مەنپىي زادىلىققا ئىگە؟',
        options: [
          'ئېلېكترون',
          'پروتون',
          'نېيترون',
          'يادرو'
        ],
        correct: 0,
        explanation: 'ئېلېكترون مەنپىي زادىلىققا ئىگە بولۇپ، ئاتوم ئەتراپىدا ئايلىنىدۇ'
      }
    ]
  };

  // ئاتوم مودېلىنى سىزىش
  const drawAtomicModel = (element) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // ئاتوم مەركىزى
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // يادرو
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
    ctx.fillStyle = '#ff6b6b';
    ctx.fill();
    
    // ئوربىتلار
    for (let i = 1; i <= 3; i++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, 50 + i * 40, 0, Math.PI * 2);
      ctx.strokeStyle = '#4ecdc4';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // ئېلېكترونلار
      const electronCount = i * 2;
      for (let j = 0; j < electronCount; j++) {
        const angle = (j / electronCount) * Math.PI * 2;
        const x = centerX + (50 + i * 40) * Math.cos(angle);
        const y = centerY + (50 + i * 40) * Math.sin(angle);
        
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#45b7d1';
        ctx.fill();
      }
    }
  };

  // ئارىلاشتۇرۇش تەجرىبىسى
  const handleMix = () => {
    if (mixture.length < 2) return;
    
    // ئاددىي تەجرىبىلەر
    const allExperiments = [...experiments.simple, ...experiments.advanced];
    const foundExp = allExperiments.find(exp => {
      const expIngredients = [...exp.ingredients].sort();
      const userIngredients = [...mixture].sort();
      return expIngredients.join('') === userIngredients.join('');
    });
    
    if (foundExp) {
      setExperimentResult(foundExp);
      setScore(prev => prev + (foundExp.difficulty === 'easy' ? 10 : 20));
      
      // ئانیماتسىيە كۆرسىتىش
      setAnimation('mixing');
      setTimeout(() => setAnimation(''), 2000);
      
      // تەجرىبە تارىخىغا قوشۇش
      if (!experimentHistory.includes(foundExp.name)) {
        setExperimentHistory([...experimentHistory, foundExp.name]);
      }
      
      setTimeout(() => {
        setExperimentResult(null);
      }, 5000);
    } else {
      setExperimentResult({
        name: 'مەلۇم ئەمەس',
        result: '❓',
        description: 'بۇ ماددىلارنى ئارىلاشتۇرۇش قانۇنىيەتسىز'
      });
      setTimeout(() => setExperimentResult(null), 3000);
    }
  };

  // ئېلېمېنت تاللاش
  const handleElementSelect = (element) => {
    if (mixture.length < 3) {
      setMixture([...mixture, element.emoji || element.symbol]);
    }
  };

  // ھالەت ئۆزگىرىش ئانیماتسىيەسى
  const startStateChange = (change) => {
    setAnimation(`state-change-${change.from}-${change.to}`);
    setTimeout(() => setAnimation(''), 3000);
  };

  useEffect(() => {
    if (showAtomicModel) {
      drawAtomicModel(currentElement);
    }
  }, [showAtomicModel, currentElement]);

  return (
    <div className="p-4 md:p-6 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" dir="rtl">
      
      {/* بېشىدىكى قىسم */}
      <div className="mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <BeakerIcon className="h-12 w-12 text-purple-600" />
                <SparklesIcon className="absolute -top-2 -right-2 h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-[UKIJ Tuz] bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  خىمىيە سېھرىسى
                </h1>
                <p className="text-gray-700 mt-2 font-[UKIJ Nasq] text-lg">
                  ئاتوملار بىلەن ئويۇن، ماددىلارنىڭ ئەجايىپ ئۆزگىرىشى
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-2xl flex items-center gap-3 border border-purple-200">
              <div className="relative">
                <TrophyIcon className="h-8 w-8 text-yellow-600" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className="text-sm text-purple-800 font-[UKIJ Nasq]">خىمىيە نۇقتىسى</p>
                <span className="font-bold text-2xl text-purple-900">{score}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* تېما تاللاش بۆلىكى */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-gray-800 flex items-center gap-2">
          <AcademicCapIcon className="h-6 w-6 text-blue-600" />
          خىمىيە تېمىلىرىنى تاللاش
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {Object.keys(chemistryTopics).map((topicKey) => {
            const topic = chemistryTopics[topicKey];
            return (
              <button
                key={topicKey}
                onClick={() => setCurrentTopic(topicKey)}
                className={`p-3 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${currentTopic === topicKey ? `bg-gradient-to-br ${topic.color} text-white` : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                <span className="text-2xl mb-2">{topic.icon}</span>
                <span className="font-bold text-center text-xs font-[UKIJ Nasq]">{topic.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* تاللانغان تېمىنىڭ تەپسىلاتى */}
      <div className="mb-8">
        <div className={`bg-gradient-to-br ${chemistryTopics[currentTopic].color} bg-opacity-10 rounded-3xl p-6 border border-gray-200`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className={`bg-gradient-to-br ${chemistryTopics[currentTopic].color} p-4 rounded-2xl`}>
                <span className="text-4xl">{chemistryTopics[currentTopic].icon}</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-[UKIJ Tuz] text-gray-800">
                  {chemistryTopics[currentTopic].title}
                </h2>
                <p className="text-gray-600 font-[UKIJ Nasq]">
                  {chemistryTopics[currentTopic].description}
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setShowQuiz(true)}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-bold hover:scale-105 transition-transform text-sm"
              >
                سىناش
              </button>
              {currentTopic === 'atoms' && (
                <button 
                  onClick={() => setShowAtomicModel(!showAtomicModel)}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-bold hover:scale-105 transition-transform text-sm"
                >
                  ئاتوم كۆرۈش
                </button>
              )}
            </div>
          </div>

          {/* ئاتوم مودېلى */}
          {currentTopic === 'atoms' && showAtomicModel && (
            <div className="mb-8 bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-gray-800">ئاتوم مودېلى</h3>
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <canvas 
                    ref={canvasRef} 
                    width={300} 
                    height={300} 
                    className="border-2 border-gray-200 rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-3 font-[UKIJ Tuz] text-lg">ئاتوم قۇرۇلمىسى:</h4>
                  <ul className="space-y-2">
                    {chemistryTopics.atoms.structure && Object.entries(chemistryTopics.atoms.structure).map(([key, value]) => (
                      <li key={key} className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="font-[UKIJ Nasq] text-gray-700">{value}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <h4 className="font-bold mb-3 font-[UKIJ Tuz] text-lg">ئاتوم پارتىكۇللىرى:</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {chemistryTopics.atoms.particles.map((particle, idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded-lg text-center">
                          <div className="text-2xl mb-1">{particle.emoji}</div>
                          <div className="font-bold text-sm">{particle.name}</div>
                          <div className="text-xs text-gray-600">زادىلىق: {particle.charge}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* تېمىغا ئاساسەن مەزمۇن كۆرسىتىش */}
          {currentTopic === 'elements' && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6 font-[UKIJ Tuz] text-gray-800">ئاساسىي ئېلېمېنتلار</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {chemistryTopics.elements.elements.map((element, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleElementSelect(element)}
                    className={`${element.color} p-4 rounded-xl hover:scale-105 transition-transform text-center border-2 border-transparent hover:border-purple-300`}
                  >
                    <div className="text-4xl mb-2">{element.emoji}</div>
                    <div className="font-bold text-gray-800">{element.name}</div>
                    <div className="text-sm text-gray-600 font-mono">{element.symbol}</div>
                    <div className="text-xs text-gray-500 mt-2 font-[UKIJ Nasq]">ئېغىرلىقى: {element.mass}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentTopic === 'reactions' && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6 font-[UKIJ Tuz] text-gray-800">خىمىيىلىك رېئاكسىيە تىپلىرى</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {chemistryTopics.reactions.types.map((type, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-md">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-3xl">{type.emoji}</div>
                      <h4 className="font-bold text-lg font-[UKIJ Tuz]">{type.name}</h4>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg mb-3 font-mono text-center">
                      {type.formula}
                    </div>
                    <p className="text-gray-600 mb-3 font-[UKIJ Nasq]">{type.explanation}</p>
                    <div className="text-sm text-gray-500 font-mono bg-gray-50 p-2 rounded">
                      {type.example}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentTopic === 'states' && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6 font-[UKIJ Tuz] text-gray-800">ماددىنىڭ ھالەتلىرى</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-4 font-[UKIJ Tuz] text-lg">ھالەتلەر:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {chemistryTopics.states.states.map((state, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-3xl">{state.emoji}</div>
                          <div>
                            <div className="font-bold font-[UKIJ Tuz]">{state.name}</div>
                            <div className="text-sm text-gray-500 font-[UKIJ Nasq]">{state.properties}</div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-600 mt-2">{state.examples}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-4 font-[UKIJ Tuz] text-lg">ھالەت ئۆزگىرىشى:</h4>
                  <div className="space-y-4">
                    {chemistryTopics.states.changes.map((change, idx) => (
                      <button
                        key={idx}
                        onClick={() => startStateChange(change)}
                        className="w-full bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all text-center"
                      >
                        <div className="flex items-center justify-center gap-4 text-2xl">
                          <span>{change.from}</span>
                          <span className="text-xl">{change.emoji}</span>
                          <span>{change.to}</span>
                        </div>
                        <div className="font-bold mt-2 font-[UKIJ Tuz]">{change.name}</div>
                        <div className="text-sm text-gray-500">{change.temp}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentTopic === 'acidsBases' && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6 font-[UKIJ Tuz] text-gray-800">ئاسىد ۋە ئاساسلار</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-4 font-[UKIJ Tuz] text-lg text-red-600">ئاسىدلار:</h4>
                  <div className="space-y-3">
                    {chemistryTopics.acidsBases.acids.map((acid, idx) => (
                      <div key={idx} className="bg-red-50 p-4 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{acid.emoji}</div>
                          <div>
                            <div className="font-bold font-[UKIJ Tuz]">{acid.name}</div>
                            <div className="text-sm text-gray-600">{acid.source}</div>
                          </div>
                          <div className="ml-auto bg-red-100 px-3 py-1 rounded-full">
                            <span className="font-bold text-red-700">pH: {acid.ph}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-4 font-[UKIJ Tuz] text-lg text-blue-600">ئاساسلار:</h4>
                  <div className="space-y-3">
                    {chemistryTopics.acidsBases.bases.map((base, idx) => (
                      <div key={idx} className="bg-blue-50 p-4 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{base.emoji}</div>
                          <div>
                            <div className="font-bold font-[UKIJ Tuz]">{base.name}</div>
                            <div className="text-sm text-gray-600">{base.source}</div>
                          </div>
                          <div className="ml-auto bg-blue-100 px-3 py-1 rounded-full">
                            <span className="font-bold text-blue-700">pH: {base.ph}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-red-100 via-yellow-100 to-blue-100 p-6 rounded-2xl">
                <h4 className="font-bold mb-4 font-[UKIJ Tuz] text-center text-gray-800">pH شكالىسى</h4>
                <div className="flex items-center justify-between">
                  {Object.entries(chemistryTopics.acidsBases.phScale).map(([ph, data]) => (
                    <div key={ph} className="text-center">
                      <div className="text-2xl">{data.emoji}</div>
                      <div className="text-xs font-bold mt-1">{data.name}</div>
                      <div className="text-xs text-gray-600">pH: {ph}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentTopic === 'organic' && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6 font-[UKIJ Tuz] text-gray-800">ئورگانىك خىمىيە</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-4 font-[UKIJ Tuz] text-lg">ئورگانىك بىرىكمىلەر:</h4>
                  <div className="space-y-4">
                    {chemistryTopics.organic.compounds.map((compound, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-2xl">{compound.emoji}</div>
                          <div>
                            <div className="font-bold font-[UKIJ Tuz]">{compound.name}</div>
                            <div className="text-sm font-mono text-gray-600">{compound.formula}</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 font-[UKIJ Nasq]">مىسال: {compound.examples}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-4 font-[UKIJ Tuz] text-lg">خىمىيىلىك جەريانلار:</h4>
                  <div className="space-y-4">
                    {chemistryTopics.organic.processes.map((process, idx) => (
                      <div key={idx} className="bg-green-50 p-4 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-2xl">{process.emoji}</div>
                          <div className="font-bold font-[UKIJ Tuz]">{process.name}</div>
                        </div>
                        <div className="text-sm text-gray-700 mb-2 font-[UKIJ Nasq]">{process.input} → {process.output}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ئارىلاشتۇرۇش تەجرىبىسى بۆلىكى */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg border border-purple-100">
              <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2 font-[UKIJ Tuz]">
                <ArrowsRightLeftIcon className="h-6 w-6 text-purple-600" />
                ماددا ئارىلاشتۇرۇش تەجرىبىسى
              </h3>
              
              <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h4 className="font-bold mb-3 font-[UKIJ Tuz] text-gray-700">تاللانغان ماددىلار:</h4>
                  <div className="flex gap-3 flex-wrap">
                    {mixture.map((item, idx) => (
                      <div key={idx} className="text-4xl bg-white p-3 rounded-lg shadow">
                        {item}
                      </div>
                    ))}
                    {mixture.length < 3 && (
                      <div className="text-4xl text-gray-300 p-3">+</div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-3 font-[UKIJ Nasq]">
                    ئەڭ كۆپ 3 خىل ماددىنى تاللىيالايسىز
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-5xl mb-4 animate-pulse">
                    {animation === 'mixing' ? '🌀' : (experimentResult ? experimentResult.result : '❓')}
                  </div>
                  <button
                    onClick={handleMix}
                    disabled={mixture.length < 2}
                    className={`px-8 py-3 rounded-xl font-bold text-lg ${
                      mixture.length < 2 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 transition-transform'
                    }`}
                  >
                    ئارىلاشتۇرۇش
                  </button>
                </div>
              </div>

              {experimentResult && (
                <div className={`mt-6 p-4 rounded-xl ${experimentResult.name === 'مەلۇم ئەمەس' ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'}`}>
                  <h4 className="font-bold text-lg mb-2 font-[UKIJ Tuz]">
                    {experimentResult.name === 'مەلۇم ئەمەس' ? '❌ مەلۇم ئەمەس' : `✅ ${experimentResult.name}`}
                  </h4>
                  <p className="text-gray-700 font-[UKIJ Nasq]">{experimentResult.description}</p>
                  {experimentResult.safe !== undefined && (
                    <div className="flex items-center gap-2 mt-3">
                      <ShieldCheckIcon className={`h-5 w-5 ${experimentResult.safe ? 'text-green-600' : 'text-red-600'}`} />
                      <span className={`text-sm ${experimentResult.safe ? 'text-green-700' : 'text-red-700'}`}>
                        {experimentResult.safe ? 'بىخەتەر تەجرىبە' : 'خەتەرلىك تەجرىبە'}
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-6">
                <h4 className="font-bold mb-3 font-[UKIJ Tuz] text-gray-700">تەجرىبە ئۆرنەكلىرى:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experiments.simple.map((exp, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white p-4 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setMixture(exp.ingredients)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {exp.ingredients.map((ing, i) => (
                            <span key={i} className="text-2xl">{ing}</span>
                          ))}
                          <span className="text-xl">→</span>
                          <span className="text-2xl">{exp.result}</span>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs ${exp.safe ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {exp.difficulty === 'easy' ? 'ئاسان' : exp.difficulty === 'medium' ? 'ئوتتۇرا' : 'قىيىن'}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 font-[UKIJ Nasq]">{exp.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* سوئال-جاۋاب بۆلىكى */}
          {showQuiz && chemistryQuestions[currentTopic] && (
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold mb-6 font-[UKIJ Tuz] text-center text-blue-800">
                  بىلىم سىناقلىرى
                </h3>
                
                {!quizCompleted ? (
                  chemistryQuestions[currentTopic].map((question, qIndex) => (
                    <div key={qIndex} className="mb-8 last:mb-0">
                      <h4 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-gray-800">
                        {qIndex + 1}. {question.question}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {question.options.map((option, oIndex) => (
                          <button
                            key={oIndex}
                            onClick={() => {
                              if (oIndex === question.correct) {
                                setScore(prev => prev + 20);
                                alert(`توغرا! ${question.explanation}`);
                              } else {
                                alert(`ئەپسۇس! توغرا جاۋاب: ${question.options[question.correct]}`);
                              }
                              
                              if (qIndex < chemistryQuestions[currentTopic].length - 1) {
                                // كېيىنكى سوئالغا ئۆتۈش
                              } else {
                                setQuizCompleted(true);
                              }
                            }}
                            className="p-4 bg-white hover:bg-blue-50 rounded-xl text-right font-[UKIJ Nasq] transition-all duration-300 hover:scale-105 border border-blue-100"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🎉</div>
                    <h4 className="text-2xl font-bold mb-4 font-[UKIJ Tuz] text-green-700">مۇبارەك! سىناقنى تاماملادىڭىز!</h4>
                    <p className="text-gray-700 mb-6 font-[UKIJ Nasq]">
                      سىز {chemistryTopics[currentTopic].title} توغرىسىدا ئاساسىي بىلىملەرگە ئىگە بولدىڭىز!
                    </p>
                    <button 
                      onClick={() => {
                        setShowQuiz(false);
                        setQuizCompleted(false);
                      }}
                      className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:scale-105 transition-transform"
                    >
                      داۋام قىلىش
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ئومۇمىي خىمىيە سوئاللىرى */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-6 font-[UKIJ Tuz] text-gray-800">ئومۇمىي خىمىيە سوئاللىرى</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: 'ئاتوم نېمە؟',
              a: 'ئاتوم - ماددىنىڭ ئەڭ كىچىك بۆلەكچىسى. ئۇ پەقەت مىكروسكوپ ئاستىدا كۆرۈلىدۇ.'
            },
            {
              q: 'خىمىيىلىك رېئاكسىيە نېمە؟',
              a: 'خىمىيىلىك رېئاكسىيە - ئىككى ياكى كۆپرەك ماددىلار ئارىسىدا يېڭى ماددىلار ھاسىل بولۇش جەريانى.'
            },
            {
              q: 'ئاتوم بىلەن مولېكۇلا ئوتتۇرىسىدا پەرق نېمە؟',
              a: 'ئاتوم بىر خىل ئېلېمېنت، مولېكۇلا ئىككى ياكى كۆپرەك ئاتوملار بىرلەشكەن ھالىتى.'
            },
            {
              q: 'تۇزلۇق سۇ نېمە ئۈچۈن دېڭىزدا ئېرىمەيدۇ؟',
              a: 'تۇزلۇق سۇدا تۇز مولېكۇللىرى سۇ مولېكۇللىرىنى ئوراپ تۇرىدۇ، شۇڭا ئېرىتىش تېمپېراتۇرىسى يۇقىرى بولىدۇ.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold mb-3 font-[UKIJ Tuz] text-purple-700">❓ {item.q}</h3>
              <p className="text-gray-700 font-[UKIJ Nasq]">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* تەجرىبە تارىخى */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-gray-800">تەجرىبە تارىخىڭىز</h3>
        <div className="flex flex-wrap gap-3">
          {experimentHistory.map((exp, index) => (
            <div key={index} className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center gap-2 border border-purple-200">
              <SparklesIcon className="h-4 w-4 text-purple-600" />
              <span className="font-[UKIJ Nasq] text-purple-800">{exp}</span>
            </div>
          ))}
          {experimentHistory.length === 0 && (
            <p className="text-gray-500 font-[UKIJ Nasq]">تېخى ھېچقانداق تەجرىبە قىلمىدىڭىز. يۇقىرىدىكى ماددىلارنى تاللاپ ئارىلاشتۇرۇپ بېقىڭ!</p>
          )}
        </div>
      </div>

      {/* خەتەرلىك ئەسكەرتىش */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border-2 border-red-200">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheckIcon className="h-8 w-8 text-red-600" />
          <h3 className="text-xl font-bold text-red-700 font-[UKIJ Tuz]">مۇھىم ئەسكەرتىش!</h3>
        </div>
        <p className="text-red-800 font-[UKIJ Nasq] text-lg">
          ⚠️ بۇ پروگرامما پەقەت ئۆگىنىش مەقسىتىدە. بارلىق خىمىيىلىك تەجرىبىلەر كەسپىي مۇلاھىزىرلىق ئاستىدا ۋە ئالاھىدە ئەسۋابلار بىلەن ئېلىپ بېرىلىشى كېرەك! ئۆزىڭىز تەجرىبە قىلىشقا ئۇرۇنماڭ!
        </p>
      </div>

      {/* ئانیماتسىيە كونتىنېرى */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        {animation.includes('state-change') && (
          <>
            <div className="absolute top-1/4 left-1/4 text-6xl animate-bounce">❄️</div>
            <div className="absolute top-1/3 right-1/4 text-6xl animate-pulse">🔥</div>
            <div className="absolute bottom-1/4 left-1/3 text-6xl animate-spin">🌀</div>
          </>
        )}
        {animation === 'mixing' && (
          <>
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-6xl animate-ping">🧪</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-8xl animate-bounce" style={{animationDelay: '0.5s'}}>⚗️</div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChemistryComponent;