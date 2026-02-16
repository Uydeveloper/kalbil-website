import React, { useState, useEffect, useRef } from 'react';
import { 
  BoltIcon, 
  LightBulbIcon, 
  WrenchIcon, 
  BeakerIcon, 
  SparklesIcon, 
  GlobeAltIcon, 
  CpuChipIcon,
  RocketLaunchIcon,
  SunIcon,
  MoonIcon,
  ArrowsPointingOutIcon
} from '@heroicons/react/24/solid';

const PhysicComponent = () => {
  const [currentExperiment, setCurrentExperiment] = useState('newton');
  const [score, setScore] = useState(0);
  const [animation, setAnimation] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [experimentHistory, setExperimentHistory] = useState([]);
  
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  
  // ئاساسىي فىزىكا تېمىلىرى
  const physicsTopics = {
    newton: {
      title: 'نىيوتون فىزىكىسى',
      icon: '🌍',
      color: 'from-red-500 to-orange-500',
      description: 'ھەرىكەت قانۇنلىرى ۋە تارتىش كۈچى',
      laws: [
        {
          title: 'بىرىنچى قانۇن',
          description: 'ھەرىكەتسىز تەن ھەرىكەتسىز قالىدۇ، ھەرىكەتلىك تەن ھەرىكەتلىك قالىدۇ',
          example: 'تاختا يۈگۈرگەندە، توختىغاندا ئىلگىرى ئۇزۇنلۇق سۈرىشىش',
          emoji: '🛹',
          formula: 'F = 0'
        },
        {
          title: 'ئىككىنچى قانۇن',
          description: 'كۈچ تەنگە تېزلىك بېرىدۇ: F = m × a',
          example: 'چوڭ ماشىنا ئازراق تېزلەنمەيدۇ، كىچىك ماشىنا تېز تېزلەندۈرۈلىدۇ',
          emoji: '🚗',
          formula: 'F = m·a'
        },
        {
          title: 'ئۈچىنچى قانۇن',
          description: 'ھەر بىر ھەرىكەتكە تەڭ كۈچتە، ئەمما قارشى يۆنىلىشتا جاۋاب بېرىلىدۇ',
          example: 'قايىقنى ئىتتىرىگەندە، قايىق سېنى ئارقاڭغا ئىتتىرىدۇ',
          emoji: '🛶',
          formula: 'F₁ = -F₂'
        }
      ],
      experiments: [
        {
          title: 'تارتىش كۈچى تەجرىبىسى',
          description: 'مۇختەلىف ئېغىرلىقتىكى نەرسىلەرنىڭ يەرگە چۈشۈش سۈرئىتى',
          demo: '🏀 🪶',
          explanation: 'ھاۋا قارشىلىقى بولمىسا، بارلىق نەرسىلەر بىر ۋاقىتتا يەرگە چۈشىدۇ',
          interactive: true
        },
        {
          title: 'كۈچ ۋە تېزلەنمە',
          description: 'قانداققا كۈچ ئارتىلغاندا تېزلەنمە ئارتىدۇ',
          demo: '🎾 ➡️ 🏃',
          explanation: 'زورراق ئىتتىرىگەندە توپ تېز ئۇچىدۇ',
          interactive: true
        }
      ],
      funFacts: [
        'نىيوتون ئالما چۈشۈشىدىن تارتىش كۈچىنى بايقىغان',
        'تارتىش كۈچى يەر شارىنى ئاي ئەتراپىدا ئۇچۇرىدۇ',
        'ئادەم سۈيەكتە مەۋجۇت بولغان ئەڭ كۈچلۈك قۇۋۋەت'
      ]
    },
    quantum: {
      title: 'كۋانت فىزىكىسى',
      icon: '⚛️',
      color: 'from-purple-500 to-pink-500',
      description: 'كىچىك دۇنيانىڭ ئەجەيبىلىك قانۇنلىرى',
      concepts: [
        {
          title: 'سەكرەپ يۆنىلىش',
          description: 'ئاتوملار بىر ئورۇندىن يەنە بىر ئورۇنغا سەكرەپ ئۆتەلەيدۇ',
          example: 'ئاتوم يەر ئالماشتۇرۇش ئويۇنى',
          emoji: '🎭',
          principle: 'ئەڭ كىچىك سەكرەش'
        },
        {
          title: 'توققۇز ئېلېكترون',
          description: 'ئاتوم ئەتراپىدىكى ئېلېكترونلار ئوربىتالدا ئۇچىدۇ',
          example: 'كۆپ قەۋەتلىك ئاتوم قۇرۇلمىسى',
          emoji: '🎯',
          principle: 'ئېلېكترون بۇلۇتلىرى'
        },
        {
          title: 'كۋانت ئارىلاشمىسى',
          description: 'بىر ئاتوم بىرلا ۋاقىتتا ئىككى يەردە بولالايدۇ',
          example: 'ئاتومنىڭ قارارسىزلىقى',
          emoji: '🌀',
          principle: 'ھەممە مۇمكىنلىك'
        }
      ],
      experiments: [
        {
          title: 'كۋانت سەكرەش',
          description: 'ئاتوملارنىڭ بىر ئورۇندىن يەنە بىر ئورۇنغا سەكرەشى',
          demo: '⚛️ ↷ ⚛️',
          explanation: 'كىچىك دۇنيادا ھەممە نەرسە سەكرەيدۇ',
          interactive: true
        },
        {
          title: 'ئېلېكترون ئۇچۇشى',
          description: 'ئاتوم ئىچىدىكى ئېلېكترونلارنىڭ ھەرىكىتى',
          demo: '🔴 🔄 🔵',
          explanation: 'ئاتوم يادروسى ئەتراپىدا ئېلېكترونلار ئايلىنىدۇ',
          interactive: false
        }
      ],
      funFacts: [
        'ئاتومنىڭ %99.9% بوشلۇقتۇر',
        'بىر تۇز تەنىسى 10 مىليون ئاتومدىن تەركىب تاپىدۇ',
        'ئاتوم بىرلا ۋاقىتتا تال تۆكۈش ۋە تال تۆكمەسلىك بولالايدۇ'
      ]
    },
    relativity: {
      title: 'ئىزافىلىك نەزەرىيىسى',
      icon: '🕰️',
      color: 'from-blue-500 to-cyan-500',
      description: 'زامان ۋە بوشلۇقنىڭ مۇناسىۋىتى',
      principles: [
        {
          title: 'زامان ئاستىلىشى',
          description: 'تېز يۈرگەن ۋاقىت ئاستىلايدۇ',
          example: 'پاڭگىدىكى كىشى يەر يۈزىدىكى كىشىدىن ياشايدۇ',
          emoji: '🚀',
          formula: 't\' = t/√(1-v²/c²)'
        },
        {
          title: 'ئۇزۇنلۇق قىسقارتىش',
          description: 'تېز يۈرگەن نەرسە قىسقىرىدۇ',
          example: 'تېز يۈرگەن ماشىنا ئۇزۇنلۇقى كۆرۈنمەيدۇ',
          emoji: '📏',
          formula: 'L\' = L√(1-v²/c²)'
        },
        {
          title: 'ئېنېرگىيە-ماسسا ماسلىشىشى',
          description: 'ئېنېرگىيە ۋە ماسسا بىر-بىرىگە ئايلاندۇرۇلالايدۇ',
          example: 'كىچىك ماددىدىن زور ئېنېرگىيە ئېلىش',
          emoji: '💥',
          formula: 'E = mc²'
        }
      ],
      experiments: [
        {
          title: 'زامان ئاستىلىشى',
          description: 'تېز يۈرگەندە ۋاقىت قانداق ئۆزگىرىدۇ',
          demo: '👨‍🚀 🆚 👨‍🌾',
          explanation: 'پاڭگىدا ئۇزۇنراق ياشايسىز',
          interactive: true
        },
        {
          title: 'E=mc² تەجرىبىسى',
          description: 'كىچىك ماددىدىن قانداق زور ئېنېرگىيە ئېلىش',
          demo: '⚛️ → 💥',
          explanation: 'ئاتوم بومبىسىنىڭ ئىشلەش پرىنسىپى',
          interactive: false
        }
      ],
      funFacts: [
        'ئەگەر قارا چېغىرغا چۈشسىڭىز، سىزنىڭ ۋاقتىڭىز توختايدۇ',
        'پاڭگىدا بىر يىل يەر يۈزىدىكى 10 يىلغا تەڭ',
        'يۇلتۇزلارنىڭ نورى مىليون يىللاردا بىزگە يېتىپ كېلىدۇ'
      ]
    },
    electricity: {
      title: 'ئېلېكتىر دۇنياسى',
      icon: '⚡',
      color: 'from-yellow-500 to-amber-500',
      description: 'ئېلېكترونلارنىڭ ھەرىكىتى ۋە كۈچى',
      concepts: [
        {
          title: 'توك ئېقىمى',
          description: 'ئېلېكترونلارنىڭ ئۆتۈش يولىدىن ئېقىشى',
          example: 'چىراغ سىمى ئارقىلىق توك ئۆتىدۇ',
          emoji: '💡',
          formula: 'I = Q/t'
        },
        {
          title: 'ۋولت ۋە ئامپىر',
          description: 'توكنىڭ قىممىتى ۋە كۈچى',
          example: 'باتارېيە ۋولتى، لامپا ئامپىرى',
          emoji: '🔋',
          formula: 'V = IR'
        },
        {
          title: 'موتىۋاتسىيە',
          description: 'مېگنىت ۋە توكنىڭ ئۆز-ئارا تەسىرى',
          example: 'ماتورنىڭ ئىشلىشى',
          emoji: '🔄',
          principle: 'ئېلېكترومېگنىت قانۇنى'
        }
      ],
      experiments: [
        {
          title: 'سىركۇيت قۇرۇش',
          description: 'باتارېيە، سىم ۋە لامپا بىلەن توك زەنجىرى قۇرۇش',
          demo: '🔋 → 🔌 → 💡',
          explanation: 'توك ئېقىمى بولسا لامپا يورۇيدۇ',
          interactive: true
        },
        {
          title: 'مېگنىتلىق توك',
          description: 'مېگنىت بىلەن توك ھاسىل قىلىش',
          demo: '🧲 ↷ 🔄 ⚡',
          explanation: 'مېگنىت ھەرىكىتى توك ھاسىل قىلىدۇ',
          interactive: false
        }
      ],
      funFacts: [
        'سەكرەپ تاشقاندا 3000 ۋولت توك ھاسىل بولىدۇ',
        'يېرىم ئۆتكۈزگۈچلەر كومپيۇتېرنى ئىشلەتكىلى بولىدۇ',
        'تىنچ ئوقيان ئۇزۇنراق ئېلېكتىر سىمى 20 مەتردىن ئاشىدۇ'
      ]
    },
    cosmos: {
      title: 'ماكروسىستېما',
      icon: '🌌',
      color: 'from-indigo-500 to-violet-500',
      description: 'قۇياش سىستېمىسى ۋە گالاكتىكىلار',
      systems: [
        {
          title: 'قۇياش سىستېمىسى',
          description: 'قۇياش ۋە ئۇنىڭ ئەتراپىدىكى سەييارىلەر',
          example: '9 چوڭ سەييارىلەر ئايلىنىشى',
          emoji: '☀️',
          facts: 'يېرىم 4.6 مىليارد ياش'
        },
        {
          title: 'يۇلتۇزلار ۋە سۇپەرنوۋا',
          description: 'يۇلتۇزلارنىڭ تۇغۇلۇشى ۋە ئۆلۈمى',
          example: 'يۇلتۇز پارچىلىشى',
          emoji: '⭐',
          facts: 'يۇلتۇز ئۆلگەندە سۇپەرنوۋا بولىدۇ'
        },
        {
          title: 'قارا چېغىر ۋە تۈنۈلۈش',
          description: 'قارا چېغىر ۋە كەلگۈسىز تۇتاش',
          example: 'ھەممە نەرسىنى يۇتقۇزىدىغان كۈچ',
          emoji: '🕳️',
          facts: 'قارا چېغىر نورنىمۇ قۇتۇلالمايدۇ'
        }
      ],
      experiments: [
        {
          title: 'سەييارىلەر ئايلىنىشى',
          description: 'سەييارىلەرنىڭ قۇياش ئەتراپىدا ئايلىنىشى',
          demo: '☀️ ← 🪐 ← 🌎 ← 🌕',
          explanation: 'ھەممە سەييارىلەر قۇياشنى ئايلىنىدۇ',
          interactive: true
        },
        {
          title: 'قۇياش تۇتۇلۇشى',
          description: 'ئاي قۇياشنى قاپلايدۇ',
          demo: '🌞 🌑 🌎',
          explanation: 'ئاي قۇياش بىلەن يەر ئوتتۇرىسىدا تۇرۇپ تۇتۇلۇش ھاسىل قىلىدۇ',
          interactive: false
        }
      ],
      funFacts: [
        'قۇياش يېرىمدىن 1 مىليون ھەسسە چوڭ',
        'سامانى يولىدىكى يۇلتۇز سانى 100 مىليارد',
        'يەردىن قۇياشقا يېتىش ئۈچۈن تەخمىنەن 19 يىل كېتىدۇ'
      ]
    }
  };

  // فىزىكا سوئاللىرى
  const physicsQuestions = {
    newton: [
      {
        question: 'نىيوتوننىڭ ئۈچىنچى قانۇنى نېمە دېيىلەيدۇ؟',
        options: [
          'ھەر بىر ھەرىكەتكە تەڭ كۈچتە جاۋاب بېرىلىدۇ',
          'ھەرىكەتسىز تەن ھەرىكەتسىز قالىدۇ',
          'كۈچ تەنگە تېزلىك بېرىدۇ',
          'ھەممە نەرسە يەرگە چۈشىدۇ'
        ],
        correct: 0,
        explanation: 'نىيوتوننىڭ ئۈچىنچى قانۇنى: ھەر بىر ھەرىكەتكە تەڭ كۈچتە، ئەمما قارشى يۆنىلىشتا جاۋاب بېرىلىدۇ'
      },
      {
        question: 'تارتىش كۈچى قايسى فىزىكاچى تەرىپىدىن بايقىلغان؟',
        options: [
          'نىيوتون',
          'ئەينشتېين',
          'گالىلېي',
          'تىسلا'
        ],
        correct: 0,
        explanation: 'نىيوتون ئالما چۈشۈشىدىن تارتىش كۈچىنى بايقىغان'
      }
    ],
    quantum: [
      {
        question: 'كۋانت فىزىكىسى نېمە ئۈستىدە تەتقىق قىلىدۇ؟',
        options: [
          'ئاتوم ۋە ئۇلاردىن كىچىك نەرسىلەر',
          'يۇلتۇزلار ۋە گالاكتىكىلار',
          'ھايۋانلارنىڭ ھەرىكىتى',
          'يەر شارىنىڭ قۇرۇلمىسى'
        ],
        correct: 0,
        explanation: 'كۋانت فىزىكىسى ئاتوم ۋە ئۇلاردىن كىچىك دۇنيانى تەتقىق قىلىدۇ'
      },
      {
        question: 'ئاتومنىڭ قانچىسى بوشلۇق؟',
        options: [
          '%99.9',
          '%50',
          '%10',
          '%1'
        ],
        correct: 0,
        explanation: 'ئاتومنىڭ %99.9% بوشلۇقتۇر، پەقەت ئازراق ماددا بار'
      }
    ]
  };

  // ئانیماتسىيە چىقىرىش
  const startAnimation = (type) => {
    setAnimation(type);
    
    switch(type) {
      case 'gravity':
        // تارتىش كۈچى ئانیماتسىيەسى
        setTimeout(() => setAnimation(''), 2000);
        break;
      case 'quantum':
        // كۋانت ئانیماتسىيەسى
        setTimeout(() => setAnimation(''), 3000);
        break;
      case 'electricity':
        // توك ئانیماتسىيەسى
        setTimeout(() => setAnimation(''), 2500);
        break;
      default:
        break;
    }
  };

  // سوئال جاۋابلاش
  const handleAnswer = (questionIndex, answerIndex) => {
    const currentTopic = physicsQuestions[currentExperiment];
    if (!currentTopic || !currentTopic[questionIndex]) return;
    
    const question = currentTopic[questionIndex];
    if (answerIndex === question.correct) {
      setScore(prev => prev + 20);
      alert(`توغرا! ${question.explanation}`);
    } else {
      alert(`ئەپسۇس! توغرا جاۋاب: ${question.options[question.correct]}`);
    }
    
    // كېيىنكى سوئالغا ئۆتۈش
    if (questionIndex < currentTopic.length - 1) {
      // سوئال ئالماشتۇرۇش
    } else {
      setQuizCompleted(true);
      setShowQuiz(false);
    }
  };

  // تەجرىبە تارىخىغا قوشۇش
  const addToHistory = (experimentName) => {
    if (!experimentHistory.includes(experimentName)) {
      setExperimentHistory([...experimentHistory, experimentName]);
    }
  };

  return (
    <div className="p-4 md:p-6 min-h-screen bg-gradient-to-br from-gray-900 to-black text-white" dir="rtl">
      
      {/* بېشىدىكى قىسم */}
      <div className="mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <BoltIcon className="h-12 w-12 text-yellow-400 animate-pulse" />
                <SparklesIcon className="absolute -top-2 -right-2 h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-[UKIJ Tuz] bg-gradient-to-r from-yellow-400 via-red-400 to-purple-400 bg-clip-text text-transparent">
                  فىزىكا سېھرىسى
                </h1>
                <p className="text-gray-300 mt-2 font-[UKIJ Nasq] text-lg">
                  تەبىئەتنىڭ سىرلىرىنى ئېچىڭ، قانۇنلىرىنى ئۆگىنىڭ
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="bg-gray-800 px-6 py-3 rounded-2xl flex items-center gap-3 border border-gray-700">
              <div className="relative">
                <RocketLaunchIcon className="h-8 w-8 text-yellow-400" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-ping"></div>
              </div>
              <div>
                <p className="text-sm text-gray-300">ئىلمىي پۇرسەت</p>
                <span className="font-bold text-2xl text-white">{score}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* تېما تاللاش بۆلىكى */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 font-[UKIJ Tuz] flex items-center gap-2">
          <GlobeAltIcon className="h-7 w-7 text-blue-400" />
          فىزىكا تېمىلىرىنى تاللاش
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.keys(physicsTopics).map((topicKey) => {
            const topic = physicsTopics[topicKey];
            return (
              <button
                key={topicKey}
                onClick={() => {
                  setCurrentExperiment(topicKey);
                  addToHistory(topicKey);
                  setShowQuiz(false);
                  setQuizCompleted(false);
                }}
                className={`p-4 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 ${currentExperiment === topicKey ? 'ring-4 ring-opacity-50 ring-yellow-400' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                <div className={`text-4xl mb-3 ${currentExperiment === topicKey ? 'animate-bounce' : ''}`}>
                  {topic.icon}
                </div>
                <span className="font-bold text-center text-sm font-[UKIJ Nasq]">{topic.title}</span>
                <div className="mt-2 text-xs text-gray-400">
                  {experimentHistory.includes(topicKey) ? 'تەكشۈرۈلگەن ✓' : 'يېڭى'}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* تاللانغان تېمىنىڭ تەپسىلاتى */}
      <div className="mb-10">
        <div className={`bg-gradient-to-br ${physicsTopics[currentExperiment].color} bg-opacity-20 rounded-3xl p-6 md:p-8 border border-gray-700`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className={`bg-gradient-to-br ${physicsTopics[currentExperiment].color} p-4 rounded-2xl`}>
                <span className="text-4xl">{physicsTopics[currentExperiment].icon}</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-[UKIJ Tuz]">
                  {physicsTopics[currentExperiment].title}
                </h2>
                <p className="text-gray-300 font-[UKIJ Nasq]">
                  {physicsTopics[currentExperiment].description}
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setShowQuiz(true)}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:scale-105 transition-transform"
              >
                بىلىم سىناڭ
              </button>
              <button 
                onClick={() => startAnimation(currentExperiment)}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:scale-105 transition-transform"
              >
                تەجرىبە قىلىڭ
              </button>
            </div>
          </div>

          {/* ئاساسىي چۈشەندۈرۈش */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {currentExperiment === 'newton' && physicsTopics.newton.laws.map((law, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{law.emoji}</div>
                  <h3 className="text-xl font-bold font-[UKIJ Tuz]">{law.title}</h3>
                </div>
                <p className="text-gray-300 mb-3 font-[UKIJ Nasq]">{law.description}</p>
                <p className="text-sm text-gray-400 mb-2">{law.example}</p>
                <div className="bg-gray-900 inline-block px-3 py-1 rounded-lg text-yellow-300 font-mono">
                  {law.formula}
                </div>
              </div>
            ))}
            
            {currentExperiment === 'quantum' && physicsTopics.quantum.concepts.map((concept, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{concept.emoji}</div>
                  <h3 className="text-xl font-bold font-[UKIJ Tuz]">{concept.title}</h3>
                </div>
                <p className="text-gray-300 mb-3 font-[UKIJ Nasq]">{concept.description}</p>
                <p className="text-sm text-gray-400 mb-2">{concept.example}</p>
                <div className="bg-gray-900 inline-block px-3 py-1 rounded-lg text-purple-300 font-mono">
                  {concept.principle}
                </div>
              </div>
            ))}
            
            {currentExperiment === 'relativity' && physicsTopics.relativity.principles.map((principle, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{principle.emoji}</div>
                  <h3 className="text-xl font-bold font-[UKIJ Tuz]">{principle.title}</h3>
                </div>
                <p className="text-gray-300 mb-3 font-[UKIJ Nasq]">{principle.description}</p>
                <p className="text-sm text-gray-400 mb-2">{principle.example}</p>
                <div className="bg-gray-900 inline-block px-3 py-1 rounded-lg text-blue-300 font-mono">
                  {principle.formula}
                </div>
              </div>
            ))}
            
            {currentExperiment === 'electricity' && physicsTopics.electricity.concepts.map((concept, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{concept.emoji}</div>
                  <h3 className="text-xl font-bold font-[UKIJ Tuz]">{concept.title}</h3>
                </div>
                <p className="text-gray-300 mb-3 font-[UKIJ Nasq]">{concept.description}</p>
                <p className="text-sm text-gray-400 mb-2">{concept.example}</p>
                <div className="bg-gray-900 inline-block px-3 py-1 rounded-lg text-yellow-300 font-mono">
                  {concept.formula || concept.principle}
                </div>
              </div>
            ))}
            
            {currentExperiment === 'cosmos' && physicsTopics.cosmos.systems.map((system, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{system.emoji}</div>
                  <h3 className="text-xl font-bold font-[UKIJ Tuz]">{system.title}</h3>
                </div>
                <p className="text-gray-300 mb-3 font-[UKIJ Nasq]">{system.description}</p>
                <p className="text-sm text-gray-400 mb-2">{system.example}</p>
                <div className="bg-gray-900 inline-block px-3 py-1 rounded-lg text-indigo-300">
                  {system.facts}
                </div>
              </div>
            ))}
          </div>

          {/* تەجرىبە كۆرسەتكۈچى */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6 font-[UKIJ Tuz] flex items-center gap-2">
              <BeakerIcon className="h-6 w-6 text-green-400" />
              قىزىقارلىق تەجرىبىلەر
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {physicsTopics[currentExperiment].experiments.map((experiment, index) => (
                <div key={index} className="bg-gray-800 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-bold font-[UKIJ Tuz]">{experiment.title}</h4>
                      <p className="text-gray-400 text-sm font-[UKIJ Nasq]">{experiment.description}</p>
                    </div>
                    {experiment.interactive && (
                      <button 
                        onClick={() => startAnimation(currentExperiment + index)}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-sm"
                      >
                        تەجرىبە قىلىش
                      </button>
                    )}
                  </div>
                  <div className="text-center text-4xl mb-4 py-6 bg-gray-900 rounded-xl">
                    {experiment.demo}
                  </div>
                  <p className="text-gray-300 text-center font-[UKIJ Nasq]">{experiment.explanation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* قىزىقارلىق پاكىتلار */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6 font-[UKIJ Tuz] flex items-center gap-2">
              <LightBulbIcon className="h-6 w-6 text-yellow-400" />
              قىزىقارلىق پاكىتلار
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {physicsTopics[currentExperiment].funFacts.map((fact, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-xl border-l-4 border-yellow-500">
                  <p className="text-gray-300 font-[UKIJ Nasq]">{fact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ئانیماتسىيە بۆلىكى */}
          {animation && (
            <div className="mb-8">
              <div className="bg-black bg-opacity-70 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-6 font-[UKIJ Tuz] text-yellow-300">
                  {animation === 'gravity' && 'تارتىش كۈچى تەجرىبىسى'}
                  {animation === 'quantum' && 'كۋانت تەجرىبىسى'}
                  {animation === 'electricity' && 'توك تەجرىبىسى'}
                </h3>
                
                <div className="flex justify-center items-center h-48">
                  {animation === 'gravity' && (
                    <>
                      <div className="text-6xl animate-bounce" style={{animationDelay: '0s'}}>🏀</div>
                      <div className="text-6xl animate-bounce" style={{animationDelay: '0.2s'}}>🍎</div>
                      <div className="text-6xl animate-bounce" style={{animationDelay: '0.4s'}}>📚</div>
                      <div className="mx-8 text-4xl animate-pulse">↓</div>
                      <div className="text-6xl">🌍</div>
                    </>
                  )}
                  
                  {animation === 'quantum' && (
                    <>
                      <div className="text-6xl animate-spin" style={{animationDuration: '3s'}}>⚛️</div>
                      <div className="mx-4 text-4xl">→</div>
                      <div className="text-6xl animate-ping">⚛️</div>
                      <div className="mx-4 text-4xl">→</div>
                      <div className="text-6xl animate-pulse">⚛️</div>
                    </>
                  )}
                  
                  {animation === 'electricity' && (
                    <>
                      <div className="text-6xl">🔋</div>
                      <div className="text-4xl animate-pulse mx-2">⚡</div>
                      <div className="text-6xl animate-pulse">💡</div>
                      <div className="text-4xl animate-pulse mx-2">⚡</div>
                      <div className="text-6xl">🔌</div>
                    </>
                  )}
                </div>
                
                <p className="text-gray-300 mt-6 font-[UKIJ Nasq] text-lg">
                  {animation === 'gravity' && 'ھەممە نەرسە يەر شارى تارتقاندا يەرگە چۈشىدۇ!'}
                  {animation === 'quantum' && 'ئاتوملار بىرلا ۋاقىتتا ئىككى يەردە بولالايدۇ!'}
                  {animation === 'electricity' && 'توك ئېقىمى بولسا لامپا يورۇيدۇ!'}
                </p>
              </div>
            </div>
          )}

          {/* سوئال-جاۋاب بۆلىكى */}
          {showQuiz && physicsQuestions[currentExperiment] && (
            <div className="mb-8">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 font-[UKIJ Tuz] text-center text-green-300">
                  بىلىم سىناقلىرى
                </h3>
                
                {!quizCompleted ? (
                  physicsQuestions[currentExperiment].map((question, qIndex) => (
                    <div key={qIndex} className="mb-8 last:mb-0">
                      <h4 className="text-xl font-bold mb-4 font-[UKIJ Tuz]">
                        {qIndex + 1}. {question.question}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {question.options.map((option, oIndex) => (
                          <button
                            key={oIndex}
                            onClick={() => handleAnswer(qIndex, oIndex)}
                            className="p-4 bg-gray-700 hover:bg-gray-600 rounded-xl text-right font-[UKIJ Nasq] transition-all duration-300 hover:scale-105"
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
                    <h4 className="text-2xl font-bold mb-4 font-[UKIJ Tuz]">مۇبارەك! سىناقنى تاماملادىڭىز!</h4>
                    <p className="text-gray-300 mb-6 font-[UKIJ Nasq]">
                      سىز {physicsTopics[currentExperiment].title} توغرىسىدا ئاساسىي بىلىملەرگە ئىگە بولدىڭىز!
                    </p>
                    <button 
                      onClick={() => {
                        setShowQuiz(false);
                        setQuizCompleted(false);
                      }}
                      className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-bold"
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

      {/* ئومۇمىي فىزىكا سوئاللىرى */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 font-[UKIJ Tuz]">ئومۇمىي فىزىكا سوئاللىرى</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: 'تارتىش كۈچى نېمە؟',
              a: 'يەر شارىنىڭ بارلىق نەرسىلەرنى ئۆزىگە تارتىش كۈچى. بۇ كۈچ سەۋەبىدىن نەرسىلەر يەرگە چۈشىدۇ.'
            },
            {
              q: 'ئاتوم نېمىدىن تەركىب تاپقان؟',
              a: 'ئاتوم ئاساسەن پروتون، نېيترون ۋە ئېلېكترونلاردىن تەركىب تاپقان. پروتون ۋە نېيترون يادرودا، ئېلېكترونلار ئەتراپىدا ئايلىنىدۇ.'
            },
            {
              q: 'توك قانداق ھاسىل بولىدۇ؟',
              a: 'توك ئېلېكترونلارنىڭ ھەرىكىتىدىن ھاسىل بولىدۇ. باتارېيەدە كىمياۋى ئېنېرگىيە توكقا ئايلىنىدۇ.'
            },
            {
              q: 'يۇلتۇزلار قانداق يورۇيدۇ؟',
              a: 'يۇلتۇزلار ئىچىدە ھىدروگېن قازى ھېلىيۇمغا ئايلىنىپ، زور ئېنېرگىيە بىلەن نور چىقىرىدۇ.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-3 font-[UKIJ Tuz] text-yellow-300">❓ {item.q}</h3>
              <p className="text-gray-300 font-[UKIJ Nasq]">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* تەجرىبە تارىخى */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz]">تەجرىبە تارىخىڭىز</h3>
        <div className="flex flex-wrap gap-3">
          {experimentHistory.map((exp, index) => (
            <div key={index} className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full flex items-center gap-2">
              <span className="text-lg">{physicsTopics[exp].icon}</span>
              <span className="font-[UKIJ Nasq]">{physicsTopics[exp].title}</span>
            </div>
          ))}
          {experimentHistory.length === 0 && (
            <p className="text-gray-400 font-[UKIJ Nasq]">تېخى ھېچقانداق تەجرىبە قىلمىدىڭىز. يۇقىرىدىكى تېمىلاردىن بىرنى تاللاپ باشلاڭ!</p>
          )}
        </div>
      </div>

      {/* ئاخىرقى مەسلىھەت */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-6 text-center">
        <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz]">ئىلمىي ئويلىشىش ئۇسۇلى</h3>
        <p className="text-gray-300 mb-4 font-[UKIJ Nasq]">
          فىزىكىدا ئەڭ مۇھىم نەرسە - سوئال سوراش. ھەر بىر سوئال سىزنى يېڭى بىلىمگە يېتەكلەيدۇ!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="font-[UKIJ Nasq]">سوئال سوراڭ</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="font-[UKIJ Nasq]">تەجرىبە قىلىڭ</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="font-[UKIJ Nasq]">كۆزىتىڭ</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="font-[UKIJ Nasq]">ئويلىنىڭ</span>
          </div>
        </div>
      </div>

      {/* ئانیماتسىيە كونتىنېرى */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        {animation && (
          <>
            <div className="absolute top-1/4 left-1/4 text-6xl animate-bounce">✨</div>
            <div className="absolute top-1/3 right-1/4 text-5xl animate-spin">⚡</div>
            <div className="absolute bottom-1/4 left-1/3 text-4xl animate-ping">⭐</div>
          </>
        )}
      </div>
    </div>
  );
};

export default PhysicComponent;