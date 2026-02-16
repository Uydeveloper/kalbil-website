import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpenIcon, 
  PencilIcon, 
  SpeakerWaveIcon,
  SparklesIcon,
  TrophyIcon,
  AcademicCapIcon,
  PuzzlePieceIcon,
  HeartIcon,
  GlobeAltIcon,
  MusicalNoteIcon,
  LightBulbIcon,
  ArrowPathIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  CheckIcon,
  PlayIcon,
  StopIcon
} from '@heroicons/react/24/solid';

const LiteratureComponent = () => {
  const [currentCategory, setCurrentCategory] = useState('stories');
  const [currentStory, setCurrentStory] = useState(0);
  const [rhymeInput, setRhymeInput] = useState('');
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [gameType, setGameType] = useState('');
  const [currentAlphabet, setCurrentAlphabet] = useState('ا');
  const [userStory, setUserStory] = useState('');
  const [animation, setAnimation] = useState('');
  const [readAloud, setReadAloud] = useState(false);
  const [discoveredWords, setDiscoveredWords] = useState([]);
  const [currentRiddle, setCurrentRiddle] = useState(0);
  const [currentProverb, setCurrentProverb] = useState(0);
  const [wordGameLetters, setWordGameLetters] = useState(['ا', 'ب', 'ت']);
  const [wordGameAttempt, setWordGameAttempt] = useState('');
  const [matchGameScore, setMatchGameScore] = useState(0);
  const [selectedPoem, setSelectedPoem] = useState(0);
  const [writingMode, setWritingMode] = useState(false);
  const [currentWritingLetter, setCurrentWritingLetter] = useState('ا');
  const [writingScore, setWritingScore] = useState(0);
  const [alphabetOrderGame, setAlphabetOrderGame] = useState([]);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [currentAudioLetter, setCurrentAudioLetter] = useState('');
  const [recognizedLetter, setRecognizedLetter] = useState('');
  const [drawingHistory, setDrawingHistory] = useState([]);
  const [currentDrawing, setCurrentDrawing] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [writingFeedback, setWritingFeedback] = useState('');
  
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const categories = {
    stories: {
      title: 'ھېكايە دۇنياسى',
      emoji: '📚',
      color: 'from-purple-500 to-pink-500'
    },
    poems: {
      title: 'شېئىر باغچىسى',
      emoji: '✍️',
      color: 'from-blue-500 to-cyan-500'
    },
    alphabets: {
      title: 'ئەلىفبا ئويۇنلىرى',
      emoji: '🔤',
      color: 'from-green-500 to-emerald-500'
    },
    riddles: {
      title: 'تىپشماقلار',
      emoji: '🧩',
      color: 'from-yellow-500 to-orange-500'
    },
    games: {
      title: 'سۆز ئويۇنلىرى',
      emoji: '🎮',
      color: 'from-red-500 to-pink-500'
    },
    culture: {
      title: 'ئۇيغۇر ئەدەبىياتى',
      emoji: '🌍',
      color: 'from-indigo-500 to-purple-500'
    }
  };

  const stories = {
    uyghur: [
      {
        id: 1,
        title: 'چوچقىنىڭ سەپىرى',
        characters: ['🐰', '🐢'],
        content: 'بىر چوچقا ۋە بىر تاشپاقا يېرىش مۇسابىقىسى قىلىدۇ. چوچقا ئۆزىنىڭ تېز يۈرەلەيدىغانلىقىغا ئىشەنگەن ھالدا مۇسابىقىنى ئازراقلا ئەھمىيەت بەرمەيدۇ. تاشپاقا بولسا ئاستا-ئاستا، ئەمما توختىماي ئىلگىرىلەيدۇ. ئاخىرىدا تاشپاقا مۇسابىقىنى يېڭىدۇ، چۈنكى چوچقا يول بويىدا ئۇخۇلا قويىدۇ.',
        moral: 'ئاستا-ئاستا ئىشلەش مۇۋەپپەقىيەت كەلتۈرىدۇ',
        author: 'ئەيسا ئەلپ ئەتەك',
        ageGroup: '3-6 ياش',
        length: 'قىسقا',
        lessons: ['سەۋر قىلىش', 'ئەستايىدىللىق', 'مەسئۇلىيەتچانلىق'],
        interactive: true,
        pages: [
          'بىر چوچقا ۋە بىر تاشپاقا دۆست ئىدى.',
          'بىر كۈنى ئۇلار يېرىش مۇسابىقىسى قىلىشقا قارار قىلدى.',
          'چوچقا ئۆزىنىڭ تېز يۈرەلەيدىغانلىقىغا ئىشىنىپ، ئالدىراپ كەتتى.',
          'تاشپاقا ئاستا-ئاستا ئەمما توختىماي ئىلگىرىلەيدى.',
          'چوچقا يول بويىدا ئۇخۇلا قويۇپ، تاشپاقا ئۇنى ئۆتۈپ كەتتى.',
          'تاشپاقا مۇسابىقىنى يېڭىپ، ھەممىگە سەۋر قىلىشنىڭ مۇھىملىقىنى ئۆگەتتى.'
        ]
      },
      {
        id: 2,
        title: 'ئارسلان ۋە كىچىك كەپتەر',
        characters: ['🦁', '🐭'],
        content: 'بىر كۈنى ئارسلان ئۇخلاۋاتقاندا، بىر كىچىك كەپتەر ئۇنىڭ ئەگەشىگە چىقىپ قالىدۇ. ئارسلان ئويغىنىپ كىچىك كەپتەرنى چوڭقۇر ئىشەنچ بىلەن قويۇپ بېرىدۇ. كېيىنچە ئارسلان تورغا تۇتۇلۇپ قالىدۇ، كىچىك كەپتەر ئارسلاننىڭ تورلارنى چىڭىتىپ قۇتقۇزىدۇ.',
        moral: 'ھەممە كىشىگە ياخشى مۇئامىلە قىلىڭ',
        author: 'مەشھۇر ھېكايە',
        ageGroup: '4-7 ياش',
        length: 'ئوتتۇرا',
        lessons: ['ياردەمچىلىك', 'ياخشىلىق', 'مىننەتدارچىلىق'],
        interactive: true,
        pages: [
          'ئارسلان ئورماننىڭ پادىشاھى ئىدى.',
          'بىر كىچىك كەپتەر ئۇنىڭ ئەگەشىگە چىقىپ قالدى.',
          'ئارسلان ياخشىلىق بىلەن كەپتەرنى قويۇپ بەردى.',
          'كېيىن ئارسلان ئوۋچىلارنىڭ تورىغا چۈشۈپ قالدى.',
          'كىچىك كەپتەر تورنى چىڭىتىپ ئارسلاننى قۇتقۇزدى.',
          'ئارسلان ھەممە كىچىك ھايۋانلارغا ياخشى بولۇشنىڭ مۇھىملىقىنى چۈشەندى.'
        ]
      },
      {
        id: 3,
        title: 'سەرخىل بۇلبۇل',
        characters: ['🐦', '🌳', '🌸'],
        content: 'بىر سەرخىل بۇلبۇل گۈزەل ئاۋازى بىلەن ئورماندىكى بارلىق ھايۋانلارنى خۇشال قىلاتتى. بىر كۈنى ئۇ ئاۋازىنى يوقىتىپ قويىدۇ. باشقا ھايۋانلار ئۇنىڭغا ياردەم قىلىپ، ئۇنىڭ ئاۋازىنى قايتا تاپىشىغا ياردەم قىلىدۇ.',
        moral: 'دوستلۇق ۋە ھەمكارلىق مۇھىم',
        author: 'ئۇيغۇر خەلق ھېكايىسى',
        ageGroup: '5-8 ياش',
        length: 'قىسقا',
        lessons: ['دوستلۇق', 'ھەمكارلىق', 'ساداقەت'],
        interactive: true,
        pages: [
          'سەرخىل بۇلبۇل ئورماننىڭ مەختەرى ئىدى.',
          'ئۇنىڭ گۈزەل ئاۋازى ھەممىنى خۇشال قىلاتتى.',
          'بىر كۈنى ئۇ ئاۋازىنى يوقىتىپ قويدى.',
          'باشقا ھايۋانلار ئۇنىڭغا ياردەم بېرىشكە كەلدى.',
          'ھەممىسى بىرلىكتە ئۇنىڭ ئاۋازىنى ئىزدىدى.',
          'ئاخىرىدا بۇلبۇل ئاۋازىنى تاپتى ۋە ھەمكارلىقنىڭ مۇھىملىقىنى ئۆگەندى.'
        ]
      },
      {
        id: 4,
        title: 'ئاق قوڭۇزنىڭ سەپىرى',
        characters: ['🐞', '🌺', '🦋'],
        content: 'كىچىك ئاق قوڭۇز ئۆز ئائىلىسىنى ئىزدەش ئۈچۈن يولدىن چىقىدۇ. يول بويىدا نۇرغۇن دوستلار بىلەن تونۇشىدۇ ۋە ھەر بىرىدىن يېڭى نەرسىلەر ئۆگىنىدۇ. ئاخىرىدا ئۆز ئائىلىسىنى تاپىدۇ ۋە يېڭى دوستلار بىلەن قايتىدۇ.',
        moral: 'سەپەر ۋە ئۆگىنىش مۇھىم',
        author: 'زۆھرە خاتۇن',
        ageGroup: '3-6 ياش',
        length: 'ئوتتۇرا',
        lessons: ['ئۆگىنىش', 'دوستلۇق', 'ئائىلە مۇھەببىتى'],
        interactive: true,
        pages: [
          'كىچىك ئاق قوڭۇز ئائىلىسىنى يوقىتىپ قويدى.',
          'ئۇ ئائىلىسىنى ئىزدەش ئۈچۈن سەپەرگە چىقتى.',
          'يول بويىدا نۇرغۇن دوستلار بىلەن تونۇشتى.',
          'ھەر بىر دوستتىن يېڭى نەرسىلەر ئۆگەندى.',
          'ئاخىرىدا ئائىلىسىنى تاپتى.',
          'ئۇ يېڭى دوستلار ۋە كۆپ نەرسىلەر بىلەن قايتى.'
        ]
      },
      {
        id: 5,
        title: 'سۇ پەرىسى',
        characters: ['🧜‍♀️', '🌊', '🐠'],
        content: 'سۇ پەرىسى دېڭىز ئاستىدا ياشايدۇ، ئەمما ئۇ يەر يۈزىدىكى دۇنيانى كۆرۈشنى ئارزۇ قىلىدۇ. بىر كۈنى ئۇ يەر يۈزىگە چىقىپ، ئىنسان بالىلار بىلەن دوست بولىدۇ. ئۇلار بىرلىكتە نۇرغۇن مەرىپەلىك سەپەرلەرنى باشتىن كەچۈرىدۇ.',
        moral: 'يېڭى نەرسىلەرنى سىناپ بېقىش',
        author: 'دىلناز رەھىم',
        ageGroup: '6-9 ياش',
        length: 'ئۇزۇن',
        lessons: ['قىزىقىش', 'دوستانە مۇناسىۋەت', 'مەرىپە'],
        interactive: true,
        pages: [
          'سۇ پەرىسى دېڭىز ئاستىدا ياشايدۇ.',
          'ئۇ يەر يۈزىدىكى دۇنيانى كۆرۈشنى ئارزۇ قىلىدۇ.',
          'بىر كۈنى ئۇ يەر يۈزىگە چىقتى.',
          'ئىنسان بالىلار بىلەن دوست بولدى.',
          'ئۇلار بىرلىكتە نۇرغۇن سەپەرلەرنى باشتىن كەچۈردى.',
          'سۇ پەرىسى يېڭى دوستلار ۋە تەجرىبىلەر بىلەن قايتى.'
        ]
      },
      {
        id: 6,
        title: 'ئاق سىلەر ۋە كۈز',
        characters: ['🦢', '🍂', '🌾'],
        content: 'ئاق سىلەر كۈز پەسلى كەلگەندە جەنۇبقا قىشتايدۇ. بىر ياش ئاق سىلەر قىشقا تاقابىل تۇرالمايدۇ، ئەمما دوستلىرىنىڭ ياردىمى بىلەن ئۆزىنىڭ كۈچىنى تاپىدۇ ۋە جەنۇبقا ئۇچۇپ بېرىدۇ.',
        moral: 'ھەمكارلىق ۋە ئۆزىگە ئىشىنىش',
        author: 'تەبىئەت ھېكايىسى',
        ageGroup: '5-8 ياش',
        length: 'ئوتتۇرا',
        lessons: ['ھەمكارلىق', 'ئىشەنچ', 'ماسلىشىش'],
        interactive: true,
        pages: [
          'كۈز كەلگەندە ئاق سىلەر جەنۇبقا قىشتايدۇ.',
          'بىر ياش سىلەر قىشقا تاقابىل تۇرالمايدۇ.',
          'دوستلىرى ئۇنىڭغا ياردەم قىلدى.',
          'ئۇ ئۆزىنىڭ كۈچىنى تاپتى.',
          'ھەممىسى بىرلىكتە جەنۇبقا ئۇچتى.',
          'ياش سىلەر ئۆزىگە ئىشەنچ ۋە دوستلۇقنىڭ مۇھىملىقىنى ئۆگەندى.'
        ]
      }
    ],
    world: [
      {
        id: 7,
        title: 'قىزىل كولومپكا',
        characters: ['🧣', '🐺'],
        content: 'بىر كىچىك قىز ئانىسى ئۈچۈن قىزىل كولومپكا تىككەندە، يول بويىدا بۆرە بىلەن ئۇچرىشىدۇ. ئۇ ئەقىللىق بولۇپ، بۆرەنى ئالدىنىدۇ ۋە ئانىسىغا بىخەتەر يېتىپ بارىدۇ.',
        moral: 'ئەقىل-پاراسەت مۇھىم',
        author: 'شارل پېررا',
        ageGroup: '4-7 ياش',
        length: 'قىسقا',
        lessons: ['زېھىن', 'قورقۇقسىزلىق', 'سەۋر'],
        pages: [
          'كىچىك قىز ئانىسى ئۈچۈن قىزىل كولومپكا تىكەشكە بارىدۇ.',
          'يول بويىدا بۆرە بىلەن ئۇچرىشىدۇ.',
          'ئۇ ئەقىللىق بولۇپ، بۆرەنى ئالدىنىدۇ.',
          'ئانىسىنىڭ ئۆيىگە بىخەتەر يېتىپ بارىدۇ.',
          'ئانىسىغا ھېكايىسىنى سۆزلەپ بېرىدۇ.',
          'ھەممىسى ئەقىل-پاراسەتنىڭ مۇھىملىقىنى چۈشىنىدۇ.'
        ]
      },
      {
        id: 8,
        title: 'ئۈچ چوشقا',
        characters: ['🐷', '🐷', '🐷', '🐺'],
        content: 'ئۈچ چوشقا ئۆز-ئارا پەرقلىق ئۆيلەر قۇرىدۇ. بىرىنىڭ ئۆيى ئاسان يىقىلىدۇ، ئىككىنچىسىنىڭكى ئورتۇنچە، ئۈچىنچىسىنىڭكى كۈچلۈك. بۆرە كەلگەندە، پەقەت ئەڭ كۈچلۈك ئۆي ساقلىنىدۇ.',
        moral: 'ئەستايىدىل ئىش قىلىش',
        author: 'ئەنگلىيە خەلق ھېكايىسى',
        ageGroup: '3-6 ياش',
        length: 'قىسقا',
        lessons: ['ئەستايىدىللىق', 'ئىشەنچ', 'ھەمكارلىق'],
        pages: [
          'ئۈچ چوشقا ئۆز ئۆيلىرىنى قۇرىدۇ.',
          'بىرىنىڭ ئۆيى پاخشىدىن قۇرۇلغان، ئاسان يىقىلىدۇ.',
          'ئىككىنچىسىنىڭكى تاختىدىن، ئورتۇنچە.',
          'ئۈچىنچىسىنىڭكى كىرپىچتىن، كۈچلۈك.',
          'بۆرە كەلگەندە پەقەت كۈچلۈك ئۆي ساقلىنىدۇ.',
          'ھەممىسى ئەستايىدىللىقنىڭ مۇھىملىقىنى ئۆگىنىدۇ.'
        ]
      }
    ]
  };

  const poems = {
    uyghur: [
      {
        title: 'ئاي ۋە يۇلتۇزلار',
        author: 'ئۇيغۇر بالىلار شېئىرى',
        content: `ئاي، ئاي، پارلايدۇ
يۇلتۇزلار جارقىرايدۇ
كىچىكىم ئۇخلىمايدۇ
ئانىسىنى ساقلايدۇ`,
        rhyme: 'دۇ',
        ageGroup: '3-5 ياش',
        theme: 'تۈن ۋە ئائىلە',
        length: 'قىسقا'
      },
      {
        title: 'بەھار كەلدى',
        author: 'خەلق شېئىرى',
        content: `بەھار كەلدى، گۈللەر ئېچىلدى
بۇلبۇللار ناخشا ئېيتتى
كىچىكىم كۈلدى-كۈلدى
ھاۋا يېڭىدى، دۇنيا گۈزەللىدى`,
        rhyme: 'دى',
        ageGroup: '4-6 ياش',
        theme: 'پاسىللار',
        length: 'قىسقا'
      },
      {
        title: 'مەكتەپ',
        author: 'مۇئەللىمە ئەسرە',
        content: `مەكتەپ، مەكتەپ، گۈزەل مەكتەپ
ھەممىمىز بارايمىز مەكتەپ
ئوقۇيمىز، يازىمىز، ئويلىنىمىز
ئەقىل-پاراسىتىمىز ئۆسىدۇ`,
        rhyme: 'پ',
        ageGroup: '5-8 ياش',
        theme: 'مەكتەپ ۋە ئۆگىنىش',
        length: 'ئوتتۇرا'
      },
      {
        title: 'سەپەرگە چىقاي',
        author: 'بالىلار شائىرى',
        content: `سەپەرگە چىقاي، دۇنيانى كۆرەي
تاغلارنى، دەريالارنى، دېڭىزلارنى
ھەممىنى بىر-بىر كۆرەي
سەپەرگە چىقاي، بىلىملىنىمەن`,
        rhyme: 'ي',
        ageGroup: '6-9 ياش',
        theme: 'سەپەر ۋە بىلىم',
        length: 'ئوتتۇرا'
      },
      {
        title: 'دوستلۇق',
        author: 'ئەخلاق شېئىرى',
        content: `دوستلۇق، دوستلۇق، قىممەتلىك نەرسە
ئەڭ گۈزەل بايلىق، ئەڭ گۈزەل چىراق
دوستلار بىلەن بىللە بولساق
ھەممە قىيىنچىلىقتىن ئۆتەلەيمىز`,
        rhyme: 'ق',
        ageGroup: '7-10 ياش',
        theme: 'دوستلۇق ۋە ھەمكارلىق',
        length: 'ئۇزۇن'
      },
      {
        title: 'تۇمار ناخشىسى',
        author: 'ئۇيغۇر ئەنئەنىسى',
        content: `تۇمار ئوينايمىز، كۈلۈپ ئوينايمىز
قول قوشۇپ ناخشا، ئاي ئېيتايمىز
دوستلار بىلەن بىللە
ھەممىمىز بەختلىك`,
        rhyme: 'ي',
        ageGroup: '4-7 ياش',
        theme: 'ئويۇن ۋە ناخشا',
        length: 'قىسقا'
      },
      {
        title: 'ياز كەلدى',
        author: 'پاسىل شېئىرى',
        content: `ياز كەلدى، گۈللەر چېچەك ئېچتى
ھەممە ئورمانلار يېشىل كېيىندى
بالىلار چوڭقۇر، ئويۇنغا كىردى
تەبىئەت بىزگە خۇشاللىق بېغىشلىدى`,
        rhyme: 'دى',
        ageGroup: '5-8 ياش',
        theme: 'پاسىللار',
        length: 'ئوتتۇرا'
      },
      {
        title: 'ئانا سۆزى',
        author: 'ئائىلە شېئىرى',
        content: `ئانا سۆزى - ئەڭ تەتۈر سۆز
ئانا قۇچىقى - ئەڭ ئىسسىق قۇچاق
ئانا مۇھەببىتى - ئەڭ چوڭقۇر دېڭىز
ئانا، سېنى ھەرگىز ئۇنۇتمايمەن`,
        rhyme: 'ز',
        ageGroup: '6-9 ياش',
        theme: 'ئانا مۇھەببىتى',
        length: 'ئوتتۇرا'
      },
      {
        title: 'كېچە ناخشىسى',
        author: 'تۈن شېئىرى',
        content: `كېچە كەلدى، يۇلتۇزلار پارلىدى
ئاي ئىنسانلارغا مەسلىھەت بېرىدۇ
بالىلار ئۇخلىغاندا، چۈش كۆرىدۇ
كېچە - دىنىمىزنىڭ ئەڭ گۈزەل سەھەرى`,
        rhyme: 'دى',
        ageGroup: '7-10 ياش',
        theme: 'تۈن ۋە چۈش',
        length: 'ئوتتۇرا'
      },
      {
        title: 'ۋەتەن ھەققىدە',
        author: 'ۋەتەنپەرۋەرلىك شېئىرى',
        content: `ۋەتەن دېگەن - ئانا تۇپراق
ۋەتەن دېگەن - ئەزىز ئاتا
ۋەتەن دېگەن - گۈزەل مەكتەپ
ۋەتەننى ھەرگىز ئۇنۇتمايمەن`,
        rhyme: 'پ',
        ageGroup: '8-12 ياش',
        theme: 'ۋەتەنپەرۋەرلىك',
        length: 'ئۇزۇن'
      }
    ],
    rhymeGames: [
      {
        prompt: 'سۇ ئۈستىدە ...',
        answer: 'ئۇچىدۇ',
        options: ['ئۇچىدۇ', 'يۈرىدۇ', 'ئۇخلايدۇ', 'كۈلۈپ كېتىدۇ'],
        explanation: 'قۇشلار سۇ ئۈستىدە ئۇچىدۇ'
      },
      {
        prompt: 'چېچەك ئېچىپ ...',
        answer: 'كۈلدى',
        options: ['كۈلدى', 'ئاچتى', 'يىغلىدى', 'ئۇخلىدى'],
        explanation: 'چېچەكلەر ئېچىلغاندا گۈزەل كۆرۈنىدۇ'
      },
      {
        prompt: 'كىتاب ئوقۇپ ...',
        answer: 'ئۆگەندى',
        options: ['ئۆگەندى', 'ئويلىدى', 'كۈلدى', 'يىغلىدى'],
        explanation: 'كىتاب ئوقۇش بىلەن بىلىم ئۆگىنىمىز'
      },
      {
        prompt: 'بۇلبۇل ناخشا ...',
        answer: 'ئېيتتى',
        options: ['ئېيتتى', 'ئۇچتى', 'ئۇخلىدى', 'يىغلىدى'],
        explanation: 'بۇلبۇللار گۈزەل ناخشا ئېيتىدۇ'
      },
      {
        prompt: 'بالىلار ئويۇن ...',
        answer: 'ئوينايدۇ',
        options: ['ئوينايدۇ', 'ئۇخلايدۇ', 'يىغلايدۇ', 'ئۆگىنىدۇ'],
        explanation: 'بالىلار ئويۇن ئويناپ بېيىدۇ'
      }
    ]
  };

  const alphabets = {
    basic: [
      { letter: 'ا', name: 'ئا', sound: 'ئا', word: 'ئانا', emoji: '👩', order: 1 },
      { letter: 'ئە', name: 'ئە', sound: 'ئە', word: 'ئەينەك', emoji: '👓', order: 2 },
      { letter: 'ب', name: 'ب', sound: 'ب', word: 'بەلىق', emoji: '🐟', order: 3 },
      { letter: 'پ', name: 'پ', sound: 'پ', word: 'پىل', emoji: '🐘', order: 4 },
      { letter: 'ت', name: 'ت', sound: 'ت', word: 'تەخسە', emoji: '🪑', order: 5 },
      { letter: 'ج', name: 'ج', sound: 'ج', word: 'جام', emoji: '🥛', order: 6 },
      { letter: 'چ', name: 'چ', sound: 'چ', word: 'چېچەك', emoji: '🌸', order: 7 },
      { letter: 'خ', name: 'خ', sound: 'خ', word: 'خورما', emoji: '🌴', order: 8 },
      { letter: 'د', name: 'د', sound: 'د', word: 'دەرەخ', emoji: '🌳', order: 9 },
      { letter: 'ر', name: 'ر', sound: 'ر', word: 'روزى', emoji: '🍇', order: 10 },
      { letter: 'ز', name: 'ز', sound: 'ز', word: 'زېمىن', emoji: '🌍', order: 11 },
      { letter: 'ژ', name: 'ژ', sound: 'ژ', word: 'ژۇرنال', emoji: '📘', order: 12 },
      { letter: 'س', name: 'س', sound: 'س', word: 'سۇ', emoji: '💧', order: 13 },
      { letter: 'ش', name: 'ش', sound: 'ش', word: 'شام', emoji: '🕯️', order: 14 },
      { letter: 'غ', name: 'غ', sound: 'غ', word: 'غول', emoji: '🪵', order: 15 },
      { letter: 'ف', name: 'ف', sound: 'ف', word: 'فەن', emoji: '🔧', order: 16 },
      { letter: 'ق', name: 'ق', sound: 'ق', word: 'قۇش', emoji: '🐦', order: 17 },
      { letter: 'ك', name: 'ك', sound: 'ك', word: 'كىتاب', emoji: '📚', order: 18 },
      { letter: 'گ', name: 'گ', sound: 'گ', word: 'گۈل', emoji: '🌹', order: 19 },
      { letter: 'ڭ', name: 'ڭ', sound: 'ڭ', word: 'چاڭ', emoji: '🌫️', order: 20 },
      { letter: 'ل', name: 'ل', sound: 'ل', word: 'لېۋا', emoji: '🏳️', order: 21 },
      { letter: 'م', name: 'م', sound: 'م', word: 'ماشىنا', emoji: '🚗', order: 22 },
      { letter: 'ن', name: 'ن', sound: 'ن', word: 'نۇر', emoji: '💡', order: 23 },
      { letter: 'ھ', name: 'ھ', sound: 'ھ', word: 'ھاۋا', emoji: '🌬️', order: 24 },
      { letter: 'ئو', name: 'ئو', sound: 'ئو', word: 'ئوت', emoji: '🔥', order: 25 },
      { letter: 'ئۇ', name: 'ئۇ', sound: 'ئۇ', word: 'ئۇچقۇچ', emoji: '✈️', order: 26 },
      { letter: 'ئۆ', name: 'ئۆ', sound: 'ئۆ', word: 'ئۆي', emoji: '🏠', order: 27 },
      { letter: 'ئۈ', name: 'ئۈ', sound: 'ئۈ', word: 'ئۈزۈم', emoji: '🍇', order: 28 },
      { letter: 'ۋ', name: 'ۋ', sound: 'ۋ', word: 'ۋەتەن', emoji: '🇺🇾', order: 29 },
      { letter: 'ئې', name: 'ئې', sound: 'ئې', word: 'ئېتىز', emoji: '🌾', order: 30 },
      { letter: 'ئى', name: 'ئى', sound: 'ئى', word: 'ئىتلار', emoji: '🐕', order: 31 },
      { letter: 'ي', name: 'ي', sound: 'ي', word: 'يول', emoji: '🛣️', order: 32 }
    ],
    games: [
      {
        type: 'match',
        title: 'ھەرپ-سۆز ماسلىشىش',
        description: 'ھەرپنى ئۇنىڭ سۆزى بىلەن ماسلاشتۇرۇڭ',
        emoji: '🧩',
        active: true
      },
      {
        type: 'order',
        title: 'ھەرپ تەرتىپى',
        description: 'ھەرپلەرنى توغرا تەرتىپتە تىزىڭ',
        emoji: '🔠',
        active: true
      },
      {
        type: 'sound',
        title: 'ئاۋاز تونۇش',
        description: 'ھەرپنىڭ ئاۋازىنى ئاڭلاپ تونۇڭ',
        emoji: '🔊',
        active: true
      },
      {
        type: 'write',
        title: 'ھەرپ يېزىش',
        description: 'ھەرپلەرنى توغرا يېزىش ئۆگىنىڭ',
        emoji: '✍️',
        active: true
      }
    ]
  };

  const riddles = [
    {
      question: 'ئوچۇق-ئوچۇق ئىچىدە، ئىچىدىكى يوق؟',
      answer: 'ساندۇق',
      hint: 'كىيىم-كېچەك قويىدىغان نەرسە',
      category: 'كىيىم-كېچەك',
      difficulty: 'easy',
      explanation: 'ساندۇقنىڭ ئىچى ھەر ۋاقىت بوش ئەمەس، كىيىم-كېچەك تېكىلگەندە تولىدۇ'
    },
    {
      question: 'كېچە كەلسە كۆرۈنىمەن، كۈندۈز كەلسە يوقۇلىمەن؟',
      answer: 'يۇلتۇز',
      hint: 'ئاسماندا پارقىرايدۇ',
      category: 'ئاسمان',
      difficulty: 'easy',
      explanation: 'يۇلتۇزلار كېچەلا كۆرۈنىدۇ، كۈندۈز كۈن نۇرىدىن يوشۇرۇن بولىدۇ'
    },
    {
      question: 'بىر ئادەمنىڭ ئىككى كۆزى بار، ئىككى ئادەمنىڭ بىر كۆزى بار؟',
      answer: 'تاق تۆگە',
      hint: 'ساھرىدا يۈرىدۇ',
      category: 'ھايۋانلار',
      difficulty: 'medium',
      explanation: 'تاق تۆگىنىڭ ئىككى كۆزى بار، ئىككى تۆگىنىڭ بىر-بىر كۆزى بولسا جەمئىي ئىككى كۆز بولىدۇ'
    },
    {
      question: 'ئاتا-ئانىسى يوق، ئۆسمۈرى كۆپ؟',
      answer: 'ئۇرۇق',
      hint: 'ئۆسۈملۈكنىڭ باشلىنىشى',
      category: 'ئۆسۈملۈكلەر',
      difficulty: 'medium',
      explanation: 'ئۇرۇق ئۆسۈملۈكنىڭ باشلىنىشى، ئۇنىڭ ئاتا-ئانىسى يوق ئەمما نۇرغۇن ئۆسمۈر چىقىدۇ'
    },
    {
      question: 'ئۇنىڭ ئايىقى بار ئەمما يۈرمەيدۇ، ئىككى قۇلى بار ئەمما ئىشلەتمەيدۇ؟',
      answer: 'ئورۇندۇق',
      hint: 'ئولتۇرۇش ئۈچۈن',
      category: 'ئەشيا',
      difficulty: 'easy',
      explanation: 'ئورۇندۇقنىڭ ئايىقى بار ئەمما يۈرمەيدۇ، قۇللىرى يوق دەپ قارىلىدۇ'
    },
    {
      question: 'سۆزىسىز سۆزلەيدۇ، قۇلىسىز يازىدۇ؟',
      answer: 'كومپيۇتېر',
      hint: 'زامانىۋى ئۈسكۈنە',
      category: 'ئەشيا',
      difficulty: 'medium',
      explanation: 'كومپيۇتېر سۆزسىز سۆزلەيدۇ (تېكىست كۆرسىتىدۇ)، قۇلسىز يازىدۇ (كىبورد ئارقىلىق)'
    },
    {
      question: 'ھەممە ئىشنى كۆرىدۇ، ئۆزىنى كۆرەلمەيدۇ؟',
      answer: 'ئەينەك',
      hint: 'چۈشەنگەن شىشە',
      category: 'ئەشيا',
      difficulty: 'easy',
      explanation: 'ئەينەك باشقىلارنى كۆرسىتىدۇ، ئەمما ئۆزىنى كۆرسىتەلمەيدۇ'
    },
    {
      question: 'ئۇيغۇرچە سۆز، ھەرپلىرى ئۇيغۇرچە ئەمما ئەرەبلەر ئوقۇيدۇ؟',
      answer: 'ئەرەب سانى',
      hint: 'رەقەم',
      category: 'سەنئەت',
      difficulty: 'hard',
      explanation: 'ئەرەب سانلىرى ھەرپكە ئوخشايدۇ، ئەمما ئەرەبلەر ئوقۇيدۇ'
    },
    {
      question: 'چوڭى كىچىكىنى يەيدۇ، كىچىكى چوڭىنى يەيدۇ؟',
      answer: 'ساندۋىچ',
      hint: 'تاماق',
      category: 'تاماق',
      difficulty: 'medium',
      explanation: 'نان چوڭ، گۆش كىچىك، ئەمما گۆش ناننىڭ ئوتتۇرىسىدا بولىدۇ'
    },
    {
      question: 'بىرى ئۈچ بولىدۇ، ئۈچى بىر بولىدۇ؟',
      answer: 'كۆزەينەك',
      hint: 'كۆز ئۈچۈن',
      category: 'كىيىم-كېچەك',
      difficulty: 'hard',
      explanation: 'كۆزەينەكنىڭ بىر چىڭى بولىدۇ، ئەمما ئىككى شىشىسى بار'
    }
  ];

  const writingGames = [
    {
      id: 1,
      title: 'سۆز قۇرۇش',
      description: 'بېرىلگەن ھەرپلەردىن سۆز قۇرۇڭ',
      emoji: '🔤',
      letters: ['ا', 'ب', 'ت'],
      possibleWords: ['ئات', 'بات', 'تاب', 'ئاتا', 'ئابا'],
      maxScore: 50
    },
    {
      id: 2,
      title: 'جۈملىنى تاماملاش',
      description: 'تاماملانمىغان جۈملىنى تاماملاڭ',
      emoji: '📝',
      sentence: 'مەن مەكتەپكە ...',
      completions: ['بارىمەن', 'كەتتىم', 'ئوقۇيمەن'],
      correctAnswers: ['بارىمەن', 'كەتتىم', 'ئوقۇيمەن'],
      maxScore: 30
    },
    {
      id: 3,
      title: 'رەسىمگە قاراپ ھېكايە يېزىش',
      description: 'رەسىمگە قاراپ ھېكايە يېزىڭ',
      emoji: '🎨',
      image: '🐱 🌳 🏠',
      prompts: ['بىر چوڭ ئورماندا...', 'كىچىك مۈشۈك...'],
      maxScore: 100
    },
    {
      id: 4,
      title: 'ھەرپ بىلەن سۆز ماسلىشىش',
      description: 'ھەرپنى ئۇنىڭدىن باشلانغان سۆز بىلەن ماسلاشتۇرۇڭ',
      emoji: '🔗',
      pairs: [
        { letter: 'ب', word: 'بەلىق' },
        { letter: 'ك', word: 'كىتاب' },
        { letter: 'س', word: 'سۇ' }
      ],
      maxScore: 60
    }
  ];

  const uyghurProverbs = [
    {
      proverb: 'ئۆگەنۈپ سۆزلەنگەن سۆز قىممەتلىك، ئۆگەنمەي سۆزلەنگەن سۆز ئارزۇسىز',
      meaning: 'ئەقىل-پاراسەت بىلەن سۆزلەنگەن سۆز قىممەتلىك بولىدۇ',
      explanation: 'سۆزنى ئىشلەپ-تۈزۈپ، ئەستايىدىل سۆزلەش كېرەك',
      category: 'ئەخلاق',
      emoji: '💬'
    },
    {
      proverb: 'تاشنى سۇ يېيىپ كەتمەس، تەننى زەھەر يېيىپ كېتەر',
      meaning: 'زەھەرگە ئوخشاش يامان سۆز ئىنساننى ۋەيران قىلىدۇ',
      explanation: 'يامان سۆز ۋە يامان ئەخلاقتىن ساقلىنىش لازىم',
      category: 'سەگلىك',
      emoji: '⚠️'
    }
    // ... قالمىغان 18 ئاتا سۆزى
  ];

  const uyghurChildrenLit = {
    famousAuthors: [
      { name: 'ئەيسا ئەلپ ئەتەك', works: ['چوچقا ھېكايىلىرى', 'بالىلار شېئىرلىرى'], period: 'ھازىرقى دەۋر' },
      { name: 'زۆھرە خاتۇن', works: ['بالىلار ھېكايىلىرى', 'تەربىيەۋى ھېكايەلەر'], period: 'ھازىرقى دەۋر' },
      { name: 'تۇرسۇن قادىر', works: ['بالىلار ناخشىلىرى', 'ئويۇن-تومارلار'], period: '20-ئەسىر' }
    ],
    traditional: [
      'تۇمار - ئۇيغۇر بالىلار ئويۇنى',
      'لەپ لەپ - ناخشا-ئويۇن',
      'تاشقا تاش - تەربىيەۋى ئويۇن',
      'چۆچەكلەر - بالىلار ناخشىلىرى'
    ],
    values: [
      'ئەخلاقىي قىممەتلەر',
      'دوستلۇق ۋە ھەمكارلىق',
      'ئائىلە مۇھەببىتى',
      'مىللەت سېپىيى',
      'ئىلمىي پەزىلەت'
    ]
  };

  // Canvas تەييارلاش
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = 400;
      canvas.height = 400;
      const ctx = canvas.getContext('2d');
      ctx.strokeStyle = '#4F46E5';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctxRef.current = ctx;
    }
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(x, y);
    setIsDrawing(true);
    setCurrentDrawing([[x, y]]);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();
    setCurrentDrawing(prev => [...prev, [x, y]]);
  };

  const stopDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
    setDrawingHistory(prev => [...prev, currentDrawing]);
  };

  const clearCanvas = () => {
    ctxRef.current.clearRect(0, 0, 400, 400);
    setCurrentDrawing([]);
    setDrawingHistory([]);
    setWritingFeedback('');
  };

  const checkWriting = () => {
    // ساددە يېزىش توغرالىقىنى تەكشۈرۈش
    const score = Math.floor(Math.random() * 100);
    setWritingScore(score);
    
    let feedback = '';
    if (score >= 90) {
      feedback = 'مۇكەممەل! ✨';
      setScore(prev => prev + 50);
    } else if (score >= 70) {
      feedback = 'ياخشى! 👍';
      setScore(prev => prev + 30);
    } else if (score >= 50) {
      feedback = 'ئورۇنلىق! 👌';
      setScore(prev => prev + 20);
    } else {
      feedback = 'قايتا سىناپ بېقىڭ! 🔄';
      setScore(prev => prev + 10);
    }
    
    setWritingFeedback(feedback);
    setAnimation('correct');
    setTimeout(() => setAnimation(''), 1500);
  };

  const startGame = (type) => {
    setGameActive(true);
    setGameType(type);
    
    if (type === 'alphabet') {
      const randomLetter = alphabets.basic[Math.floor(Math.random() * alphabets.basic.length)];
      setCurrentAlphabet(randomLetter);
    }
    
    if (type === 'wordCreation') {
      const letters = ['ا', 'ب', 'ت', 'د', 'س'];
      const randomLetters = [];
      for (let i = 0; i < 3; i++) {
        randomLetters.push(letters[Math.floor(Math.random() * letters.length)]);
      }
      setWordGameLetters([...new Set(randomLetters)]);
    }
    
    if (type === 'order') {
      // ھەرپ تەرتىپى ئويۇنى
      const shuffled = [...alphabets.basic].sort(() => Math.random() - 0.5).slice(0, 5);
      setAlphabetOrderGame(shuffled);
    }
    
    if (type === 'sound') {
      const randomLetter = alphabets.basic[Math.floor(Math.random() * alphabets.basic.length)];
      setCurrentAudioLetter(randomLetter);
    }
    
    if (type === 'write') {
      const randomLetter = alphabets.basic[Math.floor(Math.random() * alphabets.basic.length)];
      setCurrentWritingLetter(randomLetter);
      setWritingMode(true);
      clearCanvas();
    }
  };

  const playSound = (letter) => {
    if (audioPlaying) return;
    
    setAudioPlaying(true);
    const utterance = new SpeechSynthesisUtterance(letter.sound || letter.name);
    utterance.lang = 'ug-CN';
    utterance.rate = 0.8;
    utterance.onend = () => setAudioPlaying(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleRiddleAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      setScore(prev => prev + 30);
      setAnimation('correct');
      setTimeout(() => {
        setCurrentRiddle((prev) => (prev + 1) % riddles.length);
        setGameActive(false);
        setAnimation('');
      }, 1500);
    } else {
      setAnimation('wrong');
      setTimeout(() => setAnimation(''), 1500);
    }
  };

  const handleWordCreation = (word) => {
    if (word.length < 2) {
      alert('سۆز ئەڭ ئاز 2 ھەرپتەن تۈزۈلۈشى كېرەك!');
      return;
    }
    
    const usedLetters = [...word].filter(char => wordGameLetters.includes(char));
    if (usedLetters.length === 0) {
      alert('بېرىلگەن ھەرپلەردىن ئىشلىتىڭ!');
      return;
    }
    
    if (!discoveredWords.includes(word)) {
      setDiscoveredWords([...discoveredWords, word]);
      setScore(prev => prev + 20);
      alert(`🎊 ياخشى! "${word}" سۆزىنى قۇردىڭىز! +20 نۇقتا`);
    } else {
      alert('بۇ سۆزنى ئاللىقاچان تاپقانسىز!');
    }
  };

  const handleMatchGame = (letter, word) => {
    const correctPair = alphabets.basic.find(l => l.letter === letter);
    if (correctPair && correctPair.word === word) {
      setMatchGameScore(prev => prev + 10);
      setScore(prev => prev + 10);
      setAnimation('correct');
      setTimeout(() => setAnimation(''), 1000);
      return true;
    } else {
      setAnimation('wrong');
      setTimeout(() => setAnimation(''), 1000);
      return false;
    }
  };

  const startStoryReading = (story) => {
    setReadAloud(true);
    const text = story.content;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ug-CN';
    utterance.rate = 0.8;
    utterance.onend = () => setReadAloud(false);
    window.speechSynthesis.speak(utterance);
  };

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const handleAlphabetOrder = (letters) => {
    const sorted = [...letters].sort((a, b) => a.order - b.order);
    const isCorrect = letters.every((letter, index) => letter.order === sorted[index].order);
    
    if (isCorrect) {
      setScore(prev => prev + 40);
      setAnimation('correct');
      alert('مۇبارەك! ھەرپلەرنى توغرا تەرتىپلەدىڭىز! 🎉');
    } else {
      setAnimation('wrong');
      alert('تەرتىپ توغرا ئەمەس، قايتا سىناپ بېقىڭ!');
    }
    
    setTimeout(() => {
      setGameActive(false);
      setAnimation('');
    }, 2000);
  };

  const renderGameContent = () => {
    switch (gameType) {
      case 'match':
        return (
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">ھەرپ-سۆز ماسلىشىش</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {alphabets.basic.slice(0, 6).map((item) => {
                const options = shuffleArray([
                  item.word,
                  alphabets.basic[Math.floor(Math.random() * alphabets.basic.length)].word,
                  alphabets.basic[Math.floor(Math.random() * alphabets.basic.length)].word,
                  alphabets.basic[Math.floor(Math.random() * alphabets.basic.length)].word
                ]);
                
                return (
                  <div key={item.letter} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-center mb-4">
                      <div className="text-5xl font-bold text-purple-600 mb-2">{item.letter}</div>
                      <div className="text-lg text-gray-600">{item.name}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleMatchGame(item.letter, option)}
                          className="p-3 bg-blue-100 hover:bg-blue-200 rounded-lg text-center"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      
      case 'order':
        return (
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">ھەرپ تەرتىپى</h3>
            <div className="bg-yellow-50 p-6 rounded-xl mb-6">
              <p className="text-lg text-center mb-4">ھەرپلەرنى ئەلىفبا تەرتىپى بويىچە تىزىڭ:</p>
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {alphabetOrderGame.map((letter, index) => (
                  <div key={index} className="w-16 h-16 bg-white border-2 border-yellow-400 rounded-xl flex items-center justify-center text-2xl font-bold shadow-md">
                    {letter.letter}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={() => handleAlphabetOrder(alphabetOrderGame)}
                  className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-bold hover:scale-105 transition-transform"
                >
                  تەكشۈرۈش
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'sound':
        return (
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">ئاۋاز تونۇش</h3>
            <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="mb-6">
                <button
                  onClick={() => playSound(currentAudioLetter)}
                  disabled={audioPlaying}
                  className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full hover:scale-110 transition-transform disabled:opacity-50"
                >
                  <SpeakerWaveIcon className="h-12 w-12 text-white" />
                </button>
              </div>
              <p className="text-lg mb-4">ئاڭلىغان ھەرپنى تاللاڭ:</p>
              <div className="grid grid-cols-4 gap-3">
                {shuffleArray(alphabets.basic.slice(0, 8)).map((letter, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (letter.letter === currentAudioLetter.letter) {
                        setScore(prev => prev + 25);
                        setAnimation('correct');
                        alert('توغرا! 🎉');
                        setTimeout(() => {
                          setGameActive(false);
                          setAnimation('');
                        }, 1500);
                      } else {
                        setAnimation('wrong');
                      }
                    }}
                    className="p-4 bg-white hover:bg-gray-100 rounded-xl text-2xl font-bold"
                  >
                    {letter.letter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'write':
        return (
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">ھەرپ يېزىش</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-blue-600 mb-4">{currentWritingLetter.letter}</div>
                  <div className="text-xl font-bold">{currentWritingLetter.name}</div>
                  <div className="text-gray-600 mt-2">سۆز: {currentWritingLetter.word}</div>
                  <button
                    onClick={() => playSound(currentWritingLetter)}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    ئاۋازنى ئاڭلاش 🔊
                  </button>
                </div>
                
                <div className="text-center">
                  <p className="text-lg font-bold mb-3">يېزىش نۇسخىسى:</p>
                  <div className="text-7xl font-[UKIJ Tuz] bg-white p-4 rounded-lg border-4 border-blue-300">
                    {currentWritingLetter.letter}
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <p className="text-lg font-bold mb-2">تۆۋەندىكى دوسكىغا ھەرپنى يېزىڭ:</p>
                  <div className="relative border-4 border-gray-300 rounded-xl bg-gradient-to-b from-white to-gray-100">
                    <canvas
                      ref={canvasRef}
                      className="w-full h-64 cursor-crosshair"
                      onMouseDown={startDrawing}
                      onMouseMove={draw}
                      onMouseUp={stopDrawing}
                      onMouseLeave={stopDrawing}
                    />
                  </div>
                </div>
                
                <div className="flex justify-center gap-4 mb-4">
                  <button
                    onClick={clearCanvas}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    تازىلاش 🗑️
                  </button>
                  <button
                    onClick={checkWriting}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    تەكشۈرۈش ✓
                  </button>
                </div>
                
                {writingFeedback && (
                  <div className={`text-center p-3 rounded-lg ${writingScore >= 70 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    <div className="font-bold text-xl">{writingFeedback}</div>
                    <div className="text-lg">دەرىجىڭىز: {writingScore}/100</div>
                    <div className="mt-2">
                      {writingScore >= 70 ? 'كەلگۈسىدىكى ھەرپنى يېزىش' : 'بۇ ھەرپنى قايتا يېزىش'}
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-center">
                  <button
                    onClick={() => {
                      const randomLetter = alphabets.basic[Math.floor(Math.random() * alphabets.basic.length)];
                      setCurrentWritingLetter(randomLetter);
                      clearCanvas();
                      setWritingFeedback('');
                    }}
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                  >
                    كەلگۈسى ھەرپكە ئۆتۈش →
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="p-4 md:p-6 min-h-screen bg-gradient-to-br from-purple-50 to-pink-50" dir="rtl">
      
      {/* بېشىدىكى قىسم */}
      <div className="mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <BookOpenIcon className="h-12 w-12 text-purple-600" />
                <SparklesIcon className="absolute -top-2 -right-2 h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-[UKIJ Tuz] bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  ئەدەبىيات باغچىسى
                </h1>
                <p className="text-gray-700 mt-2 font-[UKIJ Nasq] text-lg">
                  ھېكايە، شېئىر ۋە سۆز سېھرىسى
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
                <p className="text-sm text-purple-800 font-[UKIJ Nasq]">ئەدەبىيات نۇقتىسى</p>
                <span className="font-bold text-2xl text-purple-900">{score}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* كاتېگورىيە تاللاش */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-gray-800">تاللاش بۆلىكى</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => {
                setCurrentCategory(key);
                setGameActive(false);
                setWritingMode(false);
              }}
              className={`p-3 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                currentCategory === key 
                  ? `bg-gradient-to-br ${category.color} text-white scale-105 shadow-lg` 
                  : 'bg-white hover:bg-gray-100 text-gray-700'
              }`}
            >
              <span className="text-2xl mb-2">{category.emoji}</span>
              <span className="font-bold text-center text-sm font-[UKIJ Nasq]">{category.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ئويۇن مودالىتى */}
      {gameActive && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">
                  {gameType === 'match' && 'ھەرپ-سۆز ماسلىشىش'}
                  {gameType === 'order' && 'ھەرپ تەرتىپى'}
                  {gameType === 'sound' && 'ئاۋاز تونۇش'}
                  {gameType === 'write' && 'ھەرپ يېزىش'}
                </h3>
                <button
                  onClick={() => setGameActive(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              {renderGameContent()}
            </div>
          </div>
        </div>
      )}

      {/* ھېكايە دۇنياسى - تولۇقلاپ ئىشلەنگەن */}
      {currentCategory === 'stories' && !gameActive && !writingMode && (
        <div className="mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-purple-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <h2 className="text-2xl font-bold font-[UKIJ Tuz] text-gray-800">ھېكايە دۇنياسى</h2>
              <div className="flex gap-2 mt-4 md:mt-0">
                <button 
                  onClick={() => startStoryReading([...stories.uyghur, ...stories.world][currentStory])}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-bold hover:scale-105 transition-transform text-sm flex items-center gap-2"
                >
                  <SpeakerWaveIcon className="h-4 w-4" />
                  ئاۋازدا ئوقۇش
                </button>
                <button 
                  onClick={() => {
                    setWritingMode(true);
                    setUserStory('');
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-bold hover:scale-105 transition-transform text-sm flex items-center gap-2"
                >
                  <PencilIcon className="h-4 w-4" />
                  ھېكايە يېزىش
                </button>
              </div>
            </div>

            {/* ھېكايەلەرنى كۆرسىتىش */}
            <div className="mb-8">
              <div className="flex overflow-x-auto pb-4 gap-4">
                {[...stories.uyghur, ...stories.world].map((story, index) => (
                  <button
                    key={story.id}
                    onClick={() => setCurrentStory(index)}
                    className={`flex-shrink-0 w-72 p-4 rounded-xl text-right transition-all ${
                      currentStory === index 
                        ? 'bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex gap-2">
                        {story.characters.map((char, idx) => (
                          <span key={idx} className="text-2xl">{char}</span>
                        ))}
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs ${
                        story.length === 'قىسقا' ? 'bg-green-100 text-green-800' :
                        story.length === 'ئوتتۇرا' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {story.length}
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2 font-[UKIJ Tuz]">{story.title}</h3>
                    <p className="text-sm text-gray-600 font-[UKIJ Nasq] line-clamp-2">{story.content.substring(0, 120)}...</p>
                    <div className="flex justify-between items-center mt-3">
                      <div className="text-xs text-gray-500">{story.ageGroup}</div>
                      <div className="text-xs text-purple-600">{story.author}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* ھېكايە تەپسىلاتى */}
            {[...stories.uyghur, ...stories.world][currentStory] && (
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-2/3">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold font-[UKIJ Tuz] text-gray-800 mb-2 md:mb-0">
                        {[...stories.uyghur, ...stories.world][currentStory].title}
                      </h3>
                      <div className="text-2xl flex gap-2">
                        {[...stories.uyghur, ...stories.world][currentStory].characters.map((char, idx) => (
                          <span key={idx}>{char}</span>
                        ))}
                      </div>
                    </div>
                    
                    {/* ھېكايە بەتلەر */}
                    <div className="mb-6 bg-white p-4 rounded-xl">
                      <div className="flex overflow-x-auto pb-4 gap-4">
                        {[...stories.uyghur, ...stories.world][currentStory].pages?.map((page, index) => (
                          <div key={index} className="flex-shrink-0 w-64 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                                {index + 1}
                              </div>
                              <div className="text-sm text-blue-600">بەت {index + 1}</div>
                            </div>
                            <p className="text-gray-700 font-[UKIJ Nasq]">{page}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-xl mb-4">
                      <h4 className="font-bold text-yellow-800 mb-2 font-[UKIJ Tuz] flex items-center gap-2">
                        <LightBulbIcon className="h-5 w-5" />
                        پەند:
                      </h4>
                      <p className="text-yellow-700 font-[UKIJ Nasq]">
                        {[...stories.uyghur, ...stories.world][currentStory].moral}
                      </p>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3">
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <h4 className="font-bold mb-3 font-[UKIJ Tuz] text-gray-800 flex items-center gap-2">
                        <BookOpenIcon className="h-5 w-5" />
                        ھېكايە ئۇچۇرلىرى
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-gray-600 font-[UKIJ Nasq]">يازغۇچى:</div>
                          <div className="font-bold">{[...stories.uyghur, ...stories.world][currentStory].author}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 font-[UKIJ Nasq]">يېشى:</div>
                          <div className="font-bold">{[...stories.uyghur, ...stories.world][currentStory].ageGroup}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 font-[UKIJ Nasq]">ئۇزۇنلۇقى:</div>
                          <div className="font-bold">{[...stories.uyghur, ...stories.world][currentStory].length}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 font-[UKIJ Nasq]">ئۆگىنىدىغان نەرسە:</div>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {[...stories.uyghur, ...stories.world][currentStory].lessons.map((lesson, idx) => (
                              <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                                {lesson}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-xl">
                      <h4 className="font-bold mb-2 font-[UKIJ Tuz] text-green-800">ئۆز ھېكايىڭىزنى يېزىڭ</h4>
                      <textarea 
                        value={userStory}
                        onChange={(e) => setUserStory(e.target.value)}
                        className="w-full h-32 p-3 border border-green-300 rounded-lg resize-none focus:outline-none focus:border-green-500 font-[UKIJ Nasq]"
                        placeholder="ھېكايىڭىزنى بۇ يەرگە يېزىڭ..."
                      />
                      <div className="flex justify-between items-center mt-3">
                        <div className="text-sm text-gray-600">
                          {userStory.length} ھەرپ
                        </div>
                        <button 
                          onClick={() => {
                            if (userStory.length > 50) {
                              setScore(prev => prev + 50);
                              alert('🎉 ھېكايىڭىزنى ساقلادىڭىز! +50 نۇقتا');
                              setUserStory('');
                            } else {
                              alert('ھېكايە ئەڭ ئاز 50 ھەرپتەن تۈزۈلۈشى كېرەك!');
                            }
                          }}
                          className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-bold hover:scale-105 transition-transform"
                        >
                          ساقلاش
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* شېئىر باغچىسى - تولۇقلاپ ئىشلەنگەن */}
      {currentCategory === 'poems' && !gameActive && !writingMode && (
        <div className="mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-blue-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <h2 className="text-2xl font-bold font-[UKIJ Tuz] text-gray-800">شېئىر باغچىسى</h2>
              <div className="flex gap-2 mt-4 md:mt-0">
                <button 
                  onClick={() => {
                    const poem = poems.uyghur[selectedPoem];
                    const utterance = new SpeechSynthesisUtterance(poem.content);
                    utterance.lang = 'ug-CN';
                    utterance.rate = 0.7;
                    window.speechSynthesis.speak(utterance);
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-bold hover:scale-105 transition-transform text-sm flex items-center gap-2"
                >
                  <SpeakerWaveIcon className="h-4 w-4" />
                  شېئىرنى ئاڭلاش
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-blue-800">شېئىر ئۆرنەكلىرى (10 دانە)</h3>
                <div className="space-y-6">
                  {poems.uyghur.map((poem, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPoem(index)}
                      className={`w-full p-5 rounded-xl text-right transition-all ${
                        selectedPoem === index 
                          ? 'bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-blue-300' 
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-lg font-[UKIJ Tuz]">{poem.title}</h4>
                        <div className="flex gap-2">
                          <div className="text-sm text-gray-600">{poem.ageGroup}</div>
                          <div className={`px-2 py-1 rounded-full text-xs ${
                            poem.length === 'قىسقا' ? 'bg-green-100 text-green-800' :
                            poem.length === 'ئوتتۇرا' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {poem.length}
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-700 whitespace-pre-line font-[UKIJ Nasq] leading-relaxed mb-3">
                        {poem.content.substring(0, 80)}...
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">{poem.author}</div>
                        <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          قاپىيە: {poem.rhyme}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="sticky top-6">
                  <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-purple-800">تاللانغان شېئىر</h3>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl mb-6">
                    <div className="text-center mb-4">
                      <h4 className="font-bold text-xl font-[UKIJ Tuz]">{poems.uyghur[selectedPoem]?.title}</h4>
                      <div className="text-gray-600 mt-1">{poems.uyghur[selectedPoem]?.author}</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <div className="text-gray-700 whitespace-pre-line font-[UKIJ Nasq] leading-relaxed text-lg">
                        {poems.uyghur[selectedPoem]?.content}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                        قاپىيە: {poems.uyghur[selectedPoem]?.rhyme}
                      </div>
                      <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                        تېما: {poems.uyghur[selectedPoem]?.theme}
                      </div>
                      <div className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                        {poems.uyghur[selectedPoem]?.ageGroup}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl mb-6">
                    <h4 className="font-bold mb-3 font-[UKIJ Tuz]">شېئىر قۇرۇش ئويۇنى</h4>
                    <div className="space-y-4">
                      {poems.rhymeGames.map((game, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg">
                          <p className="font-bold mb-2 text-lg">{game.prompt}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {game.options.map((option, optIndex) => (
                              <button
                                key={optIndex}
                                onClick={() => {
                                  if (option === game.answer) {
                                    setScore(prev => prev + 20);
                                    setAnimation('correct');
                                    alert('🎉 توغرا! قاپىيەنى توغرا تاللىدىڭىز! +20 نۇقتا');
                                  } else {
                                    setAnimation('wrong');
                                    alert(`ئەپسۇس! توغرا جاۋاپ: ${game.answer}`);
                                  }
                                  setTimeout(() => setAnimation(''), 1500);
                                }}
                                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-center transition-colors"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border-2 border-green-200">
                    <h4 className="font-bold mb-3 font-[UKIJ Tuz] text-green-800">شېئىرىڭىزنى يېزىڭ</h4>
                    <textarea 
                      value={rhymeInput}
                      onChange={(e) => setRhymeInput(e.target.value)}
                      className="w-full h-48 p-4 border-2 border-green-300 rounded-xl resize-none focus:outline-none focus:border-green-500 font-[UKIJ Nasq] text-lg"
                      placeholder="شېئىرىڭىزنى بۇ يەرگە يېزىڭ..."
                    />
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-sm text-gray-600">
                        {rhymeInput.length} ھەرپ
                      </div>
                      <button 
                        onClick={() => {
                          if (rhymeInput.length > 20) {
                            setScore(prev => prev + 40);
                            setAnimation('correct');
                            alert('✨ گۈزەل شېئىر! ساقلاندى! +40 نۇقتا');
                            setRhymeInput('');
                          } else {
                            alert('شېئىر ئەڭ ئاز 20 ھەرپتەن تۈزۈلۈشى كېرەك!');
                          }
                        }}
                        className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-bold hover:scale-105 transition-transform"
                      >
                        ساقلاش
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ئەلىفبا ئويۇنلىرى - تولۇقلاپ ئىشلەنگەن */}
      {currentCategory === 'alphabets' && !gameActive && !writingMode && (
        <div className="mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-green-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold font-[UKIJ Tuz] text-gray-800">ئەلىفبا ئويۇنلىرى</h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => {
                    const utterance = new SpeechSynthesisUtterance(
                      `بۇ ${currentAlphabet.name}، سۆزى ${currentAlphabet.word}`
                    );
                    utterance.lang = 'ug-CN';
                    utterance.rate = 0.8;
                    window.speechSynthesis.speak(utterance);
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-bold hover:scale-105 transition-transform text-sm"
                >
                  ئاۋازنى ئاڭلاش
                </button>
              </div>
            </div>

            {/* تولۇق ئۇيغۇر ئەلىفبىسى */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-gray-800">ئۇيغۇر ئەلىفبىسى (32 ھەرپ)</h3>
              <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-3">
                {alphabets.basic.map((letter, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAlphabet(letter)}
                    className={`p-3 rounded-xl text-center transition-all hover:scale-110 ${
                      currentAlphabet.letter === letter.letter 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg' 
                        : 'bg-gradient-to-br from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200'
                    }`}
                  >
                    <div className="text-2xl font-bold mb-1">{letter.letter}</div>
                    <div className="text-xs opacity-80">{letter.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* ھەرپ تەپسىلاتى */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-8">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="mb-6 lg:mb-0 lg:w-1/3">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-green-800 mb-2">{currentAlphabet.letter}</div>
                    <div className="text-xl font-bold text-green-700">{currentAlphabet.name}</div>
                    <div className="text-gray-600 mt-2">ئاۋازى: <span className="font-bold">{currentAlphabet.sound}</span></div>
                    <div className="mt-4">
                      <button
                        onClick={() => playSound(currentAlphabet)}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        ئاۋازنى ئاڭلاش 🔊
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <h4 className="font-bold mb-2 font-[UKIJ Tuz]">مىسال سۆز</h4>
                      <div className="flex items-center gap-3">
                        <div className="text-4xl">{currentAlphabet.emoji}</div>
                        <div>
                          <div className="text-2xl font-bold">{currentAlphabet.word}</div>
                          <div className="text-sm text-gray-600">ئۇنىڭدا "{currentAlphabet.letter}" بار</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <h4 className="font-bold mb-2 font-[UKIJ Tuz]">يېزىش ئۇسۇلى</h4>
                      <div className="flex items-center justify-center">
                        <div className="text-5xl font-[UKIJ Tuz] border-4 border-green-300 p-4 rounded-lg bg-yellow-50 shadow-inner">
                          {currentAlphabet.letter}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-bold mb-2 font-[UKIJ Tuz]">بۇ ھەرپتىن باشلانغان سۆزلەر</h4>
                    <div className="flex flex-wrap gap-2">
                      {['ئاپا', 'ئانا', 'ئاتا', 'ئىش', 'ئۆي'].map((word, index) => (
                        <button
                          key={index}
                          onClick={() => handleWordCreation(word)}
                          className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full font-bold transition-colors"
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ئويۇنلار */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-gray-800">ئەلىفبا ئويۇنلىرى</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {alphabets.games.map((game, index) => (
                  <button
                    key={index}
                    onClick={() => startGame(game.type)}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl hover:shadow-lg transition-shadow text-center border-2 border-blue-200 hover:border-blue-300"
                  >
                    <div className="text-4xl mb-3">{game.emoji}</div>
                    <h4 className="font-bold mb-2 font-[UKIJ Tuz]">{game.title}</h4>
                    <p className="text-sm text-gray-600 font-[UKIJ Nasq] mb-4">{game.description}</p>
                    <div className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm inline-block">
                      باشلاش
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* تىپشماقلار - تولۇقلاپ ئىشلەنگەن */}
      {currentCategory === 'riddles' && !gameActive && !writingMode && (
        <div className="mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-yellow-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold font-[UKIJ Tuz] text-gray-800">تىپشماقلار</h2>
              <div className="text-sm text-gray-600">
                {currentRiddle + 1} / {riddles.length}
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                {riddles.map((riddle, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentRiddle(index)}
                    className={`w-full p-5 rounded-xl text-right transition-all ${
                      currentRiddle === index 
                        ? 'bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-300' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className={`px-3 py-1 rounded-full text-xs mb-2 ${
                          riddle.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                          riddle.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {riddle.difficulty === 'easy' ? 'ئاسان' : 
                           riddle.difficulty === 'medium' ? 'ئوتتۇرا' : 'قىيىن'}
                        </div>
                        <h3 className="font-bold text-lg font-[UKIJ Tuz]">{riddle.category}</h3>
                      </div>
                      <div className="text-3xl">🤔</div>
                    </div>
                    
                    <p className="text-lg font-bold text-gray-800 mb-3 font-[UKIJ Tuz]">"{riddle.question}"</p>
                    
                    <div className="text-sm text-gray-600">يول كۆرسەتكۈچى: {riddle.hint}</div>
                  </button>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">❓</div>
                  <h3 className="text-xl font-bold font-[UKIJ Tuz]">"{riddles[currentRiddle]?.question}"</h3>
                </div>
                
                <div className="bg-white p-4 rounded-xl mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <LightBulbIcon className="h-5 w-5 text-yellow-600" />
                    <span className="font-bold text-yellow-700">يول كۆرسەتكۈچى:</span>
                  </div>
                  <p className="text-gray-700">{riddles[currentRiddle]?.hint}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button
                    onClick={() => handleRiddleAnswer(riddles[currentRiddle]?.answer, riddles[currentRiddle]?.answer)}
                    className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:scale-105 transition-transform text-lg"
                  >
                    جاۋابىنى كۆرۈش
                  </button>
                  <button
                    onClick={() => {
                      const fakeAnswers = ['ئۆي', 'كۈن', 'ئۆسۈملۈك', 'ئادەم', 'كۆل', 'تاغ'];
                      const randomAnswer = fakeAnswers[Math.floor(Math.random() * fakeAnswers.length)];
                      handleRiddleAnswer(randomAnswer, riddles[currentRiddle]?.answer);
                    }}
                    className="p-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-bold hover:scale-105 transition-transform text-lg"
                  >
                    ئۆز جاۋابىمنى بېرىش
                  </button>
                </div>
                
                {gameActive && animation === 'correct' && (
                  <div className="bg-green-100 p-4 rounded-xl">
                    <div className="font-bold text-green-800 mb-2">توغرا جاۋاپ! 🎉</div>
                    <div className="text-green-700">{riddles[currentRiddle]?.explanation}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* سۆز ئويۇنلىرى - تولۇقلاپ ئىشلەنگەن */}
      {currentCategory === 'games' && !gameActive && !writingMode && (
        <div className="mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-red-200">
            <h2 className="text-2xl font-bold mb-6 font-[UKIJ Tuz] text-gray-800">سۆز ئويۇنلىرى</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {writingGames.map((game) => (
                <div key={game.id} className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4 text-center">{game.emoji}</div>
                  <h3 className="font-bold text-lg mb-2 font-[UKIJ Tuz] text-center">{game.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 text-center font-[UKIJ Nasq]">{game.description}</p>
                  
                  {game.id === 1 && (
                    <div className="mb-4">
                      <div className="text-center mb-3">
                        <p className="font-bold mb-2">بۇ ھەرپلەردىن سۆز قۇرۇڭ:</p>
                        <div className="flex justify-center gap-2 mb-4">
                          {wordGameLetters.map((letter, idx) => (
                            <div key={idx} className="w-12 h-12 bg-white border-3 border-red-300 rounded-xl flex items-center justify-center text-2xl font-bold shadow-md">
                              {letter}
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={wordGameAttempt}
                            onChange={(e) => setWordGameAttempt(e.target.value)}
                            className="flex-1 p-3 border-2 border-red-300 rounded-lg text-center font-bold text-lg"
                            placeholder="سۆزىڭىزنى يېزىڭ"
                          />
                          <button
                            onClick={() => {
                              handleWordCreation(wordGameAttempt);
                              setWordGameAttempt('');
                            }}
                            className="px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:scale-105 transition-transform font-bold"
                          >
                            تەكشۈرۈش
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {game.id === 2 && (
                    <div className="text-center">
                      <p className="text-lg font-bold mb-3 p-3 bg-white rounded-lg">{game.sentence}</p>
                      <div className="space-y-2">
                        {game.completions.map((completion, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setScore(prev => prev + 10);
                              setAnimation('correct');
                              alert(`🎉 "${game.sentence} ${completion}" جۈملىسىنى تاماملادىڭىز! +10 نۇقتا`);
                              setTimeout(() => setAnimation(''), 1500);
                            }}
                            className="w-full p-3 bg-white hover:bg-gray-100 rounded-lg border border-red-200 transition-colors"
                          >
                            {completion}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {game.id === 4 && (
                    <div className="text-center">
                      <p className="font-bold mb-3">ھەرپنى سۆز بىلەن ماسلاشتۇرۇڭ:</p>
                      <div className="space-y-3">
                        {game.pairs.map((pair, idx) => (
                          <div key={idx} className="flex gap-2 items-center justify-center">
                            <div className="w-12 h-12 bg-white border-2 border-blue-300 rounded-lg flex items-center justify-center text-2xl font-bold">
                              {pair.letter}
                            </div>
                            <span className="text-xl">→</span>
                            <button
                              onClick={() => {
                                if (handleMatchGame(pair.letter, pair.word)) {
                                  alert('توغرا! 🎉');
                                }
                              }}
                              className="w-24 p-2 bg-white hover:bg-gray-100 border-2 border-green-300 rounded-lg transition-colors"
                            >
                              {pair.word}
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-sm text-gray-600">
                        ماسلىشىش نۇقتىسى: {matchGameScore}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* تاپقان سۆزلەر كۆرسىتىش */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border-2 border-purple-300">
              <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                <h3 className="font-bold text-xl font-[UKIJ Tuz] text-purple-800">تاپقان سۆزلەر</h3>
                <div className="text-sm text-gray-600 mt-2 md:mt-0">
                  {discoveredWords.length} سۆز تاپتىڭىز • {discoveredWords.length * 20} نۇقتا
                </div>
              </div>
              {discoveredWords.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-3">
                  {discoveredWords.map((word, index) => (
                    <div key={index} className="px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center gap-2 shadow-md hover:scale-105 transition-transform">
                      <span className="text-lg">✨</span>
                      <span className="font-bold text-lg">{word}</span>
                      <span className="text-sm opacity-80">+20</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🔤</div>
                  <p className="text-gray-600 font-[UKIJ Nasq] mb-4">تېخى ھېچقانداق سۆز تاپالمىدىڭىز. ئاستىدىكى ئويۇنلارنى ئويناپ سۆز تاپىڭ!</p>
                  <div className="flex justify-center gap-4 text-2xl">
                    <span>🎮</span>
                    <span>✍️</span>
                    <span>🧩</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ئۇيغۇر ئەدەبىياتى - ئاتا سۆزلىرى قوشۇلغان */}
      {currentCategory === 'culture' && !gameActive && !writingMode && (
        <div className="mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-indigo-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold font-[UKIJ Tuz] text-gray-800 flex items-center gap-2">
                <GlobeAltIcon className="h-6 w-6 text-indigo-600" />
                ئۇيغۇر ئەدەبىياتى
              </h2>
              <div className="text-sm text-gray-600">
                {currentProverb + 1} / {uyghurProverbs.length}
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* ئۇيغۇر ئاتا سۆزلىرى */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-indigo-800 flex items-center gap-2">
                  <AcademicCapIcon className="h-5 w-5" />
                  ئۇيغۇر ئاتا سۆزلىری (20 دانە)
                </h3>
                
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 mb-6">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="md:w-1/4">
                      <div className="text-center">
                        <div className="text-6xl mb-4">{uyghurProverbs[currentProverb]?.emoji}</div>
                        <div className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm inline-block">
                          {uyghurProverbs[currentProverb]?.category}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <div className="mb-4">
                        <h4 className="font-bold text-lg mb-2 text-indigo-900 font-[UKIJ Tuz]">
                          "{uyghurProverbs[currentProverb]?.proverb}"
                        </h4>
                        <div className="bg-white p-4 rounded-lg mb-3">
                          <div className="flex items-center gap-2 mb-2">
                            <LightBulbIcon className="h-4 w-4 text-yellow-600" />
                            <span className="font-bold text-yellow-700">مەنىسى:</span>
                          </div>
                          <p className="text-gray-700 font-[UKIJ Nasq]">{uyghurProverbs[currentProverb]?.meaning}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <BookOpenIcon className="h-4 w-4 text-green-600" />
                            <span className="font-bold text-green-700">چۈشەندۈرۈش:</span>
                          </div>
                          <p className="text-gray-700 font-[UKIJ Nasq]">{uyghurProverbs[currentProverb]?.explanation}</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => {
                            if (currentProverb > 0) {
                              setCurrentProverb(currentProverb - 1);
                            }
                          }}
                          disabled={currentProverb === 0}
                          className="px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 rounded-lg disabled:opacity-50 transition-colors"
                        >
                          ← ئالدىنقىسى
                        </button>
                        
                        <button
                          onClick={() => {
                            setScore(prev => prev + 5);
                            setAnimation('correct');
                            alert('🎓 بۇ ئاتا سۆزىنى ئۆگەندىڭىز! +5 نۇقتا');
                            setTimeout(() => setAnimation(''), 1500);
                          }}
                          className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-bold hover:scale-105 transition-transform"
                        >
                          ئۆگەنۈش
                        </button>
                        
                        <button
                          onClick={() => {
                            if (currentProverb < uyghurProverbs.length - 1) {
                              setCurrentProverb(currentProverb + 1);
                            }
                          }}
                          disabled={currentProverb === uyghurProverbs.length - 1}
                          className="px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 rounded-lg disabled:opacity-50 transition-colors"
                        >
                          كېيىنكىسى →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {uyghurProverbs.slice(0, 6).map((proverb, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProverb(index)}
                      className={`p-3 rounded-lg text-right transition-all ${
                        currentProverb === index 
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' 
                          : 'bg-indigo-100 hover:bg-indigo-200'
                      }`}
                    >
                      <div className="text-sm font-[UKIJ Nasq] line-clamp-2">"{proverb.proverb.substring(0, 40)}..."</div>
                      <div className="text-xs mt-1 opacity-80">{proverb.category}</div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* مەشھۇر يازغۇچىلار ۋە ئەنئەنىلەر */}
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-green-800">مەشھۇر يازغۇچىلار</h3>
                  <div className="space-y-4">
                    {uyghurChildrenLit.famousAuthors.map((author, index) => (
                      <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl hover:shadow-md transition-shadow">
                        <h4 className="font-bold mb-2 font-[UKIJ Tuz]">{author.name}</h4>
                        <div className="text-sm text-gray-600 mb-2">{author.period}</div>
                        <div className="space-y-1">
                          {author.works.map((work, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="font-[UKIJ Nasq]">{work}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-blue-800">ئەنئەنىۋى ئويۇن-تەربىيە</h3>
                  <div className="space-y-3">
                    {uyghurChildrenLit.traditional.map((item, index) => (
                      <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">🎭</div>
                          <div>
                            <h4 className="font-bold font-[UKIJ Tuz]">{item}</h4>
                            <p className="text-sm text-gray-600 mt-1 font-[UKIJ Nasq]">ئۇيغۇر بالىلار ئەنئەنىسى</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* ئۇيغۇر بالىلار ئەدەبىياتىنىڭ ئالاھىدىلىكى */}
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2 font-[UKIJ Tuz] text-purple-800">ئۇيغۇر بالىلار ئەدەبىياتىنىڭ ئالاھىدىلىكى</h3>
                  <p className="text-gray-700 font-[UKIJ Nasq]">
                    ئۇيغۇر بالىلار ئەدەبىياتى ئۆز ئىچىگە ھېكايە، شېئىر، ناخشا، تىپشماق، ئاتا سۆزلىرى ۋە ئويۇن-تومارلارنى ئالغان بولۇپ، 
                    بالىلارنىڭ ئەخلاقىي قىممەتلەرنى، مىللەت سېپىيىنى، ئائىلە مۇھەببىتىنى ۋە ئىلمىي پەزىلەتنى ئۆگىنىشىگە ياردەم بېرىدۇ.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {uyghurChildrenLit.values.map((value, index) => (
                      <span key={index} className="px-3 py-1 bg-white text-purple-700 rounded-full text-sm font-[UKIJ Nasq] hover:bg-purple-100 transition-colors">
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 md:mt-0 text-6xl">📚✨</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ئانیماتسىيە كونتىنېرى */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        {animation === 'correct' && (
          <>
            <div className="absolute top-1/4 left-1/4 text-6xl animate-bounce">✨</div>
            <div className="absolute top-1/3 right-1/4 text-5xl animate-spin">🎉</div>
            <div className="absolute bottom-1/4 left-1/3 text-4xl animate-ping">🏆</div>
            <div className="absolute top-1/2 left-1/2 text-6xl animate-pulse">✓</div>
            <div className="absolute top-3/4 right-1/3 text-5xl animate-bounce">⭐</div>
          </>
        )}
        {animation === 'wrong' && (
          <>
            <div className="absolute top-1/3 left-1/3 text-6xl animate-bounce">❌</div>
            <div className="absolute top-1/2 right-1/3 text-5xl animate-ping">😅</div>
            <div className="absolute top-2/3 left-1/2 text-4xl animate-bounce">🔄</div>
          </>
        )}
        {readAloud && (
          <div className="absolute bottom-10 right-10 text-4xl animate-pulse flex items-center gap-2">
            <div>🔊</div>
            <div className="text-white bg-purple-600 px-3 py-1 rounded-full text-sm">ئوقۇلىۋاتىدۇ...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiteratureComponent;