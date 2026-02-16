// src/components/learn-modules/EnhancedBiologyModule.jsx
import React, { useState, useEffect } from 'react';

const EnhancedBiologyModule = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);
  const [studyProgress, setStudyProgress] = useState({
    intro: true,
    cell: false,
    photosynthesis: false,
    humanBody: false,
    dna: false,
    ecology: false
  });

  // ۋاقىت ھېسابلاش
  useEffect(() => {
    let timer;
    if (showQuiz && !showResult) {
      timer = setInterval(() => {
        setTimeSpent(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showQuiz, showResult]);

  // ئۆگىنىش ئىلگىرىلىشى
  useEffect(() => {
    setStudyProgress(prev => ({
      ...prev,
      [activeSection]: true
    }));
  }, [activeSection]);

  // بىئولوگىيە تېستى سۇئاللىرى
  const quizQuestions = [
    {
      id: 1,
      question: "ھۈجەيرىنىڭ «ئېنېرگىيە مەركىزى» دەپ قانداق قۇرۇلمىنى ئاتايدۇ؟",
      options: ["نۇۋە", "مىتوكوندرييە", "لىزوسوم", "گولجى ئەزالىقى"],
      correct: 1,
      explanation: "مىتوكوندرييە — ئېنېرگىيە (ATP) ئىشلەپچىقىرىش مەركىزى. ھەر بىر ھۈجەيرىدە يۈزلىگەنلىرى بار بولۇپ، ئوكسىگەننى قوللىنىپ قانغا ئېنېرگىيە ئىشلەپچىقىرىدۇ.",
      category: "ھۈجەيرە بىئولوگىيەسى",
      difficulty: "باشلانغۇچ"
    },
    {
      id: 2,
      question: "فوتوسىنتېز جەريانىدا نېمە ھاسىل قىلىنىدۇ؟",
      options: ["كىسلىك ۋە سۇ", "كاربون دىئوكسىد ۋە سۇ", "كىسلىك ۋە گلۇكوز", "ئازوت ۋە گلۇكوز"],
      correct: 2,
      explanation: "ياشىل ئۆسۈملۈكلەر كۈن نۇرى، سۇ ۋە CO₂ دىن گلۇكوز ۋە O₂ ھاسىل قىلىدۇ. بۇ جەريان خىلوروفىل رەڭ ماددىسىنىڭ ياردىمىدە ئېلىپ بېرىلىدۇ.",
      category: "ئۆسۈملۈكلەر بىئولوگىيەسى",
      difficulty: "باشلانغۇچ"
    },
    {
      id: 3,
      question: "ئىنسان بەدەندىكى ئەڭ چوڭ ئىمۇن ئەزالىقى قايسى؟",
      options: ["يۈرەك", "تالا", "بەزگەك", "تىرناقتىن تاشقى پۈتۈك"],
      correct: 3,
      explanation: "تىرناقتىن تاشقى پۈتۈك — بەدەننى ھەرخىل ۋىرۇسلاردىن قوغلىشىدۇ. ئۇ تېرىنىڭ ئاستىدا بولۇپ، باكتېرىيە، ۋىرۇس ۋە يات توكسىنلارغا قارشى كۈرەش قىلىدۇ.",
      category: "ئىمۇنولوگىيە",
      difficulty: "ئوتتۇرا"
    },
    {
      id: 4,
      question: "DNA نىڭ توغرىسىغا قانداق نام قويىلىدۇ؟",
      options: ["ئىككى چاڭ-چاڭلىق سىرپىلا", "ئۈچ چاڭ-چاڭلىق سىرپىلا", "تۈگۈنلەرنىڭ زەنجىرى", "چاڭسىز تۈز سىرپىلا"],
      correct: 0,
      explanation: "DNA — يەنە «ئىككى چاڭ-چاڭلىق سىرپىلا» دەپمۇ ئاتىلىدۇ. بۇ قۇرۇلما 1953-يىلى جەيمس ۋاتسون ۋە فرانسىس كرىك تەرىپىدىن بايقالدى.",
      category: "گېنېتىكا",
      difficulty: "باشلانغۇچ"
    },
    {
      id: 5,
      question: "ئىنسان بەدەندىكى قاننى ھەرىكەتكە كەلتۈرىدىغان ئەزالىق قايسى؟",
      options: ["ئۆپكە", "باكار", "يۈرەك", "بۆيىرەك"],
      correct: 2,
      explanation: "يۈرەك — قاننى بۈتۈن بەدەنگە قازان بېرىدۇ. كۈندە 100,000 قېتىمدىن ئارتۇق ئوقۇش ھەرىكىتىنى ئۆتكۈزىدۇ ۋە بىر كۈندە 7000 لىتر قان ئۆتكۈزىدۇ.",
      category: "ئىنسان ئاناتومىيەسى",
      difficulty: "باشلانغۇچ"
    },
    {
      id: 6,
      question: "ئىنسان بەدىنىدا قاننى تازىلايدىغان ئەزا قايسى؟",
      options: ["باۋاىر", "بۆيىرەك", "ئۆپكە", "بەزگەك"],
      correct: 1,
      explanation: "بۆيىرەك — قاننى تازىلايدۇ ۋە بەدەندىكى زىيادە سۇ ۋە ئاتالغۇلارنى چىقىرىپ تاشلايدۇ. ھەر بىر ئىنساندا ئىككى دانە بۆيىرەك بار.",
      category: "ئىنسان ئاناتومىيەسى",
      difficulty: "ئوتتۇرا"
    },
    {
      id: 7,
      question: "ھايۋانلار ئالىمىنتىدىكى پروتىئىنلارنى ئاجرىتىپ چىقىرىدىغان بەدەن ئەزاسى قايسى؟",
      options: ["ئاشقازان", "ئۆچكە ئاشقازان", "ئىنچىكە ئاشقازان", "يىراق ئاشقازان"],
      correct: 2,
      explanation: "ئىنچىكە ئاشقازان — ئاشقازاننىڭ ئالدىنقى قىسمى بولۇپ، پروتىئىنلارنى ئاجرىتىدىغان ئەنزىملارنى ئىشلەپچىقىرىدۇ.",
      category: "ھەزىم سىستېمىسى",
      difficulty: "ئوتتۇرا"
    },
    {
      id: 8,
      question: "ئىنسان بەدەنىدىكى ھورمونلارنى ئىشلەپچىقىرىدىغان ئەزا قايسى؟",
      options: ["بەزگەك", "باكار", "يۈرەك", "مىئە"],
      correct: 0,
      explanation: "بەزگەك — ئىچكى سېكرېتسىيە ئەزالىقى بولۇپ، بەدەندىكى مەخسۇس ھورمونلارنى ئىشلەپچىقىرىدۇ ھەمدە قانغا تارقىتىدۇ.",
      category: "ئىنسان ئاناتومىيەسى",
      difficulty: "ئالىي"
    },
    {
      id: 9,
      question: "ئىنسان بەدىنىدىكى ئەڭ چوڭ سۆڭەك قايسى؟",
      options: ["باش سۆڭىكى", "ياقا سۆڭىكى", "سان سۆڭىكى", "چىڭ سۆڭىكى"],
      correct: 2,
      explanation: "سان سۆڭىكى — ئىنسان بەدىنىدىكى ئەڭ چوڭ سۆڭەك بولۇپ، ئىككى قىسىمدىن تەركىب تاپقان. ئۇ چوڭقۇر سۆڭەك بولۇپ، قان ھۈجەيرىلىرىنى ئىشلەپچىقىرىدۇ.",
      category: "سۆڭەك-مۇسكۇل سىستېمىسى",
      difficulty: "ئوتتۇرا"
    },
    {
      id: 10,
      question: "ئىنسان بەدىنىدىكى بېسىمنى تەڭشەيدىغان ئەزا قايسى؟",
      options: ["يۈرەك", "بەزگەك", "بۆيىرەك", "ئۆپكە"],
      correct: 2,
      explanation: "بۆيىرەك — بەدەندىكى سۇ ۋە مىنېراللارنىڭ توپلىنىشىنى تەڭشەپ، قان بېسىمىنى نازارەت قىلىدۇ.",
      category: "قان-تومۇر سىستېمىسى",
      difficulty: "ئالىي"
    }
  ];

  // بەلگە قىلىش
  const toggleBookmark = (questionId) => {
    if (bookmarks.includes(questionId)) {
      setBookmarks(bookmarks.filter(id => id !== questionId));
    } else {
      setBookmarks([...bookmarks, questionId]);
    }
  };

  // تېست نەتىجىسى
  const calculateGrade = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 90) return { grade: 'A', text: 'مۇكەممەل! 👑', color: 'from-yellow-400 to-amber-500' };
    if (percentage >= 80) return { grade: 'B', text: 'بەك ياخشى! ✨', color: 'from-green-400 to-emerald-500' };
    if (percentage >= 70) return { grade: 'C', text: 'ياخشى! 👍', color: 'from-blue-400 to-cyan-500' };
    if (percentage >= 60) return { grade: 'D', text: 'قوبۇل قىلىنغان', color: 'from-purple-400 to-indigo-500' };
    return { grade: 'F', text: 'قايتا ئۆگىنىڭ 💪', color: 'from-red-400 to-pink-500' };
  };

  // دىققەت قىلىشقا تېگىشلىك نۇقتىلار
  const keyPoints = [
    { icon: '🔬', title: 'تەجرىبىلەر', count: 5 },
    { icon: '📚', title: 'قوشۇمچە ماتېرىيال', count: 12 },
    { icon: '🎬', title: 'فىلىملەر', count: 8 },
    { icon: '🧪', title: 'ئامىلىي تەجرىبىلەر', count: 3 }
  ];

  const sections = {
    intro: {
      title: '🌱 1. كىرىش سۆز - بىئولوگىيەنىڭ ئەھمىيىتى',
      description: 'بىئولوگىيە — تىرىكلىق جەريانى، ئورگانىزم قۇرۇلمىسى ۋە ئىلىم-پەننىڭ ئاساسى.',
      icon: '🌍',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-2xl border-l-4 border-green-500">
            <h4 className="font-bold text-green-800 text-xl mb-3">📖 بىئولوگىيەنىڭ تارىخىي تەرەققىياتى</h4>
            <p className="text-green-700">
              بىئولوگىيە سۆزى كونا يۇنانچىدىن كەلگەن بولۇپ، «بىئو» تىرىكلىق، «لۆگوس» ئىلىم دېگەن مەنىدە. 
              بۇ ئىلىم ئارقا كۆرۈنۈشى 2300 يىلدىن ئاشقان تارىخقا ئىگە. ئەڭ مۇھىم بايقالغان نەرسىلەر:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-green-700">
              <li>م.ب. 384-322: ئارىستوتېل ھايۋانلارنى تەسۋىرلىگەن</li>
              <li>1665: روبرت گۇك ھۈجەيرىنى بايقىغان</li>
              <li>1859: چارلز دارۋىن ئەۋلاد ئۆزگىرىش نەزەرىيەسىنى ئوتتۇرىغا قويغان</li>
              <li>1953: DNA قۇرۇلمىسى بايقالغان</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border-2 border-green-200 hover:border-green-400 transition-all duration-300">
              <div className="text-3xl mb-3">🧬</div>
              <h4 className="font-bold text-green-800 text-lg mb-2">گېنېتىكا</h4>
              <p className="text-green-700 text-sm">ۋارىسىتىك سىزچىلىق، نەسىل ئۆتكۈزۈش، مولېكۇلا بىئولوگىيەسى</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300">
              <div className="text-3xl mb-3">🌿</div>
              <h4 className="font-bold text-blue-800 text-lg mb-2">ئۆسۈملۈكلەر بىئولوگىيەسى</h4>
              <p className="text-blue-700 text-sm">فوتوسىنتېز، سۇ ۋە مىنېرال ئالماشتۇرۇش، ئۆسۈملۈكلەر سىستېماتىكىسى</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
              <div className="text-3xl mb-3">🦴</div>
              <h4 className="font-bold text-purple-800 text-lg mb-2">ئىنسان ئاناتومىيەسى</h4>
              <p className="text-purple-700 text-sm">يۈرەك، باكار، بەزگەك، نېرۋا سىستېمىسى، ھەزىم يولى</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-all duration-300">
              <div className="text-3xl mb-3">🌳</div>
              <h4 className="font-bold text-amber-800 text-lg mb-2">ئېكولوگىيە</h4>
              <p className="text-amber-700 text-sm">تىرىكلىق مۇھىتى، دۆلەتكەر، تەبىئى بىئوسىستېما، ئەتراپ مۇھىتىنى قوغداش</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl border-2 border-teal-300 shadow-lg">
            <h4 className="font-bold text-teal-800 text-xl mb-3">💡 نېمە ئۈچۈن بىئولوگىيەنى ئۆگىنىش كېرەك؟</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-3 text-teal-700">
                <li className="flex items-start gap-3">
                  <span className="bg-teal-200 text-teal-800 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">🏥</span>
                  <span><strong>ساغلاملىق ۋە داۋالاشنى چۈشىنىش:</strong> كېسەللىكلەرنىڭ سەۋەبىنى بىلىش ۋە داۋالاش ئۇسۇلى</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-teal-200 text-teal-800 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">🌱</span>
                  <span><strong>تەبىئەتنى قوغلاش:</strong> ھايۋان-ئۆسۈملۈكلەرنى ساقلاش ۋە تەبىئى بايلىقلارنى ئاقلاش</span>
                </li>
              </ul>
              <ul className="space-y-3 text-teal-700">
                <li className="flex items-start gap-3">
                  <span className="bg-teal-200 text-teal-800 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">🧬</span>
                  <span><strong>نەسلىمىزنىڭ ساغلاملىقى:</strong> گېنېتىك كېسەللىكلەرنىڭ ئالدىنى ئېلىش ۋە داۋالاش</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-teal-200 text-teal-800 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">🔬</span>
                  <span><strong>ئىلمىي تەرەققىيات:</strong> يېڭى دورىلار، گېن مۇتاتسىيە تېخنىكىلىرى ۋە بايولوگىيەلىك مۇھەندىسلىك</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    cell: {
      title: '2. 🧫 ھۈجەيرە بىئولوگىيەسى',
      description: 'بارلىق تىرىكلىقلار ھۈجەيرىدىن تۈزۈلگەن. ئۇ — تىرىكلىقنىڭ ئەڭ كىچىك بىرلىكى.',
      icon: '🧫',
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg">
            <h5 className="font-bold text-gray-800 text-xl mb-4">🔍 ھۈجەيرىنىڭ ئاساسىي قۇرۇلمىلىرى:</h5>
            <div className="space-y-4">
              {[
                { 
                  org: 'نۇۋە', 
                  desc: 'ھۈجەيرىنىڭ «باشقۇرۇش مەركىزى»، DNA ساقلىنىدۇ. نۇۋە پەردىسى ئارقىلىق سىتوبلازمىدىن ئايرىلىپ تۇرىدۇ.',
                  icon: '🎯',
                  color: 'blue'
                },
                { 
                  org: 'مىتوكوندرييە', 
                  desc: '«ئېنېرگىيە مەركىزى» — ATP ئىشلەپچىقىرىدۇ. ئۆزىنىڭ كىچىك DNA سى بار بولۇپ، ئانا تەرىپىدىنلا ئۆتىدۇ.',
                  icon: '⚡',
                  color: 'green'
                },
                { 
                  org: 'سىتوبلازما', 
                  desc: 'جىسسىم سۇيۇقلىق، بارلىق ئىشلار بۇ يەردە بولىدۇ. ئىچىدە رىبوسوم، گولجى ئەزالىقى، ئەندوپلازمىلىق تور قاتارلىق قۇرۇلمىلار بار.',
                  icon: '🌊',
                  color: 'purple'
                },
                { 
                  org: 'ھۈجەيرە دېۋىرى / مېمۇران', 
                  desc: 'سىرتتىكى ھۆجۈمدىن قوغلايدۇ. ئۆسۈملۈك ھۈجەيرىسىدىكى دېۋار سېللۇلوزدىن تەركىب تاپقان.',
                  icon: '🛡️',
                  color: 'red'
                },
                { 
                  org: 'لىزوسوم', 
                  desc: '«ھەزىم قاپچىقى» دەپمۇ ئاتىلىدۇ. ئەسكىرتىش ئەنزىملىرىنى ئۆز ئىچىگە ئالىدۇ ھەم ھۈجەيرە ئىچىدىكى زىيانلىق ماددىلارنى ھەزىم قىلىدۇ.',
                  icon: '🧹',
                  color: 'amber'
                }
              ].map((item, i) => (
                <div key={i} className={`bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 p-4 rounded-xl border-l-4 border-${item.color}-400`}>
                  <div className="flex items-start gap-4">
                    <div className={`bg-${item.color}-100 text-${item.color}-800 w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <strong className={`text-${item.color}-800 text-lg`}>{item.org}</strong>
                        <span className={`bg-${item.color}-200 text-${item.color}-800 text-xs px-2 py-1 rounded-full`}>{i + 1}</span>
                      </div>
                      <p className={`text-${item.color}-700`}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-300 shadow-lg">
              <div className="text-4xl mb-4 text-center">🌿</div>
              <h6 className="font-bold text-blue-800 text-xl mb-3 text-center">ئۆسۈملۈك ھۈجەيرىسى</h6>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>خىلوروبلاست بار (فوتوسىنتېز ئۈچۈن)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>قەتئىي ھۈجەيرە دېۋىرى (سېللۇلوز)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>چوڭ ۋاكۇئول (سۇ ساقلاش)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>لىزوسوم يوق ياكى ئاز</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border-2 border-red-300 shadow-lg">
              <div className="text-4xl mb-4 text-center">🩸</div>
              <h6 className="font-bold text-red-800 text-xl mb-3 text-center">ھايۋان ھۈجەيرىسى</h6>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>خىلوروبلاست يوق</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>يۇمشاق مېمۇران (ھۈجەيرە پەردىسى)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>كىچىك ۋاكۇئوللار</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>لىزوسوم كۆپ</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl border-2 border-gray-300">
            <h6 className="font-bold text-gray-800 text-lg mb-3">🔬 ھۈجەيرە تەجرىبىسى:</h6>
            <p className="text-gray-700 mb-4">
              <strong>تەجرىبە:</strong> يېپىشقاق تېرىدىن ھۈجەيرە ئېلىش
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>پاكىز سىرتقىي بىر پارچە يېپىشقاق تېرىنى ئېلىڭ</li>
              <li>ئۇنى بىر تامچە ئىئودىن ياكى مېتىلېن كۆكىگە قويۇڭ</li>
              <li>مىكروسكوپ ئاستىدا كۆرۈڭ - ھۈجەيرە دېۋىرى، نۇۋە ۋە سىتوبلازمىنى كۆرەلەيسىز</li>
              <li>تەجرىبىنى ئۆسۈملۉك يېپىراقى بىلەنمۇ قايتا قىلىڭ</li>
            </ol>
          </div>
        </div>
      )
    },
    photosynthesis: {
      title: '3. 🌿 فوتوكىمۇ يۆتكۈزۈش (فوتوسىنتېز)',
      description: 'ياشىل ئۆسۈملۈكلەر نۇرغۇن نۇرنى ئىشلىتىپ قانداق گلۇكوز ھاسىل قىلىدۇ؟',
      icon: '🌿',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-300 shadow-lg">
            <h5 className="font-bold text-green-800 text-xl mb-4 text-center">فوتوسىنتېز كىمىيە ھەسسىلىمەسى</h5>
            <div className="bg-white p-4 rounded-xl border-2 border-green-200 text-center font-mono text-xl md:text-2xl text-green-800">
              6CO₂ + 6H₂O + نۇر → C₆H₁₂O₆ + 6O₂
            </div>
            <p className="text-center text-green-700 mt-3">
              بۇ جەرياندا 6 مولېكۇلا كاربون دىئوكسىد ۋە 6 مولېكۇلا سۇ نۇر ئېنېرگىيەسى ياردىمىدە 1 مولېكۇلا گلۇكوز ۋە 6 مولېكۇلا كىسلىككە ئايلىنىدۇ.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg">
            <h5 className="font-bold text-gray-800 text-xl mb-4">🔄 فوتوكىمۇ يۆتكۈزۈش جەريانى:</h5>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-800 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">1</div>
                <div>
                  <h6 className="font-bold text-green-800 text-lg">نۇرنى سىيىش</h6>
                  <p className="text-gray-700">ياشىل بەتتىكى <strong>خىلوروفىل</strong> كۈن نۇرىنى سىيىرىدۇ. خىلوروفىل مۆلچەردە قىزىل ۋە كۆك رەڭگىنى سىيىرىپ، يېشىل رەڭگىنى قايتۇرىدۇ.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-800 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">2</div>
                <div>
                  <h6 className="font-bold text-blue-800 text-lg">سۇنى سىيىش</h6>
                  <p className="text-gray-700">ئىلگىر تامىرى ئارقىلىق <strong>سۇ</strong> سىيىرىدۇ. سۇ يەر ئاستىدىن ئۆسۈملۈكنىڭ يىلتىزى ئارقىلىق كىرىپ، تامىرلار بويىچە يېپىراققا يەتكۈزۈلىدۇ.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">3</div>
                <div>
                  <h6 className="font-bold text-gray-800 text-lg">CO₂ سىيىش</h6>
                  <p className="text-gray-700">ھاۋادىكى <strong>كاربون دىئوكسىد (CO₂)</strong> بەتنىڭ غەۋدىلىرىدىن كىرىدۇ. بەتتە بولغان كىچىك تىنىق تۆشۈكلەر ئارقىلىق CO₂ ھۈجەيرىگە كىرىدۇ.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 text-amber-800 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">4</div>
                <div>
                  <h6 className="font-bold text-amber-800 text-lg">ئۆزگەرتىش جەريانى</h6>
                  <p className="text-gray-700">بۇ ماتېرىياللار بىرلىكتە <strong>گلۇكوز (شەكەر)</strong> ۋە <strong>كىسلىك</strong> ھاسىل قىلىدۇ. گلۇكوز ئۆسۈملۈكنىڭ ئېنېرگىيە مەنبەسى، كىسلىك بولسا ئەتراپقا تارقىتىلىدۇ.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border-2 border-amber-300">
              <h5 className="font-bold text-amber-800 text-lg mb-3">🌍 تۇرمۇشتىكى ئەھمىيىتى:</h5>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-start gap-2">
                  <span className="bg-amber-200 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-1 flex-shrink-0">🌬️</span>
                  <span><strong>بارلىق تىرىكلىقلارنىڭ نەپىس ئېلىشى:</strong> فوتوكىمۇ يۆتكۈزۈش ئارقىلىق ھاسىل بولغان كىسلىككە باغلىق.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-amber-200 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-1 flex-shrink-0">🌳</span>
                  <span><strong>يېرىم شارنىڭ ئوكسىگىنى:</strong> دۇنيادىكى ئوكسىگېننىڭ 50% دىن كۆپرەكى دېڭىز يوسۇنلىرى تەرىپىدىن ھاسىل قىلىنىدۇ.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-amber-200 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-1 flex-shrink-0">🍃</span>
                  <span><strong>قۇرۇقلۇق يېشىللىقى:</strong> بىر چوڭ دەرىختە بىر كۈندە 100 كىلوگرام گلۇكوز ھاسىل قىلالايدۇ.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl border-2 border-teal-300">
              <h5 className="font-bold text-teal-800 text-lg mb-3">⚗️ تەجرىبە:</h5>
              <p className="text-teal-700 mb-3">
                <strong>ئۆسۈملۈكنىڭ كىسلىك ئىشلەپچىقىرىشىنى كۆرۈش:</strong>
              </p>
              <ol className="list-decimal pl-5 space-y-1 text-teal-700 text-sm">
                <li>بىر ئىنچكە شىشە قۇتۇنى ئېلىڭ</li>
                <li>ئىچىگە سۇ قويۇپ، بىر پارچە سۇ ئۆسۈملۈكى قويۇڭ</li>
                <li>كۈن نۇرىدا قويۇڭ</li>
                <li>بىر نەچچە سائەتتىن كېيىن، ئۆسۈملۈكتىن چىققان كىچىك كۆپۈكچىلەرنى كۆرەلەيسىز - بۇ كىسلىك</li>
              </ol>
            </div>
          </div>
        </div>
      )
    },
    humanBody: {
      title: '4. 🧍 ئىنسان ئاناتومىيەسى',
      description: 'ئىنسان بەدەنى قانداق قۇرۇلۇپ، قانداق ئىشلىرى بار؟',
      icon: '🧍',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                organ: 'يۈرەك', 
                func: 'قاننى بۈتۈن بەدەنگە قازان بېرىدۇ. كۈندە 100,000 قېتىمدىن ئارتۇق ئوقۇش ھەرىكىتىنى ئۆتكۈزىدۇ.', 
                color: 'red',
                icon: '❤️',
                details: 'ئىككى ئالدىقى ئورۇن ۋە ئىككى ئارقىقى ئورۇندىن تەركىب تاپقان. سول ئورۇن بەدەنگە، ئوڭ ئورۇن ئۆپكىگە قان بېرىدۇ.'
              },
              { 
                organ: 'باكار', 
                func: 'نەپىس ئالىدۇ، كىسلىكنى سىيىرىدۇ. كۈندە 11,000 لىتر ھاۋا ئالماشتۇرىدۇ.', 
                color: 'blue',
                icon: '🫁',
                details: 'ئوڭ ۋە سول ئۆپكەدىن تەركىب تاپقان. ئۆپكە ئالدىنى كۆركۈمە تۈگۈنچىلىك قۇرۇلمىسى بولۇپ، ھاۋانىڭ تازىلىنىشى ۋە ئىسسىقلىق تەڭشىلىشىنى قوللايدۇ.'
              },
              { 
                organ: 'بەزگەك', 
                func: 'ئازوت سىيىرىدۇ، سۈزۈش ئىشلىرىنى بىرلىككە ئالىدۇ. 300 دىن ئارتۇق ھورمون ئىشلەپچىقىرىدۇ.', 
                color: 'purple',
                icon: '🧠',
                details: 'ئۇچ قىسمى، ئوتتۇرا قىسمى ۋە ئارقا قىسمىدىن تەركىب تاپقان. نېرۋا سىستېمىسىنىڭ مەركىزى بولۇپ، بارلىق ھەرىكەت ۋە ھېس قىلىشلارنى باشقۇرىدۇ.'
              },
              { 
                organ: 'بۆيىرەك', 
                func: 'زەھەرلەرنى چىقىرىدۇ، قاننى تازىلايدۇ. كۈندە 180 لىتر قاننى تازىلايدۇ.', 
                color: 'green',
                icon: '🫘',
                details: 'ھەر بىر ئىنساندا ئىككى دانە بۆيىرەك بار. بۆيىرەك كېلىدىن چىققان زىيادە سۇ، ئۇرىك كىسلاتىسى ۋە باشقا زىيانلىق ماددىلارنى سۈزۈپ چىقىرىدۇ.'
              }
            ].map((item, i) => (
              <div key={i} className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 p-5 rounded-2xl border-2 border-${item.color}-300 hover:border-${item.color}-500 transition-all duration-300 shadow-lg`}>
                <div className="text-4xl mb-3 text-center">{item.icon}</div>
                <div className="font-bold text-gray-800 text-xl mb-2 text-center">{item.organ}</div>
                <p className={`text-${item.color}-700 text-sm mb-3`}>{item.func}</p>
                <div className={`bg-${item.color}-200 text-${item.color}-800 text-xs p-2 rounded-lg`}>
                  <strong>تەپسىلات:</strong> {item.details}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-2xl border-2 border-pink-300 shadow-lg">
            <h5 className="font-bold text-pink-800 text-xl mb-4">🩺 ساغلاملىق مەسلىھەتلىرى:</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h6 className="font-bold text-pink-700 text-lg mb-2 flex items-center gap-2">
                  <span className="bg-pink-200 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center">❤️</span>
                  يۈرەك ساغلاملىقى ئۈچۈن:
                </h6>
                <ul className="space-y-2 text-pink-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>دوۋۇن، پىياز، قىزىل ئۈزۈم قاتارلىق يېمەكلىكلەرنى يېيىش</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>ھەپتىدە 150 دىن كۆپرەك مىنۇت ئوتتۇرا ھەرىكەت</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>تەمەككۈرچىلىك ۋە ئاشۇرىدىن ساقلانش</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h6 className="font-bold text-pink-700 text-lg mb-2 flex items-center gap-2">
                  <span className="bg-pink-200 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center">🫁</span>
                  باكار ساغلاملىقى ئۈچۈن:
                </h6>
                <ul className="space-y-2 text-pink-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>تەمەككۈرچىلىكتىن قۇتۇلۇش</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>چېچىرۋانلىق ھاۋاغا چىقىش</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>تىرىكچانلىق مەشقى ۋە نەپەس كونترول قىلىش مەشىقى</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl border-2 border-gray-300">
            <h5 className="font-bold text-gray-800 text-lg mb-3">📊 ئىنسان بەدىنىدىكى قىزىقارلىق سانلار:</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-3 rounded-xl border-2 border-gray-200 text-center">
                <div className="text-2xl font-bold text-blue-600">206</div>
                <div className="text-sm text-gray-600">سۆڭەك سانى</div>
              </div>
              <div className="bg-white p-3 rounded-xl border-2 border-gray-200 text-center">
                <div className="text-2xl font-bold text-red-600">5-6</div>
                <div className="text-sm text-gray-600">لىتر قان</div>
              </div>
              <div className="bg-white p-3 rounded-xl border-2 border-gray-200 text-center">
                <div className="text-2xl font-bold text-green-600">640</div>
                <div className="text-sm text-gray-600">مۇسكۇل سانى</div>
              </div>
              <div className="bg-white p-3 rounded-xl border-2 border-gray-200 text-center">
                <div className="text-2xl font-bold text-purple-600">86</div>
                <div className="text-sm text-gray-600">مىليارد نېرۋا ھۈجەيرىسى</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    dna: {
      title: '5. 🧬 دىئىن ئى ۋە گېنېتىكا',
      description: 'سىز نېمە ئۈچۈن ئاتا-ئانىڭىزگە ئوخشاش؟ گېنېتىكا بۇنى چۈشەندۈرىدۇ.',
      icon: '🧬',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl border-2 border-purple-300 shadow-lg text-center">
            <div className="text-5xl mb-4">🧬</div>
            <div className="font-bold text-purple-800 text-2xl mb-2">DNA = دېىيىكسىرىب نۇكلېىك كىسلىك</div>
            <div className="text-purple-700 text-lg">ئىككى چاڭ-چاڭلىق سىرپىلا قۇرۇلمىسى</div>
            <p className="text-purple-600 mt-3">
              بۇ قۇرۇلما 1953-يىلى جەيمس ۋاتسون ۋە فرانسىس كرىك تەرىپىدىن بايقالدى. 1962-يىلى نوبېل مۇكاپاتىغا ئېرىشتى.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg">
            <h5 className="font-bold text-gray-800 text-xl mb-4">🧩 گېنېتىكىلىق ئاساسلار:</h5>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border-l-4 border-blue-400">
                <h6 className="font-bold text-blue-800 text-lg mb-2">گېن - DNA نىڭ بىر بۆلىكى</h6>
                <p className="text-blue-700">
                  گېن بىر خىل خۇسۇسىيەتنى بەلگىلەيدۇ. مەسىلەن، كۆز رەڭگى، چىچ رەڭگى، بوي ئېغىرلىقى قاتارلىقلار گېنلار تەرىپىدىن بەلگىلىنىدۇ.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-l-4 border-green-400">
                <h6 className="font-bold text-green-800 text-lg mb-2">ۋارىسىتىك ئۆزگىرىشلەر</h6>
                <p className="text-green-700">
                  سىزنىڭ <strong>كۆز رەڭگىڭىز، چىچىڭىز، بويۇڭىز</strong> گېنغا باغلىق. ئاتا-ئانىدىن <strong>يا رىم ھەر بىر خۇسۇسىيەت ئۈچۈن كەلتۈرۈلىدۇ</strong>.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border-l-4 border-purple-400">
                <h6 className="font-bold text-purple-800 text-lg mb-2">DNA نىڭ قۇرۇلمىسى</h6>
                <p className="text-purple-700">
                  DNA تۆت خىل ئاساسلىرى بار: ئادېنىن (A)، تىمىن (T)، سىتوزىن (C)، گۇانىن (G). A ھەمىشە T بىلەن، C ھەمىشە G بىلەن جۈپلەيدۇ.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl border-2 border-teal-300">
              <h5 className="font-bold text-teal-800 text-lg mb-3">🔬 زامانىۋى ئىشلەتكۈچىلىرى:</h5>
              <ul className="space-y-3 text-teal-700">
                <li className="flex items-start gap-2">
                  <span className="bg-teal-200 text-teal-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-1 flex-shrink-0">🧪</span>
                  <span><strong>گېن مۇتاتسىيە:</strong> گېنلارنى ئۆزگەرتىش ئارقىلىق يېڭى خۇسۇسىيەتلەر يارىتىش</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-teal-200 text-teal-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-1 flex-shrink-0">💊</span>
                  <span><strong>گېن تەھىرى:</strong> گېنېتىك كېسەللىكلەرنى داۋالاش</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-teal-200 text-teal-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-1 flex-shrink-0">🧬</span>
                  <span><strong>بىئولوگىيەلىك دورىلار:</strong> ئىنسۇلىن، ھورمونلار ۋە باشقا دورىلارنى ئىشلەپچىقىرىش</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border-2 border-amber-300">
              <h5 className="font-bold text-amber-800 text-lg mb-3">👨‍👩‍👧‍👦 گېنېتىك كېسەللىكلەر:</h5>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>ھېمۆفىلىيە (قان ئېقىش كېسىلى)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>سىستىك فىبروزىس</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>داۋان سىندىرومى</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>سىكللەر كېسىلى</span>
                </li>
              </ul>
              <p className="text-sm text-amber-600 mt-3">
                بۇ كېسەللىكلەر ئاساسەن گېنېتىك سەۋەبىدىن كېلىپ چىقىدۇ ۋە ئاتا-ئانىدىن بالا ياكى قىز يەتكۈزۈلىدۇ.
              </p>
            </div>
          </div>
        </div>
      )
    },
    ecology: {
      title: '6. 🌳 ئېكولوگىيە - تىرىكلىق مۇھىتى',
      description: 'تىرىكلىقلارنىڭ بىر-بىرى بىلەن ۋە مۇھىت بىلەن بولغان مۇناسىۋىتى.',
      icon: '🌳',
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg">
            <h5 className="font-bold text-gray-800 text-xl mb-4">🔗 تەبىئى زەنجىرى ۋە تورى:</h5>
            <div className="flex flex-col items-center justify-center space-y-4 mb-4">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="bg-green-100 px-4 py-3 rounded-xl border-2 border-green-300 text-center">
                  <div className="text-xl">🌿</div>
                  <div className="font-bold text-green-800">ئۆسۈملۈك</div>
                  <div className="text-xs text-green-600">ئەۋلەتچى</div>
                </div>
                <div className="text-2xl text-gray-500">↓</div>
                <div className="bg-yellow-100 px-4 py-3 rounded-xl border-2 border-yellow-300 text-center">
                  <div className="text-xl">🐛</div>
                  <div className="font-bold text-yellow-800">چېچىر</div>
                  <div className="text-xs text-yellow-600">بىرىنچى دەرىجىلىك تەمەنچى</div>
                </div>
                <div className="text-2xl text-gray-500">↓</div>
                <div className="bg-red-100 px-4 py-3 rounded-xl border-2 border-red-300 text-center">
                  <div className="text-xl">🐸</div>
                  <div className="font-bold text-red-800">كۆيۈك</div>
                  <div className="text-xs text-red-600">ئىككىنچى دەرىجىلىك تەمەنچى</div>
                </div>
                <div className="text-2xl text-gray-500">↓</div>
                <div className="bg-purple-100 px-4 py-3 rounded-xl border-2 border-purple-300 text-center">
                  <div className="text-xl">🐍</div>
                  <div className="font-bold text-purple-800">ئالتۇن</div>
                  <div className="text-xs text-purple-600">ئۈچىنچى دەرىجىلىك تەمەنچى</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 mt-2">
                  ھەر بىر ھالقىلىق باشقا ھالقىنى تەمەنلەيدۇ. ئەنەرگىيە ھەر قەدەمدە 90% گىچە يوقىلىدۇ.
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl">
              <h6 className="font-bold text-green-800 mb-2">🌱 ئەۋلەتچىلەر:</h6>
              <p className="text-green-700">
                ئۆسۈملۈكلەر، كۆكتاتلار ۋە باشقا فوتوسىنتېز قىلىدىغان تىرىكلىقلار. ئۇلار كۈن نۇرىدىن ئەنەرگىيە ئالىدۇ.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border-2 border-amber-300">
              <h5 className="font-bold text-amber-800 text-lg mb-3">⚠️ مۇھىم ئەھۋال ۋە خەتەرلەر:</h5>
              <ul className="space-y-3 text-amber-700">
                <li className="flex items-start gap-2">
                  <span className="bg-amber-200 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-1 flex-shrink-0">🔥</span>
                  <span><strong>ئورمان قىرۇش:</strong> ھەر يىلى 10 مىليون گېكتار ئورمان يوقىتىلىدۇ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-amber-200 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-1 flex-shrink-0">☁️</span>
                  <span><strong>لاي چىقىرىش:</strong> ئېنېرگىيە ئىشلەپچىقىرىش ۋە سانائەتتىن كېلىپ چىققان گازلار</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-amber-200 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-1 flex-shrink-0">💧</span>
                  <span><strong>سۇنىڭ پىسلىنىشى:</strong> كىمياۋى ۋە ئورگانىك پىسلىق ماددىلار</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-amber-200 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-1 flex-shrink-0">🏭</span>
                  <span><strong>تەبىئى مۇھىتنىڭ ۋەيران قىلىنىشى:</strong> تۇپراق ئېرېزىيەسى ۋە تۇرمۇش مۇھىتىنىڭ يوقىتىلىشى</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-300">
              <h5 className="font-bold text-green-800 text-lg mb-3">✊ بىز قانداق ياردەم قىلالايمىز؟</h5>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start gap-2">
                  <span className="bg-green-200 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-1 flex-shrink-0">🌱</span>
                  <span><strong>ئورمان ئېگىرىش:</strong> ھەر بىر دەرىچىنىڭ بىر يىلدا 22 كىلوگرام CO₂ نى سىيىدىغانلىقىنى ئېسىڭىزدە تۇتۇڭ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-200 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-1 flex-shrink-0">♻️</span>
                  <span><strong>قايتا ئىشلىتىش:</strong> كاگىز، شىشە، پىلاستىك ۋە مېتاللارنى قايتا ئىشلىتىش</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-200 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-1 flex-shrink-0">🚲</span>
                  <span><strong>سۇ ۋە ئېنېرگىيە تەجىربىلىك ئىشلىتىش:</strong> مايۇس قاتناش ۋاسىتىلىرىنى ئىشلىتىش</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-200 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-1 flex-shrink-0">🐝</span>
                  <span><strong>چۇپىر-چېچىرنى تەسلىم قىلىش:</strong> گۈللەر ئېكىپ، پەرەۋانلارنى قوغداش</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border-2 border-blue-300">
            <h5 className="font-bold text-blue-800 text-lg mb-3">🌍 دۇنيادىكى مۇھىم ئېكوسىستېمىلار:</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/50 p-3 rounded-xl border-2 border-blue-200 text-center">
                <div className="text-2xl">🌴</div>
                <div className="font-bold text-blue-800 text-sm">تروپىك ئورمانلىرى</div>
              </div>
              <div className="bg-white/50 p-3 rounded-xl border-2 border-green-200 text-center">
                <div className="text-2xl">🐟</div>
                <div className="font-bold text-green-800 text-sm">مېڭىز مەركەزلىرى</div>
              </div>
              <div className="bg-white/50 p-3 rounded-xl border-2 border-yellow-200 text-center">
                <div className="text-2xl">🏜️</div>
                <div className="font-bold text-yellow-800 text-sm">چۆللەر</div>
              </div>
              <div className="bg-white/50 p-3 rounded-xl border-2 border-purple-200 text-center">
                <div className="text-2xl">🏔️</div>
                <div className="font-bold text-purple-800 text-sm">تاغلىق رايونلار</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  const sectionKeys = ['intro', 'cell', 'photosynthesis', 'humanBody', 'dna', 'ecology'];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowQuiz(false);
    setTimeSpent(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes} مىنۇت ${secs} سېكۇنت`;
  };

  const gradeInfo = calculateGrade();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* باش تونۇشتۇرۇش */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white p-8 md:p-10 rounded-3xl shadow-2xl mb-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🌱 بىئولوگىيە دۇنياسىغا خۇش كەپسىز!</h1>
          <p className="text-xl opacity-90 mb-6">تىرىكلىقنىڭ قىزىقارلىق سىرلىرىنى ئاشكارىلاڭ</p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">🧫 ھۈجەيرە بىئولوگىيەسى</div>
            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">🌿 فوتوكىمۇ يۆتكۈزۈش</div>
            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">🧍 ئىنسان ئاناتومىيەسى</div>
            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">🧬 گېنېتىكا ۋە DNA</div>
            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">🌳 ئېكولوگىيە</div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>ئۆگىنىش ئىلگىرىلىشى: {Object.values(studyProgress).filter(v => v).length}/{Object.keys(studyProgress).length}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span>بەلگە قىلىنغان: {bookmarks.length} سۇئال</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <span>تېست سانى: {quizQuestions.length} سۇئال</span>
            </div>
          </div>
        </div>

        {/* ئۆگىنىش ئىلگىرىلىشى */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 border-2 border-green-200">
          <h3 className="font-bold text-gray-800 text-xl mb-4">📊 ئۆگىنىش ئىلگىرىلىشىڭىز:</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {sectionKeys.map((key, index) => (
              <div key={key} className="text-center">
                <div className={`relative w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center text-lg ${
                  studyProgress[key] 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {sections[key].icon}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
                    {index + 1}
                  </div>
                </div>
                <div className={`text-sm font-medium ${studyProgress[key] ? 'text-green-700' : 'text-gray-500'}`}>
                  {sections[key].title.split('. ')[1].split(' - ')[0]}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-gray-100 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(Object.values(studyProgress).filter(v => v).length / Object.keys(studyProgress).length) * 100}%` }}
            ></div>
          </div>
          <div className="text-right text-sm text-gray-600 mt-2">
            {Object.values(studyProgress).filter(v => v).length}/{Object.keys(studyProgress).length} بۆلەك ئۆگەندىڭىز
          </div>
        </div>

        {/* بۆلەك تاللاش تىزىملىكى */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {sectionKeys.slice(1).map(key => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-md ${
                activeSection === key
                  ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-xl">{sections[key].icon}</span>
              <span>{sections[key].title.split('. ')[1].split(' - ')[0]}</span>
              {studyProgress[key] && (
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* ھازىرقى بۆلەك مەزمۇنى */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl mb-8 border-2 border-green-200 relative">
          <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
            {sections[activeSection].title.split(' ')[0]}
          </div>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">{sections[activeSection].icon}</span>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{sections[activeSection].title}</h2>
              <p className="text-gray-600">{sections[activeSection].description}</p>
            </div>
          </div>
          
          <div className="mb-6">
            {sections[activeSection].content}
          </div>
          
          <div className="flex flex-wrap gap-3 justify-between items-center pt-6 border-t-2 border-gray-100">
            <div className="text-sm text-gray-600">
              دىققەت قىلىشقا تېگىشلىك نۇقتىلار:
            </div>
            <div className="flex flex-wrap gap-2">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                  <span>{point.icon}</span>
                  <span className="text-sm text-gray-700">{point.title}</span>
                  <span className="text-xs bg-gray-300 text-gray-700 w-5 h-5 rounded-full flex items-center justify-center">
                    {point.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* تېست باسقۇچى */}
        {!showQuiz ? (
          <div className="text-center bg-white p-8 rounded-3xl shadow-2xl border-2 border-green-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 بىئولوگىيە تېستى</h3>
            <p className="text-gray-600 mb-6">بىلىمىڭىزنى سىناپ بېقىڭ ۋە ئۆگىنىشىڭىزنى تەكشۈرۈڭ!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-xl border-2 border-green-200 hover:border-green-400 transition-all duration-300">
                <div className="text-3xl mb-2">❓</div>
                <div className="font-bold text-green-800 text-lg">{quizQuestions.length} سۇئال</div>
                <div className="text-sm text-green-600">3 قاتلاملىق قىيىنچىلىق</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-4 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300">
                <div className="text-3xl mb-2">⏱️</div>
                <div className="font-bold text-blue-800 text-lg">15-20 دەقىقە</div>
                <div className="text-sm text-blue-600">ۋاقىت چەكلىمىسى يوق</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-4 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
                <div className="text-3xl mb-2">🎓</div>
                <div className="font-bold text-purple-800 text-lg">3 دەرىجە</div>
                <div className="text-sm text-purple-600">باشلانغۇچتىن ئالىيغىچە</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-4 rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-all duration-300">
                <div className="text-3xl mb-2">📊</div>
                <div className="font-bold text-amber-800 text-lg">تەپسىلى نەتىجە</div>
                <div className="text-sm text-amber-600">ھەر سۇئالغا چۈشەندۈرۈش</div>
              </div>
            </div>

            <button 
              onClick={() => setShowQuiz(true)}
              className="px-10 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white rounded-xl hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 shadow-lg transform hover:scale-105 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-3 mx-auto"
            >
              <span className="text-2xl">🚀</span>
              <span>تېستىنى باشلاش</span>
            </button>
            
            <p className="text-gray-500 text-sm mt-4">
              تېستنى باشلاشتىن ئىلگىرى بارلىق بۆلەكلەرنى ئۆگەندىڭىزگە ئىشىنىڭ
            </p>
          </div>
        ) : showResult ? (
          // تېست نەتىجىسى كۆرسىتىش بۆلەكى
          <div className="text-center bg-white p-8 rounded-3xl shadow-2xl border-2 border-green-300">
            <div className="text-7xl mb-4">🎉</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">تېستىڭىز تامام!</h3>
            <p className="text-gray-600 mb-6">سىز {formatTime(timeSpent)} ئىچىدە تېستنى تاماملادىڭىز</p>
            
            <div className={`bg-gradient-to-r ${gradeInfo.color} p-8 rounded-2xl mb-6 inline-block shadow-lg`}>
              <div className="text-5xl font-bold text-white mb-2">
                {score} / {quizQuestions.length}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {gradeInfo.grade} - {gradeInfo.text}
              </div>
              <div className="text-white opacity-90">
                {(score / quizQuestions.length * 100).toFixed(1)}% توغرا جاۋاب
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="bg-gray-50 p-4 rounded-xl border-2 border-gray-200">
                <div className="text-2xl">⏱️</div>
                <div className="font-bold text-gray-800">{formatTime(timeSpent)}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border-2 border-gray-200">
                <div className="text-2xl">✅</div>
                <div className="font-bold text-gray-800">{score} توغرا</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border-2 border-gray-200">
                <div className="text-2xl">❌</div>
                <div className="font-bold text-gray-800">{quizQuestions.length - score} خاتا</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border-2 border-gray-200">
                <div className="text-2xl">📚</div>
                <div className="font-bold text-gray-800">{bookmarks.length} بەلگە</div>
              </div>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto text-left mb-8">
              <h4 className="font-bold text-gray-800 text-xl">تەپسىلى نەتىجە تەھلىلى:</h4>
              {quizQuestions.map((q, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-xl border-2 border-gray-200 hover:border-green-300 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div className="font-bold text-gray-800 flex items-center gap-2">
                      <span>سۇئال {index + 1}:</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        q.difficulty === 'باشلانغۇچ' ? 'bg-green-100 text-green-800' :
                        q.difficulty === 'ئوتتۇرا' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {q.difficulty}
                      </span>
                    </div>
                    <button 
                      onClick={() => toggleBookmark(q.id)}
                      className={`p-2 rounded-full ${bookmarks.includes(q.id) ? 'text-yellow-500' : 'text-gray-400'}`}
                    >
                      {bookmarks.includes(q.id) ? '⭐' : '☆'}
                    </button>
                  </div>
                  <div className="font-bold text-gray-800 mb-3">{q.question}</div>
                  <div className="text-green-600 font-medium mb-1">توغرا جاۋاب: {q.options[q.correct]}</div>
                  <div className="text-blue-600 text-sm bg-blue-50 p-3 rounded-lg">{q.explanation}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={resetQuiz}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 shadow-lg transform hover:scale-105 transition-all duration-300 font-bold text-lg flex items-center gap-3"
              >
                <span>🔄</span>
                <span>يەنە سىناپ بېقىش</span>
              </button>
              <button 
                onClick={() => {
                  setShowQuiz(false);
                  setShowResult(false);
                }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 shadow-lg transform hover:scale-105 transition-all duration-300 font-bold text-lg flex items-center gap-3"
              >
                <span>📚</span>
                <span>دەرسلەرگە قايتىش</span>
              </button>
            </div>
          </div>
        ) : (
          // تېست سۇئاللىرى كۆرسىتىش بۆلەكى
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-green-300">
            <div className="flex flex-wrap justify-between items-center mb-6">
              <div className="text-lg font-bold text-green-600">
                سۇئال {currentQuestion + 1} / {quizQuestions.length}
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">
                  نەتىجە: {score}
                </div>
                <div className="text-gray-600">
                  ⏱️ {formatTime(timeSpent)}
                </div>
                <button 
                  onClick={() => toggleBookmark(quizQuestions[currentQuestion].id)}
                  className={`p-2 rounded-full ${bookmarks.includes(quizQuestions[currentQuestion].id) ? 'text-yellow-500' : 'text-gray-400'}`}
                >
                  {bookmarks.includes(quizQuestions[currentQuestion].id) ? '⭐' : '☆'}
                </button>
              </div>
            </div>

            <div className="mb-4">
              <span className={`text-xs px-3 py-1 rounded-full ${
                quizQuestions[currentQuestion].difficulty === 'باشلانغۇچ' ? 'bg-green-100 text-green-800' :
                quizQuestions[currentQuestion].difficulty === 'ئوتتۇرا' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {quizQuestions[currentQuestion].difficulty} • {quizQuestions[currentQuestion].category}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
              {quizQuestions[currentQuestion].question}
            </h3>

            <div className="space-y-4 mb-8">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-5 text-left rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                    selectedAnswer === index
                      ? index === quizQuestions[currentQuestion].correct
                        ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-green-500 text-green-800 shadow-lg'
                        : 'bg-gradient-to-r from-red-50 to-pink-50 border-red-500 text-red-800 shadow-lg'
                      : 'bg-gray-50 border-gray-200 hover:bg-green-50 hover:border-green-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                      selectedAnswer === index
                        ? index === quizQuestions[currentQuestion].correct
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-gray-300 text-gray-700'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-lg">{option}</span>
                    {selectedAnswer === index && (
                      <span className="ml-auto text-xl">
                        {index === quizQuestions[currentQuestion].correct ? '✅' : '❌'}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {selectedAnswer !== null && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-xl border-2 border-amber-300 mb-6 shadow-lg">
                <h4 className="font-bold text-amber-800 text-lg mb-2 flex items-center gap-2">
                  <span>📖</span>
                  چۈشەندۈرۈش ۋە ئۇچۇرلار:
                </h4>
                <p className="text-amber-700">{quizQuestions[currentQuestion].explanation}</p>
              </div>
            )}

            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg ${
                selectedAnswer === null
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
              }`}
            >
              {currentQuestion < quizQuestions.length - 1 
                ? '➡️ كېيىنكى سۇئال' 
                : '✅ تېستىنى تاماملاش ۋە نەتىجىنى كۆرۈش'}
            </button>
          </div>
        )}
        
        {/* پۈتۈم قىسمى */}
        <div className="text-center text-gray-600 mt-8 text-sm">
          <p>بۇ بىئولوگىيە دەرسلىك مودۇلى سىزگە پايدىلىق بولۇشىنى ئۈمىد قىلىمىز 🌱</p>
          <p className="mt-2">تەكشۈرۈش ئۈچۈن: {new Date().getFullYear()} - بىئولوگىيە ئۆگىنىش سىستېمىسى</p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedBiologyModule;