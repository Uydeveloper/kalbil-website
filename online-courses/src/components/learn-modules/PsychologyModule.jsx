// src/components/learn-modules/PsychologyModule.jsx
import React, { useState } from 'react';

const PsychologyModule = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // پىسخولوگىيە تېستى سۇئاللىرى
  const quizQuestions = [
    {
      question: "ئادەمنىڭ بىر ۋاقىتتا نەچچە نەرسىگە دىققىتىنى جەم قىلالايدۇ؟",
      options: ["1", "2-3", "5-7", "10 دىن كۆپ"],
      correct: 2,
      explanation: "خاتىرە تەتقىقاتىغا كۆرە، ئادەم بىر ۋاقىتتا ئوتتۇرىچە 5-7 پارچە مەلۇماتنى خاتىرىلەيدۇ."
    },
    {
      question: "بولقۇن ئۈلگىسى (Pavlov) قانداق ئۆگىنىش نەزەرىيىسى بىلەن مەشھۇر؟",
      options: ["سۆزسز ئۆگىنىش", "سۆزلىك ئۆگىنىش", "مۇستەقىل ئۆگىنىش", "ئىجتىمائىي ئۆگىنىش"],
      correct: 0,
      explanation: "بولقۇن ئىتى بىلەن قىلغان تەجرىبىسى سۆزسز ئۆگىنىش (كىلاسسىك شەرتلىك رېئاكىسىيە) نى ئىسپاتلىدى."
    },
    {
      question: "«ماسلاۋەتسىزلىك» ھېس قىلىشنىڭ ئەڭ ئادەتتىكى سەۋەبى قايسى؟",
      options: ["ئېغىر ئۇزۇنلۇق", "ئىچكى توقۇنۇش", "تاشقى بېسىم", "نەپسىياتىك سالاھىيەتكە ئىگە بولماسلىق"],
      correct: 1,
      explanation: "ماسلاۋەتسىزلىك — ئىچىدىكى پىكىر/ھەرىكەت بىلەن سىرتقى ھەرىكەت ئوتتۇرىسىدا بولىدىغان توقۇنۇش."
    },
    {
      question: "«ئابراهام ماسلو» نىڭ نىشانىغا كۆرە، ئادەمنىڭ ئەڭ ئاستىقى دەرىجىلىك ئېھتىياجى نېمە؟",
      options: ["مۇھەببەت", "خەۋپسىزلىك", "ئىزگىلىك", "فىزىكىلىق ئېھتىياج"],
      correct: 3,
      explanation: "فىزىكىلىق ئېھتىياج (ئەزىك، سۇ، تورپاق، نەپىس) — ئەڭ ئاساسىي دەرىجە."
    },
    {
      question: "«ئىككى يۈزلۈكلىك» دەپ نېمەگە دېيىلىدۇ؟",
      options: ["ئىككى خىل ھېس قىلىش", "ئىككى خىل شەخسىيەت", "ئىككى خىل دىققەت", "ئىككى خىل خاتىرە"],
      correct: 0,
      explanation: "مەسىلەن: بىر ئادەم ئىشىگە ھەزىل قىلىدۇ، لېكىن ئۇنى تاشلاپ قويۇش ھەققىدە قورقىدۇ — بۇ ئىككى يۈزلۈكلىك."
    }
  ];

  const sections = {
    intro: {
      title: '🧠 پىسخولوگىيە — روھىيەت ۋە مەزگىنىڭ ئىلمى',
      description: 'پىسخولوگىيە — ئادەمنىڭ ئوي، ھېس-ھەرىكەت، خاتىرە، ئۆگىنىش ۋە ئىجتىمائىي مۇناسىۋىتىنى ئىزدىش.',
      icon: '🧠',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border-2 border-blue-200">
              <h4 className="font-bold text-blue-800 text-lg mb-2">💭 ئوي ۋە خاتىرە</h4>
              <p className="text-blue-700">نەچچە دىققىت ساقلايمىز؟ قانداق ئۇنتىمىز؟</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border-2 border-purple-200">
              <h4 className="font-bold text-purple-800 text-lg mb-2">🙂 ھېس-ھەرىكەت</h4>
              <p className="text-purple-700">قورقۇش، قىزغىچاق، مەيلىمەتلىك قانداق پەيدا بولىدۇ؟</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-xl border-2 border-green-200">
              <h4 className="font-bold text-green-800 text-lg mb-2">📚 ئۆگىنىش</h4>
              <p className="text-green-700">سۆزسز ئۆگىنىش، مۇكاپات ئۆگىنىشى</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border-2 border-amber-200">
              <h4 className="font-bold text-amber-800 text-lg mb-2">👥 ئىجتىمائىي پىسخولوگىيە</h4>
              <p className="text-amber-700">توبتا بولغاندا نېمە ئۆزگىرىدۇ؟</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border-2 border-indigo-300 mt-4">
            <h4 className="font-bold text-indigo-800 text-lg mb-2">💡 نېمە ئۈچۈن پىسخولوگىيە؟</h4>
            <ul className="list-none space-y-2 text-indigo-700">
              <li className="flex items-center gap-2">
                <span className="bg-indigo-200 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                <span>ئۆزىڭىزنى چۈشىنىش</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-indigo-200 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                <span>باشقىلار بىلەن مۇناسىۋىتىڭىزنى ياخشىلاش</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-indigo-200 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                <span>روھىي ساغلاملىقنى ساقلاش</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    mind: {
      title: '1. 💭 ئوي ۋە دىققەت',
      description: 'ئادەمنىڭ ئويى قانداق ئىشلەيدۇ؟ دىققىتىنى قانداق جەم قىلىدۇ؟',
      icon: '💭',
      content: (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border-2 border-gray-200">
            <h5 className="font-bold text-gray-800 text-lg mb-3">🧠 دىققەت قانچىلىك؟</h5>
            <p className="text-gray-700">
              ئادەم بىر ۋاقىتتا <strong>5-7 پارچە</strong> مەلۇماتنى خاتىرىلەيدۇ (ماينىڭ «مېگىزىم» نەزەرىيىسى).
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border-2 border-blue-300">
            <h5 className="font-bold text-blue-800 mb-2">📌 مىسال:</h5>
            <p className="text-blue-700">
              سىز تېلېفون نۇمۇرىنى ئاڭلىغاندا — ئۇنى <strong>3 سان بىلەن 3 سان</strong> قىلىپ ئايرىپ ئېيتىش ئاسان.
              <br />
              مەسىلەن: <code>139-0000-1234</code>
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border-2 border-purple-300">
            <h5 className="font-bold text-purple-800 mb-2">🧠 خاتىرە تۈرلىرى:</h5>
            <ul className="list-disc pl-5 text-purple-700">
              <li><strong>قىسقىچە خاتىرە:</strong> 20 سېكۇنت ساقلىنىدۇ</li>
              <li><strong>ئۇزۇن مۇددەتلىك خاتىرە:</strong> تەكرارلاش ئارقىلىق ساقلىنىدۇ</li>
            </ul>
          </div>
        </div>
      )
    },
    emotions: {
      title: '2. 🙂 ھېس-ھەرىكەت ۋە روھىي ساغلاملىق',
      description: 'ھېس-ھەرىكەتلەرنى چۈشىنىش ئارقىلىق روھىمىزنى ساغلام تۇتايلى.',
      icon: '🙂',
      content: (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border-2 border-gray-200">
            <h5 className="font-bold text-gray-800 text-lg mb-3">❤️ ئاساسىي ھېس-ھەرىكەتلەر:</h5>
            <div className="flex flex-wrap gap-2 justify-center">
              {['قورقۇش', 'قىزغىچاق', 'خۇشاللىق', 'غەمگىنلىك', 'مەيلىمەتلىك', 'ھەيرانقالىش'].map((emo, i) => (
                <span key={i} className="bg-pink-100 px-3 py-1 rounded-full text-pink-800 font-medium">{emo}</span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border-2 border-amber-300">
            <h5 className="font-bold text-amber-800 mb-2">🧘 روھىي ساغلاملىق مەسلىھىتى:</h5>
            <ul className="list-disc pl-5 text-amber-700">
              <li>ھەر كۈنى 10 مىنۇت دىن دون ھالىتىڭىزىنى بايانلاش</li>
              <li>نەپىس ئېلىش مەشىقى قىلىش</li>
              <li>يېقىن دوست بىلەن سۆھبەت قىلىش</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border-2 border-green-300">
            <h5 className="font-bold text-green-800 mb-2">💡 مۇھىم نۇقتا:</h5>
            <p className="text-green-700">
              ھېس-ھەرىكەت — <strong>خاتا ئەمەس</strong>، بەلكى ھاياتنىڭ بىر قىسىمى. ئۇنى باسقۇزۇش ئەمەس، <strong>باشقۇرۇش</strong> زۆرۈر.
            </p>
          </div>
        </div>
      )
    },
    learning: {
      title: '3. 📚 ئۆگىنىش نەزەرىيىسى',
      description: 'ئادەم قانداق ئۆگىنىدۇ؟ نېمە چۈشىنىشنى ياخشىلايدۇ؟',
      icon: '📚',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border-2 border-blue-200">
              <h5 className="font-bold text-blue-800 mb-2">🔔 سۆزسز ئۆگىنىش</h5>
              <p className="text-blue-700">
                بولقۇن: بىر ئىت تەلەپ قىلغاندا سالىق ئېچىدۇ.
                <br />
                سوڭىرا سالىقنى ئىتى تەلەپ قىلمىسىمۇ ئېچىدۇ.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border-2 border-green-200">
              <h5 className="font-bold text-green-800 mb-2">🏆 مۇكاپات ئۆگىنىشى</h5>
              <p className="text-green-700">
                سكىننېر: ئەگەر ئىش جەزبىلىك بولسا، ئادەم ئۇنى تەكرارلايدۇ.
                <br />
                مىسال: باھا ياخشى بولسا، ئۆگىنىشنى داۋاملاشتۇرىدۇ.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-xl border-2 border-purple-300">
            <h5 className="font-bold text-purple-800 mb-2">🧠 نېمە ياخشى ئۆگىنىشنى ياخشىلايدۇ؟</h5>
            <ul className="list-disc pl-5 text-purple-700">
              <li>تەكرارلاش</li>
              <li>مېتافورا ئىشلىتىش</li>
              <li>تېست قىلىش (ئەكتىپ تەكشۈرۈش)</li>
              <li>بەلگىلىك ۋاقىتتا ئۆگىنىش</li>
            </ul>
          </div>
        </div>
      )
    },
    social: {
      title: '4. 👥 ئىجتىمائىي پىسخولوگىيە',
      description: 'باشقىلار بىزگە قانداق تەسىر كۆرسىتىدۇ؟',
      icon: '👥',
      content: (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border-2 border-gray-200">
            <h5 className="font-bold text-gray-800 text-lg mb-3">👥 ئىجتىمائىي تەسىر:</h5>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>ماسلىشىش:</strong> توبتا بولغاندا باشقىلارغا ماسلىشىش</li>
              <li><strong>باشقۇرۇش:</strong> باشكىلارنىڭ ئىشىنى قىلىش</li>
              <li><strong>يەنەشەش:</strong> باشقىلارنىڭ ئىشىنى قىلمايدىغان بولۇش</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border-2 border-amber-300">
            <h5 className="font-bold text-amber-800 mb-2">🧠 تەجرىبە مىسالى:</h5>
            <p className="text-amber-700">
              ئاسچ (Asch) نىڭ شەكىل تەجرىبىسى: توبتا 9 كىشى خاتا دېگەن بولسا، 10-كىشىمۇ خاتا دېيدۇ — <strong>ماسلىشىش</strong>نىڭ كۈچى.
            </p>
          </div>
        </div>
      )
    },
    motivation: {
      title: '5. 🔥 نەپسىياتىك سالاھىيەت ۋە ئېھتىياج',
      description: 'ئادەم نېمە ئۈچۈن ھەرىكەتكە كېلىدۇ؟',
      icon: '🔥',
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border-2 border-purple-300">
            <h5 className="font-bold text-purple-800 text-center mb-3">🪜 ماسلو نىشانى (ئېھتىياج دەرىجىلىرى):</h5>
            <div className="flex flex-col items-center">
              {[
                '1. فيزىكىلىق ئېھتىياج (ئەزىك، سۇ)',
                '2. خەۋپسىزلىك',
                '3. مۇھەببەت ۋە توبتىكى ئورۇن',
                '4. ئىزگىلىك',
                '5. ئۆزىنى تونۇشتۇرۇش'
              ].map((level, i) => (
                <div key={i} className="w-48 py-2 text-center bg-white my-1 rounded-lg border border-purple-200">
                  {level}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border-2 border-green-300">
            <h5 className="font-bold text-green-800 mb-2">💡 مۇھىم نۇقتا:</h5>
            <p className="text-green-700">
              ئادەم <strong>ئاستىقى دەرىجىلىك ئېھتىياجى</strong> قانائەتلەندۈرۈلمىسە، يۇقىرى دەرىجىلىك ئېھتىياجقا ئېرىشەلمەيدۇ.
            </p>
          </div>
        </div>
      )
    }
  };

  const sectionKeys = ['intro', 'mind', 'emotions', 'learning', 'social', 'motivation'];

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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* باش تونۇشتۇرۇش */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-3xl shadow-2xl mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🧠 پىسخولوگىيە دۇنياسى</h1>
          <p className="text-xl opacity-90">ئوي، ھېس-ھەرىكەت ۋە مەزگىنىڭ قىزىقارلىق سىرلىرى!</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="bg-white/20 px-4 py-2 rounded-full">💭 ئوي</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">🙂 ھېس-ھەرىكەت</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">📚 ئۆگىنىش</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">👥 ئىجتىمائىي</div>
          </div>
        </div>

        {/* بۆلەك تاللاش تىزىملىكى */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {sectionKeys.slice(1).map(key => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeSection === key
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              <span>{sections[key].icon}</span>
              <span>{sections[key].title.split('. ')[1]}</span>
            </button>
          ))}
        </div>

        {/* ھازىرقى بۆلەك مەزمۇنى */}
        <div className="bg-white p-8 rounded-3xl shadow-xl mb-8 border-2 border-indigo-200">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{sections[activeSection].icon}</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{sections[activeSection].title}</h2>
              <p className="text-gray-600">{sections[activeSection].description}</p>
            </div>
          </div>
          {sections[activeSection].content}
        </div>

        {/* تېست باسقۇچى */}
        {!showQuiz ? (
          <div className="text-center bg-white p-8 rounded-3xl shadow-xl border-2 border-purple-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 پىسخولوگىيە تېستى</h3>
            <p className="text-gray-600 mb-6">بىلىمىڭىزنى سىناپ بېقىڭ!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-xl border-2 border-purple-200">
                <div className="text-2xl">❓</div>
                <div className="font-bold text-purple-800">5 سۇئال</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                <div className="text-2xl">⏱️</div>
                <div className="font-bold text-blue-800">15 دەقىقە</div>
              </div>
              <div className="bg-pink-50 p-4 rounded-xl border-2 border-pink-200">
                <div className="text-2xl">🎓</div>
                <div className="font-bold text-pink-800">باشلانغۇچ دەرىجە</div>
              </div>
            </div>

            <button 
              onClick={() => setShowQuiz(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl hover:from-purple-600 hover:to-indigo-600 shadow-lg transform hover:scale-105 transition-all duration-300 font-bold text-lg"
            >
              🚀 تېستىنى باشلاش
            </button>
          </div>
        ) : showResult ? (
          // تېست نەتىجىسى كۆرسىتىش بۆلەكى
          <div className="text-center bg-white p-8 rounded-3xl shadow-xl border-2 border-purple-300">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">تېستىڭىز تامام!</h3>
            
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-2xl mb-6 inline-block">
              <div className="text-4xl font-bold text-purple-700 mb-2">
                {score} / {quizQuestions.length}
              </div>
              <div className="text-purple-600">
                {score === quizQuestions.length ? 'مۇكەممەل! 👏' : 
                 score >= quizQuestions.length * 0.7 ? 'ياخشى! 👍' : 
                 'يەنە تەكرارلاڭ 💪'}
              </div>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto text-left">
              <h4 className="font-bold text-gray-800 text-xl">نەتىجە تەھلىلى:</h4>
              {quizQuestions.map((q, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl border-2 border-gray-200">
                  <div className="font-bold text-gray-800 mb-2">{q.question}</div>
                  <div className="text-green-600 font-medium">توغرا جاۋاب: {q.options[q.correct]}</div>
                  <div className="text-blue-600 text-sm mt-1">{q.explanation}</div>
                </div>
              ))}
            </div>

            <button 
              onClick={resetQuiz}
              className="mt-6 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl hover:from-purple-600 hover:to-indigo-600 shadow-lg transform hover:scale-105 transition-all duration-300 font-bold text-lg"
            >
              🔄 يەنە سىناپ بېقىش
            </button>
          </div>
        ) : (
          // تېست سۇئاللىرى كۆرسىتىش بۆلەكى
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-purple-300">
            <div className="flex justify-between items-center mb-6">
              <div className="text-lg font-bold text-purple-600">
                سۇئال {currentQuestion + 1} / {quizQuestions.length}
              </div>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-bold">
                نەتىجە: {score}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {quizQuestions[currentQuestion].question}
            </h3>

            <div className="space-y-3 mb-6">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                    selectedAnswer === index
                      ? index === quizQuestions[currentQuestion].correct
                        ? 'bg-green-100 border-green-500 text-green-800'
                        : 'bg-red-100 border-red-500 text-red-800'
                      : 'bg-gray-50 border-gray-200 hover:bg-purple-50 hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      selectedAnswer === index
                        ? index === quizQuestions[currentQuestion].correct
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-gray-300 text-gray-700'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-lg">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {selectedAnswer !== null && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border-2 border-amber-300 mb-4">
                <h4 className="font-bold text-amber-800 mb-2">📖 چۈشەندۈرۈش:</h4>
                <p className="text-amber-700">{quizQuestions[currentQuestion].explanation}</p>
              </div>
            )}

            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                selectedAnswer === null
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 shadow-lg transform hover:scale-105'
              }`}
            >
              {currentQuestion < quizQuestions.length - 1 ? '➡️ كېيىنكى سۇئال' : '✅ تېستىنى تاماملاش'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PsychologyModule;