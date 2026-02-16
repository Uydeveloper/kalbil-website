import React, { useState, useEffect, useRef } from 'react';
import { SparklesIcon, CalculatorIcon, PuzzlePieceIcon, TrophyIcon, PlayIcon, SpeakerWaveIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

const MathComponent = () => {
  const [score, setScore] = useState(0);
  const [currentGame, setCurrentGame] = useState('counting');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [gameHistory, setGameHistory] = useState([]);
  
  const audioRef = useRef(null);
  
  const playSound = (soundType) => {
    if (!soundEnabled || !audioRef.current) return;
    
    const sounds = {
      correct: 'https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3',
      wrong: 'https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3',
      click: 'https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3',
      win: 'https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3'
    };
    
    if (sounds[soundType]) {
      audioRef.current.src = sounds[soundType];
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
  };
  
  const mathGames = {
    counting: {
      title: 'سانلارنى سانىش',
      description: 'رەسىمدىكى ھايۋانلارنى سانىپ، توغرا جاۋابنى تاللاڭ',
      icon: '🐰',
      color: 'from-purple-400 to-pink-400',
      questions: [
        { 
          id: 1,
          image: ['🐰', '🐰', '🐰'], 
          answer: 3, 
          options: [2, 3, 4, 5],
          animal: 'توشقان'
        },
        { 
          id: 2,
          image: ['🐱', '🐱', '🐱', '🐱'], 
          answer: 4, 
          options: [3, 4, 5, 6],
          animal: 'مۈشۈك'
        },
        { 
          id: 3,
          image: ['🐶', '🐶'], 
          answer: 2, 
          options: [1, 2, 3, 4],
          animal: 'ئىت'
        },
        { 
          id: 4,
          image: ['🐥', '🐥', '🐥', '🐥', '🐥'], 
          answer: 5, 
          options: [4, 5, 6, 7],
          animal: 'چوغچىغا'
        },
      ]
    },
    shapes: {
      title: 'شەكىللەر دۇنياسى',
      description: 'شەكىللەرنى تونۇپ، ئۇلارنى تېپىڭ',
      icon: '🔺',
      color: 'from-blue-400 to-cyan-400',
      items: [
        { name: 'داۋا', shape: '●', color: 'text-red-500', example: 'قىزىل ئالما' },
        { name: 'چوڭ تەگلىك', shape: '■', color: 'text-blue-500', example: 'كىتاب' },
        { name: 'ئۈچ بۇلۇڭ', shape: '▲', color: 'text-green-500', example: 'تاغ' },
        { name: 'يۇلتۇز', shape: '⭐', color: 'text-yellow-500', example: 'ھەقىقىي يۇلتۇز' },
        { name: 'يېرىم چەمبەر', shape: '◐', color: 'text-purple-500', example: 'ئاي' },
        { name: 'تۆت بۇلۇڭ', shape: '◇', color: 'text-orange-500', example: 'ئالماس' },
      ]
    },
    addition: {
      title: 'قوشۇش ئويۇنى',
      description: 'ھايۋانلارنى قوشۇپ، نەچچە بولىدىغانلىقىنى تېپىڭ',
      icon: '➕',
      color: 'from-green-400 to-emerald-400',
      questions: [
        { 
          id: 1,
          problem: '2 توشقان + 3 توشقان',
          image: ['🐰', '🐰', '+', '🐰', '🐰', '🐰'],
          answer: 5, 
          options: [4, 5, 6, 7]
        },
        { 
          id: 2,
          problem: '1 ئىت + 4 مۈشۈك',
          image: ['🐶', '+', '🐱', '🐱', '🐱', '🐱'],
          answer: 5, 
          options: [4, 5, 6, 7]
        },
        { 
          id: 3,
          problem: '3 چوغچىغا + 2 چوغچىغا',
          image: ['🐥', '🐥', '🐥', '+', '🐥', '🐥'],
          answer: 5, 
          options: [3, 4, 5, 6]
        },
      ]
    },
    subtraction: {
      title: 'ئېلىش ئويۇنى',
      description: 'ھايۋانلاردىن ئېلىپ تاشلىغاندىن كېيىن قانچىسى قالىدىغانلىقىنى تېپىڭ',
      icon: '➖',
      color: 'from-red-400 to-orange-400',
      questions: [
        { 
          id: 1,
          problem: '5 توشقان - 2 توشقان',
          image: ['🐰', '🐰', '🐰', '🐰', '🐰', '-', '🐰', '🐰'],
          answer: 3, 
          options: [2, 3, 4, 5]
        },
        { 
          id: 2,
          problem: '4 مۈشۈك - 1 مۈشۈك',
          image: ['🐱', '🐱', '🐱', '🐱', '-', '🐱'],
          answer: 3, 
          options: [2, 3, 4, 5]
        },
        { 
          id: 3,
          problem: '6 چوغچىغا - 3 چوغچىغا',
          image: ['🐥', '🐥', '🐥', '🐥', '🐥', '🐥', '-', '🐥', '🐥', '🐥'],
          answer: 3, 
          options: [2, 3, 4, 5]
        },
      ]
    }
  };
  
  const numberAnimations = [
    'animate-bounce', 'animate-pulse', 'animate-spin', 'animate-ping'
  ];
  
  const handleAnswerSelect = (answer) => {
    if (selectedAnswer !== null) return;
    
    playSound('click');
    setSelectedAnswer(answer);
    
    const currentGameData = mathGames[currentGame];
    const correctAnswer = currentGameData.questions ? 
      currentGameData.questions[currentQuestion].answer : null;
    
    if (answer === correctAnswer) {
      setFeedback('ئوڭشا! توغرا جاۋاپ! 🎉');
      playSound('correct');
      setScore(prev => prev + 10);
      setIsAnimating(true);
      
      setTimeout(() => {
        if (currentGameData.questions && currentQuestion < currentGameData.questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          setSelectedAnswer(null);
          setFeedback('');
          setIsAnimating(false);
        } else {
          playSound('win');
          setFeedback('مۇبارەك! بۇ ئويۇننى تاماملادىڭىز! 🏆');
          
          // Save game completion
          if (!gameHistory.includes(currentGame)) {
            setGameHistory(prev => [...prev, currentGame]);
          }
        }
      }, 1500);
    } else {
      setFeedback('ئەپسۇس! توغرا ئەمەس. قايتا سىناپ بېقىڭ!');
      playSound('wrong');
    }
  };
  
  const handleGameSelect = (game) => {
    playSound('click');
    setCurrentGame(game);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setFeedback('');
  };
  
  const resetGame = () => {
    playSound('click');
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setFeedback('');
  };
  
  const getRandomAnimation = () => {
    return numberAnimations[Math.floor(Math.random() * numberAnimations.length)];
  };

  return (
    <div className="p-4 md:p-6 min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50" dir="rtl">
      <audio ref={audioRef} />
      
      {/* بېشىدىكى قىسم */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="relative">
              <SparklesIcon className="h-10 w-10 text-yellow-500 animate-pulse" />
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-ping"></div>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-purple-700 font-[UKIJ Tuz]">
              ماتېماتىكا جەزىرىسى
            </h2>
          </div>
          <p className="text-gray-700 mt-2 font-[UKIJ Nasq] text-lg">
            سانلار بىلەن ئويۇن، شەكىللەر بىلەن ئەجايىپ دۇنيا
          </p>
        </div>
        
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="bg-yellow-100 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg border-2 border-yellow-200">
            <div className="relative">
              <TrophyIcon className="h-8 w-8 text-yellow-600" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-yellow-400 rounded-full"></div>
            </div>
            <div>
              <p className="text-sm text-yellow-800 font-[UKIJ Nasq]">يۇلتۇز</p>
              <span className="font-bold text-2xl text-yellow-700">{score}</span>
            </div>
          </div>
          
          <button 
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-3 rounded-full ${soundEnabled ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}
          >
            <SpeakerWaveIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* ئويۇن تاللاش بۆلىكى */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 font-[UKIJ Tuz] flex items-center gap-2">
          <PlayIcon className="h-6 w-6 text-blue-500" />
          ئويۇن تاللاش
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.keys(mathGames).map((gameKey) => (
            <button
              key={gameKey}
              onClick={() => handleGameSelect(gameKey)}
              className={`p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 ${currentGame === gameKey ? 'ring-4 ring-opacity-50 ring-purple-300' : ''} bg-gradient-to-br ${mathGames[gameKey].color}`}
            >
              <span className="text-3xl mb-2">{mathGames[gameKey].icon}</span>
              <span className="font-bold text-white text-center font-[UKIJ Tuz]">{mathGames[gameKey].title}</span>
              {gameHistory.includes(gameKey) && (
                <div className="mt-2 text-white text-xs bg-black bg-opacity-20 px-2 py-1 rounded-full">
                  تامامланغان ✓
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* سانلار ئويۇنى - ئانیماتسىيەلىك سانلار */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg border-2 border-purple-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full">
              <CalculatorIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-800 font-[UKIJ Tuz]">سانلار ئويۇنى</h3>
              <p className="text-gray-700 font-[UKIJ Nasq]">سانلارنى ئۇچۇرۇپ، ئويۇن ئويناڭ!</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[1,2,3,4,5,6,7,8,9,10].map(num => (
              <div 
                key={num}
                className={`relative ${getRandomAnimation()} hover:animate-bounce`}
                style={{animationDelay: `${num * 0.1}s`}}
              >
                <button 
                  onClick={() => {
                    playSound('click');
                    setFeedback(`${num} سانىنى تاللىدىڭىز!`);
                  }}
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl text-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-125 relative"
                >
                  {num}
                  <div className="absolute -top-2 -right-2 h-6 w-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs">
                    {num}
                  </div>
                </button>
                
                {/* سانلارغا ماس كېلىدىغان ھايۋان رەسىملىرى */}
                <div className="text-center mt-2">
                  {num === 1 && '🐰'}
                  {num === 2 && '🐰🐰'}
                  {num === 3 && '🐱🐱🐱'}
                  {num === 4 && '🐱🐱🐱🐱'}
                  {num === 5 && '🐶🐶🐶🐶🐶'}
                  {num === 6 && '🐥🐥🐥🐥🐥🐥'}
                  {num === 7 && '🐝🐝🐝🐝🐝🐝🐝'}
                  {num === 8 && '🦋🦋🦋🦋🦋🦋🦋🦋'}
                  {num === 9 && '🐢🐢🐢🐢🐢🐢🐢🐢🐢'}
                  {num === 10 && '🐘🐘🐘🐘🐘🐘🐘🐘🐘🐘'}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-700 font-[UKIJ Nasq]">سانلارنى بېسىپ، ئۇلارنىڭ ئاۋازىنى ئاڭلاڭ!</p>
          </div>
        </div>
      </div>
      
      {/* تاللانغان ئويۇن بۆلىكى */}
      <div className="mb-8">
        <div className={`bg-gradient-to-br ${mathGames[currentGame].color} bg-opacity-10 rounded-2xl p-6 shadow-lg border-2 border-opacity-30 ${mathGames[currentGame].color.split(' ')[1]}`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`bg-gradient-to-br ${mathGames[currentGame].color} p-3 rounded-full`}>
                <span className="text-2xl">{mathGames[currentGame].icon}</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 font-[UKIJ Tuz]">
                  {mathGames[currentGame].title}
                </h3>
                <p className="text-gray-700 font-[UKIJ Nasq]">{mathGames[currentGame].description}</p>
              </div>
            </div>
            
            <button 
              onClick={resetGame}
              className="p-3 bg-white bg-opacity-70 rounded-full hover:bg-opacity-100 transition-all"
            >
              <ArrowPathIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          
          {/* سان سانىش ئويۇنى */}
          {currentGame === 'counting' && mathGames.counting.questions[currentQuestion] && (
            <div className="text-center">
              <div className="mb-8">
                <p className="text-xl font-[UKIJ Nasq] text-gray-700 mb-4">
                  نەچچە {mathGames.counting.questions[currentQuestion].animal} بار؟
                </p>
                <div className="flex justify-center items-center gap-4 flex-wrap mb-8">
                  {mathGames.counting.questions[currentQuestion].image.map((emoji, idx) => (
                    <div 
                      key={idx} 
                      className="text-5xl animate-bounce"
                      style={{animationDelay: `${idx * 0.2}s`}}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {mathGames.counting.questions[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSelect(option)}
                      disabled={selectedAnswer !== null}
                      className={`px-8 py-4 text-2xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                        selectedAnswer === null 
                          ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl' 
                          : selectedAnswer === option
                            ? option === mathGames.counting.questions[currentQuestion].answer
                              ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white ring-4 ring-green-200'
                              : 'bg-gradient-to-br from-red-500 to-pink-500 text-white ring-4 ring-red-200'
                            : option === mathGames.counting.questions[currentQuestion].answer
                              ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white ring-4 ring-green-200'
                              : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 font-[UKIJ Nasq]">
                    سوئال {currentQuestion + 1} / {mathGames.counting.questions.length}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* شەكىللەر ئويۇنى */}
          {currentGame === 'shapes' && (
            <div>
              <p className="text-center text-gray-700 mb-6 font-[UKIJ Nasq]">
                شەكىللەرنى بېسىپ، ئۇلارنىڭ ئىسمىنى ئاڭلاڭ
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {mathGames.shapes.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white bg-opacity-70 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onClick={() => {
                      playSound('click');
                      setFeedback(`بۇ ${item.name}. مەسىلەن: ${item.example}`);
                    }}
                  >
                    <div className={`text-7xl mb-4 ${item.color} animate-pulse`}>
                      {item.shape}
                    </div>
                    <h4 className="font-bold text-xl text-gray-800 mb-2 font-[UKIJ Tuz]">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-sm font-[UKIJ Nasq]">
                      {item.example}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* قوشۇش ئويۇنى */}
          {currentGame === 'addition' && mathGames.addition.questions[currentQuestion] && (
            <div className="text-center">
              <div className="mb-8">
                <p className="text-xl font-[UKIJ Nasq] text-gray-700 mb-4">
                  {mathGames.addition.questions[currentQuestion].problem} = ?
                </p>
                <div className="flex justify-center items-center gap-2 flex-wrap mb-8 text-4xl">
                  {mathGames.addition.questions[currentQuestion].image.map((item, idx) => (
                    <span 
                      key={idx} 
                      className={typeof item === 'string' && item === '+' ? 'text-3xl mx-2' : ''}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {mathGames.addition.questions[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSelect(option)}
                      disabled={selectedAnswer !== null}
                      className={`px-8 py-4 text-2xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                        selectedAnswer === null 
                          ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg hover:shadow-xl' 
                          : selectedAnswer === option
                            ? option === mathGames.addition.questions[currentQuestion].answer
                              ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white ring-4 ring-green-200'
                              : 'bg-gradient-to-br from-red-500 to-pink-500 text-white ring-4 ring-red-200'
                            : option === mathGames.addition.questions[currentQuestion].answer
                              ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white ring-4 ring-green-200'
                              : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 font-[UKIJ Nasq]">
                    سوئال {currentQuestion + 1} / {mathGames.addition.questions.length}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* ئېلىش ئويۇنى */}
          {currentGame === 'subtraction' && mathGames.subtraction.questions[currentQuestion] && (
            <div className="text-center">
              <div className="mb-8">
                <p className="text-xl font-[UKIJ Nasq] text-gray-700 mb-4">
                  {mathGames.subtraction.questions[currentQuestion].problem} = ?
                </p>
                <div className="flex justify-center items-center gap-2 flex-wrap mb-8 text-4xl">
                  {mathGames.subtraction.questions[currentQuestion].image.map((item, idx) => (
                    <span 
                      key={idx} 
                      className={typeof item === 'string' && item === '-' ? 'text-3xl mx-2' : ''}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {mathGames.subtraction.questions[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSelect(option)}
                      disabled={selectedAnswer !== null}
                      className={`px-8 py-4 text-2xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                        selectedAnswer === null 
                          ? 'bg-gradient-to-br from-red-400 to-orange-400 text-white shadow-lg hover:shadow-xl' 
                          : selectedAnswer === option
                            ? option === mathGames.subtraction.questions[currentQuestion].answer
                              ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white ring-4 ring-green-200'
                              : 'bg-gradient-to-br from-red-500 to-pink-500 text-white ring-4 ring-red-200'
                            : option === mathGames.subtraction.questions[currentQuestion].answer
                              ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white ring-4 ring-green-200'
                              : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 font-[UKIJ Nasq]">
                    سوئال {currentQuestion + 1} / {mathGames.subtraction.questions.length}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* جاۋاب ئەندىزىسى */}
          {feedback && (
            <div className={`mt-6 p-4 rounded-2xl text-center font-bold text-lg ${feedback.includes('توغرا') || feedback.includes('مۇبارەك') ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200' : 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border border-red-200'}`}>
              {feedback}
            </div>
          )}
          
          {/* ئانیماتسىيە */}
          {isAnimating && (
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center z-50">
              <div className="text-6xl animate-bounce">🎉</div>
              <div className="text-5xl animate-spin absolute" style={{animationDelay: '0.2s'}}>⭐</div>
              <div className="text-4xl animate-ping absolute" style={{animationDelay: '0.4s'}}>✨</div>
            </div>
          )}
        </div>
      </div>
      
      {/* پائالىيەت كۆرسەتكۈچى */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 font-[UKIJ Tuz]">پائالىيەت كۆرسەتكۈچى</h3>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="text-3xl mb-2">📚</div>
            <p className="text-gray-700 font-[UKIJ Nasq]">سان سانىش</p>
            <div className="w-24 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                style={{ width: `${(currentQuestion + 1) / mathGames.counting.questions.length * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-2">➕➖</div>
            <p className="text-gray-700 font-[UKIJ Nasq]">ئەمەللەر</p>
            <div className="w-24 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                style={{ width: `${gameHistory.filter(g => g === 'addition' || g === 'subtraction').length / 2 * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-2">🔺🔵</div>
            <p className="text-gray-700 font-[UKIJ Nasq]">شەكىللەر</p>
            <div className="w-24 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                style={{ width: `${gameHistory.includes('shapes') ? 100 : 0}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* قوشۇمچە ئۇچۇر */}
      <div className="text-center text-gray-600 font-[UKIJ Nasq] text-sm">
        <p>بۇ پروگرامما 3 ياشتىن 11 ياشقىچە بولغان باللار ئۈچۈن لايىھەلەندى. ھەر بىر ئويۇن بالىلارنىڭ يېشىغا ماس كېلىدۇ!</p>
      </div>
    </div>
  );
};

export default MathComponent;