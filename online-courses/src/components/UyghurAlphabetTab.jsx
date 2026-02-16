import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Upload, ArrowRight, BookOpen, GamepadIcon, RotateCcw, Maximize2, Minimize2 } from 'lucide-react';

const UyghurAlphabetTab = () => {
  const [activeTab, setActiveTab] = useState('alphabet');
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadResult, setUploadResult] = useState('');
  const [gameScore, setGameScore] = useState(0);
  const [gameAttempts, setGameAttempts] = useState(0);
  
  // ئىلىببە ئويۇنى ئۈچۈن يېڭى ھالەتلەر
  const [eggGameStarted, setEggGameStarted] = useState(false);
  const [eggPositions, setEggPositions] = useState([]);
  const [openedEggs, setOpenedEggs] = useState([]);
  const [currentEgg, setCurrentEgg] = useState(null);
  const [showEggContent, setShowEggContent] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const gameContainerRef = useRef(null);

  // === ئۇيغۇر ھەرپلىرى ۋە تەلەپپۇز ===
  const lettersData = [
    { letter: "ئا", name: "A", pronunciation: "ɑ, a", examples: [
      { word: "ئات", image: "https://cdn-icons-png.flaticon.com/128/1995/1995518.png" },
      { word: "ئانا", image: "https://cdn-icons-png.flaticon.com/128/1076/1076984.png" },
      { word: "ئالمۇرت", image: "https://cdn-icons-png.flaticon.com/128/415/415733.png" }
    ]},
    { letter: "ئە", name: "E", pronunciation: "ɛ, æ", examples: [
      { word: "ئەتىر", image: "https://cdn-icons-png.flaticon.com/128/2933/2933907.png" },
      { word: "ئەر", image: "https://cdn-icons-png.flaticon.com/128/3011/3011270.png" },
      { word: "ئەنجۈر", image: "https://cdn-icons-png.flaticon.com/128/1570/1570154.png" }
    ]},
    { letter: "ب", name: "B", pronunciation: "b", examples: [
      { word: "بالا", image: "https://cdn-icons-png.flaticon.com/128/3079/3079437.png" },
      { word: "باغ", image: "https://cdn-icons-png.flaticon.com/128/1142/1142697.png" },
      { word: "بۇغداي", image: "https://cdn-icons-png.flaticon.com/128/1134/1134083.png" }
    ]},
    { letter: "پ", name: "P", pronunciation: "p", examples: [
      { word: "پەرۋانە", image: "https://cdn-icons-png.flaticon.com/128/1706/1706874.png" },
      { word: "پالتا", image: "https://cdn-icons-png.flaticon.com/128/1995/1995621.png" },
      { word: "پىشلاق", image: "https://cdn-icons-png.flaticon.com/128/1046/1046768.png" }
    ]},
    { letter: "ت", name: "T", pronunciation: "t", examples: [
      { word: "تاغ", image: "https://cdn-icons-png.flaticon.com/128/3082/3082044.png" },
      { word: "تەخسە", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "تۆت", image: "https://cdn-icons-png.flaticon.com/128/1086/1086930.png" }
    ]},
    { letter: "ج", name: "J", pronunciation: "d͡ʒ", examples: [
      { word: "جام", image: "https://cdn-icons-png.flaticon.com/128/3172/3172742.png" },
      { word: "جەمئىيەت", image: "https://cdn-icons-png.flaticon.com/128/1995/1995518.png" },
      { word: "جۈپ", image: "https://cdn-icons-png.flaticon.com/128/1086/1086930.png" }
    ]},
    { letter: "چ", name: "CH", pronunciation: "t͡ʃ", examples: [
      { word: "چاۋا", image: "https://cdn-icons-png.flaticon.com/128/3079/3079437.png" },
      { word: "چېۋە", image: "https://cdn-icons-png.flaticon.com/128/1570/1570154.png" },
      { word: "چىلە", image: "https://cdn-icons-png.flaticon.com/128/1134/1134083.png" }
    ]},
    { letter: "خ", name: "X", pronunciation: "χ, x", examples: [
      { word: "خاتا", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "خەت", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "خورما", image: "https://cdn-icons-png.flaticon.com/128/1570/1570154.png" }
    ]},
    { letter: "د", name: "D", pronunciation: "d", examples: [
      { word: "داۋا", image: "https://cdn-icons-png.flaticon.com/128/1995/1995518.png" },
      { word: "دەرەخ", image: "https://cdn-icons-png.flaticon.com/128/1142/1142697.png" },
      { word: "دۇنيا", image: "https://cdn-icons-png.flaticon.com/128/3082/3082044.png" }
    ]},
    { letter: "ر", name: "R", pronunciation: "r, ɾ", examples: [
      { word: "رەسىم", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "رەھمەت", image: "https://cdn-icons-png.flaticon.com/128/1995/1995518.png" },
      { word: "روزى", image: "https://cdn-icons-png.flaticon.com/128/1134/1134083.png" }
    ]},
    { letter: "ز", name: "Z", pronunciation: "z", examples: [
      { word: "زاۋۇت", image: "https://cdn-icons-png.flaticon.com/128/1995/1995621.png" },
      { word: "زەرەپ", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "زىل", image: "https://cdn-icons-png.flaticon.com/128/1134/1134083.png" }
    ]},
    { letter: "ژ", name: "ZH", pronunciation: "ʒ", examples: [
      { word: "ژالىز", image: "https://cdn-icons-png.flaticon.com/128/3172/3172742.png" },
      { word: "ژۇرنال", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "ژەپە", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" }
    ]},
    { letter: "س", name: "S", pronunciation: "s", examples: [
      { word: "سابا", image: "https://cdn-icons-png.flaticon.com/128/3082/3082044.png" },
      { word: "سەن", image: "https://cdn-icons-png.flaticon.com/128/3011/3011270.png" },
      { word: "سۇ", image: "https://cdn-icons-png.flaticon.com/128/3172/3172742.png" }
    ]},
    { letter: "ش", name: "SH", pronunciation: "ʃ", examples: [
      { word: "شال", image: "https://cdn-icons-png.flaticon.com/128/1134/1134083.png" },
      { word: "شەھەر", image: "https://cdn-icons-png.flaticon.com/128/1995/1995518.png" },
      { word: "شىر", image: "https://cdn-icons-png.flaticon.com/128/1706/1706874.png" }
    ]},
    { letter: "غ", name: "GH", pronunciation: "ʁ, ɣ", examples: [
      { word: "غاز", image: "https://cdn-icons-png.flaticon.com/128/1706/1706874.png" },
      { word: "غەرب", image: "https://cdn-icons-png.flaticon.com/128/3082/3082044.png" },
      { word: "غۇل", image: "https://cdn-icons-png.flaticon.com/128/1142/1142697.png" }
    ]},
    { letter: "ف", name: "F", pronunciation: "f, ɸ", examples: [
      { word: "فابرىكا", image: "https://cdn-icons-png.flaticon.com/128/1995/1995621.png" },
      { word: "فەن", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "فۇتۇس", image: "https://cdn-icons-png.flaticon.com/128/1134/1134083.png" }
    ]},
    { letter: "ق", name: "Q", pronunciation: "q", examples: [
      { word: "قاب", image: "https://cdn-icons-png.flaticon.com/128/3172/3172742.png" },
      { word: "قەلەم", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "قۇش", image: "https://cdn-icons-png.flaticon.com/128/1706/1706874.png" }
    ]},
    { letter: "ك", name: "K", pronunciation: "k", examples: [
      { word: "كابىنەت", image: "https://cdn-icons-png.flaticon.com/128/1995/1995621.png" },
      { word: "كەچ", image: "https://cdn-icons-png.flaticon.com/128/3082/3082044.png" },
      { word: "كۈن", image: "https://cdn-icons-png.flaticon.com/128/3082/3082044.png" }
    ]},
    { letter: "گ", name: "G", pronunciation: "ɡ", examples: [
      { word: "گاز", image: "https://cdn-icons-png.flaticon.com/128/1995/1995621.png" },
      { word: "گەپ", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "گۈل", image: "https://cdn-icons-png.flaticon.com/128/1142/1142697.png" }
    ]},
    { letter: "ڭ", name: "NG", pronunciation: "ŋ", examples: [
      { word: "ڭاڭ", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "ڭەزەپ", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "ڭۇر", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" }
    ]},
    { letter: "ل", name: "L", pronunciation: "l", examples: [
      { word: "لاب", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "لەززەت", image: "https://cdn-icons-png.flaticon.com/128/1570/1570154.png" },
      { word: "لۇغەت", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" }
    ]},
    { letter: "م", name: "M", pronunciation: "m", examples: [
      { word: "ماشىنا", image: "https://cdn-icons-png.flaticon.com/128/1995/1995621.png" },
      { word: "مەكتەپ", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "مۇز", image: "https://cdn-icons-png.flaticon.com/128/3172/3172742.png" }
    ]},
    { letter: "ن", name: "N", pronunciation: "n", examples: [
      { word: "نار", image: "https://cdn-icons-png.flaticon.com/128/1570/1570154.png" },
      { word: "نەرسە", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "نۇر", image: "https://cdn-icons-png.flaticon.com/128/3082/3082044.png" }
    ]},
    { letter: "ھ", name: "H", pronunciation: "h, ɦ", examples: [
      { word: "ھاۋا", image: "https://cdn-icons-png.flaticon.com/128/3082/3082044.png" },
      { word: "ھەم", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "ھۆكۈمەت", image: "https://cdn-icons-png.flaticon.com/128/1995/1995518.png" }
    ]},
    { letter: "ئو", name: "O", pronunciation: "o, ɔ", examples: [
      { word: "ئوت", image: "https://cdn-icons-png.flaticon.com/128/3082/3082044.png" },
      { word: "ئورۇن", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "ئوخشاش", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" }
    ]},
    { letter: "ئۇ", name: "U", pronunciation: "u, ʊ", examples: [
      { word: "ئۇچقۇن", image: "https://cdn-icons-png.flaticon.com/128/3082/3082044.png" },
      { word: "ئۇزۇن", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "ئۇچ", image: "https://cdn-icons-png.flaticon.com/128/1706/1706874.png" }
    ]},
    { letter: "ئۆ", name: "Ö", pronunciation: "ø", examples: [
      { word: "ئۆي", image: "https://cdn-icons-png.flaticon.com/128/1995/1995518.png" },
      { word: "ئۆگەن", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "ئۆچ", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" }
    ]},
    { letter: "ئۈ", name: "Ü", pronunciation: "y, ʏ", examples: [
      { word: "ئۈچ", image: "https://cdn-icons-png.flaticon.com/128/1086/1086930.png" },
      { word: "ئۈزۈم", image: "https://cdn-icons-png.flaticon.com/128/1570/1570154.png" },
      { word: "ئۈمىد", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" }
    ]},
    { letter: "ۋ", name: "W", pronunciation: "w, v", examples: [
      { word: "ۋاقىت", image: "https://cdn-icons-png.flaticon.com/128/3082/3082044.png" },
      { word: "ۋەتەن", image: "https://cdn-icons-png.flaticon.com/128/1995/1995518.png" },
      { word: "ۋەدە", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" }
    ]},
    { letter: "ئې", name: "Ë", pronunciation: "e, ɤ", examples: [
      { word: "ئېغىز", image: "https://cdn-icons-png.flaticon.com/128/3011/3011270.png" },
      { word: "ئېرىق", image: "https://cdn-icons-png.flaticon.com/128/3082/3082044.png" },
      { word: "ئېقىم", image: "https://cdn-icons-png.flaticon.com/128/3082/3082044.png" }
    ]},
    { letter: "ئى", name: "I", pronunciation: "i, ɪ; ɨ, ɯ", examples: [
      { word: "ئىلان", image: "https://cdn-icons-png.flaticon.com/128/1706/1706874.png" },
      { word: "ئىش", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "ئىراق", image: "https://cdn-icons-png.flaticon.com/128/3082/3082044.png" }
    ]},
    { letter: "ي", name: "Y", pronunciation: "j", examples: [
      { word: "ياغاچ", image: "https://cdn-icons-png.flaticon.com/128/1142/1142697.png" },
      { word: "يېڭى", image: "https://cdn-icons-png.flaticon.com/128/2936/2936886.png" },
      { word: "يۇرت", image: "https://cdn-icons-png.flaticon.com/128/1995/1995518.png" }
    ]}
  ];

  // === ئاۋاز ئىقتىدارى ===
  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    } else {
      alert("بۇ براۇزېر ئاۋازنى قوللىمايدۇ.");
    }
  };

  // === ھەرپ تەپسىلاتىنى كۆرسىتىش ===
  const showDetails = (item) => {
    setSelectedLetter(item);
  };

  // === ئويۇن قۇرۇش ===
  const allWords = [];
  lettersData.forEach(item => {
    item.examples.forEach(ex => allWords.push({ word: ex.word, image: ex.image }));
  });

  const startGame = () => {
    const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
    const options = [randomWord.word];
    
    while (options.length < 4) {
      const w = allWords[Math.floor(Math.random() * allWords.length)].word;
      if (!options.includes(w)) options.push(w);
    }
    
    options.sort(() => Math.random() - 0.5);
    setCurrentQuestion({ ...randomWord, options });
    setShowNextButton(false);
  };

  const checkAnswer = (selected) => {
    setGameAttempts(gameAttempts + 1);
    if (selected === currentQuestion.word) {
      setGameScore(gameScore + 1);
      setTimeout(() => startGame(), 1000);
    } else {
      setShowNextButton(true);
    }
  };

  // === ئىلىببە ئويۇنى ===
  const startEggGame = () => {
    setEggGameStarted(true);
    setOpenedEggs([]);
    setCurrentEgg(null);
    setShowEggContent(false);
    setIsFullscreen(false);
    
    // 32 ھەرپنى راندوم تەرتىپتە تەييارلاش
    const shuffledLetters = [...lettersData]
      .sort(() => Math.random() - 0.5)
      .slice(0, 12); // 12 تا توخۇم بىلەن باشلايمىز
    
    // توخۇملارنىڭ ئورنىنى بەلگىلەش
    const positions = shuffledLetters.map((letter, index) => ({
      id: index,
      letter: letter,
      position: {
        top: Math.random() * 60 + 15, // 15% - 75% ئارىسى
        left: Math.random() * 65 + 15, // 15% - 80% ئارىسى
        rotation: Math.random() * 30 - 15 // -15 دىن 15 گىچە بۇرۇلۇش
      },
      isOpened: false
    }));
    
    setEggPositions(positions);
  };

  const openEgg = (egg) => {
    if (openedEggs.includes(egg.id)) return;
    
    setCurrentEgg(egg);
    setShowEggContent(true);
    
    // يېڭى ئاچقان توخۇمنى قوشۇش
    setOpenedEggs(prev => [...prev, egg.id]);
    
    // 3 سېكۇنتتىن كېيىن ئەسلىگە قايتىش
    setTimeout(() => {
      setShowEggContent(false);
    }, 3000);
  };

  const resetEggGame = () => {
    setEggGameStarted(false);
    setEggPositions([]);
    setOpenedEggs([]);
    setCurrentEgg(null);
    setShowEggContent(false);
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // === رەسىم قوشۇش ===
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        setUploadResult("رەسىم مۇۋەپپەقىيەتلىك قوشۇلدى!");
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    startGame();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-700 mb-4">
            ئۇيغۇرچە ئۈگىنىش
          </h1>
          <p className="text-2xl md:text-3xl text-brown-700">
            32 ھەرپ • خەلقئارالىق فونېتىكا • ئويۇن
          </p>
        </header>

        {/* تابلار */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { id: 'alphabet', label: 'ھەرپلەر', icon: BookOpen },
            { id: 'game', label: 'ئويۇن', icon: GamepadIcon },
            { id: 'alphabet-chart', label: 'ئىلىببە ئويۇنى', icon: BookOpen },
            { id: 'upload', label: 'رەسىم قوشۇش', icon: Upload }
          ].map(tab => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-amber-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-amber-700 shadow-md hover:shadow-lg'
                }`}
              >
                <IconComponent size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ھەرپ تاللاش بۆلۈمى */}
        {activeTab === 'alphabet' && (
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* سول تەرەپ: ھەرپ كارتىلىرى */}
              <div className="flex-1">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {lettersData.map((item, index) => (
                    <div
                      key={item.letter}
                      onClick={() => showDetails(item)}
                      className={`bg-white rounded-xl p-4 text-center cursor-pointer transition-all hover:scale-105 shadow-lg border-2 ${
                        selectedLetter?.letter === item.letter 
                          ? 'border-amber-500 scale-110' 
                          : 'border-amber-200'
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${
                          ['#ff9a9e', '#a1c4fd', '#ffecd2', '#84fab0', '#d4fc79', '#a6c0fe'][index % 6]
                        }, ${
                          ['#fad0c4', '#c2e9fb', '#fcb69f', '#8fd3f4', '#96e6a1', '#f68084'][index % 6]
                        })`,
                        height: '120px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <div className="text-3xl font-bold text-gray-800">{item.letter}</div>
                      <div className="text-sm text-gray-700 mt-1">{item.name}</div>
                      <div className="text-xs text-gray-600 mt-1">{item.pronunciation}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ئوڭ تەرەپ: چوڭ ھەرپ ۋە ئوقۇلۇشى */}
              <div className="lg:w-96 bg-white rounded-2xl shadow-xl p-8 border-2 border-amber-300">
                <div className="text-center">
                  <div className="text-9xl font-bold text-red-700 mb-6 min-h-48 flex items-center justify-center">
                    {selectedLetter ? selectedLetter.letter : 'ھەرپ تاللاڭ'}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-brown-800">
                      {selectedLetter ? `${selectedLetter.letter} — ${selectedLetter.name}` : 'تاللانغان ھەرپ'}
                    </h3>
                    
                    <div className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent my-6"></div>
                    
                    <div className="text-lg text-gray-600">خەلقئارالىق فونېتىكا:</div>
                    <div className="text-2xl font-bold text-blue-700 bg-blue-50 rounded-lg py-2">
                      {selectedLetter?.pronunciation}
                    </div>
                    
                    <button
                      onClick={() => speak(selectedLetter?.name || '')}
                      className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 mx-auto"
                    >
                      <Volume2 size={18} />
                      تەلەپپۇزنى ئاڭلا
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* تەپسىلات بۆلۈمى */}
            {selectedLetter && (
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
                <h2 className="text-3xl font-bold text-center text-brown-800 mb-8">
                  {selectedLetter.letter} — {selectedLetter.name} — {selectedLetter.pronunciation}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedLetter.examples.map((example, idx) => (
                    <div key={idx} className="text-center">
                      <img
                        src={example.image}
                        alt={example.word}
                        className="w-32 h-32 object-cover rounded-xl mx-auto border-2 border-amber-300 shadow-md"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/128?text=?';
                        }}
                      />
                      <div className="text-xl font-bold text-gray-800 mt-3">{example.word}</div>
                      <button
                        onClick={() => speak(example.word)}
                        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 mx-auto"
                      >
                        <Volume2 size={16} />
                        ئوقۇ
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ئويۇن بۆلۈمى */}
        {activeTab === 'game' && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border-2 border-amber-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-brown-800">
                بۇ رەسىم نېمە؟
              </h2>
              <div className="text-lg font-bold bg-amber-100 px-4 py-2 rounded-lg">
                نەتىجە: {gameScore}/{gameAttempts}
              </div>
            </div>
            
            {currentQuestion && (
              <>
                <img
                  src={currentQuestion.image}
                  alt="ئويۇن رەسىمى"
                  className="w-64 h-64 object-cover rounded-xl mx-auto border-2 border-amber-400 shadow-lg"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/256?text=رەسىم+يوق';
                  }}
                />
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {currentQuestion.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => checkAnswer(option)}
                      className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors font-bold text-lg"
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                {showNextButton && (
                  <button
                    onClick={startGame}
                    className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors flex items-center gap-2 mx-auto"
                  >
                    <ArrowRight size={20} />
                    كېيىنكى سوئال
                  </button>
                )}
              </>
            )}
          </div>
        )}

        {/* ئىلىببە ئويۇنى بۆلۈمى */}
        {activeTab === 'alphabet-chart' && (
          <div className={`bg-white rounded-2xl shadow-xl border-2 border-amber-300 transition-all duration-300 ${
            isFullscreen ? 'fixed inset-4 z-50' : 'p-6'
          }`}>
            <div className={`${isFullscreen ? 'p-6 h-full' : ''}`}>
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-brown-800 mb-4">
                  ئىلىببە ئويۇنى - توخۇم چىقىش ئويۇنى
                </h2>
                
                {!eggGameStarted ? (
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600">
                      توخۇملارنى چېكىپ، ئىچىدىكى ئۇيغۇر ھەرپلىرىنى ئېچىڭ!
                    </p>
                    <button
                      onClick={startEggGame}
                      className="px-8 py-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors text-xl font-bold flex items-center gap-2 mx-auto"
                    >
                      <GamepadIcon size={24} />
                      ئويۇننى باشلاش
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 h-full">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <button
                          onClick={resetEggGame}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                        >
                          <RotateCcw size={18} />
                          قايتا باشلاش
                        </button>
                        <button
                          onClick={toggleFullscreen}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                        >
                          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                          {isFullscreen ? 'كىچىكلەت' : 'چوڭايت'}
                        </button>
                      </div>
                      <div className="text-lg font-bold bg-amber-100 px-4 py-2 rounded-lg">
                        ئېچىلغان توخۇملار: {openedEggs.length}/{eggPositions.length}
                      </div>
                    </div>

                    {/* توخۇم ئويۇنى سەھنىسى */}
                    <div 
                      ref={gameContainerRef}
                      className={`relative bg-gradient-to-b from-blue-100 to-green-100 rounded-2xl border-4 border-amber-200 overflow-hidden ${
                        isFullscreen ? 'h-[calc(100vh-200px)]' : 'min-h-[600px] p-8'
                      }`}
                    >
                      {/* توخۇملار */}
                      {eggPositions.map(egg => (
                        <div
                          key={egg.id}
                          onClick={() => openEgg(egg)}
                          className={`absolute cursor-pointer transition-all duration-300 ${
                            openedEggs.includes(egg.id) 
                              ? 'opacity-50 scale-75' 
                              : 'hover:scale-125 hover:rotate-6'
                          }`}
                          style={{
                            top: `${egg.position.top}%`,
                            left: `${egg.position.left}%`,
                            transform: `rotate(${egg.position.rotation}deg)`
                          }}
                        >
                          <div className="relative">
                            {/* چوڭ توخۇم رەسىمى */}
                            <img
                              src="https://cdn-icons-png.flaticon.com/128/3507/3507896.png"
                              alt="توخۇم"
                              className={`object-contain drop-shadow-lg ${
                                isFullscreen ? 'w-32 h-40' : 'w-24 h-32'
                              }`}
                            />
                            {/* ئېچىلغان توخۇملارغا چېكىمە بەلگىسى */}
                            {openedEggs.includes(egg.id) && (
                              <div className="absolute inset-0 bg-green-500 bg-opacity-30 rounded-full flex items-center justify-center">
                                <div className="text-white font-bold text-lg bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
                                  ✓
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}

                      {/* توخۇم ئېچىلغاندا كۆرسىتىدىغان مەزمۇن */}
                      {showEggContent && currentEgg && (
                        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 transform scale-125 transition-transform duration-500">
                            <div className="text-center">
                              {/* چوڭ ھەرپ */}
                              <div className="text-9xl font-bold text-red-700 mb-6">
                                {currentEgg.letter.letter}
                              </div>
                              
                              <div className="space-y-4">
                                <h3 className="text-3xl font-bold text-brown-800">
                                  {currentEgg.letter.letter} — {currentEgg.letter.name}
                                </h3>
                                
                                <div className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent my-6"></div>
                                
                                <div className="text-xl text-gray-600">خەلقئارالىق فونېتىكا:</div>
                                <div className="text-2xl font-bold text-blue-700 bg-blue-50 rounded-lg py-3">
                                  {currentEgg.letter.pronunciation}
                                </div>
                                
                                <button
                                  onClick={() => speak(currentEgg.letter.name)}
                                  className="mt-6 px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 mx-auto text-lg"
                                >
                                  <Volume2 size={20} />
                                  تەلەپپۇزنى ئاڭلا
                                </button>
                              </div>
                            </div>
                            
                            {/* 3 سېكۇنت كۈتۈش بارانى */}
                            <div className="mt-8 bg-gray-200 rounded-full h-3">
                              <div 
                                className="bg-amber-500 h-3 rounded-full transition-all duration-3000"
                                style={{ width: '100%' }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ھەممە توخۇم ئېچىلغاندا */}
                      {openedEggs.length === eggPositions.length && eggPositions.length > 0 && (
                        <div className="absolute inset-0 bg-green-500 bg-opacity-30 flex items-center justify-center">
                          <div className="bg-white rounded-2xl p-8 text-center max-w-md">
                            <div className="text-5xl font-bold text-green-600 mb-6">
                              تەبرىكلەيمىز! 🎉
                            </div>
                            <p className="text-2xl text-gray-700 mb-6">
                              سىز بارلىق توخۇملارنى ئېچىپ بولدىڭىز!
                            </p>
                            <button
                              onClick={startEggGame}
                              className="px-8 py-4 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-xl font-bold"
                            >
                              يەنە ئويناڭ
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* ئاستىدىكى ئۇيغۇر ئېلىپبە جەدىۋىلى */}
                    <div className={`bg-white rounded-xl p-6 border-2 border-amber-200 ${
                      isFullscreen ? 'mt-4' : ''
                    }`}>
                      <h3 className="text-2xl font-bold text-center text-brown-800 mb-6">
                        ئۇيغۇر ئېلىپبە جەدىۋىلى
                      </h3>
                      <div className="flex justify-center">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/UEY_ULY_Elipbesi_Kichik.jpg" 
                          alt="ئۇيغۇر ئېلىپبە جەدىۋىلى"
                          className="max-w-full h-auto rounded-lg shadow-lg"
                          style={{ 
                            maxWidth: isFullscreen ? '90%' : '100%',
                            maxHeight: isFullscreen ? '400px' : '300px'
                          }}
                        />
                      </div>
                    </div>

                    {/* ئېچىلغان ھەرپلەرنى كۆرسىتىش */}
                    {openedEggs.length > 0 && (
                      <div className="bg-amber-50 rounded-xl p-4">
                        <h3 className="text-xl font-bold text-brown-800 mb-3 text-center">
                          ئېچىلغان ھەرپلەر:
                        </h3>
                        <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                          {eggPositions
                            .filter(egg => openedEggs.includes(egg.id))
                            .map(egg => (
                              <div
                                key={egg.id}
                                className="bg-white rounded-lg p-3 text-center shadow-md border border-amber-200 hover:scale-105 transition-transform"
                              >
                                <div className="text-3xl font-bold text-red-700">
                                  {egg.letter.letter}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
                                  {egg.letter.name}
                                </div>
                                <div className="text-xs text-blue-600 mt-1">
                                  {egg.letter.pronunciation}
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* رەسىم قوشۇش بۆلۈمى */}
        {activeTab === 'upload' && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border-2 border-amber-300">
            <h2 className="text-3xl font-bold text-center text-brown-800 mb-8">
              ئۆز رەسىمىڭىزنى قوشۇڭ
            </h2>
            
            <p className="text-center text-gray-600 mb-6">
              يەرلىك رەسىم فايلىنى تاللاڭ:
            </p>
            
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-4 border-2 border-dashed border-amber-300 rounded-xl mb-6"
            />
            
            {uploadedImage && (
              <>
                <img
                  src={uploadedImage}
                  alt="يۈكلەنگەن رەسىم"
                  className="w-48 h-48 object-contain mx-auto border-2 border-amber-300 rounded-xl mb-4"
                />
                <p className="text-center text-green-600 font-bold">
                  {uploadResult}
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UyghurAlphabetTab;