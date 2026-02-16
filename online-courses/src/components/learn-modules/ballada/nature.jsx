import React, { useState, useEffect, useRef } from 'react';
import { 
  FireIcon, 
  SunIcon, 
  CubeIcon , 
  CloudIcon,
  SparklesIcon,
  HeartIcon,
  ShieldCheckIcon,
  TrophyIcon,
  AcademicCapIcon,
  CameraIcon,
  MusicalNoteIcon,
  MapIcon
} from '@heroicons/react/24/solid';

const NatureComponent = () => {
  const [selectedHabitat, setSelectedHabitat] = useState('forest');
  const [currentSeason, setCurrentSeason] = useState('spring');
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [gameType, setGameType] = useState('');
  const [currentAnimal, setCurrentAnimal] = useState(null);
  const [plantGrowth, setPlantGrowth] = useState(0);
  const [animation, setAnimation] = useState('');
  const [showConservation, setShowConservation] = useState(false);
  const [discoveredAnimals, setDiscoveredAnimals] = useState([]);
  const [plantedTrees, setPlantedTrees] = useState(0);
  
  const habitats = {
    forest: {
      name: 'ئورمان',
      emoji: '🌳',
      color: 'from-green-500 to-emerald-500',
      description: 'زىچ ئۆسۈملۈكلەر ۋە ھايۋانلارنىڭ ئانا ۋەتىنى',
      animals: [
        { name: 'ئېيىق', emoji: '🐻', sound: 'ھۈررر', diet: 'ھەم ئۆسۈملۈك ھەم گۆش', fact: 'قىشتا قىش ئۇخلاشقا كىرىدۇ' },
        { name: 'تۈلكە', emoji: '🦊', sound: 'ڧاڧاڧا', diet: 'كىچىك ھايۋانلار', fact: 'ئىنتايىن ئەقىللىق ھايۋان' },
        { name: 'توشقان', emoji: '🐰', sound: '...', diet: 'ئوت-چۆپ', fact: 'ئارقا ئىزى بىلەن يۆنىلىش كۆرسىتىدۇ' },
        { name: 'بۈركۈت', emoji: '🦅', sound: 'ئىي-ئىي', diet: 'كىچىك ھايۋانلار', fact: 'ئېگىز ئۇچالايدۇ' },
        { name: 'باڭگىر', emoji: '🦉', sound: 'ھۇ-ھۇ', diet: 'كىچىك ھايۋانلار', fact: 'كېچىدە كۆرەلەيدۇ' },
        { name: 'سىچان', emoji: '🐿️', sound: 'چىرق-چىرق', diet: 'يەڭگە، مېۋە', fact: 'قىش ئۈچۈن ئازىق توپلايدۇ' }
      ],
      plants: [
        { name: 'چوڭ دەرەخ', emoji: '🌲', type: 'قويۇق ياپراقلىق', age: '100+ يىل', fact: 'ئوكسىگېن بىلەن تەمىنلىگۈچى' },
        { name: 'سامىساق', emoji: '🍄', type: 'زامباش', age: 'بىر ھەپتىدە', fact: 'يەر ئاستىدا ئۆسىدۇ' },
        { name: 'چۆپ', emoji: '🌿', type: 'يۇمشاق گىياھ', age: 'بىر يىلدا', fact: 'ھايۋانلارنىڭ ئاساسىي ئازىقى' },
        { name: 'چېچەك', emoji: '🌸', type: 'رەڭدار', age: 'بىر پاسىلدا', fact: 'ھەشەراتلارنى جەلپ قىلىدۇ' },
        { name: 'ئەنجىر', emoji: '🌰', type: 'يەڭگە', age: 'بىر يىلدا', fact: 'ھايۋانلار ئۈچۈن ئازىق' },
        { name: 'يېپىشقاق ئۆسۈملۈك', emoji: '🌱', type: 'يېپىشقاق', age: 'بىر يىلدا', fact: 'باشقا دەرەخلەرگە يېپىشىدۇ' }
      ],
      sounds: ['🌬️ شەپەللەش', '🐦 قۇش ئاۋازى', '🍃 ياپراق شارقىلدىشى', '🌧️ يامغۇر چاققىنى'],
      funFacts: [
        'ئورمانلار يەر شارىنىڭ ئۆچكىسى دېيىلىدۇ',
        'بىر چوڭ دەرەخ 4 كىشىگە يەتەرلىك ئوكسىگېن بىلەن تەمىنلىيەلەيدۇ',
        'ئورمانلار يەر شارىنىڭ %30 نى ئىگىلەيدۇ',
        'ئورمانلار سۇ ۋە ھاۋانى ساپلاشتۇرىدۇ'
      ]
    },
    ocean: {
      name: 'ئوكيان',
      emoji: '🌊',
      color: 'from-blue-500 to-cyan-500',
      description: 'سۇ ئاستىدىكى گۈزەل دۇنيا',
      animals: [
        { name: 'دىڭھەزپىلى', emoji: '🐬', sound: 'چىىپ-چىىپ', diet: 'بېلىق', fact: 'ئەقىللىق ۋە دوستپەرۋەر' },
        { name: 'ئاختەپۇت', emoji: '🐙', sound: '...', diet: 'قىسقۇچ بالىق', fact: '8 قولى بار، رەڭگىنى ئۆزگەرتەلەيدۇ' },
        { name: 'كۆركەم بالىق', emoji: '🐠', sound: '...', diet: 'كىچىك ھايۋانلار', fact: 'ئەڭ رەڭدار ھايۋانلارنىڭ بىرى' },
        { name: 'سىياھ بالىق', emoji: '🦈', sound: '...', diet: 'بېلىق', fact: 'تېشلىرى ھەر يىل ئالمىشىدۇ' },
        { name: 'بېلىق', emoji: '🐡', sound: '...', diet: 'كىچىك ھايۋانلار', fact: 'خورا بولغاندا شىشىيدۇ' },
        { name: 'دېڭىز يىلانى', emoji: '🐢', sound: '...', diet: 'كۆك ياشىل', fact: '100 يىلدىن ئاشايدۇ' }
      ],
      plants: [
        { name: 'دېڭىز يۆسۈنى', emoji: '🌿', type: 'سۇ ئۆسۈملۈكى', age: 'بىر يىلدا', fact: 'سۇ ئاستىدا ئۆسىدۇ' },
        { name: 'مەرۋايىت', emoji: '🪸', type: 'جەمئىيەتلىك ھايۋان', age: 'مىڭ يىل', fact: 'مۇنارنى قۇرىدۇ' },
        { name: 'دېڭىز گۈلى', emoji: '🌸', type: 'ھايۋان', age: 'بىر يىلدا', fact: 'ھەقىقىي گۈل ئەمەس' },
        { name: 'كۆك ياشىل', emoji: '🌱', type: 'سۇ ئۆسۈملۈكى', age: 'بىر ھەپتىدە', fact: 'بېلىقلارنىڭ ئازىقى' },
        { name: 'دېڭىز كەلەمى', emoji: '🌴', type: 'سۇ ئۆسۈملۈكى', age: 'بىر يىلدا', fact: 'تېز ئۆسىدۇ' },
        { name: 'دېڭىز ئۇزۇملۇقى', emoji: '🍇', type: 'سۇ ئۆسۈملۈكى', age: 'بىر يىلدا', fact: 'تۇخۇم شەكلىدە' }
      ],
      sounds: ['🌊 دولقۇن', '🐚 دېڭىز قۇلىقى', '💦 سۇ ئېقىشى', '🌪️ تۈپۈرۈك'],
      funFacts: [
        'ئوكيانلار يەر شارىنىڭ 71% نى ئىگىلەيدۇ',
        'دېڭىز ئۆچكىسى دۇنيانىڭ %50 ئوكسىگېنىنى بىلەن تەمىنلىگۈچى',
        'ئوكيان ئاستىدىكى %95 نى تەتقىق قىلمىغان',
        'دۇنيادىكى ئەڭ چوڭ ھايۋان كۆك بېلىق'
      ]
    },
    desert: {
      name: 'ساھرا',
      emoji: '🏜️',
      color: 'from-yellow-500 to-orange-500',
      description: 'قۇرغاق ۋە ئىسسىق رايونلار',
      animals: [
        { name: 'تۆگە', emoji: '🐪', sound: 'ئۆر-ئۆر', diet: 'ئوت-چۆپ', fact: 'ئۈچ ئاي ئىچىدە سۇ ئىچمەيدۇ' },
        { name: 'ئاقچە', emoji: '🦂', sound: '...', diet: 'ھەشەراتلار', fact: 'زەھەرلىك قۇرۇق' },
        { name: 'كەلتە', emoji: '🦎', sound: '...', diet: 'ھەشەراتلار', fact: 'رەڭگىنى ئۆزگەرتەلەيدۇ' },
        { name: 'يىلان', emoji: '🐍', sound: 'تەس-تەس', diet: 'كىچىك ھايۋانلار', fact: 'ئىزسىز يۈرەلەيدۇ' },
        { name: 'ساھرا تۇشقىنى', emoji: '🐰', sound: '...', diet: 'ئوت-چۆپ', fact: 'قۇلاقلىرى ئىسسىقنى تارقىتىدۇ' },
        { name: 'شىر', emoji: '🦁', sound: 'ھۈررر', diet: 'گۆش', fact: 'ساھرانىڭ پادىشاھى' }
      ],
      plants: [
        { name: 'كەكتۇس', emoji: '🌵', type: 'سۇ ساقلاش', age: '100+ يىل', fact: 'سۇنى گۆشىدە ساقلايدۇ' },
        { name: 'خورما', emoji: '🌴', type: 'قۇرغاقچىلىققا چىداملىق', age: '100+ يىل', fact: 'تاتلىق مېۋىسى بار' },
        { name: 'ساھرا گۈلى', emoji: '🌺', type: 'قىسقا ھايات', age: 'بىر ھەپتىدە', fact: 'يامغۇردىن كېيىن ئېچىلىدۇ' },
        { name: 'ساھرا ئوتى', emoji: '🌾', type: 'قۇرغاقچىلىققا چىداملىق', age: 'بىر يىلدا', fact: 'كەڭ تامىزلىق' },
        { name: 'ساھرا بۇددىسى', emoji: '🌿', type: 'ئوت', age: 'بىر يىلدا', fact: 'دەرىخىسىز ئۆسىدۇ' },
        { name: 'قۇم ئۆسۈملۈكى', emoji: '🌱', type: 'تېز ئۆسۈش', age: 'بىر ھەپتىدە', fact: 'قۇمدا ئۆسىدۇ' }
      ],
      sounds: ['💨 بۇراۋىل', '🌪️ قۇم بورانى', '🌞 قۇياش چاققىنى', '🏜️ قۇم ئۇچۇشى'],
      funFacts: [
        'ساھرا دۇنيانىڭ %33 نى ئىگىلەيدۇ',
        'دۇنيادىكى ئەڭ چوڭ ساھرا ساھرا',
        'كەكتۇسلار يېپىشقاق ئۆسۈملۈك ئەمەس',
        'تۆگىلەر 40-50°C تېمپېراتۇرادا ياشاشقا ئادەتلەنگەن'
      ]
    },
    arctic: {
      name: 'تۇندرا',
      emoji: '❄️',
      color: 'from-blue-100 to-cyan-100',
      description: 'مۇز ۋە قارلار دۇنياسى',
      animals: [
        { name: 'ئاق ئېيىق', emoji: '🐻‍❄️', sound: 'ھۈررر', diet: 'پۇقا، بېلىق', fact: 'تېرىسى قارا، تۈكى ئاق' },
        { name: 'پۇقا', emoji: '🐧', sound: 'ئىي-ئىي', diet: 'بېلىق', fact: 'ئۇچالمايدۇ، ئۇزۇن سۇ ئۈزەلەيدۇ' },
        { name: 'تۈلۈك', emoji: '🦊', sound: 'ڧاڧاڧا', diet: 'كىچىك ھايۋانلار', fact: 'قىشتا ئاق، يازدا قوڭۇر بولىدۇ' },
        { name: 'تېمىرھىل', emoji: '🦭', sound: 'باغ-باغ', diet: 'بېلىق', fact: 'قۇرۇقلۇقتا ئاۋۋال ئۇششاق' },
        { name: 'پۇترا', emoji: '🐋', sound: 'ئۇۇۇۇ', diet: 'كىچىك ھايۋانلار', fact: 'دۇنيادىكى ئەڭ چوڭ ھايۋان' },
        { name: 'قۇتۇپ ئىتى', emoji: '🐕', sound: 'ھۈۋ-ھۈۋ', diet: 'ھەممە نەرسە', fact: 'ئۇزۇن مۇساپىلەرگە چىداملىق' }
      ],
      plants: [
        { name: 'مۇز گۈلى', emoji: '❄️', type: 'مۇزدا ئۆسىدۇ', age: 'بىر پاسىلدا', fact: 'ھەقىقىي گۈل ئەمەس' },
        { name: 'تۇندرا ئوتى', emoji: '🌿', type: 'قىسقا ئۆسۈش', age: 'بىر يىلدا', fact: 'يەر ئاستىدا ئۆسىدۇ' },
        { name: 'قار گۈلى', emoji: '🌸', type: 'قىسقا ھايات', age: 'بىر ھەپتىدە', fact: 'قار ئاستىدا ئۆسىدۇ' },
        { name: 'مۇز يۆسۈنى', emoji: '🌱', type: 'يۇمشاق گىياھ', age: 'بىر يىلدا', fact: 'تۇندرا رايونىدا ئۆسىدۇ' },
        { name: 'قار بۇددىسى', emoji: '🍄', type: 'زامباش', age: 'بىر يىلدا', fact: 'قاردا ئۆسىدۇ' },
        { name: 'قۇتۇپ ئۆسۈملۈكى', emoji: '🌳', type: 'تۆۋەن دەرەخ', age: '100+ يىل', fact: 'تۆۋەن ئۆسىدۇ' }
      ],
      sounds: ['❄️ قار چاققىنى', '🌬️ شىددەتلىك شامال', '🧊 مۇز يېرىلىشى', '🏔️ تاغ گۈرۈلدىشى'],
      funFacts: [
        'تۇندرا دۇنيانىڭ %20 نى ئىگىلەيدۇ',
        'يەر شارىدىكى ئەڭ سۇغۇق رايون',
        'يەر ئاستىدا مەڭگۈلۈك مۇز بار',
        'كۈننىڭ 24 سائەت چۇشىدۇ'
      ]
    },
    jungle: {
      name: 'ئۇيغۇر',
      emoji: '🌴',
      color: 'from-green-600 to-lime-500',
      description: 'ئىسسىق ۋە قۇرغاق،يېرىم نەم ئورمانلار',
      animals: [
        { name: 'يولۋاس', emoji: '🐯', sound: 'ھۈررر', diet: 'گۆش', fact: 'ئەڭ چوڭ ئىتتىر' },
        { name: 'مايمۇن', emoji: '🐒', sound: 'ئۇ-ئۇ-ئۇ', diet: 'مېۋە', fact: 'ئەقىللىق ۋە ئۇسۇللۇق' },
        { name: 'پىل', emoji: '🐘', sound: 'ۋۇۇۇ', diet: 'ئوت-چۆپ', fact: 'ئەڭ چوڭ قۇرۇقلۇق ھايۋانى' },
        { name: 'ئىناڭ', emoji: '🦏', sound: 'ھۇۇۇ', diet: 'ئوت-چۆپ', fact: 'مۇڭۇزى بار' },
        { name: 'پەلەڭگە', emoji: '🐆', sound: 'ھۈررر', diet: 'گۆش', fact: 'ئەڭ تېز يۈرگۈچى ھايۋان' },
        { name: 'تاۋۇس', emoji: '🦚', sound: 'ئىي-ئىي', diet: 'ھەشەراتلار', fact: 'ئەڭ گۈزەل قۇش' }
      ],
      plants: [
        { name: 'قوڭۇر دەرەخ', emoji: '🌴', type: 'ئىگىز دەرەخ', age: '100+ يىل', fact: 'يۇمشاق ئېغىزلىق' },
        { name: 'لۋيانا', emoji: '🌺', type: 'رەڭدار گۈل', age: 'بىر يىلدا', fact: 'كەڭ رەڭلىك' },
        { name: 'ئورمان بۇددىسى', emoji: '🌿', type: 'زامباش', age: 'بىر يىلدا', fact: 'تېز ئۆسىدۇ' },
        { name: 'يەڭگە دەرىخى', emoji: '🌰', type: 'يەڭگەلىك', age: '50+ يىل', fact: 'كۆپ يېڭگە بېرىدۇ' },
        { name: 'لۋيانا ئۆسۈملۈكى', emoji: '🌸', type: 'سەيلىگۈچى', age: 'بىر يىلدا', fact: 'ھەشەراتلارنى جەلپ قىلىدۇ' },
        { name: 'ئۇيغۇر ئوتى', emoji: '🌱', type: 'يۇمشاق گىياھ', age: 'بىر يىلدا', fact: 'زىچ ئۆسىدۇ' }
      ],
      sounds: ['🐒 مايمۇن چاققىنى', '🌧️ يامغۇر چاققىنى', '🐦 قۇش ئاۋازى', '🍃 ياپراق شارقىلدىشى'],
      funFacts: [
        'ئۇيغۇر دۇنيادىكى ئىككىنجى ئەڭ كۆپ  قۇرغاق خىللىق ھايۋانلارنى ساقلايدۇ',
        'ئۇچ تاغ ئۇيغۇرنى  دۇنيانىڭ %20 نەم ھاۋاسنى  توسىدۇ',
        'ھەر 10 مىنۇتتا بىر خىل ھايۋان يوقىلىدۇ',
        'ئۇيغۇر يەر شارىنىڭ %1 نى ئىگىلەيدۇ'
      ]
    },
    mountain: {
      name: 'تاغ',
      emoji: '🏔️',
      color: 'from-gray-500 to-blue-300',
      description: 'يۇقىرى ۋە سەلبىي رايونلار',
      animals: [
        { name: 'قويچى قۇش', emoji: '🦅', sound: 'ئىي-ئىي', diet: 'كىچىك ھايۋانلار', fact: 'ئېگىز ئۇچالايدۇ' },
        { name: 'تاغ ئېچكىسى', emoji: '🐐', sound: 'مە-مە', diet: 'ئوت-چۆپ', fact: 'قىيىش جايغا چىقىش ئىقتىدارى بار' },
        { name: 'تاغ ئېيىقى', emoji: '🐻', sound: 'ھۈررر', diet: 'ھەممە نەرسە', fact: 'تاغلاردا ياشايدۇ' },
        { name: 'يۇمار', emoji: '🦌', sound: 'ئۆر-ئۆر', diet: 'ئوت-چۆپ', fact: 'مۆۋجىتى بار' },
        { name: 'تاغ تۈلكىسى', emoji: '🦊', sound: 'ڧاڧاڧا', diet: 'كىچىك ھايۋانلار', fact: 'يۇقىرى رايونلاردا ياشايدۇ' },
        { name: 'تاغ قۇشى', emoji: '🐦', sound: 'چىىپ-چىىپ', diet: 'ھەشەراتلار', fact: 'يۇقىرى ئۇچىدۇ' }
      ],
      plants: [
        { name: 'تاغ گۈلى', emoji: '🌺', type: 'رەڭدار گۈل', age: 'بىر يىلدا', fact: 'يۇقىرى رايونلاردا ئۆسىدۇ' },
        { name: 'تاغ ئوتى', emoji: '🌿', type: 'تاغ گىياھى', age: 'بىر يىلدا', fact: 'قىيىش شارائىتتا ئۆسىدۇ' },
        { name: 'تاغ دەرىخى', emoji: '🌲', type: 'چىڭ دەرەخ', age: '200+ يىل', fact: 'سوغۇققا چىداملىق' },
        { name: 'تاغ بۇددىسى', emoji: '🍄', type: 'زامباش', age: 'بىر يىلدا', fact: 'سەلبىي رايوندا ئۆسىدۇ' },
        { name: 'تاغ يۆسۈنى', emoji: '🌱', type: 'يۇمشاق گىياھ', age: 'بىر يىلدا', fact: 'قار ئاستىدا ئۆسىدۇ' },
        { name: 'تاغ كۆكى', emoji: '🌳', type: 'تۆۋەن دەرەخ', age: '100+ يىل', fact: 'يۇقىرى رايوندا ئۆسىدۇ' }
      ],
      sounds: ['🌬️ شامال ئاۋازى', '🏔️ تاغ گۈرۈلدىشى', '❄️ قار چاققىنى', '🌧️ يامغۇر چاققىنى'],
      funFacts: [
        'تاغلار يەر شارىنىڭ %24 نى ئىگىلەيدۇ',
        'دۇنيادىكى ئەڭ ئېگىز تاغ ھىمالايا',
        'تاغلار دۇنيادىكى ئەڭ ياش قۇرۇقلۇق',
        'تاغلار سۇنىڭ %80 نى ساقلايدۇ'
      ]
    },
    river: {
      name: 'دەريا',
      emoji: '🚢',
      color: 'from-blue-400 to-teal-400',
      description: 'سۇنىڭ ئېقىش يولى ۋە ھايات',
      animals: [
        { name: 'قۇيرۇق بېلىق', emoji: '🐟', sound: '...', diet: 'كىچىك ھايۋانلار', fact: 'سۇدا ياشايدۇ' },
        { name: 'دەريا قۇرتۇمى', emoji: '🦦', sound: 'باغ-باغ', diet: 'بېلىق', fact: 'سۇدا ياخشى ئۇزىدۇ' },
        { name: 'دەريا قۇشى', emoji: '🦆', sound: 'قاق-قاق', diet: 'بېلىق، ھەشەراتلار', fact: 'سۇدا ئۇزىدۇ' },
        { name: 'سۇ يىلانى', emoji: '🐢', sound: '...', diet: 'بېلىق', fact: 'قۇرۇقلۇقتا ۋە سۇدا ياشايدۇ' },
        { name: 'دەريا قۇشى', emoji: '🕊️', sound: 'ئۇۇۇ', diet: 'بېلىق', fact: 'ئۇزۇن مۇساپىلەرگە ئۇچالايدۇ' },
        { name: 'دەريا يىلانى', emoji: '🐊', sound: 'ھۈررر', diet: 'گۆش', fact: 'سۇدا ياشايدۇ' }
      ],
      plants: [
        { name: 'دەريا گۈلى', emoji: '🌸', type: 'سۇ گۈلى', age: 'بىر يىلدا', fact: 'سۇدا ئۆسىدۇ' },
        { name: 'دەريا ئوتى', emoji: '🌿', type: 'سۇ گىياھى', age: 'بىر يىلدا', fact: 'سۇدا ئۆسىدۇ' },
        { name: 'دەريا بۇددىسى', emoji: '🌱', type: 'سۇ ئۆسۈملۈكى', age: 'بىر يىلدا', fact: 'سۇدا ئۆسىدۇ' },
        { name: 'دەريا دەرىخى', emoji: '🌳', type: 'دەريا بويى دەرەخ', age: '100+ يىل', fact: 'سۇ بويىدا ئۆسىدۇ' },
        { name: 'دەريا يۆسۈنى', emoji: '🌾', type: 'سۇ گىياھى', age: 'بىر يىلدا', fact: 'سۇدا ئۆسىدۇ' },
        { name: 'دەريا كۆكى', emoji: '🌴', type: 'سۇ ئۆسۈملۈكى', age: 'بىر يىلدا', fact: 'سۇدا ئۆسىدۇ' }
      ],
      sounds: ['💧 سۇ ئېقىشى', '🌊 دولقۇن', '🐟 بېلىق ئاتقىنى', '🌬️ شامال ئاۋازى'],
      funFacts: [
        'دەريالار يەر شارىنىڭ %1 نى ئىگىلەيدۇ',
        'دۇنيادىكى ئەڭ ئۇزۇن دەريا نىل دەرياسى',
        'دەريالار ئىنسانلارنىڭ ئەڭ مۇھىم سۇ مەنبەسى',
        'دەريالار ھەر خىل ھايۋانلارنىڭ ھايات مەنبەسى'
      ]
    }
  };

  const seasons = {
    spring: {
      name: 'بەھار',
      emoji: '🌸',
      color: 'from-pink-100 to-purple-100',
      temperature: '15-25°C',
      description: 'يېڭى ھايات ۋە چېچەكلەر',
      changes: [
        'چېچەكلەر ئېچىلىدۇ',
        'ھايۋانلار قىش ئۇخلىشىدىن ئويغىنىدۇ',
        'يېڭى ئۆسۈملۈكلەر ئۆسىدۇ',
        'ھەشەراتلار قايتىدۇ'
      ],
      animals: ['🐇', '🐦', '🦋', '🐝'],
      plants: ['🌸', '🌷', '🌼', '🌱']
    },
    summer: {
      name: 'ياز',
      emoji: '☀️',
      color: 'from-yellow-100 to-orange-100',
      temperature: '25-40°C',
      description: 'ئىسسىق ۋە كۈنلۈك',
      changes: [
        'ھاۋا ئىسسىق بولىدۇ',
        'مېۋىلەر پىشىدۇ',
        'ھايۋانلار سۇ ئىزدەيدۇ',
        'ئۆسۈملۈكلەر تېز ئۆسىدۇ'
      ],
      animals: ['🦗', '🐞', '🦎', '🐸'],
      plants: ['🌻', '🍉', '🍑', '🌿']
    },
    autumn: {
      name: 'كۈز',
      emoji: '🍂',
      color: 'from-orange-100 to-red-100',
      temperature: '10-20°C',
      description: 'ياپراقلار سارغىيىش ۋە مېۋە پىشىش',
      changes: [
        'ياپراقلار سارغىيىدۇ',
        'مېۋىلەر پىشىدۇ',
        'ھايۋانلار قىش ئازىقى توپلايدۇ',
        'ھاۋا سەلبىي بولىدۇ'
      ],
      animals: ['🐿️', '🦔', '🦊', '🦉'],
      plants: ['🍂', '🍎', '🍇', '🌰']
    },
    winter: {
      name: 'قىش',
      emoji: '❄️',
      color: 'from-blue-100 to-cyan-100',
      temperature: '-10-10°C',
      description: 'سۇغۇق ۋە قارلؽق',
      changes: [
        'قار ياغىدۇ',
        'بەزى ھايۋانلار قىش ئۇخلاشقا كىرىدۇ',
        'ئۆسۈملۈكلەر ئۆلۈشىدۇ',
        'ھاۋا سۇغۇق بولىدۇ'
      ],
      animals: ['🐻‍❄️', '🐧', '🦊', '🦌'],
      plants: ['❄️', '🧊', '🌲', '🍄']
    }
  };

  const games = {
    animalQuiz: {
      name: 'ھايۋانلارنى تونۇش',
      description: 'ھايۋانلارنى ئۇلارنىڭ ئاۋازى ۋە ئالاھىدىلىكى بىلەن تونۇڭ',
      emoji: '🎯',
      color: 'from-purple-400 to-pink-400'
    },
    plantLife: {
      name: 'ئۆسۈملۈكلەرنىڭ ھەيات دەۋرى',
      description: 'ئۆسۈملۈكلەرنىڭ قانداق ئۆسىدىغانلىقىنى كۆرۈڭ',
      emoji: '🌱',
      color: 'from-green-400 to-emerald-400'
    },
    conservation: {
      name: 'تەبىئەتنى قوغداش',
      description: 'تەبىئەتنى قانداق قوغداش كېرەكلىكىنى ئۆگىنىڭ',
      emoji: '🛡️',
      color: 'from-blue-400 to-cyan-400'
    },
    soundMatch: {
      name: 'تەبىئەت ئاۋازلىرى',
      description: 'ھايۋانلار ۋە تەبىئەت ئاۋازلىرىنى تېپىڭ',
      emoji: '🎵',
      color: 'from-yellow-400 to-orange-400'
    }
  };

  const conservationTips = [
    { action: '🗑️ زىيانلىق ئاتقۇ', description: 'تاشقى رايوندىكى زىيانلىق ئاتقۇنى تاشلاڭ', importance: 'ھايۋانلارنىڭ ھاياتىنى قوغدايدۇ' },
    { action: '🌱 ئۆسۈملۈك ئۆستۈرۈش', description: 'بىر پارچە ئۆسۈملۈك ئۆستۈرۈڭ', importance: 'ھاۋانى ساپلاشتۇرىدۇ' },
    { action: '💧 سۇ تېجەش', description: 'كېرەكسىز يەردە سۇ تەجەمەڭ', importance: 'سۇ بايلىقىنى قوغدايدۇ' },
    { action: '⚡ ئېنېرگىيە تېجەش', description: 'كېرەكسىز چىراقنى سۆندۈرۈڭ', importance: 'ئېنېرگىيەنى تېجەيدۇ' },
    { action: '♻️ قايتا ئىشلىتىش', description: 'ئىشلەتكەن نەرسىلەرنى قايتا ئىشلىتىڭ', importance: 'بايلاش مەنبەلەرنى قوغدايدۇ' },
    { action: '🚲 ئېكولوگىيىلىك كول', description: 'يېقىنراق يەرگە پىيادە ياكى ۋېلىسىپېتتا بارىڭ', importance: 'ھاۋانى پاكىز ساقلايدۇ' }
  ];

  const startGame = (game) => {
    setGameActive(true);
    setGameType(game);
    
    if (game === 'animalQuiz') {
      const habitatAnimals = habitats[selectedHabitat].animals;
      const randomAnimal = habitatAnimals[Math.floor(Math.random() * habitatAnimals.length)];
      setCurrentAnimal(randomAnimal);
    } else if (game === 'plantLife') {
      setPlantGrowth(0);
      const growInterval = setInterval(() => {
        setPlantGrowth(prev => {
          if (prev >= 100) {
            clearInterval(growInterval);
            setScore(prevScore => prevScore + 50);
            return 100;
          }
          return prev + 10;
        });
      }, 500);
    }
  };

  const handleAnimalGuess = (guess) => {
    if (currentAnimal && guess === currentAnimal.name) {
      setScore(prev => prev + 100);
      if (!discoveredAnimals.includes(currentAnimal.name)) {
        setDiscoveredAnimals([...discoveredAnimals, currentAnimal.name]);
      }
      alert(`🎉 توغرا! ${currentAnimal.name} ${currentAnimal.emoji}`);
    } else {
      alert(`😅 ئەپسۇس! بۇ ${currentAnimal.name} ئىدى`);
    }
    setGameActive(false);
  };

  const plantTree = () => {
    setPlantedTrees(prev => prev + 1);
    setScore(prev => prev + 20);
    setAnimation('planting');
    setTimeout(() => setAnimation(''), 1000);
  };

  const playHabitatSound = () => {
    const sounds = habitats[selectedHabitat].sounds;
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    alert(`🔊 ${randomSound}`);
  };

  return (
    <div className="p-4 md:p-6 min-h-screen bg-gradient-to-br from-green-50 to-emerald-50" dir="rtl">
      
      {/* بېشىدىكى قىسم */}
      <div className="mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <CubeIcon  className="h-12 w-12 text-green-600" />
                <SparklesIcon className="absolute -top-2 -right-2 h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-[UKIJ Tuz] bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  تەبىئەت سەھرىسى
                </h1>
                <p className="text-gray-700 mt-2 font-[UKIJ Nasq] text-lg">
                  ھايۋانلار، ئۆسۈملۈكلەر ۋە مۇھىتنى قوغداش
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-3 rounded-2xl flex items-center gap-3 border border-green-200">
              <div className="relative">
                <TrophyIcon className="h-8 w-8 text-yellow-600" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className="text-sm text-green-800 font-[UKIJ Nasq]">تەبىئەت نۇقتىسى</p>
                <span className="font-bold text-2xl text-green-900">{score}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* تۇرمۇش مۇھىتلىرى بۆلىكى */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-gray-800 flex items-center gap-2">
          <MapIcon className="h-6 w-6 text-green-600" />
          تۇرمۇش مۇھىتلىرى
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {Object.entries(habitats).map(([key, habitat]) => (
            <button
              key={key}
              onClick={() => setSelectedHabitat(key)}
              className={`p-3 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                selectedHabitat === key 
                  ? `bg-gradient-to-br ${habitat.color} text-white scale-105 shadow-lg` 
                  : 'bg-white hover:bg-gray-100 text-gray-700'
              }`}
            >
              <span className="text-3xl mb-2">{habitat.emoji}</span>
              <span className="font-bold text-center text-sm font-[UKIJ Nasq]">{habitat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* تاللانغان تۇرمۇش مۇھىتى تەپسىلاتى */}
      <div className="mb-8">
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-green-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className={`bg-gradient-to-br ${habitats[selectedHabitat].color} p-4 rounded-2xl`}>
                <span className="text-4xl">{habitats[selectedHabitat].emoji}</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-[UKIJ Tuz] text-gray-800">
                  {habitats[selectedHabitat].name}
                </h2>
                <p className="text-gray-600 font-[UKIJ Nasq]">{habitats[selectedHabitat].description}</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={playHabitatSound}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-bold hover:scale-105 transition-transform text-sm"
              >
                ئاۋاز ئاڭلاش
              </button>
              <button 
                onClick={() => startGame('animalQuiz')}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-bold hover:scale-105 transition-transform text-sm"
              >
                ھايۋان تونۇش
              </button>
            </div>
          </div>

          {/* ھايۋانلار */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6 font-[UKIJ Tuz] text-gray-800 flex items-center gap-2">
              <span className="text-2xl">🐾</span>
              ھايۋانلار
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {habitats[selectedHabitat].animals.map((animal, index) => (
                <div key={index} className="bg-gray-50 hover:bg-white p-4 rounded-xl shadow-sm transition-all hover:shadow-md">
                  <div className="text-4xl text-center mb-3">{animal.emoji}</div>
                  <h4 className="font-bold text-center font-[UKIJ Tuz] mb-2">{animal.name}</h4>
                  <div className="text-sm text-gray-600 text-center font-[UKIJ Nasq]">
                    <div className="mb-1">ئاۋازى: {animal.sound}</div>
                    <div className="mb-1">ئازىقى: {animal.diet}</div>
                    <div className="text-xs text-green-600">{animal.fact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ئۆسۈملۈكلەر */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6 font-[UKIJ Tuz] text-gray-800 flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              ئۆسۈملۈكلەر
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {habitats[selectedHabitat].plants.map((plant, index) => (
                <div key={index} className="bg-green-50 hover:bg-white p-4 rounded-xl shadow-sm transition-all hover:shadow-md">
                  <div className="text-4xl text-center mb-3">{plant.emoji}</div>
                  <h4 className="font-bold text-center font-[UKIJ Tuz] mb-2">{plant.name}</h4>
                  <div className="text-sm text-gray-600 text-center font-[UKIJ Nasq]">
                    <div className="mb-1">تىپى: {plant.type}</div>
                    <div className="mb-1">يېشى: {plant.age}</div>
                    <div className="text-xs text-green-600">{plant.fact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* قىزىقارلىق پاكىتلار */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-gray-800 flex items-center gap-2">
              <AcademicCapIcon className="h-6 w-6 text-blue-600" />
              قىزىقارلىق پاكىتلار
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {habitats[selectedHabitat].funFacts.map((fact, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-gray-700 font-[UKIJ Nasq]">✨ {fact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ھايۋان تونۇش ئويۇنى */}
          {gameActive && gameType === 'animalQuiz' && currentAnimal && (
            <div className="mb-8">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                <h3 className="text-2xl font-bold mb-6 font-[UKIJ Tuz] text-center text-purple-800">
                  ھايۋانلارنى تونۇش
                </h3>
                
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{currentAnimal.emoji}</div>
                  <p className="text-gray-700 mb-2 font-[UKIJ Nasq]">ئاۋازى: {currentAnimal.sound}</p>
                  <p className="text-gray-700 mb-4 font-[UKIJ Nasq]">ئازىقى: {currentAnimal.diet}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {habitats[selectedHabitat].animals.map((animal, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnimalGuess(animal.name)}
                        className="p-4 bg-white hover:bg-purple-50 rounded-xl text-center font-[UKIJ Nasq] transition-all duration-300 hover:scale-105 border border-purple-100"
                      >
                        {animal.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ئۆسۈملۈك ئۆسۈش ئويۇنى */}
          {gameActive && gameType === 'plantLife' && (
            <div className="mb-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold mb-6 font-[UKIJ Tuz] text-center text-green-800">
                  ئۆسۈملۈكلەرنىڭ ھەيات دەۋرى
                </h3>
                
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">
                    {plantGrowth < 30 ? '🌱' : plantGrowth < 60 ? '🌿' : plantGrowth < 90 ? '🌳' : '🌸'}
                  </div>
                  <p className="text-gray-700 mb-2 font-[UKIJ Nasq]">ئۆسۈش دەرىجىسى: {plantGrowth}%</p>
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-emerald-400 h-4 rounded-full transition-all duration-300"
                      style={{ width: `${plantGrowth}%` }}
                    ></div>
                  </div>
                  
                  {plantGrowth >= 100 && (
                    <div className="text-green-700 font-bold text-xl mb-4">
                      🎉 ئۆسۈملۈك پىشىپ يەتتى!
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* پاسىل مەزگىللىرى */}
      <div className="mb-8">
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 shadow-lg border border-yellow-200">
          <h3 className="text-xl font-bold mb-6 font-[UKIJ Tuz] text-gray-800 flex items-center gap-2">
            <CloudIcon className="h-6 w-6 text-yellow-600" />
            پاسىل مەزگىللىرى
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {Object.entries(seasons).map(([key, season]) => (
              <button
                key={key}
                onClick={() => setCurrentSeason(key)}
                className={`${season.color} p-4 rounded-xl text-center transition-all hover:scale-105 ${
                  currentSeason === key ? 'ring-4 ring-opacity-50 ring-yellow-300' : ''
                }`}
              >
                <div className="text-4xl mb-2">{season.emoji}</div>
                <p className="font-bold text-gray-800 font-[UKIJ Tuz]">{season.name}</p>
                <p className="text-sm text-gray-600 font-[UKIJ Nasq]">{season.temperature}</p>
              </button>
            ))}
          </div>

          {/* پاسىل تەپسىلاتى */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h4 className="text-xl font-bold font-[UKIJ Tuz] text-gray-800">{seasons[currentSeason].name}</h4>
                <p className="text-gray-600 font-[UKIJ Nasq]">{seasons[currentSeason].description}</p>
              </div>
              <div className="text-5xl">{seasons[currentSeason].emoji}</div>
            </div>
            
            <div className="mb-6">
              <h5 className="font-bold mb-3 font-[UKIJ Tuz] text-gray-700">ئۆزگىرىشلەر:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {seasons[currentSeason].changes.map((change, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-[UKIJ Nasq]">{change}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <div>
                <h5 className="font-bold mb-2 font-[UKIJ Tuz] text-gray-700">ھايۋانلار:</h5>
                <div className="flex gap-2 text-2xl">
                  {seasons[currentSeason].animals.map((animal, index) => (
                    <span key={index}>{animal}</span>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="font-bold mb-2 font-[UKIJ Tuz] text-gray-700">ئۆسۈملۈكلەر:</h5>
                <div className="flex gap-2 text-2xl">
                  {seasons[currentSeason].plants.map((plant, index) => (
                    <span key={index}>{plant}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* تەبىئەتنى قوغداش ئويۇنى */}
      <div className="mb-8">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 shadow-lg border border-red-200">
          <h3 className="text-xl font-bold mb-6 font-[UKIJ Tuz] text-gray-800 flex items-center gap-2">
            <ShieldCheckIcon className="h-6 w-6 text-red-600" />
            تەبىئەتنى قوغداش
          </h3>
          
          <div className="mb-6">
            <p className="text-center text-gray-700 mb-6 font-[UKIJ Nasq]">
              تەبىئەتنى قانداق قوغداش كېرەكلىكىنى ئۆگىنىڭ
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
              {conservationTips.map((tip, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-2">{tip.action}</div>
                  <h4 className="font-bold text-gray-800 mb-1">{tip.description}</h4>
                  <p className="text-xs text-gray-600 font-[UKIJ Nasq]">{tip.importance}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-4 bg-green-100 px-6 py-3 rounded-full">
                <span className="text-2xl">🌳</span>
                <span className="font-bold text-green-800">سىز {plantedTrees} دەرەخ ئۆستۈردىڭىز!</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                onClick={plantTree}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <span className="text-xl">🌱</span>
                دەرەخ ئۆستۈرۈش
              </button>
              
              <button 
                onClick={() => setShowConservation(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-bold hover:scale-105 transition-transform"
              >
                تەبىئەت قوغدىغۇچى بولۇش
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* تەبىئەت قوغداش تەكلىپلىرى */}
      {showConservation && (
        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-300">
            <h3 className="text-2xl font-bold mb-6 font-[UKIJ Tuz] text-center text-green-800">
              تەبىئەت قوغدىغۇچى بولۇش ئۈچۈن
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="text-xl">1.</div>
                <div>
                  <h4 className="font-bold font-[UKIJ Tuz] text-gray-800">ئۆسۈملۈكلەرنى ئۆستۈرۈڭ</h4>
                  <p className="text-gray-700 font-[UKIJ Nasq]">ھەر بىر ئۆسۈملۈك ھاۋانى ساپلاشتۇرىدۇ ۋە ھايۋانلارغا ئۇرۇن-تۇرۇن بېرىدۇ</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-xl">2.</div>
                <div>
                  <h4 className="font-bold font-[UKIJ Tuz] text-gray-800">سۇنى تېجەڭ</h4>
                  <p className="text-gray-700 font-[UKIJ Nasq]">سۇ بايلىقى چەكلىك، كېرەكسىز يەردە سۇ تەجەمەڭ</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-xl">3.</div>
                <div>
                  <h4 className="font-bold font-[UKIJ Tuz] text-gray-800">زىيانلىق ئاتقۇ تاشلىماڭ</h4>
                  <p className="text-gray-700 font-[UKIJ Nasq]">زىيانلىق ئاتقۇ ھايۋانلارغا زىيان يەتكۈزۈپ، تەبىئەتنى كىرلەندۈرىدۇ</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-xl">4.</div>
                <div>
                  <h4 className="font-bold font-[UKIJ Tuz] text-gray-800">تەبىئەتنى تونۇشتۇرۇڭ</h4>
                  <p className="text-gray-700 font-[UKIJ Nasq]">باشقىلارغا تەبىئەتنىڭ ئەھمىيىتىنى چۈشەندۈرۈڭ</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={() => setShowConservation(false)}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold hover:scale-105 transition-transform"
              >
                تاماملا
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ئويۇنلار */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-6 font-[UKIJ Tuz] text-gray-800">تەبىئەت ئويۇنلىرى</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(games).map(([key, game]) => (
            <button
              key={key}
              onClick={() => startGame(key)}
              className={`bg-gradient-to-br ${game.color} p-6 rounded-xl text-white text-center hover:scale-105 transition-transform`}
            >
              <div className="text-4xl mb-3">{game.emoji}</div>
              <h3 className="font-bold text-lg font-[UKIJ Tuz] mb-2">{game.name}</h3>
              <p className="text-sm opacity-90 font-[UKIJ Nasq]">{game.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* تاپقان ھايۋانلار ۋە ئۆستۈرگەن دەرەخلەر */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-gray-800 flex items-center gap-2">
              <CameraIcon className="h-6 w-6 text-purple-600" />
              تاپقان ھايۋانلار
            </h3>
            <div className="flex flex-wrap gap-3">
              {discoveredAnimals.length > 0 ? (
                discoveredAnimals.map((animal, index) => (
                  <div key={index} className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full flex items-center gap-2">
                    <span className="text-lg">🐾</span>
                    <span className="font-[UKIJ Nasq]">{animal}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 font-[UKIJ Nasq]">تېخى ھېچقانداق ھايۋان تاپالمىدىڭىز. يۇقىرىدىكى ئويۇنلارنى ئويناپ تېپىڭ!</p>
              )}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 font-[UKIJ Tuz] text-gray-800 flex items-center gap-2">
              <CubeIcon  className="h-6 w-6 text-green-600" />
              ئۆستۈرگەن دەرەخلەر
            </h3>
            <div className="flex items-center justify-between">
              <div className="text-5xl">🌳</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">{plantedTrees}</div>
                <p className="text-sm text-gray-600 font-[UKIJ Nasq]">دەرەخ</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 font-[UKIJ Nasq]">
                  {plantedTrees === 0 
                    ? 'تېخى ھېچقانداق دەرەخ ئۆستۈرمىدىڭىز' 
                    : plantedTrees === 1
                      ? 'بىر دەرەخ ئۆستۈردىڭىز!'
                      : `${plantedTrees} دەرەخ ئۆستۈردىڭىز!`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ئانیماتسىيە كونتىنېرى */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        {animation === 'planting' && (
          <>
            <div className="absolute top-1/4 left-1/4 text-6xl animate-bounce">🌱</div>
            <div className="absolute top-1/3 right-1/4 text-5xl animate-pulse">🌿</div>
            <div className="absolute bottom-1/4 left-1/3 text-4xl animate-spin">🌸</div>
          </>
        )}
      </div>
    </div>
  );
};

export default NatureComponent;