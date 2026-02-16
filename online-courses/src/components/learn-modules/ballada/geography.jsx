import React, { useState, useEffect, useRef } from 'react';
import { 
  GlobeAltIcon, 
  MapIcon, 
  SunIcon, 
  MoonIcon,
  CloudIcon,
  LocationMarkerIcon,
  FlagIcon,
  HomeIcon,
  SparklesIcon,
  TrophyIcon,
  AcademicCapIcon,
  CameraIcon
} from '@heroicons/react/24/solid';

const GeographyComponent = () => {
  const [selectedContinent, setSelectedContinent] = useState('asia');
  const [currentView, setCurrentView] = useState('continents');
  const [score, setScore] = useState(0);
  const [quizActive, setQuizActive] = useState(false);
  const [quizQuestion, setQuizQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [showWeather, setShowWeather] = useState(false);
  const [currentWeather, setCurrentWeather] = useState('sunny');
  const [visitedPlaces, setVisitedPlaces] = useState([]);
  const [animation, setAnimation] = useState('');
  const [currentTime, setCurrentTime] = useState('day');
  
  const weatherTypes = {
    sunny: { emoji: '☀️', color: 'from-yellow-400 to-orange-400', desc: 'قۇياشلىق' },
    rainy: { emoji: '🌧️', color: 'from-blue-400 to-gray-400', desc: 'يامغۇرلۇق' },
    cloudy: { emoji: '☁️', color: 'from-gray-300 to-gray-500', desc: 'بۇلۇتلۇق' },
    snowy: { emoji: '❄️', color: 'from-blue-100 to-white', desc: 'قارلؽق' },
    stormy: { emoji: '⛈️', color: 'from-purple-400 to-gray-700', desc: 'ناھايىتى كۈچلۈك' },
    windy: { emoji: '💨', color: 'from-cyan-300 to-blue-300', desc: 'شاماللؽق' }
  };
  
  const continents = {
    asia: {
      name: 'ئاسىيا',
      emoji: '🐺',
      color: 'from-red-500 to-orange-500',
      area: '44.58 مىليون كۋادرات كىلومېتر',
      population: '4.6 مىليارد',
      countries: [
        { name: 'شەرقىي تۈركىستان', capital: 'ئۈرۇمچى', flag: 'UG', landmark: 'ھېيتكاھ، تۇرپان مۇنارى', fact: 'ئۇيغۇر مىڭ ئۆي مەدەنىيىتى' },
        { name: 'جۇڭگو', capital: 'بېيجىڭ', flag: '🇨🇳', landmark: 'ئالتۇن ئىگىزلىك', fact: 'دۇنيادىكى ئەڭ كۆپ نوپۇس' },
        { name: 'ياپونىيە', capital: 'توكىئو', flag: '🇯🇵', landmark: 'فۇجى تېغى', fact: 'ساكۇرا گۈلى مەشھۇر' },
        { name: 'ھىندىستان', capital: 'يېڭى دېھلى', flag: '🇮🇳', landmark: 'تاچ ماھال', fact: 'ڧىلم سانائىتى مەشھۇر' },
        { name: 'كورېيە', capital: 'سېئول', flag: '🇰🇷', landmark: 'نامسان تېغى', fact: 'تىخنىكا ئىلغار' },
        { name: 'تۈركىيە', capital: 'ئەنقەرە', flag: '🇹🇷', landmark: 'ئەيا سۆڧىيا', fact: 'ئاسىيا ۋە ياۋروپانى تۇتاشتۇرىدۇ' },
      ],
      naturalWonders: [
        { name: 'ھىمالايا تېغى', emoji: '🏔️', description: 'دۇنيادىكى ئەڭ ئېگىز تاغ' },
        { name: 'گەڭگە دەرياسى', emoji: '🌊', description: 'ھىندىستاننىڭ ئەڭ مۇقەددەس دەرياسى' },
        { name: 'قىزىل دېڭىز', emoji: '🌅', description: 'دۇنيا مىراسى قاتارىغا كىرگەن' }
      ],
      animals: ['🐼', '🐯', '🐘', '🦏', '🦍', '🦚'],
      climate: 'مۇختەلىپ كىلىمات: سۇبتروپىك، تۈنۈك، قۇرغاق',
      funFacts: [
        'دۇنيادىكى ئەڭ چوڭ قىتئە',
        'دۇنيادىكى ئەڭ ئېگىز تاغ (ئېۋېرېست) بۇ يەردە',
        'ئەڭ كۆپ نوپۇسقا ئىگە',
        'ئەڭ قەدىمىي مەدەنىيەتلەر (ھىندىستان، جۇڭگو) بۇ يەردە'
      ]
    },
    europe: {
      name: 'ياۋروپا',
      emoji: '🏰',
      color: 'from-blue-500 to-purple-500',
      area: '10.18 مىليون كۋادرات كىلومېتر',
      population: '747 مىليون',
      countries: [
        { name: 'فىرانسىيە', capital: 'پارىژ', flag: '🇫🇷', landmark: 'ئېيفېل مۇنارى', fact: 'مەدەنىيەت ۋە مودا پايتەختى' },
        { name: 'ئىتالىيە', capital: 'روم', flag: '🇮🇹', landmark: 'قولىزېيۇم', fact: 'قەدىمىي رىم ئىمپېرىيەسى' },
        { name: 'گېرمانىيە', capital: 'بېرلىن', flag: '🇩🇪', landmark: 'بېرلىن دىۋارى', fact: 'ماشىنا سانائىتى مەشھۇر' },
        { name: 'ئەنگلىيە', capital: 'لوندون', flag: '🇬🇧', landmark: 'بىگ بېن', fact: 'پارلېمان دىموكراتىيەسىنىڭ توپى' },
        { name: 'ئىسپانىيە', capital: 'مادرىد', flag: '🇪🇸', landmark: 'ساگرادا فامىلىيا', fact: 'فلامېنكو رەقىسى مەشھۇر' },
        { name: 'رۇسىيە', capital: 'موسكۋا', flag: '🇷🇺', landmark: 'قىزىل مەيدان', fact: 'دۇنيادىكى ئەڭ چوڭ دۆلەت' }
      ],
      naturalWonders: [
        { name: 'ئالب تېغى', emoji: '🗻', description: 'ياۋروپانىڭ ئەڭ ئېگىز تېغى' },
        { name: 'رېين دەرياسى', emoji: '🚢', description: 'تارىخىي سودا يولى' },
        { name: 'شىمال دېڭىزى', emoji: '🌊', description: 'بېلىقچىلىق مەركىزى' }
      ],
      animals: ['🐻', '🦊', '🦌', '🦅', '🐺', '🦢'],
      climate: 'مۇلائىم دېڭىز كىلىماتى',
      funFacts: [
        'تارىخىي ئەسەرلەر كۆپ',
        'ئىنسان ھوقۇقى ۋە دېموكراتىيەنىڭ توپى',
        'بىر قانچە خەلقئارا تەشكىلاتلارنىڭ مەركىزى',
        'ئۆزگىچە مىمارلىق ئۇسلۇبلىرى'
      ]
    },
    africa: {
      name: 'ئافرىقا',
      emoji: '🦁',
      color: 'from-green-600 to-yellow-600',
      area: '30.37 مىليون كۋادرات كىلومېتر',
      population: '1.3 مىليارد',
      countries: [
        { name: 'مىسىر', capital: 'قاھىرە', flag: '🇪🇬', landmark: 'پىرامىدىلار', fact: 'قەدىمىي مىسىر مەدەنىيىتى' },
        { name: 'كېنىيە', capital: 'نايروبى', flag: '🇰🇪', landmark: 'ماسائى مارا', fact: 'ھايۋانلار مىگىرىشى مەشھۇر' },
        { name: 'جەنۇبىي ئافرىقا', capital: 'پرېتورىيا', flag: '🇿🇦', landmark: 'جەدىۋەل تېغى', fact: 'ئالتۇن ۋە ئالماس بايلىقى' },
        { name: 'نىگېرىيە', capital: 'ئابۇجا', flag: '🇳🇬', landmark: 'زۇما قىيىسى', fact: 'ئەڭ كۆپ نوپۇسقا ئىگە ئافرىقا دۆلىتى' },
        { name: 'ئەرزىنە', capital: 'ئادىس ئابابا', flag: '🇪🇹', landmark: 'ئەرزىنە يۇقىرى تېغلىرى', fact: 'قاتىشنىڭ توپى' },
        { name: 'مەركىزىي ئافرىقا', capital: 'بانگۇئى', flag: '🇨🇫', landmark: 'بومى تېغلىرى', fact: 'يېپيېڭىز ئورمانلىرى' }
      ],
      naturalWonders: [
        { name: 'ساھرا', emoji: '🏜️', description: 'دۇنيادىكى ئەڭ چوڭ قۇرغاق رايون' },
        { name: 'نىل دەرياسى', emoji: '🌊', description: 'دۇنيادىكى ئەڭ ئۇزۇن دەريا' },
        { name: 'كىلىمانجارو تېغى', emoji: '🏔️', description: 'ئافرىقىنىڭ ئەڭ ئېگىز چوققىسى' }
      ],
      animals: ['🦁', '🐘', '🦒', '🦓', '🦛', '🐆'],
      climate: 'ئىسسىق ۋە قۇرغاق',
      funFacts: [
        'ساھرا ۋە ھايۋانلار دۇنياسى',
        'كىشىلىك تارىخنىڭ باشلانغۇچى',
        'كۆپ خىل دىيارى ۋە مەدەنىيەتلەر',
        'باغۋەنچىلىك ۋە بايلىقلار جەھەتتە باي'
      ]
    },
    northAmerica: {
      name: 'شىمالىي ئامېرىكا',
      emoji: '🦅',
      color: 'from-red-600 to-blue-600',
      area: '24.71 مىليون كۋادرات كىلومېتر',
      population: '592 مىليون',
      countries: [
        { name: 'ئامېرىكا', capital: 'ۋاشىنگتون', flag: '🇺🇸', landmark: 'ئازادلىق مۇنارى', fact: 'دۇنيادىكى ئەڭ كۈچلۈك دۆلەت' },
        { name: 'كانادا', capital: 'ئوتتاۋا', flag: '🇨🇦', landmark: 'نىيگارا سەلجىسى', fact: 'دۇنيادىكى ئەڭ چوڭ ئىككىنچى دۆلەت' },
        { name: 'مېكسىكا', capital: 'مېكسىكا شەھىرى', flag: '🇲🇽', landmark: 'چىچىن ئىتزا', fact: 'مەيان ۋە ئازاتېك مەدەنىيىتى' },
        { name: 'كۇبا', capital: 'ھاۋانا', flag: '🇨🇺', landmark: 'خۇسۇسىي ئارىلار', fact: 'سىگار ۋە مۇزىكا مەشھۇر' }
      ],
      naturalWonders: [
        { name: 'گراند كانيون', emoji: '🏞️', description: 'دۇنيادىكى ئەڭ چوڭ يېرىم ئارال' },
        { name: 'نىيگارا سەلجىسى', emoji: '💧', description: 'دۇنيادىكى ئەڭ مەشھۇر سەلجى' },
        { name: 'ئاپالاش تېغلىرى', emoji: '⛰️', description: 'قەدىمىي تاغ سىستېمىسى' }
      ],
      animals: ['🦅', '🐻', '🦌', '🦬', '🐺', '🦊'],
      climate: 'مۇختەلىپ كىلىمات: سۇبتروپىك، مۇلائىم، سۇبئاركتىك',
      funFacts: [
        'تېخنىكا ۋە ئىنوۋاتسىيە مەركىزى',
        'كۆپ مىللەتلىك جەمئىيەت',
        'يۇمشاق كۈچ ۋە مەدەنىيەت تەسىرى',
        'يۇقىرى تەرەققىيات سەۋىيەسى'
      ]
    },
    southAmerica: {
      name: 'جەنۇبىي ئامېرىكا',
      emoji: '🐒',
      color: 'from-green-500 to-yellow-500',
      area: '17.84 مىليون كۋادرات كىلومېتر',
      population: '434 مىليون',
      countries: [
        { name: 'بىرازىلىيە', capital: 'بىرازىلىيا', flag: '🇧🇷', landmark: 'مەسىھ ھەيكىلى', fact: 'ئامازون ئورمانلىرى' },
        { name: 'ئارگېنتىنا', capital: 'بۇئېنوس ئايرېس', flag: '🇦🇷', landmark: 'پېرېتو مۇزخانىسى', fact: 'تەڭگۇ رەقىسى مەشھۇر' },
        { name: 'پېرۇ', capital: 'لىما', flag: '🇵🇪', landmark: 'ماتچۇ پىكچۇ', fact: 'ئىنكا ئىمپېرىيەسى' },
        { name: 'كولومبىيە', capital: 'بوگوتا', flag: '🇨🇴', landmark: 'سالت لىكاتامور', fact: 'كۆپ خىل گۈل ۋە قۇشلار' }
      ],
      naturalWonders: [
        { name: 'ئامازون ئورمانلىرى', emoji: '🌳', description: 'دۇنيادىكى ئەڭ چوڭ يېشىل لۇڭ' },
        { name: 'ئاندېس تېغلىرى', emoji: '⛰️', description: 'دۇنيادىكى ئەڭ ئۇزۇن تاغ سىستېمىسى' },
        { name: 'ئاتاكاما ساھرىسى', emoji: '🏜️', description: 'دۇنيادىكى ئەڭ قۇرغاق رايون' }
      ],
      animals: ['🐒', '🦜', '🐆', '🦥', '🦦', '🐊'],
      climate: 'ئىسسىق ۋە نەم',
      funFacts: [
        'ئامازون ئورمانلىرى دۇنيانىڭ ئۆچكىسى دېيىلىدۇ',
        'كۆپ خىل ھايۋانلار ۋە ئۆسۈملۈكلەر',
        'باشقا قىتئەلەردىن ئايرىم ئېۋولىتسىيە',
        'قەدىمىي ئىنكا ۋە مايا مەدەنىيىتى'
      ]
    },
    australia: {
      name: 'ئوكيانىيە',
      emoji: '🦘',
      color: 'from-cyan-500 to-blue-500',
      area: '8.52 مىليون كۋادرات كىلومېتر',
      population: '44 مىليون',
      countries: [
        { name: 'ئاۋسترالىيە', capital: 'كانبېررا', flag: '🇦🇺', landmark: 'سىدنى ئوپېرا بىناسى', fact: 'تاشقى ئارال دۆلەت' },
        { name: 'يېڭى زېلاندىيە', capital: 'ۋېللىنگتون', flag: '🇳🇿', landmark: 'مىلفورد سۇندۇقى', fact: 'كىۋى قۇشى مەشھۇر' },
        { name: 'پاپۇئا يېڭى گىۋىنېيە', capital: 'پورٹ مورېسبى', flag: '🇵🇬', landmark: 'كوكودا تېغى', fact: 'يۇمشاق ھاۋالى رايون' },
        { name: 'فىجى', capital: 'سۇۋا', flag: '🇫🇯', landmark: 'بېلا كۆلى', fact: 'تاشقى ئارال مەشھۇر' }
      ],
      naturalWonders: [
        { name: 'ئاۋسترالىيە مۇنار رېفى', emoji: '🐠', description: 'دۇنيادىكى ئەڭ چوڭ مۇنار سىستېمىسى' },
        { name: 'ئاۋلۇرۇ', emoji: '🪨', description: 'ئۆزگىچە قىزىل چوققا' },
        { name: 'مىلفورد سۇندۇقى', emoji: '🚢', description: 'تەبىئىي قوياش نۇرى' }
      ],
      animals: ['🦘', '🐨', '🦜', '🐋', '🦈', '🦎'],
      climate: 'ئىسسىق ۋە قۇرغاق',
      funFacts: [
        'تاشقى ئارال دۆلەت',
        'كەڭ مەزگىللەر بويى ئايرىم تەرەققىي قىلغان',
        'كەڭ يېرىم قۇرغاق رايونلار',
        'ئۆزگىچە ھايۋانلار (كانگۇرۇ، كوالا)'
      ]
    },
    antarctica: {
      name: 'ئانتاركتىكا',
      emoji: '🐧',
      color: 'from-blue-100 to-white',
      area: '14.2 مىليون كۋادرات كىلومېتر',
      population: '1000-5000 (ئىلمىي ئىستانسىلار)',
      countries: [],
      naturalWonders: [
        { name: 'قۇتۇپ بۇزلىرى', emoji: '🧊', description: 'دۇنيادىكى ئەڭ چوڭ بۇز قاتلىمى' },
        { name: 'ئانتاركتىكا تېغلىرى', emoji: '🏔️', description: 'تارىختىن بۇيان قاپلانغان تاغلار' },
        { name: 'ئاخىرقى بۇز قېتىمى', emoji: '❄️', description: 'بۇزلىق قۇرۇقلۇق' }
      ],
      animals: ['🐧', '🦭', '🐋', '🐟', '🦐', '🕊️'],
      climate: 'ئىنتايىن سۇغۇق',
      funFacts: [
        'دۇنيادىكى ئەڭ سۇغۇق، ئەڭ قۇرۇق، ئەڭ كۈچلۈك شاماللىق قىتئە',
        'دائىمىي نوپۇس يوق، پەقەت ئىلمىي تەتقىقاتچىلار',
        'دۇنيادىكى ئەڭ كۆپ مۇز يېغىمى %90',
        'ھېچقانداق دۆلەتنىڭ زېمىنى ئەمەس'
      ]
    }
  };

  const naturalFeatures = [
    { type: '🏔️', name: 'تاغ', description: 'يەر يۈزىنىڭ ئەڭ يۇقىرى جايلىرى', example: 'ھىمالايا، ئالب' },
    { type: '🌊', name: 'دېڭىز', description: 'تۇزلۇق سۇ يەتكۈزۈلمىسى', example: 'تىنچ ئوكيان، ئاتلانتىك' },
    { type: '🏜️', name: 'ساھرا', description: 'يېغىن ئاز بولغان قۇرۇق رايونلار', example: 'ساھرا، ئاتاكاما' },
    { type: '🌋', name: 'يانار تاغ', description: 'ماغما ئېتىلىپ چىققان تاغ', example: 'فيۇجى، ۋېسۇۋىيۇس' },
    { type: '🌳', name: 'ئورمان', description: 'زىچ ئۆسۈملۈك ئۆستەڭگىلىرى', example: 'ئامازون، توندرا' },
    { type: '🏞️', name: 'ۋادى', description: 'تاغ ئارىسىدىكى تۆۋەن رايون', example: 'گراند كانيون' },
    { type: '🏝️', name: 'ئارال', description: 'سۇ ئارىلىقىدىكى قۇرۇقلۇق', example: 'مالدىۋ، ھاۋايى' },
    { type: '💧', name: 'سەلجى', description: 'سۇنىڭ يۇقىرىدىن تۆۋەنگە ئېقىشى', example: 'نىيگارا، ئەنگىل' },
    { type: '🚢', name: 'دەريا', description: 'سۇنىڭ ئېقىش يولى', example: 'نىل، ئامۇن' },
    { type: '🏖️', name: 'قۇملۇق', description: 'قۇملىق ساحل', example: 'قىزىل دېڭىز ساحىلى' },
    { type: '🗻', name: 'مۇز تاغ', description: 'مۇز بىلەن قاپلانغان تاغ', example: 'كىلىمانجارو، ئالب' },
    { type: '🌅', name: 'كۆل', description: 'قۇرۇقلۇقتىكى سۇ يەتكۈزۈلمىسى', example: 'بايكال، سۇپېرىئور' }
  ];

  const weatherQuiz = [
    {
      question: 'قايسى رايوندا ھەمىشە سۇغۇق؟',
      options: ['ئانتاركتىكا', 'ئافرىقا', 'ئاسىيا', 'ئاۋسترالىيە'],
      correct: 0,
      fact: 'ئانتاركتىكا - دۇنيادىكى ئەڭ سۇغۇق قىتئە، ئوتتۇرىچە تېمپېراتۇرا -57°C'
    },
    {
      question: 'قايسى دۆلەتتە يازدا قار ياغىدۇ؟',
      options: ['ئاۋسترالىيە', 'كانادا', 'ئىتالىيە', 'جۇڭگو'],
      correct: 1,
      fact: 'كانادانىڭ كۆپ قىسمى سۇبئاركتىك رايوندا، بەزى جايلىرى يازدا قار ياغىدۇ'
    },
    {
      question: 'دۇنيادىكى ئەڭ ئىسسىق جاينىڭ نامى نېمە؟',
      options: ['ساھرا', 'ئاتاكاما', 'دەتھ ۋادى', 'ئامازون'],
      correct: 2,
      fact: 'دەتھ ۋادى - ئامېرىكا، كالېفورنىيە ئىشتاتىدا، ئەڭ يۇقىرى تېمپېراتۇرا 56.7°C'
    }
  ];

  const mapGame = [
    ['🌍', '🏔️', '🌊', '🏜️', '🌋', '🗻', '🏝️'],
    ['🏕️', '🏞️', '🏖️', '🗼', '🏯', '🏟️', '🎪'],
    ['🌅', '🌄', '🌇', '🌉', '🎡', '⛲', '🕌'],
    ['🕍', '⛪', '🛕', '🕋', '🛤️', '🚂', '🚢'],
    ['🛩️', '🚁', '⛵', '🚤', '🏕️', '🎑', '🏕️']
  ];

  const startQuiz = () => {
    setQuizActive(true);
    const randomQuestion = weatherQuiz[Math.floor(Math.random() * weatherQuiz.length)];
    setQuizQuestion(randomQuestion);
  };

  const handleAnswer = (answerIndex) => {
    if (!quizQuestion) return;
    
    if (answerIndex === quizQuestion.correct) {
      setScore(prev => prev + 50);
      alert(`🎉 توغرا! ${quizQuestion.fact}`);
    } else {
      alert(`😅 ئەپسۇس! توغرا جاۋاب: ${quizQuestion.options[quizQuestion.correct]}`);
    }
    
    setQuizActive(false);
    setQuizQuestion(null);
  };

  const handleMapClick = (row, col) => {
    const place = mapGame[row][col];
    const placeNames = {
      '🌍': 'يەر شارى',
      '🏔️': 'تاغ',
      '🌊': 'دېڭىز',
      '🏜️': 'ساھرا',
      '🌋': 'يانار تاغ',
      '🗻': 'مۇز تاغ',
      '🏝️': 'ئارال',
      '🏕️': 'كامپىڭ',
      '🏞️': 'مىللىي پارك',
      '🏖️': 'قۇملۇق',
      '🗼': 'مۇنار',
      '🏯': 'قەدىمىي قورۇق',
      '🏟️': 'ستادىون',
      '🎪': 'سىرك',
      '🌅': 'تۆگۈن',
      '🌄': 'تاغ تۆگۈنى',
      '🌇': 'ئاخشام',
      '🌉': 'كۆۋرۈك',
      '🎡': 'پەيرى گوللۇق',
      '⛲': 'ھەبىبە',
      '🕌': 'جامە',
      '🕍': 'كىنەسە',
      '⛪': 'چېركاۋ',
      '🛕': 'ھىندۇ ئىبادەتخانىسى',
      '🕋': 'كەبە',
      '🛤️': 'تۆمۈر يول',
      '🚂': 'پويىز',
      '🚢': 'كىمە',
      '🛩️': 'ئايروپىلان',
      '🚁': 'تىك ئۇچار',
      '⛵': 'قايىق',
      '🚤': 'تېز قايىق',
      '🎑': 'كەڭ دالا'
    };
    
    const placeName = placeNames[place] || 'مەلۇم ئەمەس جاي';
    
    if (!visitedPlaces.includes(place)) {
      setVisitedPlaces([...visitedPlaces, place]);
      setScore(prev => prev + 10);
    }
    
    setAnimation(`discover-${row}-${col}`);
    setTimeout(() => setAnimation(''), 1000);
    
    alert(`🗺️ ${placeName} نى تاپتىڭىز! ${place}`);
  };

  const changeWeather = () => {
    const weatherKeys = Object.keys(weatherTypes);
    const randomWeather = weatherKeys[Math.floor(Math.random() * weatherKeys.length)];
    setCurrentWeather(randomWeather);
    setShowWeather(true);
    setTimeout(() => setShowWeather(false), 3000);
  };

  const toggleTime = () => {
    setCurrentTime(currentTime === 'day' ? 'night' : 'day');
  };

  return (
    <div className={`p-4 md:p-6 min-h-screen transition-all duration-1000 ${
      currentTime === 'day' 
        ? 'bg-gradient-to-br from-blue-50 to-cyan-50' 
        : 'bg-gradient-to-br from-gray-900 to-blue-900 text-white'
    }`} dir="rtl">
      
      {/* بېشىدىكى قىسم */}
      <div className="mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <GlobeAltIcon className={`h-12 w-12 ${currentTime === 'day' ? 'text-blue-600' : 'text-blue-400'}`} />
                <SparklesIcon className="absolute -top-2 -right-2 h-6 w-6 text-yellow-500 animate-pulse" />
              </div>
              <div>
                <h1 className={`text-3xl md:text-4xl font-bold font-[UKIJ Tuz] ${
                  currentTime === 'day' 
                    ? 'bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent' 
                    : 'text-white'
                }`}>
                  جۇغراپىيە سەپەرى
                </h1>
                <p className={`mt-2 font-[UKIJ Nasq] text-lg ${currentTime === 'day' ? 'text-gray-700' : 'text-gray-300'}`}>
                  دۇنيا سەپەرى، قىتئەلەر ۋە دۆلەتلەر بىلەن تونۇشۇڭ
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className={`${currentTime === 'day' ? 'bg-gradient-to-r from-blue-100 to-cyan-100' : 'bg-gray-800'} px-6 py-3 rounded-2xl flex items-center gap-3 border ${currentTime === 'day' ? 'border-blue-200' : 'border-gray-700'}`}>
              <div className="relative">
                <TrophyIcon className={`h-8 w-8 ${currentTime === 'day' ? 'text-yellow-600' : 'text-yellow-400'}`} />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className={`text-sm ${currentTime === 'day' ? 'text-blue-800' : 'text-gray-300'} font-[UKIJ Nasq]`}>سەپەر نۇقتىسى</p>
                <span className={`font-bold text-2xl ${currentTime === 'day' ? 'text-blue-900' : 'text-white'}`}>{score}</span>
              </div>
            </div>
            
            <button 
              onClick={toggleTime}
              className={`p-3 rounded-full ${currentTime === 'day' ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-800 text-blue-400'}`}
            >
              {currentTime === 'day' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* قىتئە تاللاش بۆلىكى */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 font-[UKIJ Tuz] flex items-center gap-2">
          <MapIcon className={`h-6 w-6 ${currentTime === 'day' ? 'text-green-600' : 'text-green-400'}`} />
          <span className={currentTime === 'day' ? 'text-gray-800' : 'text-white'}>قىتئەلەرنى تاللاش</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
          {Object.entries(continents).map(([key, continent]) => (
            <button
              key={key}
              onClick={() => setSelectedContinent(key)}
              className={`p-3 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                selectedContinent === key 
                  ? `bg-gradient-to-br ${continent.color} text-white scale-105 shadow-lg` 
                  : `${currentTime === 'day' ? 'bg-white hover:bg-gray-100' : 'bg-gray-800 hover:bg-gray-700'} ${currentTime === 'day' ? 'text-gray-700' : 'text-gray-300'}`
              }`}
            >
              <span className="text-3xl mb-2">{continent.emoji}</span>
              <span className="font-bold text-center text-sm font-[UKIJ Nasq]">{continent.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* تاللانغان قىتئەنىڭ تەپسىلاتى */}
      <div className="mb-8">
        <div className={`${currentTime === 'day' ? 'bg-white' : 'bg-gray-800'} rounded-3xl p-6 shadow-lg border ${currentTime === 'day' ? 'border-gray-200' : 'border-gray-700'}`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className={`bg-gradient-to-br ${continents[selectedContinent].color} p-4 rounded-2xl`}>
                <span className="text-4xl">{continents[selectedContinent].emoji}</span>
              </div>
              <div>
                <h2 className={`text-2xl md:text-3xl font-bold font-[UKIJ Tuz] ${currentTime === 'day' ? 'text-gray-800' : 'text-white'}`}>
                  {continents[selectedContinent].name}
                </h2>
                <div className="flex flex-wrap gap-4 mt-2">
                  <div className={`px-3 py-1 rounded-full text-sm ${currentTime === 'day' ? 'bg-blue-100 text-blue-800' : 'bg-blue-900 text-blue-200'}`}>
                    يەر مەيدانى: {continents[selectedContinent].area}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm ${currentTime === 'day' ? 'bg-green-100 text-green-800' : 'bg-green-900 text-green-200'}`}>
                    نوپۇس: {continents[selectedContinent].population}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm ${currentTime === 'day' ? 'bg-yellow-100 text-yellow-800' : 'bg-yellow-900 text-yellow-200'}`}>
                    كىلىمات: {continents[selectedContinent].climate}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={startQuiz}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-bold hover:scale-105 transition-transform text-sm"
              >
                سىناش
              </button>
              <button 
                onClick={changeWeather}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-bold hover:scale-105 transition-transform text-sm"
              >
                ھاۋا رايى
              </button>
            </div>
          </div>

          {/* دۆلەتلەر */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6 font-[UKIJ Tuz] flex items-center gap-2">
              <FlagIcon className={`h-6 w-6 ${currentTime === 'day' ? 'text-red-600' : 'text-red-400'}`} />
              <span className={currentTime === 'day' ? 'text-gray-800' : 'text-white'}>دۆلەتلەر</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {continents[selectedContinent].countries.map((country, index) => (
                <div key={index} className={`${currentTime === 'day' ? 'bg-gray-50 hover:bg-white' : 'bg-gray-700 hover:bg-gray-600'} p-4 rounded-xl shadow-sm transition-all hover:shadow-md`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{country.flag}</div>
                      <div>
                        <h4 className="font-bold text-lg font-[UKIJ Tuz]">{country.name}</h4>
                        <p className={`text-sm ${currentTime === 'day' ? 'text-gray-600' : 'text-gray-300'} font-[UKIJ Nasq]`}>پايتەخت: {country.capital}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className={`text-sm font-bold mb-1 ${currentTime === 'day' ? 'text-blue-700' : 'text-blue-300'}`}>مەشھۇر يادىكارلىق:</div>
                    <p className={`text-sm ${currentTime === 'day' ? 'text-gray-700' : 'text-gray-300'}`}>{country.landmark}</p>
                  </div>
                  <div className={`text-xs px-3 py-1 rounded-full inline-block ${currentTime === 'day' ? 'bg-yellow-100 text-yellow-800' : 'bg-yellow-900 text-yellow-200'}`}>
                    {country.fact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* تەبىئىي گۈزەللىكلەر */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6 font-[UKIJ Tuz] flex items-center gap-2">
              <CameraIcon className={`h-6 w-6 ${currentTime === 'day' ? 'text-green-600' : 'text-green-400'}`} />
              <span className={currentTime === 'day' ? 'text-gray-800' : 'text-white'}>تەبىئىي گۈزەللىكلەر</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {continents[selectedContinent].naturalWonders.map((wonder, index) => (
                <div key={index} className={`${currentTime === 'day' ? 'bg-gradient-to-br from-green-50 to-emerald-50' : 'bg-gradient-to-br from-gray-700 to-green-900'} p-5 rounded-xl border ${currentTime === 'day' ? 'border-green-200' : 'border-green-800'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-4xl">{wonder.emoji}</div>
                    <div>
                      <h4 className="font-bold text-lg font-[UKIJ Tuz]">{wonder.name}</h4>
                      <p className={`text-sm ${currentTime === 'day' ? 'text-gray-600' : 'text-gray-300'}`}>{wonder.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ھايۋانلار ۋە قىزىقارلىق پاكىتلار */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz] flex items-center gap-2">
                <span className={currentTime === 'day' ? 'text-orange-600' : 'text-orange-400'}>🐾</span>
                <span className={currentTime === 'day' ? 'text-gray-800' : 'text-white'}>ھايۋانلار</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {continents[selectedContinent].animals.map((animal, index) => (
                  <div key={index} className={`text-4xl p-3 rounded-xl ${currentTime === 'day' ? 'bg-orange-50' : 'bg-gray-700'}`}>
                    {animal}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz] flex items-center gap-2">
                <AcademicCapIcon className={`h-6 w-6 ${currentTime === 'day' ? 'text-purple-600' : 'text-purple-400'}`} />
                <span className={currentTime === 'day' ? 'text-gray-800' : 'text-white'}>قىزىقارلىق پاكىتلار</span>
              </h3>
              <div className="space-y-3">
                {continents[selectedContinent].funFacts.map((fact, index) => (
                  <div key={index} className={`flex items-start gap-3 ${currentTime === 'day' ? 'text-gray-700' : 'text-gray-300'}`}>
                    <div className="mt-1">✨</div>
                    <p className="font-[UKIJ Nasq]">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ھاۋا رايى كۆرسىتىش */}
          {showWeather && (
            <div className="mb-8">
              <div className={`bg-gradient-to-br ${weatherTypes[currentWeather].color} p-6 rounded-2xl text-center`}>
                <div className="text-6xl mb-4">{weatherTypes[currentWeather].emoji}</div>
                <h4 className="text-2xl font-bold font-[UKIJ Tuz] text-white mb-2">
                  {continents[selectedContinent].name} رايونىدىكى ھاۋا رايى
                </h4>
                <p className="text-xl text-white font-[UKIJ Nasq]">{weatherTypes[currentWeather].desc}</p>
              </div>
            </div>
          )}

          {/* سوئال-جاۋاب بۆلىكى */}
          {quizActive && quizQuestion && (
            <div className="mb-8">
              <div className={`${currentTime === 'day' ? 'bg-gradient-to-r from-blue-50 to-cyan-50' : 'bg-gradient-to-r from-gray-800 to-blue-900'} rounded-2xl p-8 border ${currentTime === 'day' ? 'border-blue-200' : 'border-blue-700'}`}>
                <h3 className="text-2xl font-bold mb-6 font-[UKIJ Tuz] text-center">
                  جۇغراپىيە بىلىم سىناقلىرى
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-center">
                    {quizQuestion.question}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {quizQuestion.options.map((option, oIndex) => (
                      <button
                        key={oIndex}
                        onClick={() => handleAnswer(oIndex)}
                        className={`p-4 ${currentTime === 'day' ? 'bg-white hover:bg-blue-50' : 'bg-gray-700 hover:bg-gray-600'} rounded-xl text-center font-[UKIJ Nasq] transition-all duration-300 hover:scale-105 border ${currentTime === 'day' ? 'border-blue-100' : 'border-gray-600'}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* دۇنيا خەرىتىسى ئويۇنى */}
      <div className="mb-8">
        <div className={`${currentTime === 'day' ? 'bg-gradient-to-br from-yellow-50 to-orange-50' : 'bg-gradient-to-br from-gray-800 to-orange-900'} rounded-2xl p-6 shadow-lg border ${currentTime === 'day' ? 'border-yellow-200' : 'border-orange-700'}`}>
          <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz] flex items-center gap-2">
            <GlobeAltIcon className={`h-6 w-6 ${currentTime === 'day' ? 'text-yellow-600' : 'text-yellow-400'}`} />
            <span className={currentTime === 'day' ? 'text-gray-800' : 'text-white'}>دۇنيا خەرىتىسى ئويۇنى</span>
          </h3>
          
          <div className="mb-6">
            <p className={`text-center mb-6 font-[UKIJ Nasq] ${currentTime === 'day' ? 'text-gray-700' : 'text-gray-300'}`}>
              خەرىتىدىكى تۈرلۈك جاي-جايالارنى تېپىپ، ئۇلارنىڭ ئىسىملىرىنى بىلىڭ
            </p>
            
            <div className="grid grid-cols-7 gap-2 mb-6">
              {mapGame.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <button
                      key={`${rowIndex}-${cellIndex}`}
                      onClick={() => handleMapClick(rowIndex, cellIndex)}
                      className={`aspect-square flex items-center justify-center text-xl md:text-2xl rounded-lg transition-all duration-300 hover:scale-110 ${
                        animation === `discover-${rowIndex}-${cellIndex}` 
                          ? 'animate-pulse bg-gradient-to-br from-green-400 to-yellow-400' 
                          : currentTime === 'day' 
                            ? 'bg-gradient-to-br from-yellow-100 to-orange-100' 
                            : 'bg-gradient-to-br from-gray-700 to-gray-900'
                      }`}
                    >
                      {cell}
                    </button>
                  ))}
                </React.Fragment>
              ))}
            </div>
            
            <div className={`text-center ${currentTime === 'day' ? 'text-gray-600' : 'text-gray-400'} font-[UKIJ Nasq] mb-6`}>
              {visitedPlaces.length === 0 
                ? 'تېخى ھېچقانداق جاي تاپالمىدىڭىز. يۇقىرىدىكى نىشانلارنى بېسىپ تېپىڭ!' 
                : `سىز ${visitedPlaces.length} خىل جاي تاپتىڭىز! 🎉`}
            </div>
            
            {visitedPlaces.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {visitedPlaces.map((place, index) => (
                  <div key={index} className="text-2xl px-3 py-2 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
                    {place}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* تەبىئىي گۈزەللىكلەر تونۇشتۇرۇش */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-6 font-[UKIJ Tuz]">
          <span className={currentTime === 'day' ? 'text-gray-800' : 'text-white'}>تەبىئىي گۈزەللىكلەر</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {naturalFeatures.map((feature, index) => (
            <div key={index} className={`${currentTime === 'day' ? 'bg-white hover:bg-gray-50' : 'bg-gray-800 hover:bg-gray-700'} p-4 rounded-xl shadow-sm text-center transition-all hover:shadow-md`}>
              <div className="text-4xl mb-2">{feature.type}</div>
              <h4 className="font-bold font-[UKIJ Tuz] mb-1">{feature.name}</h4>
              <p className={`text-xs mb-1 ${currentTime === 'day' ? 'text-gray-600' : 'text-gray-400'}`}>{feature.description}</p>
              <p className={`text-xs ${currentTime === 'day' ? 'text-blue-600' : 'text-blue-400'}`}>{feature.example}</p>
            </div>
          ))}
        </div>
      </div>

      {/* سەپەر خاتىرىسى */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz]">
          <span className={currentTime === 'day' ? 'text-gray-800' : 'text-white'}>سەپەر خاتىرىڭىز</span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {Object.entries(continents).map(([key, continent]) => (
            <div key={key} className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              key === selectedContinent 
                ? `bg-gradient-to-br ${continent.color} text-white` 
                : currentTime === 'day' 
                  ? 'bg-gray-100 text-gray-700' 
                  : 'bg-gray-700 text-gray-300'
            }`}>
              <span className="text-lg">{continent.emoji}</span>
              <span className="font-[UKIJ Nasq]">{continent.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* مۇھىم ئەسكەرتىش */}
      <div className={`${currentTime === 'day' ? 'bg-gradient-to-r from-green-50 to-emerald-50' : 'bg-gradient-to-r from-green-900 to-emerald-900'} p-6 rounded-2xl border ${currentTime === 'day' ? 'border-green-200' : 'border-green-700'}`}>
        <div className="flex items-center gap-3 mb-4">
          <MapIcon className={`h-8 w-8 ${currentTime === 'day' ? 'text-green-600' : 'text-green-400'}`} />
          <h3 className="text-xl font-bold font-[UKIJ Tuz]">
            <span className={currentTime === 'day' ? 'text-green-800' : 'text-green-200'}>جۇغراپىيەنى قانداق ئۆگىنىمىز؟</span>
          </h3>
        </div>
        <ul className={`space-y-2 ${currentTime === 'day' ? 'text-green-700' : 'text-green-300'} font-[UKIJ Nasq]`}>
          <li className="flex items-center gap-2">🗺️ خەرىتىلەرنى كۆرۈڭ ۋە چۈشىنىڭ</li>
          <li className="flex items-center gap-2">📖 ھەر بىر دۆلەت ھەققىدە ئوقۇڭ</li>
          <li className="flex items-center gap-2">🌦️ كىلىمات ۋە ھاۋا رايىنى چۈشىنىڭ</li>
          <li className="flex items-center gap-2">🐾 ھايۋانلار ۋە ئۆسۈملۈكلەرنى ئۆگىنىڭ</li>
          <li className="flex items-center gap-2">🏛️ مەدەنىيەت ۋە تارىخنى ئۆگىنىڭ</li>
        </ul>
      </div>

      {/* ئانیماتسىيە كونتىنېرى */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        {showWeather && (
          <>
            <div className="absolute top-1/4 left-1/4 text-4xl animate-bounce">
              {weatherTypes[currentWeather].emoji}
            </div>
            <div className="absolute top-1/3 right-1/4 text-3xl animate-spin">🌍</div>
            <div className="absolute bottom-1/4 left-1/3 text-2xl animate-ping">🗺️</div>
          </>
        )}
      </div>
    </div>
  );
};

export default GeographyComponent;